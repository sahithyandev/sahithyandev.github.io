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
  console.log(latestPosts);

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
      lineNumber: 33,
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
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
      showLogo: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["me-banner"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["banner--name"],
          children: "Sahithyan"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["small-intro"],
          children: "student, web developer & tech enthusiast"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
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
                lineNumber: 54,
                columnNumber: 19
              }, _this)
            }, s.providerName, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["latest-posts-heading"],
          children: "Latest Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "posts-container",
          children: latestPosts.map(function (post) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["PostCard"], _objectSpread({}, post.meta), post.meta.title, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJsYXRlc3RQb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTb2NpYWxNZWRpYUxpbmtPYmoiLCJkYXRhQXJyIiwicHJvdmlkZXJOYW1lIiwibGluayIsIl9faWNvbiIsImljb24iLCJ0b0xvd2VyQ2FzZSIsImlkIiwic3BsaXQiLCJyZXZlcnNlIiwidXBkYXRlZFNvY2lhbE1lZGlhIiwibWFwIiwic3R5bGVzIiwicyIsInBvc3QiLCJtZXRhIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBOztBQUVlLFNBQVNBLElBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFmQyxXQUFlLFFBQWZBLFdBQWU7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaOztBQUNBLE1BQU1HLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsT0FBRCxFQUFhO0FBQzVDO0FBQ0o7QUFDQTtBQUhnRCw2SUFJUEEsT0FKTztBQUFBLFFBSXJDQyxZQUpxQztBQUFBLFFBSXZCQyxJQUp1QjtBQUFBLFFBSWpCQyxNQUppQjs7QUFNNUMsV0FBTztBQUNMRixrQkFBWSxFQUFaQSxZQURLO0FBQ1NDLFVBQUksRUFBSkEsSUFEVDtBQUVMRSxVQUFJLEVBQUVELE1BQU0sSUFBSUYsWUFBWSxDQUFDSSxXQUFiLEVBRlg7QUFHTEMsUUFBRSxFQUFFSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxPQUFoQixHQUEwQixDQUExQjtBQUhDLEtBQVA7QUFLRCxHQVhEOztBQWFBLE1BQU1DLGtCQUFrQixHQUFHLENBQ3pCO0FBQ0EsR0FBQyxTQUFELEVBQVksc0NBQVosQ0FGeUIsRUFHekIsQ0FBQyxXQUFELEVBQWMsc0NBQWQsQ0FIeUIsRUFJekIsQ0FBQyxRQUFELEVBQVcscUNBQVgsQ0FKeUIsRUFLekIsQ0FBQyxVQUFELEVBQWEsNEJBQWIsRUFBMkMsZ0JBQTNDLENBTHlCLEVBTXpCQyxHQU55QixDQU1yQlgsd0JBTnFCLENBQTNCO0FBUUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFHRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQ0UsYUFBSyxNQURQO0FBRUUsV0FBRyxFQUFDLFlBRk47QUFHRSxZQUFJLEVBQUMsMERBSFA7QUFJRSxpQkFBUyxFQUFDLHlFQUpaO0FBSXNGLG1CQUFXLEVBQUM7QUFKbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQVdFLHFFQUFDLCtDQUFEO0FBQUssY0FBUSxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBYUU7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVZLDhEQUFNLENBQUMsV0FBRCxDQUF0QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUEsOERBQU0sQ0FBQyxjQUFELENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFQSw4REFBTSxDQUFDLGFBQUQsQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFJRTtBQUFLLG1CQUFTLEVBQUVBLDhEQUFNLENBQUMsOEJBQUQsQ0FBdEI7QUFBQSxvQkFDR0Ysa0JBQWtCLENBQUNDLEdBQW5CLENBQXVCLFVBQUFFLENBQUMsRUFBSTtBQUMzQixnQ0FDRTtBQUFHLHVCQUFTLEVBQUMsT0FBYjtBQUFxQixrQkFBSSxFQUFFQSxDQUFDLENBQUNWLElBQTdCO0FBQXdELG1CQUFLLFlBQUtVLENBQUMsQ0FBQ1gsWUFBUCxlQUF3QlcsQ0FBQyxDQUFDTixFQUExQixNQUE3RDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsbUJBQVlNLENBQUMsQ0FBQ1IsSUFBZDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUF3Q1EsQ0FBQyxDQUFDWCxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBS0QsV0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFpQkU7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVVLDhEQUFNLENBQUMsc0JBQUQsQ0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFHRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxvQkFDR2YsV0FBVyxDQUFDYyxHQUFaLENBQWdCLFVBQUFHLElBQUk7QUFBQSxnQ0FBSSxxRUFBQyxvREFBRCxvQkFBb0NBLElBQUksQ0FBQ0MsSUFBekMsR0FBZUQsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUo7QUFBQSxXQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBdUNFLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q0Y7QUFBQSxrQkFERjtBQTJDRDtLQWxFdUJwQixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjM2EyNDJiMTg4ODg2NDQ5N2NmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9oZWxwZXJzL3Bvc3RcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBsYXRlc3RQb3N0cyB9KSB7XG4gIGNvbnNvbGUubG9nKGxhdGVzdFBvc3RzKVxuICBjb25zdCBjcmVhdGVTb2NpYWxNZWRpYUxpbmtPYmogPSAoZGF0YUFycikgPT4ge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgY29uc3QgW3Byb3ZpZGVyTmFtZSwgbGluaywgX19pY29uXSA9IGRhdGFBcnI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZXJOYW1lLCBsaW5rLFxuICAgICAgaWNvbjogX19pY29uIHx8IHByb3ZpZGVyTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgaWQ6IGxpbmsuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZWRTb2NpYWxNZWRpYSA9IFtcbiAgICAvLyBbXCJwcm92aWRlck5hbWVcIiwgXCJwcm9maWxlTGlua1wiLCBcIjxvcHRpb25hbD5pY29uTmFtZVwiXVxuICAgIFtcIlR3aXR0ZXJcIiwgXCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9pYW1TYWhpdGh5YW5cIl0sXG4gICAgW1wiSW5zdGFncmFtXCIsIFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zYWhpdGh5YW5fXCJdLFxuICAgIFtcIkdpdEh1YlwiLCBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vc2FoaXRoeWFuZGV2XCJdLFxuICAgIFtcIlRlbGVncmFtXCIsIFwiaHR0cHM6Ly93d3cudC5tZS9zYWhpdGh5YW5cIiwgXCJ0ZWxlZ3JhbS1wbGFuZVwiXSxcbiAgXS5tYXAoY3JlYXRlU29jaWFsTWVkaWFMaW5rT2JqKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkQmFzZSAvPlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBkZWZlclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMy9jc3MvYWxsLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LVNaWHhYNHdoSjc5L2dFcndjT1lmK3pXTGVKZFkvcXB1cUM0Y0FhOXJPR1VzdFBvbXRxcHVOV1Q5d2RQRW4yZmtcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxOYXYgc2hvd0xvZ289e2ZhbHNlfSAvPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1lLWJhbm5lclwiXX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImJhbm5lci0tbmFtZVwiXX0+U2FoaXRoeWFuPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNtYWxsLWludHJvXCJdfT5zdHVkZW50LCB3ZWIgZGV2ZWxvcGVyICYgdGVjaCBlbnRodXNpYXN0PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAgICB7dXBkYXRlZFNvY2lhbE1lZGlhLm1hcChzID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXNldFwiIGhyZWY9e3MubGlua30ga2V5PXtzLnByb3ZpZGVyTmFtZX0gdGl0bGU9e2Ake3MucHJvdmlkZXJOYW1lfSAoJHtzLmlkfSlgfT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke3MuaWNvbn1gfT48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJsYXRlc3QtcG9zdHMtaGVhZGluZ1wiXX0+TGF0ZXN0IFBvc3RzPC9oMj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7bGF0ZXN0UG9zdHMubWFwKHBvc3QgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5tZXRhLnRpdGxlfSB7Li4ucG9zdC5tZXRhfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhdGVzdFBvc3RzOiBnZXRBbGxQb3N0cygpLnNsaWNlKDAsIDQpXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==