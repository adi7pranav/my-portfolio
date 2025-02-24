"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href}
      onClick={onClick}
      className={`py-2 text-lg hover:text-gray-500 
        dark:hover:text-gray-300 transition relative group`}
    >
      {title}
      <span className={`
        h-[1px] inline-block bg-white 
        absolute left-0 bottom-2
        group-hover:w-full transition-[width] 
        ease-in-out duration-300
        ${isActive ? "w-full" : "w-0"}
      `}>
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const { darkMode, setDarkMode, themeName, setThemeName } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 
      bg-[rgba(0,0,0,0.4)] backdrop-blur shadow-md text-white dark:bg-[rgba(0,0,0,0.4)] scrollbar-hide">
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white text-2xl" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Logo */}
      <div className="flex items-center gap-3">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/logo.jpg" 
            alt="Logo" 
            className="w-10 h-10 rounded-full object-cover" 
          />
          <p className="text-xl font-semibold">Portfolio</p>
        </a>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-6">
        <NavLink href="/" title="Home" />
        <NavLink href="/experience" title="Experience" />
        <NavLink href="/projects" title="Projects" />
        <NavLink href="/achievements" title="Achievements" />
        <NavLink href="/about" title="About" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col items-center py-4 md:hidden">
          <NavLink href="/" title="Home" onClick={() => setMenuOpen(false)} />
          <NavLink href="/experience" title="Experience" onClick={() => setMenuOpen(false)} />
          <NavLink href="/projects" title="Projects" onClick={() => setMenuOpen(false)} />
          <NavLink href="/achievements" title="Achievements" onClick={() => setMenuOpen(false)} />
          <NavLink href="/about" title="About" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* Right Section: Dark Mode Toggle & Theme Dropdown */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg border border-gray-400 dark:border-gray-600 flex items-center gap-2"
        >
          {darkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
        </button>

        {/* Theme Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 px-4 rounded-lg border border-gray-400 dark:border-gray-600"
          >
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 text-gray-600 opacity-95 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
              <button 
                onClick={() => { setThemeName("default"); setDropdownOpen(false); }} 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${themeName === "default" ? "font-bold" : ""}`}
              >
                Default
              </button>
              <button 
                onClick={() => { setThemeName("nature"); setDropdownOpen(false); }} 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${themeName === "nature" ? "font-bold" : ""}`}
              >
                Nature
              </button>
              <button 
                onClick={() => { setThemeName("abstract"); setDropdownOpen(false); }} 
                className={`block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${themeName === "abstract" ? "font-bold" : ""}`}
              >
                Abstract
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
