"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string | null
  githubUrl: string
  period: string
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-secondary">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-muted-foreground">{project.period}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <Button asChild variant="default">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/btn">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </Button>
            )}
            <Button asChild variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
