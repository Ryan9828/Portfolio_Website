import { Section } from '@/components/layout/Section'
import { FlagshipProjectCard } from '@/components/projects/FlagshipProjectCard'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  const flagship = projects.filter((p) => p.flagship)
  const standard = projects.filter((p) => !p.flagship)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      heading="Selected work"
      subheading="Six projects, curated from a larger portfolio — chosen for breadth across quant finance, recommenders, deployed ML, and agentic AI engineering rather than raw count."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {flagship.map((project) => (
          <FlagshipProjectCard key={project.slug} project={project} />
        ))}
        {standard.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  )
}
