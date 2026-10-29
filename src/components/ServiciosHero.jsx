import React, { useRef } from 'react';
import { WHATSAPP_URL } from '../lib/site';

const ServiciosHero = () => {
  const sectionRef = useRef(null);

  const goToNext = () => {
    const current = sectionRef.current;
    if (!current) return;

    const navHeight = document.querySelector('header')?.offsetHeight ?? 0;
    const top = current.getBoundingClientRect().bottom + window.scrollY - navHeight;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Experiencias e intervenciones para organizaciones"
      className="relative flex flex-col bg-gradient-to-br from-bosque via-bosque-dark to-bosque-darker text-crema lg:min-h-svh"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-terracota/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full bg-crema/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 my-auto w-full pb-12 pt-8 md:py-16 lg:py-20">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
          <figure className="relative mx-auto w-full max-w-[340px] md:max-w-[380px] lg:order-2 lg:mx-0 lg:max-w-none lg:pb-16">
            <img
              src="/imagenes/lu2.jpg"
              alt="Lucía Vallejo presentando frente a una pantalla"
              width="620"
              height="1102"
              loading="lazy"
              decoding="async"
              className="block aspect-[3/4] w-full rounded-[28px] border border-crema/40 bg-bosque-dark object-cover object-[50%_35%] shadow-[0_28px_50px_-12px_rgb(var(--color-bosque-darker)/0.7)] lg:aspect-auto lg:h-auto lg:max-h-[min(34rem,calc(100svh-12rem))] lg:rounded-[32px] lg:object-center"
            />
            <figcaption className="absolute inset-x-3 bottom-3 z-10 rounded-[18px] bg-crema px-4 py-3 shadow-soft lg:inset-x-auto lg:-left-3 lg:bottom-2 lg:max-w-xs lg:rounded-[20px] lg:px-5 lg:py-4">
              <p className="font-heading text-lg font-semibold leading-tight text-tinta">Lucía Vallejo</p>
              <p className="mt-1 text-xs leading-snug text-tinta-soft">
                Coach ontológico empresarial · Project Manager · Ingeniera Civil
              </p>
            </figcaption>
          </figure>

          <div>
            <p className="font-body text-xs font-semibold uppercase leading-relaxed tracking-[0.16em] text-crema/70">
              Coaching de equipos · Workshops · Intervenciones a medida
            </p>
            <h2 className="mt-4 font-heading text-[2.05rem] font-semibold leading-[1.08] text-white min-[390px]:text-4xl sm:text-5xl xl:text-[3.5rem]">
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
            <p className="mt-4 flex items-center gap-2 text-sm text-crema/70">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" aria-hidden="true" />
              Contanos tu desafío
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ServiciosHero;
