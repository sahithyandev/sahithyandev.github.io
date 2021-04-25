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

      var log = function log() {
        var _console;

        (_console = console).log.apply(_console, arguments);
      };

      if (!post.meta.tags.includes("mathematics")) {
        log = function log() {};
      }

      log("============================");

      if (tags) {
        log("POSTTAGS", post.meta.tags);
        log("TAGS", tags);
        log(tags.includes(post.meta.tags[0]));
        result = post.meta.tags.some(function (postTag) {
          return tags.some(function (tag) {
            return postTag.includes(tag);
          });
        });
      }

      result = result && searchString.includes(title) || title.includes(searchString);
      return result;
    });
  };

  var findTags = function findTags(searchString) {
    return searchString.split(" ").filter(_helpers_other__WEBPACK_IMPORTED_MODULE_5__["isTag"]);
  };

  var removeTags = function removeTags(searchString) {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeadBase"], {
      title: "Posts - ".concat(_global__WEBPACK_IMPORTED_MODULE_4__["SITE_CONSTANTS"].title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["search-container"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: _styles_posts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["search-input"],
          placeholder: "Search articles",
          onChange: function onChange(event) {
            /** 
             * @type {string}
             */
            var searchInput = event.target.value.toLowerCase();
            setSearch({
              tags: findTags(searchInput).map(function (tag) {
                return tag.slice(1);
              }),
              searchString: removeTags(searchInput)
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: filterPosts(posts).map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImxvZyIsImNvbnNvbGUiLCJpbmNsdWRlcyIsInNvbWUiLCJwb3N0VGFnIiwidGFnIiwiZmluZFRhZ3MiLCJzcGxpdCIsImlzVGFnIiwicmVtb3ZlVGFncyIsIlNJVEVfQ09OU1RBTlRTIiwic3R5bGVzIiwiZXZlbnQiLCJzZWFyY2hJbnB1dCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwic2xpY2UiLCJfcG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ2hDO0FBRGdDLGtCQUVEQyxzREFBUSxDQUFDO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGdCQUFZLEVBQUU7QUFGeUIsR0FBRCxDQUZQO0FBQUEsTUFFekJDLFNBRnlCO0FBQUEsTUFFZEMsU0FGYzs7QUFPaEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDLFdBQU9BLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDOUIsVUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUQsS0FBVixDQUFnQkUsV0FBaEIsRUFBZDtBQUQ4QixVQUV0QlQsWUFGc0IsR0FFQ0MsU0FGRCxDQUV0QkQsWUFGc0I7QUFBQSxVQUVSRCxJQUZRLEdBRUNF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QUNFckIsV0FBVyxDQUFDTixLQUFELENBQVgsQ0FDQzhCLEdBREQsQ0FDSyxVQUFBRSxLQUFLO0FBQUEsOEJBQUkscUVBQUMsb0RBQUQsb0JBQXFDQSxLQUFLLENBQUNyQixJQUEzQyxHQUFlcUIsS0FBSyxDQUFDckIsSUFBTixDQUFXRCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FEVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsZUE4QkMscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCRDtBQUFBLGtCQUREO0FBa0NBLENBL0VEOztHQUFNWCxTOztLQUFBQSxTOztBQTBGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuZDQ5NDYzZGNmYjEyZGUyZjcxMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnMvcG9zdFwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgaXNUYWcgfSBmcm9tIFwiQC9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQb3N0c1BhZ2UgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdC8vIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKVxuXHRjb25zdCBbc2VhcmNoT2JqLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoe1xuXHRcdHRhZ3M6IFtdLFxuXHRcdHNlYXJjaFN0cmluZzogXCJcIlxuXHR9KVxuXG5cdGNvbnN0IGZpbHRlclBvc3RzID0gKHBvc3RzQXJyKSA9PiB7XG5cdFx0cmV0dXJuIHBvc3RzQXJyLmZpbHRlcihwb3N0ID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gcG9zdC5tZXRhLnRpdGxlLnRvTG93ZXJDYXNlKClcblx0XHRcdGNvbnN0IHsgc2VhcmNoU3RyaW5nLCB0YWdzIH0gPSBzZWFyY2hPYmpcblx0XHRcdGxldCByZXN1bHQgPSB0cnVlXG5cblx0XHRcdGxldCBsb2cgPSAoLi4udGhpbmcpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coLi4udGhpbmcpXG5cdFx0XHR9XG5cblx0XHRcdGlmICghcG9zdC5tZXRhLnRhZ3MuaW5jbHVkZXMoXCJtYXRoZW1hdGljc1wiKSkge1xuXHRcdFx0XHRsb2cgPSAoKSA9PiB7IH1cblx0XHRcdH1cblxuXHRcdFx0bG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxuXHRcdFx0aWYgKHRhZ3MpIHtcblx0XHRcdFx0bG9nKFwiUE9TVFRBR1NcIiwgcG9zdC5tZXRhLnRhZ3MpXG5cdFx0XHRcdGxvZyhcIlRBR1NcIiwgdGFncylcblx0XHRcdFx0bG9nKHRhZ3MuaW5jbHVkZXMocG9zdC5tZXRhLnRhZ3NbMF0pKVxuXHRcdFx0XHRyZXN1bHQgPSBwb3N0Lm1ldGEudGFncy5zb21lKHBvc3RUYWcgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0YWdzLnNvbWUodGFnID0+IHBvc3RUYWcuaW5jbHVkZXModGFnKSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0ICYmIHNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aXRsZSkgfHwgdGl0bGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBmaW5kVGFncyA9IChzZWFyY2hTdHJpbmcpID0+IHNlYXJjaFN0cmluZ1xuXHRcdC5zcGxpdChcIiBcIilcblx0XHQuZmlsdGVyKGlzVGFnKVxuXG5cdGNvbnN0IHJlbW92ZVRhZ3MgPSAoc2VhcmNoU3RyaW5nKSA9PiB7XG5cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YFBvc3RzIC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSAvPlxuXG5cdFx0XHQ8TmF2IC8+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8aDI+UG9zdHM8L2gyPlxuXG5cdFx0XHRcdDxwPkhlcmUgYXJlIHRoZSBhcnRpY2xlcyBJIHdyb3RlIGJlZm9yZS48L3A+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1jb250YWluZXJcIl19PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWlucHV0XCJdfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlc1wiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8qKiBcblx0XHRcdFx0XHRcdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNlYXJjaElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0c2V0U2VhcmNoKHtcblx0XHRcdFx0XHRcdFx0XHR0YWdzOiBmaW5kVGFncyhzZWFyY2hJbnB1dCkubWFwKHRhZyA9PiB0YWcuc2xpY2UoMSkpLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFN0cmluZzogcmVtb3ZlVGFncyhzZWFyY2hJbnB1dClcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e2ZpbHRlclBvc3RzKHBvc3RzKVxuXHRcdFx0XHRcdFx0Lm1hcChfcG9zdCA9PiA8UG9zdENhcmQga2V5PXtfcG9zdC5tZXRhLnRpdGxlfSB7Li4uX3Bvc3QubWV0YX0gLz4pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBvc3RzOiBnZXRBbGxQb3N0cygpXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==