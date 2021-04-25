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
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/posts.module.css */ "./styles/posts.module.css");
/* harmony import */ var _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "/mnt/c/Projects/blog/pages/posts.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var PostsPage = function PostsPage(_ref) {
  _s();

  var posts = _ref.posts;

  // const [searchString, setSearchString] = useState("")
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    tags: [],
    searchString: ""
  }),
      searchObj = _useState[0],
      setSearch = _useState[1];

  var filterPosts = function filterPosts(postsArr) {
    return postsArr.filter(function (post) {
      var title = post.meta.title.toLowerCase();
      var searchString = searchObj.searchString,
          tags = searchObj.tags;
      var result = true;

      if (tags) {
        console.log("TAGS", post.meta.tags);
        console.log(tags);
        result = post.meta.tags.every(function (postTag) {
          return tags.includes(postTag);
        });
      }

      result = result && searchString.includes(title) || title.includes(searchString);
      return result;
    });
  };

  var findTags = function findTags(_searchString) {
    return _searchString.split(" ").filter(function (word) {
      return new RegExp(/^#[A-Za-z]*$/i).test(word);
    }).map(function (word) {
      return word.replace("#", "");
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeadBase"], {
      title: "Posts - ".concat(_global__WEBPACK_IMPORTED_MODULE_4__["SITE_CONSTANTS"].title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["search-container"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["search-input"],
          placeholder: "Search articles",
          onChange: function onChange(event) {
            /** 
             * @type {string}
             */
            var searchInput = event.target.value.toLowerCase();
            setSearch({
              tags: findTags(searchInput),
              searchString: searchInput
            }); // setTags(findTags(searchString))
            // setSearchString(searchInput)
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: filterPosts(posts).map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJldmVyeSIsInBvc3RUYWciLCJpbmNsdWRlcyIsImZpbmRUYWdzIiwiX3NlYXJjaFN0cmluZyIsInNwbGl0Iiwid29yZCIsIlJlZ0V4cCIsInRlc3QiLCJtYXAiLCJyZXBsYWNlIiwiU0lURV9DT05TVEFOVFMiLCJzdHlsZXMiLCJldmVudCIsInNlYXJjaElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJfcG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ2hDO0FBRGdDLGtCQUVEQyxzREFBUSxDQUFDO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGdCQUFZLEVBQUU7QUFGeUIsR0FBRCxDQUZQO0FBQUEsTUFFekJDLFNBRnlCO0FBQUEsTUFFZEMsU0FGYzs7QUFPaEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDLFdBQU9BLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDOUIsVUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUQsS0FBVixDQUFnQkUsV0FBaEIsRUFBZDtBQUQ4QixVQUV0QlQsWUFGc0IsR0FFQ0MsU0FGRCxDQUV0QkQsWUFGc0I7QUFBQSxVQUVSRCxJQUZRLEdBRUNFLFNBRkQsQ0FFUkYsSUFGUTtBQUc5QixVQUFJVyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxVQUFJWCxJQUFKLEVBQVU7QUFDVFksZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQk4sSUFBSSxDQUFDRSxJQUFMLENBQVVULElBQTlCO0FBQ0FZLGVBQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFaO0FBQ0FXLGNBQU0sR0FBR0osSUFBSSxDQUFDRSxJQUFMLENBQVVULElBQVYsQ0FBZWMsS0FBZixDQUFxQixVQUFBQyxPQUFPO0FBQUEsaUJBQUlmLElBQUksQ0FBQ2dCLFFBQUwsQ0FBY0QsT0FBZCxDQUFKO0FBQUEsU0FBNUIsQ0FBVDtBQUNBOztBQUVESixZQUFNLEdBQUdBLE1BQU0sSUFBSVYsWUFBWSxDQUFDZSxRQUFiLENBQXNCUixLQUF0QixDQUFWLElBQTBDQSxLQUFLLENBQUNRLFFBQU4sQ0FBZWYsWUFBZixDQUFuRDtBQUVBLGFBQU9VLE1BQVA7QUFDQSxLQWRNLENBQVA7QUFlQSxHQWhCRDs7QUFrQkEsTUFBTU0sUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsYUFBRDtBQUFBLFdBQW1CQSxhQUFhLENBQy9DQyxLQURrQyxDQUM1QixHQUQ0QixFQUVsQ2IsTUFGa0MsQ0FFM0IsVUFBQWMsSUFBSTtBQUFBLGFBQUksSUFBSUMsTUFBSixDQUFXLGVBQVgsRUFBNEJDLElBQTVCLENBQWlDRixJQUFqQyxDQUFKO0FBQUEsS0FGdUIsRUFHbENHLEdBSGtDLENBRzlCLFVBQUFILElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNJLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLENBQUo7QUFBQSxLQUgwQixDQUFuQjtBQUFBLEdBQWpCOztBQUtBLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsb0RBQUQ7QUFBVSxXQUFLLG9CQUFhQyxzREFBYyxDQUFDakIsS0FBNUI7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFHQyxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQsZUFLQztBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhELGVBS0M7QUFBSyxpQkFBUyxFQUFFa0IsK0RBQU0sQ0FBQyxrQkFBRCxDQUF0QjtBQUFBLCtCQUNDO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVMsRUFBRUEsK0RBQU0sQ0FBQyxjQUFELENBQXBDO0FBQXNELHFCQUFXLEVBQUMsaUJBQWxFO0FBQ0Msa0JBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFXO0FBQ3BCO0FBQ1A7QUFDQTtBQUNPLGdCQUFNQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFiLENBQW1CcEIsV0FBbkIsRUFBcEI7QUFDQVAscUJBQVMsQ0FBQztBQUNUSCxrQkFBSSxFQUFFaUIsUUFBUSxDQUFDVyxXQUFELENBREw7QUFFVDNCLDBCQUFZLEVBQUUyQjtBQUZMLGFBQUQsQ0FBVCxDQUxvQixDQVVwQjtBQUNBO0FBQ0E7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBc0JDO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtCQUNFeEIsV0FBVyxDQUFDTixLQUFELENBQVgsQ0FDQ3lCLEdBREQsQ0FDSyxVQUFBUSxLQUFLO0FBQUEsOEJBQUkscUVBQUMsb0RBQUQsb0JBQXFDQSxLQUFLLENBQUN0QixJQUEzQyxHQUFlc0IsS0FBSyxDQUFDdEIsSUFBTixDQUFXRCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FEVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsZUFpQ0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRDtBQUFBLGtCQUREO0FBcUNBLENBbkVEOztHQUFNWCxTOztLQUFBQSxTOztBQThFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuODYzNTg3NGRjZjc0ODQ2NjM2MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnMvcG9zdFwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9zdHMubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBvc3RzUGFnZSA9ICh7IHBvc3RzIH0pID0+IHtcblx0Ly8gY29uc3QgW3NlYXJjaFN0cmluZywgc2V0U2VhcmNoU3RyaW5nXSA9IHVzZVN0YXRlKFwiXCIpXG5cdGNvbnN0IFtzZWFyY2hPYmosIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh7XG5cdFx0dGFnczogW10sXG5cdFx0c2VhcmNoU3RyaW5nOiBcIlwiXG5cdH0pXG5cblx0Y29uc3QgZmlsdGVyUG9zdHMgPSAocG9zdHNBcnIpID0+IHtcblx0XHRyZXR1cm4gcG9zdHNBcnIuZmlsdGVyKHBvc3QgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBwb3N0Lm1ldGEudGl0bGUudG9Mb3dlckNhc2UoKVxuXHRcdFx0Y29uc3QgeyBzZWFyY2hTdHJpbmcsIHRhZ3MgfSA9IHNlYXJjaE9ialxuXHRcdFx0bGV0IHJlc3VsdCA9IHRydWVcblxuXHRcdFx0aWYgKHRhZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJUQUdTXCIsIHBvc3QubWV0YS50YWdzKVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0YWdzKVxuXHRcdFx0XHRyZXN1bHQgPSBwb3N0Lm1ldGEudGFncy5ldmVyeShwb3N0VGFnID0+IHRhZ3MuaW5jbHVkZXMocG9zdFRhZykpXG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHJlc3VsdCAmJiBzZWFyY2hTdHJpbmcuaW5jbHVkZXModGl0bGUpIHx8IHRpdGxlLmluY2x1ZGVzKHNlYXJjaFN0cmluZylcblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgZmluZFRhZ3MgPSAoX3NlYXJjaFN0cmluZykgPT4gX3NlYXJjaFN0cmluZ1xuXHRcdC5zcGxpdChcIiBcIilcblx0XHQuZmlsdGVyKHdvcmQgPT4gbmV3IFJlZ0V4cCgvXiNbQS1aYS16XSokL2kpLnRlc3Qod29yZCkpXG5cdFx0Lm1hcCh3b3JkID0+IHdvcmQucmVwbGFjZShcIiNcIiwgXCJcIikpXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgUG9zdHMgLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IC8+XG5cblx0XHRcdDxOYXYgLz5cblxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxoMj5Qb3N0czwvaDI+XG5cblx0XHRcdFx0PHA+SGVyZSBhcmUgdGhlIGFydGljbGVzIEkgd3JvdGUgYmVmb3JlLjwvcD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWNvbnRhaW5lclwiXX0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtaW5wdXRcIl19IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFydGljbGVzXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0LyoqIFxuXHRcdFx0XHRcdFx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdFx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0XHRzZXRTZWFyY2goe1xuXHRcdFx0XHRcdFx0XHRcdHRhZ3M6IGZpbmRUYWdzKHNlYXJjaElucHV0KSxcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hTdHJpbmc6IHNlYXJjaElucHV0XG5cdFx0XHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHRcdFx0Ly8gc2V0VGFncyhmaW5kVGFncyhzZWFyY2hTdHJpbmcpKVxuXHRcdFx0XHRcdFx0XHQvLyBzZXRTZWFyY2hTdHJpbmcoc2VhcmNoSW5wdXQpXG5cdFx0XHRcdFx0XHR9fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHtmaWx0ZXJQb3N0cyhwb3N0cylcblx0XHRcdFx0XHRcdC5tYXAoX3Bvc3QgPT4gPFBvc3RDYXJkIGtleT17X3Bvc3QubWV0YS50aXRsZX0gey4uLl9wb3N0Lm1ldGF9IC8+KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRwb3N0czogZ2V0QWxsUG9zdHMoKVxuXHRcdH1cblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=