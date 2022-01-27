/**
 * Swiper
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright  Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Swiper = t());
})(this, function () {
    "use strict";
    var f =
        "undefined" == typeof document
            ? {
                body: {},
                addEventListener: function () { },
                removeEventListener: function () { },
                activeElement: { blur: function () { }, nodeName: "" },
                querySelector: function () {
                    return null;
                },
                querySelectorAll: function () {
                    return [];
                },
                getElementById: function () {
                    return null;
                },
                createEvent: function () {
                    return { initEvent: function () { } };
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () { },
                        getElementsByTagName: function () {
                            return [];
                        },
                    };
                },
                location: { hash: "" },
            }
            : document,
        Y =
            "undefined" == typeof window
                ? {
                    document: f,
                    navigator: { userAgent: "" },
                    location: {},
                    history: {},
                    CustomEvent: function () {
                        return this;
                    },
                    addEventListener: function () { },
                    removeEventListener: function () { },
                    getComputedStyle: function () {
                        return {
                            getPropertyValue: function () {
                                return "";
                            },
                        };
                    },
                    Image: function () { },
                    Date: function () { },
                    screen: {},
                    setTimeout: function () { },
                    clearTimeout: function () { },
                }
                : window,
        l = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return (this.length = e.length), this;
        };
    function L(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s,
                    r,
                    n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (
                        0 === n.indexOf("<li") && (o = "ul"),
                        0 === n.indexOf("<tr") && (o = "tbody"),
                        (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
                        0 === n.indexOf("<tbody") && (o = "table"),
                        0 === n.indexOf("<option") && (o = "select"),
                        (r = f.createElement(o)).innerHTML = n,
                        i = 0;
                        i < r.childNodes.length;
                        i += 1
                    )
                        a.push(r.childNodes[i]);
                } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i]);
            } else if (e.nodeType || e === Y || e === f) a.push(e);
            else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a);
    }
    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
    }
    (L.fn = l.prototype), (L.Class = l), (L.Dom7 = l);
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this;
        },
        removeClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this;
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this;
        },
        attr: function (e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length) this[i].setAttribute(e, t);
                else for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
            return this;
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
        },
        data: function (e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1) (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), (a.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((a = this[0])) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0;
            }
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                (a.webkitTransform = e), (a.transform = e);
            }
            return this;
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                (a.webkitTransitionDuration = e), (a.transitionDuration = e);
            }
            return this;
        },
        on: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];
            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if ((a.indexOf(e) < 0 && a.unshift(e), L(t).is(r))) n.apply(t, a);
                    else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a);
                }
            }
            function l(e) {
                var t = (e && e.target && e.target.dom7EventData) || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
            }
            "function" == typeof t[1] && ((i = (e = t)[0]), (n = e[1]), (s = e[2]), (r = void 0)), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }), u.addEventListener(h, o, s);
                    }
                else
                    for (d = 0; d < p.length; d += 1) {
                        var v = p[d];
                        u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, s);
                    }
            }
            return this;
        },
        off: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && ((i = (e = t)[0]), (r = e[1]), (n = e[2]), (s = void 0)), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p],
                        u = void 0;
                    if ((!s && c.dom7Listeners ? (u = c.dom7Listeners[d]) : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length))
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
                        }
                }
            return this;
        },
        trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n],
                        l = void 0;
                    try {
                        l = new Y.CustomEvent(r, { detail: i, bubbles: !0, cancelable: !0 });
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0), (l.detail = i);
                    }
                    (o.dom7EventData = e.filter(function (e, t) {
                        return 0 < t;
                    })),
                        o.dispatchEvent(l),
                        (o.dom7EventData = []),
                        delete o.dom7EventData;
                }
            return this;
        },
        transitionEnd: function (t) {
            var a,
                i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            function r(e) {
                if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r);
            }
            if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this;
        },
        outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function () {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = f.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === Y ? Y.scrollY : e.scrollTop,
                    n = e === Y ? Y.scrollX : e.scrollLeft;
                return { top: t.top + r - i, left: t.left + n - s };
            }
            return null;
        },
        css: function (e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (var i in e) this[a].style[i] = e[i];
                    return this;
                }
                if (this[0]) return Y.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
        },
        is: function (e) {
            var t,
                a,
                i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1;
            }
            if (e === f) return i === f;
            if (e === Y) return i === Y;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1;
            }
            return !1;
        },
        index: function () {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t,
                a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? ((t = a + e) < 0 ? [] : [this[t]]) : [this[e]]);
        },
        append: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild);
                    } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                    else this[s].appendChild(e);
            }
            return this;
        },
        prepend: function (e) {
            var t,
                a,
                i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = f.createElement("div");
                    for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]);
                } else if (e instanceof l) for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
                else i[t].insertBefore(e, i[t].childNodes[0]);
            return this;
        },
        next: function (e) {
            return 0 < this.length
                ? e
                    ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e)
                        ? new l([this[0].nextElementSibling])
                        : new l([])
                    : this[0].nextElementSibling
                        ? new l([this[0].nextElementSibling])
                        : new l([])
                : new l([]);
        },
        nextAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
            }
            return new l(t);
        },
        prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? (t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([])) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
            }
            return new l([]);
        },
        prevAll: function (e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), (a = i);
            }
            return new l(t);
        },
        parent: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t));
        },
        parents: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
            return L(r(t));
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t);
        },
        children: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t));
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        },
        add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) (this[this.length] = s[i]), (this.length += 1);
            }
            return this;
        },
        styles: function () {
            return this[0] ? Y.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(t).forEach(function (e) {
        L.fn[e] = t[e];
    });
    var e,
        a,
        i,
        V = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null;
                    } catch (e) { }
                    try {
                        delete t[e];
                    } catch (e) { }
                });
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function () {
                return Date.now();
            },
            getTranslate: function (e, t) {
                var a, i, s;
                void 0 === t && (t = "x");
                var r = Y.getComputedStyle(e, null);
                return (
                    Y.WebKitCSSMatrix
                        ? (6 < (i = r.transform || r.webkitTransform).split(",").length &&
                            (i = i
                                .split(", ")
                                .map(function (e) {
                                    return e.replace(",", ".");
                                })
                                .join(", ")),
                            (s = new Y.WebKitCSSMatrix("none" === i ? "" : i)))
                        : (a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                    "x" === t && (i = Y.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
                    "y" === t && (i = Y.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
                    i || 0
                );
            },
            parseUrlQuery: function (e) {
                var t,
                    a,
                    i,
                    s,
                    r = {},
                    n = e || Y.location.href;
                if ("string" == typeof n && n.length)
                    for (
                        s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e;
                        })).length,
                        t = 0;
                        t < s;
                        t += 1
                    )
                        (i = a[t].replace(/#\S+/g, "").split("=")), (r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
                return r;
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d && d.enumerable && (V.isObject(a[l]) && V.isObject(s[l]) ? V.extend(a[l], s[l]) : !V.isObject(a[l]) && V.isObject(s[l]) ? ((a[l] = {}), V.extend(a[l], s[l])) : (a[l] = s[l]));
                        }
                }
                return a;
            },
        },
        R =
            ((i = f.createElement("div")),
            {
                touch: (Y.Modernizr && !0 === Y.Modernizr.touch) || !!("ontouchstart" in Y || (Y.DocumentTouch && f instanceof Y.DocumentTouch)),
                pointerEvents: !(!Y.navigator.pointerEnabled && !Y.PointerEvent),
                prefixedPointerEvents: !!Y.navigator.msPointerEnabled,
                transition: ((a = i.style), "transition" in a || "webkitTransition" in a || "MozTransition" in a),
                transforms3d: (Y.Modernizr && !0 === Y.Modernizr.csstransforms3d) || ((e = i.style), "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
                flexbox: (function () {
                    for (
                        var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0;
                        a < t.length;
                        a += 1
                    )
                        if (t[a] in e) return !0;
                    return !1;
                })(),
                observer: "MutationObserver" in Y || "WebkitMutationObserver" in Y,
                passiveListener: (function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0;
                            },
                        });
                        Y.addEventListener("testPassiveListener", null, t);
                    } catch (e) { }
                    return e;
                })(),
                gestures: "ongesturestart" in Y,
            }),
        s = function (e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                t.params.on &&
                Object.keys(t.params.on).forEach(function (e) {
                    t.on(e, t.params.on[e]);
                });
        },
        n = { components: { configurable: !0 } };
    (s.prototype.on = function (e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return (
            e.split(" ").forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
            }),
            i
        );
    }),
        (s.prototype.once = function (i, s, e) {
            var r = this;
            if ("function" != typeof s) return r;
            return r.on(
                i,
                function e() {
                    for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
                    s.apply(r, t), r.off(i, e);
                },
                e
            );
        }),
        (s.prototype.off = function (e, i) {
            var s = this;
            return (
                s.eventsListeners &&
                e.split(" ").forEach(function (a) {
                    void 0 === i
                        ? (s.eventsListeners[a] = [])
                        : s.eventsListeners[a] &&
                        s.eventsListeners[a].length &&
                        s.eventsListeners[a].forEach(function (e, t) {
                            e === i && s.eventsListeners[a].splice(t, 1);
                        });
                }),
                s
            );
        }),
        (s.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a,
                i,
                s,
                r = this;
            return (
                r.eventsListeners &&
                ("string" == typeof e[0] || Array.isArray(e[0]) ? ((a = e[0]), (i = e.slice(1, e.length)), (s = r)) : ((a = e[0].events), (i = e[0].data), (s = e[0].context || r)),
                    (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
                        if (r.eventsListeners && r.eventsListeners[e]) {
                            var t = [];
                            r.eventsListeners[e].forEach(function (e) {
                                t.push(e);
                            }),
                                t.forEach(function (e) {
                                    e.apply(s, i);
                                });
                        }
                    })),
                r
            );
        }),
        (s.prototype.useModulesParams = function (a) {
            var i = this;
            i.modules &&
                Object.keys(i.modules).forEach(function (e) {
                    var t = i.modules[e];
                    t.params && V.extend(a, t.params);
                });
        }),
        (s.prototype.useModules = function (i) {
            void 0 === i && (i = {});
            var s = this;
            s.modules &&
                Object.keys(s.modules).forEach(function (e) {
                    var a = s.modules[e],
                        t = i[e] || {};
                    a.instance &&
                        Object.keys(a.instance).forEach(function (e) {
                            var t = a.instance[e];
                            s[e] = "function" == typeof t ? t.bind(s) : t;
                        }),
                        a.on &&
                        s.on &&
                        Object.keys(a.on).forEach(function (e) {
                            s.on(e, a.on[e]);
                        }),
                        a.create && a.create.bind(s)(t);
                });
        }),
        (n.components.set = function (e) {
            this.use && this.use(e);
        }),
        (s.installModule = function (t) {
            for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s = t.name || Object.keys(i.prototype.modules).length + "_" + V.now();
            return (
                (i.prototype.modules[s] = t).proto &&
                Object.keys(t.proto).forEach(function (e) {
                    i.prototype[e] = t.proto[e];
                }),
                t.static &&
                Object.keys(t.static).forEach(function (e) {
                    i[e] = t.static[e];
                }),
                t.install && t.install.apply(i, e),
                i
            );
        }),
        (s.use = function (e) {
            for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e)
                ? (e.forEach(function (e) {
                    return i.installModule(e);
                }),
                    i)
                : i.installModule.apply(i, [e].concat(t));
        }),
        Object.defineProperties(s, n);
    var o = {
        updateSize: function () {
            var e,
                t,
                a = this,
                i = a.$el;
            (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
                (t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
                (0 === e && a.isHorizontal()) ||
                (0 === t && a.isVertical()) ||
                ((e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                    (t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                    V.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
        },
        updateSlides: function () {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                s = e.rtlTranslate,
                r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled,
                o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass),
                d = n ? e.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [],
                h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                b = -h,
                w = 0,
                y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = (parseFloat(g.replace("%", "")) / 100) * i),
                    (e.virtualSize = -g),
                    s ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }),
                    1 < t.slidesPerColumn &&
                    ((x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), k = 0; k < d; k += 1) {
                    T = 0;
                    var z = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var P = void 0,
                            $ = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill
                            ? ((L = k - ($ = Math.floor(k / S)) * S),
                                (M < $ || ($ === M && L === S - 1)) && S <= (L += 1) && ((L = 0), ($ += 1)),
                                (P = $ + (L * x) / S),
                                z.css({ "-webkit-box-ordinal-group": P, "-moz-box-ordinal-group": P, "-ms-flex-order": P, "-webkit-order": P, order: P }))
                            : ($ = k - (L = Math.floor(k / C)) * C),
                            z
                                .css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px")
                                .attr("data-swiper-column", $)
                                .attr("data-swiper-row", L);
                    }
                    if ("none" !== z.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = Y.getComputedStyle(z[0], null),
                                D = z[0].style.transform,
                                O = z[0].style.webkitTransform;
                            D && (z[0].style.transform = "none"),
                                O && (z[0].style.webkitTransform = "none"),
                                (T = t.roundLengths
                                    ? e.isHorizontal()
                                        ? z.outerWidth(!0)
                                        : z.outerHeight(!0)
                                    : e.isHorizontal()
                                        ? z[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right"))
                                        : z[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom"))),
                                D && (z[0].style.transform = D),
                                O && (z[0].style.webkitTransform = O),
                                t.roundLengths && (T = Math.floor(T));
                        } else (T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView), t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? (l[k].style.width = T + "px") : (l[k].style.height = T + "px"));
                        l[k] && (l[k].swiperSlideSize = T),
                            u.push(T),
                            t.centeredSlides
                                ? ((b = b + T / 2 + w / 2 + g),
                                    0 === w && 0 !== k && (b = b - i / 2 - g),
                                    0 === k && (b = b - i / 2 - g),
                                    Math.abs(b) < 0.001 && (b = 0),
                                    t.roundLengths && (b = Math.floor(b)),
                                    y % t.slidesPerGroup == 0 && p.push(b),
                                    c.push(b))
                                : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), (b = b + T + g)),
                            (e.virtualSize += T + g),
                            (w = T),
                            (y += 1);
                    }
                }
                if (
                    ((e.virtualSize = Math.max(e.virtualSize, i) + v),
                        s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                        (R.flexbox && !t.setWrapperSize) || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
                        1 < t.slidesPerColumn &&
                        ((e.virtualSize = (T + t.spaceBetween) * x),
                            (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                            e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
                            t.centeredSlides))
                ) {
                    E = [];
                    for (var A = 0; A < p.length; A += 1) {
                        var H = p[A];
                        t.roundLengths && (H = Math.floor(H)), p[A] < e.virtualSize + p[0] && E.push(H);
                    }
                    p = E;
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var B = 0; B < p.length; B += 1) {
                        var G = p[B];
                        t.roundLengths && (G = Math.floor(G)), p[B] <= e.virtualSize - i && E.push(G);
                    }
                    (p = E), 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
                }
                if ((0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? (s ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" })) : l.css({ marginBottom: g + "px" })), t.centerInsufficientSlides)) {
                    var N = 0;
                    if (
                        (u.forEach(function (e) {
                            N += e + (t.spaceBetween ? t.spaceBetween : 0);
                        }),
                            (N -= t.spaceBetween) < i)
                    ) {
                        var X = (i - N) / 2;
                        p.forEach(function (e, t) {
                            p[t] = e - X;
                        }),
                            c.forEach(function (e, t) {
                                c[t] = e + X;
                            });
                    }
                }
                V.extend(e, { slides: l, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }),
                    d !== o && e.emit("slidesLengthChange"),
                    p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                    c.length !== m && e.emit("slidesGridLengthChange"),
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
            }
        },
        updateAutoHeight: function (e) {
            var t,
                a = this,
                i = [],
                s = 0;
            if (("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView))
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length) break;
                    i.push(a.slides.eq(r)[0]);
                }
            else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s;
                }
            s && a.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            p = d + t.slidesSizesGrid[n];
                        ((0 <= d && d < t.size) || (0 < p && p <= t.size) || (d <= 0 && p >= t.size)) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
                    }
                    o.progress = s ? -l : l;
                }
                t.visibleSlides = L(t.visibleSlides);
            }
        },
        updateProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                s = t.progress,
                r = t.isBeginning,
                n = t.isEnd,
                o = r,
                l = n;
            0 === i ? (n = r = !(s = 0)) : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = 1 <= s)),
                V.extend(t, { progress: s, isBeginning: r, isEnd: n }),
                (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
                r && !o && t.emit("reachBeginning toEdge"),
                n && !l && t.emit("reachEnd toEdge"),
                ((o && !r) || (l && !n)) && t.emit("fromEdge"),
                t.emit("progress", s);
        },
        updateSlidesClasses: function () {
            var e,
                t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass),
                i.loop &&
                (e.hasClass(i.slideDuplicateClass)
                    ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass)
                    : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e
                .nextAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e
                .prevAll("." + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                (l.hasClass(i.slideDuplicateClass)
                    ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                    : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                    d.hasClass(i.slideDuplicateClass)
                        ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                        : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
            var t,
                a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? (i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? (p = c) : i >= s[c] && i < s[c + 1] && (p = c + 1)) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
            }
            if (((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o)) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                V.extend(a, { snapIndex: t, realIndex: u, previousIndex: o, activeIndex: p }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange");
            } else t !== d && ((a.snapIndex = t), a.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
            var t = this,
                a = t.params,
                i = L(e.target).closest("." + a.slideClass)[0],
                s = !1;
            if (i) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
                t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = L(i).index()),
                a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        },
    };
    var d = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                a = this.rtlTranslate,
                i = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = V.getTranslate(s[0], e);
            return a && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.progress,
                o = 0,
                l = 0;
            a.isHorizontal() ? (o = i ? -e : e) : (l = e),
                s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                s.virtualTranslate || (R.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
                (a.previousTranslate = a.translate),
                (a.translate = a.isHorizontal() ? o : l);
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function () {
            return -this.snapGrid[0];
        },
        maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
    };
    var p = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if ((n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r)) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
            }
        },
        transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex;
            (a.animating = !1), a.setTransition(0);
            var r = t;
            if ((r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s)) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
            }
        },
    };
    var c = {
        slideTo: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this,
                r = e;
            r < 0 && (r = 0);
            var n = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                d = s.previousIndex,
                p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h,
                v = -o[u];
            if ((s.updateProgress(v), n.normalizeSlideIndex)) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1;
            }
            return (
                (h = p < r ? "next" : r < p ? "prev" : "reset"),
                (c && -v === s.translate) || (!c && v === s.translate)
                    ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1)
                    : (0 !== t && R.transition
                        ? (s.setTransition(t),
                            s.setTranslate(v),
                            s.updateActiveIndex(r),
                            s.updateSlidesClasses(),
                            s.emit("beforeTransitionStart", t, i),
                            s.transitionStart(a, h),
                            s.animating ||
                            ((s.animating = !0),
                                s.onSlideToWrapperTransitionEnd ||
                                (s.onSlideToWrapperTransitionEnd = function (e) {
                                    s &&
                                        !s.destroyed &&
                                        e.target === this &&
                                        (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                            s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                                            (s.onSlideToWrapperTransitionEnd = null),
                                            delete s.onSlideToWrapperTransitionEnd,
                                            s.transitionEnd(a, h));
                                }),
                                s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)))
                        : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)),
                        !0)
            );
        },
        slideToLoop: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
        },
        slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating;
            return s.loop ? !r && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
        },
        slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var p,
                c = d(l ? i.translate : -i.translate),
                u = n.map(function (e) {
                    return d(e);
                }),
                h =
                    (o.map(function (e) {
                        return d(e);
                    }),
                        n[u.indexOf(c)],
                        n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
        },
        slideReset: function (e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
        },
        slideToClosest: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.activeIndex,
                r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
            }
            return i.slideTo(s, e, t, a);
        },
        slideToClickedSlide: function () {
            var e,
                t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                (e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                    a.centeredSlides
                        ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2
                            ? (t.loopFix(),
                                (r = i
                                    .children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")")
                                    .eq(0)
                                    .index()),
                                V.nextTick(function () {
                                    t.slideTo(r);
                                }))
                            : t.slideTo(r)
                        : r > t.slides.length - s
                            ? (t.loopFix(),
                                (r = i
                                    .children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")")
                                    .eq(0)
                                    .index()),
                                V.nextTick(function () {
                                    t.slideTo(r);
                                }))
                            : t.slideTo(r);
            } else t.slideTo(r);
        },
    };
    var u = {
        loopCreate: function () {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - (s.length % e.slidesPerGroup);
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n);
                    }
                    s = t.children("." + e.slideClass);
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length),
                (i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10)),
                (i.loopedSlides += e.loopAdditionalSlides),
                i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [],
                l = [];
            s.each(function (e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e);
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
        },
        loopFix: function () {
            var e,
                t = this,
                a = t.params,
                i = t.activeIndex,
                s = t.slides,
                r = t.loopedSlides,
                n = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
            var p = -l[i] - t.getTranslate();
            i < r
                ? ((e = s.length - 3 * r + i), (e += r), t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p))
                : (("auto" === a.slidesPerView && 2 * r <= i) || i >= s.length - r) && ((e = -s.length + i + r), (e += r), t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            (t.allowSlidePrev = n), (t.allowSlideNext = o);
        },
        loopDestroy: function () {
            var e = this.$wrapperEl,
                t = this.params,
                a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index");
        },
    };
    var h = {
        setGrabCursor: function (e) {
            if (!(R.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked))) {
                var t = this.el;
                (t.style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab");
            }
        },
        unsetGrabCursor: function () {
            R.touch || (this.params.watchOverflow && this.isLocked) || (this.el.style.cursor = "");
        },
    };
    var v = {
        appendSlide: function (e) {
            var t = this,
                a = t.$wrapperEl,
                i = t.params;
            if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
            else a.append(e);
            i.loop && t.loopCreate(), (i.observer && R.observer) || t.update();
        },
        prependSlide: function (e) {
            var t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                r = s + e.length;
            } else i.prepend(e);
            a.loop && t.loopCreate(), (a.observer && R.observer) || t.update(), t.slideTo(r, 0, !1);
        },
        addSlide: function (e, t) {
            var a = this,
                i = a.$wrapperEl,
                s = a.params,
                r = a.activeIndex;
            s.loop && ((r -= a.loopedSlides), a.loopDestroy(), (a.slides = i.children("." + s.slideClass)));
            var n = a.slides.length;
            if (e <= 0) a.prependSlide(t);
            else if (n <= e) a.appendSlide(t);
            else {
                for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                    var p = a.slides.eq(d);
                    p.remove(), l.unshift(p);
                }
                if ("object" == typeof t && "length" in t) {
                    for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                    o = e < r ? r + t.length : r;
                } else i.append(t);
                for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                s.loop && a.loopCreate(), (s.observer && R.observer) || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
            }
        },
        removeSlide: function (e) {
            var t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = t.activeIndex;
            a.loop && ((s -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children("." + a.slideClass)));
            var r,
                n = s;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) (r = e[o]), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                n = Math.max(n, 0);
            } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), (n = Math.max(n, 0));
            a.loop && t.loopCreate(), (a.observer && R.observer) || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
        },
        removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e);
        },
    },
        m = (function () {
            var e = Y.navigator.userAgent,
                t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: Y.cordova || Y.phonegap, phonegap: Y.cordova || Y.phonegap },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
                (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
                    i && !a && ((t.os = "android"), (t.osVersion = i[2]), (t.android = !0), (t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome"))),
                    (s || n || r) && ((t.os = "ios"), (t.ios = !0)),
                    n && !r && ((t.osVersion = n[2].replace(/_/g, ".")), (t.iphone = !0)),
                    s && ((t.osVersion = s[2].replace(/_/g, ".")), (t.ipad = !0)),
                    r && ((t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null), (t.iphone = !0)),
                    t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
                    (t.desktop = !(t.os || t.android || t.webView)),
                    (t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                    t.os && "ios" === t.os)
            ) {
                var o = t.osVersion.split("."),
                    l = f.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
            }
            return (t.pixelRatio = Y.devicePixelRatio || 1), t;
        })();
    function g() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            (e.allowSlidePrev = s), (e.allowSlideNext = i), e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
    }
    var b = {
        attachEvents: function () {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl;
            (e.onTouchStart = function (e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var r = e;
                    if (
                        (r.originalEvent && (r = r.originalEvent),
                            (a.isTouchEvent = "touchstart" === r.type),
                            (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !((!a.isTouchEvent && "button" in r && 0 < r.button) || (a.isTouched && a.isMoved)))
                    )
                        if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                        else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                            (s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX), (s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
                            var n = s.currentX,
                                o = s.currentY,
                                l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                                d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                            if (!l || !(n <= d || n >= Y.screen.width - d)) {
                                if (
                                    (V.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                        (s.startX = n),
                                        (s.startY = o),
                                        (a.touchStartTime = V.now()),
                                        (t.allowClick = !0),
                                        t.updateSize(),
                                        (t.swipeDirection = void 0),
                                        0 < i.threshold && (a.allowThresholdMove = !1),
                                        "touchstart" !== r.type)
                                ) {
                                    var p = !0;
                                    L(r.target).is(a.formElements) && (p = !1),
                                        f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(),
                                        p && t.allowTouchMove && i.touchStartPreventDefault && r.preventDefault();
                                }
                                t.emit("touchStart", r);
                            }
                        }
                }
            }.bind(e)),
                (e.onTouchMove = function (e) {
                    var t = this,
                        a = t.touchEventsData,
                        i = t.params,
                        s = t.touches,
                        r = t.rtlTranslate,
                        n = e;
                    if ((n.originalEvent && (n = n.originalEvent), a.isTouched)) {
                        if (!a.isTouchEvent || "mousemove" !== n.type) {
                            var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                                l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                            if (n.preventedByNestedSwiper) return (s.startX = o), void (s.startY = l);
                            if (!t.allowTouchMove) return (t.allowClick = !1), void (a.isTouched && (V.extend(s, { startX: o, startY: l, currentX: o, currentY: l }), (a.touchStartTime = V.now())));
                            if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                                if (t.isVertical()) {
                                    if ((l < s.startY && t.translate <= t.maxTranslate()) || (l > s.startY && t.translate >= t.minTranslate())) return (a.isTouched = !1), void (a.isMoved = !1);
                                } else if ((o < s.startX && t.translate <= t.maxTranslate()) || (o > s.startX && t.translate >= t.minTranslate())) return;
                            if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return (a.isMoved = !0), void (t.allowClick = !1);
                            if ((a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length))) {
                                (s.currentX = o), (s.currentY = l);
                                var d,
                                    p = s.currentX - s.startX,
                                    c = s.currentY - s.startY;
                                if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                    if (
                                        (void 0 === a.isScrolling &&
                                            ((t.isHorizontal() && s.currentY === s.startY) || (t.isVertical() && s.currentX === s.startX)
                                                ? (a.isScrolling = !1)
                                                : 25 <= p * p + c * c && ((d = (180 * Math.atan2(Math.abs(c), Math.abs(p))) / Math.PI), (a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle))),
                                            a.isScrolling && t.emit("touchMoveOpposite", n),
                                            void 0 === a.startMoving && ((s.currentX === s.startX && s.currentY === s.startY) || (a.startMoving = !0)),
                                            a.isScrolling)
                                    )
                                        a.isTouched = !1;
                                    else if (a.startMoving) {
                                        (t.allowClick = !1),
                                            n.preventDefault(),
                                            i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                                            a.isMoved ||
                                            (i.loop && t.loopFix(),
                                                (a.startTranslate = t.getTranslate()),
                                                t.setTransition(0),
                                                t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                (a.allowMomentumBounce = !1),
                                                !i.grabCursor || (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) || t.setGrabCursor(!0),
                                                t.emit("sliderFirstMove", n)),
                                            t.emit("sliderMove", n),
                                            (a.isMoved = !0);
                                        var u = t.isHorizontal() ? p : c;
                                        (s.diff = u), (u *= i.touchRatio), r && (u = -u), (t.swipeDirection = 0 < u ? "prev" : "next"), (a.currentTranslate = u + a.startTranslate);
                                        var h = !0,
                                            v = i.resistanceRatio;
                                        if (
                                            (i.touchReleaseOnEdges && (v = 0),
                                                0 < u && a.currentTranslate > t.minTranslate()
                                                    ? ((h = !1), i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v)))
                                                    : u < 0 && a.currentTranslate < t.maxTranslate() && ((h = !1), i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))),
                                                h && (n.preventedByNestedSwiper = !0),
                                                !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                                                !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                                                0 < i.threshold)
                                        ) {
                                            if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                                            if (!a.allowThresholdMove)
                                                return (
                                                    (a.allowThresholdMove = !0),
                                                    (s.startX = s.currentX),
                                                    (s.startY = s.currentY),
                                                    (a.currentTranslate = a.startTranslate),
                                                    void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                                );
                                        }
                                        i.followFinger &&
                                            ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()),
                                                i.freeMode &&
                                                (0 === a.velocities.length && a.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: a.touchStartTime }),
                                                    a.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: V.now() })),
                                                t.updateProgress(a.currentTranslate),
                                                t.setTranslate(a.currentTranslate));
                                    }
                            }
                        }
                    } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
                }.bind(e)),
                (e.onTouchEnd = function (e) {
                    var t = this,
                        a = t.touchEventsData,
                        i = t.params,
                        s = t.touches,
                        r = t.rtlTranslate,
                        n = t.$wrapperEl,
                        o = t.slidesGrid,
                        l = t.snapGrid,
                        d = e;
                    if ((d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), (a.allowTouchCallbacks = !1), !a.isTouched))
                        return a.isMoved && i.grabCursor && t.setGrabCursor(!1), (a.isMoved = !1), void (a.startMoving = !1);
                    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var p,
                        c = V.now(),
                        u = c - a.touchStartTime;
                    if (
                        (t.allowClick &&
                            (t.updateClickedSlide(d),
                                t.emit("tap", d),
                                u < 300 &&
                                300 < c - a.lastClickTime &&
                                (a.clickTimeout && clearTimeout(a.clickTimeout),
                                    (a.clickTimeout = V.nextTick(function () {
                                        t && !t.destroyed && t.emit("click", d);
                                    }, 300))),
                                u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))),
                            (a.lastClickTime = V.now()),
                            V.nextTick(function () {
                                t.destroyed || (t.allowClick = !0);
                            }),
                            !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                    )
                        return (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1);
                    if (((a.isTouched = !1), (a.isMoved = !1), (a.startMoving = !1), (p = i.followFinger ? (r ? t.translate : -t.translate) : -a.currentTranslate), i.freeMode)) {
                        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (i.freeModeMomentum) {
                            if (1 < a.velocities.length) {
                                var h = a.velocities.pop(),
                                    v = a.velocities.pop(),
                                    f = h.position - v.position,
                                    m = h.time - v.time;
                                (t.velocity = f / m), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < V.now() - h.time) && (t.velocity = 0);
                            } else t.velocity = 0;
                            (t.velocity *= i.freeModeMomentumVelocityRatio), (a.velocities.length = 0);
                            var g = 1e3 * i.freeModeMomentumRatio,
                                b = t.velocity * g,
                                w = t.translate + b;
                            r && (w = -w);
                            var y,
                                x,
                                T = !1,
                                E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                            if (w < t.maxTranslate())
                                i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), (y = t.maxTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (w = t.maxTranslate()),
                                    i.loop && i.centeredSlides && (x = !0);
                            else if (w > t.minTranslate())
                                i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), (y = t.minTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (w = t.minTranslate()),
                                    i.loop && i.centeredSlides && (x = !0);
                            else if (i.freeModeSticky) {
                                for (var S, C = 0; C < l.length; C += 1)
                                    if (l[C] > -w) {
                                        S = C;
                                        break;
                                    }
                                w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
                            }
                            if (
                                (x &&
                                    t.once("transitionEnd", function () {
                                        t.loopFix();
                                    }),
                                    0 !== t.velocity)
                            )
                                g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                            else if (i.freeModeSticky) return void t.slideToClosest();
                            i.freeModeMomentumBounce && T
                                ? (t.updateProgress(y),
                                    t.setTransition(g),
                                    t.setTranslate(w),
                                    t.transitionStart(!0, t.swipeDirection),
                                    (t.animating = !0),
                                    n.transitionEnd(function () {
                                        t &&
                                            !t.destroyed &&
                                            a.allowMomentumBounce &&
                                            (t.emit("momentumBounce"),
                                                t.setTransition(i.speed),
                                                t.setTranslate(y),
                                                n.transitionEnd(function () {
                                                    t && !t.destroyed && t.transitionEnd();
                                                }));
                                    }))
                                : t.velocity
                                    ? (t.updateProgress(w),
                                        t.setTransition(g),
                                        t.setTranslate(w),
                                        t.transitionStart(!0, t.swipeDirection),
                                        t.animating ||
                                        ((t.animating = !0),
                                            n.transitionEnd(function () {
                                                t && !t.destroyed && t.transitionEnd();
                                            })))
                                    : t.updateProgress(w),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses();
                        } else if (i.freeModeSticky) return void t.slideToClosest();
                        (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                    } else {
                        for (var M = 0, k = t.slidesSizesGrid[0], z = 0; z < o.length; z += i.slidesPerGroup)
                            void 0 !== o[z + i.slidesPerGroup] ? p >= o[z] && p < o[z + i.slidesPerGroup] && (k = o[(M = z) + i.slidesPerGroup] - o[z]) : p >= o[z] && ((M = z), (k = o[o.length - 1] - o[o.length - 2]));
                        var P = (p - o[M]) / k;
                        if (u > i.longSwipesMs) {
                            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)),
                                "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
                        } else {
                            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
                        }
                    }
                }.bind(e)),
                (e.onClick = function (e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
                }.bind(e));
            var r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)) {
                if (R.touch) {
                    var o = !("touchstart" !== a.start || !R.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                    r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, R.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(a.end, e.onTouchEnd, o);
                }
                ((t.simulateTouch && !m.ios && !m.android) || (t.simulateTouch && !R.touch && m.ios)) &&
                    (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
            } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0);
        },
        detachEvents: function () {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl,
                r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)) {
                if (R.touch) {
                    var o = !("onTouchStart" !== a.start || !R.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                    r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
                }
                ((t.simulateTouch && !m.ios && !m.android) || (t.simulateTouch && !R.touch && m.ios)) &&
                    (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
            } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g);
        },
    };
    var w,
        y = {
            setBreakpoint: function () {
                var e = this,
                    t = e.activeIndex,
                    a = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params,
                    r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : e.originalParams,
                            l = s.loop && o.slidesPerView !== s.slidesPerView;
                        V.extend(e.params, o),
                            V.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                            (e.currentBreakpoint = n),
                            l && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", o);
                    }
                }
            },
            getBreakpoint: function (e) {
                if (e) {
                    var t = !1,
                        a = [];
                    Object.keys(e).forEach(function (e) {
                        a.push(e);
                    }),
                        a.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10);
                        });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= Y.innerWidth && (t = s) : s >= Y.innerWidth && !t && (t = s);
                    }
                    return t || "max";
                }
            },
        },
        I = {
            isIE: !!Y.navigator.userAgent.match(/Trident/g) || !!Y.navigator.userAgent.match(/MSIE/g),
            isEdge: !!Y.navigator.userAgent.match(/Edge/g),
            isSafari: ((w = Y.navigator.userAgent.toLowerCase()), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent),
        };
    var x = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
    },
        T = {
            update: o,
            translate: d,
            transition: p,
            slide: c,
            loop: u,
            grabCursor: h,
            manipulation: v,
            events: b,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.isLocked;
                    (e.isLocked = 1 === e.snapGrid.length),
                        (e.allowSlideNext = !e.isLocked),
                        (e.allowSlidePrev = !e.isLocked),
                        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                        t && t !== e.isLocked && ((e.isEnd = !1), e.navigation.update());
                },
            },
            classes: {
                addClasses: function () {
                    var t = this.classNames,
                        a = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push(a.direction),
                        a.freeMode && s.push("free-mode"),
                        R.flexbox || s.push("no-flexbox"),
                        a.autoHeight && s.push("autoheight"),
                        e && s.push("rtl"),
                        1 < a.slidesPerColumn && s.push("multirow"),
                        m.android && s.push("android"),
                        m.ios && s.push("ios"),
                        (I.isIE || I.isEdge) && (R.pointerEvents || R.prefixedPointerEvents) && s.push("wp8-" + a.direction),
                        s.forEach(function (e) {
                            t.push(a.containerModifierClass + e);
                        }),
                        i.addClass(t.join(" "));
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "));
                },
            },
            images: {
                loadImage: function (e, t, a, i, s, r) {
                    var n;
                    function o() {
                        r && r();
                    }
                    e.complete && s ? o() : t ? (((n = new Y.Image()).onload = o), (n.onerror = o), i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
                },
                preloadImages: function () {
                    var e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
                    }
                },
            },
        },
        E = {},
        S = (function (u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? (s = a[0]) : ((t = (e = a)[0]), (s = e[1])),
                    s || (s = {}),
                    (s = V.extend({}, s)),
                    t && !s.el && (s.el = t),
                    u.call(this, s),
                    Object.keys(T).forEach(function (t) {
                        Object.keys(T[t]).forEach(function (e) {
                            h.prototype[e] || (h.prototype[e] = T[t][e]);
                        });
                    });
                var r = this;
                void 0 === r.modules && (r.modules = {}),
                    Object.keys(r.modules).forEach(function (e) {
                        var t = r.modules[e];
                        if (t.params) {
                            var a = Object.keys(t.params)[0],
                                i = t.params[a];
                            if ("object" != typeof i || null === i) return;
                            if (!(a in s && "enabled" in i)) return;
                            !0 === s[a] && (s[a] = { enabled: !0 }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = { enabled: !1 });
                        }
                    });
                var n = V.extend({}, x);
                r.useModulesParams(n), (r.params = V.extend({}, n, E, s)), (r.originalParams = V.extend({}, r.params)), (r.passedParams = V.extend({}, s));
                var o = (r.$ = L)(r.params.el);
                if ((t = o[0])) {
                    if (1 < o.length) {
                        var l = [];
                        return (
                            o.each(function (e, t) {
                                var a = V.extend({}, s, { el: t });
                                l.push(new h(a));
                            }),
                            l
                        );
                    }
                    (t.swiper = r), o.data("swiper", r);
                    var d,
                        p,
                        c = o.children("." + r.params.wrapperClass);
                    return (
                        V.extend(r, {
                            $el: o,
                            el: t,
                            $wrapperEl: c,
                            wrapperEl: c[0],
                            classNames: [],
                            slides: L(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === r.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === r.params.direction;
                            },
                            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                            rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                            wrongRTL: "-webkit-box" === c.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: r.params.allowSlideNext,
                            allowSlidePrev: r.params.allowSlidePrev,
                            touchEvents:
                                ((d = ["touchstart", "touchmove", "touchend"]),
                                    (p = ["mousedown", "mousemove", "mouseup"]),
                                    R.pointerEvents ? (p = ["pointerdown", "pointermove", "pointerup"]) : R.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                                    (r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }),
                                    (r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }),
                                    R.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: V.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: r.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        r.useModules(),
                        r.params.init && r.init(),
                        r
                    );
                }
            }
            u && (h.__proto__ = u);
            var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
            return (
                (((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
                    var e = this,
                        t = e.params,
                        a = e.slides,
                        i = e.slidesGrid,
                        s = e.size,
                        r = e.activeIndex,
                        n = 1;
                    if (t.centeredSlides) {
                        for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && ((n += 1), s < (l += a[d].swiperSlideSize) && (o = !0));
                        for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && ((n += 1), s < (l += a[p].swiperSlideSize) && (o = !0));
                    } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                    return n;
                }),
                (h.prototype.update = function () {
                    var a = this;
                    if (a && !a.destroyed) {
                        var e = a.snapGrid,
                            t = a.params;
                        t.breakpoints && a.setBreakpoint(),
                            a.updateSize(),
                            a.updateSlides(),
                            a.updateProgress(),
                            a.updateSlidesClasses(),
                            a.params.freeMode
                                ? (i(), a.params.autoHeight && a.updateAutoHeight())
                                : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
                            t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
                            a.emit("update");
                    }
                    function i() {
                        var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                        a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
                    }
                }),
                (h.prototype.init = function () {
                    var e = this;
                    e.initialized ||
                        (e.emit("beforeInit"),
                            e.params.breakpoints && e.setBreakpoint(),
                            e.addClasses(),
                            e.params.loop && e.loopCreate(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.params.watchOverflow && e.checkOverflow(),
                            e.params.grabCursor && e.setGrabCursor(),
                            e.params.preloadImages && e.preloadImages(),
                            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                            e.attachEvents(),
                            (e.initialized = !0),
                            e.emit("init"));
                }),
                (h.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a = this,
                        i = a.params,
                        s = a.$el,
                        r = a.$wrapperEl,
                        n = a.slides;
                    return (
                        void 0 === a.params ||
                        a.destroyed ||
                        (a.emit("beforeDestroy"),
                            (a.initialized = !1),
                            a.detachEvents(),
                            i.loop && a.loopDestroy(),
                            t &&
                            (a.removeClasses(),
                                s.removeAttr("style"),
                                r.removeAttr("style"),
                                n &&
                                n.length &&
                                n
                                    .removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" "))
                                    .removeAttr("style")
                                    .removeAttr("data-swiper-slide-index")
                                    .removeAttr("data-swiper-column")
                                    .removeAttr("data-swiper-row")),
                            a.emit("destroy"),
                            Object.keys(a.eventsListeners).forEach(function (e) {
                                a.off(e);
                            }),
                            !1 !== e && ((a.$el[0].swiper = null), a.$el.data("swiper", null), V.deleteProps(a)),
                            (a.destroyed = !0)),
                        null
                    );
                }),
                (h.extendDefaults = function (e) {
                    V.extend(E, e);
                }),
                (e.extendedDefaults.get = function () {
                    return E;
                }),
                (e.defaults.get = function () {
                    return x;
                }),
                (e.Class.get = function () {
                    return u;
                }),
                (e.$.get = function () {
                    return L;
                }),
                Object.defineProperties(h, e),
                h
            );
        })(s),
        C = { name: "device", proto: { device: m }, static: { device: m } },
        M = { name: "support", proto: { support: R }, static: { support: R } },
        k = { name: "browser", proto: { browser: I }, static: { browser: I } },
        z = {
            name: "resize",
            create: function () {
                var e = this;
                V.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function () {
                    Y.addEventListener("resize", this.resize.resizeHandler), Y.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                },
                destroy: function () {
                    Y.removeEventListener("resize", this.resize.resizeHandler), Y.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                },
            },
        },
        P = {
            func: Y.MutationObserver || Y.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new P.func(function (e) {
                        if (1 !== e.length) {
                            var t = function () {
                                a.emit("observerUpdate", e[0]);
                            };
                            Y.requestAnimationFrame ? Y.requestAnimationFrame(t) : Y.setTimeout(t, 0);
                        } else a.emit("observerUpdate", e[0]);
                    });
                i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i);
            },
            init: function () {
                var e = this;
                if (R.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (this.observer.observers = []);
            },
        },
        $ = {
            name: "observer",
            params: { observer: !1, observeParents: !1 },
            create: function () {
                V.extend(this, { observer: { init: P.init.bind(this), attach: P.attach.bind(this), destroy: P.destroy.bind(this), observers: [] } });
            },
            on: {
                init: function () {
                    this.observer.init();
                },
                destroy: function () {
                    this.observer.destroy();
                },
            },
        },
        D = {
            update: function (e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m,
                    g,
                    b,
                    w = t.activeIndex || 0;
                (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"), r ? ((g = Math.floor(i / 2) + s + o), (b = Math.floor(i / 2) + s + l)) : ((g = i + (s - 1) + o), (b = s + l));
                var y = Math.max((w || 0) - b, 0),
                    x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                }
                if ((V.extend(t.virtual, { from: y, to: x, offset: T, slidesGrid: t.slidesGrid }), p === y && c === x && !e)) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal)
                    return (
                        t.params.virtual.renderExternal.call(t, {
                            offset: T,
                            from: y,
                            to: x,
                            slides: (function () {
                                for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                                return e;
                            })(),
                        }),
                        void E()
                    );
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else for (var M = p; M <= c; M += 1) (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
                C.forEach(function (e) {
                    t.$wrapperEl.append(v(u[e], e));
                }),
                    S.sort(function (e, t) {
                        return e < t;
                    }).forEach(function (e) {
                        t.$wrapperEl.prepend(v(u[e], e));
                    }),
                    t.$wrapperEl.children(".swiper-slide").css(m, T + "px"),
                    E();
            },
            renderSlide: function (e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
            },
            appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0);
            },
            prependSlide: function (e) {
                var t = this;
                if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e];
                    }),
                        (t.virtual.cache = i);
                }
                t.virtual.update(!0), t.slideNext(0);
            },
        },
        O = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
            create: function () {
                var e = this;
                V.extend(e, { virtual: { update: D.update.bind(e), appendSlide: D.appendSlide.bind(e), prependSlide: D.prependSlide.bind(e), renderSlide: D.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = { watchSlidesProgress: !0 };
                        V.extend(e.params, t), V.extend(e.originalParams, t), e.virtual.update();
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update();
                },
            },
        },
        A = {
            handle: function (e) {
                var t = this,
                    a = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && ((t.isHorizontal() && 39 === s) || (t.isVertical() && 40 === s))) return !1;
                if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === s) || (t.isVertical() && 38 === s))) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || (f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase())))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = Y.innerWidth,
                            o = Y.innerHeight,
                            l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (
                            var d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height],
                            ],
                            p = 0;
                            p < d.length;
                            p += 1
                        ) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
                        }
                        if (!r) return;
                    }
                    t.isHorizontal()
                        ? ((37 !== s && 39 !== s) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), ((39 === s && !a) || (37 === s && a)) && t.slideNext(), ((37 === s && !a) || (39 === s && a)) && t.slidePrev())
                        : ((38 !== s && 40 !== s) || (i.preventDefault ? i.preventDefault() : (i.returnValue = !1)), 40 === s && t.slideNext(), 38 === s && t.slidePrev()),
                        t.emit("keyPress", s);
                }
            },
            enable: function () {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
            },
            disable: function () {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
            },
        },
        H = {
            name: "keyboard",
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create: function () {
                V.extend(this, { keyboard: { enabled: !1, enable: A.enable.bind(this), disable: A.disable.bind(this), handle: A.handle.bind(this) } });
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable();
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable();
                },
            },
        };
    var B = {
        lastScrollTime: V.now(),
        event:
            -1 < Y.navigator.userAgent.indexOf("firefox")
                ? "DOMMouseScroll"
                : (function () {
                    var e = "onwheel",
                        t = e in f;
                    if (!t) {
                        var a = f.createElement("div");
                        a.setAttribute(e, "return;"), (t = "function" == typeof a[e]);
                    }
                    return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t;
                })()
                    ? "wheel"
                    : "mousewheel",
        normalize: function (e) {
            var t = 0,
                a = 0,
                i = 0,
                s = 0;
            return (
                "detail" in e && (a = e.detail),
                "wheelDelta" in e && (a = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
                (i = 10 * t),
                (s = 10 * a),
                "deltaY" in e && (s = e.deltaY),
                "deltaX" in e && (i = e.deltaX),
                (i || s) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (s *= 40)) : ((i *= 800), (s *= 800))),
                i && !t && (t = i < 1 ? -1 : 1),
                s && !a && (a = s < 1 ? -1 : 1),
                { spinX: t, spinY: a, pixelX: i, pixelY: s }
            );
        },
        handleMouseEnter: function () {
            this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
            this.mouseEntered = !1;
        },
        handle: function (e) {
            var t = e,
                a = this,
                i = a.params.mousewheel;
            if (!a.mouseEntered && !i.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0,
                r = a.rtlTranslate ? -1 : 1,
                n = B.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                    s = n.pixelX * r;
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                    s = n.pixelY;
                }
            else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s) return !0;
            if ((i.invert && (s = -s), a.params.freeMode)) {
                a.params.loop && a.loopFix();
                var o = a.getTranslate() + s * i.sensitivity,
                    l = a.isBeginning,
                    d = a.isEnd;
                if (
                    (o >= a.minTranslate() && (o = a.minTranslate()),
                        o <= a.maxTranslate() && (o = a.maxTranslate()),
                        a.setTransition(0),
                        a.setTranslate(o),
                        a.updateProgress(),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses(),
                        ((!l && a.isBeginning) || (!d && a.isEnd)) && a.updateSlidesClasses(),
                        a.params.freeModeSticky &&
                        (clearTimeout(a.mousewheel.timeout),
                            (a.mousewheel.timeout = V.nextTick(function () {
                                a.slideToClosest();
                            }, 300))),
                        a.emit("scroll", t),
                        a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                        o === a.minTranslate() || o === a.maxTranslate())
                )
                    return !0;
            } else {
                if (60 < V.now() - a.mousewheel.lastScrollTime)
                    if (s < 0)
                        if ((a.isEnd && !a.params.loop) || a.animating) {
                            if (i.releaseOnEdges) return !0;
                        } else a.slideNext(), a.emit("scroll", t);
                    else if ((a.isBeginning && !a.params.loop) || a.animating) {
                        if (i.releaseOnEdges) return !0;
                    } else a.slidePrev(), a.emit("scroll", t);
                a.mousewheel.lastScrollTime = new Y.Date().getTime();
            }
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
        },
        enable: function () {
            var e = this;
            if (!B.event) return !1;
            if (e.mousewheel.enabled) return !1;
            var t = e.$el;
            return (
                "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)),
                t.on("mouseenter", e.mousewheel.handleMouseEnter),
                t.on("mouseleave", e.mousewheel.handleMouseLeave),
                t.on(B.event, e.mousewheel.handle),
                (e.mousewheel.enabled = !0)
            );
        },
        disable: function () {
            var e = this;
            if (!B.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(B.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
        },
    },
        G = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                        i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
                }
            },
            init: function () {
                var e,
                    t,
                    a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) &&
                    (i.nextEl && ((e = L(i.nextEl)), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
                        i.prevEl && ((t = L(i.prevEl)), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
                        e &&
                        0 < e.length &&
                        e.on("click", function (e) {
                            e.preventDefault(), (a.isEnd && !a.params.loop) || a.slideNext();
                        }),
                        t &&
                        0 < t.length &&
                        t.on("click", function (e) {
                            e.preventDefault(), (a.isBeginning && !a.params.loop) || a.slidePrev();
                        }),
                        V.extend(a.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
            },
            destroy: function () {
                var e = this.navigation,
                    t = e.$nextEl,
                    a = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off("click"), a.removeClass(this.params.navigation.disabledClass));
            },
        },
        N = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r,
                        a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides),
                                n - 1 < r && (r -= n),
                                r < 0 && "bullets" !== e.params.paginationType && (r = n + r))
                            : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                            "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length)
                    ) {
                        var o,
                            l,
                            d,
                            p = e.pagination.bullets;
                        if (
                            (s.dynamicBullets &&
                                ((e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                    i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                                    1 < s.dynamicMainBullets &&
                                    void 0 !== e.previousIndex &&
                                    ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                                        e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                                    (o = r - e.pagination.dynamicBulletIndex),
                                    (d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2)),
                                p.removeClass(
                                    s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"
                                ),
                                1 < i.length)
                        )
                            p.each(function (e, t) {
                                var a = L(t),
                                    i = a.index();
                                i === r && a.addClass(s.bulletActiveClass),
                                    s.dynamicBullets &&
                                    (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"),
                                        i === o &&
                                        a
                                            .prev()
                                            .addClass(s.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(s.bulletActiveClass + "-prev-prev"),
                                        i === l &&
                                        a
                                            .next()
                                            .addClass(s.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(s.bulletActiveClass + "-next-next"));
                            });
                        else if ((p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets)) {
                            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                            c
                                .prev()
                                .addClass(s.bulletActiveClass + "-prev")
                                .prev()
                                .addClass(s.bulletActiveClass + "-prev-prev"),
                                u
                                    .next()
                                    .addClass(s.bulletActiveClass + "-next")
                                    .next()
                                    .addClass(s.bulletActiveClass + "-next-next");
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                m = t ? "right" : "left";
                            p.css(e.isHorizontal() ? m : "top", f + "px");
                        }
                    }
                    if (("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type)) {
                        var g;
                        g = s.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? (w = b) : (y = b),
                            i
                                .find("." + s.progressbarFillClass)
                                .transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")")
                                .transition(e.params.speed);
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]),
                        i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                            t.renderBullet ? (s += t.renderBullet.call(e, n, t.bulletClass)) : (s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                        i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
                    }
                    "fraction" === t.type && ((s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(s)),
                        "progressbar" === t.type && ((s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(s)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                }
            },
            init: function () {
                var a = this,
                    e = a.params.pagination;
                if (e.el) {
                    var t = L(e.el);
                    0 !== t.length &&
                        (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)),
                            "bullets" === e.type && e.clickable && t.addClass(e.clickableClass),
                            t.addClass(e.modifierClass + e.type),
                            "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), (a.pagination.dynamicBulletIndex = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                            "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass),
                            e.clickable &&
                            t.on("click", "." + e.bulletClass, function (e) {
                                e.preventDefault();
                                var t = L(this).index() * a.params.slidesPerGroup;
                                a.params.loop && (t += a.loopedSlides), a.slideTo(t);
                            }),
                            V.extend(a.pagination, { $el: t, el: t[0] }));
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
                }
            },
        },
        X = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? (0 < (p = -p) ? ((d = s - p), (p = 0)) : r < -p + s && (d = r + p)) : p < 0 ? ((d = s + p), (p = 0)) : r < p + s && (d = r - p),
                        e.isHorizontal()
                            ? (R.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), (n[0].style.width = d + "px"))
                            : (R.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), (n[0].style.height = d + "px")),
                        l.hide &&
                        (clearTimeout(e.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(function () {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    (a[0].style.width = ""), (a[0].style.height = "");
                    var s,
                        r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    (s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal() ? (a[0].style.width = s + "px") : (a[0].style.height = s + "px"),
                        (i[0].style.display = 1 <= n ? "none" : ""),
                        e.params.scrollbarHide && (i[0].style.opacity = 0),
                        V.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s }),
                        t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
                }
            },
            setDragPosition: function (e) {
                var t,
                    a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize;
                (t =
                    ((a.isHorizontal()
                        ? "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageY
                            : e.pageY || e.clientY) -
                        r.offset()[a.isHorizontal() ? "left" : "top"] -
                        n / 2) /
                    (o - n)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    s && (t = 1 - t);
                var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                (t.scrollbar.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    a.hide && r.css("opacity", 1),
                    t.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                        a.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                            (t.scrollbar.dragTimeout = V.nextTick(function () {
                                i.css("opacity", 0), i.transition(400);
                            }, 1e3))),
                        t.emit("scrollbarDragEnd", e),
                        a.snapOnRelease && t.slideToClosest());
            },
            enableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEvents,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!R.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                        o = !(!R.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };
                    R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)
                        ? (R.touch && (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)),
                            ((s.simulateTouch && !m.ios && !m.android) || (s.simulateTouch && !R.touch && m.ios)) &&
                            (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o)))
                        : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
                }
            },
            disableDraggable: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEvents,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!R.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
                        o = !(!R.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };
                    R.touch || (!R.pointerEvents && !R.prefixedPointerEvents)
                        ? (R.touch && (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)),
                            ((s.simulateTouch && !m.ios && !m.android) || (s.simulateTouch && !R.touch && m.ios)) &&
                            (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o)))
                        : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
                }
            },
            init: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = L(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && ((r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>')), s.append(r)), V.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable();
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        F = {
            setTransform: function (e, t) {
                var a = this.rtl,
                    i = L(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (
                    (n || o ? ((n = n || "0"), (o = o || "0")) : this.isHorizontal() ? ((n = r), (o = "0")) : ((o = r), (n = "0")),
                        (n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px"),
                        (o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px"),
                        null != d)
                ) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p;
                }
                if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")");
                }
            },
            setTranslate: function () {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    i.parallax.setTransform(t, s);
                }),
                    t.each(function (e, t) {
                        var a = t.progress;
                        1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)),
                            (a = Math.min(Math.max(a, -1), 1)),
                            L(t)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                .each(function (e, t) {
                                    i.parallax.setTransform(t, a);
                                });
                    });
            },
            setTransition: function (s) {
                void 0 === s && (s = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    var a = L(t),
                        i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (i = 0), a.transition(i);
                });
            },
        },
        q = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
            },
            onGestureStart: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !R.gestures)) {
                    if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureTouched = !0), (s.scaleStart = q.getDistanceBetweenTouches(e));
                }
                (s.$slideEl && s.$slideEl.length) ||
                    ((s.$slideEl = L(e.target).closest(".swiper-slide")),
                        0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)),
                        (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
                        (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass)),
                        (s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                        0 !== s.$imageWrapEl.length)
                    ? (s.$imageEl.transition(0), (t.zoom.isScaling = !0))
                    : (s.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!R.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (a.fakeGestureMoved = !0), (i.scaleMove = q.getDistanceBetweenTouches(e));
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    (R.gestures ? (this.zoom.scale = e.scale * a.currentScale) : (a.scale = (i.scaleMove / i.scaleStart) * a.currentScale),
                        a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)),
                        a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)),
                        i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
            },
            onGestureEnd: function (e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!R.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !m.android)) return;
                    (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
                }
                i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio)),
                        i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                        (a.currentScale = a.scale),
                        (a.isScaling = !1),
                        1 === a.scale && (i.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl &&
                    0 !== a.$imageEl.length &&
                    (i.isTouched ||
                        (m.android && e.preventDefault(),
                            (i.isTouched = !0),
                            (i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && ((t.allowClick = !1), s.isTouched && i.$slideEl)) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                            (s.height = i.$imageEl[0].offsetHeight),
                            (s.startX = V.getTranslate(i.$imageWrapEl[0], "x") || 0),
                            (s.startY = V.getTranslate(i.$imageWrapEl[0], "y") || 0),
                            (i.slideWidth = i.$slideEl[0].offsetWidth),
                            (i.slideHeight = i.$slideEl[0].offsetHeight),
                            i.$imageWrapEl.transition(0),
                            t.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                                (s.maxX = -s.minX),
                                (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                                (s.maxY = -s.minY),
                                (s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                                (s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                                !s.isMoved && !a.isScaling)
                        ) {
                            if (t.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)))
                                return void (s.isTouched = !1);
                            if (!t.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))
                                return void (s.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            (r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                            (r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                            Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                            Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                            (r.prevPositionX = s.touchesCurrent.x),
                            (r.prevPositionY = s.touchesCurrent.y),
                            (r.prevTime = Date.now()),
                            i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    (a.currentX = o), (a.currentY = d);
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                        (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                        t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl &&
                    this.previousIndex !== this.activeIndex &&
                    (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), (t.$slideEl = void 0), (t.$imageEl = void 0), (t.$imageWrapEl = void 0), (e.scale = 1), (e.currentScale = 1));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (e) {
                var t,
                    a,
                    i,
                    s,
                    r,
                    n,
                    o,
                    l,
                    d,
                    p,
                    c,
                    u,
                    h,
                    v,
                    f,
                    m,
                    g = this,
                    b = g.zoom,
                    w = g.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || ((y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex)), (y.$imageEl = y.$slideEl.find("img, svg, canvas")), (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
                    y.$imageEl && 0 !== y.$imageEl.length) &&
                    (y.$slideEl.addClass("" + w.zoomedSlideClass),
                        void 0 === x.touchesStart.x && e
                            ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX), (a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
                            : ((t = x.touchesStart.x), (a = x.touchesStart.y)),
                        (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                        (b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
                        e
                            ? ((f = y.$slideEl[0].offsetWidth),
                                (m = y.$slideEl[0].offsetHeight),
                                (i = y.$slideEl.offset().left + f / 2 - t),
                                (s = y.$slideEl.offset().top + m / 2 - a),
                                (o = y.$imageEl[0].offsetWidth),
                                (l = y.$imageEl[0].offsetHeight),
                                (d = o * b.scale),
                                (p = l * b.scale),
                                (h = -(c = Math.min(f / 2 - d / 2, 0))),
                                (v = -(u = Math.min(m / 2 - p / 2, 0))),
                                (r = i * b.scale) < c && (r = c),
                                h < r && (r = h),
                                (n = s * b.scale) < u && (n = u),
                                v < n && (n = v))
                            : (n = r = 0),
                        y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"),
                        y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
            },
            out: function () {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || ((i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex)), (i.$imageEl = i.$slideEl.find("img, svg, canvas")), (i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass))),
                    i.$imageEl &&
                    0 !== i.$imageEl.length &&
                    ((t.scale = 1),
                        (t.currentScale = 1),
                        i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        i.$slideEl.removeClass("" + a.zoomedSlideClass),
                        (i.$slideEl = void 0));
            },
            enable: function () {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                    R.gestures
                        ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a))
                        : "touchstart" === e.touchEvents.start &&
                        (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                            e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                            e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                        e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
                }
            },
            disable: function () {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };
                    R.gestures
                        ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a))
                        : "touchstart" === e.touchEvents.start &&
                        (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a),
                            e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a),
                            e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)),
                        e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
                }
            },
        },
        W = {
            loadInSlide: function (e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    p = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                        t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                    !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])),
                        0 !== t.length &&
                        t.each(function (e, t) {
                            var i = L(t);
                            i.addClass(p.loadingClass);
                            var s = i.attr("data-background"),
                                r = i.attr("data-src"),
                                n = i.attr("data-srcset"),
                                o = i.attr("data-sizes");
                            d.loadImage(i[0], r || s, n, o, !1, function () {
                                if (null != d && d && (!d || d.params) && !d.destroyed) {
                                    if (
                                        (s
                                            ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background"))
                                            : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))),
                                            i.addClass(p.loadedClass).removeClass(p.loadingClass),
                                            c.find("." + p.preloaderClass).remove(),
                                            d.params.loop && l)
                                    ) {
                                        var e = c.attr("data-swiper-slide-index");
                                        if (c.hasClass(d.params.slideDuplicateClass)) {
                                            var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                            d.lazy.loadInSlide(t.index(), !1);
                                        } else {
                                            var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            d.lazy.loadInSlide(a.index(), !1);
                                        }
                                    }
                                    d.emit("lazyImageReady", c[0], i[0]);
                                }
                            }),
                                d.emit("lazyImageLoad", c[0], i[0]);
                        });
                }
            },
            load: function () {
                var i = this,
                    t = i.$wrapperEl,
                    a = i.params,
                    s = i.slides,
                    e = i.activeIndex,
                    r = i.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;
                function l(e) {
                    if (r) {
                        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                    } else if (s[e]) return !0;
                    return !1;
                }
                function d(e) {
                    return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
                }
                if (("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility))
                    t.children("." + a.slideVisibleClass).each(function (e, t) {
                        var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                        i.lazy.loadInSlide(a);
                    });
                else if (1 < o) for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
                else i.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (1 < o || (n.loadPrevNextAmount && 1 < n.loadPrevNextAmount)) {
                        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m);
                    } else {
                        var g = t.children("." + a.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(d(g));
                        var b = t.children("." + a.slidePrevClass);
                        0 < b.length && i.lazy.loadInSlide(d(b));
                    }
            },
        },
        j = {
            LinearSpline: function (e, t) {
                var a,
                    i,
                    s,
                    r,
                    n,
                    o = function (e, t) {
                        for (i = -1, a = e.length; 1 < a - i;) e[(s = (a + i) >> 1)] <= t ? (i = s) : (a = s);
                        return a;
                    };
                return (
                    (this.x = e),
                    (this.y = t),
                    (this.lastIndex = e.length - 1),
                    (this.interpolate = function (e) {
                        return e ? ((n = o(this.x, e)), (r = n - 1), ((e - this.x[r]) * (this.y[n] - this.y[r])) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                var a,
                    i,
                    s = this,
                    r = s.controller.control;
                function n(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), (i = -s.controller.spline.interpolate(-t))),
                        (i && "container" !== s.params.controller.by) || ((a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate())), (i = (t - s.minTranslate()) * a + e.minTranslate())),
                        s.params.controller.inverse && (i = e.maxTranslate() - i),
                        e.updateProgress(i),
                        e.setTranslate(i, s),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
                else r instanceof S && t !== r && n(r);
            },
            setTransition: function (t, e) {
                var a,
                    i = this,
                    s = i.controller.control;
                function r(e) {
                    e.setTransition(t, i),
                        0 !== t &&
                        (e.transitionStart(),
                            e.params.autoHeight &&
                            V.nextTick(function () {
                                e.updateAutoHeight();
                            }),
                            e.$wrapperEl.transitionEnd(function () {
                                s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
                            }));
                }
                if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
                else s instanceof S && e !== s && r(s);
            },
        },
        U = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (e) {
                var t = this,
                    a = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = L(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
                        t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
                        t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
                }
            },
            updatePagination: function () {
                var i = this,
                    s = i.params.a11y;
                i.pagination &&
                    i.params.pagination.clickable &&
                    i.pagination.bullets &&
                    i.pagination.bullets.length &&
                    i.pagination.bullets.each(function (e, t) {
                        var a = L(t);
                        i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
                    });
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t,
                    a,
                    i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
                    t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)),
                    a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
            },
            destroy: function () {
                var e,
                    t,
                    a = this;
                a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(),
                    a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
                    a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
                    e && e.off("keydown", a.a11y.onEnterKey),
                    t && t.off("keydown", a.a11y.onEnterKey),
                    a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey);
            },
        },
        K = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!Y.history || !Y.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    (t.initialized = !0),
                        (t.paths = K.getPathValues()),
                        (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Y.addEventListener("popstate", e.history.setHistoryPopState));
                }
            },
            destroy: function () {
                this.params.history.replaceState || Y.removeEventListener("popstate", this.history.setHistoryPopState);
            },
            setHistoryPopState: function () {
                (this.history.paths = K.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
            },
            getPathValues: function () {
                var e = Y.location.pathname
                    .slice(1)
                    .split("/")
                    .filter(function (e) {
                        return "" !== e;
                    }),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory: function (e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var a = this.slides.eq(t),
                        i = K.slugify(a.attr("data-history"));
                    Y.location.pathname.includes(e) || (i = e + "/" + i);
                    var s = Y.history.state;
                    (s && s.value === i) || (this.params.history.replaceState ? Y.history.replaceState({ value: i }, null, i) : Y.history.pushState({ value: i }, null, i));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (K.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a);
                        }
                    }
                else i.slideTo(0, e, a);
            },
        },
        _ = {
            onHashCange: function () {
                var e = this,
                    t = f.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === a) return;
                    e.slideTo(a);
                }
            },
            setHash: function () {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && Y.history && Y.history.replaceState) Y.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        f.location.hash = a || "";
                    }
            },
            init: function () {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled))) {
                    e.hashNavigation.initialized = !0;
                    var t = f.location.hash.replace("#", "");
                    if (t)
                        for (var a = 0, i = e.slides.length; a < i; a += 1) {
                            var s = e.slides.eq(a);
                            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                                var r = s.index();
                                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
                            }
                        }
                    e.params.hashNavigation.watchState && L(Y).on("hashchange", e.hashNavigation.onHashCange);
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && L(Y).off("hashchange", this.hashNavigation.onHashCange);
            },
        },
        Z = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    (e.autoplay.timeout = V.nextTick(function () {
                        e.params.autoplay.reverseDirection
                            ? e.params.loop
                                ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isBeginning
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.params.loop
                                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isEnd
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                                    : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                    }, a));
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                            (t.autoplay.paused = !0),
                            0 !== e && t.params.autoplay.waitForTransition
                                ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd))
                                : ((t.autoplay.paused = !1), t.autoplay.run())));
            },
        },
        Q = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || ((r = s), (s = 0));
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if ((t.transition(e), a.params.virtualTranslate && 0 !== e)) {
                    var s = !1;
                    t.transitionEnd(function () {
                        if (!s && a && !a.destroyed) {
                            (s = !0), (a.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t]);
                        }
                    });
                }
            },
        },
        J = {
            setTranslate: function () {
                var e,
                    t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.params.cubeEffect,
                    p = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    u = 0;
                d.shadow &&
                    (p
                        ? (0 === (e = i.find(".swiper-cube-shadow")).length && ((e = L('<div class="swiper-cube-shadow"></div>')), i.append(e)), e.css({ height: r + "px" }))
                        : 0 === (e = a.find(".swiper-cube-shadow")).length && ((e = L('<div class="swiper-cube-shadow"></div>')), a.append(e)));
                for (var h = 0; h < s.length; h += 1) {
                    var v = s.eq(h),
                        f = h;
                    c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && ((m = -m), (g = Math.floor(-m / 360)));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? ((w = 4 * -g * l), (x = 0)) : (f - 1) % 4 == 0 ? ((w = 0), (x = 4 * -g * l)) : (f - 2) % 4 == 0 ? ((w = l + 4 * g * l), (x = l)) : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
                        o && (w = -w),
                        p || ((y = w), (w = 0));
                    var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if ((b <= 1 && -1 < b && ((u = 90 * f + 90 * b), o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows)) {
                        var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && ((E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>')), v.append(E)),
                            0 === S.length && ((S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>')), v.append(S)),
                            E.length && (E[0].style.opacity = Math.max(-b, 0)),
                            S.length && (S[0].style.opacity = Math.max(b, 0));
                    }
                }
                if (
                    (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }),
                        d.shadow)
                )
                    if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            M = 1.5 - (Math.sin((2 * C * Math.PI) / 360) / 2 + Math.cos((2 * C * Math.PI) / 360) / 2),
                            k = d.shadowScale,
                            z = d.shadowScale / M,
                            P = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + z + ") translate3d(0px, " + (n / 2 + P) + "px, " + -n / 2 / z + "px) rotateX(-90deg)");
                    }
                var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)");
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
            },
        },
        ee = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if ((e.isHorizontal() ? a && (n = -n) : ((d = l), (o = -n), (n = l = 0)), (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length), e.params.flipEffect.slideShadows)) {
                        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && ((p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>')), s.append(p)),
                            0 === c.length && ((c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>')), s.append(c)),
                            p.length && (p[0].style.opacity = Math.max(-r, 0)),
                            c.length && (c[0].style.opacity = Math.max(r, 0));
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
                }
            },
            setTransition: function (e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if ((t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e)) {
                    var r = !1;
                    t.eq(i).transitionEnd(function () {
                        if (!r && a && !a.destroyed) {
                            (r = !0), (a.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t]);
                        }
                    });
                }
            },
        },
        te = {
            setTranslate: function () {
                for (
                    var e = this,
                    t = e.width,
                    a = e.height,
                    i = e.slides,
                    s = e.$wrapperEl,
                    r = e.slidesSizesGrid,
                    n = e.params.coverflowEffect,
                    o = e.isHorizontal(),
                    l = e.translate,
                    d = o ? t / 2 - l : a / 2 - l,
                    p = o ? n.rotate : -n.rotate,
                    c = n.depth,
                    u = 0,
                    h = i.length;
                    u < h;
                    u += 1
                ) {
                    var v = i.eq(u),
                        f = r[u],
                        m = ((d - v[0].swiperSlideOffset - f / 2) / f) * n.modifier,
                        g = o ? p * m : 0,
                        b = o ? 0 : p * m,
                        w = -c * Math.abs(m),
                        y = o ? 0 : n.stretch * m,
                        x = o ? n.stretch * m : 0;
                    Math.abs(x) < 0.001 && (x = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(b) < 0.001 && (b = 0);
                    var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                    if ((v.transform(T), (v[0].style.zIndex = 1 - Math.abs(Math.round(m))), n.slideShadows)) {
                        var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && ((E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>')), v.append(E)),
                            0 === S.length && ((S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>')), v.append(S)),
                            E.length && (E[0].style.opacity = 0 < m ? m : 0),
                            S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
                    }
                }
                (R.pointerEvents || R.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            },
        },
        ae = {
            init: function () {
                var e = this,
                    t = e.params.thumbs,
                    a = e.constructor;
                t.swiper instanceof a
                    ? ((e.thumbs.swiper = t.swiper), V.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), V.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                    : V.isObject(t.swiper) && ((e.thumbs.swiper = new a(V.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
                    e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                    e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
            },
            onThumbClick: function () {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex;
                    if (null != a) {
                        var i;
                        if (((i = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a), e.params.loop)) {
                            var s = e.activeIndex;
                            e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (s = e.activeIndex));
                            var r = e.slides
                                .eq(s)
                                .prevAll('[data-swiper-slide-index="' + i + '"]')
                                .eq(0)
                                .index(),
                                n = e.slides
                                    .eq(s)
                                    .nextAll('[data-swiper-slide-index="' + i + '"]')
                                    .eq(0)
                                    .index();
                            i = void 0 === r ? n : void 0 === n ? r : n - s < s - r ? n : r;
                        }
                        e.slideTo(i);
                    }
                }
            },
            update: function (e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                    if (t.realIndex !== a.realIndex) {
                        var s,
                            r = a.activeIndex;
                        if (a.params.loop) {
                            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft), (r = a.activeIndex));
                            var n = a.slides
                                .eq(r)
                                .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                .eq(0)
                                .index(),
                                o = a.slides
                                    .eq(r)
                                    .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                    .eq(0)
                                    .index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
                        } else s = t.realIndex;
                        a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? (s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1) : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0));
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if ((1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop))
                        for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                    else for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d);
                }
            },
        },
        ie = [
            C,
            M,
            k,
            z,
            $,
            O,
            H,
            {
                name: "mousewheel",
                params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                create: function () {
                    var e = this;
                    V.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: B.enable.bind(e),
                            disable: B.disable.bind(e),
                            handle: B.handle.bind(e),
                            handleMouseEnter: B.handleMouseEnter.bind(e),
                            handleMouseLeave: B.handleMouseLeave.bind(e),
                            lastScrollTime: V.now(),
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.mousewheel.enabled && this.mousewheel.enable();
                    },
                    destroy: function () {
                        this.mousewheel.enabled && this.mousewheel.disable();
                    },
                },
            },
            {
                name: "navigation",
                params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                create: function () {
                    V.extend(this, { navigation: { init: G.init.bind(this), update: G.update.bind(this), destroy: G.destroy.bind(this) } });
                },
                on: {
                    init: function () {
                        this.navigation.init(), this.navigation.update();
                    },
                    toEdge: function () {
                        this.navigation.update();
                    },
                    fromEdge: function () {
                        this.navigation.update();
                    },
                    destroy: function () {
                        this.navigation.destroy();
                    },
                    click: function (e) {
                        var t = this.navigation,
                            a = t.$nextEl,
                            i = t.$prevEl;
                        !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass));
                    },
                },
            },
            {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e;
                        },
                        formatFractionTotal: function (e) {
                            return e;
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock",
                    },
                },
                create: function () {
                    var e = this;
                    V.extend(e, { pagination: { init: N.init.bind(e), render: N.render.bind(e), update: N.update.bind(e), destroy: N.destroy.bind(e), dynamicBulletIndex: 0 } });
                },
                on: {
                    init: function () {
                        this.pagination.init(), this.pagination.render(), this.pagination.update();
                    },
                    activeIndexChange: function () {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
                    },
                    snapIndexChange: function () {
                        this.params.loop || this.pagination.update();
                    },
                    slidesLengthChange: function () {
                        this.params.loop && (this.pagination.render(), this.pagination.update());
                    },
                    snapGridLengthChange: function () {
                        this.params.loop || (this.pagination.render(), this.pagination.update());
                    },
                    destroy: function () {
                        this.pagination.destroy();
                    },
                    click: function (e) {
                        var t = this;
                        t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
                    },
                },
            },
            {
                name: "scrollbar",
                params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                create: function () {
                    var e = this;
                    V.extend(e, {
                        scrollbar: {
                            init: X.init.bind(e),
                            destroy: X.destroy.bind(e),
                            updateSize: X.updateSize.bind(e),
                            setTranslate: X.setTranslate.bind(e),
                            setTransition: X.setTransition.bind(e),
                            enableDraggable: X.enableDraggable.bind(e),
                            disableDraggable: X.disableDraggable.bind(e),
                            setDragPosition: X.setDragPosition.bind(e),
                            onDragStart: X.onDragStart.bind(e),
                            onDragMove: X.onDragMove.bind(e),
                            onDragEnd: X.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null,
                        },
                    });
                },
                on: {
                    init: function () {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                    },
                    update: function () {
                        this.scrollbar.updateSize();
                    },
                    resize: function () {
                        this.scrollbar.updateSize();
                    },
                    observerUpdate: function () {
                        this.scrollbar.updateSize();
                    },
                    setTranslate: function () {
                        this.scrollbar.setTranslate();
                    },
                    setTransition: function (e) {
                        this.scrollbar.setTransition(e);
                    },
                    destroy: function () {
                        this.scrollbar.destroy();
                    },
                },
            },
            {
                name: "parallax",
                params: { parallax: { enabled: !1 } },
                create: function () {
                    V.extend(this, { parallax: { setTransform: F.setTransform.bind(this), setTranslate: F.setTranslate.bind(this), setTransition: F.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        this.params.parallax.enabled && ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0));
                    },
                    init: function () {
                        this.params.parallax && this.parallax.setTranslate();
                    },
                    setTranslate: function () {
                        this.params.parallax && this.parallax.setTranslate();
                    },
                    setTransition: function (e) {
                        this.params.parallax && this.parallax.setTransition(e);
                    },
                },
            },
            {
                name: "zoom",
                params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                create: function () {
                    var t = this,
                        a = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                        a[e] = q[e].bind(t);
                    }),
                        V.extend(t, { zoom: a });
                },
                on: {
                    init: function () {
                        this.params.zoom.enabled && this.zoom.enable();
                    },
                    destroy: function () {
                        this.zoom.disable();
                    },
                    touchStart: function (e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e);
                    },
                    touchEnd: function (e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e);
                    },
                    doubleTap: function (e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
                    },
                    transitionEnd: function () {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                    },
                },
            },
            {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                },
                create: function () {
                    V.extend(this, { lazy: { initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                    },
                    init: function () {
                        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                    },
                    scroll: function () {
                        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                    },
                    resize: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    scrollbarDragMove: function () {
                        this.params.lazy.enabled && this.lazy.load();
                    },
                    transitionStart: function () {
                        var e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                    },
                    transitionEnd: function () {
                        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                    },
                },
            },
            {
                name: "controller",
                params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                create: function () {
                    var e = this;
                    V.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: j.getInterpolateFunction.bind(e), setTranslate: j.setTranslate.bind(e), setTransition: j.setTransition.bind(e) } });
                },
                on: {
                    update: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    resize: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    observerUpdate: function () {
                        this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                    },
                    setTranslate: function (e, t) {
                        this.controller.control && this.controller.setTranslate(e, t);
                    },
                    setTransition: function (e, t) {
                        this.controller.control && this.controller.setTransition(e, t);
                    },
                },
            },
            {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                    },
                },
                create: function () {
                    var t = this;
                    V.extend(t, { a11y: { liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                        Object.keys(U).forEach(function (e) {
                            t.a11y[e] = U[e].bind(t);
                        });
                },
                on: {
                    init: function () {
                        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                    },
                    toEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    fromEdge: function () {
                        this.params.a11y.enabled && this.a11y.updateNavigation();
                    },
                    paginationUpdate: function () {
                        this.params.a11y.enabled && this.a11y.updatePagination();
                    },
                    destroy: function () {
                        this.params.a11y.enabled && this.a11y.destroy();
                    },
                },
            },
            {
                name: "history",
                params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                create: function () {
                    var e = this;
                    V.extend(e, { history: { init: K.init.bind(e), setHistory: K.setHistory.bind(e), setHistoryPopState: K.setHistoryPopState.bind(e), scrollToSlide: K.scrollToSlide.bind(e), destroy: K.destroy.bind(e) } });
                },
                on: {
                    init: function () {
                        this.params.history.enabled && this.history.init();
                    },
                    destroy: function () {
                        this.params.history.enabled && this.history.destroy();
                    },
                    transitionEnd: function () {
                        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                    },
                },
            },
            {
                name: "hash-navigation",
                params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                create: function () {
                    var e = this;
                    V.extend(e, { hashNavigation: { initialized: !1, init: _.init.bind(e), destroy: _.destroy.bind(e), setHash: _.setHash.bind(e), onHashCange: _.onHashCange.bind(e) } });
                },
                on: {
                    init: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.init();
                    },
                    destroy: function () {
                        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                    },
                    transitionEnd: function () {
                        this.hashNavigation.initialized && this.hashNavigation.setHash();
                    },
                },
            },
            {
                name: "autoplay",
                params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                create: function () {
                    var t = this;
                    V.extend(t, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: Z.run.bind(t),
                            start: Z.start.bind(t),
                            stop: Z.stop.bind(t),
                            pause: Z.pause.bind(t),
                            onTransitionEnd: function (e) {
                                t &&
                                    !t.destroyed &&
                                    t.$wrapperEl &&
                                    e.target === this &&
                                    (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                                        (t.autoplay.paused = !1),
                                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                            },
                        },
                    });
                },
                on: {
                    init: function () {
                        this.params.autoplay.enabled && this.autoplay.start();
                    },
                    beforeTransitionStart: function (e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
                    },
                    sliderFirstMove: function () {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                    },
                    destroy: function () {
                        this.autoplay.running && this.autoplay.stop();
                    },
                },
            },
            {
                name: "effect-fade",
                params: { fadeEffect: { crossFade: !1 } },
                create: function () {
                    V.extend(this, { fadeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            V.extend(e.params, t), V.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function () {
                        "fade" === this.params.effect && this.fadeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-cube",
                params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                create: function () {
                    V.extend(this, { cubeEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                            V.extend(e.params, t), V.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function () {
                        "cube" === this.params.effect && this.cubeEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-flip",
                params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                create: function () {
                    V.extend(this, { flipEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                            V.extend(e.params, t), V.extend(e.originalParams, t);
                        }
                    },
                    setTranslate: function () {
                        "flip" === this.params.effect && this.flipEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "flip" === this.params.effect && this.flipEffect.setTransition(e);
                    },
                },
            },
            {
                name: "effect-coverflow",
                params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
                create: function () {
                    V.extend(this, { coverflowEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this;
                        "coverflow" === e.params.effect &&
                            (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                    },
                    setTranslate: function () {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                    },
                    setTransition: function (e) {
                        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                    },
                },
            },
            {
                name: "thumbs",
                params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                create: function () {
                    V.extend(this, { thumbs: { swiper: null, init: ae.init.bind(this), update: ae.update.bind(this), onThumbClick: ae.onThumbClick.bind(this) } });
                },
                on: {
                    beforeInit: function () {
                        var e = this.params.thumbs;
                        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                    },
                    slideChange: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    update: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    resize: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    observerUpdate: function () {
                        this.thumbs.swiper && this.thumbs.update();
                    },
                    setTransition: function (e) {
                        var t = this.thumbs.swiper;
                        t && t.setTransition(e);
                    },
                    beforeDestroy: function () {
                        var e = this.thumbs.swiper;
                        e && this.thumbs.swiperCreated && e && e.destroy();
                    },
                },
            },
        ];
    return void 0 === S.use && ((S.use = S.Class.use), (S.installModule = S.Class.installModule)), S.use(ie), S;
});
