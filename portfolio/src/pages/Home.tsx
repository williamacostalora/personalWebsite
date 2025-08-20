import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowRight, MapPin, Sparkles } from "lucide-react"

type ChipProps = { children: React.ReactNode; tone?: "neutral" | "positive" }
const Chip = ({ children, tone = "neutral" }: ChipProps) => (
  <span
    className={[
      "rounded-full px-3 py-1 text-sm",
      tone === "positive"
        ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
        : "border border-white/10 bg-white/10 text-white/80",
    ].join(" ")}
  >
    {children}
  </span>
)

type ActionProps = React.ComponentProps<typeof Link> & { as?: "a" | "button" }
const PrimaryAction = ({ children, className = "", ...rest }: ActionProps) => (
  <Link
    {...rest}
    className={[
      "!text-white group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 outline-none transition hover:bg-indigo-400 focus-visible:ring-2 focus-visible:ring-indigo-300",
      className,
    ].join(" ")}
  >
    {children}
  </Link>
)

const SecondaryAction = ({ children, className = "", ...rest }: ActionProps) => (
  <Link
    {...rest}
    className={[
      "!text-white inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-base font-medium text-white/90 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/30",
      className,
    ].join(" ")}
  >
    {children}
  </Link>
)

export const Home = () => {
  const prefersReduced = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  }

  // micro stagger for elements
  const withDelay = (i: number) => ({
    ...fadeUp,
    show: {
      ...fadeUp.show,
      transition: { ...(fadeUp.show as any).transition, delay: prefersReduced ? 0 : 0.08 * i },
    },
  })

  return (
    <div className="relative min-h-dvh w-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-950 text-white">
      {/* Skip to content for a11y */}
      <a
        href="#home-card"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-black/70 focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* soft blobs (animated only if not reduced) */}
        <motion.div
          initial={{ x: -60, y: -60, opacity: 0.9 }}
          animate={prefersReduced ? {} : { x: -20, y: -20 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
        />
        <motion.div
          initial={{ x: 60, y: 60, opacity: 0.9 }}
          animate={prefersReduced ? {} : { x: 20, y: 20 }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff20 1px, transparent 1px), radial-gradient(#ffffff10 1px, transparent 1px)",
            backgroundSize: "24px 24px, 24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />
      </div>

      <main className="mx-auto flex min-h-dvh max-w-6xl items-center justify-center px-6">
        <motion.section initial="hidden" animate="show" className="w-full">
          {/* Card */}
          <div
            id="home-card"
            className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_10px_50px_-15px_rgba(0,0,0,0.4)]"
            role="region"
            aria-label="Intro"
          >
            {/* Avatar */}
            <motion.div
              variants={withDelay(0)}
              className="mx-auto mb-4 flex items-center justify-center"
            >
              <div className="relative">
                <img
                  src="/avatar.jpeg" // drop a square photo at public/avatar.jpg
                  alt="Portrait of William Acosta"
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-white/20"
                  onError={(e) => {
                    // graceful fallback to initials
                    const el = e.currentTarget
                    el.style.display = "none"
                    const fallback = document.getElementById("avatar-fallback")
                    if (fallback) fallback.style.display = "grid"
                  }}
                />
                <div
                  id="avatar-fallback"
                  className="hidden h-20 w-20 place-items-center rounded-full bg-white/10 text-xl font-semibold"
                >
                  WA
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={withDelay(1)}
              className="bg-gradient-to-r from-white via-violet-100 to-fuchsia-200 bg-clip-text text-center text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
            >
              William Acosta
            </motion.h1>

            <motion.p
              variants={withDelay(2)}
              className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/80"
            >
              Full-Stack Developer & Creative Problem Solver — I build fast, clean, human-friendly products.
            </motion.p>

            {/* Chips */}
            <motion.div variants={withDelay(3)} className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Chip>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 opacity-75" /> Based in Minnesota
                </span>
              </Chip>
              <Chip tone="positive">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 opacity-80" /> Open to work
                </span>
              </Chip>
              <Chip>React • Node • Python</Chip>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={withDelay(4)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryAction to="/projects" aria-label="View my projects">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </PrimaryAction>

              <SecondaryAction to="/about" aria-label="Learn more about me">
                About Me
              </SecondaryAction>
              <SecondaryAction to="/experience" aria-label="See my experience">
                Experience
              </SecondaryAction>
              <SecondaryAction to="/contact" aria-label="Contact me">
                Contact
              </SecondaryAction>
            </motion.div>

            {/* Quick actions */}
            <motion.div variants={withDelay(5)} className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/80">
              <a
                href="mailto:wacostal@macalester.edu"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="Email me"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="https://github.com/williamacostalora"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="../resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="Download resume"
              >
                <FileText className="h-4 w-4" /> Résumé
              </a>
              <a
                href="https://www.linkedin.com/in/william-acosta-lora-2a288829a/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              variants={withDelay(6)}
              className="mt-8 flex justify-center"
              aria-hidden
            >
              <Link
                to="/projects"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Scroll to projects ↓
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
