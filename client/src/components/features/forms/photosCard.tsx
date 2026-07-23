import { useLinkInputFormStore } from "@/store/formInput/useLinkInputFormStore";

export function PhotosCard() {
  const setProfilePhoto = useLinkInputFormStore(
    (state) => state.setProfilePhoto,
  );
  const setCoverPhoto = useLinkInputFormStore((state) => state.setCoverPhoto);

  return (
    <div className="w-full rounded-lg bg-gray-400 p-4">
      <p>Photos</p>
      <div>
        <label htmlFor="profileImgInput">Profile Photo </label>
        <input
          type="file"
          accept="image/*"
          id="profileImgInput"
          name="profileImage"
          onChange={(e) => setProfilePhoto(e.target.files?.[0] ?? null)}
          className="w-full rounded-lg bg-gray-500 p-2 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-600 file:px-3 file:py-2 file:text-white hover:file:bg-blue-700"
        />
      </div>
      <div>
        <label htmlFor="coverImgInput">Cover Photo </label>
        <input
          type="file"
          accept="image/*"
          id="coverImgInput"
          name="coverImage"
          onChange={(e) => setCoverPhoto(e.target.files?.[0] ?? null)}
          className="w-full rounded-lg bg-gray-500 p-2 file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-600 file:px-3 file:py-2 file:text-white hover:file:bg-blue-700"
        />
      </div>
    </div>
  );
}
