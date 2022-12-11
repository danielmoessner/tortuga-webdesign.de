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
   ** Generate
   */
  // generate: {
  //   fallback: "404.html",
  // },
  /*
   ** Global CSS
   */
  css: ["@/assets/styles/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [],
  /*
   ** Nuxt.js build-modules
   */
  // buildModules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content"],
  /*
   ** Google Tag Manager Config
   */
  // gtm: {
  //   id: "GTM-TQM6M58",
  // },
  /*
   ** Build configuration
   */
  // build: {
  //   extractCSS: false,
  // },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
