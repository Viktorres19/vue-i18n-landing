import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

import './assets/main.css'

const localeStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang || defaultLocale,
  fallbackLocale: 'ar',
  messages
})

createApp(App, {
  setup() {
    const {t} = useI18n()
    return {t}
  }
})
  .use(router)
  .use(i18n)
  .mount('#app')
