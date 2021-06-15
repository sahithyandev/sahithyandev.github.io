webpackHotUpdate_N_E("pages/posts",{

/***/ "./components/linkableHead.MDX.jsx":
/*!*****************************************!*\
  !*** ./components/linkableHead.MDX.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_linkable_head_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/linkable-head.module.css */ "./styles/linkable-head.module.css");
/* harmony import */ var _styles_linkable_head_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_linkable_head_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/mnt/c/Projects/blog/components/linkableHead.MDX.jsx",
    _this = undefined;




var getHeadContent = function getHeadContent(children) {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(function (child) {
      return getHeadContent(child);
    }).join("");
  }

  return getHeadContent(children.props.children);
};


/**
 * @param {"h2" | "h3"} HeadElement
 */

var linkableHead = function linkableHead(HeadElement) {
  var _s = $RefreshSig$();

  return _s(function (_ref) {
    _s();

    var children = _ref.children;

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        elementId = _useState[0],
        setElementId = _useState[1];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
        slug = _useState2[0],
        setSlug = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      setElementId(getHeadContent(children).replace(/\s/g, "-").toLowerCase());

      try {
        setSlug(window.location.pathname.split("/").reverse()[0]);
      } catch (err) {
        console.warn(err);
        setSlug("___err___");
      }
    }, []);
    return (
      /*#__PURE__*/
      // data-is-linkable is used when creating the TableOfContents
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeadElement, {
        className: _styles_linkable_head_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["linkable"],
        id: elementId,
        "data-is-linkable": true,
        children: [[undefined, "___err___"].includes(slug) ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: {
            pathname: "/post/[slug]",
            hash: elementId,
            query: {
              slug: slug
            }
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: ["reset", _styles_linkable_head_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["link-hashtag"]].join(" "),
            children: "#"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, _this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 4
      }, _this)
    );
  }, "W9NY32a7L/m8eWu94kWVW89gr28=");
};

