const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Industries', href: '#industries' },
  { label: 'Quality', href: '#quality' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-charcoal text-white">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="/tmf-logo.jpeg"
                alt="Ternet Metal Finishing logo"
                className="h-9 w-9 flex-none rounded-lg object-cover"
              />
              <span className="text-lg font-bold tracking-tight">Ternet Metal Finishing</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Industrial zinc and phosphate metal finishing in Avilla, Indiana. Durable,
              corrosion-resistant coatings built to protect your parts and extend their life.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>
                <a href="tel:+12608973903" className="transition-colors hover:text-white">
                  (260) 897-3903
                </a>
              </li>
              <li>
                <a href="mailto:ternetmetalfinishing@gmail.com" className="break-all transition-colors hover:text-white">
                  ternetmetalfinishing@gmail.com
                </a>
              </li>
              <li className="text-white/65">150 Green Drive, Avilla, IN 46710</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/45">
            © 2026 Ternet Metal Finishing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
