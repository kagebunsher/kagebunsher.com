import type { ThemeObjectOrShikiThemeName } from 'astro-expressive-code'

type Config = {
  author: string
  title: string
  description: string
  lang: string
  themes: {
    dark: ThemeObjectOrShikiThemeName
  }
}

export default {
  author: 'kagebunsher',
  title: 'kagebunsher',
  description: 'newschool cyber security blog',
  lang: 'tr',
  themes: {
    dark: 'github-dark'
  }
} satisfies Config
