export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tutku Uçan | Software Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tutku Uçan was improve himself about Software Development since 4 years about Web Development, DevOps, Databases and Programming Basics. Now he is professional Software Developer. He worked at eQuota GmbH as Frontend Developer on beginning his career. Now he is Freelancer and developing own Full-Stack Web Projects.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'static/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  axios:{
    proxyHeaders: false,
    credentials: true,
    proxy: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
