"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useMemo } from "react";

export default function Background() {
  const { darkMode, themeName } = useTheme();

  // Determine the background image based on themeName and darkMode
  const imageSrc = useMemo(() => {
    if (themeName === "abstract") return darkMode ? "/bgDarkY.webp" : "/bgLightY.webp";
    if (themeName === "nature") return darkMode ? "/bgdark1.png" : "/bgLight1.png";
    return darkMode ? "/bgDark3.png" : "/bgLight3.png"; // Default theme
  }, [darkMode, themeName]);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1]">
      <Image
        src={imageSrc}
        alt="Background"
        fill
        quality={80}
        priority
        placeholder="blur"
        blurDataURL={imageSrc}
        unoptimized
        className = "object-cover md:object-fill"
      />
    </div>
  );
}
