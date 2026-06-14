import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { type ReactNode, useState } from "react";

import { Navbar } from "@/components/portfolio/Navbar";

import creativeConceptsContext from "@/assets/case-studies/creative-concepts-context.png";
import creativeConceptsProcess from "@/assets/case-studies/creative-concepts-process.png";
import gobreebeltContext from "@/assets/case-studies/gobreebelt-context.webp";
import gobreebeltProcess from "@/assets/case-studies/gobreebelt-process.webp";
import imcufideProcess from "@/assets/case-studies/imcufide-process.webp";
import projectGobree from "@/assets/project-gobree.jpg";
import projectImcufide from "@/assets/project-imcufide.webp";

type CaseStudyImage = {
  src: string;
  fallbackSrc?: string;
  title: string;
  subtitle?: string;
};

type CaseStudy = {
  title: string;
  category: string;
  description: string;
  heroImage: string;
  image01: CaseStudyImage;
  image02: CaseStudyImage;
  context: string;
  objectives: string[];
  participation: {
    summary: string;
    bullets: string[];
  };
  process: string[];
  tools: string[];
  results: string[];
};

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const caseStudies: Record<string, CaseStudy> = {
  gobreebelt: {
    title: "GobreeBelt",
    category: "Industrial Branding / Presencia Digital / Comunicación B2B",
    description:
      "Participación en presencia digital, estructura visual y comunicación para ventas: materiales digitales y una presentación más clara para un contexto industrial.",
    heroImage: projectGobree,
    image01: {
      src: "/case-studies/gobreebelt-context.webp",
      fallbackSrc: gobreebeltContext,
      title: "Contexto",
      subtitle: "Comunicación B2B",
    },
    image02: {
      src: "/case-studies/gobreebelt-process.webp",
      fallbackSrc: gobreebeltProcess,
      title: "Proceso",
      subtitle: "Estructura visual",
    },
    context:
      "GobreeBelt necesitaba una presencia digital más clara y profesional para comunicar soluciones industriales relacionadas con bandas transportadoras y productos especializados. El reto era organizar información técnica y comercial sin perder claridad, y mantener una estética sólida y confiable para audiencias B2B.",
    objectives: [
      "Mejorar la presentación digital",
      "Organizar información comercial",
      "Facilitar contacto y ventas",
      "Modernizar identidad visual",
      "Crear una experiencia más profesional",
    ],
    participation: {
      summary:
        "Participación en el desarrollo de presencia digital, estructura visual, contenido y sistema comercial del proyecto.",
      bullets: [
        "Apoyo en estructura visual y jerarquía de información",
        "Desarrollo de materiales digitales para comunicación B2B",
        "Ajustes de identidad visual aplicada a medios digitales",
        "Acompañamiento en piezas orientadas a contacto y ventas",
      ],
    },
    process: [
      "Referencias visuales industriales y tono técnico",
      "Definición de jerarquías: productos, aplicaciones y contacto",
      "Sistema visual consistente para piezas y secciones",
      "Tipografía sobria y legible para contenido técnico",
      "UX básica: lectura rápida, claridad y llamadas a la acción",
      "Adaptación de contenido a un lenguaje comercial B2B",
    ],
    tools: [
      "ChatGPT",
      "Canva",
      "Photoshop",
      "Herramientas IA",
      "Branding",
      "Diseño visual",
      "Desarrollo web",
    ],
    results: [
      "Presencia digital más sólida",
      "Comunicación visual más clara",
      "Mejor organización comercial",
      "Identidad más profesional en materiales digitales",
    ],
  },
  imcufide: {
    title: "IMCUFIDE Ecatepec",
    category: "Comunicación Institucional / Difusión / Eventos",
    description:
      "Materiales visuales y contenido digital para difusión de eventos deportivos y culturales, manteniendo claridad institucional y consistencia en comunicación.",
    heroImage: projectImcufide,
    image01: {
      src: "/case-studies/project-imcufide.webp",
      fallbackSrc: projectImcufide,
      title: "Pruebas clasificatorias olímpicas",
      subtitle: "Difusión institucional",
    },
    image02: {
      src: "/case-studies/imcufide-process.webp",
      fallbackSrc: imcufideProcess,
      title: "Torneo flag",
      subtitle: "Materiales y comunicación",
    },
    context:
      "El proyecto requería difusión visual y comunicación institucional para eventos deportivos y culturales organizados por el Instituto Municipal de Cultura Física y Deporte de Ecatepec. El enfoque fue mantener mensajes claros y consistentes, con piezas que funcionaran en redes y materiales de difusión.",
    objectives: [
      "Mejorar difusión institucional",
      "Comunicar eventos deportivos y culturales",
      "Crear materiales visuales",
      "Generar contenido digital",
      "Mantener comunicación clara y consistente",
    ],
    participation: {
      summary:
        "Participación en comunicación institucional, difusión digital, materiales visuales y promoción de eventos oficiales.",
      bullets: [
        "Diseño de materiales para difusión y comunicación pública",
        "Adaptación de contenido a formatos digitales",
        "Apoyo en consistencia visual para campañas de eventos",
        "Cobertura de piezas para redes y comunicación interna/externa",
      ],
    },
    process: [
      "Diseño de materiales con foco en legibilidad y jerarquía",
      "Organización de información: fecha, sede, requisitos, convocatoria",
      "Adaptación por formato: feed, stories y piezas informativas",
      "Lenguaje visual institucional: orden, claridad y repetición de patrones",
      "Producción y ajustes rápidos para calendarios de eventos",
    ],
    tools: ["Photoshop", "Canva", "Meta Business Suite", "Diseño visual", "Producción multimedia"],
    results: [
      "Mejor comunicación visual institucional",
      "Difusión más organizada",
      "Contenido más consistente",
      "Mejor presencia digital para eventos y actividades",
    ],
  },
  "creative-concepts": {
    title: "Creative Concepts",
    category: "Conceptual Branding / Experimental Visual Work",
    description:
      "Exploraciones visuales y proyectos conceptuales: branding experimental, composición y piezas digitales, usando IA como herramienta de apoyo creativo.",
    heroImage: creativeConceptsContext,
    image01: {
      src: "/case-studies/creative-concepts-context.jpg",
      fallbackSrc: creativeConceptsContext,
      title: "Contexto",
      subtitle: "Exploración visual",
    },
    image02: {
      src: "/case-studies/creative-concepts-process.jpg",
      fallbackSrc: creativeConceptsProcess,
      title: "Proceso",
      subtitle: "Iteración creativa",
    },
    context:
      "Serie de exploraciones visuales y proyectos conceptuales enfocados en branding, contenido digital, composición visual y creatividad asistida por IA. La intención es experimentar con estilos, lenguaje gráfico y narrativa visual de forma controlada, sin simular casos comerciales inexistentes.",
    objectives: [
      "Explorar estilos visuales",
      "Desarrollar conceptos creativos",
      "Experimentar con branding y narrativa visual",
      "Crear piezas digitales modernas",
      "Integrar herramientas de IA como apoyo",
    ],
    participation: {
      summary: "Desarrollo de conceptos visuales, branding experimental y contenido multimedia.",
      bullets: [
        "Moodboards y referencias visuales",
        "Composición y dirección visual para piezas digitales",
        "Exploración tipográfica y sistema de color",
        "Iteración de variantes con apoyo de IA (sin sustituir criterio)",
      ],
    },
    process: [
      "Moodboards y referencias cinematográficas",
      "Búsqueda de lenguaje visual: textura, contraste y ritmo",
      "Sistema de marca conceptual: tipografía, color y composición",
      "Estructura de piezas: jerarquía y foco principal",
      "Postproducción y consistencia entre variantes",
    ],
    tools: ["ChatGPT", "Photoshop", "Canva", "CapCut", "IA generativa", "Diseño visual"],
    results: [
      "Exploración de estilos visuales",
      "Fortalecimiento de criterio estético y composición",
      "Integración práctica de herramientas modernas como apoyo creativo",
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const cs = caseStudies[params.slug];
    const title = cs ? `${cs.title} — Case Study | Antonio Ortiz` : "Case Study | Antonio Ortiz";
    const description = cs
      ? cs.description
      : "Case study: branding, marketing digital y contenido creativo.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectCaseStudy,
});

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section-cut px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="lg:col-span-4"
        >
          <div className="space-y-4 lg:sticky lg:top-28">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">{index}</p>
            <h2 className="display-lg max-w-[8ch]">{title}</h2>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="lg:col-span-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function CinematicImage({ image }: { image: CaseStudyImage }) {
  const [src, setSrc] = useState(image.src);
  const [didFallback, setDidFallback] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease }}
      className="panel-raw overflow-hidden"
    >
      <div className="relative aspect-[16/10]">
        <img
          src={src}
          alt={image.title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => {
            if (didFallback) return;
            if (!image.fallbackSrc) return;
            setDidFallback(true);
            setSrc(image.fallbackSrc);
          }}
        />
        <div className="case-image-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <div className="border-t border-white/20 pt-4">
            <p className="font-display text-3xl uppercase tracking-tight text-foreground">{image.title}</p>
            {image.subtitle && (
              <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/70">
                {image.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCaseStudy() {
  const { slug } = Route.useParams();
  const cs = caseStudies[slug];

  if (!cs) {
    return (
      <main className="site-noise relative min-h-screen overflow-x-clip text-foreground">
        <Navbar />
        <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[88rem]">
            <div className="panel-raw mx-auto max-w-4xl p-8 text-center sm:p-14">
              <h1 className="display-xl">
              Case Study no encontrado
              </h1>
              <p className="muted-copy mt-6">
              Este proyecto no existe o el enlace cambió. Puedes volver a la página principal.
              </p>
              <Link to="/" className="hard-button hard-button-primary mt-8 inline-flex">
                Volver al portafolio <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="site-noise relative min-h-screen overflow-x-clip text-foreground">
      <Navbar />
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.8, ease } } }}
        className="px-4 pb-16 pt-32 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-[88rem]">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-between gap-4">
            <a
              href="/#work"
              className="hard-button hard-button-secondary"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a proyectos
            </a>
            <span className="stamp">Case Study</span>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <motion.div variants={fadeUp} className="space-y-5 lg:col-span-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">{cs.category}</p>
              <h1 className="display-super max-w-[8ch]">
                {cs.title}
              </h1>
              <p className="muted-copy max-w-2xl text-base leading-7 sm:text-lg">
                {cs.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-4">
              <div className="panel-raw p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Rol</p>
                <p className="mt-3 text-sm leading-7 text-foreground/90">
                  Antonio Ortiz · Publicista | Marketing Digital | Branding & Contenido Creativo
                </p>
                <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Enfoque</p>
                <p className="mt-3 text-sm leading-7 text-foreground/90">
                  Comunicaci&oacute;n, dise&ntilde;o visual, estrategia y ejecuci&oacute;n de piezas.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="panel-raw mt-10 overflow-hidden">
            <div className="relative aspect-[16/8] min-h-[20rem]">
              <img src={cs.heroImage} alt={cs.title} className="h-full w-full object-cover" />
              <div className="case-image-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-5 border-t border-white/20 pt-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/72">
                    Context / direction / execution
                  </p>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">Antonio Ortiz</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Section index="01" title="Contexto">
        <div className="space-y-8">
          <p className="muted-copy max-w-3xl text-base leading-7">{cs.context}</p>
          <CinematicImage image={cs.image01} />
        </div>
      </Section>

      <Section index="02" title="Objetivos">
        <div className="grid gap-3 sm:grid-cols-2">
          {cs.objectives.map((o) => (
            <div key={o} className="panel-raw p-5">
              <p className="text-sm leading-7 text-foreground/92">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" title="Participación">
        <div className="space-y-6">
          <p className="muted-copy max-w-3xl text-base leading-7">{cs.participation.summary}</p>
          <ul className="grid gap-3">
            {cs.participation.bullets.map((b) => (
              <li key={b} className="panel-raw px-5 py-4 text-sm leading-7 text-foreground/88">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section index="04" title="Proceso Creativo">
        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {cs.process.map((p) => (
              <div key={p} className="panel-raw p-5">
                <p className="text-sm leading-7 text-foreground/92">{p}</p>
              </div>
            ))}
          </div>
          <CinematicImage image={cs.image02} />
        </div>
      </Section>

      <Section index="05" title="Herramientas">
        <div className="flex flex-wrap gap-2">
          {cs.tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center border border-white/12 bg-white/[0.02] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/78"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section index="06" title="Resultados">
        <div className="grid gap-3 sm:grid-cols-2">
          {cs.results.map((r) => (
            <div key={r} className="panel-raw p-5">
              <p className="text-sm leading-7 text-foreground/92">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="section-cut px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <div className="panel-raw p-8 text-center sm:p-12">
            <h2 className="display-xl">
              ¿Platicamos tu proyecto?
            </h2>
            <p className="muted-copy mx-auto mt-5 max-w-xl text-base leading-7">
              Si buscas apoyo en branding, comunicación o contenido digital, me encantará conocer el contexto y proponer una ruta clara.
            </p>
            <a href="/#contact" className="hard-button hard-button-primary mt-8 inline-flex">
              Ir a contacto <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
