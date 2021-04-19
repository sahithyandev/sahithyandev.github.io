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
      icon: __icon || providerName.toLowerCase(),
      id: link.split("/").reverse()[0],
      shortName: shortName
    };
  };

  var updatedSocialMedia = [// ["providerName", "profileLink", "<optional>iconName"]
  ["Twitter", "https://www.twitter.com/iamSahithyan"], ["Instagram", "https://www.instagram.com/sahithyan_"], ["GitHub", "https://www.github.com/sahithyandev"], ["Telegram", "https://www.t.me/sahithyan", "telegram-plane"], ["CodersRank", "https://profile.codersrank.io/user/sahithyandev", "-", "CR"]].map(createSocialMediaLinkObj);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["social-media-icons-container"],
    children: updatedSocialMedia.map(function (s) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "reset",
        href: s.link,
        title: "".concat(s.providerName, " (").concat(s.id, ")"),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fab fa-".concat(s.icon),
          children: s.shortName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qc3giXSwibmFtZXMiOlsiU29jaWFsTGlua3MiLCJwcm9wcyIsImNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiIsImRhdGFBcnIiLCJwcm92aWRlck5hbWUiLCJsaW5rIiwiX19pY29uIiwic2hvcnROYW1lIiwiaWNvbiIsInRvTG93ZXJDYXNlIiwiaWQiLCJzcGxpdCIsInJldmVyc2UiLCJ1cGRhdGVkU29jaWFsTWVkaWEiLCJtYXAiLCJzdHlsZXMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JDLE1BQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdDO0FBQ0Y7QUFDQTtBQUgrQyw2SUFJR0EsT0FKSDtBQUFBLFFBSXRDQyxZQUpzQztBQUFBLFFBSXhCQyxJQUp3QjtBQUFBLFFBSWxCQyxNQUprQjtBQUFBLFFBSVZDLFNBSlU7O0FBTTdDLFdBQU87QUFDTkgsa0JBQVksRUFBWkEsWUFETTtBQUNRQyxVQUFJLEVBQUpBLElBRFI7QUFFTkcsVUFBSSxFQUFFRixNQUFNLElBQUlGLFlBQVksQ0FBQ0ssV0FBYixFQUZWO0FBR05DLFFBQUUsRUFBRUwsSUFBSSxDQUFDTSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsT0FBaEIsR0FBMEIsQ0FBMUIsQ0FIRTtBQUlOTCxlQUFTLEVBQVRBO0FBSk0sS0FBUDtBQU1BLEdBWkQ7O0FBY0EsTUFBTU0sa0JBQWtCLEdBQUcsQ0FDMUI7QUFDQSxHQUFDLFNBQUQsRUFBWSxzQ0FBWixDQUYwQixFQUcxQixDQUFDLFdBQUQsRUFBYyxzQ0FBZCxDQUgwQixFQUkxQixDQUFDLFFBQUQsRUFBVyxxQ0FBWCxDQUowQixFQUsxQixDQUFDLFVBQUQsRUFBYSw0QkFBYixFQUEyQyxnQkFBM0MsQ0FMMEIsRUFNMUIsQ0FBQyxZQUFELEVBQWUsaURBQWYsRUFBa0UsR0FBbEUsRUFBdUUsSUFBdkUsQ0FOMEIsRUFPekJDLEdBUHlCLENBT3JCWix3QkFQcUIsQ0FBM0I7QUFTQSxzQkFDQztBQUFLLGFBQVMsRUFBRWEsc0VBQU0sQ0FBQyw4QkFBRCxDQUF0QjtBQUFBLGNBQ0VGLGtCQUFrQixDQUFDQyxHQUFuQixDQUF1QixVQUFBRSxDQUFDLEVBQUk7QUFDNUIsMEJBQ0M7QUFBRyxpQkFBUyxFQUFDLE9BQWI7QUFBcUIsWUFBSSxFQUFFQSxDQUFDLENBQUNYLElBQTdCO0FBQXdELGFBQUssWUFBS1csQ0FBQyxDQUFDWixZQUFQLGVBQXdCWSxDQUFDLENBQUNOLEVBQTFCLE1BQTdEO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxtQkFBWU0sQ0FBQyxDQUFDUixJQUFkLENBQVo7QUFBQSxvQkFBbUNRLENBQUMsQ0FBQ1Q7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELFNBQXdDUyxDQUFDLENBQUNaLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUtBLEtBTkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFXQSxDQW5DTTtLQUFNSixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmRjZmI1ZDU5M2Q4NTlkNTU3ZGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc29jaWFsLWxpbmtzLm1vZHVsZS5jc3NcIlxuZXhwb3J0IGNvbnN0IFNvY2lhbExpbmtzID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IGNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiA9IChkYXRhQXJyKSA9PiB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHRjb25zdCBbcHJvdmlkZXJOYW1lLCBsaW5rLCBfX2ljb24sIHNob3J0TmFtZV0gPSBkYXRhQXJyO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3ZpZGVyTmFtZSwgbGluayxcblx0XHRcdGljb246IF9faWNvbiB8fCBwcm92aWRlck5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdGlkOiBsaW5rLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0sXG5cdFx0XHRzaG9ydE5hbWVcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkU29jaWFsTWVkaWEgPSBbXG5cdFx0Ly8gW1wicHJvdmlkZXJOYW1lXCIsIFwicHJvZmlsZUxpbmtcIiwgXCI8b3B0aW9uYWw+aWNvbk5hbWVcIl1cblx0XHRbXCJUd2l0dGVyXCIsIFwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vaWFtU2FoaXRoeWFuXCJdLFxuXHRcdFtcIkluc3RhZ3JhbVwiLCBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FoaXRoeWFuX1wiXSxcblx0XHRbXCJHaXRIdWJcIiwgXCJodHRwczovL3d3dy5naXRodWIuY29tL3NhaGl0aHlhbmRldlwiXSxcblx0XHRbXCJUZWxlZ3JhbVwiLCBcImh0dHBzOi8vd3d3LnQubWUvc2FoaXRoeWFuXCIsIFwidGVsZWdyYW0tcGxhbmVcIl0sXG5cdFx0W1wiQ29kZXJzUmFua1wiLCBcImh0dHBzOi8vcHJvZmlsZS5jb2RlcnNyYW5rLmlvL3VzZXIvc2FoaXRoeWFuZGV2XCIsIFwiLVwiLCBcIkNSXCJdXG5cdF0ubWFwKGNyZWF0ZVNvY2lhbE1lZGlhTGlua09iailcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyXCJdfT5cblx0XHRcdHt1cGRhdGVkU29jaWFsTWVkaWEubWFwKHMgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInJlc2V0XCIgaHJlZj17cy5saW5rfSBrZXk9e3MucHJvdmlkZXJOYW1lfSB0aXRsZT17YCR7cy5wcm92aWRlck5hbWV9ICgke3MuaWR9KWB9PlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFiIGZhLSR7cy5pY29ufWB9PntzLnNob3J0TmFtZX08L2k+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=