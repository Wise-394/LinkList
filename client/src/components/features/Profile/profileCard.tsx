import { PictureSection } from "./pictureSection";
import { LinksSection } from "./linksSection";
import { ProfileDescriptionSection } from "./profileDescriptionSection";

export function ProfileCard() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-600">
      <PictureSection />
      <div className="px-3">
        <ProfileDescriptionSection />
        <LinksSection />
      </div>
    </div>
  );
}
