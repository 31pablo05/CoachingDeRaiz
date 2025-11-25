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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-cream via-neutral-beige to-neutral-yellow relative overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="fade-in-section text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in">
            Coaching de Raíz
          </h1>

          {/* Subtitle */}
          <p className="fade-in-section text-xl md:text-2xl text-primary-dark mb-8 leading-relaxed font-body italic">
            "Así como una planta necesita raíces sanas para florecer, las personas necesitamos mirar hacia adentro para transformar nuestra forma de ser, liderar y vincularnos."
          </p>

          {/* Divider */}
          <div className="fade-in-section w-24 h-1 bg-gradient-to-r from-secondary to-accent-lime mx-auto mb-10"></div>

          {/* CTAs */}
          <div className="fade-in-section flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              href="https://wa.me/message/VPS3R5LKA4QNJ1"
              className="text-lg w-full sm:w-auto"
            >
              Agenda una sesión gratuita de 15 min
            </Button>
            <Button 
              variant="secondary" 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-lg w-full sm:w-auto"
            >
              Conoce más sobre mí
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="fade-in-section mt-16 animate-bounce">
            <svg 
              className="w-6 h-6 mx-auto text-secondary" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
