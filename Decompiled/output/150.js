var module20 = {
  createIdentityMatrix: function () {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  },
  createCopy: function (t) {
    return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]];
  },
  createOrthographic: function (t, n, a, o, i, u) {
    return [2 / (n - t), 0, 0, 0, 0, 2 / (o - a), 0, 0, 0, 0, -2 / (u - i), 0, -(n + t) / (n - t), -(o + a) / (o - a), -(u + i) / (u - i), 1];
  },
  createFrustum: function (t, n, a, o, i, u) {
    var s = 1 / (n - t),
      c = 1 / (o - a),
      m = 1 / (i - u);
    return [i * s * 2, 0, 0, 0, 0, i * c * 2, 0, 0, (n + t) * s, (o + a) * c, (u + i) * m, -1, 0, 0, u * i * m * 2, 0];
  },
  createPerspective: function (t, n, a, o) {
    var i = 1 / Math.tan(t / 2),
      u = 1 / (a - o);
    return [i / n, 0, 0, 0, 0, i, 0, 0, 0, 0, (o + a) * u, -1, 0, 0, o * a * u * 2, 0];
  },
  createTranslate2d: function (n, a) {
    var o = module20.createIdentityMatrix();
    module20.reuseTranslate2dCommand(o, n, a);
    return o;
  },
  reuseTranslate2dCommand: function (t, n, a) {
    t[12] = n;
    t[13] = a;
  },
  reuseTranslate3dCommand: function (t, n, a, o) {
    t[12] = n;
    t[13] = a;
    t[14] = o;
  },
  createScale: function (n) {
    var a = module20.createIdentityMatrix();
    module20.reuseScaleCommand(a, n);
    return a;
  },
  reuseScaleCommand: function (t, n) {
    t[0] = n;
    t[5] = n;
  },
  reuseScale3dCommand: function (t, n, a, o) {
    t[0] = n;
    t[5] = a;
    t[10] = o;
  },
  reusePerspectiveCommand: function (t, n) {
    t[11] = -1 / n;
  },
  reuseScaleXCommand: function (t, n) {
    t[0] = n;
  },
  reuseScaleYCommand: function (t, n) {
    t[5] = n;
  },
  reuseScaleZCommand: function (t, n) {
    t[10] = n;
  },
  reuseRotateXCommand: function (t, n) {
    t[5] = Math.cos(n);
    t[6] = Math.sin(n);
    t[9] = -Math.sin(n);
    t[10] = Math.cos(n);
  },
  reuseRotateYCommand: function (t, n) {
    t[0] = Math.cos(n);
    t[2] = -Math.sin(n);
    t[8] = Math.sin(n);
    t[10] = Math.cos(n);
  },
  reuseRotateZCommand: function (t, n) {
    t[0] = Math.cos(n);
    t[1] = Math.sin(n);
    t[4] = -Math.sin(n);
    t[5] = Math.cos(n);
  },
  createRotateZ: function (n) {
    var a = module20.createIdentityMatrix();
    module20.reuseRotateZCommand(a, n);
    return a;
  },
  reuseSkewXCommand: function (t, n) {
    t[4] = Math.tan(n);
  },
  reuseSkewYCommand: function (t, n) {
    t[1] = Math.tan(n);
  },
  multiplyInto: function (t, n, a) {
    var o = n[0],
      i = n[1],
      u = n[2],
      s = n[3],
      c = n[4],
      m = n[5],
      v = n[6],
      f = n[7],
      h = n[8],
      M = n[9],
      l = n[10],
      C = n[11],
      p = n[12],
      x = n[13],
      T = n[14],
      y = n[15],
      S = a[0],
      P = a[1],
      q = a[2],
      D = a[3];
    t[0] = S * o + P * c + q * h + D * p;
    t[1] = S * i + P * m + q * M + D * x;
    t[2] = S * u + P * v + q * l + D * T;
    t[3] = S * s + P * f + q * C + D * y;
    S = a[4];
    P = a[5];
    q = a[6];
    D = a[7];
    t[4] = S * o + P * c + q * h + D * p;
    t[5] = S * i + P * m + q * M + D * x;
    t[6] = S * u + P * v + q * l + D * T;
    t[7] = S * s + P * f + q * C + D * y;
    S = a[8];
    P = a[9];
    q = a[10];
    D = a[11];
    t[8] = S * o + P * c + q * h + D * p;
    t[9] = S * i + P * m + q * M + D * x;
    t[10] = S * u + P * v + q * l + D * T;
    t[11] = S * s + P * f + q * C + D * y;
    S = a[12];
    P = a[13];
    q = a[14];
    D = a[15];
    t[12] = S * o + P * c + q * h + D * p;
    t[13] = S * i + P * m + q * M + D * x;
    t[14] = S * u + P * v + q * l + D * T;
    t[15] = S * s + P * f + q * C + D * y;
  },
  determinant: function (t) {
    var module25 = require('./25')(t, 16),
      a = module25[0],
      o = module25[1],
      i = module25[2],
      u = module25[3],
      s = module25[4],
      c = module25[5],
      m = module25[6],
      v = module25[7],
      f = module25[8],
      h = module25[9],
      M = module25[10],
      l = module25[11],
      C = module25[12],
      p = module25[13],
      x = module25[14],
      T = module25[15];

    return (
      u * m * h * C -
      i * v * h * C -
      u * c * M * C +
      o * v * M * C +
      i * c * l * C -
      o * m * l * C -
      u * m * f * p +
      i * v * f * p +
      u * s * M * p -
      a * v * M * p -
      i * s * l * p +
      a * m * l * p +
      u * c * f * x -
      o * v * f * x -
      u * s * h * x +
      a * v * h * x +
      o * s * l * x -
      a * c * l * x -
      i * c * f * T +
      o * m * f * T +
      i * s * h * T -
      a * m * h * T -
      o * s * M * T +
      a * c * M * T
    );
  },
  inverse: function (n) {
    var a = module20.determinant(n);
    if (!a) return n;

    var module25 = require('./25')(n, 16),
      i = module25[0],
      u = module25[1],
      s = module25[2],
      c = module25[3],
      m = module25[4],
      v = module25[5],
      f = module25[6],
      h = module25[7],
      M = module25[8],
      l = module25[9],
      C = module25[10],
      p = module25[11],
      x = module25[12],
      T = module25[13],
      y = module25[14],
      S = module25[15];

    return [
      (f * p * T - h * C * T + h * l * y - v * p * y - f * l * S + v * C * S) / a,
      (c * C * T - s * p * T - c * l * y + u * p * y + s * l * S - u * C * S) / a,
      (s * h * T - c * f * T + c * v * y - u * h * y - s * v * S + u * f * S) / a,
      (c * f * l - s * h * l - c * v * C + u * h * C + s * v * p - u * f * p) / a,
      (h * C * x - f * p * x - h * M * y + m * p * y + f * M * S - m * C * S) / a,
      (s * p * x - c * C * x + c * M * y - i * p * y - s * M * S + i * C * S) / a,
      (c * f * x - s * h * x - c * m * y + i * h * y + s * m * S - i * f * S) / a,
      (s * h * M - c * f * M + c * m * C - i * h * C - s * m * p + i * f * p) / a,
      (v * p * x - h * l * x + h * M * T - m * p * T - v * M * S + m * l * S) / a,
      (c * l * x - u * p * x - c * M * T + i * p * T + u * M * S - i * l * S) / a,
      (u * h * x - c * v * x + c * m * T - i * h * T - u * m * S + i * v * S) / a,
      (c * v * M - u * h * M - c * m * l + i * h * l + u * m * p - i * v * p) / a,
      (f * l * x - v * C * x - f * M * T + m * C * T + v * M * y - m * l * y) / a,
      (u * C * x - s * l * x + s * M * T - i * C * T - u * M * y + i * l * y) / a,
      (s * v * x - u * f * x - s * m * T + i * f * T + u * m * y - i * v * y) / a,
      (u * f * M - s * v * M + s * m * l - i * f * l - u * m * C + i * v * C) / a,
    ];
  },
  transpose: function (t) {
    return [t[0], t[4], t[8], t[12], t[1], t[5], t[9], t[13], t[2], t[6], t[10], t[14], t[3], t[7], t[11], t[15]];
  },
  multiplyVectorByMatrix: function (t, n) {
    var module25 = require('./25')(t, 4),
      o = module25[0],
      i = module25[1],
      u = module25[2],
      s = module25[3];

    return [
      o * n[0] + i * n[4] + u * n[8] + s * n[12],
      o * n[1] + i * n[5] + u * n[9] + s * n[13],
      o * n[2] + i * n[6] + u * n[10] + s * n[14],
      o * n[3] + i * n[7] + u * n[11] + s * n[15],
    ];
  },
  v3Length: function (t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  },
  v3Normalize: function (n, a) {
    var o = 1 / (a || module20.v3Length(n));
    return [n[0] * o, n[1] * o, n[2] * o];
  },
  v3Dot: function (t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  },
  v3Combine: function (t, n, a, o) {
    return [a * t[0] + o * n[0], a * t[1] + o * n[1], a * t[2] + o * n[2]];
  },
  v3Cross: function (t, n) {
    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
  },
  quaternionToDegreesXYZ: function (n, a, o) {
    var module25 = require('./25')(n, 4),
      u = module25[0],
      s = module25[1],
      c = module25[2],
      m = module25[3],
      v = u * u,
      f = s * s,
      h = c * c,
      M = u * s + c * m,
      l = m * m + v + f + h,
      C = 180 / Math.PI;

    return M > 0.49999 * l
      ? [0, 2 * u ** m * C, 90]
      : M < -0.49999 * l
      ? [0, -2 * u ** m * C, -90]
      : [
          module20.roundTo3Places((2 * u * m - 2 * s * c) ** (1 - 2 * v - 2 * h) * C),
          module20.roundTo3Places((2 * s * m - 2 * u * c) ** (1 - 2 * f - 2 * h) * C),
          module20.roundTo3Places(Math.asin(2 * u * s + 2 * c * m) * C),
        ];
  },
  roundTo3Places: function (t) {
    var n = t.toString().split('e');
    return 0.001 * Math.round(n[0] + 'e' + (n[1] ? +n[1] - 3 : 3));
  },
  decomposeMatrix: function (n) {
    require('./20')(16 === n.length, 'Matrix decomposition needs a list of 3d matrix values, received %s', n);

    var a = [],
      o = [],
      i = [],
      u = [],
      s = [];

    if (n[15]) {
      for (var c = [], m = [], v = 0; v < 4; v++) {
        c.push([]);

        for (var f = 0; f < 4; f++) {
          var h = n[4 * v + f] / n[15];
          c[v].push(h);
          m.push(3 === f ? 0 : h);
        }
      }

      if (((m[15] = 1), module20.determinant(m))) {
        if (0 !== c[0][3] || 0 !== c[1][3] || 0 !== c[2][3]) {
          var M = [c[0][3], c[1][3], c[2][3], c[3][3]],
            l = module20.inverse(m),
            C = module20.transpose(l);
          a = module20.multiplyVectorByMatrix(M, C);
        } else {
          a[0] = a[1] = a[2] = 0;
          a[3] = 1;
        }

        for (var p = 0; p < 3; p++) s[p] = c[3][p];

        for (var x = [], T = 0; T < 3; T++) x[T] = [c[T][0], c[T][1], c[T][2]];

        i[0] = module20.v3Length(x[0]);
        x[0] = module20.v3Normalize(x[0], i[0]);
        u[0] = module20.v3Dot(x[0], x[1]);
        x[1] = module20.v3Combine(x[1], x[0], 1, -u[0]);
        i[1] = module20.v3Length(x[1]);
        x[1] = module20.v3Normalize(x[1], i[1]);
        u[0] /= i[1];
        u[1] = module20.v3Dot(x[0], x[2]);
        x[2] = module20.v3Combine(x[2], x[0], 1, -u[1]);
        u[2] = module20.v3Dot(x[1], x[2]);
        x[2] = module20.v3Combine(x[2], x[1], 1, -u[2]);
        i[2] = module20.v3Length(x[2]);
        x[2] = module20.v3Normalize(x[2], i[2]);
        u[1] /= i[2];
        u[2] /= i[2];
        var y,
          S = module20.v3Cross(x[1], x[2]);
        if (module20.v3Dot(x[0], S) < 0)
          for (var P = 0; P < 3; P++) {
            i[P] *= -1;
            x[P][0] *= -1;
            x[P][1] *= -1;
            x[P][2] *= -1;
          }
        o[0] = 0.5 * Math.sqrt((1 + x[0][0] - x[1][1] - x[2][2]) ** 0);
        o[1] = 0.5 * Math.sqrt((1 - x[0][0] + x[1][1] - x[2][2]) ** 0);
        o[2] = 0.5 * Math.sqrt((1 - x[0][0] - x[1][1] + x[2][2]) ** 0);
        o[3] = 0.5 * Math.sqrt((1 + x[0][0] + x[1][1] + x[2][2]) ** 0);
        if (x[2][1] > x[1][2]) o[0] = -o[0];
        if (x[0][2] > x[2][0]) o[1] = -o[1];
        if (x[1][0] > x[0][1]) o[2] = -o[2];
        return {
          rotationDegrees: (y =
            o[0] < 0.001 && o[0] >= 0 && o[1] < 0.001 && o[1] >= 0
              ? [0, 0, module20.roundTo3Places((180 * x[0][1] ** x[0][0]) / Math.PI)]
              : module20.quaternionToDegreesXYZ(o, c, x)),
          perspective: a,
          quaternion: o,
          scale: i,
          skew: u,
          translation: s,
          rotate: y[2],
          rotateX: y[0],
          rotateY: y[1],
          scaleX: i[0],
          scaleY: i[1],
          translateX: s[0],
          translateY: s[1],
        };
      }
    }
  },
};
module.exports = module20;
