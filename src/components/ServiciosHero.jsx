import React, { useRef } from 'react';
import { WHATSAPP_URL } from '../lib/site';

const ServiciosHero = () => {
  const sectionRef = useRef(null);

  const goToNext = () => {
    const current = sectionRef.current;
    if (!current) return;

    const host = current.parentElement;
    const nextHost = host?.nextElementSibling;
    const target = nextHost?.querySelector('section, [id]') ?? nextHost ?? document.getElementById('servicios');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    target?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Experiencias e intervenciones para organizaciones"
      className="relative flex min-h-svh flex-col bg-gradient-to-br from-bosque via-bosque-dark to-bosque-darker text-crema"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-terracota/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-crema/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 my-auto w-full py-16 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-body text-xs font-semibold uppercase leading-relaxed tracking-[0.16em] text-crema/70">
              Coaching de equipos · Workshops · Intervenciones a medida
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Experiencias e intervenciones para <span className="title-highlight">organizaciones</span>
            </h2>
            <p className="mt-5 font-body text-lg font-medium leading-snug text-crema md:text-xl">
              Diseño experiencias a partir de lo que cada organización necesita mover.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-crema/75">
              Acompaño a líderes y equipos en procesos de transformación, integrando estructura, estrategia y humanidad para lograr resultados sostenibles y culturas más saludables.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Agendar una charla
                <span className="sr-only">, se abre en WhatsApp</span>
              </a>
              <a href="#formatos" className="btn-outline-light w-full sm:w-auto">
                Ver formatos
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-crema/70">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" aria-hidden="true" />
              Contanos tu desafío
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-[330px] pb-14 lg:mx-0 lg:max-w-none lg:pb-16">
            <img
              src="/imagenes/lu2.jpg"
              alt="Lucía Vallejo presentando frente a una pantalla"
              width="960"
              height="720"
              className="mx-auto h-auto max-h-[330px] w-full rounded-[32px] border border-crema/40 object-contain object-center shadow-[0_28px_50px_-12px_rgb(var(--color-bosque-darker)/0.7)] lg:mx-0 lg:max-h-[min(34rem,calc(100svh-12rem))] lg:max-w-full lg:object-cover"
            />
            <figcaption className="absolute bottom-2 left-0 z-10 max-w-[17rem] rounded-[20px] bg-crema px-4 py-3 shadow-soft sm:-left-3 sm:max-w-xs sm:px-5 sm:py-4">
              <p className="font-heading text-lg font-semibold leading-tight text-tinta">Lucía Vallejo</p>
              <p className="mt-1 text-xs leading-snug text-tinta-soft">
                Coach ontológico empresarial · Project Manager · Ingeniera Civil
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 lg:mt-14">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-crema/70">
            Empezá por acá
          </p>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Bajar al bloque siguiente"
            className="hero-float inline-flex h-12 w-12 items-center justify-center rounded-full border border-crema/50 text-crema transition-colors hover:bg-crema hover:text-bosque-darker"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHero;
