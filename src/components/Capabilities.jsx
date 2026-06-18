import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const CAPABILITIES = [
  {
    label: 'Metals We Plate',
    value: 'Steel, Aluminum, Brass',
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
  },
  {
    label: 'Turnaround',
    value: '24 to 48 hours typical',
    note: 'Larger orders may take additional time',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    label: 'Quality',
    value: 'Batch testing on every order',
    icon: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />,
  },
  // ============================================================
  // PLACEHOLDER STAT — FILL THIS IN
  // Replace the value below with your real maximum part size
  // (e.g. dimensions or weight your line can handle).
  // ============================================================
  {
    label: 'Max Part Size',
    value: 'TBD — fill in',
    note: 'e.g. max dimensions / weight per part',
    icon: <path d="M21 3 3 21M21 3h-6M21 3v6M3 21h6M3 21v-6" />,
    placeholder: true,
  },
  // ============================================================
  // PLACEHOLDER STAT — FILL THIS IN
  // Replace the value below with your real volume capacity
  // (e.g. parts per day / week, or batch volume).
  // ============================================================
  {
    label: 'Volume',
    value: 'TBD — fill in',
    note: 'e.g. parts per day or batch capacity',
    icon: <path d="M3 7v10a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 17V7M3 7l9 5 9-5M3 7l9-5 9 5" />,
    placeholder: true,
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-charcoal py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Built for Reliable Throughput"
          subtitle="The metals, timelines, and quality standards you can plan your production around."
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`rounded-2xl border p-7 transition-colors duration-300 ${
                cap.placeholder
                  ? 'border-dashed border-gold/40 bg-white/[0.03]'
                  : 'border-white/10 bg-white/[0.04] hover:border-gold/40'
              }`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {cap.icon}
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                {cap.label}
              </p>
              <p className="mt-2 text-lg font-bold leading-snug text-white">{cap.value}</p>
              {cap.note && <p className="mt-1.5 text-sm text-white/55">{cap.note}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
