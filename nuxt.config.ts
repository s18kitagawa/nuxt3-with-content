// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content', // https://content.nuxtjs.org/
    '@zadigetvoltaire/nuxt-gtm' // https://github.com/zadigetvoltaire/nuxt-gtm
  ],
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
