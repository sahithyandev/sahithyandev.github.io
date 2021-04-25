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
/* harmony import */ var _helpers_other__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/other */ "./helpers/other.js");
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/posts.module.css */ "./styles/posts.module.css");
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_posts_module_css__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "/mnt/c/Projects/blog/pages/posts.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var PostsPage = function PostsPage(_ref) {
  _s();

  var posts = _ref.posts;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    tags: [],
    searchString: ""
  }),
      searchObj = _useState[0],
      setSearch = _useState[1]; // My search logic
  // hard to read and maintain
  // TODO make it easy to read
  // TODO make it maintainable 


  var filterPosts = function filterPosts(postsArr) {
    return postsArr.filter(function (post) {
      var title = post.meta.title.toLowerCase();
      var searchString = searchObj.searchString,
          tags = searchObj.tags;
      var result = true;

      if (tags.length > 0) {
        // check if a post's tags contain the searched tags
        result = result && post.meta.tags.some(function (postTag) {
          return tags.some(function (tag) {
            return postTag.includes(tag);
          });
        });
      } // check if the search is included in the title of a post


      result = result && (searchString.includes(title) || title.includes(searchString));
      return result;
    });
  };
  /**
   * @param {string} searchString
   * 
   * @returns {string[]}
   */


  var findTags = function findTags(searchString) {
    return searchString.split(" ").filter(_helpers_other__WEBPACK_IMPORTED_MODULE_5__["isTag"]).map(function (tag) {
      return tag.slice(1);
    });
  };
  /**
   * @param {string} searchString
   * @returns {string}
   */


  var removeTags = function removeTags(searchString) {
    return searchString.split(" ").filter(function (word) {
      return !Object(_helpers_other__WEBPACK_IMPORTED_MODULE_5__["isTag"])(word);
    }).join(" ");
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeadBase"], {
      title: "Posts - ".concat(_global__WEBPACK_IMPORTED_MODULE_4__["SITE_CONSTANTS"].title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["search-container"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["search-input"],
          placeholder: "Search articles",
          onChange: function onChange(event) {
            var searchInput = event.target.value.toLowerCase();
            setSearch({
              tags: findTags(searchInput),
              searchString: removeTags(searchInput)
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: filterPosts(posts).map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(PostsPage, "deZ9POajj5nLHu6FLKczgpqFTfs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImxlbmd0aCIsInNvbWUiLCJwb3N0VGFnIiwidGFnIiwiaW5jbHVkZXMiLCJmaW5kVGFncyIsInNwbGl0IiwiaXNUYWciLCJtYXAiLCJzbGljZSIsInJlbW92ZVRhZ3MiLCJ3b3JkIiwiam9pbiIsIlNJVEVfQ09OU1RBTlRTIiwic3R5bGVzIiwiZXZlbnQiLCJzZWFyY2hJbnB1dCIsInRhcmdldCIsInZhbHVlIiwiX3Bvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGdCQUFZLEVBQUU7QUFGeUIsR0FBRCxDQURQO0FBQUEsTUFDekJDLFNBRHlCO0FBQUEsTUFDZEMsU0FEYyxpQkFNaEM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUNqQyxXQUFPQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQzlCLFVBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxJQUFMLENBQVVELEtBQVYsQ0FBZ0JFLFdBQWhCLEVBQWQ7QUFEOEIsVUFFdEJULFlBRnNCLEdBRUNDLFNBRkQsQ0FFdEJELFlBRnNCO0FBQUEsVUFFUkQsSUFGUSxHQUVDRSxTQUZELENBRVJGLElBRlE7QUFHOUIsVUFBSVcsTUFBTSxHQUFHLElBQWI7O0FBRUEsVUFBSVgsSUFBSSxDQUFDWSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDcEI7QUFDQUQsY0FBTSxHQUFHQSxNQUFNLElBQUlKLElBQUksQ0FBQ0UsSUFBTCxDQUFVVCxJQUFWLENBQWVhLElBQWYsQ0FBb0IsVUFBQUMsT0FBTyxFQUFJO0FBQ2pELGlCQUFPZCxJQUFJLENBQUNhLElBQUwsQ0FBVSxVQUFBRSxHQUFHO0FBQUEsbUJBQUlELE9BQU8sQ0FBQ0UsUUFBUixDQUFpQkQsR0FBakIsQ0FBSjtBQUFBLFdBQWIsQ0FBUDtBQUNBLFNBRmtCLENBQW5CO0FBR0EsT0FWNkIsQ0FZOUI7OztBQUNBSixZQUFNLEdBQUdBLE1BQU0sS0FBS1YsWUFBWSxDQUFDZSxRQUFiLENBQXNCUixLQUF0QixLQUFnQ0EsS0FBSyxDQUFDUSxRQUFOLENBQWVmLFlBQWYsQ0FBckMsQ0FBZjtBQUVBLGFBQU9VLE1BQVA7QUFDQSxLQWhCTSxDQUFQO0FBaUJBLEdBbEJEO0FBb0JBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNDLE1BQU1NLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNoQixZQUFEO0FBQUEsV0FBa0JBLFlBQVksQ0FDN0NpQixLQURpQyxDQUMzQixHQUQyQixFQUVqQ1osTUFGaUMsQ0FFMUJhLG9EQUYwQixFQUdqQ0MsR0FIaUMsQ0FHN0IsVUFBQUwsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ00sS0FBSixDQUFVLENBQVYsQ0FBSjtBQUFBLEtBSDBCLENBQWxCO0FBQUEsR0FBakI7QUFLQTtBQUNEO0FBQ0E7QUFDQTs7O0FBQ0MsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3JCLFlBQUQ7QUFBQSxXQUFrQkEsWUFBWSxDQUMvQ2lCLEtBRG1DLENBQzdCLEdBRDZCLEVBRW5DWixNQUZtQyxDQUU1QixVQUFBaUIsSUFBSTtBQUFBLGFBQUksQ0FBQ0osNERBQUssQ0FBQ0ksSUFBRCxDQUFWO0FBQUEsS0FGd0IsRUFHbkNDLElBSG1DLENBRzlCLEdBSDhCLENBQWxCO0FBQUEsR0FBbkI7O0FBS0Esc0JBQ0M7QUFBQSw0QkFDQyxxRUFBQyxvREFBRDtBQUFVLFdBQUssb0JBQWFDLHNEQUFjLENBQUNqQixLQUE1QjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUdDLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRCxlQUtDO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQsZUFLQztBQUFLLGlCQUFTLEVBQUVrQiwrREFBTSxDQUFDLGtCQUFELENBQXRCO0FBQUEsK0JBQ0M7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBUyxFQUFFQSwrREFBTSxDQUFDLGNBQUQsQ0FBcEM7QUFBc0QscUJBQVcsRUFBQyxpQkFBbEU7QUFDQyxrQkFBUSxFQUFFLGtCQUFDQyxLQUFELEVBQVc7QUFDcEIsZ0JBQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJwQixXQUFuQixFQUFwQjtBQUNBUCxxQkFBUyxDQUFDO0FBQ1RILGtCQUFJLEVBQUVpQixRQUFRLENBQUNXLFdBQUQsQ0FETDtBQUVUM0IsMEJBQVksRUFBRXFCLFVBQVUsQ0FBQ00sV0FBRDtBQUZmLGFBQUQsQ0FBVDtBQUlBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRCxlQWdCQztBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxrQkFDRXhCLFdBQVcsQ0FBQ04sS0FBRCxDQUFYLENBQ0NzQixHQURELENBQ0ssVUFBQVcsS0FBSztBQUFBLDhCQUFJLHFFQUFDLG9EQUFELG9CQUFxQ0EsS0FBSyxDQUFDdEIsSUFBM0MsR0FBZXNCLEtBQUssQ0FBQ3RCLElBQU4sQ0FBV0QsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBRFY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxELGVBMkJDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkQ7QUFBQSxrQkFERDtBQStCQSxDQWhGRDs7R0FBTVgsUzs7S0FBQUEsUzs7QUEyRlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLjM0OWRjNzE2NGJiMTYzZDUxYjk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IEhlYWRCYXNlLCBOYXYsIEZvb3RlciwgUG9zdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9oZWxwZXJzL3Bvc3RcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcbmltcG9ydCB7IGlzVGFnIH0gZnJvbSBcIkAvaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0cy5tb2R1bGUuY3NzXCJcblxuY29uc3QgUG9zdHNQYWdlID0gKHsgcG9zdHMgfSkgPT4ge1xuXHRjb25zdCBbc2VhcmNoT2JqLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoe1xuXHRcdHRhZ3M6IFtdLFxuXHRcdHNlYXJjaFN0cmluZzogXCJcIlxuXHR9KVxuXG5cdC8vIE15IHNlYXJjaCBsb2dpY1xuXHQvLyBoYXJkIHRvIHJlYWQgYW5kIG1haW50YWluXG5cdC8vIFRPRE8gbWFrZSBpdCBlYXN5IHRvIHJlYWRcblx0Ly8gVE9ETyBtYWtlIGl0IG1haW50YWluYWJsZSBcblx0Y29uc3QgZmlsdGVyUG9zdHMgPSAocG9zdHNBcnIpID0+IHtcblx0XHRyZXR1cm4gcG9zdHNBcnIuZmlsdGVyKHBvc3QgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBwb3N0Lm1ldGEudGl0bGUudG9Mb3dlckNhc2UoKVxuXHRcdFx0Y29uc3QgeyBzZWFyY2hTdHJpbmcsIHRhZ3MgfSA9IHNlYXJjaE9ialxuXHRcdFx0bGV0IHJlc3VsdCA9IHRydWVcblxuXHRcdFx0aWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyBjaGVjayBpZiBhIHBvc3QncyB0YWdzIGNvbnRhaW4gdGhlIHNlYXJjaGVkIHRhZ3Ncblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICYmIHBvc3QubWV0YS50YWdzLnNvbWUocG9zdFRhZyA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRhZ3Muc29tZSh0YWcgPT4gcG9zdFRhZy5pbmNsdWRlcyh0YWcpKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjaGVjayBpZiB0aGUgc2VhcmNoIGlzIGluY2x1ZGVkIGluIHRoZSB0aXRsZSBvZiBhIHBvc3Rcblx0XHRcdHJlc3VsdCA9IHJlc3VsdCAmJiAoc2VhcmNoU3RyaW5nLmluY2x1ZGVzKHRpdGxlKSB8fCB0aXRsZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFN0cmluZ1xuXHQgKiBcblx0ICogQHJldHVybnMge3N0cmluZ1tdfVxuXHQgKi9cblx0Y29uc3QgZmluZFRhZ3MgPSAoc2VhcmNoU3RyaW5nKSA9PiBzZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcihpc1RhZylcblx0XHQubWFwKHRhZyA9PiB0YWcuc2xpY2UoMSkpXG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hTdHJpbmdcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGNvbnN0IHJlbW92ZVRhZ3MgPSAoc2VhcmNoU3RyaW5nKSA9PiBzZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcih3b3JkID0+ICFpc1RhZyh3b3JkKSlcblx0XHQuam9pbihcIiBcIilcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZEJhc2UgdGl0bGU9e2BQb3N0cyAtICR7U0lURV9DT05TVEFOVFMudGl0bGV9YH0gLz5cblxuXHRcdFx0PE5hdiAvPlxuXG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PGgyPlBvc3RzPC9oMj5cblxuXHRcdFx0XHQ8cD5IZXJlIGFyZSB0aGUgYXJ0aWNsZXMgSSB3cm90ZSBiZWZvcmUuPC9wPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1pbnB1dFwiXX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXJ0aWNsZXNcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0XHRcdHNldFNlYXJjaCh7XG5cdFx0XHRcdFx0XHRcdFx0dGFnczogZmluZFRhZ3Moc2VhcmNoSW5wdXQpLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFN0cmluZzogcmVtb3ZlVGFncyhzZWFyY2hJbnB1dClcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e2ZpbHRlclBvc3RzKHBvc3RzKVxuXHRcdFx0XHRcdFx0Lm1hcChfcG9zdCA9PiA8UG9zdENhcmQga2V5PXtfcG9zdC5tZXRhLnRpdGxlfSB7Li4uX3Bvc3QubWV0YX0gLz4pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBvc3RzOiBnZXRBbGxQb3N0cygpXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==