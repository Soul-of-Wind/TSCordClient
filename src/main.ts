import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import i18n from '@/assets/i18n';
import '@/assets/style/index.scss';
import './assets/tailwind.css';

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app');