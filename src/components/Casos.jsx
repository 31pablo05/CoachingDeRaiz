import React from 'react';
import { cases, logos } from '../data/casos';

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

const Casos = () => (
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

          <ul className="mt-12 flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6">
            {logos.map((logo) => (
              <li key={logo.id} className="w-[calc(50%-0.5rem)] md:w-52 lg:w-60">
                <div
                  className={`flex h-24 items-center justify-center overflow-hidden rounded-2xl border px-3 md:h-28 md:px-6 ${
                    logo.dark ? 'border-bosque bg-bosque' : 'border-crema-dark bg-white'
                  }`}
                >
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      decoding="async"
                      className={`h-14 w-full object-contain md:h-16 ${logo.zoom ? 'scale-[2.4]' : ''}`}
                    />
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
  </section>
);

export default Casos;
