import { GitBranch, Briefcase, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="hero" className="min-h-[85svh] flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent-green mb-4">
          Ryan Murray
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
          Data Scientist / ML Engineer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-2xl">
          Turning models into shipped systems — not notebooks.
        </p>
        <p className="text-muted-foreground mt-6 max-w-xl">
          Final-year Data Science &amp; Decisions student at UNSW and Quantitative Risk Intern
          at Toyota Finance Australia. I build things that run unattended — deployed,
          self-monitoring risk pipelines, recommenders, and fraud-detection APIs — with the
          same rigor whether the audience is a model validator or a hiring manager.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <Button variant="accent" accentColor="green" size="md">
              <Download className="size-4" />
              Download Resume
            </Button>
          </a>
          <a href="https://github.com/Ryan9828" target="_blank" rel="noreferrer">
            <Button variant="outline" size="md">
              <GitBranch className="size-4" />
              GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/ryan-murray-b020b0355" target="_blank" rel="noreferrer">
            <Button variant="outline" size="md">
              <Briefcase className="size-4" />
              LinkedIn
            </Button>
          </a>
          <a href="mailto:rwmurray234@gmail.com">
            <Button variant="ghost" size="md">
              <Mail className="size-4" />
              Email
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
