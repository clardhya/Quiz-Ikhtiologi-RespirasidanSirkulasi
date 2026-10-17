@echo off
title Ichthyology Quiz - Installation
echo.
echo ========================================
echo Ichthyology Quiz Application
echo Installation Script
echo ========================================
echo.
echo Installing dependencies... This may take a few minutes.
echo.

cd /d "%~dp0"
npm install

if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo Installation failed. Please check the errors above.
    echo ========================================
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation completed successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Run: npm run dev
echo 2. Open browser to: http://localhost:3000
echo.
pause
