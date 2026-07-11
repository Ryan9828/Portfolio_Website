import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GradientIcon } from '@/components/projects/GradientIcon'
import { TechBadge } from '@/components/projects/TechBadge'
import { MetricTile } from '@/components/projects/MetricTile'
import { ProjectLinkButton } from '@/components/projects/ProjectLinkButton'
import { ACCENT_HEX } from '@/components/ui/button'
import type { Project } from '@/data/projects'

export function FlagshipProjectCard({ project }: { project: Project }) {
  const accentHex = ACCENT_HEX[project.accent]

  return (
    <Card className="md:col-span-2 p-0 overflow-hidden transition-shadow duration-200 hover:shadow-[0_8px_28px_rgba(16,24,40,0.10)]">
      {project.screenshot ? (
        <img
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          loading="lazy"
          className="w-full aspect-[3/1] object-cover"
          style={{ borderBottom: `1px solid ${accentHex}1f` }}
        />
      ) : (
        <GradientIcon icon={project.icon} accent={project.accent} className="h-40" />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge color={accentHex} className="text-[10px] px-2 py-0.5 font-bold uppercase tracking-wide">
            Flagship
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{project.tagline}</p>
        <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          {project.metrics.map((metric) => (
            <MetricTile key={metric.label} metric={metric} accentHex={accentHex} />
          ))}
        </div>

        <div className="flex flex-wrap items-start gap-3 mt-5">
          <ProjectLinkButton link={project.links.github} icon="github" />
          {project.links.liveDemo && <ProjectLinkButton link={project.links.liveDemo} />}
          {project.links.apiDocs && <ProjectLinkButton link={project.links.apiDocs} />}
        </div>
      </div>
    </Card>
  )
}
