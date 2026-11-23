# Integrates the current branch into the default branch without waiting for a clean main checkout.
# Usage (from a finished branch's worktree, everything committed):
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts/integrate.ps1                (runs in the foreground)
#   ... -Detach          own hidden process that survives the agent session, prints the log path
#   ... -Wait            waits for this branch's detached run, prints the log's end, exit 0 on OK, 1 on FAILED
#   ... -Detach -Wait    both in one call, the usual way for an agent: run it as a background command
# The merge is built and checked in a temporary worktree at the default branch. That branch then moves with
# `git merge --ff-only` only if no merged path is also changed (staged, unstaged or untracked)
# in the main checkout. Other sessions' uncommitted work is never stashed, reset or touched.
# It fails only for what a person must fix: a conflict (the files are named) or a red check. Uncommitted work in the
# main checkout on a path the merge changes is waited for, up to 60 minutes, then it fails and names the files.
#
# Settings, each as a parameter or a key in scripts/integrate.config.json (the parameter wins). Empty means auto.
#   Target                 branch to integrate into. Auto: origin/HEAD, else main, else master, else the branch of the main checkout.
#   CheckCommand           full check, run in the temporary worktree. Default: npm run check
#   InstallCommand         run in the temporary worktree before the check. Auto: npm ci when package-lock.json exists. "none" skips it.
#   RetryCheckCommand      run once if the check fails, to tell a flaky red from a real one (for example the same check with one test worker).
#   MainInstallCommand     run in the main checkout after OK when package-lock.json changed. Auto: npm install --no-save. "none" skips it.
#                          It runs package scripts there, so read the config of a repository you do not know before the first run.
#   DevServerPattern       text in the command line of node processes to stop after OK, only those started inside the branch's own
#                          worktree (for example vite). Empty: stop nothing.
# Commands are PowerShell, run from the temporary worktree, and must exit 0 on success.
# When the merge changes package-lock.json and vite.config.* exists in the main checkout, that file is touched so a running Vite restarts.
# Plain ASCII on purpose: Windows PowerShell 5.1 reads .ps1 files without a UTF-8 BOM as ANSI.
param(
  [switch]$Detach,
  [switch]$Wait,
  [string]$Target = '',
  [string]$CheckCommand = '',
  [string]$InstallCommand = '',
  [string]$RetryCheckCommand = '',
  [string]$MainInstallCommand = '',
  [string]$DevServerPattern = ''
)

# Native git and npm write progress to stderr; with 'Stop' PowerShell 5.1 would turn that into errors.
# Every native call checks $LASTEXITCODE instead.
$ErrorActionPreference = 'Continue'

function Fail($message) {
  Write-Host "FAILED: $message"
  exit 1
}

# Optional config file next to this script. A parameter given on the command line wins over it.
$cfg = $null
$cfgPath = Join-Path $PSScriptRoot 'integrate.config.json'
if (Test-Path $cfgPath) {
  try { $cfg = Get-Content -Raw $cfgPath | ConvertFrom-Json } catch { Fail "scripts/integrate.config.json is not valid JSON: $($_.Exception.Message)" }
}
function Setting($value, $name) {
  if ($value) { return $value }
  if ($cfg -and $cfg.PSObject.Properties.Name -contains $name -and $cfg.$name) { return [string]$cfg.$name }
  return ''
}
$Target = Setting $Target 'target'
$CheckCommand = Setting $CheckCommand 'checkCommand'
$InstallCommand = Setting $InstallCommand 'installCommand'
$RetryCheckCommand = Setting $RetryCheckCommand 'retryCheckCommand'
$MainInstallCommand = Setting $MainInstallCommand 'mainInstallCommand'
$DevServerPattern = Setting $DevServerPattern 'devServerPattern'

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -eq 'HEAD') { Fail 'HEAD is detached, check out a feature branch first' }
$commonDir = (git rev-parse --path-format=absolute --git-common-dir).Trim()
# Log and pid file are named after the branch plus a short hash of its exact name, so "a/b" and "a-b" never share a log.
$safeName = $branch -replace '[^A-Za-z0-9._-]', '-'
$md5 = [System.Security.Cryptography.MD5]::Create()
$hash = (($md5.ComputeHash([Text.Encoding]::UTF8.GetBytes($branch)) | ForEach-Object { $_.ToString('x2') }) -join '').Substring(0, 8)
$log = Join-Path $commonDir "integrate-$safeName-$hash.log"
$pidFile = Join-Path $commonDir "integrate-$safeName-$hash.pid"

# Splits NUL-separated git output (-z) so odd file names (umlauts, quotes) arrive exactly as stored.
function Split-Z($text) {
  if (-not $text) { return @() }
  return @((@($text) -join "`n") -split "`0" | Where-Object { $_ -ne '' })
}

