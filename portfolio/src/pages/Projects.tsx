import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Bot, Droplet, Calendar, Code, Zap } from "lucide-react"
import React from "react";

type ChipProps = { children: React.ReactNode; tone?: "neutral" | "positive" | "blue" | "purple" }
const Chip = ({ children, tone = "neutral" }: ChipProps) => (
  <span
    className={[
      "rounded-full px-2 py-1 text-xs font-medium",
      tone === "positive"
        ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
        : tone === "blue"
        ? "border border-blue-400/30 bg-blue-400/10 text-blue-200"
        : tone === "purple"
        ? "border border-purple-400/30 bg-purple-400/10 text-purple-200"
        : "border border-white/10 bg-white/10 text-white/80",
    ].join(" ")}
  >
    {children}
  </span>
)

interface Project {
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  features: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  category: "web" | "mobile" | "ai" | "automation"
  status: "completed" | "in-progress" | "planned"
  icon: any
  gradient: string
}

export const Projects = () => {
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

  const projects: Project[] = [
    {
      title: "Fresh Start Cleaning - Business Suite",
      description: "Complete business automation solution including responsive website and AI-powered email generation tool",
      longDescription: "Built a comprehensive solution for a family cleaning business, featuring a modern React website and a sophisticated Python desktop application that uses AI to generate personalized prospect emails.",
      technologies: ["React", "Python", "Tkinter", "AI/ML", "Ollama API", "SMTP"],
      features: ["Responsive business website", "AI email customization", "90% reduction in outreach time", "Batch email campaigns"],
      liveUrl: "https://freshcleaningcolouisiana.com/",
      githubUrl:"https://github.com/williamacostalora/fresh_start_email_generator",
      category: "automation",
      status: "completed",
      icon: Zap,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "MOMO Fit - Social Fitness App",
      description: "Real-time iOS app for tracking and sharing gym activity with friends, featuring animated mascot and social features",
      longDescription: "Designed a comprehensive social fitness platform that combines workout tracking with social engagement, featuring real-time updates, push notifications, and a custom animated mascot.",
      technologies: ["Swift", "SwiftUI", "Firebase", "Firestore", "Push Notifications"],
      features: ["Real-time activity sharing", "Animated mascot", "Friend syncing", "Custom messages", "Pastel-themed UI"],
      category: "mobile",
      status: "completed",
      githubUrl:"https://github.com/Nadizdom34/momodev",
      icon: Smartphone,
      gradient: "from-pink-400 to-rose-500"
    },
    {
      title: "WaterWise AI - Sustainability Consultant",
      description: "AI-powered water tracking tool that generates personalized usage scores and conservation insights",
      longDescription: "Created an intelligent water sustainability platform that analyzes usage patterns and provides personalized recommendations to help users reduce their environmental impact.",
      technologies: ["Next.js", "React", "Together AI API", "Vercel", "TypeScript"],
      features: ["Personalized water scores", "AI-powered insights", "Conservation recommendations", "Usage analytics"],
      liveUrl:"https://waterwise-wateruseconsultant-chat.vercel.app/",
      category: "ai",
      status: "completed",
      icon: Droplet,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "Portfolio Website",
      description: "Modern, accessible portfolio built with React, featuring animations and responsive design",
      longDescription: "Designed and developed this very portfolio using modern web technologies, focusing on accessibility, performance, and beautiful user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      features: ["Responsive design", "Smooth animations", "Dark theme", "Accessibility focus"],
      githubUrl: "https://github.com/williamacostalora/personalWebsite",
      category: "web",
      status: "completed",
      icon: Globe,
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "Portico Health Data Analytics Platform",
      description: "R-based data visualization platform for mapping healthcare access in Twin Cities communities",
      longDescription: "Developed comprehensive data analysis tools to identify healthcare gaps and support community health initiatives through advanced statistical modeling and visualization.",
      technologies: ["R", "Data Visualization", "Statistical Modeling", "GIS Mapping"],
      features: ["Community health mapping", "Statistical analysis", "Interactive visualizations", "Grant proposal support"],
      category: "web",
      status: "in-progress",
      icon: Calendar,
      gradient: "from-emerald-400 to-teal-500"
    }
  ]

  const categories = [
    { id: "all", label: "All Projects", icon: Code },
    { id: "web", label: "Web Apps", icon: Globe },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "ai", label: "AI/ML", icon: Bot },
    { id: "automation", label: "Automation", icon: Zap }
  ]

  const [selectedCategory, setSelectedCategory] = React.useState("all")

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
              Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Building solutions that make a real difference
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={withDelay(1)} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-900/30"
                    : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={withDelay(2)} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={withDelay(index + 3)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                {/* Project Icon/Header */}
                <div className="p-6 pb-4">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {project.status === "completed" && <Chip tone="positive">Completed</Chip>}
                      {project.status === "in-progress" && <Chip tone="blue">In Progress</Chip>}
                      {project.status === "planned" && <Chip>Planned</Chip>}
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 text-sm text-white/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-white/60">
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                          <div className="h-1 w-1 rounded-full bg-indigo-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-white/60">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Chip key={i}>{tech}</Chip>
                      ))}
                      {project.technologies.length > 4 && (
                        <Chip>+{project.technologies.length - 4} more</Chip>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t border-white/10 p-4 bg-white/5">
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500/20 px-3 py-2 text-sm font-medium text-indigo-200 transition-colors hover:bg-indigo-500/30"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/20"
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </a>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <div className="flex-1 text-center text-xs text-white/50 py-2">
                        Private Repository
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Stats */}
          <motion.div variants={withDelay(filteredProjects.length + 3)} className="grid gap-6 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">{projects.length}</div>
              <div className="text-sm text-white/60">Total Projects</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">{projects.filter(p => p.status === "completed").length}</div>
              <div className="text-sm text-white/60">Completed</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">{new Set(projects.flatMap(p => p.technologies)).size}</div>
              <div className="text-sm text-white/60">Technologies</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
              <div className="text-2xl font-bold text-white">{projects.filter(p => p.liveUrl).length}</div>
              <div className="text-sm text-white/60">Live Demos</div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}