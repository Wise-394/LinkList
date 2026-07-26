import { PictureSection } from "./pictureSection";
import { LinksSection } from "./linksSection";
import { ProfileDescriptionSection } from "./profileDescriptionSection";
import { Link } from "../../../../../types/types";

interface Props {
  name: string;
  description: string;
  linkItems: Link[];
  profilePhoto: File | null;
  coverPhoto: File | null;
}

export function ProfileCard({
  name,
  description,
  linkItems,
  profilePhoto,
  coverPhoto,
}: Props) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-gray-600">
      <PictureSection profilePhoto={profilePhoto} coverPhoto={coverPhoto} />
      <div className="flex flex-1 flex-col gap-3 px-3 pb-3 outline-5">
        <ProfileDescriptionSection name={name} description={description} />
        <LinksSection linkItems={linkItems} />
      </div>
    </div>
  );
}
