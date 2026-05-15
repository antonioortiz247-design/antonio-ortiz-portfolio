import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Linkedin,
  Instagram,
  MessageCircle,
  Sparkles,
  Palette,
  Megaphone,
  Brain,
  Camera,
  LayoutTemplate,
  Target,
  Share2,
} from "lucide-react";

import { Navbar } from "@/components/portfolio/Navbar";
import { Particles } from "@/components/portfolio/Particles";
import { SectionLabel } from "@/components/portfolio/SectionLabel";

import heroPortrait from "@/assets/hero-portrait.jpg";
import projectGobree from "@/assets/project-gobree.jpg";
import projectImcufide from "@/assets/project-imcufide.jpg";
import projectCreative from "@/assets/project-creative.jpg";
import ambientBg from "@/assets/ambient-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antonio Ortiz — Publicista | Marketing Digital | Branding & Creative Content" },
      {
        name: "description",
        content:
          "Portafolio de Antonio Ortiz — construyendo marcas, visuales y experiencias digitales con estrategia, creatividad y flujos asistidos por IA.",
      },
      { property: "og:title", content: "Antonio Ortiz — Especialista Creativo en Marketing" },
      { property: "og:description", content: "Branding, marketing digital y dirección creativa asistida por IA." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

function Home() {
  return (
    <main id="top" className="relative min-h-screen text-foreground overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Services />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] flex items-center pt-32 pb-20 grain">
      {/* ambient background image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img
          src={ambientBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </motion.div>
      <Particles count={26} />

      <div className="mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary glow-amber animate-pulse" />
              Disponible para colaboraciones · CDMX
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display font-light text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] tracking-tight text-gradient-cinematic"
          >
            Antonio
            <br />
            <span className="text-primary/90">Ortiz</span>
            <span className="text-muted-foreground">.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.9, delay: 0.15, ease } } }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Publicista · Marketing Digital · Branding & Creative Content. Construyo marcas,
            visuales y experiencias digitales con estrategia, creatividad y flujos
            asistidos por IA.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.9, delay: 0.3, ease } } }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium glow-amber hover:scale-[1.02] transition-transform"
            >
              Ver Proyectos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/cv-antonio-ortiz.pdf"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
            >
              <Download className="h-4 w-4" /> Descargar CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" /> Contacto
            </a>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { duration: 0.9, delay: 0.45, ease } } }}
            className="grid grid-cols-3 gap-6 pt-6 max-w-md"
          >
            {[
              { k: "5+", v: "Años" },
              { k: "40+", v: "Proyectos" },
              { k: "12+", v: "Marcas" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong glow-teal">
            <img
              src={heroPortrait}
              alt="Retrato de Antonio Ortiz"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Actualmente
                </p>
                <p className="text-sm">Diseñando sistemas de marca</p>
              </div>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-3xl" />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2"
      >
        Desliza
        <span className="h-10 w-px bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const pillars = [
    "Branding",
    "Marketing Digital",
    "Creación de Contenido",
    "Comunicación Visual",
    "Flujos con IA",
    "Desarrollo de Campañas",
    "Producción Multimedia",
    "Estrategia de Comunicación",
  ];
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-4 space-y-6"
        >
          <SectionLabel index="01">Sobre mí</SectionLabel>
          <h2 className="font-display font-light text-4xl sm:text-5xl leading-tight text-gradient-cinematic">
            Estrategia con oficio cinematográfico.
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-8 space-y-8"
        >
          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
            Construyo mundos de marca que se sienten inevitables — combinando estrategia
            rigurosa con una sensibilidad de dirección de arte. Desde identidades
            industriales hasta campañas institucionales, mi trabajo une el oficio
            clásico de la comunicación con flujos creativos modernos asistidos por IA
            que se mueven más rápido sin perder el gusto.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Trabajo en branding, performance marketing, sistemas de contenido y
            producción visual — traduciendo posicionamiento en pixeles, copy, motion
            y los espacios intermedios.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
            {pillars.map((p) => (
              <li
                key={p}
                className="glass rounded-xl px-3 py-3 text-xs sm:text-sm text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors"
              >
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- WORK ---------------- */
const projects = [
  {
    n: "01",
    title: "GobreeBelt",
    tag: "Industrial Branding",
    image: projectGobree,
    summary:
      "Industrial brand system, sales infrastructure and B2B digital presence for a heavy-duty conveyor manufacturer.",
    chips: ["Identity", "B2B Strategy", "Sales System", "Digital Presence"],
  },
  {
    n: "02",
    title: "IMCUFIDE Ecatepec",
    tag: "Institutional Communication",
    image: projectImcufide,
    summary:
      "Public communication and event promotion for a municipal sports & culture institute — campaigns, content and visual identity.",
    chips: ["Public Sector", "Event Promotion", "Visual Content", "Campaigns"],
  },
  {
    n: "03",
    title: "Creative Concepts",
    tag: "Art Direction · AI",
    image: projectCreative,
    summary:
      "Conceptual branding, posters, social visuals and experimental AI-generated artwork — a sandbox for cinematic ideas.",
    chips: ["Posters", "Social", "AI Art", "Experimental"],
  },
];

function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl space-y-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <SectionLabel index="02">Featured Work</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight text-gradient-cinematic max-w-xl">
              Selected projects, shaped by intent.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A short reel of recent collaborations across industrial, institutional and creative fields.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.05 }}
              className={`group relative glass-strong rounded-3xl overflow-hidden grid lg:grid-cols-12 gap-0 ${
                i % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 relative overflow-hidden">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/10 to-transparent" />
              </div>
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between gap-8">
                <div className="space-y-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="font-mono text-primary">{p.n}</span>
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{p.summary}</p>
                  <ul className="flex flex-wrap gap-2 pt-2">
                    {p.chips.map((c) => (
                      <li
                        key={c}
                        className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-foreground/70"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="inline-flex items-center gap-2 self-start text-sm text-foreground hover:text-primary transition-colors">
                  Case study
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  { icon: Palette, title: "Branding", desc: "Identity systems, naming, brand architecture and guidelines." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance, paid media and full-funnel growth strategy." },
  { icon: Share2, title: "Social Media", desc: "Editorial direction, content calendars and community design." },
  { icon: Camera, title: "Content Creation", desc: "Photography, video, copy and multimedia production." },
  { icon: Brain, title: "AI Creative Workflows", desc: "Prompt systems, AI-assisted ideation and rapid iteration." },
  { icon: Sparkles, title: "Visual Design", desc: "Posters, decks, key visuals and art direction." },
  { icon: LayoutTemplate, title: "Landing Pages", desc: "High-converting, story-driven pages built for performance." },
  { icon: Target, title: "Advertising Campaigns", desc: "Concepting, scripting and launch — from idea to insight." },
];

function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl space-y-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl space-y-4"
        >
          <SectionLabel index="03">Services</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-gradient-cinematic">
            Eight disciplines, one creative voice.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.04 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="h-10 w-10 rounded-xl glass grid place-items-center mb-5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ArrowUpRight className="absolute top-5 right-5 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STACK ---------------- */
const stack = [
  { name: "Photoshop", group: "Design" },
  { name: "Illustrator", group: "Design" },
  { name: "Canva", group: "Design" },
  { name: "ChatGPT", group: "AI" },
  { name: "Claude", group: "AI" },
  { name: "Gemini", group: "AI" },
  { name: "Meta Ads", group: "Marketing" },
  { name: "Google Ads", group: "Marketing" },
  { name: "CapCut", group: "Video" },
];

function Stack() {
  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl space-y-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-4 max-w-xl">
            <SectionLabel index="04">Stack</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight text-gradient-cinematic">
              Tools, sharpened daily.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A curated toolkit spanning design, AI, performance marketing and post-production.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {stack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="glass rounded-full pl-2 pr-5 py-2 flex items-center gap-3 hover:border-primary/40 transition-colors"
            >
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center font-mono text-[10px]">
                {t.name.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-sm">{t.name}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t.group}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
const experience = [
  {
    role: "Freelancer · Marketing Digital & Branding",
    period: "2022 — Present",
    desc: "Brand systems, campaigns and AI-assisted creative direction for industrial and consumer clients.",
  },
  {
    role: "IMCUFIDE Ecatepec",
    period: "Public Sector",
    desc: "Institutional communication, sports and cultural event promotion, visual content production.",
  },
  {
    role: "Zunzunta.com",
    period: "Digital",
    desc: "Digital communication, content production and editorial design.",
  },
  {
    role: "Vienes Money's",
    period: "Brand & Promo",
    desc: "Promotional campaigns, branding support and on-the-ground activations.",
  },
  {
    role: "Advertising Activations",
    period: "BTL",
    desc: "Field activation strategy, experiential touchpoints and event-based marketing.",
  },
];

function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="lg:col-span-4 space-y-4 lg:sticky lg:top-32 self-start"
        >
          <SectionLabel index="05">Experience</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-gradient-cinematic">
            A trail of brands and campaigns.
          </h2>
          <p className="text-muted-foreground text-sm max-w-sm">
            Independent practice, institutional collaborations and on-the-ground brand work.
          </p>
        </motion.div>

        <ol className="lg:col-span-8 relative border-l border-border pl-8 space-y-10">
          <span className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
          {experience.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              className="relative glass rounded-2xl p-6"
            >
              <span className="absolute -left-[42px] top-7 h-3 w-3 rounded-full bg-primary glow-amber ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                <h3 className="font-display text-xl">{e.role}</h3>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
const contacts = [
  { icon: Linkedin, label: "LinkedIn", value: "antonio-ortiz", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", value: "antonio@ortiz.studio", href: "mailto:antonio@ortiz.studio" },
  { icon: MessageCircle, label: "WhatsApp", value: "+52 55 0000 0000", href: "https://wa.me/5215500000000" },
  { icon: Instagram, label: "Instagram", value: "@antonio.ortiz", href: "https://instagram.com" },
];

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="relative glass-strong rounded-[2rem] p-10 sm:p-16 text-center grain overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -bottom-32 right-10 h-64 w-64 rounded-full bg-accent/20 blur-[120px]" />

          <SectionLabel index="06">
            <span className="mx-auto">Contact</span>
          </SectionLabel>
          <h2 className="mt-6 font-display text-5xl sm:text-6xl leading-[0.95] text-gradient-cinematic">
            Let's build something
            <br />
            <span className="italic text-primary/90">unforgettable</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Available for branding engagements, creative direction and advisory roles.
            Reach out — I'd love to hear about the project.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm truncate">{c.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative px-6 py-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p className="font-mono">© {new Date().getFullYear()} Antonio Ortiz. All rights reserved.</p>
        <p className="font-mono uppercase tracking-widest">Crafted in CDMX</p>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING CTA ---------------- */
function FloatingCTA() {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.6, ease }}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center glow-amber hover:scale-110 transition-transform"
      aria-label="Contact"
    >
      <Mail className="h-5 w-5" />
    </motion.a>
  );
}
