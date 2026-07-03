import { Marquee } from '../ui/Marquee'
import { AboutSection } from './AboutSection'
import { BlogSection } from './BlogSection'
import { ClientsSection } from './ClientsSection'
import { CtaSection, LinePage } from './CtaSection'
import { FeaturesSection } from './FeaturesSection'
import { HeroSection } from './HeroSection'
import { ProcessSection } from './ProcessSection'
import { ProjectsSection } from './ProjectsSection'
import { ServicesSection } from './ServicesSection'
import { StrategySection } from './StrategySection'
import { TeamSection } from './TeamSection'
import { TestimonialsSection } from './TestimonialsSection'
import type { LandingContent } from '../../types/content'

export function LandingPage({ content }: { content: LandingContent }) {
  return (
    <>
      <HeroSection content={content} />
      <StrategySection content={content} />
      <AboutSection content={content} />
      <ServicesSection content={content} />
      <Marquee items={content.marquee} />
      <ProcessSection content={content} />
      <TeamSection content={content} />
      <FeaturesSection content={content} />
      {content.variant !== 'libro' && <ProjectsSection content={content} />}
      <TestimonialsSection content={content} />
      <BlogSection content={content} />
      <LinePage />
      <CtaSection content={content} />
      <ClientsSection content={content} />
    </>
  )
}
