import React from 'react';
import { WHATSAPP_URL } from '../lib/site';

const highlights = [
  'Liderazgo que se anima a las conversaciones difíciles',
  'Equipos que coordinan, confían y cumplen acuerdos',
  'Culturas más saludables y resultados sostenibles',
];

const Sparkle = () => (
  <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-terracota" fill="currentColor" aria-hidden="true">
    <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z" />
  </svg>
);

const Hero = () => (
  <section
    id="inicio"
    aria-labelledby="inicio-titulo"
    className="relative flex flex-col overflow-hidden bg-gradient-to-b from-papel from-0% via-bosque/[0.05] via-30% to-papel to-70% pt-[var(--nav-height)] lg:min-h-[100svh] lg:border-b lg:border-crema-dark/70 lg:bg-gradient-to-tr lg:from-bosque/[0.13] lg:via-papel/90 lg:via-50% lg:to-100%"
  >
    <div className="container-custom relative grid flex-1 grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
      <div className="relative flex items-end justify-center pt-3 [mask-image:linear-gradient(to_bottom,black_82%,transparent)] lg:[mask-image:none] motion-safe:animate-slide-up motion-safe:[animation-duration:1000ms] motion-safe:[animation-fill-mode:both] md:pt-6 lg:self-stretch lg:pt-0 lg:motion-safe:[animation-delay:250ms]">
        <img
          src="/imagenes/luhero.png"
          alt="Lucía Vallejo, coach ontológica empresarial"
          width="1080"
          height="1920"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          className="relative block h-[min(44svh,400px)] w-auto max-w-full object-contain object-bottom drop-shadow-[0_24px_36px_rgb(var(--color-bosque-darker)/0.14)] md:h-[min(48svh,520px)] lg:h-[calc(100svh-var(--nav-height)-1.5rem)] lg:max-h-[860px] lg:min-h-[560px] lg:translate-y-[1.8%]"
        />
      </div>

      <div className="pb-14 pt-4 motion-safe:animate-slide-up motion-safe:[animation-duration:900ms] motion-safe:[animation-fill-mode:both] md:pb-16 md:pt-8 lg:self-center lg:py-16">
        <p className="eyebrow">Coaching de Raíz · Lucía Vallejo</p>
        <h1
          id="inicio-titulo"
          className="mt-3 max-w-[14ch] text-balance font-heading text-display font-medium tracking-[-0.01em] text-tinta md:mt-5"
        >
          Para florecer, primero hay que enraizar.
        </h1>
        <p className="mt-4 max-w-xl font-heading text-xl font-medium italic leading-snug text-bosque md:mt-6 md:text-2xl">
          Coaching ontológico para líderes, equipos y organizaciones.
        </p>

        <ul className="mt-6 max-w-xl space-y-3 border-t border-crema-dark pt-6 md:mt-8 md:space-y-3.5 md:pt-7">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-base leading-relaxed text-tinta md:text-[17px]">
              <Sparkle />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-[3.25rem] w-full px-8 sm:w-auto"
          >
            Agendar una charla
          </a>
          <a
            href="/#sobre-mi"
            className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-bosque/40 bg-papel/60 px-8 py-3 font-semibold text-bosque-dark transition-colors duration-300 hover:border-bosque hover:bg-bosque/[0.06] sm:w-auto"
          >
            Conocé más sobre mí
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
