exports.nodesToString = y;

exports.Trans = function (n) {
  var o = n.children,
    s = n.count,
    c = n.parent,
    p = n.i18nKey,
    f = n.context,
    h = n.tOptions,
    v = undefined === h ? {} : h,
    O = n.values,
    j = n.defaults,
    E = n.components,
    k = n.ns,
    x = n.i18n,
    w = n.t,
    N = n.shouldUnescape,
    P = module96.default(n, l),
    module452 = module125.useContext(require('./452').I18nContext) || {},
    T = module452.i18n,
    D = module452.defaultNS,
    module452 = x || T || require('./452').getI18n();

  if (!module452) {
    require('./451').warnOnce('You will need to pass in an i18next instance by using i18nextReactModule');

    return o;
  }

  var V =
    w ||
    module452.t.bind(module452) ||
    function (t) {
      return t;
    };

  if (f) v.context = f;
  var module452 = u(u({}, require('./452').getDefaults()), module452.options && module452.options.react),
    H = k || V.ns || D || (module452.options && module452.options.defaultNS);
  H = 'string' == typeof H ? [H] : H || ['translation'];

  var F = j || y(o, module452) || module452.transEmptyNodeValue || p,
    I = module452.hashTransKey,
    _ = p || (I ? I(F) : F),
    A = O
      ? v.interpolation
      : {
          interpolation: u(
            u({}, v.interpolation),
            {},
            {
              prefix: '#$?',
              suffix: '?$#',
            }
          ),
        },
    C = u(
      u(
        u(
          u({}, v),
          {},
          {
            count: s,
          },
          O
        ),
        A
      ),
      {},
      {
        defaultValue: F,
        ns: H,
      }
    ),
    M = _ ? V(_, C) : F,
    R = b(E || o, M, module452, module452, C, N),
    U = undefined !== c ? c : module452.defaultTransParent;

  return U ? module125.createElement(U, P, R) : R;
};

var module96 = require('@babel/runtime/helpers/interopRequireDefault')(require('./96')),
  module11 = require('@babel/runtime/helpers/interopRequireDefault')(require('./11')),
  module241 = require('@babel/runtime/helpers/interopRequireDefault')(require('./241')),
  module125 = require('./125'),
  module449 = require('@babel/runtime/helpers/interopRequireDefault')(require('./449')),
  c = ['format'],
  l = ['children', 'count', 'parent', 'i18nKey', 'context', 'tOptions', 'values', 'defaults', 'components', 'ns', 'i18n', 't', 'shouldUnescape'];

function p(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    if (n)
      i = i.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, i);
  }

  return o;
}

function u(t) {
  for (var n = 1; n < arguments.length; n++) {
    var i = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(i), true).forEach(function (n) {
        module241.default(t, n, i[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(i));
    else
      p(Object(i)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n));
      });
  }

  return t;
}

function f(t, n) {
  if (!t) return false;
  var o = t.props ? t.props.children : t.children;
  return n ? o.length > 0 : !!o;
}

function h(t) {
  return t ? (t.props ? t.props.children : t.children) : [];
}

function v(t) {
  return Array.isArray(t) ? t : [t];
}

function y(o, s) {
  if (!o) return '';
  var l = '',
    p = v(o),
    u = s.transSupportBasicHtmlNodes && s.transKeepBasicHtmlNodesFor ? s.transKeepBasicHtmlNodesFor : [];
  p.forEach(function (o, p) {
    if ('string' == typeof o) l += ''.concat(o);
    else if (module125.isValidElement(o)) {
      var f = Object.keys(o.props).length,
        h = u.indexOf(o.type) > -1,
        v = o.props.children;
      if (!v && h && 0 === f) l += '<'.concat(o.type, '/>');
      else if (v || (h && 0 === f)) {
        if (o.props.i18nIsDynamicList) l += '<'.concat(p, '></').concat(p, '>');
        else if (h && 1 === f && 'string' == typeof v) l += '<'.concat(o.type, '>').concat(v, '</').concat(o.type, '>');
        else {
          var b = y(v, s);
          l += '<'.concat(p, '>').concat(b, '</').concat(p, '>');
        }
      } else l += '<'.concat(p, '></').concat(p, '>');
    } else if (null === o) require('./451').warn('Trans: the passed in value is invalid - seems you passed in a null child.');
    else if ('object' === module11.default(o)) {
      var O = o.format,
        j = module96.default(o, c),
        E = Object.keys(j);

      if (1 === E.length) {
        var k = O ? ''.concat(E[0], ', ').concat(O) : E[0];
        l += '{{'.concat(k, '}}');
      } else
        require('./451').warn(
          'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
          o
        );
    } else
      require('./451').warn(
        'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
        o
      );
  });
  return l;
}

