import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Escuchar',
    text: 'Entender el contexto, el desafío y lo que la organización necesita lograr.',
  },
  {
    number: '2',
    title: 'Diseñar',
    text: 'Construir una experiencia específica para ese equipo, no un taller de catálogo.',
  },
  {
    number: '3',
    title: 'Facilitar',
    text: 'Generar conversaciones, reflexión y aprendizaje a través de dinámicas prácticas.',
  },
  {
    number: '4',
    title: 'Movilizar',
    text: 'Transformar lo trabajado en decisiones, acuerdos y acciones concretas.',
  },
];

const stepTones = [
  'bg-bosque text-crema',
  'bg-bosque text-crema',
  'bg-terracota text-white',
  'bg-naranja text-white',
];

const roomItems = [
  {
    icon: 'conversamos',
    title: 'Conversamos',
    text: 'Sobre lo que está pasando realmente.',
  },
  {
    icon: 'observamos',
    title: 'Observamos',
    text: 'Hechos, interpretaciones y patrones que se repiten.',
  },
  {
    icon: 'experimentamos',
    title: 'Experimentamos',
    text: 'Nuevas formas de relacionarnos y coordinar.',
  },
  {
    icon: 'priorizamos',
    title: 'Priorizamos',
    text: 'Qué necesita atención y qué puede esperar.',
  },
  {
    icon: 'acuerdos',
    title: 'Construimos acuerdos',
    text: 'Qué vamos a hacer diferente y quién ejecuta cada acción.',
  },
];

const roomPhotos = [
  {
    src: '/imagenes/sala1.jpeg',
    alt: 'Taller con un equipo, toma vertical',
    width: 1200,
    height: 1600,
    tall: true,
    position: 'object-[50%_80%] md:object-center',
  },
  {
    src: '/imagenes/sala2.jpg',
    alt: 'Dinámica de un taller con un equipo',
    width: 620,
    height: 465,
    position: 'object-center',
  },
  {
    src: '/imagenes/sala3.jpg',
    alt: 'Equipo en conversación durante un taller',
    width: 560,
    height: 746,
    position: 'object-[50%_65%] md:object-center',
  },
];

const formats = [
  {
    title: 'Experiencia puntual',
    text: 'Para trabajar un desafío específico y generar una experiencia de aprendizaje y conversación.',
    detail: '60 a 120 min aprox.',
    tone: 'bg-bosque text-crema',
    rule: 'border-crema/40',
  },
  {
    title: 'Workshop',
    text: 'Para profundizar en una temática y llevarla a la práctica.',
    detail: '½ jornada o jornada completa.',
    tone: 'bg-celeste text-bosque-darker',
    rule: 'border-bosque-darker/20',
  },
  {
    title: 'Programa de coaching',
    text: 'Para acompañar un proceso de desarrollo de equipos y/o líderes.',
    detail: 'Varias instancias.',
    tone: 'bg-terracota text-white',
    rule: 'border-white/35',
  },
  {
    title: 'Intervención organizacional',
    text: 'Para desafíos que requieren trabajar sobre el sistema además de las personas.',
    detail: 'Diagnóstico + diseño + implementación + seguimiento.',
    tone: 'bg-bosque-darker text-crema',
    rule: 'border-crema/30',
  },
];

const iconPaths = {
  conversamos: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.5h14a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H9.2L5 18.2V7.5a1 1 0 0 1 1-1Z" />
      <path strokeLinecap="round" d="M8 10h8M8 13h5" />
    </>
  ),
  observamos: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 6.75 12 6.75 21.5 12 21.5 12 18 17.25 12 17.25 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.4" />
    </>
  ),
  experimentamos: (
    <>
      <circle cx="8" cy="12" r="2.6" />
      <circle cx="16.2" cy="7.6" r="2.1" />
      <circle cx="16.2" cy="16.4" r="2.1" />
      <path strokeLinecap="round" d="M10.4 10.8 14 8.8M10.4 13.2 14 15.2" />
    </>
  ),
  priorizamos: (
    <>
      <path strokeLinecap="round" d="M9 7h10M9 12h10M9 17h6" />
      <circle cx="5" cy="7" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="5" cy="17" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  acuerdos: (
    <>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.2 12.2 2.3 2.3 5.3-5.4" />
    </>
  ),
};

