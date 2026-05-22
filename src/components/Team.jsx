import { useInView } from '../hooks/useInView';
import { TEAM } from '../data/team';

export default function Team() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="equipo"
      aria-labelledby="team-heading"
      className="bg-paper py-24 md:py-32"
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className={`${inView ? 'fade-in fade-in-1' : 'opacity-0'}`}>
          <div className="eyebrow text-teal">Nuestro Equipo</div>
          <div className="mt-4 flex flex-col md:flex-row md:items-end gap-4 md:gap-16">
            <h2
              id="team-heading"
              className="font-display text-[40px] md:text-[54px] leading-[1.02] text-ink max-w-[540px]"
            >
              Especialistas que dedican su práctica exclusivamente al cáncer.
            </h2>
            <p className="text-[15px] text-ink2 leading-relaxed max-w-[42ch] md:pb-2">
              Cada médico forma parte del comité de tumores semanal — sus decisiones son colectivas, no individuales.
            </p>
          </div>
        </div>

        {/* Doctor cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map(({ name, role, creds, initials, photo }, i) => (
            <article
              key={name}
              className={`bg-cream border hairline rounded-2xl p-6 flex flex-col
                hover:border-teal/25 hover:shadow-sm transition-all duration-200
                ${inView ? `fade-in fade-in-${Math.min(i + 2, 6)}` : 'opacity-0'}
              `}
            >
              {/* Photo or avatar */}
              {photo ? (
                <img
                  src={photo}
                  alt={`Foto de ${name}`}
                  className="h-20 w-20 rounded-full object-cover object-top border border-ink/10"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="avatar h-20 w-20 rounded-full flex items-center justify-center text-[20px] font-display"
                >
                  {initials}
                </div>
              )}

              {/* Info */}
              <h3 className="mt-5 font-display text-[21px] leading-tight text-ink">{name}</h3>
              <div className="mt-1.5 text-[12.5px] text-cyan font-medium tracking-wide uppercase" style={{ color: '#1F6E6E' }}>
                {role}
              </div>
              <p className="mt-3 text-[13.5px] text-ink2 leading-relaxed flex-1">{creds}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
