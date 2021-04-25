webpackHotUpdate_N_E("pages/posts",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

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
        console.log("POSTTAGS", post.meta.tags);
        console.log("TAGS", tags);
        console.log(tags.includes(post.meta.tags[0]));
        result = post.meta.tags.some(function (postTag) {
          var x = tags.some(function (tag) {
            return tag.includes(postTag);
          });
          console.log("X", x);
          return tags.includes(postTag);
        });
        console.log("RE", result);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzLmpzeCJdLCJuYW1lcyI6WyJQb3N0c1BhZ2UiLCJwb3N0cyIsInVzZVN0YXRlIiwidGFncyIsInNlYXJjaFN0cmluZyIsInNlYXJjaE9iaiIsInNldFNlYXJjaCIsImxvZyIsImNvbnNvbGUiLCJmaWx0ZXJQb3N0cyIsInBvc3RzQXJyIiwiZmlsdGVyIiwicG9zdCIsInRpdGxlIiwibWV0YSIsInRvTG93ZXJDYXNlIiwicmVzdWx0IiwiaW5jbHVkZXMiLCJzb21lIiwicG9zdFRhZyIsIngiLCJ0YWciLCJmaW5kVGFncyIsIl9zZWFyY2hTdHJpbmciLCJzcGxpdCIsIndvcmQiLCJSZWdFeHAiLCJ0ZXN0IiwibWFwIiwicmVwbGFjZSIsIlNJVEVfQ09OU1RBTlRTIiwic3R5bGVzIiwiZXZlbnQiLCJzZWFyY2hJbnB1dCIsInRhcmdldCIsInZhbHVlIiwiX3Bvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDaEM7QUFEZ0Msa0JBRURDLHNEQUFRLENBQUM7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsZ0JBQVksRUFBRTtBQUZ5QixHQUFELENBRlA7QUFBQSxNQUV6QkMsU0FGeUI7QUFBQSxNQUVkQyxTQUZjOztBQU9oQyxNQUFNQyxHQUFHLEdBQUcsZUFBYztBQUFBOztBQUN6QixnQkFBQUMsT0FBTyxFQUFDRCxHQUFSO0FBQ0EsR0FGRDs7QUFJQSxNQUFNRSxXQUFXLEdBQUcsU0FB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LGtCQUFDQyxLQUFELEVBQVc7QUFDcEI7QUFDUDtBQUNBO0FBQ08sZ0JBQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJwQixXQUFuQixFQUFwQjtBQUNBVCxxQkFBUyxDQUFDO0FBQ1RILGtCQUFJLEVBQUVtQixRQUFRLENBQUNXLFdBQUQsQ0FETDtBQUVUN0IsMEJBQVksRUFBRTZCO0FBRkwsYUFBRCxDQUFULENBTG9CLENBVXBCO0FBQ0E7QUFDQTtBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQsZUFzQkM7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0JBQ0V4QixXQUFXLENBQUNSLEtBQUQsQ0FBWCxDQUNDMkIsR0FERCxDQUNLLFVBQUFRLEtBQUs7QUFBQSw4QkFBSSxxRUFBQyxvREFBRCxvQkFBcUNBLEtBQUssQ0FBQ3RCLElBQTNDLEdBQWVzQixLQUFLLENBQUN0QixJQUFOLENBQVdELEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQURWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRCxlQWlDQyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNEO0FBQUEsa0JBREQ7QUFxQ0EsQ0FuRkQ7O0dBQU1iLFM7O0tBQUFBLFM7O0FBOEZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy44YTM2NDdmMDY5NzBhOTRhNzdkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBIZWFkQmFzZSwgTmF2LCBGb290ZXIsIFBvc3RDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vaGVscGVycy9wb3N0XCJcbmltcG9ydCB7IFNJVEVfQ09OU1RBTlRTIH0gZnJvbSBcIi4uL2dsb2JhbFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0cy5tb2R1bGUuY3NzXCJcblxuY29uc3QgUG9zdHNQYWdlID0gKHsgcG9zdHMgfSkgPT4ge1xuXHQvLyBjb25zdCBbc2VhcmNoU3RyaW5nLCBzZXRTZWFyY2hTdHJpbmddID0gdXNlU3RhdGUoXCJcIilcblx0Y29uc3QgW3NlYXJjaE9iaiwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHtcblx0XHR0YWdzOiBbXSxcblx0XHRzZWFyY2hTdHJpbmc6IFwiXCJcblx0fSlcblxuXHRjb25zdCBsb2cgPSAoLi4udGhpbmcpID0+IHtcblx0XHRjb25zb2xlLmxvZyguLi50aGluZylcblx0fVxuXG5cdGNvbnN0IGZpbHRlclBvc3RzID0gKHBvc3RzQXJyKSA9PiB7XG5cdFx0cmV0dXJuIHBvc3RzQXJyLmZpbHRlcihwb3N0ID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gcG9zdC5tZXRhLnRpdGxlLnRvTG93ZXJDYXNlKClcblx0XHRcdGNvbnN0IHsgc2VhcmNoU3RyaW5nLCB0YWdzIH0gPSBzZWFyY2hPYmpcblx0XHRcdGxldCByZXN1bHQgPSB0cnVlXG5cblx0XHRcdGlmICghcG9zdC5tZXRhLnRhZ3MuaW5jbHVkZXMoXCJtYXRoZW1hdGljc1wiKSkge1xuXHRcdFx0XHRsb2cgPSAoKSA9PiB7IH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRhZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJQT1NUVEFHU1wiLCBwb3N0Lm1ldGEudGFncylcblx0XHRcdFx0Y29uc29sZS5sb2coXCJUQUdTXCIsIHRhZ3MpXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRhZ3MuaW5jbHVkZXMocG9zdC5tZXRhLnRhZ3NbMF0pKVxuXHRcdFx0XHRyZXN1bHQgPSBwb3N0Lm1ldGEudGFncy5zb21lKHBvc3RUYWcgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHggPSB0YWdzLnNvbWUodGFnID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB0YWcuaW5jbHVkZXMocG9zdFRhZylcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiWFwiLCB4KVxuXHRcdFx0XHRcdHJldHVybiB0YWdzLmluY2x1ZGVzKHBvc3RUYWcpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUkVcIiwgcmVzdWx0KVxuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQgfHwgc2VhcmNoU3RyaW5nLmluY2x1ZGVzKHRpdGxlKSB8fCB0aXRsZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpXG5cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IGZpbmRUYWdzID0gKF9zZWFyY2hTdHJpbmcpID0+IF9zZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcih3b3JkID0+IG5ldyBSZWdFeHAoL14jW0EtWmEtel0qJC9pKS50ZXN0KHdvcmQpKVxuXHRcdC5tYXAod29yZCA9PiB3b3JkLnJlcGxhY2UoXCIjXCIsIFwiXCIpKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YFBvc3RzIC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSAvPlxuXG5cdFx0XHQ8TmF2IC8+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8aDI+UG9zdHM8L2gyPlxuXG5cdFx0XHRcdDxwPkhlcmUgYXJlIHRoZSBhcnRpY2xlcyBJIHdyb3RlIGJlZm9yZS48L3A+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1jb250YWluZXJcIl19PlxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWlucHV0XCJdfSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhcnRpY2xlc1wiXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdC8qKiBcblx0XHRcdFx0XHRcdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHRcdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNlYXJjaElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKClcblx0XHRcdFx0XHRcdFx0c2V0U2VhcmNoKHtcblx0XHRcdFx0XHRcdFx0XHR0YWdzOiBmaW5kVGFncyhzZWFyY2hJbnB1dCksXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoU3RyaW5nOiBzZWFyY2hJbnB1dFxuXHRcdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0XHRcdC8vIHNldFRhZ3MoZmluZFRhZ3Moc2VhcmNoU3RyaW5nKSlcblx0XHRcdFx0XHRcdFx0Ly8gc2V0U2VhcmNoU3RyaW5nKHNlYXJjaElucHV0KVxuXHRcdFx0XHRcdFx0fX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0cy1jb250YWluZXJcIj5cblx0XHRcdFx0XHR7ZmlsdGVyUG9zdHMocG9zdHMpXG5cdFx0XHRcdFx0XHQubWFwKF9wb3N0ID0+IDxQb3N0Q2FyZCBrZXk9e19wb3N0Lm1ldGEudGl0bGV9IHsuLi5fcG9zdC5tZXRhfSAvPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cG9zdHM6IGdldEFsbFBvc3RzKClcblx0XHR9XG5cdH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQb3N0c1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9