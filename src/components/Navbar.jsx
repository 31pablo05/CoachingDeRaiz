import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, SECTION_IDS, WHATSAPP_URL, navHref } from '../lib/site';

const DESKTOP_NAV_QUERY = '(min-width: 1180px)';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [onBlog, setOnBlog] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    const onBlogPage = window.location.pathname.startsWith('/blog');
    setOnBlog(onBlogPage);
    if (onBlogPage) return undefined;

    let frame = null;
    const updateActive = () => {
      const navHeight = headerRef.current?.offsetHeight ?? 72;
      const offset = navHeight + 8;
      let current = 'inicio';

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= offset) current = id;
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = document.getElementById('menu-movil');
    const closeButton = document.querySelector('[aria-controls="menu-movil"]');

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        closeButton?.focus();
        return;
      }
      if (event.key !== 'Tab' || !dialog) return;

      const items = [closeButton, ...dialog.querySelectorAll('a')].filter(Boolean);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia(DESKTOP_NAV_QUERY).matches) setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const linkClass = (isActive, stacked) =>
    [
      'font-body font-medium transition-colors duration-300',
      stacked ? 'block py-4 text-lg' : 'relative whitespace-nowrap py-2 text-sm',
      isActive ? 'text-bosque-darker' : 'text-tinta-soft hover:text-tinta',
    ].join(' ');

  const renderLinks = (stacked) =>
    NAV_LINKS.map((link) => {
      const isActive = onBlog ? Boolean(link.href) : link.id === activeId;
      return (
        <a
          key={link.label}
          href={navHref(link)}
          onClick={closeMenu}
          aria-current={isActive ? 'true' : undefined}
          className={`group ${linkClass(isActive, stacked)}`}
        >
          {stacked ? (
            <span
              className={`border-b pb-0.5 ${
                isActive ? 'border-terracota' : 'border-transparent group-hover:border-terracota'
              }`}
            >
              {link.label}
            </span>
          ) : (
            link.label
          )}
          {!stacked && (
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 bottom-0.5 h-0.5 origin-left rounded-full bg-terracota transition-transform duration-300 ${
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            />
          )}
        </a>
      );
    });

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-[70] h-[var(--nav-height)] border-b border-crema-dark/70 ${
          isOpen ? 'bg-papel' : 'bg-papel/90 backdrop-blur-md'
        }`}
      >
        <div className="container-custom flex h-full items-center justify-between gap-6">
          <a
            href="/#inicio"
            className="flex min-w-0 shrink-0 items-center gap-3"
            aria-label="Coaching de Raíz, ir al inicio"
          >
            {logoOk && (
              <img
                src="/logos/logocoaching.svg"
                alt=""
                width="56"
                height="56"
                className="h-11 w-11 shrink-0 object-contain lg:h-14 lg:w-14"
                onError={() => setLogoOk(false)}
              />
            )}
            <span className="truncate font-heading text-lg font-semibold leading-none text-bosque-darker lg:text-xl">
              Coaching de Raíz
            </span>
          </a>

          <div className="hidden items-center gap-7 min-[1180px]:flex">
            <nav aria-label="Secciones" className="flex items-center gap-x-5">
              {renderLinks(false)}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap px-5 py-2.5 text-sm"
            >
              Agendar una charla
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-tinta transition-colors hover:bg-crema-dark/60 min-[1180px]:hidden"
            aria-expanded={isOpen}
            aria-controls="menu-movil"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 z-[60] flex flex-col bg-papel pt-[var(--nav-height)] min-[1180px]:hidden"
        >
          <div className="container-custom flex flex-1 flex-col overflow-y-auto py-6">
            <nav aria-label="Secciones" className="flex flex-col divide-y divide-crema-dark">
              {renderLinks(true)}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn-primary mt-8 w-full"
            >
              Agendar una charla
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
