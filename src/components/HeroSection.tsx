export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-8xl">
        <div className="mx-auto max-w-3xl space-y-4">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
            <span className="mr-1 h-2 w-2 rounded-full bg-red-500 inline-block" />
            Rev Rights
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Maximize Your YouTube Shorts{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Monetization
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="mt-6 text-xl text-zinc-400">
            Rev Rights is the premier platform connecting YouTube Shorts creators with
            top-tier music and brand opportunities. We empower creators to earn while
            creating engaging content and help artists and labels expand their reach.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md border border-red-700 text-red-400 bg-background hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
              href="https://revrights.com/for-brands"
            >
              For Brands
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md border border-red-700 text-red-400 bg-background hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
              href="https://revrights.com/for-creators"
            >
              For Creators
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-md border border-red-700 text-red-400 bg-background hover:bg-red-950/50 text-lg h-12 px-8 transition-all duration-300 transform hover:scale-105"
              href="https://revrights.com/for-artists-labels"
            >
              For Artists &amp; Labels
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
