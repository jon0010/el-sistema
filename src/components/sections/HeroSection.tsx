import { SeonexBtn } from '../ui/SeonexBtn'
import type { LandingContent } from '../../types/content'

export function HeroSection({ content }: { content: LandingContent }) {
  const { hero } = content
  const imgMain = hero.images?.main ?? '/images/section/img-hero-1.jpg'
  const imgSecondary = hero.images?.secondary ?? '/images/section/img-hero-2.jpg'
  const imgQuoteCard = hero.images?.quoteCard ?? '/images/section/bg-box-quote.jpg'
  const teamAvatars =
    hero.teamStat.avatars ??
    ['avt-team-3', 'avt-team-2', 'avt-team-1'].map((avt) => `/images/avatar/${avt}.jpg`)

  return (
    <section
      className={`section-hero${hero.images ? ' hero-mosaic-compact' : ''} tw:max-xl:!flex-col tw:max-xl:!gap-8 tw:max-xl:!px-4 tw:max-md:!pt-28 tw:max-md:!pb-14`}
    >
      <div className="img-sharp sharp-1">
        <div className="blob-wrapper">
          <div className="blob" />
        </div>
      </div>
      <div className="img-sharp sharp-2">
        <div className="blob-wrapper">
          <div className="blob" />
        </div>
      </div>

      <div className="hero-left tw:max-xl:!w-full">
        <div className="hero-content tw:max-xl:!mb-8">
          <div className="sub-title h6 letter-space--2 fw-5 tw:max-md:!mt-4 tw:max-md:!mb-3">
            {hero.eyebrow} <span className="color-dt-light">{hero.eyebrowAccent}</span>
          </div>
          <h1 className="title letter-space--3 fw-6 tw:max-xl:!text-[clamp(2rem,6vw,3.25rem)] tw:max-xl:!leading-[1.05] tw:max-md:!text-[2rem] tw:max-md:!mb-5">
            {hero.title.split('\n').map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <div className="desc h5 lh-35 ff-2 fw-5 tw:max-md:!text-base tw:max-md:!leading-relaxed">
            {hero.description.split('\n').map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </div>
          <div className="tw:max-md:w-full">
            <SeonexBtn href={hero.cta.href} variant="lime" big>
              {hero.cta.label}
            </SeonexBtn>
          </div>
        </div>

        <div className="stats tw:max-md:!flex-col tw:max-md:!items-center tw:max-md:!text-center tw:max-md:!gap-6 tw:max-md:!max-w-full tw:max-md:!mx-auto">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="counter-item stat tw:max-md:!flex tw:max-md:!flex-col tw:max-md:!items-center">
              <div className="counter">
                <div className="number-counter flex fs-65 tw:max-md:!justify-center">
                  <span className="number color-dt-blue h1 fw-6">{stat.value}</span>
                  {stat.suffix && <span className="h1">{stat.suffix}</span>}
                </div>
              </div>
              <div className="h5 ff-2 fw-6 lh-35">
                {stat.label.split('\n').map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right tw:max-xl:!w-full tw:max-xl:!mt-4">
        <div className="image-hero img-1 mb-10 tw:max-md:!mb-6">
          <img
            loading="lazy"
            width={916}
            height={470}
            src={imgMain}
            alt="Equipo colaborando en una reunión de trabajo"
          />
        </div>
        <div className="bottom-hero-right d-flex g-10 tw:max-lg:!flex-col tw:max-lg:!gap-4">
          <div className="d-flex flex-column justify-content-between tw:max-lg:!w-full">
            <div className="box-team-card mb-10 flex-1">
              <div className="img-bg">
                <img src="/images/widget/img-bg-hero-h1.png" alt="" />
              </div>
              <div className="team-content">
                <div className="counter-item">
                  <div className="counter">
                    <div className="number-counter flex fs-65 fw-6">
                      <span className="number color-dt-blue h1">
                        {hero.teamStat.value.replace('+', '')}
                      </span>
                      {hero.teamStat.value.includes('+') && <span className="h1">+</span>}
                    </div>
                  </div>
                </div>
                <div className="h5 letter-space--3 fw-5 ff-2">{hero.teamStat.label}</div>
              </div>
              <div className="list-avatars">
                {teamAvatars.map((src, i) => (
                  <span key={src} className="img-avt">
                    <img
                      loading="eager"
                      width={100}
                      height={100}
                      src={src}
                      alt={`Líder formado ${i + 1}`}
                    />
                  </span>
                ))}
              </div>
            </div>

            <div className={`box-quote flex-1${hero.images ? ' box-quote-split' : ''}`}>
              <div className="image">
                <img src={imgQuoteCard} alt="Premio Excelencia RRHH Canarias" />
              </div>
              <div className="box-content">
                <div className="title h5 fw-5 letter-space--3">
                  {hero.cardQuote.title.split('\n').map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </div>
                <div className="user-box">
                  <span className="fw-5 letter-space--3">{hero.cardQuote.name}</span>
                  <span className="text-caption letter-space--3 fw-5">{hero.cardQuote.role}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="image-hero img-2 tw:max-lg:!w-full">
            <img
              loading="lazy"
              width={453}
              height={470}
              src={imgSecondary}
              alt="Portada del libro El Sistema Ganador"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
