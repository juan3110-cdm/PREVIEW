import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC } from '../config';

const LINKS = [
  { label: 'Inicio',          href: '#inicio' },
  { label: 'Sobre Nosotros',  href: '#sobre-nosotros' },
  { label: 'Tratamientos',    href: '#tratamientos' },
  { label: 'Equipo',          href: '#equipo' },
  { label: 'Testimonios',     href: '#testimonios' },
  { label: 'Contacto',        href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLinkClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  const solid = scrolled || menuOpen;

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-paper/96 backdrop-blur-md shadow-sm border-b border-ink/[0.07]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-[70px]">

        {/* Logo */}
        <a
          href="#inicio"
          aria-label={`${CLINIC.name} — Inicio`}
          className="flex items-center gap-2.5 shrink-0"
          onClick={() => handleLinkClick('#inicio')}
        >
          <div
            className={`h-7 w-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${
              solid ? 'border-ink/30' : 'border-paper/70'
            }`}
          >
            <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${solid ? 'bg-ink' : 'bg-paper'}`} />
          </div>
          <span
            className={`font-display text-[21px] leading-none transition-colors duration-300 ${
              solid ? 'text-ink' : 'text-paper'
            }`}
          >
            {CLINIC.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => handleLinkClick(href)}
              className={`text-[13px] font-medium transition-colors duration-200 relative
                after:absolute after:bottom-[-3px] after:left-0 after:h-[1.5px] after:bg-cyan
                after:transition-all after:duration-200
                ${active === href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                ${solid ? 'text-ink2 hover:text-ink' : 'text-paper/85 hover:text-paper'}
              `}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}
            aria-label={`Llamar al ${CLINIC.phone}`}
            className={`hidden md:flex items-center gap-1.5 text-[13px] tabular-nums transition-colors duration-300 ${
              solid ? 'text-ink2 hover:text-teal' : 'text-paper/85 hover:text-paper'
            }`}
          >
            <Phone size={13} />
            {CLINIC.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              solid ? 'text-ink hover:bg-wash' : 'text-paper hover:bg-paper/10'
            }`}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-ink/[0.07] px-5 pb-6 pt-2">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleLinkClick(href)}
                className="text-[15px] text-ink2 hover:text-ink hover:bg-wash/60 rounded-lg px-3 py-3 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}
            className="mt-4 flex items-center gap-2 text-[14px] text-teal font-medium px-3"
          >
            <Phone size={15} />
            {CLINIC.phone}
          </a>
        </div>
      )}
    </header>
  );
}
