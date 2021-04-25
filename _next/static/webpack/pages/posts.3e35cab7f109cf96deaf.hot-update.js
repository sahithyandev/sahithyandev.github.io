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
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global */ "./global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_5__);
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    tags: [],
    searchString: ""
  }),
      searchObj = _useState[0],
      setSearch = _useState[1];

  var log = function log() {
    var _console;

    (_console = console).log.apply(_console, arguments);
  };

  var filterPosts = function filterPosts(postsArr) {
    return postsArr.filter(function (post) {
      var title = post.meta.title.toLowerCase();
      var searchString = searchObj.searchString,
          tags = searchObj.tags;
      var result = true;

      if (!post.meta.tags.includes("mathematics")) {
        log = (Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("log"), function () {});
      }

      if (tags) {
        log("POSTTAGS", post.meta.tags);
        log("TAGS", tags);
        log(tags.includes(post.meta.tags[0]));
        result = post.meta.tags.some(function (postTag) {
          var x = tags.some(function (tag) {
            return tag.includes(postTag);
          });
          log("X", x);
          return tags.includes(postTag);
        });
        log("RE", result);
      }

      result = result || searchString.includes(title) || title.includes(searchString);
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["HeadBase"], {
      title: "Posts - ".concat(_global__WEBPACK_IMPORTED_MODULE_5__["SITE_CONSTANTS"].title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Nav"], {}, void 0, false, {
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
              tags: findTags(searchInput),
              searchString: searchInput
            }); // setTags(findTags(searchString))
            // setSearchString(searchInput)
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
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_4__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwibG9nIiwiY29uc29sZSIsImZpbHRlclBvc3RzIiwicG9zdHNBcnIiLCJmaWx0ZXIiLCJwb3N0IiwidGl0bGUiLCJtZXRhIiwidG9Mb3dlckNhc2UiLCJyZXN1bHQiLCJpbmNsdWRlcyIsInNvbWUiLCJwb3N0VGFnIiwieCIsInRhZyIsImZpbmRUYWdzIiwiX3NlYXJjaFN0cmluZyIsInNwbGl0Iiwid29yZCIsIlJlZ0V4cCIsInRlc3QiLCJtYXAiLCJyZXBsYWNlIiwiU0lURV9DT05TVEFOVFMiLCJzdHlsZXMiLCJldmVudCIsInNlYXJjaElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJfcG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDaEM7QUFEZ0Msa0JBRURDLHNEQUFRLENBQUM7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsZ0JBQVksRUFBRTtBQUZ5QixHQUFELENBRlA7QUFBQSxNQUV6QkMsU0FGeUI7QUFBQSxNQUVkQyxTQUZjOztBQU9oQyxNQUFNQyxHQUFHLEdBQUcsZUFBYztBQUFBOztBQUN6QixnQkFBQUMsT0FBTyxFQUFDRCxHQUFSO0FBQ0EsR0FGRDs7QUFJQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFDakMsV0FBT0EsUUFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUM5QixVQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxD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QUFELENBREw7QUFFVDdCLDBCQUFZLEVBQUU2QjtBQUZMLGFBQUQsQ0FBVCxDQUxvQixDQVVwQjtBQUNBO0FBQ0E7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBc0JDO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtCQUNFeEIsV0FBVyxDQUFDUixLQUFELENBQVgsQ0FDQzJCLEdBREQsQ0FDSyxVQUFBUSxLQUFLO0FBQUEsOEJBQUkscUVBQUMsb0RBQUQsb0JBQXFDQSxLQUFLLENBQUN0QixJQUEzQyxHQUFlc0IsS0FBSyxDQUFDdEIsSUFBTixDQUFXRCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FEVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsZUFpQ0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRDtBQUFBLGtCQUREO0FBcUNBLENBbkZEOztHQUFNYixTOztLQUFBQSxTOztBQThGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuM2UzNWNhYjdmMTA5Y2Y5NmRlYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnMvcG9zdFwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9zdHMubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBvc3RzUGFnZSA9ICh7IHBvc3RzIH0pID0+IHtcblx0Ly8gY29uc3QgW3NlYXJjaFN0cmluZywgc2V0U2VhcmNoU3RyaW5nXSA9IHVzZVN0YXRlKFwiXCIpXG5cdGNvbnN0IFtzZWFyY2hPYmosIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh7XG5cdFx0dGFnczogW10sXG5cdFx0c2VhcmNoU3RyaW5nOiBcIlwiXG5cdH0pXG5cblx0Y29uc3QgbG9nID0gKC4uLnRoaW5nKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coLi4udGhpbmcpXG5cdH1cblxuXHRjb25zdCBmaWx0ZXJQb3N0cyA9IChwb3N0c0FycikgPT4ge1xuXHRcdHJldHVybiBwb3N0c0Fyci5maWx0ZXIocG9zdCA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9IHBvc3QubWV0YS50aXRsZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRjb25zdCB7IHNlYXJjaFN0cmluZywgdGFncyB9ID0gc2VhcmNoT2JqXG5cdFx0XHRsZXQgcmVzdWx0ID0gdHJ1ZVxuXG5cdFx0XHRpZiAoIXBvc3QubWV0YS50YWdzLmluY2x1ZGVzKFwibWF0aGVtYXRpY3NcIikpIHtcblx0XHRcdFx0bG9nID0gKCkgPT4geyB9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0YWdzKSB7XG5cdFx0XHRcdGxvZyhcIlBPU1RUQUdTXCIsIHBvc3QubWV0YS50YWdzKVxuXHRcdFx0XHRsb2coXCJUQUdTXCIsIHRhZ3MpXG5cdFx0XHRcdGxvZyh0YWdzLmluY2x1ZGVzKHBvc3QubWV0YS50YWdzWzBdKSlcblx0XHRcdFx0cmVzdWx0ID0gcG9zdC5tZXRhLnRhZ3Muc29tZShwb3N0VGFnID0+IHtcblx0XHRcdFx0XHRjb25zdCB4ID0gdGFncy5zb21lKHRhZyA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGFnLmluY2x1ZGVzKHBvc3RUYWcpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRsb2coXCJYXCIsIHgpXG5cdFx0XHRcdFx0cmV0dXJuIHRhZ3MuaW5jbHVkZXMocG9zdFRhZylcblx0XHRcdFx0fSlcblx0XHRcdFx0bG9nKFwiUkVcIiwgcmVzdWx0KVxuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQgfHwgc2VhcmNoU3RyaW5nLmluY2x1ZGVzKHRpdGxlKSB8fCB0aXRsZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpXG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IGZpbmRUYWdzID0gKF9zZWFyY2hTdHJpbmcpID0+IF9zZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcih3b3JkID0+IG5ldyBSZWdFeHAoL14jW0EtWmEtel0qJC9pKS50ZXN0KHdvcmQpKVxuXHRcdC5tYXAod29yZCA9PiB3b3JkLnJlcGxhY2UoXCIjXCIsIFwiXCIpKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YFBvc3RzIC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSAvPlxuXG5cdFx0XHQ8TmF2IC8+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8aDI+UG9zdHM8L2gyPlxuXG5cdFx0XHRcdDxwPkhlcmUgYXJlIHRoZSBhcnRpY2xlcyBJIHdyb3RlIGJlZm9yZS48L3A+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1jb250YWluZXJcIl19PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWlucHV0XCJdfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlc1wiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8qKiBcblx0XHRcdFx0XHRcdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNlYXJjaElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0c2V0U2VhcmNoKHtcblx0XHRcdFx0XHRcdFx0XHR0YWdzOiBmaW5kVGFncyhzZWFyY2hJbnB1dCksXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoU3RyaW5nOiBzZWFyY2hJbnB1dFxuXHRcdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0XHRcdC8vIHNldFRhZ3MoZmluZFRhZ3Moc2VhcmNoU3RyaW5nKSlcblx0XHRcdFx0XHRcdFx0Ly8gc2V0U2VhcmNoU3RyaW5nKHNlYXJjaElucHV0KVxuXHRcdFx0XHRcdFx0fX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7ZmlsdGVyUG9zdHMocG9zdHMpXG5cdFx0XHRcdFx0XHQubWFwKF9wb3N0ID0+IDxQb3N0Q2FyZCBrZXk9e19wb3N0Lm1ldGEudGl0bGV9IHsuLi5fcG9zdC5tZXRhfSAvPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cG9zdHM6IGdldEFsbFBvc3RzKClcblx0XHR9XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQb3N0c1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9