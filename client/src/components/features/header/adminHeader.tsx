"use client";
import Link from "next/link";
import { useClientSupabase } from "@/hooks/supabase/useClientSupabase";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { cn } from "@/config/tailwind/clsx";

export function AdminHeader() {
  const supabase = useClientSupabase();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogout = () => {
    supabase.auth.signOut();
  };

  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };
  return (
    <header className="relative flex justify-between p-4">
      <h1>LinkList</h1>
      <nav className="hidden gap-4 md:flex">
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
      <button className="md:hidden" onClick={() => toggleMenu()}>
        <FiMenu />
      </button>

      <div
        className={cn(
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
          "absolute top-full left-0 w-full overflow-hidden md:hidden",
        )}
      >
        <nav
          className={cn(
            isMenuOpen ? "translate-y-0" : "-translate-y-full",
            "flex w-full flex-col items-start gap-4 bg-gray-700 p-2 transition-transform md:hidden",
          )}
        >
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
      </div>
    </header>
  );
}
