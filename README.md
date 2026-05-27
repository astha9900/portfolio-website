# 👩‍💻 Astha Bharti — Personal Portfolio Website

A fast, modern, and responsive personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.

## ✨ Features

- **Hero Section** — Animated introduction with name, role, and CTA buttons
- **About Me** — Background, education, and what drives me as a developer
- **Skills Showcase** — Visual grid of technologies and tools I work with
- **Projects Gallery** — Featured projects with descriptions, tech stack, and live/GitHub links
- **Experience Timeline** — Education and work experience in a clean timeline layout
- **Contact Section** — Direct email link and social profile buttons
- **Dark / Light Mode** — System-preference aware theme toggle
- **Smooth Animations** — Page transitions and scroll animations via Framer Motion
- **Fully Responsive** — Optimised for mobile, tablet, and desktop
- **Fast Performance** — Static generation with Next.js for near-instant load times

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=white)

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and page transitions |
| shadcn/ui + Radix UI | Accessible UI components |
| next-themes | Dark/Light mode support |
| Vercel Analytics | Page view tracking |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/astha9900/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── page.tsx            # Home page (all sections)
│   ├── layout.tsx          # Root layout with theme provider
│   └── globals.css         # Global styles
│
├── components/
│   ├── Hero.tsx            # Animated hero section
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Tech stack grid
│   ├── Projects.tsx        # Project cards with links
│   ├── Experience.tsx      # Timeline component
│   ├── Contact.tsx         # Contact form / links
│   ├── Navbar.tsx          # Responsive navigation
│   └── ui/                 # shadcn/ui components
│
├── lib/
│   └── utils.ts            # Utility functions
│
└── public/
    └── images/             # Profile photo, project screenshots
```

## 🌐 Sections

| Section | Description |
|---------|-------------|
| Hero | Name, title, tagline, CTA buttons |
| About | Bio, education (Chandigarh University), interests |
| Skills | Frontend, Backend, Database, Tools — all with icons |
| Projects | Featured projects with live demo and GitHub links |
| Contact | Email, LinkedIn, GitHub links |

## 📄 License

MIT © [Astha Bharti](https://github.com/astha9900)
