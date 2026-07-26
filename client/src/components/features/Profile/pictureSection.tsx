"use client";
import Image from "next/image";
import { useEffect, useMemo } from "react";

interface Props {
  profilePhoto: File | null;
  coverPhoto: File | null;
}

export function PictureSection({ profilePhoto, coverPhoto }: Props) {
  const profileUrl = useMemo(
    () => (profilePhoto ? URL.createObjectURL(profilePhoto) : null),
    [profilePhoto],
  );
  const coverUrl = useMemo(
    () => (coverPhoto ? URL.createObjectURL(coverPhoto) : null),
    [coverPhoto],
  );

  useEffect(() => {
    return () => {
      if (profileUrl) URL.revokeObjectURL(profileUrl);
    };
  }, [profileUrl]);

  useEffect(() => {
    return () => {
      if (coverUrl) URL.revokeObjectURL(coverUrl);
    };
  }, [coverUrl]);

  return (
    <div className="relative flex h-fit flex-col items-center">
      <div className="relative aspect-3/2 w-full">
        <Image
          src={coverUrl ?? "https://placehold.co/600x400.png"}
          alt=""
          fill
          sizes="100vw"
          unoptimized={!!coverUrl}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 aspect-square w-30 -translate-x-1/2 translate-y-1/4">
        <Image
          src={profileUrl ?? "https://placehold.co/600x400/60a5fa/ffffff.png"}
          alt=""
          fill
          sizes="96px"
          className="rounded-full"
          unoptimized={!!profileUrl}
        />
      </div>
    </div>
  );
}
