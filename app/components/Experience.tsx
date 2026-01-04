"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Tech Startup Inc.",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading development of scalable web applications, mentoring junior developers, and architecting cloud infrastructure.",
    achievements: [
      "Reduced page load time by 60% through optimization",
      "Built microservices handling 1M+ daily requests",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
  },
  {
    company: "Digital Agency Co.",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Developed custom web solutions for clients ranging from startups to Fortune 500 companies.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Increased client retention rate by 35%",
      "Won 'Developer of the Year' award in 2021",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer & Designer",
    period: "2018 - 2020",
    description: "Provided end-to-end web development and design services to small businesses and entrepreneurs.",
    achievements: [
      "Successfully completed 50+ projects",
      "Maintained 5-star rating across all platforms",
      "Built long-term partnerships with 15+ recurring clients",
    ],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
      id="experience"
      ref={sectionRef}
      className="section-padding dot-pattern-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Experience
          </h2>
          <p
            className={`text-lg md:text-xl text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            My journey in the world of development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div
            className={`lg:col-span-1 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-2">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all ${
                    activeIndex === idx
                      ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg"
                      : "glass-effect hover:bg-accent/5"
                  }`}
                >
                  <div className="font-semibold">{exp.company}</div>
                  <div className={`text-sm ${activeIndex === idx ? "text-white/80" : "text-muted"}`}>
                    {exp.period}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            className={`lg:col-span-2 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="glass-effect rounded-2xl p-8 min-h-[400px]">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  {experiences[activeIndex].role}
                </h3>
                <div className="flex items-center gap-2 text-muted mb-4">
                  <span className="font-semibold">{experiences[activeIndex].company}</span>
                  <span>•</span>
                  <span>{experiences[activeIndex].period}</span>
                </div>
                <p className="text-muted">{experiences[activeIndex].description}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-3">
                  {experiences[activeIndex].achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-accent mt-1">▹</span>
                      <span className="text-muted">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 grid md:grid-cols-3 gap-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-muted">Years Experience</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">70+</div>
            <div className="text-muted">Projects Completed</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold gradient-text mb-2">30+</div>
            <div className="text-muted">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
