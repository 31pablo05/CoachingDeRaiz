import React, { useEffect, useRef } from 'react';
import Button from './Button';

const About = () => {
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
      id="about" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="fade-in-section">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl transform rotate-3"></div>
              <div className="relative bg-neutral-gray rounded-2xl overflow-hidden shadow-xl aspect-square flex items-center justify-center">
                {/* Placeholder for photo - replace with actual image */}
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center text-6xl mb-4">
                    👤
                  </div>
                  <p className="text-sm text-gray-600">Foto de Lucía Vallejo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              ¿Quién soy?
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Soy <span className="font-semibold text-primary">Lucía Vallejo</span>, Ingeniera Civil, Especialista en Gestión de Proyectos (UBA) y Coach Ontológica certificada por ECORE – Newfield Consulting.
              </p>
              
              <p>
                Cuento con más de 10 años de experiencia liderando proyectos en empresas industriales y de energía.
              </p>
              
              <p>
                Mi formación me brindó pensamiento lógico, estructura y planificación. Sin embargo, con el tiempo descubrí que lo que más me motivaba era trabajar con personas, liderar equipos, conectar y construir en conjunto.
              </p>
              
              <p className="font-medium text-primary-dark">
                Hoy acompaño a líderes y equipos en procesos de transformación, integrando estructura, estrategia y humanidad para lograr resultados sostenibles y culturas más saludables.
              </p>
            </div>

            <Button 
              variant="primary" 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8"
            >
              Conectá conmigo
            </Button>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mt-16 fade-in-section">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Formación y Experiencia
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="card text-center hover:scale-105"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="font-bold text-primary mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600">{cert.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
