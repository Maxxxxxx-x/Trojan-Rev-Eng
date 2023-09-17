exports.__esModule = true;

exports.wrapMapToPropsConstant = function (n) {
  return function (o) {
    var p = n(o);

    function s() {
      return p;
    }

    s.dependsOnOwnProps = false;
    return s;
  };
};

exports.getDependsOnOwnProps = n;

exports.wrapMapToPropsFunc = function (o, p) {
  return function (p, s) {
    s.displayName;

    var t = function (n, o) {
      return t.dependsOnOwnProps ? t.mapToProps(n, o) : t.mapToProps(n, undefined);
    };

    t.dependsOnOwnProps = true;

    t.mapToProps = function (p, s) {
      t.mapToProps = o;
      t.dependsOnOwnProps = n(o);
      var u = t(p, s);

      if ('function' == typeof u) {
        t.mapToProps = u;
        t.dependsOnOwnProps = n(u);
        u = t(p, s);
      }

      return u;
    };

    return t;
  };
};

require('@babel/runtime/helpers/interopRequireDefault')(require('./582'));

function n(n) {
  return n.dependsOnOwnProps ? Boolean(n.dependsOnOwnProps) : 1 !== n.length;
}
