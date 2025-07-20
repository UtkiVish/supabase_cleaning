# Supabase Storage Cleanup Utility

This folder contains a Node.js script and setup for automatically deleting files older than 5 minutes from the `user-txt-uploads` bucket in Supabase Storage.

## How It Works
- The script (`delete-old-files.js`) lists all files in the bucket and deletes any file whose name contains a timestamp older than 5 minutes.
- Intended to be run on a schedule (e.g., via GitHub Actions, cron, or manually).

## Setup
1. **Install dependencies:**
   ```bash
   cd supa_cleanup
   npm install
   ```
2. **Set environment variables:**
   - `SUPABASE_URL` — your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` — your Supabase service role key (keep this secret!)

3. **Run the script:**
   ```bash
   npm run cleanup
   ```

## GitHub Actions Integration
- Add the following secrets to your GitHub repository:
  - `SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY`
- Example workflow (`.github/workflows/delete-old-files.yml`):
  ```yaml
  name: Delete Old Supabase Files

  on:
    schedule:
      - cron: '*/5 * * * *' # Every 5 minutes
    workflow_dispatch:

  jobs:
    cleanup:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - name: Set up Node.js
          uses: actions/setup-node@v3
          with:
            node-version: '18'
        - name: Install dependencies
          run: npm install --prefix supa_cleanup
        - name: Run cleanup script
          env:
            SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
            SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}
          run: npm run cleanup --prefix supa_cleanup
  ```

## Security
- **Never expose your Service Role Key in public repos or client-side code.**
- Keep this folder/repo private if possible.

## Customization
- Adjust the `TIMEOUT_MS` or file name parsing logic in `delete-old-files.js` as needed for your use case. 