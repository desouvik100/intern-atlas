$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Running Database Migration" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Set environment variable
$env:DATABASE_URL = "postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require"

Write-Host "Database: Neon PostgreSQL" -ForegroundColor Green
Write-Host "Migration: 20261010000000_add_auth_models" -ForegroundColor Green
Write-Host ""

# Navigate to backend directory
$backendPath = Join-Path $PSScriptRoot "backend"
Set-Location $backendPath

Write-Host "Running: npx prisma migrate deploy..." -ForegroundColor Yellow
Write-Host ""

# Run migration
npx prisma migrate deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✅ Migration Successful!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Database tables created:" -ForegroundColor Green
    Write-Host "  ✅ Student" -ForegroundColor Green
    Write-Host "  ✅ AuthSession" -ForegroundColor Green
    Write-Host "  ✅ Employer (updated with sessions)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your authentication system is now ready!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "❌ Migration failed. Check the error above." -ForegroundColor Red
    exit 1
}
