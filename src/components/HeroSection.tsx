import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
const profileImg = "https://i.postimg.cc/Hk2d0kRV/use-able.jpg";

const titles = ["Problem Solver", "Developer", "CSE Student", "Tech Enthusiast"];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
          );
        },
        deleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-coral/6 blur-[80px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_auto]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="glow-dot" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Available for work
            </span>
          </div>

          <h1 className="font-heading text-5xl font-bold leading-[1.08] text-foreground md:text-6xl lg:text-[4.5rem]">
            Md. Tamjid
            <br />
            <span className="text-gradient">Hossain</span>
          </h1>

          <div className="mt-5 flex items-center gap-2 font-heading text-lg text-muted-foreground md:text-xl">
            <span className="text-primary font-semibold">&gt;</span>
            <span>{text}</span>
            <span className="inline-block w-[2px] animate-pulse bg-primary" style={{ height: "1.2em" }} />
          </div>

          <p className="mt-6 max-w-lg text-[15px] text-muted-foreground leading-relaxed font-light">
            Passionate about programming, software development, and building real-world projects
            that make an impact. Currently pursuing B.Sc in CSE.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a href="https://github.com/Tamjid-231" target="_blank" rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:text-primary hover:border-primary/40">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/md-tamjid-hossain-0597082bb/" target="_blank" rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:text-primary hover:border-primary/40">
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
            {/* Glow */}
            <div className="absolute -inset-6 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/20 md:h-80 md:w-80">
              <img
                src={profileImg}
                alt="Md. Tamjid Hossain"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={18} className="text-muted-foreground" />
        </motion.div>
      </a>
    </section>
  );
}
