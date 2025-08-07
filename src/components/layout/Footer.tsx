import React from 'react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-grizzle-black text-grizzle-white py-8 px-6 border-t border-grizzle-red/20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img
            src="https://i.imgur.com/Y6MJ7xm.png"
            alt="Grizzle Bear Logo"
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold">Grizzle</span>
            <span className="text-xs text-grizzle-red/80 font-medium tracking-wider uppercase">
              $GRIZZ Token + Launchpad Coming Soon
            </span>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 text-grizzle-white hover:text-grizzle-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <p className="text-sm text-grizzle-white/60 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Grizzle
        </p>
      </div>
    </footer>
  );
};

export default Footer;
