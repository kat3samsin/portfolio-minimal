module.exports = {
  //-- SITE SETTINGS -----
  author: "@kat3samsin",
  siteTitle: "Portfolio of Katrina Tantay",
  siteShortTitle: "Katrina Tantay", // Used as logo text in header, footer, and splash screen
  siteDescription: "Portfolio of Katrina Tantay",
  siteUrl: "https://kat3samsin.github.io/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Katrina Tantay", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/katrinatantay/",
    },
    {
      name: "Github",
      url: "https://github.com/kat3samsin",
    },
    {
      name: "Mail",
      url: "mailto:katrinatantay@gmail.com",
    },
    {
      name: "Resume",
      url:
        "https://docs.google.com/document/d/14ApO4Q0q7zVJX7Yc7srDUB5omkdtJ_cnV6qW6orGFPw/edit?usp=sharing",
    },
  ],
  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Work",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: false,
      name: "Resume",
      fileName: "", // the file has to be placed inside the static folder at the root level
      url:
        "https://docs.google.com/document/d/14ApO4Q0q7zVJX7Yc7srDUB5omkdtJ_cnV6qW6orGFPw/edit?usp=sharing", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    // {
    //   name: "Privacy",
    //   url: "/privacy",
    // },
    // {
    //   name: "Imprint",
    //   url: "/imprint",
    // },
  ],
}
