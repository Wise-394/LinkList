"use client";
import { IoLogIn } from "react-icons/io5";
import { ButtonWithIcon } from "@/components/ui/buttonWithIcon";
import { useLoginModalStore } from "@/store/landingPage/useLoginModalStore";

export function LoginButton() {
  const openModal = useLoginModalStore((state) => state.openModal);
  return (
    <ButtonWithIcon
      icon={<IoLogIn className="text-lg" />}
      label="Login"
      onClick={() => openModal()}
    />
  );
}
