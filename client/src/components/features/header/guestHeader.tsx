"use client";
import { IoMenu } from "react-icons/io5";
import { useLoginModalStore } from "@/store/landingPage/useLoginModalStore";
import { useState } from "react";

interface NavLinks {
  label: string;
  onClick: () => void;
}

export function GuestHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openModal = useLoginModalStore((state) => state.openModal);
  const navLinks: NavLinks[] = [
    {
      label: "login",
      onClick: () => {},
    },
    {
      label: "register",
      onClick: () => {
        openModal();
      },
    },
  ];

  return (
    <header className="flex flex-row h-[8vh] relative items-center p-5 ">
      <h1 className="text-lg">LinkList</h1>
      <button
        className="ml-auto md:hidden"
        onClick={() => setIsNavOpen((state) => !state)}
      >
        <IoMenu />
      </button>
      <nav className=" flex-row ml-auto hidden md:flex">
        {navLinks.map((nav) => (
          <button
            key={nav.label}
            onClick={nav.onClick}
            className="p-3 text-left"
          >
            {nav.label}
          </button>
        ))}
      </nav>
      <div className="absolute w-full top-full left-0 overflow-hidden">
        <nav
          className={`flex flex-col bg-gray-400
    transition-transform duration-300 ease-in-out md:hidden
    ${isNavOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          {navLinks.map((nav) => (
            <button
              key={nav.label}
              onClick={nav.onClick}
              className="p-3 text-left"
            >
              {nav.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
