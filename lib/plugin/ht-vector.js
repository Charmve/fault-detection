! function () {
    "use strict";

    function n(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }

    function r(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }

    function o(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }

    function a(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }

    function i(t, e) {
        if (!a(t)) return t;
        var n, r;
        if (e && "function" == typeof (n = t.toString) && !a(r = n.call(t))) return r;
        if ("function" == typeof (n = t.valueOf) && !a(r = n.call(t))) return r;
        if (!e && "function" == typeof (n = t.toString) && !a(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }

    function d(t, e) {
        return w.call(Object(o(t)), e)
    }

    function g(r, o, t) {
        if (! function (t) {
                if ("function" != typeof t) throw TypeError(String(t) + " is not a function")
            }(r), void 0 === o) return r;
        switch (t) {
            case 0:
                return function () {
                    return r.call(o)
                };
            case 1:
                return function (t) {
                    return r.call(o, t)
                };
            case 2:
                return function (t, e) {
                    return r.call(o, t, e)
                };
            case 3:
                return function (t, e, n) {
                    return r.call(o, t, e, n)
                }
        }
        return function () {
            return r.apply(o, arguments)
        }
    }

    function c(t) {
        if (!a(t)) throw TypeError(String(t) + " is not an object");
        return t
    }

    function b(r) {
        function t(t, e, n) {
            if (this instanceof r) {
                switch (arguments.length) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(t);
                    case 2:
                        return new r(t, e)
                }
                return new r(t, e, n)
            }
            return r.apply(this, arguments)
        }
        return t.prototype = r.prototype, t
    }

    function u(t) {
        return "function" == typeof t ? t : void 0
    }
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        e = function (t) {
            return t && t.Math == Math && t
        },
        y = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof t && t) || function () {
            return this
        }() || Function("return this")(),
        l = !n(function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }),
        e = {}.propertyIsEnumerable,
        s = Object.getOwnPropertyDescriptor,
        f = {
            f: s && !e.call({
                1: 2
            }, 1) ? function (t) {
                t = s(this, t);
                return !!t && t.enumerable
            } : e
        },
        p = {}.toString,
        h = "".split,
        m = n(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (t) {
            return "String" == p.call(t).slice(8, -1) ? h.call(t, "") : Object(t)
        } : Object,
        w = {}.hasOwnProperty,
        v = y.document,
        P = a(v) && a(v.createElement),
        T = !l && !n(function () {
            return 7 != Object.defineProperty(P ? v.createElement("div") : {}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        x = Object.getOwnPropertyDescriptor,
        t = {
            f: l ? x : function (t, e) {
                if (t = m(o(t)), e = i(e, !0), T) try {
                    return x(t, e)
                } catch (t) {}
                if (d(t, e)) return r(!f.f.call(t, e), t[e])
            }
        },
        A = /#|\.prototype\./,
        e = function (t, e) {
            t = O[E(t)];
            return t == k || t != S && ("function" == typeof e ? n(e) : !!e)
        },
        E = e.normalize = function (t) {
            return String(t).replace(A, ".").toLowerCase()
        },
        O = e.data = {},
        S = e.NATIVE = "N",
        k = e.POLYFILL = "P",
        D = e,
        j = {},
        I = Object.defineProperty,
        C = {
            f: l ? I : function (t, e, n) {
                if (c(t), e = i(e, !0), c(n), T) try {
                    return I(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        R = l ? function (t, e, n) {
            return C.f(t, e, r(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        },
        V = t.f,
        l = function (t, e) {
            return arguments.length < 2 ? u(j[t]) || u(y[t]) : j[t] && j[t][e] || y[t] && y[t][e]
        }("navigator", "userAgent") || "",
        F = [].slice,
        t = function (o) {
            return function (t, e) {
                var n = 2 < arguments.length,
                    r = n ? F.call(arguments, 2) : void 0;
                return o(n ? function () {
                    ("function" == typeof t ? t : Function(t)).apply(this, r)
                } : t, e)
            }
        };
    ! function (t, e) {
        var n, r, o, a, i, c = t.target,
            u = t.global,
            l = t.stat,
            s = t.proto,
            f = u ? y : l ? y[c] : (y[c] || {}).prototype,
            p = u ? j : j[c] || (j[c] = {}),
            h = p.prototype;
        for (n in e) a = !D(u ? n : c + (l ? "." : "#") + n, t.forced) && f && d(f, n), r = p[n], a && (o = t.noTargetGet ? (i = V(f, n)) && i.value : f[n]), i = a && o ? o : e[n], a && typeof r == typeof i || (a = t.bind && a ? g(i, y) : t.wrap && a ? b(i) : s && "function" == typeof i ? g(Function.call, i) : i, (t.sham || i && i.sham || r && r.sham) && R(a, "sham", !0), p[n] = a, s && (d(j, a = c + "Prototype") || R(j, a, {}), j[a][n] = i, t.real && h && !h[n] && R(h, n, i)))
    }({
        global: !0,
        bind: !0,
        forced: /MSIE .\./.test(l)
    }, {
        setTimeout: t(y.setTimeout),
        setInterval: t(y.setInterval)
    });
    var q, t = j.setTimeout;

    function L() {
        var u, e, t, n;
        "5107FE0F-4764-4DAE-AE16-72D6BA1359A5" !== function (t) {
            t = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), t = window.location.search.substr(1).match(t);
            return null != t ? decodeURIComponent(t[2]) : null
        }("cc") && ((u = new ht.graph.GraphView).getView().style.zIndex = 1e5, u.addToDOM(), u.getView().style.pointerEvents = "none", u.getSelectWidth = function () {
            return 0
        }, u.handleScroll = function () {}, u.handlePinch = function () {}, u.setPannable(!1), u.setRectSelectable(!1), u.setScrollBarVisible(!1), u.setMovableFunc(function () {
            return !1
        }), ht.Default.isTouchable || ((e = new ht.Node).setImage("ht.qrcode"), e.a("ht.content", location.href), e.setSize(148, 148), e.setAnchor(0, -1), e.p(40, 1075), e.s({
            "layout.h": "left",
            "layout.v": "bottom"
        }), u.dm().add(e), (t = new ht.Node).setImage("ht.qrscan"), t.setSize(32, 32), t.setAnchor(0, 1), t.p(5, 1075), t.s({
            "layout.h": "left",
            "layout.v": "bottom"
        }), u.dm().add(t), t.a("linePercent", .4), (n = new ht.Node).setSize(1920, 1080), n.setAnchor(0, 0), n.p(0, 0), n.s({
            fullscreen: "fill",
            "fullscreen.gap": 0,
            shape: "rect",
            "shape.background": null
        }), e.setHost(n), t.setHost(n), u.dm().add(n), (n = (t = document.createElement("div")).style).width = "32px", n.height = "32px", n.margin = 0, n.padding = 0, n.outline = "none", n.boxSizing = "border-box", n.position = "absolute", n.left = "5px", n.bottom = "5px", t.addEventListener("mouseenter", function (t) {
            var n;
            n = e, q && q.stop(), q = ht.Default.startAnim({
                frames: 12,
                interval: 10,
                easing: function (t) {
                    return (2 - t) * t
                },
                finishFunc: function () {
                    n.setAnchorY(1), q = null
                },
                action: function (t, e) {
                    n.setAnchorY(2 * t - 1)
                }
            })
        }), t.addEventListener("mouseleave", function (t) {
            var n;
            n = e, q && q.stop(), q = ht.Default.startAnim({
                frames: 12,
                interval: 10,
                easing: function (t) {
                    return t * t
                },
                finishFunc: function () {
                    n.setAnchorY(-1), q = null
                },
                action: function (t, e) {
                    n.setAnchorY(2 * (1 - t) - 1)
                }
            })
        }), ht.Default.appendToScreen(t)), u.addTopPainter(function (t) {
            //for (var e = u.getViewRect(), n = e.x, r = e.y, o = e.width, a = e.height, i = r; 300 * i < a; i++)
            //    for (var c = 0; 300 * c < o; c++) ht.Default.drawImage(t, ht.Default.getImage("ht.watermark"), n + 300 * c, r + 300 * i, 300, 300);
            //ht.Default.drawText(t, "© Hightopo All Rights Reserverd", "14px Arial", "rgba(138,138,138,0.30)", n, r + a - 30, o, 30, "center", "middle")
        }))
    }
    ht.Default.setCompType("ht.comp.qrcode", {
        width: 100,
        height: 100,
        snapshotURL: "",
        func: function (t, e, n, r, o) {
            ht.vector.comp.qrcode.apply(this, arguments)
        },
        properties: {
            colorDark: {
                valueType: "Color",
                defaultValue: "rgb(61,61,61)"
            },
            colorLight: {
                valueType: "Color",
                defaultValue: "rgb(247,247,247)"
            },
            content: {
                valueType: "String",
                defaultValue: "http://www.hightopo.com/"
            },
            padding: {
                valueType: "PositiveNumber",
                defaultValue: 3
            }
        }
    }), ht.Default.setImage("ht.qrcode", {
        width: 148,
        height: 148,
        comps: [{
            type: "roundRect",
            background: "rgba(128,128,128,0.4)",
            borderColor: "rgb(128,128,128)",
            pixelPerfect: !0,
            rect: [1, 1, 146, 146]
        }, {
            type: "rect",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            pixelPerfect: !0,
            rect: [10.02457, 9.1688, 128, 128]
        }, {
            type: "ht.comp.qrcode",
            displayName: "qrcode",
            rect: [10.02457, 9.1688, 128, 128],
            content: {
                func: "attr@ht.content",
                value: "http://www.hightopo.com/"
            },
            padding: 0
        }]
    }), ht.Default.setImage("ht.qrscan", {
        dataBindings: [{
            attr: "linePercent",
            valueType: "Percentage",
            defaultValue: 0
        }],
        width: 32,
        height: 32,
        comps: [{
            type: "roundRect",
            background: "rgba(128,128,128,0.4)",
            borderColor: "rgb(128,128,128)",
            cornerRadius: 5,
            pixelPerfect: !0,
            rect: [0, 0, 32, 32]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [25.60198, 28.78975, 20.20211, 28.78975, 19.70443, 28.78975, 19.30204, 28.34272, 19.30204, 27.7897, 19.30204, 27.23672, 19.7044, 26.78963, 20.20211, 26.78963, 25.60201, 26.78963, 26.09884, 26.78963, 26.50205, 26.34164, 26.50205, 25.78972, 26.50205, 20.78983, 26.50205, 20.23684, 26.90429, 19.78975, 27.40212, 19.78975, 27.89981, 19.78975, 28.30204, 20.23684, 28.30204, 20.78983, 28.30204, 25.78978, 28.30199, 27.44363, 27.09061, 28.78975, 25.60198, 28.78975, 25.60198, 28.78975],
            segments: [1, 2, 4, 4, 2, 4, 2, 4, 4, 2, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [11.21018, 28.78975, 6.21015, 28.78975, 4.5563, 28.78975, 3.2103, 27.44369, 3.2103, 25.78978, 3.2103, 20.78983, 3.2103, 20.23684, 3.65826, 19.78975, 4.21019, 19.78975, 4.76226, 19.78975, 5.21025, 20.23684, 5.21025, 20.78983, 5.21025, 25.78978, 5.21025, 26.34164, 5.65917, 26.78969, 6.21015, 26.78969, 11.21018, 26.78969, 11.76225, 26.78969, 12.2103, 27.23678, 12.2103, 27.78976, 12.21027, 28.34272, 11.76225, 28.78975, 11.21018, 28.78975, 11.21018, 28.78975],
            segments: [1, 2, 4, 2, 4, 4, 2, 4, 2, 4, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [4.21019, 12.21025, 3.65826, 12.21025, 3.2103, 11.76231, 3.2103, 11.21038, 3.2103, 6.21031, 3.2103, 4.55626, 4.5563, 3.21025, 6.21015, 3.21025, 11.21018, 3.21025, 11.76225, 3.21025, 12.2103, 3.65825, 12.2103, 4.21032, 12.2103, 4.76219, 11.7623, 5.21022, 11.21018, 5.21022, 6.21015, 5.21022, 5.65917, 5.21022, 5.21025, 5.65925, 5.21025, 6.21029, 5.21025, 11.21035, 5.21028, 11.76228, 4.76226, 12.21025, 4.21019, 12.21025, 4.21019, 12.21025],
            segments: [1, 4, 2, 4, 2, 4, 4, 2, 4, 2, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [27.40209, 12.21026, 26.9043, 12.21026, 26.50202, 11.76232, 26.50202, 11.21039, 26.50202, 6.21031, 26.50202, 5.65927, 26.09885, 5.21024, 25.60197, 5.21024, 20.20209, 5.21024, 19.7044, 5.21024, 19.30202, 4.76221, 19.30202, 4.21033, 19.30202, 3.65826, 19.70438, 3.21026, 20.20209, 3.21026, 25.60202, 3.21026, 27.09065, 3.21026, 28.30202, 4.55628, 28.30202, 6.21034, 28.30202, 11.21042, 28.30202, 11.76229, 27.89976, 12.21026, 27.40209, 12.21026, 27.40209, 12.21026],
            segments: [1, 4, 2, 4, 2, 4, 4, 2, 4, 2, 4, 2, 5]
        }, {
            type: "shape",
            background: "rgb(51,153,255)",
            pixelPerfect: !0,
            shadow: !0,
            shadowColor: "#60ACFC",
            shadowBlur: 3,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            rect: {
                func: function (t, e) {
                    return [2, 2 + 26 * t.a("linePercent"), 28, 2]
                },
                value: [2, 14.99998, 28, 2]
            },
            points: [28.99992, 16.99998, 3.00009, 16.99998, 2.44799, 16.99998, 2, 16.55201, 2, 16.00005, 2, 15.44798, 2.44799, 14.99998, 3.00009, 14.99998, 28.99992, 14.99998, 29.55291, 14.99998, 30, 15.44795, 30, 16.00005, 29.99997, 16.55198, 29.55288, 16.99998, 28.99992, 16.99998, 28.99992, 16.99998],
            segments: [1, 2, 4, 4, 2, 4, 4, 2, 5]
        }]
    }), ht.Default.setImage("ht.watermark", {
        modified: "Thu Apr 29 2021 20:55:32 GMT+0800 (中国标准时间)",
        background: "rgb(61,61,61)",
        width: 300,
        height: 300,
        attachStyle: "close",
        comps: [{
            type: "text",
            text: "图扑软件",
            color: "rgba(138,138,138,0.30)",
            shadowOffsetX: 0,
            opacity: .5,
            scaleX: 2,
            scaleY: 2,
            rotation: -.74609,
            rect: [134.14817, 104.87572, 50, 50]
        }, {
            type: "text",
            text: "Hightopo",
            color: "rgba(138,138,138,0.30)",
            shadowOffsetX: 0,
            opacity: .5,
            scaleX: 2,
            scaleY: 2,
            rotation: -.74609,
            rect: [156.27441, 128.81382, 50, 50]
        }, {
            type: "shape",
            background: "rgba(138,138,138,0.30)",
            pixelPerfect: !0,
            opacity: .15,
            rotation: -.7854,
            points: [72.75395, 200.53178, 72.75395, 184.81677, 85.5278, 172.07175, 101.21397, 172.07175, 101.21397, 172.07175, 116.92899, 172.07175, 129.674, 184.8456, 129.674, 200.53178, 129.674, 200.53178, 129.674, 216.24678, 116.90015, 228.99181, 101.21397, 228.99181, 72.75395, 228.99181, 72.75395, 200.53178],
            segments: [1, 4, 2, 4, 2, 4, 2, 2]
        }, {
            type: "shape",
            background: "rgba(138,138,138,0.30)",
            pixelPerfect: !0,
            opacity: .5,
            rotation: -.7854,
            points: [63.56543, 214.22037, 57.5101, 214.22037, 52.60818, 209.31844, 52.60818, 203.26312, 52.60818, 203.26312, 52.60818, 197.20778, 57.5101, 192.30586, 63.56543, 192.30586, 63.56543, 192.30586, 69.62075, 192.30586, 74.52269, 197.20778, 74.52269, 203.26312, 74.52269, 214.22037, 63.56543, 214.22037],
            segments: [1, 4, 2, 4, 2, 4, 2, 2]
        }, {
            type: "shape",
            background: "rgba(140,140,140,0.19)",
            pixelPerfect: !0,
            opacity: .5,
            rotation: -.7854,
            points: [84.46241, 200.12024, 81.03106, 200.12024, 78.29175, 197.66927, 78.29175, 194.64161, 78.29175, 189.16298, 107.12663, 189.16298, 110.55798, 189.16298, 113.2973, 191.61394, 113.2973, 194.64161, 113.2973, 194.64161, 113.2973, 197.66927, 110.52915, 200.12024, 107.12663, 200.12024],
            segments: [1, 4, 2, 2, 4, 2, 4]
        }, {
            type: "shape",
            background: "rgba(140,140,140,0.19)",
            gradient: "linear.north",
            gradientColor: "rgba(140,140,140,0.00)",
            fillRule: "evenodd",
            opacity: .5,
            shadowColor: "rgba(0,0,0,0.39)",
            rotation: -.7854,
            points: [102.22142, 219.74213, 108.46082, 219.74213, 111.90675, 219.74213, 114.70023, 217.51334, 114.70023, 214.7694, 114.70023, 194.87368, 102.22142, 194.87368],
            segments: [1, 2, 4, 2, 2]
        }]
    }), q = null, t(function () {
        L()
    }, 800)
}();

this.ht = this.ht || {}, this.ht.vector = function () {
    "use strict";

    function Te(e) {
        return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function d(e, t, i) {
        return t && a(e.prototype, t), i && a(e, i), e
    }

    function g(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && i(e, t)
    }

    function o(e) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function i(e, t) {
        return (i = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function u(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(i) {
        var a = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var e, t = o(i);
            return e = a ? (e = o(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" != typeof e && "function" != typeof e ? u(t) : e
        }
    }

    function n(e, t, i) {
        return (n = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, i) {
            e = function (e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e)););
                return e
            }(e, t);
            if (e) {
                t = Object.getOwnPropertyDescriptor(e, t);
                return t.get ? t.get.call(i) : t.value
            }
        })(e, t, i || e)
    }

    function Ie(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            var i = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
            if (null != i) {
                var a, o, n = [],
                    r = !0,
                    l = !1;
                try {
                    for (i = i.call(e); !(r = (a = i.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    l = !0, o = e
                } finally {
                    try {
                        r || null == i.return || i.return()
                    } finally {
                        if (l) throw o
                    }
                }
                return n
            }
        }(e, t) || r(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Le(e) {
        return function (e) {
            if (Array.isArray(e)) return l(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || r(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        if (e) {
            if ("string" == typeof e) return l(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" === (i = "Object" === i && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? l(e, t) : void 0
        }
    }

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
        return a
    }

    function s(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }

    function h(e) {
        return t.call(e).slice(8, -1)
    }

    function v(e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }

    function p(e) {
        return m(v(e))
    }
    var t = {}.toString,
        y = "".split,
        m = s(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return "String" == h(e) ? y.call(e, "") : Object(e)
        } : Object,
        x = {},
        e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function b(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }

    function w(e) {
        return L ? S.createElement(e) : {}
    }

    function C(e) {
        if (!b(e)) throw TypeError(String(e) + " is not an object");
        return e
    }

    function k(e, t) {
        if (!b(e)) return e;
        var i, a;
        if (t && "function" == typeof (i = e.toString) && !b(a = i.call(e))) return a;
        if ("function" == typeof (i = e.valueOf) && !b(a = i.call(e))) return a;
        if (!t && "function" == typeof (i = e.toString) && !b(a = i.call(e))) return a;
        throw TypeError("Can't convert object to primitive value")
    }

    function V(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
    var T = function (e) {
            return e && e.Math == Math && e
        },
        I = T("object" == typeof globalThis && globalThis) || T("object" == typeof window && window) || T("object" == typeof self && self) || T("object" == typeof e && e) || function () {
            return this
        }() || Function("return this")(),
        D = !s(function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }),
        S = I.document,
        L = b(S) && b(S.createElement),
        A = !D && !s(function () {
            return 7 != Object.defineProperty(w("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        R = Object.defineProperty,
        _ = {
            f: D ? R : function (e, t, i) {
                if (C(e), t = k(t, !0), C(i), A) try {
                    return R(e, t, i)
                } catch (e) {}
                if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
                return "value" in i && (e[t] = i.value), e
            }
        },
        P = D ? function (e, t, i) {
            return _.f(e, t, V(1, i))
        } : function (e, t, i) {
            return e[t] = i, e
        },
        M = "__core-js_shared__",
        B = I[M] || function (t, i) {
            try {
                P(I, t, i)
            } catch (e) {
                I[t] = i
            }
            return i
        }(M, {}),
        O = Function.toString;
    "function" != typeof B.inspectSource && (B.inspectSource = function (e) {
        return O.call(e)
    });

    function E(e) {
        return Object(v(e))
    }

    function W(e, t) {
        return $.call(E(e), t)
    }

    function H(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++ee + te).toString(36)
    }
    var j, N, F, z, G, X, Y, U, Z, K = B.inspectSource,
        J = I.WeakMap,
        q = "function" == typeof J && /native code/.test(K(J)),
        $ = {}.hasOwnProperty,
        Q = (function (e) {
            (e.exports = function (e, t) {
                return B[e] || (B[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.12.1",
                mode: "pure",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        }(j = {
            exports: {}
        }), j.exports),
        ee = 0,
        te = Math.random(),
        ie = Q("keys"),
        ae = function (e) {
            return ie[e] || (ie[e] = H(e))
        },
        oe = {},
        ne = "Object already initialized",
        re = I.WeakMap;
    U = q || B.state ? (N = B.state || (B.state = new re), F = N.get, z = N.has, G = N.set, X = function (e, t) {
        if (z.call(N, e)) throw new TypeError(ne);
        return t.facade = e, G.call(N, e, t), t
    }, Y = function (e) {
        return F.call(N, e) || {}
    }, function (e) {
        return z.call(N, e)
    }) : (Z = ae("state"), oe[Z] = !0, X = function (e, t) {
        if (W(e, Z)) throw new TypeError(ne);
        return t.facade = e, P(e, Z, t), t
    }, Y = function (e) {
        return W(e, Z) ? e[Z] : {}
    }, function (e) {
        return W(e, Z)
    });

    function le(e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }

    function se(a, o, e) {
        if (le(a), void 0 === o) return a;
        switch (e) {
            case 0:
                return function () {
                    return a.call(o)
                };
            case 1:
                return function (e) {
                    return a.call(o, e)
                };
            case 2:
                return function (e, t) {
                    return a.call(o, e, t)
                };
            case 3:
                return function (e, t, i) {
                    return a.call(o, e, t, i)
                }
        }
        return function () {
            return a.apply(o, arguments)
        }
    }

    function he(a) {
        function e(e, t, i) {
            if (this instanceof a) {
                switch (arguments.length) {
                    case 0:
                        return new a;
                    case 1:
                        return new a(e);
                    case 2:
                        return new a(e, t)
                }
                return new a(e, t, i)
            }
            return a.apply(this, arguments)
        }
        return e.prototype = a.prototype, e
    }

    function ue(e, t) {
        var i, a, o, n, r, l = e.target,
            s = e.global,
            h = e.stat,
            u = e.proto,
            c = s ? I : h ? I[l] : (I[l] || {}).prototype,
            d = s ? Se : Se[l] || (Se[l] = {}),
            g = d.prototype;
        for (i in t) n = !De(s ? i : l + (h ? "." : "#") + i, e.forced) && c && W(c, i), a = d[i], n && (o = e.noTargetGet ? (r = Ae(c, i)) && r.value : c[i]), r = n && o ? o : t[i], n && typeof a == typeof r || (n = e.bind && n ? se(r, I) : e.wrap && n ? he(r) : u && "function" == typeof r ? se(Function.call, r) : r, (e.sham || r && r.sham || a && a.sham) && P(n, "sham", !0), d[i] = n, u && (W(Se, n = l + "Prototype") || P(Se, n, {}), Se[n][i] = r, e.real && g && !g[i] && P(g, i, r)))
    }

    function ce(e) {
        return "function" == typeof e ? e : void 0
    }

    function de(e, t) {
        return arguments.length < 2 ? ce(Se[e]) || ce(I[e]) : Se[e] && Se[e][t] || I[e] && I[e][t]
    }
    var ge = {
            set: X,
            get: Y,
            has: U,
            enforce: function (e) {
                return U(e) ? Y(e) : X(e, {})
            },
            getterFor: function (i) {
                return function (e) {
                    var t;
                    if (!b(e) || (t = Y(e)).type !== i) throw TypeError("Incompatible receiver, " + i + " required");
                    return t
                }
            }
        },
        fe = {}.propertyIsEnumerable,
        ve = Object.getOwnPropertyDescriptor,
        pe = {
            f: ve && !fe.call({
                1: 2
            }, 1) ? function (e) {
                e = ve(this, e);
                return !!e && e.enumerable
            } : fe
        },
        ye = Object.getOwnPropertyDescriptor,
        xe = {
            f: D ? ye : function (e, t) {
                if (e = p(e), t = k(t, !0), A) try {
                    return ye(e, t)
                } catch (e) {}
                if (W(e, t)) return V(!pe.f.call(e, t), e[t])
            }
        },
        be = /#|\.prototype\./,
        me = function (e, t) {
            e = Ce[we(e)];
            return e == Ve || e != ke && ("function" == typeof t ? s(t) : !!t)
        },
        we = me.normalize = function (e) {
            return String(e).replace(be, ".").toLowerCase()
        },
        Ce = me.data = {},
        ke = me.NATIVE = "N",
        Ve = me.POLYFILL = "P",
        De = me,
        Se = {},
        Ae = xe.f,
        Re = !s(function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }),
        _e = ae("IE_PROTO"),
        Pe = Object.prototype,
        Me = Re ? Object.getPrototypeOf : function (e) {
            return e = E(e), W(e, _e) ? e[_e] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Pe : null
        },
        Be = de("navigator", "userAgent") || "",
        Oe = I.process,
        Ee = Oe && Oe.versions,
        We = Ee && Ee.v8;
    We ? ki = (gi = We.split("."))[0] < 4 ? 1 : gi[0] + gi[1] : Be && (!(gi = Be.match(/Edge\/(\d+)/)) || 74 <= gi[1]) && (gi = Be.match(/Chrome\/(\d+)/)) && (ki = gi[1]);
    var He, je = ki && +ki,
        Ne = !!Object.getOwnPropertySymbols && !s(function () {
            return !String(Symbol()) || !Symbol.sham && je && je < 41
        }),
        Fe = Ne && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        ze = Q("wks"),
        Ge = I.Symbol,
        Xe = Fe ? Ge : Ge && Ge.withoutSetter || H,
        Ye = function (e) {
            return W(ze, e) && (Ne || "string" == typeof ze[e]) || (Ne && W(Ge, e) ? ze[e] = Ge[e] : ze[e] = Xe("Symbol." + e)), ze[e]
        },
        Ue = Ye("iterator"),
        Ze = !1;
    [].keys && ("next" in (Ei = [].keys()) ? (Wi = Me(Me(Ei))) !== Object.prototype && (He = Wi) : Ze = !0);
    var Ke = null == He || s(function () {
        var e = {};
        return He[Ue].call(e) !== e
    });
    Ke && (He = {}), Ke && !W(He, Ue) && P(He, Ue, function () {
        return this
    });

    function Je(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? ot : at)(e)
    }

    function qe(e) {
        return 0 < e ? nt(Je(e), 9007199254740991) : 0
    }

    function $e(e, t) {
        return (e = Je(e)) < 0 ? rt(e + t, 0) : lt(e, t)
    }

    function Qe() {}

    function et(e) {
        return "<script>" + e + "</" + yt + ">"
    }
    var tt, it = {
            IteratorPrototype: He,
            BUGGY_SAFARI_ITERATORS: Ze
        },
        at = Math.ceil,
        ot = Math.floor,
        nt = Math.min,
        rt = Math.max,
        lt = Math.min,
        st = function (l) {
            return function (e, t, i) {
                var a, o = p(e),
                    n = qe(o.length),
                    r = $e(i, n);
                if (l && t != t) {
                    for (; r < n;)
                        if ((a = o[r++]) != a) return !0
                } else
                    for (; r < n; r++)
                        if ((l || r in o) && o[r] === t) return l || r || 0;
                return !l && -1
            }
        },
        ut = {
            includes: st(!0),
            indexOf: st(!1)
        },
        ct = ut.indexOf,
        dt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        gt = Object.keys || function (e) {
            return function (e, t) {
                var i, a = p(e),
                    o = 0,
                    n = [];
                for (i in a) !W(oe, i) && W(a, i) && n.push(i);
                for (; t.length > o;) W(a, i = t[o++]) && (~ct(n, i) || n.push(i));
                return n
            }(e, dt)
        },
        ft = D ? Object.defineProperties : function (e, t) {
            C(e);
            for (var i, a = gt(t), o = a.length, n = 0; n < o;) _.f(e, i = a[n++], t[i]);
            return e
        },
        vt = de("document", "documentElement"),
        pt = "prototype",
        yt = "script",
        xt = ae("IE_PROTO"),
        bt = function () {
            try {
                tt = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e;
            bt = tt ? function (e) {
                e.write(et("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(tt) : ((e = w("iframe")).style.display = "none", vt.appendChild(e), e.src = String("javascript:"), (e = e.contentWindow.document).open(), e.write(et("document.F=Object")), e.close(), e.F);
            for (var t = dt.length; t--;) delete bt[pt][dt[t]];
            return bt()
        };
    oe[xt] = !0;
    var mt = Object.create || function (e, t) {
            var i;
            return null !== e ? (Qe[pt] = C(e), i = new Qe, Qe[pt] = null, i[xt] = e) : i = bt(), void 0 === t ? i : ft(i, t)
        },
        wt = {};
    wt[Ye("toStringTag")] = "z";

    function Ct(e, t, i, a) {
        e && (e = i ? e : e.prototype, W(e, _t) || Rt(e, _t, {
            configurable: !0,
            value: t
        }), a && !It && P(e, "toString", At))
    }

    function kt() {
        return this
    }

    function Vt(e, t, i, a) {
        a && a.enumerable ? e[t] = i : P(e, t, i)
    }

    function Tt() {
        return this
    }
    var It = "[object z]" === String(wt),
        Dt = Ye("toStringTag"),
        St = "Arguments" == h(function () {
            return arguments
        }()),
        Lt = It ? h : function (e) {
            var t;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (e = function (e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), Dt)) ? e : St ? h(t) : "Object" == (e = h(t)) && "function" == typeof t.callee ? "Arguments" : e
        },
        At = It ? {}.toString : function () {
            return "[object " + Lt(this) + "]"
        },
        Rt = _.f,
        _t = Ye("toStringTag"),
        Pt = it.IteratorPrototype,
        Mt = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var i, a = !1,
                e = {};
            try {
                (i = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), a = e instanceof Array
            } catch (e) {}
            return function (e, t) {
                return C(e),
                    function (e) {
                        if (!b(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(t), a ? i.call(e, t) : e.__proto__ = t, e
            }
        }() : void 0),
        Bt = it.IteratorPrototype,
        Ot = it.BUGGY_SAFARI_ITERATORS,
        Et = Ye("iterator"),
        Wt = "values",
        Ht = "entries",
        jt = function (e, t, i, a, o, n, r) {
            ! function (e, t, i) {
                t += " Iterator";
                e.prototype = mt(Pt, {
                    next: V(1, i)
                }), Ct(e, t, !1, !0), x[t] = kt
            }(i, t, a);

            function l(e) {
                if (e === o && f) return f;
                if (!Ot && e in d) return d[e];
                switch (e) {
                    case "keys":
                    case Wt:
                    case Ht:
                        return function () {
                            return new i(this, e)
                        }
                }
                return function () {
                    return new i(this)
                }
            }
            var s, h, u = t + " Iterator",
                c = !1,
                d = e.prototype,
                g = d[Et] || d["@@iterator"] || o && d[o],
                f = !Ot && g || l(o),
                a = "Array" == t && d.entries || g;
            if (a && (e = Me(a.call(new e)), Bt !== Object.prototype && e.next && (Ct(e, u, !0, !0), x[u] = Tt)), o == Wt && g && g.name !== Wt && (c = !0, f = function () {
                    return g.call(this)
                }), r && d[Et] !== f && P(d, Et, f), x[t] = f, o)
                if (s = {
                        values: l(Wt),
                        keys: n ? f : l("keys"),
                        entries: l(Ht)
                    }, r)
                    for (h in s) !Ot && !c && h in d || Vt(d, h, s[h]);
                else ue({
                    target: t,
                    proto: !0,
                    forced: Ot || c
                }, s);
            return s
        },
        Nt = "Array Iterator",
        Ft = ge.set,
        zt = ge.getterFor(Nt);
    jt(Array, "Array", function (e, t) {
        Ft(this, {
            type: Nt,
            target: p(e),
            index: 0,
            kind: t
        })
    }, function () {
        var e = zt(this),
            t = e.target,
            i = e.kind,
            a = e.index++;
        return !t || a >= t.length ? {
            value: e.target = void 0,
            done: !0
        } : "keys" == i ? {
            value: a,
            done: !1
        } : "values" == i ? {
            value: t[a],
            done: !1
        } : {
            value: [a, t[a]],
            done: !1
        }
    }, "values"), x.Arguments = x.Array;
    var Gt, Xt = Ye("toStringTag");
    for (Gt in {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }) {
        var Yt = I[Gt],
            Yt = Yt && Yt.prototype;
        Yt && Lt(Yt) !== Xt && P(Yt, Xt, Gt), x[Gt] = x.Array
    }

    function Ut(e, t) {
        var i;
        return new(void 0 === (i = Zt(e) && ("function" == typeof (i = e.constructor) && (i === Array || Zt(i.prototype)) || b(i) && null === (i = i[Kt])) ? void 0 : i) ? Array : i)(0 === t ? 0 : t)
    }
    var Zt = Array.isArray || function (e) {
            return "Array" == h(e)
        },
        Kt = Ye("species"),
        Jt = [].push,
        qt = function (d) {
            var g = 1 == d,
                f = 2 == d,
                v = 3 == d,
                p = 4 == d,
                y = 6 == d,
                x = 7 == d,
                b = 5 == d || y;
            return function (e, t, i, a) {
                for (var o, n, r = E(e), l = m(r), s = se(t, i, 3), h = qe(l.length), u = 0, a = a || Ut, c = g ? a(e, h) : f || x ? a(e, 0) : void 0; u < h; u++)
                    if ((b || u in l) && (n = s(o = l[u], u, r), d))
                        if (g) c[u] = n;
                        else if (n) switch (d) {
                    case 3:
                        return !0;
                    case 5:
                        return o;
                    case 6:
                        return u;
                    case 2:
                        Jt.call(c, o)
                } else switch (d) {
                    case 4:
                        return !1;
                    case 7:
                        Jt.call(c, o)
                }
                return y ? -1 : v || p ? p : c
            }
        },
        T = {
            forEach: qt(0),
            map: qt(1),
            filter: qt(2),
            some: qt(3),
            every: qt(4),
            find: qt(5),
            findIndex: qt(6),
            filterOut: qt(7)
        },
        e = function (e, t) {
            var i = [][e];
            return !!i && s(function () {
                i.call(null, t || function () {
                    throw 1
                }, 1)
            })
        },
        $t = T.forEach,
        M = e("forEach") ? [].forEach : function (e) {
            return $t(this, e, 1 < arguments.length ? arguments[1] : void 0)
        };
    ue({
        target: "Array",
        proto: !0,
        forced: [].forEach != M
    }, {
        forEach: M
    });
    var J = function (e) {
            return Se[e + "Prototype"]
        },
        Qt = J("Array").forEach,
        ei = Array.prototype,
        ti = {
            DOMTokenList: !0,
            NodeList: !0
        },
        ii = function (e) {
            var t = e.forEach;
            return e === ei || e instanceof Array && t === ei.forEach || ti.hasOwnProperty(Lt(e)) ? Qt : t
        },
        q = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        re = "[" + q + "]",
        ai = RegExp("^" + re + re + "*"),
        oi = RegExp(re + re + "*$"),
        fe = function (t) {
            return function (e) {
                e = String(v(e));
                return 1 & t && (e = e.replace(ai, "")), e = 2 & t ? e.replace(oi, "") : e
            }
        },
        me = {
            start: fe(1),
            end: fe(2),
            trim: fe(3)
        },
        ni = me.trim,
        ri = I.parseInt,
        li = /^[+-]?0[Xx]/,
        Re = 8 !== ri(q + "08") || 22 !== ri(q + "0x16") ? function (e, t) {
            e = ni(String(e));
            return ri(e, t >>> 0 || (li.test(e) ? 16 : 10))
        } : ri;
    ue({
        global: !0,
        forced: parseInt != Re
    }, {
        parseInt: Re
    });
    var si = Se.parseInt,
        hi = [].slice,
        Oe = /MSIE .\./.test(Be),
        Ee = function (o) {
            return function (e, t) {
                var i = 2 < arguments.length,
                    a = i ? hi.call(arguments, 2) : void 0;
                return o(i ? function () {
                    ("function" == typeof e ? e : Function(e)).apply(this, a)
                } : e, t)
            }
        };
    ue({
        global: !0,
        bind: !0,
        forced: Oe
    }, {
        setTimeout: Ee(I.setTimeout),
        setInterval: Ee(I.setInterval)
    });

    function ui(e, t, i) {
        (t = k(t)) in e ? _.f(e, t, V(0, i)) : e[t] = i
    }
    var ci = Se.setTimeout,
        di = Ye("species"),
        We = function (t) {
            return 51 <= je || !s(function () {
                var e = [];
                return (e.constructor = {})[di] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            })
        },
        gi = We("slice"),
        fi = Ye("species"),
        vi = [].slice,
        pi = Math.max;
    ue({
        target: "Array",
        proto: !0,
        forced: !gi
    }, {
        slice: function (e, t) {
            var i, a, o, n = p(this),
                r = qe(n.length),
                l = $e(e, r),
                s = $e(void 0 === t ? r : t, r);
            if (Zt(n) && ((i = "function" == typeof (i = n.constructor) && (i === Array || Zt(i.prototype)) || b(i) && null === (i = i[fi]) ? void 0 : i) === Array || void 0 === i)) return vi.call(n, l, s);
            for (a = new(void 0 === i ? Array : i)(pi(s - l, 0)), o = 0; l < s; l++, o++) l in n && ui(a, o, n[l]);
            return a.length = o, a
        }
    });
    var yi = J("Array").slice,
        xi = Array.prototype,
        bi = function (e) {
            var t = e.slice;
            return e === xi || e instanceof Array && t === xi.slice ? yi : t
        },
        mi = ut.indexOf,
        wi = [].indexOf,
        Ci = !!wi && 1 / [1].indexOf(1, -0) < 0,
        ki = e("indexOf");
    ue({
        target: "Array",
        proto: !0,
        forced: Ci || !ki
    }, {
        indexOf: function (e) {
            return Ci ? wi.apply(this, arguments) || 0 : mi(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Vi = J("Array").indexOf,
        Ti = Array.prototype,
        Ii = function (e) {
            var t = e.indexOf;
            return e === Ti || e instanceof Array && t === Ti.indexOf ? Vi : t
        },
        Di = T.filter,
        Q = We("filter");
    ue({
        target: "Array",
        proto: !0,
        forced: !Q
    }, {
        filter: function (e) {
            return Di(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Si = J("Array").filter,
        Li = Array.prototype,
        Ai = function (e) {
            var t = e.filter;
            return e === Li || e instanceof Array && t === Li.filter ? Si : t
        },
        Ri = me.trim,
        _i = I.parseFloat,
        Fe = 1 / _i(q + "-0") != -1 / 0 ? function (e) {
            var t = Ri(String(e)),
                e = _i(t);
            return 0 === e && "-" == t.charAt(0) ? -0 : e
        } : _i;
    ue({
        global: !0,
        forced: parseFloat != Fe
    }, {
        parseFloat: Fe
    });
    var Pi = Se.parseFloat,
        Mi = Ye("isConcatSpreadable"),
        Bi = 9007199254740991,
        Oi = "Maximum allowed index exceeded",
        Ei = 51 <= je || !s(function () {
            var e = [];
            return e[Mi] = !1, e.concat()[0] !== e
        }),
        Wi = We("concat");
    ue({
        target: "Array",
        proto: !0,
        forced: !Ei || !Wi
    }, {
        concat: function (e) {
            for (var t, i, a, o = E(this), n = Ut(o, 0), r = 0, l = -1, s = arguments.length; l < s; l++)
                if (function (e) {
                        if (!b(e)) return !1;
                        var t = e[Mi];
                        return void 0 !== t ? !!t : Zt(e)
                    }(a = -1 === l ? o : arguments[l])) {
                    if (i = qe(a.length), Bi < r + i) throw TypeError(Oi);
                    for (t = 0; t < i; t++, r++) t in a && ui(n, r, a[t])
                } else {
                    if (Bi <= r) throw TypeError(Oi);
                    ui(n, r++, a)
                } return n.length = r, n
        }
    });
    var Hi = J("Array").concat,
        ji = Array.prototype,
        Ni = function (e) {
            var t = e.concat;
            return e === ji || e instanceof Array && t === ji.concat ? Hi : t
        };
    ue({
        target: "Array",
        proto: !0
    }, {
        fill: function (e) {
            for (var t = E(this), i = qe(t.length), a = arguments.length, o = $e(1 < a ? arguments[1] : void 0, i), a = 2 < a ? arguments[2] : void 0, n = void 0 === a ? i : $e(a, i); o < n;) t[o++] = e;
            return t
        }
    });
    var Fi = J("Array").fill,
        zi = Array.prototype,
        Gi = function (e) {
            var t = e.fill;
            return e === zi || e instanceof Array && t === zi.fill ? Fi : t
        },
        Ke = We("splice"),
        Xi = Math.max,
        Yi = Math.min;
    ue({
        target: "Array",
        proto: !0,
        forced: !Ke
    }, {
        splice: function (e, t) {
            var i, a, o, n, r, l, s = E(this),
                h = qe(s.length),
                u = $e(e, h),
                e = arguments.length;
            if (0 === e ? i = a = 0 : a = 1 === e ? (i = 0, h - u) : (i = e - 2, Yi(Xi(Je(t), 0), h - u)), 9007199254740991 < h + i - a) throw TypeError("Maximum allowed length exceeded");
            for (o = Ut(s, a), n = 0; n < a; n++)(r = u + n) in s && ui(o, n, s[r]);
            if (i < (o.length = a)) {
                for (n = u; n < h - a; n++) l = n + i, (r = n + a) in s ? s[l] = s[r] : delete s[l];
                for (n = h; h - a + i < n; n--) delete s[n - 1]
            } else if (a < i)
                for (n = h - a; u < n; n--) l = n + i - 1, (r = n + a - 1) in s ? s[l] = s[r] : delete s[l];
            for (n = 0; n < i; n++) s[n + u] = arguments[n + 2];
            return s.length = h - a + i, o
        }
    });
    var Ui = J("Array").splice,
        Zi = Array.prototype,
        Ki = function (e) {
            var t = e.splice;
            return e === Zi || e instanceof Array && t === Zi.splice ? Ui : t
        },
        Ji = {
            HOVER: "ht.hover",
            ACTIVE: "ht.active",
            PRESSED: "ht.pressed",
            DISABLED: "ht.disabled",
            FOCUS: "ht.focus",
            FONT_SIZE: "ht.fontSize",
            FONT_FAMILY: "ht.fontFamily",
            FONT: "ht.font",
            VALUE: "ht.value",
            PLACEHOLDER: "ht.placeholder",
            TEXT_COLOR: "ht.textColor",
            PADDING: "ht.padding",
            EDITING: "ht.editing",
            TEXT_ALIGN: "ht.textAlign",
            LINE_HEIGHT: "ht.lineHeight",
            WORD_BREAK: "ht.wordBreak",
            CHECKED: "ht.checked",
            LABEL: "ht.label",
            ICON: "ht.icon",
            FORM_ITEM_NAME: "ht.name",
            FORM_ITEM_GROUP: "ht.group",
            ON_CLICK: "ht.onClick",
            ON_CHANGE: "ht.onChange",
            ON_KEYDOWN: "ht.onKeyDown",
            ON_KEYUP: "ht.onKeyUp",
            ON_SELECT_ROW: "ht.onSelectRow",
            ON_HOVER_CELL: "ht.onHoverCell",
            DROP_DOWN: "ht.dropDown",
            FORMAT: "ht.format",
            SHOW_TIME: "ht.showTime",
            DATE_TYPE: "ht.dateType",
            DATA_SOURCE: "ht.dataSource",
            DROP_ICON_WIDTH: "ht.dropIconWidth",
            DROP_ICON_HEIGHT: "ht.dropIconHeight",
            DROP_ROW_HEIGHT: "ht.dropRowHeight",
            DROP_WIDTH: "ht.dropWidth",
            DROP_BACKGROUND: "ht.dropBackground",
            DROP_HOVER_BACKGROUND: "ht.dropHoverBackground",
            DROP_LABEL_FONT: "ht.dropLabelFont",
            DROP_LABEL_COLOR: "ht.dropLabelColor",
            DROP_ACTIVE_LABEL_COLOR: "ht.dropActiveLabelColor",
            DROP_ACTIVE_BACKGOUND: "ht.dropActiveBackground",
            DROP_MAX_HEIGHT: "ht.dropMaxHeight",
            INPUT_TYPE: "ht.inputType",
            MAX_LENGTH: "ht.maxLength",
            ENTER_END_INPUTABLE: "ht.enterEndInputable",
            HOVER_INDEX: "ht.hoverIndex",
            DATASOURCE: "ht.dataSource",
            ROW_HEIGHT: "ht.rowHeight",
            HEAD_HEIGHT: "ht.headHeight",
            TRANSLATE_X: "ht.translateX",
            TRANSLATE_Y: "ht.translateY",
            SHOW_HEAD: "ht.showHead",
            SELECTED_INDEX: "ht.selectedIndex",
            SCROLL_BAR_VISIBLE: "ht.scrollBarVisible",
            AUTO_HIDE_SCROLL_BAR: "ht.autoHideScrollBar",
            COLUMNS: "ht.columns",
            MULTIPLE: "ht.multiple",
            MAX: "ht.max",
            MIN: "ht.min",
            STEP: "ht.step",
            SHOW_TOOLTIP: "ht.showToolTip",
            TOOLTIP_FORMAT: "ht.toolTipFormat",
            VALUE_BAR_DRAGGABLE: "ht.valueBarDraggable",
            MAX_SELECTION: "ht.maxSelection",
            HIDE_SELECTED: "ht.hideSelected"
        },
        qi = {
            placeholderColor: "#737373",
            fontSize: 12,
            fontFamily: "arial,  sans-serif",
            emptyColor: "rgba(0,0,0,0)",
            hoverDarker: 5,
            activeDarker: 11
        },
        Ze = ht.Default.setImage;
    Ze("ht.vector.date", {
        width: 16,
        height: 16,
        comps: [{
            type: "roundRect",
            borderColor: "#ffffff",
            cornerRadius: 1,
            rect: [1.5, 6.54942, 12.94, 8]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "#ffffff",
            borderCap: "round",
            closePath: !0,
            points: [1.5, 2.4523, 14.44, 2.4523, 14.44, 2.4523, 14.44, 2.4523, 14.44, 14.54942, 14.44, 14.54942, 14.44, 14.54942, 1.5, 14.54942, 1.5, 14.54942, 1.5, 14.54942, 1.5, 2.4523, 1.5, 2.4523, 1.5, 2.4523, 1.5, 2.4523],
            segments: [1, 2, 3, 2, 3, 2, 3, 2, 3, 2]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [4.46, 1, 4.46, 4]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [11.5, 1, 11.5, 4]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52013, 9.50677, 7.00013, 9.50677, 9.00013, 9.50677, 12.50756, 9.50677],
            segments: [1, 2, 1, 2]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52, 12.52535, 12.50756, 12.52535]
        }, {
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [3.52013, 6.54942, 7.00013, 6.54942, 9.00013, 6.54942, 12.50756, 6.54942],
            segments: [1, 2, 1, 2]
        }]
    }), Ze("ht.vector.dropDownIcon", {
        width: 18,
        height: 10,
        comps: [{
            type: "shape",
            borderWidth: 1,
            borderColor: "rgb(255,255,255)",
            points: [1, 1, 9, 9, 17, 1]
        }]
    }), Ze("ht.vector.treeOpenIcon", {
        width: 10,
        height: 10,
        attachStyle: "close",
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            borderColor: "rgb(0,0,0)",
            closePath: !0,
            points: [0, 0, 10, 5, 0, 10]
        }]
    }), Ze("ht.vector.treeCloseIcon", {
        width: 10,
        height: 10,
        attachStyle: "close",
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            borderColor: "rgb(0,0,0)",
            closePath: !0,
            points: [0, 0, 10, 0, 5, 10]
        }]
    }), Ze("ht.vector.treeDefIcon", {
        width: 22,
        height: 16,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [19.46829, 3.58619, 19.46829, 1.10347, 7.80392, 1.10347, 6.77294, 0, 0, 0, 0, 16, 19.46157, 16, 22, 3.58619, 19.46829, 3.58619, 6.04692, 1.12664, 7.07791, 2.23011, 18.26449, 2.23011, 18.26449, 3.59706, 2.82065, 3.59706, 1.12837, 10.10776, 1.12837, 1.12664, 6.04692, 1.12664, 18.43055, 14.74166, 1.12837, 14.74166, 1.12837, 14.63244, 3.68405, 4.67291, 20.5368, 4.67291, 18.43055, 14.74166],
            segments: [1, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 5]
        }]
    }), Ze("ht.vector.treeLoadIcon", {
        width: 32,
        height: 32,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [16.5125, 32, 7.69062, 32, .5125, 24.82187, .5125, 16, .5125, 7.17813, 7.6875, 0, 16.5125, 0, 20.60625, 0, 24.5, 1.54375, 27.48125, 4.35, 27.84688, 4.69375, 27.8625, 5.26563, 27.51875, 5.63125, 27.175, 5.99375, 26.60313, 6.0125, 26.2375, 5.66875, 23.59375, 3.18125, 20.14063, 1.8125, 16.5125, 1.8125, 8.6875, 1.8125, 2.325, 8.17812, 2.325, 16, 2.325, 23.82187, 8.69062, 30.1875, 16.5125, 30.1875, 22.40937, 30.1875, 27.60312, 26.6375, 29.74063, 21.14063, 29.92188, 20.675, 30.44688, 20.44063, 30.9125, 20.625, 31.37813, 20.80625, 31.60938, 21.33125, 31.42813, 21.79688, 29.01563, 27.99687, 23.1625, 32, 16.5125, 32],
            segments: [1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5]
        }]
    }), Ze("ht.vector.treeCheckIcon", {
        dataBindings: [],
        width: 160,
        height: 160,
        attachStyle: "close",
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [139.3, .47663, 20.5, .47663, 9.52832, .47663, .5, 9.50496, .5, 20.47663, .5, 139.57663, .5, 150.54831, 9.52832, 159.57663, 20.5, 159.57663, 139.5, 159.57663, 150.47168, 159.57663, 159.5, 150.54831, 159.5, 139.57663, 159.5, 20.37663, 159.47367, 15.05689, 157.32589, 9.96152, 153.53619, 6.22809, 149.74648, 2.49467, 144.61954, .42337, 139.3, .47663, 133.1, 47.37663, 61.3, 119.57663, 60.37719, 120.51835, 59.11835, 121.05785, 57.8, 121.07663, 56.41253, 121.11208, 55.0711, 120.56825, 54.1, 119.57663, 26.4, 88.27663, 24.93292, 87.00925, 24.32978, 84.99815, 24.85726, 83.13258, 25.38474, 81.26701, 26.95166, 79.86949, 28.86517, 79.55795, 30.77868, 79.24642, 32.70799, 80.07473, 33.8, 81.67663, 57.9, 108.57663, 126.1, 40.37663, 127.27177, 38.81427, 129.2561, 38.07551, 131.1643, 38.49122, 133.07249, 38.90692, 134.56971, 40.40414, 134.98541, 42.31234, 135.40112, 44.22053, 134.66236, 46.20486, 133.1, 47.37663],
            segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 4, 5, 1, 2, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 4, 5]
        }]
    }), Ze("ht.vector.treeUnCheckIcon", {
        width: 160,
        height: 160,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [130, 5, 30, 5, 16.25, 5, 5, 16.25, 5, 30, 5, 130, 5, 143.75, 16.25, 155, 30, 155, 130, 155, 143.75, 155, 155, 143.75, 155, 130, 155, 30, 155, 16.25, 143.75, 5, 130, 5, 142.5, 130, 142.5, 136.875, 136.875, 142.5, 130, 142.5, 30, 142.5, 23.125, 142.5, 17.5, 136.875, 17.5, 130, 17.5, 30, 17.5, 23.125, 23.125, 17.5, 30, 17.5, 130, 17.5, 136.875, 17.5, 142.5, 23.125, 142.5, 30, 142.5, 130],
            segments: [1, 2, 4, 2, 4, 2, 4, 2, 4, 5, 1, 4, 2, 4, 2, 4, 2, 4, 2, 5]
        }]
    }), Ze("ht.vector.treeUnCheckAllIcon", {
        width: 160,
        height: 160,
        blendMode: "override",
        comps: [{
            type: "shape",
            background: "rgb(0,0,0)",
            pixelPerfect: !0,
            points: [158.11523, 31.17188, 158.11523, 128.82813, 158.11523, 136.89453, 155.24414, 143.80859, 149.52148, 149.53125, 143.79883, 155.25391, 136.9043, 158.125, 128.81836, 158.125, 31.18164, 158.125, 23.11523, 158.125, 16.20117, 155.25391, 10.47852, 149.53125, 4.75586, 143.80859, 1.88477, 136.91406, 1.88477, 128.82813, 1.88477, 31.17188, 1.88477, 23.10547, 4.75586, 16.19141, 10.47852, 10.46875, 16.20117, 4.74609, 23.0957, 1.875, 31.18164, 1.875, 128.83789, 1.875, 136.9043, 1.875, 143.81836, 4.74609, 149.54102, 10.46875, 155.24414, 16.19141, 158.11523, 23.10547, 158.11523, 31.17188, 132.06055, 86.52344, 132.06055, 73.49609, 132.06055, 71.73828, 131.41602, 70.19531, 130.12695, 68.92578, 128.83789, 67.63672, 127.29492, 66.99219, 125.55664, 66.99219, 34.42383, 66.99219, 32.66602, 66.99219, 31.12305, 67.63672, 29.85352, 68.92578, 28.56445, 70.21484, 27.91992, 71.75781, 27.91992, 73.49609, 27.91992, 86.52344, 27.91992, 88.28125, 28.56445, 89.82422, 29.85352, 91.09375, 31.14258, 92.38281, 32.64648, 93.02734, 34.42383, 93.02734, 125.55664, 93.02734, 127.31445, 93.02734, 128.85742, 92.38281, 130.12695, 91.09375, 131.41602, 89.78516, 132.06055, 88.26172, 132.06055, 86.52344],
            segments: [1, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2, 4, 4, 5, 1, 2, 4, 4, 2, 4, 4, 2, 4, 4, 2, 4, 4, 5]
        }]
    }), Ze("ht.vector.pagination.previous", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            points: [28, 17, 18, 25, 28, 33]
        }]
    }), Ze("ht.vector.pagination.next", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 3.14159,
            points: [32, 17, 22, 25, 32, 33]
        }]
    }), Ze("ht.vector.pagination.first", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 0,
            points: [35, 17, 25, 25, 35, 33]
        }, {
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 0,
            points: [29, 17, 19, 25, 29, 33]
        }]
    }), Ze("ht.vector.pagination.last", {
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 3.14159,
            points: [29, 17, 19, 25, 29, 33]
        }, {
            type: "shape",
            borderWidth: 2,
            borderColor: "rgb(255,255,255)",
            borderCap: "round",
            rotation: 3.14159,
            points: [35, 17, 25, 25, 35, 33]
        }]
    }), Ze("ht.vector.pagination.ellipsis", {
        modified: "Mon Aug 26 2019 15:46:29 GMT+0800 (中国标准时间)",
        background: "rgb(61,61,61)",
        width: 50,
        height: 50,
        blendMode: "override",
        comps: [{
            type: "oval",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            rect: [12.18756, 23, 4, 4]
        }, {
            type: "oval",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            rect: [23, 23, 4, 4]
        }, {
            type: "oval",
            background: "rgb(255,255,255)",
            borderColor: "#979797",
            rect: [33.81244, 23, 4, 4]
        }]
    });

    function $i(e, t) {
        if (!e) return Wa([], t);
        var e = ((e = e) ? ("string" != typeof e && (e += ""), e.replace(/^\s+|\s+$/g, "")) : "").split(/\s+/g),
            i = [];
        return ii(e).call(e, function (e) {
            isNaN(e) || i.push(si(e))
        }), Wa(i)
    }

    function Qi(e) {
        e && "textarea" === e || (e = "input");
        var t = document.createElement(e);
        return (e = t.style).display = "block", e.boxSizing = "border-box", e.position = "absolute", e.outline = "none", e.zIndex = 1e4, e.borderWidth = 0, e.backgroundColor = "rgba(0, 0, 0, 0)", t
    }

    function ea(e, t, i) {
        var a = t.style,
            o = i.rect,
            n = new ht.Math.Matrix2d,
            r = e.getZoom();
        ht.Default.layout(t, o), n.appendTranslate(e.tx(), e.ty()), n.appendScale(r, r), n.append(i.matrix), Fa(a, "transform", "matrix(" + n.a.toFixed(5) + ", " + n.b.toFixed(5) + ", " + n.c.toFixed(5) + ",\n    " + n.d.toFixed(5) + ", " + n.tx.toFixed(5) + ", " + n.ty.toFixed(5) + ")"), Fa(a, "transformOrigin", (-o.x).toFixed(5) + "px " + (-o.y).toFixed(5) + "px")
    }
    var ta, ia, aa = function () {
            function o(e, t, i, a) {
                c(this, o), this.r = null, this.g = null, this.b = null, this.a = null, e && this.setColor(e, t, i, a)
            }
            return d(o, [{
                key: "setColor",
                value: function (e, t, i, a) {
                    var o;
                    e && !t ? (o = ht.Default.toColorData(e), this.r = o[0], this.g = o[1], this.b = o[2], this.a = o[3] / 255) : (this.r = e, this.g = t, this.b = i, this.a = a)
                }
            }, {
                key: "toString",
                value: function () {
                    return 1 !== this.a && null !== this.a ? this.getRGBA() : this.getWebColor()
                }
            }, {
                key: "getRGB",
                value: function () {
                    var e = this.r,
                        t = this.g,
                        i = this.b;
                    return null === e || null === t || null === i ? null : Ni(t = Ni(e = "rgb(".concat(e, ", ")).call(e, t, ", ")).call(t, i, ")")
                }
            }, {
                key: "getRGBA",
                value: function () {
                    var e = this.r,
                        t = this.g,
                        i = this.b,
                        a = this.a;
                    return null === e || null === t || null === i ? null : Ni(i = Ni(t = Ni(e = "rgba(".concat(e, ", ")).call(e, t, ", ")).call(t, i, ", ")).call(i, null === a ? 1 : a.toFixed(2), ")")
                }
            }, {
                key: "getWebColor",
                value: function () {
                    var e = this.r,
                        t = this.g,
                        i = this.b;
                    return null === e || null === t || null === i ? null : Ni(t = Ni(e = "#".concat(this._getWebValue(e))).call(e, this._getWebValue(t))).call(t, this._getWebValue(i))
                }
            }, {
                key: "_getWebValue",
                value: function (e) {
                    e = e.toString(16);
                    return e = 1 === e.length ? "0" + e : e
                }
            }]), o
        }(),
        oa = "top",
        na = "bottom",
        ra = "right",
        la = "left",
        sa = "center",
        ha = "middle",
        ua = "multiple",
        ca = "single",
        da = "radio",
        ga = "checkbox",
        fa = "x",
        va = "y",
        pa = "category",
        ya = "time",
        xa = "bar",
        ba = "line",
        ma = "diffLine",
        wa = "cube",
        Ca = "cylinder",
        ka = "Previous",
        Va = "Next",
        Ta = "Previous Jump",
        Ia = "Next Jump",
        Da = "First",
        Sa = "Last",
        La = /firefox/.test(window.navigator.userAgent.toLowerCase()),
        Aa = /MSIE/.test(window.navigator.userAgent.toLowerCase()),
        st = ht.Default,
        Ra = st.removeHTML,
        _a = st.appendToScreen,
        Pa = st.getClientPoint,
        Ma = st.isTouchEvent,
        Ba = st.brighter,
        Oa = st.darker,
        Ea = (ta = {}, ia = document ? ht.Default.createCanvas().getContext("2d") : null, function (e, t) {
            ia.font = e || ht.Default.labelFont;
            e = ta[ia.font];
            return e || (e = 2 * ia.measureText("e").width, ta[ia.font] = e), {
                width: ia.measureText(t).width + 2,
                height: e
            }
        }),
        Wa = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            return e && 0 !== e.length ? 3 === e.length ? [e[0], e[1], e[2], e[1]] : 2 === e.length ? [e[0], e[1], e[0], e[1]] : 1 === e.length ? [e[0], e[0], e[0], e[0]] : [e[0], e[1], e[2], e[3]] : [t, t, t, t]
        };
    document.createElement("input").setAttribute("style", "width: 0;height: 0;");

    function Ha(e, t, i) {
        for (var a = [], o = 0, n = 1, r = e.length; n <= r; n++) {
            var l = e.substring(o, n);
            Ea(i, l).width > t && (o = n - 1 === o ? (a.push(e.substring(o, n)), n) : (a.push(e.substring(o, n - 1)), n - 1))
        }
        return o !== n - 1 && a.push(e.substring(o, n)), a
    }

    function ja(e, t, i, a) {
        for (var o = [], n = e.split("\n"), r = 0, l = n.length; r < l; r++) {
            var s = n[r];
            if ("" === s && (s = " "), a) Array.prototype.push.apply(o, Ha(s, i, t));
            else {
                for (var h, u, c = "", d = void 0, g = "", f = 0; f < s.length; f++) s.charAt(f).match(/[a-z|A-Z]/g) ? c += "1" : c += "2";
                for (var c = (c = c.replace(/21/g, "2".concat("|", "1"))).replace(/12/g, "1".concat("|", "2")), v = 0; v < c.length; v++) "|" === c.charAt(v) && (s = za(s, v + 1, "\n"));
                for (var p = s.split("\n"), y = c.split("|"), x = 0, b = p.length; x < b; x++) h = g + p[x], u = Ea(t, h), "1" === y[x][0] ? u.width > i ? g ? (o.push(g), g = "", x--) : (d = Ha(p[x], i, t), Array.prototype.push.apply(o, bi(d).call(d, 0, d.length - 1)), g = d[d.length - 1]) : g = u.width === i ? (o.push(h), "") : h : g = u.width > i ? (d = Ha(h, i, t), Array.prototype.push.apply(o, bi(d).call(d, 0, d.length - 1)), d[d.length - 1]) : h;
                g && o.push(g)
            }
        }
        return o
    }

    function Na(e, t, i, a, o, n) {
        return e ? (t = t && new aa(t), e.pressed ? a || (o && t && 0 !== t.a ? ht.Default.darker(t, qi.activeDarker) : n ? null : qi.emptyColor) : e.hover ? i || (o && t && 0 !== t.a ? ht.Default.darker(t, qi.hoverDarker) : n ? null : qi.emptyColor) : n ? null : t ? t.getRGBA() : qi.emptyColor) : t
    }
    var Fa = function (e, t, i) {
            var a = t[0].toUpperCase + t.substring(1, t.length);
            e["webkit" + a] = i, e["moz" + a] = i, e["ms" + a] = i, e["o" + a] = i, e[t] = i
        },
        za = function (e, t, i) {
            return e = e.substring(0, t - 1) + i + e.substring(t - 1, e.length)
        };

    function Ga(e, t) {
        var i, a = e.prototype,
            o = ht.Default.getMSMap();
        for (i in t) o[i] && o.hasOwnProperty(i) ? o[i](a, t) : a[i] = t[i]
    }

    function Xa(e) {
        e = e.a(Ji.VALUE);
        return void 0 === e ? "" : e
    }
    var Ya, ae = (Ya = null, function (r) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            l = e.multiple,
            s = e.readType,
            h = Ai(e),
            e = e.accept;
        Ya || ((Ya = document.createElement("input")).setAttribute("type", "file"), Ya.setAttribute("id", "hiddenFile"), Ya.style.width = 0, Ya.style.height = 0, Ya.addEventListener("change", function (e) {
            Ra(Ya), Ya = null;
            for (var i, t, a = e.target.files, o = {
                    files: []
                }, n = 0; n < a.length; n++)(!h || h(a[n])) && o.files.push(a[n]);
            s && 0 !== o.files.length ? l ? (i = 0, ii(t = o.files).call(t, function (t) {
                var e = new FileReader;
                e.onload = function (e) {
                    t.readResult = e.target.result, ++i === o.files.length && r(o)
                }, Ua(e, t, s)
            })) : ((t = new FileReader).onload = function (e) {
                a[0].readResult = e.target.result, r(o)
            }, Ua(t, a[0], s)) : r(o)
        }), _a(Ya)), Ya.multiple = !!l, Ya.accept = e || "", Ya.click()
    });

    function Ua(e, t, i) {
        "binaryString" === i ? e.readAsBinaryString(t) : "ArrayBuffer" === i ? e.readAsArrayBuffer(t) : "dataUrl" === i ? e.readAsDataURL(t) : e.readAsText(t)
    }

    function Za(e, t) {
        for (var i = [], a = 0, o = 0, n = 0, r = e.length; n < r; n++) {
            var l, s, h, u = e[n].width || .1;
            isNaN(u) ? (l = u.split("+"), 1 < (s = Pi(l[0])) ? o += s : a += s, (h = []).push(s), 1 < (s = Pi(l[1])) ? (o += s, h.unshift(s)) : (a += s, h.push(s)), i.push(h)) : (1 <= (u = Pi(u)) ? o += u = Math.max(1, u) : a += u, i.push(u))
        }
        for (n = 0, r = i.length; n < r; n++)(u = i[n]) < 1 ? i[n] = Math.max(0, u / a * (t - o)) : u instanceof Array && (i[n] = u[0] + Math.max(0, u[1] / a * (t - o)));
        return i
    }

    function Ka(e, t) {
        return e && t ? e.getDataUI ? e.getDataUI(t) : e.getData3dUI ? e.getData3dUI(t) : void 0 : null
    }

    function Ja(e, t, i, a, o) {
        a && (a.editing = !1, delete a.dom), o && e.a(o, i.value), e.iv(), Ra(i)
    }

    function qa(e) {
        return null == e
    }

    function $a(e, t, i) {
        for (var a in t) {
            var o = t[a];
            "object" !== Te(o) || ht.Default.isArray(o) || i ? e[a] = t[a] : (qa(e[a]) && ht.Default.isObject(t[a]) && (e[a] = {}), $a(e[a], t[a]))
        }
    }

    function Qa(e, t) {
        e.getView().style.cursor = t
    }

    function eo(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
        return e[t %= e.length]
    }

    function to(e, t) {
        return {
            x: e.x - t,
            y: e.y - t,
            width: e.width + 2 * t,
            height: e.height + 2 * t
        }
    }

    function io(e, t, i) {
        var a = (n = So(i, t, e)).rect,
            o = n.matrix,
            t = new ht.Math.Matrix2d,
            e = Oo(i),
            n = i.tx ? i.tx() : 0,
            i = i.ty ? i.ty() : 0;
        return t.appendTranslate(n, i), t.appendScale(e, e), t.append(o), o = new ht.Math.Vector2, a = ht.Default.unionPoint([t.apply(o.set(a.x, a.y)), t.apply(o.set(a.x, a.y + a.height)), t.apply(o.set(a.x + a.width, a.y)), t.apply(o.set(a.x + a.width, a.y + a.height))])
    }

    function ao(e, t) {
        var i = t.borderWidth,
            a = t.borderColor,
            o = t.dash,
            n = t.dashPattern,
            r = t.background,
            l = t.bgGradient,
            s = t.bgGradientColor,
            t = t.contentRect;
        o && e.setLineDash(n), r && (l && s && (r = (n = ht.Default).createGradient.apply(n, Ni(s = [e, l, r, s]).call(s, Le(t)))), e.fillStyle = r, Gi(e).call(e)), i && a && (e.strokeStyle = a, e.lineWidth = i, e.stroke())
    }

    function oo(e, t, i, a) {
        var o = t.x,
            n = t.y,
            r = t.width,
            t = t.height;
        e.fillStyle = i, e.beginPath(), Po(e, o, n, r, t, a), e.closePath(), Gi(e).call(e)
    }

    function no(e, t, i, a, o) {
        return o = So(e, t, i, o), {
            x: a.x + o.rect.x,
            y: a.y + o.rect.y
        }
    }

    function ro(e) {
        return ht.Default.clone(e)
    }

    function lo(e) {
        return ht.Default.isArray(e)
    }

    function so(e) {
        return ht.Default.isObject(e)
    }

    function ho(e, t, i, a) {
        ht.Default.drawPoints(e, t, i, a)
    }

    function uo(e, t, i, a, o, n, r, l, s, h) {
        ht.Default.drawText(e, t, i, a, o, n, r, l, s, h)
    }

    function co(e, t, i, a, o, n, r, l, s, h) {
        !h && l && (h = l.s("body.color")), ht.Default.drawStretchImage(e, t, i, a, o, n, r, l, s, h)
    }

    function go(e, t, i, a, o, n, r, l, s) {
        !s && r && (s = r.s("body.color")), ht.Default.drawImage(e, t, i, a, o, n, r, l, s)
    }

    function fo(e, t) {
        return ht.Default.intersectsRect(e, t)
    }

    function vo(e, t, i) {
        if (i) {
            var a = Ea(e, t),
                o = new ht.Math.Vector2(0, 0),
                n = new ht.Math.Vector2(a.width, 0),
                r = new ht.Math.Vector2(a.width, a.height),
                l = new ht.Math.Vector2(0, a.height),
                a = new ht.Math.Vector2(a.width / 2, a.height / 2),
                i = Eo(i);
            return o.rotateAround(a, i), n.rotateAround(a, i), r.rotateAround(a, i), l.rotateAround(a, i), Mo([o, n, r, l])
        }
        return Ea(e, t)
    }

    function po(e, t) {
        var i = t;
        return i = (i = i.replace(/yyyy|YYYY/, e.getFullYear())).replace(/yy|YY/, 9 < e.getYear() % 100 ? (e.getYear() % 100).toString() : "0" + e.getYear() % 100), t = e.getMonth() + 1, i = (i = (i = (i = (i = i.replace(/MM/, 9 < t ? t.toString() : "0" + t)).replace(/M/g, t)).replace(/w|W/g, ["日", "一", "二", "三", "四", "五", "六"][e.getDay()])).replace(/dd|DD/, 9 < e.getDate() ? e.getDate().toString() : "0" + e.getDate())).replace(/d|D/g, e.getDate()), t = e.getHours(), i = (i = (i = (i = (i = (i = (i = (i = (i = (i = i.replace(/HH/, 9 < t ? t.toString() : "0" + t)).replace(/H/g, t)).replace(/A/g, 12 <= t ? "PM" : "AM")).replace(/Aa/g, 12 <= t ? "pm" : "am")).replace(/hh/, 9 < (t = 12 < t ? t % 12 : t) ? t.toString() : "0" + t)).replace(/h/g, t)).replace(/mm/, 9 < e.getMinutes() ? e.getMinutes().toString() : "0" + e.getMinutes())).replace(/m/g, e.getMinutes())).replace(/ss|SS/, 9 < e.getSeconds() ? e.getSeconds().toString() : "0" + e.getSeconds())).replace(/s|S/g, e.getSeconds())
    }

    function yo(e, t) {
        var i = e.x,
            a = e.y,
            o = e.width,
            n = e.height,
            e = t.x,
            t = t.y,
            e = Math.max(e, i - 1);
        return e = Math.min(e, i + o + 1), t = Math.max(t, a - 1), {
            x: e,
            y: t = Math.min(t, a + n + 1)
        }
    }

    function xo(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .3,
            i = e.length,
            a = [],
            o = [];
        if (i <= 2) return {
            points: e,
            segments: i ? 1 === i ? [1] : [1, 2] : null
        };
        for (var n = 0; n < i; n++) {
            var r = e[n],
                l = e[n - 1] || r,
                s = e[n + 1] || r,
                h = Math.sqrt(Math.pow(r.x - l.x, 2) + Math.pow(r.y - l.y, 2)),
                u = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                c = h / (h + u),
                u = u / (h + u),
                c = t * (c = isNaN(c) ? 0 : c),
                u = t * (u = isNaN(u) ? 0 : u);
            n && a.push({
                x: r.x - c * (s.x - l.x),
                y: r.y - c * (s.y - l.y)
            }), a.push(r), n !== i - 1 && a.push({
                x: r.x + u * (s.x - l.x),
                y: r.y + u * (s.y - l.y)
            }), o.push(n ? 4 : 1)
        }
        return {
            points: a,
            segments: o
        }
    }

    function bo() {
        var i = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = (i + 16 * Math.random()) % 16 | 0;
            return i = Math.floor(i / 16), ("x" == e ? t : 3 & t | 8).toString(16)
        })
    }

    function mo(e) {
        return ht.Default.toColorData(e)
    }

    function wo(e) {
        return ht.Default.getImage(e)
    }

    function Co(e, t, i) {
        if ("object" !== Te(t)) return t;
        var a, o = t.type,
            n = t.colorStops,
            r = t.coordinate,
            l = i.x,
            s = i.y,
            t = i.width,
            i = i.height;
        return "radial" === o ? (r = r || [0, 0, .5, 0, 1, .5], o = Math.min(t, i), o = [l + t * r[0], s + i * r[1], o * r[2], l + t * r[3], s + i * r[4], o * r[5]], a = e.createRadialGradient.apply(e, o), ii(n).call(n, function (e) {
            var t = e.offset,
                e = e.color;
            a.addColorStop(t, e)
        })) : (r = [l + t * (r = r || [0, 0, 0, 1])[0], s + i * r[1], l + t * r[2], s + i * r[3]], a = e.createLinearGradient.apply(e, r), ii(n).call(n, function (e) {
            var t = e.offset,
                e = e.color;
            a.addColorStop(t, e)
        })), a
    }

    function ko(e) {
        var t = e.x,
            i = e.y,
            a = e.width,
            o = e.height,
            n = a / 2;
        return {
            middleMiddle: {
                x: t + n,
                y: i + (e = o / 2)
            },
            topMiddle: {
                x: t + n,
                y: i
            },
            bottomMiddle: {
                x: t + n,
                y: i + o
            },
            leftMiddle: {
                x: t,
                y: i + e
            },
            rightMiddle: {
                x: t + a,
                y: i + e
            }
        }
    }

    function Vo(e) {
        return e = e.getBoundingClientRect(), qa(e.x) && (e.x = e.left, e.y = e.top), e
    }

    function To(e) {
        Ii(Wo).call(Wo, e) < 0 && Wo.push(e)
    }

    function Io(e) {
        0 <= (e = Ii(Wo).call(Wo, e)) && Ki(Wo).call(Wo, e, 1)
    }
    var Do = function (e) {
            e = Ie(e, 4);
            return {
                x: e[0],
                y: e[1],
                width: e[2],
                height: e[3]
            }
        },
        So = function (e, t, i, a) {
            var o, n = Ka(e, t),
                r = (n = n, t = t, e = e instanceof ht.graph3d.Graph3dView, a = a, n && n.interactiveInfo ? e ? ("billboard" === t.s("shape3d") ? o = t.s("shape3d.image") : a && (a = n.gv.intersectObject(a, t), o = t.s("".concat("body" === a.part ? "" : a.part + ".", "image")) || t.s("shape3d.".concat("body" === a.part ? "" : a.part + ".", "image"))), o && n.interactiveInfo[o] ? n.interactiveInfo[o].bodyInfo.compInfos : null) : n.interactiveInfo.bodyInfo ? n.interactiveInfo.bodyInfo.compInfos : null : null);
            if (r)
                for (var l = 0, s = r.length; l < s; l++) {
                    var h = r[l];
                    if (h.comp === i) return h
                }
            return null
        },
        Lo = function (e, t, i) {
            e = Ka(e, t);
            if (!e) return {};
            var a = t.getCurrentPrefix();
            if (e.vectorInfos)
                for (var o = e.vectorInfos, n = 0; n < o.length; n++) {
                    var r = o[n];
                    if (r.comp === i && r.prefix === a) return r
                } else e.vectorInfos = [];
            t = {
                comp: i,
                prefix: a
            };
            return e.vectorInfos.push(t), t
        },
        Ao = function (e, t, i, a) {
            e = e[t], i = i.getCurrentPrefix();
            if (e && e.func) {
                if ("string" == typeof e.func) {
                    e = Ie(e.func.split("@"), 2);
                    return e[0], (i || "") + e[1]
                }
            } else if (i) return i + t;
            return null
        },
        Ro = function (e, t, i) {
            if (!e || !e.func) return e;
            var a = e.func,
                o = e.value,
                i = ht.Default.isFunction(a) ? i && i.vectorDataBindingDisabled && !e.isSafeFunc ? o : a(t, i) : t instanceof ht.Data ? /^attr@/.test(a) ? t.a(bi(a).call(a, 5)) : /^style@/.test(a) ? t.s(bi(a).call(a, 6)) : /^field@/.test(a) ? t[bi(a).call(a, 6)] : t[a] ? t[a](i) : o : o;
            return void 0 !== o && null == i ? o : i
        },
        _o = function (e) {
            return !qa(e)
        },
        Po = function (e, t, i, a, o, n, r, l, s) {
            ht.Default.drawRoundRect.apply(ht.Default, arguments)
        },
        wt = ht.Default,
        Mo = wt.unionPoint,
        Bo = wt.containsPoint,
        Oo = function (e) {
            return e.getZoom ? e.getZoom() : 1
        },
        Eo = function (e) {
            return Math.PI * (e / 180)
        },
        Wo = [],
        it = {},
        Ho = [].slice,
        jo = {},
        qt = Function.bind || function (t) {
            var i = le(this),
                a = Ho.call(arguments, 1),
                o = function () {
                    var e = a.concat(Ho.call(arguments));
                    return this instanceof o ? function (e, t, i) {
                        if (!(t in jo)) {
                            for (var a = [], o = 0; o < t; o++) a[o] = "a[" + o + "]";
                            jo[t] = Function("C,a", "return new C(" + a.join(",") + ")")
                        }
                        return jo[t](e, i)
                    }(i, e.length, e) : i.apply(t, e)
                };
            return b(i.prototype) && (o.prototype = i.prototype), o
        };
    ue({
        target: "Function",
        proto: !0
    }, {
        bind: qt
    });

    function No(e, t, i, a) {
        var o = i.dropDown;
        o || (o = new qo(e, t, i, "a@" + a), i.dropDown = o), o.open()
    }

    function Fo(e, t, i, a) {
        var o = i.dropDown;
        o || (e.getFormat = function () {
            return e.a(Ji.FORMAT)
        }, o = new $o(e, t, i, a), i.dropDown = o), o.open()
    }
    var zo, Go, Xo, Yo, Uo = J("Function").bind,
        Zo = Function.prototype,
        Ko = function (e) {
            var t = e.bind;
            return e === Zo || e instanceof Function && t === Zo.bind ? Uo : t
        },
        Jo = function () {
            function o(t, e, i, a) {
                c(this, o), this.data = t, this.graph = e, this.vectorInfo = i, this.valueType = a, this._documentClickHandler = Ko(a = this.documentClickHandler).call(a, this), ht.Default.addMethod(t, {
                    isInstant: function () {
                        return this.a("ht.instant")
                    },
                    setInstant: function (e) {
                        t.a("ht.instant", e)
                    }
                })
            }
            return d(o, [{
                key: "init",
                value: function () {
                    var t = this;
                    this._initing = !0;
                    var i = this.data;
                    this.graph;
                    var e = i.a("ht.dropDownProperty"),
                        a = this.value,
                        o = new this.dropDownClazz;
                    if (e)
                        for (var n in e) o.setPropertyValue(n, e[n]);
                    i && (i.getInstant = function () {
                        return !0
                    });
                    var r = o._dropDownView = o.initDropDownView(i, this.getDatas(), a);
                    o.getDropDownView = function () {
                        return r
                    }, r.on("d:click", function (e) {
                        e.stopPropagation()
                    }), r.on("d:mousedown", function (e) {
                        e.stopPropagation()
                    }), r.on("d:mousewheel", function (e) {
                        e.stopPropagation()
                    }), r.on("d:mousemove", function (e) {
                        t.dropDownClazz !== ht.ui.ColorDropDown && e.stopPropagation()
                    }), o.addDropDownListener(function (e) {
                        "cancel" !== e.kind || (e = i.a("ht.onClose")) && e(i, this.graph)
                    }), this._dropDown = o, this._dropDownView = r, this.onInit(o, r);
                    var l = io(this.vectorInfo.comp, this.data, this.graph);
                    this.prepareLayoutDropDown(o, r, {
                        left: l.x,
                        top: l.y,
                        width: l.widht,
                        height: l.height
                    }), _a(r.getView()), o.addValueChangeListener(this.handleDropDownValueChange, this), o.addDropDownListener(this.handleDropDownChange, this), ci(function () {
                        t.registerCloseEvent(t._documentClickHandler)
                    }, 100), o.afterOpen(a), r.iv(!0), this._initing = !1
                }
            }, {
                key: "onInit",
                value: function (e, t) {}
            }, {
                key: "getDatas",
                value: function () {
                    return null
                }
            }, {
                key: "prepareLayoutDropDown",
                value: function (e, t, i) {
                    var a = e.getWidth(),
                        o = e.getHeight(),
                        n = ht.Default.getWindowInfo(),
                        r = Vo(this.graph.getView()),
                        e = i.left + n.left + r.x,
                        r = i.top + i.height + n.top + r.y;
                    e + a > n.left + n.width && (e = n.left + n.width - a), r + o > n.top + n.height && (r -= i.height + o) < n.top && (r = n.top), t.setX(Math.max(0, e)), t.setY(r), t.setWidth(a), t.setHeight(o)
                }
            }, {
                key: "registerCloseEvent",
                value: function (e) {
                    var t = this.graph.getView();
                    ht.Default.isTouchable ? (document.addEventListener("touchstart", e), t.addEventListener("touchstart", e)) : (document.addEventListener("mousedown", e), t.addEventListener("mousedown", e))
                }
            }, {
                key: "unregisterCloseEvent",
                value: function (e) {
                    var t = this.graph.getView();
                    ht.Default.isTouchable ? (document.removeEventListener("touchstart", e), t.removeEventListener("touchstart", e)) : (document.removeEventListener("mousedown", e), t.removeEventListener("mousedown", e))
                }
            }, {
                key: "_clearDropDown",
                value: function () {
                    this._dropDown = this._dropDownView = null, this.vectorInfo.editing = !1, this.data.iv()
                }
            }, {
                key: "documentClickHandler",
                value: function (e) {
                    var t, i, a, o = this.data,
                        n = this.graph;
                    ht.Default.isLeftButton(e) && (a = this._dropDown, t = this._dropDownView, i = this.vectorInfo.comp, n = io(i, o, n), t && (a = t.containsEvent ? t.containsEvent(e) : a.isClickOnDropDownView(e), ht.Default.containsPoint(n, ht.Default.getClientPoint(e)) || a || this.close()))
                }
            }, {
                key: "close",
                value: function () {
                    var e = this;
                    !e._initing && e._dropDown && (e._dropDown.cancel(), this.vectorInfo.editing = !1, delete e._dropDown, delete e._dropDownView, this.data.iv()), Io(this)
                }
            }, {
                key: "handleDropDownValueChange",
                value: function (e) {
                    this.value = e.value
                }
            }, {
                key: "open",
                value: function () {
                    var e;
                    this.isOpened() || (this.init(), this.vectorInfo.editing = !0, this.data.iv(), (e = this.data.a("ht.onOpen")) && e(this.data, this.graph)), To(this)
                }
            }, {
                key: "isOpened",
                value: function () {
                    return !!this._dropDown
                }
            }, {
                key: "handleDropDownChange",
                value: function (e) {
                    this.data;
                    var t = this,
                        i = t._dropDown,
                        a = t._dropDownView;
                    i && (i.beforeClose(), "stop" !== e.kind || void 0 !== (e = i.getDropDownValue()) && (this.value = e), t._clearDropDown(), ht.Default.removeHTML(a.getView()), i.removeValueChangeListener(t.handleDropDownValueChange, t), this.unregisterCloseEvent(this._documentClickHandler), i.afterClose())
                }
            }, {
                key: "value",
                get: function () {
                    var e = this.data,
                        t = Ie(this.valueType.split("@"), 2),
                        i = t[0],
                        t = t[1];
                    if ("a" === i) return e.a(t);
                    if ("s" === i) return e.s(t);
                    if ("p" === i) {
                        t = ht.Default.getter(t);
                        if (e[t]) return e[t]()
                    }
                    return null
                },
                set: function (e) {
                    var t = this.data,
                        i = this.valueType,
                        a = this.graph,
                        o = Ie(i.split("@"), 2),
                        n = o[0],
                        r = o[1],
                        i = this.vectorInfo.onChange,
                        o = this.value;
                    "a" === n ? t.a(r, e) : "s" === n ? t.s(r, e) : "p" !== n || t[r = ht.Default.setter(r)] && t[r](e), i && i(o, e, t, a)
                }
            }]), o
        }(),
        qo = function () {
            g(n, Jo);
            var o = f(n);

            function n(e, t, i, a) {
                return c(this, n), (a = o.call(this, e, t, i, a)).dropDownClazz = ht.ui.ColorDropDown, a
            }
            return n
        }(),
        $o = function () {
            g(n, Jo);
            var o = f(n);

            function n(e, t, i, a) {
                return c(this, n), (a = o.call(this, e, t, i, a)).dropDownClazz = ht.ui.DateTimeDropDown, a
            }
            return d(n, [{
                key: "onInit",
                value: function (e, t) {
                    var i = this.data,
                        a = i.a(Ji.DATE_TYPE),
                        o = i.a("ht.selectableFunc"),
                        n = i.a("ht.dropDownProperty");
                    if (e.setPropertyValue("dateTimePane.type", a, !0), e.setPropertyValue("dateTimePane.selectableFunc", o, !0), n)
                        for (var r in n) e.setPropertyValue(r, n[r], !0)
                }
            }]), n
        }(),
        Qo = function () {
            g(n, Jo);
            var o = f(n);

            function n(a, e, t, i) {
                return c(this, n), i = o.call(this, a, e, t, i), a.getDropDownConfig = function () {
                    var e = a.a("ht.dropDownProperty") || {},
                        t = a.a(Ji.DATE_TYPE),
                        i = a.a("ht.selectableFunc");
                    return t && (e["dateRangePane.type"] = t, e["dateRangePane.selectableFunc"] = i), e
                }, i.dropDownClazz = ht.ui.DateRangeDropDown, i
            }
            return d(n, [{
                key: "onInit",
                value: function (e, t) {
                    var i = this.data,
                        a = i.a(Ji.DATE_TYPE),
                        o = i.a("ht.selectableFunc"),
                        n = i.a("ht.dropDownProperty");
                    if (e.setPropertyValue("dateRangePane.type", a, !0), e.setPropertyValue("dateRangePane.selectableFunc", o, !0), n)
                        for (var r in n) e.setPropertyValue(r, n[r], !0)
                }
            }]), n
        }(),
        en = "0.1.2";
    zo = ".ht-vector-tooltip{\r\n    box-sizing: border-box;\r\n    padding: 5px 12px;\r\n    margin: 0;\r\n    position: absolute;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: rgb(247, 247, 247);\r\n    border-radius: 5px;\r\n    /* -webkit-transition: all 0.5s;\r\n    transition: all 0.5s; */\r\n}\r\n.ht-vector-search-input{\r\n    display: block; \r\n    position: absolute; \r\n    z-index: 10000; \r\n    box-sizing: border-box; \r\n    outline: none; \r\n    padding: 0; \r\n    border-width: 1px; \r\n    border-radius: 2px;\r\n}\r\n", Yo = (Go = void 0 === (Go = {}) ? {} : Go).insertAt, zo && "undefined" != typeof document && (Xo = document.head || document.getElementsByTagName("head")[0], (Go = document.createElement("style")).type = "text/css", "top" === Yo && Xo.firstChild ? Xo.insertBefore(Go, Xo.firstChild) : Xo.appendChild(Go), Go.styleSheet ? Go.styleSheet.cssText = zo : Go.appendChild(document.createTextNode(zo)));
    var M = ht.Default,
        tn = M.drawText,
        an = M.drawStretchImage,
        on = M.getImage,
        nn = [2, 8];
    var re = ht.Default,
        rn = re.drawText,
        ln = re.drawStretchImage,
        sn = re.getImage;
    re.darker;
    var hn = ht.Default.drawText;
    var fe = ht.Default,
        un = fe.drawText,
        cn = fe.drawStretchImage,
        dn = fe.getImage,
        gn = "#ffffff",
        fn = "#cccccc",
        vn = new aa;
    var Re = ht.Default,
        pn = Re.drawText,
        yn = Re.drawStretchImage,
        xn = Re.getImage;

    function bn(e, t) {
        return e <= 1 ? t * e : e
    }

    function mn(e, t) {
        return t ? (e - In) / wn * Cn + kn : Vn - (e - In) / wn * Cn
    }
    var wn, Cn, kn, Vn, Tn, In;
    var Dn = T.every,
        Oe = e("every");
    ue({
        target: "Array",
        proto: !0,
        forced: !Oe
    }, {
        every: function (e) {
            return Dn(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });

    function Sn(e, t) {
        return e < 1 ? t * e : e
    }
    var Ln = J("Array").every,
        An = Array.prototype,
        Rn = function (e) {
            var t = e.every;
            return e === An || e instanceof Array && t === An.every ? Ln : t
        },
        _n = ht.Default.drawText;
    var Pn = Math.max,
        Mn = Math.min,
        Bn = ht.Default.containsPoint,
        On = 4;

    function En(e, t, i, a, o, n) {
        var r, l, s, h, u, c = 4 < arguments.length && void 0 !== o ? o : {},
            d = 5 < arguments.length ? n : void 0,
            g = t.x,
            f = t.y,
            v = t.width,
            p = t.height,
            y = i.width,
            x = i.height,
            b = a.x,
            m = a.y,
            o = null,
            n = null,
            t = c.color,
            i = void 0 === t ? "red" : t,
            a = c.barWidth,
            t = void 0 === a ? 8 : a,
            a = c.gap,
            a = void 0 === a ? 2 : a,
            c = c.visible;
        e.save(), p < x && (h = p * (r = p / x), n = [g + v - t - a, f + -m * r, t, Math.max(h, On)], l = p - x, c && (e.beginPath(), Po.apply(void 0, Ni(x = [e]).call(x, Le(n), [Math.min(t, h) / 2])), e.fillStyle = i, Gi(e).call(e))), v < y - 2 && (h = v * (s = v / y), o = [g + -b * s, f + p - t - a, Math.max(h, On), t], u = v - y, c && (e.beginPath(), Po.apply(void 0, Ni(c = [e]).call(c, Le(o), [Math.min(t, h) / 2])), e.fillStyle = i, Gi(e).call(e))), d.scrollInfo = {
            scrollBarX: o,
            scrollBarY: n,
            scaleX: s,
            scaleY: r,
            minX: u,
            minY: l
        }, e.restore()
    }

    function Wn(e, t, i, a, o, n, r, l) {
        var s = Ao(e, "translateY", t),
            h = Ao(e, "translateX", t),
            u = So(i, t, e, l),
            c = Lo(i, t, e),
            d = c.scrollBarInteractiveSize || ht.Default.scrollBarInteractiveSize,
            g = c.scrollInfo;
        if (g) {
            var f, v, p = g.minX,
                y = g.minY,
                l = g.scrollBarX,
                i = g.scrollBarY,
                e = g.scaleX,
                g = g.scaleY,
                u = {
                    x: a.x + u.rect.x,
                    y: a.y + u.rect.y
                };
            return l && (v = (l = Do(l)).height, l.y -= (d - v) / 2, l.height = d), i && (v = (i = Do(i)).width, i.x -= (d - v) / 2, i.width = d), l && h && Bn(l, u) ? f = {
                downPoint: a,
                startX: t.a(h) || 0,
                scaleX: e,
                minX: p,
                axis: fa
            } : i && s && Bn(i, u) ? f = {
                downPoint: a,
                startY: t.a(s) || 0,
                scaleY: g,
                minY: y,
                axis: va
            } : (u = c.headHeight, !r && c.pannable && Bn({
                x: 0,
                y: u,
                width: o,
                height: n - u
            }, a) && (l || i) && (f = {
                downPoint: a,
                scaleX: e,
                minX: p,
                scaleY: g,
                minY: y,
                isPan: !0
            }, l && h && (f.startX = t.a(h) || 0, f.scaleX = e, f.minX = p), i && s && (f.startY = t.a(s) || 0, f.scaleY = g, f.minY = y))), f
        }
    }

    function Hn(e, t, i, a, o, n) {
        var r = Lo(i, t, this),
            e = Wn(this, t, i, a, o, n, !1, e);
        r._scrollDragInfo = e, r.scrollBarVisible = !!e
    }

    function jn(e, h, t, u, i, a) {
        var c = Lo(t, h, this),
            d = c._scrollDragInfo,
            g = Ao(this, "translateY", h),
            f = Ao(this, "translateX", h);
        c._dragTimer || (c._dragTimer = ci(function () {
            var e, t, i, a, o, n, r, l, s;
            d && (e = d.axis, t = d.minX, i = d.minY, s = d.downPoint, l = d.startX, a = d.startY, n = d.scaleX, r = d.scaleY, o = d.isPan, e === fa ? (n = l + (s.x - u.x) / n, n = Mn(0, n), n = Pn(t, n), f && h.a(f, n)) : e === va ? (r = a + (s.y - u.y) / r, r = Mn(0, r), r = Pn(i, r), g && h.a(g, r)) : o && (void 0 !== l && (l = l + (u.x - s.x), l = Mn(0, l), l = Pn(t, l), f && h.a(f, l)), void 0 !== a && (s = a + (u.y - s.y), s = Mn(0, s), s = Pn(i, s), g && h.a(g, s)))), delete c._dragTimer
        }, 1))
    }

    function Nn(e, t, i, a, o, n) {
        var r, l, s = Lo(i, t, this);
        s._scrollDragInfo && (r = (l = s.scrollInfo).scrollBarX, i = l.scrollBarY, l = s.autoHideScrollBar, (r || i) && l && (s.scrollBarVisible = !0, zn(t, s)), delete s._scrollDragInfo)
    }

    function Fn(e, t, i, a, o, n) {
        var r, l, s, h, u, c = Lo(i, t, this),
            d = c.scrollInfo,
            g = c.scrollSpeed || 1,
            f = Ao(this, "translateY", t),
            v = Ao(this, "translateX", t);
        d && (r = d.scrollBarX, l = d.scrollBarY, s = d.minX, h = d.minY, d.scaleX, d.scaleY, i = (e.wheelDeltaX || -e.deltaX || 0) / 40 * 5 * g, d = (e.wheelDeltaY || -e.deltaY || 0) / 40 * 5 * g, e = !1, l && f && d && (g = (t.a(f) || 0) + d, g = Mn(0, g), g = Pn(h, g), t.a(f, g), e = !0), r && v && i && (i = (t.a(v) || 0) + i, i = Mn(0, i), i = Pn(s, i), t.a(v, i), e = !0), !e && r && !l && v && d && (u = (t.a(v) || 0) + d, u = Mn(0, u), u = Pn(s, u), t.a(v, u)), u = c.autoHideScrollBar, (r || l) && u && (c.scrollBarVisible = !0, zn(t, c)))
    }

    function zn(e, t) {
        e._hideBarTimer && (clearTimeout(e._hideBarTimer), e._hideBarTimer = null), e._hideBarTimer = ci(function () {
            t._scrollDragInfo || (t.scrollBarVisible = !1, e.iv())
        }, 1e3)
    }
    var Ee = ht.Default,
        Gn = Ee.drawText,
        Xn = Ee.drawStretchImage,
        Yn = Ee.getImage,
        Un = Ee.drawBorder,
        Zn = Ee.intersectsRect,
        Kn = /\n/g;
    var Jn = ht.Default.drawText;
    var qn = ht.Default.drawImage;
    var $n = ht.Default.drawImage;
    var gi = ht.Default,
        Qn = gi.drawText,
        er = gi.createGradient;

    function tr(e) {
        var t = e.return;
        return void 0 !== t && C(t.call(e)).value
    }

    function ir(e, t) {
        this.stopped = e, this.result = t
    }

    function ar(e, t, i) {
        function a(e) {
            return n && tr(n), new ir(!0, e)
        }

        function o(e) {
            return d ? (C(e), f ? v(e[0], e[1], a) : v(e[0], e[1])) : f ? v(e, a) : v(e)
        }
        var n, r, l, s, h, u, c = i && i.that,
            d = !(!i || !i.AS_ENTRIES),
            g = !(!i || !i.IS_ITERATOR),
            f = !(!i || !i.INTERRUPTED),
            v = se(t, c, 1 + d + f);
        if (g) n = e;
        else {
            if ("function" != typeof (c = function (e) {
                    if (null != e) return e[rr] || e["@@iterator"] || x[Lt(e)]
                }(e))) throw TypeError("Target is not iterable");
            if (void 0 !== (g = c) && (x.Array === g || nr[or] === g)) {
                for (r = 0, l = qe(e.length); r < l; r++)
                    if ((s = o(e[r])) && s instanceof ir) return s;
                return new ir(!1)
            }
            n = c.call(e)
        }
        for (h = n.next; !(u = h.call(n)).done;) {
            try {
                s = o(u.value)
            } catch (e) {
                throw tr(n), e
            }
            if ("object" == typeof s && s && s instanceof ir) return s
        }
        return new ir(!1)
    }
    var or = Ye("iterator"),
        nr = Array.prototype,
        rr = Ye("iterator"),
        lr = function (e, t) {
            var i = this;
            if (!(i instanceof lr)) return new lr(e, t);
            Mt && (i = Mt(new Error(void 0), Me(i))), void 0 !== t && P(i, "message", String(t));
            t = [];
            return ar(e, t.push, {
                that: t
            }), P(i, "errors", t), i
        };
    lr.prototype = mt(Error.prototype, {
        constructor: V(5, lr),
        message: V(5, ""),
        name: V(5, "AggregateError")
    }), ue({
        global: !0
    }, {
        AggregateError: lr
    });
    var sr = I.Promise,
        hr = Ye("species"),
        ur = Ye("iterator"),
        cr = !1;
    try {
        var dr = 0,
            gr = {
                next: function () {
                    return {
                        done: !!dr++
                    }
                },
                return: function () {
                    cr = !0
                }
            };
        gr[ur] = function () {
            return this
        }, Array.from(gr, function () {
            throw 2
        })
    } catch (e) {}

    function fr(e, t) {
        var i;
        return void 0 === (e = C(e).constructor) || null == (i = C(e)[xr]) ? t : le(i)
    }

    function vr(e) {
        var t;
        Vr.hasOwnProperty(e) && (t = Vr[e], delete Vr[e], t())
    }

    function pr(e) {
        return function () {
            vr(e)
        }
    }
    var yr, xr = Ye("species"),
        ut = /(?:iphone|ipod|ipad).*applewebkit/i.test(Be),
        br = "process" == h(I.process),
        mr = I.location,
        ki = I.setImmediate,
        Q = I.clearImmediate,
        wr = I.process,
        me = I.MessageChannel,
        Cr = I.Dispatch,
        kr = 0,
        Vr = {},
        Tr = "onreadystatechange",
        q = function (e) {
            vr(e.data)
        },
        Fe = function (e) {
            I.postMessage(e + "", mr.protocol + "//" + mr.host)
        };
    ki && Q || (ki = function (e) {
        for (var t = [], i = 1; i < arguments.length;) t.push(arguments[i++]);
        return Vr[++kr] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, yr(kr), kr
    }, Q = function (e) {
        delete Vr[e]
    }, br ? yr = function (e) {
        wr.nextTick(pr(e))
    } : Cr && Cr.now ? yr = function (e) {
        Cr.now(pr(e))
    } : me && !ut ? (Ds = (Ts = new me).port2, Ts.port1.onmessage = q, yr = se(Ds.postMessage, Ds, 1)) : I.addEventListener && "function" == typeof postMessage && !I.importScripts && mr && "file:" !== mr.protocol && !s(Fe) ? (yr = Fe, I.addEventListener("message", q, !1)) : yr = Tr in w("script") ? function (e) {
        vt.appendChild(w("script"))[Tr] = function () {
            vt.removeChild(this), vr(e)
        }
    } : function (e) {
        setTimeout(pr(e), 0)
    });
    var Ir, Dr, Sr, Lr, Ar, Rr, _r, Pr, Ei = {
            set: ki,
            clear: Q
        },
        Wi = /web0s(?!.*chrome)/i.test(Be),
        Mr = Ei.set,
        Ke = I.MutationObserver || I.WebKitMutationObserver,
        Ze = I.document,
        Br = I.process,
        st = I.Promise,
        wt = (0, xe.f)(I, "queueMicrotask"),
        qt = wt && wt.value;
    qt || (Ir = function () {
        var e, t;
        for (br && (e = Br.domain) && e.exit(); Dr;) {
            t = Dr.fn, Dr = Dr.next;
            try {
                t()
            } catch (e) {
                throw Dr ? Lr() : Sr = void 0, e
            }
        }
        Sr = void 0, e && e.enter()
    }, Lr = ut || br || Wi || !Ke || !Ze ? st && st.resolve ? ((_r = st.resolve(void 0)).constructor = st, Pr = _r.then, function () {
        Pr.call(_r, Ir)
    }) : br ? function () {
        Br.nextTick(Ir)
    } : function () {
        Mr.call(I, Ir)
    } : (Ar = !0, Rr = Ze.createTextNode(""), new Ke(Ir).observe(Rr, {
        characterData: !0
    }), function () {
        Rr.data = Ar = !Ar
    }));

    function Or(e) {
        var i, a;
        this.promise = new e(function (e, t) {
            if (void 0 !== i || void 0 !== a) throw TypeError("Bad Promise constructor");
            i = e, a = t
        }), this.resolve = le(i), this.reject = le(a)
    }

    function Er(e, t) {
        return C(e), b(t) && t.constructor === e ? t : ((0, (e = Jr.f(e)).resolve)(t), e.promise)
    }

    function Wr(e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (e) {
            return {
                error: !0,
                value: e
            }
        }
    }

    function Hr(e) {
        var t;
        return !(!b(e) || "function" != typeof (t = e.then)) && t
    }

    function jr(c, d) {
        var g;
        c.notified || (c.notified = !0, g = c.reactions, Kr(function () {
            for (var e = c.value, t = 1 == c.state, i = 0; g.length > i;) {
                var a, o, n, r = g[i++],
                    l = t ? r.ok : r.fail,
                    s = r.resolve,
                    h = r.reject,
                    u = r.domain;
                try {
                    l ? (t || (2 === c.rejection && pl(c), c.rejection = 1), !0 === l ? a = e : (u && u.enter(), a = l(e), u && (u.exit(), n = !0)), a === r.promise ? h(rl("Promise-chain cycle")) : (o = Hr(a)) ? o.call(a, s, h) : s(a)) : h(e)
                } catch (e) {
                    u && !n && u.exit(), h(e)
                }
            }
            c.reactions = [], c.notified = !1, d && !c.rejection && fl(c)
        }))
    }

    function Nr(e, t, i) {
        var a, o;
        cl ? ((a = ll.createEvent("Event")).promise = t, a.reason = i, a.initEvent(e, !1, !0), I.dispatchEvent(a)) : a = {
            promise: t,
            reason: i
        }, !dl && (o = I["on" + e]) ? o(a) : e === gl && function (e, t) {
            var i = I.console;
            i && i.error && (1 === arguments.length ? i.error(e) : i.error(e, t))
        }("Unhandled promise rejection", i)
    }

    function Fr(t, i, a) {
        return function (e) {
            t(i, e, a)
        }
    }

    function zr(e, t, i) {
        e.done || (e.done = !0, (e = i ? i : e).value = t, e.state = 2, jr(e, !0))
    }
    var Gr, Xr, Yr, Ur, Zr, Kr = qt || function (e) {
            e = {
                fn: e,
                next: void 0
            };
            Sr && (Sr.next = e), Dr || (Dr = e, Lr()), Sr = e
        },
        Jr = {
            f: function (e) {
                return new Or(e)
            }
        },
        qr = "object" == typeof window,
        $r = Ei.set,
        Qr = Ye("species"),
        el = "Promise",
        tl = ge.get,
        il = ge.set,
        al = ge.getterFor(el),
        M = sr && sr.prototype,
        ol = sr,
        nl = M,
        rl = I.TypeError,
        ll = I.document,
        sl = I.process,
        hl = Jr.f,
        ul = hl,
        cl = !!(ll && ll.createEvent && I.dispatchEvent),
        dl = "function" == typeof PromiseRejectionEvent,
        gl = "unhandledrejection",
        re = De(el, function () {
            var e = K(ol) !== String(ol);
            if (!e && 66 === je) return !0;
            if (!nl.finally) return !0;
            if (51 <= je && /native code/.test(ol)) return !1;

            function t(e) {
                e(function () {}, function () {})
            }
            var i = new ol(function (e) {
                e(1)
            });
            return (i.constructor = {})[Qr] = t, !(i.then(function () {}) instanceof t) || !e && qr && !dl
        }),
        fe = re || ! function (e, t) {
            if (!t && !cr) return !1;
            var i = !1;
            try {
                var a = {};
                a[ur] = function () {
                    return {
                        next: function () {
                            return {
                                done: i = !0
                            }
                        }
                    }
                }, e(a)
            } catch (e) {}
            return i
        }(function (e) {
            ol.all(e).catch(function () {})
        }),
        fl = function (o) {
            $r.call(I, function () {
                var e, t = o.facade,
                    i = o.value,
                    a = vl(o);
                if (a && (e = Wr(function () {
                        br ? sl.emit("unhandledRejection", i, t) : Nr(gl, t, i)
                    }), o.rejection = br || vl(o) ? 2 : 1, e.error)) throw e.value
            })
        },
        vl = function (e) {
            return 1 !== e.rejection && !e.parent
        },
        pl = function (t) {
            $r.call(I, function () {
                var e = t.facade;
                br ? sl.emit("rejectionHandled", e) : Nr("rejectionhandled", e, t.value)
            })
        },
        yl = function (i, e, t) {
            if (!i.done) {
                i.done = !0, t && (i = t);
                try {
                    if (i.facade === e) throw rl("Promise can't be resolved itself");
                    var a = Hr(e);
                    a ? Kr(function () {
                        var t = {
                            done: !1
                        };
                        try {
                            a.call(e, Fr(yl, t, i), Fr(zr, t, i))
                        } catch (e) {
                            zr(t, e, i)
                        }
                    }) : (i.value = e, i.state = 1, jr(i, !1))
                } catch (e) {
                    zr({
                        done: !1
                    }, e, i)
                }
            }
        };
    re && (nl = (ol = function (e) {
        ! function (e, t, i) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation")
        }(this, ol, el), le(e), Gr.call(this);
        var t = tl(this);
        try {
            e(Fr(yl, t), Fr(zr, t))
        } catch (e) {
            zr(t, e)
        }
    }).prototype, (Gr = function (e) {
        il(this, {
            type: el,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = function (e, t, i) {
        for (var a in t) i && i.unsafe && e[a] ? e[a] = t[a] : Vt(e, a, t[a], i);
        return e
    }(nl, {
        then: function (e, t) {
            var i = al(this),
                a = hl(fr(this, ol));
            return a.ok = "function" != typeof e || e, a.fail = "function" == typeof t && t, a.domain = br ? sl.domain : void 0, i.parent = !0, i.reactions.push(a), 0 != i.state && jr(i, !1), a.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), Xr = function () {
        var e = new Gr,
            t = tl(e);
        this.promise = e, this.resolve = Fr(yl, t), this.reject = Fr(zr, t)
    }, Jr.f = hl = function (e) {
        return e === ol || e === Yr ? new Xr : ul(e)
    }), ue({
        global: !0,
        wrap: !0,
        forced: re
    }, {
        Promise: ol
    }), Ct(ol, el, !1, !0), Zr = de(Ur = el), Ur = _.f, D && Zr && !Zr[hr] && Ur(Zr, hr, {
        configurable: !0,
        get: function () {
            return this
        }
    }), Yr = de(el), ue({
        target: el,
        stat: !0,
        forced: re
    }, {
        reject: function (e) {
            var t = hl(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), ue({
        target: el,
        stat: !0,
        forced: !0
    }, {
        resolve: function (e) {
            return Er(this === Yr ? ol : this, e)
        }
    }), ue({
        target: el,
        stat: !0,
        forced: fe
    }, {
        all: function (e) {
            var l = this,
                t = hl(l),
                s = t.resolve,
                h = t.reject,
                i = Wr(function () {
                    var a = le(l.resolve),
                        o = [],
                        n = 0,
                        r = 1;
                    ar(e, function (e) {
                        var t = n++,
                            i = !1;
                        o.push(void 0), r++, a.call(l, e).then(function (e) {
                            i || (i = !0, o[t] = e, --r || s(o))
                        }, h)
                    }), --r || s(o)
                });
            return i.error && h(i.value), t.promise
        },
        race: function (e) {
            var i = this,
                a = hl(i),
                o = a.reject,
                t = Wr(function () {
                    var t = le(i.resolve);
                    ar(e, function (e) {
                        t.call(i, e).then(a.resolve, o)
                    })
                });
            return t.error && o(t.value), a.promise
        }
    }), ue({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function (e) {
            var l = this,
                t = Jr.f(l),
                s = t.resolve,
                i = t.reject,
                a = Wr(function () {
                    var a = le(l.resolve),
                        o = [],
                        n = 0,
                        r = 1;
                    ar(e, function (e) {
                        var t = n++,
                            i = !1;
                        o.push(void 0), r++, a.call(l, e).then(function (e) {
                            i || (i = !0, o[t] = {
                                status: "fulfilled",
                                value: e
                            }, --r || s(o))
                        }, function (e) {
                            i || (i = !0, o[t] = {
                                status: "rejected",
                                reason: e
                            }, --r || s(o))
                        })
                    }), --r || s(o)
                });
            return a.error && i(a.value), t.promise
        }
    });
    var xl = "No one promise resolved";
    ue({
        target: "Promise",
        stat: !0
    }, {
        any: function (e) {
            var s = this,
                t = Jr.f(s),
                h = t.resolve,
                u = t.reject,
                i = Wr(function () {
                    var a = le(s.resolve),
                        o = [],
                        n = 0,
                        r = 1,
                        l = !1;
                    ar(e, function (e) {
                        var t = n++,
                            i = !1;
                        o.push(void 0), r++, a.call(s, e).then(function (e) {
                            i || l || (l = !0, h(e))
                        }, function (e) {
                            i || l || (i = !0, o[t] = e, --r || u(new(de("AggregateError"))(o, xl)))
                        })
                    }), --r || u(new(de("AggregateError"))(o, xl))
                });
            return i.error && u(i.value), t.promise
        }
    });
    Re = !!sr && s(function () {
        sr.prototype.finally.call({
            then: function () {}
        }, function () {})
    });
    ue({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: Re
    }, {
        finally: function (t) {
            var i = fr(this, de("Promise")),
                e = "function" == typeof t;
            return this.then(e ? function (e) {
                return Er(i, t()).then(function () {
                    return e
                })
            } : t, e ? function (e) {
                return Er(i, t()).then(function () {
                    throw e
                })
            } : t)
        }
    });
    var Oe = function (n) {
            return function (e, t) {
                var i, a = String(v(e)),
                    o = Je(t),
                    e = a.length;
                return o < 0 || e <= o ? n ? "" : void 0 : (t = a.charCodeAt(o)) < 55296 || 56319 < t || o + 1 === e || (i = a.charCodeAt(o + 1)) < 56320 || 57343 < i ? n ? a.charAt(o) : t : n ? a.slice(o, o + 2) : i - 56320 + (t - 55296 << 10) + 65536
            }
        },
        bl = {
            codeAt: Oe(!1),
            charAt: Oe(!0)
        }.charAt,
        ml = "String Iterator",
        wl = ge.set,
        Cl = ge.getterFor(ml);
    jt(String, "String", function (e) {
        wl(this, {
            type: ml,
            string: String(e),
            index: 0
        })
    }, function () {
        var e = Cl(this),
            t = e.string,
            i = e.index;
        return i >= t.length ? {
            value: void 0,
            done: !0
        } : (i = bl(t, i), e.index += i.length, {
            value: i,
            done: !1
        })
    });

    function kl(e, t) {
        var i = e.children;
        if (i)
            for (var a = 0, o = i.length; a < o; a++) {
                if (t(i[a])) return !0;
                if (kl(i[a], t)) return !0
            }
        return !1
    }
    var Vl = Se.Promise,
        Ee = ht.Default,
        Tl = Ee.drawStretchImage,
        Il = Ee.getImage,
        Dl = Ee.isObject,
        Sl = {
            _uuid: !0,
            text: !0,
            icon: !0,
            children: !0,
            badges: !0,
            drawCell: !0,
            expanded: !0,
            selected: !0,
            disabled: !0,
            checked: !0,
            isLeaf: !0
        },
        Ll = function () {
            g(a, ht.Data);
            var i = f(a);

            function a(e) {
                var t;
                return c(this, a), (t = i.call(this))._attrObject = {}, t.init(e), t
            }
            return d(a, [{
                key: "getAttrObject",
                value: function () {
                    return this._attrObject
                }
            }, {
                key: "a",
                value: function (e, t) {
                    if (2 === arguments.length) this.setAttr(e, t);
                    else {
                        if (!Dl(e)) return this.getAttr(e);
                        for (var i in e) this.setAttr(i, e[i])
                    }
                    return this
                }
            }, {
                key: "setAttr",
                value: function (e, t) {
                    var i;
                    void 0 === t ? delete this._attrObject[e] : this._attrObject[e] = t, !Sl[e] || (i = this.a("dataInfo")) && (i[e] = t)
                }
            }, {
                key: "getAttr",
                value: function (e) {
                    return this._attrObject[e]
                }
            }, {
                key: "init",
                value: function (e) {
                    var t = e._uuid,
                        i = e.text,
                        a = e.icon,
                        o = e.badges,
                        n = e.expanded,
                        r = e.selected,
                        l = e.disabled,
                        s = e.checked,
                        h = void 0 !== s && s,
                        u = e.isLeaf,
                        s = e.children,
                        e = e.drawCell;
                    if (this.a({
                            text: void 0 === i ? "Tree" : i,
                            icon: void 0 === a ? null : a,
                            badges: void 0 === o ? [] : o,
                            expanded: void 0 !== n && n,
                            selected: void 0 !== r && r,
                            disabled: void 0 !== l && l,
                            checked: h,
                            isLeaf: void 0 !== u && u,
                            children: void 0 === s ? [] : s,
                            drawCell: e
                        }), void 0 === this.a("_uuid")) this.a({
                        _uuid: t,
                        _isHovering: !1,
                        _isLoading: !1
                    });
                    else if (!1 === h && "check" === this.a("_checkStatus") && (this.checkAfter(), this.checkBefore()), 0 === this.a("children").length && 0 < this.getChildren().size())
                        for (var c = this.getChildren().toArray(), d = this.getDataModel(), g = c.length - 1; 0 <= g; g--) d.remove(c[g])
                }
            }, {
                key: "initNodeRect",
                value: function (e, t, i) {
                    var a = this.getDataModel();
                    this.setRowRect(a, e), this.setTreeContentRect(a), this.setCellsRect(a), this.setToggleRect(a, t, i), this.setCheckRect(a), this.setIconRect(a), this.setTreeTextRect(a)
                }
            }, {
                key: "setRowRect",
                value: function (e, t) {
                    var i = e.getAttrObject(),
                        a = i.translateX,
                        o = i.translateY,
                        n = i.showHead,
                        r = i.thHeight,
                        l = i.tdHeight,
                        s = i.borderWidth,
                        h = i.rowLineWidth,
                        u = i.rect,
                        e = u.x,
                        i = u.y,
                        u = u.width;
                    this.a("rowRect", {
                        x: e + a + s,
                        y: t ? t.a("rowRect").y + l + h : (n ? r : 0) + i + o + s,
                        width: u - 2 * s,
                        height: l
                    })
                }
            }, {
                key: "setTreeContentRect",
                value: function (e) {
                    for (var t = e.getAttrObject(), i = t.treeColumnIndex, a = t.colWidths, o = t.columnLineWidth, n = 0, r = 0; r < i; r++) n += a[r] + o;
                    var l = t.indent,
                        s = this.a("rowRect"),
                        h = s.x,
                        u = s.y,
                        e = s.width,
                        t = s.height,
                        s = this.getDeep();
                    this.a("treeContentRect", {
                        x: h + s * l + n,
                        y: u,
                        width: e,
                        height: t
                    })
                }
            }, {
                key: "setCellsRect",
                value: function (e) {
                    var t = e.getAttrObject(),
                        i = t.columnLineWidth,
                        a = t.colWidths,
                        o = t.cellPadding,
                        n = t.treeColumnIndex,
                        e = this.a("rowRect"),
                        t = e.x,
                        r = e.y,
                        l = e.height,
                        s = [],
                        h = t;
                    if (a)
                        for (var u = 0, c = a.length; u < c; u++) {
                            0 !== u && (h += a[u - 1] + i);
                            var d = a[u] - (u === n ? 0 : 2 * o);
                            s.push({
                                x: h + (u === n ? 0 : o),
                                y: r,
                                width: d < 0 ? 0 : d,
                                height: l
                            })
                        }
                    this.a("cellsRect", s)
                }
            }, {
                key: "setToggleRect",
                value: function (e, t, i) {
                    var a, o = this.a("treeContentRect").x,
                        n = this.a("treeTextWH").textWidth,
                        r = this.a("rowRect"),
                        l = r.x,
                        s = r.y,
                        h = r.width,
                        u = r.height,
                        c = e.getAttrObject(),
                        d = c.space,
                        g = c.expandIconSize,
                        f = c.expandMode,
                        v = c.expandIconPos,
                        p = c.showCheckbox,
                        y = c.checkIconSize,
                        r = c.showIcon,
                        e = c.iconSize,
                        c = c.iconVisibleFunc;
                    "left" === v && (a = o), "fixRight" === v && (a = l + h - g - 2 * d), "right" === v && (a = o + d + (p ? y + d : 0), r && c(this.a("dataInfo"), t, i) && (a += e + d), a += n), "icon" === f ? this.a("toggleRect", {
                        x: a,
                        y: s,
                        width: g + 2 * d,
                        height: u
                    }) : this.a("toggleRect", {
                        x: l,
                        y: s,
                        width: h,
                        height: u
                    }), this.a("toggleIconRect", {
                        x: a,
                        y: s + (u - g) / 2,
                        width: g,
                        height: g
                    })
                }
            }, {
                key: "setCheckRect",
                value: function (e) {
                    var t = e.getAttrObject(),
                        i = t.showCheckbox,
                        a = t.space,
                        o = t.expandIconSize,
                        n = t.checkIconSize,
                        r = t.expandIconPos;
                    i && (t = (e = this.a("treeContentRect")).x, i = e.y, e = e.height, this.a("checkRect", {
                        x: t + ("left" === r ? o + a : 0),
                        y: i + (e - n) / 2,
                        width: n,
                        height: n
                    }))
                }
            }, {
                key: "setIconRect",
                value: function (e) {
                    var t = e.getAttrObject(),
                        i = t.showIcon,
                        a = t.space,
                        o = t.expandIconSize,
                        n = t.checkIconSize,
                        r = t.showCheckbox,
                        l = t.iconSize,
                        s = t.expandIconPos;
                    i && (t = (e = this.a("treeContentRect")).x, i = e.y, e = e.height, this.a("iconRect", {
                        x: t + ("left" === s ? o + a : 0) + (r ? n + a : 0),
                        y: i + (e - l) / 2,
                        width: l,
                        height: l
                    }))
                }
            }, {
                key: "setTreeTextRect",
                value: function (e) {
                    var t = e.getAttrObject(),
                        i = t.space,
                        a = t.expandIconSize,
                        o = t.checkIconSize,
                        n = t.iconSize,
                        r = t.showCheckbox,
                        l = t.showIcon,
                        s = t.expandIconPos,
                        h = this.a("treeContentRect"),
                        u = h.x,
                        c = h.y,
                        e = h.height,
                        t = this.a("treeTextWH"),
                        h = t.textWidth,
                        t = t.textHeight;
                    this.a("treeTextRect", {
                        x: u + ("left" === s ? a + i : 0) + (r ? o + i : 0) + (l ? n + i : 0),
                        y: c + e / 2,
                        width: h,
                        height: t
                    })
                }
            }, {
                key: "drawTreeBadge",
                value: function (e, t, i, a, o) {
                    var n = this.a("badges");
                    if (0 !== n.length) {
                        var r = this.getDataModel().getAttrObject(),
                            l = r.badgesVisibleFunc,
                            s = r.expandIconPos,
                            h = r.space,
                            u = r.expandIconSize,
                            c = this.getAttrObject(),
                            d = c.rowRect,
                            g = c.dataInfo,
                            r = c.isLeaf,
                            f = a.badgeFont,
                            v = a.badgeHeight,
                            p = a.badgeSpace,
                            y = a.badgeRadius,
                            c = d.x,
                            a = d.y,
                            x = c + d.width,
                            b = a + (d.height - v) / 2;
                        !1 === r && "fixRight" === s && (x -= h + u + h), e.save(), e.font = f, e.fillStyle = "#777777", e.strokeStyle = "white", e.lineWidth = 1, e.setLineDash([]);
                        for (var m = 0, w = n.length; m < w; m++) {
                            var C = n[m],
                                k = C.text,
                                V = C.textColor,
                                T = C.backColor,
                                I = C.visible,
                                D = Ea(f, k),
                                S = D.width;
                            D.height;
                            S = S + 2 * y;
                            l && !l(g, C, t, i) || !1 === I || (x -= S + p, T && (e.fillStyle = T), e.beginPath(), Po(e, x, b, S, v, y), e.closePath(), Gi(e).call(e), V && (e.fillStyle = V), ht.Default.drawText(e, k, f, V, x, b, S, v, "center", "middle"), o.badgesRect.push({
                                node: this,
                                info: C,
                                badgeRect: {
                                    x: x,
                                    y: b,
                                    width: S,
                                    height: v
                                }
                            }))
                        }
                        e.restore()
                    }
                }
            }, {
                key: "drawTreeToggleIcon",
                value: function (e, t, i, a, o) {
                    var n, r, l, s, h, u, c, d, g, f, v, p, y, x, b;
                    this.a("isLeaf") || (n = a.loading, r = a.close, l = a.open, s = (x = this.getAttrObject()).toggleRect, b = x.toggleIconRect, h = x.expanded, u = x._isLoading, c = x.dataInfo, d = b.x, g = b.y, f = b.width, v = b.height, x = (a = this.getDataModel().getAttrObject()).getOpenIconColor, b = a.getCloseIconColor, a = a.getLoadingIconColor, u ? (p = n.image, y = n.color, a && (y = a(c, t, i))) : h ? (p = r.image, y = r.color, b && (y = b(c, t, i))) : (p = l.image, y = l.color, x && (y = x(c, t, i))), Tl(e, p, "fill", d, g, f, v, t, i, y), o.togglesRect.push({
                        node: this,
                        toggleRect: s
                    }))
                }
            }, {
                key: "drawTreeCheckIcon",
                value: function (e, t, i, a, o) {
                    var n, r, l = a.check,
                        s = a.unCheck,
                        h = a.unCheckAll,
                        u = this.getAttrObject(),
                        c = u.checkRect,
                        d = u._checkStatus,
                        g = u.dataInfo,
                        f = c.x,
                        v = c.y,
                        p = c.width,
                        y = c.height,
                        x = this.getDataModel().getAttrObject(),
                        a = x.getCheckIconColor,
                        u = x.getUnCheckIconColor,
                        x = x.getUnCheckAllIconColor;
                    "check" === d ? (n = l.image, r = l.color, a && (r = a(g, t, i))) : "unCheckAll" === d ? (n = h.image, r = h.color, x && (r = x(g, t, i))) : (n = s.image, r = s.color, u && (r = u(g, t, i))), Tl(e, n, "fill", f, v, p, y, t, i, r), o.checksRect.push({
                        node: this,
                        checkRect: c
                    })
                }
            }, {
                key: "drawTreeIcon",
                value: function (e, t, i, a) {
                    var o, n, r = a.def,
                        l = this.getAttrObject(),
                        s = l.icon,
                        h = l.iconRect,
                        u = l.dataInfo,
                        c = this.getDataModel().a("iconVisibleFunc"),
                        d = h.x,
                        g = h.y,
                        a = h.width,
                        l = h.height,
                        h = this.getDataModel().getAttrObject().getDefaultIconColor;
                    s ? o = Il(s) : (o = r.image, n = r.color), h && (n = h(u, t, i)), c(u, t, i) && Tl(e, o, "fill", d, g, a, l, t, i, n)
                }
            }, {
                key: "drawTreeText",
                value: function (e, t, i, a) {
                    var o = this.getDataModel(),
                        n = this.getTextColor(a),
                        r = this.getAttrObject(),
                        l = r.text,
                        s = r.treeTextRect,
                        h = r.dataInfo,
                        u = r.rowRect,
                        c = o.getAttrObject(),
                        d = c.showIcon,
                        g = c.iconSize,
                        f = c.space,
                        r = c.iconVisibleFunc,
                        c = c.tdFont,
                        v = s.x,
                        p = s.y,
                        s = s.width;
                    d && !r(h, t, i) && (v -= g + f);
                    g = this.a("drawCell"), f = function () {
                        e.save(), e.textBaseline = "middle", n !== a.textColor && (e.fillStyle = n), e.fillText(l, v, p), e.restore()
                    };
                    (g = g || o.a("drawCell")) ? g(e, {
                        x: v,
                        y: u.y,
                        width: s,
                        height: u.height
                    }, h, {
                        textFont: c,
                        textColor: n,
                        defaultDraw: f,
                        data: t,
                        view: i
                    }): f()
                }
            }, {
                key: "drawRowLine",
                value: function (e, t, i) {
                    var a, o, n;
                    t.rowLineWidth && (a = t.rowLineColor, o = t.rowLineWidth, n = i.x, t = i.y, i = i.width, e.save(), e.beginPath(), e.fillStyle = a, e.fillRect(n, t - o, i, o), e.restore())
                }
            }, {
                key: "drawTableCell",
                value: function (n, e) {
                    var r = e.comp,
                        t = e.data,
                        i = e.column,
                        l = e.cellRect,
                        a = e.tdFont,
                        o = e.tdColor,
                        s = e.colIndex,
                        h = e.textHeight,
                        u = e.visibleRowIndex,
                        c = i.key,
                        d = i.format,
                        g = i.align,
                        f = void 0 === g ? "left" : g,
                        v = i.vAlign,
                        p = void 0 === v ? "middle" : v,
                        e = i.drawCell,
                        g = i.isIndex,
                        v = this.a("dataInfo").tableDataSource,
                        y = void 0 === v ? {} : v,
                        x = y[c] || "",
                        c = function () {
                            var e = l.x,
                                t = l.y,
                                i = l.width,
                                a = l.height,
                                o = n.measureText(x).width + 2;
                            "center" === f && (e += (i - o) / 2), "right" === f && (e += i - o), "middle" === p && (t += (a - h) / 2), "bottom" === p && (t += a - h), "function" == typeof d && (x = d.call(r, x, y)), n.fillText(x, e, t)
                        };
                    g && (x = u), e ? e.call(r, n, x, l, {
                        font: a,
                        color: o,
                        column: i,
                        colIndex: s,
                        row: y,
                        rowIndex: this.a("rowIndex"),
                        defaultDraw: c,
                        data: t
                    }) : c()
                }
            }, {
                key: "drawTableRow",
                value: function (e, t) {
                    var i = t.comp,
                        a = t.visibleRowRect,
                        o = t.tdBackground,
                        n = t.drawRow,
                        r = a.x,
                        l = a.y,
                        s = a.width,
                        t = a.height;
                    o && (e.save(), e.fillStyle = o, e.fillRect(r, l, s, t), e.restore()), n && (e.save(), n.call(i, e, this, a), e.restore())
                }
            }, {
                key: "getTextColor",
                value: function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        i = t.bodyColor,
                        a = t.color,
                        o = e.textColor,
                        n = e.hoverTextColor,
                        t = e.selectTextColor,
                        e = this.a("_isHovering");
                    return this.a("selected") && t ? t : e && n ? n : i || a || o
                }
            }, {
                key: "getDeep",
                value: function () {
                    for (var e = 1, t = this; t = t.getParent();) e++;
                    return e
                }
            }, {
                key: "getPreSibling",
                value: function () {
                    var e = this.getDataModel().getSiblings(this).toArray(),
                        t = Ii(e).call(e, this) - 1;
                    return t < 0 ? null : e[t]
                }
            }, {
                key: "getPreVisibleSibling",
                value: function (e) {
                    for (var t = this.getPreSibling(); t && !e(t.a("dataInfo"));) t = t.getPreSibling();
                    return t && e(t.a("dataInfo")) ? t : null
                }
            }, {
                key: "checkAfter",
                value: function () {
                    var t = this.a("checked"),
                        e = this.getChildren();
                    this.a("_checkStatus", t ? "check" : "unCheck"), e.each(function (e) {
                        e.a("checked", t), e.a("_checkStatus", t ? "check" : "unCheck"), e.checkAfter()
                    })
                }
            }, {
                key: "checkBefore",
                value: function () {
                    var e = this.getParent();
                    if (e) {
                        for (var t = e.getChildren().toArray(), i = 0, a = !1, o = 0; o < t.length; o++) t[o].a("checked") && i++, "unCheckAll" === t[o].a("_checkStatus") && (a = !0);
                        i === t.length ? (e.a("checked", !0), e.a("_checkStatus", "check")) : 0 !== i || a ? (e.a("checked", !1), e.a("_checkStatus", "unCheckAll")) : (e.a("checked", !1), e.a("_checkStatus", "unCheck")), e.checkBefore()
                    }
                }
            }]), a
        }(),
        gi = ht.Default,
        Al = gi.getImage,
        Rl = gi.drawBorder,
        _l = gi.containsPoint,
        Pl = gi.isObject,
        Ml = function () {
            g(i, ht.DataModel);
            var t = f(i);

            function i() {
                var e;
                return c(this, i), (e = t.call(this))._attrObject = {}, e
            }
            return d(i, [{
                key: "getAttrObject",
                value: function () {
                    return this._attrObject
                }
            }, {
                key: "a",
                value: function (e, t) {
                    if (2 === arguments.length) this.setAttr(e, t);
                    else {
                        if (!Pl(e)) return this.getAttr(e);
                        for (var i in e) this.setAttr(i, e[i])
                    }
                    return this
                }
            }, {
                key: "setAttr",
                value: function (e, t) {
                    void 0 === t ? delete this._attrObject[e] : this._attrObject[e] = t
                }
            }, {
                key: "getAttr",
                value: function (e) {
                    return this._attrObject[e]
                }
            }, {
                key: "init",
                value: function () {
                    for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, i = 0, a = e.length; i < a; i++) {
                        var o = e[i];
                        if (o) {
                            var n = o._uuid,
                                r = o.expanded,
                                l = o.children;
                            this.tagMap[n] && (n = bo());
                            var s = this.getDataByTag(n);
                            s ? s.init(o) : (o._uuid = n = void 0 === n ? bo() : n, (s = new Ll(o)).setTag(n), this.add(s));
                            var h = s.getParent() === t;
                            if (t && s.setParent(t), s.a("childIndex") === i && h && !this.hierarchyChanged || (this.moveTo(s, i), this.hierarchyChanged = !0), s.a({
                                    dataInfo: o,
                                    rowIndex: ++this.rowIndex,
                                    childIndex: i
                                }), this.tagMap[n] = !0, r && this.init(l, s), i === a - 1) {
                                var u = (t ? t.getChildren() : this.getRoots()).toArray(),
                                    c = u.length;
                                if (a < c)
                                    for (var d = a; d < c; d++) this.remove(u[d])
                            }
                        }
                    }
                    null === t && 0 === e.length && this.clear()
                }
            }, {
                key: "reset",
                value: function (e, t, i) {
                    var a = e.getValue("translateX"),
                        o = e.getValue("translateY"),
                        n = e.getValue("indent"),
                        r = e.getValue("borderWidth"),
                        l = e.getValue("columnLineWidth"),
                        s = e.getValue("rowLineWidth"),
                        h = e.getValue("thHeight"),
                        u = e.getValue("tdHeight"),
                        c = e.getValue("itemHeight"),
                        d = e.getValue("space"),
                        g = e.getValue("iconSize"),
                        f = e.getValue("expandIconSize"),
                        v = e.getValue("checkIconSize"),
                        p = e.getValue("showHead"),
                        y = e.getValue("showLine"),
                        x = e.getValue("showIcon"),
                        b = e.getValue("showCheckbox"),
                        m = e.getValue("columns"),
                        w = e.getValue("thFont"),
                        C = e.getValue("tdFont"),
                        k = e.getValue("treeFont"),
                        V = e.getValue("columnVisibleFunc"),
                        T = e.getValue("headLineDraggable"),
                        I = e.getValue("headDraggable"),
                        D = e.getValue("resizeInteractiveSize"),
                        S = e.getValue("cellPadding"),
                        L = e.getValue("accordion"),
                        A = e.getValue("multiSelect"),
                        R = e.getValue("loadData") || function (e, t) {
                            return t()
                        },
                        _ = e.getValue("onCheck") || function () {},
                        P = e.getValue("handleHover") || function () {},
                        M = e.getValue("onExpand") || function () {},
                        B = e.getValue("onSelect") || function () {},
                        O = e.getValue("onClickBack") || function () {},
                        E = e.getValue("onClickBadge") || function () {},
                        W = e.getValue("selectableFunc") || function () {
                            return !0
                        },
                        H = e.getValue("expandableFunc") || function () {
                            return !0
                        },
                        j = e.getValue("checkableFunc") || function () {
                            return !0
                        },
                        N = e.getValue("onClickCell"),
                        F = e.getValue("onClickHeadCell"),
                        z = e.getValue("expandMode") || "icon",
                        G = e.getValue("selectMode") || "clickRow",
                        X = e.getColor("lineColor"),
                        Y = e.getValue("lineWidth"),
                        U = e.getValue("linePattern"),
                        Z = e.getValue("iconVisibleFunc") || function () {
                            return !0
                        },
                        K = e.getValue("drawCell"),
                        J = e.getValue("badgesVisibleFunc"),
                        q = e.getValue("expandIconPos") || "left",
                        $ = e.getValue("getDefaultIconColor"),
                        Q = e.getValue("getOpenIconColor"),
                        ee = e.getValue("getCloseIconColor"),
                        te = e.getValue("getLoadingIconColor"),
                        ie = e.getValue("getCheckIconColor"),
                        ae = e.getValue("getUnCheckIconColor"),
                        e = e.getValue("getUnCheckAllIconColor");
                    if (this.a({
                            rect: t,
                            translateX: a,
                            translateY: o,
                            indent: n,
                            borderWidth: r,
                            columnLineWidth: void 0 === l ? 0 : l,
                            rowLineWidth: s,
                            thHeight: void 0 === h ? 0 : h,
                            tdHeight: void 0 === u ? c : u,
                            space: d,
                            iconSize: g,
                            expandIconSize: f,
                            checkIconSize: v,
                            showHead: void 0 !== p && p,
                            showLine: y,
                            showIcon: x,
                            showCheckbox: b,
                            tdFont: void 0 === C ? k : C,
                            thFont: w,
                            headLineDraggable: T,
                            headDraggable: I,
                            resizeInteractiveSize: D,
                            cellPadding: S,
                            onClickCell: N,
                            onClickHeadCell: F,
                            accordion: L,
                            multiSelect: A,
                            loadData: R,
                            onCheck: _,
                            handleHover: P,
                            onExpand: M,
                            onSelect: B,
                            onClickBack: O,
                            onClickBadge: E,
                            selectableFunc: W,
                            expandableFunc: H,
                            checkableFunc: j,
                            expandMode: z,
                            selectMode: G,
                            lineColor: X,
                            iconVisibleFunc: Z,
                            drawCell: K,
                            badgesVisibleFunc: J,
                            lineWidth: Y,
                            linePattern: U,
                            expandIconPos: q,
                            getDefaultIconColor: $,
                            getOpenIconColor: Q,
                            getCloseIconColor: ee,
                            getLoadingIconColor: te,
                            getCheckIconColor: ie,
                            getUnCheckIconColor: ae,
                            getUnCheckAllIconColor: e
                        }), this.tagMap = {}, this.hierarchyChanged = !1, this.rowIndex = -1, m) {
                        var oe = [],
                            ne = [];
                        ii(m).call(m, function (e, t) {
                            (V && V(e, t) || !V) && ne.push({
                                column: e,
                                columnIndex: t
                            })
                        }), I && (te = (ee = this.a("dragColumnsInfo") || {}).dragStartColumnIndex, ie = ee.dragEndColumnIndex, void 0 !== te && void 0 !== ie && (ae = ne[te], e = ne[ie], I = ae.columnIndex, ee = e.columnIndex, ne[te] = e, ne[ie] = ae, ae = m[I], m[I] = m[ee], m[ee] = ae, this.a("dragColumnsInfo", void 0))), ii(ne).call(ne, function (e) {
                            e = e.column;
                            return oe.push(e)
                        }), this.a("visibleColumns", oe);
                        var re = Za(oe, t.width - 2 * r - l * (oe.length - 1)),
                            le = [],
                            se = [],
                            he = t.x + a + r,
                            ue = t.y + r;
                        if (this.a("defColWidths", ht.Default.clone(re)), T) {
                            var ce = this.a("dragColumnsLineDiff");
                            if (ce)
                                for (var de in ce)
                                    for (var ge = 0, fe = oe.length; ge < fe; ge++)
                                        if (oe[ge].key == de) {
                                            re[ge] += ce[de];
                                            break
                                        } r = i.dragColumnLineIndex, i = i.dragColumnLineDistance;
                            void 0 !== r && void 0 !== i && (re[r] + i < D ? re[r] = D : re[r] += i)
                        }
                        this.a("colWidths", re), this.a("treeColumnIndex", void 0);
                        for (var ve = 0, pe = oe.length; ve < pe; ve++)
                            if (oe[ve].isTreeColumn) {
                                this.a("treeColumnIndex", ve);
                                break
                            } for (var ye = 0, xe = re.length; ye < xe; ye++) le.push({
                            x: he,
                            y: ue,
                            width: re[ye],
                            height: h
                        }), T && se.push({
                            x: le[ye].x + le[ye].width - D,
                            y: ue,
                            width: l + 2 * D,
                            height: h
                        }), he += l + re[ye];
                        this.a({
                            columnsRect: le,
                            columnLinesRect: se,
                            headRect: {
                                x: t.x,
                                y: t.y,
                                width: t.width,
                                height: h
                            }
                        })
                    }
                }
            }, {
                key: "getTreeIconInfo",
                value: function (e) {
                    var t = e.getValue("openIcon"),
                        i = e.getValue("closeIcon"),
                        a = e.getValue("loadingIcon"),
                        o = e.getValue("defaultIcon"),
                        n = e.getValue("checkIcon"),
                        r = e.getValue("unCheckIcon"),
                        l = e.getValue("unCheckAllIcon");
                    return {
                        open: {
                            image: Al(t || "ht.vector.treeOpenIcon"),
                            color: t ? void 0 : e.getColor("openIconColor")
                        },
                        close: {
                            image: Al(i || "ht.vector.treeCloseIcon"),
                            color: i ? void 0 : e.getColor("closeIconColor")
                        },
                        loading: {
                            image: Al(a || "ht.vector.treeLoadIcon"),
                            color: a ? void 0 : e.getColor("loadingIconColor")
                        },
                        def: {
                            image: Al(o || "ht.vector.treeDefIcon"),
                            color: o ? void 0 : e.getColor("defaultIconColor")
                        },
                        check: {
                            image: Al(n || "ht.vector.treeCheckIcon"),
                            color: n ? void 0 : e.getColor("checkIconColor")
                        },
                        unCheck: {
                            image: Al(r || "ht.vector.treeUnCheckIcon"),
                            color: r ? void 0 : e.getColor("unCheckIconColor")
                        },
                        unCheckAll: {
                            image: Al(l || "ht.vector.treeUnCheckAllIcon"),
                            color: l ? void 0 : e.getColor("unCheckAllIconColor")
                        }
                    }
                }
            }, {
                key: "drawTreeCable",
                value: function (l, e, s) {
                    var t, i, a, o, n, h;
                    "left" === this.a("expandIconPos") && (t = (n = this.getAttrObject()).showIcon, i = n.showCheckbox, a = n.lineColor, o = void 0 === (o = n.lineWidth) ? .5 : o, n = void 0 === (n = n.linePattern) ? [1, 1] : n, h = i ? "checkRect" : t ? "iconRect" : "treeTextRect", l.save(), l.strokeStyle = a, l.setLineDash(n), l.lineWidth = o, l.lineJoin = "miter", ii(e).call(e, function (e) {
                        var t = e.a("isLeaf"),
                            i = ko(e.a(h)).leftMiddle,
                            a = ko(e.a("toggleIconRect")),
                            o = a.rightMiddle,
                            n = a.topMiddle,
                            r = a.middleMiddle;
                        l.beginPath(), t ? l.moveTo(r.x, r.y) : l.moveTo(o.x, o.y), l.lineTo(i.x, i.y);
                        a = e.getPreVisibleSibling(s);
                        a ? (o = a.a("isLeaf"), a = (i = ko(a.a("toggleIconRect"))).bottomMiddle, i = i.middleMiddle, o ? l.moveTo(i.x, i.y) : l.moveTo(a.x, a.y), t ? l.lineTo(r.x, r.y) : l.lineTo(n.x, n.y)) : (e = e.getParent()) && (e = ko(e.a(h)).bottomMiddle, l.moveTo(r.x, e.y), t ? l.lineTo(r.x, r.y) : l.lineTo(n.x, n.y)), l.stroke()
                    }), l.restore())
                }
            }, {
                key: "drawBorder",
                value: function (e, t) {
                    var i = this.a("borderWidth"),
                        a = this.a("rect"),
                        o = a.x,
                        n = a.y,
                        r = a.width,
                        a = a.height;
                    i && (e.save(), Rl(e, t, o, n, r, a, i), e.restore())
                }
            }, {
                key: "drawTableHead",
                value: function (f, e, t) {
                    var v = t.comp,
                        p = t.data,
                        y = t.columnLineColor,
                        x = t.thColor,
                        i = t.thBackground,
                        a = this.getAttrObject(),
                        b = a.rect,
                        m = a.columnLineWidth,
                        w = a.columnsRect,
                        C = a.visibleColumns,
                        k = a.thFont,
                        o = a.thHeight,
                        V = a.showHead,
                        t = a.borderWidth,
                        T = a.cellPadding;
                    f.save(), V && (f.fillStyle = i, f.fillRect(b.x + t, b.y + t, b.width - 2 * t, o));
                    for (var I = e.dragStartColumnIndex, D = e.dragColumnDistance, n = function (i) {
                            var a, o, n, e, t, r, l, s = w[i],
                                h = C[i],
                                u = s.x,
                                c = s.y,
                                d = s.width,
                                g = s.height;
                            f.beginPath(), f.fillStyle = y, f.fillRect(u + d, c, m, b.height), V && (a = h.displayName, l = h.align, o = void 0 === l ? "left" : l, t = h.vAlign, n = void 0 === t ? "middle" : t, e = h.headColor, l = h.color, t = h.drawHeadCell, r = x, e ? r = e : l && (r = l), u += T, d = (d -= 2 * T) < 0 ? 0 : d, f.save(), I !== i && (f.rect(u, c, d, g), f.clip()), l = function () {
                                var e, t;
                                void 0 !== a && (e = (t = Ea(k, a)).width, t = t.height, "center" === o && (u += (d - e) / 2), "right" === o && (u += d - e), "middle" === n && (c += (g - t) / 2), "bottom" === n && (c += g - t), I === i && (u += D, f.save(), f.fillStyle = "rgb(217, 219, 220)", f.fillRect(u, s.y, d, g), f.restore()), f.fillStyle = r, f.font = k, f.fillText(a, u, c))
                            }, t ? t.call(v, f, a, s, {
                                font: k,
                                color: r,
                                visibleColumn: h,
                                index: i,
                                defaultDraw: l,
                                data: p
                            }) : l(), f.restore())
                        }, r = 0, l = w.length; r < l; r++) r !== I && n(r);
                    void 0 !== I && n(I), f.restore()
                }
            }, {
                key: "drawScrollBar",
                value: function (e, t, i, a, o, n, r) {
                    var l = t.getValue("scrollBarWidthAbsolute"),
                        s = t.getValue("scrollBarWidth"),
                        h = t.getValue("autoHideScrollBar"),
                        u = t.getValue("scrollable"),
                        c = t.getValue("scrollBarColor"),
                        d = a.translateX,
                        g = a.translateY,
                        t = a.scrollBarVisible,
                        i = i.getZoom ? i.getZoom() : 1,
                        l = l ? s / i : s,
                        i = o,
                        s = n;
                    o - 2 > r.width && (s = n + l), a && (a.scrollBarInfo = {
                        x: r.x,
                        y: r.y,
                        width: r.width,
                        height: r.height,
                        boundWidth: i,
                        boundHeight: s,
                        absoluteScrollBarWidth: l
                    }, a.autoHideScrollBar = h), u && (u = {
                        x: r.x,
                        y: r.y,
                        width: r.width,
                        height: r.height
                    }, i = {
                        width: i,
                        height: s
                    }, d = {
                        x: d,
                        y: g
                    }, r.height > s && 0 !== g && (i.height = r.height - g), En(e, u, i, d, {
                        visible: !h || t,
                        color: c,
                        gap: 0,
                        barWidth: l
                    }, a || {}))
                }
            }, {
                key: "drawDragColumnLine",
                value: function (e, t) {
                    var i, a, o = t.dragColumnLineRect;
                    o && (i = o.x, a = o.y, t = o.width, o = o.height, e.save(), e.fillStyle = "rgb(49, 141, 251)", e.fillRect(i, a, t, o), e.restore())
                }
            }, {
                key: "onClickBadge",
                value: function (e, t, i) {
                    for (var e = Ie(e, 3), a = e[0], o = e[1], n = e[2], r = this.a("onClickBadge"), l = 0, s = i.length; l < s; l++) {
                        var h = i[l],
                            u = h.node,
                            c = h.info,
                            h = h.badgeRect;
                        if (_l(h, t) && !u.a("disabled")) return r.call(this, a, u.a("dataInfo"), c, o, n), o.iv(), !0
                    }
                    return !1
                }
            }, {
                key: "onClickCheck",
                value: function (e, t, i) {
                    for (var e = Ie(e, 3), a = e[0], o = e[1], n = e[2], e = this.getAttrObject(), r = e.checkableFunc, l = e.onCheck, s = 0, h = i.length; s < h; s++) {
                        var u = i[s],
                            c = u.node,
                            u = u.checkRect;
                        if (_l(u, t) && !c.a("disabled") && r(c.a("dataInfo"), o, n)) return c.a("checked", !c.a("checked")), l.call(this, a, c.a("dataInfo"), c.a("checked"), o, n), c.checkAfter(), c.checkBefore(), o.iv(), !0
                    }
                    return !1
                }
            }, {
                key: "onClickToggle",
                value: function (e, a, o) {
                    for (var n = this, e = Ie(e, 3), r = e[0], l = e[1], s = e[2], e = this.getAttrObject(), h = e.onExpand, u = e.loadData, c = e.expandableFunc, d = e.accordion, t = 0, i = o.length; t < i; t++) {
                        var g = function (e) {
                            var e = o[e],
                                t = e.node,
                                e = e.toggleRect;
                            if (t.a("isLeaf")) return "continue";
                            if (_l(e, a)) {
                                if (t.a("_isLoading")) return {
                                    v: !0
                                };
                                if (!t.a("disabled") && c(t.a("dataInfo"), l, s)) {
                                    d && n.getSiblings(t).each(function (e) {
                                        e !== t && e.a("expanded", !1)
                                    }), t.a("expanded", !t.a("expanded"));
                                    var e = t.getChildren().toArray(),
                                        i = t.a("expanded");
                                    return 0 === e.length && 0 < t.a("children").length ? (n.init(t.a("children"), t), h.call(n, r, t.a("dataInfo"), i, l, s)) : i && 0 === e.length ? new Vl(function (e) {
                                        t.a("_isLoading", !0), u.call(n, t.a("dataInfo"), e)
                                    }).then(function () {
                                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                                        t.a({
                                            _isLoading: !1,
                                            children: e
                                        }), n.init(e, t), h.call(n, r, t.a("dataInfo"), i, l, s), l.iv()
                                    }) : h.call(n, r, t.a("dataInfo"), i, l, s), l.iv(), {
                                        v: !0
                                    }
                                }
                            }
                        }(t);
                        if ("continue" !== g && "object" === Te(g)) return g.v
                    }
                    return !1
                }
            }, {
                key: "onClickVisibleRow",
                value: function (e, u, c, d) {
                    for (var g = this, e = Ie(e, 3), f = e[0], v = e[1], p = e[2], e = this.getAttrObject(), y = e.selectableFunc, x = e.multiSelect, b = e.onSelect, t = 0, i = c.length; t < i; t++) {
                        var a = function (e) {
                            var e = c[e],
                                a = e.node,
                                e = e.visibleRowRect;
                            if (_l(e, u)) {
                                if (!a.a("disabled") && y(a.a("dataInfo"), v, p)) {
                                    var e = g.toDatas(function (e) {
                                            return e.a("selected")
                                        }).toArray(),
                                        o = [];
                                    ii(e).call(e, function (e) {
                                        var t = e.a("_uuid"),
                                            i = e.a("text");
                                        o.push({
                                            _uuid: t,
                                            text: i
                                        }), x || e === a || e.a("selected", !1)
                                    }), d.selectedInfos = o, x ? a.a("selected", !a.a("selected")) : a.a("selected") || a.a("selected", !0), b.call(g, f, a.a("dataInfo"), a.a("selected"), v, p);
                                    var t = g.a("onClickCell"),
                                        i = a.a("cellsRect");
                                    if (t && i && 0 < i.length)
                                        for (var n, r, l, s = 0, h = i.length; s < h; s++) _l(i[s], u) && (n = g.a("visibleColumns"), l = (r = void 0 === (l = a.a("dataInfo").tableDataSource) ? {} : l)[n[s].key] || "", t(f, 0 === s ? a.a("text") : l, r, n, a.a("rowIndex"), s, v, p));
                                    v.iv()
                                }
                                return {
                                    v: !0
                                }
                            }
                        }(t);
                        if ("object" === Te(a)) return a.v
                    }
                    return !1
                }
            }, {
                key: "onClickBack",
                value: function (e) {
                    var t, i = Ie(e, 3),
                        a = i[0],
                        e = i[1],
                        i = i[2];
                    (t = this.a("onClickBack")) && t(a, e, i)
                }
            }, {
                key: "onClickHeadCell",
                value: function (e, t) {
                    var e = Ie(e, 3),
                        i = e[0],
                        a = e[1],
                        o = e[2],
                        e = this.getAttrObject(),
                        n = e.columnsRect,
                        r = e.onClickHeadCell,
                        l = e.visibleColumns;
                    if (r)
                        for (var s = 0, h = n.length; s < h; s++)
                            if (_l(n[s], t)) return r(i, l[s], s, a, o), !0;
                    return !1
                }
            }, {
                key: "onHoverRow",
                value: function (e, t, i, a, o) {
                    for (var e = Ie(e, 3), n = e[0], r = e[1], l = e[2], s = 0, h = i.length, u = this.a("selectableFunc"), c = this.a("handleHover"); s < h; s++) {
                        var d = i[s],
                            g = d.node,
                            d = d.visibleRowRect;
                        if (_l(d, t) && (c && c.call(this, n, g ? g.a("dataInfo") : {}, r, l), u(g.a("dataInfo"), r, l))) {
                            a !== g && (a && a.a("_isHovering", !1), o.preHoverNode = g), g.a("disabled") ? (Qa(l, "not-allowed"), a !== g && r.iv()) : g.a("_isHovering") || (Qa(l, "default"), g.a("_isHovering", !0), r.iv());
                            break
                        }
                    }
                    s === h && a && (Qa(l, "default"), a.a("_isHovering", !1), delete o.preHoverNode, r.iv())
                }
            }]), i
        }(),
        Bl = ht.Default.intersectsRect;
    var Ol = ht.Default.intersectsRect;
    var gr = ht.Default,
        El = gr.drawText,
        Wl = gr.drawStretchImage,
        Hl = gr.getImage;
    gr.darker;

    function jl(e, t, i, a, o) {
        var n = t.x,
            r = t.y,
            l = t.width;
        r += t.height, e.strokeStyle = o, e.beginPath(), a === ra ? (e.moveTo(n + l, r), e.lineTo(n + l - i, r)) : a === sa ? (e.moveTo(n + (l - i) / 2, r), e.lineTo(n + (l + i) / 2, r)) : (e.moveTo(n, r), e.lineTo(n + i, r)), e.stroke()
    }
    var Nl = {};

    function Fl(e, t, i, a) {
        for (var o = [], n = 0, r = Ea(i, "图"), l = r.height / 3, s = 1, h = e.length; s <= h; s++) t < (l += r.height + a) && (n = s - 1 === n ? (o.push(e.substring(n, s)), s) : (o.push(e.substring(n, s - 1)), s - 1), l = r.height / 3);
        return n !== s - 1 && o.push(e.substring(n, s)), o
    }

    function zl(e, t, i, a, o, n) {
        return t ? n : Xl === e ? a || i : e === Yl && o || i
    }

    function Gl(e, t) {
        return 0 === e && 1 === t ? 3 : 0 === e ? 0 : e === t - 1 ? 2 : 1
    }
    var Xl, Yl, Ul = ht.Default.drawText;
    var Zl = T.map,
        me = We("map");
    ue({
        target: "Array",
        proto: !0,
        forced: !me
    }, {
        map: function (e) {
            return Zl(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Kl = J("Array").map,
        Jl = Array.prototype,
        ql = function (e) {
            var t = e.map;
            return e === Jl || e instanceof Array && t === Jl.map ? Kl : t
        };

    function $l(e, t, i, a) {
        for (var o = e, n = 0; o < t;) {
            n++;
            for (var o = e, r = 0; r < n; r++) o += 2 * i + 2 * e * (a + (1 - a) * r / n)
        }
        return n
    }

    function Ql(e, t, i, a, o, n, r, l, s, h, u, c) {
        var d, g = t.x,
            f = t.y,
            v = t.width,
            t = t.height;
        i !== Ta && i !== Ia && (e.beginPath(), Po(e, g, f, v, t, r), e.closePath(), n && l && (e.strokeStyle = n, e.lineWidth = l, e.stroke()), s && (e.fillStyle = s, Gi(e).call(e))), (d = 0 <= Ii(is).call(is, i) ? i === Ta || i === Ia ? h.hover ? wo(ts + (i === Ta ? Da : Sa).toLowerCase()) : wo("ht.vector.pagination.ellipsis") : wo(ts + i.toLowerCase()) : d) ? co(e, d, "uniform", g, f, v, t, u, c, o) : uo(e, i, a, o, g, f, v, t, sa, ha)
    }

    function es(e, t, i, a, o, n) {
        var r = e.active,
            l = e.disabled,
            e = e.hover;
        return l && r ? n : l ? o : e ? i : r ? a : t
    }
    var ts = "ht.vector.pagination.",
        is = [ka, Va, Sa, Da, Ta, Ia];

    function as(e) {
        this.mode = ss.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
        for (var t = 0, i = this.data.length; t < i; t++) {
            var a = [],
                o = this.data.charCodeAt(t);
            65536 < o ? (a[0] = 240 | (1835008 & o) >>> 18, a[1] = 128 | (258048 & o) >>> 12, a[2] = 128 | (4032 & o) >>> 6, a[3] = 128 | 63 & o) : 2048 < o ? (a[0] = 224 | (61440 & o) >>> 12, a[1] = 128 | (4032 & o) >>> 6, a[2] = 128 | 63 & o) : 128 < o ? (a[0] = 192 | (1984 & o) >>> 6, a[1] = 128 | 63 & o) : a[0] = o, this.parsedData.push(a)
        }
        this.parsedData = Ni(Array.prototype).apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
    }

    function os(e, t) {
        this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
    }

    function ns(e, t) {
        if (null == e.length) throw new Error(e.length + "/" + t);
        for (var i = 0; i < e.length && 0 == e[i];) i++;
        this.num = new Array(e.length - i + t);
        for (var a = 0; a < e.length - i; a++) this.num[a] = e[a + i]
    }

    function rs(e, t) {
        this.totalCount = e, this.dataCount = t
    }

    function ls() {
        this.buffer = [], this.length = 0
    }
    as.prototype = {
        getLength: function (e) {
            return this.parsedData.length
        },
        write: function (e) {
            for (var t = 0, i = this.parsedData.length; t < i; t++) e.put(this.parsedData[t], 8)
        }
    }, os.prototype = {
        addData: function (e) {
            e = new as(e);
            this.dataList.push(e), this.dataCache = null
        },
        isDark: function (e, t) {
            if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
            return this.modules[e][t]
        },
        getModuleCount: function () {
            return this.moduleCount
        },
        make: function () {
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function (e, t) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = new Array(this.moduleCount);
                for (var a = 0; a < this.moduleCount; a++) this.modules[i][a] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), 7 <= this.typeNumber && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = os.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
        },
        setupPositionProbePattern: function (e, t) {
            for (var i = -1; i <= 7; i++)
                if (!(e + i <= -1 || this.moduleCount <= e + i))
                    for (var a = -1; a <= 7; a++) t + a <= -1 || this.moduleCount <= t + a || (this.modules[e + i][t + a] = 0 <= i && i <= 6 && (0 == a || 6 == a) || 0 <= a && a <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= a && a <= 4)
        },
        getBestMaskPattern: function () {
            for (var e = 0, t = 0, i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var a = xs.getLostPoint(this);
                (0 == i || a < e) && (e = a, t = i)
            }
            return t
        },
        createMovieClip: function (e, t, i) {
            var a = e.createEmptyMovieClip(t, i);
            this.make();
            for (var o = 0; o < this.modules.length; o++)
                for (var n = +o, r = 0; r < this.modules[o].length; r++) {
                    var l = +r;
                    this.modules[o][r] && (a.beginFill(0, 100), a.moveTo(l, n), a.lineTo(1 + l, n), a.lineTo(1 + l, 1 + n), a.lineTo(l, 1 + n), a.endFill())
                }
            return a
        },
        setupTimingPattern: function () {
            for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
            for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
        },
        setupPositionAdjustPattern: function () {
            for (var e = xs.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                for (var i = 0; i < e.length; i++) {
                    var a = e[t],
                        o = e[i];
                    if (null == this.modules[a][o])
                        for (var n = -2; n <= 2; n++)
                            for (var r = -2; r <= 2; r++) this.modules[a + n][o + r] = -2 == n || 2 == n || -2 == r || 2 == r || 0 == n && 0 == r
                }
        },
        setupTypeNumber: function (e) {
            for (var t = xs.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
                var a = !e && 1 == (t >> i & 1);
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = a
            }
            for (i = 0; i < 18; i++) {
                a = !e && 1 == (t >> i & 1);
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = a
            }
        },
        setupTypeInfo: function (e, t) {
            for (var t = this.errorCorrectLevel << 3 | t, i = xs.getBCHTypeInfo(t), a = 0; a < 15; a++) {
                var o = !e && 1 == (i >> a & 1);
                a < 6 ? this.modules[a][8] = o : a < 8 ? this.modules[a + 1][8] = o : this.modules[this.moduleCount - 15 + a][8] = o
            }
            for (a = 0; a < 15; a++) {
                o = !e && 1 == (i >> a & 1);
                a < 8 ? this.modules[8][this.moduleCount - a - 1] = o : a < 9 ? this.modules[8][15 - a - 1 + 1] = o : this.modules[8][15 - a - 1] = o
            }
            this.modules[this.moduleCount - 8][8] = !e
        },
        mapData: function (e, t) {
            for (var i = -1, a = this.moduleCount - 1, o = 7, n = 0, r = this.moduleCount - 1; 0 < r; r -= 2)
                for (6 == r && r--;;) {
                    for (var l, s, h = 0; h < 2; h++) null == this.modules[a][r - h] && (l = !1, n < e.length && (l = 1 == (e[n] >>> o & 1)), s = xs.getMask(t, a, r - h), this.modules[a][r - h] = l = s ? !l : l, -1 == --o && (n++, o = 7));
                    if ((a += i) < 0 || this.moduleCount <= a) {
                        a -= i, i = -i;
                        break
                    }
                }
        }
    }, os.PAD0 = 236, os.PAD1 = 17, os.createData = function (e, t, i) {
        for (var a = rs.getRSBlocks(e, t), o = new ls, n = 0; n < i.length; n++) {
            var r = i[n];
            o.put(r.mode, 4), o.put(r.getLength(), xs.getLengthInBits(r.mode, e)), r.write(o)
        }
        for (var l = 0, n = 0; n < a.length; n++) l += a[n].dataCount;
        if (o.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * l + ")");
        for (o.getLengthInBits() + 4 <= 8 * l && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(!1);
        for (; !(o.getLengthInBits() >= 8 * l) && (o.put(os.PAD0, 8), !(o.getLengthInBits() >= 8 * l));) o.put(os.PAD1, 8);
        return os.createBytes(o, a)
    }, os.createBytes = function (e, t) {
        for (var i = 0, a = 0, o = 0, n = new Array(t.length), r = new Array(t.length), l = 0; l < t.length; l++) {
            var s = t[l].dataCount,
                h = t[l].totalCount - s,
                a = Math.max(a, s),
                o = Math.max(o, h);
            n[l] = new Array(s);
            for (var u = 0; u < n[l].length; u++) n[l][u] = 255 & e.buffer[u + i];
            i += s;
            var h = xs.getErrorCorrectPolynomial(h),
                c = new ns(n[l], h.getLength() - 1).mod(h);
            r[l] = new Array(h.getLength() - 1);
            for (u = 0; u < r[l].length; u++) {
                var d = u + c.getLength() - r[l].length;
                r[l][u] = 0 <= d ? c.get(d) : 0
            }
        }
        for (var g = 0, u = 0; u < t.length; u++) g += t[u].totalCount;
        for (var f = new Array(g), v = 0, u = 0; u < a; u++)
            for (l = 0; l < t.length; l++) u < n[l].length && (f[v++] = n[l][u]);
        for (u = 0; u < o; u++)
            for (l = 0; l < t.length; l++) u < r[l].length && (f[v++] = r[l][u]);
        return f
    };
    for (var ss = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }, hs = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }, us = 0, cs = 1, ds = 2, gs = 3, fs = 4, vs = 5, ps = 6, ys = 7, xs = {
            PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170]
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (e) {
                for (var t = e << 10; 0 <= xs.getBCHDigit(t) - xs.getBCHDigit(xs.G15);) t ^= xs.G15 << xs.getBCHDigit(t) - xs.getBCHDigit(xs.G15);
                return (e << 10 | t) ^ xs.G15_MASK
            },
            getBCHTypeNumber: function (e) {
                for (var t = e << 12; 0 <= xs.getBCHDigit(t) - xs.getBCHDigit(xs.G18);) t ^= xs.G18 << xs.getBCHDigit(t) - xs.getBCHDigit(xs.G18);
                return e << 12 | t
            },
            getBCHDigit: function (e) {
                for (var t = 0; 0 != e;) t++, e >>>= 1;
                return t
            },
            getPatternPosition: function (e) {
                return xs.PATTERN_POSITION_TABLE[e - 1]
            },
            getMask: function (e, t, i) {
                switch (e) {
                    case us:
                        return (t + i) % 2 == 0;
                    case cs:
                        return t % 2 == 0;
                    case ds:
                        return i % 3 == 0;
                    case gs:
                        return (t + i) % 3 == 0;
                    case fs:
                        return (Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0;
                    case vs:
                        return t * i % 2 + t * i % 3 == 0;
                    case ps:
                        return (t * i % 2 + t * i % 3) % 2 == 0;
                    case ys:
                        return (t * i % 3 + (t + i) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + e)
                }
            },
            getErrorCorrectPolynomial: function (e) {
                for (var t = new ns([1], 0), i = 0; i < e; i++) t = t.multiply(new ns([1, bs.gexp(i)], 0));
                return t
            },
            getLengthInBits: function (e, t) {
                if (1 <= t && t < 10) switch (e) {
                    case ss.MODE_NUMBER:
                        return 10;
                    case ss.MODE_ALPHA_NUM:
                        return 9;
                    case ss.MODE_8BIT_BYTE:
                    case ss.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + e)
                } else if (t < 27) switch (e) {
                    case ss.MODE_NUMBER:
                        return 12;
                    case ss.MODE_ALPHA_NUM:
                        return 11;
                    case ss.MODE_8BIT_BYTE:
                        return 16;
                    case ss.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + e)
                } else {
                    if (!(t < 41)) throw new Error("type:" + t);
                    switch (e) {
                        case ss.MODE_NUMBER:
                            return 14;
                        case ss.MODE_ALPHA_NUM:
                            return 13;
                        case ss.MODE_8BIT_BYTE:
                            return 16;
                        case ss.MODE_KANJI:
                            return 12;
                        default:
                            throw new Error("mode:" + e)
                    }
                }
            },
            getLostPoint: function (e) {
                for (var t = e.getModuleCount(), i = 0, a = 0; a < t; a++)
                    for (var o = 0; o < t; o++) {
                        for (var n = 0, r = e.isDark(a, o), l = -1; l <= 1; l++)
                            if (!(a + l < 0 || t <= a + l))
                                for (var s = -1; s <= 1; s++) o + s < 0 || t <= o + s || 0 == l && 0 == s || r == e.isDark(a + l, o + s) && n++;
                        5 < n && (i += 3 + n - 5)
                    }
                for (a = 0; a < t - 1; a++)
                    for (o = 0; o < t - 1; o++) {
                        var h = 0;
                        e.isDark(a, o) && h++, e.isDark(a + 1, o) && h++, e.isDark(a, o + 1) && h++, e.isDark(a + 1, o + 1) && h++, 0 != h && 4 != h || (i += 3)
                    }
                for (a = 0; a < t; a++)
                    for (o = 0; o < t - 6; o++) e.isDark(a, o) && !e.isDark(a, o + 1) && e.isDark(a, o + 2) && e.isDark(a, o + 3) && e.isDark(a, o + 4) && !e.isDark(a, o + 5) && e.isDark(a, o + 6) && (i += 40);
                for (o = 0; o < t; o++)
                    for (a = 0; a < t - 6; a++) e.isDark(a, o) && !e.isDark(a + 1, o) && e.isDark(a + 2, o) && e.isDark(a + 3, o) && e.isDark(a + 4, o) && !e.isDark(a + 5, o) && e.isDark(a + 6, o) && (i += 40);
                for (var u = 0, o = 0; o < t; o++)
                    for (a = 0; a < t; a++) e.isDark(a, o) && u++;
                return i += 10 * (Math.abs(100 * u / t / t - 50) / 5)
            }
        }, bs = {
            glog: function (e) {
                if (e < 1) throw new Error("glog(" + e + ")");
                return bs.LOG_TABLE[e]
            },
            gexp: function (e) {
                for (; e < 0;) e += 255;
                for (; 256 <= e;) e -= 255;
                return bs.EXP_TABLE[e]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, ms = 0; ms < 8; ms++) bs.EXP_TABLE[ms] = 1 << ms;
    for (ms = 8; ms < 256; ms++) bs.EXP_TABLE[ms] = bs.EXP_TABLE[ms - 4] ^ bs.EXP_TABLE[ms - 5] ^ bs.EXP_TABLE[ms - 6] ^ bs.EXP_TABLE[ms - 8];
    for (ms = 0; ms < 255; ms++) bs.LOG_TABLE[bs.EXP_TABLE[ms]] = ms;
    ns.prototype = {
        get: function (e) {
            return this.num[e]
        },
        getLength: function () {
            return this.num.length
        },
        multiply: function (e) {
            for (var t = new Array(this.getLength() + e.getLength() - 1), i = 0; i < this.getLength(); i++)
                for (var a = 0; a < e.getLength(); a++) t[i + a] ^= bs.gexp(bs.glog(this.get(i)) + bs.glog(e.get(a)));
            return new ns(t, 0)
        },
        mod: function (e) {
            if (this.getLength() - e.getLength() < 0) return this;
            for (var t = bs.glog(this.get(0)) - bs.glog(e.get(0)), i = new Array(this.getLength()), a = 0; a < this.getLength(); a++) i[a] = this.get(a);
            for (a = 0; a < e.getLength(); a++) i[a] ^= bs.gexp(bs.glog(e.get(a)) + t);
            return new ns(i, 0).mod(e)
        }
    }, rs.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], rs.getRSBlocks = function (e, t) {
        var i = rs.getRsBlockTable(e, t);
        if (null == i) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
        for (var a = i.length / 3, o = [], n = 0; n < a; n++)
            for (var r = i[3 * n + 0], l = i[3 * n + 1], s = i[3 * n + 2], h = 0; h < r; h++) o.push(new rs(l, s));
        return o
    }, rs.getRsBlockTable = function (e, t) {
        switch (t) {
            case hs.L:
                return rs.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case hs.M:
                return rs.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case hs.Q:
                return rs.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case hs.H:
                return rs.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
                return
        }
    }, ls.prototype = {
        get: function (e) {
            var t = Math.floor(e / 8);
            return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
        },
        put: function (e, t) {
            for (var i = 0; i < t; i++) this.putBit(1 == (e >>> t - i - 1 & 1))
        },
        getLengthInBits: function () {
            return this.length
        },
        putBit: function (e) {
            var t = Math.floor(this.length / 8);
            this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
        }
    };
    var ws = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273]
    ];

    function Cs(e, t) {
        for (var i, a = 1, o = (i = e, (e = encodeURI(i).toString().replace(/\%[0-9a-fA-F]{2}/g, "a")).length + (e.length != i ? 3 : 0)), n = 0, r = ws.length; n <= r; n++) {
            var l = 0;
            switch (t) {
                case hs.L:
                    l = ws[n][0];
                    break;
                case hs.M:
                    l = ws[n][1];
                    break;
                case hs.Q:
                    l = ws[n][2];
                    break;
                case hs.H:
                    l = ws[n][3]
            }
            if (o <= l) break;
            a++
        }
        if (a > ws.length) throw new Error("Too long data");
        return a
    }
    document.documentElement.tagName.toLowerCase();
    var ks = function () {
            g(a, os);
            var i = f(a);

            function a(e) {
                var t;
                return c(this, a), (t = i.call(this, Cs(e, hs.H), hs.H)).addData(e), t.make(), t
            }
            return a
        }(),
        Vs = {};
    var Ts = function (h) {
            return function (e, t, i, a) {
                le(t);
                var o = E(e),
                    n = m(o),
                    r = qe(o.length),
                    l = h ? r - 1 : 0,
                    s = h ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (l in n) {
                            a = n[l], l += s;
                            break
                        }
                        if (l += s, h ? l < 0 : r <= l) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; h ? 0 <= l : l < r; l += s) l in n && (a = t(a, n[l], l, o));
                return a
            }
        },
        Is = {
            left: Ts(!1),
            right: Ts(!0)
        }.left,
        Ds = e("reduce");
    ue({
        target: "Array",
        proto: !0,
        forced: !Ds || !br && 79 < je && je < 83
    }, {
        reduce: function (e) {
            return Is(this, e, arguments.length, 1 < arguments.length ? arguments[1] : void 0)
        }
    });
    var Ss = J("Array").reduce,
        Ls = Array.prototype,
        As = function (e) {
            var t = e.reduce;
            return e === Ls || e instanceof Array && t === Ls.reduce ? Ss : t
        },
        Rs = function () {
            g(o, ht.Data);
            var a = f(o);

            function o(e, t) {
                var i;
                return c(this, o), (i = a.call(this)).init(e, t), i
            }
            return d(o, [{
                key: "init",
                value: function (e, t) {
                    var i = e.getAttrObject(),
                        a = i.dataSource,
                        o = i.color,
                        n = i.total,
                        e = a[t],
                        i = e.name,
                        a = e.value,
                        a = void 0 === a ? 0 : a,
                        e = e.color;
                    this.a({
                        name: void 0 === i ? "" : i,
                        value: a,
                        percent: a / n,
                        color: void 0 === e ? o[t] : e
                    })
                }
            }, {
                key: "initNodeRect",
                value: function (e) {
                    var t = this.getDataModel();
                    this._initItemRect(t, e), this._initDragIconRect(t)
                }
            }, {
                key: "_initItemRect",
                value: function (e, t) {
                    var i = e.getAttrObject(),
                        a = i.rect,
                        o = i.barWidth,
                        n = i.padding,
                        r = i.totalWidth,
                        l = this.getAttrObject().percent,
                        e = a.x,
                        i = a.y,
                        a = a.height,
                        t = t ? t.a("itemRect") : null;
                    this.a("itemRect", {
                        x: t ? t.x + t.width : e + n,
                        y: i + (a - o) / 2,
                        width: l * r,
                        height: o
                    })
                }
            }, {
                key: "_initDragIconRect",
                value: function (e) {
                    var t = e.getAttrObject(),
                        i = t.rect,
                        a = t.sliderWidth,
                        o = t.sliderHeight,
                        n = t.sliderOffsetX,
                        r = t.sliderOffsetY,
                        l = this.getAttrObject().itemRect,
                        e = i.y,
                        t = i.height,
                        i = l.x,
                        l = l.width;
                    this.a("dragIconRect", {
                        x: i + l - a / 2 + n,
                        y: e + (t - o) / 2 + r,
                        width: a,
                        height: o
                    })
                }
            }]), o
        }(),
        _s = function () {
            g(t, ht.DataModel);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "init",
                value: function () {
                    for (var e = this.a("dataSource"), t = 0, i = e.length; t < i; t++) {
                        var a, o, n = e[t];
                        n && (a = n._uuid, this.tagMap[a] && (a = bo()), (o = this.getDataByTag(a)) ? o.init(this, t) : (n._uuid = a = void 0 === a ? bo() : a, (o = new Rs(this, t)).setTag(a), this.add(o)), o.a("index") === t && !this.hierarchyChanged || (this.moveTo(o, t), this.hierarchyChanged = !0), o.a({
                            dataInfo: n,
                            index: t
                        }), this.tagMap[a] = !0)
                    }
                    for (var r = this.getDatas().toArray(), l = r.length - 1; 0 <= l; l--) this.tagMap[r[l].getTag()] || this.remove(r[l])
                }
            }, {
                key: "reset",
                value: function (e, t) {
                    var i = e.dataSource,
                        a = e.total,
                        o = e.padding;
                    this.a(e), this.a({
                        rect: t,
                        totalWidth: t.width - 2 * o,
                        leftValue: a - As(i).call(i, function (e, t) {
                            return e + (t.value || 0)
                        }, 0)
                    }), this.tagMap = {}, this.hierarchyChanged = !1
                }
            }]), t
        }(),
        Fe = ht.Default,
        Ps = Fe.drawRoundRect,
        Ms = Fe.getImage,
        Bs = Fe.drawStretchImage;
    var Os = Math.max;

    function Es(e, t, i, a, o, n, r) {
        a && (a.editing = !1, delete a.dom), o && (a = Pi(i.value), qa(r) || (a = Math.min(a, r)), qa(n) || (a = Math.max(a, n)), e.a(o, a)), e.iv(), Ra(i)
    }
    var Ws = function () {
            function e() {
                c(this, e)
            }
            return d(e, [{
                key: "onClick",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onDoubleClick",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onDown",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onUp",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onHover",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {}
            }]), e
        }(),
        q = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    Qa(i, "default")
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.rects;
                    r.dataSource;
                    e = function (e, t) {
                        for (var i = e.length, a = 0; a < i; a++)
                            if (Bo(e[a], t)) return a
                    }(l, no(i, t, this, a, e));
                    Qa(i, _o(e) ? "pointer" : "default"), r.hitIndex = e
                }
            }, {
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        i = r.hitIndex,
                        r = r.dataSource;
                    _o(i) && (!1 === (i = r[i]).visible ? i.visible = !0 : i.visible = !1, t.iv())
                }
            }]), t
        }(),
        Hs = new(function () {
            function e() {
                c(this, e), (this._container = document.createElement("div")).className = "ht-vector-tooltip"
            }
            return d(e, [{
                key: "show",
                value: function (e, t) {
                    if ("number" == typeof e && (e += ""), "string" == typeof e) this._container.innerHTML = e;
                    else if (e.parentNode !== this._container) {
                        for (var i = this._container.children, a = i.length - 1; 0 <= a; a--) Ra(i[a]);
                        this._container.innerText = "", this._container.appendChild(e)
                    }
                    this._container.parentNode || _a(this._container), this.update(t)
                }
            }, {
                key: "update",
                value: function (e) {
                    var t = Vo(this._container),
                        i = ht.Default.getWindowInfo(),
                        a = this._container.style,
                        o = Pa(e),
                        n = o.x + 8,
                        r = o.y + 8;
                    a.pointerEvents = "none", Ma(e) ? (n = o.x - t.width - 8, r = o.y - t.height - 8) : (n = Math.max(0, n), r = Math.max(0, r), n + t.width > i.width && (n = i.width - t.width), r + t.height > i.height && (r = i.height - t.height)), this._container.style.left = n + "px", this._container.style.top = r + "px"
                }
            }, {
                key: "hide",
                value: function () {
                    Ra(this._container)
                }
            }]), e
        }()),
        js = ht.Default.containsPoint,
        ki = function () {
            g(u, Ws);
            var e = f(u);

            function u() {
                return c(this, u), e.call(this)
            }
            return d(u, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        l = Lo(i, t, this),
                        s = l.rectInfo,
                        h = l.dragSliderDataModel,
                        a = l.dragInfo,
                        t = h.getAttrObject(),
                        l = t.toolTipFormat,
                        h = t.showToolTip,
                        t = u.getLpInDragIconsRectInfo(r, s.dragIconsRect).dragSliderData;
                    (t = void 0 === t && a ? a.dragNode : t) ? (Qa(i, "ew-resize"), h && (s = (r = t.getAttrObject()).name, a = r.value, t = r.percent, r = "名称:" + s + "<br>数值:" + a + "<br>百分比:" + Math.floor(100 * t) / 100, Hs.show(l ? l(s, a, t) : r, e))) : (Qa(i, "default"), h && Hs.hide())
                }
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    Hs.hide()
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        a = Lo(i, t, this),
                        e = a.rectInfo.dragIconsRect,
                        i = u.getLpInDragIconsRectInfo(r, e),
                        t = i.dragSliderData,
                        i = i.index;
                    t && (a.dragInfo = {
                        dragNode: t,
                        dragNodeStartValue: t.a("value"),
                        dragStartX: r.x
                    }, (i = e[i + 1]) && (a.dragInfo.dragNextNode = i.dragSliderData, a.dragInfo.dragNextNodeStartValue = i.dragSliderData.a("value")))
                }
            }, {
                key: "onDrag",
                value: function (e, i, a, t, o, n) {
                    var r, l, s, h, u, c, d, g, f, v, p = no(a, i, this, t, e),
                        y = Lo(a, i, this),
                        t = y.dragSliderDataModel,
                        e = y.dragInfo;
                    !y._dragSliderTimer && t && e && (r = e.dragNode, l = e.dragNodeStartValue, s = e.dragStartX, h = e.dragNextNode, u = e.dragNextNodeStartValue, e = t.getAttrObject(), c = e.total, d = e.totalWidth, g = e.step, t = e.leftValue, f = e.onChange, v = u || t, y._dragSliderTimer = ci(function () {
                        var e = (p.x - s) / d,
                            t = c * e,
                            e = t % g,
                            e = Math.floor(t / g) * g + (g / 2 <= e ? g : 0);
                        0 <= e + l && e <= v && (r.a("dataInfo").value = l + e, h && (h.a("dataInfo").value = u - e), "function" == typeof f && (e = [r.a("dataInfo")], h && e.push(h.a("dataInfo")), f(e, i, a)), i.iv()), delete y._dragSliderTimer
                    }, 10))
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    t._dragSliderTimer && (clearInterval(t._dragSliderTimer), delete t._dragSliderTimer), delete t.dragInfo
                }
            }], [{
                key: "getLpInDragIconsRectInfo",
                value: function (e, t) {
                    for (var i = t.length - 1; 0 <= i; i--) {
                        var a = t[i],
                            o = a.dragSliderData,
                            a = a.dragIconRect;
                        if (js(a, e)) return {
                            dragSliderData: o,
                            dragIconRect: a,
                            index: i
                        }
                    }
                    return {}
                }
            }]), u
        }(),
        Q = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    t.defaultCursor = i.getView().style.cursor, t.disabled ? Qa(i, "not-allowed") : Qa(i, "text")
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    Qa(i, t.defaultCursor)
                }
            }, {
                key: "onDown",
                value: function (e, o, n, t, i, a) {
                    var r, l, s, h, u, c, d, g, f, v, p, y, x, b, m, w, C, k, V, T, I, D = Lo(n, o, this);
                    D.disabled || D.editing || (r = D.font, l = D.value, s = D.textAlign, h = D.maxLength, u = D.textColor, c = D.wordBreak, d = D.selectTextOnFocus, C = D.padding, g = D.onKeyDown, f = D.onKeyUp, v = D.onChange, p = D.lineHeight, x = (y = Qi("textarea")).style, b = Ao(this, "value", o), m = (k = Ie($i(C), 4))[0], w = k[1], C = k[2], k = k[3], x.color = u, x.font = r, x.paddingTop = m + "px", x.paddingRight = w + "px", x.paddingBottom = C + "px", x.paddingLeft = 2 + k + "px", x.textAlign = s, x.resize = "none", x.overflow = "hidden", x.lineHeight = p + "px", x.wordBreak = c ? "break-all" : "keep-word", y.value = l || "", h && y.setAttribute("maxlength", h), n.appendHTML(y), (V = So(n, o, this, e)) && ea(n, y, V), D.editing = !0, D.editingValue = l, D.inputDOM = y, o.iv(), T = function (e) {
                        ea(n, y, V)
                    }, D.handleWindowClick = I = function e(t) {
                        var i = Vo(y),
                            a = ht.Default.getClientPoint(t);
                        ht.Default.containsPoint(i, a) || (t.preventDefault(), Ja(o, 0, y, D, b), n.ump(T), n.getView().removeEventListener("mousedown", e), n.getView().removeEventListener("touchstart", e))
                    }, ci(function () {
                        d && y.addEventListener("focus", function (e) {
                            y.select()
                        }), y.focus(), n.mp(T);
                        var t = null;
                        y.addEventListener("keydown", function (e) {
                            t && clearTimeout(t), t = ci(function () {
                                D.editingValue = y.value, o.a(b, y.value)
                            }, 10), 9 === e.keyCode && (Ja(o, 0, y, D, b), n.getView().removeEventListener("mousedown", I), n.getView().removeEventListener("touchstart", I)), g && g(e, o, n)
                        }), (f || v) && (y.addEventListener("keyup", function (e) {
                            f && f(e, o, n), Aa && v && v(y.value, o, n)
                        }), Aa || y.addEventListener("input", function (e) {
                            v && v(y.value, o, n)
                        })), n.getView().addEventListener("mousedown", I), n.getView().addEventListener("touchstart", I)
                    }, 1))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = Ao(this, "value", t);
                    r.editing && r.inputDOM && (Ja(t, 0, r.inputDOM, r, l), i.getView().removeEventListener("mousedown", r.handleWindowClick), i.getView().removeEventListener("touchstart", r.handleWindowClick))
                }
            }]), t
        }(),
        Be = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    t.defaultCursor = i.getView().style.cursor, t.disabled ? Qa(i, "not-allowed") : Qa(i, "text")
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    Qa(i, t.defaultCursor)
                }
            }, {
                key: "onDown",
                value: function (e, o, n, t, i, a) {
                    var r, l, s, h, u, c, d, g, f, v, p, y, x, b, m, w, C, k, V, T, I, D, S = Lo(n, o, this);
                    S.disabled || S.editing || (r = S.font, l = S.value, s = S.textAlign, h = S.maxLength, C = S.textColor, u = S.inputType, c = S.enterEndInputable, k = S.padding, d = S.onKeyDown, g = S.onKeyUp, f = S.onChange, v = S.selectTextOnFocus, p = o.getAnchorRect(), y = Qi(), x = C || qi.textColor, b = y.style, m = Ao(this, "value", o), w = (V = Ie($i(k), 4))[0], C = V[1], k = V[2], V = V[3], u && (y.type = u), b.color = x, b.font = r, b.paddingTop = w + "px", b.paddingRight = C + "px", b.paddingBottom = k + "px", b.paddingLeft = 2 + V + "px", b.lineHeight = p.height + "px", b.textAlign = s, y.value = l || "", y.spellcheck = !1, h && y.setAttribute("maxlength", h), n.appendHTML(y), (T = So(n, o, this, e)) && ea(n, y, T), S.editing = !0, S.editingValue = l, S.inputDOM = y, o.iv(), I = function (e) {
                        ea(n, y, T)
                    }, S.handleWindowClick = D = function e(t) {
                        var i = Vo(y),
                            a = ht.Default.getClientPoint(t);
                        ht.Default.containsPoint(i, a) || (t.preventDefault(), Ja(o, 0, y, S, m), n.ump(I), n.getView().removeEventListener("mousedown", e), n.getView().removeEventListener("touchstart", e))
                    }, ci(function () {
                        v && y.addEventListener("focus", function (e) {
                            y.select()
                        }), y.focus(), n.mp(I);
                        var t = null;
                        y.addEventListener("keydown", function (e) {
                            t && clearTimeout(t), t = ci(function () {
                                S.editingValue = y.value, o.a(m, y.value)
                            }, 10), (9 === e.keyCode || c && ht.Default.isEnter(e)) && (Ja(o, 0, y, S, m), n.getView().removeEventListener("mousedown", D), n.getView().removeEventListener("touchstart", D)), d && d(e, o, n)
                        }), g && y.addEventListener("keyup", function (e) {
                            g(e, o, n)
                        }), f && y.addEventListener("input", function (e) {
                            f(y.value, o, n)
                        }), n.getView().addEventListener("mousedown", D), n.getView().addEventListener("touchstart", D)
                    }, 1))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = Ao(this, "value", t);
                    r.editing && r.inputDOM && (Ja(t, 0, r.inputDOM, r, l), i.getView().removeEventListener("mousedown", r.handleWindowClick), i.getView().removeEventListener("touchstart", r.handleWindowClick))
                }
            }]), t
        }(),
        Ns = ht.Default.containsPoint,
        xe = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    t.defaultCursor = i.getView().style.cursor, t.disabled ? Qa(i, "not-allowed") : Qa(i, "text")
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    Qa(i, t.defaultCursor)
                }
            }, {
                key: "onDown",
                value: function (e, o, n, t, i, a) {
                    var r, l, s, h, u, c, d, g, f, v, p, y, x, b = Lo(n, o, this),
                        m = So(n, o, this, e),
                        w = b.buttonRects,
                        C = b.onKeyDown,
                        k = b.onKeyUp,
                        V = b.onChange,
                        T = b.min,
                        I = b.max,
                        D = {
                            x: t.x + m.rect.x,
                            y: t.y + m.rect.y
                        },
                        S = w && (Ns(w[0], D) || Ns(w[1], D));
                    b.disabled || (b.editing || S ? S && (c = b.step, (d = Ao(this, "value", o)) && (v = b.dom && b.dom.value || o.a(d) || T || 0, Ns(w[0], D) ? (f = function (e, t) {
                        var i, a, o, n;
                        try {
                            i = e.toString().split(".")[1].length
                        } catch (e) {
                            i = 0
                        }
                        try {
                            a = t.toString().split(".")[1].length
                        } catch (e) {
                            a = 0
                        }
                        return n = Math.abs(i - a), o = Math.pow(10, Math.max(i, a)), t = 0 < n ? (n = Math.pow(10, n), a < i ? (e = Number(e.toString().replace(".", "")), Number(t.toString().replace(".", "")) * n) : (e = Number(e.toString().replace(".", "")) * n, Number(t.toString().replace(".", "")))) : (e = Number(e.toString().replace(".", "")), Number(t.toString().replace(".", ""))), (e + t) / o
                    }(Pi(v), c), qa(I) || (f = Math.min(f, I))) : (f = function (e, t) {
                        var i, a;
                        try {
                            i = e.toString().split(".")[1].length
                        } catch (e) {
                            i = 0
                        }
                        try {
                            a = t.toString().split(".")[1].length
                        } catch (e) {
                            a = 0
                        }
                        return ((e * (e = Math.pow(10, Math.max(i, a))) - t * e) / e).toFixed(a <= i ? i : a)
                    }(Pi(v), c), qa(T) || (f = Math.max(f, T))), b.editing ? (b.editingValue = b.dom.value = f, o.iv()) : o.a(d, f), V && v !== f && V(f, o, n))) : (r = b.font, l = b.value, t = b.textAlign, m = b.maxLength, S = b.textColor, s = b.enterEndInputable, w = b.padding, h = b.selectTextOnFocus, D = o.getAnchorRect(), u = Qi(), c = S || qi.textColor, d = u.style, g = Ao(this, "value", o), f = (v = Ie($i(w), 4))[0], S = v[1], w = v[2], v = v[3], d.color = c, d.font = r, d.paddingTop = f + "px", d.paddingRight = S + "px", d.paddingBottom = w + "px", d.paddingLeft = 2 + v + "px", d.lineHeight = D.height + "px", d.textAlign = t, u.value = l || "", u.spellcheck = !1, m && u.setAttribute("maxlength", m), n.appendHTML(u), (p = So(n, o, this, e)) && ea(n, u, p), b.editing = !0, b.editingValue = l, b.dom = u, o.iv(), y = function (e) {
                        ea(n, u, p)
                    }, b.handleWindowClick = x = function e(t) {
                        var i = Vo(u),
                            a = ht.Default.getClientPoint(t);
                        ht.Default.containsPoint(i, a) || (t.preventDefault(), Es(o, 0, u, b, g, T, I), n.ump(y), n.getView().removeEventListener("mousedown", e), n.getView().removeEventListener("touchstart", e))
                    }, ci(function () {
                        h && u.addEventListener("focus", function (e) {
                            u.select()
                        }), u.focus(), n.mp(y);
                        var t = null;
                        u.addEventListener("keydown", function (e) {
                            t && clearTimeout(t), t = ci(function () {
                                var e;
                                b.editingValue = u.value, g && (e = Pi(u.value), qa(I) || (e = Math.min(e, I)), qa(T) || (e = Math.max(e, T)), o.a(g, e))
                            }, 10), (9 === e.keyCode || s && ht.Default.isEnter(e)) && (Es(o, 0, u, b, g, T, I), n.getView().removeEventListener("mousedown", x), n.getView().removeEventListener("touchstart", x)), C && C(e, o, n)
                        }), u.addEventListener("keyup", function (e) {
                            k && k(e, o, n), V && V(Pi(u.value), o, n)
                        }), u.addEventListener("input", function (e) {
                            e.target.value = e.target.value.replace(/[^\d\.{1}]/g, "")
                        }), n.getView().addEventListener("mousedown", x), n.getView().addEventListener("touchstart", x)
                    }, 1)))
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        t = So(i, t, this, e),
                        e = r.buttonRects,
                        a = {
                            x: a.x + t.rect.x,
                            y: a.y + t.rect.y
                        },
                        t = "text";
                    r.disabled ? t = "not-allowed" : e && (ht.Default.containsPoint(e[0], a) || ht.Default.containsPoint(e[1], a)) && (t = "pointer"), Qa(i, t), r.dom && (r.dom.style.cursor = t)
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = Ao(this, "value", t);
                    r.editing && r.dom && (Es(t, 0, r.dom, r, l), i.getView().removeEventListener("mousedown", r.handleWindowClick), i.getView().removeEventListener("touchstart", r.handleWindowClick))
                }
            }]), t
        }(),
        Fs = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    i = Lo(i, t, this);
                    i.disabled || (i.pressed = !0, t.iv())
                }
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this);
                    r.defaultCursor = i.getView().style.cursor, r.disabled ? Qa(i, "not-allowed") : Qa(i, "pointer"), r.disabled || (r.hover = !0, t.iv())
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this);
                    Qa(i, r.defaultCursor || "default"), delete r.defaultCursor, r.hover = !1, t.iv()
                }
            }]), t
        }(),
        wt = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.onClick;
                    r.disabled || (r.pressed = !1, t.iv(), l && 0 < a.x && a.x < o && 0 < a.y && a.y < n && l(e, t, i))
                }
            }]), t
        }(),
        ut = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.disabled;
                    r.pressed;
                    var s, h, u = Ao(this, "checked", t),
                        c = Ao(this, "group", t);
                    l || (delete r.pressed, t.iv(), s = r.value, l = r.onChange, h = r.group, !t.a(u) && 0 < a.x && a.x < o && 0 < a.y && a.y < n && (n = t.a(u), i && i.dm() && !n && h && i.dm().each(function (e) {
                        h === e.a(c) && e.a(u, !1)
                    }), t.a(u, !0), l && l(void 0 === s || s, t, i)))
                }
            }]), t
        }(),
        Wi = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u, c, d = Lo(i, t, this);
                    d.disabled || (delete d.pressed, r = d.value, l = d.onChange, s = d.group, d.checked, h = Ka(i, t).vectorInfos, u = [], ii(h).call(h, function (e) {
                        e.__inputType === da && e.group === s && (e.checked && (c = e.value), u.push(e))
                    }), c !== r && (ii(u).call(u, function (e) {
                        e.checked = !1
                    }), d.checked = !0, l && l(c, r, t, i)), t.iv())
                }
            }]), t
        }(),
        st = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r, l, s = Lo(i, t, this),
                        h = s.disabled,
                        u = s.pressed,
                        c = Ao(this, "checked", t),
                        d = Ao(this, "group", t),
                        g = Ao(this, "value", t);
                    h || (t.a(u, !1), t.iv(), s.value, r = s.group, s = s.onChange, 0 < a.x && a.x < o && 0 < a.y && a.y < n && (n = t.a(c), t.a(c, !n), s && (r ? (l = [], i.dm().each(function (e) {
                        r === e.a(d) && e.a(c) && l.push(e.a(g))
                    }), s(l, t, i)) : s(!n, t, i))))
                }
            }]), t
        }(),
        Ze = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r, l = Lo(i, t, this);
                    l.disabled || (l.pressed = !1, t.iv(), r = Ao(this, "value", t), 0 < a.x && a.x < o && 0 < a.y && a.y < n && No(t, i, l, r))
                }
            }]), t
        }(),
        Ke = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r, l = Lo(i, t, this);
                    l.disabled || (r = Ao(this, "value", t), 0 < a.x && a.x < o && 0 < a.y && a.y < n && Fo(t, i, l, "a@" + r))
                }
            }]), t
        }(),
        zs = {
            hoverDarker: 5,
            activeDarker: 11,
            baseColor: "#3399ff",
            baseColor2: "#737373",
            hoverBackground: "#eeeeee",
            emptyColor: "#ffffff",
            fontSize: 12,
            fontFamily: "arial, sans-serif",
            font: "12px arial sans-serif",
            disabledColor: "#ebebeb",
            disabledBackground: "#fafafa",
            inputTextColor: "#111111",
            placeholderColor: "#737373"
        },
        Gs = function () {
            g(a, ht.graph.GraphView);
            var i = f(a);

            function a(e) {
                var t;
                return c(this, a), (t = i.call(this, e)).addBottomPainter(Ko(e = t.drawBottomPainter).call(e, u(t))), t.setAutoHideScrollBar(!1), t._nodes = [], t.getView().style.transition = "all 0.2s", t
            }
            return d(a, [{
                key: "adjustTranslateX",
                value: function () {
                    return 0
                }
            }, {
                key: "isMovable",
                value: function () {
                    return !1
                }
            }, {
                key: "adjustZoom",
                value: function () {
                    return 1
                }
            }, {
                key: "adjustTranslateY",
                value: function (e) {
                    var t = this,
                        i = this.dm().toDatas(function (e) {
                            return t.isVisible(e)
                        }),
                        i = this.getHeight() - i.size() * this._rowHeight;
                    return 0 <= e || 0 <= i ? 0 : i < e ? e : i
                }
            }, {
                key: "handleScroll",
                value: function (e) {
                    var t = La ? -e.detail : e.wheelDelta / 40;
                    !La && e.wheelDelta === e.wheelDeltaX || this.translate(0, t)
                }
            }, {
                key: "onPropertyChanged",
                value: function (e) {
                    n(o(a.prototype), "onPropertyChanged", this).call(this, e);
                    e = e.property;
                    "dataModel" !== e && "fileSize" !== e || this.doLayoutLater()
                }
            }, {
                key: "doLayoutLater",
                value: function () {
                    this._doLayoutLater || (this._doLayoutLater = !0, ht.Default.callLater(this.doLayout, this))
                }
            }, {
                key: "onValidated",
                value: function () {
                    this._lastWidth !== this.getWidth() && this.doLayoutLater()
                }
            }, {
                key: "isVisible",
                value: function (e) {
                    return !1 !== e.s("2d.visible")
                }
            }, {
                key: "doLayout",
                value: function () {
                    var t = this;
                    this._doLayoutLater = !1, this._lastWidth = this.getWidth();
                    var i = this._iconHeight,
                        a = this._iconWidth,
                        o = this._rowHeight,
                        n = this._nodes = [];
                    this.dm().getDatas().each(function (e) {
                        t.isVisible(e) && n.push(e)
                    }), this._lastHeight = this.getHeight();
                    var r = 8 + .5 * a,
                        l = .5 * o;
                    ii(n).call(n, function (e, t) {
                        e.setSize(a, i), e.p(r, l), l += o
                    })
                }
            }, {
                key: "drawBottomPainter",
                value: function (t) {
                    var e, i, a, o, n = this,
                        r = this._rowHeight,
                        l = this.getWidth(),
                        s = this._hoverData,
                        h = this._dropBorderColor,
                        u = this._dropBorderWidth;
                    this.dm().toDatas(this.isVisible, this).each(function (e) {
                        t.beginPath(), t.rect(0, e.p().y - r / 2, l, r), n.isSelected(e) ? (t.fillStyle = n.getActiveColor() || zs.baseColor, Gi(t).call(t)) : e === s && (t.fillStyle = n.getHoverBackground() || zs.hoverBackground, Gi(t).call(t)), h && u && (e = e.p().y + r / 2 - .5 * u, t.beginPath(), t.moveTo(0, e), t.lineTo(l, e), t.strokeStyle = h, t.lineWidth = u, t.stroke())
                    }), h && u && (e = (o = this.getViewRect()).x, i = o.y, a = o.width, o = o.height, t.strokeStyle = h, t.lineWidth = u, t.strokeRect(e + .5 * u, i + .5 * u, a - u, o - u))
                }
            }, {
                key: "getDataAt",
                value: function (e) {
                    e = e instanceof UIEvent ? this.lp(e) : e, e = Math.floor(e.y / this._rowHeight);
                    return this._nodes[e]
                }
            }, {
                key: "handleSelectionChange",
                value: function (e) {
                    n(o(a.prototype), "handleSelectionChange", this).call(this, e), this.redraw()
                }
            }, {
                key: "getSelectWidth",
                value: function () {
                    return 0
                }
            }, {
                key: "isOnScrollBar",
                value: function (e) {
                    var t = this.getViewRect(),
                        i = this.getScrollRect(),
                        a = this.getScrollBarSize(),
                        e = this.lp(e);
                    return ht.Default.isTouchable && (a *= 1.5), i.height > t.height && e.x - t.x > t.width - a
                }
            }]), a
        }();
    Ga(Gs, {
        ms_ac: ["rowHeight", "iconWidth", "iconHeight", "activeColor", "hoverBackground", "dropBorderWidth", "dropBorderColor"],
        _rowHeight: 26,
        _iconWidth: 20,
        _iconHeight: 20
    });
    var Xs = function () {
        g(h, Gs);
        var s = f(h);

        function h(e, t, i, a, o) {
            var n;
            c(this, h), (n = s.call(this)).setSelectionMode(o ? ua : ca), n._master = e, n._masterGraph = t, n._vectorInfo = i, n._valueName = a, n._transition = !1, n._documentClickHandler = Ko(a = n.documentClickHandler).call(a, u(n)), n._previousValue = null, n.dm().setAutoAdjustIndex(!1), n.setInteractors([new ht.graph.ScrollBarInteractor(u(n)), new ht.graph.MoveInteractor(u(n)), new ht.graph.DefaultInteractor(u(n)), new ht.graph.TouchInteractor(u(n))]);
            var r = n.getView().style;
            r.height = 0, r.boxShadow = "rgba(0, 0, 0, 0.3) 0px 8px 22px", Fa(r, "transition", "all 0.3s esse-in");
            var l = !1;
            return n.mi(function (e) {
                "onDown" === e.kind ? (e.event.preventDefault(), e.event.stopPropagation()) : "onDrag" === e.kind ? l = !0 : "onEndDrag" === e.kind ? ci(function () {
                    l = !1
                }, 1) : l || "onUp" !== e.kind || "data" !== e.type || n.handleSelectData(e.data)
            }), n.sm().ms(function (e) {
                n.dm().each(function (e) {
                    e instanceof ht.Text && e.s("text.color", n.getLabelColor(e))
                })
            }), n.mp(function (e) {
                "background" === e.property && (r.background = e.newValue)
            }), n.getView().addEventListener("mousemove", function (e) {
                var t = n._hoverData,
                    e = n.getDataAt(e);
                e !== t && (n._hoverData = e && n.sm().contains(e) ? null : e, n.redraw())
            }), n._initStyleByMaster(), n
        }
        return d(h, [{
            key: "handleScroll",
            value: function (e) {
                var t = (this._vectorInfo || {}).scrollSpeed,
                    t = void 0 === t ? 1 : t,
                    t = La ? -e.detail * t : e.wheelDelta / 40 * t;
                !La && e.wheelDelta === e.wheelDeltaX || this.translate(0, t)
            }
        }, {
            key: "_initStyleByMaster",
            value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this._vectorInfo;
                this.setIconHeight(e.dropIconWidth), this.setIconWidth(e.dropIconHeight), this.setRowHeight(e.dropRowHeight), this.setDropWidth(e.dropWidth), this.setBackground(e.dropBackground), this.setHoverBackground(e.dropHoverBackground), this.setActiveColor(e.dropActiveBackground), this.setDropLabelColor(e.dropLabelColor), this.setDropActiveLabelColor(e.dropActiveLabelColor), this.setDropLabelFont(e.dropLabelFont), this.setMaxHeight(e.dropMaxHeight), this.setDropBorderColor(e.dropBorderColor), this.setDropBorderWidth(e.dropBorderWidth)
            }
        }, {
            key: "handleSelectData",
            value: function (e) {
                var t = this._master,
                    i = this._vectorInfo,
                    a = i.onChange,
                    o = this.sm().getSelectionMode(),
                    n = i.dataSource;
                if (n && 0 !== n.length && e) {
                    if (o === ca) this.sm().ss(e);
                    else {
                        if (this.sm().co(e)) return;
                        this.sm().as(e)
                    }
                    n = e.a("value");
                    if (o === ca) t.a(this._valueName, n), t.a(Ji.LABEL, this.__getLabel()), t.a(Ji.ICON, e.a("icon"));
                    else {
                        e = this._previousValue, i = i.maxSelection, n = [n];
                        if (e && Ii(e).call(e, n[0]) < 0) n = Ni(e).call(e, n);
                        else if (e) return;
                        0 < i && n.length > i && n.shift(), t.a(this._valueName, n)
                    }
                    a && a(this._previousValue, n, t, this._masterGraph), this.close()
                }
            }
        }, {
            key: "setSelectionMode",
            value: function (e) {
                ua !== e && ca !== e || this.sm().setSelectionMode(e)
            }
        }, {
            key: "getNodeValue",
            value: function (e) {
                return e.a("value") || e.s("label") || e.s("text")
            }
        }, {
            key: "getNodeLabel",
            value: function (e) {
                return e.s("label") || e.s("text") || e.a("value")
            }
        }, {
            key: "setData",
            value: function (e) {
                var t, i = this,
                    a = this.dm();
                a.clear(), e && e.length && (this._vectorInfo.searchInputVisible && ((t = new ht.Text).s("text", ""), t.a("_isInputNode", !0), a.add(t)), ii(e).call(e, function (e) {
                    var t;
                    e.icon ? ((t = new ht.Node).setImage(e.icon), t.s({
                        interactive: !0,
                        preventDefaultWhenInteractive: !1,
                        pixelPerfect: !1,
                        "image.stretch": "uniform",
                        label: (e.label || e.value) + "",
                        "label.position": 20,
                        "label.offset.x": 4,
                        "label.font": i.getDropLabelFont()
                    })) : (t = new ht.Text).s({
                        interactive: !0,
                        preventDefaultWhenInteractive: !1,
                        text: (e.label || e.value) + "",
                        pixelPerfect: !1,
                        "text.color": i.getLabelColor(t),
                        "text.font": i.getDropLabelFont()
                    }), t.a(e), a.add(t)
                }), this.setDropHeight(Math.min(this.getMaxHeight(), e.length * this.getRowHeight())))
            }
        }, {
            key: "getValue",
            value: function () {
                var t = this,
                    e = this.sm(),
                    i = e.getSelection(),
                    e = e.getSelectionMode();
                if (ca === e) return 0 === i.size() ? null : this.getNodeValue(i.get(0));
                if (ua !== e) return null;
                var a = [];
                return i.each(function (e) {
                    a.push(t.getNodeValue(e))
                }), a
            }
        }, {
            key: "__getLabel",
            value: function () {
                var t = this,
                    e = this.sm(),
                    i = e.getSelection(),
                    e = e.getSelectionMode();
                if (ca === e) return 0 === i.size() ? null : this.getNodeLabel(i.get(0));
                if (ua !== e) return null;
                var a = [];
                return i.each(function (e) {
                    a.push(t.getNodeLabel(e))
                }), a
            }
        }, {
            key: "toggle",
            value: function () {
                this._transition || (this._opened ? this.close() : this.open())
            }
        }, {
            key: "__scrollToIndex",
            value: function (e) {
                this.dm().getDatas(), this.sm();
                var t = this.getMaxHeight(),
                    i = this.getRowHeight();
                t < e * i ? this.ty(t - (e + 1) * i) : this.ty(0)
            }
        }, {
            key: "open",
            value: function () {
                var i = this,
                    e = this._master;
                this._masterGraph;
                var t = this.getView().style,
                    a = this.getDropWidth(),
                    o = this.getDropHeight(),
                    n = e.a(this._valueName);
                this.sm().cs(), _o(n) ? lo(n) ? n.length && ii(n).call(n, function (t) {
                    i.dm().each(function (e) {
                        e.a("value") === t && i.sm().as(e)
                    })
                }) : this.dm().each(function (e, t) {
                    e.a("value") === n && (i.sm().ss(e), i.__scrollToIndex(t))
                }) : this.ty(0), this._previousValue = n, this._vectorInfo.editing = !0, this._master.iv(), this.layoutByMaster(), this.setWidth(a), this.setHeight(o), Fa(t, "transform", "scaleY(0)"), _a(this.getView()), this._transition = !0, this.registerCloseEvent(this._documentClickHandler), this.doLayout(), ht.Default.callLater(function () {
                    Fa(t, "transform", "scaleY(1)"), ci(function () {
                        i.redraw(), i.setOpened(!0), i._transition = !1
                    }, 300)
                }), To(this)
            }
        }, {
            key: "layoutByMaster",
            value: function () {
                this._master;
                var e = this._masterGraph,
                    t = Vo(e.getView()),
                    i = io(this._vectorInfo.comp, this._master, this._masterGraph),
                    a = ht.Default.getWindowInfo(),
                    o = this.getView().style,
                    n = this.getDropWidth(),
                    r = this.getDropHeight();
                i.x += t.x, i.y += t.y;
                var l = Math.max(0, i.x),
                    e = i.y + i.height,
                    t = "50% 0";
                e + r > a.height && e - i.height > r && (e = e - r - i.height, t = "50% 100%"), l + n > a.width && (l = a.width - n), o.left = l + "px", o.top = e + "px", Fa(o, "transformOrigin", t), this._vectorInfo.searchInputVisible && (this._addSearchInput(), this._searchInput.style.left = l + "px", this._searchInput.style.top = e + "px", this._searchInput.style.width = n + "px", this._searchInput.style.height = this._rowHeight + "px")
            }
        }, {
            key: "onOpen",
            value: function () {}
        }, {
            key: "close",
            value: function () {
                var e, t, i = this;
                this._transition || (t = (e = this.getView()).style, this._vectorInfo.editing = !1, this._master.iv(), this._transition = !0, this.unRegisterCloseEvent(this._documentClickHandler), Fa(t, "transform", "scaleY(0)"), ci(function () {
                    Ra(e), i._transition = !1, i.setOpened(!1)
                }, 301), Io(this), this._vectorInfo.searchInputVisible && this._removeSearchInput())
            }
        }, {
            key: "registerCloseEvent",
            value: function (e) {
                var t = this._masterGraph.getView();
                ht.Default.isTouchable ? (document.addEventListener("touchstart", e), t.addEventListener("touchstart", e)) : (document.addEventListener("mousedown", e), t.addEventListener("mousedown", e))
            }
        }, {
            key: "unRegisterCloseEvent",
            value: function (e) {
                var t = this._masterGraph.getView();
                ht.Default.isTouchable ? (document.removeEventListener("touchstart", e), t.removeEventListener("touchstart", e)) : (document.removeEventListener("mousedown", e), t.removeEventListener("mousedown", e))
            }
        }, {
            key: "_addSearchInput",
            value: function () {
                var t = this;
                this._searchInput = document.createElement("input"), this._searchInput.setAttribute("type", "text"), this._searchInput.classList.add("ht-vector-search-input"), document.body.appendChild(this._searchInput), this._searchInputEvent = function (e) {
                    var i = t._searchInput.value;
                    t.dm().each(function (e) {
                        var t;
                        e.a("_isInputNode") || ("" !== i ? (t = e.a("label") || "", e.s("2d.visible", -1 < Ii(t).call(t, i))) : e.s("2d.visible", !0))
                    }), t.ty(0), t.doLayout(), t._hoverData && delete t._hoverData, t.redraw()
                }, this._searchInput.addEventListener("keyup", this._searchInputEvent)
            }
        }, {
            key: "_removeSearchInput",
            value: function () {
                this._searchInput && (this._searchInput.removeEventListener("keyup", this._searchInputEvent), document.body.removeChild(this._searchInput), delete this._searchInputEvent, delete this._searchInput)
            }
        }, {
            key: "documentClickHandler",
            value: function (e) {
                var t, i = this._master,
                    a = this._masterGraph,
                    o = io(this._vectorInfo.comp, i, a);
                ht.Default.containsPoint(o, ht.Default.getClientPoint(e)) || (this._searchInput ? (i = (t = this._searchInput.getBoundingClientRect()).x, a = t.y, o = t.width, t = t.height, ht.Default.containsPoint({
                    x: i,
                    y: a,
                    width: o,
                    height: t
                }, ht.Default.getClientPoint(e)) || this.close()) : this.close())
            }
        }, {
            key: "getLabelColor",
            value: function (e) {
                return this.sm().co(e) ? this.getDropActiveLabelColor() : this.getDropLabelColor()
            }
        }, {
            key: "getScrollRect",
            value: function () {
                return n(o(h.prototype), "getScrollRect", this).call(this)
            }
        }, {
            key: "isVisible",
            value: function (e) {
                return this._vectorInfo.hideSelected ? !this.sm().co(e) : !1 !== e.s("2d.visible")
            }
        }]), h
    }();

    function Ys(e, t, i, a, o) {
        var n = i.dropDown;
        n || ((n = new Xs(e, t, i, a, o)).getView().className = "ht-vector-dropdown", i.dropDown = n, To(n)), n._transition || (n.isOpened() || (n.setData(i.dataSource), n._initStyleByMaster(i)), n.toggle())
    }
    Ga(Xs, {
        ms_ac: ["background", "dropWidth", "dropHeight", "maxHeight", "opened", "dropLabelFont", "dropLabelColor", "dropActiveLabelColor"],
        _background: zs.emptyColor,
        _dropWidth: 200,
        _dropHeight: 100,
        _maxHeight: 400,
        _opened: !1,
        _dropLabelColor: zs.inputTextColor
    });

    function Us(e, t, i, a, o) {
        var t = Lo(i, t, a),
            n = void 0 === (a = t.rowLineWidth) ? 0 : a,
            r = void 0 === (a = t.columnLineWidth) ? 0 : a,
            l = t.rowHeights,
            s = t.colWidths,
            a = t.headHeight,
            h = t.translateY,
            u = t.translateX,
            c = null,
            d = null;
        if (0 < (h = Math.floor(o.y - h - a)) && l && l.length) {
            for (var c = 0, g = 0; c < l.length && !(h < (g += l[c] + n)); c++);
            c === l.length && (c = null)
        }
        if (0 < (u = Math.floor(o.x - u)) && s && s.length) {
            for (var d = 0, f = 0; d < s.length && !(u < (f += s[d] + r)); d++);
            d === s.length && (d = null)
        }
        return {
            row: c,
            col: d
        }
    }

    function Zs(e, t, i, a, o) {
        var n = t.max,
            r = t.min,
            l = t.step,
            s = t.value,
            i = (i.x - a.x) / a.width * (n - r) + r,
            a = t.onChange,
            t = Ao(t.comp, "value", e);
        i = Math.min(n, i), i = Math.max(r, i), l && (i = i - (r = i % l) + (Math.abs(r) > l / 2) * (r < 0 ? -l : l)), e.a(t, i), a && a(s, i, e, o)
    }

    function Ks(e, t, i, a, o, n) {
        var r = t.max,
            l = t.min,
            s = t.step,
            h = (i.x - a.x) / a.width * (r - l) + l,
            u = t.value,
            c = u[0],
            d = u[1],
            i = Ao(t.comp, "value", e),
            a = t.onChange;
        h = Math.min(r, h), h = Math.max(l, h), s && (h = h - (l = h % s) + (Math.abs(l) > s / 2) * (l < 0 ? -s : s));
        var g, s = null;
        return s = t.dragging ? (g = t.dragging) <= h ? [g, h] : [h, g] : (g = Math.abs(c - h), Math.abs(d - h) <= g ? [c, h] : [h, d]), n || e.a(i, s), a && a(u, s, e, o), h
    }

    function Js(e, t) {
        if (t && 0 < t.length)
            for (var i = 0; i < t.length; i++) {
                var a = Ie(t[i].rect, 4),
                    o = a[0],
                    n = a[1],
                    r = a[2],
                    a = a[3];
                if (ht.Default.containsPoint({
                        x: o,
                        y: n,
                        width: r,
                        height: a
                    }, e)) return t[i].value
            }
    }

    function qs(e, t, i, a) {
        if (e) {
            var o = e.x,
                n = e.y,
                r = e.width,
                l = e.height,
                s = e.boundWidth,
                h = e.boundHeight,
                e = e.absoluteScrollBarWidth;
            if (l < h) {
                h = l / h;
                if (eh({
                        x: o + r - e,
                        y: n - i * h,
                        width: e,
                        height: l * h
                    }, a)) return 1
            }
            if (r < s - 2) {
                s = r / s;
                if (eh({
                        x: o - t * s,
                        y: n + l - e,
                        width: r * s,
                        height: e
                    }, a)) return 1
            }
        } else;
    }

    function $s(e, t, i, a) {
        if (e) {
            var o = e.x,
                n = e.y,
                r = e.width,
                l = e.height,
                s = e.boundWidth,
                h = e.boundHeight,
                e = e.absoluteScrollBarWidth;
            if (l < h) {
                h = l / h;
                if (th({
                        x: o + r - e,
                        y: n - i * h,
                        width: e,
                        height: l * h
                    }, a)) return 1
            }
            if (r < s - 2) {
                s = r / s;
                if (th({
                        x: o - t * s,
                        y: n + l - e,
                        width: r * s,
                        height: e
                    }, a)) return 1
            }
        } else;
    }
    var qt = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r, l = Lo(i, t, this);
                    l.disabled || (l.pressed = !1, t.iv(), r = Ao(this, "value", t), 0 < a.x && a.x < o && 0 < a.y && a.y < n && Ys(t, i, l, r))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    t = t.__dropDown;
                    t && t._opened && t.layoutByMaster()
                }
            }]), t
        }(),
        Ei = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    if (!Wn(this, t, i, a, o, n, !0, e)) {
                        var r = Lo(i, t, this),
                            l = Us(0, t, i, this, a),
                            s = r.rawIndexs;
                        if (s) {
                            var h = s[l.row],
                                u = r.multiple,
                                o = r.onClickCell,
                                c = r.onClickHeadCell,
                                n = r.bodyRect,
                                d = r.headRect,
                                s = r.headHeight,
                                g = r.onClickCellImage,
                                f = no(i, t, this, a, e),
                                l = Ao(this, "selectedIndex", t),
                                d = d && Do(d),
                                n = n && Do(n);
                            if (!qa(h) && r.rowSelectable) {
                                var v = r.dataSource || [],
                                    p = r.onSelectRow,
                                    y = r.selectedIndex;
                                if (v && v[h]) {
                                    if (u)
                                        if (y = "number" == typeof y ? [y] : null == y ? [] : bi(y).call(y, 0), ht.Default.isCtrlDown()) {
                                            u = Ii(y).call(y, h);
                                            0 <= u ? Ki(y).call(y, u, 1) : y.push(h)
                                        } else if (ht.Default.isShiftDown() && 0 < y.length) {
                                        var x = y[y.length - 1];
                                        if (x < h)
                                            for (var b = x + 1; b <= h; b++) Ii(y).call(y, b) < 0 && y.push(b);
                                        else if (h < x)
                                            for (var m = x - 1; h <= m; m--) Ii(y).call(y, m) < 0 && y.push(m)
                                    } else y = [h];
                                    else y = [h];
                                    l && t.a(l, y), p && Bo(n, f) && p(v[h], t, i)
                                }
                            }
                            if (c && s && d && qa(r.resizeColIndex) && Bo(d, f))
                                for (var w = r.rawCols, C = r.colWidths, k = r.headHeight, V = r.rawColIndexs, T = d.x, I = 0; I < C.length; I++) {
                                    var D = {
                                        x: T,
                                        y: d.y,
                                        width: C[I],
                                        height: k
                                    };
                                    if (Bo(D, f)) {
                                        c(e, w[I], V[I], t, i);
                                        break
                                    }
                                    T += C[I]
                                }
                            if (o && (x = r.colWidths, l = r.rowHeights, n = r.columns, p = r.dataSource, S = r.rawColIndexs, s = r.rawIndexs[(v = Us(0, t, i, this, a)).row], null != (S = S[v.col]) && null != s && v.row <= l.length && v.col <= x.length && n && p && n[S].key && (x = n[S], p = (n = p[s])[x.key], o(e, p = x.format ? x.format(p, n, s, S) : p, n, x, s, S, t, i))), g) {
                                var S = r.drawCellImageInfo,
                                    L = void 0 === S ? [] : S,
                                    A = r.columns,
                                    R = r.dataSource,
                                    S = r.rawColIndexs,
                                    r = r.rawIndexs;
                                if (0 < L.length)
                                    for (var a = Us(0, t, i, this, a), _ = r[a.row], P = S[a.col], M = 0, B = L.length; M < B; M++) {
                                        var O = L[M].rect;
                                        if (Bo(O, f)) {
                                            g(e, L[M], R[_], A[P], _, P, t, i);
                                            break
                                        }
                                    }
                            }
                        }
                    }
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.rowHeights,
                        s = r.colWidths,
                        h = r.hoverIndex,
                        u = r.columns,
                        c = r.rawDatas,
                        d = r.rawIndexs;
                    r.rawCols;
                    var g = r.rawColIndexs,
                        f = r.onHoverCell,
                        v = r.resizable,
                        p = r.headRect,
                        y = r.bodyRect,
                        x = Us(0, t, i, this, a),
                        b = r.scrollInfo,
                        m = r.scrollBarInteractiveSize || ht.Default.scrollBarInteractiveSize,
                        w = x.row,
                        C = x.col,
                        k = no(i, t, this, a, e);
                    if (!r._scrollDragInfo && d && c) {
                        var p = p && Do(p),
                            y = Do(y),
                            V = r.onClickCellImage,
                            x = r.drawCellImageInfo,
                            T = void 0 === x ? [] : x;
                        if (V && 0 < T.length) {
                            for (var I = 0, D = T.length; I < D; I++) {
                                var S = T[I].rect;
                                if (Bo(S, k)) {
                                    Qa(i, "pointer");
                                    break
                                }
                            }
                            I === D && Qa(i, "default")
                        }
                        if (Bo(y, k) && r.autoHideScrollBar && b && (b.scrollBarX && a.y > n - m || b.scrollBarY && a.x > o - m)) return r.scrollBarVisible = !0, t.iv(), void zn(t, r);
                        if (Bo(y, k) && !Ma(e) && r.rowHoverable ? (f && (null != C && null !== w && w <= l.length && C <= s.length && u && c && u[C].key ? (s = u[C], u = c[w], c = d[w], g = g[C], C = u[s.key], f(e, C = s.format ? s.format(C, u, c, g) : C, u, s, c, g, t, i)) : f(e, null, null, null, null, null, t, i)), h !== d[w] && (r.hoverIndex = d[w], t.iv())) : _o(r.hoverIndex) && (r.hoverIndex = null, t.iv()), p && !r.resizeBeginPoint && v && Bo(p, k)) {
                            for (var L, A = r.resizeRects, R = 0; R < A.length; R++)
                                if (Bo(A[R], k)) {
                                    L = R;
                                    break
                                } r.resizeColIndex = L, _o(L) ? Qa(i, "ew-resize") : Qa(i, "default")
                        }
                    }
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this);
                    r.hoverIndex = null, t.iv();
                    r = r.onHoverCell;
                    r && r(e, null, null, null, null, null, t, i), Qa(i, "default")
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    Hn.apply(this, arguments);
                    var r, l = Lo(i, t, this);
                    _o(l.resizeColIndex) && (r = l.colWidths, i = l.rawColIndexs, t = l.rawCols, l.resizeSourceWidth = r[i[l.resizeColIndex]], l.resizeBeginPoint = a, ii(t).call(t, function (e, t) {
                        e.width = r[t]
                    }))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.resizeBeginPoint;
                    if (l) {
                        var s = r.rawCols,
                            h = r.rawColIndexs,
                            u = r.resizeColIndex,
                            c = r.resizeSourceWidth,
                            i = r.resizeRects,
                            s = s[h[u]],
                            h = a.x - l.x,
                            a = i[u],
                            l = a.x,
                            i = a.y,
                            u = a.width;
                        return a.height, r.resizeDragPoint = {
                            x: l + u / 2,
                            y: i
                        }, s.width = Math.max(c + h, 1), void t.iv()
                    }
                    jn.apply(this, arguments)
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    Nn.apply(this, arguments);
                    var r, l, s = Lo(i, t, this);
                    s.resizeBeginPoint && (r = Ao(this, "translateX", t), t.a(r), i = s.colWidths, l = 0, ii(i).call(i, function (e) {
                        l += e
                    }), delete s.resizeBeginPoint, delete s.resizeDragPoint, delete s.resizeColIndex, l < o ? t.a(r, 0) : t.iv())
                }
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    Fn.apply(this, arguments)
                }
            }]), t
        }(),
        Qs = ht.Default.containsPoint,
        Ye = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r, l = Lo(i, t, this);
                    l.disabled || (r = to(l.barRect, 2), e = no(i, t, this, a, e), Qs(r, e) && Zs(t, l, e, l.barRect, i))
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = to(r.sliderRect, 2),
                        s = r.showToolTip,
                        h = r.toolTipFormat,
                        r = Ao(this, "value", t),
                        a = no(i, t, this, a, e);
                    Qs(l, a) && s ? (r = t.a(r), r = qa(r) ? "0" : r + "", Hs.show(h ? h(r) : r, e)) : this.dragging || Hs.hide()
                }
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    Lo(i, t, this).disabled ? Qa(i, "not-allowed") : Qa(i, "pointer")
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    Qa(i, "default"), t.dragging || Hs.hide()
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l = Lo(i, t, this);
                    l.disabled || (r = to(l.sliderRect, 2), e = no(i, t, this, a, e), Qs(r, e) && (l.dragging = !0))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l = Lo(i, t, this);
                    l.dragging && (r = no(i, t, this, a, e), a = l.barRect, Zs(t, l, r, a, i), a = l.showToolTip, i = l.toolTipFormat, l = l.value, a && Hs.show(i ? i(l) : l, e))
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    delete Lo(i, t, this).dragging, Hs.hide()
                }
            }]), t
        }(),
        M = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h = Lo(i, t, this);
                    h.disabled || (r = to(h.barRect, 2), l = h.valueBarRect, s = h.valueBarDraggable, e = no(i, t, this, a, e), s && ht.Default.containsPoint(l, e) || ht.Default.containsPoint(r, e) && Ks(t, h, e, h.barRect, i))
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u = Lo(i, t, this);
                    u && u.sliderRect && u.sliderRect2 && (r = to(u.sliderRect, 2), l = to(u.sliderRect2, 2), s = u.showToolTip, h = u.toolTipFormat, u = u.value, a = no(i, t, this, a, e), ht.Default.containsPoint(r, a) && s ? Hs.show(h ? h(u[0]) : u[0], e) : ht.Default.containsPoint(l, a) && s ? Hs.show(h ? h(u[1]) : u[1], e) : this.dragging || Hs.hide())
                }
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    Lo(i, t, this).disabled ? Qa(i, "not-allowed") : Qa(i, "pointer")
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    Qa(i, "default"), t.dragging || Hs.hide()
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u, c = Lo(i, t, this);
                    c.disabled || (to(c.barRect, 2), r = to(c.sliderRect, 2), l = to(c.sliderRect2, 2), s = to(c.valueBarRect, 2), h = c.value, u = c.valueBarDraggable, e = no(i, t, this, a, e), ht.Default.containsPoint(r, e) ? c.dragging = h[1] : ht.Default.containsPoint(l, e) ? c.dragging = h[0] : u && ht.Default.containsPoint(s, e) && (c.draggingValueBar = Ks(t, c, e, c.barRect, i, !0)))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l, s = Lo(i, t, this),
                        h = s.showToolTip,
                        u = s.toolTipFormat,
                        c = s.barRect,
                        d = no(i, t, this, a, e);
                    void 0 !== s.dragging ? (r = Ks(t, s, d, c, i), h && Hs.show(u ? u(r) : r, e)) : void 0 !== s.draggingValueBar && (l = s.draggingValueBar, a = Ks(t, s, d, c, i, !0), r = s.value, d = s.min, c = s.max, l = [r[0] + (i = a - l), r[1] + i], i = Ao(this, "value", t), l[0] < d ? l = [d, d + (r[1] - r[0])] : l[1] > c && (l = [c - (r[1] - r[0]), c]), s.draggingValueBar = a, t.a(i, l), h && (h = l.join(","), u && (h = ql(l).call(l, function (e) {
                        return u(e)
                    }).join(", ")), Hs.show(h, e)))
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    delete t.dragging, delete t.draggingValueBar, Hs.hide()
                }
            }]), t
        }(),
        re = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h = Lo(i, t, this),
                        u = Ao(this, "value", t);
                    !h.disabled && u && ((s = h.dropDown) && s.isOpened() ? s.close() : (l = (r = h.value) ? bi(r).call(r, 0) : null, s = h.valueItemInfo, (s = Js(a, s)) && r && 0 <= Ii(r).call(r, s) && (s = Ii(r).call(r, s), Ki(r).call(r, s, 1), s = bi(r).call(r, 0), t.a(u, s), h.onChange && h.onChange(l, s, t, i), Qa(i, "default"), this._hitValue = r)))
                }
            }, {
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r, l = Lo(i, t, this);
                    l.disabled || (this._hitValue ? delete this._hitValue : (r = Ao(this, "value", t), 0 < a.x && a.x < o && 0 < a.y && a.y < n && Ys(t, i, l, r, !0)))
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    t.disabled ? Qa(i, "not-allowed") : (t = t.valueItemInfo, Js(a, t) ? (this._oldCursor = i.getView().style.cursor, Qa(i, "pointer")) : Qa(i, "default"))
                }
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    t.disabled ? Qa(i, "not-allowed") : Qa(i, "pointer"), t.disabled
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    Qa(i, "default")
                }
            }]), t
        }(),
        eh = ht.Default.containsPoint,
        fe = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDoubleClick",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        l = Lo(i, t, this),
                        s = l.treeTableDataModel,
                        h = l.scrollBarInfo,
                        a = l.translateX,
                        e = l.translateY,
                        i = l.isScrollBarDragging,
                        t = l.rectInfo;
                    s && (i ? l.isScrollBarDragging = !1 : qs(h, a, e, r) || t && (e = t.togglesRect, t = t.visibleRowsRect, "doubleClickRow" === s.a("expandMode") && s.onClickToggle(arguments, r, e) || "doubleClickRow" !== s.a("selectMode") || s.onClickVisibleRow(arguments, r, t, l)))
                }
            }, {
                key: "onClick",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        l = Lo(i, t, this),
                        s = l.treeTableDataModel,
                        h = l.scrollBarInfo,
                        a = l.translateX,
                        e = l.translateY,
                        i = l.isScrollBarDragging,
                        t = l.rectInfo;
                    s && (i ? l.isScrollBarDragging = !1 : qs(h, a, e, r) || t && (h = t.togglesRect, a = t.checksRect, e = t.visibleRowsRect, t = t.badgesRect, s.onClickBadge(arguments, r, t) || s.onClickCheck(arguments, r, a) || ("doubleClickRow" !== s.a("expandMode") && s.onClickToggle(arguments, r, h), "doubleClickRow" !== s.a("selectMode") && s.onClickVisibleRow(arguments, r, e, l) || s.onClickBack(arguments))))
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        l = Lo(i, t, this),
                        s = l.treeTableDataModel,
                        h = l.scrollBarInfo,
                        u = l.translateX,
                        c = l.translateY,
                        d = l.isScrollBarDragging,
                        a = l.rectInfo,
                        e = l.preHoverNode;
                    s && (d || (qs(h, u, c, r) ? e && (e.a("disabled") && Qa(i, "default"), e.a("_isHovering", !1), t.iv()) : a && (a = a.visibleRowsRect, s.onHoverRow(arguments, r, a, e, l))))
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.preHoverNode;
                    l && (Qa(i, "default"), l.a("_isHovering", !1), delete r.preHoverNode, t.iv())
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        a = Lo(i, t, this),
                        e = a.scrollBarInfo,
                        i = a.translateX,
                        t = a.translateY;
                    qs(e, i, t, r) && (a.isScrollBarDragging = !0), Hn.apply(this, arguments)
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    jn.apply(this, arguments)
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    t && (t.isScrollBarDragging = !1), Nn.apply(this, arguments)
                }
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    Fn.apply(this, arguments)
                }
            }]), t
        }(),
        th = ht.Default.containsPoint,
        Re = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        l = Lo(i, t, this),
                        s = l.treeTableDataModel,
                        h = l.scrollBarInfo,
                        a = l.translateX,
                        e = l.translateY,
                        i = l.isScrollBarDragging,
                        t = l.rectInfo;
                    s && (i ? l.isScrollBarDragging = !1 : $s(h, a, e, r) || t && (a = t.togglesRect, e = t.checksRect, t = t.visibleRowsRect, s.onClickHeadCell(arguments, r) || s.onClickCheck(arguments, r, e) || s.onClickToggle(arguments, r, a) || s.onClickVisibleRow(arguments, r, t, l) || s.onClickBack(arguments)))
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        l = Lo(i, t, this),
                        s = l.treeTableDataModel,
                        h = l.scrollBarInfo,
                        u = l.translateX,
                        c = l.translateY,
                        d = l.isScrollBarDragging,
                        a = l.rectInfo,
                        e = l.preHoverNode;
                    if (s && !d)
                        if ($s(h, u, c, r)) e && (e.a("disabled") && Qa(i, "default"), e.a("_isHovering", !1), t.iv());
                        else {
                            a && (a = a.visibleRowsRect, s.onHoverRow(arguments, r, a, e, l));
                            var g = !1;
                            if (s.a("headLineDraggable")) {
                                for (var f = s.a("columnLinesRect"), v = 0, p = f.length; v < p; v++)
                                    if (th(f[v], r)) {
                                        Qa(i, "ew-resize"), g = !0;
                                        break
                                    } v === p && Qa(i, "default")
                            }
                            s.a("headDraggable") && !g && th(s.a("headRect"), r) && Qa(i, "pointer")
                        }
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.preHoverNode;
                    l && (l.a("_isHovering", !1), delete r.preHoverNode, t.iv()), Qa(i, "default")
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r = no(i, t, this, a, e),
                        l = Lo(i, t, this),
                        a = l.treeTableDataModel,
                        e = l.scrollBarInfo,
                        i = l.translateX,
                        t = l.translateY;
                    if ($s(e, i, t, r) && (l.isScrollBarDragging = !0), Hn.apply(this, arguments), a) {
                        if (a.a("headLineDraggable"))
                            for (var s = a.a("columnLinesRect"), h = 0, u = s.length; h < u; h++)
                                if (th(s[h], r)) return l.dragColumnLineIndex = h, void(l.columnLineBegingDragX = r.x);
                        if (a.a("headDraggable"))
                            for (var c = a.a("columnsRect"), d = 0, g = c.length; d < g; d++)
                                if (th(c[d], r)) return l.dragStartColumnIndex = d, void(l.dragStartColumnBeginDragX = r.x)
                    }
                }
            }, {
                key: "onDrag",
                value: function (e, s, t, i, a, o) {
                    var h = no(t, s, this, i, e),
                        u = Lo(t, s, this),
                        c = u.treeTableDataModel,
                        n = u.dragColumnLineIndex,
                        r = u.columnLineBegingDragX,
                        d = u.dragStartColumnBeginDragX,
                        t = u.dragStartColumnIndex;
                    if (jn.apply(this, arguments), c) {
                        if (c.a("headLineDraggable")) {
                            if (u._dragColumnLineTimer) return;
                            u._dragColumnLineTimer = ci(function () {
                                void 0 !== n && (u.dragColumnLineDistance = h.x - r, s.iv()), delete u._dragColumnLineTimer
                            }, 10)
                        }
                        void 0 === n && c.a("headDraggable") && void 0 !== t && (u._dragColumnTimer || (u._dragColumnTimer = ci(function () {
                            for (var e = c.a("columnsRect"), t = 0, i = e.length; t < i; t++) {
                                var a = e[t];
                                if (th(a, h)) {
                                    var o = a.x,
                                        n = a.y,
                                        r = a.width,
                                        l = a.height,
                                        a = c.a("columnLineWidth");
                                    h.x < o + r / 2 ? (u.dragColumnLineRect = {
                                        x: o - a,
                                        y: n,
                                        width: a,
                                        height: l
                                    }, u.dragColumnDirection = "left") : (u.dragColumnLineRect = {
                                        x: o + r,
                                        y: n,
                                        width: a,
                                        height: l
                                    }, u.dragColumnDirection = "right"), u.dragEndColumnIndex = t, u.dragColumnDistance = h.x - d, s.iv();
                                    break
                                }
                            }
                            delete u._dragColumnTimer
                        }, 10)))
                    }
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.treeTableDataModel,
                        s = r.dragColumnLineIndex,
                        h = r.dragColumnLineDistance;
                    r.columnLineBegingDragX;
                    var u, c, d, g = r.dragStartColumnIndex,
                        f = r.dragEndColumnIndex,
                        v = r.dragColumnDirection;
                    if (r && (r.isScrollBarDragging = !1), Nn.apply(this, arguments), l) {
                        if (l.a("headLineDraggable") && (u = l.a("dragColumnsLineDiff") || {}, c = l.a("colWidths"), d = l.a("defColWidths"), i = l.a("visibleColumns"), void 0 !== s && void 0 !== h && (u[i[s].key] = c[s] - d[s], l.a("dragColumnsLineDiff", u))), void 0 !== s) return r._dragColumnLineTimer && (clearTimeout(r._dragColumnLineTimer), delete r._dragColumnLineTimer), delete r.dragColumnLineIndex, delete r.dragColumnLineDistance, void delete r.columnLineBegingDragX;
                        l.a("headDraggable") && (void 0 !== g && void 0 !== f && ((g === f ? 1 : f - g == -1 && "right" === v ? 1 : f - g == 1 && "left" === v ? 1 : 0) || l.a("dragColumnsInfo", {
                            dragStartColumnIndex: g,
                            dragEndColumnIndex: f
                        }), t.iv()), r._dragColumnTimer && (clearTimeout(r._dragColumnTimer), delete r._dragColumnTimer), delete r.dragStartColumnIndex, delete r.dragEndColumnIndex, delete r.dragColumnLineRect, delete r.dragColumnDirection, delete r.dragStartColumnBeginDragX, delete r.dragColumnDistance)
                    }
                }
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    Fn.apply(this, arguments)
                }
            }]), t
        }(),
        ih = 10,
        ah = 10;
    ht.Default.setCompType("htVectorChartTip", {
        width: 50,
        height: 50,
        func: function (l, e, t, i, a) {
            var o = t.getValue("labelFont"),
                s = t.getValue("labelColor"),
                h = t.getValue("itemFont");
            t.getValue("itemColor");
            var u, c, d, g, f = t.getValue("itemIconSize"),
                n = t.getValue("info");
            n && (ht.Default.isArray(n) || (n = [n]), u = e.x, t = e.y, e.width, e.height, d = c = 0, g = t, ii(n).call(n, function (e, t) {
                var i = e.label,
                    a = e.datas,
                    r = e.colors;
                0 < t && (g += 8, c += 8), i && (t = Ea(o, i), c += t.height, d = t.width, ht.Default.drawText(l, i, o, s, u, g, t.width, t.height, "left"), g += t.height + 2), ii(a).call(a, function (e, t) {
                    var i = Ie(e, 3),
                        a = i[0],
                        o = i[1],
                        e = i[2],
                        i = null != a ? Ni(n = "".concat(a, "：")).call(n, o) : o,
                        a = Ea(h, i);
                    c += a.height + 2, d = Math.max(d, a.width + f + 3);
                    var n = u;
                    ht.Default.isEmptyObject(r) || (e = e || r[t], e = Co(l, e, {
                        x: o = f / 2,
                        y: g,
                        width: 2 * o,
                        height: 2 * o
                    }), l.fillStyle = e || r[t], l.beginPath(), l.moveTo(o, g + o), l.arc(o, g + o, o, 0, 2 * Math.PI), Gi(l).call(l), n += 3 + f), ht.Default.drawText(l, i, h, s, n, g, a.width, a.height, "left"), g += a.height + 2
                })
            }), ah = c, ih = d)
        },
        properties: {
            labelFont: {
                valueType: "Font",
                defaultValue: "14px arial, sans-serif"
            },
            labelColor: {
                valueType: "Color",
                defaultValue: "rgb(247, 247, 247)"
            },
            itemFont: {
                valueType: "Font",
                defaultValue: "14px arial, sans-serif"
            },
            itemColor: {
                valueType: "Color",
                defaultValue: "rgb(247, 247, 247)"
            },
            itemIconSize: {
                valueType: "PositiveNumber",
                defaultValue: 12
            },
            info: {
                valueType: "Object",
                defaultValue: {}
            }
        }
    }), ht.Default.setImage("htVectorChartTip", {
        width: 50,
        height: 50,
        fitSize: !0,
        pixelPerfect: !1,
        interactive: !0,
        boundExtend: 2,
        comps: [{
            type: "htVectorChartTip",
            displayName: "htVectorChartTip",
            rect: [0, 0, 50, 50],
            info: {
                func: "attr@info",
                value: {}
            },
            itemColor: {
                func: "attr@itemColor",
                value: "rgb(247, 247, 247)"
            },
            labelFont: {
                func: "attr@labelFont",
                value: "14px arial, sans-serif"
            },
            itemFont: {
                func: "attr@itemFont",
                value: "14px arial, sans-serif"
            }
        }]
    });

    function oh(e, t) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i],
                o = a.rect,
                a = a.index;
            if (ht.Default.containsPoint(o, t)) return a
        }
    }
    var Oe = function () {
            g(a, ht.graph.GraphView);
            var i = f(a);

            function a() {
                var e;
                c(this, a), (e = i.call(this)).getView().style.position = "relative";
                var t = e._tipNode = new ht.Node;
                return t.setImage("htVectorChartTip"), e.dm().add(t), e.setWidth(ih), e.setHeight(ah), e
            }
            return d(a, [{
                key: "setInfo",
                value: function (e) {
                    var t = this;
                    this._tipNode.a("info", e), this.getWidth() === ih && this.getHeight() === ah || ht.Default.callLater(function () {
                        t._tipNode.setWidth(ih), t._tipNode.setHeight(ah), t.setWidth(ih), t.setHeight(ah), t.fitContent(!1, 0)
                    })
                }
            }, {
                key: "setAttr",
                value: function (e) {
                    this._tipNode.a(e)
                }
            }]), a
        }(),
        nh = new Oe,
        ge = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (n, r, l, e, t, i) {
                    var s, h, a = Lo(l, r, this),
                        o = a.ui,
                        u = a.option;
                    if (u && (a = o.interactiveInfo, o.bounds.bodyRect, s = a.axisInfos, h = no(l, r, this, e, n), a = u.series, ii(a).call(a, function (a, o) {
                            "bar" === a.type && a.onClickBar && ii(s).call(s, function (e) {
                                ii(e).call(e, function (e) {
                                    var t = e.series[o],
                                        i = t[5];
                                    Bo(i, h) && a.onClickBar(n, {
                                        axisName: e.label,
                                        seriesName: t[0],
                                        seriesValue: t[1]
                                    }, r, l)
                                })
                            })
                        })), o)
                        for (var c = no(l, r, this, e, n), e = o.interactiveInfo || {}, o = e.labelRects, d = void 0 === o ? [] : o, g = e.axisInfos, f = 0, v = d.length; f < v; f++)
                            if (Bo(d[f], c)) {
                                u.onXAxisLabelClicked && u.onXAxisLabelClicked({
                                    label: g[0][f].label,
                                    datas: g[0][f].series,
                                    index: f
                                }, r, l);
                                break
                            }
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.ui,
                        s = r.option;
                    if (s && l && (r._moveTimer && clearTimeout(r._moveTimer), s && s.tooltip.show && !r._dragging)) {
                        var h = l.interactiveInfo,
                            u = l.bounds.bodyRect,
                            h = h.axisInfos,
                            a = no(i, t, this, a, e),
                            s = s.tooltip.formatter;
                        if (Bo(u, a) && h.length) {
                            for (var c, d, g, f = l.valueAxis === fa ? a.y : a.x, v = 1 / 0, p = h[0], y = 0; y < p.length; y++) {
                                var x = Math.abs(p[y].position - f);
                                x < v && (v = x, c = y)
                            }
                            p[c] && (d = [], g = bi(l = l.seriesColors).call(l, 0), ii(h).call(h, function (e) {
                                e = e[c];
                                d.push({
                                    label: e.label,
                                    datas: e.series,
                                    colors: Ki(g).call(g, 0, e.series.length),
                                    index: c
                                })
                            }), d = ro(d), s && s(d, t, i), nh.setInfo(d), Hs.show(nh.getView(), e)), r.hoverIndex !== c && (r.hoverIndex = c, t.iv())
                        } else delete r.hoverIndex, t.iv(), Hs.hide()
                    }
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    i = Lo(i, t, this);
                    void 0 !== i.hoverIndex && (delete i.hoverIndex, t.iv(), Hs.hide())
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r = So(i, t, this, e),
                        l = Lo(i, t, this),
                        e = l.option,
                        i = l.ui;
                    l && e && e.onRectSelected && (void 0 !== l.hoverIndex && (delete l.hoverIndex, t.iv(), Hs.hide()), i = i.bounds.bodyRect, r = {
                        x: a.x + r.rect.x,
                        y: a.y + r.rect.y
                    }, Bo(i, r) && (l._dragging = !0, l.rectPoint1 = r))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r = So(i, t, this, e),
                        e = Lo(i, t, this);
                    e && e._dragging && (i = e.ui.bounds.bodyRect, r = {
                        x: a.x + r.rect.x,
                        y: a.y + r.rect.y
                    }, e.rectPoint2 = yo(i, r), t.iv())
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u, c, d, g, f, v = Lo(i, t, this);
                    v && v._dragging && (r = v.ui, l = v.option, s = r.rectPoint1, h = r.rectPoint2, u = r.valueAxis, c = l.xAxis, d = l.yAxis, g = Mo(s, h), delete v._dragging, delete v.rectPoint1, delete v.rectPoint2, t.iv(), f = {
                        x: [],
                        y: []
                    }, ii(c).call(c, function (e) {
                        var t, i, a, o = e.type,
                            n = [];
                        f.x.push(n), pa === o ? (a = r.interactiveInfo).axisInfos && a.axisInfos.length && ii(t = a.axisInfos[0]).call(t, function (e, t) {
                            e.position > g.x & e.position < g.x + g.width && n.push(t)
                        }) : ya !== o || (i = e._axisObj.timeRange) && (t = (a = Ie(i, 2))[0], e = (o = a[1]) - t, i = r.bounds.bodyRect, a = Math.floor((g.x - i.x) / i.width * e + t), e = Math.floor((g.x - i.x + g.width) / i.width * e + t), a = Math.max(a, t), e = Math.min(e, o), n.push(a), n.push(e))
                    }), ii(d).call(d, function (e) {
                        var t, i, a, o, n = [];
                        f.y.push(n), va === u && (t = (o = Ie(e._axisObj.zoomValueRange, 2))[0], i = o[1], o = ((a = r.bounds.bodyRect).height - g.height - g.y + a.y) / a.height * (e = i - t) + t, e = (a.height - g.y + a.y) / a.height * e + t, o = Math.max(o, t), e = Math.min(e, i), n.push(o), n.push(e))
                    }), l.onRectSelected(f, t, i))
                }
            }]), t
        }(),
        jt = function () {
            g(t, Fs);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r, l, s = Lo(i, t, this);
                    s.disabled || (l = Ao(this, "value", t), 0 < a.x && a.x < o && 0 < a.y && a.y < n && (r = t, t = i, i = "a@" + l, (s = (l = s).dropDown) || (r.getFormat = function () {
                        return r.a(Ji.FORMAT)
                    }, s = new Qo(r, t, l, i), l.dropDown = s), s.open()))
                }
            }]), t
        }(),
        rh = J("Array").values,
        lh = Array.prototype,
        sh = {
            DOMTokenList: !0,
            NodeList: !0
        },
        hh = function (e) {
            var t = e.values;
            return e === lh || e instanceof Array && t === lh.values || sh.hasOwnProperty(Lt(e)) ? rh : t
        },
        Ee = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.apply(this, arguments)
            }
            return d(t, [{
                key: "onEnter",
                value: function (e, t, i, a, o, n) {
                    var r = "pointer";
                    Lo(i, t, this).disabled && (r = "not-allowed"), Qa(i, r)
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this);
                    Qa(i, "default"), r.hoverIndex = null, t.iv()
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.buttonRects;
                    hh(r);
                    var s = r.disabled,
                        a = no(i, t, this, a, e),
                        e = null;
                    s || (e = l ? oh(l, a) : e) !== r.hoverIndex && (r.hoverIndex = e, t.iv())
                }
            }, {
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.buttonRects,
                        s = hh(r),
                        h = r.disabled,
                        u = r.onChange,
                        r = no(i, t, this, a, e),
                        a = Ao(this, "value", t),
                        e = null;
                    !h && a && (l && (e = oh(l, r)), (s = qa(e) ? null : s[e]) !== (e = t.a(a)) && (t.a(a, s), u && u(e, s, t, i)))
                }
            }]), t
        }(),
        uh = Math.PI,
        ch = Math.pow,
        dh = Math.sin,
        gh = {
            swing: function (e) {
                return -Math.cos(e * uh) / 2 + .5
            },
            easeNone: function (e) {
                return e
            },
            easeIn: function (e) {
                return e * e
            },
            easeOut: function (e) {
                return (2 - e) * e
            },
            easeBoth: function (e) {
                return (e *= 2) < 1 ? .5 * e * e : .5 * (1 - --e * (e - 2))
            },
            easeInStrong: function (e) {
                return e * e * e * e
            },
            easeOutStrong: function (e) {
                return 1 - --e * e * e * e
            },
            easeBothStrong: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e : .5 * (2 - (e -= 2) * e * e * e)
            },
            elasticIn: function (e) {
                return 0 === e || 1 === e ? e : -(ch(2, 10 * --e) * dh(2 * uh * (e - .075) / .3))
            },
            elasticOut: function (e) {
                return 0 === e || 1 === e ? e : ch(2, -10 * e) * dh(2 * uh * (e - .075) / .3) + 1
            },
            elasticBoth: function (e) {
                return 0 === e || 1 === e ? e : e < 1 ? ch(2, 10 * --e) * dh(2 * uh * (e - .1125) / .45) * -.5 : ch(2, -10 * --e) * dh(2 * uh * (e - .1125) / .45) * .5 + 1
            },
            backIn: function (e) {
                if (1 === e) return e;
                return e * e * (2.70158 * e - 1.70158)
            },
            backOut: function (e) {
                return --e * e * (2.70158 * e + 1.70158) + 1
            },
            backBoth: function (e) {
                var t = 1.70158;
                return (e *= 2) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
            },
            bounceIn: function (e) {
                return 1 - Easing.bounceOut(1 - e)
            },
            bounceOut: function (e) {
                var t = 7.5625,
                    e = e < 1 / 2.75 ? t * e * e : e < 2 / 2.75 ? t * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? t * (e -= 2.25 / 2.75) * e + .9375 : t * (e -= 2.625 / 2.75) * e + .984375;
                return e
            },
            bounceBoth: function (e) {
                return e < .5 ? .5 * Easing.bounceIn(2 * e) : .5 * Easing.bounceOut(2 * e - 1) + .5
            }
        },
        gi = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.apply(this, arguments)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h = Lo(i, t, this),
                        u = no(i, t, this, a, e),
                        c = h.itemInfos,
                        d = h.index,
                        g = h.animation,
                        a = h.onClickItem,
                        e = h.dataSource;
                    if (c && c.length)
                        for (var f = 0; f < c.length; f++) {
                            var v = c[f];
                            if (Bo(v.rect, u)) {
                                r = v.index;
                                break
                            }
                        }!_o(r) || d === r || (l = Ao(this, "index", t)) && (g ? (h._animationObj && h._animationObj.stop(), s = r - d, h._animationObj = ht.Default.startAnim({
                            frames: 30,
                            interval: 16,
                            easing: gh.easeOut,
                            finishFunc: function () {
                                delete h._animationObj
                            },
                            action: function (e) {
                                t.a(l, d + s * e)
                            }
                        })) : t.a(l, r)), _o(r) && a && a(e[r], r, t, i)
                }
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = no(i, t, this, a, e),
                        s = r.itemInfos,
                        h = !1;
                    if (s && s.length)
                        for (var u = 0; u < s.length; u++) {
                            var c = s[u];
                            if (Bo(c.rect, l)) {
                                h = !0;
                                break
                            }
                        }
                    Qa(i, h ? "pointer" : "default")
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    Qa(i, "default")
                }
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.scrollable,
                        i = r.index,
                        r = r.dataSource,
                        e = 0 < e.scrollDelta ? 1 : -1;
                    l && (l = r.length, r = Ao(this, "index", t), 0 <= (e = i + e) && e < l && t.a(r, e))
                }
            }]), t
        }(),
        gr = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.apply(this, arguments)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h = Lo(i, t, this),
                        u = no(i, t, this, a, e),
                        c = h.itemInfos,
                        d = h.index,
                        g = h.animation,
                        a = h.onClickItem,
                        e = h.dataSource;
                    if (c && c.length)
                        for (var f = 0; f < c.length; f++) {
                            var v = c[f];
                            if (Bo(v.rect, u)) {
                                r = v.index;
                                break
                            }
                        }!_o(r) || d === r || (l = Ao(this, "index", t)) && (g ? (h._animationObj && h._animationObj.stop(), s = r - d, h._animationObj = ht.Default.startAnim({
                            frames: 30,
                            interval: 16,
                            easing: gh.easeOut,
                            finishFunc: function () {
                                delete h._animationObj
                            },
                            action: function (e) {
                                t.a(l, d + s * e)
                            }
                        })) : t.a(l, r)), _o(r) && a && a(e[r], r, t, i)
                }
            }, {
                key: "onEnter",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = no(i, t, this, a, e),
                        s = r.itemInfos,
                        h = !1;
                    if (s && s.length)
                        for (var u = 0; u < s.length; u++) {
                            var c = s[u];
                            if (Bo(c.rect, l)) {
                                h = !0;
                                break
                            }
                        }
                    Qa(i, h ? "pointer" : "default")
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.scrollable,
                        i = r.index,
                        r = r.dataSource,
                        e = 0 < e.scrollDelta ? 1 : -1;
                    l && (l = r.length, r = Ao(this, "index", t), 0 <= (e = i + e) && e < l && t.a(r, e))
                }
            }]), t
        }(),
        fh = [],
        vh = fh.sort,
        T = s(function () {
            fh.sort(void 0)
        }),
        We = s(function () {
            fh.sort(null)
        }),
        me = e("sort");
    ue({
        target: "Array",
        proto: !0,
        forced: T || !We || !me
    }, {
        sort: function (e) {
            return void 0 === e ? vh.call(E(this)) : vh.call(E(this), le(e))
        }
    });
    var ph = J("Array").sort,
        yh = Array.prototype,
        xh = function (e) {
            var t = e.sort;
            return e === yh || e instanceof Array && t === yh.sort ? ph : t
        };
    ue({
        target: "Date",
        stat: !0
    }, {
        now: function () {
            return (new Date).getTime()
        }
    });

    function bh(s, e) {
        var n = e.data,
            r = e.view,
            h = ql(t = s.xAxis).call(t, function (e) {
                return e._axisObj.boundHeight
            }),
            u = ql(m = s.yAxis).call(m, function (e) {
                return e._axisObj.boundWidth
            }),
            a = 2,
            c = e.leftAxis = [],
            d = e.rightAxis = [],
            g = e.topAxis = [],
            f = e.bottomAxis = [],
            v = 0,
            o = 0,
            p = 0,
            l = 0;
        ii(t = s.xAxis).call(t, function (e, t) {
            var i;
            e.show && (i = e.bodyGap, e._axisObj.position === oa ? (p += h[t] + i, g.push(t)) : (l += h[t] + i, f.push(t)))
        }), ii(m = s.yAxis).call(m, function (e, t) {
            var i;
            e.show && (i = e.bodyGap, e._axisObj.position === ra ? (o += u[t] + i, d.push(t)) : (v += u[t] + i, c.push(t)), a = Math.max(a, 2 + e._axisObj.labelHeight / 2))
        }), p < a && (p = a), l < a && (l = a);
        var t = e.contentRect,
            y = 0,
            x = 0;
        e.valueAxis === va && ii(i = s.xAxis).call(i, function (e) {
            var t, i, a, o = e._axisObj.data;
            e.axisLabel.show && o ? (t = (a = Ea(e.axisLabel.font, o[0])).width / 2, x < t && (x = t), a = Ea(e.axisLabel.font, o[o.length - 1]), y = Math.max(a.width / 2, y)) : e.axisLabel.show && e.type === ya && ("string" == typeof (a = e._axisObj.formatter) && (i = a, a = function (e) {
                return po(new Date(e), i)
            }), a = (e = Ea(e.axisLabel.font, a ? a(Lh(), n, r) : "e")).width / 2, x < a && (x = a), y = Math.max(e.width / 2, y))
        }), ii(m = s.yAxis).call(m, function (a) {
            var e;
            a.markLines && ii(e = a.markLines).call(e, function (e) {
                var t = e.value,
                    i = e.labelStyle,
                    e = i && i.font || _h;
                i && i.formatter && (t = i.formatter(t));
                t = Ea(e, t).width + 6;
                a._axisObj.position === la && y < t ? y = t : x < t && (x = t)
            })
        }), v < x && (u[0] += x - v, v = x);
        var b = t.x,
            i = t.y,
            m = t.width,
            t = t.height,
            w = [],
            C = [],
            k = b,
            V = i,
            T = m - v - o,
            I = t - p - l;
        o < y && (T = T - y + o), T = Math.max(0, T), I = Math.max(0, I), V = i + p, ii(u).call(u, function (e, t) {
            var i = s.yAxis[t]._axisObj.position,
                a = s.yAxis[t].bodyGap;
            if (i === ra) {
                for (var o = 0, n = Ii(d).call(d, t); 0 < n;) o += u[d[--n]];
                w.push({
                    x: b + v + T + o + a,
                    y: V,
                    width: e,
                    height: I
                })
            } else {
                for (var r = 0, l = Ii(c).call(c, t); 0 < l;) r += u[c[--l]];
                w.push({
                    x: k + r,
                    y: V,
                    width: e,
                    height: I
                })
            }
        }), k = b + v, V = i, ii(h).call(h, function (e, t) {
            var i = s.xAxis[t]._axisObj.position,
                a = s.xAxis[t].bodyGap;
            if (i === oa) {
                for (var o = 0, n = Ii(g).call(g, t); 0 < n;) o += h[g[--n]];
                C.push({
                    x: k,
                    y: V + o - a,
                    width: T,
                    height: e
                })
            } else {
                for (var r = 0, l = Ii(f).call(f, t); 0 < l;) r += h[f[--l]];
                C.push({
                    x: k,
                    y: V + I + p + r + a,
                    width: T,
                    height: e
                })
            }
        }), i = {
            x: b + v,
            y: i + p,
            width: Math.max(0, T),
            height: Math.max(0, I)
        }, e.bounds = {
            xAxisRects: C,
            yAxisRects: w,
            bodyRect: i
        }
    }

    function mh(a, o, e) {
        return a = Ah(a) ? bi(a).call(a, 0) : [a], ii(a).call(a, function (e, t) {
            var i = Rh(o);
            $a(i, e), a[t] = i
        }), a
    }

    function wh(e, t, i, a, o, n) {
        var r = t.max,
            l = t.min,
            s = t.step,
            i = (i.x - a.x) / a.width * (r - l) + l,
            t = (a = t.value)[0],
            a = a[1];
        return i = Math.min(r, i), i = Math.max(l, i), s && (i = i - (l = i % s) + (Math.abs(l) > s / 2) * (l < 0 ? -s : s)), s = null, s = _o(o) ? o <= i ? [o, i] : [i, o] : (o = Math.abs(t - i), Math.abs(a - i) <= o ? [t, i] : [i, a]), !n && e && e(s), i
    }

    function Ch(e, t, i, a, o, n) {
        var r = t.max,
            l = t.min,
            s = t.step,
            i = (a.height - (i.y - a.y)) / a.height * (r - l) + l,
            t = (a = t.value)[0],
            a = a[1];
        return i = Math.min(r, i), i = Math.max(l, i), s && (i = i - (l = i % s) + (Math.abs(l) > s / 2) * (l < 0 ? -s : s)), s = null, s = _o(o) ? o <= i ? [o, i] : [i, o] : (o = Math.abs(t - i), Math.abs(a - i) <= o ? [t, i] : [i, a]), !n && e && e(s), i
    }

    function kh(e, t, i, a, o) {
        var n = i.x,
            r = i.y,
            l = i.width,
            i = i.height;
        return ((l = o ? i : l) - ((o ? a.y : a.x) - (o ? r : n))) / l * (t - e) + e
    }

    function Vh(n, e, t, i, a, o, r) {
        var l = (h = Lo(t, e, i)).ui,
            s = h.option,
            h = l.bounds.bodyRect,
            a = no(t, e, i, a, n);
        if (l && s && Bo(h, a)) {
            var a = l.xAxisDataZoom,
                l = l.yAxisDataZoom,
                a = a ? a.slider : null,
                l = l ? l.slider : null,
                u = !1;
            return ii(l = [a, l]).call(l, function (e) {
                var t, i, a, o;
                e && (o = e.value, i = e.zoomIncrement, a = e.min, t = e.max, e = e.setter, i = (t - a) * i * (0 < n.scrollDelta ? 1 : -1), a = Math.max(a, o[0] - i), (o = Math.min(t, o[1] + i)) <= a && (a = o - 1), Math.abs(o - a) < Math.abs(i) || (e([a, o]), u = !0))
            }), u
        }
    }

    function Th(e, t, i, a) {
        return "function" == typeof t ? t(e, i, a) : "string" == typeof t ? po(new Date(e), t) : e
    }

    function Ih(e, t, i) {
        e.x;
        var a = e.y;
        e.width;
        var o = e.height,
            e = i - t;
        return 0 <= t ? a + o : i <= 0 ? a : a + o * (1 - Math.abs(t) / e)
    }

    function Dh(e, t, i, a) {
        var o = (n = Ie(e, 2))[0],
            e = n[1],
            t = (n = Ie(t, 2))[0],
            n = n[1],
            n = (i - n) / (t - n) * (e - o) + o;
        return a ? n : Math.max(o, Math.min(e, n))
    }

    function Sh(e, t) {
        for (var i = 0; i < e.length; i++)
            if (Bo(e[i].rect, t)) return e[i]
    }
    var Lh = Se.Date.now,
        Ts = ht.Default,
        Ah = Ts.isArray,
        Rh = Ts.clone,
        _h = "12px arial",
        Ph = new Oe,
        Ds = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    So(i, t, this, e);
                    var r = Lo(i, t, this),
                        l = r.ui,
                        s = r.option;
                    if (l && s && s.tooltip.show) {
                        var h = s.tooltip;
                        if (r._dragging || r.dragging) return delete r.hoverTime, delete r.hoverPositionX, t.iv(), void Hs.hide();
                        r._moveTimer && clearTimeout(r._moveTimer);
                        var u = no(i, t, this, a, e),
                            c = s.xAxis[0]._axisObj.zoomTimeRange,
                            d = l.xAxisDataZoom,
                            g = l.yAxisDataZoom,
                            f = d ? d.slider : null,
                            v = g ? g.slider : null;
                        if (c && s.series) {
                            a = l.seriesDatas, d = l.bounds.bodyRect, g = d.x;
                            d.y;
                            var p, y, x = c[0],
                                b = c[1],
                                m = {},
                                w = [],
                                C = ql(c = s.series).call(c, function (e) {
                                    return e.name
                                });
                            if (!Bo(d, u)) return delete r.hoverTime, t.iv(), Hs.hide(), f && (Bo(to(f.sliderRect, 3), u) || Bo(to(f.sliderRect2, 3), u) || Bo(f.valueBarRect, u)) ? (Qa(i, "ew-resize"), void(r.sliderInfo = {
                                axis: fa,
                                info: f
                            })) : v && (Bo(to(v.sliderRect, 3), u) || Bo(to(v.sliderRect2, 3), u) || Bo(v.valueBarRect, u)) ? (Qa(i, "ns-resize"), void(r.sliderInfo = {
                                axis: va,
                                info: v
                            })) : (delete r.sliderInfo, void Qa(i, "default"));
                            for (p in ii(a).call(a, function (e, a) {
                                    var o, n;
                                    e && (o = {}, n = l.seriesColors[a], ii(e).call(e, function (e) {
                                        var t, i = e[0];
                                        i < x || b < i || (t = (t = m[i]) || (m[i] = {
                                            time: i,
                                            series: []
                                        }), o[i] || (t.series.push([C[a], e[1], n]), o[i] = !0))
                                    }))
                                }), m) w.push(m[p]);
                            if (xh(w).call(w, function (e, t) {
                                    return e.time > t.time ? 1 : -1
                                }), !w.length || (g = function (e, t) {
                                    var i, a, o = t.length;
                                    if (1 === o) return t[0];
                                    for (; 1 !== o;) {
                                        var n = Math.floor(o / 2),
                                            r = t[n],
                                            l = r.time;
                                        if (e === l) return r;
                                        if (g = Math.abs(e - l), _o(i) && a < g) {
                                            for (var s = 1 / 0, h = void 0, u = 0; u < t.length; u++) {
                                                var c = t[u],
                                                    d = Math.abs(e - c.time);
                                                d < s && (h = c, s = d)
                                            }
                                            return s < a && h ? h : i
                                        }
                                        o = (t = l < e ? bi(t).call(t, Math.min(o - 1, n + 1)) : bi(t).call(t, 0, n)).length, i = r, a = g
                                    }
                                    var g, f = t[0];
                                    return a < (g = Math.abs(f.time - e)) ? i : f
                                }(u = Math.floor((u.x - g) / d.width * (b - x) + x), w)) && ("string" == typeof (d = s.xAxis[0]._axisObj.formatter) && (y = d, d = function (e) {
                                    return po(new Date(e), y)
                                }), s = d(g.time, t, i), bi(d = l.seriesColors).call(d, 0), s = [{
                                    label: s,
                                    datas: g.series,
                                    colors: ql(s = g.series).call(s, function (e) {
                                        return e[2]
                                    })
                                }], s = ro(s), h.formatter && h.formatter(s, g.time, t, i), Ph.setInfo(s), u = g.time, r.hoverTime !== u && (r.hoverTime = u, t.iv()), Hs.show(Ph.getView(), e)), f || v) {
                                r = r.sliderInfo = {
                                    info: [],
                                    body: !0
                                };
                                return f && r.info.push({
                                    axis: fa,
                                    info: f
                                }), void(v && r.info.push({
                                    axis: va,
                                    info: v
                                }))
                            }
                        }
                    }
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    i = Lo(i, t, this);
                    void 0 !== i.hoverTime && (delete i.hoverTime, t.iv(), Hs.hide())
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l = So(i, t, this, e),
                        s = Lo(i, t, this),
                        h = s.option,
                        u = s.ui,
                        c = s.sliderInfo;
                    if (s && h.onRectSelected) {
                        void 0 !== s.hoverIndex && (delete s.hoverIndex, t.iv(), Hs.hide());
                        var d = u.bounds.bodyRect,
                            g = {
                                x: a.x + l.rect.x,
                                y: a.y + l.rect.y
                            };
                        if (Bo(d, g)) return s._dragging = !0, void(s.rectPoint1 = g)
                    }
                    c && (u = (h = c.info).sliderRect, l = h.sliderRect2, d = h.valueBarRect, g = h.value, h = h.barRect, r = no(i, t, this, a, e), s.dragging = !0, c.body ? ii(s = c.info).call(s, function (e) {
                        e.draggingValue = kh(e.info.value[0], e.info.value[1], e.info.barRect, r, e.axis === va)
                    }) : Bo(to(u, 3), r) ? c.fixed = g[1] : Bo(to(l, 3), r) ? c.fixed = g[0] : Bo(d, r) && (fa === c.axis ? c.draggingValue = wh(null, c.info, r, h, null, !0) : c.draggingValue = Ch(null, c.info, r, h, null, !0)))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r = So(i, t, this, e),
                        l = Lo(i, t, this);
                    l && l._dragging && (c = l.ui.bounds.bodyRect, h = {
                        x: a.x + r.rect.x,
                        y: a.y + r.rect.y
                    }, l.rectPoint2 = yo(c, h), l._drawTimer && clearTimeout(l._drawTimer), l._drawTimer = ci(function () {
                        t.iv(), delete l._drawTimer
                    }, 2));
                    var s, h, u, c, d, g = l.sliderInfo,
                        r = l.option;
                    l.dragging && g && (h = (c = g.info).barRect, c = c.setter, s = no(i, t, this, a, e), a = g.axis === fa ? wh : Ch, d = fa === g.axis ? r.xAxis[0]._axisObj.formatter : r.yAxis[0].axisLabel ? r.yAxis[0].axisLabel.formatter : null, _o(g.fixed) ? (u = a(c, g.info, s, h, g.fixed), Hs.show(d ? Th(u, d, t, i) : u, e)) : _o(g.draggingValue) ? (r = g.draggingValue, u = a(null, g.info, s, h, null, !0) - r, a = g.info.value, h = g.info.min, r = g.info.max, (u = [a[0] + u, a[1] + u])[0] < h ? u = [h, h + (a[1] - a[0])] : u[1] > r && (u = [r - (a[1] - a[0]), r]), c(u), c = u.join(","), d && (c = ql(u).call(u, function (e) {
                        return Th(e, d, t, i)
                    }).join(",")), Hs.show(c, e)) : g.body && ii(g = g.info).call(g, function (e) {
                        var t = e.info,
                            i = t.barRect,
                            a = t.setter,
                            o = t.min,
                            n = t.max,
                            r = e.info.value,
                            t = e.draggingValue,
                            t = kh(r[0], r[1], i, s, e.axis === va) - t;
                        e.axis === va && (t = -t);
                        e = e.info.value, t = [e[0] + t, e[1] + t];
                        t[0] < o ? t = [o, o + (e[1] - e[0])] : t[1] > n && (t = [n - (e[1] - e[0]), n]), a(t)
                    }), t.iv())
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u, c, d, g, f, v = Lo(i, t, this);
                    v && (delete v.sliderInfo, delete v.dragging, Hs.hide(), v._dragging && (r = v.ui, l = v.option, s = r.rectPoint1, h = r.rectPoint2, u = r.valueAxis, c = l.xAxis, d = l.yAxis, g = Mo(s, h), delete v._dragging, delete v.rectPoint1, delete v.rectPoint2, t.iv(), g && (f = {
                        x: [],
                        y: []
                    }, ii(c).call(c, function (e) {
                        e.type;
                        var t = [];
                        f.x.push(t);
                        var i, a, o, n = e._axisObj.zoomTimeRange;
                        n && (i = (o = Ie(n, 2))[0], e = (a = o[1]) - i, n = r.bounds.bodyRect, o = Math.floor((g.x - n.x) / n.width * e + i), e = Math.floor((g.x - n.x + g.width) / n.width * e + i), o = Math.max(o, i), e = Math.min(e, a), t.push(o), t.push(e))
                    }), ii(d).call(d, function (e) {
                        var t, i, a, o, n = [];
                        f.y.push(n), va === u && (t = (o = Ie(e._axisObj.zoomValueRange, 2))[0], i = o[1], o = ((a = r.bounds.bodyRect).height - g.height - g.y + a.y) / a.height * (e = i - t) + t, e = (a.height - g.y + a.y) / a.height * e + t, o = Math.max(o, t), e = Math.min(e, i), n.push(o), n.push(e))
                    }), l.onRectSelected(f, t, i))))
                }
            }, {
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.ui,
                        s = r.option;
                    l && s && !r.dragging && (s = l.xAxisDataZoom, l = l.yAxisDataZoom, e = no(i, t, this, a, e), s = s ? s.slider : null, l = l ? l.slider : null, s && Bo(s.barRect, e) && !r.sliderInfo && (wh(s.setter, s, e, s.barRect), t.iv()), l && Bo(l.barRect, e) && !r.sliderInfo && (Ch(l.setter, l, e, l.barRect), t.iv()))
                }
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    Vh(e, t, i, this, a) && (delete Lo(i, t, this).hoverTime, t.iv())
                }
            }]), t
        }(),
        Mh = [ka, Va, Da, Sa, Ta, Ia],
        Fe = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        e = no(i, t, this, a, e);
                    r.itemList && (e = Sh(r.itemList, e), Qa(i, e ? e.isDisabled ? "not-allowed" : "pointer" : "default"), e = e ? e.label : void 0, r.hoverLabel !== e && (r.hoverLabel = e, t.iv()))
                }
            }, {
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r, l, s = Lo(i, t, this),
                        h = no(i, t, this, a, e);
                    s.itemList && (l = (r = Sh(s.itemList, h)) ? r.label : void 0, a = Ao(this, "current", t), e = s.onChange, h = s.totalPage, s = t.a(a), l = l, !r || r && r.isDisabled || s !== (l = 0 <= Ii(Mh).call(Mh, l) ? l === ka ? s - 1 : l === Va ? s + 1 : l === Da ? 1 : l === Ta ? Math.max(1, s - 5) : l === Ia ? Math.min(h, s + 5) : h : l) && (t.a(a, l), e && e(s, l, t, i)))
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this);
                    Qa(i, "default"), r.hoverLabel && (delete r.hoverLabel, t.iv())
                }
            }]), t
        }(),
        e = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    Hn.apply(this, arguments)
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    jn.apply(this, arguments)
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    Nn.apply(this, arguments)
                }
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    Fn.apply(this, arguments)
                }
            }]), t
        }(),
        Bh = [].reverse,
        T = [1, 2];
    ue({
        target: "Array",
        proto: !0,
        forced: String(T) === String(T.reverse())
    }, {
        reverse: function () {
            return Zt(this) && (this.length = this.length), Bh.call(this)
        }
    });
    var Oh = J("Array").reverse,
        Eh = Array.prototype,
        Wh = function (e) {
            var t = e.reverse;
            return e === Eh || e instanceof Array && t === Eh.reverse ? Oh : t
        },
        Hh = function (n, e, t, i, o) {
            var r = o.seriesDatas[t],
                l = o.data,
                s = o.view,
                h = e.name,
                a = e.itemStyle || {},
                u = e.lineStyle || {},
                c = e.areaStyle || {},
                d = o.bounds;
            d.xAxisRects, d.yAxisRects;
            var g, f, v, p, y, x, b, m, w, C, k, V, T, I, D, S = d.bodyRect,
                L = S.x,
                A = S.y,
                d = S.width,
                R = S.height,
                _ = eo(i.color, t),
                t = i.xAxis[e.xAxisIndex || 0],
                P = i.yAxis[e.yAxisIndex || 0]._axisObj.valueRange,
                i = o.hoverIndex,
                M = P[0],
                B = P[1],
                O = t._axisObj.axisInfos,
                E = e.smooth,
                W = !!e.connectNulls,
                H = e.step,
                j = [],
                N = [],
                F = null,
                z = [],
                G = [],
                X = [];
            r && r.length && O && (g = o.interactiveInfo.axisInfos[o.valueAxis === va ? e.xAxisIndex || 0 : e.yAxisIndex || 0], ii(r).call(r, function (e, t) {
                var i, a, o;
                O[t] && (i = {
                    x: O[t].position,
                    y: Dh([A, A + R], P, e, !0)
                }, a = [h, e, u.color || _, i.x, i.y], H ? "start" === H ? (j.push(i), g[t].series.push(a), t === r.length - 1 || (o = r[t + 1]) !== e && j.push({
                    x: i.x,
                    y: Dh([A, A + R], P, o, !0)
                })) : (!t || (o = r[t - 1]) !== e && j.push({
                    x: i.x,
                    y: Dh([A, A + R], P, o, !0)
                }), j.push(i), g[t].series.push(a)) : _o(e) ? (e = F ? 2 : 1, W && 1 === e && N.length && (e = 2), j.push(i), N.push(e), F = e, g[t].series.push(a), z.push(i)) : (g[t].series.push([h, "-", u.color || _, i.x, i.y]), F = null, z.push(null)))
            }), t = bi(j).call(j, 0), j = ql(j).call(j, function (e) {
                return yo(S, e)
            }), n.save(), n.beginPath(), n.rect(L, A, d, R), !1 !== e.clip && n.clip(), G = function (e) {
                for (var t = 0, i = [], a = 0; a < e.length; a++) null === e[a] ? a && t++ : (i[t] = i[t] || [], i[t].push(e[a]));
                return i
            }(z), ii(G).call(G, function (e, t) {
                E && 2 <= e.length && (e = xo(e, "number" == typeof E ? E : void 0), G[t] = e.points, X.push(e.segments))
            }), c.color && (H ? (f = j[0], e = j[j.length - 1], b = Ih(S, M, B), ho(n, j, N), n.lineTo(e.x, b), n.lineTo(f.x, b), n.closePath(), n.fillStyle = Co(n, c.color, S), Gi(n).call(n)) : ii(G).call(G, function (e, t) {
                var i = e[0],
                    a = e[e.length - 1],
                    o = Ih(S, M, B);
                ho(n, e, X[t]), n.lineTo(a.x, o), n.lineTo(i.x, o), n.closePath(), n.fillStyle = Co(n, c.color, S), Gi(n).call(n)
            })), f = u.color || _, n.lineWidth = u.width || 2, n.strokeStyle = Co(n, f), o.seriesColors.push(f), u.pattern && n.setLineDash(u.pattern), H ? (ho(n, j, N), n.stroke()) : ii(G).call(G, function (e, t) {
                ho(n, e, X[t]), n.stroke()
            }), n.restore(), v = a.size || 0, p = a.activeSize || 3, v || 1 !== j.length || (v = 1), b = a.background, y = void 0 === b ? f : b, b = a.borderWidth, x = void 0 === b ? 1 : b, b = a.borderColor, m = void 0 === b ? f : b, w = a.visible, C = a.image, k = a.drawItem, !1 !== w && ii(t).call(t, function (e, t) {
                var i = v;
                if (i) {
                    if ("function" == typeof w) {
                        var a = o.hoverIndex === t;
                        if (a || !w(e, t, r, a, l, s)) return
                    }
                    k ? (a = {
                        x: e.x - i,
                        y: e.y - i,
                        width: 2 * i,
                        height: 2 * i
                    }, k(n, r[t], a, {
                        point: e,
                        seriesData: r,
                        index: t,
                        data: l,
                        view: s
                    })) : C ? co(n, wo(C), "uniform", e.x - i, e.y - i, 2 * i, 2 * i) : (n.beginPath(), i && n.arc(e.x, e.y, i, 0, 2 * Math.PI), y && (n.fillStyle = y, Gi(n).call(n)), x && m && (n.lineWidth = x, n.strokeStyle = m, n.stroke()))
                }
            }), void 0 !== i && p && (t = a.activeBackground, V = void 0 === t ? y : t, t = a.activeBorderColor, T = void 0 === t ? m : t, a = a.activeBorderWidth, I = void 0 === a ? x : a, o._hoverHandlers || (o._hoverHandlers = []), (D = z[i]) && ("function" != typeof w || w(D, i, r, !0, l, s)) && o._hoverHandlers.push(function () {
                C ? co(n, wo(C), "uniform", D.x - p, D.y - p, 2 * p, 2 * p) : (n.beginPath(), n.arc(D.x, D.y, p, 0, 2 * Math.PI), V && (n.fillStyle = V, Gi(n).call(n)), I && T && (n.lineWidth = I, n.strokeStyle = T, n.stroke()))
            })))
        },
        jh = function (r, e, t, l, s) {
            var i = s.seriesDatas[t],
                n = e.name,
                a = s.bounds.bodyRect;
            a.x;
            var h = a.y;
            a.width;
            var u = a.height,
                c = e.color || eo(l.color, t),
                o = l.xAxis[e.xAxisIndex || 0],
                d = l.yAxis[e.yAxisIndex || 0],
                g = o._axisObj.unitWidth,
                f = d._axisObj.valueRange,
                v = f[0],
                p = f[1],
                y = o._axisObj.axisInfos,
                x = e.shadow,
                b = e.barWidth || .8,
                d = s.barSeries,
                o = s.barStackCount,
                m = s.barStackMap;
            s.hoverIndex;
            var w, C, k, V, o = d.length + o,
                T = Ii(d).call(d, e),
                I = s.barCategoryGap || 0,
                D = (g - 2 * (1 <= I ? I : g * I)) / o,
                S = e.drawBar,
                L = s.view && s.view.getZoom ? s.view.getZoom() : 1;
            if (e.stack && m[e.stack]) {
                var A, R, _ = m[e.stack].stackData,
                    P = 0;
                for (A in m) {
                    if (0 <= Ii(R = m[A].series).call(R, e)) {
                        T = P;
                        break
                    }
                    P++
                }
            }
            b < 1 && (b *= D), i && i.length && y && (w = [], C = s.interactiveInfo.axisInfos[s.valueAxis === va ? e.xAxisIndex || 0 : e.yAxisIndex || 0], k = Ih(a, v, p), V = [h, h + u], ii(i).call(i, function (e, t) {
                var i, a, o;
                _ && _[t], i = "function" == typeof c ? c(e, t, eo(l.color, t), s.data, s.view) : c, y[t] && (a = {
                    x: y[t].position,
                    y: Dh(V, f, e)
                }, o = _ ? (o = _[t] ? 0 <= e ? _[t][1] : _[t][0] : 0, o = Dh(V, f, o || 0), {
                    x: a.x - g / 2 + D * T + (D - b) / 2 + I,
                    y: (a.y < k ? a.y : a.y - Math.abs(a.y - k)) - (k - o),
                    width: b,
                    height: Math.abs(a.y - k)
                }) : {
                    x: a.x - g / 2 + D * T + (D - b) / 2 + I,
                    y: a.y < k ? a.y : a.y - Math.abs(a.y - k),
                    width: b,
                    height: Math.abs(a.y - k)
                }, w.push(o), C[t].series.push([n, _o(e) ? e : "-", i, a.x, a.y, o])), _ && (qa(_[t]) && (_[t] = [0, 0]), 0 <= e ? _[t][1] += e : _[t][0] += e)
            }), s.seriesColors.push(eo(l.color, t)), r.save(), ii(w).call(w, function (o, e) {
                function t() {
                    var e, t, i, a;
                    r.fillStyle = n, x && (a = x.color || Oa(n), e = x.opacity, _o(e) && (t = mo(a), i = Ki(t).call(t, 3, 1)[0] || 255, a = Ni(t = "rgba(".concat(t.join(","), ",")).call(t, i / 255 * e, ")")), r.shadowColor = a, r.shadowBlur = x.blur || 0, r.shadowOffsetX = (x.offsetX || 0) * L, r.shadowOffsetY = (x.offsetY || 0) * L), r.fillRect(o.x, o.y, o.width, o.height)
                }
                var n = Co(r, "function" == typeof c ? c(i[e], e, eo(l.color, e), s.data, s.view) : c, o);
                S ? S(r, i[e], o, {
                    defaultDraw: t,
                    index: e,
                    boundary: {
                        x: o.x,
                        y: h,
                        width: o.width,
                        height: u
                    },
                    color: n,
                    data: s.data,
                    view: s.view
                }) : t()
            }), r.restore())
        },
        Nh = function (o, e, t, i, a) {
            var n = a.seriesDatas[t],
                r = a.data,
                l = a.view,
                s = e.name,
                h = e.itemStyle || {},
                u = e.lineStyle || {},
                c = e.areaStyle || {},
                d = e.diffAreaStyle || {},
                g = a.bounds;
            g.xAxisRects, g.yAxisRects;
            var f = g.bodyRect,
                v = f.x,
                p = f.y,
                y = f.width,
                x = f.height,
                b = eo(i.color, t),
                m = i.xAxis[e.xAxisIndex || 0],
                g = i.yAxis[e.yAxisIndex || 0];
            m._axisObj.unitWidth;
            var w, C, k, V, T, I, D, S, L, A, R, _, P, M, B, O = g._axisObj.valueRange,
                t = a.hoverIndex,
                i = O[0],
                g = O[1],
                E = m._axisObj.axisInfos,
                m = e.smooth,
                W = !!e.connectNulls,
                H = [],
                j = [],
                N = null,
                F = [];
            n && n.length && E && (w = a.interactiveInfo.axisInfos[a.valueAxis === va ? e.xAxisIndex || 0 : e.yAxisIndex || 0], a.diffPointsList.push(C = []), ii(n).call(n, function (e, t) {
                var i, a;
                E[t] && (i = {
                    x: E[t].position,
                    y: Dh([p, p + x], O, e, !0)
                }, _o(e) ? (a = N ? 2 : 1, W && 1 === a && j.length && (a = 2), H.push(i), j.push(a), N = a, w[t].series.push([s, e, u.color || b, i.x, i.y]), F.push(i)) : (w[t].series.push([s, "-", u.color || b, i.x, i.y]), N = null, F.push(null)), C.push(i))
            }), e = bi(H).call(H, 0), m && 2 <= H.length && (m = xo(H, "number" == typeof m ? m : void 0), H = m.points, j = m.segments), o.save(), o.beginPath(), o.rect(v, p, y, x), o.clip(), d && _o(d.targetIndex) && (y = a.diffPointsList[d.targetIndex], k = bi(y).call(y, 0), y = Wh(y = bi(C).call(C, 0)).call(y), k = Ni(k).call(k, y), ho(o, k), o.fillStyle = Co(o, d.color, Mo(k)), Gi(o).call(o)), c.color && (d = H[0], k = H[H.length - 1], g = Ih(f, i, g), ho(o, H, j), o.lineTo(k.x, g), o.lineTo(d.x, g), o.closePath(), o.fillStyle = Co(o, c.color, f), Gi(o).call(o)), c = u.color || b, o.lineWidth = u.width || 2, o.strokeStyle = Co(o, c), a.seriesColors.push(c), u.pattern && o.setLineDash(u.pattern), ho(o, H, j), o.stroke(), o.restore(), V = h.size || 0, T = h.activeSize || 3, V || 1 !== H.length || (V = 1), f = h.background, I = void 0 === f ? c : f, f = h.borderWidth, D = void 0 === f ? 1 : f, f = h.borderColor, S = void 0 === f ? c : f, L = h.visible, A = h.image, R = h.drawItem, !1 !== L && ii(e).call(e, function (e, t) {
                o.beginPath();
                var i, a = V;
                a && ("function" != typeof L || !active && L(e, t, n, active, r, l)) && (R ? (i = {
                    x: e.x - a,
                    y: e.y - a,
                    width: 2 * a,
                    height: 2 * a
                }, R(o, n[t], i, {
                    point: e,
                    seriesData: n,
                    index: t,
                    data: r,
                    view: l
                })) : A ? co(o, wo(A), "uniform", e.x - a, e.y - a, 2 * a, 2 * a) : (a && o.arc(e.x, e.y, a, 0, 2 * Math.PI), I && (o.fillStyle = I, Gi(o).call(o)), D && S && (o.lineWidth = D, o.strokeStyle = S, o.stroke())))
            }), void 0 !== t && T && (e = h.activeBackground, _ = void 0 === e ? I : e, e = h.activeBorderColor, P = void 0 === e ? S : e, h = h.activeBorderWidth, M = void 0 === h ? D : h, a._hoverHandlers || (a._hoverHandlers = []), (B = F[t]) && ("function" != typeof L || L(B, t, n, !0, r, l)) && a._hoverHandlers.push(function () {
                A ? co(o, wo(A), "uniform", B.x - T, B.y - T, 2 * T, 2 * T) : (o.beginPath(), o.arc(B.x, B.y, T, 0, 2 * Math.PI), _ && (o.fillStyle = _, Gi(o).call(o)), M && P && (o.lineWidth = M, o.strokeStyle = P, o.stroke()))
            })))
        },
        Fh = function (i, a, e, n, r) {
            var o = r.seriesDatas[e],
                l = a.name,
                t = r.bounds.bodyRect;
            t.x;
            var s = t.y;
            t.width;
            var h = t.height,
                u = a.color || eo(n.color, e),
                c = n.xAxis[a.xAxisIndex || 0],
                d = n.yAxis[a.yAxisIndex || 0],
                g = c._axisObj.unitWidth,
                f = d._axisObj.valueRange,
                v = f[0],
                p = f[1],
                y = c._axisObj.axisInfos;
            a.shadow;
            var x = a.barWidth || .8,
                d = r.barSeries,
                c = r.barStackCount,
                b = r.barStackMap;
            r.hoverIndex;
            var m, w, C, k, V, T, c = d.length + c,
                I = Ii(d).call(d, a),
                D = r.barCategoryGap || 0,
                S = (g - 2 * (1 <= D ? D : g * D)) / c;
            if (a.stack && b[a.stack]) {
                var L, A, R = b[a.stack].stackData,
                    _ = 0;
                for (L in b) {
                    if (0 <= Ii(A = b[L].series).call(A, a)) {
                        I = _;
                        break
                    }
                    _++
                }
            }
            x < 1 && (x *= S), o && o.length && y && (m = [], w = r.interactiveInfo.axisInfos[r.valueAxis === va ? a.xAxisIndex || 0 : a.yAxisIndex || 0], C = Ih(t, v, p), k = [s, s + h], ii(o).call(o, function (e, t) {
                var i, a, o;
                R && R[t], i = "function" == typeof u ? u(e, t, eo(n.color, t), r.data, r.view) : u, y[t] && (a = {
                    x: y[t].position,
                    y: Dh(k, f, e)
                }, o = R ? (o = R[t] ? 0 <= e ? R[t][1] : R[t][0] : 0, o = Dh(k, f, o || 0), {
                    x: a.x - g / 2 + S * I + (S - x) / 2 + D,
                    y: (a.y < C ? a.y : a.y - Math.abs(a.y - C)) - (C - o),
                    width: x,
                    height: Math.abs(a.y - C)
                }) : {
                    x: a.x - g / 2 + S * I + (S - x) / 2 + D,
                    y: a.y < C ? a.y : a.y - Math.abs(a.y - C),
                    width: x,
                    height: Math.abs(a.y - C)
                }, m.push(o), w[t].series.push([l, _o(e) ? e : "-", i, a.x, a.y, o])), R && (qa(R[t]) && (R[t] = [0, 0]), 0 <= e ? R[t][1] += e : R[t][0] += e)
            }), r.seriesColors.push(eo(n.color, e)), i.save(), e = (p = a.container || {
                show: !0,
                opacity: .1
            }).show, V = void 0 === e || e, p = p.opacity, T = void 0 === p ? .1 : p, ii(m).call(m, function (e, t) {
                t = Co(i, "function" == typeof u ? u(o[t], t, eo(n.color, t), r.data, r.view) : u, e);
                V && (i.save(), i.globalAlpha = T, zh(i, {
                    x: e.x,
                    y: s,
                    width: e.width,
                    height: h
                }, t, a, a.type === Ca), i.restore()), zh(i, e, t, a, a.type === Ca)
            }), i.restore())
        },
        zh = function (e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "red",
                a = 3 < arguments.length ? arguments[3] : void 0,
                o = 4 < arguments.length ? arguments[4] : void 0,
                n = t.x,
                r = t.y,
                l = t.width,
                s = t.height,
                h = a.showBorder,
                u = void 0 === h || h,
                c = a.surfaceAngle,
                t = void 0 === c ? 20 : c,
                h = a.brighterColor,
                c = a.darkerColor;
            t *= Math.PI / 180;
            var d, a = [],
                t = l / 2 * Math.tan(t);
            a[0] = {
                x: n,
                y: r
            }, a[1] = {
                x: n + l / 2,
                y: r - t
            }, a[2] = {
                x: n + l,
                y: r
            }, a[3] = {
                x: n + l / 2,
                y: r + t
            }, a[4] = {
                x: n,
                y: r + s
            }, a[5] = {
                x: n + l / 2,
                y: r + s - t
            }, a[6] = {
                x: n + l,
                y: r + s
            }, a[7] = {
                x: n + l / 2,
                y: r + s + t
            }, o ? (e.beginPath(), e.moveTo(a[0].x, a[0].y), e.bezierCurveTo(a[0].x, a[1].y, a[2].x, a[1].y, a[2].x, a[2].y), e.bezierCurveTo(a[2].x, a[3].y, a[0].x, a[3].y, a[0].x, a[0].y), e.closePath(), (d = e.createLinearGradient(a[3].x, a[3].y, a[1].x, a[1].y)).addColorStop(0, i), d.addColorStop(1, h || Ba(i, 40)), e.fillStyle = d, Gi(e).call(e), u && (e.strokeStyle = c || Oa(i), e.stroke()), e.beginPath(), e.moveTo(a[0].x, a[0].y), e.bezierCurveTo(a[0].x, a[3].y, a[2].x, a[3].y, a[2].x, a[2].y), e.lineTo(a[6].x, a[6].y), e.bezierCurveTo(a[6].x, a[7].y, a[4].x, a[7].y, a[4].x, a[4].y), e.lineTo(a[0].x, a[0].y), e.closePath(), (d = e.createLinearGradient(a[0].x, (a[4].y - a[0].y) / 2 + a[0].y, a[2].x, (a[6].y - a[2].y) / 2 + a[2].y)).addColorStop(0, i), d.addColorStop(.5, h || Ba(i, 40)), d.addColorStop(1, i), e.fillStyle = d, Gi(e).call(e), u && (e.strokeStyle = c || Oa(i), e.stroke())) : (e.beginPath(), e.moveTo(a[0].x, a[0].y), e.lineTo(a[1].x, a[1].y), e.lineTo(a[2].x, a[2].y), e.lineTo(a[3].x, a[3].y), e.lineTo(a[0].x, a[0].y), e.closePath(), u && (e.strokeStyle = c || Oa(i), e.stroke()), (d = e.createLinearGradient(a[3].x, a[3].y, a[1].x, a[1].y)).addColorStop(0, i), d.addColorStop(1, h || Ba(i, 60)), e.fillStyle = d, Gi(e).call(e), e.beginPath(), e.moveTo(a[0].x, a[0].y), e.lineTo(a[3].x, a[3].y), e.lineTo(a[7].x, a[7].y), e.lineTo(a[4].x, a[4].y), e.lineTo(a[0].x, a[0].y), e.closePath(), u && (e.strokeStyle = c || Oa(i), e.stroke()), (d = e.createLinearGradient(a[3].x, a[3].y, a[4].x, a[4].y)).addColorStop(0, i), d.addColorStop(1, h || Ba(i, 60)), e.fillStyle = d, Gi(e).call(e), e.beginPath(), e.moveTo(a[3].x, a[3].y), e.lineTo(a[2].x, a[2].y), e.lineTo(a[6].x, a[6].y), e.lineTo(a[7].x, a[7].y), e.lineTo(a[3].x, a[3].y), e.closePath(), u && (e.strokeStyle = c || Oa(i), e.stroke()), (a = e.createLinearGradient(a[3].x, a[3].y, a[6].x, a[6].y)).addColorStop(0, i), a.addColorStop(1, h || Ba(i, 60)), e.fillStyle = a, Gi(e).call(e))
        };
    var Gh = {
            show: !0,
            type: "value",
            splitNumber: 5,
            bodyGap: 0,
            axisLine: {
                show: !0,
                width: 1,
                color: "rgb(61,61,61)",
                pattern: null
            },
            axisLabel: {
                show: !0,
                rotate: 0,
                align: "auto",
                font: "12px arial",
                color: "rgb(61,61,61)",
                offsetX: 0,
                offsetY: 0
            },
            axisTick: {
                show: !0,
                color: "rgb(61,61,61)",
                length: 5
            },
            splitLine: {
                show: !0,
                color: "#cccccc",
                width: 1,
                interval: 1,
                pattern: null,
                splitColors: null
            },
            zeroLine: {
                show: !1,
                width: 1,
                color: "rgb(61,61,61)",
                pattern: null
            }
        },
        Xh = {
            show: !0,
            type: "category",
            data: [],
            bodyGap: 0,
            axisLine: {
                show: !0,
                width: 1,
                color: "rgb(61,61,61)"
            },
            axisLabel: {
                show: !0,
                rotate: 0,
                align: "auto",
                font: "12px arial",
                color: "rgb(61,61,61)",
                offsetX: 0,
                offsetY: 0
            },
            axisTick: {
                show: !0,
                color: "rgb(61,61,61)",
                length: 5
            },
            splitLine: {
                show: !1,
                color: "#cccccc",
                width: 1,
                pattern: null,
                splitColors: null
            }
        },
        Yh = ["rgb(51,153,255)", "rgb(93,217,174)", "#FEB64D", "rgb(241,125,164)", "rgb(135,144,204)", "rgb(124,145,155)", "rgb(48,242,120)", "rgb(212,0,0)", "#32D3EB", "#c4ccd3"],
        Uh = function () {
            function a(e, t, i) {
                c(this, a), this.option = t, this.axisOption = e, this.ui = i, this.series = [], this.seriesIndexs = [], this.axisInfos = [], this.data = Ro(e.data, i.data, i.view)
            }
            return d(a, [{
                key: "initTimeAxis",
                value: function () {
                    var t, i, e, a, o = this,
                        n = this.series,
                        r = [];
                    ii(n).call(n, function (e, t) {
                        t = o.ui.seriesDatas[t];
                        t && (r = Ni(r).call(r, t))
                    }), r.length ? (t = [], ii(r).call(r, function (e) {
                        lo(e) && t.push(e[0])
                    }), xh(t).call(t, function (e, t) {
                        return t < e ? 1 : -1
                    }), a = this.timeRange = [t[0], t[t.length - 1]], (e = this.axisOption.axisLabel.formatter) || (i = this.adjustTimeFormatString(this.timeRange), e = function (e) {
                        return po(new Date(e), i)
                    }), "string" == typeof e && (i = e, e = function (e) {
                        return po(new Date(e), i)
                    }), this.formatter = e, (n = this.getDataZoomOption()) && t.length ? (e = a[0], a = a[1], (a = this.zoomTimeRange = [_o(n.min) ? n.min : e, _o(n.max) ? n.max : a])[1] - a[0] == 0 && (a[0] === e ? a[1] += 1 : --a[0]), a.push(this.getUnitFromMaxAndMin(a[1], a[0]) || 1)) : this.zoomTimeRange = this.timeRange) : this.formatter = function (e) {
                        return e
                    }
                }
            }, {
                key: "getBoundWidth",
                value: function () {}
            }, {
                key: "getBoundHeight",
                value: function () {}
            }, {
                key: "getAxisValues",
                value: function () {
                    var e, l = this,
                        t = this.series,
                        s = this.seriesIndexs,
                        h = [],
                        u = {};
                    for (e in ii(t).call(t, function (e, t) {
                            t = l.ui.seriesDatas[s[t]];
                            if (t)
                                if (e.stack) {
                                    var a = (a = u[e.stack]) || (u[e.stack] = [
                                        [],
                                        []
                                    ]);
                                    ii(t).call(t, function (e, t) {
                                        var i = 0 <= e ? a[1] : a[0];
                                        qa(i[t]) ? i[t] = e : i[t] += e
                                    })
                                } else if (lo(t)) h = Ni(h).call(h, t);
                            else if (so(t)) {
                                for (var e = t.x, i = t.y, o = Math.min(e.length, i.length), n = [], r = 0; r < o; r++) n.push([0, i[r]]);
                                h = Ni(h).call(h, n)
                            }
                        }), u) var i, a = u[e],
                        h = Ni(i = Ni(h).call(h, a[0])).call(i, a[1]);
                    var o = [];
                    return ii(h).call(h, function (e) {
                        lo(e) ? o.push(e[1]) : _o(e) && o.push(Pi(e))
                    }), o
                }
            }, {
                key: "getMaxValueBound",
                value: function () {
                    var e = this.axisOption,
                        t = this.getAxisValues(),
                        i = this.ui,
                        a = i.data,
                        o = i.view;
                    this.valueRange || this.caluValueRange(t);
                    i = Ie(this.valueRange, 2), t = i[0], i = i[1], t = t.toString().length > i.toString().length ? t : i, i = e.axisLabel.formatter;
                    return i && (t = i(t, a, o)), vo(e.axisLabel.font, t, e.axisLabel.rotate)
                }
            }, {
                key: "caluValueRange",
                value: function (e) {
                    var t, i = this.axisOption,
                        a = i.max,
                        o = i.min,
                        n = i.splitNumber || 5,
                        r = Math.max.apply(this, e),
                        l = Math.min.apply(this, e),
                        s = r = r < 0 ? 0 : r,
                        h = l,
                        u = l < 0 ? r - l : r;
                    if (_o(o) && _o(a)) t = (a - o) / n;
                    else if (_o(a) && a / n % 1 == 0) {
                        i = _o(o) ? o : h;
                        qa(o) && 0 < h && (i = 0), t = (a - (_o(i) ? i : h)) / n
                    } else if (1 < r || r <= 0) {
                        for (var c = 1, d = u / c; 100 <= si(d);) d = u / (c *= 10);
                        for (d = Math.ceil(d) * c; d % n != 0 || d / n % c != 0;) d += c;
                        t = (r = d) / n
                    } else t = 0 < l ? r / n : (r - l) / n;
                    if (t = t || 1, qa(o))
                        if (0 <= l) o = 0;
                        else {
                            for (var g = 0; l < g;) g -= t;
                            l = g
                        } if (qa(a))
                        for (a = r + (l < 0 ? l : 0); a < s;) a += t;
                    (o = qa(o) ? l : o) || a || (t = a = 1), this.valueRange = [o, a, t];
                    r = this.getDataZoomOption();
                    r && e.length ? ((r = this.zoomValueRange = [_o(r.min) ? Math.max(o, r.min) : o, _o(r.max) ? Math.min(a, r.max) : a])[1] - r[0] == 0 && (r[0] === o ? r[1] += t / 1e3 : r[0] -= t / 1e3), r.push(this.getUnitFromMaxAndMin(r[1], r[0]) || 1)) : this.zoomValueRange = this.valueRange
                }
            }, {
                key: "getUnitFromMaxAndMin",
                value: function (e, t) {
                    for (var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 5, a = e - t, o = 1, n = a / o; 100 <= si(n);) n = a / (o *= 10);
                    for (n = Math.ceil(n) * o; n % i != 0 || n / i % o != 0;) n += o;
                    return n / i
                }
            }, {
                key: "caluValueRange2",
                value: function (e) {
                    var t = this.axisOption,
                        i = t.max,
                        a = t.min;
                    t.splitNumber, t = Math.min(this, e), e = Math.max(this, e), qa(a) && qa(i) && (e < 0 ? i = 0 : 0 < t ? (a = 0, valueMax) : (valueMax, valueMin)), this.valueRange = [a, i, void 0]
                }
            }, {
                key: "adjustTimeFormatString",
                value: function (e) {
                    xh(e).call(e, function (e, t) {
                        return t < e ? 1 : -1
                    });
                    var t = e[0],
                        t = e[e.length - 1] - t;
                    return t < 18e5 ? "mm:ss" : t < 1728e5 ? "HH:mm" : "YYYY-MM-DD"
                }
            }, {
                key: "getDataZoomOption",
                value: function () {
                    return this.axisOption.dataZoom
                }
            }, {
                key: "getValuesByValueRange",
                value: function (e) {
                    var t = Ie(this.zoomValueRange, 3),
                        i = t[0],
                        a = t[1],
                        o = t[2],
                        n = [],
                        r = 0;
                    if (0 <= i) {
                        for (n.push(i); r < a;) i <= r && n.push(r), r += o;
                        n.push(a)
                    } else if (a <= 0) {
                        for (n.push(a); i < r;) r <= a && n.unshift(r), r -= o;
                        n.unshift(i)
                    } else {
                        for (; r < a;) n.push(r), r += o;
                        for (n.push(a), r = 0; i < r;) n.unshift(r), r -= o;
                        n.unshift(i)
                    }
                    var l, s = n.length;
                    return 3 < s && (l = n[0], t = n[1], (n[s - 1] - n[s - 2]) / o < (e = e ? .4 : .6) && Ki(n).call(n, s - 2, 1), (t - l) / o < e && Ki(n).call(n, 1, 1)), n
                }
            }, {
                key: "drawMarkLine",
                value: function () {}
            }]), a
        }(),
        Zh = function () {
            g(r, Uh);
            var n = f(r);

            function r(e, t, i) {
                var a, o;
                return c(this, r), (o = n.call(this, e, t, i)).axisIndex = Ii(a = t.xAxis).call(a, e), o.isValueAxis = i.valueAxis === fa, o.position = e.position || (o.axisIndex ? oa : na), ii(t = t.series).call(t, function (e) {
                    (e.xAxisIndex || 0) === o.axisIndex && o.series.push(e)
                }), e.type === ya && o.initTimeAxis(), o.boundHeight = o.getBoundHeight(), o
            }
            return d(r, [{
                key: "getTimeAxisTimes",
                value: function () {
                    var i = this,
                        e = this.series,
                        a = [];
                    ii(e).call(e, function (e, t) {
                        t = i.ui.seriesDatas[t];
                        t && (a = Ni(a).call(a, t))
                    });
                    var t = [];
                    return ii(a).call(a, function (e) {
                        lo(e) ? t.push(e[0]) : t.push(Pi(e))
                    }), xh(t).call(t, function (e, t) {
                        return t < e ? 1 : -1
                    }), t
                }
            }, {
                key: "getTextSizeWithRotate",
                value: function (i, e, t) {
                    var a = (e = qa(e) ? "" : e).toString().split("\n"),
                        o = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                    ii(a).call(a, function (e, t) {
                        e = Ea(i, e);
                        e.width > o.width && (o = e)
                    });
                    var n = ro(o);
                    if (n.height = o.height * a.length, t) {
                        var r = new ht.Math.Vector2(0, 0),
                            l = new ht.Math.Vector2(n.width, 0),
                            s = new ht.Math.Vector2(n.width, n.height),
                            e = new ht.Math.Vector2(0, n.height),
                            a = new ht.Math.Vector2(n.width / 2, n.height / 2),
                            t = Eo(t);
                        return r.rotateAround(a, t), l.rotateAround(a, t), s.rotateAround(a, t), e.rotateAround(a, t), Mo([r, l, s, e])
                    }
                    return n
                }
            }, {
                key: "getBoundHeight",
                value: function () {
                    var e = this.axisOption;
                    if (e.size) return e.size;
                    var t = this.ui,
                        i = t.data,
                        a = t.view;
                    if (!e.show) return 2;
                    var o = e.axisLabel.rotate,
                        n = e.axisTick.show ? e.axisTick.length : 0,
                        r = this.getDataZoomOption(),
                        t = n;
                    if (r && !1 !== r.sliderVisible && (t += 18), !e.axisLabel.show || this.isValueAxis) return t + 2;
                    var n = Ro(e.data, i, a),
                        l = "e",
                        r = 1;
                    return e.type === ya ? l = this.formatter(Lh(), i, a) : e.type === pa && (n && ii(n).call(n, function (e) {
                        _o(e) && e.toString().length > l.length && (l = e)
                    }), r = (l = e.axisLabel.formatter ? e.axisLabel.formatter(l) : l).toString().split("\n").length), o ? t + this.getTextSizeWithRotate(e.axisLabel.font, l, o).height + 4 : t + Ea(e.axisLabel.font, l).height * r + 4
                }
            }, {
                key: "draw",
                value: function (g) {
                    var i, a = this,
                        e = this.ui,
                        f = e.data,
                        v = e.view,
                        t = this.axisOption,
                        o = t.type === ya,
                        n = this.axisIndex,
                        r = e.bounds.xAxisRects[n],
                        p = e.boundaryGap,
                        l = r.x,
                        s = r.y,
                        h = r.width,
                        u = r.height,
                        c = this.data || [],
                        y = this.formatter || t.axisLabel.formatter,
                        d = this.timeRange;
                    if (!1 !== t.show && t.axisLine.show && (g.save(), g.strokeStyle = t.axisLine.color, g.lineWidth = t.axisLine.width, t.axisLine.pattern && g.setLineDash(t.axisLine.pattern), g.beginPath(), this.position === oa ? (g.moveTo(l, s + u), g.lineTo(l + h, s + u)) : (g.moveTo(l, s), g.lineTo(l + h, s)), g.stroke(), g.restore()), t.type === ya) {
                        c = [];
                        if (ii(T = this.series).call(T, function (e, t) {
                                t = a.ui.seriesDatas[t];
                                t && t.length > c.length && (c = ql(t).call(t, function (e) {
                                    return e[0]
                                }))
                            }), !(d && d[0] && d[1])) return;
                        i = d[1] - d[0]
                    }
                    var x, b, m, w, C, k, V, T, I, D, S, L, A, R, _, P, M, B, O, E, W, H, j = 0,
                        N = 0,
                        F = 1;
                    1 < c.length ? N = j = p ? h / (c.length - (F = 1) + F) : h / (c.length - (F = 1)) : j = h / 2, c && c.length && (this.unitWidth = j, x = 1 === c.length ? this.axisInfos = [{
                        position: l + j,
                        label: y ? y(c[0], f, v) : c[0]
                    }] : this.axisInfos = ql(c).call(c, function (e, t) {
                        return {
                            position: (o ? l + (e - d[0]) / i * h : l + t * j) + p * j / 2,
                            label: y ? y(e, f, v) : e
                        }
                    }), !1 !== t.show && (t.axisLabel.show || t.axisTick.show) && (b = t.axisLabel.font, m = t.axisLabel.color, w = t.axisLabel.align, C = t.axisTick.length, k = t.axisLabel.rotate, V = t.axisLabel.offsetX, T = t.axisLabel.offsetY, I = (this.position === oa ? s : s + 2 + (t.axisTick.show ? t.axisTick.length : 0)) + T, D = 0, S = [], ii(c).call(c, function (e) {
                        y && (e = y(e, f, v));
                        e = a.getTextSizeWithRotate(b, e);
                        S.push(e), D += e.width
                    }), D > r.width && !n && (F = Math.ceil(D / r.width)), t.axisTick.show && C && (0 === (L = _o(t.axisTick.interval) ? t.axisTick.interval : F) && (L = 1), g.strokeStyle = t.axisTick.color, g.beginPath(), ii(c).call(c, function (e, t) {
                        t % L == 0 && (t = l + t * N, a.position === oa ? (g.moveTo(t, s + u), g.lineTo(t, s + u - C)) : (g.moveTo(t, s), g.lineTo(t, s + C)))
                    }), g.stroke()), t.axisLabel.show && (0 === (A = _o(t.axisLabel.interval) ? t.axisLabel.interval : F) && (A = 1), R = [], ii(c).call(c, function (e, t) {
                        var i, a, o, n, r, l, s, h, u, c, d;
                        t % A == 0 && ("function" == typeof (i = m) && (i = i(e.toString(), t)), a = S[t], u = x[t].position + V, qa(e) && (e = ""), y && (e = y(e, f, v)), g.save(), o = k ? u : u - a.width / 2, n = I, r = a.width, l = a.height, k ? (0 < k && (o -= r, n -= l / 2), k < 0 && (n -= l / 2), s = [], h = new ht.Math.Vector2({
                            x: o + (0 < k ? r : 0),
                            y: n + l / 2
                        }), ii(t = [{
                            x: o,
                            y: n
                        }, {
                            x: o + r,
                            y: n
                        }, {
                            x: o + r,
                            y: n + l
                        }, {
                            x: o,
                            y: n + l
                        }]).call(t, function (e) {
                            e = new ht.Math.Vector2(e);
                            e.rotateAround(h, Eo(-k)), s.push({
                                x: e.x,
                                y: e.y
                            })
                        }), t = ht.Default.unionPoint(s), R.push(ht.Default.clone(t))) : R.push({
                            x: o,
                            y: n,
                            width: r,
                            height: l
                        }), k ? g.translate(u, I) : g.translate(u - (p ? j / 2 : a.width / 2), I), g.rotate(Eo(-k)), k ? (g.font = b, g.fillStyle = i, g.textAlign = 0 < k ? ra : la, g.textBaseline = ha, u = e.toString().split("\n"), c = a.height / u.length, ii(u).call(u, function (e, t) {
                            g.fillText(e.toString(), 0, 0 + t * c)
                        })) : (e = e.toString().split("\n"), d = a.height / e.length, p ? ii(e).call(e, function (e, t) {
                            ht.Default.drawText(g, e.toString(), b, i, 0, 0 + t * d, j, d, "center")
                        }) : ii(e).call(e, function (e, t) {
                            ht.Default.drawText(g, e.toString(), b, i, 0, 0 + t * d, a.width, d, w)
                        })), g.restore())
                    }), e.interactiveInfo.labelRects = R), t.splitLine.splitColors && (_ = t.splitLine.splitColors, r = e.bounds.bodyRect, P = r.x, M = r.y, r.width, B = r.height, ii(c).call(c, function (e, t) {
                        var i = P + t * N,
                            a = P + (t + 1) * N,
                            t = _[t % _.length];
                        t && (g.fillStyle = t, g.beginPath(), g.moveTo(i, M), g.lineTo(a, M), g.lineTo(a, M + B), g.lineTo(i, M + B), Gi(g).call(g))
                    })), g.save(), t.splitLine.show && (0 === (O = _o(t.splitLine.interval) ? t.splitLine.interval : F) && (O = 1), e = e.bounds.bodyRect, E = e.x, W = e.y, e.width, H = e.height, g.strokeStyle = t.splitLine.color, g.lineWidth = t.splitLine.width || 1, t.splitLine.pattern && g.setLineDash(t.splitLine.pattern), g.beginPath(), ii(c).call(c, function (e, t) {
                        t % O == 0 && (g.moveTo(t = E + t * N, W), g.lineTo(t, W + H))
                    }), g.stroke()), g.restore()))
                }
            }]), r
        }(),
        Kh = function () {
            g(r, Uh);
            var n = f(r);

            function r(e, t, i) {
                var a, o;
                return c(this, r), (o = n.call(this, e, t, i)).axisIndex = Ii(a = t.yAxis).call(a, e), o.isValueAxis = i.valueAxis === va, o.position = e.position || (o.axisIndex ? ra : la), ii(t = t.series).call(t, function (e, t) {
                    (e.yAxisIndex || 0) === o.axisIndex && (o.series.push(e), o.seriesIndexs.push(t))
                }), o.labelHeight = o.getLabelHeight(), o.boundWidth = o.getBoundWidth(), e.type === ya && o.initTimeAxis(), o
            }
            return d(r, [{
                key: "getLabelHeight",
                value: function () {
                    return this.getMaxValueBound().height
                }
            }, {
                key: "getBoundWidth",
                value: function () {
                    var e = this.axisOption;
                    if (e.size) return e.size;
                    var t = e.axisLabel.show ? this.getMaxValueBound() : {
                            width: 0,
                            height: 0
                        },
                        i = e.axisTick.show ? e.axisTick.length : 0,
                        a = 0,
                        e = this.getDataZoomOption();
                    return e && !1 !== e.sliderVisible && (a += 18), this.isValueAxis ? a + t.width + i + 4 : a + 50
                }
            }, {
                key: "draw",
                value: function (a) {
                    var e, o, t, n, i, r, l, s, h, u, c, d, g, f, v, p, y, x, b, m, w, C, k, V, T, I, D, S = this,
                        L = this.ui,
                        A = L.data,
                        R = L.view,
                        _ = this.axisOption,
                        P = this.axisIndex,
                        M = L.bounds.yAxisRects[P];
                    !1 !== _.show && (e = this.getDataZoomOption(), P = this.zoomValueRange, o = _.axisLabel.rotate, e && (c = {
                        x: M.x,
                        y: M.y,
                        width: 18,
                        height: M.height
                    }, this.drawSlider(a, c), M = {
                        x: M.x + 18,
                        y: M.y,
                        width: M.width - 18,
                        height: M.height
                    }), t = M.x, n = M.y, i = M.width, r = M.height, _.axisLine.show && (a.save(), a.strokeStyle = _.axisLine.color, a.lineWidth = _.axisLine.width, _.axisLine.pattern && a.setLineDash(_.axisLine.pattern), a.beginPath(), this.position === ra ? (a.moveTo(t, n), a.lineTo(t, n + r)) : (a.moveTo(t + i, n), a.lineTo(t + i, n + r)), a.stroke(), a.restore()), _.axisLabel.show && (c = Ie(P, 3), l = c[0], M = c[1], c[2], s = M - l, h = this.getValuesByValueRange(!0), u = 0, _.axisTick.show && (u = _.axisTick.length) && (a.strokeStyle = _.axisTick.color, a.beginPath(), ii(h).call(h, function (e) {
                        e = n + r * (1 - (e - l) / s);
                        S.position === ra ? (a.moveTo(t, e), a.lineTo(t + u, e)) : (a.moveTo(t + i, e), a.lineTo(t + i - u, e))
                    }), a.stroke()), P = i - 2 - (_.axisTick.show ? u : 0), c = _.axisLabel.font, d = _.axisLabel.color, g = _.axisLabel.offsetX, f = _.axisLabel.offsetY, v = _.axisLabel.formatter, p = t + (this.position === ra ? u : P), a.font = c, a.textAlign = this.position === la ? ra : la, a.textBaseline = ha, ii(h).call(h, function (e, t) {
                        var i = n + r * (1 - (e - l) / s);
                        a.save(), a.translate(p, i), a.rotate(Eo(-o)), "function" == typeof v && (e = v(e, A, R));
                        i = d;
                        "function" == typeof d && (i = d(e, t)), a.fillStyle = i, a.fillText(e, g, f), a.restore()
                    }), _.splitLine.splitColors && (y = _.splitLine.splitColors, C = L.bounds.bodyRect, x = C.x, b = C.y, m = C.width, w = C.height, _.splitLine.interval, ii(h).call(h, function (e, t) {
                        var i = h[t + 1],
                            e = b + w * (1 - (e - l) / s),
                            i = b + w * (1 - (i - l) / s),
                            t = y[t % y.length];
                        t && (a.fillStyle = t, a.beginPath(), a.moveTo(x, e), a.lineTo(x + m, e), a.lineTo(x + m, i), a.lineTo(x, i), Gi(a).call(a))
                    })), a.save(), _.splitLine.show && (C = L.bounds.bodyRect, k = C.x, V = C.y, T = C.width, I = C.height, D = _.splitLine.interval, a.strokeStyle = _.splitLine.color, a.lineWidth = _.splitLine.width || 1, _.splitLine.pattern && a.setLineDash(_.splitLine.pattern), a.beginPath(), ii(h).call(h, function (e, t) {
                        t % D != 0 || 0 === t && L.bottomAxis.length || t === h.length - 1 && L.topAxis.length || (a.moveTo(k, e = V + I * (1 - (e - l) / s)), a.lineTo(k + T, e))
                    }), a.stroke()), a.restore(), _.zeroLine.show && 0 <= M && l <= 0 && (M = n + r * (1 - (0 - l) / s), a.save(), a.strokeStyle = _.zeroLine.color, a.lineWidth = _.zeroLine.width || 1, _.zeroLine.pattern && a.setLineDash(_.zeroLine.pattern), a.beginPath(), a.moveTo(L.bounds.bodyRect.x, M), a.lineTo(L.bounds.bodyRect.x + L.bounds.bodyRect.width, M), a.stroke(), a.restore())))
                }
            }, {
                key: "drawSlider",
                value: function (e, t) {
                    var a = this,
                        i = t.x;
                    t.y;
                    var o = t.width,
                        n = t.height,
                        r = Ie(this.valueRange, 2),
                        l = r[0],
                        s = r[1],
                        h = this.ui,
                        u = h.data,
                        c = h.view,
                        d = this.getDataZoomOption(),
                        g = this.getDataZoomOption(),
                        f = g.barBackground,
                        v = void 0 === f ? "#eee" : f,
                        p = g.barValueBackground,
                        y = void 0 === p ? "rgb(51,153,255)" : p,
                        x = g.barWidth,
                        b = void 0 === x ? Math.min(12, o) : x,
                        m = g.barBorderRadius,
                        w = void 0 === m ? 0 : m,
                        C = g.min,
                        k = void 0 === C ? l : C,
                        V = g.max,
                        T = void 0 === V ? s : V,
                        I = g.sliderOffsetX,
                        D = void 0 === I ? 0 : I,
                        S = g.sliderOffsetY,
                        L = void 0 === S ? 0 : S,
                        r = g.sliderWidth,
                        h = void 0 === r ? 14 : r,
                        f = g.sliderHeight,
                        p = void 0 === f ? 5 : f,
                        x = g.sliderBackground,
                        m = void 0 === x ? "#32D3EB" : x,
                        C = g.sliderBorderColor,
                        V = void 0 === C ? "#32D3EB" : C,
                        I = g.sliderBorderWidth,
                        S = void 0 === I ? 1 : I,
                        r = g.sliderBorderRadius,
                        f = void 0 === r ? 0 : r,
                        x = g.sliderImage,
                        C = g.sliderVisible,
                        I = g.zoomIncrement,
                        r = void 0 === I ? .05 : I,
                        A = g.onChange,
                        I = s - l,
                        k = Math.max(l, k),
                        T = Math.min(s, T);
                    s < k && (k = s), T < l && (T = l);
                    g = ro(t);
                    g.x = i + (o - b) / 2, g.width = b;
                    o = ro(g);
                    o.height *= (T - k) / I, o.y += (s - T) / I * n;
                    b = g.x + (b - h) / 2 + D, D = o.y + o.height - p / 2 + L, L = o.y - p / 2 + L;
                    !1 !== C && (oo(e, g, v, w), oo(e, o, y, w), x ? (drawImage(e, ht.Default.getImage(x), b, D, h, p), drawImage(e, ht.Default.getImage(x), b, L, h, p)) : (f < 1 && (f *= Math.min(h, p)), e.beginPath(), Po(e, b, D, h, p, f), e.closePath(), e.fillStyle = m, Gi(e).call(e), S && (e.lineWidth = S, e.strokeStyle = V, e.stroke()), e.beginPath(), Po(e, b, L, h, p, f), e.closePath(), e.fillStyle = m, Gi(e).call(e), S && (e.lineWidth = S, e.strokeStyle = V, e.stroke()))), this.ui.yAxisDataZoom = {
                        slider: {
                            dataZoom: d,
                            rect: t,
                            barRect: g,
                            zoomIncrement: r,
                            min: l,
                            max: s,
                            value: [k, T],
                            setter: function (e) {
                                var t = a.ui.originalOption.yAxis[0].dataZoom,
                                    i = [t.min, t.max];
                                e[0] === l ? delete t.min : t.min = e[0], e[1] === s ? delete t.max : t.max = e[1], A && A(i, e, u, c)
                            },
                            valueBarRect: o,
                            sliderRect: {
                                x: b,
                                y: D,
                                width: h,
                                height: p
                            },
                            sliderRect2: {
                                x: b,
                                y: L,
                                width: h,
                                height: p
                            }
                        }
                    }
                }
            }, {
                key: "drawMarkLine",
                value: function (c) {
                    var d, g, f, v, e, p, y, x, t = this.axisOption.markLines;
                    t && (e = this.ui.bounds.bodyRect, d = e.x, g = e.y, f = e.width, v = e.height, e = this.valueRange, p = e[0], y = e[1] - p, x = this.position, ii(t).call(t, function (e) {
                        var t = e.color,
                            i = void 0 === t ? "rgba(242,83,75,0.7)" : t,
                            a = e.lineStyle,
                            o = void 0 === a ? {} : a,
                            n = e.itemStyle,
                            r = void 0 === n ? {} : n,
                            l = e.labelStyle,
                            s = void 0 === l ? {} : l,
                            h = e.arrowStyle,
                            u = e.value,
                            t = r.radius,
                            a = void 0 === t ? 2 : t,
                            n = r.background,
                            l = void 0 === n ? i : n,
                            e = o.pattern,
                            t = void 0 === e ? [4, 4] : e,
                            r = s.font,
                            n = void 0 === r ? _h : r,
                            e = o.color || i,
                            r = o.width || 1,
                            o = s.color || i,
                            s = s.formatter,
                            h = (void 0 === h ? {} : h).background || i,
                            i = g + v * (1 - Math.abs(u - p) / y);
                        c.save(), t && c.setLineDash(t), c.lineWidth = r, c.strokeStyle = e, c.beginPath(), c.moveTo(d, i), c.lineTo(d + f, i), c.stroke(), c.beginPath(), c.arc(x === la ? d : d + f, i, a, 0, 2 * Math.PI), c.fillStyle = l, Gi(c).call(c), c.beginPath(), x === la ? (c.moveTo(d + f + 3, i), c.lineTo(d + f - 4, i - 3), c.quadraticCurveTo(d + f - 1, i, d + f - 4, i + 3), c.closePath(), c.fillStyle = h, Gi(c).call(c), s && (u = s(u)), l = Ea(n, u), uo(c, u, n, o, d + f + 6, i - l.height / 2, l.width, l.height, sa, ha)) : (c.moveTo(d - 3, i), c.lineTo(d + 4, i - 3), c.quadraticCurveTo(d + 1, i, d + 4, i + 3), c.closePath(), c.fillStyle = h, Gi(c).call(c), s && (u = s(u)), s = Ea(n, u), uo(c, u, n, o, d - s.width - 6, i - s.height / 2, s.width, s.height, sa, ha)), c.restore()
                    }))
                }
            }]), r
        }(),
        We = ht.Default,
        Jh = We.clone,
        qh = We.unionPoint;
    var $h = {
            show: !0,
            type: "time",
            bodyGap: 0,
            axisLine: {
                show: !0,
                width: 1,
                color: "rgb(61,61,61)"
            },
            axisLabel: {
                show: !0,
                rotate: 0,
                align: "auto",
                font: "12px arial",
                color: "rgb(61,61,61)",
                offsetX: 0,
                offsetY: 0
            },
            axisTick: {
                show: !0,
                color: "rgb(61,61,61)",
                length: 5
            },
            splitLine: {
                show: !1,
                color: "#cccccc",
                width: 1
            }
        },
        Qh = function () {
            g(o, Zh);
            var a = f(o);

            function o(e, t, i) {
                return c(this, o), a.call(this, e, t, i)
            }
            return d(o, [{
                key: "draw",
                value: function (e) {
                    var t = this.ui,
                        i = t.data,
                        a = t.view,
                        o = this.axisOption,
                        n = this.axisIndex,
                        r = t.bounds.xAxisRects[n],
                        l = r.x,
                        s = r.y,
                        h = r.width,
                        u = r.height,
                        c = this.getTimeAxisTimes(),
                        d = o.axisLabel.rotate,
                        g = o.axisLabel.offsetX,
                        f = o.axisLabel.offsetY,
                        v = this.formatter || o.axisLabel.formatter,
                        p = this.zoomTimeRange,
                        n = this.getDataZoomOption();
                    if (o.show && (n && p && (n = {
                            x: r.x,
                            y: r.y + r.height - 18,
                            width: r.width,
                            height: 18
                        }, this.drawSlider(e, n), r.x, r.y, r.width, r.height), o.axisLine.show && (e.strokeStyle = o.axisLine.color, e.lineWidth = o.axisLine.width, e.beginPath(), this.position === oa ? (e.moveTo(l, s + u), e.lineTo(l + h, s + u)) : (e.moveTo(l, s), e.lineTo(l + h, s)), e.stroke()), c && c.length)) {
                        var y = Ea(o.axisLabel.font, Th(Lh(), v, i, a));
                        if (p && p[0] && p[1]) {
                            var u = p[1] - p[0],
                                x = 0,
                                b = 0,
                                c = o.axisLabel.interval;
                            if (u ? (x = h / (c = c || Math.max(Math.floor(h / (y.width + 10)), 1)), b = u / c) : x = h / 2, x && (this.unitWidth = x, o.axisLabel.show || o.axisTick.show)) {
                                var m = o.axisLabel.font,
                                    w = o.axisLabel.color,
                                    C = o.axisLabel.align,
                                    k = o.axisTick.length,
                                    V = (this.position === oa ? s : s + 2 + (o.axisTick.show ? o.axisTick.length : 0)) + f;
                                if (o.axisTick.show && k) {
                                    e.strokeStyle = o.axisTick.color, e.beginPath();
                                    var T = l;
                                    if (u)
                                        for (; T <= l + h + 2;) e.moveTo(T, s), e.lineTo(T, s + k), T += x;
                                    else e.moveTo(T + h / 2, s), e.lineTo(T + h / 2, s + k);
                                    e.stroke()
                                }
                                if (o.axisLabel.show) {
                                    var I = l + g,
                                        D = p[0];
                                    if (d)
                                        if (e.font = m, e.fillStyle = w, e.textAlign = 0 < d ? ra : la, e.textBaseline = ha, u)
                                            for (; I <= l + h + 2;) e.save(), e.translate(I, V), e.rotate(Eo(-d)), e.fillText(Th(D, v, i, a), 0, 0), I += x, D += b, e.restore();
                                        else e.save(), e.translate(I + h / 2, V), e.rotate(Eo(-d)), e.fillText(Th(D, v, i, a), 0, 0), e.restore();
                                    else if (u)
                                        for (; I <= l + h + 2;) ht.Default.drawText(e, Th(D, v, i, a), m, w, I - y.width / 2, V, y.width, y.height, C), I += x, D += b;
                                    else ht.Default.drawText(e, Th(D, v, i, a), m, w, I + h / 2 - y.width / 2, V, y.width, y.height, C)
                                }
                                if (e.save(), o.splitLine.show) {
                                    var S = _o(o.splitLine.interval) ? o.splitLine.interval : 1;
                                    0 === S && (S = 1);
                                    var t = t.bounds.bodyRect,
                                        L = t.x,
                                        A = t.y,
                                        R = t.width,
                                        _ = t.height;
                                    e.strokeStyle = o.splitLine.color, e.lineWidth = o.splitLine.width || 1, o.splitLine.pattern && e.setLineDash(o.splitLine.pattern), e.beginPath();
                                    var P = L;
                                    if (p[0], u)
                                        for (; P <= L + R + 2;) 0 % S == 0 && (e.moveTo(P, A), e.lineTo(P, A + _)), P += x;
                                    else {
                                        u = P + R / 2;
                                        e.moveTo(u, A), e.lineTo(u, A + _)
                                    }
                                    e.stroke()
                                }
                                e.restore()
                            }
                        }
                    }
                }
            }, {
                key: "drawSlider",
                value: function (e, t) {
                    var a = this;
                    t.x;
                    var i = t.y,
                        o = t.width,
                        n = t.height,
                        r = Ie(this.timeRange, 2),
                        l = r[0],
                        s = r[1],
                        h = this.ui,
                        u = h.data,
                        c = h.view,
                        d = this.getDataZoomOption(),
                        g = d.barBackground,
                        f = void 0 === g ? "#eee" : g,
                        v = d.barValueBackground,
                        p = void 0 === v ? "rgb(51,153,255)" : v,
                        y = d.barWidth,
                        x = void 0 === y ? Math.min(12, o) : y,
                        b = d.barBorderRadius,
                        m = void 0 === b ? 0 : b,
                        w = d.min,
                        C = void 0 === w ? l : w,
                        k = d.max,
                        V = void 0 === k ? s : k,
                        T = d.sliderOffsetX,
                        I = void 0 === T ? 0 : T,
                        D = d.sliderOffsetY,
                        S = void 0 === D ? 0 : D,
                        L = d.sliderWidth,
                        r = void 0 === L ? 5 : L,
                        h = d.sliderHeight,
                        g = void 0 === h ? 14 : h,
                        v = d.sliderBackground,
                        y = void 0 === v ? "#32D3EB" : v,
                        b = d.sliderBorderColor,
                        w = void 0 === b ? "#32D3EB" : b,
                        k = d.sliderBorderWidth,
                        T = void 0 === k ? 1 : k,
                        D = d.sliderBorderRadius,
                        L = void 0 === D ? 0 : D,
                        h = d.sliderImage,
                        v = d.sliderVisible,
                        b = d.zoomIncrement,
                        k = void 0 === b ? .05 : b,
                        A = d.onChange,
                        D = s - l,
                        C = Math.max(l, C),
                        V = Math.min(s, V);
                    s < C && (C = s), V < l && (V = l);
                    b = ro(t);
                    b.y = i + (n - x) / 2, b.height = x;
                    n = ro(b);
                    n.width *= (V - C) / D, n.x += (C - l) / D * o;
                    o = n.x - r / 2 + I, I = n.x + n.width - r / 2 + I, S = n.y + (x - g) / 2 + S;
                    !1 !== v && (oo(e, b, f, m), oo(e, n, p, m), h ? (go(e, ht.Default.getImage(h), o, S, r, g), go(e, ht.Default.getImage(h), I, S, r, g)) : (L < 1 && (L *= Math.min(r, g)), e.beginPath(), Po(e, o, S, r, g, L), e.closePath(), e.fillStyle = y, Gi(e).call(e), T && (e.lineWidth = T, e.strokeStyle = w, e.stroke()), e.beginPath(), Po(e, I, S, r, g, L), e.closePath(), e.fillStyle = y, Gi(e).call(e), T && (e.lineWidth = T, e.strokeStyle = w, e.stroke()))), this.ui.xAxisDataZoom = {
                        slider: {
                            dataZoom: d,
                            rect: t,
                            barRect: b,
                            valueBarRect: n,
                            zoomIncrement: k,
                            min: l,
                            max: s,
                            step: 1,
                            value: [C, V],
                            setter: function (e) {
                                var t = a.ui.originalOption.xAxis[0].dataZoom,
                                    i = [t.min, t.max];
                                e[0] === l ? delete t.min : t.min = e[0], e[1] === s ? delete t.max : t.max = e[1], A && A(i, e, u, c)
                            },
                            sliderRect: {
                                x: o,
                                y: S,
                                width: r,
                                height: g
                            },
                            sliderRect2: {
                                x: I,
                                y: S,
                                width: r,
                                height: g
                            }
                        }
                    }
                }
            }]), o
        }(),
        eu = function (o, e, t, i, n) {
            var r = n.seriesDatas[t],
                a = i.xAxis[e.xAxisIndex || 0]._axisObj.zoomTimeRange,
                l = eo(i.color, t),
                s = e.itemStyle || {},
                h = e.lineStyle || {},
                u = e.areaStyle || {},
                c = h.color || l;
            if (n.seriesColors.push(c), r && r.length) {
                var t = function (e, t, i, a) {
                        var o = bi(e).call(e, 0);
                        if (a) {
                            for (var n, r, l = a[0], s = a[1], h = 0; h < o.length; h++)
                                if (o[h][0] >= l) {
                                    n = h;
                                    break
                                } for (var u = o.length - 1; 0 <= u; u--)
                                if (o[u][0] <= s) {
                                    r = u + 1;
                                    break
                                } o = bi(o).call(o, n, r)
                        }
                        if (!t) return o;
                        var a = [],
                            c = o.length;
                        if (i) {
                            if (c <= i) return o;
                            Array.prototype.push.apply(a, Ki(o).call(o, c - i, i))
                        }
                        var d = [];
                        if (!(t < (c = o.length))) return i && o.push.apply(o, a), o;
                        var g = 2 * (c / t | 0);
                        if (g < 3) return i && o.push.apply(o, a), o;
                        for (var f = 0; f < c; f += g) {
                            for (var v = bi(o).call(o, f, Math.min(f + g, c)), p = v.length, y = v[0], x = v[0], b = 1; b < p; b++) {
                                var m = v[b];
                                m[1] < x[1] && (x = m), m[1] > y[1] && (y = m)
                            }
                            y[0] > x[0] ? (d.push(x), d.push(y)) : (d.push(y), d.push(x))
                        }
                        return a = Ni(d).call(d, a)
                    }(r, n.maxVisiblePoint, n.endProtectPoint, a),
                    d = [];
                e.name;
                var g, f, v, p, y = n.data,
                    x = n.view,
                    b = n.bounds.bodyRect,
                    m = b.x,
                    w = b.y,
                    C = b.width,
                    k = b.height,
                    V = i.yAxis[e.yAxisIndex || 0]._axisObj.zoomValueRange,
                    l = V[0],
                    i = V[1],
                    T = a[0],
                    I = a[1] - T,
                    a = e.smooth,
                    D = !!e.connectNulls,
                    S = [],
                    L = [],
                    A = null;
                ii(t).call(t, function (e) {
                    var t = e[0],
                        i = e[1];
                    _o(i) ? (i = {
                        x: m + C * ((t - T) / I),
                        y: Dh([w, w + k], V, i, !0)
                    }, S.push(i), i = A ? 2 : 1, D && 1 === i && L.length && (i = 2), L.push(i), A = i, d.push(e)) : A = null
                }), g = bi(S).call(S, 0), a && 2 <= S.length && (f = "number" == typeof a ? a : void 0, v = [], ii(L).call(L, function (e, t) {
                    1 === e && (p = [], v.push(p)), p.push(S[t])
                }), S = [], L = [], ii(v).call(v, function (e) {
                    e = xo(e, f);
                    S = Ni(S).call(S, e.points), L = Ni(L).call(L, e.segments)
                })), S = ql(S).call(S, function (e) {
                    return yo(b, e)
                }), o.save(), o.beginPath(), o.rect(m, w, C, k), !1 !== e.clip && o.clip(), u.color && 1 < S.length && (a = S[0], e = S[S.length - 1], i = Ih(b, l, i), ho(o, S, L), o.lineTo(e.x, i), o.lineTo(a.x, i), o.closePath(), o.fillStyle = Co(o, u.color, b), Gi(o).call(o)), o.lineWidth = h.width || 2, o.strokeStyle = Co(o, c), h.pattern && o.setLineDash(h.pattern), ho(o, S, L), o.stroke(), o.restore();
                var R = s.size || 0,
                    _ = s.activeSize || 3;
                R || 1 !== S.length || (R = 1);
                var h = s.background,
                    P = void 0 === h ? c : h,
                    h = s.borderWidth,
                    M = void 0 === h ? 1 : h,
                    h = s.borderColor,
                    B = void 0 === h ? c : h,
                    O = s.visible,
                    E = s.image,
                    W = s.drawItem;
                if (!1 !== O && ii(g).call(g, function (e, t) {
                        o.beginPath();
                        var i = R,
                            a = d[t][0] === n.hoverTime;
                        ("function" != typeof O || !a && O(e, t, d, !1, y, x)) && (W ? (a = {
                            x: e.x - i,
                            y: e.y - i,
                            width: 2 * i,
                            height: 2 * i
                        }, W(o, r[t], a, {
                            index: t,
                            data: y,
                            view: x
                        })) : E ? drawStretchImage(o, getImage(E), "uniform", e.x - i, e.y - i, 2 * i, 2 * i) : (i && Bo(b, e) && o.arc(e.x, e.y, i, 0, 2 * Math.PI), o.closePath(), P && (o.fillStyle = P, Gi(o).call(o)), M && B && (o.lineWidth = M, o.strokeStyle = B, o.stroke())))
                    }), n.hoverTime && _) {
                    var H, j, h = s.activeBackground,
                        N = void 0 === h ? P : h,
                        h = s.activeBorderColor,
                        F = void 0 === h ? B : h,
                        s = s.activeBorderWidth,
                        z = void 0 === s ? M : s;
                    for (n._hoverHandlers || (n._hoverHandlers = []), j = 0; j < d.length; j++)
                        if (d[j][0] === n.hoverTime) {
                            H = g[j];
                            break
                        } H && ("function" != typeof O || O(H, j, d, !0, y, x)) && n._hoverHandlers.push(function () {
                        o.beginPath(), o.arc(H.x, H.y, _, 0, 2 * Math.PI), N && (o.fillStyle = N, Gi(o).call(o)), z && F && (o.lineWidth = z, o.strokeStyle = F, o.stroke())
                    })
                }
            }
        };
    var tu = function (i, e, a, t, o) {
        var n, r, l, s, h, u, c, d, g, f, v, p, y = o.seriesDatas[a],
            x = e.name,
            b = e.itemStyle || {},
            m = e.lineStyle || {},
            w = o.bounds.bodyRect,
            C = w.x,
            k = w.y,
            V = w.width,
            T = w.height,
            I = eo(t.color, a),
            D = t.xAxis[e.xAxisIndex || 0],
            S = t.yAxis[e.yAxisIndex || 0]._axisObj.zoomValueRange,
            L = S[0],
            A = S[1] - L,
            D = D._axisObj.zoomValueRange,
            R = D[0],
            _ = D[1] - R,
            e = e.smooth,
            P = o.hitSeriesIndex,
            M = o.hitPointIndex,
            B = t.clipMode;
        !lo(y) && so(y) && (n = y.x || [], r = y.y || [], l = n.length > r, y = [], ii(t = l ? n : r).call(t, function (e, t) {
            l ? y.push([e, r[t]]) : y.push([n[t], e])
        })), y && y.length && (s = [], h = [], u = [], ii(y).call(y, function (e, t) {
            var i = Ie(e, 2),
                a = i[0],
                i = i[1],
                i = {
                    x: C + V * ((a - R) / _),
                    y: k + T * (1 - (i - L) / A)
                };
            B ? (s.push(i), u.push(t ? 2 : 1), h.push(e)) : c = Bo(w, i) ? (s.push(i), h.push(e), u.push(e = c ? 2 : 1), e) : null
        }), o.pointsInfo[a] = {
            values: h,
            name: x,
            points: s
        }, x = bi(s).call(s, 0), e && 2 <= s.length && (d = "number" == typeof e ? e : void 0, g = [], ii(u).call(u, function (e, t) {
            1 === e && (f = [], g.push(f)), f.push(s[t])
        }), s = [], u = [], ii(g).call(g, function (e) {
            e = xo(e, d);
            s = Ni(s).call(s, e.points), u = Ni(u).call(u, e.segments)
        })), i.save(), i.beginPath(), i.rect(C, k, V, T), i.clip(), I = m.color || I, i.lineWidth = m.width || 2, i.strokeStyle = Co(i, I), o.seriesColors.push(I), m.pattern && i.setLineDash(m.pattern), ho(i, s, u), i.stroke(), i.restore(), v = b.size || 2, p = b.activeSize || 4, v || 1 !== s.length || (v = 1), m = void 0 === (o = b.background) ? I : o, o = void 0 === (o = b.borderWidth) ? 1 : o, b = void 0 === (b = b.borderColor) ? I : b, v && (i.beginPath(), ii(x).call(x, function (e, t) {
            !Bo(w, e) || (t = P === a && M === t ? p : v) && (i.moveTo(e.x, e.y), i.arc(e.x, e.y, t, 0, 2 * Math.PI))
        }), o && b && (i.lineWidth = o, i.strokeStyle = b, i.stroke()), m && (i.fillStyle = m, Gi(i).call(i))))
    };
    var iu = function () {
            g(n, Uh);
            var o = f(n);

            function n(e, t, i) {
                var a;
                return c(this, n), (a = o.call(this, e, t, i)).axisIndex = Ii(i = t.xAxis).call(i, e), ii(t = t.series).call(t, function (e, t) {
                    (e.xAxisIndex || 0) === a.axisIndex && (a.series.push(e), a.seriesIndexs.push(t))
                }), a.position = e.position || (a.axisIndex ? oa : na), a.labelHeight = a.getMaxValueBound().height, a.boundHeight = a.getBoundHeight(), a
            }
            return d(n, [{
                key: "getAxisValues",
                value: function () {
                    var r = this,
                        e = this.series,
                        l = this.seriesIndexs,
                        s = [];
                    ii(e).call(e, function (e, t) {
                        t = r.ui.seriesDatas[l[t]];
                        if (t)
                            if (lo(t)) s = Ni(s).call(s, t);
                            else if (so(t)) {
                            for (var i = t.x, t = t.y, a = Math.min(i.length, t.length), o = [], n = 0; n < a; n++) o.push([i[n], 0]);
                            s = Ni(s).call(s, o)
                        }
                    });
                    var t = [];
                    return ii(s).call(s, function (e) {
                        t.push(e[0])
                    }), t
                }
            }, {
                key: "getBoundHeight",
                value: function () {
                    var e = this.axisOption;
                    if (!e.show) return 2;
                    var t = e.axisLabel.rotate,
                        i = e.axisTick.show ? e.axisTick.length : 0,
                        a = this.getDataZoomOption(),
                        o = 0;
                    a && !1 !== a.sliderVisible && (o += 18);
                    var n = "e",
                        a = this.getAxisValues();
                    if (a && ii(a).call(a, function (e) {
                            e.toString().length > n.length && (n = e)
                        }), t) {
                        t = Math.max(-45, t);
                        t = Math.min(45, t);
                        return o + vo(e.axisLabel.font, n, t).height + 4 + i
                    }
                    return o + Ea(e.axisLabel.font, "e").height + 4 + i
                }
            }, {
                key: "draw",
                value: function (a) {
                    var o = this,
                        e = this.ui,
                        n = e.data,
                        r = e.view,
                        t = this.axisOption,
                        i = this.axisIndex,
                        l = e.bounds.xAxisRects[i],
                        s = this.getDataZoomOption(),
                        h = this.zoomValueRange,
                        u = t.axisLabel.rotate;
                    s && (f = {
                        x: l.x,
                        y: l.y + l.height - 18,
                        width: l.width,
                        height: 18
                    }, this.drawSlider(a, f), l = {
                        x: l.x,
                        y: l.y,
                        width: l.width,
                        height: l.height - 18
                    });
                    var c, d, g, f, v, p, y, x, b, m, w = l.x,
                        C = l.y,
                        k = l.width,
                        V = l.height;
                    !1 !== t.show && (t.axisLine.show && (a.strokeStyle = t.axisLine.color, a.lineWidth = t.axisLine.width, a.beginPath(), i ? (a.moveTo(w, C + V), a.lineTo(w + k, C + V)) : (a.moveTo(w, C), a.lineTo(w + k, C)), a.stroke()), t.axisLabel.show && (f = Ie(h, 3), c = f[0], l = f[1], f[2], d = l - c, h = this.getValuesByValueRange(), g = 0, t.axisTick.show && (g = t.axisTick.length) && (a.strokeStyle = t.axisTick.color, a.beginPath(), ii(h).call(h, function (e) {
                        e = w + k * ((e - c) / d);
                        i ? (a.moveTo(e, C + V), a.lineTo(e, C + V - g)) : (a.moveTo(e, C), a.lineTo(e, C + g))
                    }), a.stroke()), f = t.axisLabel.font, l = t.axisLabel.color, v = t.axisLabel.formatter, p = C + (i ? 0 : g), a.font = f, a.fillStyle = l, a.textBaseline = ha, a.testAlign = 0 < u ? ra : la, ii(h).call(h, function (e, t) {
                        var i = w + k * ((e - c) / d);
                        u ? (a.save(), "function" == typeof v && (e = v(e, n, r)), a.translate(i, p), a.rotate(Eo(-u)), a.fillText(e.toString(), 0, 0), a.restore()) : (a.textAlign = sa, a.textBaseline = o.position === na ? oa : na, a.fillText(e.toString(), i, p))
                    }), a.save(), t.splitLine.show && (e = e.bounds.bodyRect, y = e.x, x = e.y, b = e.width, m = e.height, a.strokeStyle = t.splitLine.color, a.lineWidth = t.splitLine.width || 1, t.splitLine.pattern && a.setLineDash(t.splitLine.pattern), a.beginPath(), ii(h).call(h, function (e, t) {
                        0 !== t && (a.moveTo(e = y + b * ((e - c) / d), x), a.lineTo(e, x + m))
                    }), a.stroke()), a.restore()))
                }
            }, {
                key: "drawSlider",
                value: function (e, t) {
                    var a = this;
                    t.x;
                    var i = t.y,
                        o = t.width,
                        n = t.height,
                        r = Ie(this.valueRange, 2),
                        l = r[0],
                        s = r[1],
                        h = this.ui,
                        u = h.data,
                        c = h.view,
                        d = this.getDataZoomOption(),
                        g = d.barBackground,
                        f = void 0 === g ? "#eee" : g,
                        v = d.barValueBackground,
                        p = void 0 === v ? "rgb(51,153,255)" : v,
                        y = d.barWidth,
                        x = void 0 === y ? Math.min(12, o) : y,
                        b = d.barBorderRadius,
                        m = void 0 === b ? 0 : b,
                        w = d.min,
                        C = void 0 === w ? l : w,
                        k = d.max,
                        V = void 0 === k ? s : k,
                        T = d.sliderOffsetX,
                        I = void 0 === T ? 0 : T,
                        D = d.sliderOffsetY,
                        S = void 0 === D ? 0 : D,
                        L = d.sliderWidth,
                        r = void 0 === L ? 5 : L,
                        h = d.sliderHeight,
                        g = void 0 === h ? 14 : h,
                        v = d.sliderBackground,
                        y = void 0 === v ? "#32D3EB" : v,
                        b = d.sliderBorderColor,
                        w = void 0 === b ? "#32D3EB" : b,
                        k = d.sliderBorderWidth,
                        T = void 0 === k ? 1 : k,
                        D = d.sliderBorderRadius,
                        L = void 0 === D ? 0 : D,
                        h = d.sliderImage,
                        v = d.sliderVisible,
                        b = d.zoomIncrement,
                        k = void 0 === b ? .05 : b,
                        A = d.onChange,
                        D = s - l,
                        C = Math.max(l, C),
                        V = Math.min(s, V);
                    s < C && (C = s), V < l && (V = l);
                    b = ro(t);
                    b.y = i + (n - x) / 2, b.height = x;
                    n = ro(b);
                    n.width *= (V - C) / D, n.x += (C - l) / D * o;
                    o = n.x - r / 2 + I, I = n.x + n.width - r / 2 + I, S = n.y + (x - g) / 2 + S;
                    !1 !== v && (oo(e, b, f, m), oo(e, n, p, m), h ? (go(e, ht.Default.getImage(h), o, S, r, g), go(e, ht.Default.getImage(h), I, S, r, g)) : (L < 1 && (L *= Math.min(r, g)), e.beginPath(), Po(e, o, S, r, g, L), e.closePath(), e.fillStyle = y, Gi(e).call(e), T && (e.lineWidth = T, e.strokeStyle = w, e.stroke()), e.beginPath(), Po(e, I, S, r, g, L), e.closePath(), e.fillStyle = y, Gi(e).call(e), T && (e.lineWidth = T, e.strokeStyle = w, e.stroke()))), this.ui.xAxisDataZoom = {
                        slider: {
                            dataZoom: d,
                            rect: t,
                            barRect: b,
                            valueBarRect: n,
                            zoomIncrement: k,
                            min: l,
                            max: s,
                            value: [C, V],
                            setter: function (e) {
                                var t = a.ui.originalOption.xAxis[0].dataZoom,
                                    i = [t.min, t.max];
                                e[0] === l ? delete t.min : t.min = e[0], e[1] === s ? delete t.max : t.max = e[1], A && A(i, e, u, c)
                            },
                            sliderRect: {
                                x: o,
                                y: S,
                                width: r,
                                height: g
                            },
                            sliderRect2: {
                                x: I,
                                y: S,
                                width: r,
                                height: g
                            }
                        }
                    }
                }
            }]), n
        }(),
        me = ht.Default,
        au = me.clone;
    me.unionPoint;

    function ou(e, t) {
        var i, a, o = t.isEmphasis,
            n = t.type,
            r = t.outFormatter,
            l = e.name,
            s = e.value,
            h = e.percent,
            u = e.seriesName,
            c = e.labelEmphasis,
            d = e.labelNormal,
            g = e.labelLineNormal,
            t = e.labelLineEmphasis;
        "label" === n ? o ? (i = c.font, "function" == typeof c.formatter && (a = c.formatter(e.source, e.data, e.view))) : (i = d.font, "function" == typeof d.formatter && (a = d.formatter(e.source, e.data, e.view))) : "labelLine" === n && (o ? (i = t.font, "function" == typeof t.formatter && (a = t.formatter(e.source, e.data, e.view))) : (i = g.font, "function" == typeof g.formatter && (a = g.formatter(e.source, e.data, e.view)))), r && (a = r);
        var f, v, r = l.toString(),
            r = (r = a ? (a = a.replace(/\n/g, "<br>")).replace(/\{(\w)\}/g, function (e, t) {
                return "a" === t ? u : "b" === t ? l : "c" === t ? s : "d" === t ? (100 * h).toFixed(1) + "%" : e
            }) : r).split("<br>");
        return i && (v = (f = Ea(i, "e").height + 1) * r.length / 2), {
            labelTextArray: r,
            textHeight: f,
            beginHeight: v
        }
    }
    var nu = ht.Default.isBoolean,
        ru = function () {
            function t(e) {
                c(this, t), this.initGLabel(e), this.initGLabelLine(e)
            }
            return d(t, [{
                key: "initGLabel",
                value: function (e) {
                    var t = e.getValue("label.normal.show"),
                        i = e.getValue("label.normal.position"),
                        a = e.getValue("label.normal.formatter"),
                        o = e.getValue("label.normal.color"),
                        n = e.getValue("label.normal.font");
                    this.gLabelNormal = {
                        show: !nu(t) || t,
                        position: i || "center",
                        formatter: a || function () {
                            return ""
                        },
                        color: o,
                        font: n || "12px serif"
                    };
                    i = e.getValue("label.emphasis.show"), a = e.getValue("label.emphasis.position"), o = e.getValue("label.emphasis.formatter"), n = e.getValue("label.emphasis.color"), e = e.getValue("label.emphasis.font");
                    this.gLabelEmphasis = {
                        show: !nu(i) || i,
                        position: a || "center",
                        formatter: o || function () {
                            return ""
                        },
                        color: n,
                        font: e || "13px serif"
                    }
                }
            }, {
                key: "initGLabelLine",
                value: function (e) {
                    var t = e.getValue("labelLine.normal.show"),
                        i = e.getValue("labelLine.normal.length"),
                        a = e.getValue("labelLine.normal.length2"),
                        o = e.getValue("labelLine.normal.formatter"),
                        n = e.getValue("labelLine.normal.width"),
                        r = e.getValue("labelLine.normal.type"),
                        l = e.getValue("labelLine.normal.font"),
                        s = e.getValue("labelLine.normal.lineColor"),
                        h = e.getValue("labelLine.normal.textColor");
                    this.gLabelLineNormal = {
                        show: !nu(t) || t,
                        length: void 0 === i ? 15 : i,
                        length2: void 0 === a ? 10 : a,
                        formatter: o || function () {
                            return ""
                        },
                        width: void 0 === n ? 1 : n,
                        type: r || "dashed",
                        font: l || "12px serif",
                        lineColor: s,
                        textColor: h
                    };
                    i = e.getValue("labelLine.emphasis.show"), a = e.getValue("labelLine.emphasis.length"), o = e.getValue("labelLine.emphasis.length2"), n = e.getValue("labelLine.emphasis.formatter"), r = e.getValue("labelLine.emphasis.width"), l = e.getValue("labelLine.emphasis.type"), s = e.getValue("labelLine.emphasis.font"), h = e.getValue("labelLine.emphasis.lineColor"), e = e.getValue("labelLine.emphasis.textColor");
                    this.gLabelLineEmphasis = {
                        show: !nu(i) || i,
                        length: void 0 === a ? 15 : a,
                        length2: void 0 === o ? 10 : o,
                        formatter: n || function () {
                            return ""
                        },
                        width: void 0 === r ? 2 : r,
                        type: l || "dashed",
                        font: s || "13px serif",
                        lineColor: h,
                        textColor: e
                    }
                }
            }]), t
        }(),
        lu = {
            f: Object.getOwnPropertySymbols
        },
        su = Object.assign,
        hu = Object.defineProperty,
        Ts = !su || s(function () {
            if (D && 1 !== su({
                    b: 1
                }, su(hu({}, "a", {
                    enumerable: !0,
                    get: function () {
                        hu(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return 1;
            var e = {},
                t = {},
                i = Symbol(),
                a = "abcdefghijklmnopqrst";
            return e[i] = 7, a.split("").forEach(function (e) {
                t[e] = e
            }), 7 != su({}, e)[i] || gt(su({}, t)).join("") != a
        }) ? function (e, t) {
            for (var i = E(e), a = arguments.length, o = 1, n = lu.f, r = pe.f; o < a;)
                for (var l, s = m(arguments[o++]), h = n ? gt(s).concat(n(s)) : gt(s), u = h.length, c = 0; c < u;) l = h[c++], D && !r.call(s, l) || (i[l] = s[l]);
            return i
        } : su;
    ue({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Ts
    }, {
        assign: Ts
    });
    var uu = Se.Object.assign,
        cu = ht.Default.isEmptyObject,
        du = function () {
            function i(e, t) {
                c(this, i), uu(this, e), this.initDefaultValue(t)
            }
            return d(i, [{
                key: "initDefaultValue",
                value: function (e) {
                    var t, i = this.source,
                        a = this.index,
                        o = this.color,
                        n = i.name,
                        r = i.value,
                        l = void 0 === r ? 0 : r,
                        s = i.itemStyle,
                        h = void 0 === s ? {} : s,
                        u = i.labelLine,
                        c = void 0 === u ? {} : u,
                        r = i.label,
                        s = void 0 === r ? {} : r,
                        u = e.gLabelNormal,
                        i = e.gLabelEmphasis,
                        r = e.gLabelLineNormal,
                        e = e.gLabelLineEmphasis,
                        o = o[a % o.length];
                    this.name = void 0 === n ? "系列名" : n, this.value = l, this.itemStyle = uu({
                        color: o,
                        borderColor: "#000"
                    }, h), this.labelNormal = uu({}, u, s.normal || {}), this.labelEmphasis = uu({}, i, s.emphasis || {}), this.labelLineNormal = uu({}, r, c.normal || {}), this.labelLineEmphasis = uu({}, e, c.emphasis || {}), cu(this.labelNormal.color) && (t = this.labelNormal.position, this.labelNormal.color = "center" === t ? o : "black"), cu(this.labelEmphasis.color) && (t = this.labelEmphasis.position, this.labelEmphasis.color = "center" === t ? o : "black"), cu(this.labelLineNormal.lineColor) && (this.labelLineNormal.lineColor = o), cu(this.labelLineNormal.textColor) && (this.labelLineNormal.textColor = o), cu(this.labelLineEmphasis.lineColor) && (this.labelLineEmphasis.lineColor = o), cu(this.labelLineEmphasis.textColor) && (this.labelLineEmphasis.textColor = o), this.pieColor = o
                }
            }, {
                key: "getLabelPoints",
                value: function () {
                    var e = this.centerX,
                        t = this.centerY,
                        i = this.roseType,
                        a = this.roseRadius,
                        o = this.innerRadius,
                        n = this.outerRadius,
                        r = this.lineAngle,
                        l = e + (i ? a + o : n) * Math.cos(r),
                        n = t + (i ? a + o : n) * Math.sin(r);
                    return {
                        textX: (l + (e + o * Math.cos(r))) / 2,
                        textY: (n + (t + o * Math.sin(r))) / 2
                    }
                }
            }, {
                key: "getLabelInfo",
                value: function (e) {
                    return ou(this, {
                        isEmphasis: e,
                        type: "label"
                    })
                }
            }, {
                key: "getLabelLinePoints",
                value: function (e) {
                    var t, i = this.labelLineNormal,
                        a = this.labelLineEmphasis,
                        o = this.centerX,
                        n = this.centerY,
                        r = this.roseType,
                        l = this.roseRadius,
                        s = this.innerRadius,
                        h = this.outerRadius,
                        u = this.lineAngle,
                        c = this.hoverOffset,
                        d = i.length,
                        i = a.length,
                        a = e ? s + l + c : s + l,
                        s = e ? h + c : h,
                        l = o + (r ? a : s) * Math.cos(u),
                        s = n + (r ? a : s) * Math.sin(u);
                    return u = e ? (t = o + (i = h + c + i) * Math.cos(u), n + i * Math.sin(u)) : (t = o + (d = h + d) * Math.cos(u), n + d * Math.sin(u)), {
                        x0: l,
                        y0: s,
                        x1: t,
                        y1: u
                    }
                }
            }, {
                key: "getLabelLineLabelInfo",
                value: function (e) {
                    return ou(this, {
                        isEmphasis: e,
                        type: "labelLine"
                    })
                }
            }]), i
        }(),
        gu = ht.Default.isBoolean,
        fu = Math.PI,
        vu = fu / 180;

    function pu(e, t) {
        for (var i = 0; i < e.length; i++)
            if (Bo(e[i].rect, t)) return i
    }
    var yu = new Oe,
        T = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    ! function (e, t, i, a, o) {
                        var n = Lo(i, t, o);
                        if (n) {
                            var r, l = n.arcPoints,
                                s = n.arcAngles,
                                h = n.center,
                                u = n.radius,
                                c = n.foucusArcNum,
                                d = n.hoverOffset,
                                g = n.tooltip,
                                f = void 0 === g ? {} : g,
                                v = n.pieItems,
                                p = no(i, t, o, a);
                            if (l) {
                                var y = ht.Math.Vector2,
                                    x = 2 * Math.PI,
                                    b = new y(h),
                                    m = u.outerRadius,
                                    w = u.innerRadius,
                                    C = ht.Default.getDistance(p, h);
                                if (w < C && C < (void 0 !== c ? m + d : m))
                                    for (var k = 0, V = s.length; k < V; k++) {
                                        var T = v[k],
                                            I = T.roseType,
                                            D = T.roseRadius;
                                        if (I && (k === c ? w + D + d : w + D) < C) k === c && (delete n.foucusArcNum, t.iv());
                                        else {
                                            T = new y(l[k]).sub(b), I = new y(p).sub(b), D = T.clone().normalize().dot(I.normalize()), D = Math.acos(D);
                                            if (0 < T.x * I.y - I.x * T.y) {
                                                if (D < s[k]) {
                                                    c != k && (n.foucusArcNum = k, t.iv());
                                                    break
                                                }
                                                c === k && (delete n.foucusArcNum, t.iv())
                                            } else {
                                                if (x - D < s[k]) {
                                                    c != k && (n.foucusArcNum = k, t.iv());
                                                    break
                                                }
                                                c === k && (delete n.foucusArcNum, t.iv())
                                            }
                                        }
                                    } else void 0 !== c && (delete n.foucusArcNum, t.iv())
                            }
                            f.show && (void 0 !== (g = n.foucusArcNum) ? (a = (o = v[g]).value, u = o.percent, h = o.name, m = o.seriesName, g = f.formatter, r = [], g ? (i = ou(o, {
                                outFormatter: g(o.source, t, i)
                            }).labelTextArray, ii(i).call(i, function (e, t) {
                                r.push([null, e])
                            })) : r = [
                                ["名称", h],
                                ["百分比", (100 * u).toFixed(1) + "%"],
                                ["数值", a]
                            ], yu.setInfo({
                                label: m,
                                datas: r
                            }), yu.setAttr({
                                labelFont: f.font,
                                itemFont: f.font
                            }), Hs.show(yu.getView(), e)) : Hs.hide())
                        }
                    }(e, t, i, a, this)
                }
            }, {
                key: "onUp",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.foucusArcNum,
                        s = r.pieItems,
                        r = r.onSelected;
                    void 0 !== r && void 0 !== l && r((l = s[l]).name, l.value, l.percent, t, i)
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    i = Lo(i, t, this);
                    void 0 !== i.foucusArcNum && (delete i.foucusArcNum, t.iv(), Hs.hide())
                }
            }]), t
        }(),
        xu = document.createElement("div"),
        J = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onMove",
                value: function (c, d, g, e, t, i) {
                    var f = Lo(g, d, this),
                        v = f.ui,
                        p = f.option;
                    if (v && p && !f.dragging) {
                        var a = v.bounds,
                            y = no(g, d, this, e, c),
                            o = a.bodyRect,
                            e = v.xAxisDataZoom,
                            a = v.yAxisDataZoom,
                            x = e ? e.slider : null,
                            b = a ? a.slider : null;
                        if (Bo(o, y) && p.tooltip.show) {
                            o = function () {
                                function e(i) {
                                    var e = u[i],
                                        t = e.points,
                                        a = hh(e),
                                        o = e.name;
                                    ii(t).call(t, function (e, t) {
                                        e = ht.Default.getDistance(e, y);
                                        e < h && e < 1 / 0 && (n = si(i), s = o, l = a[r = t])
                                    })
                                }
                                var n, r, l, s, t, h = 6 / (g.getZoom ? g.getZoom() : 1),
                                    u = v.pointsInfo,
                                    i = p.tooltip.formatter;
                                for (t in u) e(t);
                                _o(l) ? (o = l.join(","), i ? o = i({
                                    name: s,
                                    value: l
                                }, d, g).toString() : s && (o = Ni(a = "".concat(s, "<br/>")).call(a, o)), xu.innerHTML = o, Hs.show(xu, c)) : Hs.hide();
                                var a = f.hitSeriesIndex,
                                    o = f.hitPointIndex;
                                return f.hitSeriesIndex = n, o === (f.hitPointIndex = r) && a === n || d.iv(), (x || b) && (a = f.sliderInfo = {
                                    info: [],
                                    body: !0
                                }, x && a.info.push({
                                    axis: fa,
                                    info: x
                                }), b && a.info.push({
                                    axis: va,
                                    info: b
                                })), {
                                    v: void 0
                                }
                            }();
                            if ("object" === Te(o)) return o.v
                        }
                        return x && (Bo(to(x.sliderRect, 3), y) || Bo(to(x.sliderRect2, 3), y) || Bo(x.valueBarRect, y)) ? (Qa(g, "ew-resize"), void(f.sliderInfo = {
                            axis: fa,
                            info: x
                        })) : b && (Bo(to(b.sliderRect, 3), y) || Bo(to(b.sliderRect2, 3), y) || Bo(b.valueBarRect, y)) ? (Qa(g, "ns-resize"), void(f.sliderInfo = {
                            axis: va,
                            info: b
                        })) : (delete f.sliderInfo, void Qa(g, "default"))
                    }
                }
            }, {
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.ui,
                        s = r.option;
                    l && s && !r.dragging && (s = l.xAxisDataZoom, l = l.yAxisDataZoom, e = no(i, t, this, a, e), s = s ? s.slider : null, l = l ? l.slider : null, s && Bo(s.barRect, e) && !r.sliderInfo && (wh(s.setter, s, e, s.barRect), t.iv()), l && Bo(l.barRect, e) && !r.sliderInfo && (Ch(l.setter, l, e, l.barRect), t.iv()))
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this);
                    _o(r.hitPointIndex) && (delete r.hitSeriesIndex, delete r.hitPointIndex, Hs.hide(), t.iv()), r.dragging || Qa(i, "default")
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u, c, d = Lo(i, t, this),
                        g = d.sliderInfo;
                    d.ui, g && (r = (u = g.info).sliderRect, l = u.sliderRect2, s = u.valueBarRect, h = u.value, u = u.barRect, c = no(i, t, this, a, e), d.dragging = !0, g.body ? ii(d = g.info).call(d, function (e) {
                        e.draggingValue = kh(e.info.value[0], e.info.value[1], e.info.barRect, c, e.axis === va)
                    }) : Bo(to(r, 3), c) ? g.fixed = h[1] : Bo(to(l, 3), c) ? g.fixed = h[0] : Bo(s, c) && (fa === g.axis ? g.draggingValue = wh(null, g.info, c, u, null, !0) : g.draggingValue = Ch(null, g.info, c, u, null, !0)))
                }
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u, c = Lo(i, t, this),
                        d = c.sliderInfo,
                        g = c.option;
                    c.dragging && d && (s = (r = d.info).barRect, c = r.setter, r.sliderRect, r.sliderRect2, r.valueBarRect, r.value, r.dataZoom, l = no(i, t, this, a, e), a = d.axis === fa ? wh : Ch, u = fa === d.axis ? g.xAxis[0].axisLabel ? g.xAxis[0].axisLabel.formatter : null : g.yAxis[0].axisLabel ? g.yAxis[0].axisLabel.formatter : null, _o(d.fixed) ? (h = a(c, d.info, l, s, d.fixed), Hs.show(u ? u(h, t, i) : h, e)) : _o(d.draggingValue) ? (c = d.draggingValue, h = a(null, d.info, l, s, null, !0) - c, a = d.info.value, s = d.info.min, c = d.info.max, (h = [a[0] + h, a[1] + h])[0] < s ? h = [s, s + (a[1] - a[0])] : h[1] > c && (h = [c - (a[1] - a[0]), c]), d.info.setter(h), c = h.join(","), u && (c = ql(h).call(h, function (e) {
                        return u(e, t, i)
                    }).join(", ")), Hs.show(c, e)) : d.body && ii(d = d.info).call(d, function (e) {
                        var t = e.info,
                            i = t.barRect,
                            a = t.setter,
                            o = t.min,
                            n = t.max,
                            r = e.info.value,
                            t = e.draggingValue,
                            t = kh(r[0], r[1], i, l, e.axis === va) - t;
                        e.axis === va && (t = -t);
                        e = e.info.value, t = [e[0] + t, e[1] + t];
                        t[0] < o ? t = [o, o + (e[1] - e[0])] : t[1] > n && (t = [n - (e[1] - e[0]), n]), a(t)
                    }), t.iv())
                }
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {
                    t = Lo(i, t, this);
                    delete t.sliderInfo, delete t.dragging, Hs.hide()
                }
            }, {
                key: "onScroll",
                value: function (e, t, i, a, o, n) {
                    Vh(e, t, i, this, a) && (delete(i = Lo(i, t, this)).hitSeriesIndex, delete i.hitPointIndex, t.iv())
                }
            }]), t
        }(),
        We = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.apply(this, arguments)
            }
            return d(t, [{
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    Qa(i, "default")
                }
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.uiInfos;
                    l && l.length && (a = no(i, t, this, a, i), a = pu(l, a), Qa(i, _o(a) ? "pointer" : r.defaultCursor || "default"))
                }
            }, {
                key: "onDown",
                value: function (e, t, i, a, o, n) {
                    var r, l, s, h, u, c, d = Lo(i, t, this),
                        g = d.uiInfos;
                    g && g.length && (u = no(i, t, this, a, i), r = pu(g, u), l = Ao(this, "value", t), _o(r) && (s = d.onChange, c = d.dataSource, h = d.value, a = d.dataValue, g = d.multiple, u = c[r].value, g ? (g = c[r].value, a = bi(c = a).call(c, 0), 0 <= Ii(a).call(a, g) ? Ki(a).call(a, Ii(a).call(a, g), 1) : a.push(g), t.a(l, a.join(",")), s && s(c, a, t, i)) : r !== d.activeIndex && (t.a(l, u), s && s(h, u, t, i))))
                }
            }]), t
        }();

    function bu(e, t) {
        for (var i = 0; i < e.length; i++)
            if (!e[i].active && Bo(e[i].rect, t)) return e[i].value
    }
    me = function () {
        g(t, Ws);
        var e = f(t);

        function t() {
            return c(this, t), e.apply(this, arguments)
        }
        return d(t, [{
            key: "onLeave",
            value: function (e, t, i, a, o, n) {
                Qa(i, "default")
            }
        }, {
            key: "onMove",
            value: function (e, t, i, a, o, n) {
                var r = Lo(i, t, this),
                    l = r.uiInfos;
                l && l.length && (a = no(i, t, this, a, i), a = bu(l, a), Qa(i, _o(a) ? "pointer" : r.defaultCursor || "default"))
            }
        }, {
            key: "onDown",
            value: function (e, t, i, a, o, n) {
                var r, l = Lo(i, t, this),
                    s = l.uiInfos;
                s && s.length && (r = no(i, t, this, a, i), a = bu(s, r), s = Ao(this, "value", t), _o(a) && a !== l.value && (r = l.onChange, l = l.value, s && t.a(s, a), r && r(l, a, t, i)))
            }
        }]), t
    }();

    function mu(e, t) {
        0 === t ? (e.textBaseline = na, e.textAlign = sa) : 0 < t && t < .25 ? (e.textBaseline = na, e.textAlign = la) : .25 === t ? (e.textBaseline = ha, e.textAlign = la) : .25 < t && t < .5 ? (e.textBaseline = oa, e.textAlign = la) : .5 === t ? (e.textBaseline = oa, e.textAlign = sa) : .5 < t && t < .75 ? (e.textBaseline = oa, e.textAlign = ra) : .75 === t ? (e.textBaseline = ha, e.textAlign = ra) : .75 < t && (e.textBaseline = na, e.textAlign = ra)
    }

    function wu(e, t, i) {
        var a = i.charAt(t - 1),
            t = i.charAt(t + 1);
        return Vu.test(e) && !Tu.test(t) || Tu.test(e) && !Vu.test(a) ? "\\u" + e.charCodeAt(0).toString(16) : e
    }
    var Cu = de("JSON", "stringify"),
        ku = /[\uD800-\uDFFF]/g,
        Vu = /^[\uD800-\uDBFF]$/,
        Tu = /^[\uDC00-\uDFFF]$/,
        Ts = s(function () {
            return '"\\udf06\\ud834"' !== Cu("\udf06\ud834") || '"\\udead"' !== Cu("\udead")
        });
    Cu && ue({
        target: "JSON",
        stat: !0,
        forced: Ts
    }, {
        stringify: function (e, t, i) {
            var a = Cu.apply(null, arguments);
            return "string" == typeof a ? a.replace(ku, wu) : a
        }
    }), Se.JSON || (Se.JSON = {
        stringify: JSON.stringify
    });
    var Iu, Du, Su, Lu = function (e, t, i) {
            return Se.JSON.stringify.apply(null, arguments)
        },
        Au = {
            chart: {
                modified: "Mon Jun 07 2021 09:46:26 GMT+0800 (中国标准时间)",
                width: 300,
                height: 260,
                func: "__ht__function(g, rect, comp, data, view) {\nht.vector.comp.chart.apply(null, arguments);\n}",
                properties: {
                    series: {
                        valueType: "Object",
                        defaultValue: [{
                            type: "bar",
                            data: [10, 30, 20]
                        }, {
                            type: "line",
                            data: [40, 50, 10]
                        }],
                        name: "系列"
                    },
                    xAxis: {
                        valueType: "Object",
                        defaultValue: [{
                            data: ["2017", "2018", "2019"]
                        }],
                        name: "横轴"
                    },
                    yAxis: {
                        valueType: "Object",
                        name: "纵轴"
                    },
                    colors: {
                        valueType: "ColorArray",
                        defaultValue: ["rgb(51,153,255)", "rgb(93,217,174)", "#FEB64D", "rgb(241,125,164)", "rgb(135,144,204)", "rgb(124,145,155)", "rgb(48,242,120)", "rgb(212,0,0)", "#32D3EB", "#c4ccd3"],
                        name: "颜色数组"
                    },
                    background: {
                        valueType: "Color",
                        defaultValue: null,
                        name: "背景"
                    },
                    boundaryGap: {
                        valueType: "Boolean",
                        defaultValue: !0,
                        name: "坐标轴留白"
                    },
                    rectSelectBorderColor: {
                        valueType: "Color",
                        defaultValue: "rgb(61,61,61)",
                        name: "框选边框色",
                        group: "选择"
                    },
                    rectSelectBackground: {
                        valueType: "Color",
                        defaultValue: "rgba(61,61,61,0.30)",
                        name: "框选背景色"
                    },
                    onRectSelected: {
                        valueType: "Function",
                        name: "框选事件",
                        extraInfo: {
                            arguments: ["ranges", "data", "view"]
                        }
                    },
                    onXAxisLabelClicked: {
                        valueType: "Function",
                        name: "横轴文本点击事件",
                        extraInfo: {
                            arguments: ["info", "data", "view"]
                        }
                    },
                    tooltip: {
                        valueType: "Boolean",
                        defaultValue: !0,
                        name: "提示",
                        group: "提示"
                    },
                    tooltipLineColor: {
                        valueType: "Color",
                        defaultValue: "rgb(124,145,155)",
                        name: "线颜色"
                    },
                    tooltipLineWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 1,
                        name: "线宽"
                    },
                    tooltipLinePattern: {
                        valueType: "NumberArray",
                        name: "线虚线样式"
                    },
                    tooltipPointerType: {
                        valueType: "String",
                        defaultValue: "auto",
                        name: "提示类型",
                        extraInfo: {
                            enum: {
                                values: ["auto", "line", "shadow"]
                            }
                        }
                    },
                    tooltipFormatter: {
                        valueType: "Function",
                        name: "提示格式化",
                        extraInfo: {
                            arguments: ["info", "data", "view"]
                        }
                    }
                },
                events: {
                    onClick: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onClick.apply(this, arguments);\n}",
                    onDown: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onDown.apply(this, arguments);\n}",
                    onUp: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onUp.apply(this, arguments);\n}",
                    onMove: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onMove.apply(this, arguments);\n}",
                    onEnter: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onEnter.apply(this, arguments);\n}",
                    onLeave: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onLeave.apply(this, arguments);\n}",
                    onBeginDrag: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onBeginDrag.apply(this, arguments);\n}",
                    onDrag: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onDrag.apply(this, arguments);\n}",
                    onEndDrag: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartInteractor.onEndDrag.apply(this, arguments);\n}"
                }
            },
            comboBox: {
                modified: "Mon Jun 07 2021 11:12:13 GMT+0800 (GMT+08:00)",
                width: 180,
                height: 38,
                func: "__ht__function(g, rect, comp, data, view) {\nht.vector.comp.comboBox.apply(this, arguments);\n}",
                properties: {
                    value: {
                        valueType: "String",
                        name: "属性值"
                    },
                    placeholder: {
                        valueType: "String",
                        name: "占位符"
                    },
                    placeholderColor: {
                        valueType: "Color",
                        defaultValue: "rgb(115,115,115)",
                        name: "占位符颜色"
                    },
                    dataSource: {
                        valueType: "Object",
                        name: "数据源"
                    },
                    disabled: {
                        valueType: "Boolean",
                        name: "禁用"
                    },
                    borderWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 1,
                        name: "边框宽度"
                    },
                    borderColor: {
                        valueType: "Color",
                        defaultValue: "#737373",
                        name: "边框颜色"
                    },
                    disabledBorderColor: {
                        valueType: "Color",
                        defaultValue: "#ebebeb",
                        name: "禁用边框颜色"
                    },
                    focusBorderColor: {
                        valueType: "Color",
                        defaultValue: "rgb(51,153,255)",
                        name: "编辑边框颜色"
                    },
                    borderRadius: {
                        valueType: "String",
                        defaultValue: "0",
                        name: "边框角度"
                    },
                    padding: {
                        valueType: "String",
                        defaultValue: "0",
                        name: "内边距"
                    },
                    background: {
                        valueType: "Color",
                        name: "背景"
                    },
                    disabledBackground: {
                        valueType: "Color",
                        defaultValue: "#fafafa",
                        name: "禁用背景"
                    },
                    focusBackground: {
                        valueType: "Color",
                        name: "编辑背景"
                    },
                    icon: {
                        valueType: "String",
                        name: "图标"
                    },
                    iconWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 20,
                        name: "图标宽度"
                    },
                    iconHeight: {
                        valueType: "PositiveNumber",
                        defaultValue: "20",
                        name: "图标高度"
                    },
                    iconAlign: {
                        valueType: "Align",
                        defaultValue: "left",
                        name: "图标水平位置"
                    },
                    font: {
                        valueType: "Font",
                        defaultValue: "12px arial, sans-serif",
                        name: "字体"
                    },
                    textAlign: {
                        valueType: "Align",
                        defaultValue: "left",
                        name: "文本水平对齐"
                    },
                    textColor: {
                        valueType: "Color",
                        defaultValue: "#737373",
                        name: "文本颜色"
                    },
                    disabledTextColor: {
                        valueType: "Color",
                        defaultValue: "#ebebeb",
                        name: "禁用文本颜色"
                    },
                    dropDownIcon: {
                        valueType: "String",
                        name: "下拉图标"
                    },
                    dropDownIconColor: {
                        valueType: "Color",
                        defaultValue: "#737373",
                        name: "下拉图标颜色"
                    },
                    dropDownIconWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 20,
                        name: "下拉图标宽度"
                    },
                    dropDownIconHeight: {
                        valueType: "PositiveNumber",
                        defaultValue: 20,
                        name: "下拉图标高度"
                    },
                    drawUnMatchValue: {
                        valueType: "Boolean",
                        defaultValue: !1,
                        name: "显示无效值"
                    },
                    searchInputVisible: {
                        valueType: "Boolean",
                        name: "显示搜索框"
                    },
                    onChange: {
                        valueType: "Function",
                        name: "改变事件",
                        extraInfo: {
                            arguments: ["oldValue", "newValue", "data", "view"]
                        }
                    },
                    dropIconWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 20,
                        name: "下拉框图标宽度",
                        group: "下拉"
                    },
                    dropIconHeight: {
                        valueType: "PositiveNumber",
                        defaultValue: 20,
                        name: "下拉框图标高度"
                    },
                    dropRowHeight: {
                        valueType: "PositiveNumber",
                        defaultValue: 26,
                        name: "下拉框项行高"
                    },
                    dropWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 200,
                        name: "下拉框宽度"
                    },
                    dropBackground: {
                        valueType: "Color",
                        defaultValue: "rgb(255,255,255)",
                        name: "下拉框背景"
                    },
                    dropLabelFont: {
                        valueType: "Font",
                        defaultValue: "12px Arial, sans-serif",
                        name: "下拉框文本字体"
                    },
                    dropLabelColor: {
                        valueType: "Color",
                        defaultValue: "#333",
                        name: "下拉框文本颜色"
                    },
                    dropActiveLabelColor: {
                        valueType: "Color",
                        defaultValue: "rgb(247,247,247)",
                        name: "下拉框选中文本色"
                    },
                    dropActiveBackground: {
                        valueType: "Color",
                        defaultValue: "rgb(51,153,255)",
                        name: "下拉框选中背景"
                    },
                    dropHoverBackground: {
                        valueType: "Color",
                        defaultValue: "#60ACFC",
                        name: "下拉框悬停背景"
                    },
                    dropMaxHeight: {
                        valueType: "PositiveNumber",
                        defaultValue: 280,
                        name: "下拉框最大高度"
                    },
                    dropBorderColor: {
                        valueType: "Color",
                        defaultValue: null,
                        name: "下拉边框颜色"
                    },
                    dropBorderWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 1,
                        name: "下拉边框宽度"
                    },
                    scrollSpeed: {
                        valueType: "PositiveNumber",
                        defaultValue: 1,
                        name: "滚动速度"
                    }
                },
                events: {
                    onDown: "__ht__function(event, data, view, point, width, height) {\nht.vector.comboBoxInteractor.onDown.apply(this, arguments);\n}",
                    onUp: "__ht__function(event, data, view, point, width, height) {\nht.vector.comboBoxInteractor.onUp.apply(this, arguments);\n}",
                    onMove: "__ht__function(event, data, view, point, width, height) {\nht.vector.comboBoxInteractor.onMove.apply(this, arguments);\n}",
                    onEnter: "__ht__function(event, data, view, point, width, height) {\nht.vector.comboBoxInteractor.onEnter.apply(this, arguments);\n}",
                    onLeave: "__ht__function(event, data, view, point, width, height) {\nht.vector.comboBoxInteractor.onLeave.apply(this, arguments);\n}",
                    onDrag: "__ht__function(event, data, view, point, width, height) {\nht.vector.comboBoxInteractor.onDrag.apply(this, arguments);\n}"
                },
                snapshotURL: "symbols/ht/snapshot/comboBox.json"
            },
            chartLegend: {
                modified: "Mon Jun 07 2021 10:59:07 GMT+0800 (中国标准时间)",
                width: 300,
                height: 100,
                func: "__ht__function(g, rect, comp, data, view) {\nht.vector.comp.chartLegend.apply(this, arguments);\n}",
                properties: {
                    dataSource: {
                        valueType: "Object",
                        defaultValue: [{
                            name: "上海2"
                        }, {
                            name: "厦门34"
                        }, {
                            name: "天津14"
                        }, {
                            name: "大连37"
                        }, {
                            name: "青岛5"
                        }],
                        name: "数据"
                    },
                    colors: {
                        valueType: "ColorArray",
                        defaultValue: ["rgb(51,153,255)", "rgb(93,217,174)", "#FEB64D", "rgb(241,125,164)", "rgb(135,144,204)", "rgb(124,145,155)", "rgb(48,242,120)", "rgb(212,0,0)", "#32D3EB", "#c4ccd3"],
                        name: "颜色数组"
                    },
                    align: {
                        valueType: "Align",
                        defaultValue: "left",
                        name: "水平对齐"
                    },
                    vAlign: {
                        valueType: "VAlign",
                        defaultValue: "top",
                        name: "垂直对齐"
                    },
                    vertical: {
                        valueType: "Boolean",
                        defaultValue: !1,
                        name: "垂直显示"
                    },
                    hGap: {
                        valueType: "Number",
                        defaultValue: 8,
                        name: "横间距"
                    },
                    vGap: {
                        valueType: "Number",
                        defaultValue: 8,
                        name: "纵间距"
                    },
                    vPadding: {
                        valueType: "Number",
                        defaultValue: 16,
                        name: "横边距"
                    },
                    hPadding: {
                        valueType: "Number",
                        defaultValue: 16,
                        name: "纵边距"
                    },
                    orientation: {
                        valueType: "Orientation",
                        defaultValue: "left",
                        name: "朝向",
                        group: "图标"
                    },
                    disabledIconColor: {
                        valueType: "Color",
                        defaultValue: "rgb(217,217,217)",
                        name: "禁用颜色"
                    },
                    iconWidth: {
                        valueType: "Number",
                        defaultValue: 22,
                        name: "宽度"
                    },
                    iconHeight: {
                        valueType: "Number",
                        defaultValue: 12,
                        name: "高度"
                    },
                    drawIcon: {
                        valueType: "Function",
                        name: "自定义绘制",
                        extraInfo: {
                            arguments: ["g", "rect", "item", "itemIndex", "color", "data", "view"]
                        }
                    },
                    textGap: {
                        valueType: "Number",
                        defaultValue: 5,
                        name: "文字图标间距",
                        group: "标签"
                    },
                    useItemColorOnLabel: {
                        valueType: "Boolean",
                        defaultValue: !0,
                        name: "使用图标颜色"
                    },
                    font: {
                        valueType: "Font",
                        defaultValue: "12px sans-serif, Arial",
                        name: "字体"
                    },
                    labelColor: {
                        valueType: "Color",
                        defaultValue: "rgb(61,61,61)",
                        name: "颜色"
                    },
                    disabledLabelColor: {
                        valueType: "Color",
                        defaultValue: "rgb(217,217,217)",
                        name: "禁用颜色"
                    }
                },
                events: {
                    onDown: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartLegendInteractor.onDown.apply(this, arguments);\n}",
                    onMove: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartLegendInteractor.onMove.apply(this, arguments);\n}",
                    onLeave: "__ht__function(event, data, view, point, width, height) {\nht.vector.chartLegendInteractor.onLeave.apply(this, arguments);\n}"
                }
            },
            button: {
                modified: "Mon Jun 07 2021 11:34:01 GMT+0800 (GMT+08:00)",
                width: 100,
                height: 38,
                func: "__ht__function(g, rect, comp, data, view) {\nht.vector.comp.button(g, rect, comp, data, view);\n}",
                properties: {
                    text: {
                        valueType: "String",
                        name: "文本"
                    },
                    disabled: {
                        valueType: "Boolean",
                        defaultValue: !1,
                        name: "禁用"
                    },
                    font: {
                        valueType: "Font",
                        defaultValue: "12px arial, sans-serif",
                        name: "字体"
                    },
                    icon: {
                        valueType: "String",
                        name: "图标"
                    },
                    iconPosition: {
                        valueType: "Orientation",
                        defaultValue: "left",
                        name: "图标位置"
                    },
                    iconWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 20,
                        name: "图标宽度"
                    },
                    iconHeight: {
                        valueType: "PositiveNumber",
                        defaultValue: 20,
                        name: "图标高度"
                    },
                    iconGap: {
                        valueType: "PositiveNumber",
                        defaultValue: 0,
                        name: "图标间距"
                    },
                    iconColor: {
                        valueType: "Color",
                        name: "图标染色"
                    },
                    hoverIconColor: {
                        valueType: "Color",
                        name: "悬停图标染色"
                    },
                    activeIconColor: {
                        valueType: "Color",
                        name: "按下图标染色"
                    },
                    textColor: {
                        valueType: "Color",
                        defaultValue: "rgb(61,61,61)",
                        name: "文本颜色"
                    },
                    hoverTextColor: {
                        valueType: "Color",
                        name: "悬停文本颜色"
                    },
                    activeTextColor: {
                        valueType: "Color",
                        name: "按下文本颜色"
                    },
                    disabledTextColor: {
                        valueType: "Color",
                        defaultValue: "#ebebeb",
                        name: "禁用文本颜色"
                    },
                    borderWidth: {
                        valueType: "PositiveNumber",
                        defaultValue: 0,
                        name: "边框宽度"
                    },
                    borderColor: {
                        valueType: "Color",
                        defaultValue: "#737373",
                        name: "边框颜色"
                    },
                    hoverBorderColor: {
                        valueType: "Color",
                        name: "悬停边框颜色"
                    },
                    activeBorderColor: {
                        valueType: "Color",
                        name: "按下边框颜色"
                    },
                    disabledBorderColor: {
                        valueType: "Color",
                        defaultValue: "#ebebeb",
                        name: "禁用边框颜色"
                    },
                    background: {
                        valueType: "Color",
                        defaultValue: "rgb(51,153,255)",
                        name: "背景"
                    },
                    hoverBackground: {
                        valueType: "Color",
                        name: "悬停背景"
                    },
                    activeBackground: {
                        valueType: "Color",
                        name: "按下背景"
                    },
                    disabledBackground: {
                        valueType: "Color",
                        defaultValue: "#fafafa",
                        name: "禁用背景"
                    },
                    borderRadius: {
                        valueType: "String",
                        defaultValue: "0",
                        name: "边框角度"
                    },
                    handleClick: {
                        valueType: "Function",
                        name: "点击事件",
                        extraInfo: {
                            arguments: ["event", "data", "view"]
                        }
                    }
                },
                events: {
                    onDown: "__ht__function(event, data, view, point, width, height) {\nht.vector.buttonInteractor.onDown.apply(this, arguments);\n}",
                    onUp: "__ht__function(event, data, view, point, width, height) {\nht.vector.buttonInteractor.onUp.apply(this, arguments);\n}",
                    onEnter: "__ht__function(event, data, view, point, width, height) {\nht.vector.buttonInteractor.onEnter.apply(this, arguments);\n}",
                    onLeave: "__ht__function(event, data, view, point, width, height) {\nht.vector.buttonInteractor.onLeave.apply(this, arguments);\n}"
                },
                snapshotURL: "symbols/ht/snapshot/button.json"
            }
        };
    for (Iu in Au) delete(Su = Au[Du = Iu]).modified, delete Su.snapshotURL, ht.Default.setCompType("ht.vector.".concat(Du), ht.Default.parse(Lu(Su)));

    function Ru(e) {
        return "ht.vector.".concat(e)
    }

    function _u(e, t) {
        var i = e.draw,
            a = e.tag,
            o = Ni(l = "".concat(i, ".")).call(l, a),
            n = Bu[o];
        if (!n) {
            var r = Ru(i),
                l = "object" === Te(e = i) ? e : ht.Default.getCompType(Ru(e)),
                i = l.width,
                e = l.height,
                s = l.events,
                h = {
                    type: r,
                    prefix: a,
                    pixelPerfect: !0,
                    rect: [0, 0, i, e]
                };
            if (s)
                for (var u in s) h[u] = s[u];
            if (t)
                for (var c in t) h[c] = t[c];
            Bu[o] = n = {
                width: i,
                height: e,
                fitSize: !0,
                comps: [h]
            }
        }
        return n
    }

    function Pu(e, t, i) {
        var a = e.x;
        e.y;
        var o = e.width;
        return e.height, e = i - t, 0 <= t ? a + o : i <= 0 ? a : a + o * (1 - Math.abs(t) / e)
    }

    function Mu(e, t, i, a) {
        e.save();
        var o = t.x,
            n = t.y,
            r = t.width,
            l = t.height,
            s = [],
            t = l / 3;
        "left" == a ? (s[0] = {
            x: o,
            y: n
        }, s[1] = {
            x: o - t,
            y: n + l / 2
        }, s[2] = {
            x: o,
            y: n + l
        }, s[3] = {
            x: o + t,
            y: n + l / 2
        }, s[4] = {
            x: o + r - t,
            y: n
        }, s[5] = {
            x: o + r - 2 * t,
            y: n + l / 2
        }, s[6] = {
            x: o + r - t,
            y: n + l
        }, s[7] = {
            x: o + r,
            y: n + l / 2
        }, e.beginPath(), e.strokeStyle = i, e.lineWidth = 1, e.fillStyle = ht.Default.brighter(i), e.beginPath(), e.moveTo(s[0].x, s[0].y), e.bezierCurveTo(s[0].x, s[0].y, s[1].x, s[1].y, s[2].x, s[2].y), e.bezierCurveTo(s[2].x, s[2].y, s[3].x, s[3].y, s[0].x, s[0].y), e.closePath(), e.stroke(), Gi(e).call(e), e.beginPath(), e.moveTo(s[2].x, s[2].y), e.bezierCurveTo(s[2].x, s[2].y, s[3].x, s[3].y, s[0].x, s[0].y), e.lineTo(s[4].x, s[4].y), e.bezierCurveTo(s[4].x, s[4].y, s[7].x, s[7].y, s[6].x, s[6].y)) : (s[0] = {
            x: o + t,
            y: n
        }, s[1] = {
            x: o,
            y: n + l / 2
        }, s[2] = {
            x: o + t,
            y: n + l
        }, s[3] = {
            x: o + 2 * t,
            y: n + l / 2
        }, s[4] = {
            x: o + r,
            y: n
        }, s[5] = {
            x: o + r - t,
            y: n + l / 2
        }, s[6] = {
            x: o + r,
            y: n + l
        }, s[7] = {
            x: o + r + t,
            y: n + l / 2
        }, e.beginPath(), e.strokeStyle = i, e.lineWidth = 1, e.fillStyle = ht.Default.brighter(i), e.moveTo(s[4].x, s[4].y), e.bezierCurveTo(s[4].x, s[4].y, s[5].x, s[5].y, s[6].x, s[6].y), e.bezierCurveTo(s[6].x, s[6].y, s[7].x, s[7].y, s[4].x, s[4].y), e.closePath(), e.stroke(), Gi(e).call(e), e.beginPath(), e.moveTo(s[2].x, s[2].y), e.bezierCurveTo(s[2].x, s[2].y, s[1].x, s[1].y, s[0].x, s[0].y), e.lineTo(s[4].x, s[4].y), e.bezierCurveTo(s[4].x, s[4].y, s[5].x, s[5].y, s[6].x, s[6].y)), e.closePath(), e.globalAlpha = .6, Gi(e).call(e), e.globalAlpha = 1, e.stroke(), e.restore()
    }
    var Bu = {},
        Ou = function (r, l, e, s, h) {
            var i = h.seriesDatas[e],
                n = l.name,
                t = h.bounds,
                a = t.bodyRect,
                o = t.bodySplitRect,
                u = a.x;
            a.y;
            var c = a.width;
            a.height;
            var d = l.color || eo(s.color, e),
                g = s.xAxis[l.xAxisIndex || 0],
                f = s.yAxis[l.yAxisIndex || 0],
                v = f._axisObj.unitWidth,
                p = g._axisObj.valueRange,
                y = p[0],
                x = p[1],
                b = f._axisObj.axisInfos,
                m = l.shadow,
                w = l.barWidth || .8,
                C = h.barSeries;
            h.hoverIndex;
            var k, V, T, I, D, S, L, A, R, _, P, t = h.leftSeries,
                g = h.rightSeries,
                f = C.length,
                M = Ii(C).call(C, l),
                B = h.barCategoryGap || 0,
                O = (v - 2 * (1 <= B ? B : v * B)) / f,
                E = l.drawBar,
                W = h.view && h.view.getZoom ? h.view.getZoom() : 1;
            qa(o) || (O = (M = l.renderArea === la ? (f = t.length, Ii(t).call(t, l)) : (f = g.length, Ii(g).call(g, l)), (v - 2 * (1 <= B ? B : v * B)) / f)), w < 1 && (w *= O), i && i.length && b && (qa(o) ? (k = [], V = h.interactiveInfo.axisInfos[h.valueAxis === va ? l.xAxisIndex || 0 : l.yAxisIndex || 0], T = Pu(a, y, x), I = [u, u + c], ii(i).call(i, function (e, t) {
                var i, a, o = "function" == typeof d ? d(e, t, eo(s.color, t), h.data, h.view) : d;
                b[t] && (i = {
                    x: Dh(I, p, e),
                    y: b[t].position
                }, a = {
                    x: u,
                    y: i.y - v / 2 + O * M + (O - w) / 2 + B,
                    width: Math.abs(i.x - T),
                    height: w
                }, k.push(a), V[t].series.push([n, _o(e) ? e : "-", o, i.x, i.y, a]))
            }), h.seriesColors.push(eo(s.color, e)), r.save(), ii(k).call(k, function (o, e) {
                function t() {
                    var e, t, i, a;
                    "cylinder" !== l.type ? (r.fillStyle = n, m && (a = m.color || Oa(n), e = m.opacity, _o(e) && (t = mo(a), i = Ki(t).call(t, 3, 1)[0] || 255, a = Ni(t = "rgba(".concat(t.join(","), ",")).call(t, i / 255 * e, ")")), r.shadowColor = a, r.shadowBlur = m.blur || 0, r.shadowOffsetX = (m.offsetX || 0) * W, r.shadowOffsetY = (m.offsetY || 0) * W), r.fillRect(o.x, o.y, o.width, o.height)) : Mu(r, o, n)
                }
                var n = Co(r, "function" == typeof d ? d(i[e], e, eo(s.color, e), h.data, h.view) : d, o);
                E ? E(r, i[e], o, {
                    defaultDraw: t,
                    index: e,
                    boundary: {
                        x: u,
                        y: o.y,
                        width: c,
                        height: o.height
                    },
                    color: n,
                    data: h.data,
                    view: h.view
                }) : t()
            })) : (D = l.renderArea == la ? (a = o[0], Ii(t).call(t, l)) : (a = o[1], Ii(g).call(g, l)), S = a.x, a.y, L = a.width, a.height, A = [], R = h.interactiveInfo.axisInfos[h.valueAxis === va ? l.xAxisIndex || 0 : l.yAxisIndex || 0], _ = Pu(a, y, x), P = [S, S + L], ii(i).call(i, function (e, t) {
                var i, a, o = "function" == typeof d ? d(e, t, eo(s.color, t), h.data, h.view) : d;
                b[t] && (i = {
                    x: Dh(P, p, e),
                    y: b[t].position
                }, a = {
                    x: S,
                    y: i.y - v / 2 + O * D + (O - w) / 2 + B,
                    width: Math.abs(i.x - _),
                    height: w
                }, A.push(a), R[t].series.push([n, _o(e) ? e : "-", o, i.x, i.y, a]))
            }), h.seriesColors.push(eo(s.color, e)), r.save(), ii(A).call(A, function (o, e) {
                function t() {
                    var e, t, i, a;
                    "cylinder" !== l.type ? (r.fillStyle = n, m && (a = m.color || Oa(n), e = m.opacity, _o(e) && (t = mo(a), i = Ki(t).call(t, 3, 1)[0] || 255, a = Ni(t = "rgba(".concat(t.join(","), ",")).call(t, i / 255 * e, ")")), r.shadowColor = a, r.shadowBlur = m.blur || 0, r.shadowOffsetX = (m.offsetX || 0) * W, r.shadowOffsetY = (m.offsetY || 0) * W), l.renderArea == la ? r.fillRect(o.x + L - o.width, o.y, o.width, o.height) : r.fillRect(o.x, o.y, o.width, o.height)) : (a = l.renderArea == la ? {
                        x: o.x + L - o.width,
                        y: o.y,
                        width: o.width,
                        height: o.height
                    } : o, Mu(r, a, n, l.renderArea))
                }
                var n = Co(r, "function" == typeof d ? d(i[e], e, eo(s.color, e), h.data, h.view) : d, o);
                E ? l.renderArea == la ? E(r, i[e], {
                    x: o.x + L - o.width,
                    y: o.y,
                    width: o.width,
                    height: o.height
                }, {
                    defaultDraw: t,
                    index: e,
                    boundary: {
                        x: S,
                        y: o.y,
                        width: L,
                        height: o.height
                    },
                    color: n,
                    data: h.data,
                    view: h.view
                }) : E(r, i[e], o, {
                    defaultDraw: t,
                    index: e,
                    boundary: {
                        x: S,
                        y: o.y,
                        width: L,
                        height: o.height
                    },
                    color: n,
                    data: h.data,
                    view: h.view
                }) : t()
            })), r.restore())
        };
    var Eu = {
            show: !0,
            type: "category",
            data: [],
            bodyGap: 0,
            axisLine: {
                show: !0,
                width: 1,
                color: "rgb(61,61,61)"
            },
            axisLabel: {
                show: !0,
                rotate: 0,
                align: "auto",
                font: "12px arial",
                color: "rgb(61,61,61)",
                offsetX: 0,
                offsetY: 0
            },
            axisTick: {
                show: !0,
                color: "rgb(61,61,61)",
                length: 5
            },
            splitLine: {
                show: !1,
                color: "#cccccc",
                width: 1,
                pattern: null,
                splitColors: null
            }
        },
        Wu = {
            show: !0,
            type: "value",
            splitNumber: 5,
            bodyGap: 0,
            axisLine: {
                show: !0,
                width: 1,
                color: "rgb(61,61,61)"
            },
            axisLabel: {
                show: !0,
                rotate: 0,
                align: "auto",
                font: "12px arial",
                color: "rgb(61,61,61)",
                offsetX: 0,
                offsetY: 0
            },
            axisTick: {
                show: !0,
                color: "rgb(61,61,61)",
                length: 5
            },
            splitLine: {
                show: !0,
                color: "#cccccc",
                width: 1,
                pattern: null
            }
        },
        Hu = ["rgb(51,153,255)", "rgb(93,217,174)", "#FEB64D", "rgb(241,125,164)", "rgb(135,144,204)", "rgb(124,145,155)", "rgb(48,242,120)", "rgb(212,0,0)", "#32D3EB", "#c4ccd3"],
        ju = function () {
            g(l, Uh);
            var r = f(l);

            function l(e, t, i) {
                var a, o;
                c(this, l), (o = r.call(this, e, t, i)).axisIndex = Ii(a = t.xAxis).call(a, e), o.isValueAxis = i.valueAxis === va, o.position = e.position || (o.axisIndex ? oa : na), ii(t = t.series).call(t, function (e) {
                    (e.xAxisIndex || 0) === o.axisIndex && o.series.push(e)
                }), o.boundHeight = o.getBoundHeight();
                var i = i.seriesDatas,
                    n = [];
                return ii(i).call(i, function (e) {
                    n = Ni(n).call(n, e)
                }), o.caluValueRange(n), o
            }
            return d(l, [{
                key: "getBoundHeight",
                value: function () {
                    var e = this.axisOption;
                    if (e.size) return e.size;
                    var t = this.ui,
                        i = t.data,
                        a = t.view;
                    if (!e.show) return 2;
                    var o = e.axisLabel.rotate,
                        n = e.axisTick.show ? e.axisTick.length : 0,
                        t = this.getDataZoomOption(),
                        n = n;
                    if (t && !1 !== t.sliderVisible && (n += 18), e.axisLabel.show) {
                        var a = Ro(e.data, i, a),
                            r = "e";
                        return a && ii(a).call(a, function (e) {
                            _o(e) && e.toString().length > r.length && (r = e)
                        }), e.axisLabel.formatter && (r = e.axisLabel.formatter(r)), o ? n + vo(e.axisLabel.font, r, o).height + 4 : n + Ea(e.axisLabel.font, r).height + 4
                    }
                    return n + 2
                }
            }, {
                key: "draw",
                value: function (n) {
                    var e = this.ui,
                        o = e.data,
                        r = e.view;
                    e.seriesDatas;
                    var l, s, h, u, c, d, g, t, i, f, v, p, y, x, b, m, w, C, a, k, V = e.bounds,
                        T = this.axisOption,
                        I = this.axisIndex,
                        D = e.bounds.xAxisRects[I];
                    !1 !== T.show && (t = this.zoomValueRange, l = T.axisLabel.rotate, s = D.x, h = D.y, u = D.width, D.height, !1 !== T.show && T.axisLine.show && (n.strokeStyle = T.axisLine.color, n.lineWidth = T.axisLine.width, n.beginPath(), n.moveTo(s, h), n.lineTo(s + u, h), n.stroke()), !1 !== T.show && T.axisLabel.show && (i = Ie(t, 3), c = i[0], I = i[1], i[2], d = I - c, D = this.getValuesByValueRange(!0), g = 0, T.axisTick.show && (g = T.axisTick.length) && (n.strokeStyle = T.axisTick.color, n.beginPath(), ii(D).call(D, function (e) {
                        var t, i, a;
                        qa(V.bodySplitRect) ? (n.moveTo(a = s + u * ((e - c) / d), h), n.lineTo(a, h + g)) : (n.moveTo(a = (i = s + (t = u / 2)) + (e - c) / d * t, h), n.lineTo(a, h + g), n.moveTo(a = i - (e - c) / d * t, h), n.lineTo(a, h + g))
                    }), n.stroke()), t = T.axisLabel.font, i = T.axisLabel.color, f = T.axisLabel.offsetX, v = T.axisLabel.offsetY, p = T.axisLabel.formatter, I = Ea(t, "1"), y = h + I.height, n.font = t, n.fillStyle = i, n.textAlign = sa, n.textBaseline = ha, ii(D).call(D, function (e) {
                        var t, i, a;
                        qa(V.bodySplitRect) ? (a = s + u * ((e - c) / d), n.save(), n.translate(a, y)) : (a = (i = s + (t = u / 2)) + (e - c) / d * t, n.save(), n.translate(a, y), n.rotate(Eo(-l)), "function" == typeof p && (e = p(e, o, r)), n.fillText(e, f, v), n.restore(), n.save(), n.translate(a = i - (e - c) / d * t, y)), n.rotate(Eo(-l)), "function" == typeof p && (e = p(e, o, r)), n.fillText(e, f, v), n.restore()
                    }), n.save(), T.splitLine.show && (e = e.bounds.bodyRect, x = e.x, b = e.y, m = e.width, w = e.height, n.rect(x, b, m, w), n.clip(), C = T.splitLine.drawLine, n.strokeStyle = T.splitLine.color, n.lineWidth = T.splitLine.width || 1, T.splitLine.pattern && n.setLineDash(T.splitLine.pattern), n.beginPath(), qa(V.bodySplitRect) ? (a = m / (D.length - 1) / 2, ii(D).call(D, function (e, t) {
                        var i = x + m * ((e - c) / d);
                        "function" == typeof C ? C(n, {
                            x: i - a / 2,
                            y: b,
                            width: a,
                            height: w
                        }, e) : (n.moveTo(i, b), n.lineTo(i, b + w))
                    })) : (k = m / (D.length - 1) / 2 / 2, ii(D).call(D, function (e, t) {
                        var i, a, o;
                        e - c != 0 && (o = (a = x + (i = m / 2)) + (e - c) / d * i, "function" == typeof C ? (C(n, {
                            x: o - k / 2,
                            y: b,
                            width: k,
                            height: w
                        }, e), C(n, {
                            x: a - (e - c) / d * i - k / 2,
                            y: b,
                            width: k,
                            height: w
                        }, e)) : (n.moveTo(o, b), n.lineTo(o, b + w), n.moveTo(o = a - (e - c) / d * i, b), n.lineTo(o, b + w)))
                    })), n.stroke()), n.restore()))
                }
            }]), l
        }(),
        Nu = function () {
            g(r, Uh);
            var n = f(r);

            function r(e, t, i) {
                var a, o;
                return c(this, r), (o = n.call(this, e, t, i)).axisIndex = Ii(a = t.yAxis).call(a, e), o.isValueAxis = i.valueAxis === va, o.position = e.position || (o.axisIndex ? ra : la), ii(t = t.series).call(t, function (e, t) {
                    (e.yAxisIndex || 0) === o.axisIndex && (o.series.push(e), o.seriesIndexs.push(t))
                }), o.labelHeight = o.getLabelHeight(), o.boundWidth = o.getBoundWidth(), o
            }
            return d(r, [{
                key: "getLabelHeight",
                value: function () {
                    return this.getMaxValueBound().height
                }
            }, {
                key: "getBoundWidth",
                value: function () {
                    var t = this.axisOption,
                        e = t.data,
                        i = t.axisLabel.offsetX;
                    if (t.size) return t.size;
                    var a = 0;
                    return ii(e).call(e, function (e) {
                        e = Ea(t.axisLabel.font, e).width;
                        a = Math.max(a, e)
                    }), a + i + 2 * t.axisTick.length
                }
            }, {
                key: "draw",
                value: function (i) {
                    var e = this.ui,
                        a = e.data,
                        o = e.view,
                        t = this.axisOption,
                        n = this.axisIndex,
                        r = e.bounds.yAxisRects[n],
                        l = [];
                    if (!1 !== t.show) {
                        this.zoomValueRange;
                        var s = t.axisLabel.rotate,
                            h = r.x,
                            u = r.y,
                            c = r.width,
                            d = r.height;
                        if (t.axisLine.show && (i.strokeStyle = t.axisLine.color, i.lineWidth = t.axisLine.width, i.beginPath(), this.position === ra ? (i.moveTo(h, u), i.lineTo(h, u + d)) : (i.moveTo(h + c, u), i.lineTo(h + c, u + d)), i.stroke()), t.axisLabel.show) {
                            var g = this.data || [],
                                f = 0;
                            if (t.axisTick.show && (f = t.axisTick.length)) {
                                i.strokeStyle = t.axisTick.color, i.beginPath();
                                for (var v = 0; v <= g.length; v++) {
                                    var p = u + d * (v / g.length);
                                    this.position === ra ? (i.moveTo(h, p), i.lineTo(h + f, p)) : (i.moveTo(h + c, p), i.lineTo(h + c - f, p))
                                }
                                i.stroke()
                            }
                            var y = c - (t.axisTick.show ? f : 0),
                                n = t.axisLabel.font,
                                r = t.axisLabel.color,
                                x = t.axisLabel.offsetX,
                                b = t.axisLabel.offsetY,
                                m = t.axisLabel.formatter,
                                w = h + y;
                            if (i.font = n, i.fillStyle = r, i.textAlign = this.position === la ? ra : la, i.textBaseline = ha, ii(g).call(g, function (e, t) {
                                    t = u + d * ((2 * t + 1) / (2 * g.length));
                                    i.save(), i.translate(w, t), i.rotate(Eo(-s)), "function" == typeof m && (e = m(e, a, o)), i.fillText(e, x, b), i.restore(), l.push({
                                        position: t,
                                        label: e
                                    })
                                }), this.axisInfos = l, this.unitWidth = d / g.length, i.save(), t.splitLine.show) {
                                var e = e.bounds.bodyRect,
                                    C = e.x,
                                    k = e.y,
                                    V = e.width,
                                    T = e.height;
                                t.splitLine.interval, i.strokeStyle = t.splitLine.color, i.lineWidth = t.splitLine.width || 1, t.splitLine.pattern && i.setLineDash(t.splitLine.pattern), i.beginPath();
                                for (var I = 0; I <= g.length; I++) {
                                    var D = k + T * (I / g.length);
                                    i.moveTo(C, D), i.lineTo(C + V, D)
                                }
                                i.stroke()
                            }
                            i.restore()
                        }
                    }
                }
            }]), r
        }(),
        Ts = ht.Default,
        Fu = Ts.clone;
    Ts.unionPoint;
    var zu = new Oe,
        Oe = function () {
            g(t, Ws);
            var e = f(t);

            function t() {
                return c(this, t), e.call(this)
            }
            return d(t, [{
                key: "onDown",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onMove",
                value: function (e, t, i, a, o, n) {
                    var r = Lo(i, t, this),
                        l = r.ui,
                        s = r.option;
                    if (s && l && (r._moveTimer && clearTimeout(r._moveTimer), s && s.tooltip.show && !r._dragging)) {
                        var h = l.interactiveInfo,
                            u = l.bounds.bodyRect,
                            h = h.axisInfos,
                            a = no(i, t, this, a, e),
                            s = s.tooltip.formatter;
                        if (Bo(u, a) && h.length) {
                            for (var c, d, g, f = l.valueAxis === fa ? a.y : a.x, v = 1 / 0, p = h[0], y = 0; y < p.length; y++) {
                                var x = Math.abs(p[y].position - f);
                                x < v && (v = x, c = y)
                            }
                            p[c] && (d = [], g = bi(l = l.seriesColors).call(l, 0), ii(h).call(h, function (e) {
                                e = e[c];
                                d.push({
                                    label: e.label,
                                    datas: e.series,
                                    colors: Ki(g).call(g, 0, e.series.length),
                                    index: c
                                })
                            }), d = ro(d), s && s(d, t, i), zu.setInfo(d), Hs.show(zu.getView(), e)), r.hoverIndex !== c && (r.hoverIndex = c, t.iv())
                        } else delete r.hoverIndex, t.iv(), Hs.hide()
                    }
                }
            }, {
                key: "onLeave",
                value: function (e, t, i, a, o, n) {
                    i = Lo(i, t, this);
                    void 0 !== i.hoverIndex && (delete i.hoverIndex, t.iv(), Hs.hide())
                }
            }, {
                key: "onBeginDrag",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onDrag",
                value: function (e, t, i, a, o, n) {}
            }, {
                key: "onEndDrag",
                value: function (e, t, i, a, o, n) {}
            }]), t
        }();
    return it.comp = {
        button: function (e, t, i, a, o) {
            var n = i.getValue("text"),
                r = i.getValue("disabled"),
                l = i.getValue("font"),
                s = i.getValue("icon"),
                h = i.getValue("iconPosition"),
                u = i.getValue("iconWidth"),
                c = i.getValue("iconHeight"),
                d = i.getValue("iconGap"),
                g = i.getColor("iconColor"),
                f = i.getColor("hoverIconColor"),
                v = i.getColor("activeIconColor"),
                p = i.getColor("textColor"),
                y = i.getColor("hoverTextColor"),
                x = i.getColor("activeTextColor"),
                b = i.getColor("disabledTextColor"),
                m = i.getValue("borderWidth"),
                w = i.getColor("borderColor"),
                C = i.getColor("hoverBorderColor"),
                k = i.getColor("activeBorderColor"),
                V = i.getColor("disabledBorderColor"),
                T = i.getColor("background"),
                I = i.getColor("hoverBackground"),
                D = i.getColor("activeBackground"),
                S = i.getColor("disabledBackground"),
                L = i.getValue("borderRadius"),
                A = i.getValue("handleClick"),
                R = Lo(o, a, i);
            (E = Ie(Wa(nn), 4))[0], E[1], E[2], E[3];
            var _, P, M = (W = Ie($i(L), 4))[0],
                B = W[1],
                O = W[2],
                i = W[3],
                E = t.x,
                L = t.y,
                W = t.width,
                t = t.height;
            r ? (T = S, w = V, p = b, m = m || 1) : (T = Na(R, T, I, D, !0), w = Na(R, w, C, k, !0), g = Na(R, g, f, v, !1, !0), p = Na(R, p, y, x, !0)), e.fillStyle = T, e.beginPath(), Po(e, E, L, W, t, M, B, i, O), e.closePath(), Gi(e).call(e), m && w && (e.strokeStyle = w, e.lineWidth = m, e.stroke()), !s && _o(n) ? (e.textAlign = "center", e.textBaseline = "middle", e.font = l, e.fillStyle = p, e.fillText(n, E + W / 2, L + t / 2)) : s && !_o(n) ? an(e, on(s), "uniform", E + .5 * (W - u), L + .5 * (t - c), u, c, a, o, g) : s && _o(n) && (w = Ea(l, n), oa === h || na === h ? (m = L + .5 * (t - c - w.height - d), _ = {
                x: E,
                height: w.height,
                width: W
            }, P = {
                x: E + .5 * (W - u),
                width: u,
                height: c
            }, oa === h ? (_.y = m + c + d, P.y = m) : na === h && (_.y = m, P.y = m + w.height + d)) : (W = E + .5 * (W - u - w.width - d), _ = {
                width: w.width,
                y: L,
                height: t
            }, P = {
                y: .5 * (t - c),
                width: u,
                height: c
            }, ra === h ? (_.x = W, P.x = W + w.width + d) : (_.x = W + u + d, P.x = W)), tn(e, n, l, p, _.x, _.y, _.width, _.height, "center", "middle"), an(e, on(s), "uniform", P.x, P.y, P.width, P.height, a, o, g)), R && (R.disabled = r, R.onClick = A)
        },
        input: function (e, t, i, a, o) {
            var n, r, l = i.getValue("value"),
                s = i.getValue("placeholder"),
                h = i.getColor("placeholderColor"),
                u = i.getValue("disabled"),
                c = i.getValue("borderWidth"),
                d = i.getColor("borderColor"),
                g = i.getValue("borderPattern"),
                f = i.getColor("focusBorderColor") || d,
                v = i.getValue("borderRadius"),
                p = i.getValue("padding"),
                y = i.getColor("background"),
                x = i.getColor("focusBackground") || y,
                b = i.getValue("icon"),
                m = i.getValue("iconWidth"),
                w = i.getValue("iconHeight"),
                C = i.getValue("iconAlign"),
                k = i.getValue("font"),
                V = i.getValue("textAlign"),
                T = i.getColor("textColor"),
                I = i.getValue("maxLength"),
                D = i.getValue("inputType"),
                S = i.getValue("enterEndInputable"),
                L = i.getValue("onKeyDown"),
                A = i.getValue("onKeyUp"),
                R = i.getValue("onChange"),
                _ = i.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)",
                P = i.getValue("formatter"),
                M = Lo(o, a, i),
                B = M && M.editing,
                O = M && M.editingValue,
                E = (X = Ie($i(p), 4))[0],
                W = X[1],
                H = X[2],
                j = X[3],
                N = (Y = Ie($i(v), 4))[0],
                F = Y[1],
                z = Y[2],
                G = Y[3],
                X = t.x,
                v = t.y,
                Y = t.width,
                t = t.height;
            a && B ? (n = x, d = f) : n = y, e.beginPath(), Po(e, X, v, Y, t, N, F, G, z), e.closePath(), n && (e.fillStyle = n, Gi(e).call(e)), (c && d || B && c && f) && (e.save(), e.strokeStyle = B ? f : d, e.lineWidth = c, g && g.length && e.setLineDash(g), e.stroke(), e.restore()), l = (_o(l) ? l : "") + "", O && B || (O = !l && s, r = (P ? P(l, a, o) : l) || s || "", P = l ? T : h, W = Math.max(0, Y - j - W), H = Math.max(0, t - E - H), j = X + j, E = v + E, B && (r = s || "", P = h), r && (e.save(), e.beginPath(), e.rect(j, E, W, H), e.clip(), !O && a && "password" === D && (r = function () {
                for (var e = "", t = 0; t < r.length; t++) e += "•";
                return e
            }()), rn(e, r, k, P, j, v + 1, W, t, V, "middle"), e.restore())), b && (C = "left" === C ? X : "center" === C ? X + .5 * (Y - m) : X + Y - m, ln(e, sn(b), "uniform", C, .5 * (t - w), m, w, a, o)), u && (o = c / 2, e.beginPath(), Po(e, X - o, v - o, Y + c, t + c, N, F, G, z), e.fillStyle = _, e.closePath(), Gi(e).call(e)), M && (M.disabled = u, M.font = k, M.value = l, M.placeholder = s, M.textAlign = V, M.maxLength = I, M.textColor = T, M.inputType = D, M.enterEndInputable = S, M.onKeyUp = A, M.onKeyDown = L, M.onChange = R, M.padding = p, M.selectTextOnFocus = i.getValue("selectTextOnFocus"))
        },
        inputNumber: function (e, t, i, a, o) {
            var n, r, l, s, h = i.getValue("value"),
                u = i.getValue("placeholder"),
                c = i.getColor("placeholderColor"),
                d = i.getColor("min"),
                g = i.getColor("max"),
                f = i.getColor("step"),
                v = i.getValue("disabled"),
                p = i.getValue("borderWidth"),
                y = i.getColor("borderColor"),
                x = i.getColor("focusBorderColor") || y,
                b = i.getValue("borderRadius"),
                m = i.getValue("padding"),
                w = i.getColor("background"),
                C = i.getColor("focusBackground") || w,
                k = i.getValue("icon"),
                V = i.getValue("iconWidth"),
                T = i.getValue("iconHeight"),
                I = i.getValue("iconAlign"),
                D = i.getValue("font"),
                S = i.getValue("textAlign"),
                L = i.getColor("textColor"),
                A = i.getValue("maxLength"),
                R = i.getValue("enterEndInputable"),
                _ = i.getValue("buttonVisible"),
                P = i.getValue("onKeyDown"),
                M = i.getValue("onKeyUp"),
                B = i.getValue("onChange"),
                O = i.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)",
                E = Lo(o, a, i),
                W = E && E.editing,
                H = E && E.editingValue,
                j = (Z = Ie($i(m), 4))[0],
                N = Z[1],
                F = Z[2],
                z = Z[3],
                G = (K = Ie($i(b), 4))[0],
                X = K[1],
                Y = K[2],
                U = K[3],
                Z = t.x,
                b = t.y,
                K = t.width,
                t = t.height;
            a && W ? (n = C, y = x) : n = w, e.beginPath(), Po(e, Z, b, K, t, G, X, U, Y), e.closePath(), n && (e.fillStyle = n, Gi(e).call(e)), (p && y || W && p && x) && (e.strokeStyle = W ? x : y, e.lineWidth = p, e.stroke()), (H || 0 === H) && W || (H = _o(h) ? h : _o(u) ? u : "", r = _o(h) ? L : c, s = Math.max(0, K - z - N), F = Math.max(0, t - j - F), l = Z + z, j = b + j, W && (H = _o(u) ? u : "", r = c), _o(H) && (e.save(), e.beginPath(), e.rect(l, j, s, F), e.clip(), El(e, H, D, r, l, b + 1, s, t, S, "middle"), e.restore())), _ && (r = Z + K - 20, l = b + p / 2, _ = 5 < (s = t - p) / 2 ? 2.5 : s / 2 * .4, e.strokeStyle = y, e.beginPath(), e.moveTo(r, l), e.lineTo(r, l + s), e.moveTo(r, l + s / 2), e.lineTo(20 + r, l + s / 2), e.stroke(), e.beginPath(), e.moveTo(6 + r, l + s / 4 + _), e.lineTo(10 + r, l + s / 4 - _), e.lineTo(14 + r, l + s / 4 + _), e.stroke(), e.beginPath(), e.moveTo(6 + r, l + s / 4 * 3 - _), e.lineTo(10 + r, l + s / 4 * 3 + _), e.lineTo(14 + r, l + s / 4 * 3 - _), e.stroke(), E && (E.buttonRects = [{
                x: r,
                y: l,
                width: 20,
                height: t / 2
            }, {
                x: r,
                y: l + t / 2,
                width: 20,
                height: t / 2
            }])), k && (I = "left" === I ? Z : "center" === I ? Z + .5 * (K - V) : Z + K - V, Wl(e, Hl(k), "uniform", I, .5 * (t - T), V, T, a, o)), v && (o = p / 2, e.beginPath(), Po(e, Z - o, b - o, K + p, t + p, G, X, U, Y), e.fillStyle = O, e.closePath(), Gi(e).call(e)), E && (E.disabled = v, E.font = D, E.value = h, E.placeholder = u, E.textAlign = S, E.maxLength = A, E.textColor = L, E.enterEndInputable = R, E.onKeyUp = M, E.onKeyDown = P, E.onChange = B, E.padding = m, E.step = f, E.min = d, E.max = g, E.selectTextOnFocus = i.getValue("selectTextOnFocus"))
        },
        textarea: function (t, e, i, a, o) {
            var n, r, l, s, h, u = i.getValue("value"),
                c = i.getValue("placeholder"),
                d = i.getColor("placeholderColor"),
                g = i.getValue("disabled"),
                f = i.getValue("borderWidth"),
                v = i.getColor("borderColor"),
                p = i.getValue("borderPattern"),
                y = i.getColor("focusBorderColor"),
                x = i.getValue("borderRadius"),
                b = i.getValue("padding"),
                m = i.getColor("background"),
                w = i.getColor("focusBackground") || m,
                C = i.getValue("textAlign"),
                k = i.getColor("textColor"),
                V = i.getValue("lineHeight"),
                T = i.getValue("font"),
                I = i.getValue("wordBreak"),
                D = i.getValue("maxLength"),
                S = i.getValue("enterEndInputable"),
                L = i.getValue("onKeyUp"),
                A = i.getValue("onKeyDown"),
                R = i.getValue("onChange"),
                _ = i.getValue("formatter"),
                P = i.getColor("disabledLayerColor") || "rgba(255, 255, 255, 0.35)",
                M = Lo(o, a, i),
                B = M && M.editing,
                O = M && M.editingValue,
                E = (z = Ie($i(b), 4))[0],
                W = z[1],
                H = z[2],
                j = z[3],
                N = (Y = Ie($i(x), 4))[0],
                F = Y[1],
                z = Y[2],
                x = Y[3],
                G = e.x,
                X = e.y,
                Y = e.width,
                U = e.height;
            a && B ? (n = w, v = y) : n = m, t.beginPath(), Po(t, G, X, Y, U, N, F, x, z), t.closePath(), n && (t.fillStyle = n, Gi(t).call(t)), (f && v || B && f && y) && (t.save(), t.strokeStyle = B ? y : v, t.lineWidth = f, p && t.setLineDash(p), t.stroke(), t.restore()), u = (_o(u) ? u : "") + "", O && B || (o = (_ ? _(u, a, o) : u) || c || "", r = u ? k : d, l = Math.max(0, Y - j - W), H = Math.max(0, U - E - H), B && (o = c || "", r = d), o && (t.save(), t.beginPath(), t.rect(G + j, X + E, l, H), t.clip(), h = ja(o, T, l, I), s = X + E, ii(h).call(h, function (e) {
                X + U < s || (hn(t, e, T, r, G + j, s, l, V, C, "middle"), s += V)
            }), t.restore())), g && (h = f / 2, t.beginPath(), Po(t, G - h, X - h, Y + f, U + f, N, F, x, z), t.fillStyle = P, t.closePath(), Gi(t).call(t)), M && (M.disabled = g, M.font = T, M.value = u, M.placeholder = c, M.textAlign = C, M.maxLength = D, M.textColor = k, M.enterEndInputable = S, M.padding = b, M.wordBreak = I, M.onKeyUp = L, M.onKeyDown = A, M.onChange = R, M.lineHeight = V, M.selectTextOnFocus = i.getValue("selectTextOnFocus"))
        },
        radio: function (e, t, i, a, o) {
            var n = i.getValue("disabled"),
                r = i.getValue("checked"),
                l = i.getColor("normalColor"),
                s = i.getColor("background"),
                h = i.getColor("activeColor"),
                u = i.getColor("disabledColor"),
                c = i.getColor("disabledBackground");
            i.getValue("symbol");
            var d = i.getColor("hoverColor"),
                g = i.getColor("hoverBackground"),
                f = i.getColor("activeHoverColor"),
                v = i.getColor("activeHoverBackground"),
                p = i.getColor("checkedHoverColor"),
                y = i.getColor("checkedHoverBackground"),
                x = Lo(o, a, i),
                b = r ? h : l,
                m = t.x,
                o = t.y,
                h = t.width,
                l = t.height,
                t = Math.min(h, l);
            a && (n ? (b = u, s = c) : x.pressed ? (r ? b = ht.Default.darker(b, qi.activeDarker) : s = ht.Default.darker(s, qi.activeDarker), f && (b = f), v && (s = v)) : x.hover && (r ? (b = ht.Default.darker(b, qi.hoverDarker), p && (b = p), y && (s = y)) : (s = ht.Default.darker(s, qi.hoverDarker), d && (b = d), g && (s = g)))), s && (e.beginPath(), e.fillStyle = s, e.arc(m + .5 * h, o + .5 * l, .5 * t, 0, 2 * Math.PI), Gi(e).call(e)), e.beginPath(), e.strokeStyle = b, e.lineWidth = 1.5, e.arc(m + .5 * h, o + .5 * l, .5 * t, 0, 2 * Math.PI), e.stroke(), r && (e.beginPath(), e.fillStyle = b, e.arc(m + .5 * h, o + .5 * l, .25 * t, 0, 2 * Math.PI), Gi(e).call(e)), a && !a.__inputType && (a.__inputType = da), x && (x.disabled = n, x.onChange = i.getValue("onChange"), x.group = i.getValue("group"), x.value = i.getValue("value"))
        },
        checkbox: function (e, t, i, a, o) {
            var n = i.getValue("checked"),
                r = i.getValue("disabled"),
                l = i.getColor("borderColor"),
                s = i.getColor("activeBorderColor"),
                h = i.getColor("disabledBorderColor"),
                u = i.getColor("background"),
                c = i.getColor("activeBackground"),
                d = i.getColor("disabledBackground"),
                g = i.getValue("borderRadius"),
                f = i.getColor("iconColor"),
                v = i.getColor("disabledIconColor"),
                p = Lo(o, a, i),
                y = t.x,
                x = t.y,
                b = t.width,
                o = t.height,
                t = Math.min(b, o),
                u = n ? c : u;
            u = r ? (l = h, f = v, d) : Na(a, u, null, null, !0), n && !r && (l = s), o < b ? y += .5 * (b - o) : b < o && (x += .5 * (o - b)), e.beginPath(), Po(e, y, x, t, t, g), e.closePath(), u && (e.fillStyle = u, Gi(e).call(e)), e.strokeStyle = l, e.lineWidth = 1, e.stroke(), n && (e.beginPath(), e.moveTo(y + .125 * t, x + .5 * t), e.lineTo(y + t * (3 / 8), x + .75 * t), e.lineTo(y + .8125 * t, x + .25 * t), e.lineWidth = Math.max(1, t / 16), e.lineCap = "round", e.strokeStyle = f, e.stroke()), a && !a.__inputType && (a.__inputType = ga), p && (p.disabled = r, p.checked = n, p.onChange = i.getValue("onChange"), p.group = i.getValue("group"), p.value = i.getValue("value"))
        },
        colorPicker: function (e, t, i, a, o) {
            var n, r = i.getValue("disabled"),
                l = i.getValue("borderWidth"),
                s = i.getValue("borderColor"),
                h = i.getValue("disabledBorderColor"),
                u = i.getValue("focusBorderColor"),
                c = i.getValue("borderRadius"),
                d = i.getValue("textColor"),
                g = i.getValue("value"),
                f = i.getValue("font"),
                v = i.getValue("fullMode"),
                p = i.getValue("showDropDownIcon"),
                y = i.getValue("dropDownIcon"),
                x = i.getValue("dropDownIconColor"),
                b = i.getValue("dropDownIconWidth"),
                m = i.getValue("dropDownIconHeight"),
                w = i.getValue("onChange"),
                C = Lo(o, a, i),
                k = (D = Ie($i(c), 4))[0],
                V = D[1],
                T = D[2],
                i = D[3],
                I = t.x,
                c = t.y,
                D = t.width,
                t = t.height,
                S = I + D + 5,
                L = c + t + 5,
                A = !1;
            if (r ? s = d = h : C && C.editing && u && (s = u), e.save(), v) {
                e.beginPath(), Po(e, I, c, D, t, k, V, i, T), e.closePath(), e.clip();
                for (var R = c, _ = 0; R < L; R += 5, _++)
                    for (var A = _ % 2 != 0, P = I; P < S; P += 5) e.fillStyle = A ? fn : gn, e.fillRect(P, R, 5, 5), A = !A
            } else {
                S = (n = {
                    x: I + 4,
                    y: c + 4,
                    width: 1.66 * (t - 8),
                    height: t - 8
                }).x + n.width, L = n.y + n.height, e.beginPath(), e.rect(n.x, n.y, n.width, n.height), e.closePath(), e.clip();
                for (var M = n.y, B = 0; M < L; M += 5, B++) {
                    A = B % 2 != 0;
                    for (var O = n.x; O < S; O += 5) e.fillStyle = A ? fn : gn, e.fillRect(O, M, 5, 5), A = !A
                }
            }
            e.restore(), e.beginPath(), Po(e, I, c, D, t, k, V, i, T), e.closePath(), g && v ? (e.fillStyle = g, Gi(e).call(e)) : g && !v && (e.fillStyle = g, e.fillRect(n.x, n.y, n.width, n.height), vn.setColor(g), un(e, vn, f, d, n.x + n.width + 4, c, D - n.width - 8, t, "left", "middle")), l && (e.lineWidth = l, e.strokeStyle = s, e.stroke()), p && cn(e, dn(y || "ht.vector.dropDownIcon"), "uniform", I + D - 8 - b, c + .5 * (t - m), b, m, a, o, x), C && (C.disabled = r, C.onChange = w)
        },
        comboBox: function (e, t, i, a, o) {
            var n, r = i.getValue("value"),
                l = i.getValue("placeholder"),
                s = i.getColor("placeholderColor"),
                h = i.getValue("dataSource"),
                u = i.getValue("disabled"),
                c = i.getValue("borderWidth"),
                d = i.getColor("borderColor"),
                g = i.getColor("disabledBorderColor"),
                f = i.getColor("focusBorderColor"),
                v = i.getValue("borderRadius"),
                p = i.getValue("padding"),
                y = i.getColor("background"),
                x = i.getColor("disabledBackground"),
                b = i.getColor("focusBackground") || y,
                m = i.getValue("icon"),
                w = i.getValue("iconWidth"),
                C = i.getValue("iconHeight"),
                k = i.getValue("iconAlign"),
                V = i.getValue("font"),
                T = i.getValue("textAlign"),
                I = i.getColor("textColor"),
                D = i.getColor("disabledTextColor"),
                S = i.getValue("dropDownIcon"),
                L = i.getColor("dropDownIconColor"),
                A = i.getValue("dropDownIconWidth"),
                R = i.getValue("dropDownIconHeight"),
                _ = i.getValue("drawUnMatchValue"),
                P = Lo(o, a, i),
                M = P && P.editing,
                B = (F = Ie($i(p), 4))[0],
                O = F[1],
                E = F[2],
                W = F[3],
                H = (z = Ie($i(v), 4))[0],
                j = z[1],
                N = z[2],
                p = z[3],
                F = t.x,
                v = t.y,
                z = t.width,
                t = t.height;
            a ? u ? (n = x, d = g, I = D, c = c || 1) : M ? (n = b, d = f) : n = y : n = y, e.beginPath(), Po(e, F, v, z, t, H, j, p, N), e.closePath(), n && (e.fillStyle = n, Gi(e).call(e)), (c && d || M && c && f) && (e.strokeStyle = M ? f : d, e.lineWidth = c, e.stroke());
            var G = "";
            if (_) G = r;
            else if (!qa(r) && h)
                for (var X = 0, Y = h.length; X < Y; X++)
                    if (h[X].value === r) {
                        G = h[X].label, m = h[X].icon;
                        break
                    } G || (m = null, qa(r) || (G = r + "")), _ = G || l || "", l = Math.max(0, z - W - O - A - 8), E = Math.max(0, t - B - E), W = F + W, B = v + B, qa(r) && !u && (I = s || qi.placeholderColor), e.save(), e.beginPath(), e.rect(W, B, l, E), e.clip(), pn(e, _, V, I, m ? W + w : W, B, l, E, T, "middle"), e.restore(), m && (O = "left" === k ? W : "center" === k ? F + .5 * (z - w) : F + z - w - O, yn(e, xn(m), "uniform", O, .5 * (t - C), w, C, a, o)), yn(e, xn(S || "ht.vector.dropDownIcon"), "uniform", F + z - 8 - A, v + .5 * (t - R), A, R, a, o, L), P && (P.disabled = u, P.dataSource = h, P.dropIconWidth = i.getValue("dropIconWidth"), P.dropIconHeight = i.getValue("dropIconHeight"), P.dropRowHeight = i.getValue("dropRowHeight"), P.dropWidth = i.getValue("dropWidth"), P.dropBackground = i.getValue("dropBackground"), P.dropLabelFont = i.getValue("dropLabelFont"), P.dropLabelColor = i.getValue("dropLabelColor"), P.dropActiveLabelColor = i.getValue("dropActiveLabelColor"), P.dropActiveBackground = i.getValue("dropActiveBackground"), P.dropHoverBackground = i.getValue("dropHoverBackground"), P.dropMaxHeight = i.getValue("dropMaxHeight"), P.onChange = i.getValue("onChange"), P.dropBorderColor = i.getValue("dropBorderColor"), P.dropBorderWidth = i.getValue("dropBorderWidth"), P.scrollSpeed = i.getValue("scrollSpeed"), P.searchInputVisible = i.getValue("searchInputVisible"))
        },
        gauge: function (e, t, i, a, o) {
            var n = i.getValue("pointerRadius"),
                r = i.getColor("pointerColor"),
                l = i.getValue("value"),
                s = i.getValue("max"),
                h = i.getValue("showTick"),
                u = i.getValue("tickEvery"),
                c = i.getColor("tickColor"),
                d = i.getValue("tickWidth");
            i.getValue("tickRadius");
            var g = i.getValue("bigTickEvery"),
                f = i.getColor("bigTickColor"),
                v = i.getValue("bigTickWidth");
            i.getValue("bigTickRadius");
            var p = i.getValue("showLabel"),
                y = i.getValue("labelEvery"),
                x = i.getColor("labelColor"),
                b = i.getValue("labelFont"),
                m = i.getValue("labelRadius"),
                w = i.getValue("showShadow"),
                C = i.getValue("shadowBlur"),
                k = i.getColor("shadowColor"),
                V = i.getValue("shadowOffsetX"),
                T = i.getValue("shadowOffsetY");
            Tn = i.getValue("clockwise"), In = i.getValue("min"), kn = i.getValue("startAngle"), Vn = i.getValue("endAngle"), wn = Math.abs(s - In), Cn = Math.abs(Vn - kn);
            var I = t.x,
                D = t.y,
                i = t.width,
                t = t.height,
                S = Math.min(i, t) / 2,
                l = mn(l, Tn);
            if (e.save(), w && (e.shadowColor = k, e.shadowBlur = C, e.shadowOffsetX = V, e.shadowOffsetY = T), e.translate(I + .5 * i, D + .5 * t), h) {
                if (g) {
                    e.beginPath(), e.strokeStyle = f, e.lineWidth = v;
                    for (var L = In; L <= s; L += g) {
                        var A = mn(L, Tn),
                            R = S * Math.cos(A),
                            A = S * Math.sin(A);
                        e.moveTo(.84 * R, .84 * A), e.lineTo(R, A)
                    }
                    e.stroke()
                }
                if (u) {
                    e.beginPath(), e.strokeStyle = c, e.lineWidth = d;
                    for (var _ = In; _ <= s; _ += u) {
                        var P = mn(_, Tn),
                            M = S * Math.cos(P),
                            P = S * Math.sin(P);
                        e.moveTo(.9 * M, .9 * P), e.lineTo(M, P)
                    }
                    e.stroke()
                }
            }
            if (p && y) {
                m = bn(m, S), e.font = b, e.fillStyle = x, e.textAlign = "center", e.textBaseline = "middle";
                for (var B = In; B <= s; B += y) {
                    var O = mn(B, Tn),
                        E = m * Math.cos(O),
                        O = m * Math.sin(O);
                    e.fillText(B.toFixed(y.toString().split(".")[1] ? y.toString().split(".")[1].length : 0), E, O)
                }
            }
            x = .05 * (n = bn(n, S)), e.rotate(l), e.beginPath(), e.moveTo(-1.5 * x, 0), e.lineTo(0, -x), e.lineTo(n, 0), e.lineTo(0, x), e.closePath(), e.fillStyle = r, Gi(e).call(e), e.restore()
        },
        table: function (v, p, i, y, x) {
            var a, e, l = i.getValue("columns"),
                t = i.getValue("dataSource"),
                o = i.getColor("thBackground"),
                n = i.getColor("tdBackground"),
                b = i.getValue("thHeight"),
                s = i.getValue("tdHeight"),
                m = i.getValue("textLineHeight"),
                h = i.getColor("thColor"),
                w = i.getColor("tdColor"),
                u = i.getValue("thFont"),
                C = i.getValue("tdFont"),
                k = i.getValue("borderWidth"),
                r = i.getColor("borderColor"),
                c = i.getColor("columnLineColor"),
                V = i.getValue("columnLineWidth"),
                d = i.getValue("columnLinePattern"),
                g = i.getColor("rowLineColor"),
                T = i.getValue("rowLineWidth"),
                f = i.getValue("rowLinePattern"),
                I = i.getValue("showHeadRowLine"),
                D = i.getValue("cellPadding"),
                S = i.getValue("showHead"),
                L = i.getColor("hoverBackground"),
                A = i.getColor("hoverColor"),
                R = i.getColor("selectBackground"),
                _ = i.getColor("selectColor"),
                P = i.getValue("translateY") || 0,
                M = i.getValue("translateX") || 0,
                B = i.getValue("scrollable"),
                O = i.getValue("autoHideScrollBar"),
                E = i.getColor("scrollBarColor"),
                W = i.getValue("scrollBarWidth"),
                H = i.getValue("scrollBarWidthAbsolute"),
                j = i.getValue("drawRow"),
                N = i.getValue("multiple"),
                F = i.getValue("onSelectRow"),
                z = i.getValue("onHoverCell"),
                G = i.getValue("onClickCell"),
                X = i.getValue("onClickCellImage"),
                Y = i.getValue("selectedIndex") || [],
                U = i.getValue("visibleFunc"),
                Z = i.getValue("columnVisibleFunc"),
                K = i.getValue("resizable"),
                J = i.getValue("resizeLineWidth"),
                q = i.getValue("resizeLineColor"),
                $ = i.getValue("resizeInteractiveSize"),
                Q = i.getValue("showHeadColumnLineOnly"),
                ee = i.getValue("showContentColumnLineOnly"),
                te = i.getValue("adjustRowHeight"),
                ie = Lo(x, y, i),
                ae = p.x,
                oe = p.y,
                ne = p.width,
                re = p.height,
                le = ne - 2 * k,
                se = re - 2 * k,
                he = [],
                ue = [],
                ce = [],
                de = [],
                ge = [];
            if (S && (e = [ae + k, oe + k, le, b]), a = [ae + k, oe + b * S + k, ne, se - b * S], qa(Y) || ht.Default.isArray(Y) || (Y = [Y]), v.save(), v.beginPath(), v.rect(ae, oe, ne, re), v.clip(), o && S && (v.fillStyle = o, v.fillRect.apply(v, Le(e))), n && (v.fillStyle = n, v.fillRect.apply(v, Le(a))), l && 0 < l.length && (ii(l).call(l, function (e, t) {
                    (Z && Z(e, t, y, x) || !Z) && (ce.push(e), de.push(t))
                }), ce.length)) {
                var fe = ce.length,
                    ve = Za(ce, le - V * (fe - 1)),
                    pe = t.length,
                    ye = [],
                    xe = [],
                    o = ie.customColWidths || [],
                    be = ae + k + M;
                if (S) {
                    n = 1;
                    x && x.getZoom && (n = x.getZoom()), $ *= 1 / n;
                    for (var me = 0; me < fe; me++) ! function (e) {
                        var t = ce[e],
                            i = t.drawHeadCell,
                            a = ve[e] - 2 * D,
                            o = t.headColor || t.color || h,
                            n = t.headFont || t.font || u;
                        "function" == typeof o && (o = o(t)), "function" == typeof n && (n = n(t)), be += D, v.save(), v.beginPath();
                        var r, l = t.displayName || t.key,
                            s = [be, oe + k, a, b];
                        v.rect.apply(v, s), v.clip(), r = function () {
                            var e;
                            Gn.apply(void 0, Ni(e = [v, l, n, o]).call(e, s, [t.align || "left", "middle"]))
                        }, i ? i(v, l, Do(s), {
                            color: o,
                            font: n,
                            defaultDraw: r,
                            data: y,
                            column: t,
                            colIndex: de[e]
                        }) : r(), v.restore(), be += a + V + D, xe.push({
                            x: be - $ / 2 - V / 2,
                            y: oe,
                            width: $,
                            height: b
                        })
                    }(me)
                }
                v.save(), v.beginPath(), v.rect(ae + k, oe + k + (S ? b : 0), le, se - b * S), v.clip();
                var we = oe;
                t && 0 < pe && (ii(t).call(t, function (e, t) {
                    (U && U(e, t, y, x) || !U) && (he.push(e), ue.push(t))
                }), ii(he).call(he, function (e, t) {
                    var a, o, n, r;
                    ye.push((a = e, o = ue[t], n = m, e = l, t = te, r = Math.max(n, s), ii(e).call(e, function (e, t) {
                        var i = e.format,
                            e = a[e.key];
                        "string" != typeof (e = i ? i(e, a, o, t) : e) || (e = e.match(Kn)) && e.length && (r = Math.max(r, n * (e.length + 1)))
                    }), r = t ? t(a, o, r) : r))
                }), !N && 1 < Y.length && (Y = bi(Y).call(Y, 0, 1)), ii(he).call(he, function (s, h) {
                    var u = ue[h],
                        c = ye[h],
                        d = we + T * (h + I * S * 1) + b * S + k + P,
                        e = {
                            x: ae,
                            y: d,
                            width: ne,
                            height: c
                        };
                    if (we += c, be = ae + k + M, Zn(Do(a), e)) {
                        v.save(), j && j.call(i, v, s, u, e, Ii(ue).call(ue, u), y, x);
                        var g = ie && ie.hoverIndex === u,
                            f = Y && -1 !== Ii(Y).call(Y, u);
                        f && R ? (v.fillStyle = R, v.fillRect(ae, d, ne, c)) : !f && g && L && (v.fillStyle = L, v.fillRect(ae, d, ne, c));
                        for (var t = 0; t < fe; t++)(function (e) {
                            var i = ce[e],
                                a = de[e],
                                t = i.drawCell,
                                o = ve[e] - 2 * D,
                                n = i.bodyFont || i.font || C,
                                r = i.bodyColor || i.color || w;
                            if (f && _ && (r = _), "function" == typeof (r = !f && g && A ? A : r) && (r = r(s[i.key], s)), "function" == typeof n && (n = n(s[i.key], s)), !Zn({
                                    x: be += D,
                                    y: d,
                                    width: o,
                                    height: c
                                }, p)) return be += o + V + D;
                            var l = s[i.key];
                            i.format && (l = i.format(l, s, u, a)), v.save(), v.beginPath(), v.rect(be, d, o, c), v.clip();
                            e = function () {
                                var t, e = i.isIcon;
                                i.isIndex && (e = !1, l = h + 1, i.format && (l = i.format(l, s, u, a))), e ? 0 < o && Xn(v, Yn(l), "centerUniform", be, d + 1, o, c - 2, y, x) : null != (e = l) && "" !== e && (((e = "string" == typeof l ? l.match(Kn) : null) ? e.length : 0) ? (e = l.split(Kn), t = d, "middle" === i.vAlign ? t = d + (c - e.length * m) / 2 : "bottom" === i.vAlign && (t = d + (c - e.length * m)), ii(e).call(e, function (e) {
                                    Gn(v, e, n, r, be, t, o, m, i.align || "left", i.vAlign || "middle"), t += m
                                })) : Gn(v, l, n, r, be, d, o, c, i.align || "left", i.vAlign || "middle"))
                            };
                            t ? t(v, l, {
                                x: be,
                                y: d,
                                width: o,
                                height: c
                            }, {
                                column: i,
                                colIndex: a,
                                row: s,
                                rowIndex: u,
                                font: n,
                                color: r,
                                view: x,
                                defaultDraw: e,
                                data: y,
                                isHoverRow: g,
                                isSelectedRow: f
                            }, ge) : e(), be += o + V + D, v.restore()
                        })(t);
                        v.restore()
                    }
                })), ie && (ie.rowHeights = ye, ie.colWidths = ve, ie.headHeight = S ? b : 0, ie.rowLineWidth = T, ie.columnLineWidth = V, ie.translateX = M, ie.translateY = P, ie.autoHideScrollBar = O, ie.multiple = N, ie.selectedIndex = Y, ie.dataSource = t, ie.columns = l, ie.onSelectRow = F, ie.onHoverCell = z, ie.onClickCell = G, ie.onClickCellImage = X, ie.rawDatas = he, ie.rawIndexs = ue, ie.rawCols = ce, ie.rawColIndexs = de, ie.headRect = e, ie.bodyRect = a, ie.resizable = K, ie.resizeRects = xe, ie.customColWidths = o, ie.onClickHeadCell = i.getValue("onClickHeadCell"), ie.pannable = i.getValue("pannable"), ie.scrollBarInteractiveSize = i.getValue("scrollBarInteractiveSize"), ie.scrollSpeed = i.getValue("scrollSpeed"), ie.rowHoverable = i.getValue("rowHoverable"), ie.rowSelectable = i.getValue("rowSelectable"), ie.drawCellImageInfo = ge);
                var Ce = oe + k + b * S + P;
                v.beginPath(), I && S && (v.moveTo(ae, Ce += T / 2), v.lineTo(ae + ne, Ce), Ce += T / 2);
                for (var ke, Ve, Te = 0; Te < pe && (Ce += ye[Te] + T / 2, !(oe + re < Ce)); Te++) Ce < oe || (v.moveTo(ae, Ce), v.lineTo(ae + ne, Ce)), Ce += T / 2;
                if (T && (v.strokeStyle = g, v.lineWidth = T, f && 1 < f.length && v.setLineDash(f), v.stroke()), v.restore(), V) {
                    var Ie = ae + k + M,
                        De = oe + (S ? b : 0);
                    Q || (ee ? De = Ce : De += a[3]), v.beginPath();
                    for (var Se = 0; Se < fe; Se++) Ie += ve[Se] + V / 2, v.moveTo(Ie, oe), v.lineTo(Ie, De), Ie += V / 2;
                    v.strokeStyle = c, v.lineWidth = V, d && 1 < d.length && v.setLineDash(d), v.stroke()
                }
                y && ie && B && (ke = V ? V * (fe - 1) : 0, Ve = T ? (pe - 1) * T + I * T : 0, ii(ve).call(ve, function (e) {
                    ke += e
                }), ii(ye).call(ye, function (e) {
                    Ve += e
                }), d = {
                    x: ae + k,
                    y: oe + k + (S ? b + I * T : 0),
                    width: le,
                    height: se - (S ? b + I * T : 0)
                }, B = {
                    width: ke,
                    height: Ve
                }, le = {
                    x: M,
                    y: P
                }, se = x && x.getZoom ? x.getZoom() : 1, En(v, d, B, le, {
                    visible: !O || ie.scrollBarVisible,
                    color: E,
                    barWidth: H ? W / se : W,
                    gap: 2 / se
                }, ie))
            }
            k && Un(v, r, ae, oe, ne, re, k), ie.resizeDragPoint && q && J && (r = ie.resizeDragPoint.x, v.strokeStyle = q, v.lineWidth = J, v.beginPath(), v.moveTo(r, oe), v.lineTo(r, oe + re), v.stroke()), v.restore()
        },
        pie: function (x, e, t, r, l) {
            var i = t.getValue("dataSource"),
                a = t.getValue("radius"),
                o = t.getValue("center"),
                b = t.getValue("startAngle"),
                n = t.getValue("endAngle"),
                s = t.getValue("tooltip.show"),
                h = t.getValue("tooltip.formatter"),
                u = t.getValue("tooltip.font"),
                m = t.getValue("roseType"),
                c = t.getValue("seriesName"),
                w = t.getValue("hoverOffset"),
                d = t.getValue("avoidLabelOverlap"),
                g = t.getValue("color"),
                f = t.getValue("minRoseRadius"),
                v = t.getValue("minAngle"),
                p = t.getValue("gapAngle"),
                y = t.getValue("onSelected");
            if ("false" === m && (m = !1), i instanceof Array) {
                360 < (n = n < b ? b : n) - b && (n = b + 360), b *= -fu / 180, n *= fu / 180;
                var C = e.x,
                    k = e.y,
                    V = e.width,
                    T = e.height,
                    I = Math.min(V, T),
                    D = 0,
                    S = 0,
                    L = -b,
                    e = Ie(a, 2),
                    a = e[0],
                    A = void 0 === a ? 0 : a,
                    e = e[1],
                    R = void 0 === e ? .5 : e,
                    e = Ie(o, 2),
                    o = e[0],
                    _ = void 0 === o ? .5 : o,
                    e = e[1],
                    P = void 0 === e ? .5 : e,
                    M = n - Math.abs(b);
                0 <= A && A <= 1 && (A *= I / 2), 0 <= R && R <= 1 && (R *= I / 2);
                var B, O, E, _ = 0 <= _ && _ <= 1 ? _ * V + C : _ + C,
                    P = 0 <= P && P <= 1 ? P * T + k : P + k,
                    i = Ai(i).call(i, function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        return 0 <= e.value && !1 !== e.visible
                    }),
                    W = ql(i).call(i, function () {
                        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).value || 0
                    }),
                    H = As(W).call(W, function (e, t) {
                        return e + t
                    }, 0),
                    j = ql(W).call(W, function (e) {
                        return e / H
                    }),
                    N = Math.max.apply(Math, Le(W)),
                    F = R - A,
                    z = ql(W).call(W, function (e) {
                        e = e / N * F;
                        return e < f ? f : e
                    }),
                    G = ql(j).call(j, function (e) {
                        return e * M
                    }),
                    X = M,
                    Y = 0;
                v *= vu, G = ql(G).call(G, function (e, t) {
                    return e < v ? (X -= v, v) : (Y += W[t], e)
                }), G = X <= .001 ? (B = M / W.length, ql(G).call(G, function (e, t) {
                    return B
                })) : (O = X / Y, ql(G).call(G, function (e, t) {
                    return e === v ? v : W[t] * O
                })), "area" === m && (E = 2 * fu / i.length, G = ql(G).call(G, function (e, t) {
                    return E
                })), 0 < i.length && ((K = 360 / i.length) < p && (p = K));
                var U, Z = i.length * (p *= vu),
                    K = Lo(l, r, t),
                    J = [],
                    q = [],
                    $ = [],
                    Q = [],
                    ee = [];
                if (K) {
                    0 < i.length && (U = new ru(t), ii(i).call(i, function (e, t) {
                        var i, a, o, n;
                        e && (i = j[t], a = z[t], o = G[t], n = L + (o = (o -= Z * i) < 0 ? 0 : o) / 2, D += o, 0 === e.value && (n += 1e-10, D += 1e-10), J.push(new du({
                            percent: i,
                            roseRadius: a,
                            lineAngle: n,
                            arcAngle: o,
                            arcEndAngle: D,
                            arcStartAngle: S,
                            seriesName: c,
                            index: t,
                            source: e,
                            centerX: _,
                            centerY: P,
                            outerRadius: R,
                            innerRadius: A,
                            roseType: m,
                            hoverOffset: w,
                            color: g,
                            view: l,
                            data: r
                        }, U)), L += o + p, S = D += p)
                    }), L = -b, D = S = b);
                    for (var te = K.foucusArcNum, ie = 0, ae = J.length; ie < ae; ie++) {
                        var oe = J[ie].arcAngle;
                        q.push({
                            x: _ + R * Math.cos(L),
                            y: P + R * Math.sin(L)
                        }), $.push(oe), L += oe + p, ie === ae - 1 && (L = -b)
                    }! function (e, t, i) {
                        for (var a = 0, o = e.length; a < o; a++) {
                            var n = e[a],
                                r = i === a,
                                l = n.getLabelLinePoints(r),
                                s = l.x0,
                                h = l.y0,
                                u = l.x1,
                                c = l.y1,
                                d = n.getLabelLineLabelInfo(r),
                                g = d.labelTextArray,
                                l = d.textHeight,
                                d = d.beginHeight;
                            t.push({
                                x0: s,
                                y0: h,
                                x1: u,
                                y1: c,
                                labelTextArray: g,
                                labelLineIsShow: (r ? n.labelLineEmphasis : n.labelLineNormal).show,
                                lineLength2: (r ? n.labelLineEmphasis : n.labelLineNormal).length2,
                                oneTextHeight: l,
                                allTextHeight: 2 * d
                            })
                        }
                    }(J, Q, te), d && function (e, c, d, g, f) {
                        for (var t = [], i = [], a = 0; a < e.length; a++)(e[a].x0 < c ? t : i).push(e[a]);

                        function o(e, t) {
                            if (xh(e).call(e, function (e, t) {
                                    return e.y0 - t.y0
                                }), 0 < (e = Ai(e).call(e, function (e) {
                                    if (e.labelLineIsShow) return e
                                })).length) {
                                for (var i = e[0].allTextHeight / 2 + 3, a = e[e.length - 1].allTextHeight / 2, o = f - i - a - 3, n = e.length, r = 0, l = 0, s = e.length; l < s; l++)
                                    if (o < (r += e[l].allTextHeight)) {
                                        n = l;
                                        break
                                    } var h = o / (n - 1);
                                h === 1 / 0 && (h = 0);
                                for (var u = 0; u < n; u++) e[u].avoidIsShow = !0, e[u].x1 = c + t * (g + 10), e[u].y1 = d + i + u * h
                            }
                        }
                        0 < t.length && o(t, -1), 0 < i.length && o(i, 1)
                    }(Q, _, k, R, T);
                    for (var ne = 0, re = J.length; ne < re; ne++) {
                        var le = J[ne],
                            se = te === ne ? le.labelLineEmphasis : le.labelLineNormal,
                            he = se.show,
                            ue = se.width,
                            ce = se.type,
                            de = se.font,
                            ge = se.lineColor,
                            fe = se.textColor;
                        void 0 !== le.value && !1 !== he && function () {
                            var e = Q[ne],
                                t = e.x0,
                                i = e.y0,
                                a = e.x1,
                                o = e.y1,
                                n = e.oneTextHeight,
                                r = e.allTextHeight,
                                l = e.labelTextArray,
                                s = e.lineLength2,
                                e = e.avoidIsShow;
                            if (d && !e) return;
                            x.save(), x.lineWidth = ue, x.font = de, x.strokeStyle = ge, x.fillStyle = fe, x.setLineDash("dashed" === ce ? [2, 2] : []);
                            var h = a <= t ? -1 : 1;
                            x.textAlign = a <= t ? "right" : "left", x.textBaseline = "top", x.beginPath(), 0 < ue ? (x.moveTo(t, i), x.lineTo(a, o), x.lineTo(a += h * s, o), x.stroke()) : a += h * s, ii(l).call(l, function (e, t) {
                                x.fillText(e, a + 3 * h, o - r / 2 + n * t)
                            }), x.restore()
                        }()
                    }
                    x.save(), x.translate(_, P), x.rotate(-b), Ve("fill"), Ve("stroke"), x.restore(),
                        function (e, t) {
                            for (var i = 0, a = e.length; i < a; i++) {
                                var o = e[i].getLabelPoints(),
                                    n = o.textX,
                                    o = o.textY;
                                t.push({
                                    textX: n,
                                    textY: o
                                })
                            }
                        }(J, ee), x.save(), x.textAlign = "center", x.textBaseline = "top";
                    for (var ve = 0, pe = J.length; ve < pe; ve++) {
                        var ye = J[ve],
                            xe = te === ve,
                            be = xe ? ye.labelEmphasis : ye.labelNormal,
                            me = be.show,
                            we = be.position,
                            Ce = be.color,
                            ke = be.font;
                        void 0 !== ye.value && !1 !== me && function () {
                            x.save(), x.font = ke, x.fillStyle = Ce;
                            var e = ee[ve],
                                i = "center" === we ? _ : e.textX,
                                a = "center" === we ? P : e.textY,
                                t = ye.getLabelInfo(xe),
                                e = t.labelTextArray,
                                o = t.textHeight,
                                n = t.beginHeight;
                            ii(e).call(e, function (e, t) {
                                x.fillText(e, i, a - n + o * t)
                            }), x.restore()
                        }()
                    }
                    x.restore(), K && (K.arcPoints = q, K.arcAngles = $, K.center = {
                        x: _,
                        y: P
                    }, K.radius = {
                        outerRadius: R,
                        innerRadius: A
                    }, K.hoverOffset = w, K.tooltip = {
                        show: !gu(s) || s,
                        formatter: h || "",
                        font: u
                    }, K.pieItems = J, K.onSelected = y)
                }
            }

            function Ve(e) {
                for (var t = 0, i = J.length; t < i; t++) {
                    var a = J[t],
                        o = a.arcEndAngle,
                        n = a.arcStartAngle,
                        r = a.roseRadius,
                        l = a.itemStyle,
                        s = l.color,
                        h = l.borderWidth,
                        u = l.borderColor,
                        c = l.borderType,
                        l = void 0;
                    if (void 0 !== a.value && ("stroke" === e && 0 < h || "fill" === e)) {
                        if (x.save(), x.beginPath(), x.moveTo(A * Math.cos(n), A * Math.sin(n)), te === t ? (x.arc(0, 0, l = m ? r + w + A : R + w, n, o, !1), x.arc(0, 0, A, o, n, !0), "fill" === e && (x.globalAlpha = .9, x.shadowBlur = 10, x.shadowColor = "rgba(0, 0, 0, 0.5)")) : (x.arc(0, 0, l = m ? r + A : R, n, o, !1), x.arc(0, 0, A, o, n, !0)), x.closePath(), "fill" === e) {
                            if ("string" == typeof s) x.fillStyle = s;
                            else if ("object" === Te(s)) {
                                var n = s.type,
                                    d = s.colorStops,
                                    g = null;
                                if ("radial" === n ? g = x.createRadialGradient(0, 0, A, 0, 0, l) : "linear" === n && (a = (n = function (e, t) {
                                        for (var i = ht.Math.Vector2, a = Math.cos, o = Math.sin, n = e.arcStartAngle, r = e.arcEndAngle, l = e.roseRadius, s = e.innerRadius, h = s + l, u = r - n, c = {
                                                x: h * a(n),
                                                y: h * o(n)
                                            }, d = {
                                                x: h * a(r),
                                                y: h * o(r)
                                            }, e = {
                                                x: s * a(n),
                                                y: s * o(n)
                                            }, l = {
                                                x: s * a(r),
                                                y: s * o(r)
                                            }, n = t, s = n + Math.PI / 2, r = s + Math.PI / 2, t = r + Math.PI / 2, g = [{
                                                x: h * a(n),
                                                y: h * o(n)
                                            }, {
                                                x: h * a(s),
                                                y: h * o(s)
                                            }, {
                                                x: h * a(r),
                                                y: h * o(r)
                                            }, {
                                                x: h * a(t),
                                                y: h * o(t)
                                            }], f = [c, d, e, l], v = 0; v < 4; v++) {
                                            var p = g[v],
                                                y = new i(c),
                                                x = new i(p),
                                                b = y.clone().normalize().dot(x.normalize()),
                                                b = Math.acos(b);
                                            0 < y.x * x.y - x.x * y.y ? b < u && f.push(p) : 2 * Math.PI - b < u && f.push(p)
                                        }
                                        for (var m = -1 / 0, w = 1 / 0, C = 0, k = f.length; C < k; C++) var V = f[C].y,
                                            m = Math.max(m, V),
                                            w = Math.min(w, V);
                                        return {
                                            minY: w,
                                            maxY: m
                                        }
                                    }(a, b)).minY, n = n.maxY, g = x.createLinearGradient(0, a, 0, n)), g && d instanceof Array) {
                                    for (var f = 0, v = d.length; f < v; f++) {
                                        var p = d[f],
                                            y = p.offset,
                                            p = p.color;
                                        void 0 !== y && void 0 !== p && g.addColorStop(y, p)
                                    }
                                    x.fillStyle = g
                                }
                            }
                            Gi(x).call(x)
                        } else "stroke" === e && (x.strokeStyle = u, x.lineWidth = h, x.setLineDash("dashed" === c ? [2, 2] : []), x.stroke());
                        x.globalAlpha = 1, x.restore()
                    }
                }
            }
        },
        ruler: function (u, n, r, l, s) {
            r.getValue("value");
            var c = r.getValue("max"),
                d = r.getValue("min"),
                e = r.getValue("labelEvery"),
                t = r.getValue("labelFont"),
                i = r.getColor("labelColor"),
                a = r.getValue("labelAlign"),
                o = r.getValue("labelDistance"),
                h = r.getValue("labelOffsetX"),
                g = r.getValue("labelOffsetY"),
                f = r.getValue("labelFormatter"),
                v = r.getValue("direction"),
                p = r.getValue("paddingBefore"),
                y = r.getValue("paddingAfter"),
                x = r.getColor("background"),
                b = r.getValue("smallTickEvery"),
                m = r.getColor("smallTickColor"),
                w = r.getValue("smallTickWidth"),
                C = r.getValue("smallTickLongness"),
                k = r.getValue("mediumTickEvery"),
                V = r.getColor("mediumTickColor"),
                T = r.getValue("mediumTickWidth"),
                I = r.getValue("mediumTickLongness"),
                D = r.getValue("largeTickEvery"),
                S = r.getColor("largeTickColor"),
                L = r.getValue("largeTickWidth"),
                A = r.getValue("largeTickLongness"),
                R = r.getValue("reverse"),
                _ = r.getValue("cursors"),
                P = n.x,
                M = n.y,
                B = n.width,
                O = n.height;
            x && (u.fillStyle = x, u.fillRect(P, M, B, O));
            var E = c - d,
                W = v !== la && v !== ra ? O : B;
            if (L = [{
                    every: b,
                    color: m,
                    longness: C,
                    width: w
                }, {
                    every: k,
                    color: V,
                    longness: I,
                    width: T
                }, {
                    every: D,
                    color: S,
                    longness: A,
                    width: L
                }], R) {
                if (ii(L).call(L, function (e) {
                        if (Rn(e)) {
                            var t = Sn(e.longness, W);
                            if (u.beginPath(), u.strokeStyle = e.color, u.lineWidth = e.width, v === oa || v === na) {
                                var i = P + B - p,
                                    a = (B - p - y) * (Rn(e) / E),
                                    o = v === oa ? M : M + O;
                                v === na && (t = 0 - t);
                                for (var n = d; n <= c; n += Rn(e)) u.moveTo(i, o), u.lineTo(i, o + t), i -= a
                            } else {
                                var r = M + O - p,
                                    l = (O - p - y) * (Rn(e) / E),
                                    s = v === la ? P : P + B;
                                v === ra && (t = 0 - t);
                                for (var h = d; h <= c; h += Rn(e)) u.moveTo(s, r), u.lineTo(s + t, r), r -= l
                            }
                            u.stroke()
                        }
                    }), e) {
                    var H = Sn(o, W);
                    if (u.fillStyle = i, u.font = t, v === oa || v === na) {
                        var j = P + B - p + h,
                            N = e / E * (B - p - y),
                            F = (v === oa ? M : M + O) + g;
                        v === na ? H = 0 - H - Ea(t, "1").height : u.textBaseline = "hanging";
                        for (var z = d; z <= c; z += e) {
                            var G = f ? f(z) : z,
                                X = Ea(t, G);
                            a === sa ? _n(u, G, t, i, j - .5 * X.width, F + H, X.width, X.height, a, "middle") : a === ra ? u.fillText(G, j - Ea(t, G).width + 2, F + H) : a === la && u.fillText(G, j, F + H), j -= N
                        }
                    } else {
                        var Y = M + O - p + g,
                            U = e / E * (O - p - y),
                            Z = (v === la ? P : P + B) + h;
                        u.textBaseline = "middle", v === ra && (H = 0 - H);
                        for (var K = d; K <= c; K += e) {
                            var J = f ? f(K) : K + "";
                            v === ra ? u.fillText(J, Z + H - Ea(t, J).width + 2, Y) : u.fillText(J, Z + H, Y), Y -= U
                        }
                    }
                }
                _ && ii(_).call(_, function (e) {
                    var t, i = e.value,
                        a = e.color,
                        o = e.size,
                        o = void 0 === o ? 2 : o,
                        e = e.drawTop;
                    o = v === oa || v === na ? [P + (t = B - y - p) + p - (i - d) / E * t - o / 2, M, o, O] : [P, M + (t = O - p - y) + p - (i - d) / E * t - o / 2, B, o], u.fillStyle = void 0 === a ? "red" : a, u.fillRect.apply(u, Le(o)), e && e(u, n, {
                        x: o[0],
                        y: o[1],
                        width: o[2],
                        height: o[3]
                    }, r, l, s)
                })
            } else {
                if (ii(L).call(L, function (e) {
                        if (Rn(e)) {
                            var t = Sn(e.longness, W);
                            if (u.beginPath(), u.strokeStyle = e.color, u.lineWidth = e.width, v === oa || v === na) {
                                var i = P + p,
                                    a = (B - p - y) * (Rn(e) / E),
                                    o = v === oa ? M : M + O;
                                v === na && (t = 0 - t);
                                for (var n = d; n <= c; n += Rn(e)) u.moveTo(i, o), u.lineTo(i, o + t), i += a
                            } else {
                                var r = M + p,
                                    l = (O - p - y) * (Rn(e) / E),
                                    s = v === la ? P : P + B;
                                v === ra && (t = 0 - t);
                                for (var h = d; h <= c; h += Rn(e)) u.moveTo(s, r), u.lineTo(s + t, r), r += l
                            }
                            u.stroke()
                        }
                    }), e) {
                    var q = Sn(o, W);
                    if (u.fillStyle = i, u.font = t, v === oa || v === na) {
                        var $ = P + p + h,
                            Q = e / E * (B - p - y),
                            ee = (v === oa ? M : M + O) + g;
                        v === na ? q = 0 - q - Ea(t, "1").height : u.textBaseline = "hanging";
                        for (var te = d; te <= c; te += e) {
                            var ie = f ? f(te) : te,
                                ae = Ea(t, ie);
                            a === sa ? _n(u, ie, t, i, $ - .5 * ae.width, ee + q, ae.width, ae.height, a, "middle") : a === ra ? u.fillText(ie, $ - ae.width + 2, ee + q) : a === la && u.fillText(ie, $, ee + q), $ += Q
                        }
                    } else {
                        var oe = M + p + g,
                            ne = e / E * (O - p - y),
                            re = (v === la ? P : P + B) + h;
                        u.textBaseline = "middle", v === ra && (q = 0 - q);
                        for (var le = d; le <= c; le += e) {
                            var se = f ? f(le) : le + "";
                            v === ra ? u.fillText(se, re + q - Ea(t, se).width + 2, oe) : u.fillText(se, re + q, oe), oe += ne
                        }
                    }
                }
                _ && ii(_).call(_, function (e) {
                    var t = e.value,
                        i = e.color,
                        a = e.size,
                        a = void 0 === a ? 2 : a,
                        e = e.drawTop;
                    a = v === oa || v === na ? [P + p + (t - d) / E * (B - y - p) - a / 2, M, a, O] : [P, M + p + (t - d) / E * (O - p - y) - a / 2, B, a], u.fillStyle = void 0 === i ? "red" : i, u.fillRect.apply(u, Le(a)), e && e(u, n, {
                        x: a[0],
                        y: a[1],
                        width: a[2],
                        height: a[3]
                    }, r, l, s)
                })
            }
        },
        multilineText: function (i, e, t, a, o) {
            var n = t.getValue("content"),
                r = t.getValue("font"),
                l = t.getValue("textAlign"),
                s = t.getValue("color"),
                h = t.getValue("lineHeight"),
                u = t.getColor("background"),
                c = t.getValue("padding"),
                d = t.getColor("borderColor"),
                g = t.getValue("borderWidth"),
                f = t.getValue("borderRadius"),
                v = t.getValue("dash"),
                p = t.getValue("dashPattern"),
                y = e.x,
                x = e.y,
                b = e.width,
                m = e.height,
                w = (V = Ie($i(c), 4))[0],
                C = V[1],
                k = V[2],
                t = V[3],
                c = (e = Ie($i(f), 4))[0],
                V = e[1],
                f = e[2],
                e = e[3];
            i.beginPath(), Po(i, y, x, b, m, c, V, e, f), i.closePath(), ao(i, {
                borderWidth: g,
                borderColor: d,
                dash: v,
                dashPattern: p,
                background: u
            });
            var T = t,
                I = w,
                D = 0,
                S = b - t - C,
                k = (n = n.split(/\n/)).length * h + w + k,
                w = t + w;
            ii(n).call(n, function (e) {
                var t = Ea(r, e);
                D = Math.max(D, t.width), Jn(i, e, r, s, T, I, S, h, l, "middle"), I += h
            }), w += D, a && a.constructor === ht.Node && (a.getWidth() === w && a.getHeight() === k || (a.setSize(w, k), a.setSize3d(w, 100, k)))
        },
        slider: function (e, t, i, a, o) {
            var n = i.getValue("min"),
                r = i.getValue("max"),
                l = i.getValue("value"),
                s = i.getValue("step"),
                h = i.getValue("sliderImage"),
                u = i.getValue("getSliderAttr"),
                c = i.getValue("sliderBorderWidth"),
                d = i.getValue("sliderBorderRadius"),
                g = i.getColor("sliderBorderColor"),
                f = i.getColor("sliderBackground"),
                v = i.getValue("sliderWidth"),
                p = i.getValue("sliderHeight"),
                y = i.getValue("sliderOffsetX"),
                x = i.getValue("sliderOffsetY"),
                b = i.getColor("barBackground"),
                m = i.getColor("barValueBackground"),
                w = i.getValue("barGradient"),
                C = i.getColor("barGradientColor"),
                k = i.getValue("barWidth"),
                V = i.getValue("barBorderRadius"),
                T = i.getValue("padding"),
                I = i.getValue("disabled"),
                D = i.getColor("disabledLayerColor"),
                S = i.getColor("showToolTip"),
                L = i.getColor("toolTipFormat"),
                A = Lo(o, a, i),
                l = Math.min(r, Math.max(n, l)),
                R = t.x,
                _ = t.y,
                P = t.width,
                M = t.height,
                t = Math.abs(r - n);
            V < 1 && (V *= k), oo(e, T = {
                x: R + T,
                y: _ + (M - k) / 2,
                width: P - 2 * T,
                height: k
            }, b, V), (b = ht.Default.clone(T)).width *= (l - n) / t, w && (m = ht.Default.createGradient(e, w, m, C, T.x, T.y, T.width, T.height)), oo(e, b, m, V), y = b.x + b.width - v / 2 + y, k = b.y + (k - p) / 2 + x, h ? (x = (x = A._sliderData) || (A._sliderData = new ht.Data), o = u ? u(l, a, o) : {}, u && x.setAttrObject(o), qn(e, ht.Default.getImage(h), y, k, v, p, x)) : (d < 1 && (d *= Math.min(v, p)), e.beginPath(), Po(e, y, k, v, p, d), e.closePath(), e.fillStyle = f, Gi(e).call(e), c && (e.lineWidth = c, e.strokeStyle = g, e.stroke())), I && (e.fillStyle = D, e.fillRect(R, _, P, M)), A && (A.disabled = I, A.value = l, A.max = r, A.min = n, A.step = s, A.showToolTip = S, A.toolTipFormat = L, A.barRect = T, A.onChange = i.getValue("onChange"), A.sliderRect = {
                x: y,
                y: k,
                width: v,
                height: p
            })
        },
        rangeSlider: function (e, t, i, a, o) {
            var n = i.getValue("min"),
                r = i.getValue("max"),
                l = i.getValue("value"),
                s = i.getValue("step"),
                h = i.getValue("sliderImage"),
                u = i.getValue("sliderBorderWidth"),
                c = i.getValue("sliderBorderRadius"),
                d = i.getColor("sliderBorderColor"),
                g = i.getColor("sliderBackground"),
                f = i.getValue("sliderWidth"),
                v = i.getValue("sliderHeight"),
                p = i.getValue("sliderOffsetX"),
                y = i.getValue("sliderOffsetY"),
                x = i.getColor("barBackground"),
                b = i.getColor("barValueBackground"),
                m = i.getValue("barGradient"),
                w = i.getColor("barGradientColor"),
                C = i.getValue("barWidth"),
                k = i.getValue("barBorderRadius"),
                V = i.getValue("padding"),
                T = i.getValue("disabled"),
                I = i.getColor("disabledLayerColor"),
                D = i.getColor("showToolTip"),
                S = i.getColor("toolTipFormat"),
                L = Lo(o, a, i),
                A = t.x,
                R = t.y,
                _ = t.width,
                P = t.height,
                a = (o = Ie(l, 2))[0],
                t = o[1],
                a = Math.max(n, a),
                t = Math.min(r, t),
                o = Math.abs(r - n);
            k < 1 && (k *= C), oo(e, V = {
                x: A + V,
                y: R + (P - C) / 2,
                width: _ - 2 * V,
                height: C
            }, x, k), (x = ht.Default.clone(V)).width *= (t - a) / o, x.x += (a - n) / o * V.width, m && (b = ht.Default.createGradient(e, m, b, w, V.x, V.y, V.width, V.height)), oo(e, x, b, k), k = x.x - f / 2 + p, p = x.x + x.width - f / 2 + p, y = x.y + (C - v) / 2 + y, h ? ($n(e, ht.Default.getImage(h), k, y, f, v), $n(e, ht.Default.getImage(h), p, y, f, v)) : (c < 1 && (c *= Math.min(f, v)), e.beginPath(), Po(e, k, y, f, v, c), e.closePath(), e.fillStyle = g, Gi(e).call(e), u && (e.lineWidth = u, e.strokeStyle = d, e.stroke()), e.beginPath(), Po(e, p, y, f, v, c), e.closePath(), e.fillStyle = g, Gi(e).call(e), u && (e.lineWidth = u, e.strokeStyle = d, e.stroke())), T && (e.fillStyle = I, e.fillRect(A, R, _, P)), L && (L.disabled = T, L.value = l, L.max = r, L.min = n, L.step = s, L.valueBarDraggable = i.getValue("valueBarDraggable"), L.onChange = i.getValue("onChange"), L.showToolTip = D, L.toolTipFormat = S, L.barRect = V, L.valueBarRect = x, L.sliderRect = {
                x: k,
                y: y,
                width: f,
                height: v
            }, L.sliderRect2 = {
                x: p,
                y: y,
                width: f,
                height: v
            })
        },
        multipleComboBox: function (r, e, t, i, a) {
            var o, n = t.getValue("value"),
                l = t.getValue("dataSource"),
                s = t.getValue("placeholder"),
                h = t.getValue("disabled"),
                u = t.getValue("borderWidth"),
                c = t.getColor("borderColor"),
                d = t.getColor("focusBorderColor"),
                g = t.getValue("borderRadius"),
                f = t.getColor("background"),
                v = t.getColor("focusBackground") || f,
                p = t.getColor("disabledLayerColor"),
                y = t.getValue("itemFont"),
                x = t.getColor("itemTextColor"),
                b = t.getColor("itemBorderWidth"),
                m = t.getColor("itemBorderColor"),
                w = t.getColor("itemBorderRadius"),
                C = t.getColor("itemBackground"),
                k = t.getColor("itemGradient"),
                V = t.getColor("itemGradientColor"),
                T = t.getValue("itemPadding"),
                I = t.getValue("itemHGap"),
                D = t.getValue("itemVGap"),
                S = t.getValue("closeIconOnLeft"),
                L = t.getValue("closeIconSize"),
                A = t.getColor("closeIconColor"),
                R = t.getValue("padding"),
                _ = Lo(a, i, t),
                P = _ && _.editing,
                M = e.x,
                B = e.y,
                O = e.width,
                E = e.height,
                W = (N = Ie($i(R), 4))[0],
                H = N[1],
                j = N[2],
                a = N[3],
                R = (e = Ie($i(g), 4))[0],
                N = e[1],
                g = e[2],
                e = e[3];
            i && P ? (o = v, c = d) : o = f, r.beginPath(), Po(r, M, B, O, E, R, N, e, g), r.closePath(), o && (r.fillStyle = o, Gi(r).call(r)), (u && c || P && u && d) && (r.strokeStyle = P ? d : c, r.lineWidth = u, r.stroke());
            var F = [];
            n && l && ii(n).call(n, function (e) {
                for (var t = 0; t < l.length; t++)
                    if (e === l[t].value) {
                        F.push(l[t]);
                        break
                    }
            });
            var z = [],
                G = (T = Ie($i(T), 4))[0],
                X = T[1],
                Y = T[2],
                U = T[3],
                T = [M + a - b / 2, B + W - b / 2, O - a - H + b, E - W - j + b + 1];
            r.save(), r.beginPath(), r.rect.apply(r, T), r.clip();
            var Z, K, J, q, $, Q, ee, te, ie, ae, oe = 1;
            0 < F.length ? (J = (K = [M + a + b / 2, B + W + b / 2, O - a - H - b, E - W - j - b])[0], q = K[1], $ = 0, w = Ie($i(w), 4), Q = w[0], ee = w[1], te = w[2], ie = w[3], ae = C, ii(F).call(F, function (e) {
                var t = e.label || e.value,
                    i = Ea(y, t);
                Z = Z || i.height, $ && J + i.width + I + b + 7 > K[0] + K[2] && (J = K[$ = 0], q += Z + D + b + G + Y, oe++);
                var a, o = [J, q, i.width + U + X + L + 2, i.height + G + Y];
                b && (r.beginPath(), r.strokeStyle = m, Po.apply(void 0, Ni(a = [r]).call(a, o, [Q, ee, ie, te])), r.closePath(), C && (k && V && (ae = er.apply(void 0, Ni(n = [r, k, C, V]).call(n, o))), r.fillStyle = ae, Gi(r).call(r)), r.stroke());
                var n = [o[0] + U + i.width + 2, o[1] + G, L, o[3] - Y - G];
                S && (n[0] = o[0] + U, o[0] += L + 2), o[2] = o[2] - L - 2, z.push({
                    value: e.value,
                    rect: n
                }), r.beginPath(), r.strokeStyle = A, r.lineCap = "round", r.moveTo(n[0], n[1] + (n[3] - L) / 2), r.lineTo(n[0] + n[2], n[1] + (n[3] - L) / 2 + L), r.moveTo(n[0] + n[2], n[1] + (n[3] - L) / 2), r.lineTo(n[0], n[1] + (n[3] - L) / 2 + L), r.stroke(), Qn.apply(void 0, Ni(t = [r, t, y, x]).call(t, o, ["center", "middle"])), J += i.width + I + b + U + X + L + 2, $++
            })) : s && (H = [M + a, B + W, O - a - H, (a = Ea(y, s)).height + G + Y], Qn.apply(void 0, Ni(s = [r, s, y, qi.placeholderColor]).call(s, H, ["left", "middle"])), Z = a.height), r.restore(), h && (E = [M - u / 2, B - u / 2, O + u, E + u], r.save(), r.beginPath(), Po.apply(void 0, Ni(u = [r]).call(u, E, [R, N, e, g])), r.clip(), r.fillStyle = p, Gi(r).call(r), r.restore()), i && (i.__suggestHeight = W + j + (G + Y + Z) * oe + D * (oe - 1)), _ && (_.value = n, _.valueItemInfo = z, _.disabled = h, _.dataSource = l, _.dropIconWidth = t.getValue("dropIconWidth"), _.dropIconHeight = t.getValue("dropIconHeight"), _.dropRowHeight = t.getValue("dropRowHeight"), _.dropWidth = t.getValue("dropWidth"), _.dropBackground = t.getValue("dropBackground"), _.dropLabelFont = t.getValue("dropLabelFont"), _.dropLabelColor = t.getValue("dropLabelColor"), _.dropActiveLabelColor = t.getValue("dropActiveLabelColor"), _.dropActiveBackground = t.getValue("dropActiveBackground"), _.dropHoverBackground = t.getValue("dropHoverBackground"), _.dropMaxHeight = t.getValue("dropMaxHeight"), _.onChange = t.getValue("onChange"), _.hideSelected = t.getValue("hideSelected"), _.maxSelection = t.getValue("maxSelection"))
        },
        richTextPane: function (s, e, t, h, u) {
            var i = t.getValue("content"),
                a = t.getColor("background"),
                o = t.getValue("bgGradient"),
                n = t.getColor("bgGradientColor"),
                r = t.getValue("showArrow"),
                c = t.getValue("arrowOrientation"),
                l = t.getValue("arrowPosition"),
                d = t.getValue("padding"),
                g = t.getValue("vGap"),
                f = t.getValue("hGap"),
                v = t.getValue("font"),
                p = t.getValue("color"),
                y = t.getColor("borderColor"),
                x = t.getValue("borderWidth") || 0,
                b = t.getValue("dash"),
                m = t.getValue("dashPattern"),
                w = t.getValue("vAlign"),
                C = (S = Ie($i(d), 4))[0];
            S[1], S[2];
            var k, V, T, I = S[3],
                D = e.x + x / 2,
                t = e.y + x / 2,
                d = e.width - x,
                S = e.height - x,
                e = [D, t, d, S];
            s.save(), r ? (s.beginPath(), e = na === c ? (k = d - 10, s.moveTo(D, t), s.lineTo(D + d, t), s.lineTo(D + d, t + S - 10), s.lineTo(D + k * l + 10, t + S - 10), s.lineTo(D + k * l + 5, t + S), s.lineTo(D + k * l, t + S - 10), s.lineTo(D, t + S - 10), s.closePath(), [D, t, d, S - 10]) : la === c ? (k = S - 10, s.moveTo(D + 10, t), s.lineTo(D + d, t), s.lineTo(D + d, t + S), s.lineTo(D + 10, t + S), s.lineTo(D + 10, t + k * l + 10), s.lineTo(D, t + k * l + 5), s.lineTo(D + 10, t + k * l), s.closePath(), [D + 10, t, d - 10, S]) : ra === c ? (V = S - 10, s.moveTo(D, t), s.lineTo(D + d - 10, t), s.lineTo(D + d - 10, t + V * l), s.lineTo(D + d, t + V * l + 5), s.lineTo(D + d - 10, t + V * l + 10), s.lineTo(D + d - 10, t + S), s.lineTo(D, t + S), s.closePath(), [D, t, d - 10, S]) : (s.moveTo(D + (V = d - 10) * l, t + 10), s.lineTo(D + V * l + 5, t), s.lineTo(D + V * l + 10, t + 10), s.lineTo(D + d, t + 10), s.lineTo(D + d, t + S), s.lineTo(D, t + S), s.lineTo(D, t + 10), s.closePath(), [D, t + 10, d, S - 10])) : (s.beginPath(), s.rect(D, t, d, S)), ao(s, {
                borderWidth: x,
                borderColor: y,
                background: a,
                bgGradient: o,
                bgGradientColor: n,
                contentRect: e,
                dash: b,
                dashPattern: m
            }), a && (o && (a = (m = ht.Default).createGradient.apply(m, Ni(n = [s, o, a, n]).call(n, Le(e)))), s.fillStyle = a, Gi(s).call(s)), y && x && (s.lineWidth = x, s.strokeStyle = y, s.stroke()), s.textAlign = "left", i && (i.length, T = t + C + (c === oa ? 10 : 0), ii(i).call(i, function (e, t) {
                var n = D + I + (c === la ? 10 : 0),
                    r = 0,
                    l = (i.length, []);
                ii(e).call(e, function (e, t) {
                    var i = Ro(e.text, h, u),
                        i = Ea(e.font || v, i);
                    r = Math.max(r, i.height), i.width, l[t] = i.width
                }), ii(e).call(e, function (e, t) {
                    var i = Ro(e.text, h, u),
                        a = Ro(e.font, h, u) || v,
                        o = Ro(e.vAlign, h, u) || w;
                    s.fillStyle = Ro(e.color, h, u) || p, s.font = a, "top" === (s.textBaseline = o) ? s.fillText(i, n, T) : "middle" === o ? s.fillText(i, n, T + r / 2) : s.fillText(i, n, T + r), n += l[t] + f
                }), T += g + r
            })), s.restore()
        },
        textBox: function (i, e, t, a, o) {
            var n = t.getValue("content"),
                r = t.getValue("autoScale"),
                l = t.getValue("font"),
                s = t.getValue("wordBreak"),
                h = t.getValue("vAlign"),
                u = t.getColor("color"),
                c = t.getValue("lineHeight"),
                d = t.getValue("textAlign"),
                g = t.getValue("padding"),
                f = t.getColor("background"),
                v = t.getValue("fillContent"),
                p = t.getColor("borderColor"),
                y = t.getValue("borderWidth"),
                x = t.getValue("borderRadius"),
                b = t.getValue("dash"),
                m = t.getValue("dashPattern"),
                w = t.getValue("bgGradient"),
                C = t.getColor("bgGradientColor"),
                k = t.getValue("translateX"),
                V = t.getValue("translateY"),
                T = t.getColor("scrollBarColor"),
                I = t.getValue("scrollable"),
                D = t.getValue("autoHideScrollBar"),
                S = t.getValue("scrollBarWidth"),
                L = t.getValue("scrollBarWidthAbsolute"),
                A = t.getValue("underline"),
                R = (B = Ie($i(g), 4))[0],
                _ = B[1],
                P = B[2],
                M = B[3],
                g = (O = Ie($i(x), 4))[0],
                B = O[1],
                x = O[2],
                O = O[3];
            if (i.beginPath(), Po(i, e.x, e.y, e.width, e.height, g, B, O, x), i.closePath(), ao(i, {
                    borderWidth: y,
                    borderColor: p,
                    dash: b,
                    dashPattern: m,
                    background: f,
                    bgGradient: w,
                    bgGradientColor: C,
                    contentRect: [e.x, e.y, e.width, e.height]
                }), n && a) {
                i.save();
                var E, W, w = e.x,
                    C = e.y,
                    H = w + M,
                    j = C + R,
                    N = si(e.width) - M - _,
                    F = si(e.height) - R - P,
                    z = ja(n, l, N, s);
                if (r && z.length * c > F) {
                    var G, X, Y, U, Z, K, P = N + "-" + F + l + c,
                        J = (J = Nl[P]) || (Nl[P] = {}),
                        q = 0,
                        $ = 0,
                        h = "top";
                    if (J && J[n]) G = J[n], U = G * c, K = si(N * (X = 1 / G)), si(F * X), i.scale(G, G), z = ja(n, l, K, s);
                    else {
                        for (; q < 4;) {
                            if (G = Math.sqrt(F / ((z.length + $) * c)), U = G * c, K = si(N * (X = 1 / G)), si(F * X), Z && i.scale(Z, Z), i.scale(G, G), (Y = ja(n, l, K, s)).length * U > F) $ += Math.ceil((Y.length * U - F) / U + .5), Z = X;
                            else {
                                if (!(Y.length * U < F && Math.abs(F - Y.length * U) > 2 * U)) {
                                    z = Y;
                                    break
                                }
                                $ -= Math.floor((F - Y.length * U) / U), Z = X
                            }
                            4 == ++q && (z = Y)
                        }
                        J[n] = G
                    }
                    H = (w + M) * X, j = (C + R) * X, ii(z).call(z, function (e, t) {
                        ht.Default.drawText(i, e, l, u, H, j, K, U, d, h), A && (e = Ea(l, e), jl(i, {
                            x: H,
                            y: j,
                            height: c,
                            width: K
                        }, e.width, d, u)), j += c
                    })
                } else if (v && (z.length + 1) * c < F) {
                    var Q, ee, te, ie, ae, oe, J = N + "-" + F + l + c,
                        v = (v = Nl[J]) || (Nl[J] = {}),
                        ne = 0;
                    if (h = "top", v && v[n]) Q = v[n], ie = Q * c, oe = si(N * (ee = 1 / Q)), si(F * ee), i.scale(Q, Q), z = ja(n, l, oe, s);
                    else {
                        for (var re = Math.sqrt(F / (z.length * c)); ne < 4;) {
                            if (ie = (Q = re) * c, oe = si(N * (ee = 1 / Q)), si(F * ee), ae && i.scale(ae, ae), i.scale(Q, Q), !((te = ja(n, l, oe, s)).length * ie > F || te.length * ie < F && F - te.length * ie > .8 * ie)) {
                                z = te;
                                break
                            }
                            ae = ee, re *= Math.sqrt(F / (te.length * ie)), 4 == ++ne && (z = te)
                        }
                        v[n] = Q
                    }
                    H = (w + M) * ee, j = (C + R) * ee, ii(z).call(z, function (e, t) {
                        ht.Default.drawText(i, e, l, u, H, j, oe, ie, d, h), A && (e = Ea(l, e), jl(i, {
                            x: H,
                            y: j,
                            height: c,
                            width: oe
                        }, e.width, d, u)), j += c
                    })
                } else !r && I ? (w = w + M, E = (M = C + R) - c, W = M + F + c, i.save(), i.beginPath(), i.rect(w, M, N, F), i.clip(), j += V, ii(z).call(z, function (e, t) {
                    E <= j && j < W && (ht.Default.drawText(i, e, l, u, H, j, N, c, d, h), A && (e = Ea(l, e), jl(i, {
                        x: H,
                        y: j,
                        height: c,
                        width: N
                    }, e.width, d, u))), j += c
                }), i.restore(), M = Lo(o, a, t), a = N, t = z.length * c, o = o && o.getZoom ? o.getZoom() : 1, S = L ? S / o : S, M && (M.translateX = k, M.translateY = V, M.autoHideScrollBar = D), En(i, {
                    x: H,
                    y: C + R,
                    width: N,
                    height: F
                }, {
                    width: a,
                    height: t
                }, {
                    x: k,
                    y: V
                }, {
                    visible: !D || M.scrollBarVisible,
                    color: T,
                    gap: 0,
                    barWidth: S
                }, M || {})) : ("middle" === h ? j += (F - z.length * c) / 2 : "bottom" === h && (j += F - z.length * c), ii(z).call(z, function (e, t) {
                    ht.Default.drawText(i, e, l, u, H, j, N, c, d, h), A && (e = Ea(l, e), jl(i, {
                        x: H,
                        y: j,
                        height: c,
                        width: N
                    }, e.width, d, u)), j += c
                }));
                i.restore()
            }
        },
        textEllipsis: function (e, t, i, a, o) {
            var n = i.getValue("content"),
                r = i.getValue("font"),
                l = i.getValue("align"),
                s = i.getValue("vAlign"),
                h = i.getColor("color"),
                u = i.getValue("padding"),
                c = i.getColor("background"),
                d = i.getColor("borderColor"),
                g = i.getValue("borderWidth"),
                f = i.getValue("borderRadius"),
                v = i.getValue("dash"),
                p = i.getValue("dashPattern"),
                y = i.getValue("bgGradient"),
                x = i.getColor("bgGradientColor"),
                b = (k = Ie($i(u), 4))[0],
                m = k[1],
                w = k[2],
                C = k[3],
                u = (i = Ie($i(f), 4))[0],
                k = i[1],
                f = i[2],
                i = i[3];
            e.beginPath(), Po(e, t.x, t.y, t.width, t.height, u, k, i, f), e.closePath(), ao(e, {
                borderWidth: g,
                borderColor: d,
                dash: v,
                dashPattern: p,
                background: c,
                bgGradient: y,
                bgGradientColor: x,
                contentRect: [t.x, t.y, t.width, t.height]
            });
            for (var V = (b = [t.x + C, t.y + b, t.width - C - m, t.height - b - w])[2], T = "", I = 0; I < n.length; I++) {
                T += n[I];
                var D = Ea(r, T + "...").width;
                if (D <= V && I == n.length - 1) {
                    n = T;
                    break
                }
                if (V < D) {
                    n = (T = bi(T).call(T, 0, T.length - 1)) + "...";
                    break
                }
            }(w = ht.Default).drawText.apply(w, Ni(h = [e, n, r, h]).call(h, b, [l, s]))
        },
        verticalTextBox: function (a, e, t, i, o) {
            var n, r, l, s, h, u, g, f, v, p, y, c = t.getValue("content"),
                d = t.getValue("font"),
                x = t.getColor("color"),
                b = t.getValue("padding"),
                m = t.getValue("startOnRight"),
                w = t.getColor("background"),
                C = t.getColor("borderColor"),
                k = t.getValue("borderWidth"),
                V = t.getValue("borderRadius"),
                T = t.getValue("dash"),
                I = t.getValue("dashPattern"),
                D = t.getValue("bgGradient"),
                S = t.getColor("bgGradientColor"),
                L = t.getValue("wordBreak"),
                A = t.getValue("vGap"),
                R = t.getValue("hGap"),
                _ = t.getValue("autoWrap"),
                P = (E = Ie($i(b), 4))[0],
                M = E[1],
                B = E[2],
                O = E[3],
                b = (t = Ie($i(V), 4))[0],
                E = t[1],
                V = t[2],
                t = t[3];
            a.beginPath(), Po(a, e.x, e.y, e.width, e.height, b, E, t, V), a.closePath(), ao(a, {
                borderWidth: k,
                borderColor: C,
                dash: T,
                dashPattern: I,
                background: w,
                bgGradient: D,
                bgGradientColor: S,
                contentRect: [e.x, e.y, e.width, e.height]
            }), c && (P = (e = {
                x: e.x + O,
                y: e.y + P,
                width: e.width - O - M,
                height: e.height - P - B
            }).x, n = e.y, B = e.width, u = _ ? (g = d, f = e.height, v = A, p = L, y = [], u = (u = c).split("\n"), ii(u).call(u, function (e) {
                if ("" === e && (e = "e"), p) Array.prototype.push.apply(y, Fl(e, f, g, v));
                else {
                    for (var t, i, a = "", o = "", n = 0; n < e.length; n++) e.charAt(n).match(/[a-z|A-Z]/g) ? a += "1" : a += "2";
                    for (var a = (a = a.replace(/21/g, "2_1")).replace(/12/g, "1_2"), r = 0; r < a.length; r++) a.charAt(r).match(/\_/g) && (e = za(e, r + 1, "|"));
                    for (var l, s = e.split("|"), h = a.split("_"), u = (l = Ea(g, "图")).height / 3, c = 0, d = s.length; c < d; c++) t = o + s[c], u += l.height * s[c].length + v, "1" === h[c][0] ? f < u ? (o ? (y.push(o), o = "", c--) : (i = Fl(s[c], f, g, v), Array.prototype.push.apply(y, bi(i).call(i, 0, i.length - 1)), o = i[i.length - 1]), u = l.height / 3) : u === f ? (y.push(t), o = "", u = l.height / 3) : o = t : f < u ? (i = Fl(t, f, g, v), Array.prototype.push.apply(y, bi(i).call(i, 0, i.length - 1)), o = i[i.length - 1], u = l.height / 3) : o = t;
                    o && y.push(o)
                }
            }), y) : [c], c = Ea(d, "图"), r = c.width, l = c.height, a.save(), a.fillStyle = x, a.textBaseline = "top", a.font = d, m ? (s = P + B - r, h = n, ii(u).call(u, function (e) {
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    a.fillText(i, s, h), h += A + l
                }
                h = n, s = s - r - R
            })) : (s = P, h = n, ii(u).call(u, function (e) {
                for (var t = 0; t < e.length; t++) {
                    var i = e[t];
                    a.fillText(i, s, h), h += A + l
                }
                h = n, s += r + R
            })), a.restore())
        },
        tree: function (g, f, e, v, p) {
            var y, x, b, t = e.getValue("dataSource"),
                m = e.getValue("itemHeight"),
                w = e.getValue("badgeHeight"),
                C = e.getValue("badgeSpace"),
                k = e.getValue("badgeRadius"),
                V = e.getValue("translateX"),
                i = e.getValue("translateY"),
                a = e.getValue("borderWidth"),
                T = e.getValue("rowLineWidth"),
                o = e.getValue("treeFont"),
                I = e.getValue("badgeFont"),
                D = e.getColor("textColor"),
                S = e.getColor("hoverBackColor"),
                L = e.getColor("hoverTextColor"),
                A = e.getColor("selectBackColor"),
                R = e.getColor("selectTextColor"),
                n = e.getColor("backColor"),
                r = e.getColor("borderColor"),
                _ = e.getValue("rowLineColor"),
                l = e.getValue("showLine"),
                P = e.getValue("showCheckbox"),
                M = e.getValue("showIcon"),
                B = e.getValue("showBadge"),
                O = e.getValue("visibleFunc") || function () {
                    return !0
                },
                E = e.getColor("itemBackColor"),
                s = Lo(p, v, e),
                h = null,
                W = null,
                u = f.x,
                c = f.y,
                d = f.width,
                H = f.height,
                j = 0,
                N = -T,
                F = {
                    togglesRect: [],
                    visibleRowsRect: [],
                    checksRect: [],
                    badgesRect: []
                };
            s && (s.treeTableDataModel ? h = s.treeTableDataModel : (h = new Ml, s.treeTableDataModel = h), h.reset(e, f), h.init(t), 0 === t.length && h.clear(), P && h.eachByBreadthFirst(function (e) {
                e.a("checked") && (e.checkAfter(), e.checkBefore())
            })), h && (y = h.getTreeIconInfo(e), n && (g.save(), g.fillStyle = n, g.beginPath(), g.fillRect(u, c, d, H), g.restore()), g.save(), g.font = o, g.fillStyle = D, g.textBaseline = "top", g.textAlign = "start", x = 2 * g.measureText("e").width, g.beginPath(), g.rect(u, c, d, H), g.clip(), b = [], h.getRoots().each(function e(t) {
                var i, a, o, n, r, l, s, h, u, c, d;
                (O(t.a("dataInfo")) || kl(t.a("dataInfo"), O)) && (t.a("treeTextWH", {
                    textWidth: g.measureText(t.a("text")).width + 2,
                    textHeight: x
                }), t.initNodeRect(W, v, p), s = (W = t).a("rowRect"), d = (l = t.a("treeTextRect")).x, a = l.width, i = {
                    x: s.x - V,
                    y: s.y,
                    width: s.width,
                    height: s.height
                }, N += m + T, j = Math.max(j, d - V + a), Bl(f, i) && (l = t.a("_isHovering"), s = t.a("selected"), d = t.a("disabled"), E && (a = i.x, o = i.y, n = i.width, r = i.height, g.save(), g.fillStyle = E, g.fillRect(a, o, n, r + 1), g.restore()), S && l && (o = i.x, n = i.y, r = i.width, l = i.height, g.save(), g.fillStyle = S, g.fillRect(o, n, r, l), g.restore()), A && s && (s = i.x, h = i.y, u = i.width, c = i.height, g.save(), g.fillStyle = A, g.fillRect(s, h, u, c), g.restore()), t.drawTreeToggleIcon(g, v, p, y, F), P && t.drawTreeCheckIcon(g, v, p, y, F), M && t.drawTreeIcon(g, v, p, y), B && t.drawTreeBadge(g, v, p, {
                    badgeFont: I,
                    badgeHeight: w,
                    badgeSpace: C,
                    badgeRadius: k
                }, F), t.drawTreeText(g, v, p, {
                    textColor: D,
                    selectTextColor: R,
                    hoverTextColor: L
                }), d && (h = i.x, u = i.y, c = i.width, d = i.height, g.save(), g.fillStyle = "rgba(192, 192, 192, 0.5)", g.fillRect(h, u, c, d), g.restore()), t.drawRowLine(g, {
                    rowLineWidth: T,
                    rowLineColor: _
                }, i), F.visibleRowsRect.push({
                    node: t,
                    visibleRowRect: i
                }), b.push(t)), t.a("expanded") && t.getChildren().each(e))
            }), l && h.drawTreeCable(g, b, O), h.drawBorder(g, r), g.restore(), s && (s.translateX = V, s.translateY = i, s.rectInfo = F), h.drawScrollBar(g, e, p, s, j, N, {
                x: u + a,
                y: c + a,
                width: d - 2 * a,
                height: H - 2 * a
            }))
        },
        treeTable: function (C, k, V, T, I) {
            var e = V.getValue("dataSource"),
                D = V.getValue("translateX"),
                t = V.getValue("translateY"),
                i = V.getValue("borderWidth"),
                a = V.getColor("borderColor"),
                o = V.getValue("columnLineWidth"),
                n = V.getColor("columnLineColor"),
                S = V.getValue("rowLineWidth"),
                L = V.getColor("rowLineColor"),
                r = V.getValue("showLine"),
                A = V.getValue("showCheckbox"),
                R = V.getValue("showIcon"),
                l = V.getColor("lineColor"),
                s = V.getValue("showHead"),
                h = V.getValue("thHeight"),
                _ = V.getValue("tdHeight"),
                P = V.getValue("tdFont"),
                u = V.getColor("thColor"),
                M = V.getColor("tdColor"),
                c = V.getColor("thBackground"),
                B = V.getColor("tdBackground"),
                O = V.getValue("visibleFunc") || function () {
                    return !0
                },
                E = V.getValue("drawRow"),
                W = V.getColor("hoverTextColor"),
                H = V.getColor("hoverBackColor"),
                j = V.getColor("selectTextColor"),
                N = V.getColor("selectBackColor"),
                d = Lo(I, T, V),
                g = null,
                F = null,
                f = k.x,
                v = k.y,
                p = k.width,
                y = k.height,
                x = 0,
                z = s ? 0 : -S,
                G = {
                    togglesRect: [],
                    visibleRowsRect: [],
                    checksRect: [],
                    headCellsRect: []
                };
            if (d && (d.treeTableDataModel ? g = d.treeTableDataModel : (g = new Ml, d.treeTableDataModel = g), g.reset(V, k, d), g.init(e), A && g.eachByBreadthFirst(function (e) {
                    e.a("checked") && (e.checkAfter(), e.checkBefore())
                })), g) {
                var X = g.a("visibleColumns"),
                    Y = g.getTreeIconInfo(V),
                    U = g.a("treeColumnIndex");
                C.save(), r && (C.strokeStyle = l, C.setLineDash([1, 1]), C.lineWidth = .5, C.lineJoin = "miter"), C.font = P, C.fillStyle = M, C.textBaseline = "top", C.textAlign = "start";
                var Z = 2 * C.measureText("e").width;
                C.beginPath(), C.rect(f, v, p, y), C.clip();
                var K = 0,
                    J = [];
                C.save(), C.beginPath(), C.rect(f + i, v + i + (s ? h : 0), k.width - 2 * i, y - 2 * i - (s ? h : 0)), C.clip(), g.getRoots().each(function e(t) {
                    if (O(t.a("dataInfo"))) {
                        t.a("treeTextWH", {
                            textWidth: C.measureText(t.a("text")).width + 2,
                            textHeight: Z
                        }), t.initNodeRect(F), K++;
                        var i, a = {
                            x: (i = (F = t).a("rowRect")).x - D,
                            y: i.y,
                            width: i.width,
                            height: i.height
                        };
                        if (z += _ + S, Ol(k, a)) {
                            var o, n, r, l, s, h = t.a("cellsRect"),
                                u = h.length,
                                c = t.a("_isHovering"),
                                d = t.a("selected"),
                                g = t.a("disabled");
                            if (t.drawTableRow(C, {
                                    comp: V,
                                    visibleRowRect: a,
                                    tdBackground: B,
                                    drawRow: E
                                }), H && c && (o = a.x, n = a.y, i = a.width, c = a.height, C.save(), C.fillStyle = H, C.fillRect(o, n, i, c), C.restore()), N && d && (d = a.x, r = a.y, l = a.width, s = a.height, C.save(), C.fillStyle = N, C.fillRect(d, r, l, s), C.restore()), 0 < u)
                                for (var f = 0; f < u; f++) {
                                    var v = h[f],
                                        p = v.x,
                                        y = v.y,
                                        x = v.width,
                                        b = v.height,
                                        m = X[f],
                                        w = t.getTextColor({
                                            textColor: M,
                                            hoverTextColor: W,
                                            selectTextColor: j
                                        }, m);
                                    C.save(), C.beginPath(), w !== M && (C.fillStyle = w), f == U ? (C.rect(p, k.y, x, k.height), C.clip(), t.drawTreeToggleIcon(C, T, I, Y, G), A && t.drawTreeCheckIcon(C, T, I, Y, G), R && t.drawTreeIcon(C, T, I, Y), t.drawTreeText(C, T, I, {
                                        textColor: w,
                                        selectTextColor: j,
                                        hoverTextColor: W
                                    })) : (C.rect(p, y, x, b), C.clip(), t.drawTableCell(C, {
                                        comp: V,
                                        data: T,
                                        column: m,
                                        cellRect: v,
                                        tdFont: P,
                                        tdColor: w,
                                        colIndex: f,
                                        textHeight: Z,
                                        visibleRowIndex: K
                                    })), C.restore()
                                }
                            g && (r = a.x, l = a.y, s = a.width, g = a.height, C.save(), C.fillStyle = "rgba(192, 192, 192, 0.5)", C.fillRect(r, l, s, g), C.restore()), t.drawRowLine(C, {
                                rowLineWidth: S,
                                rowLineColor: L
                            }, a), G.visibleRowsRect.push({
                                node: t,
                                visibleRowRect: a
                            }), J.push(t)
                        }
                        t.a("expanded") && t.getChildren().each(e)
                    }
                }), C.restore(), r && g.drawTreeCable(C, J, O), g.drawTableHead(C, d, {
                    comp: V,
                    data: T,
                    columnLineColor: n,
                    thColor: u,
                    thBackground: c
                }), g.drawBorder(C, a), g.drawDragColumnLine(C, d), C.restore();
                for (var b = g.a("columnsRect"), m = 0, w = b.length; m < w; m++) x += b[m].width, m !== w - 1 && (x += o);
                d && (d.translateX = D, d.translateY = t, d.rectInfo = G), g.drawScrollBar(C, V, I, d, x, z, {
                    x: f + i,
                    y: v + i + (s ? h : 0),
                    width: p - 2 * i,
                    height: y - 2 * i - (s ? h : 0)
                })
            }
        },
        chart: function (t, e, i, a, o) {
            var n, r, l, s, h, u, c, d, g, f = i.getValue("series"),
                v = i.getValue("xAxis"),
                p = i.getValue("yAxis"),
                y = i.getValue("colors"),
                x = i.getColor("background"),
                b = i.getValue("onRectSelected"),
                m = i.getValue("onXAxisLabelClicked"),
                w = i.getValue("rectSelectBorderColor"),
                C = i.getValue("rectSelectBackground"),
                k = i.getValue("boundaryGap"),
                V = i.getValue("tooltipPointerType"),
                V = {
                    show: i.getValue("tooltip"),
                    lineWidth: i.getValue("tooltipLineWidth"),
                    lineColor: i.getColor("tooltipLineColor"),
                    type: "auto" === V ? k ? "shadow" : "line" : V,
                    formatter: i.getValue("tooltipFormatter")
                };
            f && f.length && (n = {
                color: y && y.length ? y : Yh,
                xAxis: mh(v, Xh),
                yAxis: mh(p, Gh),
                series: f,
                tooltip: V,
                onRectSelected: b,
                onXAxisLabelClicked: m,
                rectSelectBorderColor: w,
                rectSelectBackground: C
            }, r = {
                data: a,
                view: o,
                boundaryGap: k,
                rect: e,
                contentRect: Jh(e),
                valueAxis: va,
                seriesDatas: ql(f).call(f, function (e) {
                    return !1 === e.visible ? [] : Ro(e.data, a, o)
                }),
                seriesColors: [],
                interactiveInfo: {}
            }, ii(k = n.xAxis).call(k, function (e) {
                e._axisObj = new Zh(e, n, r)
            }), ii(k = n.yAxis).call(k, function (e) {
                e._axisObj = new Kh(e, n, r)
            }), bh(n, r), !a || (k = Lo(o, a, i)) && (r.hoverIndex = (k = k).hoverIndex, r._dragging = k._dragging, r.rectPoint1 = k.rectPoint1, r.rectPoint2 = k.rectPoint2, k._dragging && k.rectPoint1 && k.rectPoint2 && (r.selectRect = qh(k.rectPoint1, k.rectPoint2))), x && (t.fillStyle = x, t.fillRect(e.x, e.y, e.width, e.height)), ii(e = n.xAxis).call(e, function (e) {
                e._axisObj.draw(t)
            }), ii(e = n.yAxis).call(e, function (e) {
                e._axisObj.draw(t)
            }), f && f.length && (l = t, c = (s = n).series, u = (h = r).interactiveInfo.axisInfos = ql(d = s.xAxis).call(d, function (e) {
                return ql(e = e._axisObj.axisInfos).call(e, function (e) {
                    return {
                        position: e.position,
                        label: e.label,
                        series: []
                    }
                })
            }), h.barSeries = [], h.barStackMap = {}, h.barStackCount = 0, h.barCategoryGap = null, h.diffPointsList = [], ii(c).call(c, function (e, t) {
                var i;
                e.type !== xa && e.type !== wa && e.type !== Ca || !1 === e.visible || (e.stack ? ((i = h.barStackMap[e.stack]) || (i = h.barStackMap[e.stack] = {
                    stackData: [],
                    series: []
                }, h.barStackCount++), i.series.push(e)) : h.barSeries.push(e), _o(e.barCategoryGap) && (h.barCategoryGap = e.barCategoryGap))
            }), ii(c).call(c, function (e, t) {
                var i, a = e.type;
                a === ba ? i = Hh : a === xa ? i = jh : a === ma ? i = Nh : a !== wa && a !== Ca || (i = Fh), i && i(l, e, t, s, h)
            }), void 0 === h.hoverIndex || (d = u[0][h.hoverIndex]) && (c = d.position, d = h.bounds.bodyRect, "shadow" === s.tooltip.type ? (u = d.width / u[0].length, l.save(), l.globalAlpha = .3, l.fillStyle = s.tooltip.lineColor, l.fillRect(c - u / 2, d.y, u, d.height), l.restore()) : (l.strokeStyle = s.tooltip.lineColor, l.lineWidth = s.tooltip.lineWidth, l.beginPath(), l.moveTo(c, d.y), l.lineTo(c, d.y + d.height), l.stroke()), h._hoverHandlers && ii(d = h._hoverHandlers).call(d, function (e) {
                e()
            }))), r.selectRect && (u = (g = r.selectRect).x, c = g.y, d = g.width, g = g.height, t.fillStyle = C, t.fillRect(u, c, d, g), t.strokeStyle = w, t.strokeRect(u, c, d, g)), ii(g = n.xAxis).call(g, function (e) {
                e._axisObj.drawMarkLine(t)
            }), ii(g = n.yAxis).call(g, function (e) {
                e._axisObj.drawMarkLine(t)
            }), a && ((i = Lo(o, a, i)).ui = r, i.option = n))
        },
        radioButton: function (e, t, i, a, o) {
            var n = i.getValue("value"),
                r = i.getValue("values") || [],
                l = i.getValue("labels") || [],
                s = i.getValue("borderWidth"),
                h = i.getValue("borderRadius"),
                u = i.getValue("font"),
                c = i.getColor("labelColor"),
                d = i.getColor("borderColor"),
                g = i.getColor("background"),
                f = i.getColor("hoverLabelColor"),
                v = i.getColor("hoverBorderColor"),
                p = i.getColor("hoverBackground"),
                y = i.getColor("activeLabelColor"),
                x = i.getColor("activeBorderColor"),
                b = i.getColor("activeBackground"),
                m = i.getColor("disabledLabelColor"),
                w = i.getColor("disabledBorderColor"),
                C = i.getColor("disabledBackground"),
                k = i.getValue("vertical"),
                V = i.getValue("onChange"),
                T = i.getValue("disabled"),
                i = Lo(o, a, i),
                I = t.x,
                D = t.y,
                S = t.width,
                L = t.height,
                A = Math.min(r.length, l.length);
            if (A) {
                Xl = Yl = null, _o(n) && (n = Ii(r).call(r, n), Yl = 0 <= n ? n : null), i && _o(i.hoverIndex) && (Xl = i.hoverIndex);
                for (var R = [], _ = 0; _ < A; _++) _ !== Xl && _ !== Yl && R.push(_);
                _o(Xl) && Xl === Yl ? R.push(Xl) : (_o(Yl) && R.push(Yl), _o(Xl) && R.push(Xl));
                var P, M, B, O, E, W, H, j, N, F, z, G, X, Y, U = [];
                if (k)
                    for (var Z = L / A, K = 0; K < R.length; K++) {
                        var J = R[K],
                            q = l[J],
                            $ = {
                                x: I,
                                y: D + J * Z,
                                width: S,
                                height: Z
                            };
                        U.push({
                            rect: $,
                            index: J
                        });
                        var Q = zl(J, T, c, f, y, m),
                            ee = zl(J, T, d, v, x, w),
                            te = zl(J, T, g, p, b, C);
                        j = e, N = Gl(J, A), F = h, z = q, G = u, X = Q, Y = s, J = ee, q = te, te = ee = Q = void 0, Q = ($ = $).x, ee = $.y, te = $.width, $ = $.height, j.save(), j.beginPath(), 0 === N ? Po(j, Q, ee, te, $, F, F, 0, 0) : 1 === N ? Po(j, Q, ee, te, $, 0) : 2 === N ? Po(j, Q, ee, te, $, 0, 0, F, F) : Po(j, Q, ee, te, $, F), j.closePath(), q && (j.fillStyle = q, Gi(j).call(j)), J && Y && (j.strokeStyle = J, j.stroke()), j.clip(), Ul(j, z, G, X, Q, ee, te, $, "center", "middle"), j.restore()
                    } else
                        for (var ie = S / A, ae = 0; ae < R.length; ae++) {
                            var oe = R[ae],
                                ne = l[oe],
                                re = {
                                    x: I + ie * oe,
                                    y: D,
                                    width: ie,
                                    height: L
                                };
                            U.push({
                                rect: re,
                                index: oe
                            });
                            var le = zl(oe, T, c, f, y, m),
                                se = zl(oe, T, d, v, x, w),
                                he = zl(oe, T, g, p, b, C);
                            P = e, M = Gl(oe, A), B = h, O = ne, E = u, W = le, H = s, oe = se, ne = he, he = se = le = void 0, le = (re = re).x, se = re.y, he = re.width, re = re.height, P.save(), P.beginPath(), 0 === M ? Po(P, le, se, he, re, B, 0, B, 0) : 1 === M ? Po(P, le, se, he, re, 0) : 2 === M ? Po(P, le, se, he, re, 0, B, 0, B) : Po(P, le, se, he, re, B), P.closePath(), ne && (P.fillStyle = ne, Gi(P).call(P)), oe && H && (P.strokeStyle = oe, P.stroke()), P.clip(), Ul(P, O, E, W, le, se, he, re, "center", "middle"), P.restore()
                        }
                i && (i.disabled = T, i.onChange = V, i.buttonRects = U, i.values = r)
            }
        },
        carousel: function (e, t, i, a, o) {
            var n = i.getValue("dataSource"),
                r = i.getValue("minScale"),
                l = i.getValue("minOpacity"),
                s = i.getValue("vertical"),
                h = i.getValue("index"),
                u = i.getValue("gap"),
                c = i.getValue("itemWidth"),
                d = i.getValue("itemHeight"),
                g = i.getColor("itemBackground"),
                f = i.getColor("itemColor"),
                v = i.getValue("font"),
                p = i.getColor("background"),
                y = i.getValue("drawItem"),
                x = i.getValue("animation"),
                b = i.getValue("onClickItem"),
                m = Lo(o, a, i),
                w = t.x,
                C = t.y,
                k = t.width,
                V = t.height,
                T = h % 1;
            if (h |= 0, p && (e.fillStyle = p, e.fillRect(w, C, k, V)), n && n.length && c && d) {
                var I = 1 - r,
                    t = 1 - l,
                    D = [],
                    S = s ? $l(d, V, u, r) : $l(c, k, u, r),
                    L = I / S,
                    A = t / S;
                if (e.save(), e.beginPath(), e.rect(w, C, k, V), e.clip(), s) {
                    for (var R = w + k / 2, _ = C + V / 2 - d / 2 - u - T * d, P = 0; P < S; P++) {
                        var M = r + L * (S - P - 1 - T),
                            B = l + A * (S - P - 1 - T),
                            O = h - P - 1;
                        if (O < 0 || O >= n.length) break;
                        var E = n[O],
                            W = [(R - c * M / 2) / M, (_ -= d * M) / M, c, d];
                        e.save(), e.globalAlpha = B, e.scale(M, M), y ? y(e, E, Do(W), a, o) : (g && (e.fillStyle = g, e.fillRect.apply(e, W)), uo.apply(void 0, Ni(E = [e, E, v, f]).call(E, W, [sa, ha]))), e.restore(), _ -= u, D.push({
                            index: O,
                            rect: {
                                x: W[0] * M,
                                y: W[1] * M,
                                width: W[2] * M,
                                height: W[3] * M
                            }
                        })
                    }
                    for (var _ = C + V / 2 + d / 2 + u - T * (d + u), H = 0; H < S; H++) {
                        var j = r + L * (S - H - 1 + T),
                            N = l + A * (S - H - 1 + T),
                            F = h + H + 1;
                        if (F < 0 || F >= n.length) break;
                        var z = n[F],
                            G = [(R - c * j / 2) / j, _ / j, c, d];
                        e.save(), e.globalAlpha = N, e.scale(j, j), y ? y(e, z, Do(G), a, o) : (g && (e.fillStyle = g, e.fillRect.apply(e, G)), uo.apply(void 0, Ni(z = [e, z, v, f]).call(z, G, [sa, ha]))), e.restore(), _ += d * j + u, D.push({
                            index: F,
                            rect: {
                                x: G[0] * j,
                                y: G[1] * j,
                                width: G[2] * j,
                                height: G[3] * j
                            }
                        })
                    }
                    _ = C + V / 2 - d / 2 - T * d;
                    p = n[h];
                    p && (I = 1 - A * T, s = [(R - c * (t = 1 - L * T) / 2) / t, _ / t, c, d], e.save(), e.globalAlpha = I, e.scale(t, t), y ? y(e, p, Do(s), a, o) : (g && (e.fillStyle = g, e.fillRect.apply(e, s)), uo.apply(void 0, Ni(p = [e, p, v, f]).call(p, s, [sa, ha]))), e.restore(), D.push({
                        index: h,
                        rect: {
                            x: s[0] * t,
                            y: s[1] * t,
                            width: s[2] * t,
                            height: s[3] * t
                        }
                    }))
                } else {
                    for (var X = C + V / 2, Y = w + k / 2 - c / 2 - u - T * c, U = 0; U < S; U++) {
                        var Z = r + L * (S - U - 1 - T),
                            K = l + A * (S - U - 1 - T),
                            J = h - U - 1;
                        if (J < 0 || J >= n.length) break;
                        var q = n[J],
                            $ = [(Y -= c * Z) / Z, (X - d * Z / 2) / Z, c, d];
                        e.save(), e.globalAlpha = K, e.scale(Z, Z), y ? y(e, q, Do($), a, o) : (g && (e.fillStyle = g, e.fillRect.apply(e, $)), uo.apply(void 0, Ni(q = [e, q, v, f]).call(q, $, [sa, ha]))), e.restore(), Y -= u, D.push({
                            index: J,
                            rect: {
                                x: $[0] * Z,
                                y: $[1] * Z,
                                width: $[2] * Z,
                                height: $[3] * Z
                            }
                        })
                    }
                    for (var Y = w + k / 2 + c / 2 + u - T * (c + u), Q = 0; Q < S; Q++) {
                        var ee = r + L * (S - Q - 1 + T),
                            te = l + A * (S - Q - 1 + T),
                            ie = h + Q + 1;
                        if (ie < 0 || ie >= n.length) break;
                        var ae = n[ie],
                            oe = [Y / ee, (X - d * ee / 2) / ee, c, d];
                        e.save(), e.globalAlpha = te, e.scale(ee, ee), y ? y(e, ae, Do(oe), a, o) : (g && (e.fillStyle = g, e.fillRect.apply(e, oe)), uo.apply(void 0, Ni(ae = [e, ae, v, f]).call(ae, oe, [sa, ha]))), e.restore(), Y += c * ee + u, D.push({
                            index: ie,
                            rect: {
                                x: oe[0] * ee,
                                y: oe[1] * ee,
                                width: oe[2] * ee,
                                height: oe[3] * ee
                            }
                        })
                    }
                    Y = w + k / 2 - c / 2 - T * c;
                    C = n[h];
                    C && (V = 1 - A * T, k = [Y / (w = 1 - L * T), (X - d * w / 2) / w, c, d], e.save(), e.globalAlpha = V, e.scale(w, w), y ? y(e, C, Do(k), a, o) : (g && (e.fillStyle = g, e.fillRect.apply(e, k)), uo.apply(void 0, Ni(C = [e, C, v, f]).call(C, k, [sa, ha]))), e.restore(), D.push({
                        index: h,
                        rect: {
                            x: k[0] * w,
                            y: k[1] * w,
                            width: k[2] * w,
                            height: k[3] * w
                        }
                    }))
                }
                e.restore(), m && (m.itemInfos = D, m.index = h, m.animation = x, m.dataSource = n, m.onClickItem = b, m.scrollable = i.getValue("scrollable"))
            }
        },
        carousel2: function (e, t, i, a, o) {
            var n = i.getValue("dataSource"),
                r = i.getValue("vertical"),
                l = i.getValue("gap"),
                s = i.getValue("itemWidth"),
                h = i.getValue("itemHeight"),
                u = i.getColor("itemBackground"),
                c = i.getColor("itemColor"),
                d = i.getValue("font"),
                g = i.getColor("background"),
                f = i.getValue("drawItem"),
                v = i.getValue("offset") || 0;
            Lo(o, a, i);
            var p = t.x,
                y = t.y,
                x = t.width,
                i = t.height;
            if (g && (e.fillStyle = g, e.fillRect(p, y, x, i)), n && n.length && s && h) {
                e.save(), e.beginPath(), e.rect(p, y, x, i), e.clip();
                var b = n.length;
                if (r) {
                    var m = h + l,
                        w = y + v,
                        C = p + (x - s) / 2,
                        k = 0;
                    if ((w %= m * n.length) <= y)
                        for (;;) {
                            if (fo({
                                    x: C,
                                    y: w,
                                    width: s,
                                    height: h
                                }, t)) break;
                            k++, w += m
                        } else if (y < w)
                            for (;;) {
                                if (!fo({
                                        x: C,
                                        y: w,
                                        width: s,
                                        height: h
                                    }, t) && w < y) {
                                    w += m, k++;
                                    break
                                }
                                w -= m, k--
                            }
                    for (;;) {
                        var V = {
                            x: C,
                            y: w,
                            width: s,
                            height: h
                        };
                        if (!fo(V, t)) break;
                        var T = k % b,
                            T = n[T = T < 0 ? b + k : T];
                        f ? f(e, T, V, a, o) : (u && (e.fillStyle = u, e.fillRect(C, w, s, h)), uo(e, T, d, c, C, w, s, h, sa, ha)), w += m, k++
                    }
                } else {
                    var I = s + l,
                        D = y + (i - h) / 2,
                        S = p + v,
                        L = 0;
                    if ((S %= I * n.length) <= p)
                        for (;;) {
                            if (fo({
                                    x: S,
                                    y: D,
                                    width: s,
                                    height: h
                                }, t)) break;
                            L++, S += I
                        } else if (p < S)
                            for (;;) {
                                if (!fo({
                                        x: S,
                                        y: D,
                                        width: s,
                                        height: h
                                    }, t) && S < p) {
                                    S += I, L++;
                                    break
                                }
                                S -= I, L--
                            }
                    for (;;) {
                        var A = {
                            x: S,
                            y: D,
                            width: s,
                            height: h
                        };
                        if (!fo(A, t)) break;
                        var R = L % b,
                            R = n[R = R < 0 ? b + L : R];
                        f ? f(e, R, A, a, o) : (u && (e.fillStyle = u, e.fillRect(S, D, s, h)), uo(e, R, d, c, S, D, s, h, sa, ha)), S += I, L++
                    }
                }
                e.restore()
            }
        },
        timeAxisChart: function (t, e, i, a, o) {
            var n, r, l, s, h, u, c, d, g, f, v = i.getValue("series"),
                p = i.getValue("xAxis"),
                y = i.getValue("yAxis"),
                x = i.getValue("colors"),
                b = i.getColor("background"),
                m = i.getValue("onRectSelected"),
                w = i.getValue("rectSelectBorderColor"),
                C = i.getValue("rectSelectBackground"),
                k = i.getValue("maxVisiblePoint"),
                V = i.getValue("endProtectPoint"),
                T = i.getValue("xAxisRange"),
                I = {
                    show: i.getValue("tooltip"),
                    lineWidth: i.getValue("tooltipLineWidth"),
                    lineColor: i.getValue("tooltipLineColor"),
                    pattern: i.getValue("tooltipLinePattern"),
                    formatter: i.getValue("tooltipFormatter")
                };
            v && v.length && (l = {
                series: v,
                xAxis: p = p && !lo(p) ? [p] : p,
                yAxis: y = y && !lo(y) ? [y] : y,
                color: x
            }, n = {
                color: x && x.length ? x : Yh,
                xAxis: mh(p, $h),
                yAxis: mh(y, Gh),
                series: v,
                tooltip: I,
                onRectSelected: m,
                rectSelectBorderColor: w,
                rectSelectBackground: C
            }, r = {
                data: a,
                view: o,
                maxVisiblePoint: k,
                endProtectPoint: V,
                xAxisRange: T,
                originalOption: l,
                rect: e,
                contentRect: ro(e),
                valueAxis: va,
                seriesDatas: ql(v).call(v, function (e) {
                    return !1 === e.visible ? [] : Ro(e.data, a, o)
                }),
                seriesColors: [],
                interactiveInfo: {}
            }, ii(l = n.xAxis).call(l, function (e) {
                e._axisObj = new Qh(e, n, r)
            }), ii(l = n.yAxis).call(l, function (e) {
                e._axisObj = new Kh(e, n, r)
            }), bh(n, r), !a || (l = Lo(o, a, i)) && (r.hoverTime = (l = l).hoverTime, r._dragging = l._dragging, r.rectPoint1 = l.rectPoint1, r.rectPoint2 = l.rectPoint2, l._dragging && l.rectPoint1 && l.rectPoint2 && (r.selectRect = Mo(l.rectPoint1, l.rectPoint2))), b && (t.fillStyle = b, t.fillRect(e.x, e.y, e.width, e.height)), ii(e = n.xAxis).call(e, function (e) {
                e._axisObj.draw(t)
            }), ii(e = n.yAxis).call(e, function (e) {
                e._axisObj.draw(t)
            }), v && v.length && (s = t, u = r, d = (h = n).series, ii(d).call(d, function (e, t) {
                "line" === e.type && eu(s, e, t, h, u)
            }), void 0 !== u.hoverTime && (v = (e = h.xAxis[0]._axisObj.zoomTimeRange)[0], f = e[1], c = (g = u.bounds.bodyRect).x, d = g.y, e = g.width, g = g.height, c = c + (u.hoverTime - v) / (f - v) * e, v = (f = h.tooltip).lineColor, e = f.lineWidth, f = f.pattern, s.strokeStyle = v, s.lineWidth = e, f && s.setLineDash(f), s.beginPath(), s.moveTo(c, d), s.lineTo(c, d + g), s.stroke(), u._hoverHandlers && ii(g = u._hoverHandlers).call(g, function (e) {
                e()
            }))), r.selectRect && (c = (f = r.selectRect).x, d = f.y, g = f.width, f = f.height, t.fillStyle = C, t.fillRect(c, d, g, f), t.strokeStyle = w, t.strokeRect(c, d, g, f)), a && ((i = Lo(o, a, i)).ui = r, i.option = n))
        },
        pagination: function (l, e, t, s, h) {
            var u = t.getValue("current"),
                i = t.getValue("pageSize"),
                a = t.getValue("total"),
                o = t.getValue("align"),
                n = t.getValue("itemWidth"),
                c = t.getValue("itemHeight"),
                d = t.getValue("gap"),
                g = t.getColor("labelColor"),
                f = t.getColor("background"),
                v = t.getValue("borderWidth"),
                p = t.getColor("borderColor"),
                y = t.getValue("borderRadius"),
                x = t.getValue("font"),
                b = t.getColor("hoverLabelColor"),
                m = t.getColor("hoverBorderColor"),
                w = t.getColor("hoverBackground"),
                C = t.getColor("activeLabelColor"),
                k = t.getColor("activeBorderColor"),
                V = t.getColor("activeBackground"),
                T = t.getColor("disabledLabelColor"),
                I = t.getColor("disabledBorderColor"),
                D = t.getColor("disabledBackground"),
                S = t.getColor("disabledActiveLabelColor"),
                L = t.getColor("disabledActiveBorderColor"),
                A = t.getColor("disabledActiveBackground"),
                r = t.getColor("showFirstAndLast"),
                R = t.getValue("disabled"),
                _ = s ? Lo(h, s, t) : {},
                P = e.x,
                M = e.y,
                B = e.width,
                e = e.height;
            if (a) {
                for (var O = Math.ceil(a / i), E = 7 < O, W = E && 4 < u, H = E && u <= O - 4, a = 1 < u, i = u < O, j = [], N = 0; N < O; N++) E ? ((0 === N || N === O - 1 || Math.abs(N + 1 - u) <= 2 || !W && N < 5 || !H && O - 5 < N) && j.push({
                    label: N + 1,
                    isDisabled: !!R
                }), 1 === N && W && j.push({
                    label: Ta,
                    isDisabled: !!R
                }), N === O - 2 && H && j.push({
                    label: Ia,
                    isDisabled: !!R
                })) : j.push({
                    label: N + 1,
                    isDisabled: !!R
                });
                j.unshift({
                    label: ka,
                    isDisabled: !a || R
                }), r && j.unshift({
                    label: Da,
                    isDisabled: !a || R
                }), j.push({
                    label: Va,
                    isDisabled: !i || R
                }), r && j.push({
                    label: Sa,
                    isDisabled: !i || R
                });
                var F = _.hoverLabel;
                if (ra === o)
                    for (var z = P + B - v / 2, G = M + (e - c) / 2, X = j.length - 1; 0 <= X; X--) {
                        var Y = j[X],
                            U = Y.label,
                            Z = Y.isDisabled,
                            K = Ea(x, U),
                            J = 0 <= Ii(is).call(is, U) ? n : Math.max(n, K.width),
                            q = {
                                x: z -= J,
                                y: G,
                                width: J,
                                height: c
                            },
                            $ = {
                                active: u === U,
                                hover: F === U,
                                disabled: Z
                            },
                            K = es($, g, b, C, T, S),
                            J = es($, p, m, k, I, L),
                            Z = es($, f, w, V, D, A);
                        Ql(l, q, U, x, K, J, y, v, Z, $, s, h), z -= d, Y.rect = q
                    } else if (la === o)
                        for (var Q = P + v / 2, ee = M + (e - c) / 2, te = 0; te < j.length; te++) {
                            var ie = j[te],
                                ae = ie.label,
                                oe = ie.isDisabled,
                                ne = Ea(x, ae),
                                re = 0 <= Ii(is).call(is, ae) ? n : Math.max(n, ne.width),
                                le = {
                                    x: Q,
                                    y: ee,
                                    width: re,
                                    height: c
                                },
                                se = {
                                    active: u === ae,
                                    hover: F === ae,
                                    disabled: oe
                                },
                                he = es(se, g, b, C, T, S),
                                ne = es(se, p, m, k, I, L),
                                oe = es(se, f, w, V, D, A);
                            Ql(l, le, ae, x, he, ne, y, v, oe, se, s, h), Q += re + d, ie.rect = le
                        } else {
                            var ue, ce = 0,
                                de = M + (e - c) / 2,
                                ge = [];
                            ii(j).call(j, function (e) {
                                var t = e.label;
                                e.isDisabled;
                                e = Ea(x, t), e = 0 <= Ii(is).call(is, t) ? n : Math.max(n, e.width);
                                ce += e, ge.push(e)
                            }), ce += (j.length - 1) * d, ue = P + B / 2 - ce / 2, ii(j).call(j, function (e, t) {
                                var i = e.label,
                                    a = e.isDisabled,
                                    o = {
                                        x: ue,
                                        y: de,
                                        width: ge[t],
                                        height: c
                                    },
                                    n = {
                                        active: u === i,
                                        hover: F === i,
                                        disabled: a
                                    },
                                    r = es(n, g, b, C, T, S),
                                    t = es(n, p, m, k, I, L),
                                    a = es(n, f, w, V, D, A);
                                Ql(l, o, i, x, r, t, y, v, a, n, s, h), ue += o.width + d, e.rect = o
                            })
                        }
                s && (_.itemList = j, _.totalPage = O, _.current = u, _.disabled = R, _.onChange = t.getValue("onChange"))
            }
        },
        radio2: function (e, t, i, a, o) {
            var n = i.getValue("disabled"),
                r = i.getValue("checked"),
                l = i.getColor("normalColor"),
                s = i.getColor("background"),
                h = i.getColor("activeColor"),
                u = i.getColor("disabledColor"),
                c = i.getColor("disabledBackground");
            i.getValue("symbol");
            var d = Lo(o, a, i),
                g = (r = _o(d.checked) ? d.checked : r) ? h : l,
                f = t.x,
                o = t.y,
                h = t.width,
                l = t.height,
                t = Math.min(h, l);
            a && (n ? (g = u, s = c) : d.pressed ? r ? g = ht.Default.darker(g, qi.activeDarker) : s = ht.Default.darker(s, qi.activeDarker) : d.hover && (r ? g = ht.Default.darker(g, qi.hoverDarker) : s = ht.Default.darker(s, qi.hoverDarker))), s && (e.beginPath(), e.fillStyle = s, e.arc(f + .5 * h, o + .5 * l, .5 * t, 0, 2 * Math.PI), Gi(e).call(e)), e.beginPath(), e.strokeStyle = g, e.lineWidth = 1.5, e.arc(f + .5 * h, o + .5 * l, .5 * t, 0, 2 * Math.PI), e.stroke(), r && (e.beginPath(), e.fillStyle = g, e.arc(f + .5 * h, o + .5 * l, .25 * t, 0, 2 * Math.PI), Gi(e).call(e)), a && !a.__inputType && (a.__inputType = da), d && (d.disabled = n, d.onChange = i.getValue("onChange"), d.group = i.getValue("group"), d.value = i.getValue("value"), d.checked = r, d.__inputType = da)
        },
        valueAxisChart: function (t, e, i, a, o) {
            var n, r, l, s, h, u, c, d = i.getValue("series"),
                g = i.getValue("xAxis"),
                f = i.getValue("yAxis"),
                v = i.getValue("colors"),
                p = i.getColor("background"),
                y = i.getValue("clipMode"),
                x = {
                    show: i.getValue("tooltip"),
                    formatter: i.getValue("tooltipFormatter")
                };
            d && d.length && (n = {
                series: d,
                xAxis: g = g && !lo(g) ? [g] : g,
                yAxis: f = f && !lo(f) ? [f] : f,
                color: v,
                clipMode: y
            }, r = {
                color: v && v.length ? v : Yh,
                xAxis: mh(g, Xh),
                yAxis: mh(f, Gh),
                series: d,
                tooltip: x,
                clipMode: y
            }, l = {
                data: a,
                view: o,
                rect: e,
                contentRect: au(e),
                valueAxis: va,
                originalOption: n,
                seriesDatas: ql(d).call(d, function (e) {
                    return !1 === e.visible ? [] : Ro(e.data, a, o)
                }),
                seriesColors: [],
                interactiveInfo: {}
            }, ii(n = r.xAxis).call(n, function (e) {
                e._axisObj = new iu(e, r, l)
            }), ii(n = r.yAxis).call(n, function (e) {
                e._axisObj = new Kh(e, r, l)
            }), bh(r, l), p && (t.fillStyle = p, t.fillRect(e.x, e.y, e.width, e.height)), !a || (e = Lo(o, a, i)) && (l.hitPointIndex = (s = e).hitPointIndex, l.hitSeriesIndex = s.hitSeriesIndex), ii(s = r.xAxis).call(s, function (e) {
                e._axisObj.draw(t)
            }), ii(s = r.yAxis).call(s, function (e) {
                e._axisObj.draw(t)
            }), d && d.length && (h = t, d = (u = r).series, (c = l).pointsInfo = {}, ii(d).call(d, function (e, t) {
                tu(h, e, t, u, c)
            })), a && ((i = Lo(o, a, i)).ui = l, i.option = r))
        },
        qrcode: function (e, t, i, a, o) {
            var n = i.getColor("colorDark"),
                r = i.getColor("colorLight"),
                l = i.getColor("padding"),
                s = i.getValue("content");
            if (!qa(s)) {
                e.save();
                var h = Vs[s],
                    u = (h = h || (Vs[s] = new ks(s))).getModuleCount(),
                    c = t.x,
                    d = t.y,
                    g = t.width,
                    f = t.height,
                    v = 10 * u,
                    p = c,
                    i = d,
                    s = Math.min(g, f);
                g -= 2 * l, f -= 2 * l;
                t = Math.min(g, f) / v;
                f < g ? p = c + (g - f) / 2 : i = d + (f - g) / 2, e.translate(p, i), e.fillStyle = r, e.fillRect(0, 0, s, s);
                var y = v / u;
                e.translate(l, l), e.fillStyle = n, e.scale(t, t), e.beginPath();
                for (var x = 0; x < u; x++)
                    for (var b = 0; b < u; b++) h.isDark(x, b) && e.rect(b * y, x * y, 10, 10);
                Gi(e).call(e), e.restore()
            }
        },
        dragSlider: function (r, e, t, o, n) {
            var i = {
                    dataSource: t.getValue("dataSource"),
                    color: t.getValue("color"),
                    step: t.getValue("step"),
                    total: t.getValue("total"),
                    padding: t.getValue("padding"),
                    onChange: t.getValue("onChange"),
                    barWidth: t.getValue("barWidth"),
                    barBackground: t.getValue("barBackground"),
                    barBorderRadius: t.getValue("barBorderRadius"),
                    sliderImage: t.getValue("sliderImage"),
                    sliderBorderWidth: t.getValue("sliderBorderWidth"),
                    sliderBorderRadius: t.getValue("sliderBorderRadius"),
                    sliderBorderColor: t.getValue("sliderBorderColor"),
                    sliderBackground: t.getValue("sliderBackground"),
                    sliderWidth: t.getValue("sliderWidth"),
                    sliderHeight: t.getValue("sliderHeight"),
                    sliderOffsetX: t.getValue("sliderOffsetX"),
                    sliderOffsetY: t.getValue("sliderOffsetY"),
                    showToolTip: t.getValue("showToolTip"),
                    toolTipFormat: t.getValue("toolTipFormat")
                },
                a = Lo(n, o, t),
                l = i.barBackground,
                s = i.barWidth,
                h = i.barBorderRadius,
                u = i.padding,
                c = i.sliderBackground,
                d = i.sliderBorderRadius,
                g = i.sliderBorderWidth,
                f = i.sliderBorderColor,
                v = i.sliderImage,
                p = {
                    itemsRect: [],
                    dragIconsRect: []
                },
                y = e.x,
                x = e.y,
                b = e.width,
                m = e.height,
                t = null,
                w = null;
            a && (a.dragSliderDataModel ? t = a.dragSliderDataModel : (t = new _s, a.dragSliderDataModel = t), t.reset(i, e), t.init(), r.save(), r.beginPath(), r.rect(y, x, b, m), r.clip(), l && (r.save(), r.fillStyle = l, r.beginPath(), Ps(r, y + u, x + (m - s) / 2, b - 2 * u, s, h), r.closePath(), Gi(r).call(r), r.restore()), t.getRoots().each(function (e, t, i) {
                e.initNodeRect(w);
                var a = (w = e).getAttrObject(),
                    o = a.itemRect,
                    n = a.color,
                    a = 0 === t,
                    i = t === i.size() - 1;
                r.save(), r.fillStyle = n, r.beginPath(), Ps(r, o.x, o.y, o.width, o.height, a ? h : 0, i ? h : 0, a ? h : 0, i ? h : 0), r.closePath(), Gi(r).call(r), r.restore(), p.itemsRect.push({
                    dragSliderData: e,
                    itemRect: o
                })
            }), t.getRoots().each(function (e, t, i) {
                var a = e.getAttrObject().dragIconRect;
                v ? Bs(r, Ms(v), "fill", a.x, a.y, a.width, a.height, o, n) : (r.save(), r.fillStyle = c, r.beginPath(), Ps(r, a.x, a.y, a.width, a.height, d, d, d, d), r.closePath(), Gi(r).call(r), g && (r.lineWidth = g, r.strokeStyle = f, r.stroke()), r.restore()), p.dragIconsRect.push({
                    dragSliderData: e,
                    dragIconRect: a
                })
            }), r.restore(), a.rectInfo = p)
        },
        verticalBar: function (a, e, t, i, o) {
            var n, r, l, s, h, u, c, d, g, f, v, p, y = t.getValue("colors"),
                x = t.getValue("labelColor"),
                b = t.getValue("dataSource"),
                m = t.getValue("font"),
                w = t.getValue("barPercent");
            b && b.length && (n = (i ? ht.vector.getVectorInfo(o, i, t) : {}).hoverIndex, r = e.x, i = e.y, t = e.width, e = e.height, l = e / b.length * w, s = e / b.length, h = (s - l) / 2, c = [], g = (d = void(u = 0) === g) ? -1 / 0 : g, ii(b).call(b, function (e) {
                var t = ht.Default.getTextSize(m, e.name);
                u = Math.max(u, t.width), c.push(c), d && (g = Math.max(g, e.value))
            }), f = t - u - 10 - 48, v = i, p = r, ii(b).call(b, function (e, t) {
                var i = c[t];
                ht.Default.drawText(a, e.name, m, x, p = r, v, i.width, s, "left", "middle"), p += u + 5;
                i = e.value / g, i = Math.min(i, 1);
                a.fillStyle = n === t ? ht.Default.brighter(y[t]) : y[t % y.length], a.fillRect(p, v + h, f * i, l), p += f * i + 5, ht.Default.drawText(a, e.value + "", m, x, p, v, 48, s, "left", "middle"), v += s
            }))
        },
        checkGroup: function (r, e, t, l, s) {
            var i = t.getValue("dataSource"),
                a = t.getValue("value"),
                o = t.getValue("vPadding"),
                h = t.getValue("hPadding"),
                u = t.getValue("vGap"),
                c = t.getValue("hGap"),
                d = t.getColor("boxBackground"),
                g = t.getColor("activeBoxBackground"),
                f = t.getColor("checkIconColor");
            t.getValue("layerImage");
            var v, n, p, y, x, b, m = t.getColor("labelColor"),
                w = t.getValue("labelFont"),
                C = t.getColor("activeLabelColor"),
                k = t.getValue("multiple"),
                V = t.getValue("getLabelColor"),
                T = Lo(s, l, t),
                I = a;
            i && i.length && (v = T.uiInfos = ql(i).call(i, function (e) {
                return {
                    label: e.label,
                    value: e.value
                }
            }), n = e.x, p = e.y, y = e.width, e.height, x = n + h, b = p + o, r.save(), r.textBaseline = ha, r.textAlign = la, k && (I = (a || "").split(",")), ii(i).call(i, function (e, t) {
                var i = e.label,
                    a = e.value,
                    o = k ? 0 <= Ii(I).call(I, a) : a === I,
                    n = o ? C : m;
                r.beginPath(), r.moveTo(x, b + 8), r.lineTo(x + 8, b), r.lineTo(x + 16, b + 8), r.lineTo(x + 8, b + 16), r.fillStyle = o ? g : d, Gi(r).call(r), o && (r.beginPath(), r.moveTo(x + 3, b + 8 + 1), r.lineTo(x + 8, b + 16 - 2), r.lineTo(x + 16 + 4, b + 8 - 6), r.lineTo(x + 16 + 1, b + 8 - 6), r.lineTo(x + 8, b + 16 - 5), r.lineTo(x + 6, b + 8 + 1), r.fillStyle = f, Gi(r).call(r)), qa(i) && (i = a), r.font = w, r.fillStyle = V ? V(n, e, t, l, s) : n, r.fillText(i, x + 16 + c, b + 8), v[t].rect = {
                    x: x,
                    y: b,
                    width: Math.max(1, y - 2 * h),
                    height: 16
                }, (v[t].active = o) && (T.activeIndex = t), b = b + 16 + u
            }), r.restore(), T && (T.value = a, T.dataValue = I, T.dataSource = i, T.onChange = t.getValue("onChange"), T.multiple = k))
        },
        parallelogramTab: function (u, e, t, i, a) {
            var c, d, g, o = t.getValue("dataSource"),
                f = t.getValue("value"),
                v = t.getValue("gap"),
                p = t.getValue("activeItemWidth"),
                y = t.getValue("activeItemHeight"),
                x = t.getValue("itemWidth"),
                b = t.getValue("itemHeight"),
                m = t.getColor("activeItemBackground"),
                w = t.getColor("itemBackground"),
                C = t.getColor("labelColor"),
                k = t.getValue("labelFont"),
                V = t.getColor("activeLabelColor"),
                T = t.getValue("activeLabelFont"),
                I = t.getValue("offset"),
                n = Lo(a, i, t);
            o && o.length && (c = n.uiInfos = ql(o).call(o, function (e) {
                return {
                    value: e
                }
            }), a = e.x, i = e.y, e.width, d = i + e.height / 2, g = a, u.font = k, ii(o).call(o, function (e, t) {
                var i = e === f,
                    a = i ? y : b,
                    o = i ? p : x,
                    n = I < 1 ? a * I : n,
                    r = [],
                    l = i ? m : w,
                    s = i ? V : C,
                    h = i ? T : k;
                t ? ((r = []).push({
                    x: g - n,
                    y: d - a
                }), r.push({
                    x: g + o - n,
                    y: d - a
                }), r.push({
                    x: g + o,
                    y: d
                }), r.push({
                    x: g,
                    y: d
                }), i = Mo(r), ho(u, r), u.fillStyle = l, Gi(u).call(u), u.fillStyle = s, u.font = h, u.fillText(e, i.x + i.width / 2, i.y + i.height / 2), g += o + v, c[t].rect = i) : (a = a / 2, u.fillStyle = l, r.push({
                    x: g,
                    y: d - a
                }), r.push({
                    x: g + o,
                    y: d - a
                }), r.push({
                    x: g + o + n,
                    y: d + a
                }), r.push({
                    x: g,
                    y: d + a
                }), ho(u, r), Gi(u).call(u), r = Mo(r), u.fillStyle = s, u.font = h, u.textBaseline = ha, u.textAlign = sa, u.fillText(e, r.x + r.width / 2, r.y + r.height / 2 + 2), c[t].rect = r, c[t].active = e === f, g += o + v + n, d += a)
            }), n && (n.value = f, n.dataSource = o, n.onChange = t.getValue("onChange")))
        },
        radar: function (s, e, t, h, u) {
            var c, i, a = this,
                o = t.getValue("series"),
                d = t.getValue("colors"),
                g = t.getValue("indicator") || [],
                f = t.getValue("min") || 0,
                n = t.getValue("isCircle"),
                r = t.getValue("fillAlpha"),
                l = t.getValue("borderWidth"),
                v = t.getValue("splitLineVisible"),
                p = t.getValue("splitLineColor"),
                y = t.getValue("splitLineWidth"),
                x = t.getValue("splitLinePattern"),
                b = t.getValue("splitNumber"),
                m = t.getValue("splitColors"),
                w = t.getValue("axisLineVisible"),
                C = t.getValue("axisLineColor"),
                k = t.getValue("axisLineWidth"),
                V = t.getValue("axisLinePattern"),
                T = t.getValue("labelVisible"),
                I = t.getValue("labelPadding"),
                D = t.getValue("labelFont"),
                S = t.getValue("labelGap"),
                L = t.getColor("labelColor"),
                A = t.getValue("labelFormatter"),
                R = t.getValue("drawLabel"),
                _ = t.getValue("seriesValueVisible"),
                P = t.getValue("seriesValueFont"),
                M = t.getValue("seriesValueGap"),
                B = t.getValue("seriesValueFormatter"),
                O = e.x,
                E = e.y,
                t = e.width,
                e = e.height,
                W = Math.max(Math.min(t, e) / 2 - I, 10),
                H = 5,
                j = m.length,
                N = -1 / 0,
                F = 2 * (I = Math.PI),
                z = I / 2;
            if (o && (o = ro(o), H = 0, ii(o).call(o, function (e) {
                    e.data = Ro(e.data, h, u);
                    var t = Math.max.apply(a, e.data);
                    N < t && (N = t), e.data.length > H && (H = e.data.length)
                })), H) {
                if (c = F / H, s.save(), s.translate(O + t / 2, E + e / 2), w) {
                    s.save(), s.beginPath();
                    for (var G = 0; G < H; G++) G && s.rotate(c), s.moveTo(0, 0), s.lineTo(0, -W);
                    s.strokeStyle = C, s.lineWidth = k, V && s.setLineDash(V), s.stroke(), s.restore()
                }
                if (b) {
                    var X = W / b,
                        Y = [];
                    if (s.strokeStyle = p, s.lineWidth = y, x && s.setLineDash(x), n) {
                        if (v)
                            for (var U = 1; U <= b; U++) {
                                var Z = U * X;
                                s.beginPath(), s.arc(0, 0, Z, 0, F), s.stroke()
                            }
                        if (m && m.length)
                            for (var K = 0; K < b; K++) {
                                var J = m[K % j],
                                    q = 0 < K ? K * X : null,
                                    $ = (K + 1) * X;
                                s.beginPath(), s.fillStyle = J, s.arc(0, 0, $, 0, F), _o(q) && s.arc(0, 0, q, 0, F, !0), Gi(s).call(s)
                            }
                    } else {
                        for (var Q = 1; Q <= b; Q++) {
                            var ee, te = Q * X;
                            Y.push(ee = []), s.beginPath();
                            for (var ie = 0; ie < H; ie++) {
                                var ae = c * ie - z,
                                    oe = Math.cos(ae) * te,
                                    ae = Math.sin(ae) * te;
                                ee.push([oe, ae]), ie ? s.lineTo(oe, ae) : s.moveTo(oe, ae)
                            }
                            s.closePath(), v && s.stroke()
                        }
                        if (m && m.length)
                            for (var ne = 0; ne < b; ne++) {
                                var re = m[ne % j],
                                    le = Y[ne - 1],
                                    se = Y[ne];
                                if (s.beginPath(), s.fillStyle = re, le)
                                    for (var he = H - 1; 0 <= he; he--) {
                                        var ue = Ie(le[he], 2),
                                            ce = ue[0],
                                            ue = ue[1];
                                        he === H - 1 ? s.moveTo(ce, ue) : s.lineTo(ce, ue)
                                    }
                                for (var de = 0; de < H; de++) {
                                    var ge = Ie(se[de], 2),
                                        fe = ge[0],
                                        ge = ge[1];
                                    de ? s.lineTo(fe, ge) : s.moveTo(fe, ge)
                                }
                                Gi(s).call(s)
                            }
                    }
                }
                if (T)
                    for (var ve, pe, ye, xe, be, me = W + S, we = 0; we < H; we++) {
                        var Ce = g[we] || {};
                        qa(Ce.name) || (be = Ce.name, ve = we * c - Math.PI / 2, xe = we / H, pe = me * Math.cos(ve), ye = me * Math.sin(ve), mu(s, xe), A && (be = A(be, Ce, we, h, u)), s.font = D, s.fillStyle = L, R ? R(s, be, me, ve, {
                            x: pe,
                            y: ye
                        }, h, u) : s.fillText(be, pe, ye))
                    }
                o && (i = d.length, ii(o).call(o, function (e, t) {
                    var a, o;
                    !1 !== e.visible && (a = e.color || d[t % i], o = [], s.beginPath(), ii(e = e.data).call(e, function (e, t) {
                        var i = (g[t] || {}).max || N,
                            a = c * t - z,
                            e = e / (i - f) * W,
                            i = Math.cos(a) * e,
                            e = Math.sin(a) * e;
                        o.push([i, e]), t ? s.lineTo(i, e) : s.moveTo(i, e)
                    }), s.closePath(), s.globalAlpha = r, s.fillStyle = a, Gi(s).call(s), l && (s.globalAlpha = 1, s.strokeStyle = a, s.lineWidth = l, s.stroke()), ii(o).call(o, function (e, t) {
                        var i = g[t] || {},
                            t = Ie(e, 2),
                            e = t[0],
                            t = t[1];
                        s.beginPath(), s.fillStyle = i.color || a, s.arc(e, t, 2, 0, F), Gi(s).call(s)
                    }))
                }), _ && ii(o).call(o, function (n, r) {
                    var e, l;
                    !1 !== n.visible && (l = n.color || d[r % i], s.font = P, ii(e = n.data).call(e, function (e, t) {
                        var i = g[t] || {},
                            a = i.max || N,
                            o = c * t - z,
                            e = e / (a - f) * W + M,
                            a = Math.cos(o) * e,
                            o = Math.sin(o) * e,
                            e = n.data[t];
                        mu(s, t / H), s.fillStyle = i.color || l, B && (e = B(e, i, r, h, u)), s.fillText(e, a, o)
                    }))
                })), s.restore()
            }
        },
        chartLegend: function (c, e, t, d, g) {
            var i, f, a = t.getValue("dataSource"),
                v = t.getValue("colors"),
                p = t.getValue("orientation"),
                y = t.getValue("iconWidth"),
                x = t.getValue("iconHeight"),
                b = t.getValue("textGap"),
                o = t.getValue("hGap"),
                n = t.getValue("vGap"),
                r = t.getValue("hPadding"),
                l = t.getValue("vPadding"),
                m = t.getValue("font"),
                w = t.getColor("labelColor"),
                C = t.getColor("useItemColorOnLabel"),
                k = t.getColor("disabledLabelColor"),
                V = t.getColor("disabledIconColor"),
                T = t.getValue("drawIcon"),
                s = t.getValue("align"),
                h = t.getValue("vAlign"),
                u = t.getValue("vertical"),
                I = Lo(g, d, t),
                D = e.x,
                S = e.y,
                t = e.width,
                e = e.height;
            a && a.length && (e = e - 2 * l, D = D + r, l = S + l, (r = t - 2 * r) <= 0 || e <= 0 || (i = [], ii(a).call(a, function (e) {
                var t = Ea(m, e.name),
                    e = {};
                p === la || p === ra ? (e.width = t.width + b + y, e.height = Os(t.height, x)) : (e.width = Os(t.width, y), e.height = t.height + x + b), i.push(e)
            }), f = function (e, o, t) {
                var n = t.align,
                    r = t.vAlign,
                    l = t.hGap,
                    s = t.vGap,
                    t = t.vertical,
                    h = e.x,
                    u = e.y,
                    c = e.width,
                    d = e.height,
                    i = [],
                    a = 0,
                    g = 0,
                    f = 0,
                    v = 0;
                if (t) {
                    for (var p = 0, y = 0, x = 0, b = o.length; x < b; x++) {
                        var m = o[x],
                            w = v,
                            v = Os(m.width, v);
                        f += s + m.height, a && d < f ? (p += w + l, y = Math.max(y, f - 2 * s - m.height), i.push({
                            itemCount: a,
                            orientationSize: y
                        }), f = v = a = y = 0, x--) : a++
                    }
                    a && (p += v, i.push({
                        itemCount: a,
                        orientationSize: f - l
                    }))
                } else {
                    for (var C = y = p = 0, k = o.length; C < k; C++) {
                        var V = o[C],
                            T = v;
                        v = Os(V.height, v), g += l + V.width, a && c < g ? (y += T + s, p = Math.max(p, g - 2 * l - V.width), i.push({
                            itemCount: a,
                            orientationSize: p
                        }), g = v = a = p = 0, C--) : a++
                    }
                    a && (y += v, i.push({
                        itemCount: a,
                        orientationSize: g - l
                    }))
                }
                var I, D, S, L = 1,
                    A = 1,
                    e = o[0];
                return t ? (g = n === ra ? (L = -1, h + c) : n === la ? h : h + (c - p) / 2, r === na && (A = -1), I = g, D = f, v = S = 0, ii(i).call(i, function (e) {
                    var t = e.itemCount,
                        e = e.orientationSize;
                    D = r === ha ? u + (d - e) / 2 : r === na ? u + d : u;
                    for (var i = 0; i < t; i++) {
                        var a = o[S];
                        r === na && (D -= a.height), v = Os(a.width, v), a.x = n === ra ? I - a.width : I, a.y = D, r === na ? D -= s : D += (s + a.height) * A, S++
                    }
                    I += (l + v) * L
                })) : (n === ra ? (L = -1, g = h + c - e.width) : n === la && (g = h), f = r === na ? (A = -1, u + d - e.height) : r === oa ? u : u + (d - y) / 2, I = g, D = f, v = S = 0, ii(i).call(i, function (e) {
                    var t = e.itemCount,
                        e = e.orientationSize;
                    I = n === sa ? h + (c - e) / 2 : n === ra ? h + c : g;
                    for (var i = 0; i < t; i++) {
                        var a = o[S];
                        n === ra && (I -= a.width), v = Os(a.height, v), a.x = I, a.y = D, n === ra ? I -= l : I += (l + a.width) * L, S++
                    }
                    D += (s + v) * A
                })), o
            }({
                x: D,
                y: l,
                width: r,
                height: e
            }, i, {
                align: s,
                vAlign: h,
                hGap: o,
                vGap: n,
                vertical: u
            }), ii(a).call(a, function (e, t) {
                var i, a, o = e.visible,
                    n = e.name,
                    r = f[t],
                    l = r.x,
                    s = r.y,
                    h = r.width,
                    u = r.height,
                    r = {
                        width: y,
                        height: x
                    };
                p === oa ? (r.x = l + (h - y) / 2, i = l + h / 2, a = (r.y = s) + x + b, c.textAlign = sa, c.textBaseline = oa) : p === na ? (r.x = l + (h - y) / 2, r.y = s + u - x, i = l + h / 2, a = r.y - b, c.textAlign = sa, c.textBaseline = na) : (p === ra ? (r.x = l + h - y, r.y = s, i = r.x - b, a = s + u / 2, c.textAlign = ra) : (r.x = l, r.y = s + (u - x) / 2, i = l + y + b, a = s + u / 2, c.textAlign = la), c.textBaseline = ha);
                u = !1 === o ? V : v[t % v.length];
                T ? T(c, r, e, t, u, d, g) : (c.fillStyle = u, c.fillRect(r.x, r.y, r.width, r.height)), c.font = m, c.fillStyle = C ? v[t % v.length] : !1 === o ? k : w, c.fillText(n || t, i, a)
            }), I.rects = f, I.dataSource = a))
        },
        barChart: function (t, e, i, a, o) {
            var n, r, l, s, h, u, c, d, g, f = i.getValue("series"),
                v = i.getValue("xAxis"),
                p = i.getValue("yAxis"),
                y = i.getValue("colors"),
                x = i.getColor("background"),
                b = i.getValue("hoverDraw"),
                m = i.getValue("boundaryGap"),
                w = i.getValue("tooltipPointerType"),
                w = {
                    show: i.getValue("tooltip"),
                    lineWidth: i.getValue("tooltipLineWidth"),
                    lineColor: i.getColor("tooltipLineColor"),
                    type: "auto" === w ? m ? "shadow" : "line" : w,
                    formatter: i.getValue("tooltipFormatter")
                };
            f && f.length && (n = {
                color: y && y.length ? y : Hu,
                xAxis: mh(v, Wu),
                yAxis: mh(p, Eu),
                series: f,
                tooltip: w,
                hoverDraw: b
            }, r = {
                data: a,
                view: o,
                boundaryGap: m,
                rect: e,
                contentRect: Fu(e),
                valueAxis: fa,
                seriesDatas: ql(f).call(f, function (e) {
                    return !1 === e.visible ? [] : Ro(e.data, a, o)
                }),
                seriesColors: new Array,
                interactiveInfo: new Object
            }, ii(m = n.xAxis).call(m, function (e) {
                e._axisObj = new ju(e, n, r)
            }), ii(m = n.yAxis).call(m, function (e) {
                e._axisObj = new Nu(e, n, r)
            }), function (n, e) {
                e.data, e.view;
                var r = ql(f = n.xAxis).call(f, function (e) {
                        return e._axisObj.boundHeight
                    }),
                    o = ql(t = n.yAxis).call(t, function (e) {
                        return e._axisObj.boundWidth
                    }),
                    a = 2,
                    l = e.leftAxis = [],
                    s = e.bottomAxis = [],
                    h = 0,
                    u = 0,
                    i = 0;
                ii(g = n.xAxis).call(g, function (e, t) {
                    e.show && (e = e.bodyGap, i += r[t] + e, s.push(t))
                }), ii(f = n.yAxis).call(f, function (e, t) {
                    var i;
                    e.show && (i = e.bodyGap, h += o[t] + i, l.push(t), a = Math.max(a, 2 + e._axisObj.labelHeight / 2))
                }), u < a && (u = a), i < a && (i = a);
                var t = e.contentRect,
                    c = 0,
                    d = 0;
                e.valueAxis === fa && ii(v = n.xAxis).call(v, function (e) {
                    var t, i, a;
                    e.axisLabel.show && (t = e._axisObj.getValuesByValueRange(!0), a = (i = Ea(e.axisLabel.font, t[t.length - 1])).width / 2, d < a && (d = a), i = Ea(e.axisLabel.font, t[t.length - 1]), c = Math.max(i.width / 2, c))
                }), h < d && (o[0] += d - h, h = d);
                var g = t.x,
                    f = t.y,
                    v = t.width,
                    t = t.height,
                    p = [],
                    y = [],
                    x = g,
                    b = f,
                    m = v - h,
                    w = t - u - i;
                0 < c && (m = m - c + 0), m = Math.max(0, m), w = Math.max(0, w), b = f + u, ii(o).call(o, function (e, t) {
                    for (var i = 0, a = Ii(l).call(l, t); 0 < a;) i += o[l[--a]];
                    p.push({
                        x: x + i,
                        y: b,
                        width: e,
                        height: w
                    })
                }), x = g + h, b = f, ii(r).call(r, function (e, t) {
                    for (var i = n.xAxis[t].bodyGap, a = 0, o = Ii(s).call(s, t); 0 < o;) a += r[s[--o]];
                    y.push({
                        x: x,
                        y: b + w + u + a + i,
                        width: m,
                        height: e
                    })
                });
                var C = [],
                    k = [];
                ii(t = n.series).call(t, function (e) {
                    ("left" == e.renderArea ? C : k).push(e)
                }), t = {
                    x: g + h,
                    y: f + u,
                    width: Math.max(0, m),
                    height: Math.max(0, w)
                }, 0 < C.length && 0 < k.length ? (f = [{
                    x: g + h,
                    y: f + u,
                    width: Math.max(0, m) / 2,
                    height: Math.max(0, w)
                }, {
                    x: g + h + Math.max(0, m) / 2,
                    y: f + u,
                    width: Math.max(0, m) / 2,
                    height: Math.max(0, w)
                }], e.bounds = {
                    xAxisRects: y,
                    yAxisRects: p,
                    bodyRect: t,
                    bodySplitRect: f
                }) : e.bounds = {
                    xAxisRects: y,
                    yAxisRects: p,
                    bodyRect: t
                }
            }(n, r), !a || (m = Lo(o, a, i)) && (r.hoverIndex = m.hoverIndex), x && (t.fillStyle = x, t.fillRect(e.x, e.y, e.width, e.height)), ii(e = n.xAxis).call(e, function (e) {
                e._axisObj.draw(t)
            }), ii(e = n.yAxis).call(e, function (e) {
                e._axisObj.draw(t)
            }), f && f.length && (l = t, h = r, d = (s = n).series, c = s.hoverDraw, g = h.interactiveInfo.axisInfos = ql(u = s.yAxis).call(u, function (e) {
                return ql(e = e._axisObj.axisInfos).call(e, function (e) {
                    return {
                        position: e.position,
                        label: e.label,
                        series: []
                    }
                })
            }), h.barSeries = [], h.barCategoryGap = null, ii(d).call(d, function (e, t) {
                !1 !== e.visible && (h.barSeries.push(e), _o(e.barCategoryGap) && (h.barCategoryGap = e.barCategoryGap))
            }), h.leftSeries = [], h.rightSeries = [], ii(d).call(d, function (e) {
                ("left" == e.renderArea ? h.leftSeries : h.rightSeries).push(e)
            }), ii(d).call(d, function (e, t) {
                Ou && Ou(l, e, t, s, h)
            }), void 0 === h.hoverIndex || (u = g[0][h.hoverIndex]) && (d = u.position, g = (u = h.bounds.bodyRect).height / g[0].length, g = {
                x: u.x,
                y: d - g / 2,
                width: u.width,
                height: g
            }, c && "function" == typeof c ? (l.save(), c(l, g, h.data, h.view)) : (l.save(), l.globalAlpha = .3, l.fillStyle = s.tooltip.lineColor, l.fillRect(g.x, g.y, g.width, g.height)), l.restore(), h._hoverHandlers && ii(g = h._hoverHandlers).call(g, function (e) {
                e()
            }))), qa(r.bounds.bodySplitRect) || (u = (d = r.bounds.bodyRect).x, c = d.y, g = d.width, d = d.height, t.beginPath(), t.moveTo(g = u + g / 2, c), t.lineTo(g, c + d), t.stroke()), $a(n.tooltip, w), a && ((i = Lo(o, a, i)).ui = r, i.option = n))
        }
    }, it.dragSliderInteractor = new ki, it.pieInteractor = new T, it.buttonInteractor = new wt, it.inputInteractor = new Be, it.textAreaInteractor = new Q, it.radioInteractor = new ut, it.checkboxInteractor = new st, it.colorPickerInteractor = new Ze, it.dateTimePickerInteractor = new Ke, it.comboBoxInteractor = new qt, it.tableInteractor = new Ei, it.sliderInteractor = new Ye, it.rangeSliderInteractor = new M, it.multipleComboBoxInteractor = new re, it.treeInteractor = new fe, it.treeTableInteractor = new Re, it.chartInteractor = new ge, it.inputNumberInteractor = new xe, it.dateRangePickerInteractor = new jt, it.radioButtonInteractor = new Ee, it.carouselInteractor = new gi, it.timeAxisChartInteractor = new Ds, it.carouselInteractor2 = new gr, it.paginationInteractor = new Fe, it.textBoxInteractor = new e, it.radioInteractor2 = new Wi, it.valueAxisChartInteractor = new J, it.checkGroupInteractor = new We, it.parallelogramTabInteractor = new me, it.chartLegendInteractor = new q, it.barChartInteractor = new Oe, it.Color = aa, it.ListView = Gs, it.ListDropDown = Xs, it.getVectorInfo = Lo, it.caluMultilineSize = function (e, t) {
        var i = e.a("ht.content"),
            a = e.a(Ji.FONT),
            o = e.a(Ji.LINE_HEIGHT),
            n = e.a(Ji.PADDING),
            r = Ie($i(n), 4),
            l = r[0],
            e = r[1],
            n = r[2],
            r = r[3],
            i = i.split(/\n/),
            s = 0;
        return ii(i).call(i, function (e) {
            e = Ea(a, e);
            s = Math.max(s, e.width)
        }), {
            width: s + r + e,
            height: i.length * o + l + n
        }
    }, it.caluRichTextPaneSize = function (n, r) {
        var e = n.a("ht.content"),
            t = n.a("ht.borderWidth") || 1,
            i = n.a("ht.padding"),
            a = n.a("ht.showArrow"),
            o = n.a("ht.arrowOrientation"),
            l = n.a("ht.vGap"),
            s = n.a("ht.hGap"),
            h = n.a("ht.font"),
            u = Ie($i(i), 4),
            c = u[0],
            d = u[1],
            i = u[2],
            d = u[3] + d + t,
            t = c + i + t;
        a && (o === la || o === ra ? d += 10 : t += 10);
        var g = 0,
            f = 0;
        return e && (ii(e).call(e, function (e, t) {
            var a = 0,
                o = (e.length - 1) * s;
            ii(e).call(e, function (e, t) {
                var i = Ro(e.text, n, r),
                    i = Ea(e.font || h, i);
                a = Math.max(a, i.height), o += i.width
            }), g = Math.max(g, o), f += a
        }), f += (e.length - 1) * l), {
            width: d += g,
            height: t += f
        }
    }, it.setFormData = function o(n, e, r) {
        return (e ? e.getChildren() : n.dm().getDatas()).each(function (e) {
            var t = e.a(Ji.FORM_ITEM_NAME),
                i = e.a(Ji.FORM_ITEM_GROUP),
                a = r[t];
            if (t) void 0 !== a && e.a(Ji.VALUE, a);
            else if (i) {
                if (void 0 === (a = r[i])) return;
                e.__inputType === da ? e.a(Ji.CHECKED, e.a(Ji.VALUE) === a) : e.__inputType === ga && e.a(Ji.CHECKED, 0 <= Ii(a).call(a, e.a(Ji.VALUE)))
            }
            e.hasChildren() && o(n, e, r)
        }), r
    }, it.openColorDropDown = No, it.openDateTimeDropDown = Fo, it.getFormData = function (e, t) {
        var r = {},
            l = t ? t.getChildren() : e.dm().getDatas();
        return l.each(function (e) {
            var t, i = e.a(Ji.FORM_ITEM_NAME),
                a = e.a(Ji.FORM_ITEM_GROUP);
            if (i) r[i] = Xa(e);
            else if (a && !r[Ji.FORM_ITEM_GROUP])
                if (e.__inputType === da)
                    for (var o = 0; o < l.length; o++) {
                        var n = l.get(o);
                        if (a === n.a(Ji.FORM_ITEM_GROUP) && n.a(Ji.CHECKED)) {
                            r[a] = Xa(n);
                            break
                        }
                    } else e.__inputType === ga && (t = [], l.each(function (e) {
                        a === e.a(Ji.FORM_ITEM_GROUP) && e.a(Ji.CHECKED) && t.push(Xa(e))
                    }), r[a] = t)
        }), r
    }, it.selectFile = ae, it.tooltip = Hs, it.getVersion = function () {
        return en
    }, it.closeAllDropDown = function () {
        ii(Wo).call(Wo, function (e) {
            e.close && e.close()
        })
    }, it.drawComp = function (e, t, i, a, o, n) {
        var r = _u(t, n),
            l = i.x,
            t = i.y,
            n = i.width,
            i = i.height;
        ht.Default.drawImage(e, r, l, t, n, i, a, o, a && a.s("body.color"))
    }, it.drawVector = function (e, t, i, a, o, n) {
        var r = function (e, t) {
                var i = e.draw,
                    a = e.tag,
                    e = Ni(o = "".concat(i, ".")).call(o, a),
                    o = Bu[e];
                if (!o) {
                    var n = {
                        type: "image",
                        name: i,
                        prefix: a,
                        pixelPerfect: !0,
                        rect: [0, 0, 100, 100]
                    };
                    if (t)
                        for (var r in t) n[r] = t[r];
                    Bu[e] = o = {
                        width: 100,
                        height: 100,
                        fitSize: !0,
                        comps: [n]
                    }
                }
                return o
            }(t, n),
            l = i.x,
            t = i.y,
            n = i.width,
            i = i.height;
        ht.Default.drawImage(e, r, l, t, n, i, a, o, a && a.s("body.color"))
    }, it
}();