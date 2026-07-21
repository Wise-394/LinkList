"use client";
import { useState } from "react";
import { LinkItemInput } from "./linkItemInput";

interface Link {
  id: string;
  label: string;
  link: string;
}

export function LinksSectionInput() {
  const [linkItem, setLinkItem] = useState<Link[]>([]);
  const [currentLink, setCurrentLink] = useState<Partial<Link>>({});
  const handleAddNewLink = () => {
    setLinkItem((state) => [
      ...state,
      {
        id: crypto.randomUUID(),
        label: currentLink.label ?? "",
        link: currentLink.link ?? "",
      },
    ]);
    setCurrentLink({});
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-around overflow-auto rounded-lg p-2 outline-1 outline-white/50">
      <div>
        <input
          type="text"
          name="label"
          id="label"
          placeholder="label"
          value={currentLink.label ?? ""}
          onChange={(e) =>
            setCurrentLink((state) => ({ ...state, label: e.target.value }))
          }
        />
        <input
          type="text"
          name="link"
          id="link"
          placeholder="example.com"
          value={currentLink.link ?? ""}
          onChange={(e) =>
            setCurrentLink((state) => ({ ...state, link: e.target.value }))
          }
        />
      </div>

      <button onClick={handleAddNewLink}>Add new link</button>
      <div className="flex flex-col gap-4">
        {linkItem.map((link) => (
          <LinkItemInput label={link.label} key={link.id} link={link.link} />
        ))}
      </div>
    </div>
  );
}
