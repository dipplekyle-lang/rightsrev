export function ComingSoonPage() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <section className="py-20 md:py-32 w-full">
        <div className="container relative z-10 mx-auto px-4 max-w-8xl">
          <div className="mx-auto max-w-3xl text-center space-y-8">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
              <span className="mr-1 h-2 w-2 rounded-full bg-red-500 inline-block animate-pulse" />
              Coming Soon
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Acquiring.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Administering.
              </span>{' '}
              Monetizing.
            </h1>

            {/* Body copy */}
            <div className="space-y-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              <p>
                RevRights is building a modern rights management company focused on independent music catalogs.
              </p>
              <p>
                We're currently working on our first catalog acquisition and building the infrastructure to properly manage music rights, metadata and revenue.
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-red-500/40 mx-auto" />

            {/* Contact nudge */}
            <p className="text-zinc-500 text-sm">
              Interested in working with us?{' '}
              <a
                href="/contact"
                className="text-red-400 hover:text-red-300 transition-colors underline underline-offset-4"
              >
                Get in touch
              </a>
            </p>

          </div>
        </div>
      </section>
    </main>
  )
}
