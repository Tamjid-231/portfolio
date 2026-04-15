import { motion } from "framer-motion";
import { Briefcase, Trophy, Users, Palette, BookOpen } from "lucide-react";

const activities = [
  { icon: <Users size={16} />, text: "Member of Presidency University Programming Club" },
  { icon: <Trophy size={16} />, text: "Team 5th — PUPC 2024" },
  { icon: <Users size={16} />, text: "Volunteer in NGOs — tech support for education" },
  { icon: <Palette size={16} />, text: "Professional Graphic Designer" },
  { icon: <BookOpen size={16} />, text: "Hobbies: Reading, Traveling, Chess, Exploring Technology" },
];

export default function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-label">Experience</p>
            <h2 className="section-title">Work & Roles</h2>

            <div className="mt-10 card-hover rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">Software Intern</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed font-light">
                    Contributed to open-source projects on GitHub, collaborating with developers
                    worldwide and gaining hands-on experience in modern software development workflows.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p className="section-label">Achievements</p>
            <h2 className="section-title">Activities</h2>

            <div className="mt-10 space-y-2.5">
              {activities.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-primary/20"
                >
                  <div className="text-primary shrink-0">{item.icon}</div>
                  <p className="text-[13px] text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
