"use client";
import { useClientSupabase } from "@/hooks/supabase/useClientSupabase";
import { GoogleLogo } from "@/components/ui/googleLogo";

export function GoogleButton() {
  const supabase = useClientSupabase();

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/admin/profile`,
      },
    });
  };

  return (
    <button
      onClick={() => handleGoogleLogin()}
      className="flex w-full items-center justify-center gap-3 rounded-md border border-[#dadce0] bg-white px-4 py-2.5 text-sm font-medium text-[#3c4043] shadow-sm transition-colors hover:bg-gray-50 hover:shadow-md active:bg-gray-100"
    >
      <GoogleLogo />
      <span>Sign in with Google</span>
    </button>
  );
}
