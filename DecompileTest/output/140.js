exports.stringifyValidationResult = function (n, u) {
  var s = u.differences;
  return ["StaticViewConfigValidator: Invalid static view config for '" + n + "'.", '']
    .concat(
      module36.default(
        s.map(function (t) {
          var n = t.type,
            u = t.path;

          switch (n) {
            case 'missing':
              return "- '" + u.join('.') + "' is missing.";

            case 'unequal':
              return "- '" + u.join('.') + "' is the wrong value.";

            case 'unexpected':
              return "- '" + u.join('.') + "' is present but not expected to be.";
          }
        })
      ),
      ['']
    )
    .join('\n');
};

exports.validate = function (t, u, s) {
  var l = [];
  if (
    (n(
      l,
      [],
      {
        bubblingEventTypes: u.bubblingEventTypes,
        directEventTypes: u.directEventTypes,
        uiViewClassName: u.uiViewClassName,
        validAttributes: u.validAttributes,
      },
      {
        bubblingEventTypes: s.bubblingEventTypes,
        directEventTypes: s.directEventTypes,
        uiViewClassName: s.uiViewClassName,
        validAttributes: s.validAttributes,
      }
    ),
    0 === l.length)
  )
    return {
      type: 'valid',
    };
  return {
    type: 'invalid',
    differences: l,
  };
};

var module36 = require('@babel/runtime/helpers/interopRequireDefault')(require('./36'));

function n(s, l, c, o) {
  for (var p in c) {
    var v = c[p];

    if (o.hasOwnProperty(p)) {
      var f = o[p],
        y = u(v);

      if (null != y) {
        var b = u(f);

        if (null != b) {
          l.push(p);
          n(s, l, y, b);
          l.pop();
          continue;
        }
      }

      if (v !== f)
        s.push({
          path: [].concat(module36.default(l), [p]),
          type: 'unequal',
          nativeValue: v,
          staticValue: f,
        });
    } else
      s.push({
        path: [].concat(module36.default(l), [p]),
        type: 'missing',
        nativeValue: v,
      });
  }

  for (var h in o)
    c.hasOwnProperty(h) ||
      require('./138').isIgnored(o[h]) ||
      s.push({
        path: [].concat(module36.default(l), [h]),
        type: 'unexpected',
        staticValue: o[h],
      });
}

function u(t) {
  return 'object' != typeof t || Array.isArray(t) ? null : t;
}
