"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-20 right-[10%] text-6xl opacity-10"
            >
              ✿
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute top-40 left-[15%] text-5xl opacity-10"
            >
              ❀
            </motion.div>
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              className="absolute bottom-32 right-[20%] text-7xl opacity-10"
            >
              ✾
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 px-4 py-2 rounded-full border border-primary/30"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide">
                  FULL-STACK DEVELOPER
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-balance bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent"
              >
                Astha Bharti
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl text-pretty leading-relaxed"
              >
                Crafting beautiful, accessible digital experiences with creativity and precision. Currently bringing
                innovative ideas to life as a Web Developer Intern at Stunhaul Private Limited.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-primary via-accent to-primary hover:shadow-xl hover:shadow-primary/30 transition-all bg-[length:200%_100%] hover:bg-right"
                >
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-transparent transition-all"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4 pt-8"
              >
                {[
                  { icon: Github, href: "https://github.com/astha9900", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/astha-bharti-263586231/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:asthabharti9900@gmail.com", label: "Email" },
                  { icon: Code2, href: "https://codolio.com/profile/ljs5nQ2r", label: "Codolio" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="py-20 border-t border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-12">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wider">
                TECHNICAL EXPERTISE
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-primary via-accent to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                  gradient: "from-primary/10 via-accent/10 to-primary/5",
                },
                {
                  title: "Backend Development",
                  skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
                  gradient: "from-accent/10 via-primary/10 to-accent/5",
                },
                {
                  title: "AI & Machine Learning",
                  skills: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
                  gradient: "from-primary/5 via-accent/10 to-primary/10",
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`space-y-4 p-6 rounded-2xl bg-gradient-to-br ${category.gradient} border border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/10`}
                >
                  <h3 className="text-xl font-serif font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-background/60 backdrop-blur-sm text-foreground border border-primary/30 hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
