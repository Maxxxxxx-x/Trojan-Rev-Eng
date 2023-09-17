exports.getComponentLocale = function (t, n, o, c) {
  var u = {};
  if (n && n.antLocale && n.antLocale[o]) u = n.antLocale[o];
  else {
    var f = c();
    u = f.default || f;
  }
  var L = module178.default({}, u);

  if (t.locale) {
    L = module178.default(module178.default({}, L), t.locale);
    if (t.locale.lang) L.lang = module178.default(module178.default({}, u.lang), t.locale.lang);
  }

  return L;
};

exports.getLocaleCode = function (l) {
  var t = l.antLocale && l.antLocale.locale;
  if (l.antLocale && l.antLocale.exist && !t) return 'zh-cn';
  return t;
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178'));
