webpackHotUpdate_N_E("pages/posts",{

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/posts.module.css":
/*!*********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/posts.module.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".posts_search-container__2vGYl {\n\tbackground-color: red;\n\tmargin: 14px;\n}", "",{"version":3,"sources":["webpack://styles/posts.module.css"],"names":[],"mappings":"AAAA;CACC,qBAAqB;CACrB,YAAY;AACb","sourcesContent":[".search-container {\n\tbackground-color: red;\n\tmargin: 14px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"search-container": "posts_search-container__2vGYl"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9ibG9nLXBvc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9ibG9nLXBvc3QubW9kdWxlLmNzcz9iZDA5Il0sIm5hbWVzIjpbIlBSSVNNX1RIRU1FX1VSTCIsIkJsb2dQb3N0IiwicHJvcHMiLCJtZXRhIiwiY2hpbGRyZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2x1ZyIsInRhZ3MiLCJlc3RSZWFkVGltZSIsImRhdGVDcmVhdGVkIiwiZ2VuZXJhdGVTaGFyZUxpbmtzIiwid2FudEZ1bGwiLCJhdXRob3IiLCJTSVRFX0NPTlNUQU5UUyIsInBvc3RMaW5rIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJuYW1lIiwidXJsIiwic2xpY2UiLCJ1c2VFZmZlY3QiLCJzaGFyZUxpbmtzIiwibGlua3NDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGQiLCJmaW5kIiwibGluayIsInN0eWxlcyIsIk5vcm1hbERhdGVGb3JtYXQiLCJmb3JtYXQiLCJkaXNwbGF5IiwiZ2FwIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXAiLCJ0YWciLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyw0REFBeEI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDUEQsS0FETyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsUUFE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QyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLG1DQUFtQywwQkFBMEIsaUJBQWlCLEdBQUcsT0FBTyx3RkFBd0YsWUFBWSxXQUFXLDRDQUE0QywwQkFBMEIsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBLFVBQVUsbUJBQU8sQ0FBQyxtTkFBd0c7QUFDMUgsMEJBQTBCLG1CQUFPLENBQUMsOFRBQTRLOztBQUU5TTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSw4VEFBNEs7QUFDbEw7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw4VEFBNEs7O0FBRXRNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuY2IyZWJkMzA4NWMyYTJjMWExMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4vTmF2XCJcbmltcG9ydCB7IEhlYWRCYXNlIH0gZnJvbSBcIi4vSGVhZEJhc2VcIlxuaW1wb3J0IHsgVmlld0NvdW50ZXIgfSBmcm9tIFwiLi9WaWV3Q291bnRlclwiXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcbmltcG9ydCB7IE5vcm1hbERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ibG9nLXBvc3QubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBSSVNNX1RIRU1FX1VSTCA9IFwiaHR0cHM6Ly91bnBrZy5jb20vcHJpc21qc0AxLjIzLjAvdGhlbWVzL3ByaXNtLXR3aWxpZ2h0LmNzc1wiXG5cbmV4cG9ydCBjb25zdCBCbG9nUG9zdCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG1ldGEsIGNoaWxkcmVuIH0gPSBwcm9wcztcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIHRhZ3MsIGVzdFJlYWRUaW1lLCBkYXRlQ3JlYXRlZCB9ID0gbWV0YTtcblxuXHRjb25zdCBnZW5lcmF0ZVNoYXJlTGlua3MgPSAod2FudEZ1bGwgPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IGF1dGhvciA9IFNJVEVfQ09OU1RBTlRTLmF1dGhvclxuXG5cdFx0bGV0IHBvc3RMaW5rID0gXCJcIjtcblx0XHRpZiAod2FudEZ1bGwpIHtcblx0XHRcdHBvc3RMaW5rID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJUd2l0dGVyXCIsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL3NoYXJlP3RleHQ9JHt0aXRsZX0gYnkgJHthdXRob3J9JnVybD0ke3Bvc3RMaW5rfSZ2aWE9JHthdXRob3Iuc2xpY2UoMSl9YFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJXaGF0c0FwcFwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3dhLm1lLz90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfS4gUmVhZCBhdCAke3Bvc3RMaW5rfWBcblx0XHRcdH1cblx0XHRdXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHNoYXJlTGlua3MgPSBnZW5lcmF0ZVNoYXJlTGlua3ModHJ1ZSlcblx0XHRjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1zaGFyZS1saW5rc1wiKVxuXG5cdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGlua3NDb250YWluZXIuY2hpbGRyZW4pIHtcblx0XHRcdGNoaWxkLmhyZWYgPSBzaGFyZUxpbmtzLmZpbmQobGluayA9PiBsaW5rLm5hbWUgPT09IGNoaWxkLnRpdGxlKS51cmxcblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgJHt0aXRsZX0gLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdHsvKiBGb3IgaWNvbnMgKi99XG5cdFx0XHRcdDxsaW5rIGRlZmVyXG5cdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNS4zL2Nzcy9hbGwuY3NzXCJcblx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtU1pYeFg0d2hKNzkvZ0Vyd2NPWWYreldMZUpkWS9xcHVxQzRjQWE5ck9HVXN0UG9tdHFwdU5XVDl3ZFBFbjJma1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblxuXHRcdFx0XHR7LyogRnByIHN5bnRheCBoaWdobGlnaHRpbmcgKi99XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtQUklTTV9USEVNRV9VUkx9IC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxOYXYgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpdGxlXCJdfT57dGl0bGV9PC9oMj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0taGVhZFwiXX0+XG5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpbWVcIl19PlxuXHRcdFx0XHRcdFx0e05vcm1hbERhdGVGb3JtYXQuZm9ybWF0KGRhdGVDcmVhdGVkKX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA0LCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyB9fT5cblx0XHRcdFx0XHRcdDxzcGFuPntlc3RSZWFkVGltZX0gbWluIHJlYWQ8L3NwYW4+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFncy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RhZ3MubWFwKHRhZyA9PiA8c3BhbiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwidGFnXCI+e3RhZ308L3NwYW4+KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0ey8qIDxWaWV3Q291bnRlciBzbHVnPXtzbHVnfSAvPiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1jb250ZW50XCJdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogVE9ETyBhZGQgYSBcImdpdmUgeW91ciBmZWVkYmFja1wiIHNlY3Rpb24gKi99XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXNoYXJlLXNlY3Rpb25cIl19PlxuXHRcdFx0XHRcdDxzcGFuPlNoYXJlIHRoaXMgYXJ0aWNsZSBvbjwvc3Bhbj5cblxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwb3N0LXNoYXJlLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHR7Z2VuZXJhdGVTaGFyZUxpbmtzKGZhbHNlKS5tYXAobGluayA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8YSBrZXk9e2xpbmsubmFtZX0gY2xhc3NOYW1lPVwicmVzZXRcIiB0aXRsZT17bGluay5uYW1lfSBocmVmPXtsaW5rLnVybH0+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFiIGZhLSR7bGluay5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxuXG59IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJsb2ctcG9zdF9wb3N0LS10aXRsZV9fd2VRcWYge1xcclxcblxcdGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcclxcblxcdG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0taGVhZF9fMU1DUloge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdG9wYWNpdHk6IC45O1xcclxcblxcdGZvbnQtc2l6ZTogLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU29tZSBvZiB0aGUgc3R5bGVzIGhhdmUgYmVlbiBtb3ZlZCB0byBnbG9iYWwgKi9cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLWNvbnRlbnRfXzI0dXJRIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLWNvbnRlbnRfXzI0dXJRIGEge1xcclxcblxcdC0tY29sb3I6ICM2MGE1ZmE7XFxyXFxuXFx0LS1ob3Zlci1jb2xvcjogIzI1NjNlYjtcXHJcXG5cXHRcXHJcXG5cXHRjb2xvcjogdmFyKC0tY29sb3IpO1xcclxcblxcdHRyYW5zaXRpb246IGNvbG9yIC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1jb250ZW50X18yNHVyUSBhOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLWNvbnRlbnRfXzI0dXJRIHN0cm9uZyB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZCB3aGl0ZSAycHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0tY29udGVudF9fMjR1clEgaW1nIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0bWF4LWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0tY29udGVudF9fMjR1clEgcCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDI2cHg7XFx0XFxyXFxufVxcclxcblxcclxcbi5ibG9nLXBvc3RfcG9zdC0tY29udGVudF9fMjR1clEgdGFibGUge1xcclxcblxcdG1hcmdpbjogMjBweCBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogNDBweCA0cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1zaGFyZS1zZWN0aW9uX18xcElxSiB7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLXNoYXJlLXNlY3Rpb25fXzFwSXFKIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogLjhlbTtcXHJcXG5cXHRvcGFjaXR5OiAuNztcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1zaGFyZS1zZWN0aW9uX18xcElxSiBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z3JpZC1nYXA6IDhweDtcXHJcXG5cXHRnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2ctcG9zdF9wb3N0LS1zaGFyZS1zZWN0aW9uX18xcElxSiBhIGkge1xcclxcblxcdG9wYWNpdHk6IC43O1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAuMjZzO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvZy1wb3N0X3Bvc3QtLXNoYXJlLXNlY3Rpb25fXzFwSXFKIGE6aG92ZXIgaSB7XFxyXFxuXFx0b3BhY2l0WTogMTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9ibG9nLXBvc3QubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQSxpREFBaUQ7O0FBRWpEO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixzQkFBc0I7O0NBRXRCLG1CQUFtQjtDQUNuQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsMENBQTBDO0FBQzNDOztBQUVBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsV0FBVztDQUNYLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLGdCQUFnQjtBQUNqQjs7O0FBR0E7Q0FDQyx5QkFBeUI7Q0FDekIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBUTtDQUFSLFFBQVE7QUFDVDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvc3QtLXRpdGxlIHtcXHJcXG5cXHRmb250LXNpemU6IDEuN2VtO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0taGVhZCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0b3BhY2l0eTogLjk7XFxyXFxuXFx0Zm9udC1zaXplOiAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTb21lIG9mIHRoZSBzdHlsZXMgaGF2ZSBiZWVuIG1vdmVkIHRvIGdsb2JhbCAqL1xcclxcblxcclxcbi5wb3N0LS1jb250ZW50IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMnB4O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tY29udGVudCBhIHtcXHJcXG5cXHQtLWNvbG9yOiAjNjBhNWZhO1xcclxcblxcdC0taG92ZXItY29sb3I6ICMyNTYzZWI7XFxyXFxuXFx0XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNvbG9yKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAuMXM7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LS1jb250ZW50IGE6aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LS1jb250ZW50IHN0cm9uZyB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBzb2xpZCB3aGl0ZSAycHg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LS1jb250ZW50IGltZyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdHdpZHRoOiBhdXRvO1xcclxcblxcdG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tY29udGVudCBwIHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMjZweDtcXHRcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtLWNvbnRlbnQgdGFibGUge1xcclxcblxcdG1hcmdpbjogMjBweCBhdXRvO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogNDBweCA0cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBvc3QtLXNoYXJlLXNlY3Rpb24ge1xcclxcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvc3QtLXNoYXJlLXNlY3Rpb24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAuOGVtO1xcclxcblxcdG9wYWNpdHk6IC43O1xcclxcblxcdG1hcmdpbi1yaWdodDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9zdC0tc2hhcmUtc2VjdGlvbiBkaXYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LS1zaGFyZS1zZWN0aW9uIGEgaSB7XFxyXFxuXFx0b3BhY2l0eTogLjc7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIC4yNnM7XFxyXFxufVxcclxcblxcclxcbi5wb3N0LS1zaGFyZS1zZWN0aW9uIGE6aG92ZXIgaSB7XFxyXFxuXFx0b3BhY2l0WTogMTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicG9zdC0tdGl0bGVcIjogXCJibG9nLXBvc3RfcG9zdC0tdGl0bGVfX3dlUXFmXCIsXG5cdFwicG9zdC0taGVhZFwiOiBcImJsb2ctcG9zdF9wb3N0LS1oZWFkX18xTUNSWlwiLFxuXHRcInBvc3QtLWNvbnRlbnRcIjogXCJibG9nLXBvc3RfcG9zdC0tY29udGVudF9fMjR1clFcIixcblx0XCJwb3N0LS1zaGFyZS1zZWN0aW9uXCI6IFwiYmxvZy1wb3N0X3Bvc3QtLXNoYXJlLXNlY3Rpb25fXzFwSXFKXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvc3RzX3NlYXJjaC1jb250YWluZXJfXzJ2R1lsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0bWFyZ2luOiAxNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsWUFBWTtBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWFyY2gtY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0bWFyZ2luOiAxNHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzZWFyY2gtY29udGFpbmVyXCI6IFwicG9zdHNfc2VhcmNoLWNvbnRhaW5lcl9fMnZHWWxcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2Jsb2ctcG9zdC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9ibG9nLXBvc3QubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2Jsb2ctcG9zdC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=