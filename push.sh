#!/bin/bash
 
# Prompt for the commit message
read -p "Commit Message: " commitMsg
 
# Stage all changes
git add -A
 
# Commit with the provided message
git commit -m "$commitMsg"
 
# Push to GitHub
git push
 
# Pause before exiting
read -n 1 -s -r -p "Press any key to continue..."
echo
