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
        console.log("POSTTAGS", post.meta.tags);
        console.log("TAGS", tags);
        console.log(tags.includes(post.meta.tags[0]));
        result = post.meta.tags.some(function (postTag) {
          return tags.includes(postTag);
        });
        console.log("RE", result);
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
      lineNumber: 45,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
          lineNumber: 55,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: filterPosts(posts).map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInNvbWUiLCJwb3N0VGFnIiwiZmluZFRhZ3MiLCJfc2VhcmNoU3RyaW5nIiwic3BsaXQiLCJ3b3JkIiwiUmVnRXhwIiwidGVzdCIsIm1hcCIsInJlcGxhY2UiLCJTSVRFX0NPTlNUQU5UUyIsInN0eWxlcyIsImV2ZW50Iiwic2VhcmNoSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9wb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDaEM7QUFEZ0Msa0JBRURDLHNEQUFRLENBQUM7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsZ0JBQVksRUFBRTtBQUZ5QixHQUFELENBRlA7QUFBQSxNQUV6QkMsU0FGeUI7QUFBQSxNQUVkQyxTQUZjOztBQU9oQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFDakMsV0FBT0EsUUFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUM5QixVQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxLQUFWLENBQWdCRSxXQUFoQixFQUFkO0FBRDhCLFVBRXRCVCxZQUZzQixHQUVDQyxTQUZELENBRXRCRCxZQUZzQjtBQUFBLFVBRVJELElB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O0FBQUE7QUFBQTtBQUFBLGVBdEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxELGVBaUNDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0Q7QUFBQSxrQkFERDtBQXFDQSxDQXZFRDs7R0FBTVgsUzs7S0FBQUEsUzs7QUFrRlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLmE5MmQ3YjZhYjMzNTJmMTQzODk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IEhlYWRCYXNlLCBOYXYsIEZvb3RlciwgUG9zdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9oZWxwZXJzL3Bvc3RcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQb3N0c1BhZ2UgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdC8vIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKVxuXHRjb25zdCBbc2VhcmNoT2JqLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoe1xuXHRcdHRhZ3M6IFtdLFxuXHRcdHNlYXJjaFN0cmluZzogXCJcIlxuXHR9KVxuXG5cdGNvbnN0IGZpbHRlclBvc3RzID0gKHBvc3RzQXJyKSA9PiB7XG5cdFx0cmV0dXJuIHBvc3RzQXJyLmZpbHRlcihwb3N0ID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gcG9zdC5tZXRhLnRpdGxlLnRvTG93ZXJDYXNlKClcblx0XHRcdGNvbnN0IHsgc2VhcmNoU3RyaW5nLCB0YWdzIH0gPSBzZWFyY2hPYmpcblx0XHRcdGxldCByZXN1bHQgPSB0cnVlXG5cblx0XHRcdGlmICh0YWdzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUE9TVFRBR1NcIiwgcG9zdC5tZXRhLnRhZ3MpXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiVEFHU1wiLCB0YWdzKVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0YWdzLmluY2x1ZGVzKHBvc3QubWV0YS50YWdzWzBdKSlcblx0XHRcdFx0cmVzdWx0ID0gcG9zdC5tZXRhLnRhZ3Muc29tZShwb3N0VGFnID0+XG5cdFx0XHRcdFx0dGFncy5pbmNsdWRlcyhwb3N0VGFnKVxuXHRcdFx0XHQpXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUkVcIiwgcmVzdWx0KVxuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQgJiYgc2VhcmNoU3RyaW5nLmluY2x1ZGVzKHRpdGxlKSB8fCB0aXRsZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpXG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IGZpbmRUYWdzID0gKF9zZWFyY2hTdHJpbmcpID0+IF9zZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcih3b3JkID0+IG5ldyBSZWdFeHAoL14jW0EtWmEtel0qJC9pKS50ZXN0KHdvcmQpKVxuXHRcdC5tYXAod29yZCA9PiB3b3JkLnJlcGxhY2UoXCIjXCIsIFwiXCIpKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YFBvc3RzIC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSAvPlxuXG5cdFx0XHQ8TmF2IC8+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8aDI+UG9zdHM8L2gyPlxuXG5cdFx0XHRcdDxwPkhlcmUgYXJlIHRoZSBhcnRpY2xlcyBJIHdyb3RlIGJlZm9yZS48L3A+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1jb250YWluZXJcIl19PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWlucHV0XCJdfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlc1wiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8qKiBcblx0XHRcdFx0XHRcdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNlYXJjaElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0c2V0U2VhcmNoKHtcblx0XHRcdFx0XHRcdFx0XHR0YWdzOiBmaW5kVGFncyhzZWFyY2hJbnB1dCksXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoU3RyaW5nOiBzZWFyY2hJbnB1dFxuXHRcdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0XHRcdC8vIHNldFRhZ3MoZmluZFRhZ3Moc2VhcmNoU3RyaW5nKSlcblx0XHRcdFx0XHRcdFx0Ly8gc2V0U2VhcmNoU3RyaW5nKHNlYXJjaElucHV0KVxuXHRcdFx0XHRcdFx0fX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7ZmlsdGVyUG9zdHMocG9zdHMpXG5cdFx0XHRcdFx0XHQubWFwKF9wb3N0ID0+IDxQb3N0Q2FyZCBrZXk9e19wb3N0Lm1ldGEudGl0bGV9IHsuLi5fcG9zdC5tZXRhfSAvPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cG9zdHM6IGdldEFsbFBvc3RzKClcblx0XHR9XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQb3N0c1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9