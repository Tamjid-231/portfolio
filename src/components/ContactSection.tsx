import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Globe, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_qrx3se1";
const TEMPLATE_ID = "template_znmfbup";
const PUBLIC_KEY = "wmZh-jW6leokxzsAU";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[15px] text-muted-foreground leading-relaxed font-light">
              Feel free to reach out for collaborations, freelance work, or just a friendly chat about technology.
            </p>

            <div className="mt-8 space-y-4">
              <ContactInfo icon={<Mail size={16} />} label="Email" value="mdtamjidhossain964@gmail.com" />
              <ContactInfo icon={<Phone size={16} />} label="Phone" value="+880 1963821217" />
              <ContactInfo icon={<MapPin size={16} />} label="Location" value="Dhaka, Bangladesh" />
            </div>

            <div className="mt-8 flex gap-2">
              {[
                { icon: <Github size={16} />, href: "https://github.com/Tamjid-231", label: "GitHub" },
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/md-tamjid-hossain-0597082bb/", label: "LinkedIn" },
                { icon: <Globe size={16} />, href: "https://tamjidportfolio.page.gd/", label: "Portfolio" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-xl border border-border bg-card p-6"
          >
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-foreground">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-foreground">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-foreground">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
            >
              {sending ? (
                <><Loader2 size={15} className="animate-spin" /> Sending...</>
              ) : sent ? (
                <><CheckCircle size={15} /> Message Sent!</>
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-primary/20">
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
