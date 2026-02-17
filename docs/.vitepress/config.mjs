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
      { text: "Overview", link: "/" },
      { text: "Findings", link: "/findings" },
      { text: "90 Day Plan", link: "/plan" }
    ],

    sidebar: [
      {
        text: "Audit",
        items: [
          { text: "Overview", link: "/" },
          { text: "Findings", link: "/findings" },
          { text: "90 Day Plan", link: "/plan" }
        ]
      }
    ]
  }
}
