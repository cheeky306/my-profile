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
        text: "Work",
        items: [
          { text: "Dutch.com Audit", link: "/audit/dutch" },
          { text: "Case Studies", link: "/case-study" }
        ]
      },
      { text: "Resume", link: "/resume" },
      { text: "Methodology", link: "/methodology" },
      { text: "About", link: "/about" }
    ],

    sidebar: {
      "/audit/": [
        {
          text: "Work",
          items: [
            { text: "Dutch.com Audit", link: "/audit/dutch" }
          ]
        },
        {
          text: "Reference",
          items: [
            { text: "Methodology", link: "/methodology" }
          ]
        }
      ]
    }
  }
}
