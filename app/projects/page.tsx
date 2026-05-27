"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ExternalLink, Github, Star, Sparkles } from "lucide-react"
import { useState } from "react"

type Category = "All" | "Web" | "AI/ML" | "Backend"

interface Project {
  emoji: string
  title: string
  description: string
  tags: string[]
  liveUrl: string | null
  githubUrl: string
  period: string
  category: Category[]
  featured?: boolean
  gradient: string
  bg: string
}

const projects: Project[] = [
  {
    emoji: "🛍️",
    title: "Skincare E-Commerce",
    description: "Full-stack e-commerce platform with product catalog, cart, wishlist, admin dashboard, order management, and secure authentication. Deployed on Vercel with Neon PostgreSQL.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js", "Tailwind CSS"],
    liveUrl: "https://skincare-ecommerce-zxlk.vercel.app",
    githubUrl: "https://github.com/astha9900/Skincare",
    period: "2025",
    category: ["Web"],
    featured: true,
    gradient: "from-rose-400 via-pink-300 to-fuchsia-400",
    bg: "from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30",
  },
  {
    emoji: "🌍",
    title: "Wanderlust",
    description: "Full-stack travel listing platform with user authentication, image uploads via Cloudinary, interactive Mapbox maps, reviews, and complete CRUD for listings.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "Mapbox"],
    liveUrl: "https://wanderlust-w927.onrender.com",
    githubUrl: "https://github.com/astha9900/Wanderlust..",
    period: "Jan – May 2025",
    category: ["Web", "Backend"],
    featured: true,
    gradient: "from-violet-400 via-purple-300 to-indigo-400",
    bg: "from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30",
  },
  {
    emoji: "📚",
    title: "SkillVista",
    description: "Curated developer learning platform with categorized resources, skill tracks, and progress tracking for frontend, backend, and DSA learning paths.",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://skill-vista-five.vercel.app",
    githubUrl: "https://github.com/astha9900/SkillVista",
    period: "2024",
    category: ["Web"],
    featured: true,
    gradient: "from-amber-400 via-orange-300 to-pink-400",
    bg: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
  },
  {
    emoji: "🗂️",
    title: "TaskFlow",
    description: "Full-stack Kanban project management app with drag-and-drop task boards, JWT auth with refresh tokens, and project organization.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT", "Prisma", "@hello-pangea/dnd"],
    liveUrl: "https://taskflow-app-phi-seven.vercel.app",
    githubUrl: "https://github.com/astha9900/taskflow-app",
    period: "2025",
    category: ["Web", "Backend"],
    gradient: "from-sky-400 via-cyan-300 to-teal-400",
    bg: "from-sky-50 to-teal-50 dark:from-sky-950/30 dark:to-teal-950/30",
  },
  {
    emoji: "🔐",
    title: "Auth API",
    description: "Production-ready JWT authentication REST API with access + refresh token rotation, rate limiting (5 req/15min), bcrypt hashing, and Zod validation.",
    tags: ["Express.js", "Prisma", "PostgreSQL", "JWT", "bcrypt", "Helmet"],
    liveUrl: "https://auth-frontend-inky.vercel.app",
    githubUrl: "https://github.com/astha9900/auth-api",
    period: "2025",
    category: ["Backend"],
    gradient: "from-emerald-400 via-green-300 to-teal-400",
    bg: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
  },
  {
    emoji: "🏠",
    title: "Property Listing",
    description: "Real estate listing platform with search filters, property details, responsive UI, and modern card layouts for browsing rentals and properties.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://property-listing-lemon-two.vercel.app",
    githubUrl: "https://github.com/astha9900/property-listing",
    period: "2024",
    category: ["Web"],
    gradient: "from-blue-400 via-indigo-300 to-violet-400",
    bg: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
  },
  {
    emoji: "🚗",
    title: "Fleet Booking",
    description: "Vehicle fleet management and booking system with vehicle listings, booking calendar, admin panel, and user management.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://fleet-booking-eight.vercel.app",
    githubUrl: "https://github.com/astha9900/fleet-booking",
    period: "2024",
    category: ["Web", "Backend"],
    gradient: "from-orange-400 via-amber-300 to-yellow-400",
    bg: "from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30",
  },
  {
    emoji: "🤖",
    title: "Smart Restaurant System",
    description: "AI-powered restaurant management system with intelligent ordering, menu management, table reservations, and real-time kitchen updates.",
    tags: ["Next.js", "AI", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://smart-restaurant-system-main.vercel.app",
    githubUrl: "https://github.com/astha9900/smart-restaurant-system-main",
    period: "2024",
    category: ["Web", "Backend"],
    gradient: "from-red-400 via-rose-300 to-pink-400",
    bg: "from-red-50 to-rose-50 dark:from-red-950/30 dark:to-pink-950/30",
  },
  {
    emoji: "🌐",
    title: "VersaiTech",
    description: "Modern company website for a tech firm with animated sections, service showcases, testimonials, and a clean professional design.",
    tags: ["React", "Vite", "Tailwind CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/astha9900/versaiTech",
    period: "2024",
    category: ["Web"],
    gradient: "from-cyan-400 via-sky-300 to-blue-400",
    bg: "from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-950/30",
  },
  {
    emoji: "📋",
    title: "MPloyChek",
    description: "HR and employee management platform with onboarding workflows, attendance tracking, payroll, and reporting built with Angular and TypeScript.",
    tags: ["Angular", "Express.js", "TypeScript", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/astha9900/MPloyChek",
    period: "2024",
    category: ["Web", "Backend"],
    gradient: "from-purple-400 via-violet-300 to-indigo-400",
    bg: "from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30",
  },
  {
    emoji: "😴",
    title: "Driver Drowsiness System",
    description: "Real-time drowsiness detection using facial landmarks and Haar Cascade classifiers. Achieves 85%+ precision and triggers audio alerts when drowsiness is detected.",
    tags: ["Python", "OpenCV", "TensorFlow", "Haar Cascade", "dlib"],
    liveUrl: null,
    githubUrl: "https://github.com/astha9900/Driver-Drowsiness-System",
    period: "Jan – Apr 2024",
    category: ["AI/ML"],
    gradient: "from-slate-400 via-gray-300 to-zinc-400",
    bg: "from-slate-50 to-gray-50 dark:from-slate-950/30 dark:to-gray-950/30",
  },
  {
    emoji: "🖱️",
    title: "Virtual Mouse",
    description: "Gesture-controlled virtual mouse using hand-tracking algorithms with MediaPipe. Achieves 90% accuracy for click, scroll, drag, and right-click gestures.",
    tags: ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
    liveUrl: null,
    githubUrl: "https://github.com/astha9900/Virtual-Mouse",
    period: "May – Sep 2024",
    category: ["AI/ML"],
    gradient: "from-teal-400 via-emerald-300 to-green-400",
    bg: "from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30",
  },
  {
    emoji: "💼",
    title: "Portfolio Website",
    description: "This very portfolio — built with Next.js, Framer Motion animations, dark/light mode, and a custom rose-lavender design system.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://astha-portfolio-pi.vercel.app",
    githubUrl: "https://github.com/astha9900/portfolio-website",
    period: "2025",
    category: ["Web"],
    gradient: "from-pink-400 via-rose-300 to-red-400",
    bg: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
  },
]

const categories: Category[] = ["All", "Web", "Backend", "AI/ML"]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All")

  const featured = projects.filter(p => p.featured)
  const filtered = projects.filter(p =>
    active === "All" ? true : p.category.includes(active)
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-medium text-primary tracking-widest">SELECTED WORK</p>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              13 projects spanning full-stack web apps, AI systems, REST APIs, and more — each built to solve a real problem.
            </p>
          </motion.div>

          {/* Featured - Top 3 */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <Star className="h-5 w-5 text-primary fill-primary" />
              <h2 className="text-2xl font-serif font-bold">Featured Projects</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featured.map((project, i) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className={`relative flex flex-col rounded-2xl border border-border/50 bg-gradient-to-br ${project.bg} overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all group`}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between">
                      <motion.span
                        whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl"
                      >
                        {project.emoji}
                      </motion.span>
                      <span className="text-xs text-muted-foreground bg-background/60 px-2.5 py-1 rounded-full border border-border">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 text-xs rounded-full bg-background/70 border border-border text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-1 border-t border-border/50">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors">
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-4 w-4" /> Source
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* All Projects */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-serif font-bold">All Projects</h2>
              </div>
              <div className="flex-1 h-px hidden sm:block bg-gradient-to-r from-primary/30 to-transparent" />
              {/* Filter tabs */}
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      active === cat
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                        : "border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {filtered.map(project => (
                  <motion.article
                    key={project.title}
                    variants={item}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative flex flex-col rounded-xl border border-border/50 bg-gradient-to-br ${project.bg} overflow-hidden hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 transition-all group`}
                  >
                    <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                    <div className="p-5 flex flex-col gap-3 flex-1">
                      <div className="flex items-start justify-between">
                        <span className="text-3xl">{project.emoji}</span>
                        {project.featured && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20 font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm mb-1.5 group-hover:text-primary transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full bg-background/70 border border-border text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] rounded-full bg-background/70 border border-border text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-3 pt-1 border-t border-border/40">
                        {project.liveUrl ? (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                            <ExternalLink className="h-3 w-3" /> Live
                          </a>
                        ) : (
                          <span className="text-xs text-muted-foreground/50">No live demo</span>
                        )}
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto">
                          <Github className="h-3 w-3" /> Code
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>

        </div>
      </main>
    </div>
  )
}
