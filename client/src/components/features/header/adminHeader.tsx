import Link from "next/link";

export function AdminHeader() {
  return (
    <header className="flex justify-between p-4">
      <h1>LinkList</h1>
      <nav className="flex gap-4">
        <Link href={"/admin/profile"}>Profile </Link>
        <Link href={"/admin/test"}>Analystics</Link>
      </nav>
    </header>
  );
}
