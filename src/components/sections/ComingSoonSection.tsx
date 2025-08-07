import React from 'react';
import { Button } from '@/components/ui/button';
import { ClockIcon, CalendarIcon, UsersIcon } from 'lucide-react';

const ComingSoonSection: React.FC = () => {
  return (
    <section id="coming-soon" className="bg-grizzle-black text-grizzle-white py-16 md:py-24 border-t border-grizzle-red/20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-grizzle-red animate-fade-in-up">
          $GRIZZLE Launchpad Coming Soon!
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed opacity-90 animate-fade-in-up animation-delay-200">
          Get ready for the most innovative decentralized launchpad! Join the Grizzle ecosystem and be part of the next generation of token launches.
        </p>

                 {/* Coming Soon Card */}
         <div className="max-w-4xl mx-auto bg-gradient-to-br from-grizzle-red/10 to-grizzle-red/5 border border-grizzle-red/20 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl animate-fade-in-up animation-delay-400">
           <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 lg:space-x-12">
            {/* Countdown Placeholder */}
            <div className="flex flex-col items-center space-y-4">
              <ClockIcon className="h-16 w-16 text-grizzle-red animate-pulse" />
                           <div className="text-center">
               <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-grizzle-white mb-2">Launchpad Launch</h3>
               <p className="text-sm sm:text-base text-grizzle-white/80">Date TBA</p>
             </div>
            </div>

                         {/* Features */}
             <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-grizzle-red rounded-full"></div>
                <span className="text-grizzle-white">Decentralized Platform</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-grizzle-red rounded-full"></div>
                <span className="text-grizzle-white">Advanced Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-grizzle-red rounded-full"></div>
                <span className="text-grizzle-white">Community Driven</span>
              </div>
             </div>
          </div>

                     
        </div>

                 {/* Additional Info */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 animate-fade-in-up animation-delay-600">
                     <div className="bg-grizzle-black/50 border border-grizzle-red/20 rounded-xl p-6">
             <CalendarIcon className="h-12 w-12 text-grizzle-red mx-auto mb-4" />
             <h3 className="text-xl font-semibold mb-2 text-grizzle-white">Platform Launch</h3>
             <p className="text-grizzle-white/80 text-sm">
               Stay tuned for launch date, features, and platform capabilities.
             </p>
           </div>
          <div className="bg-grizzle-black/50 border border-grizzle-red/20 rounded-xl p-6">
            <UsersIcon className="h-12 w-12 text-grizzle-red mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-grizzle-white">Community</h3>
            <p className="text-grizzle-white/80 text-sm">
              Join our community to get early access and exclusive updates.
            </p>
          </div>
          <div className="bg-grizzle-black/50 border border-grizzle-red/20 rounded-xl p-6">
            <ClockIcon className="h-12 w-12 text-grizzle-red mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-grizzle-white">Launch</h3>
            <p className="text-grizzle-white/80 text-sm">
              Fair launch with maximum transparency and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection; 