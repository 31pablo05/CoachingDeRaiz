import React, { useEffect, useRef, useState } from 'react';

const WhatIsCoaching = () => {
  const sectionRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

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

  const coachingImages = [
    { id: 1, src: '/imagenes/quees1.jpg', alt: 'Qué es el Coaching - Parte 1' },
    { id: 2, src: '/imagenes/quees2.jpg', alt: 'Qué es el Coaching - Parte 2' },
    { id: 3, src: '/imagenes/quees3.jpg', alt: 'Qué es el Coaching - Parte 3' },
    { id: 4, src: '/imagenes/quees4.jpg', alt: 'Qué es el Coaching - Parte 4' },
    { id: 5, src: '/imagenes/quees5.jpg', alt: 'Qué es el Coaching - Parte 5' },
    { id: 6, src: '/imagenes/quees6.jpg', alt: 'Qué es el Coaching - Parte 6' },
    { id: 7, src: '/imagenes/quees7.jpg', alt: 'Qué es el Coaching - Parte 7' },
  ];

  return (
    <section 
      id="coaching" 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fefcea 30%, #f8faf5 70%, #e8f0e4 100%)'
      }}
    >
      {/* Elegant Background Elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none coaching-background-orbs"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <span className="inline-block text-[#5a7458] font-semibold text-sm uppercase tracking-wider mb-3 px-4 py-1 bg-[#5a7458]/10 rounded-full">
            Coaching Ontológico
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#5a7458] via-[#7a9477] to-[#5a7458] bg-clip-text text-transparent mb-6">
            ¿Qué es el Coaching?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#5a7458] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubrí cómo el coaching ontológico puede transformar tu manera de liderar, relacionarte y crecer
          </p>
        </div>

        {/* Image Accordion/Gallery */}
        <div className="fade-in-section mb-16">
          {/* Desktop View - Horizontal Accordion */}
          <div className="hidden lg:flex gap-2 h-[600px]">
            {coachingImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer group ${
                  activeImage === index ? 'flex-[4]' : 'flex-[0.5] hover:flex-[0.7]'
                }`}
                onClick={() => setActiveImage(index)}
                onMouseEnter={() => setActiveImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-white"
                />
                {/* Overlay for inactive images */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#5a7458]/40 to-[#7a9477]/40 transition-opacity duration-500 ${
                  activeImage === index ? 'opacity-0' : 'opacity-60 group-hover:opacity-40'
                }`}></div>

                {/* Expand hint for inactive */}
                {activeImage !== index && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full text-[#5a7458] font-semibold shadow-xl">
                      Click para ampliar
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet View - Carousel with single active image */}
          <div className="lg:hidden">
            {/* Active Image Display */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-6">
              <img
                src={coachingImages[activeImage].src}
                alt={coachingImages[activeImage].alt}
                className="w-full h-auto object-contain bg-white"
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory">
              {coachingImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden transition-all duration-300 snap-center ${
                    activeImage === index
                      ? 'ring-4 ring-[#5a7458] scale-110 shadow-lg'
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setActiveImage((prev) => (prev === 0 ? coachingImages.length - 1 : prev - 1))}
                className="bg-[#5a7458] hover:bg-[#7a9477] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Imagen anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveImage((prev) => (prev === coachingImages.length - 1 ? 0 : prev + 1))}
                className="bg-[#5a7458] hover:bg-[#7a9477] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Imagen siguiente"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicator */}
            <div className="text-center mt-4">
              <span className="text-[#5a7458] font-semibold">
                {activeImage + 1} / {coachingImages.length}
              </span>
            </div>
          </div>

          {/* Navigation dots for desktop accordion */}
          <div className="hidden lg:flex justify-center gap-3 mt-8">
            {coachingImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeImage === index
                    ? 'w-12 h-3 bg-gradient-to-r from-[#5a7458] to-[#7a9477]'
                    : 'w-3 h-3 bg-[#5a7458]/30 hover:bg-[#5a7458]/50'
                }`}
                aria-label={`Ver imagen ${image.id}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center fade-in-section">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#5a7458] via-[#6b8468] to-[#7a9477] rounded-3xl p-10 md:p-14 shadow-2xl border border-white/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#fefcea]/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <span className="text-5xl">🎁</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Querés experimentar el coaching?
              </h3>
              <p className="text-white/90 mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Te invito a una sesión gratuita de 15 minutos donde podemos conversar sobre tus inquietudes y ver si el coaching es lo que estás buscando.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5491136677321&text=Hola! Me gustaría agendar una sesión gratuita de 15 minutos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#5a7458] font-bold py-4 px-10 rounded-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 group"
              >
                <svg className="w-6 h-6 animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

export default WhatIsCoaching;
