import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createI18n, useI18n } from 'vue-i18n';

import EN from './i18n/en.json'
import RU from './i18n/ru.json'

// use $t('title')
const i18n = createI18n({
    locale: 'RU',
    messages: {
        EN: EN,
        RU: RU,
    }
})

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app');
