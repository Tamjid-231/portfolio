import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Blood Bank Management System",
    desc: "A comprehensive system to manage blood donations, donor records, and blood inventory with efficient search capabilities.",
    tech: ["C"],
    link: "https://github.com/Tamjid-231/Blood-Bank-Management-System",
  },
  {
    title: "Car Rental System",
    desc: "Object-oriented car rental platform with booking management, vehicle tracking, and user authentication.",
    tech: ["Java", "OOP"],
    link: "https://github.com/Tamjid-231/Car-Rental-System",
  },
  {
    title: "Library Management System",
    desc: "Database-driven library system handling book cataloging, member management, and transaction tracking.",
    tech: ["SQL", "Database"],
    link: "https://github.com/Tamjid-231/Library-Management-System",
  },
  {
    title: "Online Learning Portal",
    desc: "Web-based platform featuring user authentication, course content management, and progress tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Automated Resume Builder",
    desc: "Custom resume generation tool that creates professional resumes from structured user input.",
    tech: ["Python", "Automation"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured Work</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.title}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group card-hover relative flex flex-col rounded-xl border border-border bg-card p-6 cursor-pointer"
            >
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <ArrowUpRight size={14} />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-6 rounded-full bg-primary" />
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {proj.tech.join(" · ")}
                </span>
              </div>

              <h3 className="font-heading text-base font-bold text-foreground pr-10">{proj.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground font-light flex-1">{proj.desc}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
