// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"dist/index.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
      o = "function" == typeof require && require;

  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[n][1][r] || r;
      }, p.cache = {};
      var l = r[n] = new u.Module(n);
      e[n][0].call(l.exports, p, l, l.exports, this);
    }

    return r[n].exports;

    function p(e) {
      return u(p.resolve(e));
    }
  }

  u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {};
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n;
    }, {}];
  };

  for (var f = 0; f < n.length; f++) {
    u(n[f]);
  }

  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
      return c;
    }) : t && (this[t] = c);
  }

  return u;
}({
  "EWvy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = {
      gupik: "gupik",
      skalar: "skalar",
      neonka: "neonka"
    },
        a = function a(t, _a) {
      return t || _a ? Math.random() * (_a - t) + t : Math.random() > .5 ? 1 : 0;
    },
        e = function e(_e) {
      var o = {
        x: a(20, 80),
        y: a(25, 75),
        z: a()
      };

      switch (console.log(o), _e) {
        case t.gupik:
          return {
            type: t.gupik,
            html: '<div class="'.concat("fish fish--" + t.gupik, '" style="left: ').concat(o.x, "%; top: ").concat(o.y, "%; transform: rotateY(").concat(180 * o.z, 'deg);"></div>')
          };

        case t.skalar:
          return {
            type: t.skalar,
            html: '<div class="'.concat("fish fish--" + t.skalar, '" style="left: ').concat(o.x, "%; top: ").concat(o.y, "%; transform: rotateY(").concat(180 * o.z, 'deg);"></div>')
          };

        case t.neonka:
          return {
            type: t.neonka,
            html: '<div class="'.concat("fish fish--" + t.neonka, '" style="left: ').concat(o.x, "%; top: ").concat(o.y, "%; transform: rotateY(").concat(180 * o.z, 'deg)"></div>')
          };

        default:
          return {};
      }
    };

    exports.default = e;
  }, {}],
  "BF+B": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./fish"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function n(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function s(e, t, i) {
      return t && n(e.prototype, t), i && n(e, i), e;
    }

    var r = function () {
      function t(e, n) {
        i(this, t), this.fishbowl = e, this.buttons = n, this.buttons = n;
      }

      return s(t, [{
        key: "init",
        value: function value() {
          var e = this;
          this.buttons.forEach(function (t) {
            "add" === t.dataset.action ? t.addEventListener("click", function () {
              return e.add(t.dataset.fish);
            }) : t.addEventListener("click", function () {
              return e.remove(t.dataset.fish);
            });
          });
        }
      }, {
        key: "add",
        value: function value(t) {
          this.fishbowl.fishes.push((0, e.default)(t)), this.fishbowl.render();
        }
      }, {
        key: "remove",
        value: function value(e) {
          if (this.fishbowl.stats[e]) {
            var t = this.fishbowl.fishes.findIndex(function (t) {
              return t.type === e;
            });
            t > -1 && this.fishbowl.fishes.splice(t, 1), this.fishbowl.render();
          }
        }
      }]), t;
    }();

    exports.default = r;
  }, {
    "./fish": "EWvy"
  }],
  "J5/j": [function (require, module, exports) {
    "use strict";

    function t(t, s) {
      if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
    }

    function s(t, s) {
      for (var e = 0; e < s.length; e++) {
        var a = s[e];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }

    function e(t, e, a) {
      return e && s(t.prototype, e), a && s(t, a), t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var a = function () {
      function s(e, a) {
        t(this, s), this.statsContainer = a, this.fishbowl = e, this.stats = {}, this.skalar = this.statsContainer.querySelector('[data-type="skalar"]'), this.gupik = this.statsContainer.querySelector('[data-type="gupik"]'), this.neonka = this.statsContainer.querySelector('[data-type="neonka"]'), this.sum = this.statsContainer.querySelector('[data-type="sum"]');
      }

      return e(s, [{
        key: "updateStats",
        value: function value() {
          this.stats = this.fishbowl.fishes.reduce(function (t, s) {
            return t[s.type] ? t[s.type]++ : t[s.type] = 1, t;
          }, {});
          var t = 0;

          for (var s in this.stats) {
            t += this.stats[s];
          }

          this.stats.sum = t, this.renderStats();
        }
      }, {
        key: "renderStats",
        value: function value() {
          this.skalar.textContent = this.stats.skalar ? this.stats.skalar : "0", this.gupik.textContent = this.stats.gupik ? this.stats.gupik : "0", this.neonka.textContent = this.stats.neonka ? this.stats.neonka : "0", this.sum.textContent = this.stats.sum;
        }
      }]), s;
    }();

    exports.default = a;
  }, {}],
  "KnwT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = n(require("./controls")),
        e = n(require("./stats"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function s(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    function r(t, e, n) {
      return e && s(t.prototype, e), n && s(t, n), t;
    }

    var o = function () {
      function n(s, r) {
        i(this, n), this.fishbowl = s, this.controls = new t.default(this, document.querySelectorAll(".controls__button")), this.stats = new e.default(this, r), this.fishes = [];
      }

      return r(n, [{
        key: "init",
        value: function value() {
          this.controls.init();
        }
      }, {
        key: "updateFishes",
        value: function value() {
          if (this.fishes.length > 0) {
            var t = this.fishes.map(function (t) {
              return t.html;
            }).join("");
            this.fishbowl.innerHTML = t;
          }
        }
      }, {
        key: "render",
        value: function value() {
          this.stats.updateStats(), this.updateFishes();
        }
      }]), n;
    }();

    exports.default = o;
  }, {
    "./controls": "BF+B",
    "./stats": "J5/j"
  }],
  "91zb": [function (require, module, exports) {}, {
    "./styles/assets/neonka.png": [["neonka.094b6382.png", "SIgq"], "SIgq"],
    "./styles/assets/gupik.png": [["gupik.fb8d89da.png", "HkAV"], "HkAV"],
    "./styles/assets/skalar.png": [["skalar.228d19e5.png", "6ZTD"], "6ZTD"]
  }],
  "Focm": [function (require, module, exports) {
    "use strict";

    var e = r(require("./scripts/fishbowl"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    require("./style.scss");

    var t = document.querySelector(".aquarium__bowl"),
        u = document.querySelector(".stats__container"),
        s = new e.default(t, u);
    s.init();
  }, {
    "./scripts/fishbowl": "KnwT",
    "./style.scss": "91zb"
  }]
}, {}, ["Focm"], null);
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43493" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/index.js"], null)
//# sourceMappingURL=/dist.de44d8ea.map