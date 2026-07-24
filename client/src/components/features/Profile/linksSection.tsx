"use client";
import { Link } from "../../../../../types/types";
import { LinkItem } from "./linkItem";

export function LinksSection({ linkItems }: { linkItems: Array<Link> }) {
  return (
    <div className="flex flex-col gap-2">
      {linkItems.map((item) => (
        <LinkItem key={item.id} label={item.label} link={item.url} />
      ))}
    </div>
  );
}
