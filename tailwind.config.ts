import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        'input-border': 'rgb(var(--input-border) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        'subtle-foreground': 'rgb(var(--subtle-foreground) / <alpha-value>)',
        accent: {
          green: 'rgb(var(--accent-green) / <alpha-value>)',
          purple: 'rgb(var(--accent-purple) / <alpha-value>)',
          blue: 'rgb(var(--accent-blue) / <alpha-value>)',
          yellow: 'rgb(var(--accent-yellow) / <alpha-value>)',
          orange: 'rgb(var(--accent-orange) / <alpha-value>)',
          pink: 'rgb(var(--accent-pink) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
