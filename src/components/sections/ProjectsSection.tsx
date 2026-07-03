import { SeonexBtn } from '../ui/SeonexBtn'
import type { LandingContent } from '../../types/content'

const projects = [
  { img: '/images/project/project-item-1.jpg', tag: 'Implementación 2026', title: 'Rediseño de acuerdos de decisión' },
  { img: '/images/project/project-item-2.jpg', tag: 'Implementación 2026', title: 'Rutina de sincronización sin fricción' },
  { img: '/images/project/project-item-3.jpg', tag: 'Diagnóstico 2026', title: 'Índice de dependencia por área' },
  { img: '/images/project/project-item-4.jpg', tag: 'Implementación 2026', title: 'Distribución de criterio operativo' },
  { img: '/images/project/project-item-5.jpg', tag: 'Formación 2026', title: 'De líder bombero a arquitecto' },
  { img: '/images/project/project-item-6.jpg', tag: 'Implementación 2026', title: 'Autonomía para equipos remotos' },
]

export function ProjectsSection({ content }: { content: LandingContent }) {
  const isLibro = content.variant === 'libro'

  return (
    <section className="section-projects flat-spacing-7 bg-color-dt-gray h-dm">
      <div className="container w-1750">
        <div className="heading-section d-flex align-items-center justify-content-between flat-spacing-2 flex-wrap g-30">
          <div className="letf">
            <div className="sub-title h6 mb-12 letter-space--2 fw-5">
              {isLibro ? 'Casos reales — ' : 'Resultados — '}
              <span>{isLibro ? 'El método aplicado.' : 'Tras el diagnóstico.'}</span>
            </div>
            <h2 className="title letter-space--3 fw-6">
              {isLibro ? (
                <>
                  Empresas que rediseñaron
                  <br />
                  cómo trabaja su equipo
                </>
              ) : (
                <>
                  Lo que descubren los
                  <br />
                  directores al medir
                </>
              )}
            </h2>
          </div>
          <div className="right">
            <p className="desc ff-2 text-body-1 mb-30 color-paragraph lh-32">
              {isLibro
                ? 'Implementaciones del Sistema Ganador con impacto medible en autonomía y foco del líder.'
                : 'Brechas concretas en las 5 dimensiones que el test revela en minutos.'}
            </p>
            <SeonexBtn href={isLibro ? '/libro#cta' : '/directores#test'} variant="border" big>
              {isLibro ? 'Conseguir el libro' : 'Hacer el test'}
            </SeonexBtn>
          </div>
        </div>
      </div>

      <div className="list-project-item">
        {projects.map((project) => (
          <div key={project.title} className="project-item hover-img">
            <span className="image">
              <img loading="lazy" width={580} height={580} src={project.img} alt="" />
            </span>
            <div className="content">
              <div className="meta-project">
                <span className="ff-2 fw-5">{project.tag.split(' ')[0]}</span>
                <span className="line-dot" />
                <span className="ff-2 fw-5">{project.tag.split(' ')[1]}</span>
              </div>
              <span className="name-project h5 fw-6 letter-space--3">{project.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
