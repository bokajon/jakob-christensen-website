# sweep.ps1 - find and remove disk-space junk on Windows. Windows PowerShell 5.1.
# Without -Delete nothing is changed. Two kinds of work:
#  1. Rebuildable junk (caches, temp files): the table rows. Deleted after one yes.
#  2. User files (duplicates, archives next to their extracted folder, big files): found with -Find in folders
#     the user named with -Root, written to candidates.json with numbers, removed only by number with -Remove.
#
#   -Full            also show worktrees, root logs and the biggest AppData\Local folders (slower)
#   -Discover        search all fixed drives for cache/temp/log folders (also runs on first start)
#   -Accept <path>   remember a folder the user approved as cleanable junk (written to ..\places.json)
#   -Ignore <path>   remember a candidate folder the user rejected (never listed again)
#   -Keep <path>     protect a file or folder: never offered, never removed (written to ..\places.json)
#   -Root <path>     add a folder to scan with -Find (written to ..\places.json, nothing is scanned or deleted)
#                    One path per flag and per run: with powershell -File a list of paths arrives as one string.
#   (every dry run also lists the biggest folders of each fixed drive, report only: -TopN rows (default 12),
#    -TopSec seconds per drive (default 90); rows marked '>=' are lower bounds when the time ran out)
#   -Find            scan the -Root folders for duplicates, archives next to a same-named folder and big files;
#                    numbered list goes to ..\candidates.json. Options: -MinMB (default 50), -LargeMB (default 500),
#                    -BudgetSec (default 900)
#   -Remove <ids>    remove numbered candidates: "1,3,5-8" or "all" (all = duplicates and verified archives that do not
#                    look like part of an installed program; big files and unverified ones only by number).
#                    -Except "3,7" takes numbers out of "all". Dry run unless -Delete.
#   -EmptyBin <X>    empty the recycle bin of drive X (permanent). Dry run unless -Delete.
#   -Delete          do it: clean the table rows / remove the numbers / empty the bin
# Rules: only files older than the row's minimum age, locked files stay, reparse points are skipped,
# nothing is retried or forced. User files go only by number after the user's yes and are re-checked
# (still there, same size and time, not on the keep list, inside a -Root folder) right before removal.
[CmdletBinding(PositionalBinding = $false)]
param(
    [switch]$Delete, [switch]$Full, [switch]$Discover, [switch]$Find,
    [string[]]$Accept = @(), [string[]]$Ignore = @(),
    [string]$Keep = '', [string]$Root = '', [string]$Remove = '', [string]$Except = '', [string]$EmptyBin = '',
    [int]$MinMB = 50, [int]$LargeMB = 500, [int]$BudgetSec = 900, [int]$TopN = 12, [int]$TopSec = 90
)

$ErrorActionPreference = 'SilentlyContinue'
$now = Get-Date
$skillRoot = Split-Path $PSScriptRoot -Parent
$cfgPath = Join-Path $skillRoot 'places.json'
$candPath = Join-Path $skillRoot 'candidates.json'

Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -TypeDefinition @'
using System; using System.Collections.Generic; using System.IO; using System.Security.Cryptography;
public class ListResult { public List<string[]> Files = new List<string[]>(); public bool Complete = true; }
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
  // lists files >= minBytes as {path, size, lastWriteUtcTicks}; skips reparse points, project folders (.git),
  // folders named in skipNames and anything under skipUnder
  public static ListResult List(string root, long minBytes, string[] skipNames, string[] skipUnder, long deadlineTicks) {
    var res = new ListResult();
    var stack = new Stack<string>(); stack.Push(root);
    while (stack.Count > 0) {
      if (deadlineTicks > 0 && DateTime.UtcNow.Ticks > deadlineTicks) { res.Complete = false; break; }
      string d = stack.Pop();
      try { if (Directory.Exists(Path.Combine(d, ".git")) || File.Exists(Path.Combine(d, ".git"))) continue; } catch { }
      IEnumerable<FileSystemInfo> en;
      try { en = new DirectoryInfo(d).EnumerateFileSystemInfos(); } catch { continue; }
      try {
        foreach (var f in en) {
          if ((f.Attributes & FileAttributes.ReparsePoint) != 0) continue;
          bool skipIt = false;
          foreach (var s in skipUnder) { if (IsUnder(f.FullName, s)) { skipIt = true; break; } }
          if (skipIt) continue;
          if ((f.Attributes & FileAttributes.Directory) != 0) {
            bool nameSkip = false;
            foreach (var n in skipNames) { if (f.Name.Equals(n, StringComparison.OrdinalIgnoreCase)) { nameSkip = true; break; } }
            if (!nameSkip) stack.Push(f.FullName);
          } else {
            var fi = (FileInfo)f;
            if (fi.Length >= minBytes) res.Files.Add(new string[] { fi.FullName, fi.Length.ToString(), fi.LastWriteTimeUtc.Ticks.ToString() });
          }
        }
      } catch { }
    }
    return res;
  }
}
public static class Hasher {
  static int ReadFull(Stream s, byte[] buf) { int t = 0; while (t < buf.Length) { int n = s.Read(buf, t, buf.Length - t); if (n <= 0) break; t += n; } return t; }
  // partial = first and last MB (a cheap filter), otherwise the whole file. null = file could not be read completely.
  public static string Hash(string path, bool partial) {
    try {
      using (var fs = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite, 1 << 20))
      using (var sha = SHA256.Create()) {
        if (!partial) return BitConverter.ToString(sha.ComputeHash(fs));
        long len = fs.Length; byte[] buf = new byte[1 << 20];
        int n = ReadFull(fs, buf); sha.TransformBlock(buf, 0, n, null, 0);
        if (len > 2L * buf.Length) { fs.Seek(len - buf.Length, SeekOrigin.Begin); n = ReadFull(fs, buf); sha.TransformBlock(buf, 0, n, null, 0); }
        sha.TransformFinalBlock(new byte[0], 0, 0);
        return BitConverter.ToString(sha.Hash);
      }
    } catch (IOException) { return null; } catch (UnauthorizedAccessException) { return null; }
  }
}
'@

