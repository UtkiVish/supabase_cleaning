# 🧹 Supabase Storage Auto-Cleanup

This project automatically deletes files uploaded by users to Supabase Storage for the website: [https://www.original-website-link.com](https://www.original-website-link.com)

---

## 🚀 What Does This Repo Do?

- **Purpose:**
  - This repository contains a Node.js script and GitHub Actions workflow that regularly cleans up (deletes) files stored in the Supabase Storage bucket by any user on the website above.
  - It ensures that user-uploaded files are only kept for a short, defined period, helping manage storage costs and privacy.

- **How it works:**
  - Files uploaded by users are named with a timestamp.
  - The cleanup script runs every minute (via GitHub Actions) and deletes files that have reached their scheduled deletion time (the next 5-minute mark after upload).

---

## 🌟 About This Project

- **Collaboration:**
  - This project is maintained in collaboration with the website owner and contributors.
  - It is designed to be simple, secure, and easy to maintain.

- **Tech Stack:**
  - [Supabase](https://supabase.com/) for storage
  - [Node.js](https://nodejs.org/) for scripting
  - [GitHub Actions](https://github.com/features/actions) for automation

---

## 🛡️ Security

- All sensitive credentials (Supabase URL and Service Role Key) are securely managed using GitHub Actions secrets.
- **No secrets are ever exposed in the code or logs.**

---

## 📂 Project Structure

- `delete-old-files.js` — The cleanup script
- `.github/workflows/delete-old-files.yml` — The GitHub Actions workflow
- `package.json` — Project dependencies and scripts
- `README.md` — This file

---

## 🤝 Contributing

If you want to help improve or maintain this project, please reach out to the repo owner or open a pull request!

---

## 🔗 Website

[https://www.original-website-link.com](https://www.original-website-link.com)

---

*Keeping your Supabase storage tidy, automatically!* 