import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
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

  const services = [
    {
      title: 'Coaching Organizacional',
      description: 'Acompaño a líderes, equipos y profesionales a alcanzar sus objetivos fortaleciendo el liderazgo, la comunicación y la confianza.',
      icon: '🏢',
    },
    {
      title: 'Coaching Ejecutivo',
      description: 'Acompañamos a líderes, mandos medios y equipos directivos en procesos de desarrollo de liderazgo, alineados con los objetivos estratégicos de la organización.',
      icon: '👔',
    },
    {
      title: 'Coaching de Equipos',
      description: 'Facilitamos espacios de conversación y aprendizaje compartido donde los equipos mejoran su coordinación, confianza y sentido de propósito común.',
      icon: '👥',
    },
    {
      title: 'Transformación Organizacional',
      description: 'Diseñamos intervenciones a medida para acompañar procesos de cambio, desarrollo de liderazgo o mejora del clima.',
      icon: '🔄',
    },
    {
      title: 'Sesiones de Coaching Individual',
      description: 'Será un encuentro en el que vas a poder detenerte, mirar hacia adentro y explorar lo que hoy te está haciendo ruido o querés transformar.',
      price: '$45.000',
      icon: '💬',
      ctaText: 'Agendá tu sesión',
    },
    {
      title: 'Sesión gratuita de 15 min',
      description: 'Coordinamos una breve conversación de 15 minutos para conocernos, contarte cómo trabajo como coach y escuchar qué estás necesitando en este momento. Es un espacio sin compromiso.',
      price: 'GRATIS',
      featured: true,
      icon: '🎁',
      ctaText: 'Reservar ahora',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-neutral-beige via-neutral-cream to-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent-lime mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Acompaño procesos de transformación personal y organizacional desde una mirada integral y humana
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full">
                {/* Icon */}
                <div className="text-5xl mb-4 text-center">{service.icon}</div>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  featured={service.featured}
                  ctaText={service.ctaText}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center fade-in-section">
          <div className="bg-gradient-to-r from-primary to-primary-deeper rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿No sabés cuál es el servicio ideal para vos?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Agendá una sesión gratuita de 15 minutos y conversemos sobre tus necesidades
            </p>
            <a
              href="https://wa.me/message/VPS3R5LKA4QNJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar sesión gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
