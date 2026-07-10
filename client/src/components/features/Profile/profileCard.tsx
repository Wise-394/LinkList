import { PictureSection } from "./pictureSection";
import { LinksSection } from "./linksSection";
import { ProfileDescriptionSection } from "./profileDescriptionSection";
import { LinkItem } from "./linkItem";

export function ProfileCard() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-600">
      <PictureSection />
      <div className="flex flex-1 flex-col gap-3 px-3 pb-3 outline-5">
        <ProfileDescriptionSection />
        <LinksSection />
      </div>
    </div>
  );
}
