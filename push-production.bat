@echo off
set /p confirm="Push staging to PRODUCTION (techscicorp.com)? (y/n): "
if /i not "%confirm%"=="y" goto :end

git checkout main
git pull origin main
git merge staging
git push origin main
git checkout staging

:end
pause
