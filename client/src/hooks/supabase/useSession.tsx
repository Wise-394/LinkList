import { useEffect } from "react";
import { useClientSupabase } from "./useClientSupabase";
import { useState } from "react";

export function useSession() {
  const supabase = useClientSupabase();
  const [session, setSession] = useState<{
    userID: string;
    accessToken: string;
  } | null>(null);

  useEffect(() => {
    const loadSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setSession({
          userID: session.user.id,
          accessToken: session.access_token,
        });
      }
    };
    loadSession();
  }, [supabase]);
  return session;
}
