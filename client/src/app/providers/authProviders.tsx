"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/config/supabase/client";

export function AuthProvider() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) {
          router.push("/");
        }
      },
    );

    return () => listener.subscription.unsubscribe();
  }, [supabase, router]);

  return null;
}
