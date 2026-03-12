import React, { useEffect, useRef, useState } from 'react'

export default function RevealOnScroll({ children, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const combinedClassName = `reveal-section ${
    isVisible ? 'reveal-section--visible' : ''
  } ${className}`.trim()

  return (
    <div ref={ref} className={combinedClassName}>
      {children}
    </div>
  )
}

