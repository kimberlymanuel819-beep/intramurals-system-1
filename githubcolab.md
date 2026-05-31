# GitHub Collaboration Workflow

## Main Branch Rules

- `main` must always be stable.
- Never commit directly to `main`.
- Every new feature, bug fix, or task gets its own branch.

---

## 1. Get Latest Changes

Before starting work:

```bash
git checkout main
git pull origin main
```

---

## 2. Create a Feature Branch

Branch naming examples:

```text
feature/login-page
feature/student-registration
bugfix/login-error
hotfix/crash-on-startup
```

Create and switch:

```bash
git checkout -b feature/login-page
```

---

## 3. Work on the Feature

Make changes.

Check status:

```bash
git status
```

Stage changes:

```bash
git add .
```

Commit:

```bash
git commit -m "Add login page UI"
```

---

## 4. Push Branch to GitHub

First push:

```bash
git push -u origin feature/login-page
```

Future pushes:

```bash
git push
```

---

## 5. Keep Branch Updated

If other developers have updated `main`:

```bash
git checkout main
git pull origin main
```

Return to your branch:

```bash
git checkout feature/login-page
```

Merge latest `main`:

```bash
git merge main
```

Resolve conflicts if needed.

Commit merge if Git asks:

```bash
git commit
```

Push updated branch:

```bash
git push
```

---

## 6. Create a Pull Request (PR)

1. Push branch to GitHub.
2. Open repository.
3. Click **Compare & Pull Request**.
4. Add:
   - Title
   - Description
   - Screenshots (if applicable)

5. Request review.

Example:

```text
Title:
Add login page UI

Description:
- Created login form
- Added validation
- Connected frontend components
```

---

## 7. Code Review

Reviewer checks:

- Code quality
- Functionality
- Bugs
- Coding standards

Possible outcomes:

### Approved

PR can be merged.

### Changes Requested

Make changes locally:

```bash
git add .
git commit -m "Address review comments"
git push
```

PR updates automatically.

---

## 8. Merge Pull Request

After approval:

### Squash and Merge

Recommended for student projects.

Benefits:

- Cleaner history
- One commit per feature

GitHub:

```text
Pull Request
→ Squash and Merge
→ Confirm Merge
```

---

## 9. Delete Branch

After merge:

GitHub:

```text
Delete Branch
```

Local:

```bash
git branch -d feature/login-page
```

---

## 10. Start New Task

Return to main:

```bash
git checkout main
```

Get latest updates:

```bash
git pull origin main
```

Create next branch:

```bash
git checkout -b feature/new-task
```

---

# Example Team Workflow

### Developer A

```bash
git checkout main
git pull origin main
git checkout -b feature/login
```

Work → Commit → Push → PR → Merge

---

### Developer B

```bash
git checkout main
git pull origin main
git checkout -b feature/dashboard
```

Work → Commit → Push → PR → Merge

---

### After A Merges

Developer B updates:

```bash
git checkout main
git pull origin main

git checkout feature/dashboard
git merge main
```

Resolve conflicts if any.

Continue working.

---

# Common Commands

Current branch:

```bash
git branch --show-current
```

List branches:

```bash
git branch
```

Switch branch:

```bash
git checkout branch-name
```

Delete local branch:

```bash
git branch -d branch-name
```

Fetch remote changes:

```bash
git fetch
```

See commit history:

```bash
git log --oneline --graph
```

See remote branches:

```bash
git branch -r
```

---

# Recommended Team Rules

1. Never push directly to `main`.
2. One feature = one branch.
3. Create a Pull Request for every change.
4. Review code before merging.
5. Pull latest `main` before creating a branch.
6. Delete merged branches.
7. Write meaningful commit messages.
8. Keep Pull Requests small and focused.
