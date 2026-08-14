@echo off
set /p commitMsg="Commit Message: "
git add -A
git commit -m "%commitMsg%"
git push
pause