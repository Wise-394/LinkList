export function BasicInfoCard() {
  return (
    <div className="rounded-lg bg-gray-400 p-4">
      <p>Basic info</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="h-10 rounded-md bg-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className="h-10 rounded-md bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
