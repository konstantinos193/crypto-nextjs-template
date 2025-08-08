import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, TrendingUpIcon, ZapIcon, StarIcon } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative bg-grizzle-black text-grizzle-white py-20 md:py-32 overflow-hidden">

      <div className="container mx-auto relative z-20 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">


            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-grizzle-white via-grizzle-red to-grizzle-white bg-clip-text text-transparent">
                $GRIZZ
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-grizzle-white">
                Memecoins
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-grizzle-white/80 leading-relaxed animate-fade-in-up animation-delay-200">
              Join the most <span className="text-grizzle-red font-semibold">epic memecoin</span> revolution! 
              The Grizzle Gang is taking over the crypto world with unmatched community power.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 animate-fade-in-up animation-delay-400">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-grizzle-red">100%</div>
                <div className="text-xs sm:text-sm text-grizzle-white/60">Community Driven</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-grizzle-red">∞</div>
                <div className="text-xs sm:text-sm text-grizzle-white/60">Unlimited Potential</div>
              </div>
            </div>


          </div>

          {/* Right Content - Bear Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-up animation-delay-800">
            <div className="relative">
              {/* Main Bear Image */}
              <img
                src="https://i.imgur.com/kQwUknZ.png"
                alt="Grizzle Bear Mascot"
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
