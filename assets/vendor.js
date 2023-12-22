/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  function n(e, t, n) {
    var i,
      o = (t = t || se).createElement('script');
    if (((o.text = e), n)) for (i in be) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function i(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? pe[fe.call(e)] || 'object'
      : typeof e;
  }
  function o(e) {
    var t = !!e && 'length' in e && e.length,
      n = i(e);
    return (
      !me(e) &&
      !we(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function s(e, t, n) {
    return me(t)
      ? xe.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? xe.grep(e, function (e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? xe.grep(e, function (e) {
          return ue.call(t, e) > -1 !== n;
        })
      : xe.filter(t, e, n);
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function l(e) {
    var t = {};
    return (
      xe.each(e.match(Le) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function c(e) {
    return e;
  }
  function d(e) {
    throw e;
  }
  function u(e, t, n, i) {
    var o;
    try {
      e && me((o = e.promise))
        ? o.call(e).done(t).fail(n)
        : e && me((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function p() {
    se.removeEventListener('DOMContentLoaded', p),
      e.removeEventListener('load', p),
      xe.ready();
  }
  function f(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(qe, 'ms-').replace(Me, f);
  }
  function v() {
    this.expando = xe.expando + v.uid++;
  }
  function g(e) {
    return (
      'true' === e ||
      ('false' !== e &&
        ('null' === e
          ? null
          : e === +e + ''
          ? +e
          : Re.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function y(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = 'data-' + t.replace(Be, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = g(n);
        } catch (e) {}
        We.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function m(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return xe.css(e, t, '');
          },
      l = a(),
      c = (n && n[3]) || (xe.cssNumber[t] ? '' : 'px'),
      d = (xe.cssNumber[t] || ('px' !== c && +l)) && _e.exec(xe.css(e, t));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; s--; )
        xe.style(e, t, d + c),
          (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
          (d /= r);
      (d *= 2), xe.style(e, t, d + c), (n = n || []);
    }
    return (
      n &&
        ((d = +d || +l || 0),
        (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = d), (i.end = o))),
      o
    );
  }
  function w(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      o = Ve[i];
    return (
      o ||
      ((t = n.body.appendChild(n.createElement(i))),
      (o = xe.css(t, 'display')),
      t.parentNode.removeChild(t),
      'none' === o && (o = 'block'),
      (Ve[i] = o),
      o)
    );
  }
  function b(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
      (i = e[r]).style &&
        ((n = i.style.display),
        t
          ? ('none' === n &&
              ((o[r] = Ie.get(i, 'display') || null),
              o[r] || (i.style.display = '')),
            '' === i.style.display && Xe(i) && (o[r] = w(i)))
          : 'none' !== n && ((o[r] = 'none'), Ie.set(i, 'display', n)));
    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  function x(e, t) {
    var n;
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && r(e, t)) ? xe.merge([e], n) : n
    );
  }
  function T(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Ie.set(e[n], 'globalEval', !t || Ie.get(t[n], 'globalEval'));
  }
  function k(e, t, n, o, r) {
    for (
      var s,
        a,
        l,
        c,
        d,
        u,
        p = t.createDocumentFragment(),
        f = [],
        h = 0,
        v = e.length;
      h < v;
      h++
    )
      if ((s = e[h]) || 0 === s)
        if ('object' === i(s)) xe.merge(f, s.nodeType ? [s] : s);
        else if (Ze.test(s)) {
          for (
            a = a || p.appendChild(t.createElement('div')),
              l = (Qe.exec(s) || ['', ''])[1].toLowerCase(),
              c = Ke[l] || Ke._default,
              a.innerHTML = c[1] + xe.htmlPrefilter(s) + c[2],
              u = c[0];
            u--;

          )
            a = a.lastChild;
          xe.merge(f, a.childNodes), ((a = p.firstChild).textContent = '');
        } else f.push(t.createTextNode(s));
    for (p.textContent = '', h = 0; (s = f[h++]); )
      if (o && xe.inArray(s, o) > -1) r && r.push(s);
      else if (
        ((d = xe.contains(s.ownerDocument, s)),
        (a = x(p.appendChild(s), 'script')),
        d && T(a),
        n)
      )
        for (u = 0; (s = a[u++]); ) Je.test(s.type || '') && n.push(s);
    return p;
  }
  function S() {
    return !0;
  }
  function C() {
    return !1;
  }
  function $() {
    try {
      return se.activeElement;
    } catch (e) {}
  }
  function A(e, t, n, i, o, r) {
    var s, a;
    if ('object' == typeof t) {
      'string' != typeof n && ((i = i || n), (n = void 0));
      for (a in t) A(e, a, n, i, t[a], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ('string' == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = C;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function (e) {
          return xe().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = xe.guid++))),
      e.each(function () {
        xe.event.add(this, t, o, i, n);
      })
    );
  }
  function E(e, t) {
    return r(e, 'table') && r(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? xe(e).children('tbody')[0] || e
      : e;
  }
  function D(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function j(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function N(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (
        Ie.hasData(e) &&
        ((r = Ie.access(e)), (s = Ie.set(t, r)), (c = r.events))
      ) {
        delete s.handle, (s.events = {});
        for (o in c)
          for (n = 0, i = c[o].length; n < i; n++) xe.event.add(t, o, c[o][n]);
      }
      We.hasData(e) &&
        ((a = We.access(e)), (l = xe.extend({}, a)), We.set(t, l));
    }
  }
  function L(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && Ge.test(e.type)
      ? (t.checked = e.checked)
      : ('input' !== n && 'textarea' !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function H(e, t, i, o) {
    t = ce.apply([], t);
    var r,
      s,
      a,
      l,
      c,
      d,
      u = 0,
      p = e.length,
      f = p - 1,
      h = t[0],
      v = me(h);
    if (v || (p > 1 && 'string' == typeof h && !ye.checkClone && st.test(h)))
      return e.each(function (n) {
        var r = e.eq(n);
        v && (t[0] = h.call(this, n, r.html())), H(r, t, i, o);
      });
    if (
      p &&
      ((r = k(t, e[0].ownerDocument, !1, e, o)),
      (s = r.firstChild),
      1 === r.childNodes.length && (r = s),
      s || o)
    ) {
      for (l = (a = xe.map(x(r, 'script'), D)).length; u < p; u++)
        (c = r),
          u !== f &&
            ((c = xe.clone(c, !0, !0)), l && xe.merge(a, x(c, 'script'))),
          i.call(e[u], c, u);
      if (l)
        for (d = a[a.length - 1].ownerDocument, xe.map(a, j), u = 0; u < l; u++)
          (c = a[u]),
            Je.test(c.type || '') &&
              !Ie.access(c, 'globalEval') &&
              xe.contains(d, c) &&
              (c.src && 'module' !== (c.type || '').toLowerCase()
                ? xe._evalUrl && xe._evalUrl(c.src)
                : n(c.textContent.replace(at, ''), d, c));
    }
    return e;
  }
  function O(e, t, n) {
    for (var i, o = t ? xe.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || xe.cleanData(x(i)),
        i.parentNode &&
          (n && xe.contains(i.ownerDocument, i) && T(x(i, 'script')),
          i.parentNode.removeChild(i));
    return e;
  }
  function P(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || ct(e)) &&
        ('' !== (s = n.getPropertyValue(t) || n[t]) ||
          xe.contains(e.ownerDocument, e) ||
          (s = xe.style(e, t)),
        !ye.pixelBoxStyles() &&
          lt.test(s) &&
          dt.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + '' : s
    );
  }
  function q(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function M(e) {
    if (e in gt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--; )
      if ((e = vt[n] + t) in gt) return e;
  }
  function z(e) {
    var t = xe.cssProps[e];
    return t || (t = xe.cssProps[e] = M(e) || e), t;
  }
  function I(e, t, n) {
    var i = _e.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function W(e, t, n, i, o, r) {
    var s = 'width' === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; s < 4; s += 2)
      'margin' === n && (l += xe.css(e, n + Ue[s], !0, o)),
        i
          ? ('content' === n && (l -= xe.css(e, 'padding' + Ue[s], !0, o)),
            'margin' !== n &&
              (l -= xe.css(e, 'border' + Ue[s] + 'Width', !0, o)))
          : ((l += xe.css(e, 'padding' + Ue[s], !0, o)),
            'padding' !== n
              ? (l += xe.css(e, 'border' + Ue[s] + 'Width', !0, o))
              : (a += xe.css(e, 'border' + Ue[s] + 'Width', !0, o)));
    return (
      !i &&
        r >= 0 &&
        (l += Math.max(
          0,
          Math.ceil(
            e['offset' + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5,
          ),
        )),
      l
    );
  }
  function R(e, t, n) {
    var i = ct(e),
      o = P(e, t, i),
      r = 'border-box' === xe.css(e, 'boxSizing', !1, i),
      s = r;
    if (lt.test(o)) {
      if (!n) return o;
      o = 'auto';
    }
    return (
      (s = s && (ye.boxSizingReliable() || o === e.style[t])),
      ('auto' === o ||
        (!parseFloat(o) && 'inline' === xe.css(e, 'display', !1, i))) &&
        ((o = e['offset' + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (o = parseFloat(o) || 0) +
        W(e, t, n || (r ? 'border' : 'content'), s, i, o) +
        'px'
    );
  }
  function B(e, t, n, i, o) {
    return new B.prototype.init(e, t, n, i, o);
  }
  function F() {
    mt &&
      (!1 === se.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(F)
        : e.setTimeout(F, xe.fx.interval),
      xe.fx.tick());
  }
  function _() {
    return (
      e.setTimeout(function () {
        yt = void 0;
      }),
      (yt = Date.now())
    );
  }
  function U(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o['margin' + (n = Ue[i])] = o['padding' + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function X(e, t, n) {
    for (
      var i,
        o = (G.tweeners[t] || []).concat(G.tweeners['*']),
        r = 0,
        s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function Y(e, t, n) {
    var i,
      o,
      r,
      s,
      a,
      l,
      c,
      d,
      u = 'width' in t || 'height' in t,
      p = this,
      f = {},
      h = e.style,
      v = e.nodeType && Xe(e),
      g = Ie.get(e, 'fxshow');
    n.queue ||
      (null == (s = xe._queueHooks(e, 'fx')).unqueued &&
        ((s.unqueued = 0),
        (a = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || a();
        })),
      s.unqueued++,
      p.always(function () {
        p.always(function () {
          s.unqueued--, xe.queue(e, 'fx').length || s.empty.fire();
        });
      }));
    for (i in t)
      if (((o = t[i]), wt.test(o))) {
        if (
          (delete t[i], (r = r || 'toggle' === o), o === (v ? 'hide' : 'show'))
        ) {
          if ('show' !== o || !g || void 0 === g[i]) continue;
          v = !0;
        }
        f[i] = (g && g[i]) || xe.style(e, i);
      }
    if ((l = !xe.isEmptyObject(t)) || !xe.isEmptyObject(f)) {
      u &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (c = g && g.display) && (c = Ie.get(e, 'display')),
        'none' === (d = xe.css(e, 'display')) &&
          (c
            ? (d = c)
            : (b([e], !0),
              (c = e.style.display || c),
              (d = xe.css(e, 'display')),
              b([e]))),
        ('inline' === d || ('inline-block' === d && null != c)) &&
          'none' === xe.css(e, 'float') &&
          (l ||
            (p.done(function () {
              h.display = c;
            }),
            null == c && ((d = h.display), (c = 'none' === d ? '' : d))),
          (h.display = 'inline-block'))),
        n.overflow &&
          ((h.overflow = 'hidden'),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (l = !1);
      for (i in f)
        l ||
          (g
            ? 'hidden' in g && (v = g.hidden)
            : (g = Ie.access(e, 'fxshow', { display: c })),
          r && (g.hidden = !v),
          v && b([e], !0),
          p.done(function () {
            v || b([e]), Ie.remove(e, 'fxshow');
            for (i in f) xe.style(e, i, f[i]);
          })),
          (l = X(v ? g[i] : 0, i, p)),
          i in g || ((g[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
    }
  }
  function V(e, t) {
    var n, i, o, r, s;
    for (n in e)
      if (
        ((i = h(n)),
        (o = t[i]),
        (r = e[n]),
        Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
        n !== i && ((e[i] = r), delete e[n]),
        (s = xe.cssHooks[i]) && 'expand' in s)
      ) {
        (r = s.expand(r)), delete e[i];
        for (n in r) n in e || ((e[n] = r[n]), (t[n] = o));
      } else t[i] = o;
  }
  function G(e, t, n) {
    var i,
      o,
      r = 0,
      s = G.prefilters.length,
      a = xe.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = yt || _(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: xe.extend({}, t),
        opts: xe.extend(
          !0,
          { specialEasing: {}, easing: xe.easing._default },
          n,
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: yt || _(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = xe.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing,
          );
          return c.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      d = c.props;
    for (V(d, c.opts.specialEasing); r < s; r++)
      if ((i = G.prefilters[r].call(c, e, d, c.opts)))
        return (
          me(i.stop) &&
            (xe._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      xe.map(d, X, c),
      me(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      xe.fx.timer(xe.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  function Q(e) {
    return (e.match(Le) || []).join(' ');
  }
  function J(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function K(e) {
    return Array.isArray(e) ? e : 'string' == typeof e ? e.match(Le) || [] : [];
  }
  function Z(e, t, n, o) {
    var r;
    if (Array.isArray(t))
      xe.each(t, function (t, i) {
        n || Nt.test(e)
          ? o(e, i)
          : Z(
              e + '[' + ('object' == typeof i && null != i ? t : '') + ']',
              i,
              n,
              o,
            );
      });
    else if (n || 'object' !== i(t)) o(e, t);
    else for (r in t) Z(e + '[' + r + ']', t[r], n, o);
  }
  function ee(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var i,
        o = 0,
        r = t.toLowerCase().match(Le) || [];
      if (me(n))
        for (; (i = r[o++]); )
          '+' === i[0]
            ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function te(e, t, n, i) {
    function o(a) {
      var l;
      return (
        (r[a] = !0),
        xe.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return 'string' != typeof c || s || r[c]
            ? s
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    var r = {},
      s = e === Ft;
    return o(t.dataTypes[0]) || (!r['*'] && o('*'));
  }
  function ne(e, t) {
    var n,
      i,
      o = xe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && xe.extend(!0, e, i), e;
  }
  function ie(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; '*' === l[0]; )
      l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
    if (i)
      for (o in a)
        if (a[o] && a[o].test(i)) {
          l.unshift(o);
          break;
        }
    if (l[0] in n) r = l[0];
    else {
      for (o in n) {
        if (!l[0] || e.converters[o + ' ' + l[0]]) {
          r = o;
          break;
        }
        s || (s = o);
      }
      r = r || s;
    }
    if (r) return r !== l[0] && l.unshift(r), n[r];
  }
  function oe(e, t, n, i) {
    var o,
      r,
      s,
      a,
      l,
      c = {},
      d = e.dataTypes.slice();
    if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
    for (r = d.shift(); r; )
      if (
        (e.responseFields[r] && (n[e.responseFields[r]] = t),
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = r),
        (r = d.shift()))
      )
        if ('*' === r) r = l;
        else if ('*' !== l && l !== r) {
          if (!(s = c[l + ' ' + r] || c['* ' + r]))
            for (o in c)
              if (
                (a = o.split(' '))[1] === r &&
                (s = c[l + ' ' + a[0]] || c['* ' + a[0]])
              ) {
                !0 === s
                  ? (s = c[o])
                  : !0 !== c[o] && ((r = a[0]), d.unshift(a[1]));
                break;
              }
          if (!0 !== s)
            if (s && e.throws) t = s(t);
            else
              try {
                t = s(t);
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: s ? e : 'No conversion from ' + l + ' to ' + r,
                };
              }
        }
    return { state: 'success', data: t };
  }
  var re = [],
    se = e.document,
    ae = Object.getPrototypeOf,
    le = re.slice,
    ce = re.concat,
    de = re.push,
    ue = re.indexOf,
    pe = {},
    fe = pe.toString,
    he = pe.hasOwnProperty,
    ve = he.toString,
    ge = ve.call(Object),
    ye = {},
    me = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    we = function (e) {
      return null != e && e === e.window;
    },
    be = { type: !0, src: !0, noModule: !0 },
    xe = function (e, t) {
      return new xe.fn.init(e, t);
    },
    Te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (xe.fn = xe.prototype =
    {
      jquery: '3.3.1',
      constructor: xe,
      length: 0,
      toArray: function () {
        return le.call(this);
      },
      get: function (e) {
        return null == e
          ? le.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = xe.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return xe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          xe.map(this, function (t, n) {
            return e.call(t, n, t);
          }),
        );
      },
      slice: function () {
        return this.pushStack(le.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: de,
      sort: re.sort,
      splice: re.splice,
    }),
    (xe.extend = xe.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          'boolean' == typeof s && ((c = s), (s = arguments[a] || {}), a++),
            'object' == typeof s || me(s) || (s = {}),
            a === l && ((s = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (i = e[t]) &&
                  (c && i && (xe.isPlainObject(i) || (o = Array.isArray(i)))
                    ? (o
                        ? ((o = !1), (r = n && Array.isArray(n) ? n : []))
                        : (r = n && xe.isPlainObject(n) ? n : {}),
                      (s[t] = xe.extend(c, r, i)))
                    : void 0 !== i && (s[t] = i));
        return s;
      }),
    xe.extend({
      expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(
          !e ||
          '[object Object]' !== fe.call(e) ||
          ((t = ae(e)) &&
            ('function' !=
              typeof (n = he.call(t, 'constructor') && t.constructor) ||
              ve.call(n) !== ge))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        n(e);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (o(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(Te, '');
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (o(Object(e))
              ? xe.merge(n, 'string' == typeof e ? [e] : e)
              : de.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : ue.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i, o = [], r = 0, s = e.length, a = !n; r < s; r++)
          (i = !t(e[r], r)) !== a && o.push(e[r]);
        return o;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (o(e))
          for (i = e.length; s < i; s++)
            null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return ce.apply([], a);
      },
      guid: 1,
      support: ye,
    }),
    'function' == typeof Symbol &&
      (xe.fn[Symbol.iterator] = re[Symbol.iterator]),
    xe.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' ',
      ),
      function (e, t) {
        pe['[object ' + t + ']'] = t.toLowerCase();
      },
    );
  var ke = (function (e) {
    function t(e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        c,
        d,
        p = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : R) !== H && L(t), (t = t || H), P)
      ) {
        if (11 !== h && (l = ye.exec(e)))
          if ((o = l[1])) {
            if (9 === h) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n;
            } else if (p && (s = p.getElementById(o)) && I(t, s) && s.id === o)
              return n.push(s), n;
          } else {
            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if (
              (o = l[3]) &&
              T.getElementsByClassName &&
              t.getElementsByClassName
            )
              return K.apply(n, t.getElementsByClassName(o)), n;
          }
        if (T.qsa && !X[e + ' '] && (!q || !q.test(e))) {
          if (1 !== h) (p = t), (d = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute('id'))
                ? (a = a.replace(xe, Te))
                : t.setAttribute('id', (a = W)),
                r = (c = $(e)).length;
              r--;

            )
              c[r] = '#' + a + ' ' + f(c[r]);
            (d = c.join(',')), (p = (me.test(e) && u(t.parentNode)) || t);
          }
          if (d)
            try {
              return K.apply(n, p.querySelectorAll(d)), n;
            } catch (e) {
            } finally {
              a === W && t.removeAttribute('id');
            }
        }
      }
      return E(e.replace(ae, '$1'), t, n, i);
    }
    function n() {
      function e(n, i) {
        return (
          t.push(n + ' ') > k.cacheLength && delete e[t.shift()],
          (e[n + ' '] = i)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[W] = !0), e;
    }
    function o(e) {
      var t = H.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function r(e, t) {
      for (var n = e.split('|'), i = n.length; i--; ) k.attrHandle[n[i]] = t;
    }
    function s(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function c(e) {
      return function (t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && Se(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function d(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; )
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function u(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    function p() {}
    function f(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function h(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && 'parentNode' === r,
        a = F++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function (t, n, l) {
            var c,
              d,
              u,
              p = [B, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u = t[W] || (t[W] = {})),
                    (d = u[t.uniqueID] || (u[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = d[r]) && c[0] === B && c[1] === a)
                      return (p[2] = c[2]);
                    if (((d[r] = p), (p[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function v(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function g(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
      return i;
    }
    function y(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
      return s;
    }
    function m(e, t, n, o, r, s) {
      return (
        o && !o[W] && (o = m(o)),
        r && !r[W] && (r = m(r, s)),
        i(function (i, s, a, l) {
          var c,
            d,
            u,
            p = [],
            f = [],
            h = s.length,
            v = i || g(t || '*', a.nodeType ? [a] : a, []),
            m = !e || (!i && t) ? v : y(v, p, e, a, l),
            w = n ? (r || (i ? e : h || o) ? [] : s) : m;
          if ((n && n(m, w, a, l), o))
            for (c = y(w, f), o(c, [], a, l), d = c.length; d--; )
              (u = c[d]) && (w[f[d]] = !(m[f[d]] = u));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], d = w.length; d--; )
                  (u = w[d]) && c.push((m[d] = u));
                r(null, (w = []), c, l);
              }
              for (d = w.length; d--; )
                (u = w[d]) &&
                  (c = r ? ee(i, u) : p[d]) > -1 &&
                  (i[c] = !(s[c] = u));
            }
          } else (w = y(w === s ? w.splice(h, w.length) : w)), r ? r(null, s, w, l) : K.apply(s, w);
        })
      );
    }
    function w(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          r = k.relative[e[0].type],
          s = r || k.relative[' '],
          a = r ? 1 : 0,
          l = h(
            function (e) {
              return e === t;
            },
            s,
            !0,
          ),
          c = h(
            function (e) {
              return ee(t, e) > -1;
            },
            s,
            !0,
          ),
          d = [
            function (e, n, i) {
              var o =
                (!r && (i || n !== D)) ||
                ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return (t = null), o;
            },
          ];
        a < o;
        a++
      )
        if ((n = k.relative[e[a].type])) d = [h(v(d), n)];
        else {
          if ((n = k.filter[e[a].type].apply(null, e[a].matches))[W]) {
            for (i = ++a; i < o && !k.relative[e[i].type]; i++);
            return m(
              a > 1 && v(d),
              a > 1 &&
                f(
                  e
                    .slice(0, a - 1)
                    .concat({ value: ' ' === e[a - 2].type ? '*' : '' }),
                ).replace(ae, '$1'),
              n,
              a < i && w(e.slice(a, i)),
              i < o && w((e = e.slice(i))),
              i < o && f(e),
            );
          }
          d.push(n);
        }
      return v(d);
    }
    function b(e, n) {
      var o = n.length > 0,
        r = e.length > 0,
        s = function (i, s, a, l, c) {
          var d,
            u,
            p,
            f = 0,
            h = '0',
            v = i && [],
            g = [],
            m = D,
            w = i || (r && k.find.TAG('*', c)),
            b = (B += null == m ? 1 : Math.random() || 0.1),
            x = w.length;
          for (
            c && (D = s === H || s || c);
            h !== x && null != (d = w[h]);
            h++
          ) {
            if (r && d) {
              for (
                u = 0, s || d.ownerDocument === H || (L(d), (a = !P));
                (p = e[u++]);

              )
                if (p(d, s || H, a)) {
                  l.push(d);
                  break;
                }
              c && (B = b);
            }
            o && ((d = !p && d) && f--, i && v.push(d));
          }
          if (((f += h), o && h !== f)) {
            for (u = 0; (p = n[u++]); ) p(v, g, s, a);
            if (i) {
              if (f > 0) for (; h--; ) v[h] || g[h] || (g[h] = Q.call(l));
              g = y(g);
            }
            K.apply(l, g),
              c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l);
          }
          return c && ((B = b), (D = m)), v;
        };
      return o ? i(s) : s;
    }
    var x,
      T,
      k,
      S,
      C,
      $,
      A,
      E,
      D,
      j,
      N,
      L,
      H,
      O,
      P,
      q,
      M,
      z,
      I,
      W = 'sizzle' + 1 * new Date(),
      R = e.document,
      B = 0,
      F = 0,
      _ = n(),
      U = n(),
      X = n(),
      Y = function (e, t) {
        return e === t && (N = !0), 0;
      },
      V = {}.hasOwnProperty,
      G = [],
      Q = G.pop,
      J = G.push,
      K = G.push,
      Z = G.slice,
      ee = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      ne = '[\\x20\\t\\r\\n\\f]',
      ie = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      oe =
        '\\[' +
        ne +
        '*(' +
        ie +
        ')(?:' +
        ne +
        '*([*^$|!~]?=)' +
        ne +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        ie +
        '))|)' +
        ne +
        '*\\]',
      re =
        ':(' +
        ie +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        oe +
        ')*)|.*)\\)|)',
      se = new RegExp(ne + '+', 'g'),
      ae = new RegExp(
        '^' + ne + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ne + '+$',
        'g',
      ),
      le = new RegExp('^' + ne + '*,' + ne + '*'),
      ce = new RegExp('^' + ne + '*([>+~]|' + ne + ')' + ne + '*'),
      de = new RegExp('=' + ne + '*([^\\]\'"]*?)' + ne + '*\\]', 'g'),
      ue = new RegExp(re),
      pe = new RegExp('^' + ie + '$'),
      fe = {
        ID: new RegExp('^#(' + ie + ')'),
        CLASS: new RegExp('^\\.(' + ie + ')'),
        TAG: new RegExp('^(' + ie + '|[*])'),
        ATTR: new RegExp('^' + oe),
        PSEUDO: new RegExp('^' + re),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            ne +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            ne +
            '*(?:([+-]|)' +
            ne +
            '*(\\d+)|))' +
            ne +
            '*\\)|)',
          'i',
        ),
        bool: new RegExp('^(?:' + te + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            ne +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            ne +
            '*((?:-\\d)?\\d*)' +
            ne +
            '*\\)|)(?=[^-]|$)',
          'i',
        ),
      },
      he = /^(?:input|select|textarea|button)$/i,
      ve = /^h\d$/i,
      ge = /^[^{]+\{\s*\[native \w/,
      ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      me = /[+~]/,
      we = new RegExp('\\\\([\\da-f]{1,6}' + ne + '?|(' + ne + ')|.)', 'ig'),
      be = function (e, t, n) {
        var i = '0x' + t - 65536;
        return i !== i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      Te = function (e, t) {
        return t
          ? '\0' === e
            ? '�'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      ke = function () {
        L();
      },
      Se = h(
        function (e) {
          return !0 === e.disabled && ('form' in e || 'label' in e);
        },
        { dir: 'parentNode', next: 'legend' },
      );
    try {
      K.apply((G = Z.call(R.childNodes)), R.childNodes),
        G[R.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: G.length
          ? function (e, t) {
              J.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    (T = t.support = {}),
      (C = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && 'HTML' !== t.nodeName;
        }),
      (L = t.setDocument =
        function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : R;
          return i !== H && 9 === i.nodeType && i.documentElement
            ? ((H = i),
              (O = H.documentElement),
              (P = !C(H)),
              R !== H &&
                (n = H.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener('unload', ke, !1)
                  : n.attachEvent && n.attachEvent('onunload', ke)),
              (T.attributes = o(function (e) {
                return (e.className = 'i'), !e.getAttribute('className');
              })),
              (T.getElementsByTagName = o(function (e) {
                return (
                  e.appendChild(H.createComment('')),
                  !e.getElementsByTagName('*').length
                );
              })),
              (T.getElementsByClassName = ge.test(H.getElementsByClassName)),
              (T.getById = o(function (e) {
                return (
                  (O.appendChild(e).id = W),
                  !H.getElementsByName || !H.getElementsByName(W).length
                );
              })),
              T.getById
                ? ((k.filter.ID = function (e) {
                    var t = e.replace(we, be);
                    return function (e) {
                      return e.getAttribute('id') === t;
                    };
                  }),
                  (k.find.ID = function (e, t) {
                    if ('undefined' != typeof t.getElementById && P) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((k.filter.ID = function (e) {
                    var t = e.replace(we, be);
                    return function (e) {
                      var n =
                        'undefined' != typeof e.getAttributeNode &&
                        e.getAttributeNode('id');
                      return n && n.value === t;
                    };
                  }),
                  (k.find.ID = function (e, t) {
                    if ('undefined' != typeof t.getElementById && P) {
                      var n,
                        i,
                        o,
                        r = t.getElementById(e);
                      if (r) {
                        if ((n = r.getAttributeNode('id')) && n.value === e)
                          return [r];
                        for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                          if ((n = r.getAttributeNode('id')) && n.value === e)
                            return [r];
                      }
                      return [];
                    }
                  })),
              (k.find.TAG = T.getElementsByTagName
                ? function (e, t) {
                    return 'undefined' != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : T.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      r = t.getElementsByTagName(e);
                    if ('*' === e) {
                      for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return r;
                  }),
              (k.find.CLASS =
                T.getElementsByClassName &&
                function (e, t) {
                  if ('undefined' != typeof t.getElementsByClassName && P)
                    return t.getElementsByClassName(e);
                }),
              (M = []),
              (q = []),
              (T.qsa = ge.test(H.querySelectorAll)) &&
                (o(function (e) {
                  (O.appendChild(e).innerHTML =
                    "<a id='" +
                    W +
                    "'></a><select id='" +
                    W +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      q.push('[*^$]=' + ne + '*(?:\'\'|"")'),
                    e.querySelectorAll('[selected]').length ||
                      q.push('\\[' + ne + '*(?:value|' + te + ')'),
                    e.querySelectorAll('[id~=' + W + '-]').length ||
                      q.push('~='),
                    e.querySelectorAll(':checked').length || q.push(':checked'),
                    e.querySelectorAll('a#' + W + '+*').length ||
                      q.push('.#.+[+~]');
                }),
                o(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = H.createElement('input');
                  t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length &&
                      q.push('name' + ne + '*[*^$|!~]?='),
                    2 !== e.querySelectorAll(':enabled').length &&
                      q.push(':enabled', ':disabled'),
                    (O.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(':disabled').length &&
                      q.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    q.push(',.*:');
                })),
              (T.matchesSelector = ge.test(
                (z =
                  O.matches ||
                  O.webkitMatchesSelector ||
                  O.mozMatchesSelector ||
                  O.oMatchesSelector ||
                  O.msMatchesSelector),
              )) &&
                o(function (e) {
                  (T.disconnectedMatch = z.call(e, '*')),
                    z.call(e, "[s!='']:x"),
                    M.push('!=', re);
                }),
              (q = q.length && new RegExp(q.join('|'))),
              (M = M.length && new RegExp(M.join('|'))),
              (t = ge.test(O.compareDocumentPosition)),
              (I =
                t || ge.test(O.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (Y = t
                ? function (e, t) {
                    if (e === t) return (N = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!T.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === H || (e.ownerDocument === R && I(R, e))
                          ? -1
                          : t === H || (t.ownerDocument === R && I(R, t))
                          ? 1
                          : j
                          ? ee(j, e) - ee(j, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (N = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      r = t.parentNode,
                      a = [e],
                      l = [t];
                    if (!o || !r)
                      return e === H
                        ? -1
                        : t === H
                        ? 1
                        : o
                        ? -1
                        : r
                        ? 1
                        : j
                        ? ee(j, e) - ee(j, t)
                        : 0;
                    if (o === r) return s(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) l.unshift(n);
                    for (; a[i] === l[i]; ) i++;
                    return i
                      ? s(a[i], l[i])
                      : a[i] === R
                      ? -1
                      : l[i] === R
                      ? 1
                      : 0;
                  }),
              H)
            : H;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== H && L(e),
          (n = n.replace(de, "='$1']")),
          T.matchesSelector &&
            P &&
            !X[n + ' '] &&
            (!M || !M.test(n)) &&
            (!q || !q.test(n)))
        )
          try {
            var i = z.call(e, n);
            if (
              i ||
              T.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (e) {}
        return t(n, H, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== H && L(e), I(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== H && L(e);
        var n = k.attrHandle[t.toLowerCase()],
          i = n && V.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
        return void 0 !== i
          ? i
          : T.attributes || !P
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (t.escape = function (e) {
        return (e + '').replace(xe, Te);
      }),
      (t.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          ((N = !T.detectDuplicates),
          (j = !T.sortStable && e.slice(0)),
          e.sort(Y),
          N)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (j = null), e;
      }),
      (S = t.getText =
        function (e) {
          var t,
            n = '',
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ('string' == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += S(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += S(t);
          return n;
        }),
      ((k = t.selectors =
        {
          cacheLength: 50,
          createPseudo: i,
          match: fe,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(we, be)),
                (e[3] = (e[3] || e[4] || e[5] || '').replace(we, be)),
                '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                'nth' === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ('even' === e[3] || 'odd' === e[3]))),
                    (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return fe.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || '')
                    : n &&
                      ue.test(n) &&
                      (t = $(n, !0)) &&
                      (t = n.indexOf(')', n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(we, be).toLowerCase();
              return '*' === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = _[e + ' '];
              return (
                t ||
                ((t = new RegExp('(^|' + ne + ')' + e + '(' + ne + '|$)')) &&
                  _(e, function (e) {
                    return t.test(
                      ('string' == typeof e.className && e.className) ||
                        ('undefined' != typeof e.getAttribute &&
                          e.getAttribute('class')) ||
                        '',
                    );
                  }))
              );
            },
            ATTR: function (e, n, i) {
              return function (o) {
                var r = t.attr(o, e);
                return null == r
                  ? '!=' === n
                  : !n ||
                      ((r += ''),
                      '=' === n
                        ? r === i
                        : '!=' === n
                        ? r !== i
                        : '^=' === n
                        ? i && 0 === r.indexOf(i)
                        : '*=' === n
                        ? i && r.indexOf(i) > -1
                        : '$=' === n
                        ? i && r.slice(-i.length) === i
                        : '~=' === n
                        ? (' ' + r.replace(se, ' ') + ' ').indexOf(i) > -1
                        : '|=' === n &&
                          (r === i || r.slice(0, i.length + 1) === i + '-'));
              };
            },
            CHILD: function (e, t, n, i, o) {
              var r = 'nth' !== e.slice(0, 3),
                s = 'last' !== e.slice(-4),
                a = 'of-type' === t;
              return 1 === i && 0 === o
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p,
                      f,
                      h,
                      v = r !== s ? 'nextSibling' : 'previousSibling',
                      g = t.parentNode,
                      y = a && t.nodeName.toLowerCase(),
                      m = !l && !a,
                      w = !1;
                    if (g) {
                      if (r) {
                        for (; v; ) {
                          for (p = t; (p = p[v]); )
                            if (
                              a
                                ? p.nodeName.toLowerCase() === y
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = v = 'only' === e && !h && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((h = [s ? g.firstChild : g.lastChild]), s && m)) {
                        for (
                          w =
                            (f =
                              (c =
                                (d =
                                  (u = (p = g)[W] || (p[W] = {}))[p.uniqueID] ||
                                  (u[p.uniqueID] = {}))[e] || [])[0] === B &&
                              c[1]) && c[2],
                            p = f && g.childNodes[f];
                          (p = (++f && p && p[v]) || (w = f = 0) || h.pop());

                        )
                          if (1 === p.nodeType && ++w && p === t) {
                            d[e] = [B, f, w];
                            break;
                          }
                      } else if (
                        (m &&
                          (w = f =
                            (c =
                              (d =
                                (u = (p = t)[W] || (p[W] = {}))[p.uniqueID] ||
                                (u[p.uniqueID] = {}))[e] || [])[0] === B &&
                            c[1]),
                        !1 === w)
                      )
                        for (
                          ;
                          (p = (++f && p && p[v]) || (w = f = 0) || h.pop()) &&
                          ((a
                            ? p.nodeName.toLowerCase() !== y
                            : 1 !== p.nodeType) ||
                            !++w ||
                            (m &&
                              ((d =
                                (u = p[W] || (p[W] = {}))[p.uniqueID] ||
                                (u[p.uniqueID] = {}))[e] = [B, w]),
                            p !== t));

                        );
                      return (w -= o) === i || (w % i == 0 && w / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var o,
                r =
                  k.pseudos[e] ||
                  k.setFilters[e.toLowerCase()] ||
                  t.error('unsupported pseudo: ' + e);
              return r[W]
                ? r(n)
                : r.length > 1
                ? ((o = [e, e, '', n]),
                  k.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--; )
                          e[(i = ee(e, o[s]))] = !(t[i] = o[s]);
                      })
                    : function (e) {
                        return r(e, 0, o);
                      })
                : r;
            },
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                o = A(e.replace(ae, '$1'));
              return o[W]
                ? i(function (e, t, n, i) {
                    for (var r, s = o(e, null, i, []), a = e.length; a--; )
                      (r = s[a]) && (e[a] = !(t[a] = r));
                  })
                : function (e, i, r) {
                    return (
                      (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: i(function (e) {
              return (
                (e = e.replace(we, be)),
                function (t) {
                  return (t.textContent || t.innerText || S(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: i(function (e) {
              return (
                pe.test(e || '') || t.error('unsupported lang: ' + e),
                (e = e.replace(we, be).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = P
                        ? t.lang
                        : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === O;
            },
            focus: function (e) {
              return (
                e === H.activeElement &&
                (!H.hasFocus || H.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: c(!1),
            disabled: c(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ('input' === t && !!e.checked) ||
                ('option' === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !k.pseudos.empty(e);
            },
            header: function (e) {
              return ve.test(e.nodeName);
            },
            input: function (e) {
              return he.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && 'button' === e.type) || 'button' === t;
            },
            text: function (e) {
              var t;
              return (
                'input' === e.nodeName.toLowerCase() &&
                'text' === e.type &&
                (null == (t = e.getAttribute('type')) ||
                  'text' === t.toLowerCase())
              );
            },
            first: d(function () {
              return [0];
            }),
            last: d(function (e, t) {
              return [t - 1];
            }),
            eq: d(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: d(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: d(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: d(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: d(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = k.pseudos.eq);
    for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      k.pseudos[x] = a(x);
    for (x in { submit: !0, reset: !0 }) k.pseudos[x] = l(x);
    return (
      (p.prototype = k.filters = k.pseudos),
      (k.setFilters = new p()),
      ($ = t.tokenize =
        function (e, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            d = U[e + ' '];
          if (d) return n ? 0 : d.slice(0);
          for (a = e, l = [], c = k.preFilter; a; ) {
            (i && !(o = le.exec(a))) ||
              (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
              (i = !1),
              (o = ce.exec(a)) &&
                ((i = o.shift()),
                r.push({ value: i, type: o[0].replace(ae, ' ') }),
                (a = a.slice(i.length)));
            for (s in k.filter)
              !(o = fe[s].exec(a)) ||
                (c[s] && !(o = c[s](o))) ||
                ((i = o.shift()),
                r.push({ value: i, type: s, matches: o }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return n ? a.length : a ? t.error(e) : U(e, l).slice(0);
        }),
      (A = t.compile =
        function (e, t) {
          var n,
            i = [],
            o = [],
            r = X[e + ' '];
          if (!r) {
            for (t || (t = $(e)), n = t.length; n--; )
              (r = w(t[n]))[W] ? i.push(r) : o.push(r);
            (r = X(e, b(o, i))).selector = e;
          }
          return r;
        }),
      (E = t.select =
        function (e, t, n, i) {
          var o,
            r,
            s,
            a,
            l,
            c = 'function' == typeof e && e,
            d = !i && $((e = c.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (r = d[0] = d[0].slice(0)).length > 2 &&
              'ID' === (s = r[0]).type &&
              9 === t.nodeType &&
              P &&
              k.relative[r[1].type]
            ) {
              if (!(t = (k.find.ID(s.matches[0].replace(we, be), t) || [])[0]))
                return n;
              c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
            }
            for (
              o = fe.needsContext.test(e) ? 0 : r.length;
              o-- && ((s = r[o]), !k.relative[(a = s.type)]);

            )
              if (
                (l = k.find[a]) &&
                (i = l(
                  s.matches[0].replace(we, be),
                  (me.test(r[0].type) && u(t.parentNode)) || t,
                ))
              ) {
                if ((r.splice(o, 1), !(e = i.length && f(r))))
                  return K.apply(n, i), n;
                break;
              }
          }
          return (
            (c || A(e, d))(
              i,
              t,
              !P,
              n,
              !t || (me.test(e) && u(t.parentNode)) || t,
            ),
            n
          );
        }),
      (T.sortStable = W.split('').sort(Y).join('') === W),
      (T.detectDuplicates = !!N),
      L(),
      (T.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition(H.createElement('fieldset'));
      })),
      o(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        r('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (T.attributes &&
        o(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        r('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      o(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        r(te, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      t
    );
  })(e);
  (xe.find = ke),
    (xe.expr = ke.selectors),
    (xe.expr[':'] = xe.expr.pseudos),
    (xe.uniqueSort = xe.unique = ke.uniqueSort),
    (xe.text = ke.getText),
    (xe.isXMLDoc = ke.isXML),
    (xe.contains = ke.contains),
    (xe.escapeSelector = ke.escape);
  var Se = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && xe(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    Ce = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    $e = xe.expr.match.needsContext,
    Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (xe.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? xe.find.matchesSelector(i, e)
          ? [i]
          : []
        : xe.find.matches(
            e,
            xe.grep(t, function (e) {
              return 1 === e.nodeType;
            }),
          )
    );
  }),
    xe.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ('string' != typeof e)
          return this.pushStack(
            xe(e).filter(function () {
              for (t = 0; t < i; t++) if (xe.contains(o[t], this)) return !0;
            }),
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) xe.find(e, o[t], n);
        return i > 1 ? xe.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function (e) {
        return !!s(
          this,
          'string' == typeof e && $e.test(e) ? xe(e) : e || [],
          !1,
        ).length;
      },
    });
  var Ee,
    De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((xe.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || Ee), 'string' == typeof e)) {
      if (
        !(i =
          '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : De.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof xe ? t[0] : t),
          xe.merge(
            this,
            xe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0),
          ),
          Ae.test(i[1]) && xe.isPlainObject(t))
        )
          for (i in t) me(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = se.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : me(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(xe)
      : xe.makeArray(e, this);
  }).prototype = xe.fn),
    (Ee = xe(se));
  var je = /^(?:parents|prev(?:Until|All))/,
    Ne = { children: !0, contents: !0, next: !0, prev: !0 };
  xe.fn.extend({
    has: function (e) {
      var t = xe(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (xe.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = 'string' != typeof e && xe(e);
      if (!$e.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && xe.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(r.length > 1 ? xe.uniqueSort(r) : r);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? ue.call(xe(e), this[0])
          : ue.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    xe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Se(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return Se(e, 'parentNode', n);
        },
        next: function (e) {
          return a(e, 'nextSibling');
        },
        prev: function (e) {
          return a(e, 'previousSibling');
        },
        nextAll: function (e) {
          return Se(e, 'nextSibling');
        },
        prevAll: function (e) {
          return Se(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return Se(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return Se(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return Ce((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Ce(e.firstChild);
        },
        contents: function (e) {
          return r(e, 'iframe')
            ? e.contentDocument
            : (r(e, 'template') && (e = e.content || e),
              xe.merge([], e.childNodes));
        },
      },
      function (e, t) {
        xe.fn[e] = function (n, i) {
          var o = xe.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (i = n),
            i && 'string' == typeof i && (o = xe.filter(i, o)),
            this.length > 1 &&
              (Ne[e] || xe.uniqueSort(o), je.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      },
    );
  var Le = /[^\x20\t\r\n\f]+/g;
  (xe.Callbacks = function (e) {
    e = 'string' == typeof e ? l(e) : xe.extend({}, e);
    var t,
      n,
      o,
      r,
      s = [],
      a = [],
      c = -1,
      d = function () {
        for (r = r || e.once, o = t = !0; a.length; c = -1)
          for (n = a.shift(); ++c < s.length; )
            !1 === s[c].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((c = s.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (s = n ? [] : '');
      },
      u = {
        add: function () {
          return (
            s &&
              (n && !t && ((c = s.length - 1), a.push(n)),
              (function t(n) {
                xe.each(n, function (n, o) {
                  me(o)
                    ? (e.unique && u.has(o)) || s.push(o)
                    : o && o.length && 'string' !== i(o) && t(o);
                });
              })(arguments),
              n && !t && d()),
            this
          );
        },
        remove: function () {
          return (
            xe.each(arguments, function (e, t) {
              for (var n; (n = xe.inArray(t, s, n)) > -1; )
                s.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? xe.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (r = a = []), (s = n = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (r = a = []), n || t || (s = n = ''), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || d()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return u;
  }),
    xe.extend({
      Deferred: function (t) {
        var n = [
            [
              'notify',
              'progress',
              xe.Callbacks('memory'),
              xe.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              xe.Callbacks('once memory'),
              xe.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              xe.Callbacks('once memory'),
              xe.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return xe
                .Deferred(function (t) {
                  xe.each(n, function (n, i) {
                    var o = me(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && me(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + 'With'](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, o) {
              function r(t, n, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    u = function () {
                      var e, u;
                      if (!(t < s)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError('Thenable self-resolution');
                        (u =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          me(u)
                            ? o
                              ? u.call(e, r(s, n, c, o), r(s, n, d, o))
                              : (s++,
                                u.call(
                                  e,
                                  r(s, n, c, o),
                                  r(s, n, d, o),
                                  r(s, n, c, n.notifyWith),
                                ))
                            : (i !== c && ((a = void 0), (l = [e])),
                              (o || n.resolveWith)(a, l));
                      }
                    },
                    p = o
                      ? u
                      : function () {
                          try {
                            u();
                          } catch (e) {
                            xe.Deferred.exceptionHook &&
                              xe.Deferred.exceptionHook(e, p.stackTrace),
                              t + 1 >= s &&
                                (i !== d && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? p()
                    : (xe.Deferred.getStackHook &&
                        (p.stackTrace = xe.Deferred.getStackHook()),
                      e.setTimeout(p));
                };
              }
              var s = 0;
              return xe
                .Deferred(function (e) {
                  n[0][3].add(r(0, e, me(o) ? o : c, e.notifyWith)),
                    n[1][3].add(r(0, e, me(t) ? t : c)),
                    n[2][3].add(r(0, e, me(i) ? i : d));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? xe.extend(e, o) : o;
            },
          },
          r = {};
        return (
          xe.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock,
                ),
              s.add(t[3].fire),
              (r[t[0]] = function () {
                return (
                  r[t[0] + 'With'](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + 'With'] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = le.call(arguments),
          r = xe.Deferred(),
          s = function (e) {
            return function (n) {
              (i[e] = this),
                (o[e] = arguments.length > 1 ? le.call(arguments) : n),
                --t || r.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (u(e, r.done(s(n)).resolve, r.reject, !t),
          'pending' === r.state() || me(o[n] && o[n].then))
        )
          return r.then();
        for (; n--; ) u(o[n], s(n), r.reject);
        return r.promise();
      },
    });
  var He = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (xe.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      He.test(t.name) &&
      e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (xe.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Oe = xe.Deferred();
  (xe.fn.ready = function (e) {
    return (
      Oe.then(e).catch(function (e) {
        xe.readyException(e);
      }),
      this
    );
  }),
    xe.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --xe.readyWait : xe.isReady) ||
          ((xe.isReady = !0),
          (!0 !== e && --xe.readyWait > 0) || Oe.resolveWith(se, [xe]));
      },
    }),
    (xe.ready.then = Oe.then),
    'complete' === se.readyState ||
    ('loading' !== se.readyState && !se.documentElement.doScroll)
      ? e.setTimeout(xe.ready)
      : (se.addEventListener('DOMContentLoaded', p),
        e.addEventListener('load', p));
  var Pe = function (e, t, n, o, r, s, a) {
      var l = 0,
        c = e.length,
        d = null == n;
      if ('object' === i(n)) {
        r = !0;
        for (l in n) Pe(e, t, l, n[l], !0, s, a);
      } else if (
        void 0 !== o &&
        ((r = !0),
        me(o) || (a = !0),
        d &&
          (a
            ? (t.call(e, o), (t = null))
            : ((d = t),
              (t = function (e, t, n) {
                return d.call(xe(e), n);
              }))),
        t)
      )
        for (; l < c; l++) t(e[l], n, a ? o : o.call(e[l], l, t(e[l], n)));
      return r ? e : d ? t.call(e) : c ? t(e[0], n) : s;
    },
    qe = /^-ms-/,
    Me = /-([a-z])/g,
    ze = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (v.uid = 1),
    (v.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            ze(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ('string' == typeof t) o[h(t)] = n;
        else for (i in t) o[h(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][h(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(h)
              : (t = h(t)) in i
              ? [t]
              : t.match(Le) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || xe.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !xe.isEmptyObject(t);
      },
    });
  var Ie = new v(),
    We = new v(),
    Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Be = /[A-Z]/g;
  xe.extend({
    hasData: function (e) {
      return We.hasData(e) || Ie.hasData(e);
    },
    data: function (e, t, n) {
      return We.access(e, t, n);
    },
    removeData: function (e, t) {
      We.remove(e, t);
    },
    _data: function (e, t, n) {
      return Ie.access(e, t, n);
    },
    _removeData: function (e, t) {
      Ie.remove(e, t);
    },
  }),
    xe.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = We.get(r)), 1 === r.nodeType && !Ie.get(r, 'hasDataAttrs'))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf('data-') &&
                ((i = h(i.slice(5))), y(r, i, o[i]));
            Ie.set(r, 'hasDataAttrs', !0);
          }
          return o;
        }
        return 'object' == typeof e
          ? this.each(function () {
              We.set(this, e);
            })
          : Pe(
              this,
              function (t) {
                var n;
                if (r && void 0 === t) {
                  if (void 0 !== (n = We.get(r, e))) return n;
                  if (void 0 !== (n = y(r, e))) return n;
                } else
                  this.each(function () {
                    We.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0,
            );
      },
      removeData: function (e) {
        return this.each(function () {
          We.remove(this, e);
        });
      },
    }),
    xe.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (i = Ie.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Ie.access(e, t, xe.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = xe.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = xe._queueHooks(e, t),
          s = function () {
            xe.dequeue(e, t);
          };
        'inprogress' === o && ((o = n.shift()), i--),
          o &&
            ('fx' === t && n.unshift('inprogress'),
            delete r.stop,
            o.call(e, s, r)),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Ie.get(e, n) ||
          Ie.access(e, n, {
            empty: xe.Callbacks('once memory').add(function () {
              Ie.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    xe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? xe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = xe.queue(this, e, t);
                xe._queueHooks(this, e),
                  'fx' === e && 'inprogress' !== n[0] && xe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          xe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = xe.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          s--;

        )
          (n = Ie.get(r[s], e + 'queueHooks')) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _e = new RegExp('^(?:([+-])=|)(' + Fe + ')([a-z%]*)$', 'i'),
    Ue = ['Top', 'Right', 'Bottom', 'Left'],
    Xe = function (e, t) {
      return (
        'none' === (e = t || e).style.display ||
        ('' === e.style.display &&
          xe.contains(e.ownerDocument, e) &&
          'none' === xe.css(e, 'display'))
      );
    },
    Ye = function (e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = s[r];
      return o;
    },
    Ve = {};
  xe.fn.extend({
    show: function () {
      return b(this, !0);
    },
    hide: function () {
      return b(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Xe(this) ? xe(this).show() : xe(this).hide();
          });
    },
  });
  var Ge = /^(?:checkbox|radio)$/i,
    Qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Je = /^$|^module$|\/(?:java|ecma)script/i,
    Ke = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  (Ke.optgroup = Ke.option),
    (Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead),
    (Ke.th = Ke.td);
  var Ze = /<|&#?\w+;/;
  !(function () {
    var e = se.createDocumentFragment().appendChild(se.createElement('div')),
      t = se.createElement('input');
    t.setAttribute('type', 'radio'),
      t.setAttribute('checked', 'checked'),
      t.setAttribute('name', 't'),
      e.appendChild(t),
      (ye.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = '<textarea>x</textarea>'),
      (ye.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var et = se.documentElement,
    tt = /^key/,
    nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    it = /^([^.]*)(?:\.(.+)|)/;
  (xe.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        v,
        g = Ie.get(e);
      if (g)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && xe.find.matchesSelector(et, o),
            n.guid || (n.guid = xe.guid++),
            (l = g.events) || (l = g.events = {}),
            (s = g.handle) ||
              (s = g.handle =
                function (t) {
                  return 'undefined' != typeof xe &&
                    xe.event.triggered !== t.type
                    ? xe.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || '').match(Le) || ['']).length;
          c--;

        )
          (f = v = (a = it.exec(t[c]) || [])[1]),
            (h = (a[2] || '').split('.').sort()),
            f &&
              ((u = xe.event.special[f] || {}),
              (f = (o ? u.delegateType : u.bindType) || f),
              (u = xe.event.special[f] || {}),
              (d = xe.extend(
                {
                  type: f,
                  origType: v,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && xe.expr.match.needsContext.test(o),
                  namespace: h.join('.'),
                },
                r,
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, i, h, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (xe.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        v,
        g = Ie.hasData(e) && Ie.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || '').match(Le) || ['']).length; c--; )
          if (
            ((a = it.exec(t[c]) || []),
            (f = v = a[1]),
            (h = (a[2] || '').split('.').sort()),
            f)
          ) {
            for (
              u = xe.event.special[f] || {},
                p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                s = r = p.length;
              r--;

            )
              (d = p[r]),
                (!o && v !== d.origType) ||
                  (n && n.guid !== d.guid) ||
                  (a && !a.test(d.namespace)) ||
                  (i && i !== d.selector && ('**' !== i || !d.selector)) ||
                  (p.splice(r, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, d));
            s &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                xe.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) xe.event.remove(e, f + t[c], n, i, !0);
        xe.isEmptyObject(l) && Ie.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = xe.event.fix(e),
        l = new Array(arguments.length),
        c = (Ie.get(this, 'events') || {})[a.type] || [],
        d = xe.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, a))
      ) {
        for (
          s = xe.event.handlers.call(this, a, c), t = 0;
          (o = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r),
              (a.data = r.data),
              void 0 !==
                (i = (
                  (xe.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !('click' === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ('click' !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = t[n]).selector + ' ')] &&
                (s[o] = i.needsContext
                  ? xe(o, this).index(c) > -1
                  : xe.find(o, this, null, [c]).length),
                s[o] && r.push(i);
            r.length && a.push({ elem: c, handlers: r });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(xe.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: me(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[xe.expando] ? e : new xe.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== $() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          if (this === $() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && r(this, 'input'))
            return this.click(), !1;
        },
        _default: function (e) {
          return r(e.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (xe.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (xe.Event = function (e, t) {
      return this instanceof xe.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? S
                  : C),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && xe.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[xe.expando] = !0),
          void 0)
        : new xe.Event(e, t);
    }),
    (xe.Event.prototype = {
      constructor: xe.Event,
      isDefaultPrevented: C,
      isPropagationStopped: C,
      isImmediatePropagationStopped: C,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = S),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = S),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = S),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    xe.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && tt.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && nt.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      xe.event.addProp,
    ),
    xe.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        xe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              o = e.relatedTarget,
              r = e.handleObj;
            return (
              (o && (o === i || xe.contains(i, o))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      },
    ),
    xe.fn.extend({
      on: function (e, t, n, i) {
        return A(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return A(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            xe(e.delegateTarget).off(
              i.namespace ? i.origType + '.' + i.namespace : i.origType,
              i.selector,
              i.handler,
            ),
            this
          );
        if ('object' == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = C),
          this.each(function () {
            xe.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ot =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    rt = /<script|<style|<link/i,
    st = /checked\s*(?:[^=]|=\s*.checked.)/i,
    at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  xe.extend({
    htmlPrefilter: function (e) {
      return e.replace(ot, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.cloneNode(!0),
        l = xe.contains(e.ownerDocument, e);
      if (
        !(
          ye.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          xe.isXMLDoc(e)
        )
      )
        for (s = x(a), i = 0, o = (r = x(e)).length; i < o; i++) L(r[i], s[i]);
      if (t)
        if (n)
          for (r = r || x(e), s = s || x(a), i = 0, o = r.length; i < o; i++)
            N(r[i], s[i]);
        else N(e, a);
      return (s = x(a, 'script')).length > 0 && T(s, !l && x(e, 'script')), a;
    },
    cleanData: function (e) {
      for (var t, n, i, o = xe.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (ze(n)) {
          if ((t = n[Ie.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? xe.event.remove(n, i) : xe.removeEvent(n, i, t.handle);
            n[Ie.expando] = void 0;
          }
          n[We.expando] && (n[We.expando] = void 0);
        }
    },
  }),
    xe.fn.extend({
      detach: function (e) {
        return O(this, e, !0);
      },
      remove: function (e) {
        return O(this, e);
      },
      text: function (e) {
        return Pe(
          this,
          function (e) {
            return void 0 === e
              ? xe.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length,
        );
      },
      append: function () {
        return H(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            E(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return H(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = E(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return H(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return H(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (xe.cleanData(x(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return xe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Pe(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !rt.test(e) &&
              !Ke[(Qe.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = xe.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (xe.cleanData(x(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length,
        );
      },
      replaceWith: function () {
        var e = [];
        return H(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            xe.inArray(this, e) < 0 &&
              (xe.cleanData(x(this)), n && n.replaceChild(t, this));
          },
          e,
        );
      },
    }),
    xe.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        xe.fn[e] = function (e) {
          for (var n, i = [], o = xe(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)),
              xe(o[s])[t](n),
              de.apply(i, n.get());
          return this.pushStack(i);
        };
      },
    );
  var lt = new RegExp('^(' + Fe + ')(?!px)[a-z%]+$', 'i'),
    ct = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    dt = new RegExp(Ue.join('|'), 'i');
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (c.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          et.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = '1%' !== t.top),
          (a = 12 === n(t.marginLeft)),
          (c.style.right = '60%'),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = 'absolute'),
          (r = 36 === c.offsetWidth || 'absolute'),
          et.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      r,
      s,
      a,
      l = se.createElement('div'),
      c = se.createElement('div');
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (ye.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      xe.extend(ye, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), a;
        },
        scrollboxSize: function () {
          return t(), r;
        },
      }));
  })();
  var ut = /^(none|table(?!-c[ea]).+)/,
    pt = /^--/,
    ft = { position: 'absolute', visibility: 'hidden', display: 'block' },
    ht = { letterSpacing: '0', fontWeight: '400' },
    vt = ['Webkit', 'Moz', 'ms'],
    gt = se.createElement('div').style;
  xe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = P(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = h(t),
          l = pt.test(t),
          c = e.style;
        if (
          (l || (t = z(a)),
          (s = xe.cssHooks[t] || xe.cssHooks[a]),
          void 0 === n)
        )
          return s && 'get' in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        'string' == (r = typeof n) &&
          (o = _e.exec(n)) &&
          o[1] &&
          ((n = m(e, t, o)), (r = 'number')),
          null != n &&
            n === n &&
            ('number' === r &&
              (n += (o && o[3]) || (xe.cssNumber[a] ? '' : 'px')),
            ye.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (c[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = h(t);
      return (
        pt.test(t) || (t = z(a)),
        (s = xe.cssHooks[t] || xe.cssHooks[a]) &&
          'get' in s &&
          (o = s.get(e, !0, n)),
        void 0 === o && (o = P(e, t, i)),
        'normal' === o && t in ht && (o = ht[t]),
        '' === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    },
  }),
    xe.each(['height', 'width'], function (e, t) {
      xe.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !ut.test(xe.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? R(e, t, i)
              : Ye(e, ft, function () {
                  return R(e, t, i);
                });
        },
        set: function (e, n, i) {
          var o,
            r = ct(e),
            s = 'border-box' === xe.css(e, 'boxSizing', !1, r),
            a = i && W(e, t, i, s, r);
          return (
            s &&
              ye.scrollboxSize() === r.position &&
              (a -= Math.ceil(
                e['offset' + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  W(e, t, 'border', !1, r) -
                  0.5,
              )),
            a &&
              (o = _e.exec(n)) &&
              'px' !== (o[3] || 'px') &&
              ((e.style[t] = n), (n = xe.css(e, t))),
            I(e, n, a)
          );
        },
      };
    }),
    (xe.cssHooks.marginLeft = q(ye.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(P(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Ye(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    xe.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (xe.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, o = {}, r = 'string' == typeof n ? n.split(' ') : [n];
            i < 4;
            i++
          )
            o[e + Ue[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        'margin' !== e && (xe.cssHooks[e + t].set = I);
    }),
    xe.fn.extend({
      css: function (e, t) {
        return Pe(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = ct(e), o = t.length; s < o; s++)
                r[t[s]] = xe.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t);
          },
          e,
          t,
          arguments.length > 1,
        );
      },
    }),
    (xe.Tween = B),
    (B.prototype = {
      constructor: B,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || xe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (xe.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = B.propHooks[this.prop];
        return e && e.get ? e.get(this) : B.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = B.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                xe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration,
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : B.propHooks._default.set(this),
          this
        );
      },
    }),
    (B.prototype.init.prototype = B.prototype),
    (B.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = xe.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0;
        },
        set: function (e) {
          xe.fx.step[e.prop]
            ? xe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[xe.cssProps[e.prop]] &&
                !xe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : xe.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (B.propHooks.scrollTop = B.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (xe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (xe.fx = B.prototype.init),
    (xe.fx.step = {});
  var yt,
    mt,
    wt = /^(?:toggle|show|hide)$/,
    bt = /queueHooks$/;
  (xe.Animation = xe.extend(G, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return m(n.elem, e, _e.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      me(e) ? ((t = e), (e = ['*'])) : (e = e.match(Le));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (G.tweeners[n] = G.tweeners[n] || []),
          G.tweeners[n].unshift(t);
    },
    prefilters: [Y],
    prefilter: function (e, t) {
      t ? G.prefilters.unshift(e) : G.prefilters.push(e);
    },
  })),
    (xe.speed = function (e, t, n) {
      var i =
        e && 'object' == typeof e
          ? xe.extend({}, e)
          : {
              complete: n || (!n && t) || (me(e) && e),
              duration: e,
              easing: (n && t) || (t && !me(t) && t),
            };
      return (
        xe.fx.off
          ? (i.duration = 0)
          : 'number' != typeof i.duration &&
            (i.duration in xe.fx.speeds
              ? (i.duration = xe.fx.speeds[i.duration])
              : (i.duration = xe.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          me(i.old) && i.old.call(this), i.queue && xe.dequeue(this, i.queue);
        }),
        i
      );
    }),
    xe.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Xe)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = xe.isEmptyObject(e),
          r = xe.speed(t, n, i),
          s = function () {
            var t = G(this, xe.extend({}, e), r);
            (o || Ie.get(this, 'finish')) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              o = null != e && e + 'queueHooks',
              r = xe.timers,
              s = Ie.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && bt.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || xe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = Ie.get(this),
              i = n[e + 'queue'],
              o = n[e + 'queueHooks'],
              r = xe.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                xe.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    xe.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = xe.fn[t];
      xe.fn[t] = function (e, i, o) {
        return null == e || 'boolean' == typeof e
          ? n.apply(this, arguments)
          : this.animate(U(t, !0), e, i, o);
      };
    }),
    xe.each(
      {
        slideDown: U('show'),
        slideUp: U('hide'),
        slideToggle: U('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, t) {
        xe.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      },
    ),
    (xe.timers = []),
    (xe.fx.tick = function () {
      var e,
        t = 0,
        n = xe.timers;
      for (yt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || xe.fx.stop(), (yt = void 0);
    }),
    (xe.fx.timer = function (e) {
      xe.timers.push(e), xe.fx.start();
    }),
    (xe.fx.interval = 13),
    (xe.fx.start = function () {
      mt || ((mt = !0), F());
    }),
    (xe.fx.stop = function () {
      mt = null;
    }),
    (xe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (xe.fn.delay = function (t, n) {
      return (
        (t = xe.fx ? xe.fx.speeds[t] || t : t),
        (n = n || 'fx'),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var e = se.createElement('input'),
        t = se.createElement('select').appendChild(se.createElement('option'));
      (e.type = 'checkbox'),
        (ye.checkOn = '' !== e.value),
        (ye.optSelected = t.selected),
        ((e = se.createElement('input')).value = 't'),
        (e.type = 'radio'),
        (ye.radioValue = 't' === e.value);
    })();
  var xt,
    Tt = xe.expr.attrHandle;
  xe.fn.extend({
    attr: function (e, t) {
      return Pe(this, xe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        xe.removeAttr(this, e);
      });
    },
  }),
    xe.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return 'undefined' == typeof e.getAttribute
            ? xe.prop(e, t, n)
            : ((1 === r && xe.isXMLDoc(e)) ||
                (o =
                  xe.attrHooks[t.toLowerCase()] ||
                  (xe.expr.match.bool.test(t) ? xt : void 0)),
              void 0 !== n
                ? null === n
                  ? void xe.removeAttr(e, t)
                  : o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : o && 'get' in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = xe.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ye.radioValue && 'radio' === t && r(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(Le);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      },
    }),
    (xt = {
      set: function (e, t, n) {
        return !1 === t ? xe.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    xe.each(xe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Tt[t] || xe.find.attr;
      Tt[t] = function (e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return (
          i ||
            ((r = Tt[s]),
            (Tt[s] = o),
            (o = null != n(e, t, i) ? s : null),
            (Tt[s] = r)),
          o
        );
      };
    });
  var kt = /^(?:input|select|textarea|button)$/i,
    St = /^(?:a|area)$/i;
  xe.fn.extend({
    prop: function (e, t) {
      return Pe(this, xe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[xe.propFix[e] || e];
      });
    },
  }),
    xe.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && xe.isXMLDoc(e)) ||
              ((t = xe.propFix[t] || t), (o = xe.propHooks[t])),
            void 0 !== n
              ? o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && 'get' in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = xe.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : kt.test(e.nodeName) || (St.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    ye.optSelected ||
      (xe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    xe.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        xe.propFix[this.toLowerCase()] = this;
      },
    ),
    xe.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (me(e))
          return this.each(function (t) {
            xe(this).addClass(e.call(this, t, J(this)));
          });
        if ((t = K(e)).length)
          for (; (n = this[l++]); )
            if (((o = J(n)), (i = 1 === n.nodeType && ' ' + Q(o) + ' '))) {
              for (s = 0; (r = t[s++]); )
                i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ');
              o !== (a = Q(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (me(e))
          return this.each(function (t) {
            xe(this).removeClass(e.call(this, t, J(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = K(e)).length)
          for (; (n = this[l++]); )
            if (((o = J(n)), (i = 1 === n.nodeType && ' ' + Q(o) + ' '))) {
              for (s = 0; (r = t[s++]); )
                for (; i.indexOf(' ' + r + ' ') > -1; )
                  i = i.replace(' ' + r + ' ', ' ');
              o !== (a = Q(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : me(e)
          ? this.each(function (n) {
              xe(this).toggleClass(e.call(this, n, J(this), t), t);
            })
          : this.each(function () {
              var t, o, r, s;
              if (i)
                for (o = 0, r = xe(this), s = K(e); (t = s[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && 'boolean' !== n) ||
                  ((t = J(this)) && Ie.set(this, '__className__', t),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      t || !1 === e ? '' : Ie.get(this, '__className__') || '',
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); )
          if (1 === n.nodeType && (' ' + Q(J(n)) + ' ').indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var Ct = /\r/g;
  xe.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = me(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, xe(this).val()) : e)
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Array.isArray(o) &&
                  (o = xe.map(o, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((t =
                xe.valHooks[this.type] ||
                xe.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in t &&
                void 0 !== t.set(this, o, 'value')) ||
                (this.value = o));
          }))
        : o
        ? (t = xe.valHooks[o.type] || xe.valHooks[o.nodeName.toLowerCase()]) &&
          'get' in t &&
          void 0 !== (n = t.get(o, 'value'))
          ? n
          : 'string' == typeof (n = o.value)
          ? n.replace(Ct, '')
          : null == n
          ? ''
          : n
        : void 0;
    },
  }),
    xe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = xe.find.attr(e, 'value');
            return null != t ? t : Q(xe.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              s = e.selectedIndex,
              a = 'select-one' === e.type,
              l = a ? null : [],
              c = a ? s + 1 : o.length;
            for (i = s < 0 ? c : a ? s : 0; i < c; i++)
              if (
                ((n = o[i]).selected || i === s) &&
                !n.disabled &&
                (!n.parentNode.disabled || !r(n.parentNode, 'optgroup'))
              ) {
                if (((t = xe(n).val()), a)) return t;
                l.push(t);
              }
            return l;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = xe.makeArray(t), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                xe.inArray(xe.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    xe.each(['radio', 'checkbox'], function () {
      (xe.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = xe.inArray(xe(e).val(), t) > -1);
        },
      }),
        ye.checkOn ||
          (xe.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (ye.focusin = 'onfocusin' in e);
  var $t = /^(?:focusinfocus|focusoutblur)$/,
    At = function (e) {
      e.stopPropagation();
    };
  xe.extend(xe.event, {
    trigger: function (t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f = [i || se],
        h = he.call(t, 'type') ? t.type : t,
        v = he.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((s = p = a = i = i || se),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !$t.test(h + xe.event.triggered) &&
          (h.indexOf('.') > -1 && ((h = (v = h.split('.')).shift()), v.sort()),
          (c = h.indexOf(':') < 0 && 'on' + h),
          (t = t[xe.expando] ? t : new xe.Event(h, 'object' == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = v.join('.')),
          (t.rnamespace = t.namespace
            ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : xe.makeArray(n, [t])),
          (u = xe.event.special[h] || {}),
          o || !u.trigger || !1 !== u.trigger.apply(i, n)))
      ) {
        if (!o && !u.noBubble && !we(i)) {
          for (
            l = u.delegateType || h, $t.test(l + h) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (a = s);
          a === (i.ownerDocument || se) &&
            f.push(a.defaultView || a.parentWindow || e);
        }
        for (r = 0; (s = f[r++]) && !t.isPropagationStopped(); )
          (p = s),
            (t.type = r > 1 ? l : u.bindType || h),
            (d = (Ie.get(s, 'events') || {})[t.type] && Ie.get(s, 'handle')) &&
              d.apply(s, n),
            (d = c && s[c]) &&
              d.apply &&
              ze(s) &&
              ((t.result = d.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          o ||
            t.isDefaultPrevented() ||
            (u._default && !1 !== u._default.apply(f.pop(), n)) ||
            !ze(i) ||
            (c &&
              me(i[h]) &&
              !we(i) &&
              ((a = i[c]) && (i[c] = null),
              (xe.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, At),
              i[h](),
              t.isPropagationStopped() && p.removeEventListener(h, At),
              (xe.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = xe.extend(new xe.Event(), n, { type: e, isSimulated: !0 });
      xe.event.trigger(i, null, t);
    },
  }),
    xe.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          xe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return xe.event.trigger(e, t, n, !0);
      },
    }),
    ye.focusin ||
      xe.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          xe.event.simulate(t, e.target, xe.event.fix(e));
        };
        xe.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = Ie.access(i, t);
            o || i.addEventListener(e, n, !0), Ie.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = Ie.access(i, t) - 1;
            o
              ? Ie.access(i, t, o)
              : (i.removeEventListener(e, n, !0), Ie.remove(i, t));
          },
        };
      });
  var Et = e.location,
    Dt = Date.now(),
    jt = /\?/;
  xe.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName('parsererror').length) ||
        xe.error('Invalid XML: ' + t),
      n
    );
  };
  var Nt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  (xe.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = me(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (Array.isArray(e) || (e.jquery && !xe.isPlainObject(e)))
      xe.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) Z(n, e[n], t, o);
    return i.join('&');
  }),
    xe.fn.extend({
      serialize: function () {
        return xe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = xe.prop(this, 'elements');
          return e ? xe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !xe(this).is(':disabled') &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !Ge.test(e))
            );
          })
          .map(function (e, t) {
            var n = xe(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? xe.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, '\r\n') };
                })
              : { name: t.name, value: n.replace(Lt, '\r\n') };
          })
          .get();
      },
    });
  var Pt = /%20/g,
    qt = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Wt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    Bt = {},
    Ft = {},
    _t = '*/'.concat('*'),
    Ut = se.createElement('a');
  (Ut.href = Et.href),
    xe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: 'GET',
        isLocal: It.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': _t,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': xe.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? ne(ne(e, xe.ajaxSettings), t) : ne(xe.ajaxSettings, e);
      },
      ajaxPrefilter: ee(Bt),
      ajaxTransport: ee(Ft),
      ajax: function (t, n) {
        function i(t, n, i, a) {
          var c,
            p,
            f,
            b,
            x,
            T = n;
          d ||
            ((d = !0),
            l && e.clearTimeout(l),
            (o = void 0),
            (s = a || ''),
            (k.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            i && (b = ie(h, k, i)),
            (b = oe(h, b, k, c)),
            c
              ? (h.ifModified &&
                  ((x = k.getResponseHeader('Last-Modified')) &&
                    (xe.lastModified[r] = x),
                  (x = k.getResponseHeader('etag')) && (xe.etag[r] = x)),
                204 === t || 'HEAD' === h.type
                  ? (T = 'nocontent')
                  : 304 === t
                  ? (T = 'notmodified')
                  : ((T = b.state), (p = b.data), (c = !(f = b.error))))
              : ((f = T), (!t && T) || ((T = 'error'), t < 0 && (t = 0))),
            (k.status = t),
            (k.statusText = (n || T) + ''),
            c ? y.resolveWith(v, [p, T, k]) : y.rejectWith(v, [k, T, f]),
            k.statusCode(w),
            (w = void 0),
            u && g.trigger(c ? 'ajaxSuccess' : 'ajaxError', [k, h, c ? p : f]),
            m.fireWith(v, [k, T]),
            u &&
              (g.trigger('ajaxComplete', [k, h]),
              --xe.active || xe.event.trigger('ajaxStop')));
        }
        'object' == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h = xe.ajaxSetup({}, n),
          v = h.context || h,
          g = h.context && (v.nodeType || v.jquery) ? xe(v) : xe.event,
          y = xe.Deferred(),
          m = xe.Callbacks('once memory'),
          w = h.statusCode || {},
          b = {},
          x = {},
          T = 'canceled',
          k = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (d) {
                if (!a)
                  for (a = {}; (t = zt.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return d ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == d &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == d && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (d) k.always(e[k.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return o && o.abort(t), i(0, t), this;
            },
          };
        if (
          (y.promise(k),
          (h.url = ((t || h.url || Et.href) + '').replace(
            Rt,
            Et.protocol + '//',
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || '*').toLowerCase().match(Le) || ['']),
          null == h.crossDomain)
        ) {
          c = se.createElement('a');
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                Ut.protocol + '//' + Ut.host != c.protocol + '//' + c.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            'string' != typeof h.data &&
            (h.data = xe.param(h.data, h.traditional)),
          te(Bt, h, n, k),
          d)
        )
          return k;
        (u = xe.event && h.global) &&
          0 == xe.active++ &&
          xe.event.trigger('ajaxStart'),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Wt.test(h.type)),
          (r = h.url.replace(qt, '')),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || '').indexOf(
                  'application/x-www-form-urlencoded',
                ) &&
              (h.data = h.data.replace(Pt, '+'))
            : ((f = h.url.slice(r.length)),
              h.data &&
                (h.processData || 'string' == typeof h.data) &&
                ((r += (jt.test(r) ? '&' : '?') + h.data), delete h.data),
              !1 === h.cache &&
                ((r = r.replace(Mt, '$1')),
                (f = (jt.test(r) ? '&' : '?') + '_=' + Dt++ + f)),
              (h.url = r + f)),
          h.ifModified &&
            (xe.lastModified[r] &&
              k.setRequestHeader('If-Modified-Since', xe.lastModified[r]),
            xe.etag[r] && k.setRequestHeader('If-None-Match', xe.etag[r])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            k.setRequestHeader('Content-Type', h.contentType),
          k.setRequestHeader(
            'Accept',
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ('*' !== h.dataTypes[0] ? ', ' + _t + '; q=0.01' : '')
              : h.accepts['*'],
          );
        for (p in h.headers) k.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(v, k, h) || d))
          return k.abort();
        if (
          ((T = 'abort'),
          m.add(h.complete),
          k.done(h.success),
          k.fail(h.error),
          (o = te(Ft, h, n, k)))
        ) {
          if (((k.readyState = 1), u && g.trigger('ajaxSend', [k, h]), d))
            return k;
          h.async &&
            h.timeout > 0 &&
            (l = e.setTimeout(function () {
              k.abort('timeout');
            }, h.timeout));
          try {
            (d = !1), o.send(b, i);
          } catch (e) {
            if (d) throw e;
            i(-1, e);
          }
        } else i(-1, 'No Transport');
        return k;
      },
      getJSON: function (e, t, n) {
        return xe.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return xe.get(e, void 0, t, 'script');
      },
    }),
    xe.each(['get', 'post'], function (e, t) {
      xe[t] = function (e, n, i, o) {
        return (
          me(n) && ((o = o || i), (i = n), (n = void 0)),
          xe.ajax(
            xe.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              xe.isPlainObject(e) && e,
            ),
          )
        );
      };
    }),
    (xe._evalUrl = function (e) {
      return xe.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    xe.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (me(e) && (e = e.call(this[0])),
            (t = xe(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return me(e)
          ? this.each(function (t) {
              xe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = xe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = me(e);
        return this.each(function (n) {
          xe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              xe(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (xe.expr.pseudos.hidden = function (e) {
      return !xe.expr.pseudos.visible(e);
    }),
    (xe.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (xe.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Xt = { 0: 200, 1223: 204 },
    Yt = xe.ajaxSettings.xhr();
  (ye.cors = !!Yt && 'withCredentials' in Yt),
    (ye.ajax = Yt = !!Yt),
    xe.ajaxTransport(function (t) {
      var n, i;
      if (ye.cors || (Yt && !t.crossDomain))
        return {
          send: function (o, r) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                o['X-Requested-With'] ||
                (o['X-Requested-With'] = 'XMLHttpRequest');
            for (s in o) a.setRequestHeader(s, o[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  'abort' === e
                    ? a.abort()
                    : 'error' === e
                    ? 'number' != typeof a.status
                      ? r(0, 'error')
                      : r(a.status, a.statusText)
                    : r(
                        Xt[a.status] || a.status,
                        a.statusText,
                        'text' !== (a.responseType || 'text') ||
                          'string' != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders(),
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n('error')),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    xe.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    xe.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return xe.globalEval(e), e;
        },
      },
    }),
    xe.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    xe.ajaxTransport('script', function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = xe('<script>')
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o('error' === e.type ? 404 : 200, e.type);
                }),
              )),
              se.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Vt = [],
    Gt = /(=)\?(?=&|$)|\?\?/;
  xe.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Vt.pop() || xe.expando + '_' + Dt++;
      return (this[e] = !0), e;
    },
  }),
    xe.ajaxPrefilter('json jsonp', function (t, n, i) {
      var o,
        r,
        s,
        a =
          !1 !== t.jsonp &&
          (Gt.test(t.url)
            ? 'url'
            : 'string' == typeof t.data &&
              0 ===
                (t.contentType || '').indexOf(
                  'application/x-www-form-urlencoded',
                ) &&
              Gt.test(t.data) &&
              'data');
      if (a || 'jsonp' === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            me(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Gt, '$1' + o))
            : !1 !== t.jsonp &&
              (t.url += (jt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
          (t.converters['script json'] = function () {
            return s || xe.error(o + ' was not called'), s[0];
          }),
          (t.dataTypes[0] = 'json'),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === r ? xe(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Vt.push(o)),
              s && me(r) && r(s[0]),
              (s = r = void 0);
          }),
          'script'
        );
    }),
    (ye.createHTMLDocument = (function () {
      var e = se.implementation.createHTMLDocument('').body;
      return (
        (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length
      );
    })()),
    (xe.parseHTML = function (e, t, n) {
      if ('string' != typeof e) return [];
      'boolean' == typeof t && ((n = t), (t = !1));
      var i, o, r;
      return (
        t ||
          (ye.createHTMLDocument
            ? (((i = (t =
                se.implementation.createHTMLDocument('')).createElement(
                'base',
              )).href = se.location.href),
              t.head.appendChild(i))
            : (t = se)),
        (o = Ae.exec(e)),
        (r = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = k([e], t, r)),
            r && r.length && xe(r).remove(),
            xe.merge([], o.childNodes))
      );
    }),
    (xe.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(' ');
      return (
        a > -1 && ((i = Q(e.slice(a))), (e = e.slice(0, a))),
        me(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (o = 'POST'),
        s.length > 0 &&
          xe
            .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (r = arguments),
                s.html(i ? xe('<div>').append(xe.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                },
            ),
        this
      );
    }),
    xe.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        xe.fn[t] = function (e) {
          return this.on(t, e);
        };
      },
    ),
    (xe.expr.pseudos.animated = function (e) {
      return xe.grep(xe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (xe.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d = xe.css(e, 'position'),
          u = xe(e),
          p = {};
        'static' === d && (e.style.position = 'relative'),
          (a = u.offset()),
          (r = xe.css(e, 'top')),
          (l = xe.css(e, 'left')),
          (c =
            ('absolute' === d || 'fixed' === d) && (r + l).indexOf('auto') > -1)
            ? ((s = (i = u.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          me(t) && (t = t.call(e, n, xe.extend({}, a))),
          null != t.top && (p.top = t.top - a.top + s),
          null != t.left && (p.left = t.left - a.left + o),
          'using' in t ? t.using.call(e, p) : u.css(p);
      },
    }),
    xe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                xe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ('fixed' === xe.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === xe.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = xe(e).offset()).top += xe.css(e, 'borderTopWidth', !0)),
              (o.left += xe.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - o.top - xe.css(i, 'marginTop', !0),
            left: t.left - o.left - xe.css(i, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === xe.css(e, 'position');

          )
            e = e.offsetParent;
          return e || et;
        });
      },
    }),
    xe.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (e, t) {
        var n = 'pageYOffset' === t;
        xe.fn[e] = function (i) {
          return Pe(
            this,
            function (e, i, o) {
              var r;
              return (
                we(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === o
                  ? r
                    ? r[t]
                    : e[i]
                  : void (r
                      ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
                      : (e[i] = o))
              );
            },
            e,
            i,
            arguments.length,
          );
        };
      },
    ),
    xe.each(['top', 'left'], function (e, t) {
      xe.cssHooks[t] = q(ye.pixelPosition, function (e, n) {
        if (n)
          return (n = P(e, t)), lt.test(n) ? xe(e).position()[t] + 'px' : n;
      });
    }),
    xe.each({ Height: 'height', Width: 'width' }, function (e, t) {
      xe.each(
        { padding: 'inner' + e, content: t, '': 'outer' + e },
        function (n, i) {
          xe.fn[i] = function (o, r) {
            var s = arguments.length && (n || 'boolean' != typeof o),
              a = n || (!0 === o || !0 === r ? 'margin' : 'border');
            return Pe(
              this,
              function (t, n, o) {
                var r;
                return we(t)
                  ? 0 === i.indexOf('outer')
                    ? t['inner' + e]
                    : t.document.documentElement['client' + e]
                  : 9 === t.nodeType
                  ? ((r = t.documentElement),
                    Math.max(
                      t.body['scroll' + e],
                      r['scroll' + e],
                      t.body['offset' + e],
                      r['offset' + e],
                      r['client' + e],
                    ))
                  : void 0 === o
                  ? xe.css(t, n, a)
                  : xe.style(t, n, o, a);
              },
              t,
              s ? o : void 0,
              s,
            );
          };
        },
      );
    }),
    xe.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' ',
      ),
      function (e, t) {
        xe.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      },
    ),
    xe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    xe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
    }),
    (xe.proxy = function (e, t) {
      var n, i, o;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), me(e)))
        return (
          (i = le.call(arguments, 2)),
          (o = function () {
            return e.apply(t || this, i.concat(le.call(arguments)));
          }),
          (o.guid = e.guid = e.guid || xe.guid++),
          o
        );
    }),
    (xe.holdReady = function (e) {
      e ? xe.readyWait++ : xe.ready(!0);
    }),
    (xe.isArray = Array.isArray),
    (xe.parseJSON = JSON.parse),
    (xe.nodeName = r),
    (xe.isFunction = me),
    (xe.isWindow = we),
    (xe.camelCase = h),
    (xe.type = i),
    (xe.now = Date.now),
    (xe.isNumeric = function (e) {
      var t = xe.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return xe;
      });
  var Qt = e.jQuery,
    Jt = e.$;
  return (
    (xe.noConflict = function (t) {
      return (
        e.$ === xe && (e.$ = Jt), t && e.jQuery === xe && (e.jQuery = Qt), xe
      );
    }),
    t || (e.jQuery = e.$ = xe),
    xe
  );
});
// even if the comment does not have directives such as `@license` or `/*!`.
//
// Implemented via the [`uglify-save-license`](https://github.com/shinnn/uglify-save-license)
// module, this option preserves a comment if one of the following is true:
//
// 1. The comment is in the *first* line of a file
// 2. A regular expression matches the string of the comment.
//    For example: `MIT`, `@license`, or `Copyright`.
// 3. There is a comment at the *previous* line, and it matches 1, 2, or 3.
