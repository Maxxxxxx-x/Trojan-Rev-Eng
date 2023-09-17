exports.WithTheme = function (t) {
  var l = t.children,
    c = t.themeStyles,
    o = t.styles,
    s = module125.default.useRef(undefined),
    v = module125.default.useRef(undefined),
    h = module125.default.useCallback(
      function (t) {
        if (c && undefined === v.current) v.current = c(t);

        if (o && !module391.default(s.current, o)) {
          s.current = o;
          if (o)
            Object.keys(o).forEach(function (t) {
              if (v.current[t]) v.current[t] = [v.current[t], o[t]];
            });
        }

        return v.current || {};
      },
      [c, o]
    );
  return module125.default.createElement(f.Consumer, null, function (t) {
    return l(h(t), t);
  });
};

var module178 = require('@babel/runtime/helpers/interopRequireDefault')(require('./178')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  module391 = require('@babel/runtime/helpers/interopRequireDefault')(require('./391')),
  module392 = require('@babel/runtime/helpers/interopRequireDefault')(require('./392')),
  f = module125.default.createContext(module392.default);

exports.ThemeContext = f;

exports.ThemeProvider = function (n) {
  var c = n.value,
    o = n.children,
    s = module125.default.useMemo(
      function () {
        return module178.default(module178.default({}, module392.default), c);
      },
      [c]
    );
  return module125.default.createElement(
    f.Provider,
    {
      value: s,
    },
    o
  );
};

exports.useTheme = function () {
  var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
    l = module125.default.useContext(f);
  return module178.default(module178.default({}, l), n.theme);
};
