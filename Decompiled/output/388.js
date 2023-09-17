var module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native'),
  module389 = require('@babel/runtime/helpers/interopRequireDefault')(require('./389'));

function s() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var _ = module125.default.createContext(null);

exports.PortalContext = _;
var p = 'ANT_DESIGN_MOBILE_RN_ADD_PORTAL',
  h = 'ANT_DESIGN_MOBILE_RN_REMOVE_PORTAL',
  y = ReactNative.DeviceEventEmitter || new ReactNative.NativeEventEmitter(),
  v = new (function e() {
    var t = this;
    module7.default(this, e);
    this.nextKey = 1e4;

    this.add = function (e) {
      var n = t.nextKey++;
      y.emit(p, e, n);
      return n;
    };

    this.remove = function (e) {
      return y.emit(h, e);
    };
  })();
exports.portal = v;

var E = (function (v) {
  module13.default(N, v);

  var E = N,
    x = s(),
    R = function () {
      var e,
        t = module17.default(E);

      if (x) {
        var o = module17.default(this).constructor;
        e = Reflect.construct(t, arguments, o);
      } else e = t.apply(this, arguments);

      return module15.default(this, e);
    };

  function N() {
    var e;
    module7.default(this, N);
    (e = R.apply(this, arguments))._nextKey = 0;
    e._queue = [];

    e._setManager = function (t) {
      e._manager = t;
    };

    e._mount = function (t, n) {
      var u = n || e._nextKey++;
      if (e._manager) e._manager.mount(u, t);
      else
        e._queue.push({
          type: 'mount',
          key: u,
          children: t,
        });
      return u;
    };

    e._update = function (t, n) {
      if (e._manager) e._manager.update(t, n);
      else {
        var u = {
            type: 'mount',
            key: t,
            children: n,
          },
          o = e._queue.findIndex(function (e) {
            return 'mount' === e.type || ('update' === e.type && e.key === t);
          });

        if (o > -1) e._queue[o] = u;
        else e._queue.push(u);
      }
    };

    e._unmount = function (t) {
      if (e._manager) e._manager.unmount(t);
      else
        e._queue.push({
          type: 'unmount',
          key: t,
        });
    };

    return e;
  }

  module8.default(N, [
    {
      key: 'componentDidMount',
      value: function () {
        var e = this._manager,
          t = this._queue;

        for (this._addType = y.addListener(p, this._mount), this._removeType = y.addListener(h, this._unmount); t.length && e; ) {
          var n = t.pop();
          if (n)
            switch (n.type) {
              case 'mount':
                e.mount(n.key, n.children);
                break;

              case 'update':
                e.update(n.key, n.children);
                break;

              case 'unmount':
                e.unmount(n.key);
            }
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this._addType.remove();

        this._removeType.remove();
      },
    },
    {
      key: 'render',
      value: function () {
        return module125.default.createElement(
          _.Provider,
          {
            value: {
              mount: this._mount,
              update: this._update,
              unmount: this._unmount,
            },
          },
          module125.default.createElement(
            ReactNative.View,
            {
              style: k.container,
              collapsable: false,
            },
            this.props.children
          ),
          module125.default.createElement(module389.default, {
            ref: this._setManager,
          })
        );
      },
    },
  ]);
  return N;
})(module125.default.Component);

exports.default = E;
E.displayName = 'Portal.Host';
var k = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
  },
});
