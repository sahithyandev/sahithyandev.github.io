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
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _MDXComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MDXComponents */ "./components/MDXComponents.jsx");
/* harmony import */ var _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/social-links.module.css */ "./styles/social-links.module.css");
/* harmony import */ var _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "/mnt/c/Projects/blog/components/SocialLinks.jsx",
    _this = undefined;


var CustomLink = _MDXComponents__WEBPACK_IMPORTED_MODULE_2__["MDXComponents"].CustomLink;

var SocialLinks = function SocialLinks(props) {
  var createSocialMediaLinkObj = function createSocialMediaLinkObj(dataArr) {
    /**
     * @type {string}
     */
    var _dataArr = Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(dataArr, 4),
        providerName = _dataArr[0],
        link = _dataArr[1],
        __icon = _dataArr[2],
        shortName = _dataArr[3];

    return {
      providerName: providerName,
      link: link,
      icon: __icon === null ? null : __icon || providerName.toLowerCase(),
      id: link.split("/").reverse()[0],
      shortName: shortName
    };
  };

  var updatedSocialMedia = [// ["providerName", "profileLink", "<optional>iconName"]
  ["Twitter", "https://www.twitter.com/iamSahithyan"], ["Instagram", "https://www.instagram.com/sahithyan_"], ["GitHub", "https://www.github.com/sahithyandev"], ["Telegram", "https://www.t.me/sahithyan", "telegram-plane"], ["CodersRank", "https://profile.codersrank.io/user/sahithyandev", null, "CR"]].map(createSocialMediaLinkObj);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["social-media-icons-container"],
    children: updatedSocialMedia.map(function (s) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CustomLink, {
        className: "reset",
        href: s.link,
        title: "".concat(s.providerName, " (").concat(s.id, ")"),
        children: s.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fab fa-".concat(s.icon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 8
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["sm-icon"],
          children: s.shortName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 8
        }, _this)
      }, s.providerName, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qc3giXSwibmFtZXMiOlsiQ3VzdG9tTGluayIsIk1EWENvbXBvbmVudHMiLCJTb2NpYWxMaW5rcyIsInByb3BzIiwiY3JlYXRlU29jaWFsTWVkaWFMaW5rT2JqIiwiZGF0YUFyciIsInByb3ZpZGVyTmFtZSIsImxpbmsiLCJfX2ljb24iLCJzaG9ydE5hbWUiLCJpY29uIiwidG9Mb3dlckNhc2UiLCJpZCIsInNwbGl0IiwicmV2ZXJzZSIsInVwZGF0ZWRTb2NpYWxNZWRpYSIsIm1hcCIsInN0eWxlcyIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBRVFBLFUsR0FBZUMsNEQsQ0FBZkQsVTtBQUVSO0FBQ08sSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JDLE1BQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdDO0FBQ0Y7QUFDQTtBQUgrQyw2SUFJR0EsT0FKSDtBQUFBLFFBSXRDQyxZQUpzQztBQUFBLFFBSXhCQyxJQUp3QjtBQUFBLFFBSWxCQyxNQUprQjtBQUFBLFFBSVZDLFNBSlU7O0FBTTdDLFdBQU87QUFDTkgsa0JBQVksRUFBWkEsWUFETTtBQUNRQyxVQUFJLEVBQUpBLElBRFI7QUFFTkcsVUFBSSxFQUFFRixNQUFNLEtBQUssSUFBWCxHQUFrQixJQUFsQixHQUF5QkEsTUFBTSxJQUFJRixZQUFZLENBQUNLLFdBQWIsRUFGbkM7QUFHTkMsUUFBRSxFQUFFTCxJQUFJLENBQUNNLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxPQUFoQixHQUEwQixDQUExQixDQUhFO0FBSU5MLGVBQVMsRUFBVEE7QUFKTSxLQUFQO0FBTUEsR0FaRDs7QUFjQSxNQUFNTSxrQkFBa0IsR0FBRyxDQUMxQjtBQUNBLEdBQUMsU0FBRCxFQUFZLHNDQUFaLENBRjBCLEVBRzFCLENBQUMsV0FBRCxFQUFjLHNDQUFkLENBSDBCLEVBSTFCLENBQUMsUUFBRCxFQUFXLHFDQUFYLENBSjBCLEVBSzFCLENBQUMsVUFBRCxFQUFhLDRCQUFiLEVBQTJDLGdCQUEzQyxDQUwwQixFQU0xQixDQUFDLFlBQUQsRUFBZSxpREFBZixFQUFrRSxJQUFsRSxFQUF3RSxJQUF4RSxDQU4wQixFQU96QkMsR0FQeUIsQ0FPckJaLHdCQVBxQixDQUEzQjtBQVNBLHNCQUNDO0FBQUssYUFBUyxFQUFFYSxzRUFBTSxDQUFDLDhCQUFELENBQXRCO0FBQUEsY0FDRUYsa0JBQWtCLENBQUNDLEdBQW5CLENBQXVCLFVBQUFFLENBQUMsRUFBSTtBQUM1QiwwQkFDQyxxRUFBQyxVQUFEO0FBQVksaUJBQVMsRUFBQyxPQUF0QjtBQUE4QixZQUFJLEVBQUVBLENBQUMsQ0FBQ1gsSUFBdEM7QUFBaUUsYUFBSyxZQUFLVyxDQUFDLENBQUNaLFlBQVAsZUFBd0JZLENBQUMsQ0FBQ04sRUFBMUIsTUFBdEU7QUFBQSxrQkFDRU0sQ0FBQyxDQUFDUixJQUFGLGdCQUNBO0FBQUcsbUJBQVMsbUJBQVlRLENBQUMsQ0FBQ1IsSUFBZDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZ0JBRUE7QUFBTSxtQkFBUyxFQUFFTyxzRUFBTSxDQUFDLFNBQUQsQ0FBdkI7QUFBQSxvQkFBcUNDLENBQUMsQ0FBQ1Q7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLFNBQWlEUyxDQUFDLENBQUNaLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQVFBLEtBVEE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFjQSxDQXRDTTtLQUFNSixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjYyZGVmMjEzNTQ4NGIzMWMwMWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNRFhDb21wb25lbnRzIH0gZnJvbSBcIi4vTURYQ29tcG9uZW50c1wiXG5cbmNvbnN0IHsgQ3VzdG9tTGluayB9ID0gTURYQ29tcG9uZW50c1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc29jaWFsLWxpbmtzLm1vZHVsZS5jc3NcIlxuZXhwb3J0IGNvbnN0IFNvY2lhbExpbmtzID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IGNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiA9IChkYXRhQXJyKSA9PiB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHRjb25zdCBbcHJvdmlkZXJOYW1lLCBsaW5rLCBfX2ljb24sIHNob3J0TmFtZV0gPSBkYXRhQXJyO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGVyTmFtZSwgbGluayxcblx0XHRcdGljb246IF9faWNvbiA9PT0gbnVsbCA/IG51bGwgOiBfX2ljb24gfHwgcHJvdmlkZXJOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRpZDogbGluay5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdLFxuXHRcdFx0c2hvcnROYW1lXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlZFNvY2lhbE1lZGlhID0gW1xuXHRcdC8vIFtcInByb3ZpZGVyTmFtZVwiLCBcInByb2ZpbGVMaW5rXCIsIFwiPG9wdGlvbmFsPmljb25OYW1lXCJdXG5cdFx0W1wiVHdpdHRlclwiLCBcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2lhbVNhaGl0aHlhblwiXSxcblx0XHRbXCJJbnN0YWdyYW1cIiwgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NhaGl0aHlhbl9cIl0sXG5cdFx0W1wiR2l0SHViXCIsIFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9zYWhpdGh5YW5kZXZcIl0sXG5cdFx0W1wiVGVsZWdyYW1cIiwgXCJodHRwczovL3d3dy50Lm1lL3NhaGl0aHlhblwiLCBcInRlbGVncmFtLXBsYW5lXCJdLFxuXHRcdFtcIkNvZGVyc1JhbmtcIiwgXCJodHRwczovL3Byb2ZpbGUuY29kZXJzcmFuay5pby91c2VyL3NhaGl0aHlhbmRldlwiLCBudWxsLCBcIkNSXCJdXG5cdF0ubWFwKGNyZWF0ZVNvY2lhbE1lZGlhTGlua09iailcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyXCJdfT5cblx0XHRcdHt1cGRhdGVkU29jaWFsTWVkaWEubWFwKHMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxDdXN0b21MaW5rIGNsYXNzTmFtZT1cInJlc2V0XCIgaHJlZj17cy5saW5rfSBrZXk9e3MucHJvdmlkZXJOYW1lfSB0aXRsZT17YCR7cy5wcm92aWRlck5hbWV9ICgke3MuaWR9KWB9PlxuXHRcdFx0XHRcdFx0e3MuaWNvbiA/XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke3MuaWNvbn1gfT48L2k+IDpcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJzbS1pY29uXCJdfT57cy5zaG9ydE5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvQ3VzdG9tTGluaz5cblx0XHRcdFx0KVxuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdClcbn0iXSwic291cmNlUm9vdCI6IiJ9