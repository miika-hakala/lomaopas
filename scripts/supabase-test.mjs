import { createClient } from '@supabase/supabase-js';
import { existsSync } from 'node:fs';

if (!existsSync('.env')) {
  console.error('Missing .env file. Create it first (do not commit secrets).');
  process.exit(1);
}

const url = process.env.PUBLIC_SUPABASE_URL;
const anonKey = process.env.PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function short(name, value) {
  if (!value) return `${name}: MISSING`;
  const preview = value.slice(0, 8);
  return `${name}: OK (${preview}… , len=${value.length})`;
}

if (!url || (!anonKey && !serviceKey)) {
  console.error('Missing required Supabase env vars.');
  console.error(short('PUBLIC_SUPABASE_URL', url));
  console.error(short('PUBLIC_SUPABASE_ANON_KEY', anonKey));
  console.error(short('SUPABASE_SERVICE_ROLE_KEY', serviceKey));
  process.exit(1);
}

const key = serviceKey || anonKey;
const client = createClient(url, key);

try {
  let result;
  if (serviceKey) {
    result = await client.auth.admin.listUsers({ page: 1, perPage: 1 });
  } else {
    result = await client.from('orders').select('id').limit(1);
  }

  if (result.error) {
    console.error('Supabase request failed:', result.error.message);
    process.exit(2);
  }

  console.log('Supabase connection OK.');
  console.log(short('PUBLIC_SUPABASE_URL', url));
  console.log(short(serviceKey ? 'SUPABASE_SERVICE_ROLE_KEY' : 'PUBLIC_SUPABASE_ANON_KEY', key));
  process.exit(0);
} catch (err) {
  console.error('Supabase request failed:', err?.message || String(err));
  process.exit(3);
}
