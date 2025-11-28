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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

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
            <div className="relative group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light via-secondary to-accent-lime/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl aspect-square transform group-hover:scale-[1.02] transition-all duration-500">
                <img 
                  src="/imagenes/lucia3.png" 
                  alt="Lucía Vallejo - Ingeniera Civil, Project Manager y Coach Ontológica Empresarial certificada por ECORE Newfield Consulting"
                  title="Lucía Vallejo - Coach Ontológica Empresarial"
                  width="800"
                  height="800"
                  loading="eager"
                  itemProp="image"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-2 px-4 py-1 bg-secondary/10 rounded-full">
              Mi Trayectoria
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mt-4">
              Formación y Experiencia
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="card text-center group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {cert.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-2 text-lg group-hover:text-secondary transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-600">{cert.institution}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-lime/20 to-transparent transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Carousel Section - Full Width Auto-Loop */}
        <div className="mt-16 fade-in-section">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 container-custom px-6 md:px-12 lg:px-20">
            Mi Historia y Propósito
          </h3>
          <div className="relative w-full md:container-custom md:max-w-6xl md:mx-auto md:px-12 lg:px-20">
            {/* Carousel Container */}
            <div className="relative overflow-hidden md:rounded-2xl shadow-2xl bg-white">
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
                      width="1200"
                      height="800"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="w-full h-full object-contain"
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
