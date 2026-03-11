import React, { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 15000, label: 'Service Providers', format: (n) => n.toLocaleString('en-IN') },
  { target: 200000, label: 'Order Served', format: (n) => n.toLocaleString('en-IN') },
  { target: 100000, label: '5 Star Received', format: (n) => n.toLocaleString('en-IN') },
]

const DURATION_MS = 1800
const TICK_MS = 16

function useCountUp(isVisible) {
  const [values, setValues] = useState(stats.map(() => 0))
  const started = useRef(false)

  useEffect(() => {
    if (!isVisible || started.current) return
    started.current = true

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const t = Math.min(elapsed / DURATION_MS, 1)
      const eased = 1 - (1 - t) ** 2

      setValues(
        stats.map(({ target }) => Math.round(eased * target))
      )
      if (t >= 1) clearInterval(timer)
    }, TICK_MS)
    return () => clearInterval(timer)
  }, [isVisible])

  return values
}

export default function ServiceCount() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const values = useCountUp(isVisible)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2, rootMargin: '0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full py-5 sm:py-10 "
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-1 flex-col items-center justify-center border-b py-8 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:py-0 lg:last:border-r-0"
            style={
              index < stats.length - 1
                ? { borderColor: '#E0E0E0' }
                : undefined
            }
          >
            <p
              className="text-4xl font-bold tabular-nums sm:text-5xl lg:text-6xl"
              style={{ color: '#333333' }}
            >
              {stat.format(values[index])}
              <span className="font-semibold"> +</span>
            </p>
            <p
              className="mt-2 text-base font-normal sm:text-lg"
              style={{ color: '#555555' }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div
        className="mx-auto h-px w-full max-w-6xl"
        style={{ backgroundColor: '#E0E0E0' }}
        aria-hidden
      />
    </section>
  )
}
