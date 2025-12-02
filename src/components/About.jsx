import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';

const About = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const presentationImages = [
    '/imagenes/presentacion1.webp',
    '/imagenes/presentacion2.webp',
    '/imagenes/presentacion3.webp',
    '/imagenes/presentacion4.webp',
    '/imagenes/presentacion5.webp',
    '/imagenes/presentacion6.webp',
    '/imagenes/presentacion7.webp',
  ];

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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % presentationImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [presentationImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % presentationImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + presentationImages.length) % presentationImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const certifications = [
    {
      icon: '🎓',
      title: 'Ingeniera Civil',
      institution: 'Universidad',
    },
    {
      icon: '📊',
      title: 'Especialista en Gestión de Proyectos',
      institution: 'UBA',
    },
    {
      icon: '🌱',
      title: 'Coach Ontológica Empresarial',
      institution: 'ECORE - Newfield Consulting / UTDT',
    },
    {
      icon: '💼',
      title: '+10 años de experiencia',
      institution: 'Liderazgo en empresas industriales y de energía',
    },
  ];

  return (
    <section 
      id="sobre-mi" 
      ref={sectionRef}
      className="bg-gradient-to-b from-white via-neutral-cream/30 to-white relative overflow-x-hidden py-16 md:py-24"
      aria-label="Sobre Lucía Vallejo - Perfil profesional y trayectoria"
    >
      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none about-background-orbs"></div>

      <div className="relative z-10">
        {/* Section Title with Animation */}
        <div className="text-center mb-16 fade-in-section container-custom px-6 md:px-12 lg:px-20">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2 px-4 py-1 bg-secondary/10 rounded-full">
            Conoce a tu Coach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-3" itemProp="headline">
            Sobre Mí - Lucía Vallejo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent-lime to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 container-custom px-6 md:px-12 lg:px-20">
          {/* Enhanced Image Section with Hover Effects */}
          <div className="fade-in-section">
            <div className="relative group about-image-card">
              {/* Main image container - overlays handled by CSS pseudo-elements */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl aspect-square transform group-hover:scale-[1.02] transition-all duration-500">
                <img 
                  src="/imagenes/lucia3.webp" 
                  alt="Lucía Vallejo - Ingeniera Civil, Project Manager y Coach Ontológica Empresarial certificada por ECORE Newfield Consulting"
                  title="Lucía Vallejo - Coach Ontológica Empresarial"
                  loading="eager"
                  itemProp="image"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ contentVisibility: 'auto' }}
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Coach Ontológica Certificada
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-lime rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="fade-in-section space-y-6">
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg hover:text-primary transition-colors duration-300">
                Soy <span className="font-bold text-primary text-xl">Lucía Vallejo</span>, Ingeniera Civil, Especialista en Gestión de Proyectos (UBA) y Coach Ontológica certificada por <span className="font-semibold text-secondary">ECORE – Newfield Consulting</span>.
              </p>
              
              <div className="pl-4 border-l-4 border-secondary/30 hover:border-secondary transition-colors duration-300">
                <p className="italic">
                  Cuento con más de <span className="font-bold text-secondary">10 años de experiencia</span> liderando proyectos en empresas industriales y de energía.
                </p>
              </div>
              
              <p className="text-lg">
                Mi formación me brindó pensamiento lógico, estructura y planificación. Sin embargo, con el tiempo descubrí que lo que más me motivaba era <span className="font-semibold text-primary">trabajar con personas, liderar equipos, conectar y construir en conjunto</span>.
              </p>
              
              <div className="bg-gradient-to-r from-secondary/10 to-accent-lime/10 p-6 rounded-xl border-l-4 border-secondary">
                <p className="font-semibold text-primary-dark text-lg">
                  Hoy acompaño a líderes y equipos en procesos de transformación, integrando estructura, estrategia y humanidad para lograr resultados sostenibles y culturas más saludables.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button 
                variant="primary" 
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto transform hover:scale-105 hover:shadow-2xl transition-all duration-300 text-sm md:text-base"
              >
                Conectá conmigo
              </Button>
              <Button 
                variant="secondary" 
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                Ver Servicios
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Certifications Grid with Stagger Animation */}
        <div className="fade-in-section container-custom px-6 md:px-12 lg:px-20">
          <div className="text-center mb-0 md:mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-1 px-4 py-1 bg-secondary/10 rounded-full">
              Mi Trayectoria
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mt-4 md:mt-4">
              Formación y Experiencia
            </h3>
          </div>
          
          {/* Background Image */}
          <div className="relative min-h-[700px] md:min-h-[900px] lg:min-h-[1100px] -mt-8 md:mt-0">
            {/* Image container */}
            <div className="absolute left-0 right-0 -mx-6 md:-mx-12 lg:-mx-20 flex items-end justify-center pointer-events-none top-[-25px] md:top-[0px]">
              <div className="relative w-[75%] md:w-full h-[600px] md:h-[800px] lg:h-[1000px]">
                <img
                  src="/imagenes/LuciaVallejo-45.jpg"
                  alt="Lucía Vallejo - Coach Profesional"
                  className="w-full h-full object-contain scale-150 md:scale-125"
                  loading="lazy"
                  style={{ contentVisibility: 'auto' }}
                />
              </div>
            </div>

            {/* Left Side Certifications - Academic */}
            <div className="absolute left-0 -translate-x-[15%] -translate-y-[140%] md:left-8 md:translate-x-0 md:-translate-y-[120%] lg:left-0 top-1/2 lg:-translate-x-[50%] lg:-translate-y-[130%] z-10 space-y-2 md:space-y-4 w-[28%] md:w-[35%] lg:w-[28%]">
              {/* Ingeniera Civil */}
              <div className="card text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden p-1.5 md:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-xl md:text-4xl lg:text-5xl mb-1 md:mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    🎓
                  </div>
                  <h4 className="font-bold text-primary mb-0.5 md:mb-2 text-[9px] leading-tight md:text-sm lg:text-lg group-hover:text-secondary transition-colors duration-300">
                    Ingeniera Civil
                  </h4>
                  <p className="text-[8px] md:text-xs lg:text-sm text-gray-600 leading-tight">Universidad</p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-lime/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
              </div>

              {/* Especialista en Gestión */}
              <div className="card text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden p-1.5 md:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-xl md:text-4xl lg:text-5xl mb-1 md:mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    📊
                  </div>
                  <h4 className="font-bold text-primary mb-0.5 md:mb-2 text-[9px] leading-tight md:text-sm lg:text-lg group-hover:text-secondary transition-colors duration-300">
                    Especialista en Gestión de Proyectos
                  </h4>
                  <p className="text-[8px] md:text-xs lg:text-sm text-gray-600 leading-tight">UBA</p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-lime/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
              </div>
            </div>

            {/* Right Side Certifications - Professional */}
            <div className="absolute right-0 md:right-0 lg:right-0 top-1/2 -translate-y-1/2 translate-x-[15%] -translate-y-[145%] md:translate-x-[35%] md:-translate-y-[120%] lg:translate-x-[50%] lg:-translate-y-[130%] z-10 space-y-1.5 md:space-y-4 w-[28%] md:w-[35%] lg:w-[28%]">
              {/* Coach Ontológica */}
              <div className="card text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden p-1 md:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-lg md:text-4xl lg:text-5xl mb-0.5 md:mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    🌱
                  </div>
                  <h4 className="font-bold text-primary mb-0 md:mb-2 text-[9px] leading-tight md:text-sm lg:text-lg group-hover:text-secondary transition-colors duration-300">
                    Coach Ontológica Empresarial
                  </h4>
                  <p className="text-[7px] md:text-xs lg:text-sm text-gray-600 leading-tight">ECORE - Newfield Consulting / UTDT</p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-lime/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
              </div>

              {/* Experiencia */}
              <div className="card text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden p-1 md:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-lg md:text-4xl lg:text-5xl mb-0.5 md:mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    💼
                  </div>
                  <h4 className="font-bold text-primary mb-0 md:mb-2 text-[9px] leading-tight md:text-sm lg:text-lg group-hover:text-secondary transition-colors duration-300">
                    +10 años de experiencia
                  </h4>
                  <p className="text-[7px] md:text-xs lg:text-sm text-gray-600 leading-tight">Liderazgo en empresas industriales y de energía</p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-lime/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Carousel Section - Full Width Auto-Loop */}
        <div className="mt-16 fade-in-section">
          <div className="relative w-full md:container-custom md:max-w-6xl md:mx-auto md:px-12 lg:px-20">
            
            {/* Carousel Container */}
            <div className="relative overflow-hidden md:rounded-2xl shadow-2xl bg-white">
             <h3 className="text-2xl font-bold text-primary text-center mb-8 px-6 md:px-12 lg:px-20">
              Mi Historia y Propósito
            </h3> {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                aria-label="Imagen anterior"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
                aria-label="Imagen siguiente"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Images */}
              <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
                {presentationImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Presentación de Lucía Vallejo sobre coaching ontológico y transformación organizacional - Slide ${index + 1}`}
                      title={`Mi historia y propósito - Lucía Vallejo Coach ${index + 1}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="w-full h-full object-contain"
                      style={{ contentVisibility: 'auto' }}
                    />
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {presentationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-6 md:w-8'
                        : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-4 text-gray-600 px-6 md:px-12 lg:px-20">
              <span className="font-semibold text-primary">{currentSlide + 1}</span> / {presentationImages.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
