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
      title: 'Coaching Ejecutivo',
      icon: '👔',
      image: '/imagenes/coachingEjecutivo.PNG',
      description: 'Acompañamos a líderes, mandos medios y equipos directivos en procesos de desarrollo de liderazgo, alineados con los objetivos estratégicos de la organización.',
      results: [
        'Mayor claridad en la toma de decisiones.',
        'Comunicación más efectiva y feedback constructivo.',
        'Liderazgos más presentes, empáticos y orientados a resultados.',
        'Disminución de la sobrecarga y mejora del clima laboral.'
      ],
      methodology: 'Sesiones individuales de coaching, donde se acompaña al líder en sus desafíos reales y se potencia su capacidad de influencia y toma de decisiones.'
    },
    {
      title: 'Coaching de Equipos',
      icon: '👥',
      image: '/imagenes/coachingEquipos.PNG',
      description: 'Facilitamos espacios de conversación y aprendizaje compartido donde los equipos mejoran su coordinación, confianza y sentido de propósito común.',
      results: [
        'Mejor colaboración y sinergia entre áreas.',
        'Mayor productividad y sentido de responsabilidad compartida.',
        'Menos conflictos y más innovación.'
      ],
      methodology: 'Encuentros grupales y talleres de liderazgo, orientados a fortalecer la comunicación, la confianza y la colaboración entre pares.'
    },
    {
      title: 'Transformación Organizacional',
      icon: '🔄',
      image: '/imagenes/descarga2.jpg',
      description: 'Diseñamos intervenciones a medida para acompañar procesos de cambio, desarrollo de liderazgo o mejora del clima.',
      approach: [
        'Diagnóstico de clima y cultura.',
        'Acompañamiento en gestión del cambio.',
        'Talleres de liderazgo, comunicación y gestión emocional.',
        'Seguimiento de impacto con indicadores cuantitativos y cualitativos.'
      ],
      methodology: 'Reuniones de alineación con RRHH o Dirección, para asegurar coherencia con los objetivos organizacionales y evaluar avances medibles.'
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

  const additionalInfo = [
    {
      title: 'Cómo Trabajamos',
      icon: '🔧',
      subtitle: 'Combinamos:',
      pillars: 'Coaching Ontológico + Gestión de proyectos + Inteligencia emocional aplicada al liderazgo',
      description: 'Creamos espacios de reflexión y acción que permiten a las personas mirar hacia adentro, reconocer sus patrones de comunicación y liderazgo, y diseñar nuevas formas de vincularse con sus equipos.',
      features: [
        { label: 'Mirada sistémica', desc: 'Entendemos la organización como un sistema interconectado.' },
        { label: 'Cuerpo, emoción y lenguaje', desc: 'Intervenimos en los tres dominios del aprendizaje humano.' },
        { label: 'Prácticas de liderazgo', desc: 'Feedback, coordinación, escucha y conversaciones efectivas.' },
        { label: 'Gestión del cambio', desc: 'Acompañamos a líderes en procesos de transformación real.' },
        { label: 'Estructuras liberadoras', desc: 'Facilitamos la participación colectiva.' }
      ]
    },
    {
      title: 'Propuesta de Inversión',
      icon: '💰',
      subtitle: 'Cada propuesta se diseña a medida según el alcance, cantidad de participantes y objetivos del proceso.',
      description: 'Buscamos que la inversión refleje el valor del acompañamiento y el impacto que genera en la organización.',
      packages: [
        { name: 'Paquete Inicial', hours: '10 horas mensuales', desc: 'Acompañamiento a líderes o equipos. Incluye sesiones, reuniones de seguimiento y diseño de plan de acción.' },
        { name: 'Sesión individual', desc: 'Coaching individual o sesión de equipo.' }
      ],
      cta: 'Te invitamos a coordinar una consulta inicial gratuita (sin compromiso) para conocernos y diseñar juntos la mejor modalidad para vos y/o tu equipo.'
    },
    {
      title: 'Por Qué Elegirnos',
      icon: '⭐',
      reasons: [
        'Combinamos mirada humana y pensamiento estructurado: la sensibilidad del coaching con la precisión de la ingeniería.',
        'Nos enfocamos en impactar resultados, no solo en generar reflexión.',
        'Traducimos lo intangible del desarrollo humano en indicadores de negocio: retención, productividad, compromiso y calidad.'
      ]
    }
  ];

  return (
    <section 
      id="servicios" 
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      aria-label="Servicios de coaching ejecutivo, coaching de equipos y transformación organizacional"
      style={{
        background: 'linear-gradient(180deg, #fefcea 0%, #f8faf5 30%, #e8f0e4 70%, #d4e5d0 100%)'
      }}
    >
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#5a7458]/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-[#7a9477]/5 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="container-custom px-6 md:px-12 lg:px-20 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block text-[#5a7458] font-semibold text-sm uppercase tracking-wider mb-3 px-4 py-1 bg-[#5a7458]/10 rounded-full">
            Coaching Organizacional
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5a7458] via-[#7a9477] to-[#5a7458] bg-clip-text text-transparent mb-6" itemProp="serviceType">
            Servicios de Coaching Ontológico Empresarial
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#5a7458] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Acompaño a líderes, equipos y profesionales a alcanzar sus objetivos fortaleciendo el liderazgo, la comunicación y la confianza.
          </p>
        </div>

        {/* Services Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="fade-in-section"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Additional Information Section - New */}
        <div className="mt-24 fade-in-section">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#5a7458] mb-4">
              Conoce Más Sobre Nuestra Propuesta
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#7a9477] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalInfo.map((info, index) => (
              <div 
                key={index}
                className="fade-in-section group"
                style={{ animationDelay: `${(services.length + index) * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-[#5a7458]/10 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(90,116,88,0.2)] h-full">
                  
                  {/* Header with Icon and Title */}
                  <div className="bg-gradient-to-r from-[#5a7458] to-[#7a9477] p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{info.icon}</span>
                      <h4 className="text-2xl font-bold">{info.title}</h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Cómo Trabajamos */}
                    {info.subtitle && (
                      <>
                        <p className="font-semibold text-[#5a7458] mb-2">{info.subtitle}</p>
                        {info.pillars && (
                          <p className="text-sm text-[#7a9477] font-medium mb-4 italic">{info.pillars}</p>
                        )}
                        <p className="text-gray-700 mb-6 leading-relaxed">{info.description}</p>
                        
                        {info.features && (
                          <div className="space-y-4">
                            {info.features.map((feature, idx) => (
                              <div key={idx} className="border-l-4 border-[#7a9477] pl-4">
                                <h5 className="font-bold text-[#5a7458] text-sm mb-1">{feature.label}</h5>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                    {/* Propuesta de Inversión */}
                    {info.packages && (
                      <>
                        <p className="text-gray-700 mb-4 leading-relaxed">{info.subtitle}</p>
                        <p className="text-gray-700 mb-6 leading-relaxed font-medium">{info.description}</p>
                        
                        <div className="bg-[#5a7458]/5 rounded-xl p-4 mb-6">
                          <p className="font-semibold text-[#5a7458] mb-4">Nuestras propuestas estándar:</p>
                          <div className="space-y-4">
                            {info.packages.map((pkg, idx) => (
                              <div key={idx} className="bg-white rounded-lg p-4 shadow-md border border-[#5a7458]/10">
                                <div className="flex items-start gap-2 mb-2">
                                  <span className="text-[#7a9477] font-bold">•</span>
                                  <div>
                                    <h5 className="font-bold text-[#5a7458]">{pkg.name}</h5>
                                    {pkg.hours && <p className="text-sm text-[#7a9477] font-medium">{pkg.hours}</p>}
                                  </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed ml-4">{pkg.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#fefcea] to-[#e8f0e4] rounded-lg p-4 border border-[#7a9477]/20">
                          <p className="text-gray-700 text-sm leading-relaxed italic">{info.cta}</p>
                        </div>
                      </>
                    )}

                    {/* Por Qué Elegirnos */}
                    {info.reasons && (
                      <div className="space-y-4">
                        {info.reasons.map((reason, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#5a7458]/5 to-[#7a9477]/5 rounded-lg border-l-4 border-[#7a9477] hover:shadow-md transition-shadow duration-300">
                            <span className="text-[#7a9477] text-xl flex-shrink-0 mt-1">✓</span>
                            <p className="text-gray-700 leading-relaxed">{reason}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#7a9477]/10 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Enhanced */}
        <div className="mt-20 text-center fade-in-section">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#5a7458] via-[#6b8468] to-[#7a9477] rounded-3xl p-10 md:p-14 shadow-2xl border border-white/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fefcea]/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <span className="text-5xl">💡</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿No sabés cuál es el servicio ideal para vos?
              </h3>
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Agendá una sesión gratuita de 15 minutos y conversemos sobre tus necesidades. Sin compromiso.
              </p>
              <a
                href="https://wa.me/message/VPS3R5LKA4QNJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#5a7458] font-bold py-4 px-10 rounded-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group"
              >
                <svg className="w-6 h-6 animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
                </svg>
                <span className="text-lg">Agendar Sesión Gratuita</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
