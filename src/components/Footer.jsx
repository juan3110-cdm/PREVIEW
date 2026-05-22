import { Phone, Mail, MapPin } from 'lucide-react';
import { CLINIC } from '../config';

const QUICK = [
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Tratamientos',   href: '#tratamientos' },
  { label: 'Nuestro Equipo', href: '#equipo' },
  { label: 'Testimonios',    href: '#testimonios' },
  { label: 'Consulta',       href: '#consulta' },
  { label: 'Contacto',       href: '#contacto' },
];

const LEGAL = [
  { label: 'Privacidad',            href: '#' },
  { label: 'Aviso de Privacidad',   href: '#' },
  { label: 'Accesibilidad',         href: '#' },
  { label: 'Trabaje con Nosotros',  href: '#' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-ink text-paper/80"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <a href="#inicio" aria-label={`${CLINIC.name} — Ir al inicio`} className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-full border border-paper/30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-paper" />
              </div>
              <span className="font-display text-[22px] leading-none text-paper">{CLINIC.name}</span>
            </a>
            <p className="mt-5 text-[14px] leading-[1.72] text-paper/65 max-w-[38ch]">
              Atención oncológica integral y multidisciplinaria en Las Mercedes, Caracas. Acompañamos a cada paciente desde el diagnóstico hasta la recuperación.
            </p>
            {/* Accreditation badge */}
            <div className="mt-6 inline-flex items-center gap-2 border border-paper/15 rounded-full px-3.5 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
              <span className="text-[11.5px] text-paper/70 tracking-wide">{CLINIC.acredita}</span>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Mapa del sitio" className="md:col-span-3">
            <div className="text-[11px] tracking-[0.22em] uppercase text-paper/40 mb-5">Secciones</div>
            <ul className="space-y-3">
              {QUICK.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[14px] text-paper/65 hover:text-paper transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div className="md:col-span-5">
            <div className="text-[11px] tracking-[0.22em] uppercase text-paper/40 mb-5">Contacto</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-paper/40 mt-0.5 shrink-0" aria-hidden="true" />
                <address className="not-italic text-[14px] text-paper/65 leading-relaxed">
                  {CLINIC.address.building}<br />
                  {CLINIC.address.floor}<br />
                  {CLINIC.address.street}<br />
                  {CLINIC.address.neighborhood}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-paper/40 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g,'')}`}
                  className="text-[14px] text-paper/65 hover:text-paper transition-colors tabular-nums"
                >
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-paper/40 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="text-[14px] text-paper/65 hover:text-paper transition-colors"
                >
                  {CLINIC.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-6 p-4 rounded-xl border border-paper/10 space-y-1">
              <div className="text-[11px] tracking-[0.22em] uppercase text-paper/40 mb-3">Horario</div>
              <div className="text-[13px] text-paper/65">{CLINIC.hours.weekdays}</div>
              <div className="text-[13px] text-paper/50">{CLINIC.hours.saturday}</div>
              <div className="text-[13px] text-paper/35">{CLINIC.hours.sunday}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-paper/[0.09] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-[12.5px] text-paper/35">
            © 2026 {CLINIC.name} C.A. — RIF {CLINIC.rif}. Acreditado por la {CLINIC.acredita}. Todos los derechos reservados.
          </p>
          <nav aria-label="Pie de página legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-[12.5px] text-paper/35 hover:text-paper/70 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
