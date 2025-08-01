import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700);
  const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(window.innerWidth < 475);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
      setIsExtraSmallScreen(window.innerWidth < 475);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: isSmallScreen
          ? "url(media/home-page-background-small.jpg)"
          : "url(media/home-page-background-large.jpg)",
      }}
    >
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-left text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent">
          Hi, <br /> I'm <span className="text-white">Mohamed Elshoraky</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8">
          {isExtraSmallScreen ? 'AI & Machine Learning Engineer' : 'AI & ML Engineer'}
        </p>
        <p className="text-base mb-12 max-w-xl text-gray-400">
          Because your data deserves
          {isExtraSmallScreen && <br />} {/* Add line break for screens < 475px */}
          better.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://www.upwork.com/freelancers/~01ddf3b120ae1a05bc"
            className="px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-white hover:text-blue-800 transition-colors flex items-center gap-2 group"
          >
            Hire Me
            <ArrowRight className="text-white group-hover:text-blue-800 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={scrollToContact}
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-800 transition-colors"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}