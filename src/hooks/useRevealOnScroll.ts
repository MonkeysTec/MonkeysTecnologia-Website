import { useEffect } from 'react'

const revealSelectors = [
  '.section-heading',
  '.need-rotator',
  '.highlight-item',
  '.pain-card',
  '.service-card',
  '.entry-card',
  '.process-copy',
  '.process-list li',
  '.contact-section',
]

export function useRevealOnScroll() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>(revealSelectors.join(', '))

    if (!animatedElements.length) return

    animatedElements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll')
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.14,
      },
    )

    animatedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