# The result is the one line that starts with "OK: " or "FAILED: "; it ends in a sentence, not in the word OK.
function Wait-Result {
  # Long enough for two 60-minute waits on the main checkout plus the checks.
  $start = Get-Date
  $deadline = $start.AddMinutes(180)
  while ((Get-Date) -lt $deadline) {
    $result = $null
    if (Test-Path $log) {
      $result = Select-String -Path $log -Pattern '^(OK|FAILED): ' -ErrorAction SilentlyContinue | Select-Object -Last 1
    }
    if ($result) {
      Get-Content $log -Tail 8
      if ($result.Line -like 'OK: *') { exit 0 } else { exit 1 }
    }
    # The detached process creates the log a moment after it starts, so the first minute is not an error.
    $worker = $null
    if (Test-Path $pidFile) {
      $workerId = [int](Get-Content $pidFile -ErrorAction SilentlyContinue | Select-Object -First 1)
      if ($workerId) { $worker = Get-Process -Id $workerId -ErrorAction SilentlyContinue }
    }
    if (-not $worker -and ((Get-Date) - $start).TotalSeconds -gt 60) {
      if (Test-Path $log) { Write-Host "FAILED: the detached run ended without a result line, see $log" }
      else { Write-Host "FAILED: no detached run is going and there is no log $log. Start the script again with -Detach." }
      exit 1
    }
    Start-Sleep -Seconds 10
  }
  Write-Host "FAILED: no result in $log after 180 minutes. Is the detached run still going?"
  exit 1
}

if ($Wait -and -not $Detach) { Wait-Result }
if (git status --porcelain) { Fail 'this branch has uncommitted changes, commit first' }

# Worktree list: the first entry is the main checkout. Branch -> path for the others.
$main = $null
$path = $null
$firstPath = $null
$firstBranch = $null
$byBranch = @{}
foreach ($line in (git worktree list --porcelain)) {
  if ($line -like 'worktree *') { $path = $line.Substring(9); if (-not $firstPath) { $firstPath = $path } }
  if ($line -like 'branch refs/heads/*') {
    $b = $line.Substring(18)
    $byBranch[$b] = $path
    if ($path -eq $firstPath -and -not $firstBranch) { $firstBranch = $b }
  }
}

if (-not $Target) {
  $origin = (git symbolic-ref --short refs/remotes/origin/HEAD 2>$null)
  if ($LASTEXITCODE -eq 0 -and $origin) { $Target = ([string]$origin).Trim() -replace '^origin/', '' }
}
if (-not $Target) {
  foreach ($candidate in 'main', 'master') {
    git show-ref --verify --quiet "refs/heads/$candidate"
    if ($LASTEXITCODE -eq 0) { $Target = $candidate; break }
  }
}
if (-not $Target) { $Target = $firstBranch }
if (-not $Target) { Fail 'could not work out the default branch, pass -Target or set "target" in scripts/integrate.config.json' }
git show-ref --verify --quiet "refs/heads/$Target"
if ($LASTEXITCODE -ne 0) { Fail "branch $Target does not exist in this repository" }
if ($branch -eq $Target) { Fail "run this on a feature branch, not on $Target" }

# The main checkout is the worktree that has the target branch checked out.
$main = $byBranch[$Target]
if (-not $main) { Fail "no worktree has $Target checked out" }

if (-not $CheckCommand) {
  $CheckCommand = 'npm run check'
  if (-not (Test-Path (Join-Path (git rev-parse --show-toplevel).Trim() 'package.json'))) {
    Fail 'no check command: this repository has no package.json. Pass -CheckCommand or set "checkCommand" in scripts/integrate.config.json'
  }
}

if ($Detach) {
  # An old log's result line would end a -Wait at once.
  Remove-Item $log, $pidFile -ErrorAction SilentlyContinue
  $inner = "& '$PSCommandPath'"
  foreach ($pair in @(@('Target', $Target), @('CheckCommand', $CheckCommand), @('InstallCommand', $InstallCommand), @('RetryCheckCommand', $RetryCheckCommand), @('MainInstallCommand', $MainInstallCommand), @('DevServerPattern', $DevServerPattern))) {
    if ($pair[1]) { $inner += " -$($pair[0]) '" + ($pair[1] -replace "'", "''") + "'" }
  }
  $inner += " *> '$log'"
  $worker = Start-Process powershell -PassThru -WindowStyle Hidden -WorkingDirectory (Get-Location).Path -ArgumentList '-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', $inner
  Set-Content -Path $pidFile -Value $worker.Id
  Write-Host "Started in the background. Log (result line starts with OK: or FAILED:): $log"
  if ($Wait) { Wait-Result }
  Write-Host "To wait for it: run this script again with -Wait"
  exit 0
}

