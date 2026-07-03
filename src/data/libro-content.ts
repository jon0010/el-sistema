import type { LandingContent } from "../types/content";

export const libroContent: LandingContent = {
  variant: "libro",
  meta: {
    title: "El Sistema Ganador — El libro",
    description:
      "Manual práctico de arquitectura organizativa para mandos intermedios. Premiado en RRHH. Deja de ser el cuello de botella y construye equipos con autonomía real.",
  },
  nav: {
    cta: { label: "Conseguir el libro", href: "#cta" },
  },
  hero: {
    eyebrow: "El sistema ganador.",
    eyebrowAccent: "Premiado en RRHH Canarias 2025.",
    title: "Deja de ser el cuello de botella de tu organización",
    description:
      "El Sistema Ganador es el manual práctico con acuerdos, rutinas y herramientas listas para redistribuir criterio y recuperar tu tiempo estratégico.",
    cta: { label: "Conseguir el libro", href: "#cta" },
    stats: [
      { value: "98", suffix: "%", label: "Líderes que recomiendan\nel método" },
      { value: "4.9", suffix: "", label: "Valoración media\n(300+ reseñas)" },
    ],
    cardQuote: {
      title: "Arquitectura\norganizativa\npráctica",
      name: "Premio Excelencia",
      role: "RRHH Canarias 2025",
    },
    teamStat: {
      value: "100+",
      label: "Empresas formadas",
      avatars: [
        "/images/avatar/avt-team-3.jpg",
        "/images/avatar/avt-team-2.jpg",
        "/images/avatar/avt-team-1.jpg",
      ],
    },
    images: {
      main: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783034773/ChatGPT_Image_2_jul_2026_08_25_59_p.m._of9al7.png",
      secondary:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783035196/ChatGPT_Image_2_jul_2026_08_32_48_p.m._sblycj.png",
      quoteCard:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783037880/Captura_de_pantalla_2026-07-02_211743_tplg3j.png",
    },
  },
  strategy: {
    eyebrow: "El problema real.",
    eyebrowAccent: "No es tu actitud.",
    title:
      "Tu empresa no tiene un problema de personas. Tiene un problema de diseño.",
    description:
      "Las decisiones suben a ti, el equipo espera validación, las reuniones no cierran y tu agenda la mandan las urgencias ajenas. No es falta de talento ni de actitud: es el diseño del trabajo.\nEl libro El Sistema Ganador — premiado en RRHH — te da el marco para redistribuir criterio, acordar reglas claras y medir la autonomía real de tu equipo.",
    cta: { label: "Ver qué incluye el libro", href: "#dimensiones" },
    badge: "Premio Excelencia RRHH Canarias 2025",
    card: {
      title: "Lo que cambia cuando implementas el método del libro",
      description:
        "Más de 100 empresas ya usaron este marco para que sus equipos decidan con criterio compartido — sin multiplicar reuniones ni tu supervisión constante.",
      benefits: [
        "Decisiones que dejan de subir al líder",
        "Criterio explícito distribuido en el equipo",
        "Acuerdos de equipo claros y aplicables",
        "Autonomía medible en 5 dimensiones",
        "Reuniones que cierran compromisos, no solo informan",
        "Tiempo estratégico recuperado para el líder arquitecto",
      ],
      footer:
        "Incluye matriz de decisiones, guía de sincronización, marco de las 5 dimensiones e índice de dependencia para diagnosticar por dónde empezar.",
    },
    infoCard: {
      eyebrow: "Dentro del libro",
      title: "Las 4 fases del método",
      items: [
        {
          icon: "/images/icon/bullseye.svg",
          title: "Detectar",
          text: "Diagnostica el nivel de dependencia con el índice y las 5 dimensiones. Identifica tus brechas antes de cambiar nada.",
        },
        {
          icon: "/images/icon/statistics.svg",
          title: "Construir",
          text: "Acuerdo de equipo, rutina de sincronización y responsabilidades con dueño claro. Los cimientos del sistema.",
        },
        {
          icon: "/images/icon/rocket.svg",
          title: "Optimizar",
          text: "Gestión de reuniones, canales y agenda. Elimina fricción donde más te cuesta cada día.",
        },
        {
          icon: "/images/icon/Content.svg",
          title: "Sostener",
          text: "Resiliencia, confianza operativa y mantenimiento. El sistema debe aguantar presión y cambio.",
        },
      ],
    },
    growth: {
      value: "63",
      suffix: "%",
      label: "Menos bloqueos al líder, en promedio",
      description:
        "Quienes aplican el marco reportan menos interrupciones, reuniones más útiles y equipos con más iniciativa desde las primeras semanas.",
      highlights: [
        { value: "20-80", label: "Puntos del índice" },
        { value: "5", label: "Dimensiones medibles" },
        { value: "100+", label: "Empresas formadas" },
        { value: "4.9", label: "Valoración del libro" },
      ],
      cta: { label: "Conseguir el libro", href: "#cta" },
    },
  },
  about: {
    eyebrow: "No gestionar mejor.",
    eyebrowAccent: "Rediseñar el sistema.",
    title: "De líder apagafuegos a arquitecto del equipo",
    description:
      "El libro no te pide trabajar más ni motivar mejor. Te enseña a diseñar acuerdos, rutinas y flujos para que el trabajo avance con criterio cuando tú no estás.",
    videoPreview:
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783041344/ChatGPT_Image_2_jul_2026_10_15_29_p.m._msgj9x.png",
    testimonial: {
      quote:
        "Si mañana no estuvieras, ¿qué dejaría de funcionar? Este libro fue la primera vez que pude responderlo con honestidad — y con un plan.",
      name: "Director de Operaciones",
      role: "Empresa de servicios",
      avatar:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783041749/Captura_de_pantalla_2026-07-02_222157_jgwrlh.png",
    },
  },
  pillars: {
    eyebrow: "Los pilares del sistema.",
    eyebrowAccent: "Las 5 dimensiones.",
    title: "Componentes del Sistema Ganador",
    items: [
      {
        title: "Acuerdos de decisión",
        description:
          "Quién decide qué, con qué criterio y hasta dónde llega la autonomía. El equipo deja de escalar todo al líder.",
        bullets: [
          "Matriz de decisiones",
          "Criterios explícitos",
          "Límites de autonomía",
          "Escalado consciente",
        ],
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783043164/9d034b3d-c717-4e56-80aa-af240e268217_yorggo.png",
      },
      {
        title: "Rutina de sincronización",
        description:
          "Tres bloques de 10 minutos para alinear sin reuniones eternas. El equipo sabe hacia dónde va sin interrumpirte.",
        bullets: [
          "Contexto compartido",
          "Revisión con cierre",
          "Prioridad del día",
          "Foco protegido",
        ],
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783043327/7e9b2e48-403f-4a94-81a7-e890b83a01d5_gkeegh.png",
      },
      {
        title: "Flujo de información",
        description:
          "El contexto circula por el canal correcto. Menos interrupciones, menos correos y más claridad operativa.",
        bullets: [
          "Canales definidos",
          "Contexto accesible",
          "Menos interrupciones",
          "Información accionable",
        ],
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783043389/71c6675e-9651-4b32-bc24-7839011d3965_pu3idb.png",
      },
      {
        title: "Autonomía operativa",
        description:
          "El trabajo avanza con criterio cuando tú no estás. El equipo decide y actúa dentro del acuerdo, no a la espera de validación.",
        bullets: [
          "Criterio distribuido",
          "Iniciativa real",
          "Menos validaciones",
          "Progreso continuo",
        ],
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783043496/2633e47e-0d3a-4e32-a4a8-6506fb636bf4_nmgvps.png",
      },
      {
        title: "Gestión del tiempo",
        description:
          "Tu agenda la mandan tus prioridades, no las urgencias ajenas. Recuperas espacio para el trabajo que solo tú puedes hacer.",
        bullets: [
          "Agenda protegida",
          "Urgencias filtradas",
          "Tiempo estratégico",
          "Menos apagafuegos",
        ],
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783043614/0921cb92-2a9e-4c03-b703-a062d3c1fd79_k0sz5g.png",
      },
    ],
    sideImage:
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783043961/868331df-16e8-4083-9ed3-abbd356076d5_hstxmv.png",
    sideStat: {
      value: "83",
      quote:
        "Implementar el marco del libro cambió cómo trabajamos. Menos dependencia del líder, más claridad y resultados que se sostienen.",
    },
  },
  marquee: [
    "Índice de dependencia",
    "Acuerdos de decisión",
    "Rutina de sincronización",
    "Criterio distribuido",
    "Autonomía operativa",
    "Líder arquitecto",
  ],
  team: {
    eyebrow: "El método en acción —",
    eyebrowAccent: "100+ empresas.",
    title: "Líderes que dejaron\nde ser el cuello de botella",
    description:
      "Mandos intermedios que aplicaron el libro y transformaron cómo decide, se alinea y avanza su equipo — con menos fricción y más autonomía.",
    cta: { label: "Conseguir el libro", href: "#cta" },
    members: [
      {
        name: "Laura Méndez",
        role: "Directora de Operaciones",
        img: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783045713/Captura_de_pantalla_2026-07-02_232734_rxokl7.png",
      },
      {
        name: "Ana Torres",
        role: "Head of Product",
        img: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783045713/Captura_de_pantalla_2026-07-02_232756_l75lud.png",
      },
      {
        name: "Carlos Ruiz",
        role: "Gerente de Área",
        img: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783045713/Captura_de_pantalla_2026-07-02_232727_js59n9.png",
      },
      {
        name: "Miguel Soto",
        role: "Director Comercial",
        img: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783045716/Captura_de_pantalla_2026-07-02_232707_bcillk.png",
      },
      {
        name: "Juan Vargas",
        role: "Director de RRHH",
        img: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783045717/Captura_de_pantalla_2026-07-02_232719_n7coh0.png",
      },
    ],
  },
  process: {
    eyebrow: "El método en acción.",
    eyebrowAccent: "Paso a paso.",
    title: "Cómo transformar tu equipo\ncon el Sistema Ganador",
    description:
      "El libro guía un recorrido claro: diagnosticar la dependencia, construir los acuerdos base y escalar la autonomía con métricas que importan.",
    years: "4",
    counter: { value: "4", suffix: "", label: "Fases del\nmétodo" },
    steps: [
      {
        number: "01",
        title: "Detectar",
        description:
          "Usa el índice de dependencia y las 5 dimensiones para ver dónde se concentra el problema — en minutos, no en meses de intuición.",
      },
      {
        number: "02",
        title: "Construir",
        description:
          "Aplica acuerdos de equipo, rutina de sincronización y responsabilidades con dueño. Herramientas del libro, adaptadas a tu contexto.",
      },
      {
        number: "03",
        title: "Escalar",
        description:
          "Optimiza reuniones, canales y agenda. Mide si el equipo gana autonomía o regresa a depender de ti.",
      },
    ],
    carousel: [
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783045091/Dise%C3%B1o-de-equipos-1800x900_k81loh.jpg",
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783045044/high-angle-people-reading-together_joxyru.jpg",
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783044986/beneficios-trabajo-en-equipo1_xhpgyw.jpg",
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783044701/ChatGPT_Image_2_jul_2026_11_11_00_p.m._uj3pyl.png",
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783041344/ChatGPT_Image_2_jul_2026_10_15_29_p.m._msgj9x.png",
    ],
  },
  features: {
    eyebrow: "Por qué el libro.",
    eyebrowAccent: "Lo que obtienes.",
    title: "Un marco práctico,\nno teoría motivacional.",
    items: [
      {
        title: "Lenguaje claro para un problema invisible",
        description:
          "Pone nombre a la dependencia organizativa — el pegamento invisible que muchos líderes sienten pero no saben explicar a su equipo ni a dirección.",
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783046952/a2b2edba-921d-4412-b5f5-9b032dfcef7e_e7ejge.png",
      },
      {
        title: "Herramientas listas para implementar",
        description:
          "Matriz de decisiones, acuerdos de equipo y rutina de sincronización. No es lectura pasiva: puedes aplicarlo con tu equipo desde la primera semana.",
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783047122/ab13dbe4-7c31-4453-84e4-4a4a0e3c63d4_cbc5sb.png",
      },
      {
        title: "Enfoque en mandos intermedios",
        description:
          "Escrito para quien está en el medio: suficiente autoridad para cambiar el sistema, suficiente presión para necesitarlo ya.",
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783046807/f4198e4a-e0c9-489b-beb7-79a3c7082846_mpkpsv.png",
      },
      {
        title: "Reconocido por la industria",
        description:
          "Premio Excelencia RRHH Canarias 2025. Validado por profesionales de recursos humanos, operaciones y mandos intermedios en empresas reales.",
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783047128/images-_3__qxwswo.png",
      },
    ],
  },
  testimonials: {
    eyebrow: "Lo que dicen los líderes.",
    eyebrowAccent: "4.9/5 (300+ reseñas).",
    title:
      "El feedback confirma\nque el problema es real\ny el libro funciona.",
    items: [
      {
        quote:
          "Por fin alguien explica por qué trabajo 12 horas y el equipo sigue esperándome. El libro me dio el marco para cambiar eso — no solo la conciencia.",
        name: "Laura Méndez",
        role: "Directora de Operaciones",
        avatar: "/images/avatar/avt-team-1.jpg",
      },
      {
        quote:
          "No es otro libro de liderazgo motivacional. Es un manual de arquitectura organizativa que apliqué con mi equipo la misma semana.",
        name: "Carlos Ruiz",
        role: "Gerente de Área",
        avatar: "/images/avatar/avt-team-2.jpg",
      },
      {
        quote:
          "Implementamos los acuerdos de decisión del libro y las reuniones bajaron un 40%. Mi equipo tomó más iniciativa en un mes.",
        name: "Ana Torres",
        role: "Head of Product",
        avatar: "/images/avatar/avt-team-3.jpg",
      },
      {
        quote:
          "Lo recomiendo a todo mando intermedio que siente que es el cuello de botella. El diagnóstico del libro solo ya vale la pena.",
        name: "Miguel Soto",
        role: "Director Comercial",
        avatar: "/images/avatar/avt-testimonial.jpg",
      },
    ],
    rating: "4.9/5",
    reviews: "300+ reseñas",
    clients: "100+ empresas",
  },
  blog: {
    eyebrow: "Lee sobre —",
    eyebrowAccent: "El método.",
    title: "Ideas para liderar\nsin ser el cuello de botella.",
    description:
      "Adelantos del método que encontrarás desarrollados en el libro: diagnóstico, cambio de rol y herramientas para equipos que deciden solos.",
    cta: { label: "Conseguir el libro", href: "#cta" },
    posts: [
      {
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783054066/4aa3ff81-79f7-489d-b547-edaf9cb2e5f1_ewrnoy.png",
        author: "Equipo SG",
        category: "Liderazgo",
        date: "20 Ene 2026",
        title:
          "Cinco dimensiones de dependencia: cómo saber si tu equipo puede avanzar sin ti.",
      },
      {
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783054229/71e86275-6177-4aaa-8422-0f4339c8b6c2_lvokja.png",
        author: "Equipo SG",
        category: "Método",
        date: "15 Ene 2026",
        title:
          "De líder apagafuegos a arquitecto del sistema: el cambio de rol que libera a tu equipo.",
      },
      {
        image:
          "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783054324/15635f96-9339-4cd9-8478-5561dd8099dd_rxr0yh.png",
        author: "Equipo SG",
        category: "Organización",
        date: "10 Ene 2026",
        title:
          "Acuerdos de decisión: la herramienta que elimina la fricción en equipos remotos.",
      },
    ],
  },
  cta: {
    title: "¿Listo para dejar de ser el cuello de botella?",
    description:
      "Consigue el libro y obtén el marco completo: diagnóstico, acuerdos, rutinas y herramientas para que tu equipo avance sin depender de ti cada día.",
    primary: { label: "Conseguir el libro", href: "#contacto" },
  },
  footer: {
    titleImage:
      "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783044701/ChatGPT_Image_2_jul_2026_11_11_00_p.m._uj3pyl.png",
  },
  clients: {
    eyebrow: "Confían en el método —",
    eyebrowAccent: "100+ organizaciones.",
    title: "Empresas que ya aplican el Sistema Ganador",
    logos: [
      {
        src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783053575/Captura_de_pantalla_2026-07-02_234816_f8xzd8.png",
        alt: "Vueling",
      },
      {
        src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783053574/Captura_de_pantalla_2026-07-02_234834_ctvhpo.png",
        alt: "Daimler",
      },
      {
        src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783053574/Captura_de_pantalla_2026-07-02_234822_xfrokm.png",
        alt: "Canik",
      },
      {
        src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783053574/Captura_de_pantalla_2026-07-02_234803_lyaddp.png",
        alt: "Rowenta",
      },
      {
        src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783053574/Captura_de_pantalla_2026-07-02_234810_o3pbea.png",
        alt: "Ampere EV",
      },
      {
        src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783053574/Captura_de_pantalla_2026-07-02_234828_e8yv4c.png",
        alt: "Afeela",
      },
      {
        src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1783053574/Captura_de_pantalla_2026-07-02_234841_dttu5d.png",
        alt: "Explay",
      },
    ],
  },
};
