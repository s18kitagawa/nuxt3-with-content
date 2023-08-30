// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content' // https://content.nuxtjs.org/
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
  }
})
