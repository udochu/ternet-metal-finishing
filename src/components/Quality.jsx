import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const POINTS = [
  'Every batch inspected and tested',
  'Consistent, repeatable results',
  'Corrosion performance held to spec',
]

export default function Quality() {
  return (
    <section id="quality" className="bg-charcoal py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Text */}
          <motion.div variants={fadeUp}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-gold">
              Quality
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Quality You Can Measure.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Every batch undergoes inspection and testing to meet your
              specifications. We treat consistent results and corrosion
              performance as the standard, not the exception.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/85">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-[15px]">{point}</span>
                </li>
              ))}
            </ul>

            {/*
              ============================================================
              CERTIFICATIONS — ADD LATER
              When you have certifications (e.g. ISO 9001, IATF 16949,
              RoHS, customer-specific approvals), add them here. A simple
              logo/badge row works well, for example:

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <img src="/certs/iso-9001.svg" alt="ISO 9001 Certified" className="h-12" />
                <img src="/certs/iatf-16949.svg" alt="IATF 16949" className="h-12" />
              </div>
              ============================================================
            */}
          </motion.div>

          {/* Image — real photo of the Ternet Metal Finishing facility */}
          <motion.div variants={fadeUp}>
            <img
              src="/facility.jpeg"
              alt="The Ternet Metal Finishing facility in Avilla, Indiana, opening Fall 2026"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
