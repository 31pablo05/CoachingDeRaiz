import React, { useRef } from 'react';
import { cases, logos, testimonials } from '../data/casos';

const areaClass = 'text-[color:color-mix(in_srgb,rgb(var(--color-crema))_82%,rgb(var(--color-bosque-dark))_18%)]';

const CaseText = ({ parts }) => (
  <>
    {parts.map((part, index) => (
      typeof part === 'string'
        ? <span key={index}>{part}</span>
        : <strong key={index} className="font-semibold text-white">{part.strong}</strong>
    ))}
  </>
);

const Casos = () => {
  const scrollerRef = useRef(null);

  const scrollTestimonials = (direction) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector('li');
    if (!scroller || !card) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scroller.scrollBy({
      left: direction * (card.offsetWidth + 16),
      behavior: reduce ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="casos" aria-labelledby="casos-titulo">
      <div className="section-papel section-padding">
        <div className="container-custom">
          <header className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Algunas intervenciones</p>
            <h2 id="casos-titulo" className="mt-4 font-heading">Cada desafío requiere una intervención diferente</h2>
            <p className="mt-5 text-base leading-relaxed text-tinta-soft md:text-lg">
              El proceso se diseña a partir de lo que la organización necesita transformar.
            </p>
          </header>

          <ul className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
            {cases.map((item) => (
              <li key={item.id} className="relative flex h-full flex-col rounded-[28px] bg-bosque p-7 text-crema md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="chip">{item.sector}</span>
                  {item.logo?.src ? (
                    <img src={item.logo.src} alt={item.logo.alt || ''} className="h-10 w-auto max-w-[7rem] object-contain" />
                  ) : null}
                </div>
                <h3 className="mt-6 font-heading text-2xl font-medium leading-snug text-crema md:text-3xl">{item.name}</h3>
                <p className={`mt-2 text-sm font-medium ${areaClass}`}>{item.area}</p>
                <p className="mt-5 text-sm leading-relaxed text-crema md:text-base">
                  <CaseText parts={item.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {logos.length > 0 && (
        <div className="section-crema section-padding">
          <div className="container-custom">
            <header className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Confían en este trabajo</p>
              <h2 className="mt-4 font-heading">Empresas con las que trabajó</h2>
            </header>

            <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
              {logos.map((logo) => (
                <li key={logo.id} className="lg:w-40">
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-crema-dark bg-papel/60 px-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100">
                    {logo.src ? (
                      <img src={logo.src} alt={logo.name} className="max-h-10 w-full object-contain" />
                    ) : (
                      <span className="text-center text-sm font-medium text-tinta-soft">{logo.name}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {testimonials.length > 0 && (
        <div className="section-papel section-padding">
          <div className="container-custom">
            <header className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Lo que dicen</p>
              <h2 className="mt-4 font-heading">Lo que cuentan quienes trabajaron con Lucía</h2>
            </header>

            <ul
              ref={scrollerRef}
              className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:thin] lg:mt-16 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
              aria-label="Testimonios"
            >
              {testimonials.map((item) => (
                <li key={item.id} className="w-[85%] shrink-0 snap-start lg:w-auto">
                  <blockquote className="flex h-full flex-col rounded-card bg-white p-7 shadow-soft">
                    <span className="font-heading text-6xl leading-none text-terracota" aria-hidden="true">“</span>
                    <p className="font-heading text-xl font-medium italic leading-snug text-tinta">{item.quote}</p>
                    <footer className="mt-auto flex items-center gap-3 pt-8">
                      {item.logo?.src ? (
                        <img src={item.logo.src} alt={item.logo.alt || ''} className="h-9 w-9 shrink-0 rounded-full object-contain" />
                      ) : null}
                      <div>
                        <p className="text-sm font-semibold text-tinta">{item.name}</p>
                        <p className="text-sm text-tinta-soft">{item.role} · {item.company}</p>
                      </div>
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => scrollTestimonials(-1)}
                aria-label="Testimonio anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bosque text-bosque transition-colors hover:bg-bosque hover:text-crema"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 6 9 12l6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials(1)}
                aria-label="Testimonio siguiente"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bosque text-bosque transition-colors hover:bg-bosque hover:text-crema"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Casos;
