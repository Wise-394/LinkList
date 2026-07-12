import { useState } from "react";
import { createClient } from "@/config/supabase/client";

export function useClientSupabase() {
  const [supabase] = useState(() => createClient());
  return supabase;
}
