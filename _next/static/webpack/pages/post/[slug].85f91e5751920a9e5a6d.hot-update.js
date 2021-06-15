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
          className: "linkable--heading-text",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5rYWJsZUhlYWQuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkQ29udGVudCIsImNoaWxkcmVuIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2hpbGQiLCJqb2luIiwicHJvcHMiLCJsaW5rYWJsZUhlYWQiLCJIZWFkRWxlbWVudCIsInVzZVN0YXRlIiwiZWxlbWVudElkIiwic2V0RWxlbWVudElkIiwidW5kZWZpbmVkIiwic2x1ZyIsInNldFNsdWciLCJ1c2VFZmZlY3QiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJsaW5rYWJsZUhlYWRTdHlsZSIsImhhc2giLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNwQyxNQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDakMsV0FBT0EsUUFBUDtBQUNBOztBQUNELE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixRQUFkLENBQUosRUFBNkI7QUFDNUIsV0FBT0EsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsS0FBRDtBQUFBLGFBQVdMLGNBQWMsQ0FBQ0ssS0FBRCxDQUF6QjtBQUFBLEtBQWIsRUFBK0NDLElBQS9DLENBQW9ELEVBQXBELENBQVA7QUFDQTs7QUFDRCxTQUFPTixjQUFjLENBQUNDLFFBQVEsQ0FBQ00sS0FBVCxDQUFlTixRQUFoQixDQUFyQjtBQUNBLENBUkQ7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsV0FBRCxFQUFpQjtBQUFBOztBQUNyQyxZQUFPLGdCQUFrQjtBQUFBOztBQUFBLFFBQWZSLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDVVMsc0RBQVEsQ0FBQyxFQUFELENBRGxCO0FBQUEsUUFDakJDLFNBRGlCO0FBQUEsUUFDTkMsWUFETTs7QUFBQSxxQkFFQUYsc0RBQVEsQ0FBQ0csU0FBRCxDQUZSO0FBQUEsUUFFakJDLElBRmlCO0FBQUEsUUFFWEMsT0FGVzs7QUFJeEJDLDJEQUFTLENBQUMsWUFBTTtBQUNmSixrQkFBWSxDQUFDWixjQUFjLENBQUNDLFFBQUQsQ0FBZCxDQUF5QmdCLE9BQXpCLENBQWlDLEtBQWpDLEVBQXdDLEdBQXhDLEVBQTZDQyxXQUE3QyxFQUFELENBQVo7O0FBQ0EsVUFBSTtBQUNISCxlQUFPLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DQyxPQUFwQyxHQUE4QyxDQUE5QyxDQUFELENBQVA7QUFDQSxPQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ2JDLGVBQU8sQ0FBQ0MsSUFBUixDQUFhRixHQUFiO0FBQ0FULGVBQU8sQ0FBQyxXQUFELENBQVA7QUFDQTtBQUNELEtBUlEsRUFRTixFQVJNLENBQVQ7QUFVQTtBQUFBO0FBQ0M7QUFDQSwyRUFBQyxXQUFEO0FBQWEsaUJBQVMsRUFBRVksdUVBQWlCLENBQUMsVUFBRCxDQUF6QztBQUF1RCxVQUFFLEVBQUVoQixTQUEzRDtBQUFzRSxnQ0FBdEU7QUFBQSxtQkFDRUcsSUFBSSxLQUFLRCxTQUFULEdBQXFCLElBQXJCLGdCQUNBLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFO0FBQ1hRLG9CQUFRLGdCQURHO0FBRVhPLGdCQUFJLEVBQUVqQixTQUZLO0FBR1hrQixpQkFBSyxFQUFFO0FBQUVmLGtCQUFJLEVBQUpBO0FBQUY7QUFISSxXQUFaO0FBQUEsaUNBS0M7QUFBRyxxQkFBUyxFQUFFLENBQUMsT0FBRCxFQUFVYSx1RUFBaUIsQ0FBQyxjQUFELENBQTNCLEVBQTZDckIsSUFBN0MsQ0FBa0QsR0FBbEQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFVQztBQUFNLG1CQUFTLEVBQUMsd0JBQWhCO0FBQUEsb0JBQ0VMO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQWlCQSxHQS9CRDtBQWdDQSxDQWpDRDs7QUFtQ2VPLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjg1ZjkxZTU3NTE5MjBhOWU1YTZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBnZXRIZWFkQ29udGVudCA9IChjaGlsZHJlbikgPT4ge1xuXHRpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuXG5cdH1cblx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGdldEhlYWRDb250ZW50KGNoaWxkKSkuam9pbihcIlwiKVxuXHR9XG5cdHJldHVybiBnZXRIZWFkQ29udGVudChjaGlsZHJlbi5wcm9wcy5jaGlsZHJlbilcbn1cblxuaW1wb3J0IGxpbmthYmxlSGVhZFN0eWxlIGZyb20gXCJAL3N0eWxlcy9saW5rYWJsZS1oZWFkLm1vZHVsZS5jc3NcIlxuXG4vKipcbiAqIEBwYXJhbSB7XCJoMlwiIHwgXCJoM1wifSBIZWFkRWxlbWVudFxuICovXG5jb25zdCBsaW5rYWJsZUhlYWQgPSAoSGVhZEVsZW1lbnQpID0+IHtcblx0cmV0dXJuICh7IGNoaWxkcmVuIH0pID0+IHtcblx0XHRjb25zdCBbZWxlbWVudElkLCBzZXRFbGVtZW50SWRdID0gdXNlU3RhdGUoXCJcIik7XG5cdFx0Y29uc3QgW3NsdWcsIHNldFNsdWddID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuXHRcdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHRzZXRFbGVtZW50SWQoZ2V0SGVhZENvbnRlbnQoY2hpbGRyZW4pLnJlcGxhY2UoL1xccy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKSlcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0pXG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGVycilcblx0XHRcdFx0c2V0U2x1ZyhcIl9fX2Vycl9fX1wiKVxuXHRcdFx0fVxuXHRcdH0sIFtdKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdC8vIGRhdGEtaXMtbGlua2FibGUgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIHRoZSBUYWJsZU9mQ29udGVudHNcblx0XHRcdDxIZWFkRWxlbWVudCBjbGFzc05hbWU9e2xpbmthYmxlSGVhZFN0eWxlW1wibGlua2FibGVcIl19IGlkPXtlbGVtZW50SWR9IGRhdGEtaXMtbGlua2FibGU+XG5cdFx0XHRcdHtzbHVnID09PSB1bmRlZmluZWQgPyBudWxsIDpcblx0XHRcdFx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRcdFx0XHRwYXRobmFtZTogYC9wb3N0L1tzbHVnXWAsXG5cdFx0XHRcdFx0XHRoYXNoOiBlbGVtZW50SWQsXG5cdFx0XHRcdFx0XHRxdWVyeTogeyBzbHVnIH1cblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17W1wicmVzZXRcIiwgbGlua2FibGVIZWFkU3R5bGVbXCJsaW5rLWhhc2h0YWdcIl1dLmpvaW4oXCIgXCIpfT4jPC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsaW5rYWJsZS0taGVhZGluZy10ZXh0XCI+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L0hlYWRFbGVtZW50PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBsaW5rYWJsZUhlYWQiXSwic291cmNlUm9vdCI6IiJ9