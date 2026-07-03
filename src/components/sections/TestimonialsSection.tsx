import { Br } from '../ui/SeonexAccordion'
import type { LandingContent } from '../../types/content'

const defaultAvatars = [
  '/images/avatar/avt-tes-1.jpg',
  '/images/avatar/avt-tes-2.jpg',
  '/images/avatar/avt-tes-3.jpg',
  '/images/avatar/avt-tes-4.jpg',
]

function TesItem({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string
  name: string
  role: string
  avatar: string
}) {
  return (
    <div className="tes-item mb-70 tw:max-md:!mb-10">
      <div className="top">
        <div className="rating">
          <span className="text-body-1 fw-6 letter-space--3">Rating</span>
          {Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className="icon-star" />
          ))}
        </div>
        <div className="line" />
        <div className="text fw-5 text-body-2 letter-space--3 lh-28">"{quote}"</div>
      </div>
      <div className="user-tes">
        <span className="img-avt">
          <img loading="lazy" width={66} height={66} src={avatar} alt={name} />
        </span>
        <span className="name text-body-1 fw-6 letter-space--3">{name}</span>
        <p className="position ff-2">{role}</p>
      </div>
    </div>
  )
}

export function TestimonialsSection({ content }: { content: LandingContent }) {
  const { testimonials, team } = content
  const items = testimonials.items
  const left = items.slice(0, 2)
  const right = items.slice(2, 4)

  const teamAvatarByName = new Map((team?.members ?? []).map((member) => [member.name, member.img]))

  const resolveAvatar = (item: (typeof items)[number], fallbackIndex: number) =>
    teamAvatarByName.get(item.name) ?? item.avatar ?? defaultAvatars[fallbackIndex] ?? defaultAvatars[0]

  return (
    <section id="testimonios" className="section-testimonials flat-spacing-1 h-dm tw:max-xl:!px-4" data-reveal="section">
      <div className="container">
        <div className="heading-section flat-spacing-2 text-center tw:max-md:!mb-8">
          <div className="sub-title h6 mb-12 letter-space--2 fw-5">
            {testimonials.eyebrow} <span>{testimonials.eyebrowAccent}</span>
          </div>
          <h2 className="title letter-space--3 fw-6">
            <Br text={testimonials.title} />
          </h2>
        </div>

        <div className="row rg-70 tw:max-lg:!gap-10">
          <div className="col-lg-4 tw:max-lg:!w-full">
            {left.map((item, i) => (
              <TesItem
                key={item.name}
                quote={item.quote}
                name={item.name}
                role={item.role}
                avatar={resolveAvatar(item, i)}
              />
            ))}
          </div>
          <div className="col-lg-4 tw:max-lg:!w-full">
            <div className="box-quote-2 tw:max-md:!my-4">
              <div className="top text-center">
                <p className="fs-55 lh-70 fw-6">{testimonials.rating}</p>
                <p className="h5 fw-6 ff-2">({testimonials.reviews})</p>
              </div>
              <div className="line" />
              <div className="bottom text-center">
                <p className="fs-55 lh-70 fw-6">{testimonials.clients.split(' ')[0]}</p>
                <p className="h5 fw-6 ff-2">confían en el método</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 tw:max-lg:!w-full">
            {right.map((item, i) => (
              <TesItem
                key={item.name}
                quote={item.quote}
                name={item.name}
                role={item.role}
                avatar={resolveAvatar(item, i + 2)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
