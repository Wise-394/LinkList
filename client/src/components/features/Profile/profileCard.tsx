import Image from "next/image";
export function ProfileCard() {
  return (
    <div className="flex w-full flex-col">
      <div className="w-full">
        <Image
          src="https://placehold.co/600x400.png"
          alt=""
          width={600}
          height={400}
        />
      </div>
      test
    </div>
  );
}
