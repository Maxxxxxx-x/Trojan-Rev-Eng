exports.__esModule = true;

exports.default = function (o, n, p) {
  t(o, 'mapStateToProps');
  t(n, 'mapDispatchToProps');
  t(p, 'mergeProps');
};

var module578 = require('@babel/runtime/helpers/interopRequireDefault')(require('./578'));

function t(t, n) {
  if (!t) throw new Error('Unexpected value for ' + n + ' in connect.');
  if (!(('mapStateToProps' !== n && 'mapDispatchToProps' !== n) || Object.prototype.hasOwnProperty.call(t, 'dependsOnOwnProps')))
    module578.default('The selector for ' + n + ' of connect did not specify a value for dependsOnOwnProps.');
}
