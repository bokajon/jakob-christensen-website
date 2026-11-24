# freeup.ps1 - measure (default) or delete safe junk. Windows PowerShell 5.1.
# Without -Delete nothing is changed.
#   -Full            also show worktrees, root logs and the biggest AppData\Local folders (slower)
#   -Discover        search all fixed drives for cache/temp/log folders (also runs on first start)
#   -Accept <path>   remember a candidate the user approved (written to ..\places.json, nothing deleted)
#   -Ignore <path>   remember a candidate the user rejected (never listed again)
#                    One path per flag and per run: with powershell -File a list of paths arrives as one string.
#   -Delete          clean the rows marked DELETE
# Rules: built-in rows only on C:; accepted places on any drive. Only files older than the row's
# minimum age (accepted places: 24 h), locked files stay, nothing is retried or forced.
# Downloads, worktrees and logs are shown, never touched.
[CmdletBinding(PositionalBinding = $false)]
param([switch]$Delete, [switch]$Full, [switch]$Discover, [string[]]$Accept = @(), [string[]]$Ignore = @())

$ErrorActionPreference = 'SilentlyContinue'
$now = Get-Date
$cfgPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'places.json'

Add-Type -TypeDefinition @'
using System; using System.Collections.Generic; using System.IO;
public static class FastWalk {
  static bool IsUnder(string p, string root) {
    root = root.TrimEnd('\\');
    return p.Equals(root, StringComparison.OrdinalIgnoreCase) || p.StartsWith(root + "\\", StringComparison.OrdinalIgnoreCase);
  }
  // returns {total bytes, bytes older than cutoff, file count, 1 if complete else 0}
  public static long[] Measure(string root, long cutoffTicks, string[] skip, long deadlineTicks) {
    long total = 0, old = 0, files = 0; bool complete = true;
    var stack = new Stack<string>(); stack.Push(root);
    while (stack.Count > 0) {
      if (deadlineTicks > 0 && DateTime.UtcNow.Ticks > deadlineTicks) { complete = false; break; }
      string d = stack.Pop();
      IEnumerable<FileSystemInfo> en;
      try { en = new DirectoryInfo(d).EnumerateFileSystemInfos(); } catch { continue; }
      try {
        foreach (var f in en) {
          if ((f.Attributes & FileAttributes.ReparsePoint) != 0) continue;
          bool skipIt = false;
          foreach (var s in skip) { if (IsUnder(f.FullName, s)) { skipIt = true; break; } }
          if (skipIt) continue;
          if ((f.Attributes & FileAttributes.Directory) != 0) stack.Push(f.FullName);
          else { var fi = (FileInfo)f; long len = fi.Length; total += len; files++; if (fi.LastWriteTime.Ticks < cutoffTicks) old += len; }
        }
      } catch { }
    }
    return new long[] { total, old, files, complete ? 1 : 0 };
  }
}
'@

function Fmt([long]$b) {
    if ($b -ge 1GB) { return ('{0:N2} GB' -f ($b / 1GB)) }
    if ($b -ge 1MB) { return ('{0:N1} MB' -f ($b / 1MB)) }
    return ('{0:N0} KB' -f ($b / 1KB))
}

function Under([string]$p, [string]$root) {
    $p = $p.TrimEnd('\'); $root = $root.TrimEnd('\')
    $p.Equals($root, [StringComparison]::OrdinalIgnoreCase) -or $p.StartsWith($root + '\', [StringComparison]::OrdinalIgnoreCase)
}

function Measure-Dir([string]$Path, [double]$MinAgeHours, [string[]]$SkipUnder = @(), [int]$BudgetSec = 0) {
    $deadline = 0L
    if ($BudgetSec -gt 0) { $deadline = [DateTime]::UtcNow.AddSeconds($BudgetSec).Ticks }
    $r = [FastWalk]::Measure($Path, $now.AddHours(-$MinAgeHours).Ticks, [string[]]$SkipUnder, $deadline)
    [pscustomobject]@{ Total = $r[0]; Old = $r[1]; Files = $r[2]; Complete = ($r[3] -eq 1) }
}

function Clean-Dir([string]$Path, [double]$MinAgeHours, [string[]]$SkipUnder = @()) {
    $cut = $now.AddHours(-$MinAgeHours)
    $freed = 0L; $kept = 0
    Get-ChildItem -LiteralPath $Path -Recurse -Force -File | ForEach-Object {
        if ($_.Attributes -band [IO.FileAttributes]::ReparsePoint) { return }
        foreach ($s in $SkipUnder) { if (Under $_.FullName $s) { return } }
        if ($_.LastWriteTime -ge $cut) { return }
        $len = $_.Length
        try { Remove-Item -LiteralPath $_.FullName -Force -ErrorAction Stop; $freed += $len }
        catch { $kept++ }
    }
    # empty folders older than the limit; non-empty or locked ones just stay
    Get-ChildItem -LiteralPath $Path -Recurse -Force -Directory |
        Sort-Object { $_.FullName.Length } -Descending | ForEach-Object {
        if ($_.Attributes -band [IO.FileAttributes]::ReparsePoint) { return }
        foreach ($s in $SkipUnder) { if (Under $_.FullName $s) { return } }
        if ($_.LastWriteTime -lt $cut -and -not (Get-ChildItem -LiteralPath $_.FullName -Force)) {
            Remove-Item -LiteralPath $_.FullName -Force -ErrorAction SilentlyContinue
        }
    }
    [pscustomobject]@{ Freed = $freed; Kept = $kept }
}

# ---- config: places the user accepted or ignored ----
$cfg = [pscustomobject]@{ accepted = @(); ignored = @() }
$cfgExisted = Test-Path -LiteralPath $cfgPath
if ($cfgExisted) {
    $j = Get-Content -LiteralPath $cfgPath -Raw | ConvertFrom-Json
    if ($j) { $cfg = [pscustomobject]@{ accepted = @($j.accepted); ignored = @($j.ignored) } }
}

if ($Accept.Count -or $Ignore.Count) {
    $changed = $false
    foreach ($p in $Accept) {
        $abs = try { [IO.Path]::GetFullPath($p).TrimEnd('\') } catch { $null }
        if (-not $abs) { "REFUSED (not a valid path, give one path per run): $p"; continue }
        if (-not (Test-Path -LiteralPath $abs -PathType Container)) { "REFUSED (not a folder): $abs"; continue }
        if ($abs.Length -le 3 -or (Test-Path -LiteralPath (Join-Path $abs '.git'))) { "REFUSED (drive root or project folder): $abs"; continue }
        if ($cfg.accepted -notcontains $abs) { $cfg.accepted += $abs }
        "ACCEPTED: $abs"; $changed = $true
    }
    foreach ($p in $Ignore) {
        $abs = try { [IO.Path]::GetFullPath($p).TrimEnd('\') } catch { $null }
        if (-not $abs) { "REFUSED (not a valid path, give one path per run): $p"; continue }
        if ($cfg.ignored -notcontains $abs) { $cfg.ignored += $abs }
        "IGNORED: $abs"; $changed = $true
    }
    if ($changed) {
        $cfg | ConvertTo-Json | Set-Content -LiteralPath $cfgPath -Encoding UTF8
        "Saved to $cfgPath. Nothing was deleted."
    } else { 'Nothing saved. Nothing was deleted.' }
    return
}

# ---- built-in rows ----
$npmCache = (& npm config get cache 2>$null)
$tempDirs = @($env:TEMP, $env:TMP, "$env:LOCALAPPDATA\Temp", "$env:SystemRoot\Temp") |
    Where-Object { $_ } | Select-Object -Unique

# Row: Name, Path, Age (hours), Skip, AnyDrive. Temp\claude gets its own row with 24 h.
$rows = @()
foreach ($t in $tempDirs) {
    $claude = Join-Path $t 'claude'
    $rows += [pscustomobject]@{ Name = "Temp ($t)"; Path = $t; Age = 1; Skip = @($claude); AnyDrive = $false }
    $rows += [pscustomobject]@{ Name = "Temp\claude ($t)"; Path = $claude; Age = 24; Skip = @(); AnyDrive = $false }
}
if ($npmCache) { $rows += [pscustomobject]@{ Name = 'npm cache'; Path = $npmCache; Age = 1; Skip = @(); AnyDrive = $false } }
foreach ($p in @("$env:LOCALAPPDATA\NVIDIA\DXCache", "$env:LOCALAPPDATA\NVIDIA\GLCache",
                 "$env:LOCALAPPDATA\D3DSCache", "$env:ProgramData\NVIDIA Corporation\NV_Cache",
                 "$env:LOCALAPPDATA\CrashDumps", "$env:LOCALAPPDATA\Microsoft\Windows\INetCache")) {
    $rows += [pscustomobject]@{ Name = (Split-Path $p -Leaf) + ' (' + (Split-Path (Split-Path $p) -Leaf) + ')'; Path = $p; Age = 1; Skip = @(); AnyDrive = $false }
}
foreach ($p in $cfg.accepted) {   # accepted places (any drive) unless under a built-in row
    if (-not $p) { continue }
    $covered = $false
    foreach ($r0 in $rows) { if ((Under $p $r0.Path) -and ([IO.Path]::GetPathRoot($r0.Path)).StartsWith('C', [StringComparison]::OrdinalIgnoreCase)) { $covered = $true } }
    if ($covered) { continue }   # already inside a deletable built-in row
    $rows += [pscustomobject]@{ Name = "Accepted ($p)"; Path = $p; Age = 24; Skip = @(); AnyDrive = $true }
}

$sw = [Diagnostics.Stopwatch]::StartNew()
$drive = Get-PSDrive C
"C: free before: $(Fmt $drive.Free) of $(Fmt ($drive.Free + $drive.Used))"
$result = @()
$i = 0
$existing = @($rows | Where-Object { Test-Path -LiteralPath $_.Path })
foreach ($r in $existing) {
    $i++
    $onC = ([IO.Path]::GetPathRoot($r.Path)).StartsWith('C', [StringComparison]::OrdinalIgnoreCase)
    $m = Measure-Dir $r.Path $r.Age $r.Skip
    Write-Host ("[{0}/{1}] {2}: {3} ({4:N0}s)" -f $i, $existing.Count, $r.Name, (Fmt $m.Total), $sw.Elapsed.TotalSeconds)
    if (-not $onC -and -not $r.AnyDrive) {
        $result += [pscustomobject]@{ Item = $r.Name; Where = $r.Path; MinAge = "$($r.Age) h"; Total = Fmt $m.Total; Deletable = '-'; Action = 'SHOW ONLY (not on C:)'; Freed = '' }
        continue
    }
    $action = 'DELETE'
    $freed = ''
    if ($Delete) {
        $c = Clean-Dir $r.Path $r.Age $r.Skip
        $action = "deleted, $($c.Kept) locked/denied kept"
        $freed = Fmt $c.Freed
    }
    $result += [pscustomobject]@{ Item = $r.Name; Where = $r.Path; MinAge = "$($r.Age) h"; Total = Fmt $m.Total; Deletable = (Fmt $m.Old); Action = $action; Freed = $freed }
}
''
$result | Format-Table -AutoSize -Wrap | Out-String -Width 250

# ---- show only, never touched ----
$dl = Join-Path $env:USERPROFILE 'Downloads'
$dm = Measure-Dir $dl 0
"SHOW ONLY  Downloads ($dl): $(Fmt $dm.Total) in $($dm.Files) files"

if ($Full) {
    # worktrees = folders whose .git is a FILE; searched in the root and \Projects of every fixed drive except C:
    $others = @(Get-CimInstance Win32_LogicalDisk -Filter 'DriveType=3' | Where-Object { $_.DeviceID -ne 'C:' } | ForEach-Object { "$($_.DeviceID)\" })
    $wt = @()
    foreach ($base in ($others + ($others | ForEach-Object { $_ + 'Projects' }))) {
        if (-not (Test-Path $base)) { continue }
        Get-ChildItem -LiteralPath $base -Directory -Force | ForEach-Object {
            if (Test-Path -LiteralPath (Join-Path $_.FullName '.git') -PathType Leaf) {
                $wt += [pscustomobject]@{ Folder = $_.FullName; Size = (Measure-Dir $_.FullName 0).Total }
            }
        }
    }
    ''
    "SHOW ONLY  worktrees on other drives: $($wt.Count) folders, $(Fmt (($wt | Measure-Object Size -Sum).Sum))"
    $wt | Sort-Object Size -Descending | Select-Object -First 10 |
        ForEach-Object { '  {0,10}  {1}' -f (Fmt $_.Size), $_.Folder }

    $logs = @($others | ForEach-Object { Get-ChildItem -LiteralPath $_ -Force -File } | Where-Object { $_.Extension -in '.log', '.txt', '.out' })
    "SHOW ONLY  root logs on other drives (.log/.txt/.out): $($logs.Count) files, $(Fmt (($logs | Measure-Object Length -Sum).Sum))"
    $logs | Sort-Object Length -Descending | Select-Object -First 5 |
        ForEach-Object { '  {0,10}  {1}' -f (Fmt $_.Length), $_.FullName }

    ''
    'SHOW ONLY  largest folders in AppData\Local (never touched):'
    Get-ChildItem -LiteralPath $env:LOCALAPPDATA -Directory -Force | ForEach-Object {
        [pscustomobject]@{ Folder = $_.FullName; Size = (Measure-Dir $_.FullName 0).Total }
    } | Sort-Object Size -Descending | Select-Object -First 8 |
        ForEach-Object { '  {0,10}  {1}' -f (Fmt $_.Size), $_.Folder }
}

# ---- discovery: first start (no places.json) or -Discover; breadth-first, 100 s walk + 60 s sizes ----
if ($Discover -or -not $cfgExisted) {
    ''
    'CANDIDATES  folders whose NAME looks like cache/temp/log (content not checked), all fixed drives, depth 4, >= 50 MB.'
    'Suggestions only: nothing is deleted unless the user accepts them.'
    $skipNames = @('.git', 'node_modules', '$RECYCLE.BIN', 'System Volume Information', 'Windows', 'Program Files', 'Program Files (x86)', 'Packages')
    $pattern = '(?i)^\.?[a-z0-9]*cache[s0-9]*$|^(temp|tmp|logs?)$'
    $known = @($rows | ForEach-Object { $_.Path }) + @($cfg.accepted) + @($cfg.ignored) | Where-Object { $_ }
    $walkEnd = [DateTime]::UtcNow.AddSeconds(100)
    $incomplete = $false
    $found = @()
    $q = New-Object System.Collections.Queue
    foreach ($d in (Get-CimInstance Win32_LogicalDisk -Filter 'DriveType=3')) { $q.Enqueue(@("$($d.DeviceID)\", 0)) }
    while ($q.Count) {
        if ([DateTime]::UtcNow -gt $walkEnd) { $incomplete = $true; break }
        $item = $q.Dequeue(); $depth = $item[1]
        $subs = try { [IO.Directory]::GetDirectories($item[0]) } catch { @() }
        foreach ($s in $subs) {
            $name = [IO.Path]::GetFileName($s)
            if ($skipNames -contains $name) { continue }
            if ([IO.File]::GetAttributes($s) -band [IO.FileAttributes]::ReparsePoint) { continue }
            if (Test-Path -LiteralPath (Join-Path $s '.git')) { continue }   # project or worktree
            $skip = $false
            foreach ($k in $known) { if (Under $s $k) { $skip = $true; break } }
            if ($skip) { continue }
            if ($name -match $pattern) { $found += $s; continue }   # do not descend into a match
            if ($depth -lt 3) { $q.Enqueue(@($s, $depth + 1)) }
        }
    }
    $sizeEnd = [DateTime]::UtcNow.AddSeconds(60)
    $cands = @()
    foreach ($f in $found) {
        $left = [int][Math]::Ceiling(($sizeEnd - [DateTime]::UtcNow).TotalSeconds)
        if ($left -le 0) { $cands += [pscustomobject]@{ Folder = $f; Size = -1; Part = $false }; continue }
        $m = Measure-Dir $f 24 @() $left
        if (-not $m.Complete) { $incomplete = $true }
        if ($m.Total -ge 50MB) { $cands += [pscustomobject]@{ Folder = $f; Size = $m.Total; Part = (-not $m.Complete) } }
    }
    if ($cands.Count -eq 0) { 'none found' }
    else {
        $cands | Sort-Object Size -Descending | Select-Object -First 15 | ForEach-Object {
            $sz = if ($_.Size -lt 0) { 'not measured' } elseif ($_.Part) { '>= ' + (Fmt $_.Size) } else { Fmt $_.Size }
            '  {0,14}  {1}' -f $sz, $_.Folder
        }
    }
    if ($incomplete) { 'INCOMPLETE: the time budget ran out, so the list or some sizes are partial. Run with -Discover to search again.' }
    'Decide with -Accept <path> or -Ignore <path>; an accepted place is cleaned like a table row (files older than 24 h only).'
}

''
"Run time: $([int]$sw.Elapsed.TotalSeconds) s"
if ($Delete) {
    $d2 = Get-PSDrive C
    "C: free after: $(Fmt $d2.Free)"
} else {
    'DRY RUN: nothing was changed. Run with -Delete after the user says yes.'
}
