"use client";
import Link from "next/link";
import { useClientSupabase } from "@/hooks/supabase/useClientSupabase";

export function AdminHeader() {
  const supabase = useClientSupabase();
  const handleLogout = () => {
    supabase.auth.signOut();
  };
  return (
    <header className="flex justify-between p-4">
      <h1>LinkList</h1>
      <nav className="flex gap-4">
        <Link href={"/admin/profile"}>Profile </Link>
        <Link href={"/admin/analytics"}>Analytics</Link>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
