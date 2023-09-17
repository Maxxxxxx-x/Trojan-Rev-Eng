exports.I18nextProvider = function (t) {
  var u = t.i18n,
    o = t.defaultNS,
    c = t.children,
    l = module125.useMemo(
      function () {
        return {
          i18n: u,
          defaultNS: o,
        };
      },
      [u, o]
    );
  return module125.createElement(
    require('./452').I18nContext.Provider,
    {
      value: l,
    },
    c
  );
};

var module125 = require('./125');
