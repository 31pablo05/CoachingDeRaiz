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
      id="inicio"
      ref={sectionRef}
      className="h-screen min-h-[600px] flex items-center justify-center relative overflow-hidden"
      aria-label="Sección principal - Lucía Vallejo Coach Ontológica"
    >
      {/* Background images — desktop y mobile */}
      <picture className="absolute inset-0 w-full h-full">
        <source media="(max-width: 768px)" srcSet="/imagenes/hero-mobile.jpg" />
        <img
          src="/imagenes/hero-desktop.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          aria-hidden="true"
        />
      </picture>

      {/* Overlay degradado para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/70 pointer-events-none"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 container-custom px-4 sm:px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-10 md:pb-20 text-center">

        {/* Título principal */}
        <h1
          className="fade-in-section text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-white mb-4 leading-tight drop-shadow-xl"
          itemProp="name"
        >
          Coaching de Raíz
        </h1>

        {/* Tagline */}
        <p className="fade-in-section text-lg sm:text-xl md:text-2xl text-white font-medium mb-6 tracking-wide drop-shadow-lg">
          Acompañamiento profesional para el desarrollo de líderes, equipos y organizaciones
        </p>

        {/* Frases */}
        <div className="fade-in-section mb-8 md:mb-12 space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl text-white font-serif italic drop-shadow-lg mx-auto leading-relaxed whitespace-nowrap">
            "Para florecer, primero hay que enraizar"
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            "Así como una planta necesita raíces sanas para florecer, las personas
            necesitamos mirar hacia adentro para transformar nuestra forma de ser,
            liderar y vincularnos."
          </p>
        </div>

        {/* CTAs */}
        <div className="fade-in-section flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            href="https://api.whatsapp.com/send?phone=5491136677321&text=Hola! Quiero agendar una sesión gratuita"
            className="hero-button-primary"
          >
            💬 Agenda tu sesión gratuita de 15 min
          </Button>
          <Button
            variant="secondary"
            href="/#sobre-mi"
            className="bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white/20"
          >
            Conocé más sobre nosotros
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
