import { useInView } from '../hooks/useInView';
import { TREATMENTS } from '../data/treatments';

export default function Treatments() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="tratamientos"
      aria-labelledby="treatments-heading"
      className="bg-paper py-24 md:py-32"
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className={`${inView ? 'fade-in fade-in-1' : 'opacity-0'}`}>
          <div className="eyebrow text-teal">Tratamientos y Procedimientos</div>
          <div className="mt-4 flex flex-col md:flex-row md:items-end gap-4 md:gap-16">
            <h2
              id="treatments-heading"
              className="font-display text-[40px] md:text-[54px] leading-[1.02] text-ink max-w-[600px]"
            >
              Diez disciplinas. Un solo plan de atención.
            </h2>
            <p className="text-[15px] text-ink2 leading-relaxed max-w-[42ch] md:pb-2">
              Cada modalidad está coordinada por el mismo equipo, lo que elimina la brecha entre el diagnóstico y el inicio del tratamiento.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TREATMENTS.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className={`group bg-cream border hairline rounded-2xl p-6 flex flex-col gap-4
                hover:border-teal/30 hover:shadow-md transition-all duration-200
                ${inView ? `fade-in fade-in-${Math.min(i % 6 + 1, 6)}` : 'opacity-0'}
              `}
            >
              {/* Icon */}
              <div
                aria-hidden="true"
                className="w-10 h-10 rounded-xl bg-teal/[0.08] flex items-center justify-center
                  group-hover:bg-cyan/15 transition-colors duration-200"
              >
                <Icon size={20} className="text-teal group-hover:text-tealup transition-colors duration-200" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-display text-[19px] leading-snug text-ink">{title}</h3>
                <p className="mt-2 text-[13.5px] text-ink2 leading-[1.7]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
