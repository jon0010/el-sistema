import { SeonexBtn } from '../ui/SeonexBtn'
import { useDragScroll } from '../../hooks/useDragScroll'
import type { LandingContent } from '../../types/content'

const defaultTeamMembers = [
  { name: 'Alexander Mitchell', role: 'Head of IT Operations', img: '/images/team/img-team-1.jpg' },
  { name: 'Christopher Langford', role: 'Project Manager', img: '/images/team/img-team-2.jpg' },
  { name: 'Nathaniel Blackwood', role: 'Cybersecurity Lead', img: '/images/team/img-team-3.jpg' },
  { name: 'Theodore Carrington', role: 'Lead UX/UI Designer', img: '/images/team/img-team-4.jpg' },
  { name: 'Maximilian Harrington', role: 'Software Development', img: '/images/team/img-team-5.jpg' },
]

export function TeamSection({ content }: { content: LandingContent }) {
  const isLibro = content.variant === 'libro'
  const carouselRef = useDragScroll<HTMLDivElement>({ centerWhenFits: true })
  const teamMembers = content.team?.members ?? defaultTeamMembers

  return (
    <section className="section-team flat-spacing-3 h-dm tw:max-xl:!px-4" data-reveal="section">
      <div className="container w-1750">
        <div className="heading-section d-flex align-items-center justify-content-between flat-spacing-2 flex-wrap g-30 tw:max-lg:!flex-col tw:max-lg:!items-start tw:max-lg:!gap-6">
          <div className="letf tw:max-lg:!w-full">
            <div className="sub-title h6 mb-30 letter-space--2 fw-5 tw:max-md:!mb-4">
              {content.team?.eyebrow ?? (isLibro ? 'El método en acción — ' : 'Líderes que lo aplican — ')}
              <span>
                {content.team?.eyebrowAccent ?? (isLibro ? '100+ empresas.' : 'Resultados reales.')}
              </span>
            </div>
            <h2 className="title letter-space--3 fw-6">
              {content.team?.title ? (
                content.team.title.split('\n').map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))
              ) : isLibro ? (
                <>
                  Juntos, colaboramos,
                  <br />
                  innovamos y escalamos equipos
                </>
              ) : (
                <>
                  Directores que ya
                  <br />
                  midieron su dependencia
                </>
              )}
            </h2>
          </div>
          <div className="right tw:max-lg:!w-full">
            <p className="desc ff-2 text-body-1 mb-30 lh-32 tw:max-md:!mb-5">
              {content.team?.description ??
                (isLibro
                  ? 'Mandos intermedios que aplicaron el Sistema Ganador y transformaron cómo trabaja su equipo.'
                  : 'Profesionales que descubrieron dónde se concentra la dependencia en su organización.')}
            </p>
            <SeonexBtn
              href={content.team?.cta?.href ?? (isLibro ? '/libro#cta' : '/directores#test')}
              variant="blue"
              big
            >
              {content.team?.cta?.label ?? (isLibro ? 'Conseguir el libro' : 'Hacer el test')}
            </SeonexBtn>
          </div>
        </div>
      </div>

      <div dir="ltr" className="sw-team swiper tf-swiper flat-spacing-3">
        <div ref={carouselRef} className="swiper-wrapper team-carousel-drag">
          {teamMembers.map((member) => (
            <div key={member.name} className="swiper-slide">
              <div className="team-card hover-img">
                <span className="image">
                  <img loading="lazy" width={270} height={270} src={member.img} alt={member.name} />
                </span>
                <div className="team-content">
                  <span className="name-team h5 fw-6 letter-space--3">{member.name}</span>
                  <p className="position ff-2">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
