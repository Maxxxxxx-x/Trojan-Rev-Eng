var module52 = {
  showErrorDialog: function (module52) {
    var n,
      t = module52.componentStack,
      c = module52.error;
    n = c instanceof Error ? c : 'string' == typeof c ? new (require('./52').SyntheticError)(c) : new (require('./52').SyntheticError)('Unspecified error');

    try {
      n.componentStack = t;
      n.isComponentError = true;
    } catch (o) {}

    require('./52').handleException(n, false);

    return false;
  },
};
exports.default = module52;
