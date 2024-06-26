import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n'; 

const i18n = createI18n({
    legacy: false,
});

interface UserMem {
    name: string
}

const a: UserMem = {
    name: 'kotaro'
};

console.log(a);

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(i18n)
    .mount('#app');
