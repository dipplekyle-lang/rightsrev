const ctaLinks = [
  { label: 'Apply as Creator', href: 'https://revrights.com/creator-application' },
  { label: 'Submit Music', href: 'https://revrights.com/label-submission' },
  { label: 'Contact Us', href: 'https://revrights.com/contact' },
  { label: 'FAQ', href: 'https://revrights.com/faq' },
]

export function CTASection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-8xl">
        <div className="mx-auto max-w-3xl space-y-6">

          <h2 className="text-4xl font-bold">Ready to Join Rev Rights?</h2>
          <p className="text-xl text-zinc-300">
            Join thousands of artists and creators already earning with Rev Rights's music promotion programs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {ctaLinks.map((link) => (
              <a
                key={link.href}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md border border-red-700 text-red-400 bg-background hover:bg-red-950/50 text-lg h-12 px-8 w-full sm:w-auto transition-all duration-300"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-zinc-500 mt-6">
            Application review typically takes 1-2 business days
          </p>

        </div>
      </div>
    </section>
  )
}
