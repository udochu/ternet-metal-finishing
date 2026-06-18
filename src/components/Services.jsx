import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const SERVICES = [
  {
    title: 'Zinc Plating',
    // Real photo of plated fasteners — centered to show the bright zinc-chromate bolt.
    img: '/plated-fasteners.jpeg',
    imgAlt: 'Zinc-plated bolt and fasteners with a bright chromate finish',
    objectPosition: 'center',
    body: 'A protective zinc coating that shields steel and other metals from rust and corrosion, significantly extending the life of your industrial components. Available in multiple chromate finishes.',
    icon: (
      <path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-4z" />
    ),
  },
  {
    title: 'Phosphate Finishing',
    // Same photo, right-cropped to feature the matte phosphate-coated fasteners.
    img: '/plated-fasteners.jpeg',
    imgAlt: 'Phosphate-coated fasteners with a matte gray conversion finish',
    objectPosition: 'right',
    body: 'A phosphate conversion coating that improves corrosion resistance, paint and coating adhesion, and lubricity, ideal for fasteners, automotive components, and machined parts.',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Do"
          title="Services"
          subtitle="Two core finishing processes, engineered for durability and consistent corrosion protection."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-7 md:grid-cols-2"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              {/* Card image — real photo of plated fasteners */}
              <div className="h-52 w-full overflow-hidden sm:h-60">
                <img
                  src={service.img}
                  alt={service.imgAlt}
                  loading="lazy"
                  style={{ objectPosition: service.objectPosition }}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7 sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel-light">{service.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
