"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Wanderlust",
    description:
      "A web-based platform for short-term property rentals, allowing guests to easily search and book accommodations. Features comprehensive property listings with descriptions, images, pricing, and a review & rating system.",
    image: "/modern-property-rental-website-interface-with-sear.jpg",
    tags: ["HTML", "CSS", "JavaScript", "NodeJS", "ExpressJS", "MongoDB"],
    liveUrl: "https://wanderlust-w927.onrender.com/",
    githubUrl: "https://github.com/astha9900",
    period: "Jan - May 2025",
  },
  {
    title: "Virtual Mouse Using Hand Gesture",
    description:
      "An innovative virtual mouse system utilizing hand-tracking algorithms with MediaPipe, achieving 90% accuracy in gesture recognition. Features seamless clicking, scrolling, dragging, and right/left-click recognition.",
    image: "/hand-gesture-recognition-virtual-mouse-interface-w.jpg",
    tags: ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
    liveUrl: null,
    githubUrl: "https://github.com/astha9900/Virtual-Mouse",
    period: "May - Sept 2024",
  },
  {
    title: "Driver Drowsiness System",
    description:
      "Real-time drowsiness detection system leveraging facial landmarks and Haar Cascade classifiers to monitor driver alertness. Features audio alerts for immediate intervention, achieving over 85% precision across diverse lighting conditions.",
    image: "/driver-drowsiness-detection-system-with-facial-rec.jpg",
    tags: ["Python", "OpenCV", "Haar Cascade", "ML"],
    liveUrl: null,
    githubUrl: "https://github.com/astha9900/Driver-Drowsiness-System",
    period: "Jan - Apr 2024",
  },
]

export default function ProjectsPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto space-y-12"
          >
            {/* Header */}
            <div className="space-y-6">
              <span className="text-sm font-mono text-muted-foreground tracking-wider">SELECTED WORK</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">Projects</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                A collection of projects showcasing my expertise in full-stack development, machine learning, and
                creative problem-solving.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-16 pt-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  )
}
