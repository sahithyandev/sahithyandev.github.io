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
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/post.module.css */ "./styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_9__);



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
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--title"],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--head"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--time"],
            children: _helpers_other__WEBPACK_IMPORTED_MODULE_8__["NormalDateFormat"].format(dateCreated)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            gap: 6
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [estReadTime, " min read"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
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
                lineNumber: 101,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJnZW5lcmF0ZVNoYXJlTGlua3MiLCJ3YW50RnVsbCIsImF1dGhvciIsIlNJVEVfQ09OU1RBTlRTIiwicG9zdExpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsIm5hbWUiLCJ1cmwiLCJzbGljZSIsInVzZUVmZmVjdCIsInNoYXJlTGlua3MiLCJsaW5rc0NvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZCIsImZpbmQiLCJsaW5rIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsIm1hcCIsInRhZyIsImRpc3BsYXkiLCJnYXAiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyw0REFBeEI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDUEQsS0FETyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsUUFEb0IsR0FDUEYsS0FETyxDQUNwQkUsUUFEb0I7QUFBQSxNQUUxQkMsS0FGMEIsR0FFbUNGLElBRm5DLENBRTFCRSxLQUYwQjtBQUFBLE1BRW5CQyxXQUZtQixHQUVtQ0gsSUFGbkMsQ0FFbkJHLFdBRm1CO0FBQUEsTUFFTkMsSUFGTSxHQUVtQ0osSUFGbkMsQ0FFTkksSUFGTTtBQUFBLE1BRUFDLElBRkEs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SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBR0EsV0FKQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZELGVBMkRDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzREQ7QUFBQSxrQkFERDtBQWdFQSxDQWpHTTs7R0FBTW5CLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuYzRmMjA1NWM2MTdlY2Q2ZGMwMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIlxuaW1wb3J0IHsgSGVhZEJhc2UgfSBmcm9tIFwiLi9IZWFkQmFzZVwiXG5pbXBvcnQgeyBWaWV3Q291bnRlciB9IGZyb20gXCIuL1ZpZXdDb3VudGVyXCJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgTm9ybWFsRGF0ZUZvcm1hdCB9IGZyb20gXCIuLi9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBSSVNNX1RIRU1FX1VSTCA9IFwiaHR0cHM6Ly91bnBrZy5jb20vcHJpc21qc0AxLjIzLjAvdGhlbWVzL3ByaXNtLXR3aWxpZ2h0LmNzc1wiXG5cbmV4cG9ydCBjb25zdCBCbG9nUG9zdCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG1ldGEsIGNoaWxkcmVuIH0gPSBwcm9wcztcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIHRhZ3MsIGVzdFJlYWRUaW1lLCBkYXRlQ3JlYXRlZCB9ID0gbWV0YTtcblxuXHRjb25zdCBnZW5lcmF0ZVNoYXJlTGlua3MgPSAod2FudEZ1bGwgPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IGF1dGhvciA9IFNJVEVfQ09OU1RBTlRTLmF1dGhvclxuXG5cdFx0bGV0IHBvc3RMaW5rID0gXCJcIjtcblx0XHRpZiAod2FudEZ1bGwpIHtcblx0XHRcdHBvc3RMaW5rID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJUd2l0dGVyXCIsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL3NoYXJlP3RleHQ9JHt0aXRsZX0gYnkgJHthdXRob3J9JnVybD0ke3Bvc3RMaW5rfSZ2aWE9JHthdXRob3Iuc2xpY2UoMSl9YFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJXaGF0c0FwcFwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3dhLm1lLz90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfS4gUmVhZCBhdCAke3Bvc3RMaW5rfWBcblx0XHRcdH1cblx0XHRdXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHNoYXJlTGlua3MgPSBnZW5lcmF0ZVNoYXJlTGlua3ModHJ1ZSlcblx0XHRjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1zaGFyZS1saW5rc1wiKVxuXG5cdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGlua3NDb250YWluZXIuY2hpbGRyZW4pIHtcblx0XHRcdGNoaWxkLmhyZWYgPSBzaGFyZUxpbmtzLmZpbmQobGluayA9PiBsaW5rLm5hbWUgPT09IGNoaWxkLnRpdGxlKS51cmxcblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgJHt0aXRsZX0gLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdHsvKiBGb3IgaWNvbnMgKi99XG5cdFx0XHRcdDxsaW5rIGRlZmVyXG5cdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNS4zL2Nzcy9hbGwuY3NzXCJcblx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtU1pYeFg0d2hKNzkvZ0Vyd2NPWWYreldMZUpkWS9xcHVxQzRjQWE5ck9HVXN0UG9tdHFwdU5XVDl3ZFBFbjJma1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblxuXHRcdFx0XHR7LyogRnByIHN5bnRheCBoaWdobGlnaHRpbmcgKi99XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtQUklTTV9USEVNRV9VUkx9IC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxOYXYgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpdGxlXCJdfT57dGl0bGV9PC9oMj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0taGVhZFwiXX0+XG5cdFx0XHRcdFx0PGRpdj5cblxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aW1lXCJdfT5cblx0XHRcdFx0XHRcdFx0e05vcm1hbERhdGVGb3JtYXQuZm9ybWF0KGRhdGVDcmVhdGVkKX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFncy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RhZ3MubWFwKHRhZyA9PiA8c3BhbiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwidGFnXCI+e3RhZ308L3NwYW4+KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiB9fT5cblx0XHRcdFx0XHRcdDxzcGFuPntlc3RSZWFkVGltZX0gbWluIHJlYWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7LyogPFZpZXdDb3VudGVyIHNsdWc9e3NsdWd9IC8+ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWNvbnRlbnRcIl19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiBUT0RPIGFkZCBhIFwiZ2l2ZSB5b3VyIGZlZWRiYWNrXCIgc2VjdGlvbiAqL31cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tc2hhcmUtc2VjdGlvblwiXX0+XG5cdFx0XHRcdFx0PHNwYW4+U2hhcmUgdGhpcyBhcnRpY2xlIG9uPC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdiBpZD1cInBvc3Qtc2hhcmUtbGlua3NcIj5cblx0XHRcdFx0XHRcdHtnZW5lcmF0ZVNoYXJlTGlua3MoZmFsc2UpLm1hcChsaW5rID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxhIGtleT17bGluay5uYW1lfSBjbGFzc05hbWU9XCJyZXNldFwiIHRpdGxlPXtsaW5rLm5hbWV9IGhyZWY9e2xpbmsudXJsfT5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtsaW5rLm5hbWUudG9Mb3dlckNhc2UoKX1gfT48L2k+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9