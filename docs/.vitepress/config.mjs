export default {
  title: "Audit Portal",
  description: "SEO + AI visibility audit",

  base: "/my-profile/audit/",
  outDir: "../../dist/audit",

  appearance: 'dark',

  themeConfig: {
    siteTitle: "Audit Portal",

    nav: [
      { text: "Home", link: "https://cheeky306.github.io/my-profile/" },
      { text: "Audits", link: "/" },
      { text: "Dutch.com", link: "/dutch" }
    ],

    sidebar: [
      {
        text: "Audits",
        items: [
          { text: "Overview", link: "/" },
          {
            text: "Dutch.com",
            collapsed: false,
            items: [
              { text: "Full Audit", link: "/dutch" }
            ]
          }
        ]
      }
    ]
  }
}
