import Link from "next/link";
import { Menu } from "lucide-react";

export function GuestHeader() {
  return (
    <header className="flex flex-row p-5  h-[8vh]">
      <h1 className="text-lg">LinkList</h1>
      <Menu className="ml-auto md:hidden" />
      <nav className="ml-auto hidden md:flex">
        <Link href="">Login</Link>
        <Link href=""> Signup </Link>
      </nav>
    </header>
  );
}
