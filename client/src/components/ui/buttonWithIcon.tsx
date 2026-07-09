"use client";
import type { IconType } from "react-icons";

interface ButtonWithIcon {
  icon: IconType;
  label: string;
  onClick: () => void;
}

export function ButtonWithIcon({ icon: Icon, label, onClick }: ButtonWithIcon) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row items-center p-2 outline-red-600 outline-1"
    >
      <Icon className="text-md" />
      <p>{label} </p>
    </button>
  );
}