# Runs a PowerShell command string and returns its exit code as an int. Non-zero when a native call exited non-zero,
# when the command threw, or when it wrote a PowerShell error (checked through -ErrorVariable, because $? would
# describe Out-Host here). The command's output goes to the host so it never becomes part of the return value.
function Run-Command($command) {
  $global:LASTEXITCODE = 0
  $ok = $true
  try {
    Invoke-Expression $command -ErrorVariable commandErrors | Out-Host
    if (@($commandErrors).Count -gt 0) { $ok = $false }
  } catch {
    Write-Host "error: $($_.Exception.Message)"
    return 1
  }
  $code = [int]$LASTEXITCODE
  if ($code -eq 0 -and -not $ok) { $code = 1 }
  return [int]$code
}

# Every path the main checkout has changed, both sides of a rename or copy included.
function Main-Dirty-Paths {
  $paths = @()
  $records = Split-Z (git -C $main status --porcelain=v1 -uall -z)
  $i = 0
  while ($i -lt $records.Count) {
    $paths += $records[$i].Substring(3)
    if ($records[$i].Substring(0, 2) -match '[RC]') { $i++; if ($i -lt $records.Count) { $paths += $records[$i] } }
    $i++
  }
  return $paths
}

# Uncommitted work in the main checkout on a path the merge changes would block the fast-forward.
# It usually belongs to a session that commits soon, so wait for it instead of failing at once.
function Wait-No-Overlap($changedPaths) {
  $deadline = (Get-Date).AddMinutes(60)
  $said = $false
  while ($true) {
    $dirty = Main-Dirty-Paths
    $overlap = @($changedPaths | Where-Object { $dirty -contains $_ })
    if ($overlap.Count -eq 0) { return }
    if ((Get-Date) -ge $deadline) {
      Fail ("the main checkout still has uncommitted work in " + ($overlap -join ', ') + " after 60 minutes. Run again once that work is committed.")
    }
    if (-not $said) {
      Write-Host ("The main checkout has uncommitted work in " + ($overlap -join ', ') + ", waiting up to 60 minutes for it.")
      $said = $true
    }
    Start-Sleep -Seconds 30
  }
}

# Wait before taking the lock, so a wait here never holds up other integrations.
Wait-No-Overlap (Split-Z (git diff --name-only -z "$Target...$branch"))

# One integration at a time across all worktrees. The OS drops the lock when this process ends, even on a crash.
$lockPath = Join-Path $commonDir 'integrate.lock'
$lock = $null
function Get-Lock {
  $said = $false
  while (-not $script:lock) {
    try { $script:lock = [System.IO.File]::Open($lockPath, 'OpenOrCreate', 'ReadWrite', 'None') }
    catch {
      if (-not $said) { Write-Host 'Another integration is running, waiting for it.'; $said = $true }
      Start-Sleep -Seconds 15
    }
  }
}
Get-Lock

