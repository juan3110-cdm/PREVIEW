import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { CLINIC } from '../config';

const AREAS = [
  'Oncología General',
  'Quimioterapia',
  'Radioterapia',
  'Inmunoterapia',
  'Terapia Dirigida',
  'Terapia Hormonal',
  'Trasplante de Células Madre',
  'Oncología Quirúrgica',
  'Oncología Intervencionista',
  'Medicina de Precisión / Genómica',
  'Cuidados Paliativos y de Soporte',
  'Segunda Opinión',
];

const EMPTY = { name: '', email: '', phone: '', date: '', area: '', message: '' };

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <span role="alert" className="block mt-1.5 text-[12px]" style={{ color: '#a3402b' }}>
      {msg}
    </span>
  );
}

export default function Booking() {
  const [ref, inView] = useInView(0.06);
  const [form, setForm] = useState(EMPTY);
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Por favor ingrese su nombre completo.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Por favor ingrese un correo electrónico válido.';
    if (!form.phone.trim()) e.phone = 'Por favor ingrese un número de teléfono.';
    if (!form.area)         e.area  = 'Por favor seleccione un área de tratamiento.';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length > 0) return;

    // TODO: conectar a backend/servicio de correo
    // Ejemplo: await fetch('/api/consultas', { method: 'POST', body: JSON.stringify(form) })
    console.log('Solicitud de consulta:', form);

    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    setForm(EMPTY);
    setErrs({});
  };

  const firstName = form.name.split(' ')[0] || 'usted';
  const confirmNum = `LMN-${Math.floor(100000 + Math.random() * 899999)}`;

  const inputCls = 'mt-2 w-full rounded-xl px-4 py-3.5 text-[15px] text-ink placeholder:text-mute/60';
  const labelCls = 'block';
  const labelTextCls = 'eyebrow text-mute';

  return (
    <section
      id="consulta"
      aria-labelledby="booking-heading"
      className="bg-cream py-24 md:py-32"
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className={`${inView ? 'fade-in fade-in-1' : 'opacity-0'}`}>
          <div className="eyebrow text-teal">Agendar Consulta</div>
          <h2
            id="booking-heading"
            className="font-display mt-4 text-[40px] md:text-[54px] leading-[1.02] text-ink max-w-[620px]"
          >
            Solicite su consulta. Respondemos en un día hábil.
          </h2>
        </div>

        <div className={`mt-14 grid md:grid-cols-12 gap-10 md:gap-14 ${inView ? 'fade-in fade-in-2' : 'opacity-0'}`}>

          {/* Left: context */}
          <aside className="md:col-span-4">
            <p className="text-[15.5px] text-ink2 leading-[1.75] max-w-[40ch]">
              Para urgencias o síntomas activos, contáctenos directamente por teléfono. Las consultas de primera vez se programan habitualmente dentro de los 5 días hábiles siguientes.
            </p>
            <div className="mt-8 border-t border-ink/[0.09] pt-7 space-y-4 text-[14px] text-ink2">
              <div className="flex justify-between items-start gap-4">
                <span className="text-mute">Línea directa</span>
                <a href={`tel:${CLINIC.phone.replace(/\s/g,'')}`} className="text-ink tabular-nums hover:text-teal transition-colors">
                  {CLINIC.phone}
                </a>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-mute">Correo</span>
                <a href={`mailto:${CLINIC.email}`} className="text-ink break-all hover:text-teal transition-colors">
                  {CLINIC.email}
                </a>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span className="text-mute">Enfermería fuera de horario</span>
                <a href={`tel:${CLINIC.phoneNursing.replace(/\s/g,'')}`} className="text-ink tabular-nums hover:text-teal transition-colors">
                  {CLINIC.phoneNursing}
                </a>
              </div>
            </div>
          </aside>

          {/* Right: form card */}
          <div className="md:col-span-8">
            {sent ? (
              /* ── Confirmation ── */
              <div className="bg-paper border hairline rounded-2xl p-8 md:p-10 max-w-[640px]">
                <CheckCircle2 size={36} className="text-teal mb-4" aria-hidden="true" />
                <div className="eyebrow text-teal">Solicitud recibida</div>
                <h3 className="font-display text-[34px] md:text-[40px] leading-tight mt-3 text-ink">
                  Gracias, {firstName}.
                </h3>
                <p className="mt-4 text-[15.5px] text-ink2 leading-[1.72] max-w-[52ch]">
                  Una coordinadora del equipo del {CLINIC.leadDoctor} le contactará dentro de un día hábil para confirmar su cita y resolver cualquier duda antes de su visita.
                </p>
                <p className="mt-6 flex items-center gap-3 text-[13px] text-mute">
                  <span className="inline-block h-px w-8 bg-ink/20" aria-hidden="true" />
                  Confirmación #{confirmNum}
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 text-[13px] text-teal underline underline-offset-4 decoration-teal/40 hover:decoration-teal transition-all"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <div className="bg-paper border hairline rounded-2xl p-7 md:p-9">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Nombre */}
                  <div className={`${labelCls} md:col-span-2`}>
                    <span className={labelTextCls}>Nombre Completo *</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Nombres y apellidos"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errs.name}
                      aria-describedby={errs.name ? 'err-name' : undefined}
                      className={inputCls}
                    />
                    <FieldError msg={errs.name} />
                  </div>

                  {/* Correo */}
                  <div className={labelCls}>
                    <span className={labelTextCls}>Correo Electrónico *</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="tú@ejemplo.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errs.email}
                      className={inputCls}
                    />
                    <FieldError msg={errs.email} />
                  </div>

                  {/* Teléfono */}
                  <div className={labelCls}>
                    <span className={labelTextCls}>Teléfono *</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+58 414 000 0000"
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!errs.phone}
                      className={inputCls}
                    />
                    <FieldError msg={errs.phone} />
                  </div>

                  {/* Fecha preferida */}
                  <div className={labelCls}>
                    <span className={labelTextCls}>Fecha Preferida</span>
                    <input
                      type="date"
                      value={form.date}
                      onChange={update('date')}
                      min={new Date().toISOString().split('T')[0]}
                      aria-label="Fecha preferida para la consulta"
                      className={inputCls}
                    />
                  </div>

                  {/* Área de tratamiento */}
                  <div className={`${labelCls} md:col-span-2`}>
                    <span className={labelTextCls}>Área de Tratamiento *</span>
                    <select
                      value={form.area}
                      onChange={update('area')}
                      aria-required="true"
                      aria-invalid={!!errs.area}
                      className={`${inputCls} cursor-pointer`}
                    >
                      <option value="">Seleccione un área…</option>
                      {AREAS.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    <FieldError msg={errs.area} />
                  </div>

                  {/* Mensaje */}
                  <div className={`${labelCls} md:col-span-2`}>
                    <span className={labelTextCls}>
                      Mensaje{' '}
                      <span className="text-mute/60 normal-case tracking-normal">(opcional)</span>
                    </span>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={4}
                      placeholder="Cualquier información que desee compartir con la coordinación antes de su visita."
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
                  <p className="text-[12px] text-mute max-w-[44ch]">
                    Su información está cifrada y se comparte únicamente con su equipo de atención asignado.
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-medium bg-teal text-paper hover:bg-tealup active:scale-[0.98] transition-all duration-150"
                    aria-label="Enviar solicitud de consulta"
                  >
                    Enviar Solicitud <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
