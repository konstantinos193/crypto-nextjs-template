import React from 'react';
import { UsersIcon, ZapIcon, ShieldCheckIcon } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-grizzle-black text-grizzle-white py-16 md:py-24 border-t border-grizzle-red-dark">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-grizzle-red animate-fade-in-up">
          What is $GRIZZ? The Roar of the Community!
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90 animate-fade-in-up animation-delay-200">
          $GRIZZ isn't just another memecoin; it's a movement! Built on the principles of fun, community, and decentralized power, $GRIZZ aims to be the most recognizable and beloved bear in the crypto jungle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="bg-grizzle-dark-gray p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-400">
            <UsersIcon className="h-12 w-12 text-grizzle-blue mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-grizzle-red">Community Driven</h3>
            <p className="text-grizzle-white opacity-80">
              $GRIZZ thrives on its vibrant community. Every holder is a part of the Grizzle Gang, contributing to its growth and spreading the roar across the crypto space.
            </p>
          </div>

          <div className="bg-grizzle-dark-gray p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-600">
            <ZapIcon className="h-12 w-12 text-grizzle-blue mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-grizzle-red">Fast & Furious</h3>
            <p className="text-grizzle-white opacity-80">
              Experience lightning-fast transactions and a token designed for rapid adoption. $GRIZZ is built for speed, ensuring you're always ahead of the pack.
            </p>
          </div>

          <div className="bg-grizzle-dark-gray p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-800">
            <ShieldCheckIcon className="h-12 w-12 text-grizzle-blue mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-grizzle-red">Secure & Transparent</h3>
            <p className="text-grizzle-white opacity-80">
              Your investments are safe with $GRIZZ. We prioritize transparency and security, ensuring a trustworthy environment for all our holders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
