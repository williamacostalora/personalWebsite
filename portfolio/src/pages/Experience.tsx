import { motion, useReducedMotion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Code, Users, TrendingUp, Award } from "lucide-react"

type ChipProps = { children: React.ReactNode; tone?: "neutral" | "positive" | "blue" }
const Chip = ({ children, tone = "neutral" }: ChipProps) => (
  <span
    className={[
      "rounded-full px-2 py-1 text-xs font-medium",
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

interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  current?: boolean
  description: string[]
  technologies: string[]
  achievements?: string[]
  link?: string
}

export const Experience = () => {
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

  const experiences: ExperienceItem[] = [
    {
      company: "Fresh Start Cleaning Louisiana, LLC",
      role: "Freelance Software Developer",
      location: "Lafayette, LA",
      period: "June 2025 – Present",
      current: true,
      description: [
        "Developed a responsive business website using React, increasing online visibility for a Louisiana-based cleaning service",
        "Built an automated email generation tool using Python/Tkinter that reduced manual outreach time by 90%",
        "Integrated AI customization (Ollama API) for personalized prospect emails across education, construction, and technology sectors",
        "Implemented CSV data processing and SMTP integration, enabling batch email campaigns to 50+ prospects"
      ],
      technologies: ["React", "Python", "Tkinter", "AI/ML", "SMTP", "CSV Processing"],
      achievements: ["90% reduction in manual outreach time", "50+ prospect email campaigns"],
      link: "https://freshcleaningcolouisiana.com/"
    },
    {
      company: "Medtronic",
      role: "Software Engineering Intern",
      location: "Northridge, CA",
      period: "June 2025 – August 2025",
      description: [
        "Developing an internal tool to manage the software testing lifecycle, improving visibility across development and QA stages",
        "Building full-stack features using Node.js, JavaScript, MongoDB, and RESTful APIs to streamline data access and tracking",
        "Automated the categorization and batch processing of multi-gigabyte test reports using Python, compressing and optimizing data to 130MB  packages for document upload requirements, reducing manual processing time from 7 days to 5 minutes"
      ],
      technologies: ["Node.js", "JavaScript", "MongoDB", "RESTful APIs", "GitLab", "Jira", "Jenkins"],
      achievements: ["Improved testing lifecycle visibility", "Automated reporting workflows", "Reduced processing from 7 days to 5 minutes"]
    },
    {
      company: "Portico Healthnet",
      role: "Health Access Intern",
      location: "Minneapolis, MN",
      period: "August 2024 – Present",
      current: true,
      description: [
        "Mapped noncitizen groups in the Greater Twin Cities using R to identify areas with higher rates of uninsured individuals",
        "Supported planning and implementation of pop-up clinics and conducted community surveys before and after coverage enrollment",
        "Created R-based data visualizations and contributed to grant proposals for future community health initiatives"
      ],
      technologies: ["R", "Data Visualization", "Statistical Analysis", "Community Research"],
      achievements: ["Identified high-risk uninsured areas", "Contributed to grant proposals"]
    },
    {
      company: "FiNest Home Services",
      role: "Website and E-Commerce Development Intern",
      location: "Minneapolis, MN",
      period: "January 2025 – May 2025",
      description: [
        "Single-handedly developed and redesigned FiNest's website using HTML, CSS, and JavaScript",
        "Increased website traffic by 40% and session duration by 25% by improving UX and SEO",
        "Built new service pages and integrated an e-commerce scheduler, enhancing client engagement and conversion",
        "Adjusted website to ensure accessibility needs were met for older adults navigating the site"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "UX/UI Design", "SEO", "Accessibility"],
      achievements: ["40% increase in website traffic", "25% increase in session duration", "Improved accessibility for older adults"]
    },
    {
      company: "Macalester College",
      role: "Computer Science Teaching Assistant",
      location: "St. Paul, MN",
      period: "January 2024 – Present",
      current: true,
      description: [
        "Instructed over 60 students on Object-Oriented Programming and GUI modules in Python, boosting average grades by 15%",
        "Developed and graded assignments, providing constructive feedback and enhancing student engagement in the course",
        "Participated in professional development events to improve leadership and peer tutoring in STEM subjects"
      ],
      technologies: ["Python", "Object-Oriented Programming", "GUI Development", "Teaching", "Mentoring"],
      achievements: ["15% improvement in average grades", "60+ students mentored", "Enhanced student engagement"]
    }
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

      <main className="mx-auto max-w-4xl px-6 py-20">
        <motion.section initial="hidden" animate="show" className="space-y-12">
          {/* Header */}
          <motion.div variants={withDelay(0)} className="text-center">
            <h1 className="bg-gradient-to-r from-white via-violet-100 to-fuchsia-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              Experience
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Building impactful solutions across diverse industries and technologies
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-indigo-400 via-purple-400 to-fuchsia-400 opacity-30" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={withDelay(index + 1)}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 ring-4 ring-indigo-500/20" />

                  {/* Content card */}
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                          {exp.current && (
                            <Chip tone="positive">Current</Chip>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-indigo-300">
                          <span className="font-medium">{exp.company}</span>
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/60 hover:text-white transition-colors"
                              aria-label={`Visit ${exp.company} website`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="text-right text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 space-y-2">
                      {exp.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-2 text-white/80">
                          <div className="mt-2 h-1 w-1 rounded-full bg-white/40 flex-shrink-0" />
                          <p>{desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium text-emerald-300">
                          <TrendingUp className="h-4 w-4" />
                          Key Achievements
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <Chip key={i} tone="positive">{achievement}</Chip>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-300">
                        <Code className="h-4 w-4" />
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Chip key={i} tone="blue">{tech}</Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={withDelay(experiences.length + 1)} className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/20">
                <Code className="h-6 w-6 text-indigo-300" />
              </div>
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-sm text-white/60">Different Companies</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
                <Users className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="text-2xl font-bold text-white">60+</div>
              <div className="text-sm text-white/60">Students Mentored</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                <Award className="h-6 w-6 text-purple-300" />
              </div>
              <div className="text-2xl font-bold text-white">4.0</div>
              <div className="text-sm text-white/60">GPA Maintained</div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}