/* harmony default export */ __webpack_exports__["default"] = (linkableHead);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5rYWJsZUhlYWQuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkQ29udGVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2hpbGQiLCJqb2luIiwicHJvcHMiLCJsaW5rYWJsZUhlYWQiLCJIZWFkRWxlbWVudCIsInVzZVN0YXRlIiwiZWxlbWVudElkIiwic2V0RWxlbWVudElkIiwidW5kZWZpbmVkIiwic2x1ZyIsInNldFNsdWciLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJsaW5rYWJsZUhlYWRTdHlsZSIsImluY2x1ZGVzIiwiaGFzaCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3BDLE1BQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNqQyxXQUFPQSxRQUFQO0FBQ0E7O0FBQ0QsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFFBQWQsQ0FBSixFQUE2QjtBQUM1QixXQUFPQSxRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxLQUFEO0FBQUEsYUFBV0wsY0FBYyxDQUFDSyxLQUFELENBQXpCO0FBQUEsS0FBYixFQUErQ0MsSUFBL0MsQ0FBb0QsRUFBcEQsQ0FBUDtBQUNBOztBQUNELFNBQU9OLGNBQWMsQ0FBQ0MsUUFBUSxDQUFDTSxLQUFULENBQWVOLFFBQWhCLENBQXJCO0FBQ0EsQ0FSRDs7QUFVQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxXQUFELEVBQWlCO0FBQUE7O0FBQ3JDLFlBQU8sZ0JBQWtCO0FBQUE7O0FBQUEsUUFBZlIsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUNVUyxzREFBUSxDQUFDLEVBQUQsQ0FEbEI7QUFBQSxRQUNqQkMsU0FEaUI7QUFBQSxRQUNOQyxZQURNOztBQUFBLHFCQUVBRixzREFBUSxDQUFDRyxTQUFELENBRlI7QUFBQSxRQUVqQkMsSUFGaUI7QUFBQSxRQUVYQyxPQUZXOztBQUl4QkMsMkRBQVMsQ0FBQyxZQUFNO0FBQ2ZKLGtCQUFZLENBQUNaLGNBQWMsQ0FBQ0MsUUFBRCxDQUFkLENBQXlCZ0IsT0FBekIsQ0FBaUMsS0FBakMsRUFBd0MsR0FBeEMsRUFBNkNDLFdBQTdDLEVBQUQsQ0FBWjs7QUFDQSxVQUFJO0FBQ0hILGVBQU8sQ0FBQ0ksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsRUFBb0NDLE9BQXBDLEdBQThDLENBQTlDLENBQUQsQ0FBUDtBQUNBLE9BRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7QUFDYkMsZUFBTyxDQUFDQyxJQUFSLENBQWFGLEdBQWI7QUFDQVQsZUFBTyxDQUFDLFdBQUQsQ0FBUDtBQUNBO0FBQ0QsS0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBO0FBQUE7QUFDQztBQUNBLDJFQUFDLFdBQUQ7QUFBYSxpQkFBUyxFQUFFWSx1RUFBaUIsQ0FBQyxVQUFELENBQXpDO0FBQXVELFVBQUUsRUFBRWhCLFNBQTNEO0FBQXNFLGdDQUF0RTtBQUFBLG1CQUNFLENBQUNFLFNBQUQsRUFBWSxXQUFaLEVBQXlCZSxRQUF6QixDQUFrQ2QsSUFBbEMsSUFBMEMsSUFBMUMsZ0JBQ0EscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUU7QUFDWE8sb0JBQVEsZ0JBREc7QUFFWFEsZ0JBQUksRUFBRWxCLFNBRks7QUFHWG1CLGlCQUFLLEVBQUU7QUFBRWhCLGtCQUFJLEVBQUpBO0FBQUY7QUFISSxXQUFaO0FBQUEsaUNBS0M7QUFBRyxxQkFBUyxFQUFFLENBQUMsT0FBRCxFQUFVYSx1RUFBaUIsQ0FBQyxjQUFELENBQTNCLEVBQTZDckIsSUFBN0MsQ0FBa0QsR0FBbEQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFVRUwsUUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQWVBLEdBN0JEO0FBOEJBLENBL0JEOztBQWlDZU8sMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuZTBmMjVlYTY4NmZmZDJmOGE4MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IGdldEhlYWRDb250ZW50ID0gKGNoaWxkcmVuKSA9PiB7XG5cdGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gY2hpbGRyZW5cblx0fVxuXHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRyZXR1cm4gY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gZ2V0SGVhZENvbnRlbnQoY2hpbGQpKS5qb2luKFwiXCIpXG5cdH1cblx0cmV0dXJuIGdldEhlYWRDb250ZW50KGNoaWxkcmVuLnByb3BzLmNoaWxkcmVuKVxufVxuXG5pbXBvcnQgbGlua2FibGVIZWFkU3R5bGUgZnJvbSBcIkAvc3R5bGVzL2xpbmthYmxlLWhlYWQubW9kdWxlLmNzc1wiXG5cbi8qKlxuICogQHBhcmFtIHtcImgyXCIgfCBcImgzXCJ9IEhlYWRFbGVtZW50XG4gKi9cbmNvbnN0IGxpbmthYmxlSGVhZCA9IChIZWFkRWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRcdGNvbnN0IFtlbGVtZW50SWQsIHNldEVsZW1lbnRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0XHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdHNldEVsZW1lbnRJZChnZXRIZWFkQ29udGVudChjaGlsZHJlbikucmVwbGFjZSgvXFxzL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oZXJyKVxuXHRcdFx0XHRzZXRTbHVnKFwiX19fZXJyX19fXCIpXG5cdFx0XHR9XG5cdFx0fSwgW10pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gZGF0YS1pcy1saW5rYWJsZSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdFx0PEhlYWRFbGVtZW50IGNsYXNzTmFtZT17bGlua2FibGVIZWFkU3R5bGVbXCJsaW5rYWJsZVwiXX0gaWQ9e2VsZW1lbnRJZH0gZGF0YS1pcy1saW5rYWJsZT5cblx0XHRcdFx0e1t1bmRlZmluZWQsIFwiX19fZXJyX19fXCJdLmluY2x1ZGVzKHNsdWcpID8gbnVsbCA6XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17e1xuXHRcdFx0XHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0XHRcdFx0aGFzaDogZWxlbWVudElkLFxuXHRcdFx0XHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e1tcInJlc2V0XCIsIGxpbmthYmxlSGVhZFN0eWxlW1wibGluay1oYXNodGFnXCJdXS5qb2luKFwiIFwiKX0+IzwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdH1cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9IZWFkRWxlbWVudD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlua2FibGVIZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==