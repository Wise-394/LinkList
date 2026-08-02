"use client";
import { IoLogIn } from "react-icons/io5";
import { useLoginModalStore } from "@/store/landingPage/useLoginModalStore";
import { cn } from "@/config/tailwind/clsx";

export function LoginButton() {
  const openModal = useLoginModalStore((state) => state.openModal);
  return (
    <button
      onClick={() => openModal()}
      className={cn(
        "flex items-center gap-2 rounded-full",
        "bg-cyan-500 px-6 py-3 text-sm font-semibold text-black",
        "shadow-md transition-all duration-200",
        "hover:bg-cyan-400 hover:shadow-lg active:scale-95",
      )}
    >
      <IoLogIn size={18} /> Join Now
    </button>
  );
}
