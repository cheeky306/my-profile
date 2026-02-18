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
          { text: "Case Study", link: "/case-study" },
          { text: "LLM-O Blog Tool", link: "/llmo-tool" }
        ]
      },
      {
        text: "About",
        items: [
          { text: "Resume", link: "/resume" },
          { text: "Skills", link: "/#skills" },
          { text: "About Me", link: "/about" },
          { text: "Contact", link: "/about#contact" }
        ]
      }
    ],

    sidebar: {
      "/audit/": [
        {
          text: "Portfolio",
          items: [
            { text: "Dutch.com Audit", link: "/audit/dutch" },
            { text: "Case Study", link: "/case-study" }
          ]
        },
      ],
      "/case-study": [
        {
          text: "Portfolio",
          items: [
            { text: "Dutch.com Audit", link: "/audit/dutch" },
            { text: "Case Study", link: "/case-study" }
          ]
        }
      ],
      "/llmo-tool": [
        {
          text: "Portfolio",
          items: [
            { text: "Dutch.com Audit", link: "/audit/dutch" },
            { text: "Case Study", link: "/case-study" },
            { text: "LLM-O Blog Tool", link: "/llmo-tool" }
          ]
        }
      ],
      "/resume": [
        {
          text: "About",
          items: [
            { text: "Resume", link: "/resume" },
            { text: "About Me", link: "/about" }
          ]
        },
        {
          text: "Portfolio",
          items: [
            { text: "Dutch.com Audit", link: "/audit/dutch" },
            { text: "Case Study", link: "/case-study" }
          ]
        }
      ]
    }
  }
}
