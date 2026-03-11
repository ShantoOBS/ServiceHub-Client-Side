import React, { useState } from 'react'

const faqs = [
  {
    question: 'What should I expect during my demo call?',
    answer:
      "During your demo call, our team will walk you through the key features of ServiceHub, tailored to your needs. We'll answer any questions you have and discuss how ServiceHub can help you book and manage home services easily.",
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer AC repair, plumbing, cleaning, and electrical maintenance. You can browse all services on our Services page and book with secure payment and instant confirmation.',
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer:
      'Yes. You can view, reschedule, or cancel your bookings from the My Booking page. Please refer to our cancellation policy for any applicable fees.',
  },
  {
    question: 'Is there a minimum spend?',
    answer:
      'No minimum spend is required. You pay only for the services you book. Pricing is shown before you confirm.',
  },
  {
    question: 'How do I pay for my booking?',
    answer:
      'We accept major cards and our payment gateway is secure. You pay at the time of booking and receive a confirmation email once payment is successful.',
  },
  {
    question: 'Are 1:1s, Feedback, and Updates included?',
    answer:
      'ServiceHub focuses on home service booking and management. Support is available via email and in-app chat for any questions about your bookings.',
  },
]

export default function FQA() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#FAFAF] py-5 sm:py-10 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          {/* Left: Heading */}
          <div>
             <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-slate-300" aria-hidden />
              <p className="text-xs font-normal uppercase tracking-wide text-[#64748B] sm:text-sm">
            Learn more
              </p>
            </div>
            <h2 className="mt-2 text-3xl font-bold leading-tight text-[#1C2B29] sm:text-4xl lg:text-5xl">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`rounded-xl px-5 py-4 transition-colors sm:px-6 sm:py-5 ${
                    isOpen ? 'bg-[#f2f4f6]' : 'bg-[#fafafa] hover:bg-[#f5f5f5]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="text-lg font-medium text-gray-900 sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-gray-600"
                      aria-hidden
                    >
                      {isOpen ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`overflow-hidden transition-all duration-200 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="mt-3 border-t border-gray-200/60 pt-4 text-base text-gray-600 sm:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
