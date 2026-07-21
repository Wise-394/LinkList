interface Props {
  label: string;
  link: string;
}
export function LinkItemInput({ label, link }: Props) {
  return (
    <div className="rounded-lg bg-gray-500 p-3 text-center">
      <a href={link}>{label}</a>
    </div>
  );
}
