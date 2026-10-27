import { CONTACT, NAV_LINKS, WHATSAPP_URL, navHref } from '../lib/site';

const Footer = () => (
  <footer className="bg-bosque-darker text-crema">
    <div className="container-custom py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        <div>
          <a href="/#inicio" className="inline-flex items-center gap-3" aria-label="Coaching de Raíz, ir al inicio">
            <img
              src="/logos/logocoaching.svg"
              alt=""
              width="56"
              height="56"
              className="h-14 w-14 object-contain"
            />
            <span className="font-heading text-2xl font-semibold leading-none">Coaching de Raíz</span>
          </a>
          <p className="text-gris-verdoso mt-4 max-w-xs text-sm leading-relaxed">
            Experiencias e intervenciones para organizaciones
          </p>
        </div>

        <nav aria-label="Secciones">
          <h2 className="font-body text-xs font-semibold uppercase tracking-[0.16em]">Secciones</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={navHref(link)}
                  className="text-gris-verdoso text-sm transition-colors hover:text-crema"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-body text-xs font-semibold uppercase tracking-[0.16em]">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-gris-verdoso break-all transition-colors hover:text-crema"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gris-verdoso transition-colors hover:text-crema"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gris-verdoso transition-colors hover:text-crema"
              >
                Instagram {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-crema/15 pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-gris-verdoso">© 2026 Coaching de Raíz · Lucía Vallejo</p>
        <p className="text-gris-verdoso flex flex-wrap items-center gap-2 pr-20">
          <span>Desarrollado con</span>
          <svg className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>por</span>
          <a
            href="https://devcraftpablo.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-crema underline underline-offset-2 transition-colors hover:text-white"
          >
            Pablo Proboste
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
