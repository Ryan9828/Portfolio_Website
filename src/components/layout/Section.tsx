import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  eyebrow?: string
  heading?: ReactNode
  subheading?: ReactNode
}

export function Section({ id, eyebrow, heading, subheading, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 px-6', className)} {...props}>
      <div className="max-w-5xl mx-auto">
        {(eyebrow || heading || subheading) && (
          <div className="mb-12">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-widest uppercase text-subtle-foreground mb-2">
                {eyebrow}
              </p>
            )}
            {heading && <h2 className="text-2xl md:text-3xl font-bold text-foreground">{heading}</h2>}
            {subheading && <p className="text-muted-foreground mt-3 max-w-2xl">{subheading}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
