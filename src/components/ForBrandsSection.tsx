import { MegaphoneIcon, SmallCheckIcon } from './Icons'

const checkItems = [
  'Access to 10,000+ creators',
  'Targeted audience matching',
  'Campaign performance tracking',
  'Authentic brand integration',
]

export function ForBrandsSection() {
  return (
    <section id="for-brands" className="py-20 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-8xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Are You a Brand Looking to Promote Your Products?</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Reach millions of engaged viewers through our network of YouTube Shorts creators
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-8 hover:bg-zinc-800/50 hover:border-red-500/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              <div className="bg-red-500/20 w-16 h-16 rounded-lg flex items-center justify-center shrink-0">
                <MegaphoneIcon className="h-8 w-8 text-red-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">BrandBoost for Advertisers</h3>
                <p className="text-zinc-400 mb-6">
                  Connect your brand with our network of YouTube Shorts creators to reach millions of
                  engaged viewers. Our platform helps you find the perfect creators to represent your
                  brand and products authentically.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {checkItems.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="bg-red-500/20 p-1 rounded mt-1 shrink-0">
                        <SmallCheckIcon className="h-3 w-3 text-red-400" />
                      </div>
                      <span className="text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white h-10 px-4 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300"
                  href="https://revrights.com/for-brands"
                >
                  Learn More
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
