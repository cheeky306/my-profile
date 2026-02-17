import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  title: "Jordian Farahani",
  description: "SEO + AI visibility portfolio",

  base: "/my-profile/",
  outDir: resolve(__dirname, '../../dist'),

  appearance: 'dark',

  themeConfig: {
    siteTitle: "Jordian Farahani",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Audits",
        items: [
          { text: "Dutch.com", link: "/audit/dutch" }
        ]
      },
      { text: "Resume", link: "/#resume" }
    ],

    sidebar: {
      "/audit/": [
        {
          text: "Audits",
          items: [
            { text: "Dutch.com", link: "/audit/dutch" }
          ]
        }
      ]
    }
  }
}
