param(
  [string]$Root = "."
)

$ErrorActionPreference = "Stop"

Write-Host "Checking obvious placeholder tokens..."
$files = Get-ChildItem -Path $Root -Recurse -File -Include *.html,*.md,*.txt,*.xml,*.css
$tokens = @("{{DEVELOPER_NAME}}", "{{SUPPORT_EMAIL}}", "{{SITE_BASE_URL}}", "{{LAST_UPDATED}}")

foreach ($file in $files) {
  $text = Get-Content -Raw -Encoding UTF8 -Path $file.FullName
  foreach ($token in $tokens) {
    if ($text.Contains($token)) {
      Write-Host "PLACEHOLDER $token in $($file.FullName)"
    }
  }
}

Write-Host "Done. This is a lightweight placeholder check, not a full crawler."
