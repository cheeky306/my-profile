import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  title: "Audit Portal",
  description: "SEO + AI visibility audit",

  base: "/my-profile/",
  outDir: resolve(__dirname, '../../dist'),

  appearance: 'dark',

  themeConfig: {
    siteTitle: "Audit Portal",

    nav: [
      { text: "Home", link: "https://cheeky306.github.io/my-profile/" },
      { text: "Audits", link: "/audit/" },
      { text: "Dutch.com", link: "/audit/dutch" }
    ],

    sidebar: {
      "/audit/": [
        {
          text: "Audits",
          items: [
            { text: "Overview", link: "/audit/" },
            {
              text: "Dutch.com",
              collapsed: false,
              items: [
                { text: "Full Audit", link: "/audit/dutch" }
              ]
            }
          ]
        }
      ]
    }
  }
}
