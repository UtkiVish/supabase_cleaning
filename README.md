# 🧹 Supabase Storage Auto-Cleanup

The main SATI ChatBot project is managed by team **Fluaonauts**.

- **Main Project Repository:** [https://github.com/SAFAL-TIWARI/SATI-ChatBot](https://github.com/SAFAL-TIWARI/SATI-ChatBot)
- **Website:** [https://sati-chatbot.vercel.app/index.html](https://sati-chatbot.vercel.app/index.html)

---

## 🚀 What Does This Repo Do?

- **Purpose:**
  - This repository contains a Node.js script and GitHub Actions workflow that regularly cleans up (deletes) files stored in the Supabase Storage bucket by any user on the SATI ChatBot website above.
  - It ensures that user-uploaded files are only kept for a short, defined period, helping manage storage costs and privacy.

- **How it works:**
  - Files uploaded by users are named with a timestamp.
  - The cleanup script runs every minute (via GitHub Actions) and deletes files that have reached their scheduled deletion time (the next 5-minute mark after upload).

---

## 🌟 About This Project

- **Team:**
  - This project is maintained and managed by **team Fluxonauts**.
  - It is designed to be simple, secure, and easy to maintain.

- **Tech Stack:**
  - [Supabase](https://supabase.com/) for storage
  - [Node.js](https://nodejs.org/) for scripting
  - [GitHub Actions](https://github.com/features/actions) for automation

---

## 📂 Project Structure

- `delete-old-files.js` — The cleanup script
- `.github/workflows/delete-old-files.yml` — The GitHub Actions workflow
- `package.json` — Project dependencies and scripts
- `README.md` — This file

---

## 🔗 Links

- **Main Project Repository:** [https://github.com/SAFAL-TIWARI/SATI-ChatBot](https://github.com/SAFAL-TIWARI/SATI-ChatBot)
- **Website:** [https://sati-chatbot.vercel.app/index.html](https://sati-chatbot.vercel.app/index.html)

--- 