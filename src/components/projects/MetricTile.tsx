import { StatTile } from '@/components/ui/stat-tile'
import type { Metric } from '@/data/projects'

export function MetricTile({ metric, accentHex }: { metric: Metric; accentHex: string }) {
  return <StatTile value={metric.value} label={metric.label} accent={accentHex} />
}
