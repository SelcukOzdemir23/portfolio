import type { LocalizedText } from '@/i18n/config'

/*
  Projeler GitHub depolarından derlendi (README, package.json ve
  requirements.txt dosyaları). `year` depoların oluşturulma yılı.

  Sıra önem sırasıdır: öne çıkanlar dizisi ana sayfada ve projeler
  sayfasının üstünde büyük kart olarak, diğerleri alttaki iki grupta
  görünür. Yeni proje eklerken öne çıkacaksa FEATURED_PROJECTS içine
  istediğin sıraya koy, değilse ilgili gruba ekle.

  Başlığı değişmeyen özel isimler `same()` ile yazılır; açıklayıcı
  başlıklar iki dilde ayrı verilir.
*/
export type Project = {
  name: LocalizedText
  summary: LocalizedText
  year: string
  stack: string[]
  repoUrl?: string
  liveLink?: string
  note?: LocalizedText
}

const same = (name: string): LocalizedText => ({ tr: name, en: name })

const github = (repo: string) => `https://github.com/SelcukOzdemir23/${repo}`

/* Önem sırası: ana sayfada ilk dördü, projeler sayfasında tamamı kart olarak. */
export const FEATURED_PROJECTS: Project[] = [
  {
    name: same('AtaDey'),
    summary: {
      tr: 'TDK deyimleri ve atasözleriyle oynanan oyun sitesi. Vitest ile test edilmiş, canlıda yayında.',
      en: 'Game site built around Turkish idioms and proverbs from the TDK dictionary. Covered by Vitest tests and live.',
    },
    year: '2025',
    stack: ['react', 'vite', 'tailwind', 'vitest'],
    repoUrl: github('atadey'),
    liveLink: 'https://selcukozdemir23.github.io/atadey/',
  },
  {
    name: same('Vize Canavarı'),
    summary: {
      tr: 'Hafta hafta ilerleyen vize hazırlık uygulaması; kurulabilir PWA olarak çalışıyor.',
      en: 'Exam preparation app that moves forward week by week; installable as a PWA.',
    },
    year: '2025',
    stack: ['react', 'zustand', 'tailwind', 'pwa'],
    repoUrl: github('vize-canavari'),
    liveLink: 'https://selcukozdemir23.github.io/vize-canavari/',
  },
  {
    name: {
      tr: 'Bunu Senin İçin Google’layayım',
      en: 'Let Me Google That For You',
    },
    summary: {
      tr: 'Yazdığın aramayı animasyonla Google üzerinde gösteren paylaşılabilir bağlantılar üretiyor. Türkçe ve İngilizce arayüz desteği var.',
      en: 'Generates shareable links that animate your query being typed into Google. The interface works in Turkish and English.',
    },
    year: '2025',
    stack: ['react', 'vite', 'tailwind', 'typescript'],
    repoUrl: github('durbirgoogleyapalim'),
    liveLink: 'https://selcukozdemir23.github.io/durbirgoogleyapalim/',
  },
  {
    name: { tr: '3D Model Görüntüleyici', en: '3D Model Viewer' },
    summary: {
      tr: '.glb modellerini tarayıcıda döndürüp yakınlaştırmayı sağlayan görüntüleyici.',
      en: 'Viewer for rotating and zooming .glb models in the browser.',
    },
    year: '2025',
    stack: ['react', 'three.js', 'vite'],
    repoUrl: github('3dmodelviewer'),
    liveLink: 'https://selcukozdemir23.github.io/3dmodelviewer/',
  },
  {
    name: {
      tr: 'Fırat Üniversitesi Ders Kaynakları',
      en: 'Fırat University Course Resources',
    },
    summary: {
      tr: 'Teknoloji Fakültesi Yazılım Mühendisliği ders notlarını ve kaynaklarını toplayan arşiv. GitHub üzerinde 33 yıldız aldı.',
      en: 'Archive of lecture notes and resources from the Software Engineering department at Fırat University. Picked up 33 stars on GitHub.',
    },
    year: '2022',
    stack: ['jupyter', 'python'],
    repoUrl: github('Firat-Universitesi-Kaynaklar'),
  },
  {
    name: same('RetroTV'),
    summary: {
      tr: 'Ülkelerin açık IPTV kanallarını eski bir CRT televizyon deneyimiyle izleten web uygulaması. Tarama çizgileri, kanal geçişinde statik gürültü ve kumanda paneli var.',
      en: 'Web app that plays public IPTV channels from around the world through a vintage CRT television experience. Scanlines, static noise between channels and a remote control panel are all there.',
    },
    year: '2026',
    stack: ['astro', 'svelte', 'typescript', 'hls.js'],
    repoUrl: github('retrotv'),
    liveLink: 'https://selcukozdemir23.github.io/retrotv/',
  },
  {
    name: same('EcoSat-Analyzer'),
    summary: {
      tr: 'Yüksek çözünürlüklü uydu ve hava görüntülerini bina, orman, su ve yol sınıflarına ayıran anlamsal bölütleme uygulaması. ResNet34 omurgalı U-Net modeli, NiceGUI arayüzü ve Docker imajıyla birlikte geliyor.',
      en: 'Semantic segmentation app that splits high-resolution aerial and satellite imagery into building, woodland, water and road classes. Ships with a ResNet34 backed U-Net model, a NiceGUI interface and a Docker image.',
    },
    year: '2025',
    stack: ['python', 'pytorch', 'u-net', 'opencv', 'docker'],
    repoUrl: github('EcoSatAnalyzer'),
    liveLink:
      'https://huggingface.co/spaces/muserrefselcukozdemir/EcoSat-Analyzer',
  },
  {
    name: same('Gold-Sense AI'),
    summary: {
      tr: 'Finans haberlerini dil modelleriyle analiz edip altın piyasası üzerindeki olası etkisini tahmin eden sistem. Haber verisini TONL biçimine çevirerek API maliyetini düşürüyor.',
      en: 'Reads financial news with language models and estimates the likely effect on the gold market. Converts the news data into TONL to bring API costs down.',
    },
    year: '2026',
    stack: ['python', 'dspy', 'llm', 'streamlit', 'plotly'],
    repoUrl: github('gold-sense'),
    liveLink: 'https://gold-sense-cerebras.streamlit.app/',
    note: {
      tr: 'TÜBİTAK 1002-A araştırma projesi kapsamında',
      en: 'Part of a TÜBİTAK 1002-A research project',
    },
  },
]

