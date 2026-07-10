import { LinkItem } from "./linkItem";

export function LinksSection() {
  return (
    <div className="flex flex-1 flex-col justify-around rounded-lg p-2 outline-1 outline-white/50">
      <LinkItem />
      <LinkItem />
      <LinkItem />
    </div>
  );
}
