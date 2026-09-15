import { AwardIcon, MusicNoteIcon, FilmIcon } from './Icons'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  cta: React.ReactNode
}

const features: Feature[] = [
  {
    icon: <AwardIcon className="h-6 w-6 text-red-400" />,
    title: 'BrandBoost',
    description: 'Collaborate with top brands and get paid to promote their brands in your YouTube Shorts.',
    benefits: [
      'Earn while creating engaging content',
      'Get paid to promote brands in your YouTube Shorts',
      'Access exclusive brand partnership opportunities',
    ],
    cta: <span className="text-zinc-500">Coming Soon</span>,
  },
  {
    icon: <MusicNoteIcon className="h-6 w-6 text-red-400" />,
    title: 'Music Promotions',
    description: 'Connect with top artists and labels to promote their music in your YouTube Shorts.',
    benefits: [
      'Get paid to promote popular artists & music',
      'Earn while creating content using popular artist music',
      'Collab with popular artists & get sponsored',
    ],
    cta: (
      <a
        className="text-red-400 hover:text-red-300 transition-colors"
        href="https://revrights.com/for-artists-labels"
      >
        Learn More
      </a>
    ),
  },
  {
    icon: <FilmIcon className="h-6 w-6 text-red-400" />,
    title: 'ClipsRev',
    description: 'Get paid to clip viral content and help top creators grow their YouTube Shorts channels.',
    benefits: [
      'Get paid when your clipped content goes viral',
      'Access exclusive clipping opportunities',
      'Work with celebrities, brands, and influencers to earn by clipping their content',
    ],
    cta: <span className="text-zinc-500">Coming Soon</span>,
  },
]

export function FeaturesSection() {
  return (
    <section id="key-features" className="py-20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-8xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Creators Can Unlock New Revenue Streams</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Explore our key features designed to maximize your earnings and grow your audience on YouTube Shorts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="bg-red-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-zinc-400">{f.description}</p>
              <p className="text-zinc-400 mt-3">
                <span className="font-medium">Benefits:</span>
              </p>
              <ul className="list-disc pl-5 text-zinc-400 mt-1 space-y-1">
                {f.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-3">{f.cta}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
