// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",

  nitro: { compressPublicAssets: true },

  modules: [
    ['@nuxtjs/tailwindcss'],
    ['@nuxtjs/color-mode'],
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]
  ],

  imports: {
    dirs: ['./stores']
  },

  app: {
    head: {
      title: 'Portfolio - Alexis Heroin',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Portfolio Alexis Heroin' },
      ]
    }
  }
})