/* Diğerleri, iki grup halinde listelenir. */
export const WEB_PROJECTS: Project[] = [
  {
    name: same('LibreWake'),
    summary: {
      tr: 'Reklamsız, takipsiz ve tamamen çevrimdışı çalışan çalar saat. Alarmı susturmak için fotoğraf çekmek, adım atmak ya da matematik sorusu çözmek gerekiyor.',
      en: 'Alarm clock with no ads, no tracking and full offline operation. To silence the alarm you have to take a photo, walk a number of steps or solve a maths problem.',
    },
    year: '2026',
    stack: ['react native', 'expo', 'typescript'],
    repoUrl: github('librewake'),
    note: { tr: 'geliştirme sürüyor', en: 'in development' },
  },
  {
    name: same('KalkKıl'),
    summary: {
      tr: 'Namaz vakitlerini Diyanet yöntemiyle çevrimdışı hesaplayan mobil uygulama. Canlı geri sayım, bildirimler, ana ekran widgetı ve kıble pusulası var.',
      en: 'Mobile app that calculates prayer times offline using the Diyanet method. Includes a live countdown, notifications, a home screen widget and a qibla compass.',
    },
    year: '2026',
    stack: ['react native', 'typescript', 'adhan', 'kotlin'],
    repoUrl: github('KalkKil'),
  },
  {
    name: { tr: 'Kelime Oyunu', en: 'Word Game' },
    summary: {
      tr: 'Türkçe yazım kurallarını test eden zamanlı kelime oyunu. Skor tablosu ve açık/koyu tema desteği var.',
      en: 'Timed word game that tests Turkish spelling rules. Comes with a leaderboard and light/dark theme support.',
    },
    year: '2025',
    stack: ['next.js', 'firebase', 'genkit', 'typescript'],
    repoUrl: github('dictionfuel'),
  },
]

