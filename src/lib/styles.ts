/*
  Sitedeki yüzeyler tek yerden yönetilir: ince kenarlık, 6px köşe
  yarıçapı ve yumuşak gölge. Kenarlık kalınlığı 2px (border-2) bir AI
  slop izidir (side-tab / border-accent-on-rounded), burada kullanılmıyor.
*/

export const surface =
  'border-border rounded-base border bg-secondary-background'

export const pressable =
  'shadow-shadow transition-[transform] duration-150 ease-out hover:scale-[0.98] active:scale-[0.96]'

export const chip =
  'border-border rounded-base bg-soft inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-xs'

export const button = `${surface} font-mono text-sm px-3.5 py-2 ${pressable}`

export const buttonPrimary = `border border-main rounded-base bg-main text-main-foreground px-3.5 py-2 font-mono text-sm ${pressable}`

export const meta = 'font-mono text-xs text-muted-foreground'

export const inlineLink =
  'underline decoration-2 underline-offset-4 hover:decoration-1'
