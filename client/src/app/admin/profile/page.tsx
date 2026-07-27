"use client";
import { BasicInfoCard } from "@/components/features/forms/basicInfoCard";
import { PhotosCard } from "@/components/features/forms/photosCard";
import { LinksSectionInput } from "@/components/features/forms/linksSectionInput";
import { ProfileCard } from "@/components/features/Profile/profileCard";
import { useLinkInputFormStore } from "@/store/formInput/useLinkInputFormStore";
import { useShallow } from "zustand/react/shallow";
import { ButtonWithIcon } from "@/components/ui/buttonWithIcon";
import { IoSave } from "react-icons/io5";

export default function ProfilePage() {
  const { name, description, linkItems, profilePhoto, coverPhoto } =
    useLinkInputFormStore(
      useShallow((state) => ({
        name: state.name,
        description: state.description,
        linkItems: state.linkItems,
        profilePhoto: state.profilePhoto,
        coverPhoto: state.coverPhoto,
      })),
    );

  return (
    <div className="flex w-full grid-cols-2 flex-col gap-2 p-2 md:grid">
      <div className="flex flex-1 flex-col items-center justify-center md:items-start">
        <div className="flex max-h-[90vh] w-full max-w-120 flex-col gap-2 p-2">
          <PhotosCard />
          <BasicInfoCard />
          <LinksSectionInput />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-full max-w-90 flex-col gap-3 px-2">
          <ProfileCard
            profilePhoto={profilePhoto}
            coverPhoto={coverPhoto}
            name={name}
            description={description}
            linkItems={linkItems}
          />
          <ButtonWithIcon icon={<IoSave />} label="Save" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
