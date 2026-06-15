$files = @(
    "d:\Shraddha_portfolio\src\components\Navbar.jsx",
    "d:\Shraddha_portfolio\src\components\Contact.jsx",
    "d:\Shraddha_portfolio\src\data\portfolio.js"
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file)
    $updated = $content.Replace("Shraddha_Wakchaure_SDE.pdf", "Shraddha_Wakchaure_Resume.pdf")
    [System.IO.File]::WriteAllText($file, $updated)
    Write-Host "Fixed: $file"
}

Write-Host "`nVerification - searching for SDE.pdf (should be 0):"
foreach ($file in $files) {
    $matches = Select-String -Path $file -Pattern "Shraddha_Wakchaure_SDE.pdf" -AllMatches
    if ($matches) { Write-Host "  STILL FOUND in $file" } else { Write-Host "  OK: $file" }
}

Write-Host "`nVerification - searching for Resume.pdf:"
foreach ($file in $files) {
    $matches = Select-String -Path $file -Pattern "Shraddha_Wakchaure_Resume.pdf" -AllMatches
    if ($matches) { Write-Host "  Found $($matches.Count) refs in $file" }
}
