import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const KaggleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="inline-block transform -translate-y-[3.5px]"
  >
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
  </svg>
);

const SocialLinks = ({ isScrolled }) => (
  <>
    <a href="http://www.linkedin.com/in/mohamed-elshoraky" target="_blank" rel="noopener noreferrer"
       className={`${isScrolled ? 'text-blue-800 hover:text-blue-500' : 'text-white hover:text-gray-300'} transition-colors`}
       aria-label="LinkedIn">
      <Linkedin size={20} />
    </a>
    <a href="https://github.com/M7mdAhmd" target="_blank" rel="noopener noreferrer" 
       className={`${isScrolled ? 'text-blue-800 hover:text-blue-500' : 'text-white hover:text-gray-300'} transition-colors`}
       aria-label="GitHub">
      <Github size={20} />
    </a>
    <a href="https://www.kaggle.com/mhmdelshoraky" target="_blank" rel="noopener noreferrer"
       className={`${isScrolled ? 'text-blue-800 hover:text-blue-500' : 'text-white hover:text-gray-300'} transition-colors`}
       aria-label="Kaggle">
      <KaggleIcon />
    </a>
    <a href="mailto:officialshoraky@gmail.com"
       className={`${isScrolled ? 'text-blue-800 hover:text-blue-500' : 'text-white hover:text-gray-300'} transition-colors`}
       aria-label="Email">
      <Mail size={20} />
    </a>
  </>
);

const NavLinks = ({ onClick, isScrolled }) => (
  <>
    {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item) => (
      <button
        key={item}
        onClick={() => onClick(item)}
        className={`capitalize transition-colors ${
          isScrolled 
            ? 'text-blue-800 hover:text-blue-500'
            : 'text-white hover:text-gray-300'     
        }`}
        aria-label={item}
      >
        {item}
      </button>
    ))}
  </>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? isDesktop 
          ? 'bg-white/90 backdrop-blur-sm shadow-lg'
          : 'bg-white shadow-lg'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold bg-clip-text text-transparent ${
            isScrolled 
              ? 'bg-gradient-to-r from-blue-300 to-blue-800'
              : 'bg-gradient-to-r from-blue-700 to-blue-200'
          }`}>
            Shoraky
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onClick={scrollToSection} isScrolled={isScrolled} />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <SocialLinks isScrolled={isScrolled} />
          </div>

          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
          >
            <div className="flex flex-col space-y-4 p-6">
              {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item, index) => (
                <React.Fragment key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="capitalize transition-colors text-blue-800 hover:text-blue-500 text-left"
                    aria-label={item}
                  >
                    {item}
                  </button>
                  {index < 5 && <hr className="border-t border-gray-200" />}
                </React.Fragment>
              ))}
              <div className="flex space-x-4 pt-4">
                <SocialLinks isScrolled={true} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}