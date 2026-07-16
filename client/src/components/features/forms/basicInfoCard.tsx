export function BasicInfoCard() {
  return (
    <div>
      <p>Basic info</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
      </div>
    </div>
  );
}
