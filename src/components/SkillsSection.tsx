import { motion } from "framer-motion";
import { Code2, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 75 },
      { name: "Java", level: 80 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-64 w-64 rounded-full bg-coral/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Skills</p>
          <h2 className="section-title">My Expertise</h2>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl border border-border bg-card p-7 transition-shadow duration-400 hover:shadow-[0_20px_50px_-12px_oklch(0.62_0.17_240/0.15)]"
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-primary via-coral to-primary opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div className="flex items-center gap-3 mb-7">
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">{cat.title}</h3>
                </div>

                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-[13px] mb-2.5">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <motion.span
                          className="font-semibold text-primary"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + si * 0.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + si * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="relative h-full rounded-full bg-gradient-to-r from-primary to-coral"
                        >
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}