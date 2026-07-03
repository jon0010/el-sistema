export type LandingVariant = 'libro' | 'directores'

export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  value: string
  suffix?: string
  label: string
}

export interface BenefitItem {
  title: string
  description: string
  bullets: string[]
  image?: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar?: string
}

export interface FeatureItem {
  title: string
  description: string
  image?: string
}

export interface BlogPost {
  image: string
  author: string
  category: string
  date: string
  title: string
  href?: string
}

export interface LandingContent {
  variant: LandingVariant
  meta: {
    title: string
    description: string
  }
  nav: {
    cta: { label: string; href: string }
  }
  hero: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    description: string
    cta: { label: string; href: string }
    stats: StatItem[]
    cardQuote: { title: string; name: string; role: string }
    teamStat: {
      value: string
      label: string
      /** Rostros de líderes / profesionales formados (prueba social) */
      avatars?: string[]
    }
    images?: {
      main: string
      secondary: string
      quoteCard: string
    }
  }
  strategy: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    description: string
    cta: { label: string; href: string }
    badge?: string
    image?: string
    pains?: string[]
    card: {
      title: string
      description: string
      benefits: string[]
      footer?: string
    }
    infoCard?: {
      eyebrow: string
      title: string
      items: Array<{ icon: string; title: string; text: string }>
    }
    growth: {
      value: string
      suffix?: string
      label: string
      description: string
      cta: { label: string; href: string }
      highlights?: Array<{ value: string; label: string }>
    }
  }
  about: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    description: string
    videoPreview?: string
    testimonial: Testimonial
  }
  pillars: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    items: BenefitItem[]
    sideImage?: string
    sideStat: { value: string; quote: string }
  }
  marquee: string[]
  team?: {
    eyebrow?: string
    eyebrowAccent?: string
    title?: string
    description?: string
    cta?: { label: string; href: string }
    members: Array<{ name: string; role: string; img: string }>
  }
  process: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    description: string
    years: string
    counter?: { value: string; suffix?: string; label: string }
    steps: ProcessStep[]
    carousel?: string[]
  }
  features: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    items: FeatureItem[]
  }
  testimonials: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    items: Testimonial[]
    rating: string
    reviews: string
    clients: string
  }
  blog: {
    eyebrow: string
    eyebrowAccent: string
    title: string
    description: string
    cta: { label: string; href: string }
    posts: BlogPost[]
  }
  cta: {
    title: string
    description: string
    primary: { label: string; href: string }
    secondary?: { label: string; href: string }
  }
  footer?: {
    titleImage?: string
  }
  clients?: {
    eyebrow?: string
    eyebrowAccent?: string
    title?: string
    logos: Array<{ src: string; alt: string }>
  }
}
