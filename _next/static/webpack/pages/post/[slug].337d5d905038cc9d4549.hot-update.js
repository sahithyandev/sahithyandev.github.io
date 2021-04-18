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
            flexDirection: 'column'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJnZW5lcmF0ZVNoYXJlTGlua3MiLCJ3YW50RnVsbCIsImF1dGhvciIsIlNJVEVfQ09OU1RBTlRTIiwicG9zdExpbmsiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsIm5hbWUiLCJ1cmwiLCJzbGljZSIsInVzZUVmZmVjdCIsInNoYXJlTGlua3MiLCJsaW5rc0NvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZCIsImZpbmQiLCJsaW5rIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsImRpc3BsYXkiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwibWFwIiwidGFnIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxlQUFlLEdBQUcsNERBQXhCO0FBRU8sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDMUJDLElBRDBCLEdBQ1BELEtBRE8sQ0FDMUJDLElBRDBCO0FBQUEsTUFDcEJDLFFBRG9CLEdBQ1BGLEtBRE8sQ0FDcEJFLFFBRG9CO0FBQUEsTUFFMUJDLEtBRjBCLEdBRW1DRixJQUZuQyxDQUUxQkUsS0FGMEI7QUFBQSxNQUVuQkMsV0FGbUIsR0FFbUNILElBRm5DLENBRW5CRyxXQUZtQjtBQUFBLE1BRU5DLElBRk0sR0FFbUNKLElBRm5DLENBRU5JLElBRk07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QUNWLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUdBLFdBSkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRCxlQTBEQyxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUREO0FBQUEsa0JBREQ7QUErREEsQ0FoR007O0dBQU1uQixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjMzN2Q1ZDkwNTAzOGNjOWQ0NTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IE5hdiB9IGZyb20gXCIuL05hdlwiXG5pbXBvcnQgeyBIZWFkQmFzZSB9IGZyb20gXCIuL0hlYWRCYXNlXCJcbmltcG9ydCB7IFZpZXdDb3VudGVyIH0gZnJvbSBcIi4vVmlld0NvdW50ZXJcIlxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCJcbmltcG9ydCB7IFNJVEVfQ09OU1RBTlRTIH0gZnJvbSBcIi4uL2dsb2JhbFwiXG5pbXBvcnQgeyBOb3JtYWxEYXRlRm9ybWF0IH0gZnJvbSBcIi4uL2hlbHBlcnMvb3RoZXJcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzXCJcblxuY29uc3QgUFJJU01fVEhFTUVfVVJMID0gXCJodHRwczovL3VucGtnLmNvbS9wcmlzbWpzQDEuMjMuMC90aGVtZXMvcHJpc20tdHdpbGlnaHQuY3NzXCJcblxuZXhwb3J0IGNvbnN0IEJsb2dQb3N0ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbWV0YSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2x1ZywgdGFncywgZXN0UmVhZFRpbWUsIGRhdGVDcmVhdGVkIH0gPSBtZXRhO1xuXG5cdGNvbnN0IGdlbmVyYXRlU2hhcmVMaW5rcyA9ICh3YW50RnVsbCA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgYXV0aG9yID0gU0lURV9DT05TVEFOVFMuYXV0aG9yXG5cblx0XHRsZXQgcG9zdExpbmsgPSBcIlwiO1xuXHRcdGlmICh3YW50RnVsbCkge1xuXHRcdFx0cG9zdExpbmsgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1cblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlR3aXR0ZXJcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vc2hhcmU/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0mdXJsPSR7cG9zdExpbmt9JnZpYT0ke2F1dGhvci5zbGljZSgxKX1gXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIldoYXRzQXBwXCIsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vd2EubWUvP3RleHQ9JHt0aXRsZX0gYnkgJHthdXRob3J9LiBSZWFkIGF0ICR7cG9zdExpbmt9YFxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3Qgc2hhcmVMaW5rcyA9IGdlbmVyYXRlU2hhcmVMaW5rcyh0cnVlKVxuXHRcdGNvbnN0IGxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LXNoYXJlLWxpbmtzXCIpXG5cblx0XHRmb3IgKGxldCBjaGlsZCBvZiBsaW5rc0NvbnRhaW5lci5jaGlsZHJlbikge1xuXHRcdFx0Y2hpbGQuaHJlZiA9IHNoYXJlTGlua3MuZmluZChsaW5rID0+IGxpbmsubmFtZSA9PT0gY2hpbGQudGl0bGUpLnVybFxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZEJhc2UgdGl0bGU9e2Ake3RpdGxlfSAtICR7U0lURV9DT05TVEFOVFMudGl0bGV9YH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuXG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0ey8qIEZvciBpY29ucyAqL31cblx0XHRcdFx0PGxpbmsgZGVmZXJcblx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjMvY3NzL2FsbC5jc3NcIlxuXHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1TWlh4WDR3aEo3OS9nRXJ3Y09ZZit6V0xlSmRZL3FwdXFDNGNBYTlyT0dVc3RQb210cXB1TldUOXdkUEVuMmZrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuXG5cdFx0XHRcdHsvKiBGcHIgc3ludGF4IGhpZ2hsaWdodGluZyAqL31cblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e1BSSVNNX1RIRU1FX1VSTH0gLz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PE5hdiAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwicG9zdC1jb250YWluZXJcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tdGl0bGVcIl19Pnt0aXRsZX08L2gyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1oZWFkXCJdfT5cblxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tdGltZVwiXX0+XG5cdFx0XHRcdFx0XHR7Tm9ybWFsRGF0ZUZvcm1hdC5mb3JtYXQoZGF0ZUNyZWF0ZWQpfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDQsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuXHRcdFx0XHRcdFx0PHNwYW4+e2VzdFJlYWRUaW1lfSBtaW4gcmVhZDwvc3Bhbj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWdzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHR7dGFncy5tYXAodGFnID0+IDxzcGFuIGtleT17dGFnfSBjbGFzc05hbWU9XCJ0YWdcIj57dGFnfTwvc3Bhbj4pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7LyogPFZpZXdDb3VudGVyIHNsdWc9e3NsdWd9IC8+ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWNvbnRlbnRcIl19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiBUT0RPIGFkZCBhIFwiZ2l2ZSB5b3VyIGZlZWRiYWNrXCIgc2VjdGlvbiAqL31cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tc2hhcmUtc2VjdGlvblwiXX0+XG5cdFx0XHRcdFx0PHNwYW4+U2hhcmUgdGhpcyBhcnRpY2xlIG9uPC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdiBpZD1cInBvc3Qtc2hhcmUtbGlua3NcIj5cblx0XHRcdFx0XHRcdHtnZW5lcmF0ZVNoYXJlTGlua3MoZmFsc2UpLm1hcChsaW5rID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxhIGtleT17bGluay5uYW1lfSBjbGFzc05hbWU9XCJyZXNldFwiIHRpdGxlPXtsaW5rLm5hbWV9IGhyZWY9e2xpbmsudXJsfT5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtsaW5rLm5hbWUudG9Mb3dlckNhc2UoKX1gfT48L2k+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9