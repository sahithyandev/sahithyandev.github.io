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
  var postContentRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
  /**
   * Find the external links and make them open in a new tab.
   */

  var makeLinksExternal = function makeLinksExternal() {
    var aTags = Array.from(document.querySelectorAll('a')).filter(function (aTag) {
      return new URL(aTag.href).origin !== window.location.origin;
    });

    var _iterator = _createForOfIteratorHelper(aTags),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var t = _step.value;
        t.target = '_blank';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

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
    makeLinksExternal();
    var shareLinks = generateShareLinks(true);
    var linksContainer = document.getElementById("post-share-links");

    var _iterator2 = _createForOfIteratorHelper(linksContainer.children),
        _step2;

    try {
      var _loop = function _loop() {
        var child = _step2.value;
        child.href = shareLinks.find(function (link) {
          return link.name === child.title;
        }).url;
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeadBase__WEBPACK_IMPORTED_MODULE_4__["HeadBase"], {
      title: "".concat(title, " - ").concat(_global__WEBPACK_IMPORTED_MODULE_7__["SITE_CONSTANTS"].title),
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
        lineNumber: 72,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: PRISM_THEME_URL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "post-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--title"],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--head"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--time"],
            children: _helpers_other__WEBPACK_IMPORTED_MODULE_8__["NormalDateFormat"].format(dateCreated)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
            lineNumber: 97,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: postContentRef,
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_9___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
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
                lineNumber: 120,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJwb3N0Q29udGVudFJlZiIsImNyZWF0ZVJlZiIsIm1ha2VMaW5rc0V4dGVybmFsIiwiYVRhZ3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWx0ZXIiLCJhVGFnIiwiVVJMIiwiaHJlZiIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwidCIsInRhcmdldCIsImdlbmVyYXRlU2hhcmVMaW5rcyIsIndhbnRGdWxsIiwiYXV0aG9yIiwiU0lURV9DT05TVEFOVFMiLCJwb3N0TGluayIsInNwbGl0IiwibmFtZSIsInVybCIsInNsaWNlIiwidXNlRWZmZWN0Iiwic2hhcmVMaW5rcyIsImxpbmtzQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZCIsImZpbmQiLCJsaW5rIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsIm1hcCIsInRhZyIsImRpc3BsYXkiLCJnYXAiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyw0REFBeEI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDUEQsS0FETyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsUUFEb0IsR0FDUEYsS0FETyxDQUNwQkUsUUFEb0I7QUFBQSxNQUUx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MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIlxuaW1wb3J0IHsgSGVhZEJhc2UgfSBmcm9tIFwiLi9IZWFkQmFzZVwiXG5pbXBvcnQgeyBWaWV3Q291bnRlciB9IGZyb20gXCIuL1ZpZXdDb3VudGVyXCJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgTm9ybWFsRGF0ZUZvcm1hdCB9IGZyb20gXCIuLi9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBSSVNNX1RIRU1FX1VSTCA9IFwiaHR0cHM6Ly91bnBrZy5jb20vcHJpc21qc0AxLjIzLjAvdGhlbWVzL3ByaXNtLXR3aWxpZ2h0LmNzc1wiXG5cbmV4cG9ydCBjb25zdCBCbG9nUG9zdCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG1ldGEsIGNoaWxkcmVuIH0gPSBwcm9wcztcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIHRhZ3MsIGVzdFJlYWRUaW1lLCBkYXRlQ3JlYXRlZCB9ID0gbWV0YTtcblxuXHRjb25zdCBwb3N0Q29udGVudFJlZiA9IGNyZWF0ZVJlZigpXG5cblx0LyoqXG5cdCAqIEZpbmQgdGhlIGV4dGVybmFsIGxpbmtzIGFuZCBtYWtlIHRoZW0gb3BlbiBpbiBhIG5ldyB0YWIuXG5cdCAqL1xuXHRjb25zdCBtYWtlTGlua3NFeHRlcm5hbCA9ICgpID0+IHtcblx0XHRjb25zdCBhVGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpKVxuXHRcdFx0LmZpbHRlcihhVGFnID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBVUkwoYVRhZy5ocmVmKS5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cblx0XHRcdH0pXG5cblx0XHRmb3IgKGxldCB0IG9mIGFUYWdzKSB7XG5cdFx0XHR0LnRhcmdldCA9ICdfYmxhbmsnXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZ2VuZXJhdGVTaGFyZUxpbmtzID0gKHdhbnRGdWxsID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBhdXRob3IgPSBTSVRFX0NPTlNUQU5UUy5hdXRob3JcblxuXHRcdGxldCBwb3N0TGluayA9IFwiXCI7XG5cdFx0aWYgKHdhbnRGdWxsKSB7XG5cdFx0XHRwb3N0TGluayA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXVxuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiVHdpdHRlclwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3d3dy50d2l0dGVyLmNvbS9zaGFyZT90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfSZ1cmw9JHtwb3N0TGlua30mdmlhPSR7YXV0aG9yLnNsaWNlKDEpfWBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiV2hhdHNBcHBcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93YS5tZS8/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0uIFJlYWQgYXQgJHtwb3N0TGlua31gXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRtYWtlTGlua3NFeHRlcm5hbCgpXG5cblx0XHRjb25zdCBzaGFyZUxpbmtzID0gZ2VuZXJhdGVTaGFyZUxpbmtzKHRydWUpXG5cdFx0Y29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3Qtc2hhcmUtbGlua3NcIilcblxuXHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmtzQ29udGFpbmVyLmNoaWxkcmVuKSB7XG5cdFx0XHRjaGlsZC5ocmVmID0gc2hhcmVMaW5rcy5maW5kKGxpbmsgPT4gbGluay5uYW1lID09PSBjaGlsZC50aXRsZSkudXJsXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YCR7dGl0bGV9IC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHR7LyogRm9yIGljb25zICovfVxuXHRcdFx0XHQ8bGluayBkZWZlclxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMy9jc3MvYWxsLmNzc1wiXG5cdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LVNaWHhYNHdoSjc5L2dFcndjT1lmK3pXTGVKZFkvcXB1cUM0Y0FhOXJPR1VzdFBvbXRxcHVOV1Q5d2RQRW4yZmtcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG5cblx0XHRcdFx0ey8qIEZwciBzeW50YXggaGlnaGxpZ2h0aW5nICovfVxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17UFJJU01fVEhFTUVfVVJMfSAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8TmF2IC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aXRsZVwiXX0+e3RpdGxlfTwvaDI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWhlYWRcIl19PlxuXHRcdFx0XHRcdDxkaXY+XG5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tdGltZVwiXX0+XG5cdFx0XHRcdFx0XHRcdHtOb3JtYWxEYXRlRm9ybWF0LmZvcm1hdChkYXRlQ3JlYXRlZCl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt0YWdzLm1hcCh0YWcgPT4gPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZ1wiPnt0YWd9PC9zcGFuPil9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDYgfX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57ZXN0UmVhZFRpbWV9IG1pbiByZWFkPC9zcGFuPlxuXHRcdFx0XHRcdFx0ey8qIDxWaWV3Q291bnRlciBzbHVnPXtzbHVnfSAvPiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0cmVmPXtwb3N0Q29udGVudFJlZn1cblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWNvbnRlbnRcIl19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiBUT0RPIGFkZCBhIFwiZ2l2ZSB5b3VyIGZlZWRiYWNrXCIgc2VjdGlvbiAqL31cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tc2hhcmUtc2VjdGlvblwiXX0+XG5cdFx0XHRcdFx0PHNwYW4+U2hhcmUgdGhpcyBhcnRpY2xlIG9uPC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdiBpZD1cInBvc3Qtc2hhcmUtbGlua3NcIj5cblx0XHRcdFx0XHRcdHtnZW5lcmF0ZVNoYXJlTGlua3MoZmFsc2UpLm1hcChsaW5rID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxhIGtleT17bGluay5uYW1lfSBjbGFzc05hbWU9XCJyZXNldFwiIHRpdGxlPXtsaW5rLm5hbWV9IGhyZWY9e2xpbmsudXJsfT5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtsaW5rLm5hbWUudG9Mb3dlckNhc2UoKX1gfT48L2k+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9