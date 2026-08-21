# Instructor Notes

This assessment is designed for Module 1 DevOps Foundations.

## Expected student solution path

1. Inspect repository history and branch state:
   - git log --oneline --all --graph
   - git branch -a
   - git status

2. Identify repository problems:
   - multiple direct commits on main with vague messages
   - poor branch names such as `newbranch`, `test123`, `feature1`, `temp`
   - an abandoned branch that was never merged
   - a branch with a conflicting `src/config.js` change
   - environment drift between README and actual startup command

3. Task 2 workflow fix:
   - checkout `main`
   - create a new branch `feature/workflow-cleanup`
   - merge `conflict-branch` into it to reproduce the conflict
   - resolve the conflict in `src/config.js`
   - commit the resolution with a meaningful message
   - optionally merge back into `main` once everything is clean

4. Task 3 environment drift repair:
   - notice the README lists `npm run start-prod` while `package.json` defines `npm start`
   - ensure `.env.example` shows the correct port and app uses `process.env.PORT`
   - run `npm install` and `npm start` to verify the app

5. Evidence requirements:
   - show broken repo diagnosis 
   - show branch cleanup and feature branch creation
   - show merge conflict identification/resolution
   - show environment drift fix
   - show final clean repo state

## Assessment fit

This repository is intentionally small, requiring only basic Git history inspection, branch management, conflict resolution, and environment verification. No advanced Git commands, CI/CD, Docker, cloud, or database knowledge is required.
