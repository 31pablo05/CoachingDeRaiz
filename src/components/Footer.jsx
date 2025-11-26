import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered animations to footer elements
            const elements = entry.target.querySelectorAll('.footer-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('footer-bounce-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/coachingderaiz/',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      url: 'https://api.whatsapp.com/send?phone=5491136677321',
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: '¿Quién soy?', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: '¿Qué es Coaching?', href: '#coaching' },
    { name: 'Contacto', href: '#contact' },
  ];

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
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-primary via-primary-deeper to-primary-dark text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs with Glow - Más sutiles */}
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-accent-lime/3 to-transparent rounded-full animate-pulse-slow"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom px-6 md:px-12 lg:px-20 py-6 md:py-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Enhanced Brand Section */}
          <div className="space-y-3 md:space-y-4 group footer-animate opacity-0">
            <div className="flex items-center gap-4 mb-3 md:mb-4">
              <div className="relative">
                <img 
                  src="/logos/logocoaching.svg" 
                  alt="Coaching de Raíz" 
                  className="h-16 w-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 drop-shadow-lg footer-glow-pulse" 
                />
                <div className="absolute inset-0 bg-accent-lime/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-accent-lime/80 to-white bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
                  Coaching de Raíz
                </h3>
                <div className="w-0 h-0.5 bg-gradient-to-r from-accent-lime to-white group-hover:w-full transition-all duration-700 mt-1"></div>
              </div>
            </div>
            
            <div className="space-y-2 transform group-hover:translate-x-2 transition-transform duration-500">
              <p className="text-white/90 mb-2 leading-relaxed text-base md:text-lg group-hover:text-white transition-colors duration-300">
                Acompañamiento profesional para el desarrollo de líderes, equipos y organizaciones.
              </p>
              <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm p-2 md:p-3 border border-white/20 group-hover:bg-white/20 group-hover:border-accent-lime/30 transition-all duration-500 footer-card-hover">
                <p className="text-accent-lime/90 italic text-sm md:text-base font-medium relative z-10">
                  "Así como una planta necesita raíces sanas para florecer..."
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-3 md:space-y-4 group footer-animate opacity-0">
            <div className="relative">
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-accent-lime transition-colors duration-500">
                Enlaces rápidos
              </h4>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-lime to-transparent group-hover:w-32 transition-all duration-700"></div>
            </div>
            <div className="grid grid-cols-1 gap-1 md:gap-2">
              {quickLinks.map((link, index) => (
                <div key={link.href} 
                     className="transform hover:translate-x-3 transition-all duration-300 footer-card-hover"
                     style={{animationDelay: `${index * 100}ms`}}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group/link flex items-center gap-3 text-white/80 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="w-2 h-2 bg-accent-lime/60 rounded-full group-hover/link:bg-accent-lime group-hover/link:scale-150 transition-all duration-300 footer-glow-pulse"></div>
                    <span className="font-medium group-hover/link:font-semibold transition-all duration-300">{link.name}</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover/link:translate-x-full transition-transform duration-700 footer-shimmer-wave"></div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-3 md:space-y-4 group footer-animate opacity-0">
            <div className="relative">
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-accent-lime transition-colors duration-500">
                Contacto
              </h4>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-lime to-transparent group-hover:w-24 transition-all duration-700"></div>
            </div>
            
            <div className="space-y-2 text-white/90">
              <div className="group/item flex items-center gap-4 p-2 md:p-3 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300 transform hover:scale-105 footer-card-hover">
                <div className="text-2xl group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 footer-glow-pulse">📍</div>
                <span className="group-hover/item:text-white transition-colors duration-300">CABA y zona norte, Buenos Aires</span>
              </div>
              
              <div className="group/item flex items-center gap-4 p-2 md:p-3 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300 transform hover:scale-105 footer-card-hover">
                <div className="text-2xl group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 footer-glow-pulse">📧</div>
                <a 
                  href="mailto:luciavallejo@coachingderaiz.com" 
                  className="hover:text-accent-lime hover:underline transition-all duration-300 font-medium"
                >
                  luciavallejo@coachingderaiz.com
                </a>
              </div>
              
              <div className="group/item flex items-center gap-4 p-2 md:p-3 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300 transform hover:scale-105 footer-card-hover">
                <div className="text-2xl group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 footer-glow-pulse">📱</div>
                <a
                  href="https://api.whatsapp.com/send?phone=5491136677321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-lime hover:underline transition-all duration-300 font-medium"
                >
                  +54 9 11 3667-7321
                </a>
              </div>
              
              <div className="group/item flex items-center gap-4 p-2 md:p-3 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300 transform hover:scale-105 footer-card-hover">
                <div className="text-2xl group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 footer-glow-pulse">📸</div>
                <a
                  href="https://www.instagram.com/coachingderaiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-lime hover:underline transition-all duration-300 font-medium"
                >
                  @coachingderaiz
                </a>
              </div>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="pt-3 md:pt-4">
              <h5 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-wider">Síguenos en redes</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative bg-gradient-to-br from-white/10 to-white/5 p-4 rounded-xl hover:from-accent-lime hover:to-accent-lime/80 hover:text-primary hover:scale-110 hover:rotate-6 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-accent-lime/25 backdrop-blur-sm border border-white/20 hover:border-accent-lime/50 footer-card-hover footer-glow-pulse"
                    aria-label={social.name}
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="relative z-10 transform group-hover/social:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover/social:translate-x-full transition-transform duration-700 rounded-xl footer-shimmer-wave"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Divider with Gradient */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-lime/30 to-transparent h-px"></div>
          <div className="border-t border-white/10 pt-4 md:pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 mb-4 md:mb-5">
              <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300">
                <p className="text-white/70 text-base mb-2 hover:text-white/90 transition-colors duration-300">
                  © {currentYear} Coaching de Raíz. Todos los derechos reservados.
                </p>
                <div className="w-0 h-0.5 bg-gradient-to-r from-accent-lime to-transparent hover:w-full transition-all duration-700 mx-auto md:mx-0"></div>
              </div>
              
              <div className="text-center md:text-right transform hover:scale-105 transition-transform duration-300">
                <p className="text-white/70 text-base hover:text-white/90 transition-colors duration-300 font-medium">
                  Lucía Vallejo - Coach Ontológica Empresarial
                </p>
                <div className="text-accent-lime/60 text-sm mt-1 hover:text-accent-lime transition-colors duration-300">
                  ✨ Transformación • Liderazgo • Resultados
                </div>
              </div>
            </div>
            
            {/* Simple Developer Credit */}
            <div className="text-center">
              <p className="text-white/60 text-sm md:text-base flex items-center justify-center gap-2 flex-wrap hover:text-white/80 transition-colors duration-300">
                <span>Desarrollado con</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>por</span>
                <a
                  href="https://devcraftpablo.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-lime font-semibold underline underline-offset-2 hover:underline-offset-4 transition-all duration-300"
                >
                  Pablo Proboste
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
