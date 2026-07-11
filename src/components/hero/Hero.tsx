import { GitBranch, Briefcase, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[85svh] flex items-center px-6 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 55% at 15% 0%, rgba(4,120,87,0.06) 0%, rgba(4,120,87,0) 60%), radial-gradient(55% 50% at 100% 10%, rgba(3,105,161,0.05) 0%, rgba(3,105,161,0) 55%)',
        }}
      />
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent-green mb-4">
          Ryan Murray
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight max-w-3xl">
          Data Scientist / ML Engineer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mt-4 max-w-2xl">
          I build ML systems that keep running after I close the laptop.
        </p>
        <p className="text-muted-foreground mt-6 max-w-xl">
          Final-year Data Science &amp; Decisions student at UNSW and Quantitative Risk
          Analyst Intern at Toyota Finance Australia. Recent work: a market-risk pipeline
          that re-validates itself every weekday, a recommender with a live storefront
          demo, and a fraud-detection API deployed on AWS.
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
