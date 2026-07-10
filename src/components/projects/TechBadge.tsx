import { Badge } from '@/components/ui/badge'

export function TechBadge({ label }: { label: string }) {
  return (
    <Badge color="#475467" className="text-[11px] px-2 py-1">
      {label}
    </Badge>
  )
}
