import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-config-prettier'
import { fileURLToPath } from 'node:url'

/*
  Flat config (eslint.config.mjs).

  Eski `.eslintrc.json` biçiminde config dosyası dizin ağacında
  aranıyordu ve bu, kaynak dosyaların beklenmedik bir üst dizinden
  çözümlendiği ortamlarda "next/core-web-vitals bulunamadı" hatası
  veriyordu. Flat config'te böyle bir arama yok: paylaşılan ayarlar
  doğrudan bu dosyadan import edilir.

  eslint-config-next hâlâ eslintrc biçiminde yayınlandığı için
  FlatCompat ile köprü kurulur.
*/
const compat = new FlatCompat({
  baseDirectory: fileURLToPath(new URL('.', import.meta.url)),
})

const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals'),
  prettier,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
