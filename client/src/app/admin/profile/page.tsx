import { BasicInfoCard } from "@/components/features/forms/basicInfoCard";
import { PhotosCard } from "@/components/features/forms/photosCard";
import { LinksSectionInput } from "@/components/features/forms/linksSectionInput";
export default function ProfilePage() {
  return (
    <div className="flex w-full grid-cols-2 flex-col gap-2 p-2 md:grid">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex max-h-[90vh] w-full max-w-120 flex-col gap-2 p-2">
          <PhotosCard />
          <BasicInfoCard />
          <LinksSectionInput />
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
