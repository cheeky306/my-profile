import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  title: "Jordian Farahani",
  description: "SEO + AI visibility portfolio",

  base: "/my-profile/",
  outDir: resolve(__dirname, '../../dist'),

  appearance: 'force-dark',

  themeConfig: {
    siteTitle: "Jordian Farahani",

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Portfolio",
        items: [
          { text: "Dutch.com Audit", link: "/audit/dutch" },
          { text: "Case Studies", link: "/case-study" }
        ]
      },
      {
        text: "About",
        items: [
          { text: "Resume", link: "/resume" },
          { text: "Skills", link: "/#skills" },
          { text: "Methodology", link: "/methodology" },
          { text: "About Me", link: "/about" },
          { text: "Contact", link: "/#contact" }
        ]
      }
    ],

    sidebar: {
      "/audit/": [
        {
          text: "Portfolio",
          items: [
            { text: "Dutch.com Audit", link: "/audit/dutch" },
            { text: "Case Studies", link: "/case-study" }
          ]
        },
        {
          text: "Reference",
          items: [
            { text: "Methodology", link: "/methodology" }
          ]
        }
      ],
      "/case-study": [
        {
          text: "Portfolio",
          items: [
            { text: "Dutch.com Audit", link: "/audit/dutch" },
            { text: "Case Studies", link: "/case-study" }
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
