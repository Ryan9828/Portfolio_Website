import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-input border border-input-border text-foreground hover:border-subtle-foreground',
        ghost: 'text-subtle-foreground hover:text-muted-foreground',
        outline: 'border border-border text-muted-foreground hover:text-foreground hover:bg-[#1a1a1a]',
        accent: '',
      },
      size: {
        sm: 'text-xs px-2.5 py-1.5 rounded-lg',
        md: 'text-sm px-4 py-2 rounded-xl',
        icon: 'p-2 rounded-lg',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
)

export type ButtonAccentColor = 'green' | 'purple' | 'blue' | 'yellow' | 'orange' | 'pink'

export const ACCENT_HEX: Record<ButtonAccentColor, string> = {
  green: '#00ff87',
  purple: '#b66dff',
  blue: '#4db8ff',
  yellow: '#ffe066',
  orange: '#ff9966',
  pink: '#ff6db6',
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  accentColor?: ButtonAccentColor
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, accentColor = 'green', style, ...props }, ref) => {
    const accentStyle =
      variant === 'accent'
        ? { backgroundColor: `${ACCENT_HEX[accentColor]}1a`, color: ACCENT_HEX[accentColor], ...style }
        : style
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          variant === 'accent' && 'hover:brightness-110',
          className,
        )}
        style={accentStyle}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
