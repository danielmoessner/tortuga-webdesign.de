import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  css: ["@/assets/styles/tailwind.css"],
  modules: ["@nuxt/content", "@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
  compatibilityDate: "2024-11-01",
});
