import React, { useEffect, useRef } from 'react';

const WhatIsCoaching = () => {
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

  const coachingAspects = [
    {
      title: '¿Qué es el Coaching Ontológico?',
      description: 'Es una disciplina que acompaña a personas y equipos en procesos de transformación profunda. No se trata de dar consejos ni de decirte qué hacer, sino de generar espacios de reflexión donde puedas observar tu manera de ser, tus patrones y creencias, para elegir con mayor conciencia.',
      icon: '🌱',
    },
    {
      title: '¿Para qué sirve?',
      description: 'Para expandir tu capacidad de acción, mejorar tus relaciones, fortalecer tu liderazgo y alcanzar resultados que antes no podías ver. Es una herramienta poderosa tanto para el desarrollo personal como para el crecimiento organizacional.',
      icon: '🎯',
    },
    {
      title: '¿Cómo funciona?',
      description: 'A través de conversaciones profundas y preguntas que te invitan a reflexionar. El coaching ontológico trabaja desde el lenguaje, las emociones y el cuerpo para que puedas transformar tu forma de observar el mundo y actuar en él.',
      icon: '💭',
    },
    {
      title: 'Diferencias con otras disciplinas',
      description: 'No es terapia (no trabaja el pasado), no es mentoría (no te dice qué hacer), ni consultoría (no soluciona por vos). Es un proceso donde vos sos protagonista de tu propio cambio, y yo te acompaño a ver lo que no estás viendo.',
      icon: '🔍',
    },
  ];

  return (
    <section 
      id="coaching" 
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ¿Qué es el Coaching?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent-lime mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Descubrí cómo el coaching ontológico puede transformar tu manera de liderar, relacionarte y crecer
          </p>
        </div>

        {/* Coaching Aspects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coachingAspects.map((aspect, index) => (
            <div 
              key={index}
              className="fade-in-section card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{aspect.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{aspect.title}</h3>
              <p className="text-gray-700 leading-relaxed">{aspect.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center fade-in-section">
          <div className="bg-gradient-to-r from-neutral-cream to-neutral-beige rounded-2xl p-8 md:p-12 border-2 border-secondary-light">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ¿Querés experimentar el coaching?
            </h3>
            <p className="text-gray-700 mb-6 text-lg max-w-2xl mx-auto">
              Te invito a una sesión gratuita de 15 minutos donde podemos conversar sobre tus inquietudes y ver si el coaching es lo que estás buscando.
            </p>
            <a
              href="https://wa.me/message/VPS3R5LKA4QNJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-secondary to-accent-lime text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar sesión gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCoaching;
