// components/ui/buttonWithIcon.tsx
"use client";
interface Props {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-white p-3 text-black outline-1 outline-gray-400"
    >
      <p>{label}</p>
    </button>
  );
}
