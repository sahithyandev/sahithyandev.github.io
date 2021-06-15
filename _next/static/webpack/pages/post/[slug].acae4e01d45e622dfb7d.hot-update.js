webpackHotUpdate_N_E("pages/post/[slug]",{

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
        children: [slug === undefined ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 5
        }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5rYWJsZUhlYWQuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkQ29udGVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2hpbGQiLCJqb2luIiwicHJvcHMiLCJsaW5rYWJsZUhlYWQiLCJIZWFkRWxlbWVudCIsInVzZVN0YXRlIiwiZWxlbWVudElkIiwic2V0RWxlbWVudElkIiwidW5kZWZpbmVkIiwic2x1ZyIsInNldFNsdWciLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJsaW5rYWJsZUhlYWRTdHlsZSIsImhhc2giLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNwQyxNQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDakMsV0FBT0EsUUFBUDtBQUNBOztBQUNELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDNUIsV0FBT0EsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsS0FBRDtBQUFBLGFBQVdMLGNBQWMsQ0FBQ0ssS0FBRCxDQUF6QjtBQUFBLEtBQWIsRUFBK0NDLElBQS9DLENBQW9ELEVBQXBELENBQVA7QUFDQTs7QUFDRCxTQUFPTixjQUFjLENBQUNDLFFBQVEsQ0FBQ00sS0FBVCxDQUFlTixRQUFoQixDQUFyQjtBQUNBLENBUkQ7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsV0FBRCxFQUFpQjtBQUFBOztBQUNyQyxZQUFPLGdCQUFrQjtBQUFBOztBQUFBLFFBQWZSLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDVVMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsUUFDakJDLFNBRGlCO0FBQUEsUUFDTkMsWUFETTs7QUFBQSxxQkFFQUYsc0RBQVEsQ0FBQ0csU0FBRCxDQUZSO0FBQUEsUUFFakJDLElBRmlCO0FBQUEsUUFFWEMsT0FGVzs7QUFJeEJDLDJEQUFTLENBQUMsWUFBTTtBQUNmSixrQkFBWSxDQUFDWixjQUFjLENBQUNDLFFBQUQsQ0FBZCxDQUF5QmdCLE9BQXpCLENBQWlDLEtBQWpDLEVBQXdDLEdBQXhDLEVBQTZDQyxXQUE3QyxFQUFELENBQVo7O0FBQ0EsVUFBSTtBQUNISCxlQUFPLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DQyxPQUFwQyxHQUE4QyxDQUE5QyxDQUFELENBQVA7QUFDQSxPQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ2JDLGVBQU8sQ0FBQ0MsSUFBUixDQUFhRixHQUFiO0FBQ0FULGVBQU8sQ0FBQyxXQUFELENBQVA7QUFDQTtBQUNELEtBUlEsRUFRTixFQVJNLENBQVQ7QUFVQTtBQUFBO0FBQ0M7QUFDQSwyRUFBQyxXQUFEO0FBQWEsaUJBQVMsRUFBRVksdUVBQWlCLENBQUMsVUFBRCxDQUF6QztBQUF1RCxVQUFFLEVBQUVoQixTQUEzRDtBQUFzRSxnQ0FBdEU7QUFBQSxtQkFDRUcsSUFBSSxLQUFLRCxTQUFULEdBQXFCLElBQXJCLGdCQUNBLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFO0FBQ1hRLG9CQUFRLGdCQURHO0FBRVhPLGdCQUFJLEVBQUVqQixTQUZLO0FBR1hrQixpQkFBSyxFQUFFO0FBQUVmLGtCQUFJLEVBQUpBO0FBQUY7QUFISSxXQUFaO0FBQUEsaUNBS0M7QUFBRyxxQkFBUyxFQUFFLENBQUMsT0FBRCxFQUFVYSx1RUFBaUIsQ0FBQyxjQUFELENBQTNCLEVBQTZDckIsSUFBN0MsQ0FBa0QsR0FBbEQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFVQztBQUFBLG9CQUNFTDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFpQkEsR0EvQkQ7QUFnQ0EsQ0FqQ0Q7O0FBbUNlTywyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5hY2FlNGUwMWQ0NWU2MjJkZmI3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgZ2V0SGVhZENvbnRlbnQgPSAoY2hpbGRyZW4pID0+IHtcblx0aWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBjaGlsZHJlblxuXHR9XG5cdGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdHJldHVybiBjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBnZXRIZWFkQ29udGVudChjaGlsZCkpLmpvaW4oXCJcIilcblx0fVxuXHRyZXR1cm4gZ2V0SGVhZENvbnRlbnQoY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4pXG59XG5cbmltcG9ydCBsaW5rYWJsZUhlYWRTdHlsZSBmcm9tIFwiQC9zdHlsZXMvbGlua2FibGUtaGVhZC5tb2R1bGUuY3NzXCJcblxuLyoqXG4gKiBAcGFyYW0ge1wiaDJcIiB8IFwiaDNcIn0gSGVhZEVsZW1lbnRcbiAqL1xuY29uc3QgbGlua2FibGVIZWFkID0gKEhlYWRFbGVtZW50KSA9PiB7XG5cdHJldHVybiAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdFx0Y29uc3QgW2VsZW1lbnRJZCwgc2V0RWxlbWVudElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRcdGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFx0c2V0RWxlbWVudElkKGdldEhlYWRDb250ZW50KGNoaWxkcmVuKS5yZXBsYWNlKC9cXHMvZywgXCItXCIpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzZXRTbHVnKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdKVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihlcnIpXG5cdFx0XHRcdHNldFNsdWcoXCJfX19lcnJfX19cIilcblx0XHRcdH1cblx0XHR9LCBbXSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQvLyBkYXRhLWlzLWxpbmthYmxlIGlzIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0XHQ8SGVhZEVsZW1lbnQgY2xhc3NOYW1lPXtsaW5rYWJsZUhlYWRTdHlsZVtcImxpbmthYmxlXCJdfSBpZD17ZWxlbWVudElkfSBkYXRhLWlzLWxpbmthYmxlPlxuXHRcdFx0XHR7c2x1ZyA9PT0gdW5kZWZpbmVkID8gbnVsbCA6XG5cdFx0XHRcdFx0PExpbmsgaHJlZj17e1xuXHRcdFx0XHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0XHRcdFx0aGFzaDogZWxlbWVudElkLFxuXHRcdFx0XHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e1tcInJlc2V0XCIsIGxpbmthYmxlSGVhZFN0eWxlW1wibGluay1oYXNodGFnXCJdXS5qb2luKFwiIFwiKX0+IzwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdH1cblx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L0hlYWRFbGVtZW50PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBsaW5rYWJsZUhlYWQiXSwic291cmNlUm9vdCI6IiJ9