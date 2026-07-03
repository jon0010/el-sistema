import { SeonexBtn } from '../ui/SeonexBtn'
import type { LandingContent } from '../../types/content'

export function BlogSection({ content }: { content: LandingContent }) {
  const { blog } = content

  return (
    <section className="section-blog flat-spacing-3 tw:max-xl:!px-4">
      <div className="container">
        <div className="row justify-content-between rg-50 tw:max-lg:!gap-10">
          <div className="col-lg-5 tw:max-lg:!w-full">
            <div className="heading-section tw:max-md:!mb-8">
              <div className="sub-title h6 mb-12 letter-space--2 fw-5">
                {blog.eyebrow} <span>{blog.eyebrowAccent}</span>
              </div>
              <h2 className="title letter-space--3 fw-6 mb-40 tw:max-md:!text-[2rem] tw:max-md:!mb-6 tw:max-md:!leading-[1.1]">
                {blog.title.split('\n').map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h2>
              <p className="desc ff-2 text-body-1 mb-30 lh-32 color-paragraph">{blog.description}</p>
              <SeonexBtn href={blog.cta.href} variant="blue" big>
                {blog.cta.label}
              </SeonexBtn>
            </div>
          </div>

          {blog.posts.map((post, index) => (
            <div key={post.title} className="col-lg-6 tw:max-lg:!w-full">
              <div className={`blog-card style-2 hover-img tw:max-md:!mb-6${index === 1 ? '' : ''}`}>
                <a href={post.href ?? '#'} className="image image-blog">
                  <img loading="lazy" width={630} height={430} src={post.image} alt="" />
                </a>
                <div className="card-content">
                  <div className="meta d-flex align-items-center flex-wrap g-30 rg-15">
                    <span className="user-blog d-flex align-items-center g-15">
                      <span className="img">
                        <img loading="lazy" width={40} height={40} src="/images/avatar/avt-blog.jpg" alt="" />
                      </span>
                      <span className="color-paragraph">
                        por <span className="color-dt-black">{post.author}</span>
                      </span>
                    </span>
                    <div className="d-flex align-items-center g-10">
                      <span className="position meta-item ff-2 fw-6">{post.category}</span>
                      <span className="date meta-item ff-2 fw-5">{post.date}</span>
                    </div>
                  </div>
                  <a href={post.href ?? '#'} className="h3 name-card fw-5 letter-space--3 tw:max-md:!text-xl">
                    {post.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
