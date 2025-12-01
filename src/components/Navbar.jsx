import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Quién soy?', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: '¿Qué es Coaching?', href: '#coaching' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    // Animación de entrada
    const timer = setTimeout(() => setIsLoaded(true), 100);

    let rafId = null;
    let lastScrollY = 0;

    const handleScroll = () => {
      // Cancelar frame anterior si existe
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Batch todas las lecturas del DOM en un solo frame
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Solo actualizar si cambió significativamente (reduce renders)
        if (Math.abs(scrollY - lastScrollY) > 5) {
          lastScrollY = scrollY;
          setIsScrolled(scrollY > 20);

          // Calcular progreso del scroll - batch con otras lecturas
          const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;
          setScrollProgress(Math.min(progress, 100));

          // Detect active section - optimizado
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
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Batch todas las lecturas del DOM juntas
      requestAnimationFrame(() => {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      role="navigation"
      aria-label="Menú principal de navegación"
      className={`fixed w-full z-50 transition-all duration-500 navbar-blur ${
        isScrolled 
          ? 'navbar-glassmorphism shadow-2xl py-2 md:py-3' 
          : 'bg-white/95 py-4 md:py-6 shadow-lg'
      } ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Barra de progreso del scroll - REMOVED */}
      <div className="container-custom px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo with Image and Text - Mejorado */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex items-center gap-3 group relative"
            aria-label="Volver al inicio - Lucía Vallejo Coach Ontológica"
          >
            {/* Efecto de background hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary-light/20 to-accent-lime/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
            
            {/* Logo Image Container con efectos avanzados */}
            <div className={`relative transition-all duration-500 ${
              isScrolled ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-16 h-16 sm:w-20 sm:h-20'
            }`}>
              <img 
                src="/logos/logocoaching.svg" 
                alt="Coaching de Raíz - Lucía Vallejo Coach Ontológica Empresarial" 
                title="Coaching de Raíz Logo"
                width="80"
                height="80"
                loading="eager"
                className="w-full h-full object-contain logo-hover-effect"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              {/* Anillo decorativo animado */}
              <div className="absolute inset-0 rounded-full border-2 border-secondary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse-slow"></div>
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            
            {/* Brand Text - Mejorado con gradientes */}
            <div className="flex flex-col min-w-0 relative z-10">
              <span className={`font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-accent-lime transition-all duration-500 ${
                isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
              }`}>
                Lucía Vallejo
              </span>
              <span className={`text-secondary-text font-medium leading-tight group-hover:text-secondary transition-colors duration-300 ${
                isScrolled 
                  ? 'text-xs hidden md:block' 
                  : 'text-xs sm:text-sm'
              }`}>
                <div className="transform group-hover:translate-x-1 transition-transform duration-300">Ingeniera Civil, Project Manager</div>
                <div className="transform group-hover:translate-x-1 transition-transform duration-300 delay-75">Coach Ontológico</div>
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Mejorado */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                className={`font-medium transition-all duration-300 relative pb-1 group ${
                  activeSection === link.href.substring(1)
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary'
                } ${
                  isLoaded ? 'animate-fade-in-down' : 'opacity-0'
                }`}
              >
                {link.name}
                {/* Underline animado mejorado */}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent-lime transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
                {/* Efecto de glow en hover */}
                <span className="absolute -inset-2 bg-gradient-to-r from-secondary/10 to-accent-lime/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
            
            {/* CTA Button mejorado */}
            <a
              href="https://wa.me/message/VPS3R5LKA4QNJ1"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative bg-gradient-to-r from-secondary to-accent-lime text-white font-semibold px-6 py-3 rounded-xl glow-effect hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap overflow-hidden group ${
                isLoaded ? 'animate-fade-in-down' : 'opacity-0'
              }`}
              style={{ animationDelay: '700ms' }}
            >
              {/* Efecto de onda en hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative">
                <span className="hidden sm:inline">Sesión </span>Gratuita
              </span>
              {/* Pulso sutil para llamar la atención */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent-lime rounded-xl animate-pulse-slow opacity-75 -z-10"></div>
            </a>
          </div>

          {/* Mobile Menu Button - Mejorado */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden text-primary focus:outline-none p-3 hover:bg-gradient-to-r hover:from-secondary-light/20 hover:to-accent-lime/20 rounded-xl transition-all duration-300 group ${
              isLoaded ? 'animate-fade-in-down' : 'opacity-0'
            }`}
            style={{ animationDelay: '500ms' }}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-all duration-500 ${
                isMobileMenuOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'
              }`}
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
            {/* Efecto de ring animado */}
            <div className={`absolute inset-0 border-2 border-secondary rounded-xl transition-all duration-300 ${
              isMobileMenuOpen ? 'scale-110 opacity-100' : 'scale-95 opacity-0'
            }`}></div>
          </button>
        </div>

        {/* Mobile Menu - Mejorado */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          {/* Efecto de background blur para el menú mobile */}
          <div className="absolute inset-x-0 mobile-menu-backdrop bg-gradient-to-b from-white/95 to-white/90 rounded-2xl border border-secondary-light/30 shadow-2xl mx-4"></div>
          
          <div className="flex flex-col space-y-2 pb-4 relative z-10">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)'
                }}
                className={`font-medium py-4 px-6 rounded-xl transition-all duration-500 relative overflow-hidden group ${
                  activeSection === link.href.substring(1)
                    ? 'bg-gradient-to-r from-secondary-light/80 to-accent-lime/20 text-primary font-semibold shadow-lg border-l-4 border-secondary'
                    : 'text-primary hover:bg-gradient-to-r hover:from-secondary-light/40 hover:to-accent-lime/10 active:scale-95'
                } ${
                  isMobileMenuOpen ? 'animate-slide-up' : ''
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Efecto de shimmer en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            ))}
            
            {/* CTA Button mobile mejorado */}
            <a
              href="https://wa.me/message/VPS3R5LKA4QNJ1"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r from-secondary to-accent-lime text-white font-bold py-4 px-6 rounded-xl text-center glow-effect active:scale-95 transition-all duration-500 mt-4 relative overflow-hidden group ${
                isMobileMenuOpen ? 'animate-bounce-in' : ''
              }`}
              style={{ animationDelay: `${navLinks.length * 100 + 200}ms` }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  <path d="M11.893 5.5c2.998 0 5.434 2.436 5.435 5.435-.001 2.998-2.437 5.434-5.435 5.434s-5.434-2.436-5.434-5.434c0-2.999 2.436-5.435 5.434-5.435z"/>
                </svg>
                Sesión Gratuita
              </span>
              {/* Efecto de onda */}
              <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 rounded-xl transition-transform duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
