@echo off
cd /d "%~dp0"
echo Starting Royal Home Furniture showroom...
if not exist "node_modules\vite" (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 goto failed
)
call npm run dev
if errorlevel 1 goto failed
goto end
:failed
echo.
echo Startup failed. Confirm Node.js and npm are installed, then run npm install manually.
:end
pause
