import { useRef, useState } from 'react'
import { Br, SeonexAccordionItem } from '../ui/SeonexAccordion'
import { ImageLightbox } from '../ui/ImageLightbox'
import type { LandingContent } from '../../types/content'

export function ServicesSection({ content }: { content: LandingContent }) {
  const { pillars } = content
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const largeImage = pillars.sideImage ?? '/images/widget/img-section-services.jpg'

  return (
    <section ref={sectionRef} id="dimensiones" className="section-services h-dm tw:max-xl:!px-4" data-reveal="section">
      <div className="heading-section animation-follow mouse-follow-title">
        <div className="container w-1750">
          <div className="sub-title h6 mb-25 letter-space--2 fw-5 tw:max-md:!mb-4">
            {pillars.eyebrow} <span>{pillars.eyebrowAccent}</span>
          </div>
          <div className="title title-big text-follow tw:max-xl:!text-[clamp(2rem,8vw,4.5rem)] tw:max-md:!leading-[1.1]">
            <Br text={pillars.title} />
          </div>
        </div>
        <div className="line-header-section" />
      </div>

      <div className="container w-1750">
        <div className="section-inner g-30 tw:max-xl:!flex-col tw:max-xl:!gap-8">
          <div className="left-section tw:max-xl:!w-full">
            <div className="wg-according" id="According1">
              {pillars.items.map((item, index) => (
                <SeonexAccordionItem
                  key={item.title}
                  id={`according-${index + 1}`}
                  number={String(index + 1).padStart(2, '0')}
                  title={item.title}
                  description={item.description}
                  bullets={item.bullets}
                  image={item.image}
                  open={active === index}
                  onToggle={() => setActive(index)}
                  onImageClick={
                    item.image
                      ? () => setLightbox({ src: item.image!, alt: item.title })
                      : undefined
                  }
                  animate
                />
              ))}
            </div>
          </div>
          <div className="right tw:max-xl:!w-full">
            <div className="image-testimonial tw:max-md:!mt-4" data-reveal="card">
              <div className="image">
                <img
                  loading="lazy"
                  width={845}
                  height={1000}
                  src={largeImage}
                  alt={pillars.title}
                />
              </div>
              <div className="content">
                <div className="counter-item">
                  <div className="counter mb-10">
                    <div className="number-counter flex fs-65 fw-6">
                      <span className="number color-dt-blue h1 letter-space--3 fw-6">
                        {pillars.sideStat.value}
                      </span>
                      {content.variant !== 'directores' && <span className="h1 fw-6">%</span>}
                    </div>
                  </div>
                </div>
                <p className="text h5 letter-space--3">
                  <Br text={`"${pillars.sideStat.quote}"`} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  )
}
