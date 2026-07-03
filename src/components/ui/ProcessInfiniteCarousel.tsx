import { useEffect, useRef } from 'react'

export type ProcessSlide = {
  src: string
  imgClass: string
  hideMobile?: boolean
}

export function ProcessInfiniteCarousel({ slides }: { slides: ProcessSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const loopSlides = [...slides, ...slides]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateDuration = () => {
      const half = track.scrollWidth / 2
      if (half <= 0) return
      const pxPerSecond = 55
      track.style.setProperty('--marquee-duration', `${half / pxPerSecond}s`)
    }

    updateDuration()

    const ro = new ResizeObserver(updateDuration)
    ro.observe(track)
    window.addEventListener('resize', updateDuration)

    track.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', updateDuration, { once: true })
    })

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateDuration)
    }
  }, [slides])

  return (
    <div className="process-infinite-carousel flat-spacing-3">
      <div ref={trackRef} className="process-infinite-track">
        {loopSlides.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            className={`process-infinite-slide${slide.hideMobile ? ' d-none d-sm-block' : ''}`}
          >
            <div className={`image-working-proccess ${slide.imgClass}`}>
              <img loading="lazy" width={300} height={200} src={slide.src} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
