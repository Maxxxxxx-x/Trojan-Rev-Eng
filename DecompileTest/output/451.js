function n() {
  if (console && console.warn) {
    if ('string' == typeof args[0]) args[0] = 'react-i18next:: '.concat(args[0]);
    (n = console).warn.apply(n, args);
  }
}

exports.warn = n;
exports.warnOnce = t;

exports.loadNamespaces = function (n, o, t) {
  n.loadNamespaces(o, function () {
    if (n.isInitialized) t();
    else {
      n.on('initialized', function o() {
        setTimeout(function () {
          n.off('initialized', o);
        }, 0);
        t();
      });
    }
  });
};

exports.hasLoadedNamespace = function (n, o) {
  var c = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};

  if (!o.languages || !o.languages.length) {
    t('i18n.languages were undefined or empty', o.languages);
    return true;
  }

  if (undefined === o.options.ignoreJSONStructure) return s(n, o, c);
  return o.hasLoadedNamespace(n, {
    precheck: function (o, t) {
      if (c.bindI18n && c.bindI18n.indexOf('languageChanging') > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !t(o.isLanguageChangingTo, n)) return false;
    },
  });
};

exports.getDisplayName = function (n) {
  return n.displayName || n.name || ('string' == typeof n && n.length > 0 ? n : 'Unknown');
};

var o = {};

function t() {
  if (!('string' == typeof args[0] && o[args[0]])) {
    if ('string' == typeof args[0]) o[args[0]] = new Date();
    n.apply(undefined, args);
  }
}

function s(n, o) {
  var t = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
    s = o.languages[0],
    c = !!o.options && o.options.fallbackLng,
    u = o.languages[o.languages.length - 1];
  if ('cimode' === s.toLowerCase()) return true;

  var l = function (n, t) {
    var s = o.services.backendConnector.state[''.concat(n, '|').concat(t)];
    return -1 === s || 2 === s;
  };

  return (
    !(t.bindI18n && t.bindI18n.indexOf('languageChanging') > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !l(o.isLanguageChangingTo, n)) &&
    (!!o.hasResourceBundle(s, n) || !(o.services.backendConnector.backend && (!o.options.resources || o.options.partialBundledLanguages)) || !(!l(s, n) || (c && !l(u, n))))
  );
}
