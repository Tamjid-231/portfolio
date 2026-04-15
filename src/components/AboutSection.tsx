import { motion } from "framer-motion";
import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Know Me More</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-5">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
            <p className="text-[15px] leading-[1.8] text-muted-foreground font-light">
              I'm a passionate problem solver and aspiring software developer currently pursuing a
              B.Sc in Computer Science & Engineering (CSE) at Presidency University (2023–2026). I'm
              enthusiastic about programming, software development, and building real-world
              projects that solve meaningful problems.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground font-light">
              With experience in multiple programming languages and a strong foundation in
              data structures & algorithms, I'm constantly pushing myself to learn and grow
              as a developer.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InfoItem icon={<MapPin size={16} />} label="Location" value="Dhaka, Bangladesh" />
              <InfoItem icon={<Phone size={16} />} label="Phone" value="+880 1963821217" />
              <InfoItem icon={<Mail size={16} />} label="Email" value="mdtamjidhossain964@gmail.com" />
              <InfoItem icon={<GraduationCap size={16} />} label="Degree" value="B.Sc in CSE (Computer Science & Engineering)" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 lg:col-span-2"
          >
            <StatCard value="5+" label="Projects" />
            <StatCard value="3.11" label="CGPA" />
            <StatCard value="4+" label="Languages" />
            <StatCard value="1+" label="Internship" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5 transition hover:border-primary/20">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-hover rounded-xl border border-border bg-card p-5 text-center">
      <p className="font-heading text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-xs font-medium text-muted-foreground tracking-wide uppercase">{label}</p>
    </div>
  );
}
