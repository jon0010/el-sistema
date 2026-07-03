import { useEffect } from 'react'
import { ensureGsapPlugins, gsap } from '../lib/gsap'

export function useScrollReveal() {
  useEffect(() => {
    ensureGsapPlugins()

    const sections = gsap.utils.toArray<HTMLElement>('[data-reveal="section"]')
    const cards = gsap.utils.toArray<HTMLElement>('[data-reveal="card"]')

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        gsap.from(section, {
          y: 56,
          opacity: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      cards.forEach((card) => {
        gsap.from(card, {
          y: 36,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}
