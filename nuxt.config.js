export default {
  mode: "universal",
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "Tortuga Webdesign",
    htmlAttrs: {
      lang: "de"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Generate
   */
  generate: {
    fallback: "404.html"
    //   routes: [
    //     '/blog/ressourcen',
    //     '/blog/webdesign-prozess',
    //     '/portfolio/franco-pioli-datenschutz-und-vereinsmanagement',
    //     '/portfolio/healed-me-i-won-the-lottery',
    //     '/portfolio/internationale-gesellschaft-orientalischer-christen-ev',
    //     '/portfolio/katzenbetreuung-tigerfreund',
    //     '/portfolio/kristina-boess-yoga-und-coaching',
    //     '/portfolio/maschinenverleih-schaetz',
    //     '/portfolio/praeventionszentrum-muenchen-ost',
    //     '/portfolio/qc-quality-control',
    //     '/portfolio/rabe-sport-gmbh',
    //     '/portfolio/schaetz-bautrockner-verleih',
    //     '/portfolio/schaetz-shop-autozubehoer-fuer-ihren-mercedes',
    //     '/portfolio/sefa-sahin-kues-gutachter',
    //     '/portfolio/selma-selcuk-haarsysteme',
    //     '/portfolio/silke-tolkmitt-marketingmanagement',
    //     '/portfolio/sn-trockenbau-gmbh',
    //     '/portfolio/the-corner-house',
    //   ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: "~/assets/styles/global-styles.scss", lang: "scss" }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/lazysizes.client.js" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/gtm"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/markdownit",
    "nuxt-purgecss",
    "@nuxtjs/sitemap",
    "@nuxtjs/svg"
  ],
  /*
   ** Google Tag Manager Config
   */
  gtm: {
    id: "GTM-TQM6M58"
  },
  /*
   ** Sitemap Config
   */
  sitemap: {
    hostname: "https://tortuga-webdesign.de"
  },
  /*
   ** Purgecss Config
   */
  purgecss: {},
  /*
   ** Markdown Config
   ** See: https://github.com/markdown-it/markdown-it
   */
  markdownit: {
    injected: true,
    preset: "default",
    linkify: true,
    breaks: true
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: {
      optimization: {
        splitChunks: {
          layouts: true,
          cacheGroups: {
            styles: {
              name: "styles",
              test: /\.(css|vue)$/,
              chunks: "all",
              enforce: true
            }
          }
        }
      }
    },
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
        prependData:
          '@import "./assets/styles/insert-into-every-component.scss";'
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
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  }
};
