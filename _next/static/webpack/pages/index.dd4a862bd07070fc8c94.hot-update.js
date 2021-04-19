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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["SocialLinks"], {}, void 0, false, {
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
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "posts-container",
          children: latestPosts.map(function (post) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["PostCard"], _objectSpread({}, post.meta), post.meta.title, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJsYXRlc3RQb3N0cyIsImNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiIsImRhdGFBcnIiLCJwcm92aWRlck5hbWUiLCJsaW5rIiwiX19pY29uIiwiaWNvbiIsInRvTG93ZXJDYXNlIiwiaWQiLCJzcGxpdCIsInJldmVyc2UiLCJ1cGRhdGVkU29jaWFsTWVkaWEiLCJtYXAiLCJzdHlsZXMiLCJwb3N0IiwibWV0YSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTs7QUFFZSxTQUFTQSxJQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUM1QyxNQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLE9BQUQsRUFBYTtBQUM1QztBQUNKO0FBQ0E7QUFIZ0QsNklBSVBBLE9BSk87QUFBQSxRQUlyQ0MsWUFKcUM7QUFBQSxRQUl2QkMsSUFKdUI7QUFBQSxRQUlqQkMsTUFKaUI7O0FBTTVDLFdBQU87QUFDTEYsa0JBQVksRUFBWkEsWUFESztBQUNTQyxVQUFJLEVBQUpBLElBRFQ7QUFFTEUsVUFBSSxFQUFFRCxNQUFNLElBQUlGLFlBQVksQ0FBQ0ksV0FBYixFQUZYO0FBR0xDLFFBQUUsRUFBRUosSUFBSSxDQUFDSyxLQUFMLENBQVcsR0FBWCxFQUFnQkMsT0FBaEIsR0FBMEIsQ0FBMUI7QUFIQyxLQUFQO0FBS0QsR0FYRDs7QUFhQSxNQUFNQyxrQkFBa0IsR0FBRyxDQUN6QjtBQUNBLEdBQUMsU0FBRCxFQUFZLHNDQUFaLENBRnlCLEVBR3pCLENBQUMsV0FBRCxFQUFjLHNDQUFkLENBSHlCLEVBSXpCLENBQUMsUUFBRCxFQUFXLHFDQUFYLENBSnlCLEVBS3pCLENBQUMsVUFBRCxFQUFhLDRCQUFiLEVBQTJDLGdCQUEzQyxDQUx5QixFQU16QkMsR0FOeUIsQ0FNckJYLHdCQU5xQixDQUEzQjtBQVFBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUNFLGFBQUssTUFEUDtBQUVFLFdBQUcsRUFBQyxZQUZOO0FBR0UsWUFBSSxFQUFDLDBEQUhQO0FBSUUsaUJBQVMsRUFBQyx5RUFKWjtBQUlzRixtQkFBVyxFQUFDO0FBSmxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFXRSxxRUFBQywrQ0FBRDtBQUFLLGNBQVEsRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQWFFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFWSw4REFBTSxDQUFDLFdBQUQsQ0FBdEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLDhEQUFNLENBQUMsY0FBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRUEsOERBQU0sQ0FBQyxhQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBSUUscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFQSw4REFBTSxDQUFDLHNCQUFELENBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBR0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsb0JBQ0diLFdBQVcsQ0FBQ1ksR0FBWixDQUFnQixVQUFBRSxJQUFJO0FBQUEsZ0NBQUkscUVBQUMsb0RBQUQsb0JBQW9DQSxJQUFJLENBQUNDLElBQXpDLEdBQWVELElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKO0FBQUEsV0FBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBK0JFLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkY7QUFBQSxrQkFERjtBQW1DRDtLQXpEdUJqQixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkNGE4NjJiZDA3MDcwZmM4Yzk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCwgU29jaWFsTGlua3MgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vaGVscGVycy9wb3N0XCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGF0ZXN0UG9zdHMgfSkge1xuICBjb25zdCBjcmVhdGVTb2NpYWxNZWRpYUxpbmtPYmogPSAoZGF0YUFycikgPT4ge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgY29uc3QgW3Byb3ZpZGVyTmFtZSwgbGluaywgX19pY29uXSA9IGRhdGFBcnI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXJOYW1lLCBsaW5rLFxuICAgICAgaWNvbjogX19pY29uIHx8IHByb3ZpZGVyTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgaWQ6IGxpbmsuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZWRTb2NpYWxNZWRpYSA9IFtcbiAgICAvLyBbXCJwcm92aWRlck5hbWVcIiwgXCJwcm9maWxlTGlua1wiLCBcIjxvcHRpb25hbD5pY29uTmFtZVwiXVxuICAgIFtcIlR3aXR0ZXJcIiwgXCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9pYW1TYWhpdGh5YW5cIl0sXG4gICAgW1wiSW5zdGFncmFtXCIsIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zYWhpdGh5YW5fXCJdLFxuICAgIFtcIkdpdEh1YlwiLCBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vc2FoaXRoeWFuZGV2XCJdLFxuICAgIFtcIlRlbGVncmFtXCIsIFwiaHR0cHM6Ly93d3cudC5tZS9zYWhpdGh5YW5cIiwgXCJ0ZWxlZ3JhbS1wbGFuZVwiXSxcbiAgXS5tYXAoY3JlYXRlU29jaWFsTWVkaWFMaW5rT2JqKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkQmFzZSAvPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBkZWZlclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMy9jc3MvYWxsLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVNaWHhYNHdoSjc5L2dFcndjT1lmK3pXTGVKZFkvcXB1cUM0Y0FhOXJPR1VzdFBvbXRxcHVOV1Q5d2RQRW4yZmtcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxOYXYgc2hvd0xvZ289e2ZhbHNlfSAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1lLWJhbm5lclwiXX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImJhbm5lci0tbmFtZVwiXX0+U2FoaXRoeWFuPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNtYWxsLWludHJvXCJdfT5zdHVkZW50LCB3ZWIgZGV2ZWxvcGVyICYgdGVjaCBlbnRodXNpYXN0PC9kaXY+XG5cbiAgICAgICAgICA8U29jaWFsTGlua3MgLz5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJsYXRlc3QtcG9zdHMtaGVhZGluZ1wiXX0+TGF0ZXN0IFBvc3RzPC9oMj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7bGF0ZXN0UG9zdHMubWFwKHBvc3QgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5tZXRhLnRpdGxlfSB7Li4ucG9zdC5tZXRhfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhdGVzdFBvc3RzOiBnZXRBbGxQb3N0cygpLnNsaWNlKDAsIDQpXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==