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
var _store = require("./redux/store");
var _router = require("./routes/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _dataFertcher = require("./utils/dataFertcher");
var _dataFertcherDefault = parcelHelpers.interopDefault(_dataFertcher);
const onAppInit = async function(e) {
    let data = await _dataFertcherDefault.default('https://raw.githubusercontent.com/kcheung12/DMIT2008-Assignment1/main/dist/data/todos.json');
    _store.createStore(data);
    _routerDefault.default(window.location.pathname);
};
window.addEventListener('load', onAppInit);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./routes/router":"3ISf2","./redux/store":"fKkA9","./utils/dataFertcher":"dii9d"}],"JacNc":[function(require,module,exports) {
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

},{}],"3ISf2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _home = require("../pages/home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _pageNotFound = require("../pages/pageNotFound");
var _pageNotFoundDefault = parcelHelpers.interopDefault(_pageNotFound);
var _toDoPage = require("../pages/toDoPage");
var _toDoPageDefault = parcelHelpers.interopDefault(_toDoPage);
const routes = {
    '/': _homeDefault.default,
    '/toDoPage': _toDoPageDefault.default
};
const Router = function(pathname) {
    const isValidRoute = Object.keys(routes).find((key)=>key === pathname
    );
    const app = document.querySelector('#app');
    app.innerHTML = '';
    window.history.pushState({
    }, pathname, window.location.origin + pathname);
    if (isValidRoute === undefined) app.appendChild(_pageNotFoundDefault.default());
    else app.appendChild(routes[isValidRoute]());
};
exports.default = Router;

},{"../pages/home":"bA5yS","../pages/pageNotFound":"3yXE9","../pages/toDoPage":"gyF4f","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bA5yS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logo = require("../icon/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
var _header = require("../components/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _tagline = require("../components/tagline");
var _taglineDefault = parcelHelpers.interopDefault(_tagline);
var _link = require("../components/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _router = require("../routes/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
const onRequestNewPage = function(e) {
    e.preventDefault();
    _routerDefault.default(e.currentTarget.dataset.path);
};
const home = function() {
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('homePage-header');
    const logoElm = _logoDefault.default();
    const h1 = _headerDefault.default('h1', 'Bingo');
    const p = _taglineDefault.default('Bingo is life');
    const linkElm = _linkDefault.default('To Do App', '/toDoPage');
    // linkElm.addEventListener('click',onRequestNewPage)
    pageHeader.append(logoElm);
    pageHeader.append(h1);
    pageHeader.append(p);
    pageHeader.append(linkElm);
    return pageHeader;
};
exports.default = home;

},{"../icon/logo":"cA0bR","../components/header":"fXKjJ","../components/link":"jlxOi","../routes/router":"3ISf2","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../components/tagline":"fNyw9"}],"cA0bR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const logo = function() {
    const template = `\n   \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	  viewBox="0 0 3456 864" enable-background="new 0 0 3456 864" xml:space="preserve">\n<g>\n	<defs>\n		<circle id="SVGID_1_" cx="352.579" cy="362.126" r="316.579"/>\n	</defs>\n	<clipPath id="SVGID_2_">\n		<use xlink:href="#SVGID_1_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_3_" cx="1.0703" cy="865.0938" r="0.9992" gradientTransform="matrix(502.5066 0 0 -502.5066 -192.1472 434793.8438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#ED1C24"/>\n		<stop  offset="0.3925" style="stop-color:#EB1D25"/>\n		<stop  offset="0.55" style="stop-color:#E51E26"/>\n		<stop  offset="0.6654" style="stop-color:#DD2027"/>\n		<stop  offset="0.7602" style="stop-color:#D1232A"/>\n		<stop  offset="0.8423" style="stop-color:#C2272D"/>\n		<stop  offset="0.9157" style="stop-color:#B02A30"/>\n		<stop  offset="0.9811" style="stop-color:#9A2E33"/>\n		<stop  offset="1" style="stop-color:#932F34"/>\n	</radialGradient>\n	<rect x="36" y="45.547" clip-path="url(#SVGID_2_)" fill="url(#SVGID_3_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_4_" d="M115.577,343.866c0,130.892,106.109,237.001,237.002,237.001s237.002-106.109,237.002-237.001\n			c0-130.893-106.109-237.003-237.002-237.003S115.577,212.973,115.577,343.866"/>\n	</defs>\n	<clipPath id="SVGID_5_">\n		<use xlink:href="#SVGID_4_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_6_" cx="1.0952" cy="865.127" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 -50.1916 323234.25)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="115.577" y="106.863" clip-path="url(#SVGID_5_)" fill="url(#SVGID_6_)" width="474.004" height="474.004"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_7_" d="M129.797,343.866c0,123.039,99.743,222.781,222.782,222.781s222.782-99.742,222.782-222.781\n			s-99.743-222.782-222.782-222.782S129.797,220.827,129.797,343.866"/>\n	</defs>\n	<clipPath id="SVGID_8_">\n		<use xlink:href="#SVGID_7_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_9_" cx="1.0986" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 -40.993 306074.0313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#ED1C24"/>\n		<stop  offset="0.3925" style="stop-color:#EB1D25"/>\n		<stop  offset="0.55" style="stop-color:#E51E26"/>\n		<stop  offset="0.6654" style="stop-color:#DD2027"/>\n		<stop  offset="0.7602" style="stop-color:#D1232A"/>\n		<stop  offset="0.8423" style="stop-color:#C2272D"/>\n		<stop  offset="0.9157" style="stop-color:#B02A30"/>\n		<stop  offset="0.9811" style="stop-color:#9A2E33"/>\n		<stop  offset="1" style="stop-color:#932F34"/>\n	</radialGradient>\n	<rect x="129.797" y="121.084" clip-path="url(#SVGID_8_)" fill="url(#SVGID_9_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_10_" d="M144.102,343.866c0,115.138,93.338,208.477,208.477,208.477c115.139,0,208.477-93.339,208.477-208.477\n			c0-115.139-93.338-208.478-208.477-208.478C237.44,135.388,144.102,228.727,144.102,343.866"/>\n	</defs>\n	<clipPath id="SVGID_11_">\n		<use xlink:href="#SVGID_10_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_12_" cx="1.1069" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 -5.5578 284378)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="144.102" y="135.388" clip-path="url(#SVGID_11_)" fill="url(#SVGID_12_)" width="416.954" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_13_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_14_">\n		<use xlink:href="#SVGID_13_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_14_)" d="M347.797,490.36c25.504,0,44.379-1.069,56.632-3.211c12.251-2.139,22.691-5.75,31.317-10.835\n		c12.751-7.355,22.658-17.724,29.722-31.101c7.061-13.375,10.595-28.357,10.595-44.945c0-16.986-4.251-31.201-12.751-42.638\n		c-8.503-11.437-20.754-19.363-36.755-23.777c14-5.618,24.407-13.61,31.223-23.977c6.812-10.365,10.22-23.508,10.22-39.428\n		c0-25.683-7.66-44.71-22.972-57.085c-15.315-12.371-39.037-18.56-71.165-18.56H239.784V490.36H347.797z M307.48,366.358h60.57\n		c12.751,0,22.344,2.709,28.785,8.127c6.437,5.417,9.657,13.478,9.657,24.178c0,11.907-3.375,20.366-10.126,25.382\n		c-6.751,5.017-18.565,7.524-35.442,7.524H307.48V366.358z M307.48,254.396h59.82c10.75,0,18.875,2.307,24.378,6.922\n		c5.499,4.615,8.251,11.406,8.251,20.366c0,9.631-2.939,16.824-8.814,21.57c-5.877,4.75-14.814,7.123-26.816,7.123H307.48V254.396z"\n		/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_15_" d="M723.711,501.421C723.711,676.263,865.448,818,1040.289,818c174.842,0,316.58-141.737,316.58-316.579\n			s-141.738-316.579-316.58-316.579C865.448,184.842,723.711,326.579,723.711,501.421"/>\n	</defs>\n	<clipPath id="SVGID_16_">\n		<use xlink:href="#SVGID_15_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_17_" cx="1.0703" cy="865.0938" r="0.9992" gradientTransform="matrix(502.5066 0 0 -502.5066 495.3528 434933.3438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#00AEEF"/>\n		<stop  offset="0.3474" style="stop-color:#00ACED"/>\n		<stop  offset="0.4868" style="stop-color:#00A8E9"/>\n		<stop  offset="0.589" style="stop-color:#00A2E3"/>\n		<stop  offset="0.6729" style="stop-color:#009ADA"/>\n		<stop  offset="0.7457" style="stop-color:#0090D0"/>\n		<stop  offset="0.8108" style="stop-color:#0083C3"/>\n		<stop  offset="0.8701" style="stop-color:#0074B5"/>\n		<stop  offset="0.9249" style="stop-color:#0062A6"/>\n		<stop  offset="0.974" style="stop-color:#0D4E97"/>\n		<stop  offset="1" style="stop-color:#25408F"/>\n	</radialGradient>\n	<rect x="723.711" y="184.842" clip-path="url(#SVGID_16_)" fill="url(#SVGID_17_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_18_" d="M803.288,483.16c0,130.893,106.109,237.002,237.001,237.002c130.893,0,237.003-106.109,237.003-237.002\n			c0-130.892-106.11-237.001-237.003-237.001C909.397,246.159,803.288,352.268,803.288,483.16"/>\n	</defs>\n	<clipPath id="SVGID_19_">\n		<use xlink:href="#SVGID_18_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_20_" cx="1.0947" cy="865.1279" r="1.0008" gradientTransform="matrix(373.4475 0 0 -373.4475 637.3083 323373.75)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="803.288" y="246.159" clip-path="url(#SVGID_19_)" fill="url(#SVGID_20_)" width="474.004" height="474.003"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_21_" d="M817.508,483.16c0,123.039,99.742,222.782,222.781,222.782s222.783-99.743,222.783-222.782\n			s-99.744-222.781-222.783-222.781S817.508,360.121,817.508,483.16"/>\n	</defs>\n	<clipPath id="SVGID_22_">\n		<use xlink:href="#SVGID_21_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_23_" cx="1.0986" cy="865.1328" r="1.0007" gradientTransform="matrix(353.6219 0 0 -353.6219 646.507 306213.5313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#00AEEF"/>\n		<stop  offset="0.3474" style="stop-color:#00ACED"/>\n		<stop  offset="0.4868" style="stop-color:#00A8E9"/>\n		<stop  offset="0.589" style="stop-color:#00A2E3"/>\n		<stop  offset="0.6729" style="stop-color:#009ADA"/>\n		<stop  offset="0.7457" style="stop-color:#0090D0"/>\n		<stop  offset="0.8108" style="stop-color:#0083C3"/>\n		<stop  offset="0.8701" style="stop-color:#0074B5"/>\n		<stop  offset="0.9249" style="stop-color:#0062A6"/>\n		<stop  offset="0.974" style="stop-color:#0D4E97"/>\n		<stop  offset="1" style="stop-color:#25408F"/>\n	</radialGradient>\n	<rect x="817.508" y="260.379" clip-path="url(#SVGID_22_)" fill="url(#SVGID_23_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_24_" d="M831.812,483.16c0,115.139,93.339,208.478,208.477,208.478c115.139,0,208.478-93.339,208.478-208.478\n			c0-115.138-93.339-208.477-208.478-208.477C925.151,274.683,831.812,368.022,831.812,483.16"/>\n	</defs>\n	<clipPath id="SVGID_25_">\n		<use xlink:href="#SVGID_24_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_26_" cx="1.1069" cy="865.1436" r="0.9992" gradientTransform="matrix(328.5012 0 0 -328.5012 682.1921 284517.5)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="831.812" y="274.683" clip-path="url(#SVGID_25_)" fill="url(#SVGID_26_)" width="416.955" height="416.955"/>\n</g>\n<rect x="1005.035" y="336.02" width="70.509" height="295.557"/>\n<g>\n	<defs>\n		<circle id="SVGID_27_" cx="1728" cy="362.126" r="316.579"/>\n	</defs>\n	<clipPath id="SVGID_28_">\n		<use xlink:href="#SVGID_27_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_29_" cx="1.0698" cy="865.0938" r="0.9992" gradientTransform="matrix(502.5066 0 0 -502.5066 1183.3528 434793.8438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFF200"/>\n		<stop  offset="0.4014" style="stop-color:#FFEF00"/>\n		<stop  offset="0.5625" style="stop-color:#FFE900"/>\n		<stop  offset="0.6805" style="stop-color:#FFE000"/>\n		<stop  offset="0.7775" style="stop-color:#FFD400"/>\n		<stop  offset="0.8615" style="stop-color:#FFC40C"/>\n		<stop  offset="0.9353" style="stop-color:#FCB017"/>\n		<stop  offset="1" style="stop-color:#F8991D"/>\n	</radialGradient>\n	<rect x="1411.421" y="45.547" clip-path="url(#SVGID_28_)" fill="url(#SVGID_29_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_30_" d="M1490.999,343.866c0,130.892,106.109,237.001,237.001,237.001c130.892,0,237.001-106.109,237.001-237.001\n			c0-130.893-106.109-237.003-237.001-237.003C1597.108,106.863,1490.999,212.973,1490.999,343.866"/>\n	</defs>\n	<clipPath id="SVGID_31_">\n		<use xlink:href="#SVGID_30_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_32_" cx="1.0942" cy="865.127" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 1325.3083 323234.25)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="1490.999" y="106.863" clip-path="url(#SVGID_31_)" fill="url(#SVGID_32_)" width="474.002" height="474.004"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_33_" d="M1505.219,343.866c0,123.039,99.742,222.781,222.781,222.781s222.781-99.742,222.781-222.781\n			S1851.039,121.084,1728,121.084S1505.219,220.827,1505.219,343.866"/>\n	</defs>\n	<clipPath id="SVGID_34_">\n		<use xlink:href="#SVGID_33_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_35_" cx="1.0981" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 1334.5071 306074.0313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFF200"/>\n		<stop  offset="0.4014" style="stop-color:#FFEF00"/>\n		<stop  offset="0.5625" style="stop-color:#FFE900"/>\n		<stop  offset="0.6805" style="stop-color:#FFE000"/>\n		<stop  offset="0.7775" style="stop-color:#FFD400"/>\n		<stop  offset="0.8615" style="stop-color:#FFC40C"/>\n		<stop  offset="0.9353" style="stop-color:#FCB017"/>\n		<stop  offset="1" style="stop-color:#F8991D"/>\n	</radialGradient>\n	<rect x="1505.219" y="121.084" clip-path="url(#SVGID_34_)" fill="url(#SVGID_35_)" width="445.563" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_36_" d="M1519.522,343.866c0,115.138,93.339,208.477,208.478,208.477c115.139,0,208.479-93.339,208.479-208.477\n			c0-115.139-93.34-208.478-208.479-208.478C1612.861,135.388,1519.522,228.727,1519.522,343.866"/>\n	</defs>\n	<clipPath id="SVGID_37_">\n		<use xlink:href="#SVGID_36_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_38_" cx="1.1069" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 1369.9421 284378)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="1519.522" y="135.388" clip-path="url(#SVGID_37_)" fill="url(#SVGID_38_)" width="416.956" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_39_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_40_">\n		<use xlink:href="#SVGID_39_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_40_)" d="M1676.619,492.282v-89.088c0-12.842-0.313-27.555-0.938-44.143\n		c-0.627-16.585-1.626-34.512-3-53.774c8.374,16.989,16.314,32.806,23.815,47.453c7.501,14.648,14.44,27.859,20.816,39.629\n		l54.194,99.923h76.32V196.725h-68.258v75.645c0,14.848,0.249,32.038,0.75,51.567c0.498,19.532,1.248,40.465,2.25,62.803\n		c-6.75-15.114-13.94-30.429-21.564-45.948c-7.627-15.516-15.69-31.167-24.19-46.952l-52.132-97.115h-76.509v295.557H1676.619z"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_41_" d="M2099.131,501.421c0,174.842,141.738,316.579,316.58,316.579c174.841,0,316.578-141.737,316.578-316.579\n			s-141.737-316.579-316.578-316.579C2240.869,184.842,2099.131,326.579,2099.131,501.421"/>\n	</defs>\n	<clipPath id="SVGID_42_">\n		<use xlink:href="#SVGID_41_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_43_" cx="1.0703" cy="865.0938" r="1" gradientTransform="matrix(502.5066 0 0 -502.5066 1870.8528 434933.3438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#41AD49"/>\n		<stop  offset="0.4184" style="stop-color:#3FAC49"/>\n		<stop  offset="0.5864" style="stop-color:#3AA849"/>\n		<stop  offset="0.7094" style="stop-color:#30A049"/>\n		<stop  offset="0.8104" style="stop-color:#209649"/>\n		<stop  offset="0.8979" style="stop-color:#008949"/>\n		<stop  offset="0.9749" style="stop-color:#007B48"/>\n		<stop  offset="1" style="stop-color:#007547"/>\n	</radialGradient>\n	<rect x="2099.131" y="184.842" clip-path="url(#SVGID_42_)" fill="url(#SVGID_43_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_44_" d="M2178.708,483.16c0,130.893,106.108,237.002,237.003,237.002c130.893,0,237.001-106.109,237.001-237.002\n			c0-130.892-106.108-237.001-237.001-237.001C2284.816,246.159,2178.708,352.268,2178.708,483.16"/>\n	</defs>\n	<clipPath id="SVGID_45_">\n		<use xlink:href="#SVGID_44_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_46_" cx="1.0947" cy="865.1279" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 2012.8083 323373.75)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2178.708" y="246.159" clip-path="url(#SVGID_45_)" fill="url(#SVGID_46_)" width="474.004" height="474.003"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_47_" d="M2192.928,483.16c0,123.039,99.744,222.782,222.783,222.782s222.781-99.743,222.781-222.782\n			s-99.742-222.781-222.781-222.781S2192.928,360.121,2192.928,483.16"/>\n	</defs>\n	<clipPath id="SVGID_48_">\n		<use xlink:href="#SVGID_47_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_49_" cx="1.0986" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 2022.0071 306213.5313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#41AD49"/>\n		<stop  offset="0.4184" style="stop-color:#3FAC49"/>\n		<stop  offset="0.5864" style="stop-color:#3AA849"/>\n		<stop  offset="0.7094" style="stop-color:#30A049"/>\n		<stop  offset="0.8104" style="stop-color:#209649"/>\n		<stop  offset="0.8979" style="stop-color:#008949"/>\n		<stop  offset="0.9749" style="stop-color:#007B48"/>\n		<stop  offset="1" style="stop-color:#007547"/>\n	</radialGradient>\n	<rect x="2192.928" y="260.379" clip-path="url(#SVGID_48_)" fill="url(#SVGID_49_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_50_" d="M2207.232,483.16c0,115.139,93.34,208.478,208.479,208.478s208.477-93.339,208.477-208.478\n			c0-115.138-93.338-208.477-208.477-208.477S2207.232,368.022,2207.232,483.16"/>\n	</defs>\n	<clipPath id="SVGID_51_">\n		<use xlink:href="#SVGID_50_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_52_" cx="1.1064" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 2057.4421 284517.5)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2207.232" y="274.683" clip-path="url(#SVGID_51_)" fill="url(#SVGID_52_)" width="416.955" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_53_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_54_">\n		<use xlink:href="#SVGID_53_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_54_)" d="M2532.842,623.889V462.767h-124.516v56.784h61.507c-2.625,16.052-9.346,28.561-20.157,37.521\n		c-10.815,8.963-24.473,13.443-40.975,13.443c-20.628,0-37.1-8.458-49.412-25.382c-12.314-16.92-18.471-39.694-18.471-68.321\n		c0-29.025,6.249-52.37,18.752-70.027c12.5-17.656,28.878-26.485,49.131-26.485c13.376,0,24.689,3.244,33.942,9.731\n		c9.25,6.49,16.126,16.086,20.627,28.793h67.696c-5.627-31.301-18.973-55.646-40.037-73.036\n		c-21.066-17.388-47.789-26.085-80.166-26.085c-42.881,0-77.229,14.582-103.043,43.742c-25.817,29.163-38.725,67.888-38.725,116.176\n		c0,22.342,3.124,42.939,9.376,61.801c6.25,18.86,15.439,35.248,27.566,49.158c11.627,13.514,25.034,23.746,40.224,30.7\n		c15.189,6.953,31.721,10.434,49.6,10.434c19.127,0,35.847-3.781,50.162-11.337c14.313-7.556,26.658-19.093,37.036-34.611\n		l5.626,38.123H2532.842z"/>\n</g>\n<g>\n	<defs>\n		<circle id="SVGID_55_" cx="3103.42" cy="362.126" r="316.579"/>\n	</defs>\n	<clipPath id="SVGID_56_">\n		<use xlink:href="#SVGID_55_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_57_" cx="1.0698" cy="865.0938" r="1.0007" gradientTransform="matrix(502.5066 0 0 -502.5066 2558.3528 434793.8438)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#92278F"/>\n		<stop  offset="0.4342" style="stop-color:#90278F"/>\n		<stop  offset="0.6085" style="stop-color:#8C288F"/>\n		<stop  offset="0.7361" style="stop-color:#842990"/>\n		<stop  offset="0.841" style="stop-color:#782B90"/>\n		<stop  offset="0.9308" style="stop-color:#682C91"/>\n		<stop  offset="1" style="stop-color:#562E91"/>\n	</radialGradient>\n	<rect x="2786.842" y="45.547" clip-path="url(#SVGID_56_)" fill="url(#SVGID_57_)" width="633.158" height="633.158"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_58_" d="M2866.419,343.866c0,130.892,106.109,237.001,237.001,237.001c130.893,0,237.003-106.109,237.003-237.001\n			c0-130.893-106.11-237.003-237.003-237.003C2972.528,106.863,2866.419,212.973,2866.419,343.866"/>\n	</defs>\n	<clipPath id="SVGID_59_">\n		<use xlink:href="#SVGID_58_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_60_" cx="1.0957" cy="865.127" r="1" gradientTransform="matrix(373.4475 0 0 -373.4475 2700.3083 323234.25)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2866.419" y="106.863" clip-path="url(#SVGID_59_)" fill="url(#SVGID_60_)" width="474.004" height="474.004"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_61_" d="M2880.639,343.866c0,123.039,99.742,222.781,222.781,222.781s222.783-99.742,222.783-222.781\n			s-99.744-222.782-222.783-222.782S2880.639,220.827,2880.639,343.866"/>\n	</defs>\n	<clipPath id="SVGID_62_">\n		<use xlink:href="#SVGID_61_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_63_" cx="1.0986" cy="865.1328" r="1" gradientTransform="matrix(353.6219 0 0 -353.6219 2710.0071 306074.0313)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#92278F"/>\n		<stop  offset="0.4342" style="stop-color:#90278F"/>\n		<stop  offset="0.6085" style="stop-color:#8C288F"/>\n		<stop  offset="0.7361" style="stop-color:#842990"/>\n		<stop  offset="0.841" style="stop-color:#782B90"/>\n		<stop  offset="0.9308" style="stop-color:#682C91"/>\n		<stop  offset="1" style="stop-color:#562E91"/>\n	</radialGradient>\n	<rect x="2880.639" y="121.084" clip-path="url(#SVGID_62_)" fill="url(#SVGID_63_)" width="445.564" height="445.563"/>\n</g>\n<g>\n	<defs>\n		<path id="SVGID_64_" d="M2894.944,343.866c0,115.138,93.338,208.477,208.476,208.477c115.139,0,208.479-93.339,208.479-208.477\n			c0-115.139-93.34-208.478-208.479-208.478C2988.282,135.388,2894.944,228.727,2894.944,343.866"/>\n	</defs>\n	<clipPath id="SVGID_65_">\n		<use xlink:href="#SVGID_64_"  overflow="visible"/>\n	</clipPath>\n	\n		<radialGradient id="SVGID_66_" cx="1.1064" cy="865.1436" r="1" gradientTransform="matrix(328.5012 0 0 -328.5012 2745.1921 284378)" gradientUnits="userSpaceOnUse">\n		<stop  offset="0" style="stop-color:#FFFFFF"/>\n		<stop  offset="0.4854" style="stop-color:#FCFCFC"/>\n		<stop  offset="0.6802" style="stop-color:#F4F5F5"/>\n		<stop  offset="0.8228" style="stop-color:#EAEBEC"/>\n		<stop  offset="0.9393" style="stop-color:#DCDDDE"/>\n		<stop  offset="1" style="stop-color:#D1D3D4"/>\n	</radialGradient>\n	<rect x="2894.944" y="135.388" clip-path="url(#SVGID_65_)" fill="url(#SVGID_66_)" width="416.953" height="416.955"/>\n</g>\n<g>\n	<defs>\n		<rect id="SVGID_67_" x="36" y="45.547" width="3384" height="772.453"/>\n	</defs>\n	<clipPath id="SVGID_68_">\n		<use xlink:href="#SVGID_67_"  overflow="visible"/>\n	</clipPath>\n	<path clip-path="url(#SVGID_68_)" d="M3001.971,457.734c24.814,27.89,58.476,41.835,100.981,41.835\n		c42.629,0,76.478-13.976,101.544-41.936c25.063-27.956,37.598-65.879,37.598-113.769c0-47.886-12.535-85.809-37.598-113.768\n		c-25.066-27.956-58.915-41.936-101.544-41.936c-42.506,0-76.167,13.945-100.981,41.835\n		c-24.817,27.891-37.223,65.848-37.223,113.869C2964.748,391.89,2977.153,429.844,3001.971,457.734 M3053.728,274.642\n		c11.438-16.052,27.847-24.078,49.225-24.078c21.501,0,38.035,8.06,49.601,24.178c11.561,16.121,17.345,39.161,17.345,69.124\n		c0,30.097-5.784,53.172-17.345,69.225c-11.565,16.052-28.1,24.077-49.601,24.077c-21.378,0-37.786-8.025-49.225-24.077\n		c-11.439-16.053-17.158-39.127-17.158-69.225C3036.569,313.769,3042.288,290.693,3053.728,274.642"/>\n</g>\n</svg>\n\n\n   `;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = logo;

},{"../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ggL9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const makeElement = function(templateString = ``) {
    const docFrag = document.createRange().createContextualFragment(templateString);
    const element = docFrag.children[0];
    return element;
};
exports.default = makeElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fXKjJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const header = function(elementType = 'h2', label = 'ui header', className = 'ui-header') {
    const template = `<${elementType} class="${className}">${label}</h1>`;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = header;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jlxOi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const link = function(label = 'ui link', path = '/', className = 'ui-link') {
    const template = `<a href="${path}" data-path="${path}" class="${className}">${label}</a>`;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = link;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fNyw9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const tagline = function(message = '') {
    const template = `<p>${message}</p>`;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = tagline;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3yXE9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logo = require("../icon/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
var _header = require("../components/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _tagline = require("../components/tagline");
var _taglineDefault = parcelHelpers.interopDefault(_tagline);
var _link = require("../components/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _router = require("../routes/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _error = require("../icon/error");
var _errorDefault = parcelHelpers.interopDefault(_error);
const onRequestNewPage = function(e) {
    e.preventDefault();
    _routerDefault.default(e.currentTarget.dataset.path);
};
const pageNotFound = function() {
    const page = document.createElement('div');
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('errorPage-header');
    const logoElm = _logoDefault.default();
    const h1 = _headerDefault.default('h1', 'Bingo');
    const p = _taglineDefault.default('Bingo is life');
    const linkElm = _linkDefault.default('go back', '/toDoPage');
    linkElm.addEventListener('click', onRequestNewPage);
    pageHeader.append(logoElm);
    pageHeader.append(h1);
    pageHeader.append(p);
    const pageMain = document.createElement('main');
    pageMain.classList.add('errorContent');
    const errorElm = _errorDefault.default();
    pageMain.append(errorElm);
    pageMain.append(linkElm);
    page.append(pageHeader);
    page.append(pageMain);
    return page;
};
exports.default = pageNotFound;

},{"../icon/logo":"cA0bR","../components/header":"fXKjJ","../components/link":"jlxOi","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../routes/router":"3ISf2","../icon/error":"32ZLx","../components/tagline":"fNyw9"}],"32ZLx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const error = function() {
    const template = `\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><g id="freepik--Floor--inject-67"><polygon points="43.37 383.14 95.03 382.9 146.69 382.81 250 382.64 353.31 382.81 404.97 382.9 456.63 383.14 404.97 383.39 353.31 383.48 250 383.64 146.69 383.48 95.03 383.39 43.37 383.14" style="fill:#263238"></polygon></g><g id="freepik--Shadow--inject-67"><ellipse cx="250" cy="449.04" rx="149.06" ry="21.08" style="fill:#ebebeb"></ellipse></g><g id="freepik--404-error--inject-67"><path d="M157.57,227.67l-6.21-24.43-49,12.47-6.48-25.5L135,100.89,154.47,96l18.9,74.36,15.69-4L195.59,192l-15.69,4,6.2,24.43ZM124,182.87l24.26-6.17-8-31.56Z" style="fill:#263238"></path><path d="M298,146.12a65.58,65.58,0,0,1-3.68,22.35,55.48,55.48,0,0,1-10.12,17.67A45.82,45.82,0,0,1,269,197.73a43.91,43.91,0,0,1-19,4.14,44.54,44.54,0,0,1-19.14-4.14,45.75,45.75,0,0,1-15.27-11.59,54.17,54.17,0,0,1-10-17.67A66.82,66.82,0,0,1,202,146.12a66.84,66.84,0,0,1,3.59-22.36,54.22,54.22,0,0,1,10-17.66,46.68,46.68,0,0,1,15.27-11.68A43.74,43.74,0,0,1,250,90.19a43.12,43.12,0,0,1,19,4.23,46.76,46.76,0,0,1,15.18,11.68,55.54,55.54,0,0,1,10.12,17.66A65.6,65.6,0,0,1,298,146.12Zm-29.62,0q0-12.88-5.15-20.88t-13.25-8q-8.46,0-13.52,8t-5.06,20.88q0,12.88,5.06,20.79T250,174.82q8.1,0,13.25-7.91T268.4,146.12Z" style="fill:#263238"></path><path d="M350.84,223l4-24.88L304.93,190l4.21-26,71.5-66.33,19.8,3.21-12.27,75.74,16,2.59-4.23,26.15-16-2.59-4,24.88Zm-13-54.47,24.7,4,5.21-32.15Z" style="fill:#263238"></path><path d="M208.68,72.46A13,13,0,0,1,203,71.23a13.94,13.94,0,0,1-4.4-3.27,15.19,15.19,0,0,1-3.86-10,14.37,14.37,0,0,1,1.07-5.5,15.16,15.16,0,0,1,2.95-4.64,13.94,13.94,0,0,1,4.46-3.21,13.18,13.18,0,0,1,5.62-1.19,12.56,12.56,0,0,1,5.67,1.27A14.22,14.22,0,0,1,218.85,48a15.11,15.11,0,0,1,2.83,4.69,14.67,14.67,0,0,1,0,10.8,14.91,14.91,0,0,1-2.91,4.61,13.89,13.89,0,0,1-4.44,3.19A13.31,13.31,0,0,1,208.68,72.46Zm-8.33-14.54a11.38,11.38,0,0,0,.57,3.59,9.53,9.53,0,0,0,1.64,3.07,7.91,7.91,0,0,0,2.62,2.14,7.57,7.57,0,0,0,3.54.81,7.41,7.41,0,0,0,3.57-.83,8.1,8.1,0,0,0,2.63-2.2,9.68,9.68,0,0,0,1.61-3.09,11.31,11.31,0,0,0,0-7.09,10,10,0,0,0-1.65-3.07,8,8,0,0,0-2.63-2.12,8.16,8.16,0,0,0-7.09,0,8,8,0,0,0-2.63,2.18,9.85,9.85,0,0,0-1.59,3.07A11.63,11.63,0,0,0,200.35,57.92Z" style="fill:#263238"></path><path d="M236.23,72.66a11.48,11.48,0,0,1-4.65-.89,10.34,10.34,0,0,1-3.49-2.4,10.68,10.68,0,0,1-2.21-3.49,11.9,11.9,0,0,1,0-8.37A10.68,10.68,0,0,1,228.09,54a10.34,10.34,0,0,1,3.49-2.4,11.48,11.48,0,0,1,4.65-.89,11.33,11.33,0,0,1,4.62.89,10.36,10.36,0,0,1,3.47,2.4,10.68,10.68,0,0,1,2.21,3.49,11.9,11.9,0,0,1,0,8.37,10.94,10.94,0,0,1-2.18,3.49,10.3,10.3,0,0,1-3.48,2.4A11.46,11.46,0,0,1,236.23,72.66Zm-5.54-10.94a7.2,7.2,0,0,0,.43,2.56,6.2,6.2,0,0,0,1.17,2A5.1,5.1,0,0,0,234,67.59a5.31,5.31,0,0,0,4.37,0,5.1,5.1,0,0,0,1.75-1.31,6.4,6.4,0,0,0,1.18-2,7.61,7.61,0,0,0,.42-2.59,7.48,7.48,0,0,0-.42-2.54,6.4,6.4,0,0,0-1.18-2,5.1,5.1,0,0,0-1.75-1.31,5.17,5.17,0,0,0-2.18-.47,4.92,4.92,0,0,0-2.19.49,5.42,5.42,0,0,0-1.75,1.33,6.2,6.2,0,0,0-1.17,2A7.26,7.26,0,0,0,230.69,61.72Z" style="fill:#263238"></path><path d="M263.61,72.66a8.34,8.34,0,0,1-4.36-1.11,7.86,7.86,0,0,1-2.91-3V80.86h-5.41V51.09h4.73v3.64a8.58,8.58,0,0,1,3-2.93A8.42,8.42,0,0,1,263,50.73a9.1,9.1,0,0,1,4,.87,9.93,9.93,0,0,1,3.13,2.34,11,11,0,0,1,2.06,3.47,11.94,11.94,0,0,1,.74,4.22,13.59,13.59,0,0,1-.68,4.33,11.11,11.11,0,0,1-1.92,3.51,8.82,8.82,0,0,1-2.93,2.34A8.14,8.14,0,0,1,263.61,72.66Zm-1.81-4.6a4.89,4.89,0,0,0,2.24-.53,5.45,5.45,0,0,0,1.75-1.41,6.55,6.55,0,0,0,1.14-2.06,7.37,7.37,0,0,0,.4-2.43,7,7,0,0,0-.44-2.48,6.19,6.19,0,0,0-1.24-2,5.65,5.65,0,0,0-1.86-1.33,5.42,5.42,0,0,0-2.32-.49,4.94,4.94,0,0,0-1.57.27,5.52,5.52,0,0,0-1.5.74,6.61,6.61,0,0,0-1.23,1.13,4.85,4.85,0,0,0-.83,1.42v5a7.34,7.34,0,0,0,2.22,3A5.13,5.13,0,0,0,261.8,68.06Z" style="fill:#263238"></path><path d="M284.54,72.66a16.21,16.21,0,0,1-5.21-.85A12.69,12.69,0,0,1,275,69.39L277,66a17.91,17.91,0,0,0,3.78,2.08,10.19,10.19,0,0,0,3.66.7,4.66,4.66,0,0,0,2.54-.6,2,2,0,0,0,.93-1.74,1.73,1.73,0,0,0-1.09-1.65,23.75,23.75,0,0,0-3.55-1.22c-1.38-.37-2.55-.74-3.52-1.09a8.78,8.78,0,0,1-2.34-1.19,4,4,0,0,1-1.29-1.53,4.91,4.91,0,0,1-.41-2.08,6.54,6.54,0,0,1,.63-2.91,6.26,6.26,0,0,1,1.76-2.2,8.13,8.13,0,0,1,2.64-1.4,10.86,10.86,0,0,1,3.29-.48,14.43,14.43,0,0,1,4.47.68,10.79,10.79,0,0,1,3.81,2.23l-2.18,3.27A12.59,12.59,0,0,0,287,55.09a8.49,8.49,0,0,0-3-.57,4.33,4.33,0,0,0-2.3.57,2,2,0,0,0-.93,1.82,1.85,1.85,0,0,0,.22.93,1.94,1.94,0,0,0,.71.64,7.15,7.15,0,0,0,1.27.55c.53.17,1.18.36,2,.54,1.46.38,2.7.76,3.74,1.14A9.69,9.69,0,0,1,291.18,62a4.59,4.59,0,0,1,1.46,1.67A5.2,5.2,0,0,1,293.1,66a5.91,5.91,0,0,1-2.3,4.91A10,10,0,0,1,284.54,72.66Z" style="fill:#263238"></path><path d="M297.67,61.47V43.29h5.41V61.47Zm0,10.79v-6.1h5.41v6.1Z" style="fill:#263238"></path></g><g id="freepik--Robot--inject-67"><rect x="235.09" y="313.85" width="35.51" height="2.91" style="fill:#37474f"></rect><rect x="235.09" y="317.63" width="35.51" height="2.91" style="fill:#37474f"></rect><rect x="235.09" y="321.42" width="35.51" height="2.91" style="fill:#37474f"></rect><rect x="235.09" y="325.21" width="35.51" height="2.91" style="fill:#37474f"></rect><rect x="235.09" y="329" width="35.51" height="2.91" style="fill:#37474f"></rect><rect x="218.46" y="404.59" width="67.52" height="2.91" style="fill:#37474f"></rect><rect x="218.46" y="408.38" width="67.52" height="2.91" style="fill:#37474f"></rect><rect x="218.46" y="412.17" width="67.52" height="2.91" style="fill:#37474f"></rect><rect x="218.46" y="415.96" width="67.52" height="2.91" style="fill:#37474f"></rect><rect x="218.46" y="419.75" width="67.52" height="2.91" style="fill:#37474f"></rect><path d="M188.83,289.8c0-.39-14.77-5.36-14.77-5.36l.87-50.88,19.64-4.22Z" style="fill:#FFC727"></path><path d="M188.83,289.8c0-.39-14.77-5.36-14.77-5.36l.87-50.88,19.64-4.22Z" style="opacity:0.2"></path><path d="M324.49,309.77c.1-.38,15.72.06,15.72.06l16.69-48.08-17-10.71Z" style="fill:#FFC727"></path><path d="M324.49,309.77c.1-.38,15.72.06,15.72.06l16.69-48.08-17-10.71Z" style="opacity:0.2"></path><path d="M186,308.54s5.49-82.3,10.31-109.38c0,0,99.42,7.52,153.09,28,0,0-27.67,96.12-29.1,100.89C320.28,328.09,250.27,314.3,186,308.54Z" style="fill:#FFC727"></path><path d="M274.72,210.15q-2.42,14.86-4.94,29.72l-5.13,29.67-.27-.41L297.69,277l16.64,4,16.61,4.11-16.7-3.74-16.69-3.81-33.34-7.79-.34-.08.06-.34,5.31-29.65Q271.91,225,274.72,210.15Z" style="opacity:0.1"></path><path d="M271.07,215.8a2,2,0,0,1-1.75,1.94,2,2,0,0,1-1.46-.48,2,2,0,0,1-.66-1.46,2,2,0,0,1,.66-1.46,1.94,1.94,0,0,1,3.21,1.46Zm0,0a1.6,1.6,0,0,0-.55-1.19,1.57,1.57,0,1,0,0,2.39A1.64,1.64,0,0,0,271.07,215.8Z" style="opacity:0.1"></path><path d="M269.32,228.05a1.93,1.93,0,0,1-1.74,1.93,1.92,1.92,0,0,1-2.12-1.93,1.94,1.94,0,0,1,.65-1.46,2,2,0,0,1,1.47-.48A2,2,0,0,1,269.32,228.05Zm0,0a1.6,1.6,0,0,0-.55-1.2,1.57,1.57,0,0,0-1.19-.36,1.57,1.57,0,0,0,0,3.12,1.56,1.56,0,0,0,1.74-1.56Z" style="opacity:0.1"></path><path d="M267.17,241a1.93,1.93,0,0,1-1.74,1.93,2,2,0,0,1-1.47-3.4,2,2,0,0,1,1.47-.47A1.94,1.94,0,0,1,267.17,241Zm0,0a1.6,1.6,0,0,0-.55-1.2,1.57,1.57,0,0,0-1.19-.36,1.57,1.57,0,0,0,0,3.12,1.62,1.62,0,0,0,1.19-.37A1.56,1.56,0,0,0,267.17,241Z" style="opacity:0.1"></path><path d="M265,253.93a1.94,1.94,0,0,1-1.74,1.93,1.94,1.94,0,1,1,0-3.87A1.94,1.94,0,0,1,265,253.93Zm0,0a1.6,1.6,0,0,0-.55-1.2,1.57,1.57,0,0,0-1.19-.36,1.57,1.57,0,0,0,0,3.12,1.62,1.62,0,0,0,1.19-.37A1.6,1.6,0,0,0,265,253.93Z" style="opacity:0.1"></path><path d="M272.35,274.56a1.94,1.94,0,1,1-1.75-1.93A1.94,1.94,0,0,1,272.35,274.56Zm0,0a1.64,1.64,0,0,0-.55-1.2,1.62,1.62,0,0,0-1.2-.36,1.57,1.57,0,1,0,1.2,2.76A1.64,1.64,0,0,0,272.35,274.56Z" style="opacity:0.1"></path><path d="M284.56,277.54a1.94,1.94,0,0,1-3.21,1.46,1.94,1.94,0,0,1,0-2.92,2,2,0,0,1,1.46-.47A1.93,1.93,0,0,1,284.56,277.54Zm0,0a1.6,1.6,0,0,0-.55-1.2,1.62,1.62,0,0,0-1.2-.36,1.57,1.57,0,1,0,1.2,2.76A1.6,1.6,0,0,0,284.56,277.54Z" style="opacity:0.1"></path><path d="M296.77,280.52a1.93,1.93,0,0,1-3.2,1.46,2,2,0,0,1-.66-1.46,1.94,1.94,0,0,1,.65-1.46,2,2,0,0,1,1.47-.47A1.93,1.93,0,0,1,296.77,280.52Zm0,0a1.59,1.59,0,0,0-.54-1.2A1.64,1.64,0,0,0,295,279a1.57,1.57,0,0,0,0,3.12,1.63,1.63,0,0,0,1.2-.36A1.59,1.59,0,0,0,296.77,280.52Z" style="opacity:0.1"></path><path d="M309,283.5a1.94,1.94,0,0,1-3.21,1.46,2,2,0,0,1-.66-1.46,2,2,0,0,1,.66-1.46,2,2,0,0,1,1.46-.48A2,2,0,0,1,309,283.5Zm0,0a1.64,1.64,0,0,0-.55-1.2,1.57,1.57,0,1,0-1.2,2.76,1.62,1.62,0,0,0,1.2-.36A1.64,1.64,0,0,0,309,283.5Z" style="opacity:0.1"></path><path d="M321.2,286.61a2,2,0,0,1-1.89,1.79,2,2,0,0,1-1.43-.58,1.95,1.95,0,0,1,.23-2.91,1.92,1.92,0,0,1,1.49-.36A2,2,0,0,1,321.2,286.61Zm0,0a1.6,1.6,0,0,0-.46-1.23,1.57,1.57,0,1,0-.18,2.38A1.6,1.6,0,0,0,321.2,286.61Z" style="opacity:0.1"></path><path d="M262.87,266.86a1.94,1.94,0,0,1-1.74,1.94,2.05,2.05,0,0,1-1.47-.47,1.94,1.94,0,0,1,1.47-3.4A1.94,1.94,0,0,1,262.87,266.86Zm0,0a1.6,1.6,0,0,0-.55-1.19,1.57,1.57,0,1,0,0,2.39A1.6,1.6,0,0,0,262.87,266.86Z" style="opacity:0.1"></path><circle cx="223.43" cy="267.31" r="28.23" transform="translate(-121.44 217.93) rotate(-41.96)" style="opacity:0.2"></circle><circle cx="223.43" cy="267.31" r="22.64" transform="translate(-105.66 381.64) rotate(-69.27)" style="fill:#263238"></circle><rect x="216.31" y="258.54" width="5.36" height="5.36" transform="translate(44.59 -31.66) rotate(9.2)" style="fill:#FFC727"></rect><rect x="211.87" y="252.39" width="5.36" height="5.36" transform="translate(43.55 -31.03) rotate(9.2)" style="fill:#FFC727"></rect><rect x="233.04" y="255.82" width="5.36" height="5.36" transform="translate(44.37 -34.37) rotate(9.2)" style="fill:#FFC727"></rect><rect x="208.46" y="273.44" width="5.36" height="5.36" transform="translate(46.87 -30.21) rotate(9.2)" style="fill:#FFC727"></rect><rect x="229.63" y="276.87" width="5.36" height="5.36" transform="translate(47.7 -33.55) rotate(9.2)" style="fill:#FFC727"></rect><rect x="214.61" y="269" width="5.36" height="5.36" transform="translate(46.24 -31.25) rotate(9.2)" style="fill:#FFC727"></rect><rect x="220.75" y="264.63" width="5.36" height="5.36" transform="translate(45.62 -32.29) rotate(9.2)" style="fill:#FFC727"></rect><rect x="226.89" y="260.25" width="5.36" height="5.36" transform="translate(45 -33.33) rotate(9.2)" style="fill:#FFC727"></rect><rect x="225.2" y="270.72" width="5.36" height="5.36" transform="translate(46.66 -32.93) rotate(9.2)" style="fill:#FFC727"></rect><circle cx="299.19" cy="279.14" r="28.23" transform="translate(-106.35 333.63) rotate(-50.67)" style="fill:#FFC727"></circle><circle cx="299.19" cy="279.14" r="28.23" transform="translate(-106.35 333.63) rotate(-50.67)" style="opacity:0.2"></circle><path d="M326.66,285.67c-.13.56-.28,1.09-.44,1.63l-55-11.74c.13-1,.3-2,.53-2.95a28.24,28.24,0,1,1,54.94,13.06Z" style="opacity:0.2"></path><circle cx="299.19" cy="279.14" r="22.64" transform="translate(-84.49 136.92) rotate(-22.68)" style="fill:#263238"></circle><rect x="296.51" y="265.8" width="5.36" height="26.69" transform="translate(72.65 -61.61) rotate(13.37)" style="fill:#FFC727"></rect><path d="M328.3,285.14,270.5,271.4a29.71,29.71,0,0,1,57.8,13.74Z" style="fill:#FFC727"></path><path d="M328.3,285.14,270.5,271.4a29.71,29.71,0,0,1,57.8,13.74Z" style="opacity:0.2"></path><path d="M250.07,295.92a10.51,10.51,0,0,1,2.61-6.35,7.67,7.67,0,0,1,3.07-2.07,8.66,8.66,0,0,1,3.7-.41,6.9,6.9,0,0,1,5.8,4.33,11.49,11.49,0,0,1,.59,6.85,18,18,0,0,0-2-6.14,5.88,5.88,0,0,0-4.61-3.06,7.06,7.06,0,0,0-5.49,1.61A14.78,14.78,0,0,0,250.07,295.92Z" style="opacity:0.1"></path><path d="M193.72,238.34c.23-3,.57-6,.86-9s.65-6,1-9,.74-6,1.12-9,.81-6,1.22-9l.1-.8.81.05q9.78.61,19.51,1.61c3.24.33,6.48.71,9.72,1.12s6.47.9,9.68,1.48l-19.52-1.2-19.49-1.27.91-.74c-.44,3-.85,6-1.32,9s-.92,6-1.42,8.95-1,5.95-1.52,8.93S194.33,235.38,193.72,238.34Z" style="fill:#fff"></path><path d="M198.41,261.16a24.55,24.55,0,0,1,4.52-10.09c.55-.76,1.18-1.46,1.78-2.18s1.33-1.33,2-2,1.47-1.18,2.22-1.75,1.58-1,2.39-1.52,1.71-.83,2.57-1.22l2.68-.93,2.78-.57c.93-.14,1.87-.17,2.81-.24A27.3,27.3,0,0,1,233,242.76a38.59,38.59,0,0,0-10.78-.72,25.22,25.22,0,0,0-10.07,3.13,29.14,29.14,0,0,0-8.18,6.75A33.21,33.21,0,0,0,198.41,261.16Z" style="fill:#fff"></path><path d="M276.29,268.78a24.78,24.78,0,0,1,5.86-9.37c.65-.67,1.37-1.28,2.07-1.91s1.5-1.13,2.26-1.69,1.61-1,2.44-1.43,1.71-.8,2.58-1.17,1.8-.59,2.7-.86l2.79-.55,2.83-.18c.94,0,1.88.1,2.82.16a27.19,27.19,0,0,1,10.47,3.56,38.91,38.91,0,0,0-10.58-2.2,25.25,25.25,0,0,0-10.4,1.71,29.45,29.45,0,0,0-9,5.55A33.57,33.57,0,0,0,276.29,268.78Z" style="fill:#fff"></path><path d="M189.14,359.25c-7.23,0-23.06-1.62-33.25-14.72-13-16.76-8.32-48.92-8.12-50.28l5.66.86c0,.31-4.54,31.09,7,45.9,11.26,14.48,31.69,12.41,31.89,12.38l.65,5.69C192.72,359.1,191.32,359.25,189.14,359.25Z" style="fill:#FFC727"></path><path d="M189.14,359.25c-7.23,0-23.06-1.62-33.25-14.72-13-16.76-8.32-48.92-8.12-50.28l5.66.86c0,.31-4.54,31.09,7,45.9,11.26,14.48,31.69,12.41,31.89,12.38l.65,5.69C192.72,359.1,191.32,359.25,189.14,359.25Z" style="fill:#fff;opacity:0.4"></path><path d="M155.1,299a19,19,0,0,1-3.16-.25c-9.55-1.55-13.77-7.26-15.64-11.78S134,277,135,270.68l12.1,2c-.63,3.89-.44,7.32.52,9.65.69,1.66,2,3.66,6.26,4.35,1.94.31,4,.15,6.23-3.16a22.84,22.84,0,0,0,3.06-8.23l12.11,2a35.47,35.47,0,0,1-5,13C166.56,296,161.22,299,155.1,299Z" style="fill:#FFC727"></path><path d="M201.1,375.63c0-.26-10.26-1.89-10.26-1.89l-5-33.41,12.39-4.9Z" style="fill:#FFC727"></path><path d="M201.1,375.63c0-.26-10.26-1.89-10.26-1.89l-5-33.41,12.39-4.9Z" style="opacity:0.2"></path><path d="M302.3,375.69c0-.26,10.29-1.66,10.29-1.66l5.71-33.29L306,335.57Z" style="fill:#FFC727"></path><path d="M302.3,375.69c0-.26,10.29-1.66,10.29-1.66l5.71-33.29L306,335.57Z" style="opacity:0.2"></path><path d="M196.84,328s82.79-3.53,110.75,1.13c0,0-8.21,80.1-8.65,81.66,0,0-82.36-.23-95.23,0C203.71,410.74,196.74,357.47,196.84,328Z" style="fill:#FFC727"></path><path d="M222,349.91s45.19-1.79,60.46.56c0,0-4.49,40.39-4.73,41.18,0,0-45-.11-52,0C225.74,391.65,222.65,364,222,349.91Z" style="opacity:0.2"></path><path d="M228.16,391.63l-2.43,0S222.65,364,222,349.9l2.83-.1Z" style="opacity:0.2"></path><path d="M241.49,359.87a4.81,4.81,0,1,0,3.14,6A4.81,4.81,0,0,0,241.49,359.87Zm2.58,5.86a4.22,4.22,0,1,1-2.75-5.3A4.22,4.22,0,0,1,244.07,365.73Zm-2.58-5.86a4.81,4.81,0,1,0,3.14,6A4.81,4.81,0,0,0,241.49,359.87Zm2.58,5.86a4.22,4.22,0,1,1-2.75-5.3A4.22,4.22,0,0,1,244.07,365.73Zm-2.58-5.86a4.81,4.81,0,1,0,3.14,6A4.81,4.81,0,0,0,241.49,359.87Zm2.58,5.86a4.22,4.22,0,1,1-2.75-5.3A4.22,4.22,0,0,1,244.07,365.73Zm-1-10.94a10.13,10.13,0,1,0,6.61,12.71A10.14,10.14,0,0,0,243.1,354.79Zm2.25,11.34a5.56,5.56,0,1,1-3.63-7A5.57,5.57,0,0,1,245.35,366.13Zm-.72-.23a4.81,4.81,0,1,0-6,3.14A4.8,4.8,0,0,0,244.63,365.9Zm-.56-.17a4.22,4.22,0,1,1-2.75-5.3A4.22,4.22,0,0,1,244.07,365.73Zm-2.58-5.86a4.81,4.81,0,1,0,3.14,6A4.81,4.81,0,0,0,241.49,359.87Zm2.58,5.86a4.22,4.22,0,1,1-2.75-5.3A4.22,4.22,0,0,1,244.07,365.73Zm-2.58-5.86a4.81,4.81,0,1,0,3.14,6A4.81,4.81,0,0,0,241.49,359.87Zm2.58,5.86a4.22,4.22,0,1,1-2.75-5.3A4.22,4.22,0,0,1,244.07,365.73Z" style="fill:#FFC727"></path><polygon points="238.99 374.31 235.27 373.13 234.65 375.83 237.95 376.87 238.99 374.31" style="fill:#FFC727"></polygon><polygon points="232.31 370.82 230.51 367.37 228.16 368.83 229.76 371.91 232.31 370.82" style="fill:#FFC727"></polygon><polygon points="230.05 363.64 231.22 359.93 228.53 359.3 227.48 362.61 230.05 363.64" style="fill:#FFC727"></polygon><polygon points="233.53 356.96 236.99 355.17 235.52 352.82 232.45 354.42 233.53 356.96" style="fill:#FFC727"></polygon><polygon points="240.71 354.7 244.43 355.88 245.05 353.18 241.75 352.14 240.71 354.7" style="fill:#FFC727"></polygon><polygon points="247.39 358.18 249.19 361.64 251.54 360.18 249.94 357.1 247.39 358.18" style="fill:#FFC727"></polygon><polygon points="249.65 365.37 248.48 369.08 251.18 369.71 252.22 366.4 249.65 365.37" style="fill:#FFC727"></polygon><polygon points="246.17 372.04 242.72 373.84 244.18 376.19 247.25 374.59 246.17 372.04" style="fill:#FFC727"></polygon><path d="M257.84,374a3.24,3.24,0,1,0,.94,4.48A3.24,3.24,0,0,0,257.84,374Zm.61,4.26a2.84,2.84,0,1,1-.83-3.93A2.84,2.84,0,0,1,258.45,378.27Zm-.61-4.26a3.24,3.24,0,1,0,.94,4.48A3.24,3.24,0,0,0,257.84,374Zm.61,4.26a2.84,2.84,0,1,1-.83-3.93A2.84,2.84,0,0,1,258.45,378.27Zm-.61-4.26a3.24,3.24,0,1,0,.94,4.48A3.24,3.24,0,0,0,257.84,374Zm.61,4.26a2.84,2.84,0,1,1-.83-3.93A2.84,2.84,0,0,1,258.45,378.27Zm1.34-7.26a6.82,6.82,0,1,0,2,9.44A6.82,6.82,0,0,0,259.79,371Zm-.59,7.75a3.74,3.74,0,1,1-1.09-5.17A3.74,3.74,0,0,1,259.2,378.76Zm-.42-.27a3.23,3.23,0,1,0-4.48.95A3.25,3.25,0,0,0,258.78,378.49Zm-.33-.22a2.84,2.84,0,1,1-.83-3.93A2.84,2.84,0,0,1,258.45,378.27Zm-.61-4.26a3.24,3.24,0,1,0,.94,4.48A3.24,3.24,0,0,0,257.84,374Zm.61,4.26a2.84,2.84,0,1,1-.83-3.93A2.84,2.84,0,0,1,258.45,378.27Zm-.61-4.26a3.24,3.24,0,1,0,.94,4.48A3.24,3.24,0,0,0,257.84,374Zm.61,4.26a2.84,2.84,0,1,1-.83-3.93A2.84,2.84,0,0,1,258.45,378.27Z" style="fill:#dbdbdb"></path><polygon points="253.6 382.92 251.4 381.49 250.51 383.12 252.47 384.39 253.6 382.92" style="fill:#dbdbdb"></polygon><polygon points="249.9 379.45 249.36 376.89 247.57 377.41 248.05 379.7 249.9 379.45" style="fill:#dbdbdb"></polygon><polygon points="249.73 374.39 251.16 372.19 249.53 371.3 248.25 373.25 249.73 374.39" style="fill:#dbdbdb"></polygon><polygon points="253.2 370.69 255.76 370.14 255.24 368.36 252.95 368.84 253.2 370.69" style="fill:#dbdbdb"></polygon><polygon points="258.26 370.52 260.46 371.95 261.35 370.31 259.4 369.04 258.26 370.52" style="fill:#dbdbdb"></polygon><polygon points="261.96 373.98 262.51 376.55 264.29 376.02 263.81 373.74 261.96 373.98" style="fill:#dbdbdb"></polygon><polygon points="262.13 379.05 260.7 381.25 262.33 382.14 263.61 380.18 262.13 379.05" style="fill:#dbdbdb"></polygon><polygon points="258.67 382.75 256.1 383.29 256.63 385.08 258.91 384.6 258.67 382.75" style="fill:#dbdbdb"></polygon><polygon points="305.59 401.41 308.78 402.01 317.88 340.38 314.25 339.71 305.59 401.41" style="fill:#FFC727"></polygon><path d="M277.72,391.65l4.73-41.18,31.8-10.76s-8.66,62.37-8.66,61.7Z" style="fill:#FFC727"></path><path d="M277.72,391.65l4.73-41.18,31.8-10.76s-8.66,62.37-8.66,61.7Z" style="fill:#fff;opacity:0.4"></path><path d="M200.64,352.14c-.52-3.41-.8-6.85-1-10.29-.1-1.72-.14-3.45-.18-5.17s-.06-3.45,0-5.18v-.45l.44,0c6.32-.34,12.63-.76,19-1s12.64-.6,19-.8c-6.31.57-12.61,1.06-18.92,1.52s-12.63.84-18.94,1.27l.46-.47,0,5.15.06,5.15c0,1.72,0,3.44.09,5.15Z" style="fill:#fff"></path><path d="M286.88,351.08q3-1.41,6-2.61t6.12-2.32c2.06-.7,4.13-1.39,6.24-2a57.54,57.54,0,0,1,6.39-1.49l.53-.09-.09.51c-.5,2.67-1,5.33-1.64,8,.23-2.71.56-5.41.9-8.1l.44.43c-2.1.5-4.18,1.08-6.26,1.7s-4.15,1.27-6.21,1.94Z" style="fill:#fff"></path><polygon points="214.4 328.12 214.94 338.42 215.4 348.72 216.19 369.33 216.81 389.94 217.06 400.25 217.23 410.57 216.69 400.27 216.24 389.96 215.44 369.36 214.82 348.74 214.57 338.43 214.4 328.12" style="opacity:0.1"></polygon><path d="M211.45,334.33a1.93,1.93,0,0,1-2.85,2.07,2,2,0,0,1-.94-1.31,2,2,0,0,1,.36-1.56,2,2,0,0,1,1.34-.75A1.94,1.94,0,0,1,211.45,334.33Zm0,0a1.56,1.56,0,1,0-.3,1.28A1.56,1.56,0,0,0,211.45,334.33Z" style="opacity:0.1"></path><path d="M212.16,346.68a2,2,0,0,1-1.33,2.24,1.93,1.93,0,0,1-2.46-1.48,2,2,0,0,1,.36-1.56,2,2,0,0,1,1.34-.75A1.94,1.94,0,0,1,212.16,346.68Zm0,0a1.54,1.54,0,0,0-2-1.18,1.57,1.57,0,1,0,2,1.18Z" style="opacity:0.1"></path><path d="M212.61,359.79a2,2,0,0,1-1.33,2.24,2,2,0,0,1-1.52-.17,2,2,0,0,1-.94-1.31,2,2,0,0,1,.36-1.56,1.93,1.93,0,0,1,3.43.8Zm0,0a1.54,1.54,0,0,0-2-1.18,1.57,1.57,0,1,0,2,1.18Z" style="opacity:0.1"></path><path d="M213.06,372.9a2,2,0,0,1-1.33,2.24,2,2,0,0,1-2.46-1.48,2,2,0,0,1,.36-1.56,1.93,1.93,0,0,1,3.43.8Zm0,0a1.6,1.6,0,0,0-.77-1.07,1.66,1.66,0,0,0-1.25-.12,1.57,1.57,0,0,0,.62,3.06,1.61,1.61,0,0,0,1.1-.59A1.58,1.58,0,0,0,213.06,372.9Z" style="opacity:0.1"></path><path d="M213.51,386a1.93,1.93,0,0,1-2.85,2.07,2,2,0,0,1-.94-1.3,2,2,0,0,1,.36-1.57,2,2,0,0,1,1.34-.75A2,2,0,0,1,213.51,386Zm0,0a1.56,1.56,0,0,0-2-1.18,1.57,1.57,0,0,0,.62,3.06,1.56,1.56,0,0,0,1.4-1.88Z" style="opacity:0.1"></path><path d="M214,399.11a1.93,1.93,0,1,1-3.79.77,1.94,1.94,0,0,1,1.7-2.32A2,2,0,0,1,214,399.11Zm0,0a1.58,1.58,0,0,0-.77-1.06,1.62,1.62,0,0,0-1.25-.12,1.57,1.57,0,0,0,.62,3.06,1.56,1.56,0,0,0,1.4-1.88Z" style="opacity:0.1"></path><rect x="170.93" y="426.13" width="48.98" height="5.72" transform="translate(-116.03 75.12) rotate(-16.86)" style="fill:#FFC727"></rect><rect x="170.93" y="426.13" width="48.98" height="5.72" transform="translate(-116.03 75.12) rotate(-16.86)" style="fill:#fff;opacity:0.4"></rect><rect x="191.27" y="424.75" width="5.72" height="8.5" transform="translate(-120.89 79.02) rotate(-17.64)" style="fill:#FFC727"></rect><polygon points="172.43 446.86 160.33 394.48 123.82 403.14 141.8 454.19 172.43 446.86" style="fill:#FFC727"></polygon><polygon points="180.53 444.2 172.43 446.86 160.33 394.48 171.98 397.26 180.53 444.2" style="fill:#FFC727"></polygon><polygon points="180.53 444.2 172.43 446.86 160.33 394.48 171.98 397.26 180.53 444.2" style="opacity:0.2"></polygon><circle cx="218.86" cy="421.89" r="6.21" style="fill:#FFC727"></circle><rect x="302.54" y="404.41" width="5.72" height="48.98" transform="translate(-193.99 595.74) rotate(-73.02)" style="fill:#FFC727"></rect><rect x="302.54" y="404.41" width="5.72" height="48.98" transform="translate(-193.99 595.74) rotate(-73.02)" style="fill:#fff;opacity:0.4"></rect><rect x="302.44" y="426.04" width="8.5" height="5.72" transform="translate(-195.36 590.05) rotate(-72.23)" style="fill:#FFC727"></rect><polygon points="328.36 446.82 340.56 394.46 377.06 403.2 358.97 454.21 328.36 446.82" style="fill:#FFC727"></polygon><polygon points="320.26 444.14 328.36 446.82 340.56 394.46 328.91 397.21 320.26 444.14" style="fill:#FFC727"></polygon><polygon points="320.26 444.14 328.36 446.82 340.56 394.46 328.91 397.21 320.26 444.14" style="opacity:0.2"></polygon><path d="M275.76,421.74a6.22,6.22,0,1,0,6.23-6.2A6.21,6.21,0,0,0,275.76,421.74Z" style="fill:#FFC727"></path><path d="M322.66,357.13c.15-.14,15.21-14.1,32.92-9.32,18.11,4.88,33.06,32.16,33.21,32.44l5-2.72c-.66-1.21-16.26-29.73-36.76-35.25-20.86-5.62-37.65,10-38.35,10.7Z" style="fill:#FFC727"></path><path d="M322.66,357.13c.15-.14,15.21-14.1,32.92-9.32,18.11,4.88,33.06,32.16,33.21,32.44l5-2.72c-.66-1.21-16.26-29.73-36.76-35.25-20.86-5.62-37.65,10-38.35,10.7Z" style="fill:#fff;opacity:0.4"></path><path d="M382.12,407.71,393,402a23,23,0,0,1-2.51-8.42c-.24-4,1.34-5.36,3.07-6.28,3.8-2,6.07-1.21,7.62-.3,2.17,1.29,4.38,3.91,6.22,7.4l10.85-5.73c-3-5.62-6.62-9.74-10.84-12.23s-11-4.5-19.57,0c-6.67,3.52-10.07,9.86-9.59,17.86A35.5,35.5,0,0,0,382.12,407.71Z" style="fill:#FFC727"></path><path d="M325,338c2.35-1.62,4.76-3.15,7.17-4.67s4.86-3,7.31-4.44,4.92-2.87,7.42-4.24l3.76-2.05c1.27-.65,2.52-1.33,3.81-2-1.17.82-2.38,1.59-3.56,2.38l-3.62,2.29c-2.41,1.53-4.85,3-7.3,4.44s-4.93,2.87-7.43,4.24S327.51,336.75,325,338Z" style="fill:#263238"></path><path d="M318.72,361.42c3.37,1.92,6.56,4.09,9.71,6.31s6.21,4.56,9.12,7.12a115.22,115.22,0,0,1-9.71-6.31C324.72,366.29,321.63,364,318.72,361.42Z" style="fill:#263238"></path><path d="M324.25,358.54c2.6.79,5.16,1.69,7.71,2.59S337,363,339.57,364s5,2,7.52,3l3.74,1.6c1.23.57,2.47,1.11,3.69,1.7-1.3-.38-2.58-.83-3.87-1.24l-3.83-1.34c-2.56-.9-5.09-1.87-7.61-2.84s-5-2-7.53-3S326.7,359.72,324.25,358.54Z" style="fill:#263238"></path><path d="M331.63,340.22c2.49-.65,5-1.19,7.51-1.71s5-1,7.56-1.45,5.05-.86,7.59-1.22l3.81-.53c1.28-.14,2.55-.31,3.84-.42-1.25.33-2.5.6-3.75.91l-3.76.8c-2.51.53-5,1-7.56,1.45s-5.06.86-7.6,1.21S334.19,340,331.63,340.22Z" style="fill:#263238"></path></g><g id="freepik--speech-bubble--inject-67"><path d="M361.59,238.94a24.58,24.58,0,0,1-4.2-13.58c0-17.19,18.88-31.13,42.16-31.13s42.14,13.94,42.14,31.13-18.86,31.14-42.14,31.14c-11.29,0-21.52-3.27-29.08-8.61L356,251.58Z" style="fill:#fff"></path><path d="M361.59,238.94a24,24,0,0,1-.94-26,33,33,0,0,1,9.27-10.06,43.87,43.87,0,0,1,12.23-6.23A57.17,57.17,0,0,1,395.62,194a58.39,58.39,0,0,1,13.72.7c1.13.23,2.27.38,3.38.68l3.33.9,3.25,1.14c1.08.39,2.11.92,3.17,1.37a41,41,0,0,1,11.32,7.83,28.92,28.92,0,0,1,7.29,11.68,23.71,23.71,0,0,1,.14,13.76,28.74,28.74,0,0,1-7.11,11.79,40.4,40.4,0,0,1-11.22,8,49.49,49.49,0,0,1-13.1,4.2,57.79,57.79,0,0,1-13.71.78,53.82,53.82,0,0,1-13.48-2.56,45.26,45.26,0,0,1-12.26-6.12l.18,0L356,251.69l-.22.05.1-.2Zm0,0-5.54,12.68-.13-.15,14.49-3.8.1,0,.09.06A49.68,49.68,0,0,0,396.12,256a56.68,56.68,0,0,0,13.52-.89A48.74,48.74,0,0,0,422.5,251a39.59,39.59,0,0,0,10.95-7.82,27.66,27.66,0,0,0,6.84-11.41,22.71,22.71,0,0,0-.16-13.19,27.86,27.86,0,0,0-7-11.3,39.74,39.74,0,0,0-11-7.68c-1-.44-2-1-3.11-1.35l-3.19-1.14-3.27-.89c-1.09-.29-2.21-.45-3.32-.68a58.83,58.83,0,0,0-13.52-.74,55.85,55.85,0,0,0-13.3,2.54,43.43,43.43,0,0,0-12.11,6,33.34,33.34,0,0,0-9.24,9.8,24.28,24.28,0,0,0-3.51,12.95A24.68,24.68,0,0,0,361.59,238.94Z" style="fill:#263238"></path><path d="M377.86,230.46v2.32h-9.43V219.19h9.26v2.32h-6.62v3.27h5.72v2.14h-5.72v3.54Z" style="fill:#263238"></path><path d="M379.93,232.78V219.19h6a3.88,3.88,0,0,1,1.73.39,4.56,4.56,0,0,1,1.37,1,4.91,4.91,0,0,1,.9,1.45,4.56,4.56,0,0,1-.34,4,3.77,3.77,0,0,1-1.79,1.56l3.1,5.11h-3l-2.78-4.56h-2.6v4.56Zm2.64-6.87h3.31a1.46,1.46,0,0,0,.68-.17,1.89,1.89,0,0,0,.55-.47,2.43,2.43,0,0,0,.36-.7,2.71,2.71,0,0,0,.13-.86,2.5,2.5,0,0,0-.15-.88,2.31,2.31,0,0,0-.41-.7,1.85,1.85,0,0,0-.59-.46,1.54,1.54,0,0,0-.68-.16h-3.2Z" style="fill:#263238"></path><path d="M392.65,232.78V219.19h6a3.9,3.9,0,0,1,1.74.39,4.65,4.65,0,0,1,1.36,1,4.53,4.53,0,0,1,.9,1.45,4.33,4.33,0,0,1,.33,1.64,4.51,4.51,0,0,1-.66,2.4,3.81,3.81,0,0,1-1.79,1.56l3.1,5.11h-3l-2.77-4.56h-2.6v4.56Zm2.65-6.87h3.31a1.46,1.46,0,0,0,.68-.17,1.73,1.73,0,0,0,.54-.47,2.21,2.21,0,0,0,.36-.7,2.72,2.72,0,0,0,.14-.86,2.5,2.5,0,0,0-.15-.88,2.33,2.33,0,0,0-.42-.7,1.85,1.85,0,0,0-.59-.46,1.51,1.51,0,0,0-.68-.16H395.3Z" style="fill:#263238"></path><path d="M411.18,232.87a6.15,6.15,0,0,1-2.71-.58,6.55,6.55,0,0,1-2.08-1.55,6.85,6.85,0,0,1-1.35-2.21,7,7,0,0,1-.48-2.55,6.81,6.81,0,0,1,.51-2.6,7.09,7.09,0,0,1,1.39-2.2,6.74,6.74,0,0,1,2.12-1.52,6.19,6.19,0,0,1,2.66-.56,6,6,0,0,1,2.69.6,6.63,6.63,0,0,1,2.07,1.58,7.16,7.16,0,0,1,1.34,2.22,6.93,6.93,0,0,1,0,5.12A7.12,7.12,0,0,1,416,230.8a6.72,6.72,0,0,1-2.11,1.51A6.22,6.22,0,0,1,411.18,232.87ZM407.24,226a5.76,5.76,0,0,0,.26,1.71,4.5,4.5,0,0,0,.78,1.45,4,4,0,0,0,1.24,1,3.68,3.68,0,0,0,1.68.38,3.54,3.54,0,0,0,1.69-.39,3.84,3.84,0,0,0,1.25-1.05,4.72,4.72,0,0,0,.76-1.46,5.48,5.48,0,0,0,.26-1.66,5.18,5.18,0,0,0-.28-1.7,4.5,4.5,0,0,0-.78-1.45,3.74,3.74,0,0,0-1.25-1,3.88,3.88,0,0,0-3.35,0,3.73,3.73,0,0,0-1.25,1,4.54,4.54,0,0,0-.75,1.45A5.17,5.17,0,0,0,407.24,226Z" style="fill:#263238"></path><path d="M419.85,232.78V219.19h6a3.88,3.88,0,0,1,1.73.39,4.56,4.56,0,0,1,1.37,1,4.91,4.91,0,0,1,.9,1.45,4.56,4.56,0,0,1-.34,4,3.77,3.77,0,0,1-1.79,1.56l3.1,5.11h-3l-2.78-4.56h-2.6v4.56Zm2.64-6.87h3.31a1.46,1.46,0,0,0,.68-.17,1.89,1.89,0,0,0,.55-.47,2.43,2.43,0,0,0,.36-.7,2.71,2.71,0,0,0,.13-.86,2.5,2.5,0,0,0-.15-.88,2.31,2.31,0,0,0-.41-.7,1.85,1.85,0,0,0-.59-.46,1.54,1.54,0,0,0-.68-.16h-3.2Z" style="fill:#263238"></path></g></svg>\n\n    `;
    const element = _makeElementDefault.default(template);
    return element;
};
exports.default = error;

},{"../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gyF4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _logo = require("../icon/logo");
var _logoDefault = parcelHelpers.interopDefault(_logo);
var _header = require("../components/header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _tagline = require("../components/tagline");
var _taglineDefault = parcelHelpers.interopDefault(_tagline);
var _link = require("../components/link");
var _linkDefault = parcelHelpers.interopDefault(_link);
var _router = require("../routes/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _addlogo = require("../icon/addlogo");
var _addlogoDefault = parcelHelpers.interopDefault(_addlogo);
var _todoList2 = require("../components/todoList/todoList2");
var _todoList2Default = parcelHelpers.interopDefault(_todoList2);
const onRequestNewPage = function(e) {
    e.preventDefault();
    _routerDefault.default(e.currentTarget.dataset.path);
};
const toDoPage = function() {
    const div = document.createElement('div');
    div.classList.add('toDoPage');
    const pageHeader = document.createElement('header');
    pageHeader.classList.add('toDoPage-header');
    const logoElm = _logoDefault.default();
    const h1 = _headerDefault.default('h1', 'Bingo');
    const p = _taglineDefault.default('Time to play');
    pageHeader.append(logoElm);
    pageHeader.append(h1);
    pageHeader.append(p);
    div.append(pageHeader);
    const main = document.createElement('main');
    div.append(main);
    const category = _todoList2Default.default();
    main.append(category);
    const pageFooter = document.createElement('footer');
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footerDiv');
    const linkElm = _linkDefault.default(_addlogoDefault.default, '/add', 'addbutton');
    linkElm.addEventListener('click', onRequestNewPage);
    footerDiv.append(linkElm);
    pageFooter.append(footerDiv);
    div.append(pageFooter);
    return div;
};
exports.default = toDoPage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../routes/router":"3ISf2","../icon/addlogo":"6lHlM","../components/link":"jlxOi","../icon/logo":"cA0bR","../components/header":"fXKjJ","../components/tagline":"fNyw9","../components/todoList/todoList2":"6QeiA"}],"6lHlM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const addlogo = `\n	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="background-color:white" fill="red" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">\n	<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>\n  	</svg>\n   `;
exports.default = addlogo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6QeiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _router = require("../../routes/router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _todoItem2 = require("../todoItem/todoItem2");
var _todoItem2Default = parcelHelpers.interopDefault(_todoItem2);
var _editlogo = require("../../icon/editlogo");
var _editlogoDefault = parcelHelpers.interopDefault(_editlogo);
var _trashlogo = require("../../icon/trashlogo");
var _trashlogoDefault = parcelHelpers.interopDefault(_trashlogo);
var _store = require("../../redux/store");
const bgColor = function() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor1;
};
const todoList = function() {
    const content = document.createElement('div');
    content.classList.add('category-list');
    const data = _store.getStore();
    const elements = data.map((cat)=>_todoItem2Default.default(bgColor(), _editlogoDefault.default, _trashlogoDefault.default, cat)
    );
    elements.forEach((element)=>{
        content.append(element);
    });
    // data.forEach(cat => {
    //     const headDiv = document.createElement('div')
    //     headDiv.classList.add('itemList')
    //     const colorDiv = document.createElement('div')
    //     colorDiv.classList.add('colorDiv')
    //     function random_bg_color() {
    //         var x = Math.floor(Math.random() * 256);
    //         var y = Math.floor(Math.random() * 256);
    //         var z = Math.floor(Math.random() * 256);
    //         var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //         colorDiv.style.background = bgColor;
    //         }
    //     random_bg_color();
    //     headDiv.append(colorDiv)
    //     content.append(headDiv)
    //     const catDiv = document.createElement('div')
    //     catDiv.classList.add('catDiv')
    //     const elem = todoItem(cat)
    //     catDiv.append(elem)
    //     const functionDiv = document.createElement('div')
    //     functionDiv.classList.add('function-div')
    //     const edit = link(editlogo, '/edit','edit-button')
    //     edit.addEventListener('click',onRequestNewPage)
    //     functionDiv.append(edit)
    //     const del = link(trashlogo, '/delete','delete-button')
    //     del.addEventListener('click',onRequestNewPage)
    //     functionDiv.append(del)
    //     catDiv.append(functionDiv)
    //     headDiv.append(catDiv)
    // });
    return content;
};
exports.default = todoList;

},{"../../routes/router":"3ISf2","../todoItem/todoItem2":"fvtYW","../../icon/editlogo":"f6gis","../../icon/trashlogo":"hJZK1","../../redux/store":"fKkA9","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fvtYW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _makeElement = require("../../utils/makeElement");
var _makeElementDefault = parcelHelpers.interopDefault(_makeElement);
const todoItem = function(color, edit, del, { id , category , title , endDate , isComplete  }) {
    const template = `\n    <div class="itemList">\n        <div class="colorDiv" style="background: ${color};"></div>\n        <div class="catDiv">\n            <ul class="list" data-key="${id}">\n                <li class="category" >${category}</li>\n                <li class="title" >${title}</li>\n                <li class="date" >${endDate}</li>\n                <li class="isComplete" >${isComplete ? 'Completed' : '&nbsp;'}</li>\n            </ul>\n            <div class="function-div">\n                <a href="/edit" data-path="/edit" class="edit-button">${edit}</a>\n                <a href="/delete" data-path="/delete" class="delete-button">${del}</a>\n            </div>       \n        </div>\n    </div>\n    `;
    return _makeElementDefault.default(template);
};
exports.default = todoItem;

},{"../../utils/makeElement":"ggL9Z","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"f6gis":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const editlogo = `\n	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">\n  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>\n  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>\n</svg>\n   `;
exports.default = editlogo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hJZK1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const trashlogo = `\n	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">\n  	<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>\n  	<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 	1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>\n	</svg>\n   `;
exports.default = trashlogo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fKkA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStore", ()=>createStore
);
parcelHelpers.export(exports, "getStore", ()=>getStore
);
let store = null;
function createStore(data = []) {
    if (store === null) store = [
        ...data
    ];
    return null;
}
function getStore() {
    return store;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dii9d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const dataFetcher = async function(url = null) {
    const res = await fetch(url);
    const jsonData = await res.json();
    return jsonData;
};
exports.default = dataFetcher;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["hkXzs","23obh"], "23obh", "parcelRequirea107")

//# sourceMappingURL=index.227406fc.js.map
