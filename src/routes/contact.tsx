import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { ContactPage } from '../components/ContactPage'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/contact')({
  component: ContactRoute,
})

function ContactRoute() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white font-sans">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  )
}
