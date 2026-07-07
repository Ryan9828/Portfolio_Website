import { Card } from '@/components/ui/card'
import { GradientIcon } from '@/components/projects/GradientIcon'
import { TechBadge } from '@/components/projects/TechBadge'
import { MetricTile } from '@/components/projects/MetricTile'
import { ProjectLinkButton } from '@/components/projects/ProjectLinkButton'
import { ACCENT_HEX } from '@/components/ui/button'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  const accentHex = ACCENT_HEX[project.accent]

  return (
    <Card className="p-0 overflow-hidden flex flex-col">
      <GradientIcon icon={project.icon} accent={project.accent} className="h-28" />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{project.tagline}</p>
        <p className="text-subtle-foreground text-xs mt-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          {project.metrics.map((metric) => (
            <MetricTile key={metric.label} metric={metric} accentHex={accentHex} />
          ))}
        </div>

        {!project.narrativeOnly && (
          <div className="flex flex-wrap items-start gap-3 mt-4 pt-1">
            <ProjectLinkButton link={project.links.github} icon="github" />
            {project.links.liveDemo && <ProjectLinkButton link={project.links.liveDemo} />}
            {project.links.apiDocs && <ProjectLinkButton link={project.links.apiDocs} />}
          </div>
        )}

        {project.narrativeOnly && (
          <p className="text-subtle-foreground text-[11px] mt-4 pt-1 italic">
            Personal tooling — not a published repo.
          </p>
        )}
      </div>
    </Card>
  )
}
