import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download, Linkedin, Mail, MessageCircle, MoveRight } from "lucide-react";

import { Navbar } from "@/components/portfolio/Navbar";

import creativeConceptsContext from "@/assets/creative-concepts-context.png";
import heroPortrait from "@/assets/hero-portrait.jpg";
import projectGobree from "@/assets/project-gobree.jpg";
import projectImcufide from "@/assets/project-imcufide.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antonio Ortiz — Publicista | Marketing Digital | Branding & Contenido Creativo" },
      {
        name: "description",
        content:
          "Portafolio de Antonio Ortiz. Branding, marketing, dirección visual y campañas con una estética editorial, urbana e industrial.",
      },
      { property: "og:title", content: "Antonio Ortiz — Creative Strategy, Branding & Campaign Direction" },
      { property: "og:description", content: "Branding, marketing digital, contenido visual y campañas con impacto real." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const ease = [0.16, 1, 0.3, 1] as const;

const revealUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const revealLeft = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease } },
};

const revealRight = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease } },
};

type Project = {
  n: string;
  slug: string;
  title: string;
  category: string;
  role: string;
  image: string;
  summary: string;
  labels: string[];
  href: string | null;
};

const projects: Project[] = [
  {
    n: "01",
    slug: "gobreebelt",
    title: "GobreeBelt",
    category: "Industrial Branding / B2B Communication",
    role: "Brand direction, digital materials, sales support",
    image: projectGobree,
    href: "https://gobreebelt.com",
    summary:
      "Presencia digital y sistema visual para una marca industrial que necesitaba hablar con claridad comercial, orden técnico y una identidad más sólida.",
    labels: ["Industrial", "B2B", "Brand System", "Sales Assets"],
  },
  {
    n: "02",
    slug: "imcufide",
    title: "IMCUFIDE Ecatepec",
    category: "Institutional Communication / Sports Culture",
    role: "Campaign graphics, event diffusion, public communication",
    image: projectImcufide,
    href: null,
    summary:
      "Contenido visual y difusión institucional para eventos deportivos y culturales con foco en alcance, claridad del mensaje y ritmo editorial.",
    labels: ["Sports", "Institutional", "Campaign Assets", "Content"],
  },
  {
    n: "03",
    slug: "creative-concepts",
    title: "Creative Concepts",
    category: "Experimental Branding / Visual Exploration",
    role: "Concept development, art direction, AI-supported exploration",
    image: creativeConceptsContext,
    href: null,
    summary:
      "Exploraciones visuales donde branding, textura, tipografía y narrativa se empujan hacia un lenguaje más crudo, memorable y contemporáneo.",
    labels: ["Conceptual", "Art Direction", "Typography", "Visual Systems"],
  },
];

const capabilityBlocks = [
  {
    title: "Brand Systems",
    description: "Construyo identidades con peso visual, códigos reconocibles y aplicaciones que funcionan dentro y fuera de pantalla.",
  },
  {
    title: "Campaign Thinking",
    description: "Bajo una idea a piezas, mensajes, ritmos visuales y ejecuciones con dirección clara.",
  },
  {
    title: "Content Direction",
    description: "Diseño contenido que no rellena feeds: crea presencia, ordena percepción y mueve atención.",
  },
  {
    title: "Digital Execution",
    description: "Aterrizo piezas, landings, materiales de venta y comunicación digital sin perder intención creativa.",
  },
  {
    title: "Urban Visual Taste",
    description: "Trabajo con contraste, textura, energía deportiva y referencias de cultura callejera sin caer en clichés.",
  },
  {
    title: "AI With Criteria",
    description: "Uso IA como herramienta de ritmo e iteración, no como sustituto del criterio ni de la dirección.",
  },
];

const storyPanels = [
  {
    title: "Strategy First",
    body: "Cada proyecto parte de una posición clara: qué se quiere instalar en la mente, cómo se va a ver y qué debe provocar.",
    image: heroPortrait,
  },
  {
    title: "Campaign Energy",
    body: "El diseño no se presenta como una tarjeta bonita. Se construye como sistema, campaña, presencia y movimiento.",
    image: creativeConceptsContext,
  },
  {
    title: "Execution Matters",
    body: "La idea no termina en la estética. Se convierte en entregables concretos, materiales utilizables y comunicación que sí sale a la calle.",
    image: projectImcufide,
  },
];

