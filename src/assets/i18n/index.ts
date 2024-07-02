import en from './en.json';
import ru from './ru.json';
import {createI18n} from 'vue-i18n';

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    messages: {
        en,
        ru
    }
});

export default i18n;