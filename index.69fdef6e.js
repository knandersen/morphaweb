// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jZB14":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5554dbe369fdef6e";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"40Ce6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
/* import WaveformData from 'waveform-data' */ var _wavesurferJs = require("wavesurfer.js");
var _wavesurferJsDefault = parcelHelpers.interopDefault(_wavesurferJs);
var _markers = require("wavesurfer.js/src/plugin/markers");
var _markersDefault = parcelHelpers.interopDefault(_markers);
const w = new URL(require("44225abcd5a25fb5"));
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
var wavesurfer = _wavesurferJsDefault.default.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    plugins: [
        _markersDefault.default.create({
            markers: [
                {
                    time: 0.5,
                    label: "V1",
                    color: '#ff990a'
                },
                {
                    time: 1,
                    label: "V2",
                    color: '#00ffcc',
                    position: 'top'
                }
            ]
        })
    ]
});
wavesurfer.load(w.href);
const play = ()=>{
    console.log("play");
    if (wavesurfer.isPlaying) wavesurfer.seekTo(0);
    wavesurfer.play();
};
playButton.addEventListener('click', play);
const createMarkers = ()=>{
    console.log(wavesurfer);
};
wavesurfer.on('ready', createMarkers()) /* 
fetch(w.href)
    .then(r => r.arrayBuffer())
    .then(f => {
        console.log(f)
        var wavesurfer = WaveformData.create(f);
    })
 */  //console.log(f)
 /* const loadFile = async (url) => {
    const response = await fetch(url)
    return response.blob()
}
 try {
    const f = await loadFile(w.href);
    var wavesurfer = WaveformData.create(f);
} catch(err) {
    throw new Error(err)
}  */ ;

},{"44225abcd5a25fb5":"dOGeW","wavesurfer.js":"9HZvk","@parcel/transformer-js/src/esmodule-helpers.js":"c8k2O","wavesurfer.js/src/plugin/markers":"ipUfj"}],"dOGeW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('7kdtW') + "walksign.08ac7db9.wav" + "?" + Date.now();

},{"./helpers/bundle-url":"1thnK"}],"1thnK":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9HZvk":[function(require,module,exports) {
/*!
 * wavesurfer.js 5.2.0 (2021-08-16)
 * https://wavesurfer-js.org
 * @license BSD-3-Clause
 */ (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define("WaveSurfer", [], factory);
    else if (typeof exports === 'object') exports["WaveSurfer"] = factory();
    else root["WaveSurfer"] = factory();
})(self, function() {
    return(/******/ (()=>{
        /******/ var __webpack_modules__ = {
            /***/ "./src/drawer.canvasentry.js": (module, exports, __webpack_require__)=>{
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _style = _interopRequireDefault(__webpack_require__(/*! ./util/style */ "./src/util/style.js"));
                var _getId = _interopRequireDefault(__webpack_require__(/*! ./util/get-id */ "./src/util/get-id.js"));
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                /**
 * The `CanvasEntry` class represents an element consisting of a wave `canvas`
 * and an (optional) progress wave `canvas`.
 *
 * The `MultiCanvas` renderer uses one or more `CanvasEntry` instances to
 * render a waveform, depending on the zoom level.
 */ var CanvasEntry1 = /*#__PURE__*/ function() {
                    function CanvasEntry() {
                        _classCallCheck(this, CanvasEntry);
                        /**
     * The wave node
     *
     * @type {HTMLCanvasElement}
     */ this.wave = null;
                        /**
     * The wave canvas rendering context
     *
     * @type {CanvasRenderingContext2D}
     */ this.waveCtx = null;
                        /**
     * The (optional) progress wave node
     *
     * @type {HTMLCanvasElement}
     */ this.progress = null;
                        /**
     * The (optional) progress wave canvas rendering context
     *
     * @type {CanvasRenderingContext2D}
     */ this.progressCtx = null;
                        /**
     * Start of the area the canvas should render, between 0 and 1
     *
     * @type {number}
     */ this.start = 0;
                        /**
     * End of the area the canvas should render, between 0 and 1
     *
     * @type {number}
     */ this.end = 1;
                        /**
     * Unique identifier for this entry
     *
     * @type {string}
     */ this.id = (0, _getId.default)(typeof this.constructor.name !== 'undefined' ? this.constructor.name.toLowerCase() + '_' : 'canvasentry_');
                        /**
     * Canvas 2d context attributes
     *
     * @type {object}
     */ this.canvasContextAttributes = {
                        };
                    }
                    /**
   * Store the wave canvas element and create the 2D rendering context
   *
   * @param {HTMLCanvasElement} element The wave `canvas` element.
   */ _createClass(CanvasEntry, [
                        {
                            key: "initWave",
                            value: function initWave(element) {
                                this.wave = element;
                                this.waveCtx = this.wave.getContext('2d', this.canvasContextAttributes);
                            }
                        },
                        {
                            key: "initProgress",
                            value: function initProgress(element) {
                                this.progress = element;
                                this.progressCtx = this.progress.getContext('2d', this.canvasContextAttributes);
                            }
                        },
                        {
                            key: "updateDimensions",
                            value: function updateDimensions(elementWidth, totalWidth, width, height) {
                                // where the canvas starts and ends in the waveform, represented as a
                                // decimal between 0 and 1
                                this.start = this.wave.offsetLeft / totalWidth || 0;
                                this.end = this.start + elementWidth / totalWidth; // set wave canvas dimensions
                                this.wave.width = width;
                                this.wave.height = height;
                                var elementSize = {
                                    width: elementWidth + 'px'
                                };
                                (0, _style.default)(this.wave, elementSize);
                                if (this.hasProgressCanvas) {
                                    // set progress canvas dimensions
                                    this.progress.width = width;
                                    this.progress.height = height;
                                    (0, _style.default)(this.progress, elementSize);
                                }
                            }
                        },
                        {
                            key: "clearWave",
                            value: function clearWave() {
                                // wave
                                this.waveCtx.clearRect(0, 0, this.waveCtx.canvas.width, this.waveCtx.canvas.height); // progress
                                if (this.hasProgressCanvas) this.progressCtx.clearRect(0, 0, this.progressCtx.canvas.width, this.progressCtx.canvas.height);
                            }
                        },
                        {
                            key: "setFillStyles",
                            value: function setFillStyles(waveColor, progressColor) {
                                this.waveCtx.fillStyle = waveColor;
                                if (this.hasProgressCanvas) this.progressCtx.fillStyle = progressColor;
                            }
                        },
                        {
                            key: "applyCanvasTransforms",
                            value: function applyCanvasTransforms(vertical) {
                                if (vertical) {
                                    // Reflect the waveform across the line y = -x
                                    this.waveCtx.setTransform(0, 1, 1, 0, 0, 0);
                                    if (this.hasProgressCanvas) this.progressCtx.setTransform(0, 1, 1, 0, 0, 0);
                                }
                            }
                        },
                        {
                            key: "fillRects",
                            value: function fillRects(x, y, width, height, radius) {
                                this.fillRectToContext(this.waveCtx, x, y, width, height, radius);
                                if (this.hasProgressCanvas) this.fillRectToContext(this.progressCtx, x, y, width, height, radius);
                            }
                        },
                        {
                            key: "fillRectToContext",
                            value: function fillRectToContext(ctx, x, y, width, height, radius) {
                                if (!ctx) return;
                                if (radius) this.drawRoundedRect(ctx, x, y, width, height, radius);
                                else ctx.fillRect(x, y, width, height);
                            }
                        },
                        {
                            key: "drawRoundedRect",
                            value: function drawRoundedRect(ctx, x, y, width, height, radius) {
                                if (height === 0) return;
                                 // peaks are float values from -1 to 1. Use absolute height values in
                                // order to correctly calculate rounded rectangle coordinates
                                if (height < 0) {
                                    height *= -1;
                                    y -= height;
                                }
                                ctx.beginPath();
                                ctx.moveTo(x + radius, y);
                                ctx.lineTo(x + width - radius, y);
                                ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                                ctx.lineTo(x + width, y + height - radius);
                                ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                                ctx.lineTo(x + radius, y + height);
                                ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                                ctx.lineTo(x, y + radius);
                                ctx.quadraticCurveTo(x, y, x + radius, y);
                                ctx.closePath();
                                ctx.fill();
                            }
                        },
                        {
                            key: "drawLines",
                            value: function drawLines(peaks, absmax, halfH, offsetY, start, end) {
                                this.drawLineToContext(this.waveCtx, peaks, absmax, halfH, offsetY, start, end);
                                if (this.hasProgressCanvas) this.drawLineToContext(this.progressCtx, peaks, absmax, halfH, offsetY, start, end);
                            }
                        },
                        {
                            key: "drawLineToContext",
                            value: function drawLineToContext(ctx, peaks, absmax, halfH, offsetY, start, end) {
                                if (!ctx) return;
                                var length = peaks.length / 2;
                                var first = Math.round(length * this.start); // use one more peak value to make sure we join peaks at ends -- unless,
                                // of course, this is the last canvas
                                var last = Math.round(length * this.end) + 1;
                                var canvasStart = first;
                                var canvasEnd = last;
                                var scale = this.wave.width / (canvasEnd - canvasStart - 1); // optimization
                                var halfOffset = halfH + offsetY;
                                var absmaxHalf = absmax / halfH;
                                ctx.beginPath();
                                ctx.moveTo((canvasStart - first) * scale, halfOffset);
                                ctx.lineTo((canvasStart - first) * scale, halfOffset - Math.round((peaks[2 * canvasStart] || 0) / absmaxHalf));
                                var i, peak, h;
                                for(i = canvasStart; i < canvasEnd; i++){
                                    peak = peaks[2 * i] || 0;
                                    h = Math.round(peak / absmaxHalf);
                                    ctx.lineTo((i - first) * scale + this.halfPixel, halfOffset - h);
                                } // draw the bottom edge going backwards, to make a single
                                // closed hull to fill
                                var j = canvasEnd - 1;
                                for(; j >= canvasStart; j--){
                                    peak = peaks[2 * j + 1] || 0;
                                    h = Math.round(peak / absmaxHalf);
                                    ctx.lineTo((j - first) * scale + this.halfPixel, halfOffset - h);
                                }
                                ctx.lineTo((canvasStart - first) * scale, halfOffset - Math.round((peaks[2 * canvasStart + 1] || 0) / absmaxHalf));
                                ctx.closePath();
                                ctx.fill();
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                this.waveCtx = null;
                                this.wave = null;
                                this.progressCtx = null;
                                this.progress = null;
                            }
                        },
                        {
                            key: "getImage",
                            value: function getImage(format, quality, type) {
                                var _this = this;
                                if (type === 'blob') return new Promise(function(resolve) {
                                    _this.wave.toBlob(resolve, format, quality);
                                });
                                else if (type === 'dataURL') return this.wave.toDataURL(format, quality);
                            }
                        }
                    ]);
                    return CanvasEntry;
                }();
                exports.default = CanvasEntry1;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/drawer.js": (module, exports, __webpack_require__)=>{
                "use strict";
                function _typeof(obj1) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj1);
                }
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
                function _getRequireWildcardCache(nodeInterop1) {
                    if (typeof WeakMap !== "function") return null;
                    var cacheBabelInterop = new WeakMap();
                    var cacheNodeInterop = new WeakMap();
                    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                    })(nodeInterop1);
                }
                function _interopRequireWildcard(obj, nodeInterop) {
                    if (!nodeInterop && obj && obj.__esModule) return obj;
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
                        default: obj
                    };
                    var cache = _getRequireWildcardCache(nodeInterop);
                    if (cache && cache.has(obj)) return cache.get(obj);
                    var newObj = {
                    };
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                        else newObj[key] = obj[key];
                    }
                    newObj.default = obj;
                    if (cache) cache.set(obj, newObj);
                    return newObj;
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o1, p1) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o1, p1);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
                    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                        }));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o2) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o2);
                }
                /**
 * Parent class for renderers
 *
 * @extends {Observer}
 */ var Drawer1 = /*#__PURE__*/ function(_util$Observer) {
                    _inherits(Drawer, _util$Observer);
                    var _super = _createSuper(Drawer);
                    /**
   * @param {HTMLElement} container The container node of the wavesurfer instance
   * @param {WavesurferParams} params The wavesurfer initialisation options
   */ function Drawer(container, params) {
                        var _this;
                        _classCallCheck(this, Drawer);
                        _this = _super.call(this);
                        _this.container = util.withOrientation(container, params.vertical);
                        /**
     * @type {WavesurferParams}
     */ _this.params = params;
                        /**
     * The width of the renderer
     * @type {number}
     */ _this.width = 0;
                        /**
     * The height of the renderer
     * @type {number}
     */ _this.height = params.height * _this.params.pixelRatio;
                        _this.lastPos = 0;
                        /**
     * The `<wave>` element which is added to the container
     * @type {HTMLElement}
     */ _this.wrapper = null;
                        return _this;
                    }
                    /**
   * Alias of `util.style`
   *
   * @param {HTMLElement} el The element that the styles will be applied to
   * @param {Object} styles The map of propName: attribute, both are used as-is
   * @return {HTMLElement} el
   */ _createClass(Drawer, [
                        {
                            key: "style",
                            value: function style(el, styles) {
                                return util.style(el, styles);
                            }
                        },
                        {
                            key: "createWrapper",
                            value: function createWrapper() {
                                this.wrapper = util.withOrientation(this.container.appendChild(document.createElement('wave')), this.params.vertical);
                                this.style(this.wrapper, {
                                    display: 'block',
                                    position: 'relative',
                                    userSelect: 'none',
                                    webkitUserSelect: 'none',
                                    height: this.params.height + 'px'
                                });
                                if (this.params.fillParent || this.params.scrollParent) this.style(this.wrapper, {
                                    width: '100%',
                                    overflowX: this.params.hideScrollbar ? 'hidden' : 'auto',
                                    overflowY: 'hidden'
                                });
                                this.setupWrapperEvents();
                            }
                        },
                        {
                            key: "handleEvent",
                            value: function handleEvent(e, noPrevent) {
                                !noPrevent && e.preventDefault();
                                var clientX = util.withOrientation(e.targetTouches ? e.targetTouches[0] : e, this.params.vertical).clientX;
                                var bbox = this.wrapper.getBoundingClientRect();
                                var nominalWidth = this.width;
                                var parentWidth = this.getWidth();
                                var progressPixels = this.getProgressPixels(bbox, clientX);
                                var progress;
                                if (!this.params.fillParent && nominalWidth < parentWidth) progress = progressPixels * (this.params.pixelRatio / nominalWidth) || 0;
                                else progress = (progressPixels + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0;
                                return util.clamp(progress, 0, 1);
                            }
                        },
                        {
                            key: "getProgressPixels",
                            value: function getProgressPixels(wrapperBbox, clientX) {
                                if (this.params.rtl) return wrapperBbox.right - clientX;
                                else return clientX - wrapperBbox.left;
                            }
                        },
                        {
                            key: "setupWrapperEvents",
                            value: function setupWrapperEvents() {
                                var _this2 = this;
                                this.wrapper.addEventListener('click', function(e) {
                                    var orientedEvent = util.withOrientation(e, _this2.params.vertical);
                                    var scrollbarHeight = _this2.wrapper.offsetHeight - _this2.wrapper.clientHeight;
                                    if (scrollbarHeight !== 0) {
                                        // scrollbar is visible.  Check if click was on it
                                        var bbox = _this2.wrapper.getBoundingClientRect();
                                        if (orientedEvent.clientY >= bbox.bottom - scrollbarHeight) // ignore mousedown as it was on the scrollbar
                                        return;
                                    }
                                    if (_this2.params.interact) _this2.fireEvent('click', e, _this2.handleEvent(e));
                                });
                                this.wrapper.addEventListener('dblclick', function(e) {
                                    if (_this2.params.interact) _this2.fireEvent('dblclick', e, _this2.handleEvent(e));
                                });
                                this.wrapper.addEventListener('scroll', function(e) {
                                    return _this2.fireEvent('scroll', e);
                                });
                            }
                        },
                        {
                            key: "drawPeaks",
                            value: function drawPeaks(peaks, length, start, end) {
                                if (!this.setWidth(length)) this.clearWave();
                                this.params.barWidth ? this.drawBars(peaks, 0, start, end) : this.drawWave(peaks, 0, start, end);
                            }
                        },
                        {
                            key: "resetScroll",
                            value: function resetScroll() {
                                if (this.wrapper !== null) this.wrapper.scrollLeft = 0;
                            }
                        },
                        {
                            key: "recenter",
                            value: function recenter(percent) {
                                var position = this.wrapper.scrollWidth * percent;
                                this.recenterOnPosition(position, true);
                            }
                        },
                        {
                            key: "recenterOnPosition",
                            value: function recenterOnPosition(position, immediate) {
                                var scrollLeft = this.wrapper.scrollLeft;
                                var half = ~~(this.wrapper.clientWidth / 2);
                                var maxScroll = this.wrapper.scrollWidth - this.wrapper.clientWidth;
                                var target = position - half;
                                var offset = target - scrollLeft;
                                if (maxScroll == 0) // no need to continue if scrollbar is not there
                                return;
                                 // if the cursor is currently visible...
                                if (!immediate && -half <= offset && offset < half) {
                                    // set rate at which waveform is centered
                                    var rate = this.params.autoCenterRate; // make rate depend on width of view and length of waveform
                                    rate /= half;
                                    rate *= maxScroll;
                                    offset = Math.max(-rate, Math.min(rate, offset));
                                    target = scrollLeft + offset;
                                } // limit target to valid range (0 to maxScroll)
                                target = Math.max(0, Math.min(maxScroll, target)); // no use attempting to scroll if we're not moving
                                if (target != scrollLeft) this.wrapper.scrollLeft = target;
                            }
                        },
                        {
                            key: "getScrollX",
                            value: function getScrollX() {
                                var x = 0;
                                if (this.wrapper) {
                                    var pixelRatio = this.params.pixelRatio;
                                    x = Math.round(this.wrapper.scrollLeft * pixelRatio); // In cases of elastic scroll (safari with mouse wheel) you can
                                    // scroll beyond the limits of the container
                                    // Calculate and floor the scrollable extent to make sure an out
                                    // of bounds value is not returned
                                    // Ticket #1312
                                    if (this.params.scrollParent) {
                                        var maxScroll = ~~(this.wrapper.scrollWidth * pixelRatio - this.getWidth());
                                        x = Math.min(maxScroll, Math.max(0, x));
                                    }
                                }
                                return x;
                            }
                        },
                        {
                            key: "getWidth",
                            value: function getWidth() {
                                return Math.round(this.container.clientWidth * this.params.pixelRatio);
                            }
                        },
                        {
                            key: "setWidth",
                            value: function setWidth(width) {
                                if (this.width == width) return false;
                                this.width = width;
                                if (this.params.fillParent || this.params.scrollParent) this.style(this.wrapper, {
                                    width: ''
                                });
                                else {
                                    var newWidth = ~~(this.width / this.params.pixelRatio) + 'px';
                                    this.style(this.wrapper, {
                                        width: newWidth
                                    });
                                }
                                this.updateSize();
                                return true;
                            }
                        },
                        {
                            key: "setHeight",
                            value: function setHeight(height) {
                                if (height == this.height) return false;
                                this.height = height;
                                this.style(this.wrapper, {
                                    height: ~~(this.height / this.params.pixelRatio) + 'px'
                                });
                                this.updateSize();
                                return true;
                            }
                        },
                        {
                            key: "progress",
                            value: function progress(_progress) {
                                var minPxDelta = 1 / this.params.pixelRatio;
                                var pos = Math.round(_progress * this.width) * minPxDelta;
                                if (pos < this.lastPos || pos - this.lastPos >= minPxDelta) {
                                    this.lastPos = pos;
                                    if (this.params.scrollParent && this.params.autoCenter) {
                                        var newPos = ~~(this.wrapper.scrollWidth * _progress);
                                        this.recenterOnPosition(newPos, this.params.autoCenterImmediately);
                                    }
                                    this.updateProgress(pos);
                                }
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                this.unAll();
                                if (this.wrapper) {
                                    if (this.wrapper.parentNode == this.container.domElement) this.container.removeChild(this.wrapper.domElement);
                                    this.wrapper = null;
                                }
                            }
                        },
                        {
                            key: "updateCursor",
                            value: function updateCursor() {
                            }
                        },
                        {
                            key: "updateSize",
                            value: function updateSize() {
                            }
                        },
                        {
                            key: "drawBars",
                            value: function drawBars(peaks, channelIndex, start, end) {
                            }
                        },
                        {
                            key: "drawWave",
                            value: function drawWave(peaks, channelIndex, start, end) {
                            }
                        },
                        {
                            key: "clearWave",
                            value: function clearWave() {
                            }
                        },
                        {
                            key: "updateProgress",
                            value: function updateProgress(position) {
                            }
                        }
                    ]);
                    return Drawer;
                }(util.Observer);
                exports.default = Drawer1;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/drawer.multicanvas.js": (module, exports, __webpack_require__)=>{
                "use strict";
                function _typeof(obj2) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj2);
                }
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _drawer = _interopRequireDefault(__webpack_require__(/*! ./drawer */ "./src/drawer.js"));
                var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
                var _drawer2 = _interopRequireDefault(__webpack_require__(/*! ./drawer.canvasentry */ "./src/drawer.canvasentry.js"));
                function _getRequireWildcardCache(nodeInterop2) {
                    if (typeof WeakMap !== "function") return null;
                    var cacheBabelInterop = new WeakMap();
                    var cacheNodeInterop = new WeakMap();
                    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                    })(nodeInterop2);
                }
                function _interopRequireWildcard(obj, nodeInterop) {
                    if (!nodeInterop && obj && obj.__esModule) return obj;
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
                        default: obj
                    };
                    var cache = _getRequireWildcardCache(nodeInterop);
                    if (cache && cache.has(obj)) return cache.get(obj);
                    var newObj = {
                    };
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                        else newObj[key] = obj[key];
                    }
                    newObj.default = obj;
                    if (cache) cache.set(obj, newObj);
                    return newObj;
                }
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o3, p2) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o3, p2);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
                    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                        }));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o4) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o4);
                }
                /**
 * MultiCanvas renderer for wavesurfer. Is currently the default and sole
 * builtin renderer.
 *
 * A `MultiCanvas` consists of one or more `CanvasEntry` instances, depending
 * on the zoom level.
 */ var MultiCanvas1 = /*#__PURE__*/ function(_Drawer) {
                    _inherits(MultiCanvas, _Drawer);
                    var _super = _createSuper(MultiCanvas);
                    /**
   * @param {HTMLElement} container The container node of the wavesurfer instance
   * @param {WavesurferParams} params The wavesurfer initialisation options
   */ function MultiCanvas(container, params) {
                        var _this;
                        _classCallCheck(this, MultiCanvas);
                        _this = _super.call(this, container, params);
                        /**
     * @type {number}
     */ _this.maxCanvasWidth = params.maxCanvasWidth;
                        /**
     * @type {number}
     */ _this.maxCanvasElementWidth = Math.round(params.maxCanvasWidth / params.pixelRatio);
                        /**
     * Whether or not the progress wave is rendered. If the `waveColor`
     * and `progressColor` are the same color it is not.
     *
     * @type {boolean}
     */ _this.hasProgressCanvas = params.waveColor != params.progressColor;
                        /**
     * @type {number}
     */ _this.halfPixel = 0.5 / params.pixelRatio;
                        /**
     * List of `CanvasEntry` instances.
     *
     * @type {Array}
     */ _this.canvases = [];
                        /**
     * @type {HTMLElement}
     */ _this.progressWave = null;
                        /**
     * Class used to generate entries.
     *
     * @type {function}
     */ _this.EntryClass = _drawer2.default;
                        /**
     * Canvas 2d context attributes.
     *
     * @type {object}
     */ _this.canvasContextAttributes = params.drawingContextAttributes;
                        /**
     * Overlap added between entries to prevent vertical white stripes
     * between `canvas` elements.
     *
     * @type {number}
     */ _this.overlap = 2 * Math.ceil(params.pixelRatio / 2);
                        /**
     * The radius of the wave bars. Makes bars rounded
     *
     * @type {number}
     */ _this.barRadius = params.barRadius || 0;
                        /**
     * Whether to render the waveform vertically. Defaults to false.
     *
     * @type {boolean}
     */ _this.vertical = params.vertical;
                        return _this;
                    }
                    /**
   * Initialize the drawer
   */ _createClass(MultiCanvas, [
                        {
                            key: "init",
                            value: function init() {
                                this.createWrapper();
                                this.createElements();
                            }
                        },
                        {
                            key: "createElements",
                            value: function createElements() {
                                this.progressWave = util.withOrientation(this.wrapper.appendChild(document.createElement('wave')), this.params.vertical);
                                this.style(this.progressWave, {
                                    position: 'absolute',
                                    zIndex: 3,
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    overflow: 'hidden',
                                    width: '0',
                                    display: 'none',
                                    boxSizing: 'border-box',
                                    borderRightStyle: 'solid',
                                    pointerEvents: 'none'
                                });
                                this.addCanvas();
                                this.updateCursor();
                            }
                        },
                        {
                            key: "updateCursor",
                            value: function updateCursor() {
                                this.style(this.progressWave, {
                                    borderRightWidth: this.params.cursorWidth + 'px',
                                    borderRightColor: this.params.cursorColor
                                });
                            }
                        },
                        {
                            key: "updateSize",
                            value: function updateSize() {
                                var _this2 = this;
                                var totalWidth = Math.round(this.width / this.params.pixelRatio);
                                var requiredCanvases = Math.ceil(totalWidth / (this.maxCanvasElementWidth + this.overlap)); // add required canvases
                                while(this.canvases.length < requiredCanvases)this.addCanvas();
                                 // remove older existing canvases, if any
                                while(this.canvases.length > requiredCanvases)this.removeCanvas();
                                var canvasWidth = this.maxCanvasWidth + this.overlap;
                                var lastCanvas = this.canvases.length - 1;
                                this.canvases.forEach(function(entry, i) {
                                    if (i == lastCanvas) canvasWidth = _this2.width - _this2.maxCanvasWidth * lastCanvas;
                                    _this2.updateDimensions(entry, canvasWidth, _this2.height);
                                    entry.clearWave();
                                });
                            }
                        },
                        {
                            key: "addCanvas",
                            value: function addCanvas() {
                                var entry = new this.EntryClass();
                                entry.canvasContextAttributes = this.canvasContextAttributes;
                                entry.hasProgressCanvas = this.hasProgressCanvas;
                                entry.halfPixel = this.halfPixel;
                                var leftOffset = this.maxCanvasElementWidth * this.canvases.length; // wave
                                var wave = util.withOrientation(this.wrapper.appendChild(document.createElement('canvas')), this.params.vertical);
                                this.style(wave, {
                                    position: 'absolute',
                                    zIndex: 2,
                                    left: leftOffset + 'px',
                                    top: 0,
                                    bottom: 0,
                                    height: '100%',
                                    pointerEvents: 'none'
                                });
                                entry.initWave(wave); // progress
                                if (this.hasProgressCanvas) {
                                    var progress = util.withOrientation(this.progressWave.appendChild(document.createElement('canvas')), this.params.vertical);
                                    this.style(progress, {
                                        position: 'absolute',
                                        left: leftOffset + 'px',
                                        top: 0,
                                        bottom: 0,
                                        height: '100%'
                                    });
                                    entry.initProgress(progress);
                                }
                                this.canvases.push(entry);
                            }
                        },
                        {
                            key: "removeCanvas",
                            value: function removeCanvas() {
                                var lastEntry = this.canvases[this.canvases.length - 1]; // wave
                                lastEntry.wave.parentElement.removeChild(lastEntry.wave.domElement); // progress
                                if (this.hasProgressCanvas) lastEntry.progress.parentElement.removeChild(lastEntry.progress.domElement);
                                 // cleanup
                                if (lastEntry) {
                                    lastEntry.destroy();
                                    lastEntry = null;
                                }
                                this.canvases.pop();
                            }
                        },
                        {
                            key: "updateDimensions",
                            value: function updateDimensions(entry, width, height) {
                                var elementWidth = Math.round(width / this.params.pixelRatio);
                                var totalWidth = Math.round(this.width / this.params.pixelRatio); // update canvas dimensions
                                entry.updateDimensions(elementWidth, totalWidth, width, height); // style element
                                this.style(this.progressWave, {
                                    display: 'block'
                                });
                            }
                        },
                        {
                            key: "clearWave",
                            value: function clearWave() {
                                var _this3 = this;
                                util.frame(function() {
                                    _this3.canvases.forEach(function(entry) {
                                        return entry.clearWave();
                                    });
                                })();
                            }
                        },
                        {
                            key: "drawBars",
                            value: function drawBars(peaks1, channelIndex, start, end) {
                                var _this4 = this;
                                return this.prepareDraw(peaks1, channelIndex, start, end, function(_ref) {
                                    var absmax = _ref.absmax, hasMinVals = _ref.hasMinVals, height = _ref.height, offsetY = _ref.offsetY, halfH = _ref.halfH, peaks = _ref.peaks, ch = _ref.channelIndex;
                                    // if drawBars was called within ws.empty we don't pass a start and
                                    // don't want anything to happen
                                    if (start === undefined) return;
                                     // Skip every other value if there are negatives.
                                    var peakIndexScale = hasMinVals ? 2 : 1;
                                    var length = peaks.length / peakIndexScale;
                                    var bar = _this4.params.barWidth * _this4.params.pixelRatio;
                                    var gap = _this4.params.barGap === null ? Math.max(_this4.params.pixelRatio, ~~(bar / 2)) : Math.max(_this4.params.pixelRatio, _this4.params.barGap * _this4.params.pixelRatio);
                                    var step = bar + gap;
                                    var scale = length / _this4.width;
                                    var first = start;
                                    var last = end;
                                    var i = first;
                                    for(; i < last; i += step){
                                        var peak = peaks[Math.floor(i * scale * peakIndexScale)] || 0;
                                        var h = Math.round(peak / absmax * halfH);
                                        /* in case of silences, allow the user to specify that we
           * always draw *something* (normally a 1px high bar) */ if (h == 0 && _this4.params.barMinHeight) h = _this4.params.barMinHeight;
                                        _this4.fillRect(i + _this4.halfPixel, halfH - h + offsetY, bar + _this4.halfPixel, h * 2, _this4.barRadius, ch);
                                    }
                                });
                            }
                        },
                        {
                            key: "drawWave",
                            value: function drawWave(peaks2, channelIndex1, start, end) {
                                var _this5 = this;
                                return this.prepareDraw(peaks2, channelIndex1, start, end, function(_ref2) {
                                    var absmax = _ref2.absmax, hasMinVals = _ref2.hasMinVals, height = _ref2.height, offsetY = _ref2.offsetY, halfH = _ref2.halfH, peaks = _ref2.peaks, channelIndex = _ref2.channelIndex;
                                    if (!hasMinVals) {
                                        var reflectedPeaks = [];
                                        var len = peaks.length;
                                        var i = 0;
                                        for(; i < len; i++){
                                            reflectedPeaks[2 * i] = peaks[i];
                                            reflectedPeaks[2 * i + 1] = -peaks[i];
                                        }
                                        peaks = reflectedPeaks;
                                    } // if drawWave was called within ws.empty we don't pass a start and
                                    // end and simply want a flat line
                                    if (start !== undefined) _this5.drawLine(peaks, absmax, halfH, offsetY, start, end, channelIndex);
                                     // always draw a median line
                                    _this5.fillRect(0, halfH + offsetY - _this5.halfPixel, _this5.width, _this5.halfPixel, _this5.barRadius, channelIndex);
                                });
                            }
                        },
                        {
                            key: "drawLine",
                            value: function drawLine(peaks, absmax, halfH, offsetY, start, end, channelIndex) {
                                var _this6 = this;
                                var _ref3 = this.params.splitChannelsOptions.channelColors[channelIndex] || {
                                }, waveColor = _ref3.waveColor, progressColor = _ref3.progressColor;
                                this.canvases.forEach(function(entry, i) {
                                    _this6.setFillStyles(entry, waveColor, progressColor);
                                    _this6.applyCanvasTransforms(entry, _this6.params.vertical);
                                    entry.drawLines(peaks, absmax, halfH, offsetY, start, end);
                                });
                            }
                        },
                        {
                            key: "fillRect",
                            value: function fillRect(x, y, width, height, radius, channelIndex) {
                                var startCanvas = Math.floor(x / this.maxCanvasWidth);
                                var endCanvas = Math.min(Math.ceil((x + width) / this.maxCanvasWidth) + 1, this.canvases.length);
                                var i = startCanvas;
                                for(; i < endCanvas; i++){
                                    var entry = this.canvases[i];
                                    var leftOffset = i * this.maxCanvasWidth;
                                    var intersection = {
                                        x1: Math.max(x, i * this.maxCanvasWidth),
                                        y1: y,
                                        x2: Math.min(x + width, i * this.maxCanvasWidth + entry.wave.width),
                                        y2: y + height
                                    };
                                    if (intersection.x1 < intersection.x2) {
                                        var _ref4 = this.params.splitChannelsOptions.channelColors[channelIndex] || {
                                        }, waveColor = _ref4.waveColor, progressColor = _ref4.progressColor;
                                        this.setFillStyles(entry, waveColor, progressColor);
                                        this.applyCanvasTransforms(entry, this.params.vertical);
                                        entry.fillRects(intersection.x1 - leftOffset, intersection.y1, intersection.x2 - intersection.x1, intersection.y2 - intersection.y1, radius);
                                    }
                                }
                            }
                        },
                        {
                            key: "hideChannel",
                            value: function hideChannel(channelIndex) {
                                return this.params.splitChannels && this.params.splitChannelsOptions.filterChannels.includes(channelIndex);
                            }
                        },
                        {
                            key: "prepareDraw",
                            value: function prepareDraw(peaks, channelIndex, start, end, fn, drawIndex, normalizedMax) {
                                var _this7 = this;
                                return util.frame(function() {
                                    // Split channels and call this function with the channelIndex set
                                    if (peaks[0] instanceof Array) {
                                        var channels = peaks;
                                        if (_this7.params.splitChannels) {
                                            var filteredChannels = channels.filter(function(c, i) {
                                                return !_this7.hideChannel(i);
                                            });
                                            if (!_this7.params.splitChannelsOptions.overlay) _this7.setHeight(Math.max(filteredChannels.length, 1) * _this7.params.height * _this7.params.pixelRatio);
                                            var overallAbsMax;
                                            if (_this7.params.splitChannelsOptions && _this7.params.splitChannelsOptions.relativeNormalization) // calculate maximum peak across channels to use for normalization
                                            overallAbsMax = util.max(channels.map(function(channelPeaks) {
                                                return util.absMax(channelPeaks);
                                            }));
                                            return channels.forEach(function(channelPeaks, i) {
                                                return _this7.prepareDraw(channelPeaks, i, start, end, fn, filteredChannels.indexOf(channelPeaks), overallAbsMax);
                                            });
                                        }
                                        peaks = channels[0];
                                    } // Return and do not draw channel peaks if hidden.
                                    if (_this7.hideChannel(channelIndex)) return;
                                     // calculate maximum modulation value, either from the barHeight
                                    // parameter or if normalize=true from the largest value in the peak
                                    // set
                                    var absmax = 1 / _this7.params.barHeight;
                                    if (_this7.params.normalize) absmax = normalizedMax === undefined ? util.absMax(peaks) : normalizedMax;
                                     // Bar wave draws the bottom only as a reflection of the top,
                                    // so we don't need negative values
                                    var hasMinVals = [].some.call(peaks, function(val) {
                                        return val < 0;
                                    });
                                    var height = _this7.params.height * _this7.params.pixelRatio;
                                    var halfH = height / 2;
                                    var offsetY = height * drawIndex || 0; // Override offsetY if overlay is true
                                    if (_this7.params.splitChannelsOptions && _this7.params.splitChannelsOptions.overlay) offsetY = 0;
                                    return fn({
                                        absmax: absmax,
                                        hasMinVals: hasMinVals,
                                        height: height,
                                        offsetY: offsetY,
                                        halfH: halfH,
                                        peaks: peaks,
                                        channelIndex: channelIndex
                                    });
                                })();
                            }
                        },
                        {
                            key: "setFillStyles",
                            value: function setFillStyles(entry) {
                                var waveColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.waveColor;
                                var progressColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.params.progressColor;
                                entry.setFillStyles(waveColor, progressColor);
                            }
                        },
                        {
                            key: "applyCanvasTransforms",
                            value: function applyCanvasTransforms(entry) {
                                var vertical = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                                entry.applyCanvasTransforms(vertical);
                            }
                        },
                        {
                            key: "getImage",
                            value: function getImage(format, quality, type) {
                                if (type === 'blob') return Promise.all(this.canvases.map(function(entry) {
                                    return entry.getImage(format, quality, type);
                                }));
                                else if (type === 'dataURL') {
                                    var images = this.canvases.map(function(entry) {
                                        return entry.getImage(format, quality, type);
                                    });
                                    return images.length > 1 ? images : images[0];
                                }
                            }
                        },
                        {
                            key: "updateProgress",
                            value: function updateProgress(position) {
                                this.style(this.progressWave, {
                                    width: position + 'px'
                                });
                            }
                        }
                    ]);
                    return MultiCanvas;
                }(_drawer.default);
                exports.default = MultiCanvas1;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/mediaelement-webaudio.js": (module, exports, __webpack_require__)=>{
                "use strict";
                function _typeof(obj3) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj3);
                }
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _mediaelement = _interopRequireDefault(__webpack_require__(/*! ./mediaelement */ "./src/mediaelement.js"));
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                function _get(target1, property1, receiver1) {
                    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
                    else _get = function _get(target, property, receiver) {
                        var base = _superPropBase(target, property);
                        if (!base) return;
                        var desc = Object.getOwnPropertyDescriptor(base, property);
                        if (desc.get) return desc.get.call(receiver);
                        return desc.value;
                    };
                    return _get(target1, property1, receiver1 || target1);
                }
                function _superPropBase(object, property) {
                    while(!Object.prototype.hasOwnProperty.call(object, property)){
                        object = _getPrototypeOf(object);
                        if (object === null) break;
                    }
                    return object;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o5, p3) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o5, p3);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
                    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                        }));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o6) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o6);
                }
                /**
 * MediaElementWebAudio backend: load audio via an HTML5 audio tag, but playback with the WebAudio API.
 * The advantage here is that the html5 <audio> tag can perform range requests on the server and not
 * buffer the entire file in one request, and you still get the filtering and scripting functionality
 * of the webaudio API.
 * Note that in order to use range requests and prevent buffering, you must provide peak data.
 *
 * @since 3.2.0
 */ var MediaElementWebAudio1 = /*#__PURE__*/ function(_MediaElement) {
                    _inherits(MediaElementWebAudio, _MediaElement);
                    var _super = _createSuper(MediaElementWebAudio);
                    /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */ function MediaElementWebAudio(params) {
                        var _this;
                        _classCallCheck(this, MediaElementWebAudio);
                        _this = _super.call(this, params);
                        /** @private */ _this.params = params;
                        /** @private */ _this.sourceMediaElement = null;
                        return _this;
                    }
                    /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */ _createClass(MediaElementWebAudio, [
                        {
                            key: "init",
                            value: function init() {
                                this.setPlaybackRate(this.params.audioRate);
                                this.createTimer();
                                this.createVolumeNode();
                                this.createScriptNode();
                                this.createAnalyserNode();
                            }
                        },
                        {
                            key: "_load",
                            value: function _load(media, peaks, preload) {
                                _get(_getPrototypeOf(MediaElementWebAudio.prototype), "_load", this).call(this, media, peaks, preload);
                                this.createMediaElementSource(media);
                            }
                        },
                        {
                            key: "createMediaElementSource",
                            value: function createMediaElementSource(mediaElement) {
                                this.sourceMediaElement = this.ac.createMediaElementSource(mediaElement);
                                this.sourceMediaElement.connect(this.analyser);
                            }
                        },
                        {
                            key: "play",
                            value: function play(start, end) {
                                this.resumeAudioContext();
                                return _get(_getPrototypeOf(MediaElementWebAudio.prototype), "play", this).call(this, start, end);
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                _get(_getPrototypeOf(MediaElementWebAudio.prototype), "destroy", this).call(this);
                                this.destroyWebAudio();
                            }
                        }
                    ]);
                    return MediaElementWebAudio;
                }(_mediaelement.default);
                exports.default = MediaElementWebAudio1;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/mediaelement.js": (module, exports, __webpack_require__)=>{
                "use strict";
                function _typeof(obj4) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj4);
                }
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var _webaudio = _interopRequireDefault(__webpack_require__(/*! ./webaudio */ "./src/webaudio.js"));
                var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
                function _getRequireWildcardCache(nodeInterop3) {
                    if (typeof WeakMap !== "function") return null;
                    var cacheBabelInterop = new WeakMap();
                    var cacheNodeInterop = new WeakMap();
                    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                    })(nodeInterop3);
                }
                function _interopRequireWildcard(obj, nodeInterop) {
                    if (!nodeInterop && obj && obj.__esModule) return obj;
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
                        default: obj
                    };
                    var cache = _getRequireWildcardCache(nodeInterop);
                    if (cache && cache.has(obj)) return cache.get(obj);
                    var newObj = {
                    };
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                        else newObj[key] = obj[key];
                    }
                    newObj.default = obj;
                    if (cache) cache.set(obj, newObj);
                    return newObj;
                }
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                function _get(target2, property2, receiver2) {
                    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
                    else _get = function _get(target, property, receiver) {
                        var base = _superPropBase(target, property);
                        if (!base) return;
                        var desc = Object.getOwnPropertyDescriptor(base, property);
                        if (desc.get) return desc.get.call(receiver);
                        return desc.value;
                    };
                    return _get(target2, property2, receiver2 || target2);
                }
                function _superPropBase(object, property) {
                    while(!Object.prototype.hasOwnProperty.call(object, property)){
                        object = _getPrototypeOf(object);
                        if (object === null) break;
                    }
                    return object;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o7, p4) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o7, p4);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
                    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                        }));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o8) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o8);
                }
                /**
 * MediaElement backend
 */ var MediaElement1 = /*#__PURE__*/ function(_WebAudio) {
                    _inherits(MediaElement, _WebAudio);
                    var _super = _createSuper(MediaElement);
                    /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */ function MediaElement(params) {
                        var _this;
                        _classCallCheck(this, MediaElement);
                        _this = _super.call(this, params);
                        /** @private */ _this.params = params;
                        /**
     * Initially a dummy media element to catch errors. Once `_load` is
     * called, this will contain the actual `HTMLMediaElement`.
     * @private
     */ _this.media = {
                            currentTime: 0,
                            duration: 0,
                            paused: true,
                            playbackRate: 1,
                            play: function play() {
                            },
                            pause: function pause() {
                            },
                            volume: 0
                        };
                        /** @private */ _this.mediaType = params.mediaType.toLowerCase();
                        /** @private */ _this.elementPosition = params.elementPosition;
                        /** @private */ _this.peaks = null;
                        /** @private */ _this.playbackRate = 1;
                        /** @private */ _this.volume = 1;
                        /** @private */ _this.isMuted = false;
                        /** @private */ _this.buffer = null;
                        /** @private */ _this.onPlayEnd = null;
                        /** @private */ _this.mediaListeners = {
                        };
                        return _this;
                    }
                    /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */ _createClass(MediaElement, [
                        {
                            key: "init",
                            value: function init() {
                                this.setPlaybackRate(this.params.audioRate);
                                this.createTimer();
                            }
                        },
                        {
                            key: "_setupMediaListeners",
                            value: function _setupMediaListeners() {
                                var _this2 = this;
                                this.mediaListeners.error = function() {
                                    _this2.fireEvent('error', 'Error loading media element');
                                };
                                this.mediaListeners.canplay = function() {
                                    _this2.fireEvent('canplay');
                                };
                                this.mediaListeners.ended = function() {
                                    _this2.fireEvent('finish');
                                }; // listen to and relay play, pause and seeked events to enable
                                // playback control from the external media element
                                this.mediaListeners.play = function() {
                                    _this2.fireEvent('play');
                                };
                                this.mediaListeners.pause = function() {
                                    _this2.fireEvent('pause');
                                };
                                this.mediaListeners.seeked = function(event) {
                                    _this2.fireEvent('seek');
                                };
                                this.mediaListeners.volumechange = function(event) {
                                    _this2.isMuted = _this2.media.muted;
                                    if (_this2.isMuted) _this2.volume = 0;
                                    else _this2.volume = _this2.media.volume;
                                    _this2.fireEvent('volume');
                                }; // reset event listeners
                                Object.keys(this.mediaListeners).forEach(function(id) {
                                    _this2.media.removeEventListener(id, _this2.mediaListeners[id]);
                                    _this2.media.addEventListener(id, _this2.mediaListeners[id]);
                                });
                            }
                        },
                        {
                            key: "createTimer",
                            value: function createTimer() {
                                var _this3 = this;
                                var onAudioProcess1 = function onAudioProcess() {
                                    if (_this3.isPaused()) return;
                                    _this3.fireEvent('audioprocess', _this3.getCurrentTime()); // Call again in the next frame
                                    util.frame(onAudioProcess)();
                                };
                                this.on('play', onAudioProcess1); // Update the progress one more time to prevent it from being stuck in
                                // case of lower framerates
                                this.on('pause', function() {
                                    _this3.fireEvent('audioprocess', _this3.getCurrentTime());
                                });
                            }
                        },
                        {
                            key: "load",
                            value: function load(url, container, peaks, preload) {
                                var media = document.createElement(this.mediaType);
                                media.controls = this.params.mediaControls;
                                media.autoplay = this.params.autoplay || false;
                                media.preload = preload == null ? 'auto' : preload;
                                media.src = url;
                                media.style.width = '100%';
                                var prevMedia = container.querySelector(this.mediaType);
                                if (prevMedia) container.removeChild(prevMedia);
                                container.appendChild(media);
                                this._load(media, peaks, preload);
                            }
                        },
                        {
                            key: "loadElt",
                            value: function loadElt(elt, peaks) {
                                elt.controls = this.params.mediaControls;
                                elt.autoplay = this.params.autoplay || false;
                                this._load(elt, peaks, elt.preload);
                            }
                        },
                        {
                            key: "_load",
                            value: function _load(media, peaks, preload) {
                                // verify media element is valid
                                if (!(media instanceof HTMLMediaElement) || typeof media.addEventListener === 'undefined') throw new Error('media parameter is not a valid media element');
                                 // load must be called manually on iOS, otherwise peaks won't draw
                                // until a user interaction triggers load --> 'ready' event
                                //
                                // note that we avoid calling media.load here when given peaks and preload == 'none'
                                // as this almost always triggers some browser fetch of the media.
                                if (typeof media.load == 'function' && !(peaks && preload == 'none')) // Resets the media element and restarts the media resource. Any
                                // pending events are discarded. How much media data is fetched is
                                // still affected by the preload attribute.
                                media.load();
                                this.media = media;
                                this._setupMediaListeners();
                                this.peaks = peaks;
                                this.onPlayEnd = null;
                                this.buffer = null;
                                this.isMuted = media.muted;
                                this.setPlaybackRate(this.playbackRate);
                                this.setVolume(this.volume);
                            }
                        },
                        {
                            key: "isPaused",
                            value: function isPaused() {
                                return !this.media || this.media.paused;
                            }
                        },
                        {
                            key: "getDuration",
                            value: function getDuration() {
                                if (this.explicitDuration) return this.explicitDuration;
                                var duration = (this.buffer || this.media).duration;
                                if (duration >= Infinity) // streaming audio
                                duration = this.media.seekable.end(0);
                                return duration;
                            }
                        },
                        {
                            key: "getCurrentTime",
                            value: function getCurrentTime() {
                                return this.media && this.media.currentTime;
                            }
                        },
                        {
                            key: "getPlayedPercents",
                            value: function getPlayedPercents() {
                                return this.getCurrentTime() / this.getDuration() || 0;
                            }
                        },
                        {
                            key: "getPlaybackRate",
                            value: function getPlaybackRate() {
                                return this.playbackRate || this.media.playbackRate;
                            }
                        },
                        {
                            key: "setPlaybackRate",
                            value: function setPlaybackRate(value) {
                                this.playbackRate = value || 1;
                                this.media.playbackRate = this.playbackRate;
                            }
                        },
                        {
                            key: "seekTo",
                            value: function seekTo(start) {
                                if (start != null) this.media.currentTime = start;
                                this.clearPlayEnd();
                            }
                        },
                        {
                            key: "play",
                            value: function play(start, end) {
                                this.seekTo(start);
                                var promise = this.media.play();
                                end && this.setPlayEnd(end);
                                return promise;
                            }
                        },
                        {
                            key: "pause",
                            value: function pause() {
                                var promise;
                                if (this.media) promise = this.media.pause();
                                this.clearPlayEnd();
                                return promise;
                            }
                        },
                        {
                            key: "setPlayEnd",
                            value: function setPlayEnd(end) {
                                var _this4 = this;
                                this.clearPlayEnd();
                                this._onPlayEnd = function(time) {
                                    if (time >= end) {
                                        _this4.pause();
                                        _this4.seekTo(end);
                                    }
                                };
                                this.on('audioprocess', this._onPlayEnd);
                            }
                        },
                        {
                            key: "clearPlayEnd",
                            value: function clearPlayEnd() {
                                if (this._onPlayEnd) {
                                    this.un('audioprocess', this._onPlayEnd);
                                    this._onPlayEnd = null;
                                }
                            }
                        },
                        {
                            key: "getPeaks",
                            value: function getPeaks(length, first, last) {
                                if (this.buffer) return _get(_getPrototypeOf(MediaElement.prototype), "getPeaks", this).call(this, length, first, last);
                                return this.peaks || [];
                            }
                        },
                        {
                            key: "setSinkId",
                            value: function setSinkId(deviceId) {
                                if (deviceId) {
                                    if (!this.media.setSinkId) return Promise.reject(new Error('setSinkId is not supported in your browser'));
                                    return this.media.setSinkId(deviceId);
                                }
                                return Promise.reject(new Error('Invalid deviceId: ' + deviceId));
                            }
                        },
                        {
                            key: "getVolume",
                            value: function getVolume() {
                                return this.volume;
                            }
                        },
                        {
                            key: "setVolume",
                            value: function setVolume(value) {
                                this.volume = value; // no need to change when it's already at that volume
                                if (this.media.volume !== this.volume) this.media.volume = this.volume;
                            }
                        },
                        {
                            key: "setMute",
                            value: function setMute(muted) {
                                // This causes a volume change to be emitted too through the
                                // volumechange event listener.
                                this.isMuted = this.media.muted = muted;
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                var _this5 = this;
                                this.pause();
                                this.unAll();
                                this.destroyed = true; // cleanup media event listeners
                                Object.keys(this.mediaListeners).forEach(function(id) {
                                    if (_this5.media) _this5.media.removeEventListener(id, _this5.mediaListeners[id]);
                                });
                                if (this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode) this.media.parentNode.removeChild(this.media);
                                this.media = null;
                            }
                        }
                    ]);
                    return MediaElement;
                }(_webaudio.default);
                exports.default = MediaElement1;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/peakcache.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                /**
 * Caches the decoded peaks data to improve rendering speed for large audio
 *
 * Is used if the option parameter `partialRender` is set to `true`
 */ var PeakCache1 = /*#__PURE__*/ function() {
                    /**
   * Instantiate cache
   */ function PeakCache() {
                        _classCallCheck(this, PeakCache);
                        this.clearPeakCache();
                    }
                    /**
   * Empty the cache
   */ _createClass(PeakCache, [
                        {
                            key: "clearPeakCache",
                            value: function clearPeakCache() {
                                /**
       * Flat array with entries that are always in pairs to mark the
       * beginning and end of each subrange.  This is a convenience so we can
       * iterate over the pairs for easy set difference operations.
       * @private
       */ this.peakCacheRanges = [];
                                /**
       * Length of the entire cachable region, used for resetting the cache
       * when this changes (zoom events, for instance).
       * @private
       */ this.peakCacheLength = -1;
                            }
                        },
                        {
                            key: "addRangeToPeakCache",
                            value: function addRangeToPeakCache(length, start, end) {
                                if (length != this.peakCacheLength) {
                                    this.clearPeakCache();
                                    this.peakCacheLength = length;
                                } // Return ranges that weren't in the cache before the call.
                                var uncachedRanges = [];
                                var i = 0; // Skip ranges before the current start.
                                while(i < this.peakCacheRanges.length && this.peakCacheRanges[i] < start)i++;
                                 // If |i| is even, |start| falls after an existing range.  Otherwise,
                                // |start| falls between an existing range, and the uncached region
                                // starts when we encounter the next node in |peakCacheRanges| or
                                // |end|, whichever comes first.
                                if (i % 2 == 0) uncachedRanges.push(start);
                                while(i < this.peakCacheRanges.length && this.peakCacheRanges[i] <= end){
                                    uncachedRanges.push(this.peakCacheRanges[i]);
                                    i++;
                                } // If |i| is even, |end| is after all existing ranges.
                                if (i % 2 == 0) uncachedRanges.push(end);
                                 // Filter out the 0-length ranges.
                                uncachedRanges = uncachedRanges.filter(function(item, pos, arr) {
                                    if (pos == 0) return item != arr[pos + 1];
                                    else if (pos == arr.length - 1) return item != arr[pos - 1];
                                    return item != arr[pos - 1] && item != arr[pos + 1];
                                }); // Merge the two ranges together, uncachedRanges will either contain
                                // wholly new points, or duplicates of points in peakCacheRanges.  If
                                // duplicates are detected, remove both and extend the range.
                                this.peakCacheRanges = this.peakCacheRanges.concat(uncachedRanges);
                                this.peakCacheRanges = this.peakCacheRanges.sort(function(a, b) {
                                    return a - b;
                                }).filter(function(item, pos, arr) {
                                    if (pos == 0) return item != arr[pos + 1];
                                    else if (pos == arr.length - 1) return item != arr[pos - 1];
                                    return item != arr[pos - 1] && item != arr[pos + 1];
                                }); // Push the uncached ranges into an array of arrays for ease of
                                // iteration in the functions that call this.
                                var uncachedRangePairs = [];
                                for(i = 0; i < uncachedRanges.length; i += 2)uncachedRangePairs.push([
                                    uncachedRanges[i],
                                    uncachedRanges[i + 1]
                                ]);
                                return uncachedRangePairs;
                            }
                        },
                        {
                            key: "getCacheRanges",
                            value: function getCacheRanges() {
                                var peakCacheRangePairs = [];
                                var i;
                                for(i = 0; i < this.peakCacheRanges.length; i += 2)peakCacheRangePairs.push([
                                    this.peakCacheRanges[i],
                                    this.peakCacheRanges[i + 1]
                                ]);
                                return peakCacheRangePairs;
                            }
                        }
                    ]);
                    return PeakCache;
                }();
                exports.default = PeakCache1;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/absMax.js": (module, exports, __webpack_require__)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = absMax;
                var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "./src/util/max.js"));
                var _min = _interopRequireDefault(__webpack_require__(/*! ./min */ "./src/util/min.js"));
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                /**
 * Get the largest absolute value in an array
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 * @example console.log(max([-3, 2, 1]), max([-3, 2, 4])); // logs 3 4
 * @since 4.3.0
 */ function absMax(values) {
                    var max = (0, _max.default)(values);
                    var min = (0, _min.default)(values);
                    return -min > max ? -min : max;
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/clamp.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = clamp;
                /**
 * Returns a number limited to the given range.
 *
 * @param {number} val The number to be limited to a range
 * @param {number} min The lower boundary of the limit range
 * @param {number} max The upper boundary of the limit range
 * @returns {number} A number in the range [min, max]
 */ function clamp(val, min, max) {
                    return Math.min(Math.max(min, val), max);
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/fetch.js": (module, exports, __webpack_require__)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = fetchFile;
                var _observer = _interopRequireDefault(__webpack_require__(/*! ./observer */ "./src/util/observer.js"));
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                var ProgressHandler1 = /*#__PURE__*/ function() {
                    /**
   * Instantiate ProgressHandler
   *
   * @param {Observer} instance The `fetchFile` observer instance.
   * @param {Number} contentLength Content length.
   * @param {Response} response Response object.
   */ function ProgressHandler(instance, contentLength, response) {
                        _classCallCheck(this, ProgressHandler);
                        this.instance = instance;
                        this.instance._reader = response.body.getReader();
                        this.total = parseInt(contentLength, 10);
                        this.loaded = 0;
                    }
                    /**
   * A method that is called once, immediately after the `ReadableStream``
   * is constructed.
   *
   * @param {ReadableStreamDefaultController} controller Controller instance
   *     used to control the stream.
   */ _createClass(ProgressHandler, [
                        {
                            key: "start",
                            value: function start(controller) {
                                var _this = this;
                                var read1 = function read() {
                                    // instance._reader.read() returns a promise that resolves
                                    // when a value has been received
                                    _this.instance._reader.read().then(function(_ref) {
                                        var done = _ref.done, value = _ref.value;
                                        // result objects contain two properties:
                                        // done  - true if the stream has already given you all its data.
                                        // value - some data. Always undefined when done is true.
                                        if (done) {
                                            // ensure onProgress called when content-length=0
                                            if (_this.total === 0) _this.instance.onProgress.call(_this.instance, {
                                                loaded: _this.loaded,
                                                total: _this.total,
                                                lengthComputable: false
                                            });
                                             // no more data needs to be consumed, close the stream
                                            controller.close();
                                            return;
                                        }
                                        _this.loaded += value.byteLength;
                                        _this.instance.onProgress.call(_this.instance, {
                                            loaded: _this.loaded,
                                            total: _this.total,
                                            lengthComputable: !(_this.total === 0)
                                        }); // enqueue the next data chunk into our target stream
                                        controller.enqueue(value);
                                        read();
                                    }).catch(function(error) {
                                        controller.error(error);
                                    });
                                };
                                read1();
                            }
                        }
                    ]);
                    return ProgressHandler;
                }();
                /**
 * Load a file using `fetch`.
 *
 * @param {object} options Request options to use. See example below.
 * @returns {Observer} Observer instance
 * @example
 * // default options
 * let options = {
 *     url: undefined,
 *     method: 'GET',
 *     mode: 'cors',
 *     credentials: 'same-origin',
 *     cache: 'default',
 *     responseType: 'json',
 *     requestHeaders: [],
 *     redirect: 'follow',
 *     referrer: 'client'
 * };
 *
 * // override some options
 * options.url = '../media/demo.wav';

 * // available types: 'arraybuffer', 'blob', 'json' or 'text'
 * options.responseType = 'arraybuffer';
 *
 * // make fetch call
 * let request = util.fetchFile(options);
 *
 * // listen for events
 * request.on('progress', e => {
 *     console.log('progress', e);
 * });
 *
 * request.on('success', data => {
 *     console.log('success!', data);
 * });
 *
 * request.on('error', e => {
 *     console.warn('fetchFile error: ', e);
 * });
 */ function fetchFile(options) {
                    if (!options) throw new Error('fetch options missing');
                    else if (!options.url) throw new Error('fetch url missing');
                    var instance = new _observer.default();
                    var fetchHeaders = new Headers();
                    var fetchRequest = new Request(options.url); // add ability to abort
                    instance.controller = new AbortController(); // check if headers have to be added
                    if (options && options.requestHeaders) // add custom request headers
                    options.requestHeaders.forEach(function(header) {
                        fetchHeaders.append(header.key, header.value);
                    });
                     // parse fetch options
                    var responseType = options.responseType || 'json';
                    var fetchOptions = {
                        method: options.method || 'GET',
                        headers: fetchHeaders,
                        mode: options.mode || 'cors',
                        credentials: options.credentials || 'same-origin',
                        cache: options.cache || 'default',
                        redirect: options.redirect || 'follow',
                        referrer: options.referrer || 'client',
                        signal: instance.controller.signal
                    };
                    fetch(fetchRequest, fetchOptions).then(function(response) {
                        // store response reference
                        instance.response = response;
                        var progressAvailable = true;
                        if (!response.body) // ReadableStream is not yet supported in this browser
                        // see https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
                        progressAvailable = false;
                         // Server must send CORS header "Access-Control-Expose-Headers: content-length"
                        var contentLength = response.headers.get('content-length');
                        if (contentLength === null) // Content-Length server response header missing.
                        // Don't evaluate download progress if we can't compare against a total size
                        // see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Access-Control-Expose-Headers
                        progressAvailable = false;
                        if (!progressAvailable) // not able to check download progress so skip it
                        return response;
                         // fire progress event when during load
                        instance.onProgress = function(e) {
                            instance.fireEvent('progress', e);
                        };
                        return new Response(new ReadableStream(new ProgressHandler1(instance, contentLength, response)), fetchOptions);
                    }).then(function(response) {
                        var errMsg;
                        if (response.ok) switch(responseType){
                            case 'arraybuffer':
                                return response.arrayBuffer();
                            case 'json':
                                return response.json();
                            case 'blob':
                                return response.blob();
                            case 'text':
                                return response.text();
                            default:
                                errMsg = 'Unknown responseType: ' + responseType;
                                break;
                        }
                        if (!errMsg) errMsg = 'HTTP error status: ' + response.status;
                        throw new Error(errMsg);
                    }).then(function(response) {
                        instance.fireEvent('success', response);
                    }).catch(function(error) {
                        instance.fireEvent('error', error);
                    }); // return the fetch request
                    instance.fetchRequest = fetchRequest;
                    return instance;
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/frame.js": (module, exports, __webpack_require__)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = frame;
                var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! ./request-animation-frame */ "./src/util/request-animation-frame.js"));
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                /**
 * Create a function which will be called at the next requestAnimationFrame
 * cycle
 *
 * @param {function} func The function to call
 *
 * @return {func} The function wrapped within a requestAnimationFrame
 */ function frame(func) {
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                        return (0, _requestAnimationFrame.default)(function() {
                            return func.apply(void 0, args);
                        });
                    };
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/get-id.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = getId;
                /**
 * Get a random prefixed ID
 *
 * @param {String} prefix Prefix to use. Default is `'wavesurfer_'`.
 * @returns {String} Random prefixed ID
 * @example
 * console.log(getId()); // logs 'wavesurfer_b5pors4ru6g'
 *
 * let prefix = 'foo-';
 * console.log(getId(prefix)); // logs 'foo-b5pors4ru6g'
 */ function getId(prefix) {
                    if (prefix === undefined) prefix = 'wavesurfer_';
                    return prefix + Math.random().toString(32).substring(2);
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/index.js": (__unused_webpack_module, exports, __webpack_require__)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                Object.defineProperty(exports, "getId", {
                    enumerable: true,
                    get: function get() {
                        return _getId.default;
                    }
                });
                Object.defineProperty(exports, "max", {
                    enumerable: true,
                    get: function get() {
                        return _max.default;
                    }
                });
                Object.defineProperty(exports, "min", {
                    enumerable: true,
                    get: function get() {
                        return _min.default;
                    }
                });
                Object.defineProperty(exports, "absMax", {
                    enumerable: true,
                    get: function get() {
                        return _absMax.default;
                    }
                });
                Object.defineProperty(exports, "Observer", {
                    enumerable: true,
                    get: function get() {
                        return _observer.default;
                    }
                });
                Object.defineProperty(exports, "style", {
                    enumerable: true,
                    get: function get() {
                        return _style.default;
                    }
                });
                Object.defineProperty(exports, "requestAnimationFrame", {
                    enumerable: true,
                    get: function get() {
                        return _requestAnimationFrame.default;
                    }
                });
                Object.defineProperty(exports, "frame", {
                    enumerable: true,
                    get: function get() {
                        return _frame.default;
                    }
                });
                Object.defineProperty(exports, "debounce", {
                    enumerable: true,
                    get: function get() {
                        return _debounce.default;
                    }
                });
                Object.defineProperty(exports, "preventClick", {
                    enumerable: true,
                    get: function get() {
                        return _preventClick.default;
                    }
                });
                Object.defineProperty(exports, "fetchFile", {
                    enumerable: true,
                    get: function get() {
                        return _fetch.default;
                    }
                });
                Object.defineProperty(exports, "clamp", {
                    enumerable: true,
                    get: function get() {
                        return _clamp.default;
                    }
                });
                Object.defineProperty(exports, "withOrientation", {
                    enumerable: true,
                    get: function get() {
                        return _orientation.default;
                    }
                });
                Object.defineProperty(exports, "ignoreSilenceMode", {
                    enumerable: true,
                    get: function get() {
                        return _silenceMode.default;
                    }
                });
                var _getId = _interopRequireDefault(__webpack_require__(/*! ./get-id */ "./src/util/get-id.js"));
                var _max = _interopRequireDefault(__webpack_require__(/*! ./max */ "./src/util/max.js"));
                var _min = _interopRequireDefault(__webpack_require__(/*! ./min */ "./src/util/min.js"));
                var _absMax = _interopRequireDefault(__webpack_require__(/*! ./absMax */ "./src/util/absMax.js"));
                var _observer = _interopRequireDefault(__webpack_require__(/*! ./observer */ "./src/util/observer.js"));
                var _style = _interopRequireDefault(__webpack_require__(/*! ./style */ "./src/util/style.js"));
                var _requestAnimationFrame = _interopRequireDefault(__webpack_require__(/*! ./request-animation-frame */ "./src/util/request-animation-frame.js"));
                var _frame = _interopRequireDefault(__webpack_require__(/*! ./frame */ "./src/util/frame.js"));
                var _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));
                var _preventClick = _interopRequireDefault(__webpack_require__(/*! ./prevent-click */ "./src/util/prevent-click.js"));
                var _fetch = _interopRequireDefault(__webpack_require__(/*! ./fetch */ "./src/util/fetch.js"));
                var _clamp = _interopRequireDefault(__webpack_require__(/*! ./clamp */ "./src/util/clamp.js"));
                var _orientation = _interopRequireDefault(__webpack_require__(/*! ./orientation */ "./src/util/orientation.js"));
                var _silenceMode = _interopRequireDefault(__webpack_require__(/*! ./silence-mode */ "./src/util/silence-mode.js"));
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
            /***/ },
            /***/ "./src/util/max.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = max;
                /**
 * Get the largest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Largest number found
 * @example console.log(max([1, 2, 3])); // logs 3
 */ function max(values) {
                    var largest = -Infinity;
                    Object.keys(values).forEach(function(i) {
                        if (values[i] > largest) largest = values[i];
                    });
                    return largest;
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/min.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = min;
                /**
 * Get the smallest value
 *
 * @param   {Array} values Array of numbers
 * @returns {Number} Smallest number found
 * @example console.log(min([1, 2, 3])); // logs 1
 */ function min(values) {
                    var smallest = Number(Infinity);
                    Object.keys(values).forEach(function(i) {
                        if (values[i] < smallest) smallest = values[i];
                    });
                    return smallest;
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/observer.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                /**
 * @typedef {Object} ListenerDescriptor
 * @property {string} name The name of the event
 * @property {function} callback The callback
 * @property {function} un The function to call to remove the listener
 */ /**
 * Observer class
 */ var Observer1 = /*#__PURE__*/ function() {
                    /**
   * Instantiate Observer
   */ function Observer() {
                        _classCallCheck(this, Observer);
                        /**
     * @private
     * @todo Initialise the handlers here already and remove the conditional
     * assignment in `on()`
     */ this._disabledEventEmissions = [];
                        this.handlers = null;
                    }
                    /**
   * Attach a handler function for an event.
   *
   * @param {string} event Name of the event to listen to
   * @param {function} fn The callback to trigger when the event is fired
   * @return {ListenerDescriptor} The event descriptor
   */ _createClass(Observer, [
                        {
                            key: "on",
                            value: function on(event, fn1) {
                                var _this = this;
                                if (!this.handlers) this.handlers = {
                                };
                                var handlers = this.handlers[event];
                                if (!handlers) handlers = this.handlers[event] = [];
                                handlers.push(fn1); // Return an event descriptor
                                return {
                                    name: event,
                                    callback: fn1,
                                    un: function un(e, fn) {
                                        return _this.un(e, fn);
                                    }
                                };
                            }
                        },
                        {
                            key: "un",
                            value: function un(event, fn) {
                                if (!this.handlers) return;
                                var handlers = this.handlers[event];
                                var i;
                                if (handlers) {
                                    if (fn) {
                                        for(i = handlers.length - 1; i >= 0; i--)if (handlers[i] == fn) handlers.splice(i, 1);
                                    } else handlers.length = 0;
                                }
                            }
                        },
                        {
                            key: "unAll",
                            value: function unAll() {
                                this.handlers = null;
                            }
                        },
                        {
                            key: "once",
                            value: function once(event, handler) {
                                var _this2 = this;
                                var fn2 = function fn() {
                                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                                    /*  eslint-disable no-invalid-this */ handler.apply(_this2, args);
                                    /*  eslint-enable no-invalid-this */ setTimeout(function() {
                                        _this2.un(event, fn);
                                    }, 0);
                                };
                                return this.on(event, fn2);
                            }
                        },
                        {
                            key: "setDisabledEventEmissions",
                            value: function setDisabledEventEmissions(eventNames) {
                                this._disabledEventEmissions = eventNames;
                            }
                        },
                        {
                            key: "_isDisabledEventEmission",
                            value: function _isDisabledEventEmission(event) {
                                return this._disabledEventEmissions && this._disabledEventEmissions.includes(event);
                            }
                        },
                        {
                            key: "fireEvent",
                            value: function fireEvent(event) {
                                for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
                                if (!this.handlers || this._isDisabledEventEmission(event)) return;
                                var handlers = this.handlers[event];
                                handlers && handlers.forEach(function(fn) {
                                    fn.apply(void 0, args);
                                });
                            }
                        }
                    ]);
                    return Observer;
                }();
                exports.default = Observer1;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/orientation.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = withOrientation;
                var verticalPropMap = {
                    width: 'height',
                    height: 'width',
                    overflowX: 'overflowY',
                    overflowY: 'overflowX',
                    clientWidth: 'clientHeight',
                    clientHeight: 'clientWidth',
                    clientX: 'clientY',
                    clientY: 'clientX',
                    scrollWidth: 'scrollHeight',
                    scrollLeft: 'scrollTop',
                    offsetLeft: 'offsetTop',
                    offsetTop: 'offsetLeft',
                    offsetHeight: 'offsetWidth',
                    offsetWidth: 'offsetHeight',
                    left: 'top',
                    right: 'bottom',
                    top: 'left',
                    bottom: 'right',
                    borderRightStyle: 'borderBottomStyle',
                    borderRightWidth: 'borderBottomWidth',
                    borderRightColor: 'borderBottomColor'
                };
                /**
 * Convert a horizontally-oriented property name to a vertical one.
 *
 * @param {string} prop A property name
 * @param {bool} vertical Whether the element is oriented vertically
 * @returns {string} prop, converted appropriately
 */ function mapProp(prop, vertical) {
                    if (Object.prototype.hasOwnProperty.call(verticalPropMap, prop)) return vertical ? verticalPropMap[prop] : prop;
                    else return prop;
                }
                var isProxy = Symbol("isProxy");
                /**
 * Returns an appropriately oriented object based on vertical.
 * If vertical is true, attribute getting and setting will be mapped through
 * verticalPropMap, so that e.g. getting the object's .width will give its
 * .height instead.
 * Certain methods of an oriented object will return oriented objects as well.
 * Oriented objects can't be added to the DOM directly since they are Proxy objects
 * and thus fail typechecks. Use domElement to get the actual element for this.
 *
 * @param {object} target The object to be wrapped and oriented
 * @param {bool} vertical Whether the element is oriented vertically
 * @returns {Proxy} An oriented object with attr translation via verticalAttrMap
 * @since 5.0.0
 */ function withOrientation(target, vertical) {
                    if (target[isProxy]) return target;
                    else return new Proxy(target, {
                        get: function get(obj, prop, receiver) {
                            if (prop === isProxy) return true;
                            else if (prop === 'domElement') return obj;
                            else if (prop === 'style') return withOrientation(obj.style, vertical);
                            else if (prop === 'canvas') return withOrientation(obj.canvas, vertical);
                            else if (prop === 'getBoundingClientRect') return function() {
                                return withOrientation(obj.getBoundingClientRect.apply(obj, arguments), vertical);
                            };
                            else if (prop === 'getContext') return function() {
                                return withOrientation(obj.getContext.apply(obj, arguments), vertical);
                            };
                            else {
                                var value = obj[mapProp(prop, vertical)];
                                return typeof value == 'function' ? value.bind(obj) : value;
                            }
                        },
                        set: function set(obj, prop, value) {
                            obj[mapProp(prop, vertical)] = value;
                            return true;
                        }
                    });
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/prevent-click.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = preventClick;
                /**
 * Stops propagation of click event and removes event listener
 *
 * @private
 * @param {object} event The click event
 */ function preventClickHandler(event) {
                    event.stopPropagation();
                    document.body.removeEventListener('click', preventClickHandler, true);
                }
                /**
 * Starts listening for click event and prevent propagation
 *
 * @param {object} values Values
 */ function preventClick(values) {
                    document.body.addEventListener('click', preventClickHandler, true);
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/request-animation-frame.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                /* eslint-disable valid-jsdoc */ /**
 * Returns the `requestAnimationFrame` function for the browser, or a shim with
 * `setTimeout` if the function is not found
 *
 * @return {function} Available `requestAnimationFrame` function for the browser
 */ var _default = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
                    return setTimeout(callback, 1000 / 60);
                }).bind(window);
                exports.default = _default;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/silence-mode.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = ignoreSilenceMode;
                /**
 * Ignores device silence mode when using the `WebAudio` backend.
 *
 * Many mobile devices contain a hardware button to mute the ringtone for incoming
 * calls and messages. Unfortunately, on some platforms like iOS, this also mutes
 * wavesurfer's audio when using the `WebAudio` backend. This function creates a
 * temporary `<audio>` element that makes sure the WebAudio backend keeps playing
 * when muting the device ringer.
 *
 * @since 5.2.0
 */ function ignoreSilenceMode() {
                    // Set the src to a short bit of url encoded as a silent mp3
                    // NOTE The silence MP3 must be high quality, when web audio sounds are played
                    // in parallel the web audio sound is mixed to match the bitrate of the html sound
                    // 0.01 seconds of silence VBR220-260 Joint Stereo 859B
                    var audioData = "data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//////////////////////////////////////////////////////////////////8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADgnABGiAAQBCqgCRMAAgEAH///////////////7+n/9FTuQsQH//////2NG0jWUGlio5gLQTOtIoeR2WX////X4s9Atb/JRVCbBUpeRUq//////////////////9RUi0f2jn/+xDECgPCjAEQAABN4AAANIAAAAQVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="; // disable iOS Airplay (setting the attribute in js doesn't work)
                    var tmp = document.createElement("div");
                    tmp.innerHTML = '<audio x-webkit-airplay="deny"></audio>';
                    var audioSilentMode = tmp.children.item(0);
                    audioSilentMode.src = audioData;
                    audioSilentMode.preload = "auto";
                    audioSilentMode.type = "audio/mpeg";
                    audioSilentMode.disableRemotePlayback = true; // play
                    audioSilentMode.play(); // cleanup
                    audioSilentMode.remove();
                    tmp.remove();
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/util/style.js": (module, exports)=>{
                "use strict";
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = style;
                /**
 * Apply a map of styles to an element
 *
 * @param {HTMLElement} el The element that the styles will be applied to
 * @param {Object} styles The map of propName: attribute, both are used as-is
 *
 * @return {HTMLElement} el
 */ function style(el, styles) {
                    Object.keys(styles).forEach(function(prop) {
                        if (el.style[prop] !== styles[prop]) el.style[prop] = styles[prop];
                    });
                    return el;
                }
                module.exports = exports.default;
            /***/ },
            /***/ "./src/wavesurfer.js": (module, exports, __webpack_require__)=>{
                "use strict";
                function _typeof(obj5) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj5);
                }
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
                var _drawer = _interopRequireDefault(__webpack_require__(/*! ./drawer.multicanvas */ "./src/drawer.multicanvas.js"));
                var _webaudio = _interopRequireDefault(__webpack_require__(/*! ./webaudio */ "./src/webaudio.js"));
                var _mediaelement = _interopRequireDefault(__webpack_require__(/*! ./mediaelement */ "./src/mediaelement.js"));
                var _peakcache = _interopRequireDefault(__webpack_require__(/*! ./peakcache */ "./src/peakcache.js"));
                var _mediaelementWebaudio = _interopRequireDefault(__webpack_require__(/*! ./mediaelement-webaudio */ "./src/mediaelement-webaudio.js"));
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : {
                        default: obj
                    };
                }
                function _getRequireWildcardCache(nodeInterop4) {
                    if (typeof WeakMap !== "function") return null;
                    var cacheBabelInterop = new WeakMap();
                    var cacheNodeInterop = new WeakMap();
                    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                    })(nodeInterop4);
                }
                function _interopRequireWildcard(obj, nodeInterop) {
                    if (!nodeInterop && obj && obj.__esModule) return obj;
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
                        default: obj
                    };
                    var cache = _getRequireWildcardCache(nodeInterop);
                    if (cache && cache.has(obj)) return cache.get(obj);
                    var newObj = {
                    };
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                        else newObj[key] = obj[key];
                    }
                    newObj.default = obj;
                    if (cache) cache.set(obj, newObj);
                    return newObj;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o9, p5) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o9, p5);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
                    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                        }));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o10) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o10);
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                /*
 * This work is licensed under a BSD-3-Clause License.
 */ /** @external {HTMLElement} https://developer.mozilla.org/en/docs/Web/API/HTMLElement */ /** @external {OfflineAudioContext} https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext */ /** @external {File} https://developer.mozilla.org/en-US/docs/Web/API/File */ /** @external {Blob} https://developer.mozilla.org/en-US/docs/Web/API/Blob */ /** @external {CanvasRenderingContext2D} https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D */ /** @external {MediaStreamConstraints} https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints */ /** @external {AudioNode} https://developer.mozilla.org/de/docs/Web/API/AudioNode */ /**
 * @typedef {Object} WavesurferParams
 * @property {AudioContext} audioContext=null Use your own previously
 * initialized AudioContext or leave blank.
 * @property {number} audioRate=1 Speed at which to play audio. Lower number is
 * slower.
 * @property {ScriptProcessorNode} audioScriptProcessor=null Use your own previously
 * initialized ScriptProcessorNode or leave blank.
 * @property {boolean} autoCenter=true If a scrollbar is present, center the
 * waveform on current progress
 * @property {number} autoCenterRate=5 If autoCenter is active, rate at which the
 * waveform is centered
 * @property {boolean} autoCenterImmediately=false If autoCenter is active, immediately
 * center waveform on current progress
 * @property {string} backend='WebAudio' `'WebAudio'|'MediaElement'|'MediaElementWebAudio'` In most cases
 * you don't have to set this manually. MediaElement is a fallback for unsupported browsers.
 * MediaElementWebAudio allows to use WebAudio API also with big audio files, loading audio like with
 * MediaElement backend (HTML5 audio tag). You have to use the same methods of MediaElement backend for loading and
 * playback, giving also peaks, so the audio data are not decoded. In this way you can use WebAudio features, like filters,
 * also with audio with big duration. For example:
 * ` wavesurfer.load(url | HTMLMediaElement, peaks, preload, duration);
 *   wavesurfer.play();
 *   wavesurfer.setFilter(customFilter);
 * `
 * @property {string} backgroundColor=null Change background color of the
 * waveform container.
 * @property {number} barHeight=1 The height of the wave bars.
 * @property {number} barRadius=0 The radius of the wave bars. Makes bars rounded
 * @property {number} barGap=null The optional spacing between bars of the wave,
 * if not provided will be calculated in legacy format.
 * @property {number} barWidth=null Draw the waveform using bars.
 * @property {number} barMinHeight=null If specified, draw at least a bar of this height,
 * eliminating waveform gaps
 * @property {boolean} closeAudioContext=false Close and nullify all audio
 * contexts when the destroy method is called.
 * @property {!string|HTMLElement} container CSS selector or HTML element where
 * the waveform should be drawn. This is the only required parameter.
 * @property {string} cursorColor='#333' The fill color of the cursor indicating
 * the playhead position.
 * @property {number} cursorWidth=1 Measured in pixels.
 * @property {object} drawingContextAttributes={desynchronized: false} Drawing context
 * attributes.
 * @property {number} duration=null Optional audio length so pre-rendered peaks
 * can be display immediately for example.
 * @property {boolean} fillParent=true Whether to fill the entire container or
 * draw only according to `minPxPerSec`.
 * @property {boolean} forceDecode=false Force decoding of audio using web audio
 * when zooming to get a more detailed waveform.
 * @property {number} height=128 The height of the waveform. Measured in
 * pixels.
 * @property {boolean} hideScrollbar=false Whether to hide the horizontal
 * scrollbar when one would normally be shown.
 * @property {boolean} ignoreSilenceMode=false If true, ignores device silence mode
 * when using the `WebAudio` backend.
 * @property {boolean} interact=true Whether the mouse interaction will be
 * enabled at initialization. You can switch this parameter at any time later
 * on.
 * @property {boolean} loopSelection=true (Use with regions plugin) Enable
 * looping of selected regions
 * @property {number} maxCanvasWidth=4000 Maximum width of a single canvas in
 * pixels, excluding a small overlap (2 * `pixelRatio`, rounded up to the next
 * even integer). If the waveform is longer than this value, additional canvases
 * will be used to render the waveform, which is useful for very large waveforms
 * that may be too wide for browsers to draw on a single canvas.
 * @property {boolean} mediaControls=false (Use with backend `MediaElement` or `MediaElementWebAudio`)
 * this enables the native controls for the media element
 * @property {string} mediaType='audio' (Use with backend `MediaElement` or `MediaElementWebAudio`)
 * `'audio'|'video'` ('video' only for `MediaElement`)
 * @property {number} minPxPerSec=20 Minimum number of pixels per second of
 * audio.
 * @property {boolean} normalize=false If true, normalize by the maximum peak
 * instead of 1.0.
 * @property {boolean} partialRender=false Use the PeakCache to improve
 * rendering speed of large waveforms
 * @property {number} pixelRatio=window.devicePixelRatio The pixel ratio used to
 * calculate display
 * @property {PluginDefinition[]} plugins=[] An array of plugin definitions to
 * register during instantiation, they will be directly initialised unless they
 * are added with the `deferInit` property set to true.
 * @property {string} progressColor='#555' The fill color of the part of the
 * waveform behind the cursor. When `progressColor` and `waveColor` are the same
 * the progress wave is not rendered at all.
 * @property {boolean} removeMediaElementOnDestroy=true Set to false to keep the
 * media element in the DOM when the player is destroyed. This is useful when
 * reusing an existing media element via the `loadMediaElement` method.
 * @property {Object} renderer=MultiCanvas Can be used to inject a custom
 * renderer.
 * @property {boolean|number} responsive=false If set to `true` resize the
 * waveform, when the window is resized. This is debounced with a `100ms`
 * timeout by default. If this parameter is a number it represents that timeout.
 * @property {boolean} rtl=false If set to `true`, renders waveform from
 * right-to-left.
 * @property {boolean} scrollParent=false Whether to scroll the container with a
 * lengthy waveform. Otherwise the waveform is shrunk to the container width
 * (see fillParent).
 * @property {number} skipLength=2 Number of seconds to skip with the
 * skipForward() and skipBackward() methods.
 * @property {boolean} splitChannels=false Render with separate waveforms for
 * the channels of the audio
 * @property {SplitChannelOptions} splitChannelsOptions={} Options for splitChannel rendering
 * @property {boolean} vertical=false Render the waveform vertically instead of horizontally.
 * @property {string} waveColor='#999' The fill color of the waveform after the
 * cursor.
 * @property {object} xhr={} XHR options. For example:
 * `let xhr = {
 *     cache: 'default',
 *     mode: 'cors',
 *     method: 'GET',
 *     credentials: 'same-origin',
 *     redirect: 'follow',
 *     referrer: 'client',
 *     requestHeaders: [
 *         {
 *             key: 'Authorization',
 *             value: 'my-token'
 *         }
 *     ]
 * };`
 */ /**
 * @typedef {Object} PluginDefinition
 * @desc The Object used to describe a plugin
 * @example wavesurfer.addPlugin(pluginDefinition);
 * @property {string} name The name of the plugin, the plugin instance will be
 * added as a property to the wavesurfer instance under this name
 * @property {?Object} staticProps The properties that should be added to the
 * wavesurfer instance as static properties
 * @property {?boolean} deferInit Don't initialise plugin
 * automatically
 * @property {Object} params={} The plugin parameters, they are the first parameter
 * passed to the plugin class constructor function
 * @property {PluginClass} instance The plugin instance factory, is called with
 * the dependency specified in extends. Returns the plugin class.
 */ /**
 * @typedef {Object} SplitChannelOptions
 * @desc parameters applied when splitChannels option is true
 * @property {boolean} overlay=false determines whether channels are rendered on top of each other or on separate tracks
 * @property {object} channelColors={} object describing color for each channel. Example:
 * {
 *     0: {
 *         progressColor: 'green',
 *         waveColor: 'pink'
 *     },
 *     1: {
 *         progressColor: 'orange',
 *         waveColor: 'purple'
 *     }
 * }
 * @property {number[]} filterChannels=[] indexes of channels to be hidden from rendering
 * @property {boolean} relativeNormalization=false determines whether
 * normalization is done per channel or maintains proportionality between
 * channels. Only applied when normalize and splitChannels are both true.
 * @since 4.3.0
 */ /**
 * @interface PluginClass
 *
 * @desc This is the interface which is implemented by all plugin classes. Note
 * that this only turns into an observer after being passed through
 * `wavesurfer.addPlugin`.
 *
 * @extends {Observer}
 */ var PluginClass1 = /*#__PURE__*/ function() {
                    /**
   * Construct the plugin
   *
   * @param {Object} params={} The plugin params (specific to the plugin)
   * @param {Object} ws The wavesurfer instance
   */ function PluginClass(params, ws) {
                        _classCallCheck(this, PluginClass);
                    }
                    /**
   * Initialise the plugin
   *
   * Start doing something. This is called by
   * `wavesurfer.initPlugin(pluginName)`
   */ _createClass(PluginClass, [
                        {
                            key: "create",
                            value: /**
     * Plugin definition factory
     *
     * This function must be used to create a plugin definition which can be
     * used by wavesurfer to correctly instantiate the plugin.
     *
     * It returns a `PluginDefinition` object representing the plugin.
     *
     * @param {Object} params={} The plugin params (specific to the plugin)
     */ function create(params) {
                            }
                        },
                        {
                            key: "init",
                            value: function init() {
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                            }
                        }
                    ]);
                    return PluginClass;
                }();
                /**
 * WaveSurfer core library class
 *
 * @extends {Observer}
 * @example
 * const params = {
 *   container: '#waveform',
 *   waveColor: 'violet',
 *   progressColor: 'purple'
 * };
 *
 * // initialise like this
 * const wavesurfer = WaveSurfer.create(params);
 *
 * // or like this ...
 * const wavesurfer = new WaveSurfer(params);
 * wavesurfer.init();
 *
 * // load audio file
 * wavesurfer.load('example/media/demo.wav');
 */ var WaveSurfer1 = /*#__PURE__*/ function(_util$Observer) {
                    _inherits(WaveSurfer, _util$Observer);
                    var _super = _createSuper(WaveSurfer);
                    /**
   * Initialise wavesurfer instance
   *
   * @param {WavesurferParams} params Instantiation options for wavesurfer
   * @example
   * const wavesurfer = new WaveSurfer(params);
   * @returns {this} Wavesurfer instance
   */ function WaveSurfer(params) {
                        var _this;
                        _classCallCheck(this, WaveSurfer);
                        _this = _super.call(this);
                        /**
     * Extract relevant parameters (or defaults)
     * @private
     */ _this.defaultParams = {
                            audioContext: null,
                            audioScriptProcessor: null,
                            audioRate: 1,
                            autoCenter: true,
                            autoCenterRate: 5,
                            autoCenterImmediately: false,
                            backend: 'WebAudio',
                            backgroundColor: null,
                            barHeight: 1,
                            barRadius: 0,
                            barGap: null,
                            barMinHeight: null,
                            container: null,
                            cursorColor: '#333',
                            cursorWidth: 1,
                            dragSelection: true,
                            drawingContextAttributes: {
                                // Boolean that hints the user agent to reduce the latency
                                // by desynchronizing the canvas paint cycle from the event
                                // loop
                                desynchronized: false
                            },
                            duration: null,
                            fillParent: true,
                            forceDecode: false,
                            height: 128,
                            hideScrollbar: false,
                            ignoreSilenceMode: false,
                            interact: true,
                            loopSelection: true,
                            maxCanvasWidth: 4000,
                            mediaContainer: null,
                            mediaControls: false,
                            mediaType: 'audio',
                            minPxPerSec: 20,
                            normalize: false,
                            partialRender: false,
                            pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
                            plugins: [],
                            progressColor: '#555',
                            removeMediaElementOnDestroy: true,
                            renderer: _drawer.default,
                            responsive: false,
                            rtl: false,
                            scrollParent: false,
                            skipLength: 2,
                            splitChannels: false,
                            splitChannelsOptions: {
                                overlay: false,
                                channelColors: {
                                },
                                filterChannels: [],
                                relativeNormalization: false
                            },
                            vertical: false,
                            waveColor: '#999',
                            xhr: {
                            }
                        };
                        _this.backends = {
                            MediaElement: _mediaelement.default,
                            WebAudio: _webaudio.default,
                            MediaElementWebAudio: _mediaelementWebaudio.default
                        };
                        _this.util = util;
                        _this.params = Object.assign({
                        }, _this.defaultParams, params);
                        _this.params.splitChannelsOptions = Object.assign({
                        }, _this.defaultParams.splitChannelsOptions, params.splitChannelsOptions);
                        /** @private */ _this.container = 'string' == typeof params.container ? document.querySelector(_this.params.container) : _this.params.container;
                        if (!_this.container) throw new Error('Container element not found');
                        if (_this.params.mediaContainer == null) /** @private */ _this.mediaContainer = _this.container;
                        else if (typeof _this.params.mediaContainer == 'string') /** @private */ _this.mediaContainer = document.querySelector(_this.params.mediaContainer);
                        else /** @private */ _this.mediaContainer = _this.params.mediaContainer;
                        if (!_this.mediaContainer) throw new Error('Media Container element not found');
                        if (_this.params.maxCanvasWidth <= 1) throw new Error('maxCanvasWidth must be greater than 1');
                        else if (_this.params.maxCanvasWidth % 2 == 1) throw new Error('maxCanvasWidth must be an even number');
                        if (_this.params.rtl === true) {
                            if (_this.params.vertical === true) util.style(_this.container, {
                                transform: 'rotateX(180deg)'
                            });
                            else util.style(_this.container, {
                                transform: 'rotateY(180deg)'
                            });
                        }
                        if (_this.params.backgroundColor) _this.setBackgroundColor(_this.params.backgroundColor);
                        /**
     * @private Used to save the current volume when muting so we can
     * restore once unmuted
     * @type {number}
     */ _this.savedVolume = 0;
                        /**
     * @private The current muted state
     * @type {boolean}
     */ _this.isMuted = false;
                        /**
     * @private Will hold a list of event descriptors that need to be
     * canceled on subsequent loads of audio
     * @type {Object[]}
     */ _this.tmpEvents = [];
                        /**
     * @private Holds any running audio downloads
     * @type {Observer}
     */ _this.currentRequest = null;
                        /** @private */ _this.arraybuffer = null;
                        /** @private */ _this.drawer = null;
                        /** @private */ _this.backend = null;
                        /** @private */ _this.peakCache = null; // cache constructor objects
                        if (typeof _this.params.renderer !== 'function') throw new Error('Renderer parameter is invalid');
                        /**
     * @private The uninitialised Drawer class
     */ _this.Drawer = _this.params.renderer;
                        /**
     * @private The uninitialised Backend class
     */ // Back compat
                        if (_this.params.backend == 'AudioElement') _this.params.backend = 'MediaElement';
                        if ((_this.params.backend == 'WebAudio' || _this.params.backend === 'MediaElementWebAudio') && !_webaudio.default.prototype.supportsWebAudio.call(null)) _this.params.backend = 'MediaElement';
                        _this.Backend = _this.backends[_this.params.backend];
                        /**
     * @private map of plugin names that are currently initialised
     */ _this.initialisedPluginList = {
                        };
                        /** @private */ _this.isDestroyed = false;
                        /**
     * Get the current ready status.
     *
     * @example const isReady = wavesurfer.isReady;
     * @return {boolean}
     */ _this.isReady = false; // responsive debounced event listener. If this.params.responsive is not
                        // set, this is never called. Use 100ms or this.params.responsive as
                        // timeout for the debounce function.
                        var prevWidth = 0;
                        _this._onResize = util.debounce(function() {
                            if (prevWidth != _this.drawer.wrapper.clientWidth && !_this.params.scrollParent) {
                                prevWidth = _this.drawer.wrapper.clientWidth;
                                _this.drawer.fireEvent('redraw');
                            }
                        }, typeof _this.params.responsive === 'number' ? _this.params.responsive : 100);
                        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
                    }
                    /**
   * Initialise the wave
   *
   * @example
   * var wavesurfer = new WaveSurfer(params);
   * wavesurfer.init();
   * @return {this} The wavesurfer instance
   */ _createClass(WaveSurfer, [
                        {
                            key: "init",
                            value: function init() {
                                this.registerPlugins(this.params.plugins);
                                this.createDrawer();
                                this.createBackend();
                                this.createPeakCache();
                                return this;
                            }
                        },
                        {
                            key: "registerPlugins",
                            value: function registerPlugins(plugins) {
                                var _this2 = this;
                                // first instantiate all the plugins
                                plugins.forEach(function(plugin) {
                                    return _this2.addPlugin(plugin);
                                }); // now run the init functions
                                plugins.forEach(function(plugin) {
                                    // call init function of the plugin if deferInit is falsey
                                    // in that case you would manually use initPlugins()
                                    if (!plugin.deferInit) _this2.initPlugin(plugin.name);
                                });
                                this.fireEvent('plugins-registered', plugins);
                                return this;
                            }
                        },
                        {
                            key: "getActivePlugins",
                            value: function getActivePlugins() {
                                return this.initialisedPluginList;
                            }
                        },
                        {
                            key: "addPlugin",
                            value: function addPlugin(plugin) {
                                var _this3 = this;
                                if (!plugin.name) throw new Error('Plugin does not have a name!');
                                if (!plugin.instance) throw new Error("Plugin ".concat(plugin.name, " does not have an instance property!"));
                                 // staticProps properties are applied to wavesurfer instance
                                if (plugin.staticProps) Object.keys(plugin.staticProps).forEach(function(pluginStaticProp) {
                                    /**
           * Properties defined in a plugin definition's `staticProps` property are added as
           * staticProps properties of the WaveSurfer instance
           */ _this3[pluginStaticProp] = plugin.staticProps[pluginStaticProp];
                                });
                                var Instance = plugin.instance; // turn the plugin instance into an observer
                                var observerPrototypeKeys = Object.getOwnPropertyNames(util.Observer.prototype);
                                observerPrototypeKeys.forEach(function(key) {
                                    Instance.prototype[key] = util.Observer.prototype[key];
                                });
                                /**
       * Instantiated plugin classes are added as a property of the wavesurfer
       * instance
       * @type {Object}
       */ this[plugin.name] = new Instance(plugin.params || {
                                }, this);
                                this.fireEvent('plugin-added', plugin.name);
                                return this;
                            }
                        },
                        {
                            key: "initPlugin",
                            value: function initPlugin(name) {
                                if (!this[name]) throw new Error("Plugin ".concat(name, " has not been added yet!"));
                                if (this.initialisedPluginList[name]) // destroy any already initialised plugins
                                this.destroyPlugin(name);
                                this[name].init();
                                this.initialisedPluginList[name] = true;
                                this.fireEvent('plugin-initialised', name);
                                return this;
                            }
                        },
                        {
                            key: "destroyPlugin",
                            value: function destroyPlugin(name) {
                                if (!this[name]) throw new Error("Plugin ".concat(name, " has not been added yet and cannot be destroyed!"));
                                if (!this.initialisedPluginList[name]) throw new Error("Plugin ".concat(name, " is not active and cannot be destroyed!"));
                                if (typeof this[name].destroy !== 'function') throw new Error("Plugin ".concat(name, " does not have a destroy function!"));
                                this[name].destroy();
                                delete this.initialisedPluginList[name];
                                this.fireEvent('plugin-destroyed', name);
                                return this;
                            }
                        },
                        {
                            key: "destroyAllPlugins",
                            value: function destroyAllPlugins() {
                                var _this4 = this;
                                Object.keys(this.initialisedPluginList).forEach(function(name) {
                                    return _this4.destroyPlugin(name);
                                });
                            }
                        },
                        {
                            key: "createDrawer",
                            value: function createDrawer() {
                                var _this5 = this;
                                this.drawer = new this.Drawer(this.container, this.params);
                                this.drawer.init();
                                this.fireEvent('drawer-created', this.drawer);
                                if (this.params.responsive !== false) {
                                    window.addEventListener('resize', this._onResize, true);
                                    window.addEventListener('orientationchange', this._onResize, true);
                                }
                                this.drawer.on('redraw', function() {
                                    _this5.drawBuffer();
                                    _this5.drawer.progress(_this5.backend.getPlayedPercents());
                                }); // Click-to-seek
                                this.drawer.on('click', function(e, progress) {
                                    setTimeout(function() {
                                        return _this5.seekTo(progress);
                                    }, 0);
                                }); // Relay the scroll event from the drawer
                                this.drawer.on('scroll', function(e) {
                                    if (_this5.params.partialRender) _this5.drawBuffer();
                                    _this5.fireEvent('scroll', e);
                                });
                            }
                        },
                        {
                            key: "createBackend",
                            value: function createBackend() {
                                var _this6 = this;
                                if (this.backend) this.backend.destroy();
                                this.backend = new this.Backend(this.params);
                                this.backend.init();
                                this.fireEvent('backend-created', this.backend);
                                this.backend.on('finish', function() {
                                    _this6.drawer.progress(_this6.backend.getPlayedPercents());
                                    _this6.fireEvent('finish');
                                });
                                this.backend.on('play', function() {
                                    return _this6.fireEvent('play');
                                });
                                this.backend.on('pause', function() {
                                    return _this6.fireEvent('pause');
                                });
                                this.backend.on('audioprocess', function(time) {
                                    _this6.drawer.progress(_this6.backend.getPlayedPercents());
                                    _this6.fireEvent('audioprocess', time);
                                }); // only needed for MediaElement and MediaElementWebAudio backend
                                if (this.params.backend === 'MediaElement' || this.params.backend === 'MediaElementWebAudio') {
                                    this.backend.on('seek', function() {
                                        _this6.drawer.progress(_this6.backend.getPlayedPercents());
                                    });
                                    this.backend.on('volume', function() {
                                        var newVolume = _this6.getVolume();
                                        _this6.fireEvent('volume', newVolume);
                                        if (_this6.backend.isMuted !== _this6.isMuted) {
                                            _this6.isMuted = _this6.backend.isMuted;
                                            _this6.fireEvent('mute', _this6.isMuted);
                                        }
                                    });
                                }
                            }
                        },
                        {
                            key: "createPeakCache",
                            value: function createPeakCache() {
                                if (this.params.partialRender) this.peakCache = new _peakcache.default();
                            }
                        },
                        {
                            key: "getDuration",
                            value: function getDuration() {
                                return this.backend.getDuration();
                            }
                        },
                        {
                            key: "getCurrentTime",
                            value: function getCurrentTime() {
                                return this.backend.getCurrentTime();
                            }
                        },
                        {
                            key: "setCurrentTime",
                            value: function setCurrentTime(seconds) {
                                if (seconds >= this.getDuration()) this.seekTo(1);
                                else this.seekTo(seconds / this.getDuration());
                            }
                        },
                        {
                            key: "play",
                            value: function play(start, end) {
                                var _this7 = this;
                                if (this.params.ignoreSilenceMode) // ignores device hardware silence mode
                                util.ignoreSilenceMode();
                                this.fireEvent('interaction', function() {
                                    return _this7.play(start, end);
                                });
                                return this.backend.play(start, end);
                            }
                        },
                        {
                            key: "setPlayEnd",
                            value: function setPlayEnd(position) {
                                this.backend.setPlayEnd(position);
                            }
                        },
                        {
                            key: "pause",
                            value: function pause() {
                                if (!this.backend.isPaused()) return this.backend.pause();
                            }
                        },
                        {
                            key: "playPause",
                            value: function playPause() {
                                return this.backend.isPaused() ? this.play() : this.pause();
                            }
                        },
                        {
                            key: "isPlaying",
                            value: function isPlaying() {
                                return !this.backend.isPaused();
                            }
                        },
                        {
                            key: "skipBackward",
                            value: function skipBackward(seconds) {
                                this.skip(-seconds || -this.params.skipLength);
                            }
                        },
                        {
                            key: "skipForward",
                            value: function skipForward(seconds) {
                                this.skip(seconds || this.params.skipLength);
                            }
                        },
                        {
                            key: "skip",
                            value: function skip(offset) {
                                var duration = this.getDuration() || 1;
                                var position = this.getCurrentTime() || 0;
                                position = Math.max(0, Math.min(duration, position + (offset || 0)));
                                this.seekAndCenter(position / duration);
                            }
                        },
                        {
                            key: "seekAndCenter",
                            value: function seekAndCenter(progress) {
                                this.seekTo(progress);
                                this.drawer.recenter(progress);
                            }
                        },
                        {
                            key: "seekTo",
                            value: function seekTo(progress) {
                                var _this8 = this;
                                // return an error if progress is not a number between 0 and 1
                                if (typeof progress !== 'number' || !isFinite(progress) || progress < 0 || progress > 1) throw new Error('Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!');
                                this.fireEvent('interaction', function() {
                                    return _this8.seekTo(progress);
                                });
                                var isWebAudioBackend = this.params.backend === 'WebAudio';
                                var paused = this.backend.isPaused();
                                if (isWebAudioBackend && !paused) this.backend.pause();
                                 // avoid small scrolls while paused seeking
                                var oldScrollParent = this.params.scrollParent;
                                this.params.scrollParent = false;
                                this.backend.seekTo(progress * this.getDuration());
                                this.drawer.progress(progress);
                                if (isWebAudioBackend && !paused) this.backend.play();
                                this.params.scrollParent = oldScrollParent;
                                this.fireEvent('seek', progress);
                            }
                        },
                        {
                            key: "stop",
                            value: function stop() {
                                this.pause();
                                this.seekTo(0);
                                this.drawer.progress(0);
                            }
                        },
                        {
                            key: "setSinkId",
                            value: function setSinkId(deviceId) {
                                return this.backend.setSinkId(deviceId);
                            }
                        },
                        {
                            key: "setVolume",
                            value: function setVolume(newVolume) {
                                this.backend.setVolume(newVolume);
                                this.fireEvent('volume', newVolume);
                            }
                        },
                        {
                            key: "getVolume",
                            value: function getVolume() {
                                return this.backend.getVolume();
                            }
                        },
                        {
                            key: "setPlaybackRate",
                            value: function setPlaybackRate(rate) {
                                this.backend.setPlaybackRate(rate);
                            }
                        },
                        {
                            key: "getPlaybackRate",
                            value: function getPlaybackRate() {
                                return this.backend.getPlaybackRate();
                            }
                        },
                        {
                            key: "toggleMute",
                            value: function toggleMute() {
                                this.setMute(!this.isMuted);
                            }
                        },
                        {
                            key: "setMute",
                            value: function setMute(mute) {
                                // ignore all muting requests if the audio is already in that state
                                if (mute === this.isMuted) {
                                    this.fireEvent('mute', this.isMuted);
                                    return;
                                }
                                if (this.backend.setMute) {
                                    // Backends such as the MediaElement backend have their own handling
                                    // of mute, let them handle it.
                                    this.backend.setMute(mute);
                                    this.isMuted = mute;
                                } else if (mute) {
                                    // If currently not muted then save current volume,
                                    // turn off the volume and update the mute properties
                                    this.savedVolume = this.backend.getVolume();
                                    this.backend.setVolume(0);
                                    this.isMuted = true;
                                    this.fireEvent('volume', 0);
                                } else {
                                    // If currently muted then restore to the saved volume
                                    // and update the mute properties
                                    this.backend.setVolume(this.savedVolume);
                                    this.isMuted = false;
                                    this.fireEvent('volume', this.savedVolume);
                                }
                                this.fireEvent('mute', this.isMuted);
                            }
                        },
                        {
                            key: "getMute",
                            value: function getMute() {
                                return this.isMuted;
                            }
                        },
                        {
                            key: "getFilters",
                            value: function getFilters() {
                                return this.backend.filters || [];
                            }
                        },
                        {
                            key: "toggleScroll",
                            value: function toggleScroll() {
                                this.params.scrollParent = !this.params.scrollParent;
                                this.drawBuffer();
                            }
                        },
                        {
                            key: "toggleInteraction",
                            value: function toggleInteraction() {
                                this.params.interact = !this.params.interact;
                            }
                        },
                        {
                            key: "getWaveColor",
                            value: function getWaveColor() {
                                return this.params.waveColor;
                            }
                        },
                        {
                            key: "setWaveColor",
                            value: function setWaveColor(color) {
                                this.params.waveColor = color;
                                this.drawBuffer();
                            }
                        },
                        {
                            key: "getProgressColor",
                            value: function getProgressColor() {
                                return this.params.progressColor;
                            }
                        },
                        {
                            key: "setProgressColor",
                            value: function setProgressColor(color) {
                                this.params.progressColor = color;
                                this.drawBuffer();
                            }
                        },
                        {
                            key: "getBackgroundColor",
                            value: function getBackgroundColor() {
                                return this.params.backgroundColor;
                            }
                        },
                        {
                            key: "setBackgroundColor",
                            value: function setBackgroundColor(color) {
                                this.params.backgroundColor = color;
                                util.style(this.container, {
                                    background: this.params.backgroundColor
                                });
                            }
                        },
                        {
                            key: "getCursorColor",
                            value: function getCursorColor() {
                                return this.params.cursorColor;
                            }
                        },
                        {
                            key: "setCursorColor",
                            value: function setCursorColor(color) {
                                this.params.cursorColor = color;
                                this.drawer.updateCursor();
                            }
                        },
                        {
                            key: "getHeight",
                            value: function getHeight() {
                                return this.params.height;
                            }
                        },
                        {
                            key: "setHeight",
                            value: function setHeight(height) {
                                this.params.height = height;
                                this.drawer.setHeight(height * this.params.pixelRatio);
                                this.drawBuffer();
                            }
                        },
                        {
                            key: "setFilteredChannels",
                            value: function setFilteredChannels(channelIndices) {
                                this.params.splitChannelsOptions.filterChannels = channelIndices;
                                this.drawBuffer();
                            }
                        },
                        {
                            key: "drawBuffer",
                            value: function drawBuffer() {
                                var nominalWidth = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio);
                                var parentWidth = this.drawer.getWidth();
                                var width = nominalWidth; // always start at 0 after zooming for scrolling : issue redraw left part
                                var start = 0;
                                var end = Math.max(start + parentWidth, width); // Fill container
                                if (this.params.fillParent && (!this.params.scrollParent || nominalWidth < parentWidth)) {
                                    width = parentWidth;
                                    start = 0;
                                    end = width;
                                }
                                var peaks;
                                if (this.params.partialRender) {
                                    var newRanges = this.peakCache.addRangeToPeakCache(width, start, end);
                                    var i;
                                    for(i = 0; i < newRanges.length; i++){
                                        peaks = this.backend.getPeaks(width, newRanges[i][0], newRanges[i][1]);
                                        this.drawer.drawPeaks(peaks, width, newRanges[i][0], newRanges[i][1]);
                                    }
                                } else {
                                    peaks = this.backend.getPeaks(width, start, end);
                                    this.drawer.drawPeaks(peaks, width, start, end);
                                }
                                this.fireEvent('redraw', peaks, width);
                            }
                        },
                        {
                            key: "zoom",
                            value: function zoom(pxPerSec) {
                                if (!pxPerSec) {
                                    this.params.minPxPerSec = this.defaultParams.minPxPerSec;
                                    this.params.scrollParent = false;
                                } else {
                                    this.params.minPxPerSec = pxPerSec;
                                    this.params.scrollParent = true;
                                }
                                this.drawBuffer();
                                this.drawer.progress(this.backend.getPlayedPercents());
                                this.drawer.recenter(this.getCurrentTime() / this.getDuration());
                                this.fireEvent('zoom', pxPerSec);
                            }
                        },
                        {
                            key: "loadArrayBuffer",
                            value: function loadArrayBuffer(arraybuffer) {
                                var _this9 = this;
                                this.decodeArrayBuffer(arraybuffer, function(data) {
                                    if (!_this9.isDestroyed) _this9.loadDecodedBuffer(data);
                                });
                            }
                        },
                        {
                            key: "loadDecodedBuffer",
                            value: function loadDecodedBuffer(buffer) {
                                this.backend.load(buffer);
                                this.drawBuffer();
                                this.isReady = true;
                                this.fireEvent('ready');
                            }
                        },
                        {
                            key: "loadBlob",
                            value: function loadBlob(blob) {
                                var _this10 = this;
                                // Create file reader
                                var reader = new FileReader();
                                reader.addEventListener('progress', function(e) {
                                    return _this10.onProgress(e);
                                });
                                reader.addEventListener('load', function(e) {
                                    return _this10.loadArrayBuffer(e.target.result);
                                });
                                reader.addEventListener('error', function() {
                                    return _this10.fireEvent('error', 'Error reading file');
                                });
                                reader.readAsArrayBuffer(blob);
                                this.empty();
                            }
                        },
                        {
                            key: "load",
                            value: function load(url, peaks, preload, duration) {
                                if (!url) throw new Error('url parameter cannot be empty');
                                this.empty();
                                if (preload) {
                                    // check whether the preload attribute will be usable and if not log
                                    // a warning listing the reasons why not and nullify the variable
                                    var preloadIgnoreReasons = {
                                        "Preload is not 'auto', 'none' or 'metadata'": [
                                            'auto',
                                            'metadata',
                                            'none'
                                        ].indexOf(preload) === -1,
                                        'Peaks are not provided': !peaks,
                                        "Backend is not of type 'MediaElement' or 'MediaElementWebAudio'": [
                                            'MediaElement',
                                            'MediaElementWebAudio'
                                        ].indexOf(this.params.backend) === -1,
                                        'Url is not of type string': typeof url !== 'string'
                                    };
                                    var activeReasons = Object.keys(preloadIgnoreReasons).filter(function(reason) {
                                        return preloadIgnoreReasons[reason];
                                    });
                                    if (activeReasons.length) {
                                        // eslint-disable-next-line no-console
                                        console.warn('Preload parameter of wavesurfer.load will be ignored because:\n\t- ' + activeReasons.join('\n\t- ')); // stop invalid values from being used
                                        preload = null;
                                    }
                                } // loadBuffer(url, peaks, duration) requires that url is a string
                                // but users can pass in a HTMLMediaElement to WaveSurfer
                                if (this.params.backend === 'WebAudio' && url instanceof HTMLMediaElement) url = url.src;
                                switch(this.params.backend){
                                    case 'WebAudio':
                                        return this.loadBuffer(url, peaks, duration);
                                    case 'MediaElement':
                                    case 'MediaElementWebAudio':
                                        return this.loadMediaElement(url, peaks, preload, duration);
                                }
                            }
                        },
                        {
                            key: "loadBuffer",
                            value: function loadBuffer(url, peaks, duration) {
                                var _this11 = this;
                                var load = function load(action) {
                                    if (action) _this11.tmpEvents.push(_this11.once('ready', action));
                                    return _this11.getArrayBuffer(url, function(data) {
                                        return _this11.loadArrayBuffer(data);
                                    });
                                };
                                if (peaks) {
                                    this.backend.setPeaks(peaks, duration);
                                    this.drawBuffer();
                                    this.fireEvent('waveform-ready');
                                    this.tmpEvents.push(this.once('interaction', load));
                                } else return load();
                            }
                        },
                        {
                            key: "loadMediaElement",
                            value: function loadMediaElement(urlOrElt, peaks, preload, duration) {
                                var _this12 = this;
                                var url = urlOrElt;
                                if (typeof urlOrElt === 'string') this.backend.load(url, this.mediaContainer, peaks, preload);
                                else {
                                    var elt = urlOrElt;
                                    this.backend.loadElt(elt, peaks); // If peaks are not provided,
                                    // url = element.src so we can get peaks with web audio
                                    url = elt.src;
                                }
                                this.tmpEvents.push(this.backend.once('canplay', function() {
                                    // ignore when backend was already destroyed
                                    if (!_this12.backend.destroyed) {
                                        _this12.drawBuffer();
                                        _this12.isReady = true;
                                        _this12.fireEvent('ready');
                                    }
                                }), this.backend.once('error', function(err) {
                                    return _this12.fireEvent('error', err);
                                })); // If peaks are provided, render them and fire the `waveform-ready` event.
                                if (peaks) {
                                    this.backend.setPeaks(peaks, duration);
                                    this.drawBuffer();
                                    this.fireEvent('waveform-ready');
                                } // If no pre-decoded peaks are provided, or are provided with
                                // forceDecode flag, attempt to download the audio file and decode it
                                // with Web Audio.
                                if ((!peaks || this.params.forceDecode) && this.backend.supportsWebAudio()) this.getArrayBuffer(url, function(arraybuffer) {
                                    _this12.decodeArrayBuffer(arraybuffer, function(buffer) {
                                        _this12.backend.buffer = buffer;
                                        _this12.backend.setPeaks(null);
                                        _this12.drawBuffer();
                                        _this12.fireEvent('waveform-ready');
                                    });
                                });
                            }
                        },
                        {
                            key: "decodeArrayBuffer",
                            value: function decodeArrayBuffer(arraybuffer, callback) {
                                var _this13 = this;
                                if (!this.isDestroyed) {
                                    this.arraybuffer = arraybuffer;
                                    this.backend.decodeArrayBuffer(arraybuffer, function(data) {
                                        // Only use the decoded data if we haven't been destroyed or
                                        // another decode started in the meantime
                                        if (!_this13.isDestroyed && _this13.arraybuffer == arraybuffer) {
                                            callback(data);
                                            _this13.arraybuffer = null;
                                        }
                                    }, function() {
                                        return _this13.fireEvent('error', 'Error decoding audiobuffer');
                                    });
                                }
                            }
                        },
                        {
                            key: "getArrayBuffer",
                            value: function getArrayBuffer(url, callback) {
                                var _this14 = this;
                                var options = Object.assign({
                                    url: url,
                                    responseType: 'arraybuffer'
                                }, this.params.xhr);
                                var request = util.fetchFile(options);
                                this.currentRequest = request;
                                this.tmpEvents.push(request.on('progress', function(e) {
                                    _this14.onProgress(e);
                                }), request.on('success', function(data) {
                                    callback(data);
                                    _this14.currentRequest = null;
                                }), request.on('error', function(e) {
                                    _this14.fireEvent('error', e);
                                    _this14.currentRequest = null;
                                }));
                                return request;
                            }
                        },
                        {
                            key: "onProgress",
                            value: function onProgress(e) {
                                var percentComplete;
                                if (e.lengthComputable) percentComplete = e.loaded / e.total;
                                else // Approximate progress with an asymptotic
                                // function, and assume downloads in the 1-3 MB range.
                                percentComplete = e.loaded / (e.loaded + 1000000);
                                this.fireEvent('loading', Math.round(percentComplete * 100), e.target);
                            }
                        },
                        {
                            key: "exportPCM",
                            value: function exportPCM(length, accuracy, noWindow, start, end) {
                                length = length || 1024;
                                start = start || 0;
                                accuracy = accuracy || 10000;
                                noWindow = noWindow || false;
                                var peaks = this.backend.getPeaks(length, start, end);
                                var arr = [].map.call(peaks, function(val) {
                                    return Math.round(val * accuracy) / accuracy;
                                });
                                return new Promise(function(resolve, reject) {
                                    if (!noWindow) {
                                        var blobJSON = new Blob([
                                            JSON.stringify(arr)
                                        ], {
                                            type: 'application/json;charset=utf-8'
                                        });
                                        var objURL = URL.createObjectURL(blobJSON);
                                        window.open(objURL);
                                        URL.revokeObjectURL(objURL);
                                    }
                                    resolve(arr);
                                });
                            }
                        },
                        {
                            key: "exportImage",
                            value: function exportImage(format, quality, type) {
                                if (!format) format = 'image/png';
                                if (!quality) quality = 1;
                                if (!type) type = 'dataURL';
                                return this.drawer.getImage(format, quality, type);
                            }
                        },
                        {
                            key: "cancelAjax",
                            value: function cancelAjax() {
                                if (this.currentRequest && this.currentRequest.controller) {
                                    // If the current request has a ProgressHandler, then its ReadableStream might need to be cancelled too
                                    // See: Wavesurfer issue #2042
                                    // See Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1583815
                                    if (this.currentRequest._reader) // Ignoring exceptions thrown by call to cancel()
                                    this.currentRequest._reader.cancel().catch(function(err) {
                                    });
                                    this.currentRequest.controller.abort();
                                    this.currentRequest = null;
                                }
                            }
                        },
                        {
                            key: "clearTmpEvents",
                            value: function clearTmpEvents() {
                                this.tmpEvents.forEach(function(e) {
                                    return e.un();
                                });
                            }
                        },
                        {
                            key: "empty",
                            value: function empty() {
                                if (!this.backend.isPaused()) {
                                    this.stop();
                                    this.backend.disconnectSource();
                                }
                                this.isReady = false;
                                this.cancelAjax();
                                this.clearTmpEvents(); // empty drawer
                                this.drawer.progress(0);
                                this.drawer.setWidth(0);
                                this.drawer.drawPeaks({
                                    length: this.drawer.getWidth()
                                }, 0);
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                this.destroyAllPlugins();
                                this.fireEvent('destroy');
                                this.cancelAjax();
                                this.clearTmpEvents();
                                this.unAll();
                                if (this.params.responsive !== false) {
                                    window.removeEventListener('resize', this._onResize, true);
                                    window.removeEventListener('orientationchange', this._onResize, true);
                                }
                                if (this.backend) {
                                    this.backend.destroy(); // clears memory usage
                                    this.backend = null;
                                }
                                if (this.drawer) this.drawer.destroy();
                                this.isDestroyed = true;
                                this.isReady = false;
                                this.arraybuffer = null;
                            }
                        }
                    ], [
                        {
                            key: "create",
                            value: /** @private */ /** @private */ /**
     * Instantiate this class, call its `init` function and returns it
     *
     * @param {WavesurferParams} params The wavesurfer parameters
     * @return {Object} WaveSurfer instance
     * @example const wavesurfer = WaveSurfer.create(params);
     */ function create(params) {
                                var wavesurfer = new WaveSurfer(params);
                                return wavesurfer.init();
                            }
                        }
                    ]);
                    return WaveSurfer;
                }(util.Observer);
                exports.default = WaveSurfer1;
                WaveSurfer1.VERSION = "5.2.0";
                WaveSurfer1.util = util;
                module.exports = exports.default;
            /***/ },
            /***/ "./src/webaudio.js": (module, exports, __webpack_require__)=>{
                "use strict";
                function _typeof(obj6) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj6);
                }
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = void 0;
                var util = _interopRequireWildcard(__webpack_require__(/*! ./util */ "./src/util/index.js"));
                function _getRequireWildcardCache(nodeInterop5) {
                    if (typeof WeakMap !== "function") return null;
                    var cacheBabelInterop = new WeakMap();
                    var cacheNodeInterop = new WeakMap();
                    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
                        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                    })(nodeInterop5);
                }
                function _interopRequireWildcard(obj, nodeInterop) {
                    if (!nodeInterop && obj && obj.__esModule) return obj;
                    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
                        default: obj
                    };
                    var cache = _getRequireWildcardCache(nodeInterop);
                    if (cache && cache.has(obj)) return cache.get(obj);
                    var newObj = {
                    };
                    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
                        else newObj[key] = obj[key];
                    }
                    newObj.default = obj;
                    if (cache) cache.set(obj, newObj);
                    return newObj;
                }
                function _defineProperty(obj, key, value) {
                    if (key in obj) Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                    else obj[key] = value;
                    return obj;
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o11, p6) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o11, p6);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
                    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                        }));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o12) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o12);
                }
                // using constants to prevent someone writing the string wrong
                var PLAYING = 'playing';
                var PAUSED = 'paused';
                var FINISHED = 'finished';
                /**
 * WebAudio backend
 *
 * @extends {Observer}
 */ var WebAudio1 = /*#__PURE__*/ function(_util$Observer) {
                    _inherits(WebAudio, _util$Observer);
                    var _super = _createSuper(WebAudio);
                    /**
   * Construct the backend
   *
   * @param {WavesurferParams} params Wavesurfer parameters
   */ function WebAudio(params) {
                        var _this$stateBehaviors, _this$states;
                        var _this;
                        _classCallCheck(this, WebAudio);
                        _this = _super.call(this);
                        /** @private */ _this.audioContext = null;
                        _this.offlineAudioContext = null;
                        _this.stateBehaviors = (_this$stateBehaviors = {
                        }, _defineProperty(_this$stateBehaviors, PLAYING, {
                            init: function init() {
                                this.addOnAudioProcess();
                            },
                            getPlayedPercents: function getPlayedPercents() {
                                var duration = this.getDuration();
                                return this.getCurrentTime() / duration || 0;
                            },
                            getCurrentTime: function getCurrentTime() {
                                return this.startPosition + this.getPlayedTime();
                            }
                        }), _defineProperty(_this$stateBehaviors, PAUSED, {
                            init: function init() {
                                this.removeOnAudioProcess();
                            },
                            getPlayedPercents: function getPlayedPercents() {
                                var duration = this.getDuration();
                                return this.getCurrentTime() / duration || 0;
                            },
                            getCurrentTime: function getCurrentTime() {
                                return this.startPosition;
                            }
                        }), _defineProperty(_this$stateBehaviors, FINISHED, {
                            init: function init() {
                                this.removeOnAudioProcess();
                                this.fireEvent('finish');
                            },
                            getPlayedPercents: function getPlayedPercents() {
                                return 1;
                            },
                            getCurrentTime: function getCurrentTime() {
                                return this.getDuration();
                            }
                        }), _this$stateBehaviors);
                        _this.params = params;
                        /** ac: Audio Context instance */ _this.ac = params.audioContext || (_this.supportsWebAudio() ? _this.getAudioContext() : {
                        });
                        /**@private */ _this.lastPlay = _this.ac.currentTime;
                        /** @private */ _this.startPosition = 0;
                        /** @private */ _this.scheduledPause = null;
                        /** @private */ _this.states = (_this$states = {
                        }, _defineProperty(_this$states, PLAYING, Object.create(_this.stateBehaviors[PLAYING])), _defineProperty(_this$states, PAUSED, Object.create(_this.stateBehaviors[PAUSED])), _defineProperty(_this$states, FINISHED, Object.create(_this.stateBehaviors[FINISHED])), _this$states);
                        /** @private */ _this.buffer = null;
                        /** @private */ _this.filters = [];
                        /** gainNode: allows to control audio volume */ _this.gainNode = null;
                        /** @private */ _this.mergedPeaks = null;
                        /** @private */ _this.offlineAc = null;
                        /** @private */ _this.peaks = null;
                        /** @private */ _this.playbackRate = 1;
                        /** analyser: provides audio analysis information */ _this.analyser = null;
                        /** scriptNode: allows processing audio */ _this.scriptNode = null;
                        /** @private */ _this.source = null;
                        /** @private */ _this.splitPeaks = [];
                        /** @private */ _this.state = null;
                        /** @private */ _this.explicitDuration = params.duration;
                        /**
     * Boolean indicating if the backend was destroyed.
     */ _this.destroyed = false;
                        return _this;
                    }
                    /**
   * Initialise the backend, called in `wavesurfer.createBackend()`
   */ _createClass(WebAudio, [
                        {
                            key: "supportsWebAudio",
                            value: /** scriptBufferSize: size of the processing buffer */ /** audioContext: allows to process audio with WebAudio API */ /** @private */ /** @private */ /**
     * Does the browser support this backend
     *
     * @return {boolean} Whether or not this browser supports this backend
     */ function supportsWebAudio() {
                                return !!(window.AudioContext || window.webkitAudioContext);
                            }
                        },
                        {
                            key: "getAudioContext",
                            value: function getAudioContext() {
                                if (!window.WaveSurferAudioContext) window.WaveSurferAudioContext = new (window.AudioContext || window.webkitAudioContext)();
                                return window.WaveSurferAudioContext;
                            }
                        },
                        {
                            key: "getOfflineAudioContext",
                            value: function getOfflineAudioContext(sampleRate) {
                                if (!window.WaveSurferOfflineAudioContext) window.WaveSurferOfflineAudioContext = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, sampleRate);
                                return window.WaveSurferOfflineAudioContext;
                            }
                        },
                        {
                            key: "init",
                            value: function init() {
                                this.createVolumeNode();
                                this.createScriptNode();
                                this.createAnalyserNode();
                                this.setState(PAUSED);
                                this.setPlaybackRate(this.params.audioRate);
                                this.setLength(0);
                            }
                        },
                        {
                            key: "disconnectFilters",
                            value: function disconnectFilters() {
                                if (this.filters) {
                                    this.filters.forEach(function(filter) {
                                        filter && filter.disconnect();
                                    });
                                    this.filters = null; // Reconnect direct path
                                    this.analyser.connect(this.gainNode);
                                }
                            }
                        },
                        {
                            key: "setState",
                            value: function setState(state) {
                                if (this.state !== this.states[state]) {
                                    this.state = this.states[state];
                                    this.state.init.call(this);
                                }
                            }
                        },
                        {
                            key: "setFilter",
                            value: function setFilter() {
                                for(var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++)filters[_key] = arguments[_key];
                                this.setFilters(filters);
                            }
                        },
                        {
                            key: "setFilters",
                            value: function setFilters(filters) {
                                // Remove existing filters
                                this.disconnectFilters(); // Insert filters if filter array not empty
                                if (filters && filters.length) {
                                    this.filters = filters; // Disconnect direct path before inserting filters
                                    this.analyser.disconnect(); // Connect each filter in turn
                                    filters.reduce(function(prev, curr) {
                                        prev.connect(curr);
                                        return curr;
                                    }, this.analyser).connect(this.gainNode);
                                }
                            }
                        },
                        {
                            key: "createScriptNode",
                            value: function createScriptNode() {
                                if (this.params.audioScriptProcessor) this.scriptNode = this.params.audioScriptProcessor;
                                else if (this.ac.createScriptProcessor) this.scriptNode = this.ac.createScriptProcessor(WebAudio.scriptBufferSize);
                                else this.scriptNode = this.ac.createJavaScriptNode(WebAudio.scriptBufferSize);
                                this.scriptNode.connect(this.ac.destination);
                            }
                        },
                        {
                            key: "addOnAudioProcess",
                            value: function addOnAudioProcess() {
                                var _this2 = this;
                                this.scriptNode.onaudioprocess = function() {
                                    var time = _this2.getCurrentTime();
                                    if (time >= _this2.getDuration()) {
                                        _this2.setState(FINISHED);
                                        _this2.fireEvent('pause');
                                    } else if (time >= _this2.scheduledPause) _this2.pause();
                                    else if (_this2.state === _this2.states[PLAYING]) _this2.fireEvent('audioprocess', time);
                                };
                            }
                        },
                        {
                            key: "removeOnAudioProcess",
                            value: function removeOnAudioProcess() {
                                this.scriptNode.onaudioprocess = null;
                            }
                        },
                        {
                            key: "createAnalyserNode",
                            value: function createAnalyserNode() {
                                this.analyser = this.ac.createAnalyser();
                                this.analyser.connect(this.gainNode);
                            }
                        },
                        {
                            key: "createVolumeNode",
                            value: function createVolumeNode() {
                                // Create gain node using the AudioContext
                                if (this.ac.createGain) this.gainNode = this.ac.createGain();
                                else this.gainNode = this.ac.createGainNode();
                                 // Add the gain node to the graph
                                this.gainNode.connect(this.ac.destination);
                            }
                        },
                        {
                            key: "setSinkId",
                            value: function setSinkId(deviceId) {
                                if (deviceId) {
                                    /**
         * The webaudio API doesn't currently support setting the device
         * output. Here we create an HTMLAudioElement, connect the
         * webaudio stream to that element and setSinkId there.
         */ var audio = new window.Audio();
                                    if (!audio.setSinkId) return Promise.reject(new Error('setSinkId is not supported in your browser'));
                                    audio.autoplay = true;
                                    var dest = this.ac.createMediaStreamDestination();
                                    this.gainNode.disconnect();
                                    this.gainNode.connect(dest);
                                    audio.srcObject = dest.stream;
                                    return audio.setSinkId(deviceId);
                                } else return Promise.reject(new Error('Invalid deviceId: ' + deviceId));
                            }
                        },
                        {
                            key: "setVolume",
                            value: function setVolume(value) {
                                this.gainNode.gain.setValueAtTime(value, this.ac.currentTime);
                            }
                        },
                        {
                            key: "getVolume",
                            value: function getVolume() {
                                return this.gainNode.gain.value;
                            }
                        },
                        {
                            key: "decodeArrayBuffer",
                            value: function decodeArrayBuffer(arraybuffer, callback, errback) {
                                if (!this.offlineAc) this.offlineAc = this.getOfflineAudioContext(this.ac && this.ac.sampleRate ? this.ac.sampleRate : 44100);
                                if ('webkitAudioContext' in window) // Safari: no support for Promise-based decodeAudioData enabled
                                // Enable it in Safari using the Experimental Features > Modern WebAudio API option
                                this.offlineAc.decodeAudioData(arraybuffer, function(data) {
                                    return callback(data);
                                }, errback);
                                else this.offlineAc.decodeAudioData(arraybuffer).then(function(data) {
                                    return callback(data);
                                }).catch(function(err) {
                                    return errback(err);
                                });
                            }
                        },
                        {
                            key: "setPeaks",
                            value: function setPeaks(peaks, duration) {
                                if (duration != null) this.explicitDuration = duration;
                                this.peaks = peaks;
                            }
                        },
                        {
                            key: "setLength",
                            value: function setLength(length) {
                                // No resize, we can preserve the cached peaks.
                                if (this.mergedPeaks && length == 2 * this.mergedPeaks.length - 1 + 2) return;
                                this.splitPeaks = [];
                                this.mergedPeaks = []; // Set the last element of the sparse array so the peak arrays are
                                // appropriately sized for other calculations.
                                var channels = this.buffer ? this.buffer.numberOfChannels : 1;
                                var c;
                                for(c = 0; c < channels; c++){
                                    this.splitPeaks[c] = [];
                                    this.splitPeaks[c][2 * (length - 1)] = 0;
                                    this.splitPeaks[c][2 * (length - 1) + 1] = 0;
                                }
                                this.mergedPeaks[2 * (length - 1)] = 0;
                                this.mergedPeaks[2 * (length - 1) + 1] = 0;
                            }
                        },
                        {
                            key: "getPeaks",
                            value: function getPeaks(length, first, last) {
                                if (this.peaks) return this.peaks;
                                if (!this.buffer) return [];
                                first = first || 0;
                                last = last || length - 1;
                                this.setLength(length);
                                if (!this.buffer) return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
                                /**
       * The following snippet fixes a buffering data issue on the Safari
       * browser which returned undefined It creates the missing buffer based
       * on 1 channel, 4096 samples and the sampleRate from the current
       * webaudio context 4096 samples seemed to be the best fit for rendering
       * will review this code once a stable version of Safari TP is out
       */ if (!this.buffer.length) {
                                    var newBuffer = this.createBuffer(1, 4096, this.sampleRate);
                                    this.buffer = newBuffer.buffer;
                                }
                                var sampleSize = this.buffer.length / length;
                                var sampleStep = ~~(sampleSize / 10) || 1;
                                var channels = this.buffer.numberOfChannels;
                                var c;
                                for(c = 0; c < channels; c++){
                                    var peaks = this.splitPeaks[c];
                                    var chan = this.buffer.getChannelData(c);
                                    var i = void 0;
                                    for(i = first; i <= last; i++){
                                        var start = ~~(i * sampleSize);
                                        var end = ~~(start + sampleSize);
                                        /**
           * Initialize the max and min to the first sample of this
           * subrange, so that even if the samples are entirely
           * on one side of zero, we still return the true max and
           * min values in the subrange.
           */ var min = chan[start];
                                        var max = min;
                                        var j = void 0;
                                        for(j = start; j < end; j += sampleStep){
                                            var value = chan[j];
                                            if (value > max) max = value;
                                            if (value < min) min = value;
                                        }
                                        peaks[2 * i] = max;
                                        peaks[2 * i + 1] = min;
                                        if (c == 0 || max > this.mergedPeaks[2 * i]) this.mergedPeaks[2 * i] = max;
                                        if (c == 0 || min < this.mergedPeaks[2 * i + 1]) this.mergedPeaks[2 * i + 1] = min;
                                    }
                                }
                                return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks;
                            }
                        },
                        {
                            key: "getPlayedPercents",
                            value: function getPlayedPercents() {
                                return this.state.getPlayedPercents.call(this);
                            }
                        },
                        {
                            key: "disconnectSource",
                            value: function disconnectSource() {
                                if (this.source) this.source.disconnect();
                            }
                        },
                        {
                            key: "destroyWebAudio",
                            value: function destroyWebAudio() {
                                this.disconnectFilters();
                                this.disconnectSource();
                                this.gainNode.disconnect();
                                this.scriptNode.disconnect();
                                this.analyser.disconnect(); // close the audioContext if closeAudioContext option is set to true
                                if (this.params.closeAudioContext) {
                                    // check if browser supports AudioContext.close()
                                    if (typeof this.ac.close === 'function' && this.ac.state != 'closed') this.ac.close();
                                     // clear the reference to the audiocontext
                                    this.ac = null; // clear the actual audiocontext, either passed as param or the
                                    // global singleton
                                    if (!this.params.audioContext) window.WaveSurferAudioContext = null;
                                    else this.params.audioContext = null;
                                     // clear the offlineAudioContext
                                    window.WaveSurferOfflineAudioContext = null;
                                }
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                if (!this.isPaused()) this.pause();
                                this.unAll();
                                this.buffer = null;
                                this.destroyed = true;
                                this.destroyWebAudio();
                            }
                        },
                        {
                            key: "load",
                            value: function load(buffer) {
                                this.startPosition = 0;
                                this.lastPlay = this.ac.currentTime;
                                this.buffer = buffer;
                                this.createSource();
                            }
                        },
                        {
                            key: "createSource",
                            value: function createSource() {
                                this.disconnectSource();
                                this.source = this.ac.createBufferSource(); // adjust for old browsers
                                this.source.start = this.source.start || this.source.noteGrainOn;
                                this.source.stop = this.source.stop || this.source.noteOff;
                                this.setPlaybackRate(this.playbackRate);
                                this.source.buffer = this.buffer;
                                this.source.connect(this.analyser);
                            }
                        },
                        {
                            key: "resumeAudioContext",
                            value: function resumeAudioContext() {
                                if (this.ac.state == 'suspended') this.ac.resume && this.ac.resume();
                            }
                        },
                        {
                            key: "isPaused",
                            value: function isPaused() {
                                return this.state !== this.states[PLAYING];
                            }
                        },
                        {
                            key: "getDuration",
                            value: function getDuration() {
                                if (this.explicitDuration) return this.explicitDuration;
                                if (!this.buffer) return 0;
                                return this.buffer.duration;
                            }
                        },
                        {
                            key: "seekTo",
                            value: function seekTo(start, end) {
                                if (!this.buffer) return;
                                this.scheduledPause = null;
                                if (start == null) {
                                    start = this.getCurrentTime();
                                    if (start >= this.getDuration()) start = 0;
                                }
                                if (end == null) end = this.getDuration();
                                this.startPosition = start;
                                this.lastPlay = this.ac.currentTime;
                                if (this.state === this.states[FINISHED]) this.setState(PAUSED);
                                return {
                                    start: start,
                                    end: end
                                };
                            }
                        },
                        {
                            key: "getPlayedTime",
                            value: function getPlayedTime() {
                                return (this.ac.currentTime - this.lastPlay) * this.playbackRate;
                            }
                        },
                        {
                            key: "play",
                            value: function play(start, end) {
                                if (!this.buffer) return;
                                 // need to re-create source on each playback
                                this.createSource();
                                var adjustedTime = this.seekTo(start, end);
                                start = adjustedTime.start;
                                end = adjustedTime.end;
                                this.scheduledPause = end;
                                this.source.start(0, start);
                                this.resumeAudioContext();
                                this.setState(PLAYING);
                                this.fireEvent('play');
                            }
                        },
                        {
                            key: "pause",
                            value: function pause() {
                                this.scheduledPause = null;
                                this.startPosition += this.getPlayedTime();
                                try {
                                    this.source && this.source.stop(0);
                                } catch (err) {
                                // - RangeError (The value specified for when is negative.)
                                // - InvalidStateNode (The node has not been started by calling start().)
                                // We can safely ignore both errors, because:
                                // - The range is surely correct
                                // - The node might not have been started yet, in which case we just want to carry on without causing any trouble.
                                }
                                this.setState(PAUSED);
                                this.fireEvent('pause');
                            }
                        },
                        {
                            key: "getCurrentTime",
                            value: function getCurrentTime() {
                                return this.state.getCurrentTime.call(this);
                            }
                        },
                        {
                            key: "getPlaybackRate",
                            value: function getPlaybackRate() {
                                return this.playbackRate;
                            }
                        },
                        {
                            key: "setPlaybackRate",
                            value: function setPlaybackRate(value) {
                                this.playbackRate = value || 1;
                                this.source && this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime);
                            }
                        },
                        {
                            key: "setPlayEnd",
                            value: function setPlayEnd(end) {
                                this.scheduledPause = end;
                            }
                        }
                    ]);
                    return WebAudio;
                }(util.Observer);
                exports.default = WebAudio1;
                WebAudio1.scriptBufferSize = 256;
                module.exports = exports.default;
            /***/ },
            /***/ "./node_modules/debounce/index.js": (module)=>{
                /**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */ function debounce(func, wait, immediate) {
                    var timeout, args, context, timestamp, result;
                    if (null == wait) wait = 100;
                    function later() {
                        var last = Date.now() - timestamp;
                        if (last < wait && last >= 0) timeout = setTimeout(later, wait - last);
                        else {
                            timeout = null;
                            if (!immediate) {
                                result = func.apply(context, args);
                                context = args = null;
                            }
                        }
                    }
                    var debounced = function() {
                        context = this;
                        args = arguments;
                        timestamp = Date.now();
                        var callNow = immediate && !timeout;
                        if (!timeout) timeout = setTimeout(later, wait);
                        if (callNow) {
                            result = func.apply(context, args);
                            context = args = null;
                        }
                        return result;
                    };
                    debounced.clear = function() {
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                    };
                    debounced.flush = function() {
                        if (timeout) {
                            result = func.apply(context, args);
                            context = args = null;
                            clearTimeout(timeout);
                            timeout = null;
                        }
                    };
                    return debounced;
                }
                // Adds compatibility for ES modules
                debounce.debounce = debounce;
                module.exports = debounce;
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__1(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__1);
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /******/ // startup
        /******/ // Load entry module and return exports
        /******/ // This entry module is referenced by other modules so it can't be inlined
        /******/ var __webpack_exports__ = __webpack_require__1("./src/wavesurfer.js");
        /******/ /******/ return __webpack_exports__;
    /******/ })());
});

},{}],"c8k2O":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ipUfj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {Object} MarkerParams
 * @desc The parameters used to describe a marker.
 * @example wavesurfer.addMarker(regionParams);
 * @property {number} time The time to set the marker at
 * @property {?label} string An optional marker label
 * @property {?color} string Background color for marker
 * @property {?position} string "top" or "bottom", defaults to "bottom"
 * @property {?markerElement} element An HTML element to display instead of the default marker image
 */ /**
 * Markers are points in time in the audio that can be jumped to.
 *
 * @implements {PluginClass}
 *
 * @example
 * import MarkersPlugin from 'wavesurfer.markers.js';
 *
 * // if you are using <script> tags
 * var MarkerPlugin = window.WaveSurfer.markers;
 *
 * // ... initialising wavesurfer with the plugin
 * var wavesurfer = WaveSurfer.create({
 *   // wavesurfer options ...
 *   plugins: [
 *     MarkersPlugin.create({
 *       // plugin options ...
 *     })
 *   ]
 * });
 */ const DEFAULT_FILL_COLOR = "#D8D8D8";
