exports.__esModule = true;

exports.mapDispatchToPropsFactory = function (t) {
  return t && 'object' == typeof t
    ? require('./581').wrapMapToPropsConstant(function (p) {
        return module586.default(t, p);
      })
    : t
    ? 'function' == typeof t
      ? require('./581').wrapMapToPropsFunc(t, 'mapDispatchToProps')
      : require('./584').createInvalidArgFactory(t, 'mapDispatchToProps')
    : require('./581').wrapMapToPropsConstant(function (o) {
        return {
          dispatch: o,
        };
      });
};

var module586 = require('@babel/runtime/helpers/interopRequireDefault')(require('./586'));
