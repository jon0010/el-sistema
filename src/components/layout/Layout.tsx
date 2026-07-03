import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { libroContent } from '../../data/libro-content'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function Layout() {
  useScrollReveal()

  return (
    <div className="counter-scroll">
      <main className="wrapper" id="wrapper">
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer content={libroContent} />
      </main>
    </div>
  )
}
