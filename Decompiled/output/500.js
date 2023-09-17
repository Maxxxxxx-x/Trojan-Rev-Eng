exports.default = function (t) {
  var n,
    u,
    module501 = null != (n = t[require('./501').CHILD_STATE]) ? n : t.state,
    o = t.params;
  return module501
    ? module501.routes[null != (u = module501.index) ? u : 'string' == typeof module501.type && 'stack' !== module501.type ? 0 : module501.routes.length - 1].name
    : 'string' == typeof (null == o ? undefined : o.screen)
    ? o.screen
    : undefined;
};
