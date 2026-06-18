/**
 * PlaceholderImage
 * -----------------
 * Drop-in placeholder for real photography. It renders a subtle brushed-metal
 * gradient with a label so you can see exactly where each image goes.
 *
 * TO ADD A REAL PHOTO:
 *   1. Put the image in /public (e.g. /public/photos/zinc-parts.jpg)
 *   2. Replace <PlaceholderImage label="..." /> with:
 *        <img src="/photos/zinc-parts.jpg" alt="Descriptive alt text"
 *             className="h-full w-full object-cover" loading="lazy" />
 */
export default function PlaceholderImage({ label = 'Photo', className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-steel via-charcoal to-steel-light/40 ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      {/* faint diagonal "brushed metal" sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 7px)',
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
        <svg
          className="h-8 w-8 text-gold/80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.6" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-widest text-white/70">
          {label}
        </span>
      </div>
    </div>
  )
}