# Optional: after OK the branch's own dev servers are useless and can hold a lot of memory, so stop node processes whose command
# line contains the pattern and that run from inside that worktree. Never the main checkout, never anything outside.
# Runs after the OK line, so a failure here is only a note.
$ownWorktree = (git rev-parse --show-toplevel).Trim() -replace '/', '\'
function Stop-WorktreeDevServers {
  if (-not $DevServerPattern) { return }
  try {
    $root = $ownWorktree.TrimEnd('\')
    if ($root -ieq $main.Replace('/', '\').TrimEnd('\')) { Write-Host 'Dev servers: this is the main checkout, none stopped.'; return }
    $prefix = $root + '\'
    $stopped = @()
    # Never stop a process this script itself runs under (for example an npm or node parent that started it).
    $ancestors = @()
    $current = $PID
    for ($depth = 0; $depth -lt 10 -and $current; $depth++) {
      $ancestors += $current
      $parent = Get-CimInstance Win32_Process -Filter "ProcessId = $current" -ErrorAction SilentlyContinue
      $current = if ($parent) { [int]$parent.ParentProcessId } else { 0 }
    }
    foreach ($p in (Get-CimInstance Win32_Process -Filter "Name = 'node.exe'")) {
      if ($ancestors -contains [int]$p.ProcessId) { continue }
      $cmd = [string]$p.CommandLine
      if ($cmd.IndexOf($DevServerPattern, [StringComparison]::OrdinalIgnoreCase) -lt 0) { continue }
      $cmdNorm = $cmd.Replace('/', '\')
      if ($cmdNorm.IndexOf($prefix, [StringComparison]::OrdinalIgnoreCase) -lt 0) { continue }
      try { Stop-Process -Id $p.ProcessId -Force -ErrorAction Stop; $stopped += $p.ProcessId } catch { }
    }
    if ($stopped.Count -gt 0) { Write-Host ("Dev servers: stopped PIDs " + ($stopped -join ', ') + " from $root") }
    else { Write-Host 'Dev servers: no dev servers from this worktree' }
  } catch {
    Write-Host "Dev servers: could not check ($($_.Exception.Message))"
  }
}

$tmp = Join-Path $env:TEMP ("integrate-" + [guid]::NewGuid())
try {
  for ($attempt = 1; $attempt -le 5; $attempt++) {
    $startTarget = (git rev-parse "refs/heads/$Target").Trim()
    git worktree add --detach $tmp $startTarget --quiet
    if ($LASTEXITCODE -ne 0) { Fail 'could not create the temporary worktree' }

    Push-Location $tmp
    git merge --no-edit -m "Merge $branch into $Target" $branch
    if ($LASTEXITCODE -ne 0) {
      $conflicts = @(git diff --name-only --diff-filter=U)
      git merge --abort
      Pop-Location
      if ($conflicts.Count -gt 0) {
        Fail ("merging $branch into $Target conflicts in " + ($conflicts -join ', ') + ". Merge $Target into the branch, resolve there, then run again.")
      }
      Fail "git merge of $branch into $Target failed without a conflict, see the log above (git user.name and user.email set?)."
    }
    $install = $InstallCommand
    if (-not $install -and (Test-Path (Join-Path $tmp 'package-lock.json'))) { $install = 'npm ci --silent --no-audit --no-fund' }
    if ($install -and $install -ne 'none') {
      if ([int](Run-Command $install) -ne 0) { Pop-Location; Fail "install failed: $install" }
    }
    if ([int](Run-Command $CheckCommand) -ne 0) {
      $settled = $false
      if ($RetryCheckCommand) {
        # A flaky red (for example test workers dying of memory while other sessions run checks) settles on a second try.
        Write-Host "$CheckCommand failed, running the retry command."
        $settled = [int](Run-Command $RetryCheckCommand) -eq 0
      }
      if (-not $settled) { Pop-Location; Fail "$CheckCommand is red. $Target is unchanged, see the log above." }
    }
    $tested = (git rev-parse HEAD).Trim()
    $changed = Split-Z (git diff --name-only -z $startTarget $tested)
    Pop-Location
    git worktree remove --force $tmp

    # A commit to the target during the check makes the tested result stale: merge and check again.
    if ((git rev-parse "refs/heads/$Target").Trim() -ne $startTarget) {
      Write-Host "$Target moved during the check, merging and checking again."
      continue
    }

    # Give the lock back while waiting for the main checkout's own work, so the wait never holds up other integrations.
    if (@(Main-Dirty-Paths | Where-Object { $changed -contains $_ }).Count -gt 0) {
      $lock.Dispose(); $lock = $null
      Wait-No-Overlap $changed
      Get-Lock
    }
    if ((git rev-parse "refs/heads/$Target").Trim() -ne $startTarget) {
      Write-Host "$Target moved while waiting, merging and checking again."
      continue
    }

    # Git refuses on its own if the fast-forward would overwrite any local change.
    git -C $main merge --ff-only $tested
    if ($LASTEXITCODE -ne 0) { Fail "fast-forward into $Target was refused. $Target and the main checkout are unchanged." }

    # Without this the main checkout's dev server shows a failed import until someone installs the new package there.
    # --no-save keeps package.json and the lock as the target has them. Touching vite.config.* makes a running Vite
    # restart itself, which drops the failed lookups it cached. The target is already in, so a failure here is a note, not FAILED.
    $packages = ''
    if ($changed -contains 'package-lock.json' -and $MainInstallCommand -ne 'none') {
      $mainInstall = $MainInstallCommand
      if (-not $mainInstall) { $mainInstall = 'npm install --no-save --prefer-offline --no-audit --no-fund' }
      Push-Location $main
      $installed = [int](Run-Command $mainInstall) -eq 0
      Pop-Location
      if ($installed) {
        foreach ($config in (Get-ChildItem -Path $main -Filter 'vite.config.*' -File -ErrorAction SilentlyContinue)) { $config.LastWriteTime = Get-Date }
        $packages = ' The main checkout got the new packages.'
      } else {
        $packages = ' The install in the main checkout did not succeed, run it there by hand.'
      }
    }
    Write-Host "OK: $branch is in $Target at $($tested.Substring(0,7)), $($changed.Count) files. The main checkout's own changes were left as they were.$packages"
    Stop-WorktreeDevServers
    exit 0
  }
  Fail "$Target kept moving during five attempts. Run again."
}
finally {
  if (Test-Path $tmp) { git worktree remove --force $tmp }
  if ($lock) { $lock.Dispose() }
}
