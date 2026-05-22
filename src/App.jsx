import { useState } from 'react';
import Hero         from './components/Hero';
import AccordionRow from './components/AccordionRow';
import {
  AboutContent,
  TreatmentsContent,
  TestimonialsContent,
  TeamContent,
  BookingContent,
  ContactContent,
} from './components/AccordionContent';
import Footer        from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// ── Accordion sections — labels and preview text match the design ──
const SECTIONS = [
  {
    id:      'about',
    label:   'La Clínica',
    preview: 'Una práctica multidisciplinaria construida alrededor del paciente, no del diagnóstico.',
    Content: AboutContent,
  },
  {
    id:      'treatments',
    label:   'Tratamientos y Procedimientos',
    preview: 'Diez disciplinas oncológicas, coordinadas en un solo plan de atención.',
    Content: TreatmentsContent,
  },
  {
    id:      'testimonials',
    label:   'Testimonios de Pacientes',
    preview: 'En las propias palabras de quienes estuvieron aquí.',
    Content: TestimonialsContent,
  },
  {
    id:      'team',
    label:   'Conozca al Equipo',
    preview: 'Dirigido por el Dr. Adrián Vega Castillo — cuatro especialistas certificados.',
    Content: TeamContent,
  },
  {
    id:      'booking',
    label:   'Solicitar Consulta',
    preview: 'Solicite una cita. Respondemos en un día hábil.',
    Content: BookingContent,
  },
  {
    id:      'contact',
    label:   'Contacto y Ubicación',
    preview: 'Las Mercedes, Caracas. Atención los sábados.',
    Content: ContactContent,
  },
];

export default function App() {
  const [open, setOpen] = useState(() => new Set());

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  // Open a section and smooth-scroll to it (used by Hero CTAs)
  const openAndJump = (id) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: 'smooth' });
    }, 60);
  };

  return (
    <>
      <Hero onJump={openAndJump} />

      <section className="bg-cream" aria-label="Secciones de la clínica">
        <div className="max-w-[1320px] mx-auto px-2 md:px-4 pt-10 md:pt-16 pb-4">

          {/* Section intro header */}
          <div className="px-4 md:px-8 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow text-teal">La Práctica</div>
              <h2 className="font-display text-[40px] md:text-[56px] leading-[1] mt-3 text-ink">
                Todo lo que necesita, en seis secciones.
              </h2>
            </div>
            <p className="hidden md:block max-w-[320px] text-[14px] text-ink2 leading-relaxed">
              Cada fila se expande en su sitio. Abra cuantas desee — la página se queda con usted.
            </p>
          </div>

          {/* Accordion */}
          <div className="mt-10 md:mt-14 border-t border-b hairline bg-cream">
            {SECTIONS.map((s, i) => (
              <AccordionRow
                key={s.id}
                id={s.id}
                index={i + 1}
                label={s.label}
                preview={s.preview}
                open={open.has(s.id)}
                onToggle={() => toggle(s.id)}
              >
                <s.Content />
              </AccordionRow>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
