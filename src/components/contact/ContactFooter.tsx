import { GitBranch, Briefcase, Mail } from 'lucide-react'

export function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-foreground font-semibold">Let's talk</p>
          <p className="text-muted-foreground text-sm mt-1">
            Open to graduate data science / ML engineering roles.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ryan9828"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-subtle-foreground hover:text-foreground transition-colors"
          >
            <GitBranch className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-murray-b020b0355"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-subtle-foreground hover:text-foreground transition-colors"
          >
            <Briefcase className="size-5" />
          </a>
          <a
            href="mailto:rwmurray234@gmail.com"
            aria-label="Email"
            className="text-subtle-foreground hover:text-foreground transition-colors"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
      <p className="text-subtle-foreground text-xs text-center sm:text-left max-w-5xl mx-auto mt-8">
        © {new Date().getFullYear()} Ryan Murray. Built with React, Vite &amp; Tailwind.
      </p>
    </footer>
  )
}
