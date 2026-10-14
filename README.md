> Kişisel portfolyo sitesi. Next.js 15, Tailwind CSS 4 ve neobrutalist
> iskelet üzerine kurulu; mavi aksan, sert gölge ve mono etiketlerle
> kendi içeriğime uyarlanmış, iki dilli bir sürüm.

Yayında: https://selcukozdemir23.github.io/portfolio/

## Çalıştırma

Bu proje `pnpm` kullanıyor.

```bash
pnpm i
pnpm dev
```

Geliştirme modunda site `http://localhost:3000` kökünde açılır
(`basePath` yok). Üretim çıktısını yerelde görmek istersen:

```bash
pnpm build
npx serve out   # ardından /portfolio yolu
```

## Dil yapısı

Türkçe sürüm kök dizinde (`/`), İngilizce sürüm `/en` altında. Her dilin
kendi kök layout'u var, bu yüzden `<html lang>` değeri de doğru çıkıyor.

- `src/i18n/dictionaries.ts`: arayüz metinleri (iki dil)
- `src/i18n/config.ts`: dil tipleri, tarih biçimlendirme, iç bağlantı
  yardımcıları
- `src/app/(tr)/...` ve `src/app/(en)/en/...`: sayfa dosyaları; içerik
  `src/components/pages/` altındaki bileşenlerden gelir

## İçerik nerede

- `src/data/projects.ts`: projeler (öne çıkanlar, web ve mobil araçlar,
  veri ve model çalışmaları)
- `src/data/experience.ts`: iş deneyimi
- `src/data/education.ts`: eğitim
- `src/data/skills.ts`: yetenek grupları
- `src/components/links.tsx`: e-posta ve sosyal bağlantılar

Metin alanları `{ tr, en }` olarak tutulur; teknoloji adı, yıl ve repo
bağlantısı gibi dilden bağımsız değerler düz string kalır. Tarihler
`2024-02` biçiminde yazılır ve ekranda `Intl` ile o dile çevrilir;
bitiş tarihi `null` ise "devam ediyor" metni basılır.

Yeni proje eklemek için ilgili dizide bir nesne aç. `repoUrl` ve
`liveLink` alanları isteğe bağlı; sadece biri dolu olsa da kart doğru
çalışır. Ekran görüntüsü eklemek istediğinde görseli `public/` klasörüne
koyup `src/components/project.tsx` içindeki karta ekleyebilirsin.

## Tasarım

- Renk paleti, köşe yarıçapı ve gölge `src/app/globals.css` içindeki CSS
  değişkenlerinde tanımlı. Açık ve koyu tema ayrı ayrı yazılı, tema
  düğmesi sağ üstte.
- Yazı tipleri `src/lib/fonts.ts` içinde yükleniyor (Space Grotesk +
  JetBrains Mono).
- Kart, çip ve düğme sınıfları `src/lib/styles.ts` içinde tek yerden
  yönetiliyor.

## Yayın (GitHub Pages)

Site statik olarak dışa aktarılır (`next.config.mjs` içinde
`output: 'export'`) ve `main` dalına yapılan her push'ta
`.github/workflows/deploy.yml` iş akışıyla GitHub Pages'e dağıtılır.

Üretim derlemesinde `basePath` otomatik olarak `/portfolio` olur, çünkü
site bir proje sayfası olarak yayınlanıyor. Repo adını değiştirirsen
`next.config.mjs` içindeki `repo` değerini güncelle.

İş akışının dağıtım adımı için depoda Pages'in açık ve kaynağının
"GitHub Actions" olması gerekir: Settings → Pages → Build and deployment
→ Source: GitHub Actions.

## Lisans

İskelet MIT lisanslı [neobrutalism portfolio
template](https://github.com/neobrutalism-templates/portfolio) üzerine
kurulmuştur; telif metni `LICENSE` dosyasında korunmuştur.
