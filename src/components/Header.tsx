import { Link } from '@tanstack/react-router'
import { LOGO_SRC } from '../assets/logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm py-2">
      <div className="container relative mx-auto px-4 flex h-16 items-center justify-center max-w-8xl">

        {/* Logo */}
        <div className="flex items-center absolute left-4">
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              alt="Rev Rights Logo"
              fetchPriority="high"
              width={240}
              height={80}
              decoding="async"
              className="h-8 w-auto"
              src={LOGO_SRC}
              style={{ color: 'transparent' }}
            />
          </Link>
        </div>

        {/* Nav */}
        {/* <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${currentPath === '/' ? 'text-red-400' : 'text-zinc-300 hover:text-white'}`}
          >
            Home
          </Link>
          <button
            type="button"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Services
          </button>
          <a
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            href="https://revrights.com/dashboards"
          >
            Dashboards
          </a>
          <a
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            href="https://revrights.com/faq"
          >
            FAQ
          </a>
        </nav> */}

        {/* Contact CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white h-10 px-4 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300 transform hover:scale-105 absolute right-4"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
