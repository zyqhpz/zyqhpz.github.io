// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxt/image",
    "@nuxt/content",
  ],

  headlessui: {
    prefix: "Headless",
  },

  app: {
    baseURL: '',
    head: {
      title: "Haziq Hapiz",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "An aspiring software engineer with a passion to make meaningful impacts!",
        },
      ],
    },
  },

  // Google Analytics Configuration: https://google-analytics.nuxtjs.org
  // googleAnalytics: {
  //   id: process.env.GOOGLE_ANALYTICS_ID,
  // },

  runtimeConfig: {
    public: {
      githubUsername: process.env.GITHUB_USERNAME,
      notionTableId: process.env.NOTION_TABLE_ID,
      notionAboutPageId: process.env.NOTION_ABOUT_PAGE_ID,
      devName: process.env.DEV_NAME,
      devDescription: process.env.DEV_DESCRIPTION,
      devRole: process.env.DEV_ROLE,
      devGithubLink: process.env.DEV_GITHUB_LINK,
      devTwitterLink: process.env.DEV_TWITTER_LINK,
      devLinkedinLink: process.env.DEV_LINKEDIN_LINK,
      devLogo: process.env.DEV_LOGO,
    },
  },
});
