"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Background() {
  const { darkMode } = useTheme();

  return (
    <div
      className="fixed inset-0 w-full h-full bg-cover bg-center bg-fixed transition-all duration-5000 z-[-1] scrollbar-hide"
      style={{
        backgroundImage: `url(${darkMode ? "/bgDark1.png" : "/bgLight1.png"})`,
      }}
    ></div>
  );
}
