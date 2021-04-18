webpackHotUpdate_N_E("pages/post/[slug]",{

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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--time"],
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
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--content"],
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
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--share-section"],
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJnZW5lcmF0ZVNoYXJlTGlua3MiLCJ3YW50RnVsbCIsImF1dGhvciIsIlNJVEVfQ09OU1RBTlRTIiwicG9zdExpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsIm5hbWUiLCJ1cmwiLCJzbGljZSIsInVzZUVmZmVjdCIsInNoYXJlTGlua3MiLCJsaW5rc0NvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZCIsImZpbmQiLCJsaW5rIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsImRpc3BsYXkiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcCIsInRhZyIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLDREQUF4QjtBQUVPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQzFCQyxJQUQwQixHQUNQRCxLQURPLENBQzFCQyxJQUQwQjtBQUFBLE1BQ3BCQyxRQURvQixHQUNQRixLQURPLENBQ3BCRSxRQURvQjtBQUFBLE1BRTFCQyxLQUYwQixHQUVtQ0YsSUFGbkMsQ0FFMUJFLEtBRjBCO0FBQUEsTUFFbkJDLFdBRm1CLEdBRW1DSCxJQUZuQyxDQUVuQkcsV0FGbUI7QUFBQSxNQUVOQyxJQUZNLEdBRW1DSixJQUZu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QUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sZUFBUVYsSUFBSSxDQUFDVixJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFHQSxXQUpBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkQsZUEwREMscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFERDtBQUFBLGtCQUREO0FBK0RBLENBaEdNOztHQUFNbkIsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5mMjQ4NTlhM2Q5MThhOGZiMzI1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIlxuaW1wb3J0IHsgSGVhZEJhc2UgfSBmcm9tIFwiLi9IZWFkQmFzZVwiXG5pbXBvcnQgeyBWaWV3Q291bnRlciB9IGZyb20gXCIuL1ZpZXdDb3VudGVyXCJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgTm9ybWFsRGF0ZUZvcm1hdCB9IGZyb20gXCIuLi9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBSSVNNX1RIRU1FX1VSTCA9IFwiaHR0cHM6Ly91bnBrZy5jb20vcHJpc21qc0AxLjIzLjAvdGhlbWVzL3ByaXNtLXR3aWxpZ2h0LmNzc1wiXG5cbmV4cG9ydCBjb25zdCBCbG9nUG9zdCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG1ldGEsIGNoaWxkcmVuIH0gPSBwcm9wcztcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIHRhZ3MsIGVzdFJlYWRUaW1lLCBkYXRlQ3JlYXRlZCB9ID0gbWV0YTtcblxuXHRjb25zdCBnZW5lcmF0ZVNoYXJlTGlua3MgPSAod2FudEZ1bGwgPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IGF1dGhvciA9IFNJVEVfQ09OU1RBTlRTLmF1dGhvclxuXG5cdFx0bGV0IHBvc3RMaW5rID0gXCJcIjtcblx0XHRpZiAod2FudEZ1bGwpIHtcblx0XHRcdHBvc3RMaW5rID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJUd2l0dGVyXCIsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL3NoYXJlP3RleHQ9JHt0aXRsZX0gYnkgJHthdXRob3J9JnVybD0ke3Bvc3RMaW5rfSZ2aWE9JHthdXRob3Iuc2xpY2UoMSl9YFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJXaGF0c0FwcFwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3dhLm1lLz90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfS4gUmVhZCBhdCAke3Bvc3RMaW5rfWBcblx0XHRcdH1cblx0XHRdXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IHNoYXJlTGlua3MgPSBnZW5lcmF0ZVNoYXJlTGlua3ModHJ1ZSlcblx0XHRjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1zaGFyZS1saW5rc1wiKVxuXG5cdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGlua3NDb250YWluZXIuY2hpbGRyZW4pIHtcblx0XHRcdGNoaWxkLmhyZWYgPSBzaGFyZUxpbmtzLmZpbmQobGluayA9PiBsaW5rLm5hbWUgPT09IGNoaWxkLnRpdGxlKS51cmxcblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgJHt0aXRsZX0gLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdHsvKiBGb3IgaWNvbnMgKi99XG5cdFx0XHRcdDxsaW5rIGRlZmVyXG5cdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNS4zL2Nzcy9hbGwuY3NzXCJcblx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtU1pYeFg0d2hKNzkvZ0Vyd2NPWWYreldMZUpkWS9xcHVxQzRjQWE5ck9HVXN0UG9tdHFwdU5XVDl3ZFBFbjJma1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblxuXHRcdFx0XHR7LyogRnByIHN5bnRheCBoaWdobGlnaHRpbmcgKi99XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtQUklTTV9USEVNRV9VUkx9IC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxOYXYgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpdGxlXCJdfT57dGl0bGV9PC9oMj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0taGVhZFwiXX0+XG5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpbWVcIl19PlxuXHRcdFx0XHRcdFx0e05vcm1hbERhdGVGb3JtYXQuZm9ybWF0KGRhdGVDcmVhdGVkKX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA0LCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyB9fT5cblx0XHRcdFx0XHRcdDxzcGFuPntlc3RSZWFkVGltZX0gbWluIHJlYWQ8L3NwYW4+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFncy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RhZ3MubWFwKHRhZyA9PiA8c3BhbiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwidGFnXCI+e3RhZ308L3NwYW4+KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0ey8qIDxWaWV3Q291bnRlciBzbHVnPXtzbHVnfSAvPiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1jb250ZW50XCJdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogVE9ETyBhZGQgYSBcImdpdmUgeW91ciBmZWVkYmFja1wiIHNlY3Rpb24gKi99XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXNoYXJlLXNlY3Rpb25cIl19PlxuXHRcdFx0XHRcdDxzcGFuPlNoYXJlIHRoaXMgYXJ0aWNsZSBvbjwvc3Bhbj5cblxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwb3N0LXNoYXJlLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHR7Z2VuZXJhdGVTaGFyZUxpbmtzKGZhbHNlKS5tYXAobGluayA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8YSBrZXk9e2xpbmsubmFtZX0gY2xhc3NOYW1lPVwicmVzZXRcIiB0aXRsZT17bGluay5uYW1lfSBocmVmPXtsaW5rLnVybH0+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFiIGZhLSR7bGluay5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==