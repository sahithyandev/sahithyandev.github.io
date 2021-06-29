webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].jsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].jsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-mdx-remote */ "./node_modules/next-mdx-remote/index.js");
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./components/index.js");



var _jsxFileName = "/mnt/c/Projects/blog/pages/post/[slug].jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var PostPage = function PostPage(_ref) {
  var meta = _ref.meta,
      mdxSource = _ref.mdxSource,
      sourceContent = _ref.sourceContent;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_3__["BlogPost"], {
    meta: meta,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_mdx_remote__WEBPACK_IMPORTED_MODULE_2__["MDXRemote"], _objectSpread(_objectSpread({}, mdxSource), {}, {
      components: _components__WEBPACK_IMPORTED_MODULE_3__["MDXComponents"],
      scope: {
        sourceContent: sourceContent
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = PostPage;
// TODO @REMOVE
// export async function getServerSideProps(context) {
// 	let props = {
// 		slug: context.query.slug || "",
// 	}
// 	try {
// 		const _postData = await loadPost(props.slug, true)
// 		props = { ...props, ..._postData }
// 	} catch (e) {
// 		console.warn(e)
// 		return {
// 			notFound: true
// 		}
// 	}
// 	return {
// 		props
// 	}
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (PostPage);

var _c;

$RefreshReg$(_c, "PostPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanN4Il0sIm5hbWVzIjpbIlBvc3RQYWdlIiwibWV0YSIsIm1keFNvdXJjZSIsInNvdXJjZUNvbnRlbnQiLCJNRFhDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF3QztBQUFBLE1BQXJDQyxJQUFxQyxRQUFyQ0EsSUFBcUM7QUFBQSxNQUEvQkMsU0FBK0IsUUFBL0JBLFNBQStCO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUN4RCxzQkFBTyxxRUFBQyxvREFBRDtBQUFVLFFBQUksRUFBRUYsSUFBaEI7QUFBQSwyQkFDTixxRUFBQyx5REFBRCxrQ0FBZUMsU0FBZjtBQUEwQixnQkFBVSxFQUFFRSx5REFBdEM7QUFBcUQsV0FBSyxFQUFFO0FBQUVELHFCQUFhLEVBQWJBO0FBQUY7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUdBLENBSkQ7O0tBQU1ILFE7QUF1Qk47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdlQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5mNjdiOThkOGFhMmQwYjFlOWUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTURYUmVtb3RlIH0gZnJvbSBcIm5leHQtbWR4LXJlbW90ZVwiXG5cbmltcG9ydCB7IGxvYWRQb3N0LCBnZXRBbGxTbHVncyB9IGZyb20gXCJAL2hlbHBlcnMvcG9zdFwiXG5pbXBvcnQgeyBCbG9nUG9zdCwgTURYQ29tcG9uZW50cywgUGFnZSB9IGZyb20gXCJAL2NvbXBvbmVudHNcIlxuXG5jb25zdCBQb3N0UGFnZSA9ICh7IG1ldGEsIG1keFNvdXJjZSwgc291cmNlQ29udGVudCB9KSA9PiB7XG5cdHJldHVybiA8QmxvZ1Bvc3QgbWV0YT17bWV0YX0+XG5cdFx0PE1EWFJlbW90ZSB7Li4ubWR4U291cmNlfSBjb21wb25lbnRzPXtNRFhDb21wb25lbnRzfSBzY29wZT17eyBzb3VyY2VDb250ZW50IH19IC8+XG5cdDwvQmxvZ1Bvc3Q+XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblx0bGV0IHNsdWdzID0gYXdhaXQgZ2V0QWxsU2x1Z3MoKVxuXG5cdHJldHVybiB7XG5cdFx0cGF0aHM6IHNsdWdzLm1hcChzbHVnID0+ICh7XG5cdFx0XHRwYXJhbXM6IHsgc2x1ZyB9XG5cdFx0fSkpLFxuXHRcdGZhbGxiYWNrOiBmYWxzZVxuXHR9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBsb2FkUG9zdChwYXJhbXMuc2x1ZylcblxuXHRyZXR1cm4geyBwcm9wczogcG9zdCB9XG59XG5cbi8vIFRPRE8gQFJFTU9WRVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyBcdGxldCBwcm9wcyA9IHtcbi8vIFx0XHRzbHVnOiBjb250ZXh0LnF1ZXJ5LnNsdWcgfHwgXCJcIixcbi8vIFx0fVxuXG4vLyBcdHRyeSB7XG4vLyBcdFx0Y29uc3QgX3Bvc3REYXRhID0gYXdhaXQgbG9hZFBvc3QocHJvcHMuc2x1ZywgdHJ1ZSlcblxuLy8gXHRcdHByb3BzID0geyAuLi5wcm9wcywgLi4uX3Bvc3REYXRhIH1cbi8vIFx0fSBjYXRjaCAoZSkge1xuLy8gXHRcdGNvbnNvbGUud2FybihlKVxuXG4vLyBcdFx0cmV0dXJuIHtcbi8vIFx0XHRcdG5vdEZvdW5kOiB0cnVlXG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0cmV0dXJuIHtcbi8vIFx0XHRwcm9wc1xuLy8gXHR9XG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9