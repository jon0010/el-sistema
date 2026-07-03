import type { LandingContent } from '../../types/content'

const defaultBrands = [1, 2, 3, 4, 5, 6]

const defaultCopy = {
  eyebrow: 'Confían en el método —',
  eyebrowAccent: '80+ organizaciones.',
  title: 'Empresas que ya aplican el sistema',
}

function BrandMarquee({ logos }: { logos?: LandingContent['clients'] }) {
  if (logos?.logos?.length) {
    const slides = [...logos.logos, ...logos.logos, ...logos.logos]

    return (
      <div className="infiniteSlide-app list-brands">
        <div className="infiniteSlide infiniteSlide-wrapper tf-marquee g-30">
          {slides.map((logo, i) => (
            <div key={`brand-${logo.alt}-${i}`} className="infiniteSlide-slide">
              <span className="brand-item brand-item--static">
                <img
                  loading="lazy"
                  src={logo.src}
                  alt={logo.alt}
                  className="brand brand-logo"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const slides = [...defaultBrands, ...defaultBrands, ...defaultBrands]

  return (
    <div className="infiniteSlide-app list-brands">
      <div className="infiniteSlide infiniteSlide-wrapper tf-marquee g-30">
        {slides.map((n, i) => (
          <div key={`brand-${n}-${i}`} className="infiniteSlide-slide">
            <span className="brand-item">
              <img src={`/images/icon/brand-${n}.svg`} alt="" className="brand" />
              <img src={`/images/icon/hover-brand-${n}.svg`} alt="" className="brand-hover" />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClientsSection({ content }: { content: LandingContent }) {
  const clients = content.clients

  return (
    <div className="section-clients flat-spacing-1 tw:max-xl:!px-4">
      <div className="container">
        <div className="heading-section text-center mb-70 tw:max-md:!mb-10">
          <div className="sub-title h6 mb-12 letter-space--2 fw-5">
            {clients?.eyebrow ?? defaultCopy.eyebrow}{' '}
            <span>{clients?.eyebrowAccent ?? defaultCopy.eyebrowAccent}</span>
          </div>
          <h2 className="title letter-space--3 fw-6">
            {clients?.title ?? defaultCopy.title}
          </h2>
        </div>
        <BrandMarquee logos={clients} />
      </div>
    </div>
  )
}
