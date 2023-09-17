var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17')),
  module125 = require('@babel/runtime/helpers/interopRequireDefault')(require('./125')),
  ReactNative = require('react-native');

function l() {
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

var s = (function (s) {
  module13.default(v, s);

  var h = v,
    p = l(),
    y = function () {
      var t,
        e = module17.default(h);

      if (p) {
        var n = module17.default(this).constructor;
        t = Reflect.construct(e, arguments, n);
      } else t = e.apply(this, arguments);

      return module15.default(this, t);
    };

  function v() {
    module7.default(this, v);
    return y.apply(this, arguments);
  }

  module8.default(v, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this.props,
          e = t.startAsync,
          n = t.onFinish;
        e().then(function () {
          n();
        });
      },
    },
    {
      key: 'render',
      value: function () {
        return module125.default.createElement(ReactNative.View, {
          style: {
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
          },
        });
      },
    },
  ]);
  return v;
})(module125.default.PureComponent);

exports.default = s;
