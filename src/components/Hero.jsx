import { CLINIC } from '../config';

/* ── Inline SVG icons — exact match to design ── */
const Arrow = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} width="16" height="16" fill="none"
    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ArrowDown = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} width="14" height="14" fill="none"
    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);
const Dot = ({ className = '' }) => (
  <svg width="6" height="6" viewBox="0 0 6 6" className={className}>
    <circle cx="3" cy="3" r="2.5" fill="currentColor" />
  </svg>
);

// Nav anchors — connected to every accordion section
const NAV_LINKS = [
  { label: 'La Clínica',    href: '#about' },
  { label: 'Tratamientos',  href: '#treatments' },
  { label: 'Testimonios',   href: '#testimonials' },
  { label: 'Equipo',        href: '#team' },
  { label: 'Consulta',      href: '#booking' },
  { label: 'Contacto',      href: '#contact' },
];

export default function Hero({ onJump }) {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* ── Top bar ── */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-7 text-paper">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full border border-paper/70 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-paper" />
          </div>
          <div className="font-display text-[22px] leading-none">{CLINIC.name}</div>
        </div>

        {/* Desktop nav — all six sections */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7 text-[13px] text-paper/85"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            return (
              <button
                key={href}
                onClick={() => onJump(id)}
                className="hover:text-paper transition-colors"
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Phone */}
        <a
          href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}
          className="hidden md:block text-[13px] text-paper/85 tabular-nums hover:text-paper transition-colors"
          aria-label={`Llamar al ${CLINIC.phone}`}
        >
          {CLINIC.phone}
        </a>
      </header>

      {/* ── Hero body ── */}
      <div className="relative z-10 flex h-[calc(100vh-72px)] items-center px-6 md:px-12">
        <div className="max-w-[640px] text-paper">
          {/* Eyebrow */}
          <div className="eyebrow text-paper/85 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-paper/60" aria-hidden="true" />
            {CLINIC.tagline}
          </div>

          {/* Headline */}
          <h1 className="font-display mt-6 text-[58px] md:text-[78px] leading-[0.98] tracking-tight">
            Oncología de excelencia,<br />
            <span className="italic text-paper/95">centrada en usted.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-[17px] md:text-[18px] text-paper/85 max-w-[520px] leading-relaxed">
            Un equipo multidisciplinario que acompaña a cada paciente desde el diagnóstico hasta la recuperación — con claridad, dignidad y un plan que no se improvisa.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onJump('booking')}
              className="btn-primary px-6 py-3.5 text-[14px] font-medium rounded-full inline-flex items-center gap-2"
              aria-label="Solicitar consulta"
            >
              Solicitar Consulta <Arrow />
            </button>
            <button
              onClick={() => onJump('contact')}
              className="btn-outline px-6 py-3.5 text-[14px] font-medium rounded-full"
              aria-label="Ir a contacto"
            >
              Contáctenos
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom: trust row + scroll nudge ── */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-12 pb-8 text-paper/80">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div
            role="list"
            aria-label="Acreditaciones"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] tracking-wide"
          >
            {[
              'Oncólogos Certificados SVO',
              'Equipo Multidisciplinario',
              'Planes de Tratamiento Personalizados',
            ].map((badge) => (
              <span key={badge} role="listitem" className="inline-flex items-center gap-2">
                <Dot className="text-paper/70" /> {badge}
              </span>
            ))}
          </div>
          <button
            onClick={() => onJump('about')}
            aria-label="Explorar la clínica"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase nudge"
          >
            Explorar <ArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
}
