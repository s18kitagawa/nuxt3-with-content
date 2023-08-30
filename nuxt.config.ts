import {
  baseName,
  baseDesc,
  authorName,
  snsTwitter,
  snsFb,
  baseUrl
} from './utils/constants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/
    '@zadigetvoltaire/nuxt-gtm', // https://github.com/zadigetvoltaire/nuxt-gtm
    'nuxt-jsonld' // https://github.com/ymmooot/nuxt-jsonld
  ],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in' // default
    },

    head: {
      htmlAttrs: { lang: 'ja', prefix: 'og: http://ogp.me/ns#' },
      titleTemplate: '%s | ' + baseName, // https://nuxt.com/docs/getting-started/seo-meta#title-template

      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no'
        },
        { hid: 'robots', name: 'robots', content: 'index, follow' },

        { hid: 'author', name: 'author', content: authorName },
        { hid: 'og:site_name', property: 'og:site_name', content: baseName },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
        { hid: 'og:title', property: 'og:title', content: baseName },
        {
          hid: 'og:description',
          property: 'og:description',
          content: baseDesc
        },
        { hid: 'og:url', property: 'og:url', content: baseUrl },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/ogp/ogp_common.png'
        },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: snsTwitter },

        { property: 'fb:app_id', content: snsFb }
      ],

      link: [
        { rel: 'canonical', href: baseUrl },

        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/images/favicons/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/images/favicons/favicon-icon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/favicons/favicon-icon-32x32.png'
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: '/images/favicons/apple-touch-icon.png'
        },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Open+Sans:wght@400;700&display=swap',
          as: 'style'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Open+Sans:wght@400;700&display=swap',
          media: 'print',
          onload: "this.media='all'"
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        }
      ]
    }
  },

  css: ['@/assets/styles/main.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
          @use "./assets/styles/app.sass" as *
          ` // active global Sass function
        }
      }
    }
  },

  components: [
    {
      path: '~/components/',
      pathPrefix: false // default true  | https://nuxt.com/docs/guide/directory-structure/components#component-names
    }
  ],

  devtools: {
    enabled: true
  },

  devServer: {
    port: 5555 // custom dev server port number
  },

  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-XXXXXX', // Your GTM container ID
        defer: true
      }
    }
  }
})
