import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import { getLocalStoreLangue } from '../../utils/LocalStore';

const langes = getLocalStoreLangue();

const i18n = i18next
  .use(HttpApi)
  .init({
    fallbackLng: langes,
    preload: ['en', 'es'],
    ns: 'translations',
    defaultNS: 'translations',
    fallbackNS: false,
    debug: false,
    detection: {
      order: ['querystring', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
    },
    backend: {
      loadPath: '../../../src/assets/i18n/{{lng}}/{{ns}}.json',
    }
  }, (err, t) => {
    if (err) return console.error(err)
  });
export default i18n;