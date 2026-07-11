import { createClient, SupabaseClient } from '@supabase/supabase-js';
const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL;
const PUBLISHABLE_KEY = process.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL || !PUBLISHABLE_KEY) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in .env');
}

export function getSupabaseClient(accessToken: string): SupabaseClient {
  return createClient(SUPABASE_URL!, PUBLISHABLE_KEY!, {
    global: {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  });
}
