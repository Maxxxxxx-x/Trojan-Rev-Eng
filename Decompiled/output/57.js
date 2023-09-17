function n(n) {
  var t = [];

  for (var u of n.entries)
    if ('FRAME' === u.type) {
      var l = u.location,
        o = u.functionName;
      if ('NATIVE' !== l.type)
        t.push({
          methodName: o,
          file: l.sourceUrl,
          lineNumber: l.line1Based,
          column: 'SOURCE' === l.type ? l.column1Based - 1 : l.virtualOffset0Based,
        });
    }

  return t;
}

module.exports = function (t) {
  if (null == t) return [];

  var module58 = require('./58');

  return Array.isArray(t)
    ? t
    : globals.HermesInternal
    ? n(require('./59')(t))
    : module58.parse(t).map(function (n) {
        return Object.assign({}, n, {
          column: null != n.column ? n.column - 1 : null,
        });
      });
};
