export default {
  title: "Audit Portal",
  description: "SEO + AI visibility audit",

  base: "/my-profile/",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Audit", link: "/audit/" },
      { text: "Resume", link: "/resume" },
      { text: "About", link: "/about" }
    ],

    sidebar: {
      "/audit/": [
        {
          text: "Audit",
          items: [
            { text: "Overview", link: "/audit/" },
            { text: "Findings", link: "/audit/findings" },
            { text: "90 Day Plan", link: "/audit/plan" }
          ]
        }
      ]
    }
  }
}
