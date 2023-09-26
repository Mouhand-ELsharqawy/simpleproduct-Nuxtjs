// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // vite: false,
  modules: [ '@nuxtjs/tailwindcss' ],
  app: {
    head: {
      title: 'dojo',
      meta: [
        { name: 'description', content: 'every thing about my project ' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
})
