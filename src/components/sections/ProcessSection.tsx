import { Br } from '../ui/SeonexAccordion'
import { ProcessInfiniteCarousel, type ProcessSlide } from '../ui/ProcessInfiniteCarousel'
import type { LandingContent } from '../../types/content'

const defaultProcessSlides: ProcessSlide[] = [
  { src: '/images/widget/img-working-proccess-1.jpg', imgClass: 'img-1', hideMobile: true },
  { src: '/images/widget/img-working-proccess-2.jpg', imgClass: 'img-2', hideMobile: true },
  { src: '/images/widget/img-working-proccess-3.jpg', imgClass: 'img-3', hideMobile: false },
  { src: '/images/widget/img-working-proccess-4.jpg', imgClass: 'img-2', hideMobile: true },
  { src: '/images/widget/img-working-proccess-5.jpg', imgClass: 'img-1', hideMobile: true },
]

const carouselImgClasses = ['img-1', 'img-2', 'img-3', 'img-2', 'img-1'] as const

function buildProcessSlides(carousel?: string[]): ProcessSlide[] {
  if (!carousel?.length) return defaultProcessSlides

  return carousel.map((src, index) => ({
    src,
    imgClass: carouselImgClasses[index % carouselImgClasses.length],
  }))
}

export function ProcessSection({ content }: { content: LandingContent }) {
  const { process } = content
  const slides = buildProcessSlides(process.carousel)

  return (
    <section
      id={content.variant === 'directores' ? 'diagnostico' : 'beneficios'}
      className="section-working-proccess flat-spacing-3 h-dm tw:max-xl:!px-4"
      data-reveal="section"
    >
      <div className="container">
        <div className="heading-section flat-spacing-2 text-center style-white">
          <div className="sub-title h6 mb-12 letter-space--2 fw-5">
            {process.eyebrow} <span>{process.eyebrowAccent}</span>
          </div>
          <h2 className="title letter-space--3 fw-6">
            <Br text={process.title} />
          </h2>
        </div>
      </div>

      <div className="section-working-proccess-inner">
        <ProcessInfiniteCarousel slides={slides} />

        <div className="container">
          <div className="bottom-section tw:max-xl:!flex-col tw:max-xl:!gap-8">
            <div className="left tw:max-xl:!w-full">
              <p className="h5 fw-5 letter-space--3 color-white text lh-32 tw:max-md:!text-base">
                <Br text={process.description} />
              </p>
              <div className="counter-item tw:max-md:!mt-6">
                <div className="counter">
                  <div className="number-counter d-flex tw:max-md:!text-[4rem]">
                    <span className="number color-dt-blue fs-200 lh-100 letter-space--5 fw-6 tw:max-md:!text-[4rem]">
                      {process.counter?.value ?? process.years}
                    </span>
                    {(process.counter?.suffix ?? '+') && (
                      <span className="fs-200 lh-100 fw-6 letter-space--5 tw:max-md:!text-[4rem]">
                        {process.counter?.suffix ?? '+'}
                      </span>
                    )}
                  </div>
                </div>
                <p className="h5 fw-5 letter-space--3">
                  {process.counter?.label ? (
                    process.counter.label.split('\n').map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))
                  ) : content.variant === 'directores' ? (
                    <>
                      Niveles de
                      <br />
                      dependencia
                    </>
                  ) : (
                    <>
                      Años de
                      <br />
                      experiencia
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="right tw:max-xl:!w-full">
              {process.steps.map((step) => (
                <div key={step.number} className="working-item" data-reveal="card">
                  <span className="number ff-2 text-body-2">{step.number}</span>
                  <div className="content">
                    <span className="h3 fw-6 letter-space--3 title">{step.title}</span>
                    <div className="text ff-2">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
