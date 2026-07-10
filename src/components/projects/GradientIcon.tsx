import { LineChart, ShoppingBag, ShieldAlert, Landmark, Cpu, Bot, type LucideIcon } from 'lucide-react'
import type { AccentColor, Project } from '@/data/projects'
import { ACCENT_HEX } from '@/components/ui/button'

const ICONS: Record<Project['icon'], LucideIcon> = {
  LineChart,
  ShoppingBag,
  ShieldAlert,
  Landmark,
  Cpu,
  Bot,
}

interface GradientIconProps {
  icon: Project['icon']
  accent: AccentColor
  className?: string
}

export function GradientIcon({ icon, accent, className }: GradientIconProps) {
  const Icon = ICONS[icon]
  const hex = ACCENT_HEX[accent]

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(135deg, ${hex}24 0%, ${hex}0a 100%)`,
        borderBottom: `1px solid ${hex}1f`,
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Icon className="size-10" style={{ color: hex }} strokeWidth={1.5} />
      </div>
    </div>
  )
}
