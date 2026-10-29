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
          <h2 id="casos-titulo" className="mt-3 font-heading md:mt-4">Cada desafío requiere una intervención diferente</h2>
          <p className="mt-4 text-base leading-relaxed text-tinta-soft md:mt-5 md:text-lg">
            El proceso se diseña a partir de lo que la organización necesita transformar.
          </p>
        </header>

        <ul className="mt-9 grid grid-cols-1 gap-3.5 md:mt-16 md:grid-cols-2 md:gap-5">
          {cases.map((item) => (
            <li key={item.id} className="relative flex flex-col rounded-[24px] bg-bosque p-5 text-crema md:rounded-[28px] md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="chip">{item.sector}</span>
                {item.logo?.src ? (
                  <img src={item.logo.src} alt={item.logo.alt || ''} className="h-10 w-auto max-w-[7rem] object-contain" />
                ) : null}
              </div>
              <h3 className="mt-3.5 font-heading text-[1.375rem] font-medium leading-snug text-crema md:mt-6 md:text-3xl">{item.name}</h3>
              <p className={`mt-1.5 text-sm font-medium md:mt-2 ${areaClass}`}>{item.area}</p>
              <p className="mt-3.5 text-sm leading-relaxed text-crema md:mt-5 md:text-base">
                <CaseText parts={item.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {logos.length > 0 && (
      <div className="section-crema pb-10 pt-12 md:pb-14 md:pt-16">
        <div className="container-custom">
          <header className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Confían en este trabajo</p>
            <h2 className="mt-3 font-heading md:mt-4">Empresas con las que trabajó</h2>
          </header>

          <ul className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-5">
            {logos.map((logo) => (
              <li key={logo.id} className="w-[calc(50%-0.375rem)] md:w-60 lg:w-72">
                <div className="flex h-[4.75rem] items-center justify-center rounded-2xl border border-crema-dark bg-white px-2.5 md:h-28 md:px-4">
                  {logo.src ? (
                    logo.dark ? (
                      <span className="flex h-14 w-full items-center justify-center rounded-xl bg-bosque px-2.5 md:h-[4.75rem] md:px-4">
                        <img
                          src={logo.src}
                          alt={logo.name}
                          loading="lazy"
                          decoding="async"
                          className="max-h-12 w-full object-contain md:max-h-16"
                        />
                      </span>
                    ) : (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        loading="lazy"
                        decoding="async"
                        className={`w-full object-contain ${
                          logo.fit === 'compact' ? 'max-h-10 md:max-h-14' : 'max-h-14 md:max-h-[4.5rem]'
                        }`}
                      />
                    )
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
