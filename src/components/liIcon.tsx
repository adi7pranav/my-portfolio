"use client";
import Image from "next/image";

interface LiIconProps {
  imageSrc: string;
}

export default function LiIcon({ imageSrc }: LiIconProps) {
  return (
    <div className="w-[60px] h-[60px] rounded-lg overflow-hidden border-2 border-blue-950 bg-white shadow-sm">
      <Image
        src={imageSrc}
        alt="timeline icon"
        width={60}
        height={60}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
