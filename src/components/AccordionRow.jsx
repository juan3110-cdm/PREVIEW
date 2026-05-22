/* Accordion row — exact match to the Claude Design reference */

const Chevron = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} width="18" height="18" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function AccordionRow({ index, id, label, preview, open, onToggle, children }) {
  return (
    <div id={id} className="border-b hairline last:border-b-0">
      <button
        onClick={onToggle}
        className="acc-row w-full text-left px-6 md:px-12 py-8 md:py-10 flex items-center gap-6 group"
        aria-expanded={open}
        aria-controls={`${id}-content`}
      >
        <span className="num eyebrow text-mute w-10 shrink-0">
          {String(index).padStart(2, '0')}
        </span>
        <span className="flex-1 min-w-0">
          <span className="font-display block text-[34px] md:text-[44px] leading-[1.05] text-ink">
            {label}
          </span>
          <span className="block text-[14px] md:text-[15px] text-ink2/80 mt-2">
            {preview}
          </span>
        </span>
        <span
          aria-hidden="true"
          className={`chev ${open ? 'open' : ''} text-teal shrink-0 h-10 w-10 rounded-full border border-ink/15 flex items-center justify-center`}
        >
          <Chevron />
        </span>
      </button>

      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={id}
        className={`acc-content ${open ? 'open' : ''}`}
      >
        <div>
          <div className={`px-6 md:px-12 pb-14 pt-2 ${open ? 'rise' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
