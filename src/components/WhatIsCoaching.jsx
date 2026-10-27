import React, { useState } from 'react';
import { WHATSAPP_URL } from '../lib/site';

const coachingModules = import.meta.glob(
  '../../public/imagenes/quees*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default', query: '?url' }
);

const toImageSrc = (src) => {
  const value = String(src);
  return value.includes('/public/imagenes/') ? value.replace('/public', '') : value;
};

const coachingImages = Object.entries(coachingModules)
  .sort(([a], [b]) => a.localeCompare(b, 'es', { numeric: true }))
  .map(([path, src], index) => ({
    id: path,
    src: toImageSrc(src),
    alt: `Qué es coaching, imagen ${index + 1}`,
  }));

const WhatIsCoaching = () => {
  const [activeImage, setActiveImage] = useState(0);
  const total = coachingImages.length;
  const currentIndex = total === 0 ? 0 : Math.min(activeImage, total - 1);
  const current = coachingImages[currentIndex];

  const showPrevious = () => {
    setActiveImage((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveImage((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section id="que-es-coaching" aria-labelledby="que-es-coaching-titulo" className="section-crema section-padding">
      <div className="container-custom">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="eyebrow">Coaching ontológico</p>
          <h2 id="que-es-coaching-titulo" className="mt-4 font-heading">¿Qué es coaching?</h2>
          <p className="mt-5 text-base leading-relaxed text-tinta-soft md:text-lg">
            Descubrí cómo el coaching ontológico puede transformar tu manera de liderar, relacionarte y crecer
          </p>
        </header>

        {total > 0 && (
          <div>
            <div className="hidden h-[600px] gap-2 lg:flex">
              {coachingImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  onMouseEnter={() => setActiveImage(index)}
                  aria-label={image.alt}
                  aria-pressed={currentIndex === index}
                  className={`group relative h-full min-w-0 overflow-hidden rounded-[28px] shadow-soft transition-all duration-700 ${
                    currentIndex === index ? 'flex-[4]' : 'flex-[0.5] hover:flex-[0.7]'
                  }`}
                >
                  <img src={image.src} alt="" className="h-full w-full bg-papel object-contain" />
                  <span
                    className={`absolute inset-0 bg-bosque/45 transition-opacity duration-500 ${
                      currentIndex === index ? 'opacity-0' : 'opacity-60 group-hover:opacity-40'
                    }`}
                  />
                  {currentIndex !== index && (
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-papel px-5 py-2 text-sm font-semibold text-bosque shadow-soft">
                        Click para ampliar
                      </span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-8 hidden items-center justify-center gap-4 lg:flex">
              <button
                type="button"
                onClick={showPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-bosque text-crema transition-colors hover:bg-bosque-dark"
                aria-label="Imagen anterior"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <p className="min-w-16 text-center text-sm font-semibold text-bosque" aria-live="polite">
                {currentIndex + 1} / {total}
              </p>
              <button
                type="button"
                onClick={showNext}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-bosque text-crema transition-colors hover:bg-bosque-dark"
                aria-label="Imagen siguiente"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="lg:hidden">
              <div className="overflow-hidden rounded-[28px] bg-papel shadow-soft">
                <img src={current.src} alt={current.alt} className="h-auto w-full object-contain" />
              </div>

              <div className="mt-4 flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
                {coachingImages.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={image.alt}
                    aria-pressed={currentIndex === index}
                    className={`h-20 w-20 shrink-0 snap-center overflow-hidden rounded-xl transition-opacity sm:h-24 sm:w-24 ${
                      currentIndex === index ? 'opacity-100 ring-2 ring-bosque' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={image.src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-bosque text-crema transition-colors hover:bg-bosque-dark"
                  aria-label="Imagen anterior"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <p className="min-w-16 text-center text-sm font-semibold text-bosque" aria-live="polite">
                  {currentIndex + 1} / {total}
                </p>
                <button
                  type="button"
                  onClick={showNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-bosque text-crema transition-colors hover:bg-bosque-dark"
                  aria-label="Imagen siguiente"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto mt-16 max-w-2xl border-t border-crema-dark pt-12 text-center md:mt-20">
          <h3 className="font-heading text-2xl font-medium text-tinta md:text-3xl">Contanos tu desafío</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCoaching;
