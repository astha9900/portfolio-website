"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Award, Briefcase, GraduationCap } from "lucide-react"

export default function AboutPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-20"
          >
            {/* Header */}
            <div className="space-y-6">
              <span className="text-sm font-mono text-muted-foreground tracking-wider">ABOUT ME</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Building Digital Experiences
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                I'm a passionate developer focused on creating accessible, pixel-perfect user interfaces that blend
                thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                development, creating experiences that not only look great but are meticulously built for performance
                and usability.
              </p>
            </div>

            {/* Experience */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-l-2 border-border pl-8 space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold">Web Developer Intern</h3>
                    <span className="text-sm text-muted-foreground">July 2025 - Present</span>
                  </div>
                  <p className="text-muted-foreground">Stunhaul Private Limited • Mohali, Punjab</p>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li>
                      • Developed responsive web applications using HTML, CSS, JavaScript, NodeJS, ExpressJS, and
                      MongoDB
                    </li>
                    <li>• Collaborated with team to implement RESTful APIs, improving scalability by 20%</li>
                    <li>
                      • Utilized Tailwind CSS and Bootstrap for modern UI design, reducing development time by 15%
                    </li>
                    <li>• Integrated Git for version control in agile development cycles</li>
                  </ul>
                </div>
              </motion.div>
            </section>

            {/* Education */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border-l-2 border-border pl-8 space-y-2"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                    <span className="text-sm text-muted-foreground">Aug 2021 - May 2025</span>
                  </div>
                  <p className="text-muted-foreground">Chandigarh University, Mohali</p>
                  <p className="text-muted-foreground">Computer Science Engineering • CGPA: 7.54</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="border-l-2 border-border pl-8 space-y-2"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-semibold">Intermediate</h3>
                    <span className="text-sm text-muted-foreground">April 2019 - March 2020</span>
                  </div>
                  <p className="text-muted-foreground">LND College, Motihari, Bihar</p>
                  <p className="text-muted-foreground">Percentage: 78.0%</p>
                </motion.div>
              </div>
            </section>

            {/* Achievements */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold">Achievements</h2>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold">Coding Competitions</h3>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li>• Solved over 400+ DSA problems on LeetCode</li>
                    <li>• Secured 740 All India Rank in CodeKaze Sept 2024</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold">Certifications</h3>
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    <li>• Specialization in Java by LearnQuest (Coursera)</li>
                    <li>• Web Application Development with JavaScript and MongoDB (University of London)</li>
                    <li>• Top 5% in NPTEL certification course on Probability and Statistics</li>
                  </ul>
                </motion.div>
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  )
}
