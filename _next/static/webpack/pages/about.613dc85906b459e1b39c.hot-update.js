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


var CustomLink = _MDXComponents__WEBPACK_IMPORTED_MODULE_2__["MDXComponents"].a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qc3giXSwibmFtZXMiOlsiQ3VzdG9tTGluayIsIk1EWENvbXBvbmVudHMiLCJhIiwiU29jaWFsTGlua3MiLCJwcm9wcyIsImNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiIsImRhdGFBcnIiLCJwcm92aWRlck5hbWUiLCJsaW5rIiwiX19pY29uIiwic2hvcnROYW1lIiwiaWNvbiIsInRvTG93ZXJDYXNlIiwiaWQiLCJzcGxpdCIsInJldmVyc2UiLCJ1cGRhdGVkU29jaWFsTWVkaWEiLCJtYXAiLCJzdHlsZXMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVXQSxVLEdBQWVDLDRELENBQWxCQyxDO0FBRVI7QUFDTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDckMsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxPQUFELEVBQWE7QUFDN0M7QUFDRjtBQUNBO0FBSCtDLDZJQUlHQSxPQUpIO0FBQUEsUUFJdENDLFlBSnNDO0FBQUEsUUFJeEJDLElBSndCO0FBQUEsUUFJbEJDLE1BSmtCO0FBQUEsUUFJVkMsU0FKVTs7QUFNN0MsV0FBTztBQUNOSCxrQkFBWSxFQUFaQSxZQURNO0FBQ1FDLFVBQUksRUFBSkEsSUFEUjtBQUVORyxVQUFJLEVBQUVGLE1BQU0sS0FBSyxJQUFYLEdBQWtCLElBQWxCLEdBQXlCQSxNQUFNLElBQUlGLFlBQVksQ0FBQ0ssV0FBYixFQUZuQztBQUdOQyxRQUFFLEVBQUVMLElBQUksQ0FBQ00sS0FBTCxDQUFXLEdBQVgsRUFBZ0JDLE9BQWhCLEdBQTBCLENBQTFCLENBSEU7QUFJTkwsZUFBUyxFQUFUQTtBQUpNLEtBQVA7QUFNQSxHQVpEOztBQWNBLE1BQU1NLGtCQUFrQixHQUFHLENBQzFCO0FBQ0EsR0FBQyxTQUFELEVBQVksc0NBQVosQ0FGMEIsRUFHMUIsQ0FBQyxXQUFELEVBQWMsc0NBQWQsQ0FIMEIsRUFJMUIsQ0FBQyxRQUFELEVBQVcscUNBQVgsQ0FKMEIsRUFLMUIsQ0FBQyxVQUFELEVBQWEsNEJBQWIsRUFBMkMsZ0JBQTNDLENBTDBCLEVBTTFCLENBQUMsWUFBRCxFQUFlLGlEQUFmLEVBQWtFLElBQWxFLEVBQXdFLElBQXhFLENBTjBCLEVBT3pCQyxHQVB5QixDQU9yQlosd0JBUHFCLENBQTNCO0FBU0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUVhLHNFQUFNLENBQUMsOEJBQUQsQ0FBdEI7QUFBQSxjQUNFRixrQkFBa0IsQ0FBQ0MsR0FBbkIsQ0FBdUIsVUFBQUUsQ0FBQyxFQUFJO0FBQzVCLDBCQUNDLHFFQUFDLFVBQUQ7QUFBWSxpQkFBUyxFQUFDLE9BQXRCO0FBQThCLFlBQUksRUFBRUEsQ0FBQyxDQUFDWCxJQUF0QztBQUFpRSxhQUFLLFlBQUtXLENBQUMsQ0FBQ1osWUFBUCxlQUF3QlksQ0FBQyxDQUFDTixFQUExQixNQUF0RTtBQUFBLGtCQUNFTSxDQUFDLENBQUNSLElBQUYsZ0JBQ0E7QUFBRyxtQkFBUyxtQkFBWVEsQ0FBQyxDQUFDUixJQUFkO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxnQkFFQTtBQUFNLG1CQUFTLEVBQUVPLHNFQUFNLENBQUMsU0FBRCxDQUF2QjtBQUFBLG9CQUFxQ0MsQ0FBQyxDQUFDVDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsU0FBaURTLENBQUMsQ0FBQ1osWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBUUEsS0FUQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQWNBLENBdENNO0tBQU1KLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuNjEzZGM4NTkwNmI0NTllMWIzOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1EWENvbXBvbmVudHMgfSBmcm9tIFwiLi9NRFhDb21wb25lbnRzXCJcblxuY29uc3QgeyBhOiBDdXN0b21MaW5rIH0gPSBNRFhDb21wb25lbnRzXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zb2NpYWwtbGlua3MubW9kdWxlLmNzc1wiXG5leHBvcnQgY29uc3QgU29jaWFsTGlua3MgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgY3JlYXRlU29jaWFsTWVkaWFMaW5rT2JqID0gKGRhdGFBcnIpID0+IHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGNvbnN0IFtwcm92aWRlck5hbWUsIGxpbmssIF9faWNvbiwgc2hvcnROYW1lXSA9IGRhdGFBcnI7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvdmlkZXJOYW1lLCBsaW5rLFxuXHRcdFx0aWNvbjogX19pY29uID09PSBudWxsID8gbnVsbCA6IF9faWNvbiB8fCBwcm92aWRlck5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdGlkOiBsaW5rLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0sXG5cdFx0XHRzaG9ydE5hbWVcblx0XHR9XG5cdH1cblxuXHRjb25zdCB1cGRhdGVkU29jaWFsTWVkaWEgPSBbXG5cdFx0Ly8gW1wicHJvdmlkZXJOYW1lXCIsIFwicHJvZmlsZUxpbmtcIiwgXCI8b3B0aW9uYWw+aWNvbk5hbWVcIl1cblx0XHRbXCJUd2l0dGVyXCIsIFwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vaWFtU2FoaXRoeWFuXCJdLFxuXHRcdFtcIkluc3RhZ3JhbVwiLCBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FoaXRoeWFuX1wiXSxcblx0XHRbXCJHaXRIdWJcIiwgXCJodHRwczovL3d3dy5naXRodWIuY29tL3NhaGl0aHlhbmRldlwiXSxcblx0XHRbXCJUZWxlZ3JhbVwiLCBcImh0dHBzOi8vd3d3LnQubWUvc2FoaXRoeWFuXCIsIFwidGVsZWdyYW0tcGxhbmVcIl0sXG5cdFx0W1wiQ29kZXJzUmFua1wiLCBcImh0dHBzOi8vcHJvZmlsZS5jb2RlcnNyYW5rLmlvL3VzZXIvc2FoaXRoeWFuZGV2XCIsIG51bGwsIFwiQ1JcIl1cblx0XS5tYXAoY3JlYXRlU29jaWFsTWVkaWFMaW5rT2JqKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJcIl19PlxuXHRcdFx0e3VwZGF0ZWRTb2NpYWxNZWRpYS5tYXAocyA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0PEN1c3RvbUxpbmsgY2xhc3NOYW1lPVwicmVzZXRcIiBocmVmPXtzLmxpbmt9IGtleT17cy5wcm92aWRlck5hbWV9IHRpdGxlPXtgJHtzLnByb3ZpZGVyTmFtZX0gKCR7cy5pZH0pYH0+XG5cdFx0XHRcdFx0XHR7cy5pY29uID9cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtgZmFiIGZhLSR7cy5pY29ufWB9PjwvaT4gOlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcInNtLWljb25cIl19PntzLnNob3J0TmFtZX08L3NwYW4+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9DdXN0b21MaW5rPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=