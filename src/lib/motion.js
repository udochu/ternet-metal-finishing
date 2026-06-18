// Shared Framer Motion variants used across sections.
// `fadeUp` is the workhorse for scroll-into-view reveals (paired with
// whileInView + viewport={{ once: true }}).

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// Stagger container — children should use `fadeUp` (or similar) as their variant.
export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

// Standard viewport config so every section reveals once, slightly before
// it is fully in frame.
export const viewportOnce = { once: true, amount: 0.2 }
