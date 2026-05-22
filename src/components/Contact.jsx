import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../config';

const QUICK_LINKS = [
  'Portal del Paciente',
  'Seguros y Facturación',
  'Ensayos Clínicos',
  'Segunda Opinión',
];

function InfoRow({ icon: Icon, label, value, href }) {
  const content = (
    <span className="text-[14px] text-ink hover:text-teal transition-colors">{value}</span>
  );
  return (
    <div className="flex items-start gap-3 py-3.5 border-b border-ink/[0.07] last:border-b-0">
      <Icon size={15} className="text-teal mt-0.5 shrink-0" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        <div className="eyebrow text-mute mb-1">{label}</div>
        {href ? <a href={href}>{content}</a> : content}
      </div>
    </div>
  );
}

export default function Contact() {
  const [ref, inView] = useInView(0.06);

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="bg-paper py-24 md:py-32"
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className={`${inView ? 'fade-in fade-in-1' : 'opacity-0'}`}>
          <div className="eyebrow text-teal">Contacto y Ubicación</div>
          <h2
            id="contact-heading"
            className="font-display mt-4 text-[40px] md:text-[54px] leading-[1.02] text-ink max-w-[600px]"
          >
            Estamos en Las Mercedes, Caracas — disponibles también los sábados.
          </h2>
        </div>

        <div className={`mt-14 grid md:grid-cols-12 gap-10 md:gap-14 ${inView ? 'fade-in fade-in-2' : 'opacity-0'}`}>

          {/* Left: contact info */}
          <aside className="md:col-span-5">
            <address className="not-italic">
              <InfoRow
                icon={MapPin}
                label="Dirección"
                value={CLINIC.address.full}
              />
              <InfoRow
                icon={Phone}
                label="Teléfono principal"
                value={CLINIC.phone}
                href={`tel:${CLINIC.phone.replace(/\s/g,'')}`}
              />
              <InfoRow
                icon={Mail}
                label="Correo electrónico"
                value={CLINIC.email}
                href={`mailto:${CLINIC.email}`}
              />
              <InfoRow
                icon={Clock}
                label="Horario de atención"
                value={
                  <span className="block">
                    <span className="block">{CLINIC.hours.weekdays}</span>
                    <span className="block text-mute">{CLINIC.hours.saturday}</span>
                    <span className="block text-mute">{CLINIC.hours.sunday}</span>
                  </span>
                }
              />
            </address>

            {/* Quick links */}
            <nav aria-label="Accesos rápidos" className="mt-8">
              <div className="eyebrow text-mute mb-4">Accesos rápidos</div>
              <div className="flex flex-wrap gap-2">
                {QUICK_LINKS.map((q) => (
                  <a
                    key={q}
                    href="#"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border hairline
                      bg-cream text-[13px] text-ink hover:border-teal/40 hover:bg-wash/60
                      transition-colors duration-150"
                  >
                    {q}
                    <ExternalLink size={11} className="text-mute" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          {/* Right: map placeholder */}
          <div className="md:col-span-7">
            <div
              className="relative aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden border hairline bg-wash"
              aria-label="Mapa estilizado de la ubicación de la clínica"
            >
              {/* TODO: embed Google Maps iframe aquí */}
              {/* Reemplaza este SVG con:
                  <iframe
                    src="https://maps.google.com/maps?q=Torre+Médica+Las+Mercedes+Caracas&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    title="Mapa de ubicación de Lumen Oncología"
                  />
              */}
              <svg
                viewBox="0 0 800 560"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="rgba(31,79,88,0.07)" strokeWidth="1" />
                  </pattern>
                </defs>
                {/* Base */}
                <rect width="800" height="560" fill="#EEF0EA" />
                <rect width="800" height="560" fill="url(#mapgrid)" />
                {/* Streets */}
                <g stroke="#D9D1C2" strokeWidth="16" fill="none" strokeLinecap="round">
                  <path d="M-20 200 Q 200 230 400 160 T 820 210" />
                  <path d="M-20 370 Q 250 330 480 390 T 820 350" />
                  <path d="M140 -20 Q 170 230 230 330 T 290 580" />
                  <path d="M520 -20 Q 545 250 585 370 T 630 580" />
                  <path d="M-20 290 Q 350 280 500 295 T 820 280" />
                </g>
                <g stroke="#FAF7F1" strokeWidth="9" fill="none" strokeLinecap="round">
                  <path d="M-20 200 Q 200 230 400 160 T 820 210" />
                  <path d="M-20 370 Q 250 330 480 390 T 820 350" />
                  <path d="M140 -20 Q 170 230 230 330 T 290 580" />
                  <path d="M520 -20 Q 545 250 585 370 T 630 580" />
                  <path d="M-20 290 Q 350 280 500 295 T 820 280" />
                </g>
                {/* Parks */}
                <rect x="60"  y="420" width="160" height="120" rx="12" fill="#D9E2D2" />
                <rect x="640" y="60"  width="130" height="95"  rx="10" fill="#D9E2D2" />
                <rect x="320" y="60"  width="80"  height="60"  rx="8"  fill="#D9E2D2" />
                {/* Pin */}
                <g transform="translate(420 275)">
                  <circle r="38" fill="#1F4F58" opacity="0.11" />
                  <circle r="24" fill="#1F4F58" opacity="0.18" />
                  <circle r="10" fill="#1F4F58" />
                  <circle r="4"  fill="#FAF7F1" />
                </g>
                {/* Labels */}
                <text x="452" y="270" fontFamily="DM Sans, sans-serif" fontSize="13" fill="#13202A" fontWeight="600">
                  Lumen Oncología
                </text>
                <text x="452" y="288" fontFamily="DM Sans, sans-serif" fontSize="11" fill="#7A8690">
                  Torre Médica Las Mercedes · Piso 3
                </text>
                {/* Street labels */}
                <text x="95" y="155" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7A8690" transform="rotate(-8 95 155)">
                  Av. Principal Las Mercedes
                </text>
                <text x="145" y="370" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#7A8690" transform="rotate(88 145 370)">
                  Calle Madrid
                </text>
              </svg>

              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-paper/95 backdrop-blur px-4 py-3 rounded-xl border hairline">
                <div>
                  <div className="text-[13px] text-ink font-medium">Las Mercedes, Caracas</div>
                  <div className="text-[12px] text-mute">A 5 min de Altamira · Estacionamiento disponible</div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] text-teal hover:text-tealup inline-flex items-center gap-1 transition-colors"
                  aria-label="Abrir en Google Maps"
                >
                  Cómo llegar <ExternalLink size={11} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
