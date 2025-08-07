import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, TrendingUpIcon, ZapIcon, StarIcon } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative bg-grizzle-black text-grizzle-white py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-grizzle-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-grizzle-red/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-grizzle-red/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-32 animate-bounce-slow">
          <StarIcon className="h-8 w-8 text-grizzle-red/60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce-slow animation-delay-500">
          <TrendingUpIcon className="h-6 w-6 text-grizzle-red/40" />
        </div>
        <div className="absolute top-1/3 left-1/4 animate-bounce-slow animation-delay-1000">
          <ZapIcon className="h-5 w-5 text-grizzle-red/50" />
        </div>
      </div>

      <div className="container mx-auto relative z-20 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-grizzle-red/10 border border-grizzle-red/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <div className="w-2 h-2 bg-grizzle-red rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-grizzle-red">Presale Coming Soon</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-grizzle-white via-grizzle-red to-grizzle-white bg-clip-text text-transparent">
                $GRIZZ
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-grizzle-white">
                King of Memecoins
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 text-grizzle-white/80 leading-relaxed animate-fade-in-up animation-delay-200">
              Join the most <span className="text-grizzle-red font-semibold">epic memecoin</span> revolution! 
              The Grizzle Gang is taking over the crypto world with unmatched community power and legendary gains.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 animate-fade-in-up animation-delay-400">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-grizzle-red">1B</div>
                <div className="text-xs sm:text-sm text-grizzle-white/60">Total Supply</div>
              </div>
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
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-grizzle-red/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
              
              {/* Main Bear Image */}
              <img
                src="https://i.imgur.com/Y6MJ7xm.png"
                alt="Grizzle Bear Mascot"
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl animate-bounce-slow"
              />
              
              {/* Floating Elements Around Bear */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 animate-bounce-slow">
                <div className="bg-grizzle-red/20 rounded-full p-1 sm:p-2">
                  <StarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-grizzle-red" />
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 animate-bounce-slow animation-delay-1000">
                <div className="bg-grizzle-red/20 rounded-full p-1 sm:p-2">
                  <TrendingUpIcon className="h-3 w-3 sm:h-4 sm:w-4 text-grizzle-red" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