const experience = [
  {
    role: "Freelance Creative Strategy & Branding",
    period: "2022 - Present",
    text: "Branding, contenido digital, piezas comerciales y campañas para negocios, marcas y proyectos con enfoque B2B y B2C.",
  },
  {
    role: "Institutional Communication / IMCUFIDE",
    period: "Public Sector",
    text: "Difusión de actividades deportivas y culturales, materiales de comunicación visual y apoyo editorial para eventos públicos.",
  },
  {
    role: "Brand Support Across Retail & Promotion",
    period: "Field Activation",
    text: "Experiencia en contacto con público, materiales promocionales, activaciones y ejecución operativa de marca.",
  },
  {
    role: "Visual Production & Content Systems",
    period: "Ongoing Practice",
    text: "Diseño, copy, composición y herramientas digitales aplicadas a campañas, contenidos y presencia de marca.",
  },
];

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "antonio-ortiz-ramirez-ba9045153",
    href: "https://www.linkedin.com/in/antonio-ortiz-ramirez-ba9045153",
  },
  {
    icon: Mail,
    label: "Mail",
    value: "Antonioortiz247@gmail.com",
    href: "mailto:Antonioortiz247@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 56 1145 1113",
    href: "https://wa.me/525611451113",
  },
];

function Home() {
  return (
    <main id="top" className="site-noise relative min-h-screen overflow-x-clip text-foreground">
      <Navbar />
      <Hero />
      <CampaignMarquee />
      <Positioning />
      <Work />
      <Capabilities />
      <StoryRail />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="relative min-h-[100svh] px-4 pb-14 pt-20 sm:px-6 sm:pt-24 lg:px-8">
      <div className="campaign-divider absolute left-0 right-0 top-[6rem]" />
      <div className="mx-auto grid max-w-[88rem] items-start gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-7">
          <div className="rule-grid pointer-events-none absolute inset-x-0 top-0 hidden h-[28rem] opacity-50 lg:block" />
          <motion.div initial="hidden" animate="show" variants={revealUp} className="space-y-6">
            <span className="eyebrow">Creative strategist / branding / campaign direction / CDMX</span>
            <motion.h1 style={{ y: titleY }} className="display-super max-w-[11ch]">
              raw impact
              <br />
              <span className="accent-text">built for</span>
              <br />
              brands.
            </motion.h1>
            <div className="grid max-w-3xl gap-6 lg:grid-cols-[1.4fr_0.8fr]">
              <p className="muted-copy text-base leading-7 sm:text-lg">
                Dise&ntilde;o presencia visual, sistemas de marca y campa&ntilde;as con energ&iacute;a urbana,
                disciplina comercial y una narrativa m&aacute;s cercana a un editorial de streetwear que a un
                landing gen&eacute;rico.
              </p>
              <div className="border-l border-white/10 pl-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Positioning
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/88">
                  Branding, marketing, visual impact y ejecuci&oacute;n real para marcas que necesitan presencia,
                  no decoraci&oacute;n.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a href="#work" className="hard-button hard-button-primary">
                Selected Work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="/cv-antonio-ortiz.pdf" className="hard-button hard-button-secondary">
                Download CV <Download className="h-4 w-4" />
              </a>
              <a href="#contact" className="hard-button hard-button-secondary">
                Start a project <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            variants={{ ...revealUp, show: { ...revealUp.show, transition: { duration: 0.9, delay: 0.45, ease } } }}
            className="grid grid-cols-3 gap-6 pt-6 max-w-md"
          >
            {[
              { k: "Branding", v: "Identidad" },
              { k: "Marketing", v: "Digital" },
              { k: "Contenido", v: "Visual" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={revealRight}
          className="relative lg:col-span-5 lg:self-end"
        >
          <div className="relative ml-auto max-w-[33rem]">
            <motion.div style={{ y: imageY }} className="panel-raw tilt-frame relative aspect-[4/5]">
              <img src={heroPortrait} alt="Retrato de Antonio Ortiz" className="h-full w-full object-cover" />
              <div className="case-image-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="border-t border-white/20 pt-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/70">
                    Antonio Ortiz / Creative Strategy / Branding / Execution
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="panel-raw tilt-frame-alt absolute -bottom-8 -left-4 w-[13rem] bg-black/70 p-4 sm:w-[15rem]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">Current mode</p>
              <p className="mt-3 font-display text-3xl uppercase leading-[0.84] tracking-tight">
                Building
                <br />
                stronger
                <br />
                brand fronts
              </p>
            </div>

            <div className="absolute -right-4 top-10 hidden border border-primary/40 bg-primary/10 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary sm:block">
              No templates
              <br />
              no startup skin
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CampaignMarquee() {
  const items = [
    "Brand Positioning",
    "Campaign Systems",
    "Urban Aesthetic",
    "Sports Energy",
    "Street-Food Branding",
    "Visual Impact",
    "Execution",
    "Discipline",
  ];

  return (
    <section className="marquee">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <div key={i} className="marquee-segment">
            {items.map((item) => (
              <span key={`${i}-${item}`} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section id="positioning" className="section-cut px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[88rem] gap-14 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealLeft}
          className="lg:col-span-5"
        >
          <span className="eyebrow">Positioning</span>
          <h2 className="display-xl mt-6 max-w-[10ch]">
            strategy with visual aggression and commercial clarity.
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealRight}
          className="lg:col-span-7"
        >
          <div className="grid gap-8 border-l border-white/10 pl-6 md:grid-cols-2">
            <div>
              <p className="muted-copy text-base leading-7">
                Trabajo entre branding, marketing y direcci&oacute;n visual para construir marcas con presencia,
                orden y memoria. Me interesan los sistemas visuales que se sienten vivos, t&aacute;ctiles y listos
                para producirse.
              </p>
            </div>
            <div>
              <p className="muted-copy text-base leading-7">
                La referencia no es una landing de startup. Es una campa&ntilde;a: energ&iacute;a deportiva, cultura
                urbana, brutalismo controlado, textura industrial y una ejecuci&oacute;n que convierte ideas en piezas
                utilizables.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section-cut px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[88rem] space-y-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={revealUp}
          className="grid gap-6 lg:grid-cols-12"
        >
          <div className="space-y-4 lg:col-span-8">
            <span className="eyebrow">Selected Work</span>
            <h2 className="display-xl max-w-[11ch]">Projects presented like campaigns, not like cards.</h2>
          </div>
          <p className="muted-copy max-w-md text-sm leading-6 lg:col-span-4 lg:pt-16">
            Cada caso enfatiza impacto visual, categor&iacute;a, rol y direcci&oacute;n. La lectura entra por la
            imagen, la jerarqu&iacute;a y el sistema de composici&oacute;n.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={i % 2 ? revealRight : revealLeft}
              className={`group grid items-stretch gap-8 border-t border-white/10 pt-8 lg:grid-cols-12 ${
                i % 2 ? "lg:[&>a:first-child]:order-2" : ""
              }`}
            >
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="block lg:col-span-8">
                <div className="panel-raw relative h-full min-h-[24rem] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="case-image-overlay" />
                  <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/68 sm:p-7">
                    <span>{p.category}</span>
                    <span className="accent-text">{p.n}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <div className="flex items-end justify-between gap-6 border-t border-white/20 pt-4">
                      <h3 className="case-title max-w-[8ch]">{p.title}</h3>
                      <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/68 sm:block">
                        Case Study
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col justify-between gap-7 lg:col-span-4 lg:py-2">
                <div className="space-y-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">{p.role}</p>
                  <p className="muted-copy text-base leading-7">{p.summary}</p>
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                    >
                      Visit live site <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="space-y-5">
                  <ul className="flex flex-wrap gap-2">
                    {p.labels.map((label) => (
                      <li key={label} className="border border-white/12 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-foreground/80">
                        {label}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
                  >
                    Open case study <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="section-cut px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[88rem] space-y-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={revealUp}
          className="grid gap-6 lg:grid-cols-12"
        >
          <div className="space-y-4 lg:col-span-7">
            <span className="eyebrow">Capabilities</span>
            <h2 className="display-xl max-w-[9ch]">Built for brands that need presence, rhythm and results.</h2>
          </div>
          <p className="muted-copy max-w-md text-sm leading-6 lg:col-span-5 lg:pt-16">
            Los servicios se articulan como un sistema. Estrategia, contenido, branding y ejecuci&oacute;n viven
            en el mismo frente creativo.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {capabilityBlocks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.04 }}
              className={`panel-raw p-6 md:p-7 ${
                i === 0 || i === 3 ? "xl:col-span-5" : i === 2 || i === 5 ? "xl:col-span-3" : "xl:col-span-4"
              } ${i % 2 ? "xl:translate-y-10" : ""}`}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="display-lg mt-6 max-w-[8ch]">{item.title}</h3>
              <p className="muted-copy mt-4 max-w-md text-sm leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryRail() {
  return (
    <section id="story" className="section-cut px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[88rem] space-y-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={revealUp}
          className="grid gap-6 lg:grid-cols-12"
        >
          <div className="space-y-4 lg:col-span-7">
            <span className="eyebrow">Visual Storytelling</span>
            <h2 className="display-xl max-w-[9ch]">A horizontal rhythm with narrative, direction and tension.</h2>
          </div>
          <p className="muted-copy max-w-md text-sm leading-6 lg:col-span-5 lg:pt-16">
            Esta secci&oacute;n rompe la grilla para mostrar c&oacute;mo pienso los proyectos: estrategia, campa&ntilde;a
            y ejecuci&oacute;n como una secuencia conectada.
          </p>
        </motion.div>

        <div className="campaign-scroll -mx-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex min-w-max gap-5">
            {storyPanels.map((panel, i) => (
            <motion.div
                key={panel.title}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.08 }}
                className="panel-raw flex min-h-[34rem] w-[85vw] max-w-[34rem] snap-start flex-col justify-between overflow-hidden sm:w-[33rem]"
            >
                <div className="relative h-[18rem] overflow-hidden">
                  <img src={panel.image} alt={panel.title} className="h-full w-full object-cover" />
                  <div className="case-image-overlay" />
                </div>
                <div className="space-y-4 p-6 sm:p-7">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-lg max-w-[8ch]">{panel.title}</h3>
                  <p className="muted-copy max-w-md text-sm leading-7">{panel.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-cut px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={revealLeft}
          className="space-y-4 lg:col-span-4 lg:sticky lg:top-28 lg:self-start"
        >
          <span className="eyebrow">Experience</span>
          <h2 className="display-xl max-w-[8ch]">Practice shaped by brands, public communication and field execution.</h2>
          <p className="muted-copy max-w-sm text-sm leading-6">
            Mi perfil mezcla pensamiento creativo, contacto con la operaci&oacute;n y sensibilidad para construir
            comunicaci&oacute;n que funcione en contextos reales.
          </p>
        </motion.div>

        <ol className="space-y-5 lg:col-span-8">
          {experience.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              className="panel-raw p-6 md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">{e.period}</p>
                  <h3 className="display-lg mt-5 max-w-[10ch]">{e.role}</h3>
                </div>
                <p className="muted-copy max-w-xl text-sm leading-7">{e.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
const contacts = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "antonio-ortiz-ramirez",
    href: "https://www.linkedin.com/in/antonio-ortiz-ramirez-ba9045153",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "Antonioortiz247@gmail.com",
    href: "mailto:Antonioortiz247@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+52 56 1145 1113",
    href: "https://wa.me/525611451113",
  },
  {
    icon: Download,
    label: "CV",
    value: "Descargar CV",
    href: "/cv-antonio-ortiz.pdf",
    download: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="section-cut px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[88rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="panel-raw grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:p-14"
        >
          <div className="space-y-5 lg:col-span-7">
            <span className="eyebrow">Contact</span>
            <h2 className="display-super max-w-[9ch]">
              build the next
              <br />
              <span className="accent-text">campaign front.</span>
            </h2>
            <p className="muted-copy max-w-2xl text-base leading-7 sm:text-lg">
              Disponible para branding, campa&ntilde;as, direcci&oacute;n visual, contenido digital y ejecuci&oacute;n
              creativa. Si el objetivo es destacar con una presencia m&aacute;s fuerte, conversemos.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="mailto:Antonioortiz247@gmail.com" className="hard-button hard-button-primary">
                Send email <Mail className="h-4 w-4" />
              </a>
              <a href="/cv-antonio-ortiz.pdf" className="hard-button hard-button-secondary">
                Download CV <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-3 border-l border-white/10 pl-0 lg:pl-8">
              {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                download={c.download ? "" : undefined}
                target={c.download ? undefined : "_blank"}
                rel={c.download ? undefined : "noreferrer"}
                className="group glass rounded-2xl p-5 w-full flex flex-col sm:flex-row items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center border border-white/10 bg-white/[0.03] text-primary">
                  <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-2 text-sm text-foreground">{c.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Antonio Ortiz</p>
        <p>Branding / Campaign Direction / CDMX</p>
      </div>
    </footer>
  );
}
