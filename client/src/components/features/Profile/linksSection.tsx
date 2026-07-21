"use client";
import { LinkItem } from "./linkItem";

export function LinksSection() {
  return (
    <div className="flex flex-col gap-2">
      <LinkItem label="fb" link="test" />
      <LinkItem label="fb" link="test" />
      <LinkItem label="fb" link="test" />
    </div>
  );
}
