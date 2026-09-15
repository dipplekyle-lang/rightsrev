import { LOGO_SRC } from '../assets/logo'
import { YouTubeIcon, DiscordIcon, InstagramIcon, TwitterIcon } from './Icons'

const socialLinks = [
  { href: 'https://www.youtube.com/@RevRightsMusic', icon: YouTubeIcon, label: 'YouTube' },
  { href: 'https://discord.gg/revrights', icon: DiscordIcon, label: 'Discord' },
  { href: 'https://www.instagram.com/revrights', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://twitter.com/revrightsx', icon: TwitterIcon, label: 'Twitter' },
]

const legalLinks = [
  { label: 'Terms of Service', href: 'https://revrights.com/terms' },
  { label: 'Privacy Policy', href: 'https://revrights.com/privacy' },
]

// const serviceLinks = [
//   { label: 'For Creators', href: 'https://revrights.com/for-creators' },
//   { label: 'For Artists & Labels', href: 'https://revrights.com/for-artists-labels' },
//   { label: 'For Brands', href: 'https://revrights.com/for-brands' },
// ]

const helpLinks = [
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: 'https://revrights.com/faq' },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12 relative z-10">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

          {/* Brand column */}
          <div className="col-span-2">
            <img
              alt="Rev Rights Logo"
              loading="lazy"
              width={240}
              height={80}
              decoding="async"
              className="h-10 w-auto mb-4 transition-all duration-300 hover:scale-105"
              src={LOGO_SRC}
              style={{ color: 'transparent' }}
            />
            <p className="text-zinc-400 mb-4">
              Managing music rights, catalogs and revenue for<br />
              independent artists and rights holders.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  className="text-red-500 hover:text-red-400 transition-colors duration-300"
                  href={href}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a className="text-zinc-400 hover:text-white transition-colors duration-300" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <a className="text-zinc-400 hover:text-white transition-colors duration-300" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Help */}
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <a className="text-zinc-400 hover:text-white transition-colors duration-300" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-500 text-sm">© 2026 Rev Rights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
