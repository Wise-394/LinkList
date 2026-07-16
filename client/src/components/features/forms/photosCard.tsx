export function PhotosCard() {
  return (
    <div>
      <p>Photos</p>
      <div>
        <label htmlFor="profileImgInput">Profile Photo </label>
        <input
          type="file"
          accept="image/*"
          id="profileImgInput"
          name="profileImage"
        />
      </div>
      <div>
        <label htmlFor="coverImgInput">Cover Photo </label>
        <input
          type="file"
          accept="image/*"
          id="coverImgInput"
          name="coverImage"
        />
      </div>
    </div>
  );
}
