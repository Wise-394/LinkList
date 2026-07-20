"use client";
import { useState } from "react";
import { LinkItem } from "./linkItem";

interface Link {
  id: number;
  label: string;
  link: string;
}

export function LinksSection() {
  const [linkItem, setLinkItem] = useState<Link[]>([]);
  const handleAddNewLink = () => {
    setLinkItem((state) => [
      ...state,
      { id: 1, label: "test", link: "sample" },
    ]);
  };

  return (
    <div className="flex flex-1 flex-col justify-around rounded-lg p-2 outline-1 outline-white/50">
      <button onClick={handleAddNewLink}>Add new link</button>
      {linkItem.map((link) => (
        <LinkItem label={link.label} key={link.id} link={link.link} />
      ))}
    </div>
  );
}
