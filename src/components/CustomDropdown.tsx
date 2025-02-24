"use client";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

interface BackgroundOption {
  name: string;
  light: string;
  dark: string;
}

interface CustomDropdownProps {
  options: BackgroundOption[];
  onChange: (src: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onChange }) => {
  const { darkMode } = useTheme();
  const [selected, setSelected] = useState(options[0].name);

  const handleChange = (value: string) => {
    setSelected(value);
    const selectedBg = options.find((option) => option.name === value);
    if (selectedBg) {
      onChange(darkMode ? selectedBg.dark : selectedBg.light);
    }
  };

  return (
    <div className="relative">
      <select
        className="p-2 rounded-lg border border-gray-400 dark:border-gray-600 
          bg-transparent text-black dark:text-white appearance-none"
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
