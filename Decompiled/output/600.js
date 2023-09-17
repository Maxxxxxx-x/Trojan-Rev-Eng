exports.__esModule = true;

exports.asap = function (f) {
  n.push(f);

  if (!u) {
    o();
    s();
  }
};

exports.suspend = o;
exports.flush = s;
var n = [],
  u = 0;

function f(n) {
  try {
    o();
    n();
  } finally {
    t();
  }
}

function o() {
  u++;
}

function t() {
  u--;
}

function s() {
  t();

  for (var o = undefined; !u && undefined !== (o = n.shift()); ) f(o);
}
