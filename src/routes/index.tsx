import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { ComingSoonPage } from '../components/ComingSoonPage'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black text-white font-sans relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A0000] via-[#0A0000] to-black pointer-events-none" />
      <Header />
      <ComingSoonPage />
      <Footer />
    </div>
  )
}
