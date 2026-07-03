import type { LandingContent } from '../../types/content'

export function AboutSection({ content }: { content: LandingContent }) {
  const { about } = content
  const videoPreview = about.videoPreview ?? '/images/section/img-video.jpg'

  return (
    <section className="section-video flat-spacing-3 tw:max-xl:!px-4" data-reveal="section">
      <div className="container">
        <div className="heading-section mb-70 text-center tw:max-md:!mb-10">
          <div className="sub-title h6 mb-10 letter-space--2 fw-5">
            {about.eyebrow} <span>{about.eyebrowAccent}</span>
          </div>
          <h2 className="title letter-space--3 fw-6 mb-30 about-title-wide tw:max-md:!text-[2rem] tw:max-md:!leading-[1.1]">
            {about.title.split('\n').map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
          <p className="desc ff-2 text-body-1 mb-30 lh-32 fw-5 color-paragraph">
            {about.description.split('\n').map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        </div>

        <div className="row rg-30">
          <div className="col-lg-8 tw:max-lg:!w-full">
            <div className="wg-video">
              <div className="image">
                <img
                  loading="lazy"
                  width={850}
                  height={470}
                  src={videoPreview}
                  alt="Líder leyendo El Sistema Ganador"
                />
              </div>
              <a href="#cta" className="btn-play">
                <div className="icon">
                  <div className="wave" />
                  <div className="wave" />
                  <div className="wave" />
                  <i className="icon-play icon-color-red" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 tw:max-lg:!w-full">
            <div className="testimonial-card tw:max-md:!p-6">
              <div className="img-sharp">
                <div className="blob-wrapper">
                  <div className="blob" />
                </div>
              </div>
              <p className="h5 text letter-space--3 fw-6 mb-50 lh-32">"{about.testimonial.quote}"</p>
              <div className="d-flex position-relative mb-50">
                {about.testimonial.avatar && (
                  <span className="img-avt">
                    <img
                      loading="lazy"
                      width={80}
                      height={80}
                      src={about.testimonial.avatar}
                      alt={about.testimonial.name}
                    />
                  </span>
                )}
                <div className="icon">
                  <i className="icon-quote" />
                </div>
              </div>
              <div className="testimonial-user">
                <span className="h5 name fw-6 letter-space--3">{about.testimonial.name}</span>
                <div className="position ff-2 fw-6">{about.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
