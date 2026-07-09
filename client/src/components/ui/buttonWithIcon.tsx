"use client";
import type { IconType } from "react-icons";
import { cn } from "@/config/tailwind/clsx";

interface ButtonWithIcon {
  icon: IconType;
  label: string;
  onClick: () => void;
}

export function ButtonWithIcon({ icon: Icon, label, onClick }: ButtonWithIcon) {
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-white p-3 outline-1 outline-gray-400"
    >
      <Icon className="text-lg" />
      <p>{label} </p>
    </button>
  );
}
