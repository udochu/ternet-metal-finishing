import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const CONTACT_DETAILS = [
  {
    label: 'Phone',
    value: '(260) 897-3903',
    href: 'tel:+12608973903',
    icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  },
  {
    label: 'Email',
    value: 'ternetmetalfinishing@gmail.com',
    href: 'mailto:ternetmetalfinishing@gmail.com',
    icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  },
  {
    label: 'Address',
    value: '150 Green Drive, Avilla, IN 46710',
    href: 'https://www.google.com/maps/search/?api=1&query=150+Green+Drive+Avilla+IN+46710',
    icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  },
]

const inputClass =
  'w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-steel-light/60 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const formData = Object.fromEntries(new FormData(e.target).entries())

    // ============================================================
    // FORM SUBMISSION — placeholder handler.
    //
    // TO WIRE UP FORMSPREE (or any endpoint):
    //   1. Create a form at https://formspree.io and copy your endpoint.
    //   2. Replace the block below with:
    //
    //      const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //        method: 'POST',
    //        headers: { Accept: 'application/json' },
    //        body: new FormData(e.target),
    //      })
    //      if (res.ok) { setStatus('success'); e.target.reset() }
    //      else { setStatus('idle'); alert('Something went wrong. Please call us.') }
    //
    // For now we just log the data and show a success state.
    // ============================================================
    console.log('Quote request submitted:', formData)
    await new Promise((r) => setTimeout(r, 700)) // simulate network
    setStatus('success')
    e.target.reset()
  }

  return (
    <section id="contact" className="bg-offwhite py-24 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact & Request a Quote"
          subtitle="Tell us about your parts and finishing needs. We respond quickly with a clear estimate."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-8 lg:grid-cols-5"
        >
          {/* Form */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white p-7 shadow-card sm:p-9 lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal">Thank you!</h3>
                <p className="mt-2 max-w-sm text-sm text-steel-light">
                  Your request has been received. We'll get back to you shortly with a
                  clear estimate. For anything urgent, call (260) 897-3903.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-charcoal/15 px-5 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Company
                    </label>
                    <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} placeholder="Acme Manufacturing" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@acme.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="(260) 555-0100" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Service Needed
                  </label>
                  <select id="service" name="service" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <option value="Zinc Plating">Zinc Plating</option>
                    <option value="Phosphate Finishing">Phosphate Finishing</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us about your parts, quantities, and finishing requirements…" />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal shadow-soft transition-all hover:bg-gold-light hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                >
                  {status === 'submitting' ? 'Sending…' : 'Request a Quote'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact details + map */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-2xl bg-charcoal p-7 text-white sm:p-8">
              <h3 className="text-lg font-bold">Reach Us Directly</h3>
              <ul className="mt-5 space-y-5">
                {CONTACT_DETAILS.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target={item.label === 'Address' ? '_blank' : undefined} rel="noreferrer" className="group flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gold/15 text-gold">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          {item.icon}
                        </svg>
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-widest text-gold-light">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-white/90 transition-colors group-hover:text-white">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded Google Map of the facility address */}
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="Ternet Metal Finishing location — 150 Green Drive, Avilla, IN 46710"
                src="https://maps.google.com/maps?q=150%20Green%20Drive%2C%20Avilla%2C%20IN%2046710&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
