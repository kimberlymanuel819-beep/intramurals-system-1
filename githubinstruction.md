# Git and GitHub Setup Instructions

## 1. Configure Git (First Time Only)

Check if Git is installed:

```bash
git --version
```

Set your name:

```bash
git config --global user.name "Your Name"
```

Set your email:

```bash
git config --global user.email "your-email@example.com"
```

Verify configuration:

```bash
git config --list
```

---

## 2. Generate SSH Key (Recommended)

Check for existing keys:

```bash
ls ~/.ssh
```

Generate a new SSH key:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Start SSH agent:

```bash
eval "$(ssh-agent -s)"
```

Add the key:

```bash
ssh-add ~/.ssh/id_ed25519
```

Display public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the output.

---

## 3. Add SSH Key to GitHub

1. Open GitHub.
2. Go to **Settings** → **SSH and GPG Keys**.
3. Click **New SSH Key**.
4. Paste the copied key.
5. Save.

Test connection:

```bash
ssh -T git@github.com
```

Expected result:

```text
Hi username! You've successfully authenticated.
```

---

## 4. Create a Local Git Repository

Navigate to your project:

```bash
cd project-folder
```

Initialize Git:

```bash
git init
```

Check status:

```bash
git status
```

---

## 5. Create a .gitignore File

Example for Node.js:

```bash
node_modules/
.env
dist/
```

Example for Python:

```bash
__pycache__/
venv/
.env
```

---

## 6. Make the First Commit

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial commit"
```

---

## 7. Create a GitHub Repository

1. Log in to GitHub.
2. Click **New Repository**.
3. Enter repository name.
4. Do not initialize with README if your local project already exists.
5. Create repository.

---

## 8. Connect Local Repository to GitHub

SSH:

```bash
git remote add origin git@github.com:username/repository.git
```

HTTPS:

```bash
git remote add origin https://github.com/username/repository.git
```

Verify:

```bash
git remote -v
```

---

## 9. Push Project to GitHub

Rename branch to main:

```bash
git branch -M main
```

Push:

```bash
git push -u origin main
```

Future pushes:

```bash
git push
```

---

## 10. Daily Workflow

Check changes:

```bash
git status
```

Pull latest changes:

```bash
git pull
```

Add changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Describe changes"
```

Push changes:

```bash
git push
```

---

## 11. Clone an Existing Repository

SSH:

```bash
git clone git@github.com:username/repository.git
```

HTTPS:

```bash
git clone https://github.com/username/repository.git
```

Move into project:

```bash
cd repository
```

---

## 12. Useful Commands

View commit history:

```bash
git log --oneline
```

View branches:

```bash
git branch
```

Create branch:

```bash
git checkout -b feature-name
```

Switch branch:

```bash
git checkout branch-name
```

Merge branch:

```bash
git merge feature-name
```

View remotes:

```bash
git remote -v
```

Remove remote:

```bash
git remote remove origin
```

Check current branch:

```bash
git branch --show-current
```
