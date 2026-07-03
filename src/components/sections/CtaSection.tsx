import { SeonexBtn } from '../ui/SeonexBtn'
import type { LandingContent } from '../../types/content'

export function CtaSection({ content }: { content: LandingContent }) {
  const { cta, variant } = content
  const sectionId = variant === 'directores' ? 'test' : 'cta'

  return (
    <section id={sectionId} className="flat-spacing-3 tw:max-xl:!px-4" data-reveal="section">
      <div className="container w-1750">
        <div className="heading-section text-center cta-box-dm tw:max-md:!px-5 tw:max-md:!py-12">
          <h2 className="title letter-space--3 fw-6 mb-30 color-white tw:max-md:!text-[2rem] tw:max-md:!mb-5 tw:max-md:!leading-[1.1]">{cta.title}</h2>
          <p className="desc ff-2 text-body-1 mb-30 lh-32 color-white mx-auto cta-box-dm-desc tw:max-md:!text-base tw:max-md:!mb-6">
            {cta.description}
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center g-20 tw:max-md:!w-full">
            <SeonexBtn href={cta.primary.href} variant="lime" big>
              {cta.primary.label}
            </SeonexBtn>
            {cta.secondary && (
              <SeonexBtn href={cta.secondary.href} variant="border" big className="cta-btn-on-dark">
                {cta.secondary.label}
              </SeonexBtn>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function LinePage() {
  return (
    <div className="container">
      <div className="line-page" />
    </div>
  )
}
