"use client";
import { useLinkInputFormStore } from "@/store/formInput/useLinkInputFormStore";

export function BasicInfoCard() {
  const name = useLinkInputFormStore((state) => state.name);
  const setName = useLinkInputFormStore((state) => state.setName);
  const description = useLinkInputFormStore((state) => state.description);
  const setDescription = useLinkInputFormStore((state) => state.setDescription);

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 rounded-md bg-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="h-10 rounded-md bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
