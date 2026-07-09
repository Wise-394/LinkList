"use client";
import { ButtonWithIcon } from "@/components/ui/buttonWithIcon";
import { useLoginModalStore } from "@/store/landingPage/useLoginModalStore";
import { useEffect, useRef } from "react";
import { IoLogoGoogle } from "react-icons/io";

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
    <dialog ref={dialogRef} className="m-auto">
      <div className="flex flex-col">
        <ButtonWithIcon
          icon={IoLogoGoogle}
          label="Sign in With Google"
          onClick={() => {}}
        />
        <button onClick={() => closeModal()}>
          <p>Close</p>
        </button>
      </div>
    </dialog>
  );
}
