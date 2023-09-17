require('@babel/runtime/helpers/interopRequireDefault')(require('./4'));

var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module180 = require('@babel/runtime/helpers/interopRequireDefault')(require('./180')),
  module179 = require('@babel/runtime/helpers/interopRequireDefault')(require('./179')),
  module125 = (function (t, e) {
    if (!e && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = p(e);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var l = u ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (l && (l.get || l.set)) Object.defineProperty(o, c, l);
        else o[c] = t[c];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('./125'));

function p(t) {
  if ('function' != typeof WeakMap) return null;
  var e = new WeakMap(),
    n = new WeakMap();
  return (p = function (t) {
    return t ? n : e;
  })(t);
}

function f() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var module297 = (function (l, ...args) {
  module13.default(b, l);

  var p = b,
    module297 = f(),
    y = function () {
      var t,
        e = module17.default(p);

      if (module297) {
        var n = module17.default(this).constructor;
        t = Reflect.construct(e, arguments, n);
      } else t = e.apply(this, arguments);

      return module15.default(this, t);
    };

  function b() {
    var e;
    module7.default(this, b);
    (e = y.call(this, ...args)).state = {
      inspector: null,
      mainKey: 1,
      hasError: false,
    };
    e._subscription = null;
    return e;
  }

  module8.default(b, [
    {
      key: 'componentDidMount',
      value: function () {},
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (null != this._subscription) this._subscription.remove();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          e = module125.createElement(
            module180.default,
            {
              collapsable: !this.state.inspector,
              key: this.state.mainKey,
              pointerEvents: 'box-none',
              style: v.appContainer,
              ref: function (e) {
                t._mainRef = e;
              },
            },
            this.props.children
          ),
          n = this.props.WrapperComponent;
        if (null != n)
          e = module125.createElement(
            n,
            {
              initialProps: this.props.initialProps,
              fabric: true === this.props.fabric,
              showArchitectureIndicator: true === this.props.showArchitectureIndicator,
            },
            e
          );
        return module125.createElement(
          require('./297').RootTagContext.Provider,
          {
            value: require('./297').createRootTag(this.props.rootTag),
          },
          module125.createElement(
            module180.default,
            {
              style: v.appContainer,
              pointerEvents: 'box-none',
            },
            !this.state.hasError && e,
            this.state.inspector,
            null
          )
        );
      },
    },
  ]);
  return b;
})(module125.Component);

module297.getDerivedStateFromError = undefined;
var v = module179.default.create({
  appContainer: {
    flex: 1,
  },
});
module.exports = module297;
