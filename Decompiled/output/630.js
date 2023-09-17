var module642 = (function module633(t) {
  var module633 = new (require('./631'))(t),
    module633 = require('./634')(require('./631').prototype.request, module633);

  require('./633').extend(module633, require('./631').prototype, module633);

  require('./633').extend(module633, module633);

  module633.create = function (n) {
    return module633(require('./635')(t, n));
  };

  return module633;
})(require('./642'));

module642.Axios = require('./631');
module642.CanceledError = require('./640');
module642.CancelToken = require('./658');
module642.isCancel = require('./657');
module642.VERSION = require('./637').version;
module642.toFormData = require('./655');
module642.AxiosError = require('./638');
module642.Cancel = module642.CanceledError;

module642.all = function (o) {
  return Promise.all(o);
};

module642.spread = require('./659');
module642.isAxiosError = require('./660');
module.exports = module642;
module.exports.default = module642;
