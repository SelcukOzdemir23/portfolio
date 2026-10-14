'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeSwitcher({ label }: { label: string }) {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="rounded-base hover:bg-main-foreground/15 px-3 py-1.5 transition-colors"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="block size-4 dark:hidden" />
      <span className="sr-only">{label}</span>
    </button>
  )
}
