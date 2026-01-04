"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    image: "🛍️",
    link: "#",
    github: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered tool that generates marketing copy, blog posts, and social media content using GPT-4.",
    tech: ["React", "OpenAI", "Node.js", "MongoDB"],
    image: "🤖",
    link: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets, data visualization, and reporting.",
    tech: ["TypeScript", "D3.js", "Express", "Redis"],
    image: "📊",
    link: "#",
    github: "#",
  },
  {
    title: "Social Media App",
    description: "Modern social platform with real-time messaging, stories, and advanced privacy controls.",
    tech: ["React Native", "Firebase", "GraphQL"],
    image: "📱",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio CMS",
    description: "Headless CMS for creatives to showcase their work with custom templates and SEO optimization.",
    tech: ["Next.js", "Sanity", "Vercel"],
    image: "🎨",
    link: "#",
    github: "#",
  },
  {
    title: "Task Automation Tool",
    description: "Workflow automation platform connecting 100+ apps with no-code visual builder.",
    tech: ["Vue.js", "Python", "Docker", "AWS"],
    image: "⚡",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding blueprint-grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg md:text-xl text-muted max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "0.1s" }}
          >
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`group relative glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-light/20 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-6xl mb-4">{project.image}</div>

                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-sm font-medium text-accent hover:text-accent-light transition-colors flex items-center gap-1"
                  >
                    Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    className="text-sm font-medium text-muted hover:text-accent transition-colors flex items-center gap-1"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-all"
          >
            Want to see more? Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
