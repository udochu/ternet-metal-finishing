import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

/**
 * Shared section heading: small gold eyebrow, large title, optional subtitle.
 * `light` flips the colors for use on dark sections.
 */
export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-steel-light'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
