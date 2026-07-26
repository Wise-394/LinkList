"use client";
import { useLinkInputFormStore } from "@/store/formInput/useLinkInputFormStore";
import { IoTrash } from "react-icons/io5";
interface Props {
  id: number;
  label: string;
  link: string;
}

export function LinkItemInput({ id, label, link }: Props) {
  const deleteLinkItem = useLinkInputFormStore((state) => state.deleteLinkItem);
  const handleOnDelete = () => {
    deleteLinkItem(id);
  };
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-500 p-3 sm:flex-row sm:items-center">
      <input
        type="text"
        value={label}
        readOnly
        className="w-full rounded-md bg-gray-400 p-2 sm:max-w-80"
      />
      <input
        type="text"
        value={link}
        readOnly
        className="w-full rounded-md bg-gray-400 p-2"
      />
      <button
        className="self-end sm:self-auto"
        onClick={() => handleOnDelete()}
      >
        <IoTrash />
      </button>
    </div>
  );
}
