(function() {
    var g = {};
    (function(window) {
        var k, aa = this;
        aa.jd = !0;

        function m(a, b) {
            var c = a.split("."),
                d = aa;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b }

        function ba(a) {
            var b = n;

            function c() {}
            c.prototype = b.prototype;
            a.qd = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.kd = function(a, c, f) {
                return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2)) } };
        /*

         Copyright 2016 Google Inc.

         Licensed under the Apache License, Version 2.0 (the "License");
         you may not use this file except in compliance with the License.
         You may obtain a copy of the License at

             http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing, software
         distributed under the License is distributed on an "AS IS" BASIS,
         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         See the License for the specific language governing permissions and
         limitations under the License.
        */
        function ca(a) { this.c = Math.exp(Math.log(.5) / a);
            this.b = this.a = 0 }

        function da(a, b, c) {
            var d = Math.pow(a.c, b);
            c = c * (1 - d) + d * a.a;
            isNaN(c) || (a.a = c, a.b += b) }

        function ea(a) {
            return a.a / (1 - Math.pow(a.c, a.b)) };

        function fa() { this.c = new ca(2);
            this.f = new ca(5);
            this.a = 0;
            this.b = 5E5 }
        fa.prototype.setDefaultEstimate = function(a) { this.b = a };
        fa.prototype.getBandwidthEstimate = function() {
            return 128E3 > this.a ? this.b : Math.min(ea(this.c), ea(this.f)) };

        function ga() {}

        function ha() {};

        function q() { this.g = null;
            this.f = !1;
            this.b = new fa;
            this.h = {};
            this.a = {};
            this.i = !1;
            this.c = null }
        m("shaka.abr.SimpleAbrManager", q);
        q.prototype.stop = function() { this.g = null;
            this.f = !1;
            this.h = {};
            this.a = {};
            this.c = null };
        q.prototype.stop = q.prototype.stop;
        q.prototype.init = function(a) { this.g = a };
        q.prototype.init = q.prototype.init;
        q.prototype.chooseStreams = function(a) {
            for (var b in a) this.h[b] = a[b];
            b = this.a.audio;
            var c = this.a.video,
                d = {}; "audio" in a && (b = ia(this)); "video" in a && ((c = ja(this, "video", b)) ? (d.video = c, this.a.video = c) : delete this.a.video); "audio" in a && ((b = ja(this, "audio", c)) ? (d.audio = b, this.a.audio = b) : delete this.a.audio); "text" in a && (d.text = a.text.streams[0]);
            this.c = Date.now();
            return d };
        q.prototype.chooseStreams = q.prototype.chooseStreams;
        q.prototype.enable = function() { this.f = !0 };
        q.prototype.enable = q.prototype.enable;
        q.prototype.disable = function() { this.f = !1 };
        q.prototype.disable = q.prototype.disable;
        q.prototype.segmentDownloaded = function(a, b) {
            var c = this.b;
            if (!(16E3 > b)) {
                var d = 8E3 * b / a,
                    e = a / 1E3;
                c.a += b;
                da(c.c, e, d);
                da(c.f, e, d) }
            if (null != this.c && this.f) a: {
                if (!this.i) {
                    if (!(128E3 <= this.b.a)) break a;
                    this.i = !0 } else if (8E3 > Date.now() - this.c) break a;c = {};d = ia(this);e = ja(this, "video", d);
                if (d = ja(this, "audio", e)) c.audio = d, this.a.audio = d;e && (c.video = e, this.a.video = e);this.c = Date.now();this.b.getBandwidthEstimate();this.g(c) } };
        q.prototype.segmentDownloaded = q.prototype.segmentDownloaded;
        q.prototype.getBandwidthEstimate = function() {
            return this.b.getBandwidthEstimate() };
        q.prototype.getBandwidthEstimate = q.prototype.getBandwidthEstimate;
        q.prototype.setDefaultEstimate = function(a) { this.b.setDefaultEstimate(a) };
        q.prototype.setDefaultEstimate = q.prototype.setDefaultEstimate;

        function ia(a) { a = a.h.audio;
            if (!a) return null;
            a = ka(a);
            return a[Math.floor(a.length / 2)] }

        function ja(a, b, c) { b = a.h[b];
            if (!b) return null;
            b = ka(b);
            c = c && c.bandwidth || 0;
            a = a.b.getBandwidthEstimate();
            for (var d = b[0], e = 0; e < b.length; ++e) {
                var f = b[e];
                if (f.bandwidth) {
                    var g = ((e + 1 < b.length ? b[e + 1] : { bandwidth: Infinity }).bandwidth + c) / .85;
                    a >= (f.bandwidth + c) / .95 && a <= g && (d = f) } }
            return d }

        function ka(a) {
            return a.streams.slice(0).filter(function(a) {
                return a.allowedByApplication && a.allowedByKeySystem }).sort(function(a, c) {
                return a.bandwidth - c.bandwidth }) };
        var la = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

        function ma(a) {
            var b;
            a instanceof ma ? (na(this, a.T), this.ka = a.ka, this.U = a.U, oa(this, a.xa), this.P = a.P, pa(this, qa(a.a)), this.da = a.da) : a && (b = String(a).match(la)) ? (na(this, b[1] || "", !0), this.ka = ra(b[2] || ""), this.U = ra(b[3] || "", !0), oa(this, b[4]), this.P = ra(b[5] || "", !0), pa(this, b[6] || "", !0), this.da = ra(b[7] || "")) : this.a = new sa(null) }
        k = ma.prototype;
        k.T = "";
        k.ka = "";
        k.U = "";
        k.xa = null;
        k.P = "";
        k.da = "";
        k.toString = function() {
            var a = [],
                b = this.T;
            b && a.push(ta(b, ua, !0), ":");
            if (b = this.U) { a.push("//");
                var c = this.ka;
                c && a.push(ta(c, ua, !0), "@");
                a.push(encodeURIComponent(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
                b = this.xa;
                null != b && a.push(":", String(b)) }
            if (b = this.P) this.U && "/" != b.charAt(0) && a.push("/"), a.push(ta(b, "/" == b.charAt(0) ? va : wa, !0));
            (b = this.a.toString()) && a.push("?", b);
            (b = this.da) && a.push("#", ta(b, xa));
            return a.join("") };
        k.resolve = function(a) {
            var b = new ma(this);
            "data" === b.T && (b = new ma);
            var c = !!a.T;
            c ? na(b, a.T) : c = !!a.ka;
            c ? b.ka = a.ka : c = !!a.U;
            c ? b.U = a.U : c = null != a.xa;
            var d = a.P;
            if (c) oa(b, a.xa);
            else if (c = !!a.P) {
                if ("/" != d.charAt(0))
                    if (this.U && !this.P) d = "/" + d;
                    else {
                        var e = b.P.lastIndexOf("/"); - 1 != e && (d = b.P.substr(0, e + 1) + d) }
                if (".." == d || "." == d) d = "";
                else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
                    for (var e = !d.lastIndexOf("/", 0), d = d.split("/"), f = [], g = 0; g < d.length;) {
                        var h = d[g++];
                        "." == h ? e && g == d.length && f.push("") : ".." == h ? ((1 < f.length ||
                            1 == f.length && "" != f[0]) && f.pop(), e && g == d.length && f.push("")) : (f.push(h), e = !0)
                    }
                    d = f.join("/")
                }
            }
            c ? b.P = d : c = "" !== a.a.toString();
            c ? pa(b, qa(a.a)) : c = !!a.da;
            c && (b.da = a.da);
            return b
        };

        function na(a, b, c) { a.T = c ? ra(b, !0) : b;
            a.T && (a.T = a.T.replace(/:$/, "")) }

        function oa(a, b) {
            if (b) { b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.xa = b } else a.xa = null }

        function pa(a, b, c) { b instanceof sa ? a.a = b : (c || (b = ta(b, ya)), a.a = new sa(b)) }

        function ra(a, b) {
            return a ? b ? decodeURI(a) : decodeURIComponent(a) : "" }

        function ta(a, b, c) {
            return "string" == typeof a ? (a = encodeURI(a).replace(b, za), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null }

        function za(a) { a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) }
        var ua = /[#\/\?@]/g,
            wa = /[\#\?:]/g,
            va = /[\#\?]/g,
            ya = /[\#\?@]/g,
            xa = /#/g;

        function sa(a) { this.b = a || null }
        sa.prototype.a = null;
        sa.prototype.c = null;
        sa.prototype.toString = function() {
            if (this.b) return this.b;
            if (!this.a) return "";
            var a = [],
                b;
            for (b in this.a)
                for (var c = encodeURIComponent(b), d = this.a[b], e = 0; e < d.length; e++) {
                    var f = c; "" !== d[e] && (f += "=" + encodeURIComponent(d[e]));
                    a.push(f) }
            return this.b = a.join("&") };

        function qa(a) {
            var b = new sa;
            b.b = a.b;
            if (a.a) {
                var c = {},
                    d;
                for (d in a.a) c[d] = a.a[d].concat();
                b.a = c;
                b.c = a.c }
            return b };

        function r(a, b, c) { this.category = a;
            this.code = b;
            this.data = Array.prototype.slice.call(arguments, 2) }
        m("shaka.util.Error", r);
        r.prototype.toString = function() {
            return "shaka.util.Error " + JSON.stringify(this, null, "  ") };
        r.Category = { NETWORK: 1, TEXT: 2, MEDIA: 3, MANIFEST: 4, STREAMING: 5, DRM: 6, PLAYER: 7, CAST: 8, STORAGE: 9 };
        r.Code = {
            UNSUPPORTED_SCHEME: 1E3,
            BAD_HTTP_STATUS: 1001,
            HTTP_ERROR: 1002,
            TIMEOUT: 1003,
            MALFORMED_DATA_URI: 1004,
            UNKNOWN_DATA_URI_ENCODING: 1005,
            INVALID_TEXT_HEADER: 2E3,
            INVALID_TEXT_CUE: 2001,
            UNABLE_TO_DETECT_ENCODING: 2003,
            BAD_ENCODING: 2004,
            INVALID_XML: 2005,
            INVALID_TTML: 2006,
            INVALID_MP4_TTML: 2007,
            INVALID_MP4_VTT: 2008,
            BUFFER_READ_OUT_OF_BOUNDS: 3E3,
            JS_INTEGER_OVERFLOW: 3001,
            EBML_OVERFLOW: 3002,
            EBML_BAD_FLOATING_POINT_SIZE: 3003,
            MP4_SIDX_WRONG_BOX_TYPE: 3004,
            MP4_SIDX_INVALID_TIMESCALE: 3005,
            MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
            WEBM_CUES_ELEMENT_MISSING: 3007,
            WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
            WEBM_SEGMENT_ELEMENT_MISSING: 3009,
            WEBM_INFO_ELEMENT_MISSING: 3010,
            WEBM_DURATION_ELEMENT_MISSING: 3011,
            WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
            WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
            MEDIA_SOURCE_OPERATION_FAILED: 3014,
            MEDIA_SOURCE_OPERATION_THREW: 3015,
            VIDEO_ERROR: 3016,
            QUOTA_EXCEEDED_ERROR: 3017,
            UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
            DASH_INVALID_XML: 4001,
            DASH_NO_SEGMENT_INFO: 4002,
            DASH_EMPTY_ADAPTATION_SET: 4003,
            DASH_EMPTY_PERIOD: 4004,
            DASH_WEBM_MISSING_INIT: 4005,
            DASH_UNSUPPORTED_CONTAINER: 4006,
            DASH_PSSH_BAD_ENCODING: 4007,
            DASH_NO_COMMON_KEY_SYSTEM: 4008,
            DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
            DASH_CONFLICTING_KEY_IDS: 4010,
            UNPLAYABLE_PERIOD: 4011,
            RESTRICTIONS_CANNOT_BE_MET: 4012,
            NO_PERIODS: 4014,
            INVALID_STREAMS_CHOSEN: 5005,
            NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
            REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
            FAILED_TO_CREATE_CDM: 6002,
            FAILED_TO_ATTACH_TO_VIDEO: 6003,
            INVALID_SERVER_CERTIFICATE: 6004,
            FAILED_TO_CREATE_SESSION: 6005,
            FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
            LICENSE_REQUEST_FAILED: 6007,
            LICENSE_RESPONSE_REJECTED: 6008,
            ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
            NO_LICENSE_SERVER_GIVEN: 6012,
            OFFLINE_SESSION_REMOVED: 6013,
            EXPIRED: 6014,
            LOAD_INTERRUPTED: 7E3,
            CAST_API_UNAVAILABLE: 8E3,
            NO_CAST_RECEIVERS: 8001,
            ALREADY_CASTING: 8002,
            UNEXPECTED_CAST_ERROR: 8003,
            CAST_CANCELED_BY_USER: 8004,
            CAST_CONNECTION_TIMED_OUT: 8005,
            CAST_RECEIVER_APP_UNAVAILABLE: 8006,
            INDEXED_DB_NOT_SUPPORTED: 9E3,
            INDEXED_DB_ERROR: 9001,
            OPERATION_ABORTED: 9002,
            REQUESTED_ITEM_NOT_FOUND: 9003,
            MALFORMED_OFFLINE_URI: 9004,
            CANNOT_STORE_LIVE_OFFLINE: 9005,
            STORE_ALREADY_IN_PROGRESS: 9006,
            NO_INIT_DATA_FOR_OFFLINE: 9007
        };

        function Aa(a, b) {
            return a.reduce(function(a, b, e) {
                return b["catch"](a.bind(null, e)) }.bind(null, b), Promise.reject()) }

        function v(a, b) {
            return a.concat(b) }

        function w() {}

        function Ba(a) {
            return null != a }

        function Ca(a) {
            return function(b) {
                return b != a } };

        function Da() {}
        m("shaka.util.IDestroyable", Da);
        Da.prototype.o = function() {};
        Da.prototype.destroy = Da.prototype.o;

        function y() {
            var a, b, c = new Promise(function(c, e) { a = c;
                b = e });
            c.resolve = a;
            c.reject = b;
            return c };

        function z(a) { this.f = !1;
            this.a = [];
            this.b = [];
            this.c = [];
            this.g = a || null }
        m("shaka.net.NetworkingEngine", z);
        z.RequestType = { MANIFEST: 0, SEGMENT: 1, LICENSE: 2 };
        var Ea = {};
        z.registerScheme = function(a, b) { Ea[a] = b };
        z.unregisterScheme = function(a) { delete Ea[a] };
        z.prototype.Dc = function(a) { this.b.push(a) };
        z.prototype.registerRequestFilter = z.prototype.Dc;
        z.prototype.dd = function(a) {
            var b = this.b;
            a = b.indexOf(a);
            0 <= a && b.splice(a, 1) };
        z.prototype.unregisterRequestFilter = z.prototype.dd;
        z.prototype.Qb = function() { this.b = [] };
        z.prototype.clearAllRequestFilters = z.prototype.Qb;
        z.prototype.Ab = function(a) { this.c.push(a) };
        z.prototype.registerResponseFilter = z.prototype.Ab;
        z.prototype.Kb = function(a) {
            var b = this.c;
            a = b.indexOf(a);
            0 <= a && b.splice(a, 1) };
        z.prototype.unregisterResponseFilter = z.prototype.Kb;
        z.prototype.Rb = function() { this.c = [] };
        z.prototype.clearAllResponseFilters = z.prototype.Rb;

        function Fa() {
            return { maxAttempts: 2, baseDelay: 1E3, backoffFactor: 2, fuzzFactor: .5, timeout: 0 } }

        function Ga(a, b) {
            return { uris: a, method: "GET", body: null, headers: {}, allowCrossSiteCredentials: !1, retryParameters: b } }
        z.prototype.o = function() { this.f = !0;
            this.b = [];
            this.c = [];
            for (var a = [], b = 0; b < this.a.length; ++b) a.push(this.a[b]["catch"](w));
            return Promise.all(a) };
        z.prototype.destroy = z.prototype.o;
        z.prototype.request = function(a, b) {
            if (this.f) return Promise.reject();
            for (var c = Date.now(), d = this.b, e = 0; e < d.length; e++) try { d[e](a, b) } catch (l) {
                return Promise.reject(l) }
            for (var c = Date.now() - c, e = b.retryParameters || {}, d = e.maxAttempts || 1, f = e.backoffFactor || 2, g = null == e.baseDelay ? 1E3 : e.baseDelay, h = this.h(a, b, 0, c), e = 1; e < d; e++) h = h["catch"](this.i.bind(this, a, b, g, e % b.uris.length, c)), g *= f;
            this.a.push(h);
            return h.then(function(b) {
                this.a.splice(this.a.indexOf(h), 1);
                this.g && 1 == a && this.g(b.timeMs, b.data.byteLength);
                return b
            }.bind(this))["catch"](function(a) { this.a.splice(this.a.indexOf(h), 1);
                return Promise.reject(a) }.bind(this))
        };
        z.prototype.request = z.prototype.request;
        z.prototype.h = function(a, b, c, d) {
            if (this.f) return Promise.reject();
            var e = new ma(b.uris[c]),
                f = e.T;
            f || (f = location.protocol, f = f.slice(0, -1), na(e, f), b.uris[c] = e.toString());
            f = Ea[f];
            if (!f) return Promise.reject(new r(1, 1E3, e));
            var g = Date.now();
            return f(b.uris[c], b).then(function(b) { void 0 === b.timeMs && (b.timeMs = Date.now() - g);
                for (var c = Date.now(), e = this.c, f = 0; f < e.length; f++) e[f](a, b);
                b.timeMs += Date.now() - c;
                b.timeMs += d;
                return b }.bind(this)) };
        z.prototype.i = function(a, b, c, d, e) {
            var f = new y,
                g = b.retryParameters || {};
            window.setTimeout(f.resolve, c * (1 + (2 * Math.random() - 1) * (null == g.fuzzFactor ? .5 : g.fuzzFactor)));
            return f.then(this.h.bind(this, a, b, d, e)) };

        function Ha(a, b, c) {
            for (var d = 0; d < a.length; ++d)
                if (c(a[d], b)) return d;
            return -1 };

        function Ia() { this.a = {} }
        k = Ia.prototype;
        k.push = function(a, b) { this.a.hasOwnProperty(a) ? this.a[a].push(b) : this.a[a] = [b] };
        k.set = function(a, b) { this.a[a] = b };
        k.has = function(a) {
            return this.a.hasOwnProperty(a) };
        k.get = function(a) {
            return (a = this.a[a]) ? a.slice() : null };
        k.remove = function(a, b) {
            var c = this.a[a];
            if (c)
                for (var d = 0; d < c.length; ++d) c[d] == b && (c.splice(d, 1), --d) };
        k.keys = function() {
            var a = [],
                b;
            for (b in this.a) a.push(b);
            return a };

        function A() { this.a = new Ia }
        A.prototype.o = function() { Ja(this);
            this.a = null;
            return Promise.resolve() };

        function B(a, b, c, d) { b = new Ka(b, c, d);
            a.a.push(c, b) }
        A.prototype.$ = function(a, b) {
            for (var c = this.a.get(b) || [], d = 0; d < c.length; ++d) {
                var e = c[d];
                e.target == a && (e.$(), this.a.remove(b, e)) } };

        function Ja(a) {
            var b = a.a,
                c = [],
                d;
            for (d in b.a) c.push.apply(c, b.a[d]);
            for (b = 0; b < c.length; ++b) c[b].$();
            a.a.a = {} }

        function Ka(a, b, c) { this.target = a;
            this.type = b;
            this.a = c;
            this.target.addEventListener(b, c, !1) }
        Ka.prototype.$ = function() { this.target && (this.target.removeEventListener(this.type, this.a, !1), this.a = this.target = null) };

        function La(a) {
            return !a || !Object.keys(a).length }

        function C(a) {
            return Object.keys(a).map(function(b) {
                return a[b] }) }

        function Ma(a, b) {
            return Object.keys(a).reduce(function(c, d) { c[d] = b(a[d], d);
                return c }, {}) }

        function Na(a, b) {
            return Object.keys(a).every(function(c) {
                return b(c, a[c]) }) };

        function D(a) {
            if (!a) return "";
            a = new Uint8Array(a);
            239 == a[0] && 187 == a[1] && 191 == a[2] && (a = a.subarray(3));
            a = escape(Oa(a));
            try {
                return decodeURIComponent(a) } catch (b) {
                throw new r(2, 2004); } }

        function Pa(a, b) {
            if (!a) return "";
            if (a.byteLength % 2) throw new r(2, 2004);
            var c;
            if (a instanceof ArrayBuffer) c = a;
            else {
                var d = new Uint8Array(a.byteLength);
                d.set(new Uint8Array(a));
                c = d.buffer }
            var d = a.byteLength / 2,
                e = new Uint16Array(d);
            c = new DataView(c);
            for (var f = 0; f < d; f++) e[f] = c.getUint16(2 * f, b);
            return Oa(e) }

        function Qa(a) {
            var b = new Uint8Array(a);
            if (239 == b[0] && 187 == b[1] && 191 == b[2]) return D(b);
            if (254 == b[0] && 255 == b[1]) return Pa(b.subarray(2), !1);
            if (255 == b[0] && 254 == b[1]) return Pa(b.subarray(2), !0);
            var c = function(a, b) {
                return a.byteLength <= b || 32 <= a[b] && 126 >= a[b] }.bind(null, b);
            if (b[0] || b[2]) {
                if (!b[1] && !b[3]) return Pa(a, !0);
                if (c(0) && c(1) && c(2) && c(3)) return D(a) } else return Pa(a, !1);
            throw new r(2, 2003); }

        function Ra(a) { a = unescape(encodeURIComponent(a));
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
            return b.buffer }

        function Oa(a) {
            for (var b = "", c = 0; c < a.length; c += 16E3) b += String.fromCharCode.apply(null, a.subarray(c, c + 16E3));
            return b };

        function Sa(a) { this.a = null;
            this.b = function() { this.a = null;
                a() }.bind(this) }
        Sa.prototype.cancel = function() { null != this.a && (clearTimeout(this.a), this.a = null) };

        function Ta(a) { a.cancel();
            a.a = setTimeout(a.b, 100) };

        function Ua(a) {
            return window.btoa(String.fromCharCode.apply(null, a)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=*$/, "") }

        function Va(a) { a = window.atob(a.replace(/-/g, "+").replace(/_/g, "/"));
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
            return b }

        function Wa(a) {
            for (var b = new Uint8Array(a.length / 2), c = 0; c < a.length; c += 2) b[c / 2] = window.parseInt(a.substr(c, 2), 16);
            return b }

        function Xa(a) {
            for (var b = "", c = 0; c < a.length; ++c) {
                var d = a[c].toString(16);
                1 == d.length && (d = "0" + d);
                b += d }
            return b }

        function Ya(a, b) {
            if (!a && !b) return !0;
            if (!a || !b || a.length != b.length) return !1;
            for (var c = 0; c < a.length; ++c)
                if (a[c] != b[c]) return !1;
            return !0 };

        function Za(a, b, c) { this.i = this.j = this.m = null;
            this.C = !1;
            this.b = null;
            this.f = new A;
            this.a = [];
            this.s = [];
            this.l = new y;
            this.K = a;
            this.g = null;
            this.h = function(a) { this.l.reject(a);
                b(a) }.bind(this);
            this.A = {};
            this.R = c;
            this.v = new Sa(this.Cc.bind(this));
            this.H = this.c = !1;
            this.w = [];
            this.G = !1;
            this.l["catch"](function() {}) }
        k = Za.prototype;
        k.o = function() { this.c = !0;
            var a = this.a.map(function(a) { a.za.close()["catch"](w);
                return a.za.closed });
            this.l.reject();
            this.f && a.push(this.f.o());
            this.i && a.push(this.i.setMediaKeys(null)["catch"](w));
            this.v && this.v.cancel();
            this.f = this.i = this.j = this.m = this.b = this.v = null;
            this.a = [];
            this.s = [];
            this.h = this.g = this.K = null;
            return Promise.all(a) };
        k.configure = function(a) { this.g = a };
        k.init = function(a, b) {
            var c = {},
                d = [];
            this.H = b;
            this.s = a.offlineSessionIds;
            $a(this, a, b || 0 < a.offlineSessionIds.length, c, d);
            return d.length ? ab(this, c, d) : (this.C = !0, Promise.resolve()) };

        function bb(a, b) {
            if (!a.j) return B(a.f, b, "encrypted", function() { this.f.$(b, "encrypted");
                this.h(new r(6, 6010)) }.bind(a)), Promise.resolve();
            a.i = b;
            B(a.f, a.i, "play", a.oc.bind(a));
            var c = a.i.setMediaKeys(a.j),
                c = c["catch"](function(a) {
                    return Promise.reject(new r(6, 6003, a.message)) }),
                d = null;
            a.b.serverCertificate && (d = a.j.setServerCertificate(a.b.serverCertificate), d = d["catch"](function(a) {
                return Promise.reject(new r(6, 6004, a.message)) }));
            return Promise.all([c, d]).then(function() {
                if (this.c) return Promise.reject();
                cb(this);
                this.b.initData.length || this.s.length || B(this.f, this.i, "encrypted", this.hc.bind(this))
            }.bind(a))["catch"](function(a) {
                return this.c ? Promise.resolve() : Promise.reject(a) }.bind(a))
        }

        function db(a, b) {
            return Promise.all(b.map(function(a) {
                return eb(this, a).then(function(a) {
                    if (a) return a.remove() }) }.bind(a))) }

        function cb(a) {
            var b = a.b ? a.b.initData : [];
            b.forEach(function(a) { fb(this, a.initDataType, a.initData) }.bind(a));
            a.s.forEach(function(a) { eb(this, a) }.bind(a));
            b.length || a.s.length || a.l.resolve();
            return a.l }
        k.keySystem = function() {
            return this.b ? this.b.keySystem : "" };

        function gb(a) {
            return a.a.map(function(a) {
                return a.za.sessionId }) }

        function $a(a, b, c, d, e) {
            var f = hb(a),
                g = 0 <= navigator.userAgent.indexOf("Edge/");
            b.periods.forEach(function(a) {
                a.streamSets.forEach(function(a) {
                    "text" != a.type && (f && (a.drmInfos = [f]), a.drmInfos.forEach(function(b) {
                        ib(this, b);
                        var f = d[b.keySystem];
                        f || (f = { audioCapabilities: [], videoCapabilities: [], distinctiveIdentifier: "optional", persistentState: c ? "required" : "optional", sessionTypes: [c ? "persistent-license" : "temporary"], label: b.keySystem, drmInfos: [] }, d[b.keySystem] = f, e.push(b.keySystem));
                        f.drmInfos.push(b);
                        b.distinctiveIdentifierRequired &&
                            (f.distinctiveIdentifier = "required");
                        b.persistentStateRequired && (f.persistentState = "required");
                        var h = "video" == a.type ? f.videoCapabilities : f.audioCapabilities,
                            l = ("video" == a.type ? b.videoRobustness : b.audioRobustness) || "";
                        a.streams.forEach(function(a) {
                            var c = a.mimeType;
                            a.codecs && (c += '; codecs="' + a.codecs + '"');
                            a.keyId && b.keyIds.push(a.keyId);
                            g && "com.microsoft.playready" == b.keySystem && h.length || h.push({ robustness: l, contentType: c }) }.bind(this))
                    }.bind(this)))
                }.bind(this))
            }.bind(a))
        }

        function ab(a, b, c) {
            if (1 == c.length && "" == c[0]) return Promise.reject(new r(6, 6E3));
            var d = new y,
                e = d;
            [!0, !1].forEach(function(a) { c.forEach(function(c) {
                    var d = b[c];
                    d.drmInfos.some(function(a) {
                        return !!a.licenseServerUri }) == a && (d.audioCapabilities.length || delete d.audioCapabilities, d.videoCapabilities.length || delete d.videoCapabilities, e = e["catch"](function() {
                        return this.c ? Promise.reject() : navigator.requestMediaKeySystemAccess(c, [d]) }.bind(this))) }.bind(this)) }.bind(a));
            e = e["catch"](function() {
                return Promise.reject(new r(6,
                    6001))
            });
            e = e.then(function(a) {
                if (this.c) return Promise.reject();
                var c = a.getConfiguration();
                this.m = (c.audioCapabilities || []).concat(c.videoCapabilities || []).map(function(a) {
                    return a.contentType });
                this.m.length || (this.m = null);
                c = b[a.keySystem];
                jb(this, a.keySystem, c, c.drmInfos);
                return this.b.licenseServerUri ? a.createMediaKeys() : Promise.reject(new r(6, 6012)) }.bind(a)).then(function(a) {
                if (this.c) return Promise.reject();
                this.j = a;
                this.C = !0 }.bind(a))["catch"](function(a) {
                if (this.c) return Promise.resolve();
                this.m = this.b = null;
                return a instanceof r ? Promise.reject(a) : Promise.reject(new r(6, 6002, a.message))
            }.bind(a));
            d.reject();
            return e
        }

        function ib(a, b) {
            var c = b.keySystem;
            if (c) {
                if (!b.licenseServerUri) {
                    var d = a.g.servers[c];
                    d && (b.licenseServerUri = d) }
                b.keyIds || (b.keyIds = []);
                if (c = a.g.advanced[c]) b.distinctiveIdentifierRequired || (b.distinctiveIdentifierRequired = c.distinctiveIdentifierRequired), b.persistentStateRequired || (b.persistentStateRequired = c.persistentStateRequired), b.videoRobustness || (b.videoRobustness = c.videoRobustness), b.audioRobustness || (b.audioRobustness = c.audioRobustness), b.serverCertificate || (b.serverCertificate = c.serverCertificate) } }

        function hb(a) {
            if (La(a.g.clearKeys)) return null;
            var b = [],
                c = [],
                d;
            for (d in a.g.clearKeys) {
                var e = a.g.clearKeys[d],
                    f = Wa(d),
                    e = Wa(e),
                    f = { kty: "oct", kid: Ua(f), k: Ua(e) };
                b.push(f);
                c.push(f.kid) }
            a = JSON.stringify({ keys: b });
            c = JSON.stringify({ kids: c });
            c = [{ initData: new Uint8Array(Ra(c)), initDataType: "keyids" }];
            return {
                keySystem: "org.w3.clearkey",
                licenseServerUri: "data:application/json;base64," + window.btoa(a),
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !1,
                audioRobustness: "",
                videoRobustness: "",
                serverCertificate: null,
                initData: c,
                keyIds: []
            }
        }

        function jb(a, b, c, d) {
            var e = [],
                f = [],
                g = [],
                h = [];
            kb(d, e, f, g, h);
            a.b = { keySystem: b, licenseServerUri: e[0], distinctiveIdentifierRequired: "required" == c.distinctiveIdentifier, persistentStateRequired: "required" == c.persistentState, audioRobustness: c.audioCapabilities ? c.audioCapabilities[0].robustness : "", videoRobustness: c.videoCapabilities ? c.videoCapabilities[0].robustness : "", serverCertificate: f[0], initData: g, keyIds: h } }

        function kb(a, b, c, d, e) {
            function f(a, b) {
                return a.initDataType == b.initDataType && Ya(a.initData, b.initData) }
            a.forEach(function(a) {-1 == b.indexOf(a.licenseServerUri) && b.push(a.licenseServerUri);
                a.serverCertificate && -1 == Ha(c, a.serverCertificate, Ya) && c.push(a.serverCertificate);
                a.initData && a.initData.forEach(function(a) {-1 == Ha(d, a, f) && d.push(a) });
                if (a.keyIds)
                    for (var g = 0; g < a.keyIds.length; ++g) - 1 == e.indexOf(a.keyIds[g]) && e.push(a.keyIds[g]) }) }
        k.hc = function(a) {
            for (var b = new Uint8Array(a.initData), c = 0; c < this.a.length; ++c)
                if (Ya(b, this.a[c].initData)) return;
            fb(this, a.initDataType, b) };

        function eb(a, b) {
            var c;
            try { c = a.j.createSession("persistent-license") } catch (f) {
                var d = new r(6, 6005, f.message);
                a.h(d);
                return Promise.reject(d) }
            B(a.f, c, "message", a.xb.bind(a));
            B(a.f, c, "keystatuseschange", a.sb.bind(a));
            var e = { initData: null, za: c, loaded: !1 };
            a.a.push(e);
            return c.load(b).then(function(a) {
                if (!this.c) {
                    if (a) return e.loaded = !0, this.a.every(function(a) {
                        return a.loaded }) && this.l.resolve(), c;
                    this.a.splice(this.a.indexOf(e), 1);
                    this.h(new r(6, 6013)) } }.bind(a), function(a) {
                this.c || (this.a.splice(this.a.indexOf(e),
                    1), this.h(new r(6, 6005, a.message)))
            }.bind(a))
        }

        function fb(a, b, c) {
            var d;
            try { d = a.H ? a.j.createSession("persistent-license") : a.j.createSession() } catch (e) { a.h(new r(6, 6005, e.message));
                return }
            B(a.f, d, "message", a.xb.bind(a));
            B(a.f, d, "keystatuseschange", a.sb.bind(a));
            a.a.push({ initData: c, za: d, loaded: !1 });
            d.generateRequest(b, c.buffer)["catch"](function(a) {
                if (!this.c) {
                    for (var b = 0; b < this.a.length; ++b)
                        if (this.a[b].za == d) { this.a.splice(b, 1);
                            break }
                    this.h(new r(6, 6006, a.message)) } }.bind(a)) }
        k.xb = function(a) { this.g.delayLicenseRequestUntilPlayed && this.i.paused && !this.G ? this.w.push(a) : lb(this, a) };

        function lb(a, b) {
            var c = b.target,
                d = Ga([a.b.licenseServerUri], a.g.retryParameters);
            d.body = b.message;
            d.method = "POST"; "com.microsoft.playready" == a.b.keySystem && mb(d);
            a.K.request(2, d).then(function(a) {
                return this.c ? Promise.reject() : c.update(a.data) }.bind(a), function(a) {
                if (this.c) return Promise.resolve();
                this.h(new r(6, 6007, a)) }.bind(a))["catch"](function(a) {
                if (this.c) return Promise.resolve();
                this.h(new r(6, 6008, a.message)) }.bind(a)) }

        function mb(a) {
            for (var b = Pa(a.body, !0), b = (new DOMParser).parseFromString(b, "application/xml"), c = b.getElementsByTagName("HttpHeader"), d = 0; d < c.length; ++d) a.headers[c[d].querySelector("name").textContent] = c[d].querySelector("value").textContent;
            a.body = Va(b.querySelector("Challenge").textContent).buffer }
        k.sb = function(a) {
            a = a.target;
            var b;
            for (b = 0; b < this.a.length && this.a[b].za != a; ++b);
            if (b != this.a.length) {
                var c = a.keyStatuses,
                    d = !1;
                c.forEach || (c = []);
                c.forEach(function(a, c) {
                    if ("string" == typeof c) {
                        var e = c;
                        c = a;
                        a = e }
                    if ("com.microsoft.playready" == this.b.keySystem && 16 == c.byteLength) {
                        var e = new DataView(c),
                            f = e.getUint32(0, !0),
                            l = e.getUint16(4, !0),
                            p = e.getUint16(6, !0);
                        e.setUint32(0, f, !1);
                        e.setUint16(4, l, !1);
                        e.setUint16(6, p, !1) }
                    "com.microsoft.playready" == this.b.keySystem && "status-pending" == a && (a = "usable");
                    "status-pending" !=
                    a && (this.a[b].loaded = !0, this.a.every(function(a) {
                        return a.loaded }) && this.l.resolve());
                    "expired" == a && (d = !0);
                    e = Xa(new Uint8Array(c));
                    this.A[e] = a
                }.bind(this));
                c = a.expiration - Date.now();
                if (0 > c || d && 1E3 > c) this.a.splice(b, 1), a.close();
                Ta(this.v)
            }
        };
        k.Cc = function() { Na(this.A, function(a, b) {
                return "expired" == b }) && this.h(new r(6, 6014));
            this.R(this.A) };

        function nb() {
            var a = [],
                b = [{ contentType: 'video/mp4; codecs="avc1.42E01E"' }, { contentType: 'video/webm; codecs="vp8"' }],
                c = [{ videoCapabilities: b, persistentState: "required", sessionTypes: ["persistent-license"] }, { videoCapabilities: b }],
                d = {};
            "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function(b) {
                var e = navigator.requestMediaKeySystemAccess(b, c).then(function(a) {
                    return a.createMediaKeys() }).then(function(a) {
                    var c = !1;
                    try { a.createSession("persistent-license"), c = !0 } catch (l) {}
                    d[b] = { persistentState: c }
                }, function() { d[b] = null });
                a.push(e)
            });
            return Promise.all(a).then(function() {
                return d })
        }
        k.oc = function() {
            for (var a = 0; a < this.w.length; a++) lb(this, this.w[a]);
            this.G = !0;
            this.w = [];
            this.f.$(this.i, "play") };
        var ob = {},
            qb = {};
        m("shaka.media.ManifestParser.registerParserByExtension", function(a, b) { qb[a] = b });
        m("shaka.media.ManifestParser.registerParserByMime", function(a, b) { ob[a] = b });

        function rb() {
            var a = {},
                b;
            for (b in ob) a[b] = !0;
            for (b in qb) a[b] = !0;
            ["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"].forEach(function(b) { a[b] = !!ob[b] });
            ["mpd", "m3u8", "ism"].forEach(function(b) { a[b] = !!qb[b] });
            return a }

        function sb(a, b, c, d) {
            var e = d;
            e || (d = (new ma(a)).P.split("/").pop().split("."), 1 < d.length && (d = d.pop().toLowerCase(), e = qb[d]));
            if (e) return Promise.resolve(e);
            c = Ga([a], c);
            c.method = "HEAD";
            return b.request(0, c).then(function(b) {
                (b = b.headers["content-type"]) && (b = b.toLowerCase());
                return (e = ob[b]) ? e : Promise.reject(new r(4, 4E3, a)) }, function(a) {
                return Promise.reject(a) }) };

        function tb(a, b) { this.h = null;
            this.c = a;
            this.g = 0;
            this.f = Infinity;
            this.a = this.b = null;
            this.i = b }
        var F = {};
        m("shaka.media.TextEngine.registerParser", function(a, b) { F[a] = b });
        m("shaka.media.TextEngine.unregisterParser", function(a) { delete F[a] });

        function ub(a, b, c) {
            return a >= b ? null : new vb(a, b, c) }
        m("shaka.media.TextEngine.makeCue", ub);
        var vb = window.VTTCue || window.TextTrackCue;
        tb.prototype.o = function() { this.c && wb(this, function() {
                return !0 });
            this.c = this.h = null;
            return Promise.resolve() };

        function xb(a, b, c, d) {
            var e = a.g;
            return Promise.resolve().then(function() {
                if (this.c) {
                    var a = this.h(b, e, c, d, this.i);
                    if (null != c && null != d) {
                        for (var g = 0; g < a.length && !(a[g].startTime >= this.f); ++g) this.c.addCue(a[g]);
                        null == this.b && (this.b = c);
                        this.a = Math.min(d, this.f) } } }.bind(a)) }
        tb.prototype.remove = function(a, b) {
            return Promise.resolve().then(function() { this.c && (wb(this, function(c) {
                    return c.startTime >= b || c.endTime <= a ? !1 : !0 }), null == this.b || b <= this.b || a >= this.a || (a <= this.b && b >= this.a ? this.b = this.a = null : a <= this.b && b < this.a ? this.b = b : a > this.b && b >= this.a && (this.a = a))) }.bind(this)) };

        function yb(a, b) {
            return null == a.a || a.a < b || b < a.b ? 0 : a.a - b }

        function wb(a, b) {
            for (var c = a.c.cues, d = [], e = 0; e < c.length; ++e) b(c[e]) && d.push(c[e]);
            for (e = 0; e < d.length; ++e) a.c.removeCue(d[e]) };

        function zb(a) {
            return !a || 1 == a.length && 1E-6 > a.end(0) - a.start(0) ? null : a.length ? a.end(a.length - 1) : null }

        function Ab(a, b) {
            var c = 0;
            if (!a || 1 == a.length && 1E-6 > a.end(0) - a.start(0)) return c;
            var d = !1,
                e = 1E-4;
            b || (e = .25);
            for (var f = 0; f < a.length; ++f)
                if (b + e >= a.start(f) && b < a.end(f)) c += a.end(f) - b, d = !0;
                else if (d && .04 >= a.start(f) - a.end(f - 1)) c += a.end(f) - a.start(f), c += a.start(f) - a.end(f - 1);
            else if (0 < f && b + e < a.start(f) && b + e >= a.end(f - 1))
                if (.04 >= a.start(f) - b) c += a.end(f) - b, d = !0;
                else break;
            else d = !1;
            return c };

        function Bb(a, b, c) { this.f = a;
            this.h = b;
            this.j = c;
            this.c = {};
            this.a = null;
            this.l = !1;
            this.b = {};
            this.g = new A;
            this.i = !1 }

        function Cb() {
            var a = {};
            'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hvc1.1.6.L93.90",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="av1",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",video/mp2t; codecs="mp4a.40.2",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function(b) {
                a[b] = !!F[b] ||
                    MediaSource.isTypeSupported(b);
                var c = b.split(";")[0];
                a[c] = a[c] || a[b]
            });
            return a
        }
        k = Bb.prototype;
        k.o = function() { this.i = !0;
            var a = [],
                b;
            for (b in this.b) {
                var c = this.b[b],
                    d = c[0];
                this.b[b] = c.slice(0, 1);
                d && a.push(d.p["catch"](w));
                for (d = 1; d < c.length; ++d) c[d].p["catch"](w), c[d].p.reject() }
            this.a && a.push(this.a.o());
            return Promise.all(a).then(function() { this.g.o();
                this.a = this.j = this.h = this.f = this.g = null;
                this.c = {};
                this.b = {} }.bind(this)) };
        k.init = function(a, b) { this.l = b;
            for (var c in a) {
                var d = a[c]; "text" == c ? Db(this, d) : (d = this.h.addSourceBuffer(d), B(this.g, d, "error", this.Yc.bind(this, c)), B(this.g, d, "updateend", this.wa.bind(this, c)), this.c[c] = d, this.b[c] = []) } };

        function Db(a, b) { a.a || (a.a = new tb(a.j, a.l));
            a.a.h = F[b] }

        function Eb(a, b) {
            var c; "text" == b ? c = a.a.b : (c = Fb(a, b), c = !c || 1 == c.length && 1E-6 > c.end(0) - c.start(0) ? null : 1 == c.length && 0 > c.start(0) ? 0 : c.length ? c.start(0) : null);
            return c }

        function Gb(a, b) {
            return "text" == b ? a.a.a : zb(Fb(a, b)) }

        function Hb(a, b, c) { "text" == b ? (b = yb(a.a, c), b || (b = yb(a.a, c + .1)) && (b += .1)) : (a = Fb(a, b), b = Ab(a, c), b || (b = Ab(a, c + .1)) && (b += .1));
            return b }

        function Fb(a, b) {
            try {
                return a.c[b].buffered } catch (c) {
                return null } }

        function Ib(a, b, c, d, e) {
            return "text" == b ? xb(a.a, c, d, e) : Jb(a, b, a.Xc.bind(a, b, c)) }
        k.remove = function(a, b, c) {
            return "text" == a ? this.a.remove(b, c) : Jb(this, a, this.Cb.bind(this, a, b, c)) };

        function Kb(a, b) {
            return "text" == b ? a.a.remove(0, Infinity) : Jb(a, b, a.Cb.bind(a, b, 0, a.h.duration)) }

        function Lb(a, b, c) {
            return "text" == b ? (a.a.g = c, Promise.resolve()) : Jb(a, b, a.Nc.bind(a, b, c)) }

        function Mb(a, b, c) {
            return "text" == b ? (a.a.f = c, Promise.resolve()) : Promise.all([Jb(a, b, a.Mb.bind(a, b)), Jb(a, b, a.Lc.bind(a, b, c))]) }
        k.endOfStream = function(a) {
            return Nb(this, function() { a ? this.h.endOfStream(a) : this.h.endOfStream() }.bind(this)) };
        k.Aa = function(a) {
            return Nb(this, function() { this.h.duration = a }.bind(this)) };
        k.ea = function() {
            return this.h.duration };
        k.Xc = function(a, b) { this.c[a].appendBuffer(b) };
        k.Cb = function(a, b, c) { c <= b ? this.wa(a) : this.c[a].remove(b, c) };
        k.Mb = function(a) {
            var b = this.c[a].appendWindowEnd;
            this.c[a].abort();
            this.c[a].appendWindowEnd = b;
            this.wa(a) };
        k.Vb = function(a) { this.f.currentTime -= .001;
            this.wa(a) };
        k.Nc = function(a, b) { this.c[a].timestampOffset = b;
            this.wa(a) };
        k.Lc = function(a, b) { this.c[a].appendWindowEnd = b + .04;
            this.wa(a) };
        k.Yc = function(a) { this.b[a][0].p.reject(new r(3, 3014, this.f.error ? this.f.error.code : 0)) };
        k.wa = function(a) {
            var b = this.b[a][0];
            b && (b.p.resolve(), Ob(this, a)) };

        function Jb(a, b, c) {
            if (a.i) return Promise.reject();
            c = { start: c, p: new y };
            a.b[b].push(c);
            if (1 == a.b[b].length) try { c.start() } catch (d) { "QuotaExceededError" == d.name ? c.p.reject(new r(3, 3017, b)) : c.p.reject(new r(3, 3015, d)), Ob(a, b) }
            return c.p }

        function Nb(a, b) {
            if (a.i) return Promise.reject();
            var c = [],
                d;
            for (d in a.c) {
                var e = new y,
                    f = { start: function(a) { a.resolve() }.bind(null, e), p: e };
                a.b[d].push(f);
                c.push(e);
                1 == a.b[d].length && f.start() }
            return Promise.all(c).then(function() {
                var a, c;
                try { b() } catch (l) { c = Promise.reject(new r(3, 3015, l)) }
                for (a in this.c) Ob(this, a);
                return c }.bind(a), function() {
                return Promise.reject() }.bind(a)) }

        function Ob(a, b) { a.b[b].shift();
            var c = a.b[b][0];
            if (c) try { c.start() } catch (d) { c.p.reject(new r(3, 3015, d)), Ob(a, b) } };

        function Pb(a, b, c) { this.a = a;
            this.M = b;
            this.D = c }
        m("shaka.media.InitSegmentReference", Pb);

        function G(a, b, c, d, e, f) { this.position = a;
            this.startTime = b;
            this.endTime = c;
            this.a = d;
            this.M = e;
            this.D = f }
        m("shaka.media.SegmentReference", G);

        function I(a, b) { this.h = a;
            this.j = b;
            this.c = this.a = Infinity;
            this.b = 1;
            this.i = this.f = 0;
            this.g = !0 }
        m("shaka.media.PresentationTimeline", I);
        I.prototype.ea = function() {
            return this.a };
        I.prototype.getDuration = I.prototype.ea;
        I.prototype.Aa = function(a) { this.a = a };
        I.prototype.setDuration = I.prototype.Aa;
        I.prototype.Zb = function() {
            return this.h };
        I.prototype.getPresentationStartTime = I.prototype.Zb;
        I.prototype.Fb = function(a) { this.i = a };
        I.prototype.setClockOffset = I.prototype.Fb;
        I.prototype.Ib = function(a) { this.g = a };
        I.prototype.setStatic = I.prototype.Ib;
        I.prototype.$b = function() {
            return this.c };
        I.prototype.getSegmentAvailabilityDuration = I.prototype.$b;
        I.prototype.Hb = function(a) { this.c = a };
        I.prototype.setSegmentAvailabilityDuration = I.prototype.Hb;
        I.prototype.Ga = function(a, b) { b.length && (this.b = b.reduce(function(a, b) {
                return Math.max(a, b.endTime - b.startTime) }, this.b), a || (this.f = Math.max(this.f, b[0].startTime))) };
        I.prototype.notifySegments = I.prototype.Ga;
        I.prototype.Za = function(a) { this.b = Math.max(this.b, a) };
        I.prototype.notifyMaxSegmentDuration = I.prototype.Za;
        I.prototype.V = function() {
            return Infinity == this.a && !this.g };
        I.prototype.isLive = I.prototype.V;
        I.prototype.ga = function() {
            return Infinity != this.a && !this.g };
        I.prototype.isInProgress = I.prototype.ga;
        I.prototype.sa = function() {
            return Math.max(Math.min(this.f, this.fa()), this.ta()) };
        I.prototype.getEarliestStart = I.prototype.sa;
        I.prototype.ta = function() {
            return Infinity == this.c ? 0 : Math.max(0, this.fa() - this.c - this.j) };
        I.prototype.getSegmentAvailabilityStart = I.prototype.ta;
        I.prototype.fa = function() {
            return this.V() || this.ga() ? Math.min(Math.max(0, (Date.now() + this.i) / 1E3 - this.b - this.h), this.a) : this.a };
        I.prototype.getSegmentAvailabilityEnd = I.prototype.fa;
        I.prototype.Va = function() {
            return Math.max(0, this.fa() - (this.V() || this.ga() ? this.j : 0)) };
        I.prototype.getSeekRangeEnd = I.prototype.Va;

        function Qb(a, b, c, d, e, f) { this.a = a;
            this.c = b;
            this.j = c;
            this.s = d;
            this.l = e;
            this.m = f;
            this.b = new A;
            this.h = !1;
            this.g = 1;
            this.i = this.f = null;
            0 < a.readyState ? this.tb() : B(this.b, a, "loadedmetadata", this.tb.bind(this));
            B(this.b, a, "ratechange", this.pc.bind(this));
            Rb(this) }
        k = Qb.prototype;
        k.o = function() {
            var a = this.b.o();
            this.b = null;
            Sb(this);
            null != this.f && (window.clearInterval(this.f), this.f = null);
            this.m = this.l = this.c = this.a = null;
            return a };

        function Tb(a) {
            return 0 < a.a.readyState ? Ub(a, a.a.currentTime) : Vb(a) }

        function Vb(a) {
            return a.s ? Ub(a, a.s) : Infinity > a.c.ea() ? a.c.sa() : Math.max(a.c.Va(), a.c.sa()) }

        function Wb(a, b) { b != a.h && (a.h = b, Xb(a, a.g), a.l(b)) }

        function Rb(a) { Sb(a);
            a.i = window.setTimeout(a.tc.bind(a), 250) }

        function Sb(a) { a.i && (window.clearTimeout(a.i), a.i = null) }
        k.tc = function() { this.i = null;
            Rb(this);
            var a = Ab(this.a.buffered, this.a.currentTime),
                b = zb(this.a.buffered) >= this.a.duration - .05 || this.a.ended;
            this.h ? (b || a >= this.j) && Wb(this, !1) : !b && .5 > a && Wb(this, !0) };
        k.Ua = function() {
            return this.g };

        function Xb(a, b) { null != a.f && (window.clearInterval(a.f), a.f = null);
            a.g = b;
            a.a.playbackRate = a.h || 0 > b ? 0 : b;!a.h && 0 > b && (a.f = window.setInterval(function() { this.a.currentTime += b / 4 }.bind(a), 250)) }
        k.pc = function() { this.a.playbackRate != (this.h || 0 > this.g ? 0 : this.g) && Xb(this, this.a.playbackRate) };
        k.tb = function() { this.b.$(this.a, "loadedmetadata");
            var a = Vb(this);
            .001 > Math.abs(this.a.currentTime - a) ? (B(this.b, this.a, "seeking", this.vb.bind(this)), B(this.b, this.a, "playing", this.ub.bind(this))) : (B(this.b, this.a, "seeking", this.rc.bind(this)), this.a.currentTime = a) };
        k.rc = function() { this.b.$(this.a, "seeking");
            B(this.b, this.a, "seeking", this.vb.bind(this));
            B(this.b, this.a, "playing", this.ub.bind(this)) };
        k.vb = function() {
            var a = this.a.currentTime,
                b = Yb(this, a);
            .001 < Math.abs(b - a) ? Zb(this, a, b) : this.m() };
        k.ub = function() {
            var a = this.a.currentTime,
                b = Yb(this, a);
            .001 < Math.abs(b - a) && Zb(this, a, b) };

        function Yb(a, b) {
            var c = a.c,
                d = c.sa(),
                e = c.fa();
            if (!c.V() || Infinity == c.c) return b < d ? d : b > e ? e : b;
            c = d + 1;
            d = c + a.j;
            return b >= d && b <= e || Ab(a.a.buffered, b) && b >= c && b <= e ? b : b > e ? e : e < d && b >= c && b <= e ? b : Math.min(d + 2, e) }

        function Zb(a, b, c) { a.a.currentTime = c;
            var d = 0,
                e = function() {!this.a || 10 <= d++ || this.a.currentTime != b || (this.a.currentTime = c, setTimeout(e, 100)) }.bind(a);
            setTimeout(e, 100) }

        function Ub(a, b) {
            var c = a.c.sa();
            if (b < c) return c;
            c = a.c.fa();
            return b > c ? c : b };

        function $b(a, b, c) {
            return c == b || a >= ac && c == b.split("-")[0] || a >= bc && c.split("-")[0] == b.split("-")[0] ? !0 : !1 }
        var ac = 1,
            bc = 2;

        function cc(a) { a = a.toLowerCase().split("-");
            var b = dc[a[0]];
            b && (a[0] = b);
            return a.join("-") }
        var dc = {
            aar: "aa",
            abk: "ab",
            afr: "af",
            aka: "ak",
            alb: "sq",
            amh: "am",
            ara: "ar",
            arg: "an",
            arm: "hy",
            asm: "as",
            ava: "av",
            ave: "ae",
            aym: "ay",
            aze: "az",
            bak: "ba",
            bam: "bm",
            baq: "eu",
            bel: "be",
            ben: "bn",
            bih: "bh",
            bis: "bi",
            bod: "bo",
            bos: "bs",
            bre: "br",
            bul: "bg",
            bur: "my",
            cat: "ca",
            ces: "cs",
            cha: "ch",
            che: "ce",
            chi: "zh",
            chu: "cu",
            chv: "cv",
            cor: "kw",
            cos: "co",
            cre: "cr",
            cym: "cy",
            cze: "cs",
            dan: "da",
            deu: "de",
            div: "dv",
            dut: "nl",
            dzo: "dz",
            ell: "el",
            eng: "en",
            epo: "eo",
            est: "et",
            eus: "eu",
            ewe: "ee",
            fao: "fo",
            fas: "fa",
            fij: "fj",
            fin: "fi",
            fra: "fr",
            fre: "fr",
            fry: "fy",
            ful: "ff",
            geo: "ka",
            ger: "de",
            gla: "gd",
            gle: "ga",
            glg: "gl",
            glv: "gv",
            gre: "el",
            grn: "gn",
            guj: "gu",
            hat: "ht",
            hau: "ha",
            heb: "he",
            her: "hz",
            hin: "hi",
            hmo: "ho",
            hrv: "hr",
            hun: "hu",
            hye: "hy",
            ibo: "ig",
            ice: "is",
            ido: "io",
            iii: "ii",
            iku: "iu",
            ile: "ie",
            ina: "ia",
            ind: "id",
            ipk: "ik",
            isl: "is",
            ita: "it",
            jav: "jv",
            jpn: "ja",
            kal: "kl",
            kan: "kn",
            kas: "ks",
            kat: "ka",
            kau: "kr",
            kaz: "kk",
            khm: "km",
            kik: "ki",
            kin: "rw",
            kir: "ky",
            kom: "kv",
            kon: "kg",
            kor: "ko",
            kua: "kj",
            kur: "ku",
            lao: "lo",
            lat: "la",
            lav: "lv",
            lim: "li",
            lin: "ln",
            lit: "lt",
            ltz: "lb",
            lub: "lu",
            lug: "lg",
            mac: "mk",
            mah: "mh",
            mal: "ml",
            mao: "mi",
            mar: "mr",
            may: "ms",
            mkd: "mk",
            mlg: "mg",
            mlt: "mt",
            mon: "mn",
            mri: "mi",
            msa: "ms",
            mya: "my",
            nau: "na",
            nav: "nv",
            nbl: "nr",
            nde: "nd",
            ndo: "ng",
            nep: "ne",
            nld: "nl",
            nno: "nn",
            nob: "nb",
            nor: "no",
            nya: "ny",
            oci: "oc",
            oji: "oj",
            ori: "or",
            orm: "om",
            oss: "os",
            pan: "pa",
            per: "fa",
            pli: "pi",
            pol: "pl",
            por: "pt",
            pus: "ps",
            que: "qu",
            roh: "rm",
            ron: "ro",
            rum: "ro",
            run: "rn",
            rus: "ru",
            sag: "sg",
            san: "sa",
            sin: "si",
            slk: "sk",
            slo: "sk",
            slv: "sl",
            sme: "se",
            smo: "sm",
            sna: "sn",
            snd: "sd",
            som: "so",
            sot: "st",
            spa: "es",
            sqi: "sq",
            srd: "sc",
            srp: "sr",
            ssw: "ss",
            sun: "su",
            swa: "sw",
            swe: "sv",
            tah: "ty",
            tam: "ta",
            tat: "tt",
            tel: "te",
            tgk: "tg",
            tgl: "tl",
            tha: "th",
            tib: "bo",
            tir: "ti",
            ton: "to",
            tsn: "tn",
            tso: "ts",
            tuk: "tk",
            tur: "tr",
            twi: "tw",
            uig: "ug",
            ukr: "uk",
            urd: "ur",
            uzb: "uz",
            ven: "ve",
            vie: "vi",
            vol: "vo",
            wel: "cy",
            wln: "wa",
            wol: "wo",
            xho: "xh",
            yid: "yi",
            yor: "yo",
            zha: "za",
            zho: "zh",
            zul: "zu"
        };

        function ec(a, b, c) {
            var d = !1;
            a.streamSets.forEach(function(a) {
                a.streams.forEach(function(e) {
                    var f = e.allowedByApplication;
                    e.allowedByApplication = !0;
                    if ("video" == a.type) {
                        if (e.width < b.minWidth || e.width > b.maxWidth || e.width > c.width || e.height < b.minHeight || e.height > b.maxHeight || e.height > c.height || e.width * e.height < b.minPixels || e.width * e.height > b.maxPixels || e.bandwidth < b.minVideoBandwidth || e.bandwidth > b.maxVideoBandwidth) e.allowedByApplication = !1 } else "audio" == a.type && (e.bandwidth < b.minAudioBandwidth || e.bandwidth >
                        b.maxAudioBandwidth) && (e.allowedByApplication = !1);
                    f != e.allowedByApplication && (d = !0)
                })
            });
            return d
        }

        function fc(a, b, c) {
            var d = "",
                e = null;
            a && a.C && (d = a.keySystem(), e = a.m);
            for (a = 0; a < c.streamSets.length; ++a) {
                var f = c.streamSets[a];
                if (d && f.drmInfos.length && !f.drmInfos.some(function(a) {
                        return a.keySystem == d })) c.streamSets.splice(a, 1), --a;
                else {
                    for (var g = b[f.type], h = 0; h < f.streams.length; ++h) {
                        var l = f.streams[h],
                            p = gc(l.mimeType, l.codecs);
                        F[p] || MediaSource.isTypeSupported(p) ? e && l.encrypted && 0 > e.indexOf(p) ? (f.streams.splice(h, 1), --h) : !g || "text" == f.type || l.mimeType == g.mimeType && l.codecs.split(".")[0] == g.codecs.split(".")[0] ||
                            (f.streams.splice(h, 1), --h) : (f.streams.splice(h, 1), --h)
                    }
                    f.streams.length || (c.streamSets.splice(a, 1), --a)
                }
            }
        }

        function hc(a, b) {
            return a.streamSets.map(function(a) {
                var c = b ? b[a.type] : null;
                return a.streams.filter(function(a) {
                    return a.allowedByApplication && a.allowedByKeySystem }).map(function(b) {
                    return { id: b.id, active: c == b, type: a.type, bandwidth: b.bandwidth, language: a.language, kind: b.kind || null, width: b.width || null, height: b.height || null, frameRate: b.frameRate || void 0, codecs: b.codecs || null } }) }).reduce(v, []) }

        function ic(a, b) {
            for (var c = 0; c < a.streamSets.length; c++)
                for (var d = a.streamSets[c], e = 0; e < d.streams.length; e++) {
                    var f = d.streams[e];
                    if (f.id == b.id) return { stream: f, $c: d } }
            return null }

        function jc(a) {
            return a.streams.some(function(a) {
                return a.allowedByApplication && a.allowedByKeySystem }) }

        function kc(a, b, c) {
            var d = {};
            a.streamSets.forEach(function(a) {!jc(a) || a.type in d || (d[a.type] = a) });
            var e = 0;
            a.streamSets.forEach(function(a) {
                if (jc(a) && "video" == a.type) {
                    var b = lc(a);
                    b > e ? (e = b, d.video = a) : b == e && mc(a) < mc(d.video) && (d.video = a) } });
            a.streamSets.forEach(function(a) { jc(a) && a.primary && (d[a.type].primary ? mc(a) < mc(d[a.type]) && (d[a.type] = a) : d[a.type] = a) });
            [bc, ac, 0].forEach(function(e) {
                a.streamSets.forEach(function(a) {
                    if (jc(a)) {
                        var f;
                        "audio" == a.type ? f = b.preferredAudioLanguage : "text" == a.type && (f = b.preferredTextLanguage);
                        if (f) { f = cc(f);
                            var g = cc(a.language);
                            $b(e, f, g) && (a.language == d[a.type].language ? mc(a) < mc(d[a.type]) && (d[a.type] = a) : d[a.type] = a, c && (c[a.type] = !0)) }
                    }
                })
            });
            return d
        }

        function mc(a) {
            var b = 0;
            if (!a || 1 > a.streams.length) return b;
            a.streams.forEach(function(a) { b += a.bandwidth });
            return b / a.streams.length }

        function lc(a) {
            var b = 0;
            if (!a) return b;
            a.streams.forEach(function(a) { a.height > b && (b = a.height) });
            return b }

        function gc(a, b) {
            var c = a;
            b && (c += '; codecs="' + b + '"');
            return c };

        function nc(a, b, c, d, e, f, g, h, l) { this.m = a;
            this.c = b;
            this.K = c;
            this.a = d;
            this.G = e;
            this.v = f;
            this.j = g;
            this.w = h || null;
            this.A = l || null;
            this.h = null;
            this.i = 1;
            this.C = Promise.resolve();
            this.g = [];
            this.l = {};
            this.b = {};
            this.f = this.s = this.H = !1 }
        nc.prototype.o = function() {
            for (var a in this.b) oc(this.b[a]);
            this.h = this.b = this.l = this.g = this.A = this.w = this.j = this.v = this.G = this.C = this.a = this.K = this.c = this.m = null;
            this.f = !0;
            return Promise.resolve() };
        nc.prototype.configure = function(a) { this.h = a;
            this.m.j = this.i * Math.max(this.a.minBufferTime || 0, this.h.rebufferingGoal) };
        nc.prototype.init = function() {
            var a = this.G(this.a.periods[pc(this, Tb(this.m))]);
            return La(a) ? Promise.reject(new r(5, 5005)) : qc(this, a).then(function() { this.w && this.w() }.bind(this)) };

        function rc(a) {
            return a.a.periods[pc(a, Tb(a.m))] }

        function sc(a) {
            return Ma(a.b, function(a) {
                return a.stream }) }

        function tc(a, b, c, d) {
            var e = a.b[b];!e && "text" == b && a.h.ignoreTextStreamFailures ? qc(a, { text: c }) : e && ("text" == b && Db(a.c, gc(c.mimeType, c.codecs)), (b = a.g[uc(a, c)]) && b.ya && (b = a.l[c.id]) && b.ya && e.stream != c && (e.stream = c, e.Na = !0, d && (e.ba ? e.Ra = !0 : e.ha ? (e.la = !0, e.Ra = !0) : (oc(e), vc(a, e, !0))))) }

        function qc(a, b) {
            var c = pc(a, Tb(a.m)),
                d = Ma(b, function(a) {
                    return gc(a.mimeType, a.codecs) });
            a.c.init(d, a.h.useRelativeCueTimestamps);
            wc(a);
            d = C(b);
            return xc(a, d).then(function() {
                if (!this.f)
                    for (var a in b) {
                        var d = b[a];
                        this.b[a] || (this.b[a] = { stream: d, type: a, ua: null, W: null, Na: !0, Oa: c, endOfStream: !1, ha: !1, aa: null, la: !1, Ra: !1, ba: !1, cb: !1 }, yc(this, this.b[a], 0)) } }.bind(a)) }

        function zc(a, b) {
            var c = a.g[b];
            if (c) return c.J;
            c = { J: new y, ya: !1 };
            a.g[b] = c;
            var d = a.a.periods[b].streamSets.map(function(a) {
                return a.streams }).reduce(v, []);
            a.C = a.C.then(function() {
                if (!this.f) return xc(this, d) }.bind(a)).then(function() { this.f || (this.g[b].J.resolve(), this.g[b].ya = !0) }.bind(a))["catch"](function(a) { this.f || (this.g[b].J.reject(), delete this.g[b], this.j(a)) }.bind(a));
            return c.J }

        function xc(a, b) {
            for (var c = [], d = 0; d < b.length; ++d) {
                var e = b[d],
                    f = a.l[e.id];
                f ? c.push(f.J) : (a.l[e.id] = { J: new y, ya: !1 }, c.push(e.createSegmentIndex())) }
            return Promise.all(c).then(function() {
                if (!this.f)
                    for (var a = 0; a < b.length; ++a) {
                        var c = this.l[b[a].id];
                        c.ya || (c.J.resolve(), c.ya = !0) } }.bind(a))["catch"](function(a) {
                if (!this.f) return this.l[e.id].J.reject(), delete this.l[e.id], Promise.reject(a) }.bind(a)) }

        function wc(a) {
            var b = a.a.presentationTimeline.ea();
            Infinity > b ? a.c.Aa(b) : a.c.Aa(Math.pow(2, 32)) }
        nc.prototype.R = function(a) {
            if (!this.f && !a.ha && null != a.aa && !a.ba)
                if (a.aa = null, a.la) vc(this, a, a.Ra);
                else {
                    try {
                        var b = Ac(this, a);
                        null != b && yc(this, a, b) } catch (c) { this.j(c);
                        return }
                    b = C(this.b);
                    Bc(this, a);
                    b.every(function(a) {
                        return a.endOfStream }) && this.c.endOfStream() } };

        function Ac(a, b) {
            var c = Tb(a.m),
                d = b.ua && b.W ? a.a.periods[uc(a, b.ua)].startTime + b.W.endTime : c,
                e = uc(a, b.stream),
                f = pc(a, d),
                g = a.a.periods[f],
                h = Gb(a.c, b.type),
                l = null;
            e == f && (l = Cc(a, b, c, h, f));
            if ((l ? g.startTime + l.startTime - c : Hb(a.c, b.type, c)) >= Math.max(a.i * Math.max(a.a.minBufferTime || 0, a.h.rebufferingGoal), a.i * a.h.bufferingGoal)) return .5;
            if (d >= a.a.presentationTimeline.ea()) return b.endOfStream = !0, null;
            b.endOfStream = !1;
            if (f != e) return b.Oa = f, null;
            d = Gb(a.c, b.type);
            d = Cc(a, b, c, d, e);
            if (!d) return 1;
            Dc(a, b, c, e, d);
            return null
        }

        function Cc(a, b, c, d, e) {
            if (b.W && b.stream == b.ua) return c = b.W.position + 1, Ec(a, b, e, c);
            c = b.W ? b.stream.findSegmentPosition(Math.max(0, a.a.periods[uc(a, b.ua)].startTime + b.W.endTime - a.a.periods[e].startTime)) : b.stream.findSegmentPosition(Math.max(0, (d || c) - a.a.periods[e].startTime));
            if (null == c) return null;
            var f = null;
            null == d && (f = Ec(a, b, e, Math.max(0, c - 1)));
            return f || Ec(a, b, e, c) }

        function Ec(a, b, c, d) { c = a.a.periods[c];
            b = b.stream.getSegmentReference(d);
            if (!b) return null;
            a = a.a.presentationTimeline;
            d = a.fa();
            return c.startTime + b.endTime < a.ta() || c.startTime + b.startTime > d ? null : b }

        function Dc(a, b, c, d, e) {
            var f = a.a.periods[d],
                g = b.stream,
                h = a.a.periods[d + 1],
                l = null,
                l = h ? h.startTime : a.a.presentationTimeline.ea();
            d = Fc(a, b, d, l);
            b.ha = !0;
            b.Na = !1;
            h = Gc(a, e);
            Promise.all([d, h]).then(function(a) {
                if (!this.f && !this.s) return Hc(this, b, c, f, g, e, a[1]) }.bind(a)).then(function() { this.f || this.s || (b.ha = !1, b.cb = !1, yc(this, b, 0), Ic(this, g)) }.bind(a))["catch"](function(a) {
                this.f || this.s || (b.ha = !1, 1001 == a.code || 1002 == a.code || 1003 == a.code ? "text" == b.type && this.h.ignoreTextStreamFailures && 1001 == a.code ? delete this.b.text :
                    (this.j(a), yc(this, b, 4)) : 3017 == a.code ? Jc(this, b, a) : this.j(a))
            }.bind(a))
        }

        function Jc(a, b, c) {
            if (!C(a.b).some(function(a) {
                    return a != b && a.cb })) {
                var d = Math.round(100 * a.i);
                if (20 < d) a.i -= .2;
                else if (4 < d) a.i -= .04;
                else { a.s = !0;
                    a.j(c);
                    return }
                b.cb = !0 }
            yc(a, b, 4) }

        function Fc(a, b, c, d) {
            if (!b.Na) return Promise.resolve();
            c = Lb(a.c, b.type, a.a.periods[c].startTime - b.stream.presentationTimeOffset);
            d = null != d ? Mb(a.c, b.type, d) : Promise.resolve();
            if (!b.stream.initSegmentReference) return Promise.all([c, d]);
            a = Gc(a, b.stream.initSegmentReference).then(function(a) {
                if (!this.f) return Ib(this.c, b.type, a, null, null) }.bind(a))["catch"](function(a) { b.Na = !0;
                return Promise.reject(a) });
            return Promise.all([c, d, a]) }

        function Hc(a, b, c, d, e, f, g) {
            return Kc(a, b, c).then(function() {
                if (!this.f) return Ib(this.c, b.type, g, f.startTime + d.startTime, f.endTime + d.startTime) }.bind(a)).then(function() {
                if (!this.f) return b.ua = e, b.W = f, Promise.resolve() }.bind(a)) }

        function Kc(a, b, c) {
            var d = Eb(a.c, b.type);
            if (null == d) return Promise.resolve();
            c = c - d - a.h.bufferBehind;
            return 0 >= c ? Promise.resolve() : a.c.remove(b.type, d, d + c).then(function() {}.bind(a)) }

        function Ic(a, b) {
            if (!a.H && (a.H = C(a.b).every(function(a) {
                    return !a.la && !a.ba && a.W }), a.H)) {
                var c = uc(a, b);
                a.g[c] || zc(a, c).then(function() { this.v() }.bind(a))["catch"](w);
                for (c = 0; c < a.a.periods.length; ++c) zc(a, c)["catch"](w);
                a.A && a.A() } }

        function Bc(a, b) {
            if (b.Oa != uc(a, b.stream)) {
                var c = b.Oa,
                    d = C(a.b);
                d.every(function(a) {
                    return a.Oa == c }) && d.every(Lc) && zc(a, c).then(function() {
                    if (!this.f) {
                        var a = this.G(this.a.periods[c]),
                            b;
                        for (b in this.b)
                            if (!a[b]) { this.j(new r(5, 5005));
                                return }
                        for (b in a)
                            if (!(this.b[b] || "text" == b && this.h.ignoreTextStreamFailures)) { this.j(new r(5, 5005));
                                return }
                        for (b in this.b) { tc(this, b, a[b], !1);
                            var d = this.b[b];
                            Lc(d) && yc(this, d, 0) }
                        this.v() } }.bind(a))["catch"](w) } }

        function Lc(a) {
            return !a.ha && null == a.aa && !a.la && !a.ba }

        function pc(a, b) {
            for (var c = a.a.periods.length - 1; 0 < c; --c)
                if (b >= a.a.periods[c].startTime) return c;
            return 0 }

        function uc(a, b) {
            for (var c = 0; c < a.a.periods.length; ++c)
                for (var d = a.a.periods[c], e = 0; e < d.streamSets.length; ++e)
                    if (0 <= d.streamSets[e].streams.indexOf(b)) return c;
            return -1 }

        function Gc(a, b) {
            var c = Ga(b.a(), a.h.retryParameters);
            if (b.M || null != b.D) {
                var d = "bytes=" + b.M + "-";
                null != b.D && (d += b.D);
                c.headers.Range = d }
            return a.K.request(1, c).then(function(a) {
                return a.data }) }

        function vc(a, b, c) { b.la = !1;
            b.Ra = !1;
            b.ba = !0;
            Kb(a.c, b.type).then(function() {
                if (c) {
                    var a = this.c,
                        e = b.type;
                    return "text" == e ? Promise.resolve() : Jb(a, e, a.Vb.bind(a, e)) } }.bind(a)).then(function() { this.f || (b.ua = null, b.W = null, b.ba = !1, yc(this, b, 0)) }.bind(a)) }

        function yc(a, b, c) { b.aa = window.setTimeout(a.R.bind(a, b), 1E3 * c) }

        function oc(a) { null != a.aa && (window.clearTimeout(a.aa), a.aa = null) };

        function Mc() { this.a = Promise.resolve();
            this.c = this.b = this.f = !1;
            this.h = new Promise(function(a) { this.g = a }.bind(this)) }
        Mc.prototype.then = function(a) { this.a = this.a.then(a).then(function(a) {
                return this.c ? (this.g(), Promise.reject(this.i)) : Promise.resolve(a) }.bind(this));
            return this };

        function Nc(a) { a.f || (a.a = a.a.then(function(a) { this.b = !0;
                return Promise.resolve(a) }.bind(a), function(a) { this.b = !0;
                return Promise.reject(a) }.bind(a)));
            a.f = !0;
            return a.a }
        Mc.prototype.cancel = function(a) {
            if (this.b) return Promise.resolve();
            this.c = !0;
            this.i = a;
            return this.h };

        function Oc(a, b, c, d, e) {
            var f = e in d,
                g;
            for (g in b) {
                var h = e + "." + g,
                    l = f ? d[e] : c[g],
                    p = !!{ ".abr.manager": !0 }[h];
                if (f || g in a) void 0 === b[g] ? void 0 === l || f ? delete a[g] : a[g] = l : p ? a[g] = b[g] : "object" == typeof a[g] && "object" == typeof b[g] ? Oc(a[g], b[g], l, d, h) : typeof b[g] == typeof l && (a[g] = b[g]) } };

        function J(a, b) {
            var c = b || {},
                d;
            for (d in c) this[d] = c[d];
            this.defaultPrevented = this.cancelable = this.bubbles = !1;
            this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
            this.type = a;
            this.isTrusted = !1;
            this.target = this.currentTarget = null;
            this.a = !1 }
        J.prototype.preventDefault = function() {};
        J.prototype.stopImmediatePropagation = function() { this.a = !0 };
        J.prototype.stopPropagation = function() {};

        function n() { this.Ba = new Ia;
            this.R = this }
        m("shaka.util.FakeEventTarget", n);
        n.prototype.addEventListener = function(a, b) { this.Ba.push(a, b) };
        n.prototype.addEventListener = n.prototype.addEventListener;
        n.prototype.removeEventListener = function(a, b) { this.Ba.remove(a, b) };
        n.prototype.removeEventListener = n.prototype.removeEventListener;
        n.prototype.dispatchEvent = function(a) {
            for (var b = this.Ba.get(a.type) || [], c = 0; c < b.length; ++c) { a.target = this.R;
                a.currentTarget = this.R;
                var d = b[c];
                try { d.handleEvent ? d.handleEvent(a) : d.call(this, a) } catch (e) {}
                if (a.a) break }
            return a.defaultPrevented };
        n.prototype.dispatchEvent = n.prototype.dispatchEvent;

        function K(a, b) {
            n.call(this);
            this.A = !1;
            this.f = a;
            this.s = null;
            this.w = new A;
            this.Ka = new q;
            this.oa = this.c = this.m = this.b = this.j = this.pa = this.G = this.h = this.g = this.i = null;
            this.Lb = 1E9;
            this.na = [];
            this.Da = !1;
            this.ra = !0;
            this.H = this.l = null;
            this.v = {};
            this.a = Pc(this);
            this.Ca = { width: Infinity, height: Infinity };
            this.C = [];
            this.ma = this.K = this.qa = 0;
            b && b(this);
            this.i = new z(this.Sc.bind(this));
            this.pa = Qc(this);
            for (var c = 0; c < this.f.textTracks.length; ++c) {
                var d = this.f.textTracks[c];
                d.mode = "disabled";
                "Shaka Player TextTrack" ==
                d.label && (this.s = d)
            }
            this.s || (this.s = this.f.addTextTrack("subtitles", "Shaka Player TextTrack"));
            this.s.mode = "hidden";
            B(this.w, this.f, "error", this.sc.bind(this))
        }
        ba(K);
        m("shaka.Player", K);
        K.prototype.o = function() { this.A = !0;
            var a = Promise.resolve();
            this.l && (a = this.l.cancel(new r(7, 7E3)));
            return a.then(function() {
                var a = Promise.all([this.H, Rc(this), this.w ? this.w.o() : null, this.i ? this.i.o() : null]);
                this.a = this.i = this.Ka = this.w = this.s = this.f = null;
                return a }.bind(this)) };
        K.prototype.destroy = K.prototype.o;
        K.version = "v2.0.0-105-g0e82fa9";
        var Sc = {};
        K.registerSupportPlugin = function(a, b) { Sc[a] = b };
        K.isBrowserSupported = function() {
            return !!window.Promise && !!window.Uint8Array && !!Array.prototype.forEach && !!window.MediaSource && !!window.MediaKeys && !!window.navigator && !!window.navigator.requestMediaKeySystemAccess && !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration };
        K.probeSupport = function() {
            return nb().then(function(a) {
                var b = rb(),
                    c = Cb();
                a = { manifest: b, media: c, drm: a };
                for (var d in Sc) a[d] = Sc[d]();
                return a }) };
        K.prototype.load = function(a, b, c) {
            var d = this.ib(),
                e = new Mc;
            this.l = e;
            this.dispatchEvent(new J("loading"));
            return Nc(e.then(function() {
                return d }).then(function() {
                return sb(a, this.i, this.a.manifest.retryParameters, c) }.bind(this)).then(function(b) { this.m = new b;
                this.m.configure(this.a.manifest);
                return this.m.start(a, this.i, this.Pa.bind(this), this.Z.bind(this), this.Pc.bind(this)) }.bind(this)).then(function(b) {
                if (0 == b.periods.length) throw new r(4, 4014);
                this.c = b;
                this.oa = a;
                this.g = new Za(this.i, this.Z.bind(this),
                    this.Qc.bind(this));
                this.g.configure(this.a.drm);
                return this.g.init(b, !1)
            }.bind(this)).then(function() { this.c.periods.forEach(this.Pa.bind(this));
                this.ma = Date.now() / 1E3;
                return Promise.all([bb(this.g, this.f), this.pa]) }.bind(this)).then(function() {
                this.j = new Qb(this.f, this.c.presentationTimeline, 1 * Math.max(this.c.minBufferTime || 0, this.a.streaming.rebufferingGoal), b || null, this.Jb.bind(this), this.Rc.bind(this));
                this.G = new Bb(this.f, this.h, this.s);
                this.b = new nc(this.j, this.G, this.i, this.c, this.Oc.bind(this),
                    this.Ob.bind(this), this.Z.bind(this));
                this.b.configure(this.a.streaming);
                return this.b.init()
            }.bind(this)).then(function() { this.c.periods.forEach(this.Pa.bind(this));
                Tc(this);
                Uc(this);
                this.a.abr.manager.init(this.gb.bind(this));
                this.l = null }.bind(this)))["catch"](function(a) { this.l == e && (this.l = null, this.dispatchEvent(new J("unloading")));
                return Promise.reject(a) }.bind(this))
        };
        K.prototype.load = K.prototype.load;

        function Qc(a) { a.h = new MediaSource;
            var b = new y;
            B(a.w, a.h, "sourceopen", b.resolve);
            a.f.src = window.URL.createObjectURL(a.h);
            return b }
        K.prototype.configure = function(a) { a.abr && a.abr.manager && a.abr.manager != this.a.abr.manager && (this.a.abr.manager.stop(), a.abr.manager.init(this.gb.bind(this)));
            Oc(this.a, a, Pc(this), Vc(), "");
            Wc(this) };
        K.prototype.configure = K.prototype.configure;

        function Wc(a) { a.m && a.m.configure(a.a.manifest);
            a.g && a.g.configure(a.a.drm);
            a.b && (a.b.configure(a.a.streaming), a.c.periods.forEach(a.Pa.bind(a)), Xc(a, rc(a.b)));
            a.a.abr.enabled && !a.ra ? a.a.abr.manager.enable() : a.a.abr.manager.disable();
            a.a.abr.manager.setDefaultEstimate(a.a.abr.defaultBandwidthEstimate) }
        K.prototype.getConfiguration = function() {
            var a = Pc(this);
            Oc(a, this.a, Pc(this), Vc(), "");
            return a };
        K.prototype.getConfiguration = K.prototype.getConfiguration;
        K.prototype.Hc = function() {
            var a = Pc(this);
            a.abr && a.abr.manager && a.abr.manager != this.a.abr.manager && (this.a.abr.manager.stop(), a.abr.manager.init(this.gb.bind(this)));
            this.a = Pc(this);
            Wc(this) };
        K.prototype.resetConfiguration = K.prototype.Hc;
        K.prototype.ob = function() {
            return this.i };
        K.prototype.getNetworkingEngine = K.prototype.ob;
        K.prototype.Wb = function() {
            return this.oa };
        K.prototype.getManifestUri = K.prototype.Wb;
        K.prototype.V = function() {
            return this.c ? this.c.presentationTimeline.V() : !1 };
        K.prototype.isLive = K.prototype.V;
        K.prototype.ga = function() {
            return this.c ? this.c.presentationTimeline.ga() : !1 };
        K.prototype.isInProgress = K.prototype.ga;
        K.prototype.Jc = function() {
            var a = 0,
                b = 0;
            this.c && (b = this.c.presentationTimeline, a = b.ta(), b = b.Va());
            return { start: a, end: b } };
        K.prototype.seekRange = K.prototype.Jc;
        K.prototype.keySystem = function() {
            return this.g ? this.g.keySystem() : "" };
        K.prototype.keySystem = K.prototype.keySystem;
        K.prototype.drmInfo = function() {
            return this.g ? this.g.b : null };
        K.prototype.drmInfo = K.prototype.drmInfo;
        K.prototype.bc = function() {
            return this.Da };
        K.prototype.isBuffering = K.prototype.bc;
        K.prototype.ib = function() {
            if (this.A) return Promise.resolve();
            this.dispatchEvent(new J("unloading"));
            var a = Promise.resolve();
            this.l && (a = new r(7, 7E3), a = this.l.cancel(a));
            return a.then(function() { this.H || (this.H = Yc(this).then(function() { this.H = null }.bind(this)));
                return this.H }.bind(this)) };
        K.prototype.unload = K.prototype.ib;
        K.prototype.Ua = function() {
            return this.j ? this.j.Ua() : 0 };
        K.prototype.getPlaybackRate = K.prototype.Ua;
        K.prototype.cd = function(a) { this.j && Xb(this.j, a) };
        K.prototype.trickPlay = K.prototype.cd;
        K.prototype.Pb = function() { this.j && Xb(this.j, 1) };
        K.prototype.cancelTrickPlay = K.prototype.Pb;
        K.prototype.getTracks = function() {
            if (!this.b) return [];
            var a = sc(this.b);
            return hc(rc(this.b), a).filter(function(a) {
                return 0 > this.na.indexOf(a.id) }.bind(this)) };
        K.prototype.getTracks = K.prototype.getTracks;
        K.prototype.Kc = function(a, b) {
            if (this.b) {
                var c = ic(rc(this.b), a);
                if (c) {
                    var d = c.stream;
                    d.allowedByApplication && d.allowedByKeySystem && (this.C.push({ timestamp: Date.now() / 1E3, id: d.id, type: a.type, fromAdaptation: !1 }), c = {}, c[a.type] = d, "text" != a.type && (d = sc(this.b).text, this.configure({ abr: { enabled: !1 } }), c.text = d), Zc(this, c, b)) } } };
        K.prototype.selectTrack = K.prototype.Kc;
        K.prototype.ec = function() {
            return "showing" == this.s.mode };
        K.prototype.isTextTrackVisible = K.prototype.ec;
        K.prototype.Mc = function(a) { this.s.mode = a ? "showing" : "hidden";
            $c(this) };
        K.prototype.setTextTrackVisibility = K.prototype.Mc;
        K.prototype.Yb = function() {
            return new Date(1E3 * this.c.presentationTimeline.h + 1E3 * this.f.currentTime) };
        K.prototype.getPlayheadTimeAsDate = K.prototype.Yb;
        K.prototype.getStats = function() { ad(this);
            var a = {},
                b = {},
                c = this.f && this.f.getVideoPlaybackQuality ? this.f.getVideoPlaybackQuality() : {};
            this.b && (b = sc(this.b), a = b.video || {}, b = b.audio || {});
            return { width: a.width || 0, height: a.height || 0, streamBandwidth: a.bandwidth + b.bandwidth || 0, decodedFrames: Number(c.totalVideoFrames), droppedFrames: Number(c.droppedVideoFrames), estimatedBandwidth: this.a.abr.manager.getBandwidthEstimate(), playTime: this.qa, bufferingTime: this.K, switchHistory: this.C.slice(0) } };
        K.prototype.getStats = K.prototype.getStats;
        K.prototype.addTextTrack = function(a, b, c, d, e) {
            if (!this.b) return Promise.reject();
            for (var f = rc(this.b), g, h = 0; h < this.c.periods.length; h++)
                if (this.c.periods[h] == f) {
                    if (h == this.c.periods.length - 1) {
                        if (g = this.c.presentationTimeline.ea() - f.startTime, Infinity == g) return Promise.reject() } else g = this.c.periods[h + 1].startTime - f.startTime;
                    break }
            var l = {
                id: this.Lb++,
                createSegmentIndex: Promise.resolve.bind(Promise),
                findSegmentPosition: function() {
                    return 1 },
                getSegmentReference: function(b) {
                    return 1 != b ? null : new G(1, 0,
                        g,
                        function() {
                            return [a] }, 0, null)
                },
                initSegmentReference: null,
                presentationTimeOffset: 0,
                mimeType: d,
                codecs: e || "",
                bandwidth: 0,
                kind: c,
                encrypted: !1,
                keyId: null,
                language: b,
                allowedByApplication: !0,
                allowedByKeySystem: !0
            };
            d = { language: b, type: "text", primary: !1, drmInfos: [], streams: [l] };
            this.na.push(l.id);
            f.streamSets.push(d);
            return qc(this.b, { text: l }).then(function() {
                if (!this.A) return this.na.splice(this.na.indexOf(l.id), 1), Xc(this, f), Tc(this), {
                    id: l.id,
                    active: !1,
                    type: "text",
                    bandwidth: 0,
                    language: b,
                    kind: c,
                    width: null,
                    height: null
                }
            }.bind(this))
        };
        K.prototype.addTextTrack = K.prototype.addTextTrack;
        K.prototype.Gb = function(a, b) { this.Ca.width = a;
            this.Ca.height = b };
        K.prototype.setMaxHardwareResolution = K.prototype.Gb;

        function Rc(a) { a.w && a.w.$(a.h, "sourceopen");
            a.f && (a.f.removeAttribute("src"), a.f.load());
            var b = Promise.all([a.a ? a.a.abr.manager.stop() : null, a.g ? a.g.o() : null, a.G ? a.G.o() : null, a.j ? a.j.o() : null, a.b ? a.b.o() : null, a.m ? a.m.stop() : null]);
            a.g = null;
            a.G = null;
            a.j = null;
            a.b = null;
            a.m = null;
            a.c = null;
            a.oa = null;
            a.pa = null;
            a.h = null;
            a.v = {};
            a.C = [];
            a.qa = 0;
            a.K = 0;
            return b }

        function Yc(a) {
            return a.m ? Rc(a).then(function() { this.A || (this.Jb(!1), this.pa = Qc(this)) }.bind(a)) : Promise.resolve() }

        function Vc() {
            return { ".drm.servers": "", ".drm.clearKeys": "", ".drm.advanced": { distinctiveIdentifierRequired: !1, persistentStateRequired: !1, videoRobustness: "", audioRobustness: "", serverCertificate: null } } }

        function Pc(a) {
            return {
                drm: { retryParameters: Fa(), servers: {}, clearKeys: {}, advanced: {}, delayLicenseRequestUntilPlayed: !1 },
                manifest: { retryParameters: Fa(), dash: { customScheme: function(a) {
                            if (a) return null }, clockSyncUri: "" } },
                streaming: { retryParameters: Fa(), rebufferingGoal: 2, bufferingGoal: 10, bufferBehind: 30, ignoreTextStreamFailures: !1, useRelativeCueTimestamps: !1 },
                abr: { manager: a.Ka, enabled: !0, defaultBandwidthEstimate: 5E5 },
                preferredAudioLanguage: "",
                preferredTextLanguage: "",
                restrictions: {
                    minWidth: 0,
                    maxWidth: Infinity,
                    minHeight: 0,
                    maxHeight: Infinity,
                    minPixels: 0,
                    maxPixels: Infinity,
                    minAudioBandwidth: 0,
                    maxAudioBandwidth: Infinity,
                    minVideoBandwidth: 0,
                    maxVideoBandwidth: Infinity
                }
            }
        }
        k = K.prototype;
        k.Pa = function(a) {
            var b = this.b ? sc(this.b) : {};
            fc(this.g, b, a);
            b = a.streamSets.some(jc);
            ec(a, this.a.restrictions, this.Ca) && !this.l && Tc(this);
            a = !a.streamSets.some(jc);
            b ? a && this.Z(new r(4, 4012)) : this.Z(new r(4, 4011)) };

        function Zc(a, b, c) {
            for (var d in b) {
                var e = b[d],
                    f = c || !1; "text" == d && (f = !0);
                a.ra ? a.v[d] = { stream: e, Sb: f } : tc(a.b, d, e, f) } }

        function ad(a) {
            if (a.c) {
                var b = Date.now() / 1E3;
                a.Da ? a.K += b - a.ma : a.qa += b - a.ma;
                a.ma = b } }
        k.Sc = function(a, b) { this.a.abr.manager.segmentDownloaded(a, b) };
        k.Jb = function(a) { ad(this);
            this.Da = a;
            this.dispatchEvent(new J("buffering", { buffering: a })) };
        k.Rc = function() {
            if (this.b) {
                var a = this.b,
                    b;
                for (b in a.b) {
                    var c = a.b[b];
                    c.ba || 0 < Hb(a.c, b, Tb(a.m)) || c.la || (c.ha ? c.la = !0 : null == Eb(a.c, b) ? null == c.aa && yc(a, c, 0) : (oc(c), vc(a, c, !1))) } } };

        function bd(a, b, c) {
            if (!C(b).some(jc)) return a.Z(new r(4, 4012)), {};
            var d = {};
            if (c)["video", "audio", "text"].forEach(function(a) { a in b && (d[a] = b[a]) });
            else { c = sc(a.b);
                for (var e in c) {
                    var f = c[e];
                    f.allowedByApplication && f.allowedByKeySystem && b[e].language == f.language || (d[e] = b[e]) } }
            if (La(d)) return {};
            ha(Object.keys(d));
            var g = a.a.abr.manager.chooseStreams(d);
            return Na(d, function(a) {
                return !!g[a] }) ? g : (a.Z(new r(4, 4012)), {}) }

        function Xc(a, b) {
            var c = { audio: !1, text: !1 },
                d = kc(b, a.a, c),
                e = bd(a, d),
                f;
            for (f in e) a.C.push({ timestamp: Date.now() / 1E3, id: e[f].id, type: f, fromAdaptation: !0 });
            Zc(a, e, !0);
            Uc(a);
            d.text && d.audio && c.text && d.text.language != d.audio.language && (a.s.mode = "showing", $c(a)) }
        k.Oc = function(a) { this.ra = !0;
            this.a.abr.manager.disable();
            a = kc(a, this.a);
            a = bd(this, a, !0);
            for (var b in this.v) a[b] = this.v[b].stream;
            this.v = {};
            for (b in a) this.C.push({ timestamp: Date.now() / 1E3, id: a[b].id, type: b, fromAdaptation: !0 });
            this.l || Tc(this);
            return a };
        k.Ob = function() { this.ra = !1;
            this.a.abr.enabled && this.a.abr.manager.enable();
            for (var a in this.v) {
                var b = this.v[a];
                tc(this.b, a, b.stream, b.Sb) }
            this.v = {} };
        k.gb = function(a, b) {
            var c = sc(this.b),
                d;
            for (d in a) {
                var e = a[d];
                c[d] != e ? this.C.push({ timestamp: Date.now() / 1E3, id: e.id, type: d, fromAdaptation: !0 }) : delete a[d] }
            if (!La(a) && this.b) {
                for (d in a) tc(this.b, d, a[d], b || !1);
                Uc(this) } };

        function Uc(a) { Promise.resolve().then(function() { this.A || this.dispatchEvent(new J("adaptation")) }.bind(a)) }

        function Tc(a) { Promise.resolve().then(function() { this.A || this.dispatchEvent(new J("trackschanged")) }.bind(a)) }

        function $c(a) { a.dispatchEvent(new J("texttrackvisibility")) }
        k.Z = function(a) { this.dispatchEvent(new J("error", { detail: a })) };
        k.Pc = function(a) { this.dispatchEvent(a) };
        k.sc = function() {
            if (this.f.error) {
                var a = this.f.error.code;
                if (1 != a) {
                    var b = this.f.error.msExtendedCode;
                    b && (0 > b && (b += Math.pow(2, 32)), b = b.toString(16));
                    this.Z(new r(3, 3016, a, b)) } } };
        k.Qc = function(a) {
            var b = ["output-restricted", "internal-error"],
                c = rc(this.b),
                d = !1;
            c.streamSets.forEach(function(c) { c.streams.forEach(function(c) {
                    var e = c.allowedByKeySystem;
                    c.keyId && c.keyId in a && (c.allowedByKeySystem = 0 > b.indexOf(a[c.keyId]));
                    e != c.allowedByKeySystem && (d = !0) }) });
            Xc(this, c);
            d && Tc(this) };
        var cd = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
            dd = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
            ed = ["loop", "playbackRate"],
            fd = ["pause", "play"],
            gd = ["adaptation", "buffering", "error", "texttrackvisibility", "trackschanged"],
            hd = "getConfiguration getManifestUri getPlaybackRate getTracks getStats isBuffering isLive isTextTrackVisible seekRange".split(" "),
            id = [
                ["getConfiguration",
                    "configure"
                ]
            ],
            kd = [
                ["isTextTrackVisible", "setTextTrackVisibility"]
            ],
            ld = "configure resetConfiguration trickPlay cancelTrickPlay selectTrack setTextTrackVisibility addTextTrack".split(" "),
            md = ["load", "unload"];

        function nd(a) {
            return JSON.stringify(a, function(a, c) {
                if ("manager" != a && "function" != typeof c) {
                    if (c instanceof Event || c instanceof J) {
                        var b = {},
                            e;
                        for (e in c) {
                            var f = c[e];
                            f && "object" == typeof f || e in Event || (b[e] = f) }
                        return b }
                    if (c instanceof TimeRanges)
                        for (b = { __type__: "TimeRanges", length: c.length, start: [], end: [] }, e = 0; e < c.length; ++e) b.start.push(c.start(e)), b.end.push(c.end(e));
                    else b = "number" == typeof c ? isNaN(c) ? "NaN" : isFinite(c) ? c : 0 > c ? "-Infinity" : "Infinity" : c;
                    return b } }) }

        function od(a) {
            return JSON.parse(a, function(a, c) {
                return "NaN" == c ? NaN : "-Infinity" == c ? -Infinity : "Infinity" == c ? Infinity : c && "object" == typeof c && "TimeRanges" == c.__type__ ? pd(c) : c }) }

        function pd(a) {
            return { length: a.length, start: function(b) {
                    return a.start[b] }, end: function(b) {
                    return a.end[b] } } };

        function qd(a, b, c, d, e) { this.C = a;
            this.l = b;
            this.w = c;
            this.A = d;
            this.s = e;
            this.c = this.j = this.g = !1;
            this.v = "";
            this.a = this.i = null;
            this.b = { video: {}, player: {} };
            this.m = 0;
            this.f = {};
            this.h = null }
        k = qd.prototype;
        k.o = function() { rd(this);
            this.a && (this.a.leave(function() {}, function() {}), this.a = null);
            this.A = this.w = this.l = null;
            this.c = this.j = this.g = !1;
            this.h = this.f = this.b = this.i = null;
            return Promise.resolve() };
        k.O = function() {
            return this.c };
        k.bb = function() {
            return this.v };
        k.init = function() {
            if (window.chrome && chrome.cast && chrome.cast.isAvailable) { delete window.__onGCastApiAvailable;
                this.g = !0;
                this.l();
                var a = new chrome.cast.SessionRequest(this.C),
                    a = new chrome.cast.ApiConfig(a, this.ic.bind(this), this.qc.bind(this), "origin_scoped");
                chrome.cast.initialize(a, function() {}, function() {}) } else window.__onGCastApiAvailable = function(a) { a && this.init() }.bind(this) };
        k.eb = function(a) { this.i = a;
            this.c && sd(this, { type: "appData", appData: this.i }) };
        k.cast = function(a) {
            if (!this.g) return Promise.reject(new r(8, 8E3));
            if (!this.j) return Promise.reject(new r(8, 8001));
            if (this.c) return Promise.reject(new r(8, 8002));
            this.h = new y;
            chrome.cast.requestSession(this.$a.bind(this, a), this.qb.bind(this));
            return this.h };
        k.Ma = function() { this.c && (rd(this), this.a && (this.a.stop(function() {}, function() {}), this.a = null)) };
        k.get = function(a, b) {
            if ("video" == a) {
                if (0 <= fd.indexOf(b)) return this.Bb.bind(this, a, b) } else if ("player" == a) {
                if (0 <= ld.indexOf(b)) return this.Bb.bind(this, a, b);
                if (0 <= md.indexOf(b)) return this.Fc.bind(this, a, b);
                if (0 <= hd.indexOf(b)) return this.yb.bind(this, a, b) }
            return this.yb(a, b) };
        k.set = function(a, b, c) { this.b[a][b] = c;
            sd(this, { type: "set", targetName: a, property: b, value: c }) };
        k.$a = function(a, b) { this.a = b;
            this.a.addUpdateListener(this.rb.bind(this));
            this.a.addMessageListener("urn:x-cast:com.google.shaka.v2", this.jc.bind(this));
            this.rb();
            sd(this, { type: "init", initState: a, appData: this.i });
            this.h.resolve() };
        k.qb = function(a) {
            var b = 8003;
            switch (a.code) {
                case "cancel":
                    b = 8004;
                    break;
                case "timeout":
                    b = 8005;
                    break;
                case "receiver_unavailable":
                    b = 8006 }
            this.h.reject(new r(8, b, a)) };
        k.yb = function(a, b) {
            return this.b[a][b] };
        k.Bb = function(a, b) { sd(this, { type: "call", targetName: a, methodName: b, args: Array.prototype.slice.call(arguments, 2) }) };
        k.Fc = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 2),
                d = new y,
                e = this.m.toString();
            this.m++;
            this.f[e] = d;
            sd(this, { type: "asyncCall", targetName: a, methodName: b, args: c, id: e });
            return d };
        k.ic = function(a) {
            var b = this.s();
            this.h = new y;
            this.$a(b, a) };
        k.qc = function(a) { this.j = "available" == a;
            this.l() };
        k.rb = function() {
            var a = this.a ? "connected" == this.a.status : !1;
            if (this.c && !a) { this.A();
                for (var b in this.b) this.b[b] = {};
                rd(this) }
            this.v = (this.c = a) ? this.a.receiver.friendlyName : "";
            this.l() };

        function rd(a) {
            for (var b in a.f) {
                var c = a.f[b];
                delete a.f[b];
                c.reject(new r(7, 7E3)) } }
        k.jc = function(a, b) {
            var c = od(b);
            switch (c.type) {
                case "event":
                    var d = c.targetName,
                        e = c.event;
                    this.w(d, new J(e.type, e));
                    break;
                case "update":
                    e = c.update;
                    for (d in e) {
                        var c = this.b[d] || {},
                            f;
                        for (f in e[d]) c[f] = e[d][f] }
                    break;
                case "asyncComplete":
                    if (d = c.id, f = c.error, c = this.f[d], delete this.f[d], c)
                        if (f) { d = new r(f.category, f.code);
                            for (e in f) d[e] = f[e];
                            c.reject(d) } else c.resolve() } };

        function sd(a, b) {
            var c = nd(b);
            a.a.sendMessage("urn:x-cast:com.google.shaka.v2", c, function() {}, ga) };

        function L(a, b, c) { n.call(this);
            this.c = a;
            this.b = b;
            this.i = this.f = this.g = this.j = this.l = null;
            this.a = new qd(c, this.Tc.bind(this), this.Uc.bind(this), this.Vc.bind(this), this.nb.bind(this));
            td(this) }
        ba(L);
        m("shaka.cast.CastProxy", L);
        L.prototype.o = function(a) { a && this.a && this.a.Ma();
            a = [this.i ? this.i.o() : null, this.b ? this.b.o() : null, this.a ? this.a.o() : null];
            this.a = this.i = this.j = this.l = this.b = this.c = null;
            return Promise.all(a) };
        L.prototype.destroy = L.prototype.o;
        L.prototype.ac = function() {
            return this.l };
        L.prototype.getVideo = L.prototype.ac;
        L.prototype.Xb = function() {
            return this.j };
        L.prototype.getPlayer = L.prototype.Xb;
        L.prototype.Nb = function() {
            return this.a ? this.a.g && this.a.j : !1 };
        L.prototype.canCast = L.prototype.Nb;
        L.prototype.O = function() {
            return this.a ? this.a.O() : !1 };
        L.prototype.isCasting = L.prototype.O;
        L.prototype.bb = function() {
            return this.a ? this.a.bb() : "" };
        L.prototype.receiverName = L.prototype.bb;
        L.prototype.cast = function() {
            var a = this.nb();
            return this.a.cast(a).then(function() {
                return this.b.ib() }.bind(this)) };
        L.prototype.cast = L.prototype.cast;
        L.prototype.eb = function(a) { this.a.eb(a) };
        L.prototype.setAppData = L.prototype.eb;
        L.prototype.ad = function() {
            var a = this.a;
            if (a.c) {
                var b = a.s();
                chrome.cast.requestSession(a.$a.bind(a, b), a.qb.bind(a)) } };
        L.prototype.suggestDisconnect = L.prototype.ad;
        L.prototype.Ma = function() { this.a.Ma() };
        L.prototype.forceDisconnect = L.prototype.Ma;

        function td(a) { a.a.init();
            a.i = new A;
            cd.forEach(function(a) { B(this.i, this.c, a, this.gd.bind(this)) }.bind(a));
            gd.forEach(function(a) { B(this.i, this.b, a, this.Bc.bind(this)) }.bind(a));
            a.l = {};
            for (var b in a.c) Object.defineProperty(a.l, b, { configurable: !1, enumerable: !0, get: a.fd.bind(a, b), set: a.hd.bind(a, b) });
            a.j = {};
            for (b in a.b) Object.defineProperty(a.j, b, { configurable: !1, enumerable: !0, get: a.Ac.bind(a, b) });
            a.g = new n;
            a.g.R = a.l;
            a.f = new n;
            a.f.R = a.j }
        k = L.prototype;
        k.nb = function() {
            var a = { video: {}, player: {}, playerAfterLoad: {}, manifest: this.b.oa, startTime: null };
            this.c.pause();
            ed.forEach(function(b) { a.video[b] = this.c[b] }.bind(this));
            this.c.ended || (a.startTime = this.c.currentTime);
            id.forEach(function(b) {
                var c = b[1];
                b = this.b[b[0]]();
                a.player[c] = b }.bind(this));
            kd.forEach(function(b) {
                var c = b[1];
                b = this.b[b[0]]();
                a.playerAfterLoad[c] = b }.bind(this));
            return a };
        k.Tc = function() { this.dispatchEvent(new J("caststatuschanged")) };
        k.Vc = function() {
            id.forEach(function(a) {
                var b = a[1];
                a = this.a.get("player", a[0])();
                this.b[b](a) }.bind(this));
            var a = this.a.get("player", "getManifestUri")(),
                b = this.a.get("video", "ended"),
                c = Promise.resolve(),
                d = this.c.autoplay,
                e = null;
            b || (e = this.a.get("video", "currentTime"));
            a && (this.c.autoplay = !1, c = this.b.load(a, e), c["catch"](function(a) { this.b.dispatchEvent(new J("error", { detail: a })) }.bind(this)));
            var f = {};
            ed.forEach(function(a) { f[a] = this.a.get("video", a) }.bind(this));
            c.then(function() {
                ed.forEach(function(a) {
                    this.c[a] =
                        f[a]
                }.bind(this));
                kd.forEach(function(a) {
                    var b = a[1];
                    a = this.a.get("player", a[0])();
                    this.b[b](a) }.bind(this));
                this.c.autoplay = d;
                a && this.c.play()
            }.bind(this))
        };
        k.fd = function(a) {
            if ("addEventListener" == a) return this.g.addEventListener.bind(this.g);
            if ("removeEventListener" == a) return this.g.removeEventListener.bind(this.g);
            if (this.a.O() && !Object.keys(this.a.b.video).length) {
                var b = this.c[a];
                if ("function" != typeof b) return b }
            return this.a.O() ? this.a.get("video", a) : (b = this.c[a], "function" == typeof b && (b = b.bind(this.c)), b) };
        k.hd = function(a, b) { this.a.O() ? this.a.set("video", a, b) : this.c[a] = b };
        k.gd = function(a) { this.a.O() || this.g.dispatchEvent(new J(a.type, a)) };
        k.Ac = function(a) {
            return "addEventListener" == a ? this.f.addEventListener.bind(this.f) : "removeEventListener" == a ? this.f.removeEventListener.bind(this.f) : "getNetworkingEngine" == a ? this.b.ob.bind(this.b) : this.a.O() && !Object.keys(this.a.b.video).length && 0 <= hd.indexOf(a) || !this.a.O() ? (a = this.b[a], a.bind(this.b)) : this.a.get("player", a) };
        k.Bc = function(a) { this.a.O() || this.f.dispatchEvent(a) };
        k.Uc = function(a, b) { this.a.O() && ("video" == a ? this.g.dispatchEvent(b) : "player" == a && this.f.dispatchEvent(b)) };

        function M(a, b, c) { n.call(this);
            this.b = a;
            this.a = b;
            this.j = { video: a, player: b };
            this.l = c || function() {};
            this.i = !1;
            this.c = !0;
            this.f = this.g = null;
            ud(this) }
        ba(M);
        m("shaka.cast.CastReceiver", M);
        M.prototype.cc = function() {
            return this.i };
        M.prototype.isConnected = M.prototype.cc;
        M.prototype.dc = function() {
            return this.c };
        M.prototype.isIdle = M.prototype.dc;
        M.prototype.o = function() {
            var a = this.a ? this.a.o() : Promise.resolve();
            null != this.f && window.clearTimeout(this.f);
            this.l = this.j = this.a = this.b = null;
            this.i = !1;
            this.c = !0;
            this.f = this.g = null;
            return a.then(function() { cast.receiver.CastReceiverManager.getInstance().stop() }) };
        M.prototype.destroy = M.prototype.o;

        function ud(a) {
            var b = cast.receiver.CastReceiverManager.getInstance();
            b.onSenderConnected = a.wb.bind(a);
            b.onSenderDisconnected = a.wb.bind(a);
            b.onSystemVolumeChanged = a.Ub.bind(a);
            a.g = b.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
            a.g.onMessage = a.kc.bind(a);
            b.start();
            cd.forEach(function(a) { this.b.addEventListener(a, this.zb.bind(this, "video")) }.bind(a));
            gd.forEach(function(a) { this.a.addEventListener(a, this.zb.bind(this, "player")) }.bind(a));
            a.a.Gb(1920, 1080);
            a.a.addEventListener("loading", function() {
                this.c = !1;
                vd(this)
            }.bind(a));
            a.b.addEventListener("playing", function() { this.c = !1;
                vd(this) }.bind(a));
            a.a.addEventListener("unloading", function() { this.c = !0;
                vd(this) }.bind(a));
            a.b.addEventListener("ended", function() { window.setTimeout(function() { this.b && this.b.ended && (this.c = !0, vd(this)) }.bind(this), 5E3) }.bind(a))
        }
        k = M.prototype;
        k.wb = function() { this.i = !!cast.receiver.CastReceiverManager.getInstance().getSenders().length;
            vd(this) };

        function vd(a) { Promise.resolve().then(function() { this.dispatchEvent(new J("caststatuschanged")) }.bind(a)) }

        function wd(a, b, c) {
            for (var d in b.player) a.a[d](b.player[d]);
            a.l(c);
            c = Promise.resolve();
            var e = a.b.autoplay;
            b.manifest && (a.b.autoplay = !1, c = a.a.load(b.manifest, b.startTime), c["catch"](function(a) { this.a.dispatchEvent(new J("error", { detail: a })) }.bind(a)));
            c.then(function() {
                for (var a in b.video) {
                    var c = b.video[a];
                    this.b[a] = c }
                for (a in b.playerAfterLoad) c = b.playerAfterLoad[a], this.a[a](c);
                this.b.autoplay = e;
                b.manifest && this.b.play() }.bind(a)) }
        k.zb = function(a, b) { this.ab();
            xd(this, { type: "event", targetName: a, event: b }) };
        k.ab = function() { null != this.f && window.clearTimeout(this.f);
            this.f = window.setTimeout(this.ab.bind(this), 500);
            var a = { video: {}, player: {} };
            dd.forEach(function(b) { a.video[b] = this.b[b] }.bind(this));
            hd.forEach(function(b) { a.player[b] = this.a[b]() }.bind(this));
            var b = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
            b && (a.video.volume = b.level, a.video.muted = b.muted);
            xd(this, { type: "update", update: a }) };
        k.Ub = function() {
            var a = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
            a && xd(this, { type: "update", update: { video: { volume: a.level, muted: a.muted } } });
            xd(this, { type: "event", targetName: "video", event: { type: "volumechange" } }) };
        k.kc = function(a) {
            var b = od(a.data);
            switch (b.type) {
                case "init":
                    wd(this, b.initState, b.appData);
                    this.ab();
                    break;
                case "appData":
                    this.l(b.appData);
                    break;
                case "set":
                    var c = b.targetName,
                        d = b.property,
                        e = b.value;
                    if ("video" == c)
                        if (b = cast.receiver.CastReceiverManager.getInstance(), "volume" == d) { b.setSystemVolumeLevel(e);
                            break } else if ("muted" == d) { b.setSystemVolumeMuted(e);
                        break }
                    this.j[c][d] = e;
                    break;
                case "call":
                    c = b.targetName;
                    d = b.methodName;
                    e = b.args;
                    c = this.j[c];
                    c[d].apply(c, e);
                    break;
                case "asyncCall":
                    c = b.targetName,
                        d = b.methodName, e = b.args, b = b.id, a = a.senderId, c = this.j[c], c[d].apply(c, e).then(this.Eb.bind(this, a, b, null), this.Eb.bind(this, a, b))
            }
        };
        k.Eb = function(a, b, c) { xd(this, { type: "asyncComplete", id: b, error: c }, a) };

        function xd(a, b, c) { a.i && (b = nd(b), c ? a.g.getCastChannel(c).send(b) : a.g.broadcast(b)) };

        function yd(a, b) {
            var c = N(a, b);
            return 1 != c.length ? null : c[0] }

        function N(a, b) {
            return Array.prototype.filter.call(a.childNodes, function(a) {
                return a.tagName == b }) }

        function zd(a) {
            var b = a.firstChild;
            return b && b.nodeType == Node.TEXT_NODE ? a.textContent.trim() : null }

        function O(a, b, c, d) {
            var e = null;
            a = a.getAttribute(b);
            null != a && (e = c(a));
            return null == e ? void 0 !== d ? d : null : e }

        function Ad(a) {
            if (!a) return null;
            a = Date.parse(a);
            return isNaN(a) ? null : Math.floor(a / 1E3) }

        function P(a) {
            if (!a) return null;
            a = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
            if (!a) return null;
            a = 31536E3 * Number(a[1] || null) + 2592E3 * Number(a[2] || null) + 86400 * Number(a[3] || null) + 3600 * Number(a[4] || null) + 60 * Number(a[5] || null) + Number(a[6] || null);
            return isFinite(a) ? a : null }

        function Bd(a) {
            var b = /([0-9]+)-([0-9]+)/.exec(a);
            if (!b) return null;
            a = Number(b[1]);
            if (!isFinite(a)) return null;
            b = Number(b[2]);
            return isFinite(b) ? { start: a, end: b } : null }

        function Cd(a) { a = Number(a);
            return a % 1 ? null : a }

        function Dd(a) { a = Number(a);
            return !(a % 1) && 0 < a ? a : null }

        function Ed(a) { a = Number(a);
            return !(a % 1) && 0 <= a ? a : null }

        function Fd(a) {
            var b;
            a = (b = a.match(/^(\d+)\/(\d+)$/)) ? Number(b[1] / b[2]) : Number(a);
            return isNaN(a) ? null : a };
        var Gd = { "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha", "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready", "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime" };

        function Hd(a, b) {
            var c = Id(a),
                d = null,
                e = c.filter(function(a) {
                    return "urn:mpeg:dash:mp4protection:2011" == a.Db ? (d = a.init || d, !1) : !0 }),
                f = c.map(function(a) {
                    return a.keyId }).filter(Ba),
                g = null;
            if (0 < f.length && (g = f[0], f.some(Ca(g)))) throw new r(4, 4010);
            f = [];
            0 < e.length ? (f = Jd(d, b, e), f.length || (f = [Kd("", d)])) : 0 < c.length && (f = C(Gd).map(function(a) {
                return Kd(a, d) }));
            return { kb: g, ld: d, drmInfos: f, mb: !0 } }

        function Ld(a, b, c) {
            var d = Hd(a, b);
            if (c.mb) { a = 1 == c.drmInfos.length && !c.drmInfos[0].keySystem;
                b = !d.drmInfos.length;
                if (!c.drmInfos.length || a && !b) c.drmInfos = d.drmInfos;
                c.mb = !1 } else if (0 < d.drmInfos.length && (c.drmInfos = c.drmInfos.filter(function(a) {
                    return d.drmInfos.some(function(b) {
                        return b.keySystem == a.keySystem }) }), !c.drmInfos.length)) throw new r(4, 4008);
            return d.kb || c.kb }

        function Kd(a, b) {
            return { keySystem: a, licenseServerUri: "", distinctiveIdentifierRequired: !1, persistentStateRequired: !1, audioRobustness: "", videoRobustness: "", serverCertificate: null, initData: b || [], keyIds: [] } }

        function Jd(a, b, c) {
            return c.map(function(c) {
                var d = Gd[c.Db];
                return d ? [Kd(d, c.init || a)] : b(c.node) || [] }).reduce(v, []) }

        function Id(a) {
            return a.map(function(a) {
                var b = a.getAttribute("schemeIdUri"),
                    d = a.getAttribute("cenc:default_KID"),
                    e = N(a, "cenc:pssh").map(zd);
                if (!b) return null;
                b = b.toLowerCase();
                if (d && (d = d.replace(/-/g, "").toLowerCase(), 0 <= d.indexOf(" "))) throw new r(4, 4009);
                var f = [];
                try { f = e.map(function(a) {
                        return { initDataType: "cenc", initData: Va(a) } }) } catch (g) {
                    throw new r(4, 4007); }
                return { node: a, Db: b, keyId: d, init: 0 < f.length ? f : null } }).filter(Ba) };
        var Md = 1 / 15;

        function Nd(a, b, c, d, e) { null !== e && (e = Math.round(e));
            var f = { RepresentationID: b, Number: c, Bandwidth: d, Time: e };
            return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)d)?\$/g, function(a, b, c) {
                if ("$$" == a) return "$";
                var d = f[b];
                if (null == d) return a; "RepresentationID" == b && c && (c = void 0);
                a = d.toString();
                c = window.parseInt(c, 10) || 1;
                return Array(Math.max(0, c - a.length) + 1).join("0") + a }) }

        function Pd(a, b, c) {
            if (c.length) {
                var d = c[0];
                d.startTime <= Md && (c[0] = new G(d.position, 0, d.endTime, d.a, d.M, d.D));
                a || (a = c[c.length - 1], a.startTime > b || (c[c.length - 1] = new G(a.position, a.startTime, b, a.a, a.M, a.D))) } }

        function Q(a, b) {
            if (!b.length) return a;
            var c = b.map(function(a) {
                return new ma(a) });
            return a.map(function(a) {
                return new ma(a) }).map(function(a) {
                return c.map(a.resolve.bind(a)) }).reduce(v, []).map(function(a) {
                return a.toString() }) }

        function Qd(a, b) {
            var c = Rd(a, b, "timescale"),
                d = 1;
            c && (d = Dd(c) || 1);
            c = Rd(a, b, "duration");
            (c = Dd(c || "")) && (c /= d);
            var e = Rd(a, b, "startNumber"),
                f = Rd(a, b, "presentationTimeOffset"),
                g = Ed(e || "");
            if (null == e || null == g) g = 1;
            var h = Sd(a, b, "SegmentTimeline"),
                e = null;
            if (h) {
                for (var e = d, l = Number(f), p = a.I.duration || Infinity, h = N(h, "S"), u = [], t = 0, E = 0; E < h.length; ++E) {
                    var x = h[E],
                        H = O(x, "t", Ed),
                        pb = O(x, "d", Ed),
                        x = O(x, "r", Cd);
                    null != H && (H -= l);
                    if (!pb) break;
                    H = null != H ? H : t;
                    x = x || 0;
                    if (0 > x)
                        if (E + 1 < h.length) {
                            x = O(h[E + 1], "t", Ed);
                            if (null == x) break;
                            else if (H >= x) break;
                            x = Math.ceil((x - H) / pb) - 1
                        } else {
                            if (Infinity == p) break;
                            else if (H / e >= p) break;
                            x = Math.ceil((p * e - H) / pb) - 1 }
                    0 < u.length && H != t && (u[u.length - 1].end = H / e);
                    for (var Od = 0; Od <= x; ++Od) t = H + pb, u.push({ start: H / e, end: t / e }), H = t
                }
                e = u
            }
            return { Ja: d, F: c, ia: g, presentationTimeOffset: Number(f) / d || 0, B: e }
        }

        function Rd(a, b, c) {
            return [b(a.u), b(a.S), b(a.L)].filter(Ba).map(function(a) {
                return a.getAttribute(c) }).reduce(function(a, b) {
                return a || b }) }

        function Sd(a, b, c) {
            return [b(a.u), b(a.S), b(a.L)].filter(Ba).map(function(a) {
                return yd(a, c) }).reduce(function(a, b) {
                return a || b }) };

        function Td(a) { this.b = a;
            this.c = 0 == Ud;
            this.a = 0 }
        var Ud = 1;

        function Vd(a) {
            return a.a < a.b.byteLength }

        function Wd(a) {
            try {
                var b = a.b.getUint8(a.a) } catch (c) { Xd() }
            a.a += 1;
            return b }

        function Yd(a) {
            try {
                var b = a.b.getUint16(a.a, a.c) } catch (c) { Xd() }
            a.a += 2;
            return b }

        function R(a) {
            try {
                var b = a.b.getUint32(a.a, a.c) } catch (c) { Xd() }
            a.a += 4;
            return b }

        function Zd(a) {
            var b, c;
            try { a.c ? (b = a.b.getUint32(a.a, !0), c = a.b.getUint32(a.a + 4, !0)) : (c = a.b.getUint32(a.a, !1), b = a.b.getUint32(a.a + 4, !1)) } catch (d) { Xd() }
            if (2097151 < c) throw new r(3, 3001);
            a.a += 8;
            return c * Math.pow(2, 32) + b }

        function $d(a, b) { a.a + b > a.b.byteLength && Xd();
            var c = a.b.buffer.slice(a.a, a.a + b);
            a.a += b;
            return new Uint8Array(c) }

        function S(a, b) { a.a + b > a.b.byteLength && Xd();
            a.a += b }

        function ae(a) {
            var b = a.a;
            try {
                for (; Vd(a) && a.b.getUint8(a.a);) a.a += 1 } catch (c) { Xd() }
            b = a.b.buffer.slice(b, a.a);
            a.a += 1;
            return D(b) }

        function Xd() {
            throw new r(3, 3E3); };

        function be(a, b) {
            for (; Vd(b);) {
                var c = b.a,
                    d = R(b),
                    e = R(b);
                1 == d ? d = Zd(b) : d || (d = b.b.byteLength - c);
                if (e == a) return d;
                S(b, d - (b.a - c)) }
            return -1 }

        function ce(a, b) {
            for (var c = new Td(new DataView(a)), d = [
                    [1836019574, 0],
                    [1953653099, 0],
                    [1835297121, 0],
                    [1835626086, 0],
                    [1937007212, 0],
                    [1937011556, 8],
                    [b, 0]
                ], e = -1, f = 0; f < d.length; f++) {
                var g = d[f][1],
                    e = be(d[f][0], c);
                if (-1 == e) return -1;
                S(c, g) }
            return e };

        function de(a, b, c, d) {
            var e = [];
            a = new Td(new DataView(a));
            var f = be(1936286840, a);
            if (-1 == f) throw new r(3, 3004);
            var g = Wd(a);
            S(a, 3);
            S(a, 4);
            var h = R(a);
            if (!h) throw new r(3, 3005);
            var l, p;
            g ? (l = Zd(a), p = Zd(a)) : (l = R(a), p = R(a));
            S(a, 2);
            g = Yd(a);
            d = l - d;
            b = b + f + p;
            for (f = 0; f < g; f++) { l = R(a);
                p = (l & 2147483648) >>> 31;
                l &= 2147483647;
                var u = R(a);
                S(a, 4);
                if (1 == p) throw new r(3, 3006);
                e.push(new G(e.length, d / h, (d + u) / h, function() {
                    return c }, b, b + l - 1));
                d += u;
                b += l }
            return e };

        function T(a) { this.a = a }
        m("shaka.media.SegmentIndex", T);
        T.prototype.o = function() { this.a = null;
            return Promise.resolve() };
        T.prototype.destroy = T.prototype.o;
        T.prototype.find = function(a) {
            for (var b = this.a.length - 1; 0 <= b; --b) {
                var c = this.a[b];
                if (a >= c.startTime && a < c.endTime) return c.position }
            return null };
        T.prototype.find = T.prototype.find;
        T.prototype.get = function(a) {
            if (!this.a.length) return null;
            a -= this.a[0].position;
            return 0 > a || a >= this.a.length ? null : this.a[a] };
        T.prototype.get = T.prototype.get;
        T.prototype.Ya = function(a) {
            for (var b = [], c = 0, d = 0; c < this.a.length && d < a.length;) {
                var e = this.a[c],
                    f = a[d];
                e.startTime < f.startTime ? (b.push(e), c++) : (e.startTime > f.startTime || (.1 < Math.abs(e.endTime - f.endTime) ? b.push(f) : b.push(e), c++), d++) }
            for (; c < this.a.length;) b.push(this.a[c++]);
            if (b.length)
                for (c = b[b.length - 1].position + 1; d < a.length;) f = a[d++], f = new G(c++, f.startTime, f.endTime, f.a, f.M, f.D), b.push(f);
            else b = a;
            this.a = b };
        T.prototype.merge = T.prototype.Ya;
        T.prototype.Ta = function(a) {
            for (var b = 0; b < this.a.length && !(this.a[b].endTime > a); ++b);
            this.a.splice(0, b) };
        T.prototype.evict = T.prototype.Ta;

        function ee(a) { this.b = a;
            this.a = new Td(a);
            fe || (fe = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])]) }
        var fe;

        function ge(a) {
            var b;
            b = he(a);
            if (7 < b.length) throw new r(3, 3002);
            for (var c = 0, d = 0; d < b.length; d++) c = 256 * c + b[d];
            b = c;
            c = he(a);
            a: {
                for (d = 0; d < fe.length; d++)
                    if (Ya(c, fe[d])) { d = !0;
                        break a }
                d = !1 }
            if (d) c = a.b.byteLength - a.a.a;
            else {
                if (8 == c.length && c[1] & 224) throw new r(3, 3001);
                for (var d = c[0] & (1 << 8 - c.length) - 1, e = 1; e < c.length; e++) d = 256 * d + c[e];
                c = d }
            c = a.a.a + c <= a.b.byteLength ? c : a.b.byteLength - a.a.a;
            d = new DataView(a.b.buffer, a.b.byteOffset + a.a.a, c);
            S(a.a, c);
            return new ie(b, d) }

        function he(a) {
            var b = Wd(a.a),
                c;
            for (c = 1; 8 >= c && !(b & 1 << 8 - c); c++);
            if (8 < c) throw new r(3, 3002);
            var d = new Uint8Array(c);
            d[0] = b;
            for (b = 1; b < c; b++) d[b] = Wd(a.a);
            return d }

        function ie(a, b) { this.id = a;
            this.a = b }

        function je(a) {
            if (8 < a.a.byteLength) throw new r(3, 3002);
            if (8 == a.a.byteLength && a.a.getUint8(0) & 224) throw new r(3, 3001);
            for (var b = 0, c = 0; c < a.a.byteLength; c++) var d = a.a.getUint8(c),
                b = 256 * b + d;
            return b };

        function ke(a, b, c, d, e, f) {
            function g() {
                return e }
            var h = [];
            a = new ee(a.a);
            for (var l = -1, p = -1; Vd(a.a);) {
                var u = ge(a);
                if (187 == u.id) {
                    var t = le(u);
                    t && (u = c * (t.ed - f), t = b + t.Ec, 0 <= l && h.push(new G(h.length, l, u, g, p, t - 1)), l = u, p = t) } }
            0 <= l && h.push(new G(h.length, l, d, g, p, null));
            return h }

        function le(a) {
            var b = new ee(a.a);
            a = ge(b);
            if (179 != a.id) throw new r(3, 3013);
            a = je(a);
            b = ge(b);
            if (183 != b.id) throw new r(3, 3012);
            for (var b = new ee(b.a), c = 0; Vd(b.a);) {
                var d = ge(b);
                if (241 == d.id) { c = je(d);
                    break } }
            return { ed: a, Ec: c } };

        function me(a, b) {
            var c = Sd(a, b, "Initialization");
            if (!c) return null;
            var d = a.u.N,
                e = c.getAttribute("sourceURL");
            e && (d = Q(a.u.N, [e]));
            var e = 0,
                f = null;
            if (c = O(c, "range", Bd)) e = c.start, f = c.end;
            return new Pb(function() {
                return d }, e, f) }

        function ne(a, b) {
            var c = Rd(a, oe, "presentationTimeOffset"),
                d = me(a, oe),
                e;
            e = Number(c);
            var f = a.u.contentType,
                g = a.u.mimeType.split("/")[1];
            if ("text" != f && "mp4" != g && "webm" != g) throw new r(4, 4006);
            if ("webm" == g && !d) throw new r(4, 4005);
            var f = Sd(a, oe, "RepresentationIndex"),
                h = Rd(a, oe, "indexRange"),
                l = a.u.N,
                h = Bd(h || "");
            if (f) {
                var p = f.getAttribute("sourceURL");
                p && (l = Q(a.u.N, [p]));
                h = O(f, "range", Bd, h) }
            if (!h) throw new r(4, 4002);
            e = pe(a, b, d, l, h.start, h.end, g, e);
            return {
                createSegmentIndex: e.createSegmentIndex,
                findSegmentPosition: e.findSegmentPosition,
                getSegmentReference: e.getSegmentReference,
                initSegmentReference: d,
                presentationTimeOffset: Number(c) || 0
            }
        }

        function pe(a, b, c, d, e, f, g, h) {
            var l = a.presentationTimeline,
                p = a.I.start,
                u = a.I.duration,
                t = b,
                E = null;
            return {
                createSegmentIndex: function() {
                    var b = [t(d, e, f), "webm" == g ? t(c.a(), c.M, c.D) : null];
                    t = null;
                    return Promise.all(b).then(function(b) {
                        var c, f, t = b[0];
                        b = b[1] || null;
                        if ("mp4" == g) t = de(t, e, d, h);
                        else {
                            b = new ee(new DataView(b));
                            if (440786851 != ge(b).id) throw new r(3, 3008);
                            f = ge(b);
                            if (408125543 != f.id) throw new r(3, 3009);
                            b = f.a.byteOffset;
                            f = new ee(f.a);
                            for (c = null; Vd(f.a);) {
                                var x = ge(f);
                                if (357149030 == x.id) { c = x;
                                    break } }
                            if (!c) throw new r(3,
                                3010);
                            c = new ee(c.a);
                            x = 1E6;
                            for (f = null; Vd(c.a);) {
                                var H = ge(c);
                                if (2807729 == H.id) x = je(H);
                                else if (17545 == H.id)
                                    if (f = H, 4 == f.a.byteLength) f = f.a.getFloat32(0);
                                    else if (8 == f.a.byteLength) f = f.a.getFloat64(0);
                                else throw new r(3, 3003); }
                            if (null == f) throw new r(3, 3011);
                            c = x /= 1E9;
                            f *= x;
                            t = ge(new ee(new DataView(t)));
                            if (475249515 != t.id) throw new r(3, 3007);
                            t = ke(t, b, c, f, d, h)
                        }
                        Pd(a.Sa, u, t);
                        l.Ga(p, t);
                        E = new T(t)
                    })
                },
                findSegmentPosition: function(a) {
                    return E.find(a) },
                getSegmentReference: function(a) {
                    return E.get(a) }
            }
        }

        function oe(a) {
            return a.Ha };

        function qe(a, b) {
            var c = me(a, re),
                d;
            d = se(a);
            var e = Qd(a, re),
                f = e.ia;
            f || (f = 1);
            var g = 0;
            e.F ? g = e.F * (f - 1) - e.presentationTimeOffset : e.B && 0 < e.B.length && (g = e.B[0].start);
            d = { F: e.F, startTime: g, ia: f, presentationTimeOffset: e.presentationTimeOffset, B: e.B, va: d };
            if (!d.F && !d.B && 1 < d.va.length) throw new r(4, 4002);
            if (!d.F && !a.I.duration && !d.B && 1 == d.va.length) throw new r(4, 4002);
            if (d.B && !d.B.length) throw new r(4, 4002);
            f = e = null;
            a.L.id && a.u.id && (f = a.L.id + "," + a.u.id, e = b[f]);
            g = te(a.I.duration, d.ia, a.u.N, d);
            Pd(a.Sa, a.I.duration,
                g);
            e ? (e.Ya(g), e.Ta(a.presentationTimeline.ta() - a.I.start)) : (a.presentationTimeline.Ga(a.I.start, g), e = new T(g), f && (b[f] = e));
            return { createSegmentIndex: Promise.resolve.bind(Promise), findSegmentPosition: e.find.bind(e), getSegmentReference: e.get.bind(e), initSegmentReference: c, presentationTimeOffset: d.presentationTimeOffset }
        }

        function re(a) {
            return a.Y }

        function te(a, b, c, d) {
            var e = d.va.length;
            d.B && d.B.length != d.va.length && (e = Math.min(d.B.length, d.va.length));
            for (var f = [], g = d.startTime, h = 0; h < e; h++) {
                var l = d.va[h],
                    p = Q(c, [l.gc]),
                    u;
                u = null != d.F ? g + d.F : d.B ? d.B[h].end : g + a;
                f.push(new G(h + b, g, u, function(a) {
                    return a }.bind(null, p), l.start, l.end));
                g = u }
            return f }

        function se(a) {
            return [a.u.Y, a.S.Y, a.L.Y].filter(Ba).map(function(a) {
                return N(a, "SegmentURL") }).reduce(function(a, c) {
                return 0 < a.length ? a : c }).map(function(a) {
                var b = a.getAttribute("media");
                a = O(a, "mediaRange", Bd, { start: 0, end: null });
                return { gc: b, start: a.start, end: a.end } }) };

        function ue(a, b, c, d) {
            var e = ve(a),
                f;
            f = Qd(a, we);
            var g = Rd(a, we, "media"),
                h = Rd(a, we, "index");
            f = { F: f.F, Ja: f.Ja, ia: f.ia, presentationTimeOffset: f.presentationTimeOffset, B: f.B, Xa: g, Fa: h };
            g = 0 + (f.Fa ? 1 : 0);
            g += f.B ? 1 : 0;
            g += f.F ? 1 : 0;
            if (!g) throw new r(4, 4002);
            1 != g && (f.Fa && (f.B = null), f.F = null);
            if (!f.Fa && !f.Xa) throw new r(4, 4002);
            if (f.Fa) {
                c = a.u.mimeType.split("/")[1];
                if ("mp4" != c && "webm" != c) throw new r(4, 4006);
                if ("webm" == c && !e) throw new r(4, 4005);
                d = Nd(f.Fa, a.u.id, null, a.bandwidth || null, null);
                d = Q(a.u.N, [d]);
                a = pe(a, b, e,
                    d, 0, null, c, f.presentationTimeOffset)
            } else f.F ? (d || a.presentationTimeline.Za(f.F), a = xe(a, f)) : (d = b = null, a.L.id && a.u.id && (d = a.L.id + "," + a.u.id, b = c[d]), g = ye(a, f), Pd(a.Sa, a.I.duration, g), b ? (b.Ya(g), b.Ta(a.presentationTimeline.ta() - a.I.start)) : (a.presentationTimeline.Ga(a.I.start, g), b = new T(g), d && (c[d] = b)), a = { createSegmentIndex: Promise.resolve.bind(Promise), findSegmentPosition: b.find.bind(b), getSegmentReference: b.get.bind(b) });
            return {
                createSegmentIndex: a.createSegmentIndex,
                findSegmentPosition: a.findSegmentPosition,
                getSegmentReference: a.getSegmentReference,
                initSegmentReference: e,
                presentationTimeOffset: f.presentationTimeOffset
            }
        }

        function we(a) {
            return a.Ia }

        function xe(a, b) {
            var c = a.I.duration,
                d = b.F,
                e = b.ia,
                f = b.Ja,
                g = b.Xa,
                h = a.bandwidth || null,
                l = a.u.id,
                p = a.u.N;
            return { createSegmentIndex: Promise.resolve.bind(Promise), findSegmentPosition: function(a) {
                    return 0 > a || c && a >= c ? null : Math.floor(a / d) }, getSegmentReference: function(a) {
                    var b = a * d;
                    return new G(a, b, b + d, function() {
                        var c = Nd(g, l, a + e, h, b * f);
                        return Q(p, [c]) }, 0, null) } } }

        function ye(a, b) {
            for (var c = [], d = 0; d < b.B.length; d++) {
                var e = b.B[d].start,
                    f = d + b.ia;
                c.push(new G(f, e, b.B[d].end, function(a, b, c, d, e, f) { a = Nd(a, b, e, c, f);
                    return Q(d, [a]).map(function(a) {
                        return a.toString() }) }.bind(null, b.Xa, a.u.id, a.bandwidth || null, a.u.N, f, (e + b.presentationTimeOffset) * b.Ja), 0, null)) }
            return c }

        function ve(a) {
            var b = Rd(a, we, "initialization");
            if (!b) return null;
            var c = a.u.id,
                d = a.bandwidth || null,
                e = a.u.N;
            return new Pb(function() {
                var a = Nd(b, c, null, d, null);
                return Q(e, [a]) }, 0, null) };

        function ze() { this.m = this.l = this.j = this.c = this.a = null;
            this.h = [];
            this.b = null;
            this.g = [];
            this.v = 1;
            this.i = {};
            this.s = 0;
            this.f = null;
            this.La = this.La.bind(this) }
        m("shaka.dash.DashParser", ze);
        k = ze.prototype;
        k.configure = function(a) { this.c = a };
        k.start = function(a, b, c, d, e) { this.h = [a];
            this.a = b;
            this.j = c;
            this.l = d;
            this.m = e;
            return Ae(this).then(function() { this.a && Be(this, 0);
                return this.b }.bind(this)) };
        k.stop = function() { this.a && this.a.Kb(this.La);
            this.c = this.m = this.l = this.j = this.a = null;
            this.h = [];
            this.b = null;
            this.g = [];
            this.i = {};
            null != this.f && (window.clearTimeout(this.f), this.f = null);
            return Promise.resolve() };

        function Ae(a) {
            return a.a.request(0, Ga(a.h, a.c.retryParameters)).then(function(a) {
                if (this.a) return Ce(this, a.data, a.uri) }.bind(a)) }

        function Ce(a, b, c) {
            var d = D(b),
                e = new DOMParser,
                f = null;
            b = null;
            try { f = e.parseFromString(d, "text/xml") } catch (E) {}
            f && "MPD" == f.documentElement.tagName && (b = f.documentElement);
            if (!b) throw new r(4, 4001);
            c = [c];
            d = N(b, "Location").map(zd).filter(Ba);
            0 < d.length && (c = a.h = d);
            d = N(b, "BaseURL").map(zd);
            c = Q(c, d);
            var g = O(b, "minBufferTime", P);
            a.s = O(b, "minimumUpdatePeriod", P, -1);
            var h = O(b, "availabilityStartTime", Ad),
                d = O(b, "timeShiftBufferDepth", P),
                l = O(b, "suggestedPresentationDelay", P),
                e = O(b, "maxSegmentDuration", P),
                f = b.getAttribute("type") ||
                "static",
                p;
            if (a.b) p = a.b.presentationTimeline;
            else {
                var u = Math.max(10, 1.5 * g);
                p = new I(h, null != l ? l : u) }
            var h = De(a, { Sa: "static" != f, presentationTimeline: p, L: null, I: null, S: null, u: null, bandwidth: void 0 }, c, b),
                l = h.duration,
                t = h.periods;
            p.Ib("static" == f);
            p.Aa(l || Infinity);
            p.Hb(null != d ? d : Infinity);
            p.Za(e || 1);
            if (a.b) return Promise.resolve();
            b = N(b, "UTCTiming");
            d = p.V();
            h.ca && a.a.Ab(a.La);
            return Ee(a, c, b, d).then(function(a) {
                this.a && (p.Fb(a), this.b = {
                    presentationTimeline: p,
                    periods: t,
                    offlineSessionIds: [],
                    minBufferTime: g ||
                        0
                })
            }.bind(a))
        }

        function De(a, b, c, d) {
            var e = O(d, "mediaPresentationDuration", P),
                f = !1,
                g = [],
                h = 0;
            d = N(d, "Period");
            for (var l = 0; l < d.length; l++) {
                var p = d[l],
                    h = O(p, "start", P, h),
                    u = O(p, "duration", P);
                if (null == u)
                    if (l + 1 != d.length) {
                        var t = O(d[l + 1], "start", P);
                        null != t && (u = t - h) } else null != e && (u = e - h);
                var p = { start: h, duration: u, node: p, ca: !1 },
                    E = a,
                    x = b,
                    t = p;
                x.L = Fe(t.node, null, c);
                x.I = t;
                x.L.id || (x.L.id = "__shaka_period_" + t.start);
                E = N(t.node, "AdaptationSet").map(E.yc.bind(E, x)).filter(Ba);
                if (!E.length) throw new r(4, 4004);
                for (x = 0; x < E.length; x++) E[x].ca &&
                    (t.ca = !0);
                E = Ge(E);
                t = { startTime: t.start, streamSets: E };
                g.push(t);
                f = f || p.ca;
                p = b.L.id;
                a.g.every(Ca(p)) && (a.j(t), a.g.push(p), a.b && a.b.periods.push(t));
                if (null == u) { h = null;
                    break }
                h += u
            }
            return null != e ? { periods: g, duration: e, ca: f } : { periods: g, duration: h, ca: f }
        }
        k.yc = function(a, b) {
            a.S = Fe(b, a.L, null);
            var c = !1,
                d = N(b, "Role"),
                e = void 0;
            "text" == a.S.contentType && (e = "subtitle");
            for (var f = 0; f < d.length; f++) {
                var g = d[f].getAttribute("schemeIdUri");
                if (null == g || "urn:mpeg:dash:role:2011" == g) switch (g = d[f].getAttribute("value"), g) {
                    case "main":
                        c = !0;
                        break;
                    case "caption":
                    case "subtitle":
                        e = g } }
            var d = !!yd(b, "InbandEventStream"),
                h = [];
            N(b, "SupplementalProperty").forEach(function(a) {
                var b = a.getAttribute("schemeIdUri");
                ("urn:mpeg:dash:adaptation-set-switching:2016" == b || "http://dashif.org/guidelines/AdaptationSetSwitching" ==
                    b || "http://dashif.org/descriptor/AdaptationSetSwitching" == b) && (a = a.getAttribute("value")) && h.push.apply(h, a.split(","))
            });
            var l = null;
            N(b, "EssentialProperty").forEach(function(a) { "http://dashif.org/guidelines/trickmode" == a.getAttribute("schemeIdUri") && (l = a.getAttribute("value")) });
            if (null != l) return null;
            f = N(b, "ContentProtection");
            f = Hd(f, this.c.dash.customScheme);
            g = cc(b.getAttribute("lang") || "und");
            e = N(b, "Representation").map(this.zc.bind(this, a, f, e, g)).filter(function(a) {
                return !!a });
            if (!e.length) throw new r(4,
                4003);
            a.S.contentType || (a.S.contentType = He(e[0].mimeType, e[0].codecs));
            return { id: a.S.id || "__fake__" + this.v++, contentType: a.S.contentType, language: g, fc: c, streams: e, drmInfos: f.drmInfos, bd: h, ca: d }
        };
        k.zc = function(a, b, c, d, e) {
            a.u = Fe(e, a.S, null);
            if (!Ie(a.u)) return null;
            a.bandwidth = O(e, "bandwidth", Dd) || void 0;
            var f;
            f = this.Gc.bind(this);
            if (a.u.Ha) f = ne(a, f);
            else if (a.u.Y) f = qe(a, this.i);
            else if (a.u.Ia) f = ue(a, f, this.i, !!this.b);
            else {
                var g = a.u.N,
                    h = a.I.duration || 0;
                f = { createSegmentIndex: Promise.resolve.bind(Promise), findSegmentPosition: function(a) {
                        return 0 <= a && a < h ? 1 : null }, getSegmentReference: function(a) {
                        return 1 != a ? null : new G(1, 0, h, function() {
                            return g }, 0, null) }, initSegmentReference: null, presentationTimeOffset: 0 } }
            e =
                N(e, "ContentProtection");
            e = Ld(e, this.c.dash.customScheme, b);
            return { id: this.v++, createSegmentIndex: f.createSegmentIndex, findSegmentPosition: f.findSegmentPosition, getSegmentReference: f.getSegmentReference, initSegmentReference: f.initSegmentReference, presentationTimeOffset: f.presentationTimeOffset, mimeType: a.u.mimeType, codecs: a.u.codecs, frameRate: a.u.frameRate, bandwidth: a.bandwidth, width: a.u.width, height: a.u.height, kind: c, encrypted: 0 < b.drmInfos.length, keyId: e, language: d, allowedByApplication: !0, allowedByKeySystem: !0 }
        };
        k.Wc = function() { this.f = null;
            var a = Date.now();
            Ae(this).then(function() { this.a && Be(this, (Date.now() - a) / 1E3) }.bind(this))["catch"](function(a) { this.l(a);
                this.a && Be(this, 0) }.bind(this)) };

        function Be(a, b) { 0 > a.s || (a.f = window.setTimeout(a.Wc.bind(a), 1E3 * Math.max(Math.max(3, a.s) - b, 0))) }

        function Fe(a, b, c) {
            b = b || { contentType: "", mimeType: "", codecs: "", frameRate: void 0 };
            c = c || b.N;
            var d = N(a, "BaseURL").map(zd),
                e = a.getAttribute("contentType") || b.contentType,
                f = a.getAttribute("mimeType") || b.mimeType,
                g = a.getAttribute("codecs") || b.codecs,
                h = O(a, "frameRate", Fd) || b.frameRate;
            e || (e = He(f, g));
            return {
                N: Q(c, d),
                Ha: yd(a, "SegmentBase") || b.Ha,
                Y: yd(a, "SegmentList") || b.Y,
                Ia: yd(a, "SegmentTemplate") || b.Ia,
                width: O(a, "width", Ed) || b.width,
                height: O(a, "height", Ed) || b.height,
                contentType: e,
                mimeType: f,
                codecs: g,
                frameRate: h,
                id: a.getAttribute("id")
            }
        }

        function Ge(a) {
            var b = {};
            a.forEach(function(a) { b[a.id] = [a] });
            a.forEach(function(a) {
                var c = b[a.id];
                a.bd.forEach(function(a) {
                    (a = b[a]) && a != c && (c.push.apply(c, a), a.forEach(function(a) { b[a.id] = c })) }) });
            var c = [],
                d = [];
            C(b).forEach(function(a) {
                if (!(0 <= d.indexOf(a))) {
                    d.push(a);
                    var b = new Ia;
                    a.forEach(function(a) { b.push(a.contentType || "", a) });
                    b.keys().forEach(function(a) {
                        var d = new Ia;
                        b.get(a).forEach(function(a) { d.push(a.language, a) });
                        d.keys().forEach(function(b) {
                            var e = d.get(b);
                            b = {
                                language: b,
                                type: a,
                                primary: e.some(function(a) {
                                    return a.fc }),
                                drmInfos: e.map(function(a) {
                                    return a.drmInfos }).reduce(v, []),
                                streams: e.map(function(a) {
                                    return a.streams }).reduce(v, [])
                            };
                            c.push(b)
                        })
                    })
                }
            });
            return c
        }

        function Ie(a) {
            var b;
            b = 0 + (a.Ha ? 1 : 0);
            b += a.Y ? 1 : 0;
            b += a.Ia ? 1 : 0;
            if (!b) return "text" == a.contentType || "application" == a.contentType ? !0 : !1;
            1 != b && (a.Ha && (a.Y = null), a.Ia = null);
            return !0 }

        function Je(a, b, c, d) { b = Q(b, [c]);
            b = Ga(b, a.c.retryParameters);
            b.method = d;
            return a.a.request(0, b).then(function(a) {
                if ("HEAD" == d) {
                    if (!a.headers || !a.headers.date) return 0;
                    a = a.headers.date } else a = D(a.data);
                a = Date.parse(a);
                return isNaN(a) ? 0 : a - Date.now() }) }

        function Ee(a, b, c, d) {
            c = c.map(function(a) {
                return { scheme: a.getAttribute("schemeIdUri"), value: a.getAttribute("value") } });
            var e = a.c.dash.clockSyncUri;
            d && !c.length && e && c.push({ scheme: "urn:mpeg:dash:utc:http-head:2014", value: e });
            return Aa(c, function(a) {
                var c = a.value;
                switch (a.scheme) {
                    case "urn:mpeg:dash:utc:http-head:2014":
                    case "urn:mpeg:dash:utc:http-head:2012":
                        return Je(this, b, c, "HEAD");
                    case "urn:mpeg:dash:utc:http-xsdate:2014":
                    case "urn:mpeg:dash:utc:http-iso:2014":
                    case "urn:mpeg:dash:utc:http-xsdate:2012":
                    case "urn:mpeg:dash:utc:http-iso:2012":
                        return Je(this,
                            b, c, "GET");
                    case "urn:mpeg:dash:utc:direct:2014":
                    case "urn:mpeg:dash:utc:direct:2012":
                        return a = Date.parse(c), isNaN(a) ? 0 : a - Date.now();
                    case "urn:mpeg:dash:utc:http-ntp:2014":
                    case "urn:mpeg:dash:utc:ntp:2014":
                    case "urn:mpeg:dash:utc:sntp:2014":
                        return Promise.reject();
                    default:
                        return Promise.reject()
                }
            }.bind(a))["catch"](function() {
                return 0 })
        }
        k.Gc = function(a, b, c) { a = Ga(a, this.c.retryParameters);
            null != b && (a.headers.Range = "bytes=" + b + "-" + (null != c ? c : ""));
            return this.a.request(1, a).then(function(a) {
                return a.data }) };
        k.La = function(a, b) {
            if (1 == a) {
                var c = new Td(new DataView(b.data)),
                    d = be(1701671783, c);
                if (-1 != d) {
                    var e = c.a - 8 + d;
                    S(c, 4);
                    d = ae(c);
                    if ("urn:mpeg:dash:event:2012" == d) Ae(this);
                    else {
                        var f = ae(c),
                            g = R(c),
                            h = R(c),
                            l = R(c),
                            p = R(c),
                            c = $d(c, e - c.a);
                        this.m(new J("emsg", { detail: { pd: d, value: f, Ja: g, od: h, md: l, id: p, nd: c } })) } } } };

        function He(a, b) {
            return F[gc(a, b)] ? "text" : a.split("/")[0] }
        qb.mpd = ze;
        ob["application/dash+xml"] = ze;

        function U(a, b) {
            var c = D(a),
                d = [],
                e = new DOMParser,
                f = null;
            try { f = e.parseFromString(c, "text/xml") } catch (p) {
                throw new r(2, 2005); }
            if (f) {
                var g, h;
                if (c = f.getElementsByTagName("tt")[0]) e = c.getAttribute("ttp:frameRate"), f = c.getAttribute("ttp:subFrameRate"), g = c.getAttribute("ttp:frameRateMultiplier"), h = c.getAttribute("ttp:tickRate");
                else throw new r(2, 2006);
                e = new Ke(e, f, g, h);
                f = U.b(c.getElementsByTagName("styling")[0]);
                g = U.b(c.getElementsByTagName("layout")[0]);
                c = U.b(c.getElementsByTagName("body")[0]);
                for (h = 0; h <
                    c.length; h++) {
                    var l = U.c(c[h], b, e, f, g);
                    l && d.push(l) }
            }
            return d
        }
        m("shaka.media.TtmlTextParser", U);
        U.m = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/;
        U.v = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/;
        U.s = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/;
        U.w = /^(\d*\.?\d*)f$/;
        U.C = /^(\d*\.?\d*)t$/;
        U.A = /^(?:(\d*\.?\d*)h)?(?:(\d*\.?\d*)m)?(?:(\d*\.?\d*)s)?(?:(\d*\.?\d*)ms)?$/;
        U.l = /^(\d{1,2}|100)% (\d{1,2}|100)%$/;
        U.Da = { left: "start", center: "center", right: "end", start: "start", end: "end" };
        U.Ka = { left: "line-left", center: "center", right: "line-right" };
        U.b = function(a) {
            var b = [];
            if (!a) return b;
            for (var c = a.childNodes, d = 0; d < c.length; d++) {
                var e = "span" == c[d].nodeName && "p" == a.nodeName;
                c[d].nodeType != Node.ELEMENT_NODE || "br" == c[d].nodeName || e || (e = U.b(c[d]), b = b.concat(e)) }
            b.length || b.push(a);
            return b };
        U.g = function(a) { a = a.childNodes;
            for (var b = 0; b < a.length; b++) "br" == a[b].nodeName && 0 < b ? a[b - 1].textContent += "\n" : 0 < a[b].childNodes.length && U.g(a[b]) };
        U.c = function(a, b, c, d, e) {
            if (!a.hasAttribute("begin") && !a.hasAttribute("end") && "" == a.textContent) return null;
            U.g(a);
            var f = U.a(a.getAttribute("begin"), c),
                g = U.a(a.getAttribute("end"), c);
            c = U.a(a.getAttribute("dur"), c);
            var h = a.textContent;
            null == g && null != c && (g = f + c);
            if (null == f || null == g) throw new r(2, 2001);
            b = ub(f + b, g + b, h);
            if (!b) return null;
            e = U.i(a, "region", e);
            U.oa(b, a, e, d);
            return b };
        U.oa = function(a, b, c, d) {
            var e, f = U.f(b, c, d, "tts:extent");
            f && (e = U.l.exec(f)) && (a.size = Number(e[1]));
            e = U.f(b, c, d, "tts:writingMode");
            f = !0;
            "tb" == e || "tblr" == e ? a.vertical = "lr" : "tbrl" == e ? a.vertical = "rl" : f = !1;
            if (e = U.f(b, c, d, "tts:origin"))
                if (e = U.l.exec(e)) f ? (a.position = Number(e[2]), a.line = Number(e[1])) : (a.position = Number(e[1]), a.line = Number(e[2])), a.snapToLines = !1;
            if (b = U.f(b, c, d, "tts:textAlign")) a.align = b, "center" == b && ("center" != a.align && (a.align = "middle"), a.position = "auto"), a.positionAlign = U.Ka[b], a.lineAlign =
                U.Da[b]
        };
        U.f = function(a, b, c, d) {
            for (var e = U.b(b), f = 0; f < e.length; f++) {
                var g = e[f].getAttribute(d);
                if (g) return g }
            e = U.i;
            return (a = e(b, "style", c) || e(a, "style", c)) ? a.getAttribute(d) : null };
        U.i = function(a, b, c) {
            if (!a || 1 > c.length) return null;
            var d = null;
            if (a = U.pa(a, b))
                for (b = 0; b < c.length; b++)
                    if (c[b].getAttribute("xml:id") == a) { d = c[b];
                        break }
            return d };
        U.pa = function(a, b) {
            for (var c = null; a && !(c = a.getAttribute(b));) {
                var d = a.parentNode;
                if (d instanceof Element) a = d;
                else break }
            return c };
        U.a = function(a, b) {
            var c = null;
            U.m.test(a) ? c = U.qa(b, a) : U.v.test(a) ? c = U.h(U.v, a) : U.s.test(a) ? c = U.h(U.s, a) : U.w.test(a) ? c = U.Ba(b, a) : U.C.test(a) ? c = U.Ca(b, a) : U.A.test(a) && (c = U.h(U.A, a));
            return c };
        U.Ba = function(a, b) {
            var c = U.w.exec(b);
            return Number(c[1]) / a.frameRate };
        U.Ca = function(a, b) {
            var c = U.C.exec(b);
            return Number(c[1]) / a.a };
        U.qa = function(a, b) {
            var c = U.m.exec(b),
                d = Number(c[1]),
                e = Number(c[2]),
                f = Number(c[3]),
                g = Number(c[4]),
                g = g + (Number(c[5]) || 0) / a.b,
                f = f + g / a.frameRate;
            return f + 60 * e + 3600 * d };
        U.h = function(a, b) {
            var c = a.exec(b);
            return c && "" != c[0] ? (Number(c[4]) || 0) / 1E3 + (Number(c[3]) || 0) + 60 * (Number(c[2]) || 0) + 3600 * (Number(c[1]) || 0) : null };

        function Ke(a, b, c, d) { this.frameRate = Number(a) || 30;
            this.b = Number(b) || 1;
            this.a = Number(d);
            this.a || (this.a = a ? this.frameRate * this.b : 1);
            c && (a = /^(\d+) (\d+)$/g.exec(c)) && (this.frameRate *= a[1] / a[2]) }
        F["application/ttml+xml"] = U;

        function Le(a, b) {
            var c = new Td(new DataView(a)),
                d = be(1835295092, c);
            if (-1 != d) return U($d(c, d - 8).buffer, b);
            if (-1 != ce(a, Le.K)) return [];
            throw new r(2, 2007); }
        m("shaka.media.Mp4TtmlParser", Le);
        Le.K = 1937010800;
        F['application/mp4; codecs="stpp"'] = Le;

        function Me(a) { this.b = a;
            this.a = 0 }

        function Ne(a, b) {
            var c;
            b.lastIndex = a.a;
            c = (c = b.exec(a.b)) ? { position: c.index, length: c[0].length, Ic: c } : null;
            if (a.a == a.b.length || !c || c.position != a.a) return null;
            a.a += c.length;
            return c.Ic }

        function Oe(a) {
            return a.a == a.b.length ? null : (a = Ne(a, /[^ \t\n]*/gm)) ? a[0] : null };

        function V(a, b, c, d, e) { a = D(a);
            a = a.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
            a = a.split(/\n{2,}/m);
            if (!/^WEBVTT($|[ \t\n])/m.test(a[0])) throw new r(2, 2E3);
            d = [];
            for (var f = 1; f < a.length; f++) {
                var g = a[f].split("\n");
                (g = V.c(g, b, c, e)) && d.push(g) }
            return d }
        m("shaka.media.VttTextParser", V);
        V.c = function(a, b, c, d) {
            if (1 == a.length && !a[0] || /^NOTE($|[ \t])/.test(a[0])) return null;
            var e = null;
            0 > a[0].indexOf("--\x3e") && (e = a[0], a.splice(0, 1));
            var f = new Me(a[0]),
                g = V.a(f),
                h = Ne(f, /[ \t]+--\x3e[ \t]+/g),
                l = V.a(f);
            if (null == g || !h || null == l) throw new r(2, 2001);
            g += b;
            l += b;
            d && (g += c, l += c);
            a = ub(g, l, a.slice(1).join("\n").trim());
            if (!a) return null;
            Ne(f, /[ \t]+/gm);
            for (b = Oe(f); b;) V.j(a, b), Ne(f, /[ \t]+/gm), b = Oe(f);
            null != e && (a.id = e);
            return a };
        V.j = function(a, b) {
            var c;
            if (c = /^align:(start|middle|center|end|left|right)$/.exec(b)) a.align = c[1], "center" == c[1] && "center" != a.align && (a.position = "auto", a.align = "middle");
            else if (c = /^vertical:(lr|rl)$/.exec(b)) a.vertical = c[1];
            else if (c = /^size:(\d{1,2}|100)%$/.exec(b)) a.size = Number(c[1]);
            else if (c = /^position:(\d{1,2}|100)%(?:,(line-left|line-right|center|start|end))?$/.exec(b)) a.position = Number(c[1]), c[2] && (a.positionAlign = c[2]);
            else if (c = /^line:(\d{1,2}|100)%(?:,(start|end|center))?$/.exec(b)) a.snapToLines = !1, a.line = Number(c[1]), c[2] && (a.lineAlign = c[2]);
            else if (c = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(b)) a.snapToLines = !0, a.line = Number(c[1]), c[2] && (a.lineAlign = c[2])
        };
        V.a = function(a) { a = Ne(a, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);
            if (!a) return null;
            var b = Number(a[2]),
                c = Number(a[3]);
            return 59 < b || 59 < c ? null : Number(a[4]) / 1E3 + c + 60 * b + 3600 * (Number(a[1]) || 0) };
        F["text/vtt"] = V;
        F['text/vtt; codecs="vtt"'] = V;

        function W(a, b, c, d) {
            var e = new Td(new DataView(a)),
                f = be(1835295092, e);
            if (-1 != f) return W.ra($d(e, f - 8).buffer, b, c, d);
            if (-1 != ce(a, W.na)) return [];
            throw new r(2, 2008); }
        m("shaka.media.Mp4VttParser", W);
        W.ra = function(a, b, c, d) { a = new Td(new DataView(a));
            c += b;
            d += b;
            for (b = []; Vd(a);) {
                var e = be(W.ma, a);
                if (-1 == e) break;
                (e = W.c($d(a, e - 8).buffer, c, d)) && b.push(e) }
            return b };
        W.c = function(a, b, c) { a = new Td(new DataView(a));
            for (var d, e, f; Vd(a);) {
                var g = R(a),
                    h = R(a),
                    l = D($d(a, g - 8).buffer);
                1 == g && Zd(a);
                switch (h) {
                    case W.H:
                        d = l;
                        break;
                    case W.G:
                        f = l;
                        break;
                    case W.R:
                        e = l } }
            if (!d) throw new r(2, 2008);
            b = ub(b, c, d);
            if (!b) return null;
            f && (b.id = f);
            if (e)
                for (e = new Me(e), f = Oe(e); f;) V.j(b, f), Ne(e, /[ \t]+/gm), f = Oe(e);
            return b };
        W.na = 2004251764;
        W.ma = 1987343459;
        W.H = 1885436268;
        W.G = 1768187247;
        W.R = 1937011815;
        F['application/mp4; codecs="wvtt"'] = W;

        function Pe(a) {
            return new Promise(function(b) {
                var c = a.split(":");
                if (2 > c.length || "data" != c[0]) throw new r(1, 1004, a);
                c = c.slice(1).join(":").split(",");
                if (2 > c.length) throw new r(1, 1004, a);
                var d = c[0],
                    c = window.decodeURIComponent(c.slice(1).join(",")),
                    d = d.split(";"),
                    e = null;
                1 < d.length && (e = d[1]);
                if ("base64" == e) c = Va(c).buffer;
                else {
                    if (e) throw new r(1, 1005, a);
                    c = Ra(c) }
                b({ uri: a, data: c, headers: { "content-type": d[0] } }) }) }
        m("shaka.net.DataUriPlugin", Pe);
        Ea.data = Pe;

        function Qe(a, b) {
            return new Promise(function(c, d) {
                var e = new XMLHttpRequest;
                e.open(b.method, a, !0);
                e.responseType = "arraybuffer";
                e.timeout = b.retryParameters.timeout;
                e.withCredentials = b.allowCrossSiteCredentials;
                e.onload = function(b) {
                    b = b.target;
                    if (200 <= b.status && 299 >= b.status) {
                        var e = b.getAllResponseHeaders().split("\r\n").reduce(function(a, b) {
                            var c = b.split(": ");
                            a[c[0].toLowerCase()] = c.slice(1).join(": ");
                            return a }, {});
                        b.responseURL && (a = b.responseURL);
                        c({ uri: a, data: b.response, headers: e }) } else {
                        e = null;
                        try {
                            e =
                                Qa(b.response)
                        } catch (l) {}
                        d(new r(1, 1001, a, b.status, e))
                    }
                };
                e.onerror = function() { d(new r(1, 1002, a)) };
                e.ontimeout = function() { d(new r(1, 1003, a)) };
                for (var f in b.headers) e.setRequestHeader(f, b.headers[f]);
                e.send(b.body)
            })
        }
        m("shaka.net.HttpPlugin", Qe);
        Ea.http = Qe;
        Ea.https = Qe;

        function Re() { this.a = null;
            this.c = [];
            this.b = {} }
        k = Re.prototype;
        k.init = function(a) {
            if (!window.indexedDB) return Promise.reject(new r(9, 9E3));
            var b = window.indexedDB.open("shaka_offline_db", 1),
                c = new y;
            b.onupgradeneeded = function(b) { b = b.target.result;
                for (var c in a) b.createObjectStore(c, { keyPath: a[c] }) };
            b.onsuccess = function(a) { this.a = a.target.result;
                c.resolve() }.bind(this);
            b.onerror = Se.bind(null, b, c);
            return c.then(function() {
                var b = Object.keys(a);
                return Promise.all(b.map(function(a) {
                    return Te(this, a).then(function(b) { this.b[a] = b }.bind(this)) }.bind(this))) }.bind(this)) };
        k.o = function() {
            return Promise.all(this.c.map(function(a) {
                try { a.transaction.abort() } catch (b) {}
                return a.J["catch"](w) })).then(function() { this.a && (this.a.close(), this.a = null) }.bind(this)) };
        k.get = function(a, b) {
            return Ue(this, a, "readonly", function(a) {
                return a.get(b) }) };
        k.forEach = function(a, b) {
            return Ue(this, a, "readonly", function(a) {
                return a.openCursor() }, function(a) { a && (b(a.value), a["continue"]()) }) };

        function Ve(a, b, c) {
            return Ue(a, b, "readwrite", function(a) {
                return a.put(c) }) }
        k.remove = function(a, b) {
            return Ue(this, a, "readwrite", function(a) {
                return a["delete"](b) }) };

        function We(a, b) {
            var c = [];
            return Ue(a, "segment", "readwrite", function(a) {
                return a.openCursor() }, function(a) {
                if (a) {
                    if (b(a.value)) {
                        var d = a["delete"](),
                            f = new y;
                        d.onsuccess = f.resolve;
                        d.onerror = Se.bind(null, d, f);
                        c.push(f) }
                    a["continue"]() } }).then(function() {
                return Promise.all(c) }).then(function() {
                return c.length }) }

        function Te(a, b) {
            var c = 0;
            return Ue(a, b, "readonly", function(a) {
                return a.openCursor(null, "prev") }, function(a) { a && (c = a.key + 1) }).then(function() {
                return c }) }

        function Ue(a, b, c, d, e) { c = a.a.transaction([b], c);
            var f = d(c.objectStore(b)),
                g = new y;
            e && (f.onsuccess = function(a) { e(a.target.result) });
            f.onerror = Se.bind(null, f, g);
            var h = { transaction: c, J: g };
            a.c.push(h);
            var l = function() { this.c.splice(this.c.indexOf(h), 1) }.bind(a);
            c.oncomplete = function() { l();
                g.resolve(f.result) };
            c.onerror = function(a) { l();
                Se(f, g, a) };
            return g }

        function Se(a, b, c) { "AbortError" == a.error.name ? b.reject(new r(9, 9002)) : b.reject(new r(9, 9001, a.error));
            c.preventDefault() };
        var Xe = { manifest: "key", segment: "key" };

        function Ye(a) {
            return { offlineUri: "offline:" + a.key, originalManifestUri: a.originalManifestUri, duration: a.duration, size: a.size, tracks: a.periods[0].streams.map(function(a) {
                    return { id: a.id, active: !1, type: a.contentType, bandwidth: 0, language: a.language, kind: a.kind || null, width: a.width, height: a.height, frameRate: a.frameRate, codecs: a.codecs } }), appMetadata: a.appMetadata } };

        function Ze() {}
        m("shaka.offline.OfflineManifestParser", Ze);
        Ze.prototype.configure = function() {};
        Ze.prototype.start = function(a) {
            var b = /^offline:([0-9]+)$/.exec(a);
            if (!b) return Promise.reject(new r(1, 9004, a));
            var c = Number(b[1]),
                d = new Re;
            return d.init(Xe).then(function() {
                return d.get("manifest", c) }).then(function(a) {
                if (!a) throw new r(9, 9003, c);
                return $e(a) }).then(function(a) {
                return d.o().then(function() {
                    return a }) }, function(a) {
                return d.o().then(function() {
                    throw a; }) }) };
        Ze.prototype.stop = function() {
            return Promise.resolve() };

        function $e(a) {
            var b = new I(null, 0);
            b.Aa(a.duration);
            var c = a.drmInfo ? [a.drmInfo] : [];
            return {
                presentationTimeline: b,
                minBufferTime: 10,
                offlineSessionIds: a.sessionIds,
                periods: a.periods.map(function(a) {
                    return {
                        startTime: a.startTime,
                        streamSets: a.streams.map(function(d) {
                            var e = d.segments.map(function(a, b) {
                                return new G(b, a.startTime, a.endTime, function() {
                                    return [a.uri] }, 0, null) });
                            b.Ga(a.startTime, e);
                            e = new T(e);
                            return {
                                language: d.language,
                                type: d.contentType,
                                primary: d.primary,
                                drmInfos: c,
                                streams: [{
                                    id: d.id,
                                    createSegmentIndex: Promise.resolve.bind(Promise),
                                    findSegmentPosition: e.find.bind(e),
                                    getSegmentReference: e.get.bind(e),
                                    initSegmentReference: d.initSegmentUri ? new Pb(function() {
                                        return [d.initSegmentUri] }, 0, null) : null,
                                    presentationTimeOffset: d.presentationTimeOffset,
                                    mimeType: d.mimeType,
                                    codecs: d.codecs,
                                    bandwidth: 0,
                                    width: d.width || void 0,
                                    height: d.height || void 0,
                                    kind: d.kind,
                                    encrypted: d.encrypted,
                                    keyId: d.keyId,
                                    allowedByApplication: !0,
                                    allowedByKeySystem: !0
                                }]
                            }
                        })
                    }
                })
            }
        }
        ob["application/x-offline-manifest"] = Ze;

        function af(a) {
            if (/^offline:([0-9]+)$/.exec(a)) {
                var b = { uri: a, data: new ArrayBuffer(0), headers: { "content-type": "application/x-offline-manifest" } };
                return Promise.resolve(b) }
            if (b = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a)) {
                var c = Number(b[1]),
                    d = new Re;
                return d.init(Xe).then(function() {
                    return d.get("segment", c) }).then(function(b) {
                    return d.o().then(function() {
                        if (!b) throw new r(9, 9003, c);
                        return { uri: a, data: b.data, headers: {} } }) }) }
            return Promise.reject(new r(1, 9004, a)) }
        m("shaka.offline.OfflineScheme", af);
        Ea.offline = af;

        function bf(a, b, c) { this.b = {};
            this.i = c;
            this.m = a;
            this.l = b;
            this.j = this.a = null;
            this.f = this.h = this.g = this.c = 0 }
        bf.prototype.o = function() {
            var a = this.j || Promise.resolve();
            this.b = {};
            this.j = this.a = this.l = this.m = this.i = null;
            return a };

        function cf(a, b, c, d, e) { a.b[b] = a.b[b] || [];
            a.b[b].push({ uris: c.a(), M: c.M, D: c.D, jb: d, Ea: e }) }

        function df(a, b) { a.c = 0;
            a.g = 0;
            a.h = 0;
            a.f = 0;
            C(a.b).forEach(function(a) { a.forEach(function(a) { null != a.D ? this.c += a.D - a.M + 1 : this.h += a.jb }.bind(this)) }.bind(a));
            a.a = b;
            a.a.size = a.c;
            var c = C(a.b).map(function(a) {
                var b = 0,
                    c = function() {
                        if (!this.i) return Promise.reject(new r(9, 9002));
                        if (b >= a.length) return Promise.resolve();
                        var d = a[b++];
                        return ef(this, d).then(c) }.bind(this);
                return c() }.bind(a));
            a.b = {};
            return a.j = Promise.all(c) }

        function ef(a, b) {
            var c = Ga(b.uris, a.l);
            if (b.M || null != b.D) c.headers.Range = "bytes=" + b.M + "-" + (null == b.D ? "" : b.D);
            var d;
            return a.m.request(1, c).then(function(a) {
                if (!this.a) return Promise.reject(new r(9, 9002));
                d = a.data.byteLength;
                return b.Ea(a.data) }.bind(a)).then(function() {
                if (!this.a) return Promise.reject(new r(9, 9002));
                null == b.D ? (this.a.size += d, this.f += b.jb) : this.g += d;
                var a = (this.g + this.f) / (this.c + this.h),
                    c = Ye(this.a);
                this.i.progressCallback(c, a) }.bind(a)) };

        function X(a) { this.a = new Re;
            this.c = a;
            this.j = ff(this);
            this.h = null;
            this.v = !1;
            this.i = null;
            this.l = [];
            this.f = -1;
            this.m = 0;
            this.b = null;
            this.g = new bf(a.i, a.getConfiguration().streaming.retryParameters, this.j) }
        m("shaka.offline.Storage", X);

        function gf() {
            return !!window.indexedDB }
        X.support = gf;
        X.prototype.o = function() {
            var a = this.l,
                b = this.a,
                c = this.g ? this.g.o()["catch"](function() {}).then(function() {
                    return Promise.all(a.map(function(a) {
                        return b.remove("segment", a) })) }).then(function() {
                    return b.o() }) : Promise.resolve();
            this.j = this.c = this.g = this.a = null;
            return c };
        X.prototype.destroy = X.prototype.o;
        X.prototype.configure = function(a) { Oc(this.j, a, ff(this), {}, "") };
        X.prototype.configure = X.prototype.configure;
        X.prototype.Zc = function(a, b, c) {
            function d(a) { f = a }
            if (this.v) return Promise.reject(new r(9, 9006));
            this.v = !0;
            var e, f = null;
            return hf(this).then(function() { Y(this);
                return jf(this, a, d, c) }.bind(this)).then(function(c) {
                Y(this);
                this.b = c.manifest;
                this.h = c.Tb;
                if (this.b.presentationTimeline.V() || this.b.presentationTimeline.ga()) throw new r(9, 9005, a);
                this.b.periods.forEach(this.s.bind(this));
                this.f = this.a.b.manifest++;
                this.m = 0;
                c = this.b.periods.map(this.w.bind(this));
                var d = this.h.b,
                    f = gb(this.h);
                if (d) {
                    if (!f.length) throw new r(9,
                        9007, a);
                    d.initData = []
                }
                e = { key: this.f, originalManifestUri: a, duration: this.m, size: 0, periods: c, sessionIds: f, drmInfo: d, appMetadata: b };
                return df(this.g, e)
            }.bind(this)).then(function() { Y(this);
                if (f) throw f;
                return Ve(this.a, "manifest", e) }.bind(this)).then(function() {
                return kf(this) }.bind(this)).then(function() {
                return Ye(e) }.bind(this))["catch"](function(a) {
                return kf(this)["catch"](w).then(function() {
                    throw a; }) }.bind(this))
        };
        X.prototype.store = X.prototype.Zc;
        X.prototype.remove = function(a) {
            function b(a) { 6013 != a.code && (e = a) }
            var c = a.offlineUri,
                d = /^offline:([0-9]+)$/.exec(c);
            if (!d) return Promise.reject(new r(9, 9004, c));
            var e = null,
                f, g, h = Number(d[1]);
            return hf(this).then(function() { Y(this);
                return this.a.get("manifest", h) }.bind(this)).then(function(a) { Y(this);
                if (!a) throw new r(9, 9003, c);
                f = a;
                a = $e(f);
                g = new Za(this.c.i, b, function() {});
                g.configure(this.c.getConfiguration().drm);
                return g.init(a, !0) }.bind(this)).then(function() {
                return db(g, f.sessionIds) }.bind(this)).then(function() {
                return g.o() }.bind(this)).then(function() {
                Y(this);
                if (e) throw e;
                var b = f.periods.map(function(a) {
                        return a.streams.map(function(a) {
                            var b = a.segments.map(function(a) { a = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.uri);
                                return Number(a[1]) });
                            a.initSegmentUri && (a = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(a.initSegmentUri), b.push(Number(a[1])));
                            return b }).reduce(v, []) }).reduce(v, []),
                    c = 0,
                    d = b.length,
                    g = this.j.progressCallback;
                return We(this.a, function(e) { e = b.indexOf(e.key);
                    0 <= e && (g(a, c / d), c++);
                    return 0 <= e }.bind(this))
            }.bind(this)).then(function() {
                Y(this);
                this.j.progressCallback(a,
                    1);
                return this.a.remove("manifest", h)
            }.bind(this))
        };
        X.prototype.remove = X.prototype.remove;
        X.prototype.list = function() {
            var a = [];
            return hf(this).then(function() { Y(this);
                return this.a.forEach("manifest", function(b) { a.push(Ye(b)) }) }.bind(this)).then(function() {
                return a }) };
        X.prototype.list = X.prototype.list;

        function jf(a, b, c, d) {
            function e() {}
            var f = a.c.i,
                g = a.c.getConfiguration(),
                h, l, p;
            return sb(b, f, g.manifest.retryParameters, d).then(function(a) { Y(this);
                p = new a;
                p.configure(g.manifest);
                return p.start(b, f, this.s.bind(this), c) }.bind(a)).then(function(a) { Y(this);
                h = a;
                l = new Za(f, c, e);
                l.configure(g.drm);
                return l.init(h, !0) }.bind(a)).then(function() { Y(this);
                return lf(h) }.bind(a)).then(function() { Y(this);
                return cb(l) }.bind(a)).then(function() { Y(this);
                return p.stop() }.bind(a)).then(function() {
                Y(this);
                return {
                    manifest: h,
                    Tb: l
                }
            }.bind(a))["catch"](function(a) {
                if (p) return p.stop().then(function() {
                    throw a; });
                throw a; })
        }
        X.prototype.A = function(a) {
            var b = [],
                c = a.filter(function(a) {
                    return "video" == a.type && 480 >= a.height });
            c.sort(function(a, b) {
                return b.bandwidth - a.bandwidth });
            c.length && b.push(c[0]);
            for (var d = cc(this.c.getConfiguration().preferredAudioLanguage), c = [0, ac, bc], e = a.filter(function(a) {
                    return "audio" == a.type }), c = c.map(function(a) {
                    return e.filter(function(b) { b = cc(b.language);
                        return $b(a, d, b) }) }), f = e, g = 0; g < c.length; g++) c[g].length && (f = c[g]);
            f.sort(function(a, b) {
                return a.bandwidth - b.bandwidth });
            f.length && b.push(f[Math.floor(f.length /
                2)]);
            var c = cc(this.c.getConfiguration().preferredTextLanguage),
                h = $b.bind(null, bc, c);
            b.push.apply(b, a.filter(function(a) {
                var b = cc(a.language);
                return "text" == a.type && h(b) }));
            return b
        };

        function ff(a) {
            return { trackSelectionCallback: a.A.bind(a), progressCallback: function(a, c) {
                    if (a || c) return null } } }

        function hf(a) {
            return a.a.a ? Promise.resolve() : a.a.init(Xe) }
        X.prototype.s = function(a) {
            function b(a, b, c) { b = b.filter(function(a) {
                    return a.type == c });
                return 0 == b.length ? null : ic(a, b[0]).stream }
            var c = {};
            this.i && (c = { video: b(this.b.periods[0], this.i, "video"), audio: b(this.b.periods[0], this.i, "audio") });
            fc(this.h, c, a);
            ec(a, this.c.getConfiguration().restrictions, { width: Infinity, height: Infinity }) };

        function kf(a) {
            var b = a.h ? a.h.o() : Promise.resolve();
            a.h = null;
            a.b = null;
            a.v = !1;
            a.i = null;
            a.l = [];
            a.f = -1;
            return b }

        function lf(a) { a = a.periods.map(function(a) {
                return a.streamSets }).reduce(v, []).map(function(a) {
                return a.streams }).reduce(v, []);
            return Promise.all(a.map(function(a) {
                return a.createSegmentIndex() })) }
        X.prototype.w = function(a) {
            var b = hc(a, null),
                b = this.j.trackSelectionCallback(b);
            this.i || (this.i = b, this.b.periods.forEach(this.s.bind(this)));
            for (var c = b.length - 1; 0 < c; --c) {
                for (var d = !1, e = c - 1; 0 <= e; --e)
                    if (b[c].type == b[e].type && b[c].kind == b[e].kind && b[c].language == b[e].language) { d = !0;
                        break }
                if (d) break }
            b = b.map(function(b) { b = ic(a, b);
                return mf(this, a, b.$c, b.stream) }.bind(this));
            return { startTime: a.startTime, streams: b } };

        function mf(a, b, c, d) {
            for (var e = [], f = a.b.presentationTimeline.sa(), g = f, h = d.findSegmentPosition(f), l = null != h ? d.getSegmentReference(h) : null; l;) {
                var p = a.a.b.segment++;
                cf(a.g, c.type, l, (l.endTime - l.startTime) * d.bandwidth / 8, function(a, b, c, d) { b = { key: a, data: d, manifestKey: this.f, streamNumber: c, segmentNumber: b };
                    this.l.push(a);
                    return Ve(this.a, "segment", b) }.bind(a, p, l.position, d.id));
                e.push({ startTime: l.startTime, endTime: l.endTime, uri: "offline:" + a.f + "/" + d.id + "/" + p });
                g = l.endTime + b.startTime;
                l = d.getSegmentReference(++h) }
            a.m =
                Math.max(a.m, g - f);
            b = null;
            d.initSegmentReference && (p = a.a.b.segment++, b = "offline:" + a.f + "/" + d.id + "/" + p, cf(a.g, c.type, d.initSegmentReference, 0, function(a, b) {
                var c = { key: p, data: b, manifestKey: this.f, streamNumber: a, segmentNumber: -1 };
                this.l.push(p);
                return Ve(this.a, "segment", c) }.bind(a, d.id)));
            return {
                id: d.id,
                primary: c.primary,
                presentationTimeOffset: d.presentationTimeOffset || 0,
                contentType: c.type,
                mimeType: d.mimeType,
                codecs: d.codecs,
                frameRate: d.frameRate,
                kind: d.kind,
                language: c.language,
                width: d.width || null,
                height: d.height ||
                    null,
                initSegmentUri: b,
                encrypted: d.encrypted,
                keyId: d.keyId,
                segments: e
            }
        }

        function Y(a) {
            if (!a.c) throw new r(9, 9002); }
        Sc.offline = gf;
        m("shaka.polyfill.installAll", function() {
            for (var a = 0; a < nf.length; ++a) nf[a]() });
        var nf = [];

        function of(a) { nf.push(a) }
        m("shaka.polyfill.register", of);

        function pf(a) {
            var b = a.type.replace(/^(webkit|moz|MS)/, "").toLowerCase(),
                b = new Event(b, a);
            a.target.dispatchEvent(b) }
        of(function() {
            if (window.Document) {
                var a = Element.prototype;
                a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || a.webkitRequestFullscreen;
                a = Document.prototype;
                a.exitFullscreen = a.exitFullscreen || a.mozCancelFullScreen || a.msExitFullscreen || a.webkitExitFullscreen;
                "fullscreenElement" in document || Object.defineProperty(document, "fullscreenElement", { get: function() {
                        return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement } });
                document.addEventListener("webkitfullscreenchange",
                    pf);
                document.addEventListener("webkitfullscreenerror", pf);
                document.addEventListener("mozfullscreenchange", pf);
                document.addEventListener("mozfullscreenerror", pf);
                document.addEventListener("MSFullscreenChange", pf);
                document.addEventListener("MSFullscreenError", pf)
            }
        });

        function qf(a) { this.c = [];
            this.b = [];
            this.a = [];
            for (a = new Td(new DataView(a.buffer)); Vd(a);) {
                var b = be(1886614376, a);
                if (-1 == b) break;
                var c = a.a - 8,
                    d = Wd(a);
                if (1 < d) S(a, b - (a.a - c));
                else { S(a, 3);
                    var e = Xa($d(a, 16)),
                        f = [];
                    if (0 < d)
                        for (var d = R(a), g = 0; g < d; ++g) {
                            var h = Xa($d(a, 16));
                            f.push(h) }
                    d = R(a);
                    S(a, d);
                    this.b.push.apply(this.b, f);
                    this.c.push(e);
                    this.a.push({ start: c, end: a.a - 1 });
                    a.a != c + b && S(a, b - (a.a - c)) } } };

        function rf(a, b) {
            try {
                var c = new sf(a, b);
                return Promise.resolve(c) } catch (d) {
                return Promise.reject(d) } }

        function sf(a, b) {
            this.keySystem = a;
            for (var c = !1, d = 0; d < b.length; ++d) {
                var e = b[d],
                    f = { audioCapabilities: [], videoCapabilities: [], persistentState: "optional", distinctiveIdentifier: "optional", initDataTypes: e.initDataTypes, sessionTypes: ["temporary"], label: e.label },
                    g = !1;
                if (e.audioCapabilities)
                    for (var h = 0; h < e.audioCapabilities.length; ++h) {
                        var l = e.audioCapabilities[h];
                        if (l.contentType) {
                            var g = !0,
                                p = l.contentType.split(";")[0];
                            MSMediaKeys.isTypeSupported(this.keySystem, p) && (f.audioCapabilities.push(l), c = !0) } }
                if (e.videoCapabilities)
                    for (h =
                        0; h < e.videoCapabilities.length; ++h) l = e.videoCapabilities[h], l.contentType && (g = !0, p = l.contentType.split(";")[0], MSMediaKeys.isTypeSupported(this.keySystem, p) && (f.videoCapabilities.push(l), c = !0));
                g || (c = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
                "required" == e.persistentState && (f.persistentState = "required", f.sessionTypes = ["persistent-license"]);
                if (c) { this.a = f;
                    return }
            }
            c = Error("Unsupported keySystem");
            c.name = "NotSupportedError";
            c.code = DOMException.NOT_SUPPORTED_ERR;
            throw c;
        }
        sf.prototype.createMediaKeys = function() {
            var a = new tf(this.keySystem);
            return Promise.resolve(a) };
        sf.prototype.getConfiguration = function() {
            return this.a };

        function uf(a) {
            var b = this.mediaKeys;
            b && b != a && vf(b, null);
            delete this.mediaKeys;
            return (this.mediaKeys = a) ? vf(a, this) : Promise.resolve() }

        function tf(a) { this.a = new MSMediaKeys(a);
            this.b = new A }
        tf.prototype.createSession = function(a) {
            if ("temporary" != (a || "temporary")) throw new TypeError("Session type " + a + " is unsupported on this platform.");
            return new wf(this.a) };
        tf.prototype.setServerCertificate = function() {
            return Promise.reject(Error("setServerCertificate not supported on this platform.")) };

        function vf(a, b) {
            function c() { b.msSetMediaKeys(d.a);
                b.removeEventListener("loadedmetadata", c) }
            Ja(a.b);
            if (!b) return Promise.resolve();
            B(a.b, b, "msneedkey", xf);
            var d = a;
            try {
                return 1 <= b.readyState ? b.msSetMediaKeys(a.a) : b.addEventListener("loadedmetadata", c), Promise.resolve() } catch (e) {
                return Promise.reject(e) } }

        function wf(a) { n.call(this);
            this.c = null;
            this.g = a;
            this.b = this.a = null;
            this.f = new A;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new y;
            this.keyStatuses = new yf }
        ba(wf);
        k = wf.prototype;
        k.generateRequest = function(a, b) { this.a = new y;
            try { this.c = this.g.createSession("video/mp4", new Uint8Array(b), null), B(this.f, this.c, "mskeymessage", this.nc.bind(this)), B(this.f, this.c, "mskeyadded", this.lc.bind(this)), B(this.f, this.c, "mskeyerror", this.mc.bind(this)), zf(this, "status-pending") } catch (c) { this.a.reject(c) }
            return this.a };
        k.load = function() {
            return Promise.reject(Error("MediaKeySession.load not yet supported")) };
        k.update = function(a) { this.b = new y;
            try { this.c.update(new Uint8Array(a)) } catch (b) { this.b.reject(b) }
            return this.b };
        k.close = function() {
            try { this.c.close(), this.closed.resolve(), Ja(this.f) } catch (a) { this.closed.reject(a) }
            return this.closed };
        k.remove = function() {
            return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform")) };

        function xf(a) {
            var b = document.createEvent("CustomEvent");
            b.initCustomEvent("encrypted", !1, !1, null);
            b.initDataType = "cenc";
            if (a = a.initData) {
                var c = new qf(a);
                if (!(1 >= c.a.length)) {
                    for (var d = [], e = 0; e < c.a.length; e++) d.push(a.subarray(c.a[e].start, c.a[e].end + 1));
                    e = Af;
                    a = [];
                    for (c = 0; c < d.length; ++c) {
                        for (var f = !1, g = 0; g < a.length && !(f = e ? e(d[c], a[g]) : d[c] === a[g]); ++g);
                        f || a.push(d[c]) }
                    for (e = d = 0; e < a.length; e++) d += a[e].length;
                    d = new Uint8Array(d);
                    for (e = c = 0; e < a.length; e++) d.set(a[e], c), c += a[e].length;
                    a = d } }
            b.initData =
                a;
            this.dispatchEvent(b)
        }

        function Af(a, b) {
            return Ya(a, b) }
        k.nc = function(a) { this.a && (this.a.resolve(), this.a = null);
            this.dispatchEvent(new J("message", { messageType: void 0 == this.keyStatuses.Wa() ? "licenserequest" : "licenserenewal", message: a.message.buffer })) };
        k.lc = function() { this.a ? (zf(this, "usable"), this.a.resolve(), this.a = null) : this.b && (zf(this, "usable"), this.b.resolve(), this.b = null) };
        k.mc = function() {
            var a = Error("EME PatchedMediaKeysMs key error");
            a.errorCode = this.c.error;
            if (this.a) this.a.reject(a), this.a = null;
            else if (this.b) this.b.reject(a), this.b = null;
            else switch (this.c.error.code) {
                case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
                case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                    zf(this, "output-not-allowed");
                default:
                    zf(this, "internal-error") } };

        function zf(a, b) { a.keyStatuses.fb(b);
            a.dispatchEvent(new J("keystatuseschange")) }

        function yf() { this.size = 0;
            this.a = void 0 }
        var Bf;
        k = yf.prototype;
        k.fb = function(a) { this.size = void 0 == a ? 0 : 1;
            this.a = a };
        k.Wa = function() {
            return this.a };
        k.forEach = function(a) { this.a && a(this.a, Bf) };
        k.get = function(a) {
            if (this.has(a)) return this.a };
        k.has = function(a) {
            var b = Bf;
            return this.a && Ya(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1 };
        k.keys = function() {};

        function Cf() {
            return Promise.reject(Error("The key system specified is not supported.")) }

        function Df(a) {
            return a ? Promise.reject(Error("MediaKeys not supported.")) : Promise.resolve() }

        function Ef() {
            throw new TypeError("Illegal constructor."); }
        Ef.prototype.createSession = function() {};
        Ef.prototype.setServerCertificate = function() {};

        function Ff() {
            throw new TypeError("Illegal constructor."); }
        Ff.prototype.getConfiguration = function() {};
        Ff.prototype.createMediaKeys = function() {};
        var Gf = "";

        function Hf(a) { Gf = a;
            If = (new Uint8Array([0])).buffer;
            navigator.requestMediaKeySystemAccess = Jf;
            delete HTMLMediaElement.prototype.mediaKeys;
            HTMLMediaElement.prototype.mediaKeys = null;
            HTMLMediaElement.prototype.setMediaKeys = Kf;
            window.MediaKeys = Lf;
            window.MediaKeySystemAccess = Mf }

        function Nf(a) {
            var b = Gf;
            return b ? b + a.charAt(0).toUpperCase() + a.slice(1) : a }

        function Jf(a, b) {
            try {
                var c = new Mf(a, b);
                return Promise.resolve(c) } catch (d) {
                return Promise.reject(d) } }

        function Kf(a) {
            var b = this.mediaKeys;
            b && b != a && Of(b, null);
            delete this.mediaKeys;
            (this.mediaKeys = a) && Of(a, this);
            return Promise.resolve() }

        function Mf(a, b) {
            this.a = this.keySystem = a;
            var c = !0;
            "org.w3.clearkey" == a && (this.a = "webkit-org.w3.clearkey", c = !1);
            var d = !1,
                e;
            e = document.getElementsByTagName("video");
            e = e.length ? e[0] : document.createElement("video");
            for (var f = 0; f < b.length; ++f) {
                var g = b[f],
                    h = { audioCapabilities: [], videoCapabilities: [], persistentState: "optional", distinctiveIdentifier: "optional", initDataTypes: g.initDataTypes, sessionTypes: ["temporary"], label: g.label },
                    l = !1;
                if (g.audioCapabilities)
                    for (var p = 0; p < g.audioCapabilities.length; ++p) {
                        var u =
                            g.audioCapabilities[p];
                        if (u.contentType) {
                            var l = !0,
                                t = u.contentType.split(";")[0];
                            e.canPlayType(t, this.a) && (h.audioCapabilities.push(u), d = !0) }
                    }
                if (g.videoCapabilities)
                    for (p = 0; p < g.videoCapabilities.length; ++p) u = g.videoCapabilities[p], u.contentType && (l = !0, e.canPlayType(u.contentType, this.a) && (h.videoCapabilities.push(u), d = !0));
                l || (d = e.canPlayType("video/mp4", this.a) || e.canPlayType("video/webm", this.a));
                "required" == g.persistentState && (c ? (h.persistentState = "required", h.sessionTypes = ["persistent-license"]) :
                    d = !1);
                if (d) { this.b = h;
                    return }
            }
            c = "Unsupported keySystem";
            if ("org.w3.clearkey" == a || "com.widevine.alpha" == a) c = "None of the requested configurations were supported.";
            c = Error(c);
            c.name = "NotSupportedError";
            c.code = DOMException.NOT_SUPPORTED_ERR;
            throw c;
        }
        Mf.prototype.createMediaKeys = function() {
            var a = new Lf(this.a);
            return Promise.resolve(a) };
        Mf.prototype.getConfiguration = function() {
            return this.b };

        function Lf(a) { this.h = a;
            this.b = null;
            this.a = new A;
            this.c = [];
            this.f = {} }

        function Of(a, b) { a.b = b;
            Ja(a.a);
            var c = Gf;
            b && (B(a.a, b, c + "needkey", a.xc.bind(a)), B(a.a, b, c + "keymessage", a.wc.bind(a)), B(a.a, b, c + "keyadded", a.uc.bind(a)), B(a.a, b, c + "keyerror", a.vc.bind(a))) }
        k = Lf.prototype;
        k.createSession = function(a) {
            var b = a || "temporary";
            if ("temporary" != b && "persistent-license" != b) throw new TypeError("Session type " + a + " is unsupported on this platform.");
            a = this.b || document.createElement("video");
            a.src || (a.src = "about:blank");
            b = new Pf(a, this.h, b);
            this.c.push(b);
            return b };
        k.setServerCertificate = function() {
            return Promise.reject(Error("setServerCertificate not supported on this platform.")) };
        k.xc = function(a) {
            var b = document.createEvent("CustomEvent");
            b.initCustomEvent("encrypted", !1, !1, null);
            b.initDataType = "webm";
            b.initData = a.initData;
            this.b.dispatchEvent(b) };
        k.wc = function(a) {
            var b = Qf(this, a.sessionId);
            b && (a = new J("message", { messageType: void 0 == b.keyStatuses.Wa() ? "licenserequest" : "licenserenewal", message: a.message }), b.b && (b.b.resolve(), b.b = null), b.dispatchEvent(a)) };
        k.uc = function(a) {
            if (a = Qf(this, a.sessionId)) Rf(a, "usable"), a.a && a.a.resolve(), a.a = null };
        k.vc = function(a) {
            var b = Qf(this, a.sessionId);
            if (b) {
                var c = Error("EME v0.1b key error");
                c.errorCode = a.errorCode;
                c.errorCode.systemCode = a.systemCode;!a.sessionId && b.b ? (c.method = "generateRequest", 45 == a.systemCode && (c.message = "Unsupported session type."), b.b.reject(c), b.b = null) : a.sessionId && b.a ? (c.method = "update", b.a.reject(c), b.a = null) : (c = a.systemCode, a.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? Rf(b, "output-restricted") : 1 == c ? Rf(b, "expired") : Rf(b, "internal-error")) } };

        function Qf(a, b) {
            var c = a.f[b];
            return c ? c : (c = a.c.shift()) ? (c.sessionId = b, a.f[b] = c) : null }

        function Pf(a, b, c) { n.call(this);
            this.f = a;
            this.i = !1;
            this.a = this.b = null;
            this.c = b;
            this.g = c;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new y;
            this.keyStatuses = new Sf }
        ba(Pf);

        function Tf(a, b, c) {
            if (a.i) return Promise.reject(Error("The session is already initialized."));
            a.i = !0;
            var d;
            try {
                if ("persistent-license" == a.g)
                    if (c) d = new Uint8Array(Ra("LOAD_SESSION|" + c));
                    else {
                        var e = Ra("PERSISTENT|"),
                            f = new Uint8Array(e.byteLength + b.byteLength);
                        f.set(new Uint8Array(e), 0);
                        f.set(new Uint8Array(b), e.byteLength);
                        d = f }
                else d = new Uint8Array(b) } catch (h) {
                return Promise.reject(h) }
            a.b = new y;
            var g = Nf("generateKeyRequest");
            try { a.f[g](a.c, d) } catch (h) {
                if ("InvalidStateError" != h.name) return a.b = null,
                    Promise.reject(h);
                setTimeout(function() {
                    try { this.f[g](this.c, d) } catch (l) { this.b.reject(l), this.b = null } }.bind(a), 10)
            }
            return a.b
        }
        k = Pf.prototype;
        k.hb = function(a, b) {
            if (this.a) this.a.then(this.hb.bind(this, a, b))["catch"](this.hb.bind(this, a, b));
            else { this.a = a;
                var c, d; "webkit-org.w3.clearkey" == this.c ? (c = D(b), d = JSON.parse(c), "oct" != d.keys[0].kty && (this.a.reject(Error("Response is not a valid JSON Web Key Set.")), this.a = null), c = Va(d.keys[0].k), d = Va(d.keys[0].kid)) : (c = new Uint8Array(b), d = null);
                var e = Nf("addKey");
                try { this.f[e](this.c, c, d, this.sessionId) } catch (f) { this.a.reject(f), this.a = null } } };

        function Rf(a, b) { a.keyStatuses.fb(b);
            a.dispatchEvent(new J("keystatuseschange")) }
        k.generateRequest = function(a, b) {
            return Tf(this, b, null) };
        k.load = function(a) {
            return "persistent-license" == this.g ? Tf(this, null, a) : Promise.reject(Error("Not a persistent session.")) };
        k.update = function(a) {
            var b = new y;
            this.hb(b, a);
            return b };
        k.close = function() {
            if ("persistent-license" != this.g) {
                if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
                var a = Nf("cancelKeyRequest");
                try { this.f[a](this.c, this.sessionId) } catch (b) {} }
            this.closed.resolve();
            return this.closed };
        k.remove = function() {
            return "persistent-license" != this.g ? Promise.reject(Error("Not a persistent session.")) : this.close() };

        function Sf() { this.size = 0;
            this.a = void 0 }
        var If;
        k = Sf.prototype;
        k.fb = function(a) { this.size = void 0 == a ? 0 : 1;
            this.a = a };
        k.Wa = function() {
            return this.a };
        k.forEach = function(a) { this.a && a(this.a, If) };
        k.get = function(a) {
            if (this.has(a)) return this.a };
        k.has = function(a) {
            var b = If;
            return this.a && Ya(new Uint8Array(a), new Uint8Array(b)) ? !0 : !1 };
        k.keys = function() {};
        of(function() {
            !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (HTMLMediaElement.prototype.webkitGenerateKeyRequest ? Hf("webkit") : HTMLMediaElement.prototype.generateKeyRequest ? Hf("") : window.MSMediaKeys ? (Bf = (new Uint8Array([0])).buffer, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = uf, window.MediaKeys = tf, window.MediaKeySystemAccess = sf, navigator.requestMediaKeySystemAccess =
                rf) : (navigator.requestMediaKeySystemAccess = Cf, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Df, window.MediaKeys = Ef, window.MediaKeySystemAccess = Ff))
        });

        function Uf() {
            var a = MediaSource.prototype.addSourceBuffer;
            MediaSource.prototype.addSourceBuffer = function() {
                var b = a.apply(this, arguments);
                b.abort = function() {};
                return b } }

        function Vf() {
            var a = MediaSource.prototype.endOfStream;
            MediaSource.prototype.endOfStream = function() {
                for (var b = 0, d = 0; d < this.sourceBuffers.length; ++d) var e = this.sourceBuffers[d],
                    e = e.buffered.end(e.buffered.length - 1),
                    b = Math.max(b, e);
                if (!isNaN(this.duration) && b < this.duration)
                    for (this.pb = !0, d = 0; d < this.sourceBuffers.length; ++d) e = this.sourceBuffers[d], e.lb = !1;
                return a.apply(this, arguments) };
            var b = MediaSource.prototype.addSourceBuffer;
            MediaSource.prototype.addSourceBuffer = function() {
                var a = b.apply(this, arguments);
                a.h = this;
                a.addEventListener("updateend", Wf, !1);
                this.a || (this.addEventListener("sourceclose", Xf, !1), this.a = !0);
                return a
            }
        }

        function Wf(a) {
            var b = a.target,
                c = b.h;
            if (c.pb) { a.preventDefault();
                a.stopPropagation();
                a.stopImmediatePropagation();
                b.lb = !0;
                for (a = 0; a < c.sourceBuffers.length; ++a)
                    if (0 == c.sourceBuffers[a].lb) return;
                c.pb = !1 } }

        function Xf(a) { a = a.target;
            for (var b = 0; b < a.sourceBuffers.length; ++b) a.sourceBuffers[b].removeEventListener("updateend", Wf, !1);
            a.removeEventListener("sourceclose", Xf, !1) }
        of(function() {
            if (window.MediaSource) {
                var a = navigator.vendor,
                    b = navigator.appVersion;!a || !b || 0 > a.indexOf("Apple") || (0 <= b.indexOf("Version/8") ? window.MediaSource = null : 0 <= b.indexOf("Version/9") ? Uf() : 0 <= b.indexOf("Version/10") && (Uf(), Vf())) } });

        function Z(a) { this.c = [];
            this.b = [];
            this.ja = Yf;
            if (a) try { a(this.X.bind(this), this.a.bind(this)) } catch (b) { this.a(b) } }
        var Yf = 0;

        function Zf(a) {
            var b = new Z;
            b.X(a);
            return b }

        function $f(a) {
            var b = new Z;
            b.a(a);
            return b }

        function ag(a) {
            function b(a, b, c) { a.ja == Yf && (e[b] = c, d++, d == e.length && a.X(e)) }
            var c = new Z;
            if (!a.length) return c.X([]), c;
            for (var d = 0, e = Array(a.length), f = c.a.bind(c), g = 0; g < a.length; ++g) a[g] && a[g].then ? a[g].then(b.bind(null, c, g), f) : b(c, g, a[g]);
            return c }

        function bg(a) {
            for (var b = new Z, c = b.X.bind(b), d = b.a.bind(b), e = 0; e < a.length; ++e) a[e] && a[e].then ? a[e].then(c, d) : c(a[e]);
            return b }
        Z.prototype.then = function(a, b) {
            var c = new Z;
            switch (this.ja) {
                case 1:
                    cg(this, c, a);
                    break;
                case 2:
                    cg(this, c, b);
                    break;
                case Yf:
                    this.c.push({ J: c, Ea: a }), this.b.push({ J: c, Ea: b }) }
            return c };
        Z.prototype["catch"] = function(a) {
            return this.then(void 0, a) };
        Z.prototype.X = function(a) {
            if (this.ja == Yf) { this.Qa = a;
                this.ja = 1;
                for (a = 0; a < this.c.length; ++a) cg(this, this.c[a].J, this.c[a].Ea);
                this.c = [];
                this.b = [] } };
        Z.prototype.a = function(a) {
            if (this.ja == Yf) { this.Qa = a;
                this.ja = 2;
                for (a = 0; a < this.b.length; ++a) cg(this, this.b[a].J, this.b[a].Ea);
                this.c = [];
                this.b = [] } };

        function cg(a, b, c) { dg.push(function() {
                if (c && "function" == typeof c) {
                    try {
                        var a = c(this.Qa) } catch (f) { b.a(f);
                        return }
                    var e;
                    try { e = a && a.then } catch (f) { b.a(f);
                        return }
                    a instanceof Z ? a == b ? b.a(new TypeError("Chaining cycle detected")) : a.then(b.X.bind(b), b.a.bind(b)) : e ? eg(a, e, b) : b.X(a) } else 1 == this.ja ? b.X(this.Qa) : b.a(this.Qa) }.bind(a));
            null == fg && (fg = gg(hg)) }

        function eg(a, b, c) {
            try {
                var d = !1;
                b.call(a, function(a) {
                    if (!d) { d = !0;
                        var b;
                        try { b = a && a.then } catch (g) { c.a(g);
                            return }
                        b ? eg(a, b, c) : c.X(a) } }, c.a.bind(c)) } catch (e) { c.a(e) } }

        function hg() {
            for (; dg.length;) { null != fg && (ig(fg), fg = null);
                var a = dg;
                dg = [];
                for (var b = 0; b < a.length; ++b) a[b]() } }

        function gg() {
            return 0 }

        function ig() {}
        var fg = null,
            dg = [];
        of(function(a) { window.setImmediate ? (gg = function(a) {
                return window.setImmediate(a) }, ig = function(a) {
                return window.clearImmediate(a) }) : (gg = function(a) {
                return window.setTimeout(a, 0) }, ig = function(a) {
                return window.clearTimeout(a) });
            if (!window.Promise || a) window.Promise = Z, window.Promise.resolve = Zf, window.Promise.reject = $f, window.Promise.all = ag, window.Promise.race = bg, window.Promise.prototype.then = Z.prototype.then, window.Promise.prototype["catch"] = Z.prototype["catch"] });

        function jg() {
            return { droppedVideoFrames: this.webkitDroppedFrameCount, totalVideoFrames: this.webkitDecodedFrameCount, corruptedVideoFrames: 0, creationTime: NaN, totalFrameDelay: 0 } }
        of(function() {
            if (window.HTMLVideoElement) {
                var a = HTMLVideoElement.prototype;!a.getVideoPlaybackQuality && "webkitDroppedFrameCount" in a && (a.getVideoPlaybackQuality = jg) } });
    }.call(g, this));
    if (typeof(module) != "undefined" && module.exports) module.exports = g.shaka;
    else if (typeof(define) != "undefined" && define.amd) define(function() {
        return g.shaka });
    else this.shaka = g.shaka;
})();

//# sourceMappingURL=shaka-player.compiled.map
