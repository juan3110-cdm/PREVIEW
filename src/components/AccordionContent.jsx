/**
 * Accordion section content renderers.
 * These components render INSIDE AccordionRow — no wrappers, no padding,
 * no backgrounds (those come from the row itself).
 */

import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { TREATMENTS }   from '../data/treatments';
import { TEAM }         from '../data/team';
import { TESTIMONIALS } from '../data/testimonials';
import { CLINIC, EMAILJS } from '../config';

const Arrow = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} width="16" height="16" fill="none"
    stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ─────────────────────────────────────────────
   1. SOBRE NOSOTROS
───────────────────────────────────────────── */
const STATS = [
  { value: '15+',    label: 'Años de experiencia' },
  { value: '2.400+', label: 'Pacientes atendidos' },
  { value: '8',      label: 'Especialistas certificados' },
];

const APPROACH = [
  ['Consultas en la misma semana', 'Dentro de 5 días hábiles'],
  ['Pruebas genómicas en sede',    'Guía para terapias dirigidas'],
  ['Comité de tumores semanal',    'Plan revisado por especialistas'],
  ['Enfermero navegador dedicado', 'Un único punto de contacto'],
];

export function AboutContent() {
  return (
    <div className="max-w-[1180px]">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {STATS.map(({ value, label }) => (
          <div key={label} className="bg-paper border hairline rounded-2xl px-7 py-6">
            <div className="font-display text-[48px] leading-none text-teal">{value}</div>
            <div className="mt-2 text-[14px] text-ink2">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="font-display text-[28px] md:text-[34px] leading-[1.2] text-ink">
            Lumen Oncología nació de una convicción sencilla: la experiencia del tratamiento oncológico debe ser tan cuidada como la medicina misma.
          </p>
          <p className="mt-6 text-[15px] md:text-[16px] text-ink2 leading-[1.75] max-w-[60ch]">
            Nuestra práctica reúne oncología médica, radioterapéutica y quirúrgica bajo un mismo techo, con un enfermero navegador asignado a cada paciente. Realizamos comités de tumores semanales entre especialidades, para que el plan que llega a su consulta sea el fruto de un equipo completo y no de un solo clínico decidiendo en solitario.
          </p>
          <p className="mt-4 text-[15px] md:text-[16px] text-ink2 leading-[1.75] max-w-[60ch]">
            Consultas en la misma semana. Pruebas genómicas en sede. Un acompañamiento a largo plazo — durante el tratamiento y en la sobrevivencia.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="bg-paper border hairline rounded-2xl p-7">
            <div className="eyebrow text-teal">Nuestro enfoque</div>
            <ul className="mt-5 divide-y divide-ink/[0.09]">
              {APPROACH.map(([t, s]) => (
                <li key={t} className="py-3.5 flex items-baseline justify-between gap-4">
                  <span className="text-[14px] text-ink">{t}</span>
                  <span className="text-[12px] text-mute text-right shrink-0">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   2. TRATAMIENTOS Y PROCEDIMIENTOS
───────────────────────────────────────────── */
export function TreatmentsContent() {
  return (
    <div className="max-w-[1180px] grid md:grid-cols-2 gap-x-12 gap-y-2">
      {TREATMENTS.map(({ icon: Icon, title, desc }, i) => (
        <div
          key={title}
          className="py-5 border-b hairline last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
        >
          <div className="flex items-start gap-5">
            <span className="num text-[12px] text-mute tracking-widest mt-1 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-7 h-7 rounded-lg bg-teal/[0.08] flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-teal" />
                </div>
                <h4 className="font-display text-[22px] md:text-[24px] text-ink leading-tight">
                  {title}
                </h4>
              </div>
              <p className="text-[14.5px] text-ink2 leading-[1.7] max-w-[52ch]">{desc}</p>
            </div>
            <Arrow className="text-teal mt-1 shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   3. TESTIMONIOS
───────────────────────────────────────────── */
const QuoteMark = () => (
  <svg viewBox="0 0 24 18" className="text-teal/70 mb-5" width="28" height="22" fill="currentColor">
    <path d="M0 18V9.6C0 4.3 3.4.6 9 0v3.6C6 4.3 4.2 6.4 4.2 9H9v9H0zm15 0V9.6C15 4.3 18.4.6 24 0v3.6c-3 .7-4.8 2.8-4.8 5.4H24v9h-9z" />
  </svg>
);

export function TestimonialsContent() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1180px]">
        {TESTIMONIALS.map((t) => (
          <article key={t.name} className="bg-paper border hairline rounded-2xl p-7 flex flex-col">
            <QuoteMark />
            <blockquote className="font-display text-[20px] md:text-[22px] leading-[1.35] text-ink flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <footer className="mt-auto pt-7 flex items-center gap-3">
              <div className="avatar h-11 w-11 rounded-full flex items-center justify-center text-[13px] font-medium shrink-0">
                {t.initials}
              </div>
              <div>
                <cite className="not-italic text-[14px] text-ink font-medium block">{t.name}</cite>
                <span className="text-[12.5px] text-mute">{t.treatment}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
      <p className="mt-6 text-[12px] text-mute/70">
        Los nombres y algunas identificaciones han sido modificados para proteger la privacidad de los pacientes. Los testimonios se comparten con su autorización.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   4. EQUIPO
───────────────────────────────────────────── */
export function TeamContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1180px]">
      {TEAM.map(({ name, role, creds, initials, photo }) => (
        <article key={name} className="bg-paper border hairline rounded-2xl p-6">
          {photo ? (
            <img src={photo} alt={`Foto de ${name}`} className="h-16 w-16 rounded-full object-cover object-top" />
          ) : (
            <div className="avatar h-16 w-16 rounded-full flex items-center justify-center text-[18px] font-medium font-display">
              {initials}
            </div>
          )}
          <h4 className="mt-5 font-display text-[22px] leading-tight text-ink">{name}</h4>
          <div className="mt-1 text-[13px] text-teal">{role}</div>
          <p className="mt-3 text-[13.5px] text-ink2 leading-relaxed">{creds}</p>
        </article>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   5. AGENDAR CONSULTA
───────────────────────────────────────────── */
const AREAS = [
  'Oncología General', 'Quimioterapia', 'Radioterapia', 'Inmunoterapia',
  'Terapia Dirigida', 'Terapia Hormonal', 'Trasplante de Células Madre',
  'Oncología Quirúrgica', 'Oncología Intervencionista',
  'Medicina de Precisión / Genómica', 'Cuidados Paliativos y de Soporte', 'Segunda Opinión',
];

const EMPTY_FORM = { name: '', email: '', phone: '', date: '', area: '', message: '' };

// Confirmación # generada una sola vez por sesión de formulario
function genConfirm() {
  return `LMN-${Math.floor(100000 + Math.random() * 899999)}`;
}

export function BookingContent() {
  const [form,      setForm]      = useState(EMPTY_FORM);
  const [sent,      setSent]      = useState(false);
  const [errs,      setErrs]      = useState({});
  const [loading,   setLoading]   = useState(false);
  const [sendErr,   setSendErr]   = useState('');
  const [confirmNum]              = useState(genConfirm);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name  = 'Por favor ingrese su nombre.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Por favor ingrese un correo válido.';
    if (!form.phone.trim()) e.phone = 'Por favor ingrese un número telefónico.';
    if (!form.area)         e.area  = 'Por favor seleccione un área de tratamiento.';
    return e;
  };

  const submit = async () => {
    const e = validate();
    setErrs(e);
    setSendErr('');
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name:    form.name,
          from_email:   form.email,
          phone:        form.phone,
          preferred_date: form.date || 'No especificada',
          area:         form.area,
          message:      form.message || 'Sin mensaje adicional.',
          to_email:     EMAILJS.toEmail,
          confirm_num:  confirmNum,
          clinic_name:  CLINIC.name,
        },
        { publicKey: EMAILJS.publicKey },
      );
      setSent(true);
    } catch (err) {
      console.error('[EmailJS]', err);
      setSendErr(
        'Hubo un problema al enviar su solicitud. Por favor contáctenos directamente al ' +
        CLINIC.phone + ' o escriba a ' + CLINIC.email + '.',
      );
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="max-w-[680px] bg-paper border hairline rounded-2xl p-10">
        <CheckCircle2 size={32} className="text-teal mb-4" aria-hidden="true" />
        <div className="eyebrow text-teal">Solicitud recibida</div>
        <h4 className="font-display text-[34px] md:text-[40px] leading-tight mt-3 text-ink">
          Gracias, {form.name.split(' ')[0]}.
        </h4>
        <p className="mt-4 text-[15.5px] text-ink2 leading-[1.7] max-w-[55ch]">
          Una coordinadora del equipo del {CLINIC.leadDoctor} le contactará en un día hábil para confirmar su cita y resolver cualquier duda antes de su visita.
        </p>
        <div className="mt-7 flex items-center gap-3 text-[13px] text-mute">
          <span className="inline-block h-px w-8 bg-ink/20" aria-hidden="true" />
          Confirmación #{confirmNum}
        </div>
        <button
          onClick={() => { setSent(false); setForm(EMPTY_FORM); setErrs({}); setSendErr(''); }}
          className="mt-8 text-[13px] text-teal underline underline-offset-4 decoration-teal/40 hover:decoration-teal"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  const inputCls = 'mt-2 w-full rounded-xl px-4 py-3.5 text-[15px] text-ink placeholder:text-mute/70';
  const labelCls = 'block';
  const labelSpan = 'eyebrow text-mute';

  return (
    <div className="grid md:grid-cols-12 gap-10 max-w-[1180px]">
      {/* Left context */}
      <div className="md:col-span-5">
        <p className="font-display text-[28px] md:text-[32px] leading-[1.25] text-ink">
          Solicite su consulta. Respondemos en un día hábil.
        </p>
        <p className="mt-5 text-[15px] text-ink2 leading-[1.75] max-w-[40ch]">
          Para urgencias o síntomas activos, contáctenos directamente por teléfono. Las consultas de primera vez se agendan habitualmente dentro de 5 días hábiles.
        </p>
        <div className="mt-8 border-t hairline pt-6 space-y-2 text-[14px] text-ink2">
          <div className="flex justify-between"><span>Línea directa</span>
            <a href={`tel:${CLINIC.phone.replace(/\s/g,'')}`} className="text-ink tabular-nums hover:text-teal">{CLINIC.phone}</a>
          </div>
          <div className="flex justify-between"><span>Coordinación de pacientes</span>
            <a href={`mailto:${CLINIC.email}`} className="text-ink hover:text-teal">{CLINIC.email}</a>
          </div>
          <div className="flex justify-between"><span>Enfermería — fuera de horario</span>
            <a href={`tel:${CLINIC.phoneNursing.replace(/\s/g,'')}`} className="text-ink tabular-nums hover:text-teal">{CLINIC.phoneNursing}</a>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="md:col-span-7">
        <div className="bg-paper border hairline rounded-2xl p-7 md:p-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Nombre */}
            <div className={`${labelCls} md:col-span-2`}>
              <span className={labelSpan}>Nombre Completo *</span>
              <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)}
                placeholder="Nombres y apellidos" autoComplete="name"
                aria-required="true" className={inputCls} />
              {errs.name && <span role="alert" className="block mt-1.5 text-[12px]" style={{color:'#a3402b'}}>{errs.name}</span>}
            </div>
            {/* Correo */}
            <div className={labelCls}>
              <span className={labelSpan}>Correo *</span>
              <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
                placeholder="tú@ejemplo.com" autoComplete="email"
                aria-required="true" className={inputCls} />
              {errs.email && <span role="alert" className="block mt-1.5 text-[12px]" style={{color:'#a3402b'}}>{errs.email}</span>}
            </div>
            {/* Teléfono */}
            <div className={labelCls}>
              <span className={labelSpan}>Teléfono *</span>
              <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)}
                placeholder="+58 414 000 0000" autoComplete="tel"
                aria-required="true" className={inputCls} />
              {errs.phone && <span role="alert" className="block mt-1.5 text-[12px]" style={{color:'#a3402b'}}>{errs.phone}</span>}
            </div>
            {/* Fecha */}
            <div className={labelCls}>
              <span className={labelSpan}>Fecha Preferida</span>
              <input type="date" value={form.date} onChange={(e) => update('date', e.target.value)}
                min={new Date().toISOString().split('T')[0]} className={inputCls} />
            </div>
            {/* Área */}
            <div className={`${labelCls} md:col-span-2`}>
              <span className={labelSpan}>Área de Tratamiento *</span>
              <select value={form.area} onChange={(e) => update('area', e.target.value)}
                aria-required="true" className={`${inputCls} cursor-pointer`}>
                <option value="">Seleccione un área…</option>
                {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              {errs.area && <span role="alert" className="block mt-1.5 text-[12px]" style={{color:'#a3402b'}}>{errs.area}</span>}
            </div>
            {/* Mensaje */}
            <div className={`${labelCls} md:col-span-2`}>
              <span className={labelSpan}>Mensaje <span className="text-mute/60 normal-case tracking-normal">(opcional)</span></span>
              <textarea value={form.message} onChange={(e) => update('message', e.target.value)}
                rows="4" placeholder="Cualquier información que desee compartir con la coordinación antes de su visita."
                className={`${inputCls} resize-none`} />
            </div>
          </div>
          {sendErr && (
            <div role="alert" className="mt-5 flex items-start gap-3 bg-[#fdf2f0] border border-[#e8b4ab] rounded-xl px-4 py-3">
              <AlertCircle size={16} className="text-[#a3402b] mt-0.5 shrink-0" />
              <p className="text-[13px] text-[#a3402b] leading-relaxed">{sendErr}</p>
            </div>
          )}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[12px] text-mute max-w-[40ch]">
              Su información está cifrada y se comparte únicamente con su equipo de atención asignado.
            </p>
            <button
              onClick={submit}
              disabled={loading}
              className="btn-ink px-7 py-3.5 text-[14px] font-medium rounded-full inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Enviar solicitud de consulta"
            >
              {loading ? (
                <><Loader2 size={16} className="animate-spin" /> Enviando…</>
              ) : (
                <>Enviar Solicitud <Arrow /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   6. CONTACTO Y UBICACIÓN
───────────────────────────────────────────── */
const QUICK_LINKS = ['Portal del Paciente', 'Seguros y Facturación', 'Ensayos Clínicos', 'Segunda Opinión'];

export function ContactContent() {
  return (
    <div className="grid md:grid-cols-12 gap-10 max-w-[1180px]">
      <div className="md:col-span-5">
        <div className="eyebrow text-teal">Visite</div>
        <address className="not-italic font-display text-[26px] md:text-[30px] leading-[1.2] mt-3 text-ink">
          {CLINIC.address.building},<br />
          {CLINIC.address.floor},<br />
          {CLINIC.address.street},<br />
          {CLINIC.address.neighborhood}
        </address>

        <div className="mt-7 grid grid-cols-2 gap-y-5 gap-x-6 text-[14px]">
          <div>
            <div className="eyebrow text-mute">Horario</div>
            <div className="mt-2 text-ink">{CLINIC.hours.weekdays}</div>
            <div className="text-ink2">{CLINIC.hours.saturday}</div>
            <div className="text-mute">{CLINIC.hours.sunday}</div>
          </div>
          <div>
            <div className="eyebrow text-mute">Teléfono</div>
            <a href={`tel:${CLINIC.phone.replace(/\s/g,'')}`} className="mt-2 text-ink tabular-nums block hover:text-teal">{CLINIC.phone}</a>
            <div className="eyebrow text-mute mt-4">Correo</div>
            <a href={`mailto:${CLINIC.email}`} className="mt-1 text-ink block hover:text-teal break-all">{CLINIC.email}</a>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {QUICK_LINKS.map((q) => (
            <a key={q} href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border hairline bg-paper text-[13px] text-ink hover:bg-wash/60 transition-colors">
              {q} <Arrow className="text-teal" />
            </a>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="md:col-span-7">
        <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden border hairline bg-wash"
          aria-label="Mapa de ubicación de la clínica">
          {/* TODO: embed Google Maps — reemplaza este SVG con un <iframe> de Google Maps */}
          <svg viewBox="0 0 800 560" className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="rgba(31,79,88,0.07)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="800" height="560" fill="#EEF0EA" />
            <rect width="800" height="560" fill="url(#mapgrid)" />
            <g stroke="#D9D1C2" strokeWidth="14" fill="none" strokeLinecap="round">
              <path d="M-20 180 Q 220 220 420 150 T 820 200" />
              <path d="M-20 360 Q 260 320 480 380 T 820 340" />
              <path d="M120 -20 Q 160 220 220 320 T 280 580" />
              <path d="M520 -20 Q 540 240 580 360 T 620 580" />
              <path d="M-20 270 Q 350 262 500 278 T 820 265" />
            </g>
            <g stroke="#FAF7F1" strokeWidth="8" fill="none" strokeLinecap="round">
              <path d="M-20 180 Q 220 220 420 150 T 820 200" />
              <path d="M-20 360 Q 260 320 480 380 T 820 340" />
              <path d="M120 -20 Q 160 220 220 320 T 280 580" />
              <path d="M520 -20 Q 540 240 580 360 T 620 580" />
              <path d="M-20 270 Q 350 262 500 278 T 820 265" />
            </g>
            <rect x="60"  y="420" width="180" height="120" rx="10" fill="#D9E2D2" />
            <rect x="640" y="60"  width="120" height="90"  rx="10" fill="#D9E2D2" />
            <rect x="320" y="60"  width="80"  height="60"  rx="8"  fill="#D9E2D2" />
            <g transform="translate(420 270)">
              <circle r="36" fill="#1F4F58" opacity="0.12" />
              <circle r="22" fill="#1F4F58" opacity="0.18" />
              <circle r="9"  fill="#1F4F58" />
              <circle r="3"  fill="#FAF7F1" />
            </g>
            <text x="448" y="266" fontFamily="DM Sans,sans-serif" fontSize="13" fill="#13202A" fontWeight="500">
              Lumen Oncología
            </text>
            <text x="448" y="284" fontFamily="DM Sans,sans-serif" fontSize="11" fill="#7A8690">
              Torre Médica Las Mercedes · Piso 3
            </text>
            <text x="55" y="158" fontFamily="DM Sans,sans-serif" fontSize="10" fill="#7A8690"
              transform="rotate(-7 55 158)">Av. Principal Las Mercedes</text>
            <text x="132" y="380" fontFamily="DM Sans,sans-serif" fontSize="10" fill="#7A8690"
              transform="rotate(88 132 380)">Calle Madrid</text>
          </svg>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-paper/95 backdrop-blur px-4 py-3 rounded-xl border hairline">
            <div>
              <div className="text-[13px] text-ink font-medium">Las Mercedes, Caracas</div>
              <div className="text-[12px] text-mute">A 5 min de Altamira · Estacionamiento disponible</div>
            </div>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.address.full)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-[12.5px] text-teal hover:text-tealup inline-flex items-center gap-1 transition-colors">
              Cómo Llegar <Arrow className="text-teal" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
