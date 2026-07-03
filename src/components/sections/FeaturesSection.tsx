import { useState } from 'react'
import { Br, SeonexWhyAccordionItem } from '../ui/SeonexAccordion'
import type { LandingContent } from '../../types/content'

const whyImages = [
  '/images/section/img-section-why.jpg',
  '/images/section/img-section-why-2.jpg',
  '/images/section/img-section-why-3.jpg',
  '/images/section/img-section-why-4.jpg',
]

export function FeaturesSection({ content }: { content: LandingContent }) {
  const { features } = content
  const [active, setActive] = useState(0)

  const resolveImage = (index: number) =>
    features.items[index]?.image ?? whyImages[index] ?? whyImages[0]

  return (
    <section className="section-why flat-spacing-3 h-dm tw:max-xl:!px-4" data-reveal="section">
      <div className="container">
        <div className="heading-section mb-70 text-center tw:max-md:!mb-10">
          <div className="sub-title h6 mb-10 letter-space--2 fw-5">
            {features.eyebrow} <span>{features.eyebrowAccent}</span>
          </div>
          <h2 className="title letter-space--3 fw-6">
            <Br text={features.title} />
          </h2>
        </div>

        <div className="section-why-inner tw:max-xl:!flex-col tw:max-xl:!gap-8">
          <div className="image image-frame tw:max-xl:!w-full tw:max-xl:!max-w-none">
            <img
              id="mainImage"
              loading="lazy"
              width={630}
              height={530}
              src={resolveImage(active)}
              alt=""
            />
          </div>

          <div className="section-content tw:max-xl:!w-full tw:max-xl:!max-w-none tw:max-md:!pt-0">
            <div className="line" />
            <div className="wg-according" id="According2">
              {features.items.map((item, index) => (
                <SeonexWhyAccordionItem
                  key={item.title}
                  id={`According-${index + 1}`}
                  title={item.title}
                  description={item.description}
                  open={active === index}
                  onToggle={() => setActive(index)}
                  icon={<i className="icon-light" style={{ fontSize: 24, color: '#fff' }} />}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
