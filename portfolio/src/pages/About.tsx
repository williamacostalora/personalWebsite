import { motion, useReducedMotion } from "framer-motion"
import { Code, GraduationCap, Users, Trophy, MapPin, Heart, Coffee, BookOpen } from "lucide-react"

type ChipProps = { children: React.ReactNode; tone?: "neutral" | "positive" | "blue" }
const Chip = ({ children, tone = "neutral" }: ChipProps) => (
  <span
    className={[
      "rounded-full px-3 py-1 text-sm font-medium",
      tone === "positive"
        ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
        : tone === "blue"
        ? "border border-blue-400/30 bg-blue-400/10 text-blue-200"
        : "border border-white/10 bg-white/10 text-white/80",
    ].join(" ")}
  >
    {children}
  </span>
)

export const About = () => {
  const prefersReduced = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  }

  const withDelay = (i: number) => ({
    ...fadeUp,
    show: {
      ...fadeUp.show,
      transition: { ...(fadeUp.show as any).transition, delay: prefersReduced ? 0 : 0.08 * i },
    },
  })

  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "JavaScript/TypeScript", level: "Advanced" },
    { name: "React/Next.js", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "R", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
  ]

  const interests = [
    { icon: Code, label: "Open Source", description: "Contributing to developer tools" },
    { icon: BookOpen, label: "AI/ML", description: "Exploring computational linguistics" },
    { icon: Users, label: "Community", description: "Building inclusive tech spaces" },
    { icon: Coffee, label: "Mentoring", description: "Teaching & peer tutoring" },
  ]

  return (
    <div className="relative min-h-dvh w-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-950 text-white">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
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

      <main className="mx-auto max-w-6xl px-6 py-20">
        <motion.section initial="hidden" animate="show" className="space-y-12">
          {/* Header */}
          <motion.div variants={withDelay(0)} className="text-center">
            <h1 className="bg-gradient-to-r from-white via-violet-100 to-fuchsia-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              About Me
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Building bridges between technology and human needs
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Personal Story */}
            <motion.div variants={withDelay(1)} className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-500/20 p-2">
                    <Heart className="h-5 w-5 text-indigo-300" />
                  </div>
                  <h2 className="text-xl font-semibold">My Story</h2>
                </div>
                <div className="space-y-4 text-white/80">
                  <p>
                    Hi! I'm William, a Computer Science student at Macalester College with a passion for creating technology that makes a real difference. Growing up as a first-generation college student from Louisiana, I've learned the power of perseverance and community.
                  </p>
                  <p>
                    My journey into tech started with curiosity about how things work, but it's evolved into something deeper—a desire to build inclusive solutions that bridge gaps and create opportunities for underrepresented communities.
                  </p>
                  <p>
                    When I'm not coding, you'll find me mentoring fellow students, co-founding STEM organizations, or working on projects that help local businesses like my family's cleaning company thrive in the digital age.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-500/20 p-2">
                    <Users className="h-5 w-5 text-emerald-300" />
                  </div>
                  <h2 className="text-xl font-semibold">What Drives Me</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="rounded-lg bg-white/10 p-2">
                        <interest.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{interest.label}</h3>
                        <p className="text-sm text-white/70">{interest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education & Skills */}
            <motion.div variants={withDelay(2)} className="space-y-6">
              {/* Education */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/20 p-2">
                    <GraduationCap className="h-5 w-5 text-purple-300" />
                  </div>
                  <h2 className="text-xl font-semibold">Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-white">Macalester College</h3>
                    <p className="text-white/70">B.A. Computer Science • Minor: Data Science (Bioinformatics)</p>
                    <p className="text-sm text-white/60">2023-2026 • GPA: 4.00/4.00</p>
                    <div className="mt-2 flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-white/50" />
                      <span className="text-sm text-white/60">St. Paul, Minnesota</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Chip tone="positive">QuestBridge Scholar</Chip>
                    <Chip tone="blue">Google LSLS Alumnus</Chip>
                    <Chip>Goldman Sachs ELS</Chip>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/20 p-2">
                    <Code className="h-5 w-5 text-blue-300" />
                  </div>
                  <h2 className="text-xl font-semibold">Technical Skills</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        skill.level === "Advanced" 
                          ? "bg-emerald-500/20 text-emerald-300" 
                          : "bg-blue-500/20 text-blue-300"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-amber-500/20 p-2">
                    <Trophy className="h-5 w-5 text-amber-300" />
                  </div>
                  <h2 className="text-xl font-semibold">Leadership</h2>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium text-white">Voices In STEM: Macalester SACNAS Chapter</h3>
                    <p className="text-sm text-white/70">Co-Founder & Co-Chair</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Adelante</h3>
                    <p className="text-sm text-white/70">Co-Chair</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Computer Science Teaching Assistant</h3>
                    <p className="text-sm text-white/70">Mentoring 60+ students in Python & OOP</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div variants={withDelay(3)} className="mx-auto max-w-2xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <h2 className="mb-4 text-xl font-semibold">Languages</h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Chip tone="positive">English (Native)</Chip>
                <Chip tone="positive">Spanish (Native)</Chip>
                <Chip tone="blue">French (High-Intermediate)</Chip>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}