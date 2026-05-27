"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Github, Linkedin, Mail, Phone, Code2, ExternalLink } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "asthabharti9900@gmail.com",
    href: "mailto:asthabharti9900@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9661644321",
    href: "tel:+919661644321",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/astha9900",
    href: "https://github.com/astha9900",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Astha Bharti",
    href: "https://www.linkedin.com/in/astha-bharti-263586231/",
  },
  {
    icon: Code2,
    label: "Codolio",
    value: "View Profile",
    href: "https://codolio.com/profile/ljs5nQ2r",
  },
]

const codingProfiles = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Astha9900/",
    description: "400+ problems solved",
  },
  {
    name: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/user/singhastha614/",
    description: "Active contributor",
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/singhastha614",
    description: "Problem solving",
  },
]

export default function ContactPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-16"
          >
            {/* Header */}
            <div className="space-y-6">
              <span className="text-sm font-mono text-muted-foreground tracking-wider">GET IN TOUCH</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">Let's Connect</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                If you'd like to discuss a project or just say hi, I'm always down to chat. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            {/* Contact Links */}
            <section className="space-y-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-foreground transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                    {link.href.startsWith("http") && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                  </motion.a>
                )
              })}
            </section>

            {/* Coding Profiles */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold">Coding Profiles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {codingProfiles.map((profile, index) => (
                  <motion.a
                    key={profile.name}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-lg border border-border hover:border-foreground transition-colors space-y-2 group"
                  >
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{profile.name}</h3>
                    <p className="text-sm text-muted-foreground">{profile.description}</p>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.a>
                ))}
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  )
}
