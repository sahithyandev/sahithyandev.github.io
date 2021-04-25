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
      setSearch = _useState[1]; // My search logic
  // hard to read and maintain
  // TODO make it easy to read
  // TODO make it maintainable 


  var filterPosts = function filterPosts(postsArr) {
    return postsArr.filter(function (post) {
      var title = post.meta.title.toLowerCase();
      var searchString = searchObj.searchString,
          tags = searchObj.tags;
      var result = true; // if (tags) {

      result = result && post.meta.tags.some(function (postTag) {
        return tags.some(function (tag) {
          return postTag.includes(tag);
        });
      }); // }

      result = result && (searchString.includes(title) || title.includes(searchString));
      return result;
    });
  };

  var findTags = function findTags(searchString) {
    return searchString.split(" ").filter(_helpers_other__WEBPACK_IMPORTED_MODULE_5__["isTag"]).map(function (tag) {
      return tag.slice(1);
    });
  };

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
      lineNumber: 51,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
              tags: findTags(searchInput),
              searchString: removeTags(searchInput)
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: filterPosts(posts).map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsInNvbWUiLCJwb3N0VGFnIiwidGFnIiwiaW5jbHVkZXMiLCJmaW5kVGFncyIsInNwbGl0IiwiaXNUYWciLCJtYXAiLCJzbGljZSIsInJlbW92ZVRhZ3MiLCJ3b3JkIiwiam9pbiIsIlNJVEVfQ09OU1RBTlRTIiwic3R5bGVzIiwiZXZlbnQiLCJzZWFyY2hJbnB1dCIsInRhcmdldCIsInZhbHVlIiwiX3Bvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNoQztBQURnQyxrQkFFREMsc0RBQVEsQ0FBQztBQUN2Q0MsUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxnQkFBWSxFQUFFO0FBRnlCLEdBQUQsQ0FGUDtBQUFBLE1BRXpCQyxTQUZ5QjtBQUFBLE1BRWRDLFNBRmMsaUJBT2hDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFDakMsV0FBT0EsUUFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUM5QixVQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxLQUFWLENBQWdCRSxXQUFoQixFQUFkO0FBRDhCLFVBRXRCVCxZQUZzQixHQUVDQyxTQUZELENBRXRCRCxZQUZzQjtB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TEQsZUE4QkMscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCRDtBQUFBLGtCQUREO0FBa0NBLENBekVEOztHQUFNWCxTOztLQUFBQSxTOztBQW9GU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuOGEwZmM1Mzg3NThhMzU0ZDI2ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnMvcG9zdFwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgaXNUYWcgfSBmcm9tIFwiQC9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQb3N0c1BhZ2UgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdC8vIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKVxuXHRjb25zdCBbc2VhcmNoT2JqLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoe1xuXHRcdHRhZ3M6IFtdLFxuXHRcdHNlYXJjaFN0cmluZzogXCJcIlxuXHR9KVxuXG5cdC8vIE15IHNlYXJjaCBsb2dpY1xuXHQvLyBoYXJkIHRvIHJlYWQgYW5kIG1haW50YWluXG5cdC8vIFRPRE8gbWFrZSBpdCBlYXN5IHRvIHJlYWRcblx0Ly8gVE9ETyBtYWtlIGl0IG1haW50YWluYWJsZSBcblx0Y29uc3QgZmlsdGVyUG9zdHMgPSAocG9zdHNBcnIpID0+IHtcblx0XHRyZXR1cm4gcG9zdHNBcnIuZmlsdGVyKHBvc3QgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBwb3N0Lm1ldGEudGl0bGUudG9Mb3dlckNhc2UoKVxuXHRcdFx0Y29uc3QgeyBzZWFyY2hTdHJpbmcsIHRhZ3MgfSA9IHNlYXJjaE9ialxuXHRcdFx0bGV0IHJlc3VsdCA9IHRydWVcblxuXHRcdFx0Ly8gaWYgKHRhZ3MpIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdCAmJiBwb3N0Lm1ldGEudGFncy5zb21lKHBvc3RUYWcgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGFncy5zb21lKHRhZyA9PiBwb3N0VGFnLmluY2x1ZGVzKHRhZykpXG5cdFx0XHR9KVxuXHRcdFx0Ly8gfVxuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQgJiYgKHNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aXRsZSkgfHwgdGl0bGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKSlcblxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgZmluZFRhZ3MgPSAoc2VhcmNoU3RyaW5nKSA9PiBzZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcihpc1RhZylcblx0XHQubWFwKHRhZyA9PiB0YWcuc2xpY2UoMSkpXG5cblx0Y29uc3QgcmVtb3ZlVGFncyA9IChzZWFyY2hTdHJpbmcpID0+IHNlYXJjaFN0cmluZ1xuXHRcdC5zcGxpdChcIiBcIilcblx0XHQuZmlsdGVyKHdvcmQgPT4gIWlzVGFnKHdvcmQpKVxuXHRcdC5qb2luKFwiIFwiKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YFBvc3RzIC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSAvPlxuXG5cdFx0XHQ8TmF2IC8+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8aDI+UG9zdHM8L2gyPlxuXG5cdFx0XHRcdDxwPkhlcmUgYXJlIHRoZSBhcnRpY2xlcyBJIHdyb3RlIGJlZm9yZS48L3A+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1jb250YWluZXJcIl19PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWlucHV0XCJdfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlc1wiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8qKiBcblx0XHRcdFx0XHRcdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNlYXJjaElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0c2V0U2VhcmNoKHtcblx0XHRcdFx0XHRcdFx0XHR0YWdzOiBmaW5kVGFncyhzZWFyY2hJbnB1dCksXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoU3RyaW5nOiByZW1vdmVUYWdzKHNlYXJjaElucHV0KVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7ZmlsdGVyUG9zdHMocG9zdHMpXG5cdFx0XHRcdFx0XHQubWFwKF9wb3N0ID0+IDxQb3N0Q2FyZCBrZXk9e19wb3N0Lm1ldGEudGl0bGV9IHsuLi5fcG9zdC5tZXRhfSAvPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cG9zdHM6IGdldEFsbFBvc3RzKClcblx0XHR9XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQb3N0c1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9