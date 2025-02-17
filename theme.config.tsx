import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>我的文档</span>,
  project: {
    link: 'https://github.com/yourusername/yourproject',
  },
  docsRepositoryBase: 'https://github.com/yourusername/yourproject',
  footer: {
    text: '© 2024 My Project',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 我的文档'
    }
  }
}

export default config