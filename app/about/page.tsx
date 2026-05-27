"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Award, Briefcase, GraduationCap, Code2, Heart } from "lucide-react"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Angular"], color: "from-rose-400 to-pink-500" },
  { category: "Backend", items: ["Node.js", "Express.js", "Python", "Java", "REST APIs"], color: "from-violet-400 to-purple-500" },
  { category: "Database & ORM", items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Mongoose"], color: "from-amber-400 to-orange-500" },
  { category: "AI / ML", items: ["OpenCV", "TensorFlow", "MediaPipe", "Computer Vision"], color: "from-emerald-400 to-teal-500" },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "Vercel", "Postman", "VS Code"], color: "from-sky-400 to-blue-500" },
]

const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium text-primary tracking-widest">ABOUT ME</p>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Building Digital Experiences
            </h1>

            {/* Intro card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full border border-primary/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full border border-accent/10"
              />
              <div className="relative z-10 flex items-start gap-4">
                <div className="text-5xl shrink-0">👩‍💻</div>
                <div className="space-y-3">
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    Hi! I&apos;m Astha — a passionate full-stack developer who loves crafting beautiful, accessible digital experiences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My sweet spot is the intersection of great design and clean engineering. I build things that not only look stunning but are also fast, accessible, and maintainable. Currently I&apos;m leveling up in system design and cloud architecture while applying for full-time SDE roles.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["📍 India", "🎓 Chandigarh University", "💼 Open to Work", "⚡ 13+ Projects"].map(badge => (
                      <span key={badge} className="text-sm px-3 py-1 rounded-full bg-background/70 border border-border text-muted-foreground">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── EXPERIENCE ── */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Experience</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>

            <motion.div
              variants={timelineItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-gradient-to-b from-primary via-accent to-transparent"
              style={{ borderImageSlice: 1, borderImageSource: "linear-gradient(to bottom, var(--primary), var(--accent))" }}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background shadow-md shadow-primary/30"
              />

              <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Web Developer Intern</h3>
                    <p className="text-primary font-medium mt-0.5">Stunhaul Private Limited</p>
                    <p className="text-sm text-muted-foreground">Mohali, Punjab</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/5 border border-primary/20 px-3 py-1 rounded-full font-medium shrink-0">
                    Nov 2025 – April 2026
                  </span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    "Developed responsive web applications using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB",
                    "Collaborated with the team to implement RESTful APIs, improving backend scalability by 20%",
                    "Utilized Tailwind CSS and Bootstrap for modern UI design, reducing development time by 15%",
                    "Integrated Git for version control within agile development cycles",
                  ].map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </section>

          {/* ── EDUCATION ── */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400/20 to-purple-500/20 border border-violet-400/30 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-violet-500" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Education</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-violet-400/30 to-transparent" />
            </motion.div>

            <div className="space-y-4 pl-8 border-l-2 border-border/50">
              {[
                {
                  degree: "Bachelor of Technology — Computer Science Engineering",
                  school: "Chandigarh University, Mohali",
                  period: "Aug 2021 – May 2025",
                  detail: "CGPA: 7.54",
                  dot: "from-violet-400 to-purple-500",
                },
                {
                  degree: "Intermediate (12th Grade)",
                  school: "LND College, Motihari, Bihar",
                  period: "Apr 2019 – Mar 2020",
                  detail: "Percentage: 78.0%",
                  dot: "from-pink-400 to-rose-500",
                },
              ].map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-[37px] top-3 w-4 h-4 rounded-full bg-gradient-to-br ${edu.dot} border-2 border-background shadow-sm`} />
                  <div className="rounded-xl border border-border/50 bg-card/40 p-5 hover:border-primary/20 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground mt-0.5">{edu.school}</p>
                        <p className="text-sm text-primary font-medium mt-1">{edu.detail}</p>
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full shrink-0">{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── SKILLS ── */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-amber-500" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Skills</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl border border-border/50 bg-card/40 p-5 hover:border-primary/20 transition-all"
                >
                  <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-white mb-4`}>
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-sm rounded-full bg-background border border-border text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── ACHIEVEMENTS ── */}
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center">
                <Award className="h-5 w-5 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-serif font-bold">Achievements</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/30 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: "🏆", title: "CodeKaze Sept 2024", desc: "All India Rank 740 — Top competitive coding performance" },
                { emoji: "💯", title: "LeetCode", desc: "400+ DSA problems solved across arrays, DP, graphs & more" },
                { emoji: "📜", title: "Java Specialization", desc: "Coursera — LearnQuest certified Java developer" },
                { emoji: "🎓", title: "Web Dev Certification", desc: "University of London — JavaScript & MongoDB" },
                { emoji: "⭐", title: "NPTEL Top 5%", desc: "Probability & Statistics — National ranking" },
                { emoji: "🤖", title: "AI Systems", desc: "Built 2 real-world computer vision systems with 85–90% accuracy" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/40 p-5 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── FUN SECTION ── */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 text-center"
          >
            <Heart className="h-8 w-8 text-primary mx-auto mb-4" fill="currentColor" />
            <h3 className="text-xl font-serif font-bold mb-3">When I&apos;m not coding...</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["🎨 Designing UIs", "📖 Reading tech blogs", "🧩 Solving DSA problems", "☕ Drinking chai", "🎵 Listening to music", "🚀 Learning new frameworks"].map(item => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-background/70 border border-border text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  )
}
