@echo off
cd /d "%~dp0"
if not exist node_modules call npm.cmd install
set BASE_PATH=/
set SITE_URL=
call npm.cmd run build
if errorlevel 1 goto failed
start "" http://127.0.0.1:4321/
call npm.cmd run preview
exit /b
:failed
pause
exit /b 1
