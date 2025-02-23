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
    onClick?: () => void; // Optional onClick
  }

  const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
  
    return (
      <Link 
        href={href}
        onClick={onClick} // Will only be applied if provided
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
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 
      bg-[rgba(0,0,0,0.4)] backdrop-blur shadow-md text-white dark:bg-[rgba(0,0,0,0.4)] scrollbar-hide">
      {/* Logo / Title */}
            {/* Hamburger Menu Button (Mobile) */}
            <button 
        className="md:hidden text-white text-2xl" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
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
        <NavLink href="/" title ='Home'/>
        <NavLink href="/experience" title ='Experience'/>
        <NavLink href="/projects" title ='Projects'/>
        <NavLink href="/achievements" title ='Achievements' />
        <NavLink href="/about" title ='About'/>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col items-center py-4 md:hidden">
          <NavLink href="/" title ='Home' onClick={() => setMenuOpen(false)}/>
          <NavLink href="/experience" title ='Experience' onClick={() => setMenuOpen(false)}/>
          <NavLink href="/projects" title ='Projects' onClick={() => setMenuOpen(false)}/>
          <NavLink href="/achievements" title ='Achievements' onClick={() => setMenuOpen(false)}/>
          <NavLink href="/about" title ='About' onClick={() => setMenuOpen(false)}/>
        </div>
      )}
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg border border-gray-400 dark:border-gray-600 flex items-center gap-2"
      >
        {darkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
      </button>

    </nav>
  );
};

export default Navbar;
