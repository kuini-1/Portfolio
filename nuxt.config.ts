import Aura from '@primevue/themes/aura'
import pkg from './package.json'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
        },
      ],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-04',

  ssr: true,
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      // eslint-disable-next-line node/prefer-global/process
      APP_MODE: process.env?.NODE_ENV,
    },
  },

  modules: [
    '@primevue/nuxt-module',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    '@nuxt/fonts',
    '@formkit/nuxt',
    // 'cookie-universal-nuxt',
  ],

  unocss: {
    safelist: [
      'w-1/10',
      'w-2/10',
      'w-3/10',
      'w-4/10',
      'w-5/10',
      'w-6/10',
      'w-7/10',
      'w-8/10',
      'w-9/10',
      'w-10/10',
    ],
  },

  formkit: {
    autoImport: true,
  },

  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue'],
    },
    // Options
  },

  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'de', file: 'de.json', name: 'German' },
    ],
    vueI18n: './vue-i18n.options.ts',
  },

  primevue: {
    autoImport: false,
    components: {
      exclude: ['Chart', 'Editor'],
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
        },
      },
      ripple: true,
    },
  },

  css: [
    'primeicons/primeicons.css',
    '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss',
    '@/assets/css/app.css',
  ],

  build: {
    transpile: ['nuxt', 'primevue', 'formkit-primevue'],
  },

  sourcemap: {
    client: false,
    server: false,
  },
})