const RoomIcon = ({ name }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {iconPaths[name]}
  </svg>
);

const Formatos = () => (
  <section id="formatos" aria-labelledby="formatos-titulo">
    <div className="section-crema section-padding">
      <div className="container-custom">
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 id="formatos-titulo" className="mt-4 font-heading">Cuatro pasos, en este orden</h2>
          <p className="mt-5 text-base leading-relaxed text-tinta-soft md:text-lg">
            La metodología se adapta al desafío. El objetivo es lograr un cambio que se sostenga en el tiempo.
          </p>
        </header>

        <ol className="mx-auto mt-10 grid max-w-md grid-cols-1 md:mt-14 md:max-w-none md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-crema-dark pb-7 last:pb-0 md:block md:border-b md:px-6 md:py-8 md:text-center md:odd:border-r md:last:pb-8 md:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:py-4 lg:last:border-r-0 lg:last:pb-4"
            >
              {index < steps.length - 1 && (
                <span className="absolute bottom-1.5 left-5 top-[3.25rem] w-px -translate-x-1/2 bg-bosque/25 md:hidden" aria-hidden="true" />
              )}
              <span className={`flex h-10 w-10 items-center justify-center rounded-full font-heading text-base font-semibold md:mx-auto md:h-12 md:w-12 md:text-lg ${stepTones[index]}`}>
                {step.number}
              </span>
              <h3 className="self-center font-heading text-[1.375rem] font-medium leading-tight text-tinta md:mt-5 md:text-2xl md:leading-[1.15]">{step.title}</h3>
              <p className="col-start-2 mt-1.5 text-[15px] leading-relaxed text-tinta-soft md:mt-3 md:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>

    <div className="section-papel section-padding">
      <div className="container-custom grid items-start gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">En la sala</p>
          <h2 className="mt-4 font-heading">Qué pasa cuando trabajamos con un equipo</h2>
          <ul className="mt-6 divide-y divide-crema-dark md:mt-8">
            {roomItems.map((item) => (
              <li key={item.title} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0 md:py-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-crema text-bosque">
                  <RoomIcon name={item.icon} />
                </span>
                <div>
                  <h3 className="font-body text-base font-semibold text-tinta">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-tinta-soft md:text-base">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:min-h-[520px] md:grid-cols-[1.15fr_1fr] md:grid-rows-2 md:gap-4">
          {roomPhotos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
              className={`aspect-[4/3] w-full rounded-[20px] bg-crema-dark object-cover md:aspect-auto md:h-full md:rounded-[28px] ${photo.position} ${photo.tall ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="section-crema section-padding">
      <div className="container-custom">
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Desafíos y formatos</p>
          <h2 className="mt-3 font-heading md:mt-4">Primero definimos qué transformar</h2>
          <p className="mt-4 text-base leading-relaxed text-tinta-soft md:mt-5 md:text-lg">
            Y recién después, el formato y la duración del proceso.
          </p>
        </header>

        <ul className="mt-9 grid grid-cols-1 gap-3.5 md:mt-16 md:grid-cols-2 md:gap-5">
          {formats.map((format) => (
            <li
              key={format.title}
              className={`flex flex-col rounded-card p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 md:min-h-full md:p-8 ${format.tone}`}
            >
              <h3 className="font-heading text-[1.4rem] font-medium leading-snug text-inherit md:text-3xl">{format.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed md:mt-4 md:text-base">{format.text}</p>
              <div className="mt-auto pt-4 md:pt-8">
                <p className={`border-t pt-3 text-sm font-semibold md:pt-5 ${format.rule}`}>{format.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Formatos;
