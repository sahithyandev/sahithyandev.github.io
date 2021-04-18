webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "/mnt/c/Projects/blog/pages/index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var latestPosts = _ref.latestPosts;

  var createSocialMediaLinkObj = function createSocialMediaLinkObj(dataArr) {
    /**
     * @type {string}
     */
    var _dataArr = Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dataArr, 3),
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["HeadBase"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        defer: true,
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
        integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
      showLogo: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["me-banner"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["banner--name"],
          children: "Sahithyan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["small-intro"],
          children: "student, web developer & tech enthusiast"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["social-media-icons-container"],
          children: updatedSocialMedia.map(function (s) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "reset",
              href: s.link,
              title: "".concat(s.providerName, " (").concat(s.id, ")"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-".concat(s.icon)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, _this)
            }, s.providerName, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["latest-posts-heading"],
          children: "Latest Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "posts-container",
          children: latestPosts.map(function (post) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["PostCard"], _objectSpread({}, post.meta), post.meta.title, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJsYXRlc3RQb3N0cyIsImNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiIsImRhdGFBcnIiLCJwcm92aWRlck5hbWUiLCJsaW5rIiwiX19pY29uIiwiaWNvbiIsInRvTG93ZXJDYXNlIiwiaWQiLCJzcGxpdCIsInJldmVyc2UiLCJ1cGRhdGVkU29jaWFsTWVkaWEiLCJtYXAiLCJzdHlsZXMiLCJzIiwicG9zdCIsIm1ldGEiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR0E7O0FBRWUsU0FBU0EsSUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFDNUMsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxPQUFELEVBQWE7QUFDNUM7QUFDSjtBQUNBO0FBSGdELDZJQUlQQSxPQUpPO0FBQUEsUUFJckNDLFlBSnFDO0FBQUEsUUFJdkJDLElBSnVCO0FBQUEsUUFJakJDLE1BSmlCOztBQU01QyxXQUFPO0FBQ0xGLGtCQUFZLEVBQVpBLFlBREs7QUFDU0MsVUFBSSxFQUFKQSxJQURUO0FBRUxFLFVBQUksRUFBRUQsTUFBTSxJQUFJRixZQUFZLENBQUNJLFdBQWIsRUFGWDtBQUdMQyxRQUFFLEVBQUVKLElBQUksQ0FBQ0ssS0FBTCxDQUFXLEdBQVgsRUFBZ0JDLE9BQWhCLEdBQTBCLENBQTFCO0FBSEMsS0FBUDtBQUtELEdBWEQ7O0FBYUEsTUFBTUMsa0JBQWtCLEdBQUcsQ0FDekI7QUFDQSxHQUFDLFNBQUQsRUFBWSxzQ0FBWixDQUZ5QixFQUd6QixDQUFDLFdBQUQsRUFBYyxzQ0FBZCxDQUh5QixFQUl6QixDQUFDLFFBQUQsRUFBVyxxQ0FBWCxDQUp5QixFQUt6QixDQUFDLFVBQUQsRUFBYSw0QkFBYixFQUEyQyxnQkFBM0MsQ0FMeUIsRUFNekJDLEdBTnlCLENBTXJCWCx3QkFOcUIsQ0FBM0I7QUFRQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFDRSxhQUFLLE1BRFA7QUFFRSxXQUFHLEVBQUMsWUFGTjtBQUdFLFlBQUksRUFBQywwREFIUDtBQUlFLGlCQUFTLEVBQUMseUVBSlo7QUFJc0YsbUJBQVcsRUFBQztBQUpsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBV0UscUVBQUMsK0NBQUQ7QUFBSyxjQUFRLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFhRTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRVksOERBQU0sQ0FBQyxXQUFELENBQXRCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSw4REFBTSxDQUFDLGNBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUVBLDhEQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUlFO0FBQUssbUJBQVMsRUFBRUEsOERBQU0sQ0FBQyw4QkFBRCxDQUF0QjtBQUFBLG9CQUNHRixrQkFBa0IsQ0FBQ0MsR0FBbkIsQ0FBdUIsVUFBQUUsQ0FBQyxFQUFJO0FBQzNCLGdDQUNFO0FBQUcsdUJBQVMsRUFBQyxPQUFiO0FBQXFCLGtCQUFJLEVBQUVBLENBQUMsQ0FBQ1YsSUFBN0I7QUFBd0QsbUJBQUssWUFBS1UsQ0FBQyxDQUFDWCxZQUFQLGVBQXdCVyxDQUFDLENBQUNOLEVBQTFCLE1BQTdEO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxtQkFBWU0sQ0FBQyxDQUFDUixJQUFkO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQXdDUSxDQUFDLENBQUNYLFlBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFLRCxXQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWlCRTtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBRVUsOERBQU0sQ0FBQyxzQkFBRCxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUdFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLG9CQUNHYixXQUFXLENBQUNZLEdBQVosQ0FBZ0IsVUFBQUcsSUFBSTtBQUFBLGdDQUFJLHFFQUFDLG9EQUFELG9CQUFvQ0EsSUFBSSxDQUFDQyxJQUF6QyxHQUFlRCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSjtBQUFBLFdBQXBCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUF1Q0UscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRjtBQUFBLGtCQURGO0FBMkNEO0tBakV1QmxCLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGM2NTI0Y2U5OThlNGQ5NDViMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuXG5pbXBvcnQgeyBIZWFkQmFzZSwgTmF2LCBGb290ZXIsIFBvc3RDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cydcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnMvcG9zdFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGxhdGVzdFBvc3RzIH0pIHtcbiAgY29uc3QgY3JlYXRlU29jaWFsTWVkaWFMaW5rT2JqID0gKGRhdGFBcnIpID0+IHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNvbnN0IFtwcm92aWRlck5hbWUsIGxpbmssIF9faWNvbl0gPSBkYXRhQXJyO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVyTmFtZSwgbGluayxcbiAgICAgIGljb246IF9faWNvbiB8fCBwcm92aWRlck5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgIGlkOiBsaW5rLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1cGRhdGVkU29jaWFsTWVkaWEgPSBbXG4gICAgLy8gW1wicHJvdmlkZXJOYW1lXCIsIFwicHJvZmlsZUxpbmtcIiwgXCI8b3B0aW9uYWw+aWNvbk5hbWVcIl1cbiAgICBbXCJUd2l0dGVyXCIsIFwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vaWFtU2FoaXRoeWFuXCJdLFxuICAgIFtcIkluc3RhZ3JhbVwiLCBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2FoaXRoeWFuX1wiXSxcbiAgICBbXCJHaXRIdWJcIiwgXCJodHRwczovL3d3dy5naXRodWIuY29tL3NhaGl0aHlhbmRldlwiXSxcbiAgICBbXCJUZWxlZ3JhbVwiLCBcImh0dHBzOi8vd3d3LnQubWUvc2FoaXRoeWFuXCIsIFwidGVsZWdyYW0tcGxhbmVcIl0sXG4gIF0ubWFwKGNyZWF0ZVNvY2lhbE1lZGlhTGlua09iailcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZEJhc2UgLz5cblxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgZGVmZXJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjMvY3NzL2FsbC5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1TWlh4WDR3aEo3OS9nRXJ3Y09ZZit6V0xlSmRZL3FwdXFDNGNBYTlyT0dVc3RQb210cXB1TldUOXdkUEVuMmZrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TmF2IHNob3dMb2dvPXtmYWxzZX0gLz5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtZS1iYW5uZXJcIl19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJiYW5uZXItLW5hbWVcIl19PlNhaGl0aHlhbjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzbWFsbC1pbnRyb1wiXX0+c3R1ZGVudCwgd2ViIGRldmVsb3BlciAmIHRlY2ggZW50aHVzaWFzdDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJcIl19PlxuICAgICAgICAgICAge3VwZGF0ZWRTb2NpYWxNZWRpYS5tYXAocyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVzZXRcIiBocmVmPXtzLmxpbmt9IGtleT17cy5wcm92aWRlck5hbWV9IHRpdGxlPXtgJHtzLnByb3ZpZGVyTmFtZX0gKCR7cy5pZH0pYH0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtzLmljb259YH0+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzW1wibGF0ZXN0LXBvc3RzLWhlYWRpbmdcIl19PkxhdGVzdCBQb3N0czwvaDI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2xhdGVzdFBvc3RzLm1hcChwb3N0ID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QubWV0YS50aXRsZX0gey4uLnBvc3QubWV0YX0gLz4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsYXRlc3RQb3N0czogZ2V0QWxsUG9zdHMoKS5zbGljZSgwLCA0KVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=