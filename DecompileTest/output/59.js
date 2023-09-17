var t = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/,
  n = /^ {4}... skipping (\d+) frames$/;

function s(s) {
  var i = s.match(t);
  if (i)
    return {
      type: 'FRAME',
      functionName: i[1],
      location:
        'native' === i[2]
          ? {
              type: 'NATIVE',
            }
          : 'address at ' === i[3]
          ? {
              type: 'BYTECODE',
              sourceUrl: i[4],
              line1Based: Number.parseInt(i[5], 10),
              virtualOffset0Based: Number.parseInt(i[6], 10),
            }
          : {
              type: 'SOURCE',
              sourceUrl: i[4],
              line1Based: Number.parseInt(i[5], 10),
              column1Based: Number.parseInt(i[6], 10),
            },
    };
  var u = s.match(n);
  return u
    ? {
        type: 'SKIPPED',
        count: Number.parseInt(u[1], 10),
      }
    : undefined;
}

module.exports = function (t) {
  for (var n = t.split(/\n/), i = [], u = -1, p = 0; p < n.length; ++p) {
    var o = n[p];

    if (o) {
      var c = s(o);
      if (c) i.push(c);
      else {
        u = p;
        i = [];
      }
    }
  }

  return {
    message: n.slice(0, u + 1).join('\n'),
    entries: i,
  };
};
