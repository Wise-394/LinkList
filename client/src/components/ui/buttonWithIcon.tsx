// components/ui/buttonWithIcon.tsx
"use client";
import type { ReactNode } from "react";

interface ButtonWithIcon {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

export function ButtonWithIcon({ icon, label, onClick }: ButtonWithIcon) {
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-white p-3 text-black outline-1 outline-gray-400"
    >
      {icon}
      <p>{label}</p>
    </button>
  );
}
