import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-grizzle-black/95 backdrop-blur-sm text-grizzle-white p-3 sm:p-4 md:p-6 border-b border-grizzle-red/20 shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Title */}
        <a href="#hero" className="flex items-center space-x-2 sm:space-x-3 text-grizzle-white hover:text-grizzle-red transition-all duration-300 ease-in-out group">
          <div className="relative">
            <img
              src="https://i.imgur.com/Y6MJ7xm.png"
              alt="Grizzle Bear Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-grizzle-red/20 rounded-full blur-sm group-hover:bg-grizzle-red/30 transition-all duration-300 ease-in-out"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-grizzle-white to-grizzle-red bg-clip-text text-transparent group-hover:from-grizzle-red group-hover:to-grizzle-white transition-all duration-300 ease-in-out">
              Grizzle
            </span>
            <span className="text-xs sm:text-xs md:text-sm text-grizzle-red/80 font-medium tracking-wider uppercase">
              King of Memecoins
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="#hero" className="text-grizzle-white hover:text-grizzle-red transition-all duration-300 ease-in-out text-base lg:text-lg font-semibold relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-grizzle-red transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-grizzle-white hover:text-grizzle-red transition-all duration-300 ease-in-out text-base lg:text-lg font-semibold relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-grizzle-red transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-grizzle-white hover:bg-grizzle-red/20 hover:text-grizzle-red focus:outline-none focus:ring-2 focus:ring-grizzle-red/50 rounded-lg transition-all duration-300 ease-in-out"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "md:hidden bg-grizzle-black/95 backdrop-blur-sm border-t border-grizzle-red/20 py-6 transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden mt-0"
        )}
      >
        <ul className="flex flex-col items-center space-y-6">
          <li>
            <a 
              href="#hero" 
              className="block text-grizzle-white hover:text-grizzle-red transition-all duration-300 ease-in-out text-xl font-semibold relative group" 
              onClick={toggleMobileMenu}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-grizzle-red transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="block text-grizzle-white hover:text-grizzle-red transition-all duration-300 ease-in-out text-xl font-semibold relative group" 
              onClick={toggleMobileMenu}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-grizzle-red transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
