import { useEffect } from 'react'
import { LandingPage } from '../components/sections/LandingPage'
import { libroContent } from '../data/libro-content'

export function LibroPage() {
  useEffect(() => {
    document.title = libroContent.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', libroContent.meta.description)
  }, [])

  return <LandingPage content={libroContent} />
}
