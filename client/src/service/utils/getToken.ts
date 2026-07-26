import { createClient } from "@/config/supabase/client";

export async function getTokenClient() {
  const supabase = createClient();
  const { data } = await supabase.auth.getSession();
  if (!data) return null;
  return data.session?.access_token ?? null;
}
