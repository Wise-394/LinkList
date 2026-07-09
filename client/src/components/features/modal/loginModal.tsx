"use client";
import { ButtonWithIcon } from "@/components/ui/buttonWithIcon";
import { useLoginModalStore } from "@/store/landingPage/useLoginModalStore";
import { useEffect, useRef } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export function LoginModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const isOpen = useLoginModalStore((state) => state.isOpen);
  const closeModal = useLoginModalStore((state) => state.closeModal);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="relative m-auto w-[80vw] max-w-80 rounded-2xl p-4 text-center"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Welcome To LinkList</h1>
        <h2 className="">Sign In to continue </h2>
        <div className="mt-8 w-full">
          <ButtonWithIcon
            icon={IoLogoGoogle}
            label="Sign in With Google"
            onClick={() => {}}
          />
        </div>

        <button onClick={() => closeModal()} className="absolute top-2 right-3">
          <IoClose className="text-lg" />
        </button>
      </div>
    </dialog>
  );
}
