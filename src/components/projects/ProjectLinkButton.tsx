import { GitBranch, ExternalLink, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ProjectLink } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectLinkButtonProps {
  link: ProjectLink
  icon?: 'github' | 'external'
}

export function ProjectLinkButton({ link, icon = 'external' }: ProjectLinkButtonProps) {
  if (link.status === 'none') return null

  const Icon = icon === 'github' ? GitBranch : ExternalLink

  if (link.status === 'pending') {
    return (
      <div className="flex flex-col items-start gap-1">
        <Button variant="ghost" size="sm" disabled className={cn('cursor-not-allowed')}>
          <Clock className="size-3.5" />
          {link.label}
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <a href={link.url ?? undefined} target="_blank" rel="noreferrer">
        <Button variant="outline" size="sm">
          <Icon className="size-3.5" />
          {link.label}
        </Button>
      </a>
      {link.caption && <p className="text-subtle-foreground text-[11px] max-w-[220px]">{link.caption}</p>}
    </div>
  )
}
