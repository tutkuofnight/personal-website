export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tutku Uçan',
    htmlAttrs: {
      lang: ['tr' , 'en'], 
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Gelişmeyi ve geliştirmeyi seven' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css',
      },
    ],
    script: [
      {
        src: './utils/gtm.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', 'static/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  loading: {color: '#94BDED'},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n'
  ],
  // i18n: {
  //   locales: ["en" , "tr"],
  //   defaultLocale: "en",
  //   vueI18n : {
  //     messages: {
  //       en: require('./locales/en.json'),
  //       tr: require('./locales/tr.json')
  //     }
  //   }

  // },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
