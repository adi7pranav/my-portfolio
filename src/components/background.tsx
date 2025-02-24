"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useMemo } from "react";

export default function Background() {
  const { darkMode } = useTheme();

  // Memoize the image source to avoid unnecessary re-renders
  const imageSrc = useMemo(() => (darkMode ? "/bgDark3.png" : "/bgLight3.png"), [darkMode]);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1]">
      <Image
        src={imageSrc}
        alt="Background"
        fill
        quality={80} // Slightly lower quality for faster load
        priority // Ensures fast loading
        placeholder="blur" // Smoothens initial load
        blurDataURL={imageSrc} // Uses the actual image as the blur placeholder
        unoptimized // Prevents Next.js from re-encoding (for self-hosted images)
      />
    </div>
  );
}
