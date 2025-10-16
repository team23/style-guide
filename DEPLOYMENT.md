# 🛠️ Deployment Guide

## Overview

This repository is a **monorepo** that contains multiple libraries under the `/libs` directory.
Each library is **versioned and deployed independently**.

Deployments are triggered through manual version updates, changelog maintenance, and automated GitHub Actions that detect version changes and handle publishing after an **admin review**.

---

## 📁 Repository Structure

```
/libs
  ├── library-a/
  │   ├── package.json
  │   └── ...
  ├── library-b/
  │   ├── package.json
  │   └── ...
  └── ...
```

Each subfolder inside `/libs` represents an independent library package.

---

## 🚀 Deployment Process

### 1. Navigate to the Target Library

Move into the directory of the library you want to release:

```bash
cd libs/<library-name>
```

---

### 2. Update the Version

Run the `npm version` command **inside the library folder** to bump the version:

```bash
npm version <major|minor|patch> --no-git-tag-version
```

This will:
- Update the `version` field in the library’s `package.json`
- **Not** create a Git tag (tags are not used in this repository)

---

### 3. Update the Changelog

Open the repository’s `CHANGELOG.md` file.

- Add a new entry for the updated library and version, if it isn’t already documented.
- Include a short description of notable changes, fixes, or additions.

Example entry:

```markdown
### v1.4.0
- Added new typography utilities
- Fixed color contrast issue in dark mode
```

---

### 4. Commit the Changes

After editing both the `package.json` and `CHANGELOG.md`, commit your changes manually.
The commit message must follow this format:

```bash
git add libs/<library-name>/package.json CHANGELOG.md
git commit -m "feat(<library-name>): release version <version>"
```

**Example:**

```bash
git commit -m "feat(vue): release version 1.4.0"
```

> 💡 The `feat(...)` prefix and version number are important —
> they are used to clearly indicate release commits and make them easy to track.

---

### 5. Push to the Repository

Push your commit to the main branch:

```bash
git push origin main
```

---

### 6. GitHub Actions Review & Deployment

After the push:
1. The **GitHub Actions workflow** detects the version change in the modified library’s `package.json`.
2. It triggers the deployment process for that specific library.
3. The workflow pauses for **admin review** before continuing.
4. Once approved, the new version is automatically deployed.

> ⚠️ **Important:** Only commits with valid version bumps trigger deployment.
> Ensure the version in `package.json` was actually changed.

---

## 🧩 Summary

| Step | Action | Description |
|------|---------|-------------|
| 1 | `cd libs/<library>` | Navigate to the target library |
| 2 | `npm version --no-git-tag-version` | Update the version field |
| 3 | Update `CHANGELOG.md` | Document the release |
| 4 | `git commit -m "feat(...): release version ..."` | Commit with required format |
| 5 | `git push` | Push to main branch |
| 6 | GitHub Action | Deploys after admin approval |

---

## 🧾 Notes & Recommendations

- Each library is fully **independent** — no global versioning or tagging is used.
- Keep changelog entries **concise and clear**, especially for shared components.
- Make sure **all tests pass** before bumping a version.
- Only **admins** can approve and finalize deployments through GitHub Actions.
