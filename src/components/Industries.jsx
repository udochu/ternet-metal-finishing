import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const INDUSTRIES = [
  {
    title: 'Automotive',
    body: 'Corrosion-resistant finishes for components that have to perform in the field.',
    icon: <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14M5 13v4h2m12-4v4h-2M7 17v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1m14 0v1a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1M7 13.5h.01M17 13.5h.01" />,
  },
  {
    title: 'Manufacturing',
    body: 'Consistent, repeatable coatings for production parts at volume.',
    icon: <path d="M2 20h20M4 20V9l5 3V9l5 3V9l5 3v8M9 20v-4h2v4" />,
  },
  {
    title: 'Heavy & Agricultural Equipment',
    body: 'Tough protection for parts that face weather, soil, and constant wear.',
    icon: <path d="M3 17h3l2-5h6l3 5h2M7 17a2 2 0 1 0 0 .01M17 17a2 2 0 1 0 0 .01M8 12V7h5l3 5" />,
  },
  {
    title: 'Fasteners & Hardware',
    body: 'High-throughput plating for bolts, nuts, screws, and small components.',
    icon: <path d="m13 3 3.293 3.293a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0L9 7M13 3l-2 2M9 7l-6 6v3h3l6-6M14 14l5 5" />,
  },
]

export default function Industries() {
  return (
    <section id="industries" className="bg-offwhite py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries Served"
          subtitle="Finishing services trusted across demanding industrial sectors."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-charcoal/5 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-charcoal text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {industry.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-charcoal">{industry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-light">{industry.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
