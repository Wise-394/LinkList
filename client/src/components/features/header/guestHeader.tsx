"use client";
import {
  IoMenu,
  IoClose,
  IoLinkOutline,
  IoInformationCircleOutline,
  IoSparklesOutline,
  IoLogInOutline,
} from "react-icons/io5";
import { useLoginModalStore } from "@/store/landingPage/useLoginModalStore";
import { useState } from "react";
import { cn } from "@/config/tailwind/clsx";

interface NavLinks {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isPrimary?: boolean;
}

export function GuestHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openModal = useLoginModalStore((state) => state.openModal);

  const navLinks: NavLinks[] = [
    {
      label: "about",
      icon: <IoInformationCircleOutline size={16} />,
    },
    {
      label: "features",
      icon: <IoSparklesOutline size={16} />,
    },
    {
      label: "login",
      icon: <IoLogInOutline size={16} />,
      isPrimary: true,
      onClick: () => {
        openModal();
      },
    },
  ];

  const renderNavLinks = (variant: "desktop" | "mobile") =>
    navLinks.map((nav) => (
      <button
        key={nav.label}
        onClick={nav.onClick}
        className={cn(
          "flex flex-row items-center gap-2 rounded-full p-3 text-left text-sm transition-all",
          nav.isPrimary &&
            "bg-cyan-500 px-5 font-bold text-black hover:scale-[1.03] hover:text-black hover:brightness-110",
        )}
      >
        {nav.icon}
        {nav.label}
      </button>
    ));

  return (
    <header className="sticky top-0 z-10 flex h-[8vh] w-full flex-row items-center border-b border-neutral-900 bg-black px-5">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-lg font-semibold tracking-tight text-white">
          LinkList
        </h1>
      </div>

      <button
        className="ml-auto text-white md:hidden"
        onClick={() => setIsNavOpen((state) => !state)}
        aria-label="Toggle menu"
      >
        {isNavOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
      </button>

      <nav className="ml-auto hidden flex-row items-center gap-1 md:flex">
        {renderNavLinks("desktop")}
      </nav>

      <div className="absolute top-full left-0 w-full overflow-hidden">
        <nav
          className={cn(
            "flex flex-col gap-1 border-b border-neutral-900 bg-black/95 p-3 transition-transform duration-300 ease-in-out md:hidden",
            isNavOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          {renderNavLinks("mobile")}
        </nav>
      </div>
    </header>
  );
}
