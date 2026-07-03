import { useEffect } from 'react'

export function Header() {
  useEffect(() => {
    const header = document.querySelector('.header-fixed')
    const onScroll = () => {
      if (!header) return
      if (window.scrollY > 20) header.classList.add('is-fixed')
      else header.classList.remove('is-fixed')
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header header-fixed mt-xl-20 tw:max-xl:!mt-4">
      <div className="container w-1810 tw:max-xl:!px-4">
        <div className="header-content">
          <a href="/" className="logo tw:max-md:!block">
            <img
              src="/images/logo/logo-sg.svg"
              alt="El Sistema Ganador"
              width={220}
              height={40}
              className="tw:max-md:!w-[240px] tw:max-md:!h-auto"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
