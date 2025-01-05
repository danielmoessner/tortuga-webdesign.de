// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
   ** Headers of the page
   */
  app: {
    head: {
      title: "Tortuga Webdesign",
      htmlAttrs: {
        lang: "de",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  /*
   ** Global CSS
   */
  css: ["@/assets/styles/tailwind.css"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content", "@nuxt/eslint"],

  /*
   ** Build configuration
   */
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-08-14",
});