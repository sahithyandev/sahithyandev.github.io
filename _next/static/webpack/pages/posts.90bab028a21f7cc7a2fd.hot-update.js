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

      if (tags) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMuanN4Il0sIm5hbWVzIjpbIlBvc3RzUGFnZSIsInBvc3RzIiwidXNlU3RhdGUiLCJ0YWdzIiwic2VhcmNoU3RyaW5nIiwic2VhcmNoT2JqIiwic2V0U2VhcmNoIiwiZmlsdGVyUG9zdHMiLCJwb3N0c0FyciIsImZpbHRlciIsInBvc3QiLCJ0aXRsZSIsIm1ldGEiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsInNvbWUiLCJwb3N0VGFnIiwidGFnIiwiaW5jbHVkZXMiLCJmaW5kVGFncyIsInNwbGl0IiwiaXNUYWciLCJtYXAiLCJzbGljZSIsInJlbW92ZVRhZ3MiLCJ3b3JkIiwiam9pbiIsIlNJVEVfQ09OU1RBTlRTIiwic3R5bGVzIiwiZXZlbnQiLCJzZWFyY2hJbnB1dCIsInRhcmdldCIsInZhbHVlIiwiX3Bvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDO0FBQ3ZDQyxRQUFJLEVBQUUsRUFEaUM7QUFFdkNDLGdCQUFZLEVBQUU7QUFGeUIsR0FBRCxDQURQO0FBQUEsTUFDekJDLFNBRHlCO0FBQUEsTUFDZEMsU0FEYyxpQkFNaEM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBYztBQUNqQyxXQUFPQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IsVUFBQUMsSUFBSSxFQUFJO0FBQzlCLFVBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxJQUFMLENBQVVELEtBQVYsQ0FBZ0JFLFdBQWhCLEVBQWQ7QUFEOEIsVUFFdEJULFlBRnNCLEdBRUNDLFNBRkQsQ0FFdEJELFlBRnNCO0FBQUEsVUFF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QUFBQTtBQUFBO0FBQUEsZUFoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQsZUEyQkMscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRDtBQUFBLGtCQUREO0FBK0JBLENBaEZEOztHQUFNWCxTOztLQUFBQSxTOztBQTJGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuOTBiYWIwMjhhMjFmN2NjN2EyZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgSGVhZEJhc2UsIE5hdiwgRm9vdGVyLCBQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2hlbHBlcnMvcG9zdFwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgaXNUYWcgfSBmcm9tIFwiQC9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3RzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQb3N0c1BhZ2UgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdGNvbnN0IFtzZWFyY2hPYmosIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh7XG5cdFx0dGFnczogW10sXG5cdFx0c2VhcmNoU3RyaW5nOiBcIlwiXG5cdH0pXG5cblx0Ly8gTXkgc2VhcmNoIGxvZ2ljXG5cdC8vIGhhcmQgdG8gcmVhZCBhbmQgbWFpbnRhaW5cblx0Ly8gVE9ETyBtYWtlIGl0IGVhc3kgdG8gcmVhZFxuXHQvLyBUT0RPIG1ha2UgaXQgbWFpbnRhaW5hYmxlIFxuXHRjb25zdCBmaWx0ZXJQb3N0cyA9IChwb3N0c0FycikgPT4ge1xuXHRcdHJldHVybiBwb3N0c0Fyci5maWx0ZXIocG9zdCA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9IHBvc3QubWV0YS50aXRsZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRjb25zdCB7IHNlYXJjaFN0cmluZywgdGFncyB9ID0gc2VhcmNoT2JqXG5cdFx0XHRsZXQgcmVzdWx0ID0gdHJ1ZVxuXG5cdFx0XHRpZiAodGFncykge1xuXHRcdFx0XHQvLyBjaGVjayBpZiBhIHBvc3QncyB0YWdzIGNvbnRhaW4gdGhlIHNlYXJjaGVkIHRhZ3Ncblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0ICYmIHBvc3QubWV0YS50YWdzLnNvbWUocG9zdFRhZyA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHRhZ3Muc29tZSh0YWcgPT4gcG9zdFRhZy5pbmNsdWRlcyh0YWcpKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBjaGVjayBpZiB0aGUgc2VhcmNoIGlzIGluY2x1ZGVkIGluIHRoZSB0aXRsZSBvZiBhIHBvc3Rcblx0XHRcdHJlc3VsdCA9IHJlc3VsdCAmJiAoc2VhcmNoU3RyaW5nLmluY2x1ZGVzKHRpdGxlKSB8fCB0aXRsZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFN0cmluZ1xuXHQgKiBcblx0ICogQHJldHVybnMge3N0cmluZ1tdfVxuXHQgKi9cblx0Y29uc3QgZmluZFRhZ3MgPSAoc2VhcmNoU3RyaW5nKSA9PiBzZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcihpc1RhZylcblx0XHQubWFwKHRhZyA9PiB0YWcuc2xpY2UoMSkpXG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hTdHJpbmdcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGNvbnN0IHJlbW92ZVRhZ3MgPSAoc2VhcmNoU3RyaW5nKSA9PiBzZWFyY2hTdHJpbmdcblx0XHQuc3BsaXQoXCIgXCIpXG5cdFx0LmZpbHRlcih3b3JkID0+ICFpc1RhZyh3b3JkKSlcblx0XHQuam9pbihcIiBcIilcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZEJhc2UgdGl0bGU9e2BQb3N0cyAtICR7U0lURV9DT05TVEFOVFMudGl0bGV9YH0gLz5cblxuXHRcdFx0PE5hdiAvPlxuXG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PGgyPlBvc3RzPC9oMj5cblxuXHRcdFx0XHQ8cD5IZXJlIGFyZSB0aGUgYXJ0aWNsZXMgSSB3cm90ZSBiZWZvcmUuPC9wPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzZWFyY2gtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlc1tcInNlYXJjaC1pbnB1dFwiXX0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXJ0aWNsZXNcIlxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzZWFyY2hJbnB1dCA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0XHRcdHNldFNlYXJjaCh7XG5cdFx0XHRcdFx0XHRcdFx0dGFnczogZmluZFRhZ3Moc2VhcmNoSW5wdXQpLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaFN0cmluZzogcmVtb3ZlVGFncyhzZWFyY2hJbnB1dClcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0e2ZpbHRlclBvc3RzKHBvc3RzKVxuXHRcdFx0XHRcdFx0Lm1hcChfcG9zdCA9PiA8UG9zdENhcmQga2V5PXtfcG9zdC5tZXRhLnRpdGxlfSB7Li4uX3Bvc3QubWV0YX0gLz4pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHBvc3RzOiBnZXRBbGxQb3N0cygpXG5cdFx0fVxuXHR9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==