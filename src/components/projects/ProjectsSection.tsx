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
      subheading="Seven projects across market risk, recommendations, fraud detection, NLP fairness, and AI tooling. Three are live right now — click through and try them."
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
