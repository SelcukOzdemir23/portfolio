import type { Lang } from './config'

/*
  Sayfa iskeletinde görünen metinler. Proje, deneyim ve eğitim
  içeriği src/data altında, kendi dosyalarında iki dilli tutulur.
*/
export type Dict = {
  present: string
  nav: {
    home: string
    about: string
    work: string
    theme: string
    language: string
  }
  home: { role: string; intro: string; featured: string; all: string }
  about: {
    title: string
    paragraphs: string[]
    skills: string
    education: string
    experience: string
  }
  work: {
    title: string
    lead: string
    featured: string
    others: string
    webGroup: string
    dataGroup: string
  }
  project: { live: string; repo: string }
  links: Record<
    'cv' | 'email' | 'github' | 'linkedin' | 'medium' | 'gitlab' | 'linktree',
    string
  >
}

export const DICT: Record<Lang, Dict> = {
  tr: {
    present: 'Devam ediyor',
    nav: {
      home: 'anasayfa',
      about: 'hakkımda',
      work: 'projeler',
      theme: 'Temayı değiştir',
      language: 'Dili değiştir',
    },
    home: {
      role: 'yapay zekâ geliştiricisi ve veri bilimci adayı',
      intro:
        'TÜBİTAK destekli projelerde çalışıyor, yapay zekâ ve veri odaklı uygulamalar geliştiriyorum: görüntü işlemeden LLM tabanlı sistemlere.',
      featured: 'Öne çıkan projeler',
      all: 'tümü',
    },
    about: {
      title: 'Hakkımda',
      paragraphs: [
        '2024’te Fırat Üniversitesi Yazılım Mühendisliği bölümünden 3.65 ortalamayla mezun oldum; aynı üniversitede yapay zekâ alanında yüksek lisans yapıyorum. Şu anda TÜBİTAK 1002-A desteği alan bir projede bursiyer araştırmacı olarak LLM ve RAG tabanlı literatür analizi sistemi üzerinde çalışıyorum.',
        'Erasmus+ programıyla Katowice’de (Polonya) iki dönem bulundum. Araştırma yapmayı ve farklı ekiplerle çalışmayı orada öğrendim. Kodland’da 10-17 yaş arası öğrencilere Python dersi verdim ve eğitim içeriklerini Türkçeye çevirdim.',
        'Kod yazmanın yanında yazmayı seviyorum: Medium’da kitap, teknoloji ve yazılım üzerine yazıyorum. Türkçe ana dilim, İngilizcem B2. Amasya’da yaşıyorum.',
      ],
      skills: 'Yetenekler',
      education: 'Eğitim',
      experience: 'Deneyim',
    },
    work: {
      title: 'Projeler',
      lead: 'GitHub’da açık kaynak olarak yayınladığım çalışmalar. Çoğu kendi ihtiyacımdan çıktı: ders kaynakları, günlük araçlar ve TÜBİTAK destekli araştırma projeleri.',
      featured: 'Öne çıkan projeler',
      others: 'Diğer projeler',
      webGroup: 'web ve mobil araçları',
      dataGroup: 'veri, model ve yan çalışmalar',
    },
    project: { live: 'canlı site', repo: 'github' },
    links: {
      cv: 'cv',
      email: 'e-posta',
      github: 'github',
      linkedin: 'linkedin',
      medium: 'medium',
      gitlab: 'gitlab',
      linktree: 'linktree',
    },
  },
  en: {
    present: 'Present',
    nav: {
      home: 'home',
      about: 'about',
      work: 'projects',
      theme: 'Toggle theme',
      language: 'Switch language',
    },
    home: {
      role: 'AI developer and data scientist candidate',
      intro:
        'I work on TÜBİTAK funded research and build AI and data driven applications: from image processing to LLM based systems.',
      featured: 'Featured projects',
      all: 'all projects',
    },
    about: {
      title: 'About',
      paragraphs: [
        'I graduated from Fırat University with a degree in Software Engineering in 2024 with a 3.65 GPA, and I am now doing a master’s in Artificial Intelligence at the same university. I currently work as a bursary researcher on a TÜBİTAK 1002-A project, building an LLM and RAG based literature analysis system.',
        'I spent two terms in Katowice, Poland through the Erasmus+ programme, which is where I learned to do research and to work with international teams. At Kodland I taught Python to students aged 10-17 and translated educational content into Turkish.',
        'Besides writing code I like writing in general: on Medium I publish pieces about books, technology and software. Turkish is my native language and my English is at B2 level. I live in Amasya.',
      ],
      skills: 'Skills',
      education: 'Education',
      experience: 'Experience',
    },
    work: {
      title: 'Projects',
      lead: 'Open source work I publish on GitHub. Most of it grew out of my own needs: course resources, everyday tools and TÜBİTAK funded research.',
      featured: 'Featured projects',
      others: 'More projects',
      webGroup: 'web and mobile tools',
      dataGroup: 'data, models and side projects',
    },
    project: { live: 'live site', repo: 'github' },
    links: {
      cv: 'cv',
      email: 'email',
      github: 'github',
      linkedin: 'linkedin',
      medium: 'medium',
      gitlab: 'gitlab',
      linktree: 'linktree',
    },
  },
}
