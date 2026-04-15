import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    degree: "B.Sc in Computer Science & Engineering (CSE)",
    school: "Presidency University",
    board: "",
    year: "2023 – 2026",
    grade: "CGPA: 3.11",
    status: "Currently Pursuing",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Sonapur College",
    board: "Board of Intermediate and Secondary Education, Cumilla",
    year: "Completed",
    grade: "GPA: 4.00",
    status: "Completed",
    icon: BookOpen,
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Harinarayonpur Union High School",
    board: "Board of Intermediate and Secondary Education, Cumilla",
    year: "Completed",
    grade: "GPA: 4.14",
    status: "Completed",
    icon: School,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function EducationSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Journey</h2>
        </motion.div>

        <motion.div
          className="relative mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="relative md:pl-16"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-6 hidden md:flex">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/30 bg-card shadow-lg"
                      whileHover={{ scale: 1.15, borderColor: "var(--color-primary)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={20} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                    whileHover={{ y: -4 }}
                  >
                    {/* Accent gradient line */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-coral to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1 space-y-2">
                        {/* Mobile icon */}
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:hidden">
                          <Icon size={18} className="text-primary" />
                        </div>

                        <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-foreground/80">{edu.school}</p>
                        {edu.board && (
                          <p className="text-xs text-muted-foreground/70 italic">{edu.board}</p>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end sm:gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                          {edu.grade}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          edu.status === "Currently Pursuing"
                            ? "bg-coral/10 text-coral"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
