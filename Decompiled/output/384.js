var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  u = module125.default.createContext({});

exports.LocaleContext = u;
var o = module125.default.memo(function (o) {
  var n = module125.default.useMemo(
    function () {
      return {
        antLocale: module178.default(module178.default({}, o.locale), {
          exist: true,
        }),
      };
    },
    [o.locale]
  );
  return module125.default.createElement(
    u.Provider,
    {
      value: n,
    },
    o.children
  );
});
exports.default = o;
