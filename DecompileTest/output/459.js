exports.useSSR = function (t, o) {
  var s = (arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}).i18n,
    module452 = (module125.useContext(require('./452').I18nContext) || {}).i18n,
    module452 = s || module452 || require('./452').getI18n();

  if (module452.options && module452.options.isClone) return;

  if (t && !module452.initializedStoreOnce) {
    module452.services.resourceStore.data = t;
    module452.options.ns = Object.values(t).reduce(function (n, t) {
      Object.keys(t).forEach(function (t) {
        if (n.indexOf(t) < 0) n.push(t);
      });
      return n;
    }, module452.options.ns);
    module452.initializedStoreOnce = true;
    module452.isInitialized = true;
  }

  if (o && !module452.initializedLanguageOnce) {
    module452.changeLanguage(o);
    module452.initializedLanguageOnce = true;
  }
};

var module125 = require('./125');
