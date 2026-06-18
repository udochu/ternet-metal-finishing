import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/*
        HERO BACKGROUND IMAGE — real photo of plated fasteners.
        The `animate-slowZoom` class gives the subtle, slow zoom-in effect.
        To swap it, drop a new image in /public and update the url() below.
      */}
      <div
        className="absolute inset-0 animate-slowZoom bg-charcoal bg-cover bg-center"
        style={{
          backgroundImage: "url('/plated-fasteners.jpeg')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-px relative z-10 mx-auto w-full max-w-7xl pt-28 pb-20"
      >
        <div className="max-w-3xl">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            New finishing facility, opening Fall 2026
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Precision Zinc and Phosphate Plating
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Industrial metal finishing in Avilla, Indiana. Durable,
            corrosion-resistant coatings for steel, aluminum, and brass, built to
            protect your parts and extend their life.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal shadow-soft transition-all hover:bg-gold-light hover:shadow-lift sm:text-base"
            >
              Request a Quote
            </a>
            <a
              href="tel:+12608973903"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/5 sm:text-base"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (260) 897-3903
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
