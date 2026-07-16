import { BasicInfoCard } from "@/components/features/forms/basicInfoCard";
import { PhotosCard } from "@/components/features/forms/photosCard";

export default function ProfilePage() {
  return (
    <div className="flex w-full flex-col gap-2 p-2">
      <PhotosCard />
      <BasicInfoCard />
    </div>
  );
}
