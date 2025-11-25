import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: '¿Quién soy?', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: '¿Qué es Coaching?', href: '#coaching' },
    { name: 'Contacto', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-white shadow-lg py-3 md:py-4' 
          : 'bg-white/95 py-4 md:py-6'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo with Image and Text */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
          >
            {/* Logo Image Container */}
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'w-14 h-14 sm:w-16 sm:h-16' : 'w-16 h-16 sm:w-20 sm:h-20'
            }`}>
              <img 
                src="/logos/logocoaching.svg" 
                alt="Coaching de Raíz Logo" 
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  e.target.style.display = 'none';
                }}
              />
              {/* Decorative ring on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-secondary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className={`font-bold text-primary group-hover:text-secondary transition-colors duration-300 ${
                isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}>
                Coaching de Raíz
              </span>
              <span className={`text-secondary-text font-medium leading-tight ${
                isScrolled ? 'text-xs hidden sm:block' : 'text-xs sm:text-sm'
              }`}>
                Lucía Vallejo
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`font-medium transition-all duration-300 relative pb-1 ${
                  activeSection === link.href.substring(1)
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary'
                }`}
              >
                {link.name}
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent-lime transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            ))}
            <a
              href="https://wa.me/message/VPS3R5LKA4QNJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-secondary to-accent-lime text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Sesión Gratuita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary focus:outline-none p-2 hover:bg-secondary-light/20 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'bg-gradient-to-r from-secondary-light to-secondary-light/50 text-primary font-semibold shadow-sm'
                    : 'text-primary hover:bg-neutral-beige active:scale-95'
                } ${isMobileMenuOpen ? 'animate-slide-down' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/message/VPS3R5LKA4QNJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-secondary to-accent-lime text-white font-semibold py-3 px-4 rounded-lg text-center hover:shadow-lg active:scale-95 transition-all duration-300 mt-2"
            >
              Sesión Gratuita
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
