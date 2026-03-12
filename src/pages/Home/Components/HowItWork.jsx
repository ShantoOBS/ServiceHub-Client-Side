import React from 'react'

const steps = [
  {
    number: 1,
    title: 'Choose Service',
    description: 'Browse available services',
  },
  {
    number: 2,
    title: 'Secure Payment',
    description: 'Pay using Stripe',
  },
  {
    number: 3,
    title: 'Get Confirmation',
    description: 'Receive email confirmation',
  },
]

export default function HowItWork() {
  return (
    <section className="bg-white py-5 sm:py-10 ">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-center lg:gap-10">
          {/* Left: app download image */}
          <div className="">
           <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-slate-300" aria-hidden />
              <p className="text-xs font-normal uppercase tracking-wide text-[#64748B] sm:text-sm">
                How it works
              </p>
            </div>
            {/* Main heading */}
            <h2 className="my-3 text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              Easiest way to get a service
            </h2>
            <img
              src="/assets/Common/app-download.webp"
              alt="ServiceHub app download"
              className="max-h-[420px] w-auto object-contain sm:max-h-[400px] lg:max-h-[450px]"
            />
          </div>

          {/* Right: heading + steps */}
          <div>
            {/* Subtitle */}
        

            {/* Steps with connecting line */}
            <div className="relative mt-12">
              <div
                className="absolute left-[19px] top-0 bottom-0 w-px sm:left-[23px]"
                style={{ backgroundColor: '#E5E7EB' }}
                aria-hidden
              />
              <ul className="relative flex flex-col gap-10 sm:gap-12">
                {steps.map((step) => (
                  <li key={step.number} className="flex gap-5 sm:gap-6">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white sm:h-12 sm:w-12 sm:text-xl"
                      style={{ backgroundColor: '#00A9B2' }}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1 pb-1">
                      <h3 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-base text-slate-600 sm:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
