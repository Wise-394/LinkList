import { IoArrowForwardOutline } from "react-icons/io5";
interface Props {
  label: string;
  link: string;
}
export function LinkItem({ label, link }: Props) {
  const handleRedirect = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      className="flex justify-between rounded-lg bg-gray-900 p-3 text-center hover:cursor-pointer"
      onClick={() => handleRedirect()}
    >
      <a href={link} target="_blank">
        {label}
      </a>
      <IoArrowForwardOutline />
    </div>
  );
}
