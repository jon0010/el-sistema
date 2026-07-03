import { useEffect } from 'react'
import { LandingPage } from '../components/sections/LandingPage'
import { directoresContent } from '../data/directores-content'

export function DirectoresPage() {
  useEffect(() => {
    document.title = directoresContent.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', directoresContent.meta.description)
  }, [])

  return <LandingPage content={directoresContent} />
}
