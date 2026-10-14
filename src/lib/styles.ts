/*
  Sitedeki yüzeyler tek yerden yönetilir: 2px kenarlık, 5px köşe
  yarıçapı ve 4px sert gölge her yerde aynı. Hover'da eleman kendi
  gölgesinin üstüne basılır (fiziksel tuş hissi).
*/

export const surface =
  'border-border rounded-base border-2 bg-secondary-background'

export const pressable =
  'shadow-shadow transition-[transform,box-shadow] duration-150 ease-out hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none'

export const chip =
  'border-border rounded-base bg-soft inline-flex items-center gap-2 border-2 px-2.5 py-1 font-mono text-xs'

export const button = `${surface} font-mono text-sm px-3.5 py-2 ${pressable}`

export const buttonPrimary = `border-border bg-main text-main-foreground rounded-base border-2 px-3.5 py-2 font-mono text-sm ${pressable}`

export const meta = 'font-mono text-xs text-muted-foreground'

export const inlineLink =
  'underline decoration-2 underline-offset-4 hover:decoration-1'