const DEFAULT_POSITION = "bottom";
class MarkersPlugin {
    /**
     * @typedef {Object} MarkersPluginParams
     * @property {?MarkerParams[]} markers Initial set of markers
     * @fires MarkersPlugin#marker-click
     */ /**
     * Markers plugin definition factory
     *
     * This function must be used to create a plugin definition which can be
     * used by wavesurfer to correctly instantiate the plugin.
     *
     * @param {MarkersPluginParams} params parameters use to initialise the plugin
     * @since 4.6.0
     * @return {PluginDefinition} an object representing the plugin
     */ static create(params) {
        return {
            name: 'markers',
            deferInit: params && params.deferInit ? params.deferInit : false,
            params: params,
            staticProps: {
                addMarker (options) {
                    if (!this.initialisedPluginList.markers) this.initPlugin('markers');
                    return this.markers.add(options);
                },
                clearMarkers () {
                    this.markers && this.markers.clear();
                }
            },
            instance: MarkersPlugin
        };
    }
    constructor(params, ws){
        this.params = params;
        this.wavesurfer = ws;
        this.util = ws.util;
        this.style = this.util.style;
        this.markerWidth = 11;
        this.markerHeight = 22;
        this._onResize = ()=>{
            this._updateMarkerPositions();
        };
        this._onBackendCreated = ()=>{
            this.wrapper = this.wavesurfer.drawer.wrapper;
            if (this.params.markers) this.params.markers.forEach((marker)=>this.add(marker)
            );
            window.addEventListener('resize', this._onResize, true);
            window.addEventListener('orientationchange', this._onResize, true);
            this.wavesurfer.on('zoom', this._onResize);
        };
        this.markers = [];
        this._onReady = ()=>{
            this.wrapper = this.wavesurfer.drawer.wrapper;
            this._updateMarkerPositions();
        };
    }
    init() {
        // Check if ws is ready
        if (this.wavesurfer.isReady) {
            this._onBackendCreated();
            this._onReady();
        } else {
            this.wavesurfer.once('ready', this._onReady);
            this.wavesurfer.once('backend-created', this._onBackendCreated);
        }
    }
    destroy() {
        this.wavesurfer.un('ready', this._onReady);
        this.wavesurfer.un('backend-created', this._onBackendCreated);
        this.wavesurfer.un('zoom', this._onResize);
        window.removeEventListener('resize', this._onResize, true);
        window.removeEventListener('orientationchange', this._onResize, true);
        this.clear();
    }
    /**
     * Add a marker
     *
     * @param {MarkerParams} params Marker definition
     * @return {object} The created marker
     */ add(params) {
        let marker = {
            time: params.time,
            label: params.label,
            color: params.color || DEFAULT_FILL_COLOR,
            position: params.position || DEFAULT_POSITION
        };
        if (params.markerElement) {
            this.markerWidth = params.markerElement.width;
            this.markerHeight = params.markerElement.height;
        }
        marker.el = this._createMarkerElement(marker, params.markerElement);
        this.wrapper.appendChild(marker.el);
        this.markers.push(marker);
        this._updateMarkerPositions();
        return marker;
    }
    /**
     * Remove a marker
     *
     * @param {number} index Index of the marker to remove
     */ remove(index) {
        let marker = this.markers[index];
        if (!marker) return;
        this.wrapper.removeChild(marker.el);
        this.markers.splice(index, 1);
    }
    _createPointerSVG(color, position) {
        const svgNS = "http://www.w3.org/2000/svg";
        const el = document.createElementNS(svgNS, "svg");
        const polygon = document.createElementNS(svgNS, "polygon");
        el.setAttribute("viewBox", "0 0 40 80");
        polygon.setAttribute("id", "polygon");
        polygon.setAttribute("stroke", "#979797");
        polygon.setAttribute("fill", color);
        polygon.setAttribute("points", "20 0 40 30 40 80 0 80 0 30");
        if (position == "top") polygon.setAttribute("transform", "rotate(180, 20 40)");
        el.appendChild(polygon);
        this.style(el, {
            width: this.markerWidth + "px",
            height: this.markerHeight + "px",
            "min-width": this.markerWidth + "px",
            "margin-right": "5px",
            "z-index": 4
        });
        return el;
    }
    _createMarkerElement(marker, markerElement) {
        let label = marker.label;
        let time = marker.time;
        const el = document.createElement('marker');
        el.className = "wavesurfer-marker";
        this.style(el, {
            position: "absolute",
            height: "100%",
            display: "flex",
            overflow: "hidden",
            "flex-direction": marker.position == "top" ? "column-reverse" : "column"
        });
        const line = document.createElement('div');
        this.style(line, {
            "flex-grow": 1,
            "margin-left": this.markerWidth / 2 - 0.5 + "px",
            background: "black",
            width: "1px",
            opacity: 0.1
        });
        el.appendChild(line);
        const labelDiv = document.createElement('div');
        const point = markerElement || this._createPointerSVG(marker.color, marker.position);
        labelDiv.appendChild(point);
        if (label) {
            const labelEl = document.createElement('span');
            labelEl.innerText = label;
            this.style(labelEl, {
                "font-family": "monospace",
                "font-size": "90%"
            });
            labelDiv.appendChild(labelEl);
        }
        this.style(labelDiv, {
            display: "flex",
            "align-items": "center",
            cursor: "pointer"
        });
        el.appendChild(labelDiv);
        labelDiv.addEventListener("click", (e)=>{
            e.stopPropagation();
            this.wavesurfer.setCurrentTime(time);
            this.wavesurfer.fireEvent("marker-click", marker, e);
        });
        return el;
    }
    _updateMarkerPositions() {
        const duration = this.wavesurfer.getDuration();
        for(let i = 0; i < this.markers.length; i++){
            let marker = this.markers[i];
            const elementWidth = this.wavesurfer.drawer.width / this.wavesurfer.params.pixelRatio;
            const positionPct = Math.min(marker.time / duration, 1);
            const leftPx = elementWidth * positionPct - this.markerWidth / 2;
            this.style(marker.el, {
                "left": leftPx + "px",
                "max-width": elementWidth - leftPx + "px"
            });
        }
    }
    /**
     * Remove all markers
     */ clear() {
        while(this.markers.length > 0)this.remove(0);
    }
}
exports.default = MarkersPlugin;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"c8k2O"}]},["jZB14","40Ce6"], "40Ce6", "parcelRequire94c2")

//# sourceMappingURL=index.69fdef6e.js.map
