// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui", "@nuxt/image"],
  headlessui: {
    prefix: "Headless",
  },
  app: {
    head: {
      title: "Haziq Hapiz",
      meta: [{ charset: "utf-8" },
        {
          name: 'description',
          content: 'An aspiring software engineer with a passion to make meaningful impacts!',
        }
      ],
    },
  },
})