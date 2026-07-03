import { SeonexBtn } from '../ui/SeonexBtn'
import type { LandingContent } from '../../types/content'

export function Footer({ content }: { content: LandingContent }) {
  const titleImage = content.footer?.titleImage ?? '/images/section/img-footer-title.jpg'

  return (
    <footer className="footer footer-sg">
      <div className="img-sharp">
        <div className="blob-wrapper">
          <div className="blob" />
        </div>
      </div>
      <div className="footer-inner">
        <div className="container w-1650">
          <div className="top-footer tw:max-lg:!flex-col tw:max-lg:!items-center tw:max-lg:!text-center tw:max-lg:!gap-6">
            <p className="big-text tw:max-md:!text-[clamp(1.75rem,7vw,2.75rem)] tw:max-md:!leading-[1.15]">
              ¿Listo para dejar de ser
              <br />
              <span className="img d-none d-sm-inline-block footer-title-pill tw:max-sm:!inline-block tw:max-sm:!w-[min(100%,280px)]">
                <img loading="lazy" width={350} height={130} src={titleImage} alt="" />
              </span>
              el cuello de botella?
            </p>
            <div className="tw:max-lg:!flex tw:max-lg:!justify-center">
              <SeonexBtn href="#cta" variant="lime" big>
                Conseguir el libro
              </SeonexBtn>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-inner">
        <div className="container w-1750">
          <div className="midder-footer tw:max-lg:!flex-col tw:max-lg:!items-center tw:max-lg:!gap-8">
            <a href="/" className="logo-footer">
              <img src="/images/logo/logo-sg.svg" alt="El Sistema Ganador" />
            </a>

            <div className="footer-content footer-content-1 tw:max-lg:!w-full tw:max-lg:!self-stretch tw:max-lg:!text-left">
              <div className="title-mobile h5 letter-space--3 fw-5">El método</div>
              <ul className="content">
                <li className="support-item-footer"><span className="ff-2">Acuerdos de decisión</span></li>
                <li className="support-item-footer"><span className="ff-2">Autonomía operativa</span></li>
                <li className="support-item-footer"><span className="ff-2">Rutina de sincronización</span></li>
              </ul>
            </div>

            <div className="footer-content footer-content-1 tw:max-lg:!w-full tw:max-lg:!self-stretch tw:max-lg:!text-left">
              <div className="title-mobile h5 letter-space--3 fw-5">Contacto</div>
              <ul className="content">
                <li className="support-item-footer"><span className="ff-2">info@elsistemaganador.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-inner">
        <div className="container w-1750">
          <div className="bottom-footer d-flex justify-content-between flex-wrap g-20 tw:max-md:!flex-col tw:max-md:!items-center tw:max-md:!text-center tw:max-md:!gap-4">
            <p className="ff-2">© 2026 El Sistema Ganador. Todos los derechos reservados.</p>
            <ul className="d-flex g-30 tw:max-md:!justify-center">
              <li><a href="#" className="ff-2">Privacidad</a></li>
              <li><a href="#" className="ff-2">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