function b(t, o, c, l, p, y) {
  if ('' === o) return [];
  var b = l.transKeepBasicHtmlNodesFor || [],
    O = o && new RegExp(b.join('|')).test(o);
  if (!t && !O) return [o];
  var j = {};
  !(function t(o) {
    v(o).forEach(function (o) {
      if ('string' != typeof o) f(o) ? t(h(o)) : 'object' !== module11.default(o) || module125.isValidElement(o) || Object.assign(j, o);
    });
  })(t);
  var E = module449.default.parse('<0>'.concat(o, '</0>')),
    k = u(u({}, j), p);

  function x(t, n, o) {
    var module449,
      c = h(t),
      l = N(c, n.children, o);
    module449 = c;
    return '[object Array]' === Object.prototype.toString.call(module449) &&
      module449.every(function (t) {
        return module125.isValidElement(t);
      }) &&
      0 === l.length
      ? c
      : l;
  }

  function w(t, n, o, s, c) {
    if (t.dummy) t.children = n;
    o.push(
      module125.cloneElement(
        t,
        u(
          u({}, t.props),
          {},
          {
            key: s,
          }
        ),
        c ? undefined : n
      )
    );
  }

  function N(o, s, p) {
    var h = v(o);
    return v(s).reduce(function (o, s, v) {
      var j,
        E,
        P,
        S = s.children && s.children[0] && s.children[0].content && c.services.interpolator.interpolate(s.children[0].content, k, c.language);

      if ('tag' === s.type) {
        var T = h[parseInt(s.name, 10)];
        if (!T && 1 === p.length && p[0][s.name]) T = p[0][s.name];
        if (!T) T = {};
        var D =
            0 !== Object.keys(s.attrs).length
              ? ((j = {
                  props: s.attrs,
                }),
                ((P = u({}, (E = T))).props = Object.assign(j.props, E.props)),
                P)
              : T,
          K = module125.isValidElement(D),
          V = K && f(s, true) && !s.voidElement,
          B = O && 'object' === module11.default(D) && D.dummy && !K,
          H = 'object' === module11.default(t) && null !== t && Object.hasOwnProperty.call(t, s.name);

        if ('string' == typeof D) {
          var F = c.services.interpolator.interpolate(D, k, c.language);
          o.push(F);
        } else if (f(D) || V) {
          w(D, x(D, s, p), o, v);
        } else if (B) {
          var I = N(h, s.children, p);
          o.push(
            module125.cloneElement(
              D,
              u(
                u({}, D.props),
                {},
                {
                  key: v,
                }
              ),
              I
            )
          );
        } else if (Number.isNaN(parseFloat(s.name))) {
          if (H) w(D, x(D, s, p), o, v, s.voidElement);
          else if (l.transSupportBasicHtmlNodes && b.indexOf(s.name) > -1) {
            if (s.voidElement)
              o.push(
                module125.createElement(s.name, {
                  key: ''.concat(s.name, '-').concat(v),
                })
              );
            else {
              var _ = N(h, s.children, p);

              o.push(
                module125.createElement(
                  s.name,
                  {
                    key: ''.concat(s.name, '-').concat(v),
                  },
                  _
                )
              );
            }
          } else if (s.voidElement) o.push('<'.concat(s.name, ' />'));
          else {
            var A = N(h, s.children, p);
            o.push('<'.concat(s.name, '>').concat(A, '</').concat(s.name, '>'));
          }
        } else if ('object' !== module11.default(D) || K)
          1 === s.children.length && S
            ? o.push(
                module125.cloneElement(
                  D,
                  u(
                    u({}, D.props),
                    {},
                    {
                      key: v,
                    }
                  ),
                  S
                )
              )
            : o.push(
                module125.cloneElement(
                  D,
                  u(
                    u({}, D.props),
                    {},
                    {
                      key: v,
                    }
                  )
                )
              );
        else {
          var C = s.children[0] ? S : null;
          if (C) o.push(C);
        }
      } else if ('text' === s.type) {
        var M = l.transWrapTextNodes,
          R = y ? l.unescape(c.services.interpolator.interpolate(s.content, k, c.language)) : c.services.interpolator.interpolate(s.content, k, c.language);
        if (M)
          o.push(
            module125.createElement(
              M,
              {
                key: ''.concat(s.name, '-').concat(v),
              },
              R
            )
          );
        else o.push(R);
      }

      return o;
    }, []);
  }

  return h(
    N(
      [
        {
          dummy: true,
          children: t || [],
        },
      ],
      E,
      v(t || [])
    )[0]
  );
}
