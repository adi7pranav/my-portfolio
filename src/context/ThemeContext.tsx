"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  themeName: string;
  setThemeName: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [themeName, setThemeName] = useState<string>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    const storedThemeName = localStorage.getItem("themeName");

    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }

    if (storedThemeName) {
      setThemeName(storedThemeName);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    
    // Save to local storage
    localStorage.setItem("darkMode", darkMode.toString());
    localStorage.setItem("themeName", themeName);
  }, [darkMode, themeName, mounted]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
