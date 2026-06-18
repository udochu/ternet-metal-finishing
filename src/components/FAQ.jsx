import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const FAQS = [
  {
    q: 'What is zinc plating?',
    a: 'Zinc plating applies a protective zinc coating to metal parts, preventing rust and corrosion and significantly extending the lifespan of your components.',
  },
  {
    q: 'What is phosphate finishing?',
    a: 'Phosphate finishing is a conversion coating that improves corrosion resistance, paint adhesion, and lubricity, commonly used on fasteners and automotive parts.',
  },
  {
    q: 'How long does it take?',
    a: 'Most orders are completed in 24 to 48 hours. Larger orders may take additional time, because we prioritize quality and consistency.',
  },
  {
    q: 'What metals do you plate?',
    a: 'We plate a range of metals including steel, aluminum, and brass.',
  },
  {
    q: 'Do you offer quality control?',
    a: 'Yes. Every batch is inspected and tested to meet your specifications and our standards.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the Request a Quote form below, or call us at (260) 897-3903. We respond quickly with a clear estimate.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-xl border border-charcoal/10 bg-white"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-charcoal sm:text-lg">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold/10 text-gold"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[15px] leading-relaxed text-steel-light">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-offwhite py-24 sm:py-28">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
          subtitle="Quick answers about our processes, timelines, and how to get started."
          center
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 space-y-3"
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
