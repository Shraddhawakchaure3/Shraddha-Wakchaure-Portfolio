$pdf = "d:\Shraddha_portfolio\public\Shraddha_Wakchaure_Resume.pdf"
$fi = Get-Item $pdf
Write-Host "Size: $($fi.Length) bytes ($([math]::Round($fi.Length / 1MB, 2)) MB)"

$stream = [System.IO.File]::OpenRead($pdf)
$buf = New-Object byte[] 20
$null = $stream.Read($buf, 0, 20)
$stream.Close()

$hex = ($buf | ForEach-Object { "{0:X2}" -f $_ }) -join " "
Write-Host "First 20 bytes (hex): $hex"

$ascii = [System.Text.Encoding]::ASCII.GetString($buf, 0, 5)
Write-Host "Header: $ascii"

if ($ascii -eq "%PDF-") {
    Write-Host "`nVALID PDF - file header is correct"
} else {
    Write-Host "`nINVALID - this is NOT a PDF file!"
}
