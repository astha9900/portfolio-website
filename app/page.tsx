"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useEffect, useState, useRef } from "react"

const roles = ["Full Stack Developer", "React & Next.js Dev", "UI/UX Enthusiast", "Problem Solver"]

const stats = [
  { value: "13+", label: "Projects Built" },
  { value: "400+", label: "DSA Problems" },
  { value: "2", label: "AI Systems" },
  { value: "3+", label: "Years Coding" },
]

const featuredProjects = [
  {
    emoji: "🛍️",
    title: "Skincare E-Commerce",
    description: "Full-stack e-commerce platform with cart, wishlist, admin dashboard, and secure auth. Built with Next.js, Prisma & Neon PostgreSQL.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    liveUrl: "https://skincare-ecommerce-zxlk.vercel.app",
    githubUrl: "https://github.com/astha9900/Skincare",
    gradient: "from-rose-400 via-pink-300 to-fuchsia-400",
    bg: "from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30",
  },
  {
    emoji: "🌍",
    title: "Wanderlust",
    description: "Travel listing platform with interactive maps, user reviews, image uploads, and authentication. Like Airbnb for adventure seekers.",
    tags: ["Node.js", "MongoDB", "Express", "Mapbox"],
    liveUrl: "https://wanderlust-w927.onrender.com",
    githubUrl: "https://github.com/astha9900/Wanderlust..",
    gradient: "from-violet-400 via-purple-300 to-indigo-400",
    bg: "from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30",
  },
  {
    emoji: "📚",
    title: "SkillVista",
    description: "Curated developer learning hub with skill tracks, categorized resources, and progress tracking for frontend, backend & DSA.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://skill-vista-five.vercel.app",
    githubUrl: "https://github.com/astha9900/SkillVista",
    gradient: "from-amber-400 via-orange-300 to-pink-400",
    bg: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
  },
]

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express", "Python",
  "PostgreSQL", "MongoDB", "Prisma", "Tailwind CSS", "Framer Motion", "Docker",
]

function FloatingOrb({ className }: { className: string }) {
  return (
    <motion.div
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    />
  )
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 400], [0, -80])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i: number) => (i + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Floating background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <FloatingOrb className="w-[600px] h-[600px] bg-primary top-[-200px] right-[-100px]" />
        <FloatingOrb className="w-[500px] h-[500px] bg-accent top-[30%] left-[-150px]" />
        <FloatingOrb className="w-[400px] h-[400px] bg-primary bottom-[-100px] right-[20%]" />
      </div>

      <main className="relative z-10">

        {/* ── HERO ── */}
        <section className="min-h-screen flex items-center justify-center py-20 relative">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-5xl mx-auto px-6 text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
            >
              <motion.span animate={{ rotate: [0, 20, -10, 20, 0] }} transition={{ duration: 1.5, delay: 0.8 }} className="text-xl">
                👋
              </motion.span>
              <span className="text-sm font-medium text-primary tracking-wide">Hello, World!</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%] animate-[shimmer_3s_linear_infinite]">
                Astha Bharti
              </span>
            </motion.h1>

            {/* Animated role */}
            <div className="h-12 flex items-center justify-center mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-3xl font-medium text-muted-foreground"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              I craft beautiful, high-performance web apps that users love. From elegant UIs to robust backends — I bring ideas to life with clean code and thoughtful design.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary via-accent to-primary hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 bg-[length:200%] animate-[shimmer_3s_linear_infinite]">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all backdrop-blur-sm">
                <Link href="/contact">Let's Connect</Link>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center gap-5"
            >
              {[
                { icon: Github, href: "https://github.com/astha9900", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/astha-bharti-263586231/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:asthabharti9900@gmail.com", label: "Email" },
                { icon: Code2, href: "https://codolio.com/profile/ljs5nQ2r", label: "Codolio" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
            </motion.div>
          </motion.div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16 border-t border-border/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center group"
                >
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="py-24 border-t border-border/30">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-16"
            >
              <div>
                <p className="text-sm font-medium text-primary tracking-widest mb-2">FEATURED WORK</p>
                <h2 className="text-4xl font-serif font-bold">Top Projects</h2>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-border via-primary/20 to-transparent" />
              <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary shrink-0">
                <Link href="/projects">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-2xl border border-border/50 bg-gradient-to-br ${project.bg} p-6 flex flex-col gap-4 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all group overflow-hidden`}
                >
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-80`} />

                  {/* Emoji */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="text-4xl"
                  >
                    {project.emoji}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 text-xs rounded-full bg-background/70 border border-border text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> Source
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="py-24 border-t border-border/30">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-sm font-medium text-primary tracking-widest mb-3">TECH STACK</p>
              <h2 className="text-3xl font-serif font-bold">Tools I love working with</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-4 py-2 rounded-full border border-border bg-card/50 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-default backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 border-t border-border/30">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-12 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-pulse" />
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-5xl mb-6"
                >
                  ✨
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                  Let&apos;s build something{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">amazing</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  I&apos;m actively looking for full-time SDE roles. If you have an exciting opportunity or just want to say hi, I&apos;d love to hear from you!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="hover:scale-105 transition-transform bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30">
                    <a href="mailto:asthabharti9900@gmail.com">
                      <Mail className="mr-2 h-4 w-4" /> Say Hello
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="hover:scale-105 transition-transform border-primary/30">
                    <Link href="/about">My Story</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

    </div>
  )
}
