// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content' // https://content.nuxtjs.org/
  ],

  devtools: {
    enabled: true
  },

  devServer: {
    port: 5555 // custom dev server port number
  }
})
