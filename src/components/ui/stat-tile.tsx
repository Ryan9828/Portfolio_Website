interface StatTileProps {
  label: string
  value: string
  accent: string
}

export function StatTile({ label, value, accent }: StatTileProps) {
  return (
    <div className="bg-card border border-border rounded-xl px-4 py-2">
      <p className="font-bold text-lg leading-none" style={{ color: accent }}>
        {value}
      </p>
      <p className="text-subtle-foreground text-xs mt-1">{label}</p>
    </div>
  )
}
