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

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        slug = _useState2[0],
        setSlug = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      setElementId(getHeadContent(children).replace(/\s/g, "-").toLowerCase());

      try {
        setSlug(window.location.pathname.split("/").reverse()[0]);
        console.log(window.location.pathname.split("/"));
      } catch (err) {
        console.warn(err);
        setSlug("___err___");
        console.log(slug);
      }
    }, []);
    return (
      /*#__PURE__*/
      // data-is-linkable is used when creating the TableOfContents
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeadElement, {
        className: _styles_linkable_head_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["linkable"],
        id: elementId,
        "data-is-linkable": true,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 4
      }, _this)
    );
  }, "tJmgFzIkfBywYbf6iUR+gDhEB+Y=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5rYWJsZUhlYWQuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkQ29udGVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2hpbGQiLCJqb2luIiwicHJvcHMiLCJsaW5rYWJsZUhlYWQiLCJIZWFkRWxlbWVudCIsInVzZVN0YXRlIiwiZWxlbWVudElkIiwic2V0RWxlbWVudElkIiwic2x1ZyIsInNldFNsdWciLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiY29uc29sZSIsImxvZyIsImVyciIsIndhcm4iLCJsaW5rYWJsZUhlYWRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNwQyxNQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDakMsV0FBT0EsUUFBUDtBQUNBOztBQUNELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDNUIsV0FBT0EsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsS0FBRDtBQUFBLGFBQVdMLGNBQWMsQ0FBQ0ssS0FBRCxDQUF6QjtBQUFBLEtBQWIsRUFBK0NDLElBQS9DLENBQW9ELEVBQXBELENBQVA7QUFDQTs7QUFDRCxTQUFPTixjQUFjLENBQUNDLFFBQVEsQ0FBQ00sS0FBVCxDQUFlTixRQUFoQixDQUFyQjtBQUNBLENBUkQ7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsV0FBRCxFQUFpQjtBQUFBOztBQUNyQyxZQUFPLGdCQUFrQjtBQUFBOztBQUFBLFFBQWZSLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDVVMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsUUFDakJDLFNBRGlCO0FBQUEsUUFDTkMsWUFETTs7QUFBQSxxQkFFQUYsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxRQUVqQkcsSUFGaUI7QUFBQSxRQUVYQyxPQUZXOztBQUl4QkMsMkRBQVMsQ0FBQyxZQUFNO0FBQ2ZILGtCQUFZLENBQUNaLGNBQWMsQ0FBQ0MsUUFBRCxDQUFkLENBQXlCZSxPQUF6QixDQUFpQyxLQUFqQyxFQUF3QyxHQUF4QyxFQUE2Q0MsV0FBN0MsRUFBRCxDQUFaOztBQUNBLFVBQUk7QUFDSEgsZUFBTyxDQUFDSSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixFQUFvQ0MsT0FBcEMsR0FBOEMsQ0FBOUMsQ0FBRCxDQUFQO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixDQUFaO0FBQ0EsT0FIRCxDQUdFLE9BQU9JLEdBQVAsRUFBWTtBQUNiRixlQUFPLENBQUNHLElBQVIsQ0FBYUQsR0FBYjtBQUNBWCxlQUFPLENBQUMsV0FBRCxDQUFQO0FBQ0FTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWCxJQUFaO0FBQ0E7QUFDRCxLQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUE7QUFBQTtBQUNDO0FBQ0EsMkVBQUMsV0FBRDtBQUFhLGlCQUFTLEVBQUVjLHVFQUFpQixDQUFDLFVBQUQsQ0FBekM7QUFBdUQsVUFBRSxFQUFFaEIsU0FBM0Q7QUFBc0UsZ0NBQXRFO0FBQUEsa0JBVUVWO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBZUEsR0EvQkQ7QUFnQ0EsQ0FqQ0Q7O0FBbUNlTywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy44MmRhMTIwMTVhMWFkZmNkMmZmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgZ2V0SGVhZENvbnRlbnQgPSAoY2hpbGRyZW4pID0+IHtcblx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBjaGlsZHJlblxuXHR9XG5cdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdHJldHVybiBjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBnZXRIZWFkQ29udGVudChjaGlsZCkpLmpvaW4oXCJcIilcblx0fVxuXHRyZXR1cm4gZ2V0SGVhZENvbnRlbnQoY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4pXG59XG5cbmltcG9ydCBsaW5rYWJsZUhlYWRTdHlsZSBmcm9tIFwiQC9zdHlsZXMvbGlua2FibGUtaGVhZC5tb2R1bGUuY3NzXCJcblxuLyoqXG4gKiBAcGFyYW0ge1wiaDJcIiB8IFwiaDNcIn0gSGVhZEVsZW1lbnRcbiAqL1xuY29uc3QgbGlua2FibGVIZWFkID0gKEhlYWRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdFx0Y29uc3QgW2VsZW1lbnRJZCwgc2V0RWxlbWVudElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRcdGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdFx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRcdHNldEVsZW1lbnRJZChnZXRIZWFkQ29udGVudChjaGlsZHJlbikucmVwbGFjZSgvXFxzL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0XHRcdFx0Y29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKSlcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oZXJyKVxuXHRcdFx0XHRzZXRTbHVnKFwiX19fZXJyX19fXCIpXG5cdFx0XHRcdGNvbnNvbGUubG9nKHNsdWcpXG5cdFx0XHR9XG5cdFx0fSwgW10pXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0Ly8gZGF0YS1pcy1saW5rYWJsZSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdFx0PEhlYWRFbGVtZW50IGNsYXNzTmFtZT17bGlua2FibGVIZWFkU3R5bGVbXCJsaW5rYWJsZVwiXX0gaWQ9e2VsZW1lbnRJZH0gZGF0YS1pcy1saW5rYWJsZT5cblx0XHRcdFx0ey8qIHtzbHVnID09PSBcIl9fX2Vycl9fX1wiID8gbnVsbCA6XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17e1xuXHRcdFx0XHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0XHRcdFx0aGFzaDogZWxlbWVudElkLFxuXHRcdFx0XHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e1tcInJlc2V0XCIsIGxpbmthYmxlSGVhZFN0eWxlW1wibGluay1oYXNodGFnXCJdXS5qb2luKFwiIFwiKX0+IzwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdH0gKi99XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvSGVhZEVsZW1lbnQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpbmthYmxlSGVhZCJdLCJzb3VyY2VSb290IjoiIn0=