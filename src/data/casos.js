/**
 * Contenido de la sección Casos.
 *
 * Estos tres listados se pueden reemplazar por documentos de Sanity
 * sin cambiar el componente, siempre que cada ítem conserve esta forma:
 *
 * cases[]
 *   id        string
 *   sector    string              chip
 *   name      string              título en serif
 *   area      string              subtítulo
 *   text[]    fragmentos del párrafo
 *             - string            texto crema
 *             - { strong }        palabra clave, negrita blanca
 *   logo      null | { src, alt } si es null, la tarjeta no muestra logo
 *
 * logos[]
 *   id, name, src
 *   src null muestra el texto (espacio para completar).
 *   Array vacío: el bloque de empresas no se muestra.
 *
 * testimonials[]
 *   id, quote, name, role, company
 *   logo  null | { src, alt }
 *   Array vacío: el bloque de testimonios no se muestra.
 *
 * Los logos y testimonios de abajo son de ejemplo. Reemplazar los textos
 * "Logo empresa" y "COMPLETAR" por el contenido real.
 */

export const cases = [
  {
    id: 'envasados',
    sector: 'Transformación cultural',
    name: 'Empresa de envasados',
    area: 'Proceso de certificación',
    logo: null,
    text: [
      'Acompañamiento para adaptar hábitos y prácticas a nuevos procesos, trabajando ',
      { strong: 'calidad' },
      ', ',
      { strong: 'responsabilidad compartida' },
      ' y ',
      { strong: 'sostenibilidad del cambio' },
      '.',
    ],
  },
  {
    id: 'constructora',
    sector: 'Liderazgo',
    name: 'Empresa constructora',
    area: 'Equipo directivo',
    logo: null,
    text: [
      'Programa de ',
      { strong: 'coaching' },
      ' para CEO y Gerente de Suministros y RRHH, complementado con un taller de ',
      { strong: 'feedback 1:1' },
      '.',
    ],
  },
  {
    id: 'industriales',
    sector: 'Identidad de equipo',
    name: 'Fabricación de equipos industriales',
    area: 'Operaciones',
    logo: null,
    text: [
      'Acompañamiento al Gerente de Operaciones y su equipo para construir ',
      { strong: 'identidad' },
      ', ',
      { strong: 'visión compartida' },
      ' y ',
      { strong: 'colaboración' },
      ' en un equipo de reciente formación.',
    ],
  },
  {
    id: 'quimicos',
    sector: 'Reestructuración organizacional',
    name: 'Empresa de productos químicos',
    area: 'Site',
    logo: null,
    text: [
      'Acompañamiento en reestructuración, trabajando ',
      { strong: 'reuniones' },
      ', ',
      { strong: 'normas de convivencia' },
      ', ',
      { strong: 'liderazgo' },
      ' y ',
      { strong: 'comunicación' },
      '.',
    ],
  },
];

export const logos = [
  { id: 'logo-1', name: 'Logo empresa', src: null },
  { id: 'logo-2', name: 'Logo empresa', src: null },
  { id: 'logo-3', name: 'Logo empresa', src: null },
  { id: 'logo-4', name: 'Logo empresa', src: null },
  { id: 'logo-5', name: 'Logo empresa', src: null },
  { id: 'logo-6', name: 'Logo empresa', src: null },
];

export const testimonials = [
  {
    id: 'testimonio-1',
    quote: 'COMPLETAR',
    name: 'COMPLETAR',
    role: 'COMPLETAR',
    company: 'COMPLETAR',
    logo: null,
  },
  {
    id: 'testimonio-2',
    quote: 'COMPLETAR',
    name: 'COMPLETAR',
    role: 'COMPLETAR',
    company: 'COMPLETAR',
    logo: null,
  },
  {
    id: 'testimonio-3',
    quote: 'COMPLETAR',
    name: 'COMPLETAR',
    role: 'COMPLETAR',
    company: 'COMPLETAR',
    logo: null,
  },
];
