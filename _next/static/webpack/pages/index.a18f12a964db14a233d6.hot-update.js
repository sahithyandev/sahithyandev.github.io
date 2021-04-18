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
    // makeLinksExternal()
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJwb3N0Q29udGVudFJlZiIsImNyZWF0ZVJlZiIsIm1ha2VMaW5rc0V4dGVybmFsIiwiYVRhZ3MiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWx0ZXIiLCJhVGFnIiwiVVJMIiwiaHJlZiIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwidCIsInRhcmdldCIsImdlbmVyYXRlU2hhcmVMaW5rcyIsIndhbnRGdWxsIiwiYXV0aG9yIiwiU0lURV9DT05TVEFOVFMiLCJwb3N0TGluayIsInNwbGl0IiwibmFtZSIsInVybCIsInNsaWNlIiwidXNlRWZmZWN0Iiwic2hhcmVMaW5rcyIsImxpbmtzQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZCIsImZpbmQiLCJsaW5rIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsIm1hcCIsInRhZyIsImRpc3BsYXkiLCJnYXAiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyw0REFBeEI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDUEQsS0FETyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsUUFEb0IsR0FDUEYsS0FETyxDQUNwQkUsUUFEb0I7QUFBQSxNQUUx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dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IGNyZWF0ZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4vTmF2XCJcbmltcG9ydCB7IEhlYWRCYXNlIH0gZnJvbSBcIi4vSGVhZEJhc2VcIlxuaW1wb3J0IHsgVmlld0NvdW50ZXIgfSBmcm9tIFwiLi9WaWV3Q291bnRlclwiXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcbmltcG9ydCB7IE5vcm1hbERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQUklTTV9USEVNRV9VUkwgPSBcImh0dHBzOi8vdW5wa2cuY29tL3ByaXNtanNAMS4yMy4wL3RoZW1lcy9wcmlzbS10d2lsaWdodC5jc3NcIlxuXG5leHBvcnQgY29uc3QgQmxvZ1Bvc3QgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBtZXRhLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzbHVnLCB0YWdzLCBlc3RSZWFkVGltZSwgZGF0ZUNyZWF0ZWQgfSA9IG1ldGE7XG5cblx0Y29uc3QgcG9zdENvbnRlbnRSZWYgPSBjcmVhdGVSZWYoKVxuXG5cdC8qKlxuXHQgKiBGaW5kIHRoZSBleHRlcm5hbCBsaW5rcyBhbmQgbWFrZSB0aGVtIG9wZW4gaW4gYSBuZXcgdGFiLlxuXHQgKi9cblx0Y29uc3QgbWFrZUxpbmtzRXh0ZXJuYWwgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYVRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSlcblx0XHRcdC5maWx0ZXIoYVRhZyA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgVVJMKGFUYWcuaHJlZikub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG5cdFx0XHR9KVxuXG5cdFx0Zm9yIChsZXQgdCBvZiBhVGFncykge1xuXHRcdFx0dC50YXJnZXQgPSAnX2JsYW5rJ1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdlbmVyYXRlU2hhcmVMaW5rcyA9ICh3YW50RnVsbCA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgYXV0aG9yID0gU0lURV9DT05TVEFOVFMuYXV0aG9yXG5cblx0XHRsZXQgcG9zdExpbmsgPSBcIlwiO1xuXHRcdGlmICh3YW50RnVsbCkge1xuXHRcdFx0cG9zdExpbmsgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1cblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlR3aXR0ZXJcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vc2hhcmU/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0mdXJsPSR7cG9zdExpbmt9JnZpYT0ke2F1dGhvci5zbGljZSgxKX1gXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIldoYXRzQXBwXCIsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vd2EubWUvP3RleHQ9JHt0aXRsZX0gYnkgJHthdXRob3J9LiBSZWFkIGF0ICR7cG9zdExpbmt9YFxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gbWFrZUxpbmtzRXh0ZXJuYWwoKVxuXG5cdFx0Y29uc3Qgc2hhcmVMaW5rcyA9IGdlbmVyYXRlU2hhcmVMaW5rcyh0cnVlKVxuXHRcdGNvbnN0IGxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LXNoYXJlLWxpbmtzXCIpXG5cblx0XHRmb3IgKGxldCBjaGlsZCBvZiBsaW5rc0NvbnRhaW5lci5jaGlsZHJlbikge1xuXHRcdFx0Y2hpbGQuaHJlZiA9IHNoYXJlTGlua3MuZmluZChsaW5rID0+IGxpbmsubmFtZSA9PT0gY2hpbGQudGl0bGUpLnVybFxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZEJhc2UgdGl0bGU9e2Ake3RpdGxlfSAtICR7U0lURV9DT05TVEFOVFMudGl0bGV9YH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuXG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0ey8qIEZvciBpY29ucyAqL31cblx0XHRcdFx0PGxpbmsgZGVmZXJcblx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjMvY3NzL2FsbC5jc3NcIlxuXHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1TWlh4WDR3aEo3OS9nRXJ3Y09ZZit6V0xlSmRZL3FwdXFDNGNBYTlyT0dVc3RQb210cXB1TldUOXdkUEVuMmZrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuXG5cdFx0XHRcdHsvKiBGcHIgc3ludGF4IGhpZ2hsaWdodGluZyAqL31cblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e1BSSVNNX1RIRU1FX1VSTH0gLz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PE5hdiAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwicG9zdC1jb250YWluZXJcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tdGl0bGVcIl19Pnt0aXRsZX08L2gyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1oZWFkXCJdfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpbWVcIl19PlxuXHRcdFx0XHRcdFx0XHR7Tm9ybWFsRGF0ZUZvcm1hdC5mb3JtYXQoZGF0ZUNyZWF0ZWQpfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWdzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHR7dGFncy5tYXAodGFnID0+IDxzcGFuIGtleT17dGFnfSBjbGFzc05hbWU9XCJ0YWdcIj57dGFnfTwvc3Bhbj4pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA2IH19PlxuXHRcdFx0XHRcdFx0PHNwYW4+e2VzdFJlYWRUaW1lfSBtaW4gcmVhZDwvc3Bhbj5cblx0XHRcdFx0XHRcdHsvKiA8Vmlld0NvdW50ZXIgc2x1Zz17c2x1Z30gLz4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdHJlZj17cG9zdENvbnRlbnRSZWZ9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1jb250ZW50XCJdfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7LyogVE9ETyBhZGQgYSBcImdpdmUgeW91ciBmZWVkYmFja1wiIHNlY3Rpb24gKi99XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXNoYXJlLXNlY3Rpb25cIl19PlxuXHRcdFx0XHRcdDxzcGFuPlNoYXJlIHRoaXMgYXJ0aWNsZSBvbjwvc3Bhbj5cblxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJwb3N0LXNoYXJlLWxpbmtzXCI+XG5cdFx0XHRcdFx0XHR7Z2VuZXJhdGVTaGFyZUxpbmtzKGZhbHNlKS5tYXAobGluayA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiA8YSBrZXk9e2xpbmsubmFtZX0gY2xhc3NOYW1lPVwicmVzZXRcIiB0aXRsZT17bGluay5uYW1lfSBocmVmPXtsaW5rLnVybH0+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFiIGZhLSR7bGluay5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==