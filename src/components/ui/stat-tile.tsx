interface StatTileProps {
  label: string
  value: string
  accent: string
}

export function StatTile({ label, value, accent }: StatTileProps) {
  return (
    <div className="bg-black/[0.025] border border-border/70 rounded-xl px-4 py-2.5">
      <p className="font-bold text-lg leading-none tabular-nums" style={{ color: accent }}>
        {value}
      </p>
      <p className="text-subtle-foreground text-xs mt-1">{label}</p>
    </div>
  )
}
