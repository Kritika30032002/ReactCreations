import M from "zdog";
import Y, { useRef as B, useState as H, useEffect as q, useContext as te, useMemo as Ke, useImperativeHandle as It, useLayoutEffect as ee, useCallback as zt } from "react";
var Ce = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Gt() {
  if (Ze)
    return X;
  Ze = 1;
  var r = Y, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(f, b, y) {
    var h, x = {}, T = null, z = null;
    y !== void 0 && (T = "" + y), b.key !== void 0 && (T = "" + b.key), b.ref !== void 0 && (z = b.ref);
    for (h in b)
      o.call(b, h) && !c.hasOwnProperty(h) && (x[h] = b[h]);
    if (f && f.defaultProps)
      for (h in b = f.defaultProps, b)
        x[h] === void 0 && (x[h] = b[h]);
    return { $$typeof: t, type: f, key: T, ref: z, props: x, _owner: a.current };
  }
  return X.Fragment = n, X.jsx = g, X.jsxs = g, X;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Lt() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Y, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), f = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), W = Symbol.iterator, N = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = W && e[W] || e[N];
      return typeof i == "function" ? i : null;
    }
    var G = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
          s[u - 1] = arguments[u];
        he("error", e, s);
      }
    }
    function he(e, i, s) {
      {
        var u = G.ReactDebugCurrentFrame, p = u.getStackAddendum();
        p !== "" && (i += "%s", s = s.concat([p]));
        var m = s.map(function(v) {
          return String(v);
        });
        m.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var l = !1, pe = !1, D = !1, K = !1, be = !1, re;
    re = Symbol.for("react.module.reference");
    function O(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === c || be || e === a || e === y || e === h || K || e === z || l || pe || D || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === x || e.$$typeof === g || e.$$typeof === f || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function F(e, i, s) {
      var u = e.displayName;
      if (u)
        return u;
      var p = i.displayName || i.name || "";
      return p !== "" ? s + "(" + p + ")" : s;
    }
    function $(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case a:
          return "StrictMode";
        case y:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var i = e;
            return $(i) + ".Consumer";
          case g:
            var s = e;
            return $(s._context) + ".Provider";
          case b:
            return F(e, e.render, "ForwardRef");
          case x:
            var u = e.displayName || null;
            return u !== null ? u : _(e.type) || "Memo";
          case T: {
            var p = e, m = p._payload, v = p._init;
            try {
              return _(v(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, j = 0, ne, Se, Me, je, ke, Ae, De;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function ft() {
      {
        if (j === 0) {
          ne = console.log, Se = console.info, Me = console.warn, je = console.error, ke = console.group, Ae = console.groupCollapsed, De = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        j++;
      }
    }
    function dt() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ne
            }),
            info: C({}, e, {
              value: Se
            }),
            warn: C({}, e, {
              value: Me
            }),
            error: C({}, e, {
              value: je
            }),
            group: C({}, e, {
              value: ke
            }),
            groupCollapsed: C({}, e, {
              value: Ae
            }),
            groupEnd: C({}, e, {
              value: De
            })
          });
        }
        j < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = G.ReactCurrentDispatcher, me;
    function ie(e, i, s) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (p) {
            var u = p.stack.trim().match(/\n( *(at )?)/);
            me = u && u[1] || "";
          }
        return `
` + me + e;
      }
    }
    var _e = !1, oe;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new vt();
    }
    function Ie(e, i) {
      if (!e || _e)
        return "";
      {
        var s = oe.get(e);
        if (s !== void 0)
          return s;
      }
      var u;
      _e = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = ge.current, ge.current = null, ft();
      try {
        if (i) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (I) {
              u = I;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (I) {
              u = I;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            u = I;
          }
          e();
        }
      } catch (I) {
        if (I && u && typeof I.stack == "string") {
          for (var d = I.stack.split(`
`), S = u.stack.split(`
`), E = d.length - 1, R = S.length - 1; E >= 1 && R >= 0 && d[E] !== S[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (d[E] !== S[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || d[E] !== S[R]) {
                    var k = `
` + d[E].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, k), k;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ge.current = m, dt(), Error.prepareStackTrace = p;
      }
      var U = e ? e.displayName || e.name : "", Je = U ? ie(U) : "";
      return typeof e == "function" && oe.set(e, Je), Je;
    }
    function ht(e, i, s) {
      return Ie(e, !1);
    }
    function pt(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function ae(e, i, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, pt(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case y:
          return ie("Suspense");
        case h:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return ht(e.render);
          case x:
            return ae(e.type, i, s);
          case T: {
            var u = e, p = u._payload, m = u._init;
            try {
              return ae(m(p), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, ze = {}, Ge = G.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var i = e._owner, s = ae(e.type, e._source, i ? i.type : null);
        Ge.setExtraStackFrame(s);
      } else
        Ge.setExtraStackFrame(null);
    }
    function bt(e, i, s, u, p) {
      {
        var m = Function.call.bind(se);
        for (var v in e)
          if (m(e, v)) {
            var d = void 0;
            try {
              if (typeof e[v] != "function") {
                var S = Error((u || "React class") + ": " + s + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              d = e[v](i, v, u, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              d = E;
            }
            d && !(d instanceof Error) && (ue(p), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", s, v, typeof d), ue(null)), d instanceof Error && !(d.message in ze) && (ze[d.message] = !0, ue(p), w("Failed %s type: %s", s, d.message), ue(null));
          }
      }
    }
    var gt = Array.isArray;
    function ye(e) {
      return gt(e);
    }
    function mt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function _t(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function We(e) {
      if (_t(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mt(e)), Le(e);
    }
    var Z = G.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Ye, Ee;
    Ee = {};
    function Et(e) {
      if (se.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Rt(e) {
      if (se.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, i) {
      if (typeof e.ref == "string" && Z.current && i && Z.current.stateNode !== i) {
        var s = _(Z.current.type);
        Ee[s] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(Z.current.type), e.ref), Ee[s] = !0);
      }
    }
    function Ot(e, i) {
      {
        var s = function() {
          $e || ($e = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function xt(e, i) {
      {
        var s = function() {
          Ye || (Ye = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Ct = function(e, i, s, u, p, m, v) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: s,
        props: v,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function Tt(e, i, s, u, p) {
      {
        var m, v = {}, d = null, S = null;
        s !== void 0 && (We(s), d = "" + s), Rt(i) && (We(i.key), d = "" + i.key), Et(i) && (S = i.ref, wt(i, p));
        for (m in i)
          se.call(i, m) && !yt.hasOwnProperty(m) && (v[m] = i[m]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (m in E)
            v[m] === void 0 && (v[m] = E[m]);
        }
        if (d || S) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && Ot(v, R), S && xt(v, R);
        }
        return Ct(e, d, S, p, u, Z.current, v);
      }
    }
    var Re = G.ReactCurrentOwner, Ne = G.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var i = e._owner, s = ae(e.type, e._source, i ? i.type : null);
        Ne.setExtraStackFrame(s);
      } else
        Ne.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function Oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ve() {
      {
        if (Re.current) {
          var e = _(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pt(e) {
      {
        if (e !== void 0) {
          var i = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + i + ":" + s + ".";
        }
        return "";
      }
    }
    var Ue = {};
    function St(e) {
      {
        var i = Ve();
        if (!i) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function Be(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = St(i);
        if (Ue[s])
          return;
        Ue[s] = !0;
        var u = "";
        e && e._owner && e._owner !== Re.current && (u = " It was passed a child from " + _(e._owner.type) + "."), V(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, u), V(null);
      }
    }
    function He(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var u = e[s];
            Oe(u) && Be(u, i);
          }
        else if (Oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = P(e);
          if (typeof p == "function" && p !== e.entries)
            for (var m = p.call(e), v; !(v = m.next()).done; )
              Oe(v.value) && Be(v.value, i);
        }
      }
    }
    function Mt(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === x))
          s = i.propTypes;
        else
          return;
        if (s) {
          var u = _(i);
          bt(s, e.props, "prop", u, e);
        } else if (i.PropTypes !== void 0 && !we) {
          we = !0;
          var p = _(i);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(e) {
      {
        for (var i = Object.keys(e.props), s = 0; s < i.length; s++) {
          var u = i[s];
          if (u !== "children" && u !== "key") {
            V(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), V(null);
            break;
          }
        }
        e.ref !== null && (V(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function qe(e, i, s, u, p, m) {
      {
        var v = O(e);
        if (!v) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Pt(p);
          S ? d += S : d += Ve();
          var E;
          e === null ? E = "null" : ye(e) ? E = "array" : e !== void 0 && e.$$typeof === t ? (E = "<" + (_(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, d);
        }
        var R = Tt(e, i, s, p, m);
        if (R == null)
          return R;
        if (v) {
          var k = i.children;
          if (k !== void 0)
            if (u)
              if (ye(k)) {
                for (var U = 0; U < k.length; U++)
                  He(k[U], e);
                Object.freeze && Object.freeze(k);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(k, e);
        }
        return e === o ? jt(R) : Mt(R), R;
      }
    }
    function kt(e, i, s) {
      return qe(e, i, s, !0);
    }
    function At(e, i, s) {
      return qe(e, i, s, !1);
    }
    var Dt = At, Ft = kt;
    Q.Fragment = o, Q.jsx = Dt, Q.jsxs = Ft;
  }()), Q;
}
process.env.NODE_ENV === "production" ? Ce.exports = Gt() : Ce.exports = Lt();
var L = Ce.exports, it = function() {
  if (typeof Map < "u")
    return Map;
  function r(t, n) {
    var o = -1;
    return t.some(function(a, c) {
      return a[0] === n ? (o = c, !0) : !1;
    }), o;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var o = r(this.__entries__, n), a = this.__entries__[o];
        return a && a[1];
      }, t.prototype.set = function(n, o) {
        var a = r(this.__entries__, n);
        ~a ? this.__entries__[a][1] = o : this.__entries__.push([n, o]);
      }, t.prototype.delete = function(n) {
        var o = this.__entries__, a = r(o, n);
        ~a && o.splice(a, 1);
      }, t.prototype.has = function(n) {
        return !!~r(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, o) {
        o === void 0 && (o = null);
        for (var a = 0, c = this.__entries__; a < c.length; a++) {
          var g = c[a];
          n.call(o, g[1], g[0]);
        }
      }, t;
    }()
  );
}(), Te = typeof window < "u" && typeof document < "u" && window.document === document, ce = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Wt = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ce) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), $t = 2;
function Yt(r, t) {
  var n = !1, o = !1, a = 0;
  function c() {
    n && (n = !1, r()), o && f();
  }
  function g() {
    Wt(c);
  }
  function f() {
    var b = Date.now();
    if (n) {
      if (b - a < $t)
        return;
      o = !0;
    } else
      n = !0, o = !1, setTimeout(g, t);
    a = b;
  }
  return f;
}
var Nt = 20, Vt = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ut = typeof MutationObserver < "u", Bt = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Yt(this.refresh.bind(this), Nt);
    }
    return r.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, r.prototype.removeObserver = function(t) {
      var n = this.observers_, o = n.indexOf(t);
      ~o && n.splice(o, 1), !n.length && this.connected_ && this.disconnect_();
    }, r.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, r.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, r.prototype.connect_ = function() {
      !Te || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ut ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !Te || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, o = n === void 0 ? "" : n, a = Vt.some(function(c) {
        return !!~o.indexOf(c);
      });
      a && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), ot = function(r, t) {
  for (var n = 0, o = Object.keys(t); n < o.length; n++) {
    var a = o[n];
    Object.defineProperty(r, a, {
      value: t[a],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return r;
}, J = function(r) {
  var t = r && r.ownerDocument && r.ownerDocument.defaultView;
  return t || ce;
}, at = de(0, 0, 0, 0);
function le(r) {
  return parseFloat(r) || 0;
}
function Qe(r) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(o, a) {
    var c = r["border-" + a + "-width"];
    return o + le(c);
  }, 0);
}
function Ht(r) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, o = 0, a = t; o < a.length; o++) {
    var c = a[o], g = r["padding-" + c];
    n[c] = le(g);
  }
  return n;
}
function qt(r) {
  var t = r.getBBox();
  return de(0, 0, t.width, t.height);
}
function Jt(r) {
  var t = r.clientWidth, n = r.clientHeight;
  if (!t && !n)
    return at;
  var o = J(r).getComputedStyle(r), a = Ht(o), c = a.left + a.right, g = a.top + a.bottom, f = le(o.width), b = le(o.height);
  if (o.boxSizing === "border-box" && (Math.round(f + c) !== t && (f -= Qe(o, "left", "right") + c), Math.round(b + g) !== n && (b -= Qe(o, "top", "bottom") + g)), !Zt(r)) {
    var y = Math.round(f + c) - t, h = Math.round(b + g) - n;
    Math.abs(y) !== 1 && (f -= y), Math.abs(h) !== 1 && (b -= h);
  }
  return de(a.left, a.top, f, b);
}
var Kt = function() {
  return typeof SVGGraphicsElement < "u" ? function(r) {
    return r instanceof J(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof J(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function Zt(r) {
  return r === J(r).document.documentElement;
}
function Xt(r) {
  return Te ? Kt(r) ? qt(r) : Jt(r) : at;
}
function Qt(r) {
  var t = r.x, n = r.y, o = r.width, a = r.height, c = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, g = Object.create(c.prototype);
  return ot(g, {
    x: t,
    y: n,
    width: o,
    height: a,
    top: n,
    right: t + o,
    bottom: a + n,
    left: t
  }), g;
}
function de(r, t, n, o) {
  return { x: r, y: t, width: n, height: o };
}
var er = (
  /** @class */
  function() {
    function r(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = de(0, 0, 0, 0), this.target = t;
    }
    return r.prototype.isActive = function() {
      var t = Xt(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, r;
  }()
), tr = (
  /** @class */
  function() {
    function r(t, n) {
      var o = Qt(n);
      ot(this, { target: t, contentRect: o });
    }
    return r;
  }()
), rr = (
  /** @class */
  function() {
    function r(t, n, o) {
      if (this.activeObservations_ = [], this.observations_ = new it(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = o;
    }
    return r.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof J(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new er(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof J(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, r.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, r.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, r.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(o) {
          return new tr(o.target, o.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), st = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new it(), ut = (
  /** @class */
  function() {
    function r(t) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Bt.getInstance(), o = new rr(t, n, this);
      st.set(this, o);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  ut.prototype[r] = function() {
    var t;
    return (t = st.get(this))[r].apply(t, arguments);
  };
});
var nr = function() {
  return typeof ce.ResizeObserver < "u" ? ce.ResizeObserver : ut;
}();
function fe(r, t) {
  M.extend(r, t);
}
const A = (r) => Y.forwardRef(({ children: t, ...n }, o) => lt(r, t, n, o)[0]);
function ct() {
  const t = Math.floor(Math.random() * 16777216).toString(16).toUpperCase();
  return "#" + t.padStart(6, "0") === "#000000" ? ct() : "#" + t.padStart(6, "0");
}
const xe = (r) => {
  let t = r.toString(16);
  return t.length == 1 ? "0" + t : t;
}, ir = (r, t, n) => "#" + xe(r) + xe(t) + xe(n);
function Pe(r, t, n) {
  return new Proxy(r, {
    set(o, a, c) {
      return typeof c == "object" && c !== null && (c = Pe(c, t)), t(o, a, c, n), o[a] = c, !0;
    },
    get(o, a) {
      return typeof o[a] == "object" && o[a] !== null ? Pe(o[a], t, a) : o[a];
    }
  });
}
const et = (r, t, n) => {
  const o = r.getBoundingClientRect();
  return {
    x: (t.clientX - o.left) / (o.right - o.left) * n.width,
    y: (t.clientY - o.top) / (o.bottom - o.top) * n.height
  };
}, tt = ({ x: r, y: t, canvasContext: n }) => {
  let a = n.getImageData(r, t, 1, 1).data;
  return ir(a[0], a[1], a[2]);
}, ve = Y.createContext(), rt = Y.createContext(), nt = Y.createContext();
function or() {
  const r = B(), [t, n] = H({ left: 0, top: 0, width: 0, height: 0 }), [o] = H(() => new nr(([a]) => n(a.contentRect)));
  return q(() => (r.current && o.observe(r.current), () => o.disconnect()), [r.current]), [{ ref: r }, t];
}
function cr(r, t = []) {
  const n = te(ve);
  q(() => {
    const o = n.current.subscribe(r);
    return () => o();
  }, t);
}
function ar() {
  return te(ve).current;
}
function lt(r, t, n, o) {
  const a = te(ve), c = te(rt), g = te(nt), f = Ke(() => ct(), []), b = Ke(() => ({
    stroke: !1,
    ...n,
    color: f,
    leftFace: f,
    rightFace: f,
    topFace: f,
    bottomFace: f
  }), [f, n]), [y] = H(() => new r(n)), [h] = H(() => new r(b)), x = (z, W, N, P) => {
    P ? h[P][W] = N : h[W] = N, a.current.illu.updateRenderGraph();
  }, [T] = H(() => Pe(y, x));
  return It(o, () => T), ee(() => {
    fe(y, n), c && a.current.illu.updateRenderGraph();
  }, [n]), ee(() => {
    fe(h, b);
  }, [b]), ee(() => {
    if (c)
      return c.addChild(y), a.current.illu.updateGraph(), () => {
        c.removeChild(y), c.updateFlatGraph(), a.current.illu.updateGraph();
      };
  }, [c]), q(() => {
    if (c)
      return a.current.itemMap[f] = y, n.onClick && (a.current.clickEventMap[f] = n.onClick), n.onPointerMove && (a.current.pointerMoveEventMap[f] = n.onPointerMove), n.onPointerEnter && (a.current.pointerEnterEventMap[f] = n.onPointerEnter), n.onPointerLeave && (a.current.pointerLeaveEventMap[f] = n.onPointerLeave), () => {
        delete a.current.itemMap[f], delete a.current.clickEventMap[f], delete a.current.pointerMoveEventMap[f], delete a.current.pointerEnterEventMap[f], delete a.current.pointerLeaveEventMap[f];
      };
  }, [n]), ee(() => {
    if (g)
      return g.addChild(h), a.current.illu_ghost.updateGraph(), () => {
        g.removeChild(h), g.updateFlatGraph(), a.current.illu_ghost.updateGraph();
      };
  }, [g]), [
    /* @__PURE__ */ L.jsx(nt.Provider, { value: h, children: /* @__PURE__ */ L.jsx(rt.Provider, { value: y, children: t }) }, f),
    y,
    h
  ];
}
function lr() {
  const r = ar();
  return zt(() => r.illu.updateRenderGraph(), [r]);
}
const fr = Y.memo(
  ({
    children: r,
    style: t,
    resize: n,
    element: o = "svg",
    frameloop: a = "always",
    dragRotate: c,
    onDragMove: g = () => {
    },
    onDragStart: f = () => {
    },
    onDragEnd: b = () => {
    },
    pointerEvents: y = !1,
    ...h
  }) => {
    const x = B(), T = B(), [z, W] = H(null);
    q(() => {
      W(T.current.getContext("2d", { willReadFrequently: !0 }));
    }, []);
    const [N, P] = or(), [G, w, he] = lt(M.Anchor, r), l = B({
      scene: w,
      illu: void 0,
      size: {},
      subscribers: [],
      subscribe: (O) => (l.current.subscribers.push(O), () => l.current.subscribers = l.current.subscribers.filter((F) => F !== O)),
      illu_ghost: void 0,
      itemMap: {},
      clickEventMap: {},
      pointerMoveEventMap: {},
      pointerEnterEventMap: {},
      pointerLeaveEventMap: {},
      pointerEvents: y
    });
    q(() => {
      l.current.size = P, l.current.illu && (l.current.illu.setSize(P.width, P.height), l.current.illu_ghost.setSize(P.width, P.height), a === "demand" && (l.current.illu.updateRenderGraph(), l.current.illu_ghost.updateRenderGraph()));
    }, [P]), q(() => {
      l.current.illu = new M.Illustration({
        element: x.current,
        dragRotate: c,
        onDragMove: () => {
          l.current.illu_ghost.rotate = {
            x: l.current.illu.rotate.x,
            y: l.current.illu.rotate.y,
            z: l.current.illu.rotate.z
          }, g();
        },
        onDragStart: f,
        onDragEnd: b,
        ...h
      }), l.current.illu.addChild(w), l.current.illu.updateGraph(), l.current.illu_ghost = new M.Illustration({
        element: T.current,
        ...h
      }), l.current.illu_ghost.addChild(he), l.current.illu_ghost.updateGraph();
      let O, F = !0;
      function $(_) {
        const { size: C, subscribers: j } = l.current;
        C.width && C.height && (j.forEach((ne) => ne(_)), a !== "demand" && l.current.illu.updateRenderGraph()), F && a !== "demand" && (O = requestAnimationFrame($));
      }
      return $(), () => {
        F = !1, cancelAnimationFrame(O);
      };
    }, [a]), ee(() => {
      l.current.illu && fe(l.current.illu, h), l.current.illu_ghost && fe(l.current.illu_ghost, h);
    }, [h]);
    const pe = (O) => {
      if (!y)
        return;
      l.current.illu_ghost && l.current.illu_ghost.updateRenderGraph();
      const F = et(x.current, O, T.current), _ = tt({ ...F, canvasContext: z }).toUpperCase(), C = l.current.clickEventMap[_];
      C && C(O, l.current.itemMap[_]);
    }, D = B(null), K = B(null), be = (O) => {
      K.current = O;
    }, re = (O) => {
      if (!y)
        return;
      l.current.illu_ghost && l.current.illu_ghost.updateRenderGraph();
      const F = et(x.current, O, T.current), _ = tt({ ...F, canvasContext: z }).toUpperCase();
      if (_ !== "#000000" && D.current !== _ && K.current !== _) {
        const j = l.current.pointerEnterEventMap[_];
        j && j(O, l.current.itemMap[_]), be(D.current);
      }
      if (D.current && D.current !== "#000000" && D.current !== _ && K.current) {
        const j = l.current.pointerLeaveEventMap[D.current];
        j && j(O, l.current.itemMap[D.current]);
      }
      const C = l.current.pointerMoveEventMap[_];
      C && C(O, l.current.itemMap[_]), D.current = _;
    };
    return /* @__PURE__ */ L.jsxs(L.Fragment, { children: [
      /* @__PURE__ */ L.jsxs(
        "div",
        {
          ref: N.ref,
          ...h,
          style: {
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
            ...t
          },
          children: [
            /* @__PURE__ */ L.jsx(
              o,
              {
                ref: x,
                style: { display: "block", boxSizing: "border-box" },
                width: P.width,
                height: P.height,
                onClick: pe,
                onPointerMove: re
              }
            ),
            l.current.illu && /* @__PURE__ */ L.jsx(ve.Provider, { value: l, children: G })
          ]
        }
      ),
      /* @__PURE__ */ L.jsx(
        "canvas",
        {
          ref: T,
          style: {
            display: "block",
            boxSizing: "border-box",
            opacity: "0",
            position: "fixed",
            zIndex: "1000",
            pointerEvents: "none",
            background: "black"
          },
          width: P.width,
          height: P.height
        }
      )
    ] });
  }
), dr = A(M.Anchor), vr = A(M.Shape), hr = A(M.Group), pr = A(M.Rect), br = A(M.RoundedRect), gr = A(M.Ellipse), mr = A(M.Polygon), _r = A(M.Hemisphere), yr = A(M.Cylinder), Er = A(M.Cone), Rr = A(M.Box);
export {
  dr as Anchor,
  Rr as Box,
  Er as Cone,
  yr as Cylinder,
  gr as Ellipse,
  hr as Group,
  _r as Hemisphere,
  fr as Illustration,
  mr as Polygon,
  pr as Rect,
  br as RoundedRect,
  vr as Shape,
  lr as useInvalidate,
  cr as useRender,
  ar as useZdog
};
