// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  app:{
    head: {
        title: 'The World Cup Archives',
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    }
  }
})
