@echo off
echo ========================================
echo Push to GitHub: desouvik100/intern-atlas
echo ========================================
echo.

cd /d d:\intern-atlas2\intern-atlas

echo Step 1: Setting up remote...
git remote remove origin 2>nul
git remote add origin https://github.com/desouvik100/intern-atlas.git

echo.
echo Step 2: Checking status...
git status --short

echo.
echo Step 3: Staging all files...
git add -A

echo.
echo Step 4: Committing...
git commit -m "feat: Complete authentication system with Railway deployment ready"

echo.
echo Step 5: Pushing to GitHub...
git push -u origin feature/signup-login

echo.
echo ========================================
echo Done! Check: https://github.com/desouvik100/intern-atlas
echo ========================================
echo.
echo Next: Deploy to Railway!
echo 1. Go to https://railway.app
echo 2. New Project from GitHub
echo 3. Select desouvik100/intern-atlas
echo 4. Add environment variables
echo 5. Run migration
echo.
pause
