import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return <div className="flex flex-1">{children}</div>;
}
