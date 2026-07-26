interface Props {
  label: string;
  link: string;
}
export function LinkItem({ label, link }: Props) {
  return (
    <div className="flex justify-between rounded-lg bg-gray-500 p-3 text-center">
      <a href={link}>{label}</a>
    </div>
  );
}
