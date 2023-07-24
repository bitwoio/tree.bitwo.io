const themes = require('daisyui/src/theming/themes');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Bitwo',
      link: [
        { rel: 'icon', href: 'https://arweave.net/yR5W4hOdA5C-YUKGpXIWx4_yMgtV6G_ZFSn8AdUGdM4' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Bitwo' },
        { name: 'application-name', content: 'Bitwo' },
        { name: 'msapplication-TileColor', content: '#B000E3' },
        { name: 'msapplication-TileImage', content: 'https://arweave.net/yR5W4hOdA5C-YUKGpXIWx4_yMgtV6G_ZFSn8AdUGdM4' },
        { name: 'theme-color', content: '#B000E3' },
      ],
    },
    baseURL: '/',
    buildAssetsDir: 'assets',
    rootId: '__bitwo_links',
    rootTag: 'body'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  tailwindcss: {
    viewer: false,
    config: {
      daisyui: {
        themes: [
          {
            light: {
              ...themes['[data-theme=light]'],
              primary: '#B000E3',
              ".fill-logo-primary": {
                fill: '#B000E3'
              },
              ".fill-logo-secondary": {
                fill: '#FFFFFF'
              },
              ".bg-logo": {
                'background-color': '#020323'
              }
            },
            dark: {
              ...themes['[data-theme=dark]'],
              primary: '#B000E3',
              ".fill-logo-primary": {
                fill: '#B000E3'
              },
              ".fill-logo-secondary": {
                fill: '#020323'
              },
              ".bg-logo": {
                'background-color': '#FFFFFF'
              }
            },
            cyberpunk: {
              ...themes['[data-theme=cyberpunk]'],
              ".fill-logo-primary": {
                fill: '#B000E3'
              },
              ".fill-logo-secondary": {
                fill: '#020323'
              },
              ".bg-logo": {
                'background-color': '#FFFFFF'
              }
            },
            synthwave: {
              ...themes['[data-theme=synthwave]'],
              ".fill-logo-primary": {
                fill: '#B000E3'
              },
              ".fill-logo-secondary": {
                fill: '#020323'
              },
              ".bg-logo": {
                'background-color': '#FFFFFF'
              }
            },
            retro: {
              ...themes['[data-theme=retro]'],
              ".fill-logo-primary": {
                fill: '#B000E3'
              },
              ".fill-logo-secondary": {
                fill: '#020323'
              },
              ".bg-logo": {
                'background-color': '#FFFFFF'
              }
            }
          },
        ]
      },
      plugins: [require('daisyui')],
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://tree.bitwo.io/',
    locales: [
      {
        code: 'us',
        iso: 'en-US',
        name: 'English',
        nativeName: 'English',
        files: ['en-US.json'],
      },
      {
        code: 'br',
        iso: 'pt-BR',
        name: 'Portuguese',
        nativeName: 'Português',
        files: ['pt-BR.json'],
      },
    ],
    lazy: true,
    langDir: 'lang',
    strategy: 'no_prefix',
    defaultLocale: 'us',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'bitwo_i18n_redirected',
      redirectOn: 'root',
      cookieCrossOrigin: true,
    },
  },
});
