import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../data/testimonials';

const QuoteMark = () => (
  <svg
    viewBox="0 0 24 18"
    width="28"
    height="22"
    fill="currentColor"
    aria-hidden="true"
    className="text-teal/50 mb-5 shrink-0"
  >
    <path d="M0 18V9.6C0 4.3 3.4.6 9 0v3.6C6 4.3 4.2 6.4 4.2 9H9v9H0zm15 0V9.6C15 4.3 18.4.6 24 0v3.6c-3 .7-4.8 2.8-4.8 5.4H24v9h-9z" />
  </svg>
);

export default function Testimonials() {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonials-heading"
      className="bg-cream py-24 md:py-32"
    >
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className={`${inView ? 'fade-in fade-in-1' : 'opacity-0'}`}>
          <div className="eyebrow text-teal">Testimonios</div>
          <h2
            id="testimonials-heading"
            className="font-display mt-4 text-[40px] md:text-[54px] leading-[1.02] text-ink max-w-[580px]"
          >
            En las propias palabras de quienes estuvieron aquí.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map(({ quote, name, treatment, initials }, i) => (
            <article
              key={name}
              className={`bg-paper border hairline rounded-2xl p-7 flex flex-col
                ${inView ? `fade-in fade-in-${Math.min(i + 2, 6)}` : 'opacity-0'}
              `}
            >
              <QuoteMark />

              {/* Quote */}
              <blockquote className="font-display text-[19px] md:text-[20px] leading-[1.38] text-ink flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <footer className="mt-7 flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="avatar h-11 w-11 rounded-full flex items-center justify-center text-[13px] font-medium shrink-0"
                >
                  {initials}
                </div>
                <div>
                  <cite className="not-italic text-[14px] text-ink font-medium block">{name}</cite>
                  <span className="text-[12.5px] text-mute">{treatment}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-[12px] text-mute/70">
          Los nombres y algunas identificaciones han sido modificados para proteger la privacidad de los pacientes. Los testimonios se comparten con su autorización.
        </p>
      </div>
    </section>
  );
}
