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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJnZW5lcmF0ZVNoYXJlTGlua3MiLCJ3YW50RnVsbCIsImF1dGhvciIsIlNJVEVfQ09OU1RBTlRTIiwicG9zdExpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsIm5hbWUiLCJ1cmwiLCJzbGljZSIsInVzZUVmZmVjdCIsInNoYXJlTGlua3MiLCJsaW5rc0NvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZCIsImZpbmQiLCJsaW5rIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsIm1hcCIsInRhZyIsImRpc3BsYXkiLCJnYXAiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyw0REFBeEI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDUEQsS0FETyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsUUFEb0IsR0FDUEYsS0FETyxDQUNwQkUsUUFEb0I7QUFBQSxNQUUxQkMsS0FGMEIsR0FFbUNGLElBRm5DLENBRTFCRSxLQUYwQjtBQUFBLE1BRW5CQyxXQUZtQixHQUVtQ0gsSUFGbkMsQ0FFbkJHLFdBRm1CO0FBQUEsTUFFTkMsSUFGTSxHQUVtQ0osSUFGbkMsQ0FFTkksSUFGTTtBQUFBLE1BRUFDLElBRkEs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SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBR0EsV0FKQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZELGVBMkRDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzREQ7QUFBQSxrQkFERDtBQWdFQSxDQWpHTTs7R0FBTW5CLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWU0YWE5ZDllOGNkYTBiMWM5MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4vTmF2XCJcbmltcG9ydCB7IEhlYWRCYXNlIH0gZnJvbSBcIi4vSGVhZEJhc2VcIlxuaW1wb3J0IHsgVmlld0NvdW50ZXIgfSBmcm9tIFwiLi9WaWV3Q291bnRlclwiXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcbmltcG9ydCB7IE5vcm1hbERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQUklTTV9USEVNRV9VUkwgPSBcImh0dHBzOi8vdW5wa2cuY29tL3ByaXNtanNAMS4yMy4wL3RoZW1lcy9wcmlzbS10d2lsaWdodC5jc3NcIlxuXG5leHBvcnQgY29uc3QgQmxvZ1Bvc3QgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBtZXRhLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzbHVnLCB0YWdzLCBlc3RSZWFkVGltZSwgZGF0ZUNyZWF0ZWQgfSA9IG1ldGE7XG5cblx0Y29uc3QgZ2VuZXJhdGVTaGFyZUxpbmtzID0gKHdhbnRGdWxsID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBhdXRob3IgPSBTSVRFX0NPTlNUQU5UUy5hdXRob3JcblxuXHRcdGxldCBwb3N0TGluayA9IFwiXCI7XG5cdFx0aWYgKHdhbnRGdWxsKSB7XG5cdFx0XHRwb3N0TGluayA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXVxuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiVHdpdHRlclwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3d3dy50d2l0dGVyLmNvbS9zaGFyZT90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfSZ1cmw9JHtwb3N0TGlua30mdmlhPSR7YXV0aG9yLnNsaWNlKDEpfWBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiV2hhdHNBcHBcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93YS5tZS8/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0uIFJlYWQgYXQgJHtwb3N0TGlua31gXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBzaGFyZUxpbmtzID0gZ2VuZXJhdGVTaGFyZUxpbmtzKHRydWUpXG5cdFx0Y29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3Qtc2hhcmUtbGlua3NcIilcblxuXHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmtzQ29udGFpbmVyLmNoaWxkcmVuKSB7XG5cdFx0XHRjaGlsZC5ocmVmID0gc2hhcmVMaW5rcy5maW5kKGxpbmsgPT4gbGluay5uYW1lID09PSBjaGlsZC50aXRsZSkudXJsXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YCR7dGl0bGV9IC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHR7LyogRm9yIGljb25zICovfVxuXHRcdFx0XHQ8bGluayBkZWZlclxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMy9jc3MvYWxsLmNzc1wiXG5cdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LVNaWHhYNHdoSjc5L2dFcndjT1lmK3pXTGVKZFkvcXB1cUM0Y0FhOXJPR1VzdFBvbXRxcHVOV1Q5d2RQRW4yZmtcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG5cblx0XHRcdFx0ey8qIEZwciBzeW50YXggaGlnaGxpZ2h0aW5nICovfVxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17UFJJU01fVEhFTUVfVVJMfSAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8TmF2IC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aXRsZVwiXX0+e3RpdGxlfTwvaDI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWhlYWRcIl19PlxuXHRcdFx0XHRcdDxkaXY+XG5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tdGltZVwiXX0+XG5cdFx0XHRcdFx0XHRcdHtOb3JtYWxEYXRlRm9ybWF0LmZvcm1hdChkYXRlQ3JlYXRlZCl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt0YWdzLm1hcCh0YWcgPT4gPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZ1wiPnt0YWd9PC9zcGFuPil9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDYgfX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57ZXN0UmVhZFRpbWV9IG1pbiByZWFkPC9zcGFuPlxuXHRcdFx0XHRcdFx0ey8qIDxWaWV3Q291bnRlciBzbHVnPXtzbHVnfSAvPiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1jb250ZW50XCJdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogVE9ETyBhZGQgYSBcImdpdmUgeW91ciBmZWVkYmFja1wiIHNlY3Rpb24gKi99XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXNoYXJlLXNlY3Rpb25cIl19PlxuXHRcdFx0XHRcdDxzcGFuPlNoYXJlIHRoaXMgYXJ0aWNsZSBvbjwvc3Bhbj5cblxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwb3N0LXNoYXJlLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHR7Z2VuZXJhdGVTaGFyZUxpbmtzKGZhbHNlKS5tYXAobGluayA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8YSBrZXk9e2xpbmsubmFtZX0gY2xhc3NOYW1lPVwicmVzZXRcIiB0aXRsZT17bGluay5uYW1lfSBocmVmPXtsaW5rLnVybH0+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFiIGZhLSR7bGluay5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==