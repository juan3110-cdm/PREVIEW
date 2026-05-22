import { useInView } from '../hooks/useInView';
import { CLINIC } from '../config';

const STATS = [
  { value: '15+',   label: 'Años de experiencia' },
  { value: '2.400+', label: 'Pacientes atendidos' },
  { value: '8',     label: 'Especialistas certificados' },
];

const APPROACH = [
  ['Consultas en la misma semana', 'Dentro de 5 días hábiles'],
  ['Pruebas genómicas en sede',    'Guía para terapias dirigidas'],
  ['Comité de tumores semanal',    'Plan revisado por especialistas'],
  ['Enfermero navegador dedicado', 'Un solo punto de contacto'],
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="sobre-nosotros"
      aria-labelledby="about-heading"
      className="bg-cream py-24 md:py-32"
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className={`${inView ? 'fade-in fade-in-1' : 'opacity-0'}`}>
          <div className="eyebrow text-teal">Sobre Nosotros</div>
          <h2
            id="about-heading"
            className="font-display mt-4 text-[40px] md:text-[56px] leading-[1.02] text-ink max-w-[720px]"
          >
            Una práctica oncológica construida alrededor de usted, no del diagnóstico.
          </h2>
        </div>

        {/* Stat cards */}
        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          role="list"
          aria-label="Cifras clave"
        >
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              role="listitem"
              className={`bg-paper border hairline rounded-2xl px-8 py-7 ${
                inView ? `fade-in fade-in-${i + 2}` : 'opacity-0'
              }`}
            >
              <div className="font-display text-[52px] md:text-[60px] leading-none text-teal">{value}</div>
              <div className="mt-2 text-[14px] text-ink2">{label}</div>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="mt-16 grid md:grid-cols-12 gap-10 md:gap-14">

          {/* Philosophy text */}
          <div className={`md:col-span-7 ${inView ? 'fade-in fade-in-2' : 'opacity-0'}`}>
            <p className="font-display text-[26px] md:text-[32px] leading-[1.22] text-ink">
              Lumen Oncología nació de una convicción sencilla: la experiencia del tratamiento oncológico debe ser tan cuidada como la medicina misma.
            </p>
            <p className="mt-6 text-[15.5px] text-ink2 leading-[1.78] max-w-[62ch]">
              Nuestra práctica reúne oncología médica, radioterápica y quirúrgica bajo un mismo techo, con un enfermero navegador asignado a cada paciente. Realizamos comités de tumores semanales entre especialidades para que el plan que llega a su consulta sea el fruto de un equipo completo, no de un solo clínico decidiendo en solitario.
            </p>
            <p className="mt-4 text-[15.5px] text-ink2 leading-[1.78] max-w-[62ch]">
              Consultas disponibles dentro de la misma semana. Pruebas genómicas propias. Un acompañamiento de largo plazo — durante el tratamiento y en la sobrevivencia — porque el diagnóstico no termina el día que termina la quimioterapia.
            </p>
          </div>

          {/* Approach card */}
          <div className={`md:col-span-5 ${inView ? 'fade-in fade-in-3' : 'opacity-0'}`}>
            <div className="bg-paper border hairline rounded-2xl p-7">
              <div className="eyebrow text-teal">Nuestro enfoque</div>
              <ul className="mt-5 divide-y divide-ink/[0.08]" aria-label="Pilares del enfoque clínico">
                {APPROACH.map(([title, sub]) => (
                  <li key={title} className="py-4 flex items-start justify-between gap-4">
                    <span className="text-[14px] text-ink">{title}</span>
                    <span className="text-[12px] text-mute text-right shrink-0">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
