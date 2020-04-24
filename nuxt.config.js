export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // { src: '~/assets/styles/main.scss', lang: 'scss' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/aos", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    'nuxt-purgecss'
  ],
  /*
   ** Markdown Config
   ** See: https://github.com/markdown-it/markdown-it
   */
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    // use: [
    //   'markdown-it-div',
    //   'markdown-it-attrs'
    // ]
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        },
        plugins: []
      }
    },
    loaders: {
      scss: {
        prependData: '@import "./assets/styles/main.scss";',
      }
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
