function MarqueeRow({ items, variant }: { items: string[]; variant: 'blue' | 'light' }) {
  const slides = [...items, ...items, ...items]

  return (
    <div className={`infiniteSlide-app infiniteSlide-${variant === 'blue' ? '1' : '2'} ${variant === 'blue' ? 'bg-dt-blue' : 'bg-dt-light'}`}>
      <div
        className="infiniteSlide infiniteSlide-wrapper tf-marquee"
        {...(variant === 'light' ? { 'data-direction': 'right' } : {})}
      >
        {slides.map((item, i) => (
          <div key={`${item}-${i}`} className="infiniteSlide-slide">
            <div className="h5 fw-6 marquee-item d-flex align-items-center g-20 tw:max-md:!text-sm tw:max-md:!gap-3">
              <i className="icon-light" />
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <section className="section-infiniteSlide">
      <MarqueeRow items={items} variant="blue" />
      <MarqueeRow items={items} variant="light" />
    </section>
  )
}
