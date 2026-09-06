# Workflow Notes

This repository is intentionally set up with repository history and branch workflow issues:

- direct commits on `main`
- poor commit messages
- bad branch names
- a branch with a merge conflict in `src/config.js`
- an abandoned branch containing partial changes

Use this file as a reference when reviewing the repo history and workflow.

- current workflow is inconsistent and needs cleanup.

## Standard Feature Branch Workflow

To maintain a clean and reliable codebase, adhere to the following workflow:

1. **Create Branch**: Always branch off the latest `main` using descriptive names:
   ```bash
   git checkout -b feature/<feature-name>
   ```
2. **Develop & Test**: Keep commits atomic and use standard conventional prefixes (`docs:`, `feat:`, `fix:`).
3. **Push to Remote**: Push the branch to GitHub:
   ```bash
   git push -u origin feature/<feature-name>
   ```
4. **Open Pull Request**: Open a PR into `main` detailing changes, justification, and verification steps.
5. **Review & Merge**: Review changes, ensure branch is green, and perform a merge without fast-forwarding directly on `main`.

