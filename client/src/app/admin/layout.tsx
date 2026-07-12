import { AdminHeader } from "@/components/features/header/adminHeader";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <AdminHeader />
      <div className="flex flex-1">{children}</div>;
    </>
  );
}
