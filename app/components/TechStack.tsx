"use client";

import { useEffect, useRef, useState } from "react";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
      { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700" },
      { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-teal-500" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
      { name: "Python", icon: "🐍", color: "from-blue-400 to-yellow-400" },
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-800" },
      { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: "🔀", color: "from-orange-500 to-red-600" },
      { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
      { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" },
      { name: "Figma", icon: "🎨", color: "from-purple-400 to-pink-500" },
    ],
  },
];

export default function TechStack() {
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
    <section
      id="tech"
      ref={sectionRef}
      className="section-padding mesh-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Tech Stack
          </h2>
          <p
            className={`text-lg md:text-xl text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {technologies.map((tech, idx) => (
            <div
              key={tech.category}
              className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {tech.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tech.items.map((item, itemIdx) => (
                  <div
                    key={item.name}
                    className="group relative glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${0.3 + itemIdx * 0.05}s` }}
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 glass-effect rounded-3xl p-8 md:p-12 text-center ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Always Learning
          </h3>
          <p className="text-muted max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. Currently exploring AI/ML
            integration, Web3, and advanced animation techniques to stay ahead
            of the curve.
          </p>
        </div>
      </div>
    </section>
  );
}
