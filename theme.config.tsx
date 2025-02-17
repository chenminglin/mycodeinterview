import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>面试题收藏</span>,
  project: {
    link: 'https://github.com/chenminglin/mycodeinterview',
  },
  docsRepositoryBase: 'https://github.com/chenminglin/mycodeinterview',
  footer: {
    text: '© 2025 My Project',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 面试题收藏'
    }
  }
}

export default config