export const DATA_PROJECTS: Project[] = [
  {
    name: same('BrushInsight'),
    summary: {
      tr: 'En çok eseri bulunan on ressamı ayırt eden transfer learning modeli. ResNet-50 üzerine kurulu ve kararlarını Grad-CAM ısı haritalarıyla açıklıyor.',
      en: 'Transfer learning model that tells apart the ten painters with the most artworks. Built on ResNet-50 and explains its decisions with Grad-CAM heat maps.',
    },
    year: '2026',
    stack: ['python', 'tensorflow', 'resnet-50', 'grad-cam', 'gradio'],
    repoUrl: github('brushinsight'),
    liveLink:
      'https://huggingface.co/spaces/muserrefselcukozdemir/brushinsight',
    note: {
      tr: 'evrişimsel sinir ağları final projesi',
      en: 'final project for a convolutional neural networks course',
    },
  },
  {
    name: same('BestShots'),
    summary: {
      tr: 'Uzun videolardan kilit sahneleri çıkarıp videonun tamamını izlemeden içeriği özetliyor. Sahne tespiti arka planda FastAPI, arayüz React ve Vite ile çalışıyor.',
      en: 'Pulls the key scenes out of long videos so you can grasp the content without watching all of it. Scene detection runs on FastAPI in the background, the interface is React with Vite.',
    },
    year: '2025',
    stack: ['python', 'fastapi', 'react', 'vite'],
    repoUrl: github('BestShots'),
  },
  {
    name: { tr: 'SEM Görüntü Sınıflandırma', en: 'SEM Image Classification' },
    summary: {
      tr: 'Nanomalzemelerin elektron mikroskobu görüntülerini fiber, nanotel, toz ve parçacık sınıflarına ayıran derin öğrenme modeli. Streamlit ve Gradio arayüzleriyle yayında.',
      en: 'Deep learning model that classifies electron microscope images of nanomaterials into fibres, nanowires, powder and particles. Live behind Streamlit and Gradio interfaces.',
    },
    year: '2026',
    stack: ['python', 'tensorflow', 'scikit-learn', 'streamlit'],
    repoUrl: github('efficientSEM'),
    liveLink: 'https://semimageclassification.streamlit.app/',
    note: { tr: 'TÜBİTAK 2209-B desteği', en: 'Supported by TÜBİTAK 2209-B' },
  },
  {
    name: same('EvoPrompt'),
    summary: {
      tr: 'Promptu genetik algoritmayla evrimleştirerek AG News veri setinde haber sınıflandırma başarısını yükseltiyor. Model sabit, llama3.1 Ollama üzerinden çalışıyor.',
      en: 'Evolves the prompt with a genetic algorithm to raise news classification accuracy on the AG News dataset. The model stays frozen and runs as llama3.1 through Ollama.',
    },
    year: '2026',
    stack: ['python', 'deap', 'scikit-learn', 'ollama'],
    repoUrl: github('PromptOptimizer'),
  },
  {
    name: { tr: 'Kuyudaki Veriler', en: 'Data Stories' },
    summary: {
      tr: 'Pandas, Matplotlib ve Plotly ile hazırladığım veri analizi ve görselleştirme projelerinin koleksiyonu.',
      en: 'A collection of my data analysis and visualisation projects built with Pandas, Matplotlib and Plotly.',
    },
    year: '2025',
    stack: ['jupyter', 'pandas', 'plotly'],
    repoUrl: github('kuyudaki-veriler'),
  },
  {
    name: { tr: 'Strogatz Çevirisi', en: 'Strogatz Translation' },
    summary: {
      tr: 'Nonlinear Dynamics and Chaos kitabının altıncı bölümünün LaTeX ile hazırlanmış Türkçe çevirisi.',
      en: 'Turkish translation of chapter six of Nonlinear Dynamics and Chaos, typeset in LaTeX.',
    },
    year: '2026',
    stack: ['latex'],
    repoUrl: github('StrogatzBook-NonlinearDynamicsAndChaos-Chapter6'),
  },
]
