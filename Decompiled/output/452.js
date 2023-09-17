exports.setDefaults = l;

exports.getDefaults = function () {
  return module453;
};

exports.setI18n = O;
exports.getI18n = y;

exports.composeInitialProps = function (t) {
  return function (n) {
    return new Promise(function (s) {
      var o = N();
      if (t.getInitialProps)
        t.getInitialProps(n).then(function (t) {
          s(i(i({}, t), o));
        });
      else s(o);
    });
  };
};

exports.getInitialProps = N;

var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module125 = require('./125');

function c(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, o);
  }

  return s;
}

function i(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      c(Object(o), true).forEach(function (n) {
        module241.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      c(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var u,
  module453 = {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: '',
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
    useSuspense: true,
    unescape: require('./453').unescape,
  },
  f = module125.createContext();

function l() {
  var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
  module453 = i(i({}, module453), t);
}

exports.I18nContext = f;

var b = (function () {
  function s() {
    module7.default(this, s);
    this.usedNamespaces = {};
  }

  module8.default(s, [
    {
      key: 'addUsedNamespaces',
      value: function (t) {
        var n = this;
        t.forEach(function (t) {
          if (!n.usedNamespaces[t]) n.usedNamespaces[t] = true;
        });
      },
    },
    {
      key: 'getUsedNamespaces',
      value: function () {
        return Object.keys(this.usedNamespaces);
      },
    },
  ]);
  return s;
})();

function O(t) {
  u = t;
}

function y() {
  return u;
}

exports.ReportNamespaces = b;
var v = {
  type: '3rdParty',
  init: function (t) {
    l(t.options.react);
    O(t);
  },
};

function N() {
  var t = y(),
    n = t.reportNamespaces ? t.reportNamespaces.getUsedNamespaces() : [],
    s = {},
    o = {};
  t.languages.forEach(function (s) {
    o[s] = {};
    n.forEach(function (n) {
      o[s][n] = t.getResourceBundle(s, n) || {};
    });
  });
  s.initialI18nStore = o;
  s.initialLanguage = t.language;
  return s;
}

exports.initReactI18next = v;
