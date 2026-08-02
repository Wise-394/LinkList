"use client";
import { GoogleButton } from "../button/googleButton";
import { useLoginModalStore } from "@/store/landingPage/useLoginModalStore";
import { useEffect, useRef } from "react";
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
      className="relative m-auto w-[85vw] max-w-96 rounded-2xl border border-white/10 bg-gray-900 p-6 text-center text-white shadow-2xl backdrop:bg-black/80"
    >
      <button
        onClick={() => closeModal()}
        className="absolute top-4 right-4 text-white/60 transition-colors hover:text-white"
      >
        <IoClose className="text-xl" />
      </button>

      <div className="flex flex-col items-center pt-2">
        <h1 className="text-2xl font-bold">Welcome to LinkList</h1>
        <p className="mt-2 text-sm text-white/60">Sign in to continue</p>

        <div className="mt-8 w-full">
          <GoogleButton />
        </div>
      </div>
    </dialog>
  );
}
