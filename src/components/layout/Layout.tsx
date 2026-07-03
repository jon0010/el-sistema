import { useEffect, type ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { libroContent } from '../../data/libro-content'

function ScrollToHash() {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return
        }
      }
      window.scrollTo(0, 0)
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return null
}

export function Layout({ children }: { children: ReactNode }) {
  useScrollReveal()

  return (
    <div className="counter-scroll">
      <main className="wrapper" id="wrapper">
        <ScrollToHash />
        <Header />
        {children}
        <Footer content={libroContent} />
      </main>
    </div>
  )
}
