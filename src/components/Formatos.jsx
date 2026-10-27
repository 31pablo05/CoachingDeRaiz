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
    tall: true,
  },
  {
    src: '/imagenes/sala2.jpg',
    alt: 'Dinámica de un taller con un equipo',
  },
  {
    src: '/imagenes/sala3.jpg',
    alt: 'Equipo en conversación durante un taller',
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

        <ol className="mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="border-crema-dark px-4 py-8 text-center border-b last:border-b-0 md:px-6 md:odd:border-r md:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:py-4 lg:last:border-r-0"
            >
              <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full font-heading text-lg font-semibold ${stepTones[index]}`}>
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-2xl font-medium text-tinta">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-tinta-soft md:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>

    <div className="section-papel section-padding">
      <div className="container-custom grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">En la sala</p>
          <h2 className="mt-4 font-heading">Qué pasa cuando trabajamos con un equipo</h2>
          <ul className="mt-8 divide-y divide-crema-dark">
            {roomItems.map((item) => (
              <li key={item.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
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

        <div className="grid grid-cols-1 gap-4 md:min-h-[520px] md:grid-cols-[1.15fr_1fr] md:grid-rows-2">
          {roomPhotos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.tall ? 720 : 560}
              height={photo.tall ? 960 : 440}
              loading="lazy"
              className={`w-full rounded-[28px] bg-crema-dark object-cover ${photo.tall ? 'aspect-[3/4] md:row-span-2 md:aspect-auto md:h-full' : 'aspect-[16/10] md:aspect-auto md:h-full'}`}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="section-crema section-padding">
      <div className="container-custom">
        <header className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Desafíos y formatos</p>
          <h2 className="mt-4 font-heading">Primero definimos qué transformar</h2>
          <p className="mt-5 text-base leading-relaxed text-tinta-soft md:text-lg">
            Y recién después, el formato y la duración del proceso.
          </p>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2">
          {formats.map((format) => (
            <li
              key={format.title}
              className={`flex min-h-full flex-col rounded-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 md:p-8 ${format.tone}`}
            >
              <h3 className="font-heading text-2xl font-medium text-inherit md:text-3xl">{format.title}</h3>
              <p className="mt-4 text-base leading-relaxed">{format.text}</p>
              <div className="mt-auto pt-8">
                <p className={`border-t pt-5 text-sm font-semibold ${format.rule}`}>{format.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Formatos;
