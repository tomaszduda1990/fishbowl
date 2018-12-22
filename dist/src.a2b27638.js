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
})({"src/scripts/fish.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var fishTypes = {
  gupik: 'gupik',
  skalar: 'skalar',
  neonka: 'neonka'
};

var getRandom = function getRandom(min, max) {
  if (min || max) {
    return Math.random() * (max - min) + min;
  } else {
    var num = Math.random() > 0.5 ? 1 : 0;
    return num;
  }
};

var _default = function _default(type) {
  var position = {
    x: getRandom(20, 80),
    y: getRandom(25, 75),
    z: getRandom()
  };
  console.log(position);

  switch (type) {
    case fishTypes.gupik:
      return {
        type: fishTypes.gupik,
        html: "<div class=\"".concat('fish fish--' + fishTypes.gupik, "\" style=\"left: ").concat(position.x, "%; top: ").concat(position.y, "%; transform: rotateY(").concat(180 * position.z, "deg);\"></div>")
      };

    case fishTypes.skalar:
      return {
        type: fishTypes.skalar,
        html: "<div class=\"".concat('fish fish--' + fishTypes.skalar, "\" style=\"left: ").concat(position.x, "%; top: ").concat(position.y, "%; transform: rotateY(").concat(180 * position.z, "deg);\"></div>")
      };

    case fishTypes.neonka:
      return {
        type: fishTypes.neonka,
        html: "<div class=\"".concat('fish fish--' + fishTypes.neonka, "\" style=\"left: ").concat(position.x, "%; top: ").concat(position.y, "%; transform: rotateY(").concat(180 * position.z, "deg)\"></div>")
      };

    default:
      return {};
  }
};

exports.default = _default;
},{}],"src/scripts/controls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fish = _interopRequireDefault(require("./fish"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controls =
/*#__PURE__*/
function () {
  function Controls(fishbowl, buttons) {
    _classCallCheck(this, Controls);

    this.fishbowl = fishbowl;
    this.buttons = buttons;
    this.buttons = buttons;
  }

  _createClass(Controls, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.buttons.forEach(function (button) {
        if (button.dataset.action === 'add') {
          button.addEventListener('click', function () {
            return _this.add(button.dataset.fish);
          });
        } else {
          button.addEventListener('click', function () {
            return _this.remove(button.dataset.fish);
          });
        }
      });
    }
  }, {
    key: "add",
    value: function add(fishType) {
      this.fishbowl.fishes.push((0, _fish.default)(fishType));
      this.fishbowl.render();
    }
  }, {
    key: "remove",
    value: function remove(fishType) {
      if (this.fishbowl.stats[fishType]) {
        var index = this.fishbowl.fishes.findIndex(function (fish) {
          return fish.type === fishType;
        });

        if (index > -1) {
          this.fishbowl.fishes.splice(index, 1);
        }

        this.fishbowl.render();
      }
    }
  }]);

  return Controls;
}();

exports.default = Controls;
},{"./fish":"src/scripts/fish.js"}],"src/scripts/stats.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stats =
/*#__PURE__*/
function () {
  function Stats(fishbowl, statsContainer) {
    _classCallCheck(this, Stats);

    this.statsContainer = statsContainer;
    this.fishbowl = fishbowl;
    this.stats = {};
    this.skalar = this.statsContainer.querySelector('[data-type="skalar"]');
    this.gupik = this.statsContainer.querySelector('[data-type="gupik"]');
    this.neonka = this.statsContainer.querySelector('[data-type="neonka"]');
    this.sum = this.statsContainer.querySelector('[data-type="sum"]');
  }

  _createClass(Stats, [{
    key: "updateStats",
    value: function updateStats() {
      this.stats = this.fishbowl.fishes.reduce(function (obj, fish) {
        if (obj[fish.type]) {
          obj[fish.type]++;
        } else {
          obj[fish.type] = 1;
        }

        return obj;
      }, {});
      var sum = 0;

      for (var key in this.stats) {
        sum += this.stats[key];
      }

      this.stats.sum = sum;
      this.renderStats();
    }
  }, {
    key: "renderStats",
    value: function renderStats() {
      this.skalar.textContent = this.stats.skalar ? this.stats.skalar : '0';
      this.gupik.textContent = this.stats.gupik ? this.stats.gupik : '0';
      this.neonka.textContent = this.stats.neonka ? this.stats.neonka : '0';
      this.sum.textContent = this.stats.sum;
    }
  }]);

  return Stats;
}();

exports.default = Stats;
},{}],"src/scripts/fishbowl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controls = _interopRequireDefault(require("./controls"));

var _stats = _interopRequireDefault(require("./stats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fishbowl =
/*#__PURE__*/
function () {
  function Fishbowl(fishbowl, stats) {
    _classCallCheck(this, Fishbowl);

    this.fishbowl = fishbowl;
    this.controls = new _controls.default(this, document.querySelectorAll('.controls__button'));
    this.stats = new _stats.default(this, stats);
    this.fishes = [];
  }

  _createClass(Fishbowl, [{
    key: "init",
    value: function init() {
      this.controls.init();
    }
  }, {
    key: "updateFishes",
    value: function updateFishes() {
      if (this.fishes.length > 0) {
        var html = this.fishes.map(function (fish) {
          return fish.html;
        }).join('');
        this.fishbowl.innerHTML = html;
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.stats.updateStats();
      this.updateFishes();
    }
  }]);

  return Fishbowl;
}();

exports.default = Fishbowl;
},{"./controls":"src/scripts/controls.js","./stats":"src/scripts/stats.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./styles/assets/neonka.png":[["neonka.ebf8cf9e.png","src/styles/assets/neonka.png"],"src/styles/assets/neonka.png"],"./styles/assets/gupik.png":[["gupik.1f8f5bff.png","src/styles/assets/gupik.png"],"src/styles/assets/gupik.png"],"./styles/assets/skalar.png":[["skalar.67e04014.png","src/styles/assets/skalar.png"],"src/styles/assets/skalar.png"],"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _fishbowl = _interopRequireDefault(require("./scripts/fishbowl"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bowl = document.querySelector('.aquarium__bowl');
var stats = document.querySelector('.stats__container');
var fishbowl = new _fishbowl.default(bowl, stats);
fishbowl.init();
},{"./scripts/fishbowl":"src/scripts/fishbowl.js","./style.scss":"src/style.scss"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46389" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.map