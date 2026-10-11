@echo off
echo ========================================
echo Running Database Migration
echo ========================================
echo.

set DATABASE_URL=postgresql://neondb_owner:npg_gI2DHJajcwq7@ep-red-meadow-auh48qok-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require

echo Database: Neon PostgreSQL
echo Migration: 20261010000000_add_auth_models
echo.
echo Running migration...
echo.

npx prisma migrate deploy

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo Migration Successful!
    echo ========================================
    echo.
    echo Tables created:
    echo   - Student
    echo   - AuthSession
    echo   - Employer updated with sessions
    echo.
    echo Your auth system is ready!
) else (
    echo.
    echo Migration failed. Check error above.
)

pause
