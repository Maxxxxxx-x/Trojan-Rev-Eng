exports.__esModule = true;

exports.mapStateToPropsFactory = function (t) {
  return t
    ? 'function' == typeof t
      ? require('./581').wrapMapToPropsFunc(t, 'mapStateToProps')
      : require('./584').createInvalidArgFactory(t, 'mapStateToProps')
    : require('./581').wrapMapToPropsConstant(function () {
        return {};
      });
};
