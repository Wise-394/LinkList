import { BasicInfoCard } from "@/components/features/forms/basicInfoCard";
import { PhotosCard } from "@/components/features/forms/photosCard";

export default function ProfilePage() {
  return (
    <div>
      <PhotosCard />
      <BasicInfoCard />
    </div>
  );
}
