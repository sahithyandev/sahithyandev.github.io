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
          var x = tags.some(function (tag) {
            tag.includes(postTag);
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeadBase"], {
      title: "Posts - ".concat(_global__WEBPACK_IMPORTED_MODULE_4__["SITE_CONSTANTS"].title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
          lineNumber: 59,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: filterPosts(posts).map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInNvbWUiLCJwb3N0VGFnIiwieCIsInRhZyIsImZpbmRUYWdzIiwiX3NlYXJjaFN0cmluZyIsInNwbGl0Iiwid29yZCIsIlJlZ0V4cCIsInRlc3QiLCJtYXAiLCJyZXBsYWNlIiwiU0lURV9DT05TVEFOVFMiLCJzdHlsZXMiLCJldmVudCIsInNlYXJjaElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJfcG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ2hDO0FBRGdDLGtCQUVEQyxzREFBUSxDQUFDO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGdCQUFZLEVBQUU7QUFGeUIsR0FBRCxDQUZQO0FBQUEsTUFFekJDLFNBRnlCO0FBQUEsTUFFZEMsU0FGYzs7QUFPaEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRCxFQUFjO0FBQ2pDLFdBQU9BLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixVQUFBQyxJQUFJLEVBQUk7QUFDOUIsVUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLElBQUwsQ0FBVUQsS0FBVixDQUFnQkUsV0FBaEIsRUFBZDtBQUQ4QixVQUV0QlQsWUFGc0IsR0FFQ0MsU0FGRCxDQUV0QkQsWUFGc0I7QUFB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LEtBQUQsQ0FBWCxDQUNDMkIsR0FERCxDQUNLLFVBQUFRLEtBQUs7QUFBQSw4QkFBSSxxRUFBQyxvREFBRCxvQkFBcUNBLEtBQUssQ0FBQ3hCLElBQTNDLEdBQWV3QixLQUFLLENBQUN4QixJQUFOLENBQVdELEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQURWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRCxlQWlDQyxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNEO0FBQUEsa0JBREQ7QUFxQ0EsQ0EzRUQ7O0dBQU1YLFM7O0tBQUFBLFM7O0FBc0ZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy5mMzk1ODllY2RhNWI4MGM1MmQzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBIZWFkQmFzZSwgTmF2LCBGb290ZXIsIFBvc3RDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vaGVscGVycy9wb3N0XCJcbmltcG9ydCB7IFNJVEVfQ09OU1RBTlRTIH0gZnJvbSBcIi4uL2dsb2JhbFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0cy5tb2R1bGUuY3NzXCJcblxuY29uc3QgUG9zdHNQYWdlID0gKHsgcG9zdHMgfSkgPT4ge1xuXHQvLyBjb25zdCBbc2VhcmNoU3RyaW5nLCBzZXRTZWFyY2hTdHJpbmddID0gdXNlU3RhdGUoXCJcIilcblx0Y29uc3QgW3NlYXJjaE9iaiwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHtcblx0XHR0YWdzOiBbXSxcblx0XHRzZWFyY2hTdHJpbmc6IFwiXCJcblx0fSlcblxuXHRjb25zdCBmaWx0ZXJQb3N0cyA9IChwb3N0c0FycikgPT4ge1xuXHRcdHJldHVybiBwb3N0c0Fyci5maWx0ZXIocG9zdCA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9IHBvc3QubWV0YS50aXRsZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRjb25zdCB7IHNlYXJjaFN0cmluZywgdGFncyB9ID0gc2VhcmNoT2JqXG5cdFx0XHRsZXQgcmVzdWx0ID0gdHJ1ZVxuXG5cdFx0XHRpZiAodGFncykge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlBPU1RUQUdTXCIsIHBvc3QubWV0YS50YWdzKVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlRBR1NcIiwgdGFncylcblx0XHRcdFx0Y29uc29sZS5sb2codGFncy5pbmNsdWRlcyhwb3N0Lm1ldGEudGFnc1swXSkpXG5cdFx0XHRcdHJlc3VsdCA9IHBvc3QubWV0YS50YWdzLnNvbWUocG9zdFRhZyA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgeCA9IHRhZ3Muc29tZSh0YWcgPT4ge1xuXHRcdFx0XHRcdFx0dGFnLmluY2x1ZGVzKHBvc3RUYWcpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlhcIiwgeClcblx0XHRcdFx0XHRyZXR1cm4gdGFncy5pbmNsdWRlcyhwb3N0VGFnKVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlJFXCIsIHJlc3VsdClcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0IHx8IHNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aXRsZSkgfHwgdGl0bGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBmaW5kVGFncyA9IChfc2VhcmNoU3RyaW5nKSA9PiBfc2VhcmNoU3RyaW5nXG5cdFx0LnNwbGl0KFwiIFwiKVxuXHRcdC5maWx0ZXIod29yZCA9PiBuZXcgUmVnRXhwKC9eI1tBLVphLXpdKiQvaSkudGVzdCh3b3JkKSlcblx0XHQubWFwKHdvcmQgPT4gd29yZC5yZXBsYWNlKFwiI1wiLCBcIlwiKSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZEJhc2UgdGl0bGU9e2BQb3N0cyAtICR7U0lURV9DT05TVEFOVFMudGl0bGV9YH0gLz5cblxuXHRcdFx0PE5hdiAvPlxuXG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PGgyPlBvc3RzPC9oMj5cblxuXHRcdFx0XHQ8cD5IZXJlIGFyZSB0aGUgYXJ0aWNsZXMgSSB3cm90ZSBiZWZvcmUuPC9wPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1pbnB1dFwiXX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXJ0aWNsZXNcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQvKiogXG5cdFx0XHRcdFx0XHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0XHRcdFx0XHRcdCAqL1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0XHRcdHNldFNlYXJjaCh7XG5cdFx0XHRcdFx0XHRcdFx0dGFnczogZmluZFRhZ3Moc2VhcmNoSW5wdXQpLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFN0cmluZzogc2VhcmNoSW5wdXRcblx0XHRcdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdFx0XHQvLyBzZXRUYWdzKGZpbmRUYWdzKHNlYXJjaFN0cmluZykpXG5cdFx0XHRcdFx0XHRcdC8vIHNldFNlYXJjaFN0cmluZyhzZWFyY2hJbnB1dClcblx0XHRcdFx0XHRcdH19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e2ZpbHRlclBvc3RzKHBvc3RzKVxuXHRcdFx0XHRcdFx0Lm1hcChfcG9zdCA9PiA8UG9zdENhcmQga2V5PXtfcG9zdC5tZXRhLnRpdGxlfSB7Li4uX3Bvc3QubWV0YX0gLz4pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBvc3RzOiBnZXRBbGxQb3N0cygpXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==