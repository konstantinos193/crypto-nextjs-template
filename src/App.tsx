import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TokenomicsSection from './components/sections/TokenomicsSection';
import ComingSoonSection from './components/sections/ComingSoonSection';
import './index.css'; // Ensure Tailwind CSS is imported

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-grizzle-black text-grizzle-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <ComingSoonSection />
        <AboutSection />
        <TokenomicsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
