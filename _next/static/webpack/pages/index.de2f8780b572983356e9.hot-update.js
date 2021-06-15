webpackHotUpdate_N_E("pages/index",{

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
        console.log(window.location.pathname.split("/").reverse()[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5rYWJsZUhlYWQuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkQ29udGVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2hpbGQiLCJqb2luIiwicHJvcHMiLCJsaW5rYWJsZUhlYWQiLCJIZWFkRWxlbWVudCIsInVzZVN0YXRlIiwiZWxlbWVudElkIiwic2V0RWxlbWVudElkIiwic2x1ZyIsInNldFNsdWciLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiY29uc29sZSIsImxvZyIsImVyciIsIndhcm4iLCJsaW5rYWJsZUhlYWRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNwQyxNQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDakMsV0FBT0EsUUFBUDtBQUNBOztBQUNELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDNUIsV0FBT0EsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsS0FBRDtBQUFBLGFBQVdMLGNBQWMsQ0FBQ0ssS0FBRCxDQUF6QjtBQUFBLEtBQWIsRUFBK0NDLElBQS9DLENBQW9ELEVBQXBELENBQVA7QUFDQTs7QUFDRCxTQUFPTixjQUFjLENBQUNDLFFBQVEsQ0FBQ00sS0FBVCxDQUFlTixRQUFoQixDQUFyQjtBQUNBLENBUkQ7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsV0FBRCxFQUFpQjtBQUFBOztBQUNyQyxZQUFPLGdCQUFrQjtBQUFBOztBQUFBLFFBQWZSLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDVVMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsUUFDakJDLFNBRGlCO0FBQUEsUUFDTkMsWUFETTs7QUFBQSxxQkFFQUYsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxRQUVqQkcsSUFGaUI7QUFBQSxRQUVYQyxPQUZXOztBQUl4QkMsMkRBQVMsQ0FBQyxZQUFNO0FBQ2ZILGtCQUFZLENBQUNaLGNBQWMsQ0FBQ0MsUUFBRCxDQUFkLENBQXlCZSxPQUF6QixDQUFpQyxLQUFqQyxFQUF3QyxHQUF4QyxFQUE2Q0MsV0FBN0MsRUFBRCxDQUFaOztBQUNBLFVBQUk7QUFDSEgsZUFBTyxDQUFDSSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixFQUFvQ0MsT0FBcEMsR0FBOEMsQ0FBOUMsQ0FBRCxDQUFQO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCQyxLQUF6QixDQUErQixHQUEvQixFQUFvQ0MsT0FBcEMsR0FBOEMsQ0FBOUMsQ0FBWjtBQUNBLE9BSEQsQ0FHRSxPQUFPRyxHQUFQLEVBQVk7QUFDYkYsZUFBTyxDQUFDRyxJQUFSLENBQWFELEdBQWI7QUFDQVgsZUFBTyxDQUFDLFdBQUQsQ0FBUDtBQUNBUyxlQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWjtBQUNBO0FBQ0QsS0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBO0FBQUE7QUFDQztBQUNBLDJFQUFDLFdBQUQ7QUFBYSxpQkFBUyxFQUFFYyx1RUFBaUIsQ0FBQyxVQUFELENBQXpDO0FBQXVELFVBQUUsRUFBRWhCLFNBQTNEO0FBQXNFLGdDQUF0RTtBQUFBLGtCQVVFVjtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQWVBLEdBL0JEO0FBZ0NBLENBakNEOztBQW1DZU8sMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGUyZjg3ODBiNTcyOTgzMzU2ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IGdldEhlYWRDb250ZW50ID0gKGNoaWxkcmVuKSA9PiB7XG5cdGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIpIHtcblx0XHRyZXR1cm4gY2hpbGRyZW5cblx0fVxuXHRpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRyZXR1cm4gY2hpbGRyZW4ubWFwKChjaGlsZCkgPT4gZ2V0SGVhZENvbnRlbnQoY2hpbGQpKS5qb2luKFwiXCIpXG5cdH1cblx0cmV0dXJuIGdldEhlYWRDb250ZW50KGNoaWxkcmVuLnByb3BzLmNoaWxkcmVuKVxufVxuXG5pbXBvcnQgbGlua2FibGVIZWFkU3R5bGUgZnJvbSBcIkAvc3R5bGVzL2xpbmthYmxlLWhlYWQubW9kdWxlLmNzc1wiXG5cbi8qKlxuICogQHBhcmFtIHtcImgyXCIgfCBcImgzXCJ9IEhlYWRFbGVtZW50XG4gKi9cbmNvbnN0IGxpbmthYmxlSGVhZCA9IChIZWFkRWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRcdGNvbnN0IFtlbGVtZW50SWQsIHNldEVsZW1lbnRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0XHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHRzZXRFbGVtZW50SWQoZ2V0SGVhZENvbnRlbnQoY2hpbGRyZW4pLnJlcGxhY2UoL1xccy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKSlcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0pXG5cdFx0XHRcdGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdKVxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihlcnIpXG5cdFx0XHRcdHNldFNsdWcoXCJfX19lcnJfX19cIilcblx0XHRcdFx0Y29uc29sZS5sb2coc2x1Zylcblx0XHRcdH1cblx0XHR9LCBbXSlcblxuXHRcdHJldHVybiAoXG5cdFx0XHQvLyBkYXRhLWlzLWxpbmthYmxlIGlzIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0XHQ8SGVhZEVsZW1lbnQgY2xhc3NOYW1lPXtsaW5rYWJsZUhlYWRTdHlsZVtcImxpbmthYmxlXCJdfSBpZD17ZWxlbWVudElkfSBkYXRhLWlzLWxpbmthYmxlPlxuXHRcdFx0XHR7Lyoge3NsdWcgPT09IFwiX19fZXJyX19fXCIgPyBudWxsIDpcblx0XHRcdFx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRcdFx0XHRwYXRobmFtZTogYC9wb3N0L1tzbHVnXWAsXG5cdFx0XHRcdFx0XHRoYXNoOiBlbGVtZW50SWQsXG5cdFx0XHRcdFx0XHRxdWVyeTogeyBzbHVnIH1cblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17W1wicmVzZXRcIiwgbGlua2FibGVIZWFkU3R5bGVbXCJsaW5rLWhhc2h0YWdcIl1dLmpvaW4oXCIgXCIpfT4jPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0fSAqL31cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9IZWFkRWxlbWVudD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlua2FibGVIZWFkIl0sInNvdXJjZVJvb3QiOiIifQ==