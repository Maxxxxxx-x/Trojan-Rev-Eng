exports.default = function (n) {
  return i18next.default.t(n);
};

var i18next = require('@babel/runtime/helpers/interopRequireDefault')(require('i18next')),
  module443 = require('@babel/runtime/helpers/interopRequireDefault')(require('./443')),
  module444 = require('@babel/runtime/helpers/interopRequireDefault')(require('./444')),
  module445 = require('@babel/runtime/helpers/interopRequireDefault')(require('./445')),
  module446 = require('@babel/runtime/helpers/interopRequireDefault')(require('./446')),
  f = {
    zh: {
      translation: module443.default,
    },
    hk: {
      translation: module444.default,
    },
    en: {
      translation: module445.default,
    },
    vi: {
      translation: module446.default,
    },
  };

i18next.default.use(require('./447').initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: f,
  fallbackLng: require('./460').lang,
  interpolation: {
    escapeValue: false,
  },
});
