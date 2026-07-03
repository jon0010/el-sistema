import type { LandingContent } from '../types/content'

export const directoresContent: LandingContent = {
  variant: 'directores',
  meta: {
    title: 'El Sistema Ganador — Para directores',
    description:
      'Descubre el nivel de dependencia de tu equipo. Test gratuito de índice de dependencia en menos de 5 minutos.',
  },
  nav: {
    cta: { label: 'Hacer el test', href: '#test' },
  },
  hero: {
    eyebrow: '20 afirmaciones honestas.',
    eyebrowAccent: '5 dimensiones de la dependencia.',
    title: '¿Tu sistema\ndepende de ti\no funciona sin ti?',
    description:
      'Descubre en menos de 5 minutos si tu equipo depende de tu presencia. Gratis, sin registro y con resultado inmediato.',
    cta: { label: 'Hacer el test ahora', href: '#test' },
    stats: [
      { value: '5', suffix: ' min', label: 'Para completarlo,\nsin registro' },
      { value: '100', suffix: '%', label: 'Gratis con\nresultado inmediato' },
    ],
    cardQuote: {
      title: 'Diagnóstico\níndice de\ndependencia',
      name: 'Resultado',
      role: 'Inmediato y gratuito',
    },
    teamStat: { value: '20', label: 'Afirmaciones sobre tu día a día' },
  },
  strategy: {
    eyebrow: 'El síntoma.',
    eyebrowAccent: '¿Te reconoces?',
    title: 'Líder apagafuegos.\nEquipo dependiente.\nSin tiempo para lo importante.',
    description:
      'No es un problema de personas ni de actitud. Es cómo está diseñado el trabajo. Las urgencias llenan tu agenda y el trabajo estratégico siempre queda para después.',
    cta: { label: 'Ver las dimensiones', href: '#dimensiones' },
    card: {
      title: 'El cambio clave: de resolver tú, a diseñar el sistema.',
      description:
        'Pasa de ser el pegamento invisible a ser el arquitecto que multiplica el impacto de tu equipo.',
      benefits: ['Menos interrupciones', 'Criterio distribuido'],
    },
    growth: {
      value: '80',
      suffix: '',
      label: 'Puntos máximos de autonomía',
      description:
        'El test mide tu puntuación de 20 a 80 y te sitúa en uno de tres niveles de dependencia organizativa.',
      cta: { label: 'Empezar el test', href: '#test' },
    },
  },
  about: {
    eyebrow: 'El cambio.',
    eyebrowAccent: 'Líder arquitecto.',
    title: 'De líder bombero\na diseñador\ndel sistema',
    description:
      'El Sistema Ganador ayuda a directores y mandos intermedios a construir equipos que funcionan sin depender de su presencia constante.',
    testimonial: {
      quote:
        'Un equipo fiable que entiende el crecimiento organizativo. Transparente, basado en datos y altamente efectivo.',
      name: 'Benjamin Harris',
      role: 'CEO & Founder',
      avatar: '/images/avatar/avt-testimonial.jpg',
    },
  },
  pillars: {
    eyebrow: 'El diagnóstico.',
    eyebrowAccent: '5 dimensiones.',
    title: 'Las 5 dimensiones de la dependencia',
    items: [
      {
        title: 'Tiempo y Agenda',
        description:
          'Quién manda en tu calendario: tus prioridades o las urgencias ajenas.',
        bullets: ['Agenda reactiva', 'Urgencias ajenas', 'Sin tiempo estratégico', 'Interrupciones constantes'],
      },
      {
        title: 'Decisiones y Validaciones',
        description:
          'Cuánto criterio vive en ti y cuánto está distribuido en el equipo.',
        bullets: ['Validaciones constantes', 'Criterio centralizado', 'Equipo que espera', 'Decisiones que regresan'],
      },
      {
        title: 'Reuniones y Cierres',
        description:
          'Si las reuniones deciden y cierran sin que tengas que imponerlo.',
        bullets: ['Reuniones sin cierre', 'Imposición necesaria', 'Temas que vuelven', 'Falta de acuerdos'],
      },
      {
        title: 'Flujo de Información',
        description:
          'Si el contexto circula por el canal correcto, sin interrumpirte.',
        bullets: ['Información fragmentada', 'Interrupciones', 'Contexto incompleto', 'Canales sin definir'],
      },
      {
        title: 'Autonomía Operativa',
        description:
          'Si el trabajo sigue avanzando con criterio cuando tú no estás.',
        bullets: ['Todo se frena sin ti', 'Falta de iniciativa', 'Espera de instrucciones', 'Dependencia operativa'],
      },
    ],
    sideStat: {
      value: '46',
      quote: 'El índice de dependencia te muestra exactamente dónde se concentra el problema en tu organización.',
    },
  },
  marquee: [
    'Tiempo y Agenda',
    'Decisiones y Validaciones',
    'Reuniones y Cierres',
    'Flujo de Información',
    'Autonomía Operativa',
    'Índice de Dependencia',
  ],
  process: {
    eyebrow: 'Cómo funciona.',
    eyebrowAccent: 'Paso a paso.',
    title: 'El cuestionario en\nmenos de 5 minutos',
    description:
      'Una pregunta por pantalla, sin prisa. Resultado completo al instante.',
    years: '3',
    steps: [
      {
        number: '01',
        title: 'Responde 20 afirmaciones',
        description:
          'Valoras del 1 al 4 cuánto se parece cada frase a tu día a día real.',
      },
      {
        number: '02',
        title: 'Descubre tu perfil y brechas',
        description:
          'Te situamos en uno de tres niveles y ves tu media en cada dimensión.',
      },
      {
        number: '03',
        title: 'Recibe tu diagnóstico',
        description:
          'Resultado completo en pantalla: perfil, gráfico por dimensiones y la pregunta que importa.',
      },
    ],
  },
  features: {
    eyebrow: 'Tres niveles.',
    eyebrowAccent: '¿En cuál estás?',
    title: 'Tu puntuación te sitúa\nen uno de estos niveles',
    items: [
      {
        title: '20–39: El Sistema depende de ti',
        description:
          'El equipo funciona porque tú estás. Cuando faltas, todo se frena.',
      },
      {
        title: '40–59: El Sistema funciona contigo',
        description:
          'Hay capacidad y coordinación, pero todavía eres el pegamento.',
      },
      {
        title: '60–80: El Sistema funciona sin ti',
        description:
          'El criterio está distribuido y el trabajo avanza sin tu presencia.',
      },
      {
        title: 'Resultado inmediato y accionable',
        description:
          'Sin registro previo. Ves tu perfil, tu gráfico y tus dos mayores brechas al instante.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Directores que ya lo hicieron.',
    eyebrowAccent: 'Resultados reales.',
    title: 'El test revela lo que\nlas reuniones no dicen',
    items: [
      {
        quote:
          'Pensaba que mi equipo era autónomo hasta que vi el resultado. Las brechas en decisiones y reuniones eran evidentes.',
        name: 'Alexander Mitchell',
        role: 'Head of IT Operations',
        avatar: '/images/team/img-team-1.jpg',
      },
      {
        quote:
          'En 5 minutos entendí por qué trabajo 12 horas. El gráfico por dimensiones fue un antes y un después.',
        name: 'Christopher Langford',
        role: 'Project Manager',
        avatar: '/images/team/img-team-2.jpg',
      },
      {
        quote:
          'Lo hice con mi equipo directo y abrimos conversaciones que llevábamos años evitando. Gratis y sin fricción.',
        name: 'Nathaniel Blackwood',
        role: 'Cybersecurity Lead',
        avatar: '/images/team/img-team-3.jpg',
      },
      {
        quote:
          'El diagnóstico me dio el argumento que necesitaba para convencer a dirección de rediseñar cómo trabajamos.',
        name: 'Theodore Carrington',
        role: 'Lead UX/UI Designer',
        avatar: '/images/team/img-team-4.jpg',
      },
    ],
    rating: '4.9/5',
    reviews: '300+ directores',
    clients: '80+ empresas',
  },
  blog: {
    eyebrow: 'Lee sobre —',
    eyebrowAccent: 'Dependencia organizacional.',
    title: 'Insights para directores\nque quieren medir antes de actuar.',
    description:
      'Artículos sobre el índice de dependencia, las 5 dimensiones y cómo convencer a tu organización con datos.',
    cta: { label: 'Ver más recursos', href: '#test' },
    posts: [
      {
        image: '/images/blog/img-blog-card-8.jpg',
        author: 'Equipo SG',
        category: 'Diagnóstico',
        date: '20 Ene 2026',
        title: 'Índice de dependencia: qué mide el test de 20 afirmaciones y cómo interpretarlo.',
      },
      {
        image: '/images/blog/img-blog-card-9.jpg',
        author: 'Equipo SG',
        category: 'Liderazgo',
        date: '15 Ene 2026',
        title: 'Las 5 dimensiones donde se concentra la dependencia del líder en equipos medianos.',
      },
      {
        image: '/images/blog/img-blog-card-10.jpg',
        author: 'Equipo SG',
        category: 'Estrategia',
        date: '10 Ene 2026',
        title: 'Cómo presentar el diagnóstico a dirección: de intuición a evidencia en una reunión.',
      },
    ],
  },
  cta: {
    title: '¿En qué nivel está tu equipo ahora mismo?',
    description:
      'Responde 20 afirmaciones. En menos de 5 minutos descubres si tu sistema depende de ti, funciona contigo, o ya funciona sin ti.',
    primary: { label: 'Hacer el cuestionario ahora', href: '#test' },
    secondary: { label: 'Conocer el libro', href: '/libro' },
  },
}
