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

  var findTags = function findTags(_searchString) {
    return _searchString.split(" ").filter(_helpers_other__WEBPACK_IMPORTED_MODULE_5__["isTag"]).map(function (word) {
      return word.replace("#", "");
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["HeadBase"], {
      title: "Posts - ".concat(_global__WEBPACK_IMPORTED_MODULE_4__["SITE_CONSTANTS"].title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Here are the articles I wrote before."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
            }); // setTags(findTags(searchString))
            // setSearchString(searchInput)
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImxvZyIsImNvbnNvbGUiLCJpbmNsdWRlcyIsInNvbWUiLCJwb3N0VGFnIiwidGFnIiwiZmluZFRhZ3MiLCJfc2VhcmNoU3RyaW5nIiwic3BsaXQiLCJpc1RhZyIsIm1hcCIsIndvcmQiLCJyZXBsYWNlIiwiU0lURV9DT05TVEFOVFMiLCJzdHlsZXMiLCJldmVudCIsInNlYXJjaElucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJyZW1vdmVUYWdzIiwiX3Bvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNoQztBQURnQyxrQkFFREMsc0RBQVEsQ0FBQztBQUN2Q0MsUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxnQkFBWSxFQUFFO0FBRnlCLEdBQUQsQ0FGUDtBQUFBLE1BRXpCQyxTQUZ5QjtBQUFBLE1BRWRDLFNBRmM7O0FBT2hDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUNqQyxXQUFPQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQzlCLFVBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxJQUFMLENBQVVELEtBQVYsQ0FBZ0JFLFdBQWhCLEVBQWQ7QUFEOEIsVUFFdEJULFlBRnNCLEdBRUNDLFNBRkQsQ0FFdEJELFlB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TixLQUFELENBQVgsQ0FDQ3dCLEdBREQsQ0FDSyxVQUFBVSxLQUFLO0FBQUEsOEJBQUkscUVBQUMsb0RBQUQsb0JBQXFDQSxLQUFLLENBQUN2QixJQUEzQyxHQUFldUIsS0FBSyxDQUFDdkIsSUFBTixDQUFXRCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FEVjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsZUFpQ0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRDtBQUFBLGtCQUREO0FBcUNBLENBL0VEOztHQUFNWCxTOztLQUFBQSxTOztBQTBGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuM2Y2ODMzNzhiNDNkNzUzZWNkOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnMvcG9zdFwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgaXNUYWcgfSBmcm9tIFwiQC9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQb3N0c1BhZ2UgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdC8vIGNvbnN0IFtzZWFyY2hTdHJpbmcsIHNldFNlYXJjaFN0cmluZ10gPSB1c2VTdGF0ZShcIlwiKVxuXHRjb25zdCBbc2VhcmNoT2JqLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoe1xuXHRcdHRhZ3M6IFtdLFxuXHRcdHNlYXJjaFN0cmluZzogXCJcIlxuXHR9KVxuXG5cdGNvbnN0IGZpbHRlclBvc3RzID0gKHBvc3RzQXJyKSA9PiB7XG5cdFx0cmV0dXJuIHBvc3RzQXJyLmZpbHRlcihwb3N0ID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gcG9zdC5tZXRhLnRpdGxlLnRvTG93ZXJDYXNlKClcblx0XHRcdGNvbnN0IHsgc2VhcmNoU3RyaW5nLCB0YWdzIH0gPSBzZWFyY2hPYmpcblx0XHRcdGxldCByZXN1bHQgPSB0cnVlXG5cblx0XHRcdGxldCBsb2cgPSAoLi4udGhpbmcpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coLi4udGhpbmcpXG5cdFx0XHR9XG5cblx0XHRcdGlmICghcG9zdC5tZXRhLnRhZ3MuaW5jbHVkZXMoXCJtYXRoZW1hdGljc1wiKSkge1xuXHRcdFx0XHRsb2cgPSAoKSA9PiB7IH1cblx0XHRcdH1cblxuXHRcdFx0bG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxuXHRcdFx0aWYgKHRhZ3MpIHtcblx0XHRcdFx0bG9nKFwiUE9TVFRBR1NcIiwgcG9zdC5tZXRhLnRhZ3MpXG5cdFx0XHRcdGxvZyhcIlRBR1NcIiwgdGFncylcblx0XHRcdFx0bG9nKHRhZ3MuaW5jbHVkZXMocG9zdC5tZXRhLnRhZ3NbMF0pKVxuXHRcdFx0XHRyZXN1bHQgPSBwb3N0Lm1ldGEudGFncy5zb21lKHBvc3RUYWcgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0YWdzLnNvbWUodGFnID0+IHBvc3RUYWcuaW5jbHVkZXModGFnKSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0ICYmIHNlYXJjaFN0cmluZy5pbmNsdWRlcyh0aXRsZSkgfHwgdGl0bGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nKVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBmaW5kVGFncyA9IChfc2VhcmNoU3RyaW5nKSA9PiBfc2VhcmNoU3RyaW5nXG5cdFx0LnNwbGl0KFwiIFwiKVxuXHRcdC5maWx0ZXIoaXNUYWcpXG5cdFx0Lm1hcCh3b3JkID0+IHdvcmQucmVwbGFjZShcIiNcIiwgXCJcIikpXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgUG9zdHMgLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IC8+XG5cblx0XHRcdDxOYXYgLz5cblxuXHRcdFx0PG1haW4+XG5cdFx0XHRcdDxoMj5Qb3N0czwvaDI+XG5cblx0XHRcdFx0PHA+SGVyZSBhcmUgdGhlIGFydGljbGVzIEkgd3JvdGUgYmVmb3JlLjwvcD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic2VhcmNoLWNvbnRhaW5lclwiXX0+XG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtaW5wdXRcIl19IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFydGljbGVzXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0LyoqIFxuXHRcdFx0XHRcdFx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdFx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdFx0XHRzZXRTZWFyY2goe1xuXHRcdFx0XHRcdFx0XHRcdHRhZ3M6IGZpbmRUYWdzKHNlYXJjaElucHV0KSxcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2hTdHJpbmc6IHJlbW92ZVRhZ3Moc2VhcmNoSW5wdXQpXG5cdFx0XHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHRcdFx0Ly8gc2V0VGFncyhmaW5kVGFncyhzZWFyY2hTdHJpbmcpKVxuXHRcdFx0XHRcdFx0XHQvLyBzZXRTZWFyY2hTdHJpbmcoc2VhcmNoSW5wdXQpXG5cdFx0XHRcdFx0XHR9fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHtmaWx0ZXJQb3N0cyhwb3N0cylcblx0XHRcdFx0XHRcdC5tYXAoX3Bvc3QgPT4gPFBvc3RDYXJkIGtleT17X3Bvc3QubWV0YS50aXRsZX0gey4uLl9wb3N0Lm1ldGF9IC8+KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cblx0XHRcdDxGb290ZXIgLz5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHRwb3N0czogZ2V0QWxsUG9zdHMoKVxuXHRcdH1cblx0fVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=