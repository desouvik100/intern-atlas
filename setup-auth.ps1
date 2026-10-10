Write-Host "========================================"
Write-Host "InternAtlas Authentication Setup"
Write-Host "========================================"
Write-Host ""

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -Path $scriptPath

Write-Host "Step 1: Installing backend dependencies..."
Set-Location -Path "backend"
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error installing backend dependencies" -ForegroundColor Red
    exit 1
}
Write-Host ""

Write-Host "Step 2: Installing @types/bcryptjs..."
npm install --save-dev @types/bcryptjs
Write-Host ""

Write-Host "Step 3: Generating Prisma client..."
npm run prisma:generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error generating Prisma client" -ForegroundColor Red
    exit 1
}
Write-Host ""

Write-Host "Step 4: Running database migrations..."
npm run prisma:migrate
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error running migrations" -ForegroundColor Red
    exit 1
}
Write-Host ""

Set-Location -Path ".."

Write-Host "Step 5: Installing frontend dependencies..."
Set-Location -Path "frontend"
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error installing frontend dependencies" -ForegroundColor Red
    exit 1
}
Write-Host ""

Set-Location -Path ".."

Write-Host "========================================"
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================"
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. cd frontend"
Write-Host "2. npm run dev"
Write-Host "3. Visit http://localhost:3000/signup to test"
Write-Host ""
