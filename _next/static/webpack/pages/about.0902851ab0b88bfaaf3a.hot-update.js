webpackHotUpdate_N_E("pages/about",{

/***/ "./components/SocialLinks.jsx":
/*!************************************!*\
  !*** ./components/SocialLinks.jsx ***!
  \************************************/
/*! exports provided: SocialLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return SocialLinks; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/mnt/c/Projects/blog/components/SocialLinks.jsx",
    _this = undefined;

var SocialLinks = function SocialLinks(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: styles["social-media-icons-container"],
    children: updatedSocialMedia.map(function (s) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "reset",
        href: s.link,
        title: "".concat(s.providerName, " (").concat(s.id, ")"),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fab fa-".concat(s.icon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }, _this)
      }, s.providerName, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }, _this);
};
_c = SocialLinks;

var _c;

$RefreshReg$(_c, "SocialLinks");

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

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Nav, HeadBase, Footer, PostCard, ViewCounter, BlogPost, MDXComponents, SocialLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Nav_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.jsx */ "./components/Nav.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav_jsx__WEBPACK_IMPORTED_MODULE_0__["Nav"]; });

/* harmony import */ var _HeadBase_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadBase.jsx */ "./components/HeadBase.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeadBase", function() { return _HeadBase_jsx__WEBPACK_IMPORTED_MODULE_1__["HeadBase"]; });

/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.jsx */ "./components/Footer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer_jsx__WEBPACK_IMPORTED_MODULE_2__["Footer"]; });

/* harmony import */ var _PostCard_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostCard.jsx */ "./components/PostCard.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return _PostCard_jsx__WEBPACK_IMPORTED_MODULE_3__["PostCard"]; });

/* harmony import */ var _ViewCounter_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewCounter.jsx */ "./components/ViewCounter.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCounter", function() { return _ViewCounter_jsx__WEBPACK_IMPORTED_MODULE_4__["ViewCounter"]; });

/* harmony import */ var _BlogPost_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlogPost.jsx */ "./components/BlogPost.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return _BlogPost_jsx__WEBPACK_IMPORTED_MODULE_5__["BlogPost"]; });

/* harmony import */ var _MDXComponents_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MDXComponents.jsx */ "./components/MDXComponents.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDXComponents", function() { return _MDXComponents_jsx__WEBPACK_IMPORTED_MODULE_6__["MDXComponents"]; });

/* harmony import */ var _SocialLinks_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SocialLinks.jsx */ "./components/SocialLinks.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return _SocialLinks_jsx__WEBPACK_IMPORTED_MODULE_7__["SocialLinks"]; });










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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiU29jaWFsTGlua3MiLCJwcm9wcyIsInN0eWxlcyIsInVwZGF0ZWRTb2NpYWxNZWRpYSIsIm1hcCIsInMiLCJsaW5rIiwicHJvdmlkZXJOYW1lIiwiaWQiLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JDLHNCQUNDO0FBQUssYUFBUyxFQUFFQyxNQUFNLENBQUMsOEJBQUQsQ0FBdEI7QUFBQSxjQUNFQyxrQkFBa0IsQ0FBQ0MsR0FBbkIsQ0FBdUIsVUFBQUMsQ0FBQyxFQUFJO0FBQzVCLDBCQUNDO0FBQUcsaUJBQVMsRUFBQyxPQUFiO0FBQXFCLFlBQUksRUFBRUEsQ0FBQyxDQUFDQyxJQUE3QjtBQUF3RCxhQUFLLFlBQUtELENBQUMsQ0FBQ0UsWUFBUCxlQUF3QkYsQ0FBQyxDQUFDRyxFQUExQixNQUE3RDtBQUFBLCtCQUNDO0FBQUcsbUJBQVMsbUJBQVlILENBQUMsQ0FBQ0ksSUFBZDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUF3Q0osQ0FBQyxDQUFDRSxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFLQSxLQU5BO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0FaTTtLQUFNUCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjA5MDI4NTFhYjBiODhiZmFhZjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU29jaWFsTGlua3MgPSAocHJvcHMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lclwiXX0+XG5cdFx0XHR7dXBkYXRlZFNvY2lhbE1lZGlhLm1hcChzID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJyZXNldFwiIGhyZWY9e3MubGlua30ga2V5PXtzLnByb3ZpZGVyTmFtZX0gdGl0bGU9e2Ake3MucHJvdmlkZXJOYW1lfSAoJHtzLmlkfSlgfT5cblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke3MuaWNvbn1gfT48L2k+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KVxufSIsImV4cG9ydCAqIGZyb20gXCIuL05hdi5qc3hcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9IZWFkQmFzZS5qc3hcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9Gb290ZXIuanN4XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vUG9zdENhcmQuanN4XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vVmlld0NvdW50ZXIuanN4XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vQmxvZ1Bvc3QuanN4XCJcclxuZXhwb3J0ICogZnJvbSBcIi4vTURYQ29tcG9uZW50cy5qc3hcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9Tb2NpYWxMaW5rcy5qc3hcIlxyXG4iXSwic291cmNlUm9vdCI6IiJ9