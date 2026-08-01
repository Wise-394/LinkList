"use client";
import Image from "next/image";
import { useEffect, useMemo } from "react";

interface Props {
  profilePhoto: File | null | string;
  coverPhoto: File | null | string;
}

export function PictureSection({ profilePhoto, coverPhoto }: Props) {
  const isProfileFile = profilePhoto instanceof File;
  const isCoverFile = coverPhoto instanceof File;

  const profileUrl = useMemo(() => {
    if (!profilePhoto) return null;
    if (typeof profilePhoto === "string") return profilePhoto;
    return URL.createObjectURL(profilePhoto);
  }, [profilePhoto]);

  const coverUrl = useMemo(() => {
    if (!coverPhoto) return null;
    if (typeof coverPhoto === "string") return coverPhoto;
    return URL.createObjectURL(coverPhoto);
  }, [coverPhoto]);

  useEffect(() => {
    return () => {
      if (profileUrl && isProfileFile) URL.revokeObjectURL(profileUrl);
    };
  }, [profileUrl, isProfileFile]);

  useEffect(() => {
    return () => {
      if (coverUrl && isCoverFile) URL.revokeObjectURL(coverUrl);
    };
  }, [coverUrl, isCoverFile]);

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
