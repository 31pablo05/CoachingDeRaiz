/**
 * Datos compartidos del sitio.
 * El link de WhatsApp y su mensaje viven acá: navbar, footer y el
 * botón flotante tienen que usar estas constantes y no armar la URL
 * por su cuenta.
 */

export const WHATSAPP_PHONE = '5491136677321';
export const WHATSAPP_DISPLAY = '+54 9 11 3667-7321';
export const WHATSAPP_MESSAGE = 'Hola Lucía, quiero agendar una charla.';

export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT = {
  email: 'luciavallejo@coachingderaiz.com',
  instagramUrl: 'https://www.instagram.com/coachingderaiz/',
  instagramHandle: '@coachingderaiz',
  location: 'CABA y zona norte',
  locationDetail: 'Buenos Aires, Argentina',
};

export const NAV_LINKS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Formatos', id: 'formatos' },
  { label: 'Casos', id: 'casos' },
  { label: '¿Qué es coaching?', id: 'que-es-coaching' },
  { label: 'Contacto', id: 'contacto' },
  { label: 'Blog', href: '/blog/' },
];

export const SECTION_IDS = NAV_LINKS.filter((link) => link.id).map((link) => link.id);

export function navHref(link) {
  return link.href ?? `/#${link.id}`;
}
