export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Reyfrases.com | Frases de amor y bonitas',
    // titleTemplate: 'Reyfrases.com | %s',
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-0JP2HXMEJ1',
        async: true
      },
      {
        innerHTML: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag( "js" , new Date()); gtag( "config" , "G-0NGESNM5HL" ); ',
        async: true
      }
    ],
    __dangerouslyDisableSanitizers : [ 'script' ],
    htmlAttrs: {
      lang: 'es',
      amp: false
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Reyfrases.com | descarga las mejores frases bonitas y de amor con un solo click. Facil y rapido.!'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-babel'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
