import React, { useEffect, useRef } from 'react';
import Button from './Button';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-32"
      style={{
        background: 'linear-gradient(135deg, #fefcea 0%, #e8f0e4 25%, #d4e5d0 50%, #7a9477 75%, #5a7458 100%)'
      }}
    >
      {/* Animated Background Elements - Elegant and Subtle */}
      <div className="absolute inset-0">
        {/* Soft overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5"></div>
        
        {/* Elegant floating orbs - very subtle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Large soft glow top-right */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Medium glow bottom-left */}
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#5a7458]/10 rounded-full blur-3xl animate-float-slower"></div>
          
          {/* Accent glow center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#fefcea]/30 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>
        
        {/* Subtle shimmer overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
      </div>

      <div className="container-custom px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Content above the image card */}
          <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16 lg:mt-20">
            {/* Premium Badge with elegant animation */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5a7458] to-[#7a9477] text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></span>
              Coach Ontológica Certificada
            </div>
            {/* Main Title with Gradient Effect */}
            <h1 className="fade-in-section">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[#5a7458] via-[#7a9477] to-[#5a7458] bg-clip-text text-transparent animate-fade-in leading-tight drop-shadow-sm">
                Lucía Vallejo
              </span>
              
            </h1>
          </div>

          {/* Hero Card with Image - Enhanced */}
          <div 
            className="backdrop-blur-md bg-white/30 rounded-2xl md:rounded-3xl shadow-2xl border border-white/40 p-3 sm:p-4 md:p-6 lg:p-8 text-center transform hover:scale-[1.01] transition-all duration-700 relative overflow-hidden min-h-[350px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[560px] hover:shadow-[0_20px_60px_rgba(90,116,88,0.3)]"
            style={{
              backgroundImage: "url('/imagenes/hero.jpg')",
              backgroundSize: 'contain',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#5a7458]/5 via-transparent to-transparent pointer-events-none"></div>

            {/* Content with higher z-index */}
            <div className="relative z-10">




            </div>

            {/* Quote at bottom with slide-up animation - Enhanced */}
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-3 right-3 sm:left-4 sm:right-4 fade-in-section">
              <div className="bg-gradient-to-r from-[#5a7458]/50 via-[#5a7458]/40 to-[#5a7458]/50 backdrop-blur-sm rounded-xl md:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 border border-white/20 shadow-xl">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed font-body italic text-center transform translate-y-8 opacity-0 animate-slide-up-delayed drop-shadow-md">
                  <span className="text-base sm:text-lg md:text-xl text-[#fefcea] font-serif">“</span>
                  Así como una planta necesita raíces sanas para florecer, las personas necesitamos mirar hacia adentro para transformar nuestra forma de ser, liderar y vincularnos.
                  <span className="text-base sm:text-lg md:text-xl text-[#fefcea] font-serif">”</span>
                </p>
              </div>
            </div>

          </div>



          {/* Enhanced CTAs - Outside the card */}
          <div className="fade-in-section mt-6 md:mt-8 lg:mt-10 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              {/* Primary CTA - Enhanced */}
              <Button 
                variant="primary" 
                href="https://api.whatsapp.com/send?phone=5491136677321&text=Hola! Me gustaría agendar una sesión gratuita de 15 minutos"
                className="w-full sm:w-auto text-sm md:text-base lg:text-lg font-bold px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 shadow-2xl hover:shadow-[0_15px_40px_rgba(90,116,88,0.4)] transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0 animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Agenda tu sesión gratuita de 15 min</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              {/* Secondary CTA - Enhanced */}
              <Button 
                variant="secondary" 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 hover:shadow-xl hover:bg-[#5a7458] hover:text-white hover:border-[#5a7458] transform hover:-translate-y-1 transition-all duration-500"
              >
                Conoce más sobre mí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
