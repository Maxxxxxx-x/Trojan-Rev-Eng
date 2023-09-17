exports.goBack = function () {
  return {
    type: 'GO_BACK',
  };
};

exports.navigate = function () {
  if ('string' == typeof (arguments.length <= 0 ? undefined : arguments[0]))
    return {
      type: 'NAVIGATE',
      payload: {
        name: arguments.length <= 0 ? undefined : arguments[0],
        params: arguments.length <= 1 ? undefined : arguments[1],
      },
    };
  var t = (arguments.length <= 0 ? undefined : arguments[0]) || {};
  if (!t.hasOwnProperty('key') && !t.hasOwnProperty('name'))
    throw new Error(
      'You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.'
    );
  return {
    type: 'NAVIGATE',
    payload: t,
  };
};

exports.reset = function (t) {
  return {
    type: 'RESET',
    payload: t,
  };
};

exports.setParams = function (t) {
  return {
    type: 'SET_PARAMS',
    payload: {
      params: t,
    },
  };
};
