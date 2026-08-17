@echo off
git checkout staging
set /p commitMsg="Commit Message: "
git add -A
git commit -m "%commitMsg%"
git push origin staging
pause
