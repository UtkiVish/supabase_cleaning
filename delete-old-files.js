// supa_cleanup/delete-old-files.js
// Deletes files older than 5 minutes from Supabase Storage bucket 'user-txt-uploads'

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'user-txt-uploads';
const TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

function getNext5MinMark(ts) {
  // Rounds up to the next 5-minute mark
  const date = new Date(ts);
  const mins = date.getMinutes();
  const next5 = Math.ceil((mins + 1) / 5) * 5;
  date.setMinutes(next5, 0, 0);
  return date.getTime();
}

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function main() {
  const { data: files, error } = await supabase.storage.from(BUCKET).list('', { limit: 1000 });
  if (error) throw error;

  const now = Date.now();
  let deleted = 0;
  for (const file of files) {
    // Assumes file name contains timestamp, e.g., user_email_1700000000000.txt or user_email_1700000000000_filename.txt
    const match = file.name.match(/_(\d{10,})/);
    if (match) {
      const uploadedAt = parseInt(match[1], 10);
      const deleteAt = getNext5MinMark(uploadedAt);
      if (now >= deleteAt) {
        await supabase.storage.from(BUCKET).remove([file.name]);
        console.log('Deleted:', file.name);
        deleted++;
      }
    }
  }
  console.log(`Cleanup complete. Deleted ${deleted} file(s).`);
}

main().catch(err => {
  console.error('Error during cleanup:', err);
  process.exit(1);
}); 