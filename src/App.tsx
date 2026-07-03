import { useEffect } from 'react'
import { Layout } from './components/layout/Layout'
import { LandingPage } from './components/sections/LandingPage'
import { libroContent } from './data/libro-content'

export default function App() {
  useEffect(() => {
    document.title = libroContent.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', libroContent.meta.description)
  }, [])

  return (
    <Layout>
      <LandingPage content={libroContent} />
    </Layout>
  )
}
