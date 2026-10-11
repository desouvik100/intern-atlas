@echo off
echo ========================================
echo Pushing Node.js 20 Fix to GitHub
echo ========================================
echo.

cd /d d:\intern-atlas2\intern-atlas

echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo Done! Railway will auto-redeploy!
echo ========================================
echo.
echo Watch deployment at:
echo https://railway.app
echo.
pause
