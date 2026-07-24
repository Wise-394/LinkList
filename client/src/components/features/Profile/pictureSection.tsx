import Image from "next/image";

export function PictureSection() {
  return (
    <div className="relative flex h-fit flex-col items-center">
      <div className="relative aspect-3/2 w-full">
        <Image
          src="https://placehold.co/600x400.png"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 aspect-square w-30 -translate-x-1/2 translate-y-1/4">
        <Image
          src="https://placehold.co/600x400/60a5fa/ffffff.png"
          alt=""
          fill
          sizes="96px"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
