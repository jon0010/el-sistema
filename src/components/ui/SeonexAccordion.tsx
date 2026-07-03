import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { ensureGsapPlugins, gsap, ScrollTrigger } from '../../lib/gsap'

export function Br({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <span key={`${line}-${i}`}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  )
}

export function SeonexAccordionItem({
  id,
  number,
  title,
  description,
  bullets,
  image,
  open,
  onToggle,
  onImageClick,
  animate = false,
}: {
  id: string
  number: string
  title: string
  description: string
  bullets: string[]
  image?: string
  open: boolean
  onToggle: () => void
  onImageClick?: () => void
  animate?: boolean
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)
  const skipAnimation = useRef(true)

  useLayoutEffect(() => {
    if (!animate) return

    ensureGsapPlugins()

    const panel = panelRef.current
    const inner = innerRef.current
    const icon = iconRef.current
    if (!panel || !inner) return

    gsap.killTweensOf([panel, inner, icon, inner.children])

    if (skipAnimation.current) {
      skipAnimation.current = false
      if (open) {
        gsap.set(panel, { display: 'block', height: 'auto', opacity: 1, overflow: 'visible' })
        gsap.set(icon, { rotate: 90 })
      } else {
        gsap.set(panel, { display: 'none', height: 0, opacity: 0, overflow: 'hidden' })
        gsap.set(icon, { rotate: 0 })
      }
      return
    }

    if (open) {
      gsap.set(panel, { display: 'block', overflow: 'hidden', height: 0, opacity: 0 })
      const targetHeight = inner.offsetHeight

      gsap.to(panel, {
        height: targetHeight,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(panel, { height: 'auto', overflow: 'visible' })
          ScrollTrigger.refresh()
        },
      })

      gsap.fromTo(
        inner.querySelectorAll('.text, .benefit-item, .image'),
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, delay: 0.12, ease: 'power2.out' },
      )

      gsap.to(icon, { rotate: 90, duration: 0.35, ease: 'power2.out' })
      gsap.to(itemRef.current, {
        scale: 1.01,
        duration: 0.35,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
      })
    } else {
      const currentHeight = panel.offsetHeight
      gsap.set(panel, { overflow: 'hidden', height: currentHeight })

      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.38,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(panel, { display: 'none' })
          ScrollTrigger.refresh()
        },
      })

      gsap.to(icon, { rotate: 0, duration: 0.3, ease: 'power2.in' })
    }
  }, [open, animate])

  const panelClass = animate ? 'according-panel-animated' : open ? 'collapse show' : 'collapse'

  return (
    <div ref={itemRef} className="according-item">
      <p className="header-according">
        <button
          type="button"
          onClick={onToggle}
          className={`title-according h5 fw-5 letter-space--5 w-100 border-0 bg-transparent text-start ${open ? '' : 'collapsed'}`}
          aria-expanded={open}
          aria-controls={id}
        >
          <span className="left d-flex align-items-center g-70 h3 fw-6 letter-space--5">
            <span className="number-accourding text-body-3 ff-2 fw-4">{number}</span>
            {title}
          </span>
          <span ref={iconRef} className="icon">
            <i className="icon-chevron-right" />
          </span>
        </button>
      </p>
      <div id={id} ref={panelRef} className={panelClass} style={animate && !open ? { display: 'none' } : undefined}>
        <div ref={innerRef} className="according-content">
          <p className="text ff-2 mb-25">{description}</p>
          <ul className="list-benefit d-flex align-items-center flex-wrap">
            {bullets.map((bullet) => (
              <li key={bullet} className="benefit-item letter-space--2">
                <i className="icon-check" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="image">
            <button
              type="button"
              className="according-image-btn"
              onClick={onImageClick}
              disabled={!onImageClick}
              aria-label={onImageClick ? `Ver imagen de ${title} en grande` : undefined}
            >
              <img
                loading="lazy"
                width={550}
                height={290}
                src={image ?? '/images/widget/img-according.jpg'}
                alt={title}
              />
              {onImageClick && (
                <span className="according-image-zoom" aria-hidden="true">
                  <i className="icon-search" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SeonexWhyAccordionItem({
  id,
  title,
  description,
  open,
  onToggle,
  icon,
}: {
  id: string
  title: string
  description: string
  open: boolean
  onToggle: () => void
  icon: ReactNode
}) {
  return (
    <div className={`according-item style-2 ${open ? 'mb-30' : 'mb-30'}`}>
      <p className="header-according">
        <button
          type="button"
          onClick={onToggle}
          className={`title-according h5 letter-space--3 fw-6 w-100 border-0 bg-transparent text-start ${open ? '' : 'collapsed'}`}
          aria-expanded={open}
          aria-controls={id}
        >
          <span className="left d-flex align-items-center">
            <span className="icon-left">{icon}</span>
            <span className="title">
              <Br text={title} />
            </span>
          </span>
          <span className="icon">
            <i className="icon-chevron-right" />
          </span>
        </button>
      </p>
      <div id={id} className={open ? 'collapse show' : 'collapse'}>
        <div className="according-content">
          <p className="text ff-2">{description}</p>
        </div>
      </div>
    </div>
  )
}
