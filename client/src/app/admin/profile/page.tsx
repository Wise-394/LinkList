"use client";
import { BasicInfoCard } from "@/components/features/forms/basicInfoCard";
import { PhotosCard } from "@/components/features/forms/photosCard";
import { LinksSectionInput } from "@/components/features/forms/linksSectionInput";
import { ProfileCard } from "@/components/features/Profile/profileCard";
import { useLinkInputFormStore } from "@/store/formInput/useLinkInputFormStore";
import { useShallow } from "zustand/react/shallow";

export default function ProfilePage() {
  const { name, description, linkItems } = useLinkInputFormStore(
    useShallow((state) => ({
      name: state.name,
      description: state.description,
      linkItems: state.linkItems,
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
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-90">
          <ProfileCard
            name={name}
            description={description}
            linkItems={linkItems}
          />
        </div>
      </div>
    </div>
  );
}
