/**
 * Contenido de la sección Casos.
 *
 * Estos dos listados se pueden reemplazar por documentos de Sanity
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
 *   id, name, src     name se usa como texto alternativo
 *   dark   opcional    tarjeta verde para logos claros (texto blanco)
 *   zoom   opcional    amplía logos con mucho margen transparente en el PNG
 *   Array vacío: el bloque de empresas no se muestra.
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
  { id: 'envases-avalos', name: 'Envases Avalos', src: '/logos/empresa1.png' },
  { id: 'basf', name: 'BASF', src: '/logos/empresa2.png' },
  { id: 'grumont', name: 'Grumont Construcciones', src: '/logos/empresa3.png', dark: true, zoom: true },
];
