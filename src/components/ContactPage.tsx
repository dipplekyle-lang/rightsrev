import { useState } from 'react'

type Subject =
  | ''
  | 'general'
  | 'creator'
  | 'label'
  | 'technical'
  | 'other'

const subjectOptions: { value: Subject; label: string }[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'creator', label: 'Creator Support' },
  { value: 'label', label: 'Label Partnership' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'other', label: 'Other' },
]

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '' as Subject,
    message: '',
  })
  const [subjectOpen, setSubjectOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const selectedLabel =
    subjectOptions.find((o) => o.value === form.subject)?.label ?? 'Select subject'

  return (
    <main className="flex-1">
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-8xl mx-auto">

          {/* Page header */}
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <a
              className="inline-flex items-center text-red-400 hover:text-red-300 mb-4 transition-colors"
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Home
            </a>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="text-zinc-400 md:text-xl max-w-2xl mx-auto">
              Get in touch with our team for any questions or inquiries
            </p>
          </div>

          {/* Main grid */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">

              {/* Contact form — 2 cols */}
              <div className="md:col-span-2">
                <div className="rounded-lg border bg-zinc-900/50 border-zinc-800 shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Fill out the form below and we'll get back to you as soon as possible
                    </p>
                  </div>

                  <div className="p-6 pt-0">
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                        <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center">
                          <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold">Message Sent!</h4>
                        <p className="text-zinc-400">We'll get back to you as soon as possible.</p>
                        <button
                          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                          className="text-red-400 hover:text-red-300 transition-colors text-sm underline underline-offset-4"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name + Email row */}
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              className="text-sm font-medium leading-none"
                              htmlFor="name"
                            >
                              Full Name
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-zinc-800 border-zinc-700 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus:border-red-500/60 transition-colors"
                              id="name"
                              placeholder="Your Name"
                              required
                              value={form.name}
                              name="name"
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              className="text-sm font-medium leading-none"
                              htmlFor="email"
                            >
                              Email Address
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-zinc-800 border-zinc-700 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus:border-red-500/60 transition-colors"
                              id="email"
                              placeholder="you@example.com"
                              required
                              type="email"
                              value={form.email}
                              name="email"
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                          </div>
                        </div>

                        {/* Subject dropdown */}
                        <div className="space-y-2 relative">
                          <label className="text-sm font-medium leading-none" htmlFor="subject">
                            Subject
                          </label>
                          <button
                            type="button"
                            onClick={() => setSubjectOpen(!subjectOpen)}
                            className="flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm bg-zinc-800 border-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-colors"
                          >
                            <span className={form.subject ? 'text-white' : 'text-zinc-500'}>
                              {selectedLabel}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`h-4 w-4 opacity-50 transition-transform ${subjectOpen ? 'rotate-180' : ''}`}
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                          {subjectOpen && (
                            <div className="absolute z-10 w-full mt-1 rounded-md border border-zinc-700 bg-zinc-800 shadow-lg">
                              {subjectOptions.map((opt) => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-700 transition-colors first:rounded-t-md last:rounded-b-md"
                                  onClick={() => {
                                    setForm({ ...form, subject: opt.value })
                                    setSubjectOpen(false)
                                  }}
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium leading-none" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            className="flex w-full rounded-md border px-3 py-2 text-sm bg-zinc-800 border-zinc-700 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus:border-red-500/60 transition-colors min-h-[150px] resize-y"
                            id="message"
                            name="message"
                            placeholder="Your message here..."
                            required
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                          />
                        </div>

                        <button
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium text-white h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 transition-colors"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar info cards */}
              <div className="space-y-6">

                {/* Email Us */}
                <div className="rounded-lg border bg-zinc-900/50 border-zinc-800 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-500/20 w-10 h-10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-red-500"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-zinc-400">support@revrights.com</p>
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="rounded-lg border bg-zinc-900/50 border-zinc-800 p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold">Email Addresses</h3>
                    <p className="text-zinc-400">General: contact@revrights.com</p>
                    <p className="text-zinc-400">Support: support@revrights.com</p>
                    <p className="text-zinc-400">Business: business@revrights.com</p>
                    <p className="text-zinc-400">Legal: legal@revrights.com</p>
                  </div>
                </div>

                {/* Company Information */}
                <div className="rounded-lg border bg-zinc-900/50 border-zinc-800 p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold">Company Information</h3>
                    <p className="text-zinc-400">Based in the United Kingdom</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
