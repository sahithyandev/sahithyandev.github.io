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
      lineNumber: 59,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
          lineNumber: 69,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "posts-container",
        children: filterPosts(posts).map(function (_post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["PostCard"], _objectSpread({}, _post.meta), _post.meta.title, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImxvZyIsImNvbnNvbGUiLCJpbmNsdWRlcyIsInNvbWUiLCJwb3N0VGFnIiwidGFnIiwiZmluZFRhZ3MiLCJzcGxpdCIsImlzVGFnIiwibWFwIiwic2xpY2UiLCJyZW1vdmVUYWdzIiwid29yZCIsImpvaW4iLCJTSVRFX0NPTlNUQU5UUyIsInN0eWxlcyIsImV2ZW50Iiwic2VhcmNoSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9wb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBOztBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDaEM7QUFEZ0Msa0JBRURDLHNEQUFRLENBQUM7QUFDdkNDLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsZ0JBQVksRUFBRTtBQUZ5QixHQUFELENBRlA7QUFBQSxNQUV6QkMsU0FGeUI7QUFBQSxNQUVkQyxTQUZjOztBQU9oQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQWM7QUFDakMsV0FBT0EsUUFBUSxDQUFDQyxNQUFULENBQWdCLFVBQUFDLElBQUksRUFBSTtBQUM5QixVQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxLQUFWLENBQWdCRSxXQUFoQixFQUFkO0FBRDhCLFVBRXRCVCxZQUZzQixHQUVDQyxTQUZELENBRXRCRCxZQUZzQjtBQUFBLFVB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LFdBQUQsQ0FETDtBQUVUNUIsMEJBQVksRUFBRXNCLFVBQVUsQ0FBQ00sV0FBRDtBQUZmLGFBQUQsQ0FBVDtBQUlBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRCxlQW1CQztBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxrQkFDRXpCLFdBQVcsQ0FBQ04sS0FBRCxDQUFYLENBQ0N1QixHQURELENBQ0ssVUFBQVcsS0FBSztBQUFBLDhCQUFJLHFFQUFDLG9EQUFELG9CQUFxQ0EsS0FBSyxDQUFDdkIsSUFBM0MsR0FBZXVCLEtBQUssQ0FBQ3ZCLElBQU4sQ0FBV0QsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBSjtBQUFBLFNBRFY7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxELGVBOEJDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5QkQ7QUFBQSxrQkFERDtBQWtDQSxDQWpGRDs7R0FBTVgsUzs7S0FBQUEsUzs7QUE0RlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLmMwZGE5NTFiMzJkZDBlZjYzZjBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IEhlYWRCYXNlLCBOYXYsIEZvb3RlciwgUG9zdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXG5pbXBvcnQgeyBnZXRBbGxQb3N0cyB9IGZyb20gXCIuLi9oZWxwZXJzL3Bvc3RcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcbmltcG9ydCB7IGlzVGFnIH0gZnJvbSBcIkAvaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0cy5tb2R1bGUuY3NzXCJcblxuY29uc3QgUG9zdHNQYWdlID0gKHsgcG9zdHMgfSkgPT4ge1xuXHQvLyBjb25zdCBbc2VhcmNoU3RyaW5nLCBzZXRTZWFyY2hTdHJpbmddID0gdXNlU3RhdGUoXCJcIilcblx0Y29uc3QgW3NlYXJjaE9iaiwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHtcblx0XHR0YWdzOiBbXSxcblx0XHRzZWFyY2hTdHJpbmc6IFwiXCJcblx0fSlcblxuXHRjb25zdCBmaWx0ZXJQb3N0cyA9IChwb3N0c0FycikgPT4ge1xuXHRcdHJldHVybiBwb3N0c0Fyci5maWx0ZXIocG9zdCA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9IHBvc3QubWV0YS50aXRsZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRjb25zdCB7IHNlYXJjaFN0cmluZywgdGFncyB9ID0gc2VhcmNoT2JqXG5cdFx0XHRsZXQgcmVzdWx0ID0gdHJ1ZVxuXG5cdFx0XHRsZXQgbG9nID0gKC4uLnRoaW5nKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKC4uLnRoaW5nKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXBvc3QubWV0YS50YWdzLmluY2x1ZGVzKFwibWF0aGVtYXRpY3NcIikpIHtcblx0XHRcdFx0bG9nID0gKCkgPT4geyB9XG5cdFx0XHR9XG5cblx0XHRcdGxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcblx0XHRcdGlmICh0YWdzKSB7XG5cdFx0XHRcdGxvZyhcIlBPU1RUQUdTXCIsIHBvc3QubWV0YS50YWdzKVxuXHRcdFx0XHRsb2coXCJUQUdTXCIsIHRhZ3MpXG5cdFx0XHRcdGxvZyh0YWdzLmluY2x1ZGVzKHBvc3QubWV0YS50YWdzWzBdKSlcblx0XHRcdFx0cmVzdWx0ID0gcG9zdC5tZXRhLnRhZ3Muc29tZShwb3N0VGFnID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gdGFncy5zb21lKHRhZyA9PiBwb3N0VGFnLmluY2x1ZGVzKHRhZykpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHJlc3VsdCAmJiAoc2VhcmNoU3RyaW5nLmluY2x1ZGVzKHRpdGxlKSB8fCB0aXRsZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBmaW5kVGFncyA9IChzZWFyY2hTdHJpbmcpID0+IHNlYXJjaFN0cmluZ1xuXHRcdC5zcGxpdChcIiBcIilcblx0XHQuZmlsdGVyKGlzVGFnKVxuXHRcdC5tYXAodGFnID0+IHRhZy5zbGljZSgxKSlcblxuXHRjb25zdCByZW1vdmVUYWdzID0gKHNlYXJjaFN0cmluZykgPT4gc2VhcmNoU3RyaW5nXG5cdFx0LnNwbGl0KFwiIFwiKVxuXHRcdC5maWx0ZXIod29yZCA9PiAhaXNUYWcod29yZCkpXG5cdFx0LmpvaW4oXCIgXCIpXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgUG9zdHMgLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IC8+XG5cblx0XHRcdDxOYXYgLz5cblxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxoMj5Qb3N0czwvaDI+XG5cblx0XHRcdFx0PHA+SGVyZSBhcmUgdGhlIGFydGljbGVzIEkgd3JvdGUgYmVmb3JlLjwvcD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWNvbnRhaW5lclwiXX0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtaW5wdXRcIl19IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFydGljbGVzXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0LyoqIFxuXHRcdFx0XHRcdFx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdFx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0XHRzZXRTZWFyY2goe1xuXHRcdFx0XHRcdFx0XHRcdHRhZ3M6IGZpbmRUYWdzKHNlYXJjaElucHV0KSxcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hTdHJpbmc6IHJlbW92ZVRhZ3Moc2VhcmNoSW5wdXQpXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHtmaWx0ZXJQb3N0cyhwb3N0cylcblx0XHRcdFx0XHRcdC5tYXAoX3Bvc3QgPT4gPFBvc3RDYXJkIGtleT17X3Bvc3QubWV0YS50aXRsZX0gey4uLl9wb3N0Lm1ldGF9IC8+KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRwb3N0czogZ2V0QWxsUG9zdHMoKVxuXHRcdH1cblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=