function Fmt([long]$b) {
    if ($b -ge 1GB) { return ('{0:N2} GB' -f ($b / 1GB)) }
    if ($b -ge 1MB) { return ('{0:N1} MB' -f ($b / 1MB)) }
    return ('{0:N0} KB' -f ($b / 1KB))
}

function Under([string]$p, [string]$base) {
    $p = $p.TrimEnd('\'); $base = $base.TrimEnd('\')
    $p.Equals($base, [StringComparison]::OrdinalIgnoreCase) -or $p.StartsWith($base + '\', [StringComparison]::OrdinalIgnoreCase)
}

function Full-Path([string]$p) { try { [IO.Path]::GetFullPath($p).TrimEnd('\') } catch { $null } }

function Measure-Dir([string]$Path, [double]$MinAgeHours, [string[]]$SkipUnder = @(), [int]$BudgetSec2 = 0) {
    $deadline = 0L
    if ($BudgetSec2 -gt 0) { $deadline = [DateTime]::UtcNow.AddSeconds($BudgetSec2).Ticks }
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

$sysLetter = $env:SystemDrive.Substring(0, 1).ToUpper()   # the Windows drive, usually C
$fixedDrives = @(Get-CimInstance Win32_LogicalDisk -Filter 'DriveType=3' | ForEach-Object { $_.DeviceID.Substring(0, 1).ToUpper() })
function Show-Free([string]$label) {
    foreach ($l in $fixedDrives) {
        $dd = Get-PSDrive $l
        if ($dd) { "$l`: free $label`: $(Fmt $dd.Free) of $(Fmt ($dd.Free + $dd.Used))" }
    }
}

# ---- config: places.json (accepted, ignored, keep, roots, tempPatterns) ----
function As-List($x) { @($x | Where-Object { $_ }) }
$cfg = [pscustomobject]@{ accepted = @(); ignored = @(); keep = @(); roots = @(); tempPatterns = @() }
$cfgExisted = Test-Path -LiteralPath $cfgPath
if ($cfgExisted) {
    $j = Get-Content -LiteralPath $cfgPath -Raw | ConvertFrom-Json
    if ($j) {
        $cfg = [pscustomobject]@{
            accepted = @(As-List $j.accepted); ignored = @(As-List $j.ignored); keep = @(As-List $j.keep)
            roots = @(As-List $j.roots); tempPatterns = @(As-List $j.tempPatterns)
        }
    }
}
function Save-Cfg { $cfg | ConvertTo-Json | Set-Content -LiteralPath $cfgPath -Encoding UTF8 }
function Is-Kept([string]$p) { foreach ($k in $cfg.keep) { if (Under $p $k) { return $true } }; $false }

if ($Accept.Count -or $Ignore.Count -or $Keep -or $Root) {
    $changed = $false
    foreach ($p in $Accept) {
        $abs = Full-Path $p
        if (-not $abs) { "REFUSED (not a valid path, give one path per run): $p"; continue }
        if (-not (Test-Path -LiteralPath $abs -PathType Container)) { "REFUSED (not a folder): $abs"; continue }
        if ($abs.Length -le 3 -or (Test-Path -LiteralPath (Join-Path $abs '.git'))) { "REFUSED (drive root or project folder): $abs"; continue }
        if ($cfg.accepted -notcontains $abs) { $cfg.accepted += $abs }
        "ACCEPTED: $abs"; $changed = $true
    }
    foreach ($p in $Ignore) {
        $abs = Full-Path $p
        if (-not $abs) { "REFUSED (not a valid path, give one path per run): $p"; continue }
        if ($cfg.ignored -notcontains $abs) { $cfg.ignored += $abs }
        "IGNORED: $abs"; $changed = $true
    }
    if ($Keep) {
        $abs = Full-Path $Keep
        if (-not $abs -or -not (Test-Path -LiteralPath $abs)) { "REFUSED (path not found, give one path per run): $Keep" }
        else {
            if ($cfg.keep -notcontains $abs) { $cfg.keep += $abs }
            "KEEP: $abs (never offered, never removed)"; $changed = $true
        }
    }
    if ($Root) {
        $abs = Full-Path $Root
        if (-not $abs -or -not (Test-Path -LiteralPath $abs -PathType Container)) { "REFUSED (not a folder, give one path per run): $Root" }
        else {
            if ($cfg.roots -notcontains $abs) { $cfg.roots += $abs }
            "ROOT: $abs (scanned by -Find, nothing is deleted by adding it)"; $changed = $true
        }
    }
    if ($changed) { Save-Cfg; "Saved to $cfgPath. Nothing was deleted." } else { 'Nothing saved. Nothing was deleted.' }
    return
}

# ---- -EmptyBin ----
if ($EmptyBin) {
    $L = $EmptyBin.Trim().TrimEnd(':').ToUpper()
    if ($L.Length -ne 1 -or $fixedDrives -notcontains $L) { "REFUSED (not a fixed drive letter): $EmptyBin"; return }
    $bin = "$L`:\`$RECYCLE.BIN"
    $bm = Measure-Dir $bin 0
    "Recycle bin of $L`: $(Fmt $bm.Total) in $($bm.Files) files"
    if (-not $Delete) { 'DRY RUN: nothing was changed. Run with -Delete after the user says yes (permanent).'; return }
    $before = (Get-PSDrive $L).Free
    Clear-RecycleBin -DriveLetter $L -Force -ErrorAction SilentlyContinue
    $after = Measure-Dir $bin 0
    "Left in the bin: $(Fmt $after.Total). $L`: free $(Fmt $before) -> $(Fmt (Get-PSDrive $L).Free)"
    return
}

# ---- biggest folders of a drive (report only, part of every dry run) ----
function Show-BigFolders([string]$L, [int]$Sec) {
    $deadline = [DateTime]::UtcNow.AddSeconds($Sec).Ticks
    $skipNames = @('$RECYCLE.BIN', 'System Volume Information')
    $report = @(); $loose = 0L; $anyIncomplete = $false
    $swTop = [Diagnostics.Stopwatch]::StartNew()
    foreach ($t in @(Get-ChildItem -LiteralPath "$L`:\" -Force -ErrorAction SilentlyContinue)) {
        if ($t.Attributes -band [IO.FileAttributes]::ReparsePoint) { continue }
        if (-not $t.PSIsContainer) { $loose += $t.Length; continue }
        if ($skipNames -contains $t.Name) { continue }
        $sum = 0L; $complete = $true; $kids = @()
        foreach ($c in @(Get-ChildItem -LiteralPath $t.FullName -Force -ErrorAction SilentlyContinue)) {
            if ($c.Attributes -band [IO.FileAttributes]::ReparsePoint) { continue }
            if (-not $c.PSIsContainer) { $sum += $c.Length; continue }
            $left = [int][Math]::Max(1, ($deadline - [DateTime]::UtcNow.Ticks) / 1e7)
            $m = Measure-Dir $c.FullName 0 @() $left
            if (-not $m.Complete) { $complete = $false }
            $sum += $m.Total; $kids += [pscustomobject]@{ Path = $c.FullName; Bytes = $m.Total; Complete = $m.Complete }
        }
        if (-not $complete) { $anyIncomplete = $true }
        $report += [pscustomobject]@{ Path = $t.FullName; Bytes = $sum; Complete = $complete; Kids = $kids }
    }
    $sorted = @($report | Sort-Object Bytes -Descending)
    ''
    "BIGGEST FOLDERS on $L`: (folders directly under $L`:\, sizes of what the script could read)"
    $i = 0
    foreach ($r in ($sorted | Select-Object -First $TopN)) {
        $i++
        $pre = ''; if (-not $r.Complete) { $pre = '>= ' }
        '{0,2}. {1,12}  {2}' -f $i, ($pre + (Fmt $r.Bytes)), $r.Path
        if ($i -le 8) {
            foreach ($k in ($r.Kids | Sort-Object Bytes -Descending | Select-Object -First 5)) {
                $kp = ''; if (-not $k.Complete) { $kp = '>= ' }
                '      {0,12}  {1}' -f ($kp + (Fmt $k.Bytes)), $k.Path
            }
        }
    }
    if ($loose -gt 0) { "Files directly in $L`:\: $(Fmt $loose)" }
    if ($anyIncomplete) { "INCOMPLETE: the time budget ($Sec s) ran out, rows marked '>=' are lower bounds and folders not reached count 0. Raise -TopSec for a full picture." }
    "Not counted: reparse points (links, junctions), $($skipNames -join ', '). Run time: $([int]$swTop.Elapsed.TotalSeconds) s"
}


# ---- -Find ----
if ($Find) {
    if ($cfg.roots.Count -eq 0) { 'No scan folders yet. Add one per run with -Root "<folder>" (not installed program or game folders), then run -Find again.'; return }
    $sw2 = [Diagnostics.Stopwatch]::StartNew()
    $deadline = [DateTime]::UtcNow.AddSeconds($BudgetSec)
    $incomplete = $false
    $skipNames = @('node_modules', '$RECYCLE.BIN', 'System Volume Information', 'Windows', 'WindowsApps', 'Program Files', 'Program Files (x86)', 'ProgramData', 'AppData', 'steamapps', '.git')
    $minBytes = [long]$MinMB * 1MB
    $largeBytes = [long]$LargeMB * 1MB
    $all = New-Object System.Collections.ArrayList
    foreach ($rt in $cfg.roots) {
        if (-not (Test-Path -LiteralPath $rt)) { "ROOT missing, skipped: $rt"; continue }
        $lr = [FastWalk]::List($rt, [Math]::Min($minBytes, $largeBytes), [string[]]$skipNames, [string[]]$cfg.keep, $deadline.Ticks)
        if (-not $lr.Complete) { $incomplete = $true }
        foreach ($f in $lr.Files) { [void]$all.Add($f) }
        Write-Host ("scanned {0}: {1} files >= {2} MB ({3:N0}s)" -f $rt, $lr.Files.Count, [Math]::Min($MinMB, $LargeMB), $sw2.Elapsed.TotalSeconds)
    }
    # de-duplicate paths that two roots both list
    $seen = @{}; $files = @()
    foreach ($f in $all) { $k = $f[0].ToLower(); if (-not $seen.ContainsKey($k)) { $seen[$k] = $true; $files += , $f } }

    $items = New-Object System.Collections.ArrayList
    $used = @{}      # path -> $true, already a candidate of a stronger kind
    function Is-InstalledLooking([string]$path) {
        $dir = Split-Path $path -Parent
        foreach ($d in @($dir, (Split-Path $dir -Parent))) {
            if (-not $d) { continue }
            foreach ($pat in '*.exe', '*.dll') {
                try { if ([IO.Directory]::EnumerateFiles($d, $pat).GetEnumerator().MoveNext()) { return $true } } catch { }
            }
        }
        $false
    }

    # -- duplicates: same size, same first/last MB, then same SHA-256 of the whole file
    $bySize = @{}
    foreach ($f in $files) {
        if ([long]$f[1] -lt $minBytes) { continue }
        if (-not $bySize.ContainsKey($f[1])) { $bySize[$f[1]] = New-Object System.Collections.ArrayList }
        [void]$bySize[$f[1]].Add($f)
    }
    $groups = @($bySize.Values | Where-Object { $_.Count -ge 2 })
    $unreadable = @(); $hashed = 0
    foreach ($g in $groups) {
        if ([DateTime]::UtcNow -gt $deadline) { $incomplete = $true; break }
        $byPart = @{}; $bad = $false
        foreach ($f in $g) {
            $h = [Hasher]::Hash($f[0], $true)
            if ($null -eq $h) { $bad = $true; $unreadable += $f[0]; continue }
            if (-not $byPart.ContainsKey($h)) { $byPart[$h] = New-Object System.Collections.ArrayList }
            [void]$byPart[$h].Add($f)
        }
        foreach ($pg in @($byPart.Values | Where-Object { $_.Count -ge 2 })) {
            $byFull = @{}; $groupBad = $false
            foreach ($f in $pg) {
                if ([DateTime]::UtcNow -gt $deadline) { $incomplete = $true; $groupBad = $true; break }
                $h = [Hasher]::Hash($f[0], $false); $hashed++
                if ($null -eq $h) { $groupBad = $true; $unreadable += $f[0]; continue }
                if (-not $byFull.ContainsKey($h)) { $byFull[$h] = New-Object System.Collections.ArrayList }
                [void]$byFull[$h].Add($f)
            }
            if ($groupBad) { continue }   # a copy that cannot be read completely: no proof, no candidate
            foreach ($fg in @($byFull.Values | Where-Object { $_.Count -ge 2 })) {
                # keeper: not named like a copy, then shorter path, then older, then alphabetical
                $scored = @($fg | Sort-Object @{ Expression = { if ([IO.Path]::GetFileNameWithoutExtension($_[0]) -match '(?i)(\(\d+\)|[ _-]copy|[ _-]kopie)\s*$') { 1 } else { 0 } } },
                    @{ Expression = { $_[0].Length } }, @{ Expression = { [long]$_[2] } }, @{ Expression = { $_[0] } })
                $keeper = $scored[0]
                for ($ci = 1; $ci -lt $scored.Count; $ci++) { $c = $scored[$ci]
                    if (Is-Kept $c[0]) { continue }
                    $warn = Is-InstalledLooking $c[0]
                    [void]$items.Add([pscustomobject]@{ Kind = 'DUPLICATE'; Path = $c[0]; Size = [long]$c[1]; Mtime = [long]$c[2]
                        Evidence = 'SHA-256 identical to ' + $keeper[0]; Warn = $warn; InAll = (-not $warn)
                        KeeperPath = $keeper[0]; KeeperSize = [long]$keeper[1]; KeeperMtime = [long]$keeper[2] })
                    $used[$c[0].ToLower()] = $true
                }
            }
        }
    }

    # -- archives next to a same-named, non-empty folder
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    foreach ($f in $files) {
        $path = $f[0]; $ext = [IO.Path]::GetExtension($path).ToLower()
        if ($ext -notin '.zip', '.7z', '.rar') { continue }
        if ([long]$f[1] -lt $minBytes -or $used.ContainsKey($path.ToLower()) -or (Is-Kept $path)) { continue }
        $folder = Join-Path (Split-Path $path -Parent) ([IO.Path]::GetFileNameWithoutExtension($path))
        if (-not (Test-Path -LiteralPath $folder -PathType Container)) { continue }
        $folderFiles = @(Get-ChildItem -LiteralPath $folder -Recurse -Force -File)
        if ($folderFiles.Count -eq 0) { continue }
        $evidence = 'folder with the same name exists; content not compared (7z/rar)'; $verified = $false
        if ($ext -eq '.zip') {
            try {
                $zip = [IO.Compression.ZipFile]::OpenRead($path)
                $total = 0; $match = 0
                foreach ($e in $zip.Entries) {
                    if ($e.FullName.EndsWith('/')) { continue }
                    $total++
                    $rel = $e.FullName.Replace('/', '\')
                    $stripped = if ($rel.Contains('\')) { $rel.Substring($rel.IndexOf('\') + 1) } else { $rel }
                    foreach ($cand in @((Join-Path $folder $rel), (Join-Path (Split-Path $folder -Parent) $rel), (Join-Path $folder $stripped))) {
                        if (Test-Path -LiteralPath $cand -PathType Leaf) { if ((Get-Item -LiteralPath $cand).Length -eq $e.Length) { $match++; break } }
                    }
                }
                $zip.Dispose()
                if ($total -gt 0 -and $match -eq $total) { $verified = $true; $evidence = "all $total files of the zip exist with the same size in $folder" }
                else { $evidence = "only $match of $total zip files found in $folder" }
            } catch { $evidence = 'zip could not be read; folder with the same name exists' }
        }
        $warn = Is-InstalledLooking $path
        [void]$items.Add([pscustomobject]@{ Kind = 'ARCHIVE'; Path = $path; Size = [long]$f[1]; Mtime = [long]$f[2]
            Evidence = $evidence; Warn = $warn; InAll = ($verified -and -not $warn); KeeperPath = $folder; KeeperSize = 0L; KeeperMtime = 0L })
        $used[$path.ToLower()] = $true
    }

    # -- big files not already listed (report only; removed only by number)
    $bigSel = @($files | Where-Object { [long]$_[1] -ge $largeBytes -and -not $used.ContainsKey($_[0].ToLower()) -and -not (Is-Kept $_[0]) } |
        Sort-Object { [long]$_[1] } -Descending | Select-Object -First 40)
    if ($bigSel.Count -gt 0 -and $bigSel[0] -is [string]) { $big = @(,$bigSel) } else { $big = $bigSel }
    foreach ($f in $big) {
        $e = [IO.Path]::GetExtension($f[0]).ToLower()
        $type = switch -Regex ($e) {
            '^\.(iso|img|bin)$' { 'disc image'; break }
            '^\.(zip|rar|7z|tar|gz)$' { 'archive'; break }
            '^\.(mp4|mkv|mov|avi|webm|m4v)$' { 'video'; break }
            '^\.(exe|msi)$' { 'installer'; break }
            default { "other ($e)" }
        }
        $ageDays = [int](($now.ToUniversalTime() - [DateTime]::new([long]$f[2], 'Utc')).TotalDays)
        [void]$items.Add([pscustomobject]@{ Kind = 'LARGE'; Path = $f[0]; Size = [long]$f[1]; Mtime = [long]$f[2]
            Evidence = "$type, last changed $ageDays days ago, nothing compared"; Warn = $false; InAll = $false; KeeperPath = ''; KeeperSize = 0L; KeeperMtime = 0L })
    }

    $n = 0
    foreach ($it in $items) { $n++; $it | Add-Member -NotePropertyName Id -NotePropertyValue $n }
    $out = [pscustomobject]@{ Created = (Get-Date).ToString('s'); Roots = @($cfg.roots); Items = @($items) }
    $out | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath $candPath -Encoding UTF8

    ''
    foreach ($kind in 'DUPLICATE', 'ARCHIVE', 'LARGE') {
        $k = @($items | Where-Object { $_.Kind -eq $kind })
        if ($k.Count -eq 0) { "$kind`: none"; continue }
        "$kind ($($k.Count), $(Fmt (($k | Measure-Object Size -Sum).Sum)))"
        foreach ($it in $k) {
            $flag = if ($it.Warn) { ' [looks like part of an installed program, not in "all"]' } elseif (-not $it.InAll -and $kind -ne 'LARGE') { ' [not in "all"]' } else { '' }
            '  #{0,-4} {1,10}  {2}{3}' -f $it.Id, (Fmt $it.Size), $it.Path, $flag
            '        {0}' -f $it.Evidence
        }
    }
    if ($unreadable.Count) { ''; "UNREADABLE (skipped, may be damaged; no proof, no candidate): $($unreadable.Count)"; $unreadable | Select-Object -First 10 | ForEach-Object { "  $_" } }
    ''
    $allBytes = (($items | Where-Object { $_.InAll } | Measure-Object Size -Sum).Sum)
    "Run time: $([int]$sw2.Elapsed.TotalSeconds) s. Hashed $hashed files. Numbers saved to $candPath (valid 24 h)."
    "-Remove all would take $(Fmt ([long]$allBytes)). Nothing was changed."
    if ($incomplete) { 'INCOMPLETE: the time budget ran out, so the list is partial. Run -Find again or raise -BudgetSec.' }
    return
}

# ---- -Remove ----
if ($Remove) {
    if (-not (Test-Path -LiteralPath $candPath)) { 'No candidates.json. Run -Find first.'; return }
    $cj = Get-Content -LiteralPath $candPath -Raw | ConvertFrom-Json
    if (([datetime]$cj.Created) -lt $now.AddHours(-24)) { 'REFUSED: candidates.json is older than 24 h. Run -Find again.'; return }
    $items2 = @($cj.Items)
    function Parse-Ids([string]$spec) {
        $r = @()
        foreach ($part in ($spec -split '[,; ]+' | Where-Object { $_ })) {
            if ($part -match '^(\d+)-(\d+)$') { $r += ([int]$Matches[1])..([int]$Matches[2]) }
            elseif ($part -match '^\d+$') { $r += [int]$part }
            else { return $null }
        }
        $r
    }
    $exc = @()
    if ($Except) { $exc = Parse-Ids $Except; if ($null -eq $exc) { "REFUSED (cannot read -Except): $Except"; return } }
    if ($Remove.Trim().ToLower() -eq 'all') { $ids = @($items2 | Where-Object { $_.InAll } | ForEach-Object { [int]$_.Id }) }
    else { $ids = Parse-Ids $Remove; if ($null -eq $ids) { "REFUSED (cannot read -Remove, use 1,3,5-8 or all): $Remove"; return } }
    $ids = @($ids | Where-Object { $exc -notcontains $_ } | Sort-Object -Unique)
    Show-Free 'before'
    $freed = 0L; $count = 0
    foreach ($id in $ids) {
        $it = $items2 | Where-Object { [int]$_.Id -eq $id } | Select-Object -First 1
        if (-not $it) { "#$id : no such number, skipped"; continue }
        $p = $it.Path
        $why = $null
        if (-not (Test-Path -LiteralPath $p -PathType Leaf)) { $why = 'file is gone' }
        elseif (Is-Kept $p) { $why = 'on the keep list' }
        else {
            $inRoot = $false; foreach ($rt in $cfg.roots) { if (Under $p $rt) { $inRoot = $true } }
            if (-not $inRoot) { $why = 'not inside a -Root folder' }
            else {
                $fi = Get-Item -LiteralPath $p -Force
                if ($fi.Length -ne [long]$it.Size -or $fi.LastWriteTimeUtc.Ticks -ne [long]$it.Mtime) { $why = 'changed since the scan' }
                elseif ($it.Kind -eq 'DUPLICATE') {
                    if (-not (Test-Path -LiteralPath $it.KeeperPath -PathType Leaf)) { $why = 'the kept copy is gone' }
                    else {
                        $ki = Get-Item -LiteralPath $it.KeeperPath -Force
                        if ($ki.Length -ne [long]$it.KeeperSize -or $ki.LastWriteTimeUtc.Ticks -ne [long]$it.KeeperMtime) { $why = 'the kept copy changed since the scan' }
                    }
                }
                elseif ($it.Kind -eq 'ARCHIVE' -and -not (Test-Path -LiteralPath $it.KeeperPath -PathType Container)) { $why = 'the extracted folder is gone' }
            }
        }
        if ($why) { "#$id : skipped ($why): $p"; continue }
        if ($Delete) {
            try {
                Remove-Item -LiteralPath $p -Force -ErrorAction Stop
                $freed += [long]$it.Size; $count++
                "#$id : removed $(Fmt ([long]$it.Size))  $p"
                # remove folders that are now empty, but never the -Root folder itself
                $dir = Split-Path $p -Parent
                while ($dir -and -not ($cfg.roots | Where-Object { $_.TrimEnd('\') -ieq $dir.TrimEnd('\') }) -and -not (Get-ChildItem -LiteralPath $dir -Force)) {
                    Remove-Item -LiteralPath $dir -Force -ErrorAction SilentlyContinue
                    $dir = Split-Path $dir -Parent
                }
            } catch { "#$id : locked or denied, kept: $p" }
        } else { "#$id : would remove $(Fmt ([long]$it.Size))  $p"; $freed += [long]$it.Size; $count++ }
    }
    ''
    if ($Delete) { "Removed $count files, $(Fmt $freed)."; Show-Free 'after' }
    else { "DRY RUN: $count files, $(Fmt $freed) would go. Nothing was changed. Run with -Delete after the user says yes (permanent, no recycle bin)." }
    return
}

# ---- built-in rows ----
$npmCache = (& npm config get cache 2>$null)
$tempDirs = @($env:TEMP, $env:TMP, "$env:LOCALAPPDATA\Temp", "$env:SystemRoot\Temp") |
    Where-Object { $_ } | Select-Object -Unique

# Row: Name, Paths (one or more folders cleaned together), Age (hours), Skip, AnyDrive, RemoveRoot.
function New-Row($Name, $Paths, $Age, $Skip = @(), $AnyDrive = $false, $RemoveRoot = $false) {
    [pscustomobject]@{ Name = $Name; Paths = @($Paths); Path = (@($Paths)[0]); Age = $Age; Skip = @($Skip); AnyDrive = $AnyDrive; RemoveRoot = $RemoveRoot }
}
$rows = @()
foreach ($t in $tempDirs) {
    $claude = Join-Path $t 'claude'
    $rows += New-Row "Temp ($t)" @($t) 1 @($claude)
    $rows += New-Row "Temp\claude ($t)" @($claude) 24
}
if ($npmCache) { $rows += New-Row 'npm cache' @($npmCache) 1 @() $true }
foreach ($p in @("$env:LOCALAPPDATA\NVIDIA\DXCache", "$env:LOCALAPPDATA\NVIDIA\GLCache",
                 "$env:LOCALAPPDATA\D3DSCache", "$env:ProgramData\NVIDIA Corporation\NV_Cache",
                 "$env:LOCALAPPDATA\CrashDumps", "$env:LOCALAPPDATA\Microsoft\Windows\INetCache")) {
    $rows += New-Row ((Split-Path $p -Leaf) + ' (' + (Split-Path (Split-Path $p) -Leaf) + ')') @($p) 1
}
# Rebuildable leftovers in <drive>\Temp and <drive>\tmp on every fixed drive (any drive: these are caches and test profiles).
$cfgPatterns = @($cfg.tempPatterns)
foreach ($L in $fixedDrives) {
    foreach ($tn in 'Temp', 'tmp') {
        $tb = "$L`:\$tn"
        if (-not (Test-Path -LiteralPath $tb -PathType Container)) { continue }
        $already = $false; foreach ($r0 in $rows) { foreach ($rp in $r0.Paths) { if ($rp -and ((Under $tb $rp) -or (Under $rp $tb -and $r0.Name -like 'Temp (*'))) { if ($rp.TrimEnd('\') -ieq $tb) { $already = $true } } } }
        $nc = Join-Path $tb 'node-compile-cache'
        if (Test-Path -LiteralPath $nc) { $rows += New-Row "node compile cache ($tb)" @($nc) 1 @() $true }
        $pw = @(Get-ChildItem -LiteralPath $tb -Directory -Force | Where-Object { $_.Name -like 'playwright*' } | ForEach-Object FullName)
        if ($pw.Count) { $rows += New-Row "Playwright browser profiles ($tb)" $pw 24 @() $true $true }
        $cl = Join-Path $tb 'claude'
        $clCovered = $false; foreach ($r0 in $rows) { foreach ($rp in $r0.Paths) { if ($rp -and $rp.TrimEnd('\') -ieq $cl) { $clCovered = $true } } }
        if ((Test-Path -LiteralPath $cl) -and -not $clCovered) { $rows += New-Row "Temp\claude ($tb)" @($cl) 72 @() $true }
        if ($cfgPatterns.Count) {
            $cp = @(Get-ChildItem -LiteralPath $tb -Directory -Force | Where-Object { $nm = $_.Name; ($cfgPatterns | Where-Object { $nm -like $_ }).Count } | ForEach-Object FullName)
            if ($cp.Count) { $rows += New-Row "Own temp patterns ($tb)" $cp 24 @() $true $true }
        }
    }
}
foreach ($p in $cfg.accepted) {   # accepted places (any drive) unless under a built-in row
    if (-not $p) { continue }
    $covered = $false
    foreach ($r0 in $rows) { foreach ($rp in $r0.Paths) { if ($rp -and (Under $p $rp) -and ([IO.Path]::GetPathRoot($rp)).StartsWith($sysLetter, [StringComparison]::OrdinalIgnoreCase) -and -not $r0.AnyDrive) { $covered = $true } } }
    if ($covered) { continue }   # already inside a deletable built-in row
    $rows += New-Row "Accepted ($p)" @($p) 24 @() $true
}

$sw = [Diagnostics.Stopwatch]::StartNew()
Show-Free 'before'
$result = @()
$i = 0
$existing = @($rows | Where-Object { ($_.Paths | Where-Object { Test-Path -LiteralPath $_ }).Count })
foreach ($r in $existing) {
    $i++
    $paths = @($r.Paths | Where-Object { Test-Path -LiteralPath $_ })
    $onC = ([IO.Path]::GetPathRoot($paths[0])).StartsWith($sysLetter, [StringComparison]::OrdinalIgnoreCase)
    $tot = 0L; $old = 0L
    foreach ($pp in $paths) { $m = Measure-Dir $pp $r.Age $r.Skip; $tot += $m.Total; $old += $m.Old }
    Write-Host ("[{0}/{1}] {2}: {3} ({4:N0}s)" -f $i, $existing.Count, $r.Name, (Fmt $tot), $sw.Elapsed.TotalSeconds)
    if (-not $onC -and -not $r.AnyDrive) {
        $result += [pscustomobject]@{ Item = $r.Name; Where = $paths[0]; MinAge = "$($r.Age) h"; Total = Fmt $tot; Deletable = '-'; Action = 'SHOW ONLY (not on the Windows drive)'; Freed = '' }
        continue
    }
    $action = 'DELETE'
    $freed = ''
    if ($Delete) {
        $fr = 0L; $kp = 0
        foreach ($pp in $paths) {
            $c = Clean-Dir $pp $r.Age $r.Skip; $fr += $c.Freed; $kp += $c.Kept
            if ($r.RemoveRoot -and -not (Get-ChildItem -LiteralPath $pp -Force)) { Remove-Item -LiteralPath $pp -Force -ErrorAction SilentlyContinue }
        }
        $action = "deleted, $kp locked/denied kept"
        $freed = Fmt $fr
    }
    $result += [pscustomobject]@{ Item = $r.Name; Where = $(if ($paths.Count -gt 1) { "$($paths.Count) folders in " + (Split-Path $paths[0] -Parent) } else { $paths[0] }); MinAge = "$($r.Age) h"; Total = Fmt $tot; Deletable = (Fmt $old); Action = $action; Freed = $freed }
}
''
$result | Format-Table -AutoSize -Wrap | Out-String -Width 250

# ---- show only, never touched by the table run ----
$dl = Join-Path $env:USERPROFILE 'Downloads'
$dm = Measure-Dir $dl 0
"SHOW ONLY  Downloads ($dl): $(Fmt $dm.Total) in $($dm.Files) files"
foreach ($L in $fixedDrives) {
    $bm = Measure-Dir "$L`:\`$RECYCLE.BIN" 0
    if ($bm.Total -gt 0) { "SHOW ONLY  recycle bin of $L`: $(Fmt $bm.Total) (empty it with -EmptyBin $L, only after the user says yes)" }
}

if (-not $Delete) {
    foreach ($L in $fixedDrives) { ''; Show-BigFolders $L $TopSec }
}

if ($Full) {
    # worktrees = folders whose .git is a FILE; searched in the root and \Projects of every fixed drive except C:
    $others = @($fixedDrives | Where-Object { $_ -ne $sysLetter } | ForEach-Object { "$_`:\" })
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
    $known = @($rows | ForEach-Object { $_.Paths }) + @($cfg.accepted) + @($cfg.ignored) | Where-Object { $_ }
    $walkEnd = [DateTime]::UtcNow.AddSeconds(100)
    $incomplete = $false
    $found = @()
    $q = New-Object System.Collections.Queue
    foreach ($L in $fixedDrives) { $q.Enqueue(@("$L`:\", 0)) }
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
    Show-Free 'after'
} else {
    'DRY RUN: nothing was changed. Run with -Delete after the user says yes.'
    if ($cfg.roots.Count -eq 0) { 'For duplicates, archives and big files: add a folder with -Root "<folder>", then run -Find.' }
    else { 'For duplicates, archives and big files in your scan folders: run -Find.' }
}
