webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BlogPost.jsx":
/*!*********************************!*\
  !*** ./components/BlogPost.jsx ***!
  \*********************************/
/*! exports provided: BlogPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return BlogPost; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _HeadBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeadBase */ "./components/HeadBase.jsx");
/* harmony import */ var _ViewCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ViewCounter */ "./components/ViewCounter.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global */ "./global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_other__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/other */ "./helpers/other.js");
/* harmony import */ var _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/blog-post.module.css */ "./styles/blog-post.module.css");
/* harmony import */ var _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "/mnt/c/Projects/blog/components/BlogPost.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var PRISM_THEME_URL = "https://unpkg.com/prismjs@1.23.0/themes/prism-twilight.css";
var BlogPost = function BlogPost(props) {
  _s();

  var meta = props.meta,
      children = props.children;
  var title = meta.title,
      description = meta.description,
      slug = meta.slug,
      tags = meta.tags,
      estReadTime = meta.estReadTime,
      dateCreated = meta.dateCreated;

  var generateShareLinks = function generateShareLinks() {
    var wantFull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var author = _global__WEBPACK_IMPORTED_MODULE_7__["SITE_CONSTANTS"].author;
    var postLink = "";

    if (wantFull) {
      postLink = window.location.href.split("#")[0];
    }

    return [{
      name: "Twitter",
      url: "https://www.twitter.com/share?text=".concat(title, " by ").concat(author, "&url=").concat(postLink, "&via=").concat(author.slice(1))
    }, {
      name: "WhatsApp",
      url: "https://wa.me/?text=".concat(title, " by ").concat(author, ". Read at ").concat(postLink)
    }];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var shareLinks = generateShareLinks(true);
    var linksContainer = document.getElementById("post-share-links");

    var _iterator = _createForOfIteratorHelper(linksContainer.children),
        _step;

    try {
      var _loop = function _loop() {
        var child = _step.value;
        child.href = shareLinks.find(function (link) {
          return link.name === child.title;
        }).url;
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeadBase__WEBPACK_IMPORTED_MODULE_4__["HeadBase"], {
      title: "".concat(title, " - ").concat(_global__WEBPACK_IMPORTED_MODULE_7__["SITE_CONSTANTS"].title),
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        defer: true,
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
        integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: PRISM_THEME_URL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "post-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--title"],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--head"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--time"],
          children: _helpers_other__WEBPACK_IMPORTED_MODULE_8__["NormalDateFormat"].format(dateCreated)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            gap: 4,
            flexDirection: 'column',
            alignItems: 'flex-end'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [estReadTime, " min read"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "post-share-links",
          children: generateShareLinks(false).map(function (link) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "reset",
              title: link.name,
              href: link.url,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-".concat(link.name.toLowerCase())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(BlogPost, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = BlogPost;

var _c;

$RefreshReg$(_c, "BlogPost");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog-post.module.css":
/*!*************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/blog-post.module.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog-post_post--title__weQqf {\r\n\tfont-size: 1.7em;\r\n\tmargin-bottom: 5px;\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.blog-post_post--head__1MCRZ {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\topacity: .9;\r\n\tfont-size: .8em;\r\n}\r\n\r\n/* Some of the styles have been moved to global */\r\n\r\n.blog-post_post--content__24urQ {\r\n\tmargin-top: 32px;\r\n\tline-height: 25px;\r\n}\r\n\r\n.blog-post_post--content__24urQ a {\r\n\t--color: #60a5fa;\r\n\t--hover-color: #2563eb;\r\n\t\r\n\tcolor: var(--color);\r\n\ttransition: color .1s;\r\n}\r\n\r\n.blog-post_post--content__24urQ a:hover {\r\n\tcolor: var(--hover-color);\r\n}\r\n\r\n.blog-post_post--content__24urQ strong {\r\n\tfont-weight: 600;\r\n\ttext-decoration: underline solid white 2px;\r\n}\r\n\r\n.blog-post_post--content__24urQ img {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tmax-width: 100%;\r\n\twidth: auto;\r\n\tmax-height: 600px;\r\n}\r\n\r\n.blog-post_post--content__24urQ p {\r\n\tline-height: 26px;\t\r\n}\r\n\r\n.blog-post_post--content__24urQ table {\r\n\tmargin: 20px auto;\r\n\ttext-align: center;\r\n\tborder-spacing: 40px 4px;\r\n\tfont-size: 1.1em;\r\n}\r\n\r\n\r\n.blog-post_post--share-section__1pIqJ {\r\n\tjustify-content: flex-end;\r\n\tdisplay: flex;\r\n}\r\n\r\n.blog-post_post--share-section__1pIqJ span {\r\n\tfont-size: .8em;\r\n\topacity: .7;\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.blog-post_post--share-section__1pIqJ div {\r\n\tdisplay: flex;\r\n\tgrid-gap: 8px;\r\n\tgap: 8px;\r\n}\r\n\r\n.blog-post_post--share-section__1pIqJ a i {\r\n\topacity: .7;\r\n\ttransition: all .26s;\r\n}\r\n\r\n.blog-post_post--share-section__1pIqJ a:hover i {\r\n\topacitY: 1;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/blog-post.module.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,WAAW;CACX,eAAe;AAChB;;AAEA,iDAAiD;;AAEjD;CACC,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,sBAAsB;;CAEtB,mBAAmB;CACnB,qBAAqB;AACtB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,0CAA0C;AAC3C;;AAEA;CACC,cAAc;CACd,cAAc;CACd,eAAe;CACf,WAAW;CACX,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,wBAAwB;CACxB,gBAAgB;AACjB;;;AAGA;CACC,yBAAyB;CACzB,aAAa;AACd;;AAEA;CACC,eAAe;CACf,WAAW;CACX,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,aAAQ;CAAR,QAAQ;AACT;;AAEA;CACC,WAAW;CACX,oBAAoB;AACrB;;AAEA;CACC,UAAU;AACX","sourcesContent":[".post--title {\r\n\tfont-size: 1.7em;\r\n\tmargin-bottom: 5px;\r\n\tmargin-top: 40px;\r\n}\r\n\r\n.post--head {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\topacity: .9;\r\n\tfont-size: .8em;\r\n}\r\n\r\n/* Some of the styles have been moved to global */\r\n\r\n.post--content {\r\n\tmargin-top: 32px;\r\n\tline-height: 25px;\r\n}\r\n\r\n.post--content a {\r\n\t--color: #60a5fa;\r\n\t--hover-color: #2563eb;\r\n\t\r\n\tcolor: var(--color);\r\n\ttransition: color .1s;\r\n}\r\n\r\n.post--content a:hover {\r\n\tcolor: var(--hover-color);\r\n}\r\n\r\n.post--content strong {\r\n\tfont-weight: 600;\r\n\ttext-decoration: underline solid white 2px;\r\n}\r\n\r\n.post--content img {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n\tmax-width: 100%;\r\n\twidth: auto;\r\n\tmax-height: 600px;\r\n}\r\n\r\n.post--content p {\r\n\tline-height: 26px;\t\r\n}\r\n\r\n.post--content table {\r\n\tmargin: 20px auto;\r\n\ttext-align: center;\r\n\tborder-spacing: 40px 4px;\r\n\tfont-size: 1.1em;\r\n}\r\n\r\n\r\n.post--share-section {\r\n\tjustify-content: flex-end;\r\n\tdisplay: flex;\r\n}\r\n\r\n.post--share-section span {\r\n\tfont-size: .8em;\r\n\topacity: .7;\r\n\tmargin-right: 8px;\r\n}\r\n\r\n.post--share-section div {\r\n\tdisplay: flex;\r\n\tgap: 8px;\r\n}\r\n\r\n.post--share-section a i {\r\n\topacity: .7;\r\n\ttransition: all .26s;\r\n}\r\n\r\n.post--share-section a:hover i {\r\n\topacitY: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"post--title": "blog-post_post--title__weQqf",
	"post--head": "blog-post_post--head__1MCRZ",
	"post--content": "blog-post_post--content__24urQ",
	"post--share-section": "blog-post_post--share-section__1pIqJ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/post.module.css":
false,

/***/ "./styles/blog-post.module.css":
/*!*************************************!*\
  !*** ./styles/blog-post.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./blog-post.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog-post.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./blog-post.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog-post.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./blog-post.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog-post.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/post.module.css":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9ibG9nLXBvc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2Jsb2ctcG9zdC5tb2R1bGUuY3NzP2JkMDkiXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJnZW5lcmF0ZVNoYXJlTGlua3MiLCJ3YW50RnVsbCIsImF1dGhvciIsIlNJVEVfQ09OU1RBTlRTIiwicG9zdExpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsIm5hbWUiLCJ1cmwiLCJzbGljZSIsInVzZUVmZmVjdCIsInNoYXJlTGlua3MiLCJsaW5rc0NvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZCIsImZpbmQiLCJsaW5rIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsImRpc3BsYXkiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcCIsInRhZyIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLDREQUF4QjtBQUVPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQzFCQyxJQUQwQixHQUNQRCxLQURPLENBQzFCQyxJQUQwQjtBQUFBLE1BQ3BCQyxRQURvQixHQUNQRixLQURPLENBQ3BCRSxRQURvQjtBQUFBLE1BRTFCQyxLQUYw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RUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0Esa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQTtBQUNBLE1BQU0sOFRBQTRLO0FBQ2xMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsOFRBQTRLOztBQUV0TTs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNiMmViZDMwODVjMmEyYzFhMTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IE5hdiB9IGZyb20gXCIuL05hdlwiXG5pbXBvcnQgeyBIZWFkQmFzZSB9IGZyb20gXCIuL0hlYWRCYXNlXCJcbmltcG9ydCB7IFZpZXdDb3VudGVyIH0gZnJvbSBcIi4vVmlld0NvdW50ZXJcIlxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCJcbmltcG9ydCB7IFNJVEVfQ09OU1RBTlRTIH0gZnJvbSBcIi4uL2dsb2JhbFwiXG5pbXBvcnQgeyBOb3JtYWxEYXRlRm9ybWF0IH0gZnJvbSBcIi4uL2hlbHBlcnMvb3RoZXJcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvYmxvZy1wb3N0Lm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQUklTTV9USEVNRV9VUkwgPSBcImh0dHBzOi8vdW5wa2cuY29tL3ByaXNtanNAMS4yMy4wL3RoZW1lcy9wcmlzbS10d2lsaWdodC5jc3NcIlxuXG5leHBvcnQgY29uc3QgQmxvZ1Bvc3QgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBtZXRhLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzbHVnLCB0YWdzLCBlc3RSZWFkVGltZSwgZGF0ZUNyZWF0ZWQgfSA9IG1ldGE7XG5cblx0Y29uc3QgZ2VuZXJhdGVTaGFyZUxpbmtzID0gKHdhbnRGdWxsID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBhdXRob3IgPSBTSVRFX0NPTlNUQU5UUy5hdXRob3JcblxuXHRcdGxldCBwb3N0TGluayA9IFwiXCI7XG5cdFx0aWYgKHdhbnRGdWxsKSB7XG5cdFx0XHRwb3N0TGluayA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXVxuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiVHdpdHRlclwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3d3dy50d2l0dGVyLmNvbS9zaGFyZT90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfSZ1cmw9JHtwb3N0TGlua30mdmlhPSR7YXV0aG9yLnNsaWNlKDEpfWBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiV2hhdHNBcHBcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93YS5tZS8/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0uIFJlYWQgYXQgJHtwb3N0TGlua31gXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBzaGFyZUxpbmtzID0gZ2VuZXJhdGVTaGFyZUxpbmtzKHRydWUpXG5cdFx0Y29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3Qtc2hhcmUtbGlua3NcIilcblxuXHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmtzQ29udGFpbmVyLmNoaWxkcmVuKSB7XG5cdFx0XHRjaGlsZC5ocmVmID0gc2hhcmVMaW5rcy5maW5kKGxpbmsgPT4gbGluay5uYW1lID09PSBjaGlsZC50aXRsZSkudXJsXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YCR7dGl0bGV9IC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHR7LyogRm9yIGljb25zICovfVxuXHRcdFx0XHQ8bGluayBkZWZlclxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMy9jc3MvYWxsLmNzc1wiXG5cdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LVNaWHhYNHdoSjc5L2dFcndjT1lmK3pXTGVKZFkvcXB1cUM0Y0FhOXJPR1VzdFBvbXRxcHVOV1Q5d2RQRW4yZmtcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG5cblx0XHRcdFx0ey8qIEZwciBzeW50YXggaGlnaGxpZ2h0aW5nICovfVxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17UFJJU01fVEhFTUVfVVJMfSAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8TmF2IC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aXRsZVwiXX0+e3RpdGxlfTwvaDI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWhlYWRcIl19PlxuXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aW1lXCJdfT5cblx0XHRcdFx0XHRcdHtOb3JtYWxEYXRlRm9ybWF0LmZvcm1hdChkYXRlQ3JlYXRlZCl9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNCwgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcgfX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57ZXN0UmVhZFRpbWV9IG1pbiByZWFkPC9zcGFuPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt0YWdzLm1hcCh0YWcgPT4gPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZ1wiPnt0YWd9PC9zcGFuPil9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsvKiA8Vmlld0NvdW50ZXIgc2x1Zz17c2x1Z30gLz4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tY29udGVudFwiXX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIFRPRE8gYWRkIGEgXCJnaXZlIHlvdXIgZmVlZGJhY2tcIiBzZWN0aW9uICovfVxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1zaGFyZS1zZWN0aW9uXCJdfT5cblx0XHRcdFx0XHQ8c3Bhbj5TaGFyZSB0aGlzIGFydGljbGUgb248L3NwYW4+XG5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwicG9zdC1zaGFyZS1saW5rc1wiPlxuXHRcdFx0XHRcdFx0e2dlbmVyYXRlU2hhcmVMaW5rcyhmYWxzZSkubWFwKGxpbmsgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPGEga2V5PXtsaW5rLm5hbWV9IGNsYXNzTmFtZT1cInJlc2V0XCIgdGl0bGU9e2xpbmsubmFtZX0gaHJlZj17bGluay51cmx9PlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke2xpbmsubmFtZS50b0xvd2VyQ2FzZSgpfWB9PjwvaT5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcblxufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ibG9nLXBvc3RfcG9zdC0tdGl0bGVfX3dlUXFmIHtcXHJcXG5cXHRmb250LXNpemU6IDEuN2VtO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLWhlYWRfXzFNQ1JaIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRvcGFjaXR5OiAuOTtcXHJcXG5cXHRmb250LXNpemU6IC44ZW07XFxyXFxufVxcclxcblxcclxcbi8qIFNvbWUgb2YgdGhlIHN0eWxlcyBoYXZlIGJlZW4gbW92ZWQgdG8gZ2xvYmFsICovXFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1jb250ZW50X18yNHVyUSB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1jb250ZW50X18yNHVyUSBhIHtcXHJcXG5cXHQtLWNvbG9yOiAjNjBhNWZhO1xcclxcblxcdC0taG92ZXItY29sb3I6ICMyNTYzZWI7XFxyXFxuXFx0XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAuMXM7XFxyXFxufVxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0tY29udGVudF9fMjR1clEgYTpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1jb250ZW50X18yNHVyUSBzdHJvbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgc29saWQgd2hpdGUgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLWNvbnRlbnRfXzI0dXJRIGltZyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdHdpZHRoOiBhdXRvO1xcclxcblxcdG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLWNvbnRlbnRfXzI0dXJRIHAge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyNnB4O1xcdFxcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLWNvbnRlbnRfXzI0dXJRIHRhYmxlIHtcXHJcXG5cXHRtYXJnaW46IDIwcHggYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDQwcHggNHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0tc2hhcmUtc2VjdGlvbl9fMXBJcUoge1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1zaGFyZS1zZWN0aW9uX18xcElxSiBzcGFuIHtcXHJcXG5cXHRmb250LXNpemU6IC44ZW07XFxyXFxuXFx0b3BhY2l0eTogLjc7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0tc2hhcmUtc2VjdGlvbl9fMXBJcUogZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdyaWQtZ2FwOiA4cHg7XFxyXFxuXFx0Z2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0tc2hhcmUtc2VjdGlvbl9fMXBJcUogYSBpIHtcXHJcXG5cXHRvcGFjaXR5OiAuNztcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgLjI2cztcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1zaGFyZS1zZWN0aW9uX18xcElxSiBhOmhvdmVyIGkge1xcclxcblxcdG9wYWNpdFk6IDE7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvYmxvZy1wb3N0Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUEsaURBQWlEOztBQUVqRDtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsc0JBQXNCOztDQUV0QixtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDBDQUEwQztBQUMzQzs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixnQkFBZ0I7QUFDakI7OztBQUdBO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQVE7Q0FBUixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsVUFBVTtBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3N0LS10aXRsZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjdlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuXFx0bWFyZ2luLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtLWhlYWQge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdG9wYWNpdHk6IC45O1xcclxcblxcdGZvbnQtc2l6ZTogLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU29tZSBvZiB0aGUgc3R5bGVzIGhhdmUgYmVlbiBtb3ZlZCB0byBnbG9iYWwgKi9cXHJcXG5cXHJcXG4ucG9zdC0tY29udGVudCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtLWNvbnRlbnQgYSB7XFxyXFxuXFx0LS1jb2xvcjogIzYwYTVmYTtcXHJcXG5cXHQtLWhvdmVyLWNvbG9yOiAjMjU2M2ViO1xcclxcblxcdFxcclxcblxcdGNvbG9yOiB2YXIoLS1jb2xvcik7XFxyXFxuXFx0dHJhbnNpdGlvbjogY29sb3IgLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tY29udGVudCBhOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tY29udGVudCBzdHJvbmcge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgc29saWQgd2hpdGUgMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tY29udGVudCBpbWcge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHR3aWR0aDogYXV0bztcXHJcXG5cXHRtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtLWNvbnRlbnQgcCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDI2cHg7XFx0XFxyXFxufVxcclxcblxcclxcbi5wb3N0LS1jb250ZW50IHRhYmxlIHtcXHJcXG5cXHRtYXJnaW46IDIwcHggYXV0bztcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDQwcHggNHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS4xZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wb3N0LS1zaGFyZS1zZWN0aW9uIHtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LS1zaGFyZS1zZWN0aW9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogLjhlbTtcXHJcXG5cXHRvcGFjaXR5OiAuNztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtLXNoYXJlLXNlY3Rpb24gZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tc2hhcmUtc2VjdGlvbiBhIGkge1xcclxcblxcdG9wYWNpdHk6IC43O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAuMjZzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tc2hhcmUtc2VjdGlvbiBhOmhvdmVyIGkge1xcclxcblxcdG9wYWNpdFk6IDE7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBvc3QtLXRpdGxlXCI6IFwiYmxvZy1wb3N0X3Bvc3QtLXRpdGxlX193ZVFxZlwiLFxuXHRcInBvc3QtLWhlYWRcIjogXCJibG9nLXBvc3RfcG9zdC0taGVhZF9fMU1DUlpcIixcblx0XCJwb3N0LS1jb250ZW50XCI6IFwiYmxvZy1wb3N0X3Bvc3QtLWNvbnRlbnRfXzI0dXJRXCIsXG5cdFwicG9zdC0tc2hhcmUtc2VjdGlvblwiOiBcImJsb2ctcG9zdF9wb3N0LS1zaGFyZS1zZWN0aW9uX18xcElxSlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vYmxvZy1wb3N0Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2Jsb2ctcG9zdC5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vYmxvZy1wb3N0Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==