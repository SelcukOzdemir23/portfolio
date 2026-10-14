import {
  type IconType,
  SiArduino,
  SiAstro,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiLatex,
  SiLinux,
  SiNextdotjs,
  SiOpencv,
  SiPandas,
  SiPytorch,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiSvelte,
  SiTailwindcss,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons'

import type { LocalizedText } from '@/i18n/config'

/*
  Grup başlıkları iki dilde, yetenek adları teknoloji adı olduğu için
  tek dilde tutulur. `icon` alanı isteğe bağlı; ikonu olmayan
  yetenekler sadece yazı olarak görünür.
*/
const SKILLS: {
  field: LocalizedText
  skills: { skill: string; icon?: IconType }[]
}[] = [
  {
    field: { tr: 'yapay zekâ ve veri', en: 'AI and data' },
    skills: [
      { skill: 'python', icon: SiPython },
      { skill: 'pytorch', icon: SiPytorch },
      { skill: 'tensorflow', icon: SiTensorflow },
      { skill: 'keras', icon: SiKeras },
      { skill: 'scikit-learn', icon: SiScikitlearn },
      { skill: 'pandas', icon: SiPandas },
      { skill: 'opencv', icon: SiOpencv },
      { skill: 'jupyter', icon: SiJupyter },
      { skill: 'llm applications' },
      { skill: 'rag systems' },
      { skill: 'data visualisation' },
    ],
  },
  {
    field: { tr: 'web ve mobil', en: 'web and mobile' },
    skills: [
      { skill: 'typescript', icon: SiTypescript },
      { skill: 'javascript', icon: SiJavascript },
      { skill: 'react', icon: SiReact },
      { skill: 'next.js', icon: SiNextdotjs },
      { skill: 'svelte', icon: SiSvelte },
      { skill: 'astro', icon: SiAstro },
      { skill: 'tailwind css', icon: SiTailwindcss },
      { skill: 'react native' },
      { skill: 'vite', icon: SiVite },
      { skill: 'three.js', icon: SiThreedotjs },
      { skill: 'flask', icon: SiFlask },
      { skill: 'streamlit', icon: SiStreamlit },
    ],
  },
  {
    field: { tr: 'araçlar ve platformlar', en: 'tools and platforms' },
    skills: [
      { skill: 'git', icon: SiGit },
      { skill: 'github', icon: SiGithub },
      { skill: 'docker', icon: SiDocker },
      { skill: 'linux', icon: SiLinux },
      { skill: 'fastapi', icon: SiFastapi },
      { skill: 'firebase', icon: SiFirebase },
      { skill: 'arduino', icon: SiArduino },
      { skill: 'latex', icon: SiLatex },
      { skill: 'mlops basics' },
    ],
  },
]

export default SKILLS
