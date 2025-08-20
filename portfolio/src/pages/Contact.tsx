import { motion, useReducedMotion } from "framer-motion"
import { Mail, Github, Linkedin, MapPin, Clock, Send, FileText, Coffee, MessageCircle } from "lucide-react"
import React from "react"

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

export const Contact = () => {
  const prefersReduced = useReducedMotion()
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = formData.subject || "Portfolio Contact"
    const body = `Hi William,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    const mailtoLink = `mailto:wacostal@macalester.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "wacostal@macalester.edu",
      href: "mailto:wacostal@macalester.edu",
      description: "Best way to reach me",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "williamacostalora",
      href: "https://github.com/williamacostalora",
      description: "Check out my code",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "william-acosta-lora",
      href: "https://www.linkedin.com/in/william-acosta-lora-2a288829a/",
      description: "Let's connect professionally",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: "../resume.pdf",
      description: "View my full experience",
      gradient: "from-purple-400 to-purple-600"
    }
  ]

  const quickTopics = [
    "💼 Job Opportunities",
    "🤝 Collaboration",
    "🎓 Mentorship",
    "☕ Coffee Chat",
    "🚀 Project Ideas",
    "📚 STEM Outreach"
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
              Get In Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              I'm always excited to connect with fellow developers, potential collaborators, and anyone passionate about technology
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div variants={withDelay(1)} className="space-y-8">
              {/* Intro */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-indigo-500/20 p-2">
                    <MessageCircle className="h-5 w-5 text-indigo-300" />
                  </div>
                  <h2 className="text-xl font-semibold">Let's Connect</h2>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Whether you're interested in discussing opportunities, collaborating on projects, or just want to chat about tech, 
                  I'd love to hear from you. I'm particularly passionate about building inclusive tech communities and mentoring fellow students.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    variants={withDelay(index + 2)}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${method.gradient} shadow-lg`}>
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white group-hover:text-indigo-200 transition-colors">
                          {method.label}
                        </h3>
                      </div>
                      <p className="text-sm text-white/60">{method.description}</p>
                      <p className="text-sm text-white/80 font-mono">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Info */}
              <motion.div variants={withDelay(6)} className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-500/20 p-2">
                      <MapPin className="h-5 w-5 text-emerald-300" />
                    </div>
                    <h3 className="font-semibold">Location & Availability</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-white/60" />
                      <span className="text-white/80">Based in St. Paul, Minnesota</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-white/60" />
                      <span className="text-white/80">Usually respond within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-white/60" />
                      <span className="text-white/80">Always up for a coffee chat!</span>
                    </div>
                  </div>
                </div>

                {/* Common Topics */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="mb-3 font-semibold">Love to discuss:</h3>
                  <div className="flex flex-wrap gap-2">
                    {quickTopics.map((topic, index) => (
                      <Chip key={index} tone={index % 3 === 0 ? "positive" : index % 3 === 1 ? "blue" : "neutral"}>
                        {topic}
                      </Chip>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={withDelay(2)} className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/20 p-2">
                    <Send className="h-5 w-5 text-purple-300" />
                  </div>
                  <h2 className="text-xl font-semibold">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white/80">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 transition-all hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Opening Email...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-4 rounded-lg bg-blue-500/10 border border-blue-500/20 p-3">
                  <p className="text-xs text-blue-200">
                    💡 This form opens your email client with the message pre-filled. 
                    Alternatively, you can email me directly at wacostal@macalester.edu
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <motion.div variants={withDelay(3)} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <h3 className="mb-3 font-semibold text-white">What to Expect</h3>
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <p>I typically respond within 24 hours during weekdays</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <p>For urgent matters, feel free to mention it in the subject line</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <p>Always happy to schedule a call or video chat for deeper discussions</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={withDelay(4)} className="text-center">
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="mb-4 text-2xl font-semibold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h2>
              <p className="mb-6 text-white/80">
                Whether you have an exciting project in mind, want to collaborate, or just want to connect, 
                I'm always eager to meet new people in the tech community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:wacostal@macalester.edu"
                  className=" !text-white inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-900/30 transition-all hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <Mail className="h-4 w-4" />
                  Start a Conversation
                </a>
                <a
                  href="../resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}