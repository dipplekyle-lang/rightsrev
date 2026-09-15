import { CheckIcon, TrendingUpIcon, DollarSignIcon, MusicIcon } from './Icons'

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-8xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                $12,000,000+
              </span>{' '}
              generated in 2024
            </h2>
            <p className="text-xl text-zinc-300">
              Our creators earn rewards by promoting artists' music, label releases, and
              brands through YouTube Shorts, with monthly payouts and detailed performance
              tracking.
            </p>
            <div className="space-y-4">
              {[
                'Transparent earnings system',
                'Monthly payments',
                'Detailed performance analytics',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-red-500/20 p-1 rounded">
                    <CheckIcon className="h-4 w-4 text-red-400" />
                  </div>
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – support card */}
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-red-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-center mb-6">
              How We Support Your Success
            </h3>
            <div className="space-y-4">

              <SupportCard
                icon={<TrendingUpIcon className="h-5 w-5 text-red-400" />}
                title="Growth Strategy"
                description="Personalized guidance to maximize your channel's growth and revenue potential"
              />
              <SupportCard
                icon={<DollarSignIcon className="h-5 w-5 text-red-400" />}
                title="Revenue Optimization"
                description="Advanced tools to track and maximize your earnings from every video"
              />
              <SupportCard
                icon={<MusicIcon className="h-5 w-5 text-red-400" />}
                title="Music Curation"
                description="Custom music recommendations based on your content style and audience"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

interface SupportCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function SupportCard({ icon, title, description }: SupportCardProps) {
  return (
    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 hover:border-red-500/50 transition-all duration-300">
      <div className="flex gap-4 items-start">
        <div
          className="bg-red-500/20 p-2 rounded flex items-center justify-center"
          style={{ width: '2.25rem', height: '2.25rem', flexShrink: 0 }}
        >
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-lg">{title}</h4>
          <p className="text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  )
}
