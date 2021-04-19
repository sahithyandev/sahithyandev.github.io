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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "/mnt/c/Projects/blog/components/SocialLinks.jsx",
    _this = undefined;


var SocialLinks = function SocialLinks(props) {
  var createSocialMediaLinkObj = function createSocialMediaLinkObj(dataArr) {
    /**
     * @type {string}
     */
    var _dataArr = Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(dataArr, 3),
        providerName = _dataArr[0],
        link = _dataArr[1],
        __icon = _dataArr[2];

    return {
      providerName: providerName,
      link: link,
      icon: __icon || providerName.toLowerCase(),
      id: link.split("/").reverse()[0]
    };
  };

  var updatedSocialMedia = [// ["providerName", "profileLink", "<optional>iconName"]
  ["Twitter", "https://www.twitter.com/iamSahithyan"], ["Instagram", "https://www.instagram.com/sahithyan_"], ["GitHub", "https://www.github.com/sahithyandev"], ["Telegram", "https://www.t.me/sahithyan", "telegram-plane"]].map(createSocialMediaLinkObj);
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
          lineNumber: 30,
          columnNumber: 7
        }, _this)
      }, s.providerName, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qc3giXSwibmFtZXMiOlsiU29jaWFsTGlua3MiLCJwcm9wcyIsImNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiIsImRhdGFBcnIiLCJwcm92aWRlck5hbWUiLCJsaW5rIiwiX19pY29uIiwiaWNvbiIsInRvTG93ZXJDYXNlIiwiaWQiLCJzcGxpdCIsInJldmVyc2UiLCJ1cGRhdGVkU29jaWFsTWVkaWEiLCJtYXAiLCJzdHlsZXMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JDLE1BQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdDO0FBQ0Y7QUFDQTtBQUgrQyw2SUFJUkEsT0FKUTtBQUFBLFFBSXRDQyxZQUpzQztBQUFBLFFBSXhCQyxJQUp3QjtBQUFBLFFBSWxCQyxNQUprQjs7QUFNN0MsV0FBTztBQUNORixrQkFBWSxFQUFaQSxZQURNO0FBQ1FDLFVBQUksRUFBSkEsSUFEUjtBQUVORSxVQUFJLEVBQUVELE1BQU0sSUFBSUYsWUFBWSxDQUFDSSxXQUFiLEVBRlY7QUFHTkMsUUFBRSxFQUFFSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxPQUFoQixHQUEwQixDQUExQjtBQUhFLEtBQVA7QUFLQSxHQVhEOztBQWFBLE1BQU1DLGtCQUFrQixHQUFHLENBQzFCO0FBQ0EsR0FBQyxTQUFELEVBQVksc0NBQVosQ0FGMEIsRUFHMUIsQ0FBQyxXQUFELEVBQWMsc0NBQWQsQ0FIMEIsRUFJMUIsQ0FBQyxRQUFELEVBQVcscUNBQVgsQ0FKMEIsRUFLMUIsQ0FBQyxVQUFELEVBQWEsNEJBQWIsRUFBMkMsZ0JBQTNDLENBTDBCLEVBTXpCQyxHQU55QixDQU1yQlgsd0JBTnFCLENBQTNCO0FBUUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVZLE1BQU0sQ0FBQyw4QkFBRCxDQUF0QjtBQUFBLGNBQ0VGLGtCQUFrQixDQUFDQyxHQUFuQixDQUF1QixVQUFBRSxDQUFDLEVBQUk7QUFDNUIsMEJBQ0M7QUFBRyxpQkFBUyxFQUFDLE9BQWI7QUFBcUIsWUFBSSxFQUFFQSxDQUFDLENBQUNWLElBQTdCO0FBQXdELGFBQUssWUFBS1UsQ0FBQyxDQUFDWCxZQUFQLGVBQXdCVyxDQUFDLENBQUNOLEVBQTFCLE1BQTdEO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxtQkFBWU0sQ0FBQyxDQUFDUixJQUFkO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELFNBQXdDUSxDQUFDLENBQUNYLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUtBLEtBTkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFXQSxDQWpDTTtLQUFNSixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjY3MGQxODNkZDIwMzQ2NjA1NWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBjb25zdCBTb2NpYWxMaW5rcyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBjcmVhdGVTb2NpYWxNZWRpYUxpbmtPYmogPSAoZGF0YUFycikgPT4ge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Y29uc3QgW3Byb3ZpZGVyTmFtZSwgbGluaywgX19pY29uXSA9IGRhdGFBcnI7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZXJOYW1lLCBsaW5rLFxuXHRcdFx0aWNvbjogX19pY29uIHx8IHByb3ZpZGVyTmFtZS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0aWQ6IGxpbmsuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHVwZGF0ZWRTb2NpYWxNZWRpYSA9IFtcblx0XHQvLyBbXCJwcm92aWRlck5hbWVcIiwgXCJwcm9maWxlTGlua1wiLCBcIjxvcHRpb25hbD5pY29uTmFtZVwiXVxuXHRcdFtcIlR3aXR0ZXJcIiwgXCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9pYW1TYWhpdGh5YW5cIl0sXG5cdFx0W1wiSW5zdGFncmFtXCIsIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zYWhpdGh5YW5fXCJdLFxuXHRcdFtcIkdpdEh1YlwiLCBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vc2FoaXRoeWFuZGV2XCJdLFxuXHRcdFtcIlRlbGVncmFtXCIsIFwiaHR0cHM6Ly93d3cudC5tZS9zYWhpdGh5YW5cIiwgXCJ0ZWxlZ3JhbS1wbGFuZVwiXSxcblx0XS5tYXAoY3JlYXRlU29jaWFsTWVkaWFMaW5rT2JqKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJcIl19PlxuXHRcdFx0e3VwZGF0ZWRTb2NpYWxNZWRpYS5tYXAocyA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwicmVzZXRcIiBocmVmPXtzLmxpbmt9IGtleT17cy5wcm92aWRlck5hbWV9IHRpdGxlPXtgJHtzLnByb3ZpZGVyTmFtZX0gKCR7cy5pZH0pYH0+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtzLmljb259YH0+PC9pPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0KVxuXHRcdFx0fSl9XG5cdFx0PC9kaXY+XG5cdClcbn0iXSwic291cmNlUm9vdCI6IiJ9