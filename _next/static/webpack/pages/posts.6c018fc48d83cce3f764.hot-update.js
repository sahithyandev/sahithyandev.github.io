webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts.jsx":
/*!*************************!*\
  !*** ./pages/posts.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/posts.module.css */ "./styles/posts.module.css");
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "/mnt/c/Projects/blog/pages/posts.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var PostsPage = function PostsPage(_ref) {
  _s();

  var _posts = _ref._posts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Array.from(_posts)),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchString = _useState2[0],
      setSearchString = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeadBase"], {
      title: "Posts - ".concat(_global__WEBPACK_IMPORTED_MODULE_4__["SITE_CONSTANTS"].title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: ["Posts ", searchString]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["search-container"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["search-input"],
          placeholder: "Search articles",
          onChange: setSearchString
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: posts.map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 26
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(PostsPage, "mz1ibBCxUwupy7WvpQcrdo0+ZZg=");

_c = PostsPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PostsPage);

var _c;

$RefreshReg$(_c, "PostsPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsIl9wb3N0cyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmcm9tIiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaFN0cmluZyIsInNldFNlYXJjaFN0cmluZyIsIlNJVEVfQ09OU1RBTlRTIiwidGl0bGUiLCJzdHlsZXMiLCJtYXAiLCJfcG9zdCIsIm1ldGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFOLENBQVdILE1BQVgsQ0FBRCxDQUREO0FBQUEsTUFDMUJJLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUFBLG1CQUVPSixzREFBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRTFCSyxZQUYwQjtBQUFBLE1BRVpDLGVBRlk7O0FBSWpDLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsb0RBQUQ7QUFBVSxXQUFLLG9CQUFhQyxzREFBYyxDQUFDQyxLQUE1QjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUdDLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRCxlQUtDO0FBQUEsOEJBQ0M7QUFBQSw2QkFBV0gsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQsZUFLQztBQUFLLGlCQUFTLEVBQUVJLCtEQUFNLENBQUMsa0JBQUQsQ0FBdEI7QUFBQSwrQkFDQztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUVBLCtEQUFNLENBQUMsY0FBRCxDQUFwQztBQUFzRCxxQkFBVyxFQUFDLGlCQUFsRTtBQUFvRixrQkFBUSxFQUFFSDtBQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBU0M7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0JBQ0VILEtBQUssQ0FBQ08sR0FBTixDQUFVLFVBQUFDLEtBQUs7QUFBQSw4QkFBSSxxRUFBQyxvREFBRCxvQkFBcUNBLEtBQUssQ0FBQ0MsSUFBM0MsR0FBZUQsS0FBSyxDQUFDQyxJQUFOLENBQVdKLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQUFmO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxELGVBbUJDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkQ7QUFBQSxrQkFERDtBQXVCQSxDQTNCRDs7R0FBTVYsUzs7S0FBQUEsUzs7QUFzQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLjZjMDE4ZmM0OGQ4M2NjZTNmNzY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IEhlYWRCYXNlLCBOYXYsIEZvb3RlciwgUG9zdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9oZWxwZXJzL3Bvc3RcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQb3N0c1BhZ2UgPSAoeyBfcG9zdHMgfSkgPT4ge1xuXHRjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKEFycmF5LmZyb20oX3Bvc3RzKSlcblx0Y29uc3QgW3NlYXJjaFN0cmluZywgc2V0U2VhcmNoU3RyaW5nXSA9IHVzZVN0YXRlKFwiXCIpXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgUG9zdHMgLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IC8+XG5cblx0XHRcdDxOYXYgLz5cblxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxoMj5Qb3N0cyB7c2VhcmNoU3RyaW5nfTwvaDI+XG5cblx0XHRcdFx0PHA+SGVyZSBhcmUgdGhlIGFydGljbGVzIEkgd3JvdGUgYmVmb3JlLjwvcD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWNvbnRhaW5lclwiXX0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtaW5wdXRcIl19IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFydGljbGVzXCIgb25DaGFuZ2U9e3NldFNlYXJjaFN0cmluZ30gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7cG9zdHMubWFwKF9wb3N0ID0+IDxQb3N0Q2FyZCBrZXk9e19wb3N0Lm1ldGEudGl0bGV9IHsuLi5fcG9zdC5tZXRhfSAvPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0X3Bvc3RzOiBnZXRBbGxQb3N0cygpXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==