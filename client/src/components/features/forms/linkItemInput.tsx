interface Props {
  label: string;
  link: string;
}

export function LinkItemInput({ label, link }: Props) {
  return (
    <div className="flex gap-2 rounded-lg bg-gray-500 p-3">
      <input
        type="text"
        value={label}
        readOnly
        className="rounded-md bg-gray-400 p-2"
      />
      <input
        type="text"
        value={link}
        readOnly
        className="rounded-md bg-gray-400 p-2"
      />
    </div>
  );
}
