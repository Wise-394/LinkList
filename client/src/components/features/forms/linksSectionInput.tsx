"use client";
import { useState } from "react";
import { LinkItemInput } from "./linkItemInput";
import { useLinkInputFormStore } from "@/store/formInput/useLinkInputFormStore";
import { Link } from "../../../../../types/types";

export function LinksSectionInput() {
  const linkItems = useLinkInputFormStore((state) => state.linkItems);
  const addLink = useLinkInputFormStore((state) => state.addLink);
  const [error, setError] = useState<string | null>(null);
  const [currentLink, setCurrentLink] = useState<Partial<Link>>({});

  const validateUserInput = ({ label, url }: Partial<Link>) => {
    if (!label || !url) return false;
    if ((label?.length ?? 0) < 4 || (url?.length ?? 0) < 4) return false;
    return true;
  };

  const handleAddNewLink = () => {
    setError(null);
    if (!validateUserInput(currentLink)) {
      return setError("label and link must be more than 4 chatacters");
    }
    addLink({
      id: Date.now(),
      userId: "",
      label: currentLink.label ?? "",
      url: currentLink.url ?? "",
      icon: "",
      order: linkItems.length,
    });
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
          name="url"
          id="url"
          placeholder="example.com"
          value={currentLink.url ?? ""}
          onChange={(e) =>
            setCurrentLink((state) => ({ ...state, url: e.target.value }))
          }
        />
      </div>
      {error && <p>{error}</p>}

      <button onClick={handleAddNewLink}>Add new link</button>
      <div className="flex flex-col gap-4">
        {linkItems.map((link) => (
          <LinkItemInput label={link.label} key={link.id} link={link.url} />
        ))}
      </div>
    </div>
  );
}
