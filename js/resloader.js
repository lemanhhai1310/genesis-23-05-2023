/*!
 * A image preload plugin and can display the loaded image progress bar
 * v1.0.4 ©2018 chenyinkai <chenyinkai0223@gmail.com>
 * https://github.com/chenyinkai/resloader#readme
 */
!function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.resloader = n() : t.resloader = n()
}("undefined" != typeof self ? self : this, function() {
    return function(t) {
        function n(e) {
            if (r[e])
                return r[e].exports;
            var o = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        var r = {};
        return n.m = t, n.c = r, n.d = function(t, r, e) {
            n.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: e
            })
        }, n.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(r, "a", r), r
        }, n.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, n.p = "/", n(n.s = 49)
    }([function(t, n) {
        var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = r)
    }, function(t, n, r) {
        var e = r(26)("wks"),
            o = r(18),
            i = r(0).Symbol,
            u = "function" == typeof i;
        (t.exports = function(t) {
            return e[t] || (e[t] = u && i[t] || (u ? i : o)("Symbol." + t))
        }).store = e
    }, function(t, n) {
        var r = t.exports = {
            version: "2.5.3"
        };
        "number" == typeof __e && (__e = r)
    }, function(t, n, r) {
        var e = r(6);
        t.exports = function(t) {
            if (!e(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, n, r) {
        var e = r(5),
            o = r(17);
        t.exports = r(7) ? function(t, n, r) {
            return e.f(t, n, o(1, r))
        } : function(t, n, r) {
            return t[n] = r, t
        }
    }, function(t, n, r) {
        var e = r(3),
            o = r(35),
            i = r(23),
            u = Object.defineProperty;
        n.f = r(7) ? Object.defineProperty : function(t, n, r) {
            if (e(t), n = i(n, !0), e(r), o)
                try {
                    return u(t, n, r)
                } catch (t) {}
            if ("get" in r || "set" in r)
                throw TypeError("Accessors not supported!");
            return "value" in r && (t[n] = r.value), t
        }
    }, function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, n, r) {
        t.exports = !r(16)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, n) {
        var r = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return r.call(t, n)
        }
    }, function(t, n, r) {
        var e = r(55),
            o = r(21);
        t.exports = function(t) {
            return e(o(t))
        }
    }, function(t, n, r) {
        var e = r(0),
            o = r(2),
            i = r(14),
            u = r(4),
            c = function(t, n, r) {
                var f,
                    s,
                    a,
                    l = t & c.F,
                    p = t & c.G,
                    v = t & c.S,
                    h = t & c.P,
                    y = t & c.B,
                    d = t & c.W,
                    m = p ? o : o[n] || (o[n] = {}),
                    g = m.prototype,
                    x = p ? e : v ? e[n] : (e[n] || {}).prototype;
                p && (r = n);
                for (f in r)
                    (s = !l && x && void 0 !== x[f]) && f in m || (a = s ? x[f] : r[f], m[f] = p && "function" != typeof x[f] ? r[f] : y && s ? i(a, e) : d && x[f] == a ? function(t) {
                        var n = function(n, r, e) {
                            if (this instanceof t) {
                                switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(n);
                                    case 2:
                                        return new t(n, r)
                                }
                                return new t(n, r, e)
                            }
                            return t.apply(this, arguments)
                        };
                        return n.prototype = t.prototype, n
                    }(a) : h && "function" == typeof a ? i(Function.call, a) : a, h && ((m.virtual || (m.virtual = {}))[f] = a, t & c.R && g && !g[f] && u(g, f, a)))
            };
        c.F = 1,
            c.G = 2,
            c.S = 4,
            c.P = 8,
            c.B = 16,
            c.W = 32,
            c.U = 64,
            c.R = 128,
            t.exports = c
    }, function(t, n) {
        t.exports = {}
    }, function(t, n) {
        var r = {}.toString;
        t.exports = function(t) {
            return r.call(t).slice(8, -1)
        }
    }, function(t, n) {
        t.exports = !0
    }, function(t, n, r) {
        var e = r(15);
        t.exports = function(t, n, r) {
            if (e(t), void 0 === n)
                return t;
            switch (r) {
                case 1:
                    return function(r) {
                        return t.call(n, r)
                    };
                case 2:
                    return function(r, e) {
                        return t.call(n, r, e)
                    };
                case 3:
                    return function(r, e, o) {
                        return t.call(n, r, e, o)
                    }
            }
            return function() {
                return t.apply(n, arguments)
            }
        }
    }, function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }, function(t, n) {
        var r = 0,
            e = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + e).toString(36))
        }
    }, function(t, n, r) {
        var e = r(5).f,
            o = r(8),
            i = r(1)("toStringTag");
        t.exports = function(t, n, r) {
            t && !o(t = r ? t : t.prototype, i) && e(t, i, {
                configurable: !0,
                value: n
            })
        }
    }, function(t, n) {
        var r = Math.ceil,
            e = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t)
        }
    }, function(t, n) {
        t.exports = function(t) {
            if (void 0 == t)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, n, r) {
        var e = r(6),
            o = r(0).document,
            i = e(o) && e(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    }, function(t, n, r) {
        var e = r(6);
        t.exports = function(t, n) {
            if (!e(t))
                return t;
            var r,
                o;
            if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t)))
                return o;
            if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t)))
                return o;
            if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, n, r) {
        var e = r(38),
            o = r(27);
        t.exports = Object.keys || function(t) {
            return e(t, o)
        }
    }, function(t, n, r) {
        var e = r(26)("keys"),
            o = r(18);
        t.exports = function(t) {
            return e[t] || (e[t] = o(t))
        }
    }, function(t, n, r) {
        var e = r(0),
            o = e["__core-js_shared__"] || (e["__core-js_shared__"] = {});
        t.exports = function(t) {
            return o[t] || (o[t] = {})
        }
    }, function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, n, r) {
        "use strict";
        function e(t) {
            var n,
                r;
            this.promise = new t(function(t, e) {
                if (void 0 !== n || void 0 !== r)
                    throw TypeError("Bad Promise constructor");
                n = t,
                    r = e
            }),
                this.resolve = o(n),
                this.reject = o(r)
        }
        var o = r(15);
        t.exports.f = function(t) {
            return new e(t)
        }
    }, function(t, n, r) {
        n.f = r(1)
    }, function(t, n, r) {
        var e = r(0),
            o = r(2),
            i = r(13),
            u = r(29),
            c = r(5).f;
        t.exports = function(t) {
            var n = o.Symbol || (o.Symbol = i ? {} : e.Symbol || {});
            "_" == t.charAt(0) || t in n || c(n, t, {
                value: u.f(t)
            })
        }
    }, function(t, n) {
        n.f = {}.propertyIsEnumerable
    }, function(t, n) {}, function(t, n, r) {
        "use strict";
        var e = r(52)(!0);
        r(34)(String, "String", function(t) {
            this._t = String(t),
                this._i = 0
        }, function() {
            var t,
                n = this._t,
                r = this._i;
            return r >= n.length ? {
                value: void 0,
                done: !0
            } : (t = e(n, r), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, n, r) {
        "use strict";
        var e = r(13),
            o = r(10),
            i = r(36),
            u = r(4),
            c = r(8),
            f = r(11),
            s = r(53),
            a = r(19),
            l = r(58),
            p = r(1)("iterator"),
            v = !([].keys && "next" in [].keys()),
            h = function() {
                return this
            };
        t.exports = function(t, n, r, y, d, m, g) {
            s(r, n, y);
            var x,
                _,
                b,
                w = function(t) {
                    if (!v && t in P)
                        return P[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this, t)
                    }
                },
                S = n + " Iterator",
                O = "values" == d,
                j = !1,
                P = t.prototype,
                E = P[p] || P["@@iterator"] || d && P[d],
                T = !v && E || w(d),
                M = d ? O ? w("entries") : T : void 0,
                L = "Array" == n ? P.entries || E : E;
            if (L && (b = l(L.call(new t))) !== Object.prototype && b.next && (a(b, S, !0), e || c(b, p) || u(b, p, h)), O && E && "values" !== E.name && (j = !0, T = function() {
                return E.call(this)
            }), e && !g || !v && !j && P[p] || u(P, p, T), f[n] = T, f[S] = h, d)
                if (x = {
                    values: O ? T : w("values"),
                    keys: m ? T : w("keys"),
                    entries: M
                }, g)
                    for (_ in x)
                        _ in P || i(P, _, x[_]);
                else
                    o(o.P + o.F * (v || j), n, x);
            return x
        }
    }, function(t, n, r) {
        t.exports = !r(7) && !r(16)(function() {
            return 7 != Object.defineProperty(r(22)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, n, r) {
        t.exports = r(4)
    }, function(t, n, r) {
        var e = r(3),
            o = r(54),
            i = r(27),
            u = r(25)("IE_PROTO"),
            c = function() {},
            f = function() {
                var t,
                    n = r(22)("iframe"),
                    e = i.length;
                for (n.style.display = "none", r(40).appendChild(n), n.src = "javascript:", t = n.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), f = t.F; e--;)
                    delete f.prototype[i[e]];
                return f()
            };
        t.exports = Object.create || function(t, n) {
            var r;
            return null !== t ? (c.prototype = e(t), r = new c, c.prototype = null, r[u] = t) : r = f(), void 0 === n ? r : o(r, n)
        }
    }, function(t, n, r) {
        var e = r(8),
            o = r(9),
            i = r(56)(!1),
            u = r(25)("IE_PROTO");
        t.exports = function(t, n) {
            var r,
                c = o(t),
                f = 0,
                s = [];
            for (r in c)
                r != u && e(c, r) && s.push(r);
            for (; n.length > f;)
                e(c, r = n[f++]) && (~i(s, r) || s.push(r));
            return s
        }
    }, function(t, n, r) {
        var e = r(20),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(e(t), 9007199254740991) : 0
        }
    }, function(t, n, r) {
        var e = r(0).document;
        t.exports = e && e.documentElement
    }, function(t, n, r) {
        r(60);
        for (var e = r(0), o = r(4), i = r(11), u = r(1)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), f = 0; f < c.length; f++) {
            var s = c[f],
                a = e[s],
                l = a && a.prototype;
            l && !l[u] && o(l, u, s),
                i[s] = i.Array
        }
    }, function(t, n, r) {
        var e = r(12),
            o = r(1)("toStringTag"),
            i = "Arguments" == e(function() {
                return arguments
            }()),
            u = function(t, n) {
                try {
                    return t[n]
                } catch (t) {}
            };
        t.exports = function(t) {
            var n,
                r,
                c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = u(n = Object(t), o)) ? r : i ? e(n) : "Object" == (c = e(n)) && "function" == typeof n.callee ? "Arguments" : c
        }
    }, function(t, n, r) {
        var e = r(3),
            o = r(15),
            i = r(1)("species");
        t.exports = function(t, n) {
            var r,
                u = e(t).constructor;
            return void 0 === u || void 0 == (r = e(u)[i]) ? n : o(r)
        }
    }, function(t, n, r) {
        var e,
            o,
            i,
            u = r(14),
            c = r(69),
            f = r(40),
            s = r(22),
            a = r(0),
            l = a.process,
            p = a.setImmediate,
            v = a.clearImmediate,
            h = a.MessageChannel,
            y = a.Dispatch,
            d = 0,
            m = {},
            g = function() {
                var t = +this;
                if (m.hasOwnProperty(t)) {
                    var n = m[t];
                    delete m[t],
                        n()
                }
            },
            x = function(t) {
                g.call(t.data)
            };
        p && v || (p = function(t) {
            for (var n = [], r = 1; arguments.length > r;)
                n.push(arguments[r++]);
            return m[++d] = function() {
                c("function" == typeof t ? t : Function(t), n)
            }, e(d), d
        }, v = function(t) {
            delete m[t]
        }, "process" == r(12)(l) ? e = function(t) {
            l.nextTick(u(g, t, 1))
        } : y && y.now ? e = function(t) {
            y.now(u(g, t, 1))
        } : h ? (o = new h, i = o.port2, o.port1.onmessage = x, e = u(i.postMessage, i, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts ? (e = function(t) {
            a.postMessage(t + "", "*")
        }, a.addEventListener("message", x, !1)) : e = "onreadystatechange" in s("script") ? function(t) {
            f.appendChild(s("script")).onreadystatechange = function() {
                f.removeChild(this),
                    g.call(t)
            }
        } : function(t) {
            setTimeout(u(g, t, 1), 0)
        }),
            t.exports = {
                set: p,
                clear: v
            }
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, function(t, n, r) {
        var e = r(3),
            o = r(6),
            i = r(28);
        t.exports = function(t, n) {
            if (e(t), o(n) && n.constructor === t)
                return n;
            var r = i.f(t);
            return (0, r.resolve)(n), r.promise
        }
    }, function(t, n) {
        n.f = Object.getOwnPropertySymbols
    }, function(t, n, r) {
        var e = r(38),
            o = r(27).concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(t) {
            return e(t, o)
        }
    }, function(t, n, r) {
        "use strict";
        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = r(50),
            i = e(o),
            u = r(76),
            c = e(u),
            f = function(t) {
                return "object" === (void 0 === t ? "undefined" : (0, c.default)(t)) && !!t
            },
            s = function(t) {
                return "[object Array]" === toString.call(t)
            },
            a = function(t) {
                return "[object Function]" === toString.call(t)
            },
            l = {
                total: 0,
                start: function(t) {
                    var n = this,
                        r = t.resources;
                    this.total = t.resources.length,
                    a(t.onStart) && t.onStart(this.total),
                        i.default.all(this._PromiseArray(r, t.onProgress)).then(function(r) {
                            a(t.onComplete) && t.onComplete(n.total, r)
                        }).catch(function(t) {
                            return console.log(t)
                        })
                },
                _PromiseArray: function(t, n) {
                    for (var r = this, e = [], o = 0, i = 0; i < t.length; i++) {
                        var u = this._loadImage(t[i]);
                        e.push(u),
                            u.then(function(t) {
                                o++,
                                a(n) && n(o, r.total)
                            }).catch(function(t) {
                                return console.log(t)
                            })
                    }
                    return e
                },
                _loadImage: function(t) {
                    return new i.default(function(n, r) {
                        var e = new Image;
                        e.onload = function() {
                            n(t)
                        },
                            f(t) ? e.src = t.url : e.src = t,
                            e.onerror = function() {
                                r(t)
                            }
                    })
                }
            },
            p = function(t) {
                if (!f(t))
                    throw new TypeError("Expected an object");
                if (!s(t.resources))
                    throw new TypeError("options.resources Expected an Array or JSON");
                l.start(t)
            };
        t.exports = p
    }, function(t, n, r) {
        t.exports = {
            default: r(51),
            __esModule: !0
        }
    }, function(t, n, r) {
        r(32),
            r(33),
            r(41),
            r(63),
            r(74),
            r(75),
            t.exports = r(2).Promise
    }, function(t, n, r) {
        var e = r(20),
            o = r(21);
        t.exports = function(t) {
            return function(n, r) {
                var i,
                    u,
                    c = String(o(n)),
                    f = e(r),
                    s = c.length;
                return f < 0 || f >= s ? t ? "" : void 0 : (i = c.charCodeAt(f), i < 55296 || i > 56319 || f + 1 === s || (u = c.charCodeAt(f + 1)) < 56320 || u > 57343 ? t ? c.charAt(f) : i : t ? c.slice(f, f + 2) : u - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }, function(t, n, r) {
        "use strict";
        var e = r(37),
            o = r(17),
            i = r(19),
            u = {};
        r(4)(u, r(1)("iterator"), function() {
            return this
        }),
            t.exports = function(t, n, r) {
                t.prototype = e(u, {
                    next: o(1, r)
                }),
                    i(t, n + " Iterator")
            }
    }, function(t, n, r) {
        var e = r(5),
            o = r(3),
            i = r(24);
        t.exports = r(7) ? Object.defineProperties : function(t, n) {
            o(t);
            for (var r, u = i(n), c = u.length, f = 0; c > f;)
                e.f(t, r = u[f++], n[r]);
            return t
        }
    }, function(t, n, r) {
        var e = r(12);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == e(t) ? t.split("") : Object(t)
        }
    }, function(t, n, r) {
        var e = r(9),
            o = r(39),
            i = r(57);
        t.exports = function(t) {
            return function(n, r, u) {
                var c,
                    f = e(n),
                    s = o(f.length),
                    a = i(u, s);
                if (t && r != r) {
                    for (; s > a;)
                        if ((c = f[a++]) != c)
                            return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in f) && f[a] === r)
                            return t || a || 0;
                return !t && -1
            }
        }
    }, function(t, n, r) {
        var e = r(20),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, n) {
            return t = e(t), t < 0 ? o(t + n, 0) : i(t, n)
        }
    }, function(t, n, r) {
        var e = r(8),
            o = r(59),
            i = r(25)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), e(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function(t, n, r) {
        var e = r(21);
        t.exports = function(t) {
            return Object(e(t))
        }
    }, function(t, n, r) {
        "use strict";
        var e = r(61),
            o = r(62),
            i = r(11),
            u = r(9);
        t.exports = r(34)(Array, "Array", function(t, n) {
            this._t = u(t),
                this._i = 0,
                this._k = n
        }, function() {
            var t = this._t,
                n = this._k,
                r = this._i++;
            return !t || r >= t.length ? (this._t = void 0, o(1)) : "keys" == n ? o(0, r) : "values" == n ? o(0, t[r]) : o(0, [r, t[r]])
        }, "values"),
            i.Arguments = i.Array,
            e("keys"),
            e("values"),
            e("entries")
    }, function(t, n) {
        t.exports = function() {}
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            }
        }
    }, function(t, n, r) {
        "use strict";
        var e,
            o,
            i,
            u,
            c = r(13),
            f = r(0),
            s = r(14),
            a = r(42),
            l = r(10),
            p = r(6),
            v = r(15),
            h = r(64),
            y = r(65),
            d = r(43),
            m = r(44).set,
            g = r(70)(),
            x = r(28),
            _ = r(45),
            b = r(46),
            w = f.TypeError,
            S = f.process,
            O = f.Promise,
            j = "process" == a(S),
            P = function() {},
            E = o = x.f,
            T = !!function() {
                try {
                    var t = O.resolve(1),
                        n = (t.constructor = {})[r(1)("species")] = function(t) {
                            t(P, P)
                        };
                    return (j || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof n
                } catch (t) {}
            }(),
            M = function(t) {
                var n;
                return !(!p(t) || "function" != typeof (n = t.then)) && n
            },
            L = function(t, n) {
                if (!t._n) {
                    t._n = !0;
                    var r = t._c;
                    g(function() {
                        for (var e = t._v, o = 1 == t._s, i = 0; r.length > i;)
                            !function(n) {
                                var r,
                                    i,
                                    u = o ? n.ok : n.fail,
                                    c = n.resolve,
                                    f = n.reject,
                                    s = n.domain;
                                try {
                                    u ? (o || (2 == t._h && F(t), t._h = 1), !0 === u ? r = e : (s && s.enter(), r = u(e), s && s.exit()), r === n.promise ? f(w("Promise-chain cycle")) : (i = M(r)) ? i.call(r, c, f) : c(r)) : f(e)
                                } catch (t) {
                                    f(t)
                                }
                            }(r[i++]);
                        t._c = [],
                            t._n = !1,
                        n && !t._h && A(t)
                    })
                }
            },
            A = function(t) {
                m.call(f, function() {
                    var n,
                        r,
                        e,
                        o = t._v,
                        i = k(t);
                    if (i && (n = _(function() {
                        j ? S.emit("unhandledRejection", o, t) : (r = f.onunhandledrejection) ? r({
                            promise: t,
                            reason: o
                        }) : (e = f.console) && e.error && e.error("Unhandled promise rejection", o)
                    }), t._h = j || k(t) ? 2 : 1), t._a = void 0, i && n.e)
                        throw n.v
                })
            },
            k = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            F = function(t) {
                m.call(f, function() {
                    var n;
                    j ? S.emit("rejectionHandled", t) : (n = f.onrejectionhandled) && n({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            N = function(t) {
                var n = this;
                n._d || (n._d = !0, n = n._w || n, n._v = t, n._s = 2, n._a || (n._a = n._c.slice()), L(n, !0))
            },
            C = function(t) {
                var n,
                    r = this;
                if (!r._d) {
                    r._d = !0,
                        r = r._w || r;
                    try {
                        if (r === t)
                            throw w("Promise can't be resolved itself");
                        (n = M(t)) ? g(function() {
                            var e = {
                                _w: r,
                                _d: !1
                            };
                            try {
                                n.call(t, s(C, e, 1), s(N, e, 1))
                            } catch (t) {
                                N.call(e, t)
                            }
                        }) : (r._v = t, r._s = 1, L(r, !1))
                    } catch (t) {
                        N.call({
                            _w: r,
                            _d: !1
                        }, t)
                    }
                }
            };
        T || (O = function(t) {
            h(this, O, "Promise", "_h"),
                v(t),
                e.call(this);
            try {
                t(s(C, this, 1), s(N, this, 1))
            } catch (t) {
                N.call(this, t)
            }
        }, e = function(t) {
            this._c = [],
                this._a = void 0,
                this._s = 0,
                this._d = !1,
                this._v = void 0,
                this._h = 0,
                this._n = !1
        }, e.prototype = r(71)(O.prototype, {
            then: function(t, n) {
                var r = E(d(this, O));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = j ? S.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && L(this, !1), r.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), i = function() {
            var t = new e;
            this.promise = t,
                this.resolve = s(C, t, 1),
                this.reject = s(N, t, 1)
        }, x.f = E = function(t) {
            return t === O || t === u ? new i(t) : o(t)
        }),
            l(l.G + l.W + l.F * !T, {
                Promise: O
            }),
            r(19)(O, "Promise"),
            r(72)("Promise"),
            u = r(2).Promise,
            l(l.S + l.F * !T, "Promise", {
                reject: function(t) {
                    var n = E(this);
                    return (0, n.reject)(t), n.promise
                }
            }),
            l(l.S + l.F * (c || !T), "Promise", {
                resolve: function(t) {
                    return b(c && this === u ? O : this, t)
                }
            }),
            l(l.S + l.F * !(T && r(73)(function(t) {
                O.all(t).catch(P)
            })), "Promise", {
                all: function(t) {
                    var n = this,
                        r = E(n),
                        e = r.resolve,
                        o = r.reject,
                        i = _(function() {
                            var r = [],
                                i = 0,
                                u = 1;
                            y(t, !1, function(t) {
                                var c = i++,
                                    f = !1;
                                r.push(void 0),
                                    u++,
                                    n.resolve(t).then(function(t) {
                                        f || (f = !0, r[c] = t, --u || e(r))
                                    }, o)
                            }),
                            --u || e(r)
                        });
                    return i.e && o(i.v), r.promise
                },
                race: function(t) {
                    var n = this,
                        r = E(n),
                        e = r.reject,
                        o = _(function() {
                            y(t, !1, function(t) {
                                n.resolve(t).then(r.resolve, e)
                            })
                        });
                    return o.e && e(o.v), r.promise
                }
            })
    }, function(t, n) {
        t.exports = function(t, n, r, e) {
            if (!(t instanceof n) || void 0 !== e && e in t)
                throw TypeError(r + ": incorrect invocation!");
            return t
        }
    }, function(t, n, r) {
        var e = r(14),
            o = r(66),
            i = r(67),
            u = r(3),
            c = r(39),
            f = r(68),
            s = {},
            a = {},
            n = t.exports = function(t, n, r, l, p) {
                var v,
                    h,
                    y,
                    d,
                    m = p ? function() {
                        return t
                    } : f(t),
                    g = e(r, l, n ? 2 : 1),
                    x = 0;
                if ("function" != typeof m)
                    throw TypeError(t + " is not iterable!");
                if (i(m)) {
                    for (v = c(t.length); v > x; x++)
                        if ((d = n ? g(u(h = t[x])[0], h[1]) : g(t[x])) === s || d === a)
                            return d
                } else
                    for (y = m.call(t); !(h = y.next()).done;)
                        if ((d = o(y, g, h.value, n)) === s || d === a)
                            return d
            };
        n.BREAK = s,
            n.RETURN = a
    }, function(t, n, r) {
        var e = r(3);
        t.exports = function(t, n, r, o) {
            try {
                return o ? n(e(r)[0], r[1]) : n(r)
            } catch (n) {
                var i = t.return;
                throw void 0 !== i && e(i.call(t)), n
            }
        }
    }, function(t, n, r) {
        var e = r(11),
            o = r(1)("iterator"),
            i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (e.Array === t || i[o] === t)
        }
    }, function(t, n, r) {
        var e = r(42),
            o = r(1)("iterator"),
            i = r(11);
        t.exports = r(2).getIteratorMethod = function(t) {
            if (void 0 != t)
                return t[o] || t["@@iterator"] || i[e(t)]
        }
    }, function(t, n) {
        t.exports = function(t, n, r) {
            var e = void 0 === r;
            switch (n.length) {
                case 0:
                    return e ? t() : t.call(r);
                case 1:
                    return e ? t(n[0]) : t.call(r, n[0]);
                case 2:
                    return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);
                case 3:
                    return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);
                case 4:
                    return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3])
            }
            return t.apply(r, n)
        }
    }, function(t, n, r) {
        var e = r(0),
            o = r(44).set,
            i = e.MutationObserver || e.WebKitMutationObserver,
            u = e.process,
            c = e.Promise,
            f = "process" == r(12)(u);
        t.exports = function() {
            var t,
                n,
                r,
                s = function() {
                    var e,
                        o;
                    for (f && (e = u.domain) && e.exit(); t;) {
                        o = t.fn,
                            t = t.next;
                        try {
                            o()
                        } catch (e) {
                            throw t ? r() : n = void 0, e
                        }
                    }
                    n = void 0,
                    e && e.enter()
                };
            if (f)
                r = function() {
                    u.nextTick(s)
                };
            else if (!i || e.navigator && e.navigator.standalone)
                if (c && c.resolve) {
                    var a = c.resolve();
                    r = function() {
                        a.then(s)
                    }
                } else
                    r = function() {
                        o.call(e, s)
                    };
            else {
                var l = !0,
                    p = document.createTextNode("");
                new i(s).observe(p, {
                    characterData: !0
                }),
                    r = function() {
                        p.data = l = !l
                    }
            }
            return function(e) {
                var o = {
                    fn: e,
                    next: void 0
                };
                n && (n.next = o),
                t || (t = o, r()),
                    n = o
            }
        }
    }, function(t, n, r) {
        var e = r(4);
        t.exports = function(t, n, r) {
            for (var o in n)
                r && t[o] ? t[o] = n[o] : e(t, o, n[o]);
            return t
        }
    }, function(t, n, r) {
        "use strict";
        var e = r(0),
            o = r(2),
            i = r(5),
            u = r(7),
            c = r(1)("species");
        t.exports = function(t) {
            var n = "function" == typeof o[t] ? o[t] : e[t];
            u && n && !n[c] && i.f(n, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, n, r) {
        var e = r(1)("iterator"),
            o = !1;
        try {
            var i = [7][e]();
            i.return = function() {
                o = !0
            },
                Array.from(i, function() {
                    throw 2
                })
        } catch (t) {}
        t.exports = function(t, n) {
            if (!n && !o)
                return !1;
            var r = !1;
            try {
                var i = [7],
                    u = i[e]();
                u.next = function() {
                    return {
                        done: r = !0
                    }
                },
                    i[e] = function() {
                        return u
                    },
                    t(i)
            } catch (t) {}
            return r
        }
    }, function(t, n, r) {
        "use strict";
        var e = r(10),
            o = r(2),
            i = r(0),
            u = r(43),
            c = r(46);
        e(e.P + e.R, "Promise", {
            finally: function(t) {
                var n = u(this, o.Promise || i.Promise),
                    r = "function" == typeof t;
                return this.then(r ? function(r) {
                    return c(n, t()).then(function() {
                        return r
                    })
                } : t, r ? function(r) {
                    return c(n, t()).then(function() {
                        throw r
                    })
                } : t)
            }
        })
    }, function(t, n, r) {
        "use strict";
        var e = r(10),
            o = r(28),
            i = r(45);
        e(e.S, "Promise", {
            try: function(t) {
                var n = o.f(this),
                    r = i(t);
                return (r.e ? n.reject : n.resolve)(r.v), n.promise
            }
        })
    }, function(t, n, r) {
        "use strict";
        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n.__esModule = !0;
        var o = r(77),
            i = e(o),
            u = r(79),
            c = e(u),
            f = "function" == typeof c.default && "symbol" == typeof i.default ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof c.default && t.constructor === c.default && t !== c.default.prototype ? "symbol" : typeof t
            };
        n.default = "function" == typeof c.default && "symbol" === f(i.default) ? function(t) {
            return void 0 === t ? "undefined" : f(t)
        } : function(t) {
            return t && "function" == typeof c.default && t.constructor === c.default && t !== c.default.prototype ? "symbol" : void 0 === t ? "undefined" : f(t)
        }
    }, function(t, n, r) {
        t.exports = {
            default: r(78),
            __esModule: !0
        }
    }, function(t, n, r) {
        r(33),
            r(41),
            t.exports = r(29).f("iterator")
    }, function(t, n, r) {
        t.exports = {
            default: r(80),
            __esModule: !0
        }
    }, function(t, n, r) {
        r(81),
            r(32),
            r(87),
            r(88),
            t.exports = r(2).Symbol
    }, function(t, n, r) {
        "use strict";
        var e = r(0),
            o = r(8),
            i = r(7),
            u = r(10),
            c = r(36),
            f = r(82).KEY,
            s = r(16),
            a = r(26),
            l = r(19),
            p = r(18),
            v = r(1),
            h = r(29),
            y = r(30),
            d = r(83),
            m = r(84),
            g = r(3),
            x = r(6),
            _ = r(9),
            b = r(23),
            w = r(17),
            S = r(37),
            O = r(85),
            j = r(86),
            P = r(5),
            E = r(24),
            T = j.f,
            M = P.f,
            L = O.f,
            A = e.Symbol,
            k = e.JSON,
            F = k && k.stringify,
            N = v("_hidden"),
            C = v("toPrimitive"),
            I = {}.propertyIsEnumerable,
            R = a("symbol-registry"),
            D = a("symbols"),
            G = a("op-symbols"),
            W = Object.prototype,
            V = "function" == typeof A,
            B = e.QObject,
            H = !B || !B.prototype || !B.prototype.findChild,
            J = i && s(function() {
                return 7 != S(M({}, "a", {
                    get: function() {
                        return M(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, n, r) {
                var e = T(W, n);
                e && delete W[n],
                    M(t, n, r),
                e && t !== W && M(W, n, e)
            } : M,
            K = function(t) {
                var n = D[t] = S(A.prototype);
                return n._k = t, n
            },
            U = V && "symbol" == typeof A.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof A
            },
            z = function(t, n, r) {
                return t === W && z(G, n, r), g(t), n = b(n, !0), g(r), o(D, n) ? (r.enumerable ? (o(t, N) && t[N][n] && (t[N][n] = !1), r = S(r, {
                    enumerable: w(0, !1)
                })) : (o(t, N) || M(t, N, w(1, {})), t[N][n] = !0), J(t, n, r)) : M(t, n, r)
            },
            Y = function(t, n) {
                g(t);
                for (var r, e = d(n = _(n)), o = 0, i = e.length; i > o;)
                    z(t, r = e[o++], n[r]);
                return t
            },
            q = function(t, n) {
                return void 0 === n ? S(t) : Y(S(t), n)
            },
            Q = function(t) {
                var n = I.call(this, t = b(t, !0));
                return !(this === W && o(D, t) && !o(G, t)) && (!(n || !o(this, t) || !o(D, t) || o(this, N) && this[N][t]) || n)
            },
            X = function(t, n) {
                if (t = _(t), n = b(n, !0), t !== W || !o(D, n) || o(G, n)) {
                    var r = T(t, n);
                    return !r || !o(D, n) || o(t, N) && t[N][n] || (r.enumerable = !0), r
                }
            },
            Z = function(t) {
                for (var n, r = L(_(t)), e = [], i = 0; r.length > i;)
                    o(D, n = r[i++]) || n == N || n == f || e.push(n);
                return e
            },
            $ = function(t) {
                for (var n, r = t === W, e = L(r ? G : _(t)), i = [], u = 0; e.length > u;)
                    !o(D, n = e[u++]) || r && !o(W, n) || i.push(D[n]);
                return i
            };
        V || (A = function() {
            if (this instanceof A)
                throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0),
                n = function(r) {
                    this === W && n.call(G, r),
                    o(this, N) && o(this[N], t) && (this[N][t] = !1),
                        J(this, t, w(1, r))
                };
            return i && H && J(W, t, {
                configurable: !0,
                set: n
            }), K(t)
        }, c(A.prototype, "toString", function() {
            return this._k
        }), j.f = X, P.f = z, r(48).f = O.f = Z, r(31).f = Q, r(47).f = $, i && !r(13) && c(W, "propertyIsEnumerable", Q, !0), h.f = function(t) {
            return K(v(t))
        }),
            u(u.G + u.W + u.F * !V, {
                Symbol: A
            });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; tt.length > nt;)
            v(tt[nt++]);
        for (var rt = E(v.store), et = 0; rt.length > et;)
            y(rt[et++]);
        u(u.S + u.F * !V, "Symbol", {
            for: function(t) {
                return o(R, t += "") ? R[t] : R[t] = A(t)
            },
            keyFor: function(t) {
                if (!U(t))
                    throw TypeError(t + " is not a symbol!");
                for (var n in R)
                    if (R[n] === t)
                        return n
            },
            useSetter: function() {
                H = !0
            },
            useSimple: function() {
                H = !1
            }
        }),
            u(u.S + u.F * !V, "Object", {
                create: q,
                defineProperty: z,
                defineProperties: Y,
                getOwnPropertyDescriptor: X,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: $
            }),
        k && u(u.S + u.F * (!V || s(function() {
            var t = A();
            return "[null]" != F([t]) || "{}" != F({
                a: t
            }) || "{}" != F(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var n, r, e = [t], o = 1; arguments.length > o;)
                    e.push(arguments[o++]);
                if (r = n = e[1], (x(n) || void 0 !== t) && !U(t))
                    return m(n) || (n = function(t, n) {
                        if ("function" == typeof r && (n = r.call(this, t, n)), !U(n))
                            return n
                    }), e[1] = n, F.apply(k, e)
            }
        }),
        A.prototype[C] || r(4)(A.prototype, C, A.prototype.valueOf),
            l(A, "Symbol"),
            l(Math, "Math", !0),
            l(e.JSON, "JSON", !0)
    }, function(t, n, r) {
        var e = r(18)("meta"),
            o = r(6),
            i = r(8),
            u = r(5).f,
            c = 0,
            f = Object.isExtensible || function() {
                return !0
            },
            s = !r(16)(function() {
                return f(Object.preventExtensions({}))
            }),
            a = function(t) {
                u(t, e, {
                    value: {
                        i: "O" + ++c,
                        w: {}
                    }
                })
            },
            l = function(t, n) {
                if (!o(t))
                    return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!i(t, e)) {
                    if (!f(t))
                        return "F";
                    if (!n)
                        return "E";
                    a(t)
                }
                return t[e].i
            },
            p = function(t, n) {
                if (!i(t, e)) {
                    if (!f(t))
                        return !0;
                    if (!n)
                        return !1;
                    a(t)
                }
                return t[e].w
            },
            v = function(t) {
                return s && h.NEED && f(t) && !i(t, e) && a(t), t
            },
            h = t.exports = {
                KEY: e,
                NEED: !1,
                fastKey: l,
                getWeak: p,
                onFreeze: v
            }
    }, function(t, n, r) {
        var e = r(24),
            o = r(47),
            i = r(31);
        t.exports = function(t) {
            var n = e(t),
                r = o.f;
            if (r)
                for (var u, c = r(t), f = i.f, s = 0; c.length > s;)
                    f.call(t, u = c[s++]) && n.push(u);
            return n
        }
    }, function(t, n, r) {
        var e = r(12);
        t.exports = Array.isArray || function(t) {
            return "Array" == e(t)
        }
    }, function(t, n, r) {
        var e = r(9),
            o = r(48).f,
            i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            c = function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            };
        t.exports.f = function(t) {
            return u && "[object Window]" == i.call(t) ? c(t) : o(e(t))
        }
    }, function(t, n, r) {
        var e = r(31),
            o = r(17),
            i = r(9),
            u = r(23),
            c = r(8),
            f = r(35),
            s = Object.getOwnPropertyDescriptor;
        n.f = r(7) ? s : function(t, n) {
            if (t = i(t), n = u(n, !0), f)
                try {
                    return s(t, n)
                } catch (t) {}
            if (c(t, n))
                return o(!e.f.call(t, n), t[n])
        }
    }, function(t, n, r) {
        r(30)("asyncIterator")
    }, function(t, n, r) {
        r(30)("observable")
    }])
});
