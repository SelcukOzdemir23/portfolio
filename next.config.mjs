const repo = 'portfolio'
const isProduction = process.env.NODE_ENV === 'production'

/*
  Site GitHub Pages'te proje sayfası olarak yayınlanır:
  https://selcukozdemir23.github.io/portfolio/

  Bu yüzden üretim derlemesinde basePath gerekir. `pnpm dev`
  geliştirme modunda çalıştığı için basePath olmadan açılır
  (localhost:3000).
*/
const basePath = isProduction ? `/${repo}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* statik HTML/JS üretir, çıktı `out/` klasörüne yazılır */
  output: 'export',
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  /* lint ayrı adımda çalışır: `pnpm lint` (ve CI'da derlemeden önce) */
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
