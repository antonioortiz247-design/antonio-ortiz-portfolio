import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { Navbar } from "@/components/portfolio/Navbar";

import ambientBg from "@/assets/ambient-bg.jpg";
import creativeConceptsContext from "@/assets/case-studies/creative-concepts-context.svg";
import creativeConceptsProcess from "@/assets/case-studies/creative-concepts-process.svg";
import gobreebeltContext from "@/assets/case-studies/gobreebelt-context.svg";
import gobreebeltProcess from "@/assets/case-studies/gobreebelt-process.svg";
import imcufideContext from "@/assets/case-studies/imcufide-context.jpg";
import imcufideProcess from "@/assets/case-studies/imcufide-process.jpg";
import projectCreative from "@/assets/project-creative.jpg";
import projectGobree from "@/assets/project-gobree.jpg";
import projectImcufide from "@/assets/project-imcufide.jpg";

type CaseStudyImage = {
  src: string;
  fallbackSrc?: string;
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
    image01: { src: "/case-studies/gobreebelt-context.jpg", fallbackSrc: gobreebeltContext },
    image02: { src: "/case-studies/gobreebelt-process.jpg", fallbackSrc: gobreebeltProcess },
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
    image01: { src: "/case-studies/imcufide-context.jpg", fallbackSrc: imcufideContext },
    image02: { src: "/case-studies/imcufide-process.jpg", fallbackSrc: imcufideProcess },
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
    heroImage: projectCreative,
    image01: {
      src: "/case-studies/creative-concepts-context.jpg",
      fallbackSrc: creativeConceptsContext,
    },
    image02: {
      src: "/case-studies/creative-concepts-process.jpg",
      fallbackSrc: creativeConceptsProcess,
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
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-14 px-6">
      <div className="mx-auto max-w-5xl grid lg:grid-cols-12 gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="lg:col-span-4 space-y-4"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="font-mono text-primary">{index}</span>
            <span className="uppercase tracking-widest">{title}</span>
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

function CinematicImage({ label, image }: { label: string; image: CaseStudyImage }) {
  const [src, setSrc] = useState(image.src);
  const [didFallback, setDidFallback] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease }}
      className="glass-strong rounded-3xl overflow-hidden"
    >
      <div className="relative aspect-[16/10]">
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          onError={() => {
            if (didFallback) return;
            if (!image.fallbackSrc) return;
            setDidFallback(true);
            setSrc(image.fallbackSrc);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/25 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="glass rounded-2xl px-5 py-4">
            <p className="font-display text-xl text-foreground">{label}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Imagen</p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-accent/20 blur-[90px]" />
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
      <main className="relative min-h-screen text-foreground overflow-x-clip">
        <Navbar />
        <section className="relative isolate min-h-[100svh] flex items-center pt-32 pb-20 grain px-6">
          <div className="absolute inset-0 -z-10">
            <img src={ambientBg} alt="" aria-hidden className="h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          </div>
          <div className="mx-auto max-w-3xl w-full text-center space-y-6">
            <h1 className="font-display font-light text-5xl sm:text-6xl leading-[0.95] text-gradient-cinematic">
              Case Study no encontrado
            </h1>
            <p className="text-muted-foreground">
              Este proyecto no existe o el enlace cambió. Puedes volver a la página principal.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium glow-amber hover:scale-[1.02] transition-transform"
            >
              Volver al portafolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-foreground overflow-x-clip">
      <Navbar />
      <motion.section
        initial="hidden"
        animate="show"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.8, ease } } }}
        className="relative isolate pt-32 pb-20 grain px-6"
      >
        <div className="absolute inset-0 -z-10">
          <img src={cs.heroImage} alt="" aria-hidden className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />
        </div>

        <div className="mx-auto max-w-5xl">
          <motion.div variants={fadeUp} className="flex items-center justify-between gap-4 flex-wrap">
            <a
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a proyectos
            </a>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary glow-amber animate-pulse" />
              Case Study
            </div>
          </motion.div>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
            <motion.div variants={fadeUp} className="lg:col-span-8 space-y-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{cs.category}</p>
              <h1 className="font-display font-light text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] tracking-tight text-gradient-cinematic">
                {cs.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {cs.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-4">
              <div className="glass-strong rounded-3xl p-6 space-y-4">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Rol</p>
                <p className="text-sm text-foreground/90">
                  Antonio Ortiz · Publicista | Marketing Digital | Branding & Contenido Creativo
                </p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Enfoque</p>
                <p className="text-sm text-foreground/90">Comunicación, diseño visual y contenido.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Section index="01" title="Contexto">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">{cs.context}</p>
          <CinematicImage label="Imagen 01" image={cs.image01} />
        </div>
      </Section>

      <Section index="02" title="Objetivos">
        <div className="grid sm:grid-cols-2 gap-3">
          {cs.objectives.map((o) => (
            <div key={o} className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors">
              <p className="text-sm text-foreground/90">{o}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section index="03" title="Participación">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">{cs.participation.summary}</p>
          <ul className="space-y-2">
            {cs.participation.bullets.map((b) => (
              <li key={b} className="glass rounded-xl px-4 py-3 text-sm text-foreground/85">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section index="04" title="Proceso Creativo">
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-3">
            {cs.process.map((p) => (
              <div key={p} className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors">
                <p className="text-sm text-foreground/90">{p}</p>
              </div>
            ))}
          </div>
          <CinematicImage label="Imagen 02" image={cs.image02} />
        </div>
      </Section>

      <Section index="05" title="Herramientas">
        <div className="flex flex-wrap gap-2">
          {cs.tools.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-border px-3 py-2 text-xs uppercase tracking-widest text-foreground/75 glass"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section index="06" title="Resultados">
        <div className="grid sm:grid-cols-2 gap-3">
          {cs.results.map((r) => (
            <div key={r} className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors">
              <p className="text-sm text-foreground/90">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="glass-strong rounded-[2rem] p-10 sm:p-14 text-center grain overflow-hidden relative">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute -bottom-32 right-10 h-64 w-64 rounded-full bg-accent/20 blur-[120px]" />
            <h2 className="font-display font-light text-4xl sm:text-5xl leading-[0.95] text-gradient-cinematic">
              ¿Platicamos tu proyecto?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Si buscas apoyo en branding, comunicación o contenido digital, me encantará conocer el contexto y proponer una ruta clara.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium glow-amber hover:scale-[1.02] transition-transform"
            >
              Ir a contacto <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
