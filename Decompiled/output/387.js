var module7 = require('@babel/runtime/helpers/interopRequireDefault')(require('./7')),
  module8 = require('@babel/runtime/helpers/interopRequireDefault')(require('./8')),
  module13 = require('@babel/runtime/helpers/interopRequireDefault')(require('./13')),
  module15 = require('@babel/runtime/helpers/interopRequireDefault')(require('./15')),
  module17 = require('@babel/runtime/helpers/interopRequireDefault')(require('./17'));

function c() {
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

var module125 = (function (f) {
  module13.default(h, f);

  var l = h,
    s = c(),
    p = function () {
      var t,
        e = module17.default(l);

      if (s) {
        var n = module17.default(this).constructor;
        t = Reflect.construct(e, arguments, n);
      } else t = e.apply(this, arguments);

      return module15.default(this, t);
    };

  function h() {
    module7.default(this, h);
    return p.apply(this, arguments);
  }

  module8.default(h, [
    {
      key: 'componentDidMount',
      value: function () {
        if (!this.props.manager) throw new Error('Looks like you forgot to wrap your root component with `Provider` component from `@ant-design/react-native`.\n\n');
        this._key = this.props.manager.mount(this.props.children);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function () {
        this.props.manager.update(this._key, this.props.children);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.props.manager.unmount(this._key);
      },
    },
    {
      key: 'render',
      value: function () {
        return null;
      },
    },
  ]);
  return h;
})(require('@babel/runtime/helpers/interopRequireDefault')(require('./125')).default.Component);

exports.default = module125;
