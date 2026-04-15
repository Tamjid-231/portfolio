import { Github, Linkedin, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
        <p className="text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Md. Tamjid Hossain
        </p>
        <div className="flex items-center gap-3">
          {[
            { icon: <Github size={15} />, href: "https://github.com/Tamjid-231", label: "GitHub" },
            { icon: <Linkedin size={15} />, href: "https://www.linkedin.com/in/md-tamjid-hossain-0597082bb/", label: "LinkedIn" },
            { icon: <Globe size={15} />, href: "#", label: "Portfolio" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-muted-foreground transition hover:text-primary"
            >
              {s.icon}
            </a>
          ))}
          <a
            href="#home"
            className="ml-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition hover:opacity-90"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
