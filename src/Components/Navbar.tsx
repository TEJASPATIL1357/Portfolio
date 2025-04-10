import  { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  

  return (
    <nav className="w-full bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">My <span className="text-blue-400">Portfolio</span></h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
          <a href="#footer" className="hover:text-blue-400">Footer</a>

          {/* Social Icons */}
          <div className="flex space-x-3 ml-4">
            <a href="https://github.com/TEJASPATIL1357" target="_blank"><FaGithub className="hover:text-gray-400" /></a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target="_blank"><FaLinkedin className="hover:text-gray-400" /></a>
            <a href="https://instagram.com/Tejas_patil_1357" target="_blank"><FaInstagram className="hover:text-gray-400" /></a>
            <a href="https://www.codechef.com/college/dashboard" target="_blank"><SiCodechef className="hover:text-gray-400" /></a>
          </div>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-gray-800">
          <a href="#about" className="block hover:text-blue-400">About</a>
          <a href="#projects" className="block hover:text-blue-400">Projects</a>
          <a href="#skills" className="block hover:text-blue-400">Skills</a>
          <a href="#contact" className="block hover:text-blue-400">Contact</a>
          <a href="#footer" className="block hover:text-blue-400">Footer</a>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/" target="_blank"><FaGithub className="hover:text-gray-400" /></a>
            <a href="https://linkedin.com/" target="_blank"><FaLinkedin className="hover:text-gray-400" /></a>
            <a href="https://instagram.com/" target="_blank"><FaInstagram className="hover:text-gray-400" /></a>
            <a href="https://www.codechef.com/" target="_blank"><SiCodechef className="hover:text-gray-400" /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
