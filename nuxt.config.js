const environment = require('./environment')

module.exports = {
  mode: 'universal',
  /*
  ** Modules
  */
  modules: [
    'nuxt-sass-resources-loader',
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/axios',
  ],
  /*
  ** Plugins
  */
  plugins: [
    {
      src: '@/plugins/nuxt-client-init.js',
      ssr: false
    }
  ],
  /*
  ** Axios configuration
  */
  axios: {
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt.js App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Universal Application.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&amp;subset=latin-ext' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Load globally required SASS resources.
  */
  sassResources: [
    '@/styles/_bootstrap-variables.scss',
    '@/styles/_bootstrap-helpers.scss',
    '@/styles/_global-variables.scss'
  ],
  /*
  ** Load the main SCSS style.
  */
  css: [
    '@/styles/main.scss'
  ],
  /*
  ** Router configuration
  */
  // router: {
  //   middleware: ['auth']
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /*
    ** Plugins to be bundled into the vendor bundle.
    */
    vendor: [
    ]
  }
}
