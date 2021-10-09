// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hkXzs":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "b3bb0a59227406fc";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
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
            it = o[Symbol.iterator]();
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
            removeErrorOverlay();
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
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
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
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
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
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
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

},{}],"23obh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _homePage = require("./pages/homePage");
var _homePageDefault = parcelHelpers.interopDefault(_homePage);
// import header from "./components/header";
// import button from "./components/button";
// import logo from "./icon/logo";
// const app = document.querySelector('#app')
// console.log(header())
// app.insertAdjacentHTML("beforeend",logo())
// app.insertAdjacentHTML("beforeend",header('Bingo is life'))
// app.insertAdjacentHTML("beforeend",button('to do app'))
console.log('temp');
const app = document.querySelector('#app');
app.appendChild(_homePageDefault.default());

},{"./pages/homePage":"9VBU9","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9VBU9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logo = require("../icon/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
var _header = require("../components/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _button = require("../components/button");
var _buttonDefault = parcelHelpers.interopDefault(_button);
var _makeElement = require("../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const homePage = function(params) {
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('homePage-header');
    pageHeader.appendChild(_makeElementDefault.default(_logoDefault.default()));
    pageHeader.appendChild(_makeElementDefault.default(_headerDefault.default('Bingo is life')));
    pageHeader.appendChild(_makeElementDefault.default(_buttonDefault.default('To Do List App')));
    return pageHeader;
};
exports.default = homePage;

},{"../icon/logo":"cA0bR","../components/header":"fXKjJ","../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../components/button":"ea1oJ"}],"cA0bR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const logo = function() {
    return `\n   \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="500px" viewBox="0 0 3456 864" enable-background="new 0 0 3456 864" xml:space="preserve">\n<g>\n	<defs>\n		<circle id="SVGID_1_" cx="352.579" cy="362.126" r="316.579"/>\n	</defs>\n	<clipPath id="SVGID_2_">\n		<use xlink:href="#SVGID_1_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_3_" cx="1.0703" cy="865.0938" r="0.9992" gradientTransform="matrix(502.5066 0 0 -502.5066 -192.1472 434793.8438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#ED1C24"/>\n		<stop  offset="0.3925" style="stop-color:#EB1D25"/>\n		<stop  offset="0.55" style="stop-color:#E51E26"/>\n		<stop  offset="0.6654" style="stop-color:#DD2027"/>\n		<stop  offset="0.7602" style="stop-color:#D1232A"/>\n		<stop  offset="0.8423" style="stop-color:#C2272D"/>\n		<stop  offset="0.9157" style="stop-color:#B02A30"/>\n		<stop  offset="0.9811" style="stop-color:#9A2E33"/>\n		<stop  offset="1" style="stop-color:#932F34"/>\n	</radialGradient>\n	<rect x="36" y="45.547" clip-path="url(#SVGID_2_)" fill="url(#SVGID_3_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_4_" d="M115.577,343.866c0,130.892,106.109,237.001,237.002,237.001s237.002-106.109,237.002-237.001\n			c0-130.893-106.109-237.003-237.002-237.003S115.577,212.973,115.577,343.866"/>\n	</defs>\n	<clipPath id="SVGID_5_">\n		<use xlink:href="#SVGID_4_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_6_" cx="1.0952" cy="865.127" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 -50.1916 323234.25)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="115.577" y="106.863" clip-path="url(#SVGID_5_)" fill="url(#SVGID_6_)" width="474.004" height="474.004"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_7_" d="M129.797,343.866c0,123.039,99.743,222.781,222.782,222.781s222.782-99.742,222.782-222.781\n			s-99.743-222.782-222.782-222.782S129.797,220.827,129.797,343.866"/>\n	</defs>\n	<clipPath id="SVGID_8_">\n		<use xlink:href="#SVGID_7_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_9_" cx="1.0986" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 -40.993 306074.0313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#ED1C24"/>\n		<stop  offset="0.3925" style="stop-color:#EB1D25"/>\n		<stop  offset="0.55" style="stop-color:#E51E26"/>\n		<stop  offset="0.6654" style="stop-color:#DD2027"/>\n		<stop  offset="0.7602" style="stop-color:#D1232A"/>\n		<stop  offset="0.8423" style="stop-color:#C2272D"/>\n		<stop  offset="0.9157" style="stop-color:#B02A30"/>\n		<stop  offset="0.9811" style="stop-color:#9A2E33"/>\n		<stop  offset="1" style="stop-color:#932F34"/>\n	</radialGradient>\n	<rect x="129.797" y="121.084" clip-path="url(#SVGID_8_)" fill="url(#SVGID_9_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_10_" d="M144.102,343.866c0,115.138,93.338,208.477,208.477,208.477c115.139,0,208.477-93.339,208.477-208.477\n			c0-115.139-93.338-208.478-208.477-208.478C237.44,135.388,144.102,228.727,144.102,343.866"/>\n	</defs>\n	<clipPath id="SVGID_11_">\n		<use xlink:href="#SVGID_10_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_12_" cx="1.1069" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 -5.5578 284378)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="144.102" y="135.388" clip-path="url(#SVGID_11_)" fill="url(#SVGID_12_)" width="416.954" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_13_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_14_">\n		<use xlink:href="#SVGID_13_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_14_)" d="M347.797,490.36c25.504,0,44.379-1.069,56.632-3.211c12.251-2.139,22.691-5.75,31.317-10.835\n		c12.751-7.355,22.658-17.724,29.722-31.101c7.061-13.375,10.595-28.357,10.595-44.945c0-16.986-4.251-31.201-12.751-42.638\n		c-8.503-11.437-20.754-19.363-36.755-23.777c14-5.618,24.407-13.61,31.223-23.977c6.812-10.365,10.22-23.508,10.22-39.428\n		c0-25.683-7.66-44.71-22.972-57.085c-15.315-12.371-39.037-18.56-71.165-18.56H239.784V490.36H347.797z M307.48,366.358h60.57\n		c12.751,0,22.344,2.709,28.785,8.127c6.437,5.417,9.657,13.478,9.657,24.178c0,11.907-3.375,20.366-10.126,25.382\n		c-6.751,5.017-18.565,7.524-35.442,7.524H307.48V366.358z M307.48,254.396h59.82c10.75,0,18.875,2.307,24.378,6.922\n		c5.499,4.615,8.251,11.406,8.251,20.366c0,9.631-2.939,16.824-8.814,21.57c-5.877,4.75-14.814,7.123-26.816,7.123H307.48V254.396z"\n		/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_15_" d="M723.711,501.421C723.711,676.263,865.448,818,1040.289,818c174.842,0,316.58-141.737,316.58-316.579\n			s-141.738-316.579-316.58-316.579C865.448,184.842,723.711,326.579,723.711,501.421"/>\n	</defs>\n	<clipPath id="SVGID_16_">\n		<use xlink:href="#SVGID_15_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_17_" cx="1.0703" cy="865.0938" r="0.9992" gradientTransform="matrix(502.5066 0 0 -502.5066 495.3528 434933.3438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#00AEEF"/>\n		<stop  offset="0.3474" style="stop-color:#00ACED"/>\n		<stop  offset="0.4868" style="stop-color:#00A8E9"/>\n		<stop  offset="0.589" style="stop-color:#00A2E3"/>\n		<stop  offset="0.6729" style="stop-color:#009ADA"/>\n		<stop  offset="0.7457" style="stop-color:#0090D0"/>\n		<stop  offset="0.8108" style="stop-color:#0083C3"/>\n		<stop  offset="0.8701" style="stop-color:#0074B5"/>\n		<stop  offset="0.9249" style="stop-color:#0062A6"/>\n		<stop  offset="0.974" style="stop-color:#0D4E97"/>\n		<stop  offset="1" style="stop-color:#25408F"/>\n	</radialGradient>\n	<rect x="723.711" y="184.842" clip-path="url(#SVGID_16_)" fill="url(#SVGID_17_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_18_" d="M803.288,483.16c0,130.893,106.109,237.002,237.001,237.002c130.893,0,237.003-106.109,237.003-237.002\n			c0-130.892-106.11-237.001-237.003-237.001C909.397,246.159,803.288,352.268,803.288,483.16"/>\n	</defs>\n	<clipPath id="SVGID_19_">\n		<use xlink:href="#SVGID_18_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_20_" cx="1.0947" cy="865.1279" r="1.0008" gradientTransform="matrix(373.4475 0 0 -373.4475 637.3083 323373.75)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="803.288" y="246.159" clip-path="url(#SVGID_19_)" fill="url(#SVGID_20_)" width="474.004" height="474.003"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_21_" d="M817.508,483.16c0,123.039,99.742,222.782,222.781,222.782s222.783-99.743,222.783-222.782\n			s-99.744-222.781-222.783-222.781S817.508,360.121,817.508,483.16"/>\n	</defs>\n	<clipPath id="SVGID_22_">\n		<use xlink:href="#SVGID_21_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_23_" cx="1.0986" cy="865.1328" r="1.0007" gradientTransform="matrix(353.6219 0 0 -353.6219 646.507 306213.5313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#00AEEF"/>\n		<stop  offset="0.3474" style="stop-color:#00ACED"/>\n		<stop  offset="0.4868" style="stop-color:#00A8E9"/>\n		<stop  offset="0.589" style="stop-color:#00A2E3"/>\n		<stop  offset="0.6729" style="stop-color:#009ADA"/>\n		<stop  offset="0.7457" style="stop-color:#0090D0"/>\n		<stop  offset="0.8108" style="stop-color:#0083C3"/>\n		<stop  offset="0.8701" style="stop-color:#0074B5"/>\n		<stop  offset="0.9249" style="stop-color:#0062A6"/>\n		<stop  offset="0.974" style="stop-color:#0D4E97"/>\n		<stop  offset="1" style="stop-color:#25408F"/>\n	</radialGradient>\n	<rect x="817.508" y="260.379" clip-path="url(#SVGID_22_)" fill="url(#SVGID_23_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_24_" d="M831.812,483.16c0,115.139,93.339,208.478,208.477,208.478c115.139,0,208.478-93.339,208.478-208.478\n			c0-115.138-93.339-208.477-208.478-208.477C925.151,274.683,831.812,368.022,831.812,483.16"/>\n	</defs>\n	<clipPath id="SVGID_25_">\n		<use xlink:href="#SVGID_24_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_26_" cx="1.1069" cy="865.1436" r="0.9992" gradientTransform="matrix(328.5012 0 0 -328.5012 682.1921 284517.5)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="831.812" y="274.683" clip-path="url(#SVGID_25_)" fill="url(#SVGID_26_)" width="416.955" height="416.955"/>\n</g>\n<rect x="1005.035" y="336.02" width="70.509" height="295.557"/>\n<g>\n	<defs>\n		<circle id="SVGID_27_" cx="1728" cy="362.126" r="316.579"/>\n	</defs>\n	<clipPath id="SVGID_28_">\n		<use xlink:href="#SVGID_27_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_29_" cx="1.0698" cy="865.0938" r="0.9992" gradientTransform="matrix(502.5066 0 0 -502.5066 1183.3528 434793.8438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFF200"/>\n		<stop  offset="0.4014" style="stop-color:#FFEF00"/>\n		<stop  offset="0.5625" style="stop-color:#FFE900"/>\n		<stop  offset="0.6805" style="stop-color:#FFE000"/>\n		<stop  offset="0.7775" style="stop-color:#FFD400"/>\n		<stop  offset="0.8615" style="stop-color:#FFC40C"/>\n		<stop  offset="0.9353" style="stop-color:#FCB017"/>\n		<stop  offset="1" style="stop-color:#F8991D"/>\n	</radialGradient>\n	<rect x="1411.421" y="45.547" clip-path="url(#SVGID_28_)" fill="url(#SVGID_29_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_30_" d="M1490.999,343.866c0,130.892,106.109,237.001,237.001,237.001c130.892,0,237.001-106.109,237.001-237.001\n			c0-130.893-106.109-237.003-237.001-237.003C1597.108,106.863,1490.999,212.973,1490.999,343.866"/>\n	</defs>\n	<clipPath id="SVGID_31_">\n		<use xlink:href="#SVGID_30_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_32_" cx="1.0942" cy="865.127" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 1325.3083 323234.25)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="1490.999" y="106.863" clip-path="url(#SVGID_31_)" fill="url(#SVGID_32_)" width="474.002" height="474.004"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_33_" d="M1505.219,343.866c0,123.039,99.742,222.781,222.781,222.781s222.781-99.742,222.781-222.781\n			S1851.039,121.084,1728,121.084S1505.219,220.827,1505.219,343.866"/>\n	</defs>\n	<clipPath id="SVGID_34_">\n		<use xlink:href="#SVGID_33_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_35_" cx="1.0981" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 1334.5071 306074.0313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFF200"/>\n		<stop  offset="0.4014" style="stop-color:#FFEF00"/>\n		<stop  offset="0.5625" style="stop-color:#FFE900"/>\n		<stop  offset="0.6805" style="stop-color:#FFE000"/>\n		<stop  offset="0.7775" style="stop-color:#FFD400"/>\n		<stop  offset="0.8615" style="stop-color:#FFC40C"/>\n		<stop  offset="0.9353" style="stop-color:#FCB017"/>\n		<stop  offset="1" style="stop-color:#F8991D"/>\n	</radialGradient>\n	<rect x="1505.219" y="121.084" clip-path="url(#SVGID_34_)" fill="url(#SVGID_35_)" width="445.563" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_36_" d="M1519.522,343.866c0,115.138,93.339,208.477,208.478,208.477c115.139,0,208.479-93.339,208.479-208.477\n			c0-115.139-93.34-208.478-208.479-208.478C1612.861,135.388,1519.522,228.727,1519.522,343.866"/>\n	</defs>\n	<clipPath id="SVGID_37_">\n		<use xlink:href="#SVGID_36_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_38_" cx="1.1069" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 1369.9421 284378)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="1519.522" y="135.388" clip-path="url(#SVGID_37_)" fill="url(#SVGID_38_)" width="416.956" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_39_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_40_">\n		<use xlink:href="#SVGID_39_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_40_)" d="M1676.619,492.282v-89.088c0-12.842-0.313-27.555-0.938-44.143\n		c-0.627-16.585-1.626-34.512-3-53.774c8.374,16.989,16.314,32.806,23.815,47.453c7.501,14.648,14.44,27.859,20.816,39.629\n		l54.194,99.923h76.32V196.725h-68.258v75.645c0,14.848,0.249,32.038,0.75,51.567c0.498,19.532,1.248,40.465,2.25,62.803\n		c-6.75-15.114-13.94-30.429-21.564-45.948c-7.627-15.516-15.69-31.167-24.19-46.952l-52.132-97.115h-76.509v295.557H1676.619z"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_41_" d="M2099.131,501.421c0,174.842,141.738,316.579,316.58,316.579c174.841,0,316.578-141.737,316.578-316.579\n			s-141.737-316.579-316.578-316.579C2240.869,184.842,2099.131,326.579,2099.131,501.421"/>\n	</defs>\n	<clipPath id="SVGID_42_">\n		<use xlink:href="#SVGID_41_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_43_" cx="1.0703" cy="865.0938" r="1" gradientTransform="matrix(502.5066 0 0 -502.5066 1870.8528 434933.3438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#41AD49"/>\n		<stop  offset="0.4184" style="stop-color:#3FAC49"/>\n		<stop  offset="0.5864" style="stop-color:#3AA849"/>\n		<stop  offset="0.7094" style="stop-color:#30A049"/>\n		<stop  offset="0.8104" style="stop-color:#209649"/>\n		<stop  offset="0.8979" style="stop-color:#008949"/>\n		<stop  offset="0.9749" style="stop-color:#007B48"/>\n		<stop  offset="1" style="stop-color:#007547"/>\n	</radialGradient>\n	<rect x="2099.131" y="184.842" clip-path="url(#SVGID_42_)" fill="url(#SVGID_43_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_44_" d="M2178.708,483.16c0,130.893,106.108,237.002,237.003,237.002c130.893,0,237.001-106.109,237.001-237.002\n			c0-130.892-106.108-237.001-237.001-237.001C2284.816,246.159,2178.708,352.268,2178.708,483.16"/>\n	</defs>\n	<clipPath id="SVGID_45_">\n		<use xlink:href="#SVGID_44_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_46_" cx="1.0947" cy="865.1279" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 2012.8083 323373.75)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2178.708" y="246.159" clip-path="url(#SVGID_45_)" fill="url(#SVGID_46_)" width="474.004" height="474.003"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_47_" d="M2192.928,483.16c0,123.039,99.744,222.782,222.783,222.782s222.781-99.743,222.781-222.782\n			s-99.742-222.781-222.781-222.781S2192.928,360.121,2192.928,483.16"/>\n	</defs>\n	<clipPath id="SVGID_48_">\n		<use xlink:href="#SVGID_47_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_49_" cx="1.0986" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 2022.0071 306213.5313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#41AD49"/>\n		<stop  offset="0.4184" style="stop-color:#3FAC49"/>\n		<stop  offset="0.5864" style="stop-color:#3AA849"/>\n		<stop  offset="0.7094" style="stop-color:#30A049"/>\n		<stop  offset="0.8104" style="stop-color:#209649"/>\n		<stop  offset="0.8979" style="stop-color:#008949"/>\n		<stop  offset="0.9749" style="stop-color:#007B48"/>\n		<stop  offset="1" style="stop-color:#007547"/>\n	</radialGradient>\n	<rect x="2192.928" y="260.379" clip-path="url(#SVGID_48_)" fill="url(#SVGID_49_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_50_" d="M2207.232,483.16c0,115.139,93.34,208.478,208.479,208.478s208.477-93.339,208.477-208.478\n			c0-115.138-93.338-208.477-208.477-208.477S2207.232,368.022,2207.232,483.16"/>\n	</defs>\n	<clipPath id="SVGID_51_">\n		<use xlink:href="#SVGID_50_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_52_" cx="1.1064" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 2057.4421 284517.5)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2207.232" y="274.683" clip-path="url(#SVGID_51_)" fill="url(#SVGID_52_)" width="416.955" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_53_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_54_">\n		<use xlink:href="#SVGID_53_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_54_)" d="M2532.842,623.889V462.767h-124.516v56.784h61.507c-2.625,16.052-9.346,28.561-20.157,37.521\n		c-10.815,8.963-24.473,13.443-40.975,13.443c-20.628,0-37.1-8.458-49.412-25.382c-12.314-16.92-18.471-39.694-18.471-68.321\n		c0-29.025,6.249-52.37,18.752-70.027c12.5-17.656,28.878-26.485,49.131-26.485c13.376,0,24.689,3.244,33.942,9.731\n		c9.25,6.49,16.126,16.086,20.627,28.793h67.696c-5.627-31.301-18.973-55.646-40.037-73.036\n		c-21.066-17.388-47.789-26.085-80.166-26.085c-42.881,0-77.229,14.582-103.043,43.742c-25.817,29.163-38.725,67.888-38.725,116.176\n		c0,22.342,3.124,42.939,9.376,61.801c6.25,18.86,15.439,35.248,27.566,49.158c11.627,13.514,25.034,23.746,40.224,30.7\n		c15.189,6.953,31.721,10.434,49.6,10.434c19.127,0,35.847-3.781,50.162-11.337c14.313-7.556,26.658-19.093,37.036-34.611\n		l5.626,38.123H2532.842z"/>\n</g>\n<g>\n	<defs>\n		<circle id="SVGID_55_" cx="3103.42" cy="362.126" r="316.579"/>\n	</defs>\n	<clipPath id="SVGID_56_">\n		<use xlink:href="#SVGID_55_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_57_" cx="1.0698" cy="865.0938" r="1.0007" gradientTransform="matrix(502.5066 0 0 -502.5066 2558.3528 434793.8438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#92278F"/>\n		<stop  offset="0.4342" style="stop-color:#90278F"/>\n		<stop  offset="0.6085" style="stop-color:#8C288F"/>\n		<stop  offset="0.7361" style="stop-color:#842990"/>\n		<stop  offset="0.841" style="stop-color:#782B90"/>\n		<stop  offset="0.9308" style="stop-color:#682C91"/>\n		<stop  offset="1" style="stop-color:#562E91"/>\n	</radialGradient>\n	<rect x="2786.842" y="45.547" clip-path="url(#SVGID_56_)" fill="url(#SVGID_57_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_58_" d="M2866.419,343.866c0,130.892,106.109,237.001,237.001,237.001c130.893,0,237.003-106.109,237.003-237.001\n			c0-130.893-106.11-237.003-237.003-237.003C2972.528,106.863,2866.419,212.973,2866.419,343.866"/>\n	</defs>\n	<clipPath id="SVGID_59_">\n		<use xlink:href="#SVGID_58_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_60_" cx="1.0957" cy="865.127" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 2700.3083 323234.25)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2866.419" y="106.863" clip-path="url(#SVGID_59_)" fill="url(#SVGID_60_)" width="474.004" height="474.004"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_61_" d="M2880.639,343.866c0,123.039,99.742,222.781,222.781,222.781s222.783-99.742,222.783-222.781\n			s-99.744-222.782-222.783-222.782S2880.639,220.827,2880.639,343.866"/>\n	</defs>\n	<clipPath id="SVGID_62_">\n		<use xlink:href="#SVGID_61_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_63_" cx="1.0986" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 2710.0071 306074.0313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#92278F"/>\n		<stop  offset="0.4342" style="stop-color:#90278F"/>\n		<stop  offset="0.6085" style="stop-color:#8C288F"/>\n		<stop  offset="0.7361" style="stop-color:#842990"/>\n		<stop  offset="0.841" style="stop-color:#782B90"/>\n		<stop  offset="0.9308" style="stop-color:#682C91"/>\n		<stop  offset="1" style="stop-color:#562E91"/>\n	</radialGradient>\n	<rect x="2880.639" y="121.084" clip-path="url(#SVGID_62_)" fill="url(#SVGID_63_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_64_" d="M2894.944,343.866c0,115.138,93.338,208.477,208.476,208.477c115.139,0,208.479-93.339,208.479-208.477\n			c0-115.139-93.34-208.478-208.479-208.478C2988.282,135.388,2894.944,228.727,2894.944,343.866"/>\n	</defs>\n	<clipPath id="SVGID_65_">\n		<use xlink:href="#SVGID_64_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_66_" cx="1.1064" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 2745.1921 284378)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2894.944" y="135.388" clip-path="url(#SVGID_65_)" fill="url(#SVGID_66_)" width="416.953" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_67_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_68_">\n		<use xlink:href="#SVGID_67_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_68_)" d="M3001.971,457.734c24.814,27.89,58.476,41.835,100.981,41.835\n		c42.629,0,76.478-13.976,101.544-41.936c25.063-27.956,37.598-65.879,37.598-113.769c0-47.886-12.535-85.809-37.598-113.768\n		c-25.066-27.956-58.915-41.936-101.544-41.936c-42.506,0-76.167,13.945-100.981,41.835\n		c-24.817,27.891-37.223,65.848-37.223,113.869C2964.748,391.89,2977.153,429.844,3001.971,457.734 M3053.728,274.642\n		c11.438-16.052,27.847-24.078,49.225-24.078c21.501,0,38.035,8.06,49.601,24.178c11.561,16.121,17.345,39.161,17.345,69.124\n		c0,30.097-5.784,53.172-17.345,69.225c-11.565,16.052-28.1,24.077-49.601,24.077c-21.378,0-37.786-8.025-49.225-24.077\n		c-11.439-16.053-17.158-39.127-17.158-69.225C3036.569,313.769,3042.288,290.693,3053.728,274.642"/>\n</g>\n</svg>\n\n\n   `;
};
exports.default = logo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"fXKjJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const header = function(title = 'uiheader', className = 'ui-header') {
    const element = `<h1 class="${className}">${title}</h1>`;
    return element;
};
exports.default = header;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ggL9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const makeElement = function(templateString = ``) {
    const docFrag = document.createRange().createContextualFragment(templateString);
    const element = docFrag.children[0];
    return element;
};
exports.default = makeElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ea1oJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const button = function(title = 'ui button', className = 'ui-button') {
    const element = `<button class="${className}">${title}</button>`;
    return element;
};
exports.default = button;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["hkXzs","23obh"], "23obh", "parcelRequirea107")

//# sourceMappingURL=index.227406fc.js.map
