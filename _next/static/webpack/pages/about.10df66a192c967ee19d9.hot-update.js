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
/* harmony import */ var _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/social-links.module.css */ "./styles/social-links.module.css");
/* harmony import */ var _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "/mnt/c/Projects/blog/components/SocialLinks.jsx",
    _this = undefined;


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
    className: _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["social-media-icons-container"],
    children: updatedSocialMedia.map(function (s) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "reset",
        href: s.link,
        title: "".concat(s.providerName, " (").concat(s.id, ")"),
        children: s.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fab fa-".concat(s.icon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 8
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "sm-icon",
          children: s.shortName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 8
        }, _this)
      }, s.providerName, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qc3giXSwibmFtZXMiOlsiU29jaWFsTGlua3MiLCJwcm9wcyIsImNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiIsImRhdGFBcnIiLCJwcm92aWRlck5hbWUiLCJsaW5rIiwiX19pY29uIiwic2hvcnROYW1lIiwiaWNvbiIsInRvTG93ZXJDYXNlIiwiaWQiLCJzcGxpdCIsInJldmVyc2UiLCJ1cGRhdGVkU29jaWFsTWVkaWEiLCJtYXAiLCJzdHlsZXMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JDLE1BQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdDO0FBQ0Y7QUFDQTtBQUgrQyw2SUFJR0EsT0FKSDtBQUFBLFFBSXRDQyxZQUpzQztBQUFBLFFBSXhCQyxJQUp3QjtBQUFBLFFBSWxCQyxNQUprQjtBQUFBLFFBSVZDLFNBSlU7O0FBTTdDLFdBQU87QUFDTkgsa0JBQVksRUFBWkEsWUFETTtBQUNRQyxVQUFJLEVBQUpBLElBRFI7QUFFTkcsVUFBSSxFQUFFRixNQUFNLEtBQUssSUFBWCxHQUFrQixJQUFsQixHQUF5QkEsTUFBTSxJQUFJRixZQUFZLENBQUNLLFdBQWIsRUFGbkM7QUFHTkMsUUFBRSxFQUFFTCxJQUFJLENBQUNNLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxPQUFoQixHQUEwQixDQUExQixDQUhFO0FBSU5MLGVBQVMsRUFBVEE7QUFKTSxLQUFQO0FBTUEsR0FaRDs7QUFjQSxNQUFNTSxrQkFBa0IsR0FBRyxDQUMxQjtBQUNBLEdBQUMsU0FBRCxFQUFZLHNDQUFaLENBRjBCLEVBRzFCLENBQUMsV0FBRCxFQUFjLHNDQUFkLENBSDBCLEVBSTFCLENBQUMsUUFBRCxFQUFXLHFDQUFYLENBSjBCLEVBSzFCLENBQUMsVUFBRCxFQUFhLDRCQUFiLEVBQTJDLGdCQUEzQyxDQUwwQixFQU0xQixDQUFDLFlBQUQsRUFBZSxpREFBZixFQUFrRSxJQUFsRSxFQUF3RSxJQUF4RSxDQU4wQixFQU96QkMsR0FQeUIsQ0FPckJaLHdCQVBxQixDQUEzQjtBQVNBLHNCQUNDO0FBQUssYUFBUyxFQUFFYSxzRUFBTSxDQUFDLDhCQUFELENBQXRCO0FBQUEsY0FDRUYsa0JBQWtCLENBQUNDLEdBQW5CLENBQXVCLFVBQUFFLENBQUMsRUFBSTtBQUM1QiwwQkFDQztBQUFHLGlCQUFTLEVBQUMsT0FBYjtBQUFxQixZQUFJLEVBQUVBLENBQUMsQ0FBQ1gsSUFBN0I7QUFBd0QsYUFBSyxZQUFLVyxDQUFDLENBQUNaLFlBQVAsZUFBd0JZLENBQUMsQ0FBQ04sRUFBMUIsTUFBN0Q7QUFBQSxrQkFDRU0sQ0FBQyxDQUFDUixJQUFGLGdCQUNBO0FBQUcsbUJBQVMsbUJBQVlRLENBQUMsQ0FBQ1IsSUFBZDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZ0JBRUE7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQUEsb0JBQTJCUSxDQUFDLENBQUNUO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRixTQUF3Q1MsQ0FBQyxDQUFDWixZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFRQSxLQVRBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBY0EsQ0F0Q007S0FBTUosVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4xMGRmNjZhMTkyYzk2N2VlMTlkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NvY2lhbC1saW5rcy5tb2R1bGUuY3NzXCJcbmV4cG9ydCBjb25zdCBTb2NpYWxMaW5rcyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBjcmVhdGVTb2NpYWxNZWRpYUxpbmtPYmogPSAoZGF0YUFycikgPT4ge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Y29uc3QgW3Byb3ZpZGVyTmFtZSwgbGluaywgX19pY29uLCBzaG9ydE5hbWVdID0gZGF0YUFycjtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRwcm92aWRlck5hbWUsIGxpbmssXG5cdFx0XHRpY29uOiBfX2ljb24gPT09IG51bGwgPyBudWxsIDogX19pY29uIHx8IHByb3ZpZGVyTmFtZS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0aWQ6IGxpbmsuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSxcblx0XHRcdHNob3J0TmFtZVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWRTb2NpYWxNZWRpYSA9IFtcblx0XHQvLyBbXCJwcm92aWRlck5hbWVcIiwgXCJwcm9maWxlTGlua1wiLCBcIjxvcHRpb25hbD5pY29uTmFtZVwiXVxuXHRcdFtcIlR3aXR0ZXJcIiwgXCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9pYW1TYWhpdGh5YW5cIl0sXG5cdFx0W1wiSW5zdGFncmFtXCIsIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zYWhpdGh5YW5fXCJdLFxuXHRcdFtcIkdpdEh1YlwiLCBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vc2FoaXRoeWFuZGV2XCJdLFxuXHRcdFtcIlRlbGVncmFtXCIsIFwiaHR0cHM6Ly93d3cudC5tZS9zYWhpdGh5YW5cIiwgXCJ0ZWxlZ3JhbS1wbGFuZVwiXSxcblx0XHRbXCJDb2RlcnNSYW5rXCIsIFwiaHR0cHM6Ly9wcm9maWxlLmNvZGVyc3JhbmsuaW8vdXNlci9zYWhpdGh5YW5kZXZcIiwgbnVsbCwgXCJDUlwiXVxuXHRdLm1hcChjcmVhdGVTb2NpYWxNZWRpYUxpbmtPYmopXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lclwiXX0+XG5cdFx0XHR7dXBkYXRlZFNvY2lhbE1lZGlhLm1hcChzID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJyZXNldFwiIGhyZWY9e3MubGlua30ga2V5PXtzLnByb3ZpZGVyTmFtZX0gdGl0bGU9e2Ake3MucHJvdmlkZXJOYW1lfSAoJHtzLmlkfSlgfT5cblx0XHRcdFx0XHRcdHtzLmljb24gP1xuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtzLmljb259YH0+PC9pPiA6XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInNtLWljb25cIj57cy5zaG9ydE5hbWV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KVxuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdClcbn0iXSwic291cmNlUm9vdCI6IiJ9