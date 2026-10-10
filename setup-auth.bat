@echo off
echo ========================================
echo InternAtlas Authentication Setup
echo ========================================
echo.

echo Step 1: Installing backend dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo Error installing backend dependencies
    exit /b 1
)
echo.

echo Step 2: Generating Prisma client...
call npm run prisma:generate
if %errorlevel% neq 0 (
    echo Error generating Prisma client
    exit /b 1
)
echo.

echo Step 3: Running database migrations...
call npm run prisma:migrate
if %errorlevel% neq 0 (
    echo Error running migrations
    exit /b 1
)
echo.

cd ..

echo Step 4: Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo Error installing frontend dependencies
    exit /b 1
)
echo.

cd ..

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Start the development server: npm run dev
echo 2. Visit http://localhost:3000/signup to test
echo.
