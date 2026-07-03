import { SeonexBtn } from '../ui/SeonexBtn'
import { Br } from '../ui/SeonexAccordion'
import type { LandingContent } from '../../types/content'

export function StrategySection({ content }: { content: LandingContent }) {
  const { strategy, variant } = content
  const sectionId = variant === 'directores' ? 'sintoma' : 'metodo'
  const isLibro = variant === 'libro'
  const growthSuffix = strategy.growth.suffix ?? '%'
  const strategyImage = strategy.image ?? '/images/section/img-section-strategy.jpg'
  const cardLogo = isLibro
    ? '/images/logo/logo-yellow-marketing-card.svg'
    : '/images/logo/logo-marketing-card.svg'

  return (
    <section id={sectionId} className="section-strategy flat-spacing-1 h-dm tw:max-xl:!px-4" data-reveal="section">
      <div className="container w-1750">
        <div className="top-section heading-section strategy-top-section flat-spacing-2 tw:max-md:!mb-8">
          <div className="sub-title h6 mb-10 letter-space--2 fw-5">
            {strategy.eyebrow} <span>{strategy.eyebrowAccent}</span>
          </div>
          <div className="strategy-top-head">
            <div className="letf">
              <h2 className="title letter-space--3 fw-6 mb-0">
                <Br text={strategy.title} />
              </h2>
            </div>
            <div className="right strategy-intro-right">
              <p className="desc ff-2 text-body-1 mb-0 lh-32 color-paragraph">
                <Br text={strategy.description} />
              </p>
            </div>
          </div>
          <div className="strategy-top-cta tw:max-lg:!justify-center tw:max-md:!mt-5">
            <SeonexBtn href={strategy.cta.href} variant="border" big>
              {strategy.cta.label}
            </SeonexBtn>
          </div>
        </div>

        <div className="row rg-30 align-items-stretch tw:max-xl:!gap-6">
          <div className="col-lg-4 tw:max-xl:!w-full" data-reveal="card">
            <div className="marketing-card strategy-card-rich h-100 tw:max-md:!p-6">
              <div className="img-sharp">
                <div className="blob-wrapper">
                  <div className="blob" />
                </div>
              </div>
              <div className="logo">
                <img src={cardLogo} alt={isLibro ? 'El Sistema Ganador' : ''} />
              </div>
              <div className="content">
                {strategy.badge && (
                  <span className="strategy-badge ff-2 fw-6 text-body-3 d-inline-block mb-15">
                    {strategy.badge}
                  </span>
                )}
                <div className="text-body-4 title fw-6 letter-space--3">{strategy.card.title}</div>
                <p className="desc ff-2 fw-5">{strategy.card.description}</p>
                <div className="list-benefit strategy-benefit-grid d-flex g-20 rg-15 flex-wrap tw:max-md:!flex-col">
                  {strategy.card.benefits.map((benefit) => (
                    <div key={benefit} className="benefit-item d-flex align-items-center g-10">
                      <i className="icon-check fs-24" />
                      <span className="ff-2 fw-5">{benefit}</span>
                    </div>
                  ))}
                </div>
                {strategy.card.footer && (
                  <p className="strategy-card-footer ff-2 fw-5 text-body-3 mt-25">{strategy.card.footer}</p>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4 tw:max-xl:!w-full" data-reveal="card">
            {strategy.infoCard ? (
              <div className="strategy-info-card h-100 tw:max-md:!p-5">
                <div className="strategy-info-card-header">
                  <div className="sub-title h6 mb-10 letter-space--2 fw-5">
                    {strategy.infoCard.eyebrow}
                  </div>
                  <h3 className="h3 fw-6 letter-space--3 mb-0">{strategy.infoCard.title}</h3>
                </div>
                <div className="strategy-info-list">
                  {strategy.infoCard.items.map((item) => (
                    <div key={item.title} className="strategy-info-item d-flex g-15">
                      <span className="strategy-info-icon">
                        <img src={item.icon} alt="" />
                      </span>
                      <div className="strategy-info-text">
                        <span className="h5 fw-6 letter-space--3 d-block mb-8">{item.title}</span>
                        <p className="ff-2 text-body-3 color-paragraph mb-0 lh-28">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="image strategy-center-image h-100">
                <img loading="lazy" width={553} height={500} src={strategyImage} alt="" />
              </div>
            )}
          </div>

          <div className="col-lg-4 tw:max-xl:!w-full" data-reveal="card">
            <div className="growth-card strategy-growth-card h-100 tw:max-md:!p-5">
              <div className="top-card">
                <div className="counter-item">
                  <div className="counter mb-10">
                    <div className="number-counter flex fs-65 fw-6">
                      <span className="number color-dt-blue h1 letter-space--3 fw-6">
                        {strategy.growth.value}
                      </span>
                      {growthSuffix && <span className="fs-60 lh-100 fw-6">{growthSuffix}</span>}
                    </div>
                  </div>
                  <p className="h5 fw-6 lh-35 ff-2 color-paragraph mb-0">{strategy.growth.label}</p>
                </div>
              </div>

              {strategy.growth.highlights && strategy.growth.highlights.length > 0 && (
                <div className="strategy-highlights-grid tw:max-sm:!grid-cols-1">
                  {strategy.growth.highlights.map((item) => (
                    <div key={item.label} className="strategy-highlight-item">
                      <span className="strategy-highlight-value color-dt-blue fw-6">{item.value}</span>
                      <span className="strategy-highlight-label ff-2 text-body-3 color-paragraph">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="line" />
              <div className="content-card">
                <p className="desc mb-25 ff-2 color-paragraph">{strategy.growth.description}</p>
                <SeonexBtn href={strategy.growth.cta.href} variant="blue" big>
                  {strategy.growth.cta.label}
                </SeonexBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
