import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "/#positioning", label: "Posicion" },
  { href: "/#work", label: "Proyectos" },
  { href: "/#capabilities", label: "Servicios" },
  { href: "/#story", label: "Proceso" },
  { href: "/#experience", label: "Experiencia" },
  { href: "/#contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md transition-all duration-500 ${
            scrolled ? "shadow-[0_18px_50px_rgba(0,0,0,0.35)]" : ""
          }`}
        >
          <a href="/#top" className="group flex items-center gap-3">
            <span className="stamp !px-2.5 !py-1.5 text-[10px]">AO</span>
            <span className="font-display text-2xl uppercase tracking-tight text-foreground">
              Antonio Ortiz
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.24em]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            className="hard-button hard-button-primary hidden md:inline-flex"
          >
            Hablemos
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center border border-white/10 bg-white/[0.03] md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </nav>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 space-y-1 border border-white/10 bg-black/80 p-4 backdrop-blur-md md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/8 px-1 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="hard-button hard-button-primary mt-3 w-full justify-center">
              Hablemos
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
