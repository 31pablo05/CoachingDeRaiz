import React from 'react';

const paragraphs = [
  'Ingeniera Civil, Especialista en Gestión de Proyectos (UBA) y Coach Ontológica certificada por ECORE – Newfield Consulting, con más de 10 años liderando proyectos en empresas industriales y de energía.',
  'Mi formación me brindó pensamiento lógico, estructura y planificación. Con el tiempo descubrí que lo que más me motivaba era trabajar con personas, liderar equipos, conectar y construir en conjunto.',
  'Hoy acompaño a líderes y equipos en procesos de transformación, integrando estructura, estrategia y humanidad para lograr resultados sostenibles y culturas más saludables.',
];

const credentials = [
  'Coach ontológico empresarial',
  'Ingeniera Civil',
  'Especialista en Gestión de Proyectos (UBA)',
  'Consultora PMO',
];

const focuses = [
  'Mirada sistémica',
  'Cuerpo, emoción y lenguaje',
  'Prácticas de liderazgo',
  'Gestión del cambio',
];

const quote = 'Creo que los cambios más poderosos y sostenibles no se logran tapando síntomas, sino yendo a la raíz: a las creencias y emociones que nos habitan.';

const About = () => (
  <section
    id="sobre-mi"
    aria-labelledby="sobre-mi-titulo"
    className="section-papel section-padding"
  >
    <div className="container-custom grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <img
        src="/imagenes/lucia-hero.jpg"
        alt="Lucía Vallejo"
        width="1200"
        height="800"
        loading="lazy"
        className="w-full rounded-[32px] shadow-soft"
      />

      <div>
        <p className="eyebrow">Quién soy</p>
        <h2 id="sobre-mi-titulo" className="mt-3 font-heading">
          Lucía Vallejo
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-tinta-soft">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {credentials.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>

        <blockquote className="mt-8 rounded-r-2xl border-l-4 border-terracota bg-crema px-5 py-5 md:px-6">
          <p className="font-heading text-lg font-medium italic leading-snug text-tinta md:text-xl">
            {quote}
          </p>
          <footer className="mt-3 text-sm font-medium text-tinta-soft">Lucía Vallejo</footer>
        </blockquote>

        <ul className="mt-6 flex flex-wrap gap-2">
          {focuses.map((item) => (
            <li key={item} className="chip bg-crema-dark py-1 text-xs font-medium text-tinta-soft">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
