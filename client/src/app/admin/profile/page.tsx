"use client";
import { BasicInfoCard } from "@/components/features/forms/basicInfoCard";
import { PhotosCard } from "@/components/features/forms/photosCard";
import { LinksSectionInput } from "@/components/features/forms/linksSectionInput";
import { ProfileCard } from "@/components/features/Profile/profileCard";
import { useLinkInputFormStore } from "@/store/formInput/useLinkInputFormStore";
import { useShallow } from "zustand/react/shallow";
import { ButtonWithIcon } from "@/components/ui/buttonWithIcon";
import { IoSave } from "react-icons/io5";
import { UseUpdateUserInfo } from "@/hooks/user/useUpdateUserInfo";
import { useClientSupabase } from "@/hooks/supabase/useClientSupabase";

export default function ProfilePage() {
  const supabase = useClientSupabase();
  const { updateUserInfo, isPendingUserInfo, errorUserInfo } =
    UseUpdateUserInfo();
  const { name, description, linkItems, profilePhoto, coverPhoto } =
    useLinkInputFormStore(
      useShallow((state) => ({
        name: state.name,
        username: state.username,
        description: state.description,
        linkItems: state.linkItems,
        profilePhoto: state.profilePhoto,
        coverPhoto: state.coverPhoto,
      })),
    );
  const handleSave = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      console.error("No user logged in");
      return;
    }

    const userInfo = {
      name,
      bio: description,
      profileImage: profilePhoto!,
      coverImage: coverPhoto!,
      links: linkItems,
      userID: session.user.id,
      accessToken: session.access_token,
    };
    updateUserInfo(userInfo);
  };

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
          <ButtonWithIcon
            icon={<IoSave />}
            label="Save"
            onClick={() => handleSave()}
          />
        </div>
      </div>
    </div>
  );
}
