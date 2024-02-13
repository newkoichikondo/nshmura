import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "nshmura.com",
  description: "サーバサイドエンジニアのメモ",
  lang: "ja",
  cleanUrls: true,
  srcDir: './content',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
          { text: 'Posts', link: '/posts/' },
          { text: 'Tags', link: '/tags/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nshmura' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © present nshmura'
    }
  }
})
