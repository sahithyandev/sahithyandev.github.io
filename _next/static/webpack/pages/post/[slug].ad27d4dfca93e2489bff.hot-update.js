webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/MDXComponents.jsx":
/*!**************************************!*\
  !*** ./components/MDXComponents.jsx ***!
  \**************************************/
/*! exports provided: MDXComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXComponents", function() { return MDXComponents; });
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_custom_link_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/custom-link.module.css */ "./styles/custom-link.module.css");
/* harmony import */ var _styles_custom_link_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_link_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_linkable_h2_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/linkable-h2.module.css */ "./styles/linkable-h2.module.css");
/* harmony import */ var _styles_linkable_h2_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_linkable_h2_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/table-of-contents.module.css */ "./styles/table-of-contents.module.css");
/* harmony import */ var _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/mnt/c/Projects/blog/components/MDXComponents.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var CustomLink = function CustomLink(props) {
  /** @type {string} */
  var href = props.href;
  var isInternal = href && href.startsWith('/') || href.startsWith("#");

  if (isInternal) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", _objectSpread({
    className: _styles_custom_link_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["external"],
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_c = CustomLink;


var LinkableH2 = function LinkableH2(_ref) {
  var children = _ref.children;
  var elementId;

  try {
    elementId = children.replace(/\s/g, "-").toLowerCase();
  } catch (e) {
    console.warn(e);
    return "";
  }

  var href = "#".concat(elementId);

  var copyLink = function copyLink() {
    navigator.clipboard.writeText(href).err(function (error) {
      console.warn(error);
    });
  };

  return (
    /*#__PURE__*/
    // data-is-linkable is used when creating the TableOfContents
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      className: _styles_linkable_h2_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["linkable"],
      id: elementId,
      "data-is-linkable": true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: href,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: href,
          onClick: copyLink,
          className: ["heading-link", "reset"].join(" "),
          children: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }, _this)
  );
};

_c2 = LinkableH2;


var TableOfContents = function TableOfContents(props) {
  _s();

  console.log(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      linkableElements = _useState[0],
      setLinkableElements = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // data-is-linkable=true elements will be shown in the TableOfContents
    setLinkableElements(Array.from(document.querySelectorAll("*[data-is-linkable=true]")));
    console.log("useEffect", linkableElements);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["parent-section"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["links-container"],
      children: linkableElements.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: linkable.innerText.slice(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 3
  }, _this);
};

_s(TableOfContents, "+KRWeevJzlZBXDAW+hD50dw+ZC4=");

_c3 = TableOfContents;
var MDXComponents = {
  a: CustomLink,
  h2: LinkableH2,
  TableOfContents: TableOfContents
};

var _c, _c2, _c3;

$RefreshReg$(_c, "CustomLink");
$RefreshReg$(_c2, "LinkableH2");
$RefreshReg$(_c3, "TableOfContents");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJlbGVtZW50SWQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJlIiwiY29uc29sZSIsIndhcm4iLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImVyciIsImVycm9yIiwibGlua2FibGVIMlN0eWxlIiwiam9pbiIsIlRhYmxlT2ZDb250ZW50cyIsImxvZyIsInVzZVN0YXRlIiwibGlua2FibGVFbGVtZW50cyIsInNldExpbmthYmxlRWxlbWVudHMiLCJ1c2VFZmZlY3QiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJUT0NTdHlsZSIsIm1hcCIsImxpbmthYmxlIiwiaW5uZXJUZXh0Iiwic2xpY2UiLCJNRFhDb21wb25lbnRzIiwiYSIsImgyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxJQUFJLElBQUtBLElBQUksQ0FBQ0UsVUFBTCxDQUFnQixHQUFoQixDQUFULElBQWtDRixJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBckQ7O0FBRUEsTUFBSUQsVUFBSixFQUFnQjtBQUNmLHdCQUNDLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQUEsNkJBQ0MsNEZBQU9ELEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFB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TWUsYUFBYSxHQUFHO0FBQzVCQyxHQUFDLEVBQUV0QyxVQUR5QjtBQUU1QnVDLElBQUUsRUFBRWpDLFVBRndCO0FBRzVCZ0IsaUJBQWUsRUFBZkE7QUFINEIsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYWQyN2Q0ZGZjYTkzZTI0ODliZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGN1c3RvbUxpbmtTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2N1c3RvbS1saW5rLm1vZHVsZS5jc3NcIlxuY29uc3QgQ3VzdG9tTGluayA9IChwcm9wcykgPT4ge1xuXHQvKiogQHR5cGUge3N0cmluZ30gKi9cblx0Y29uc3QgaHJlZiA9IHByb3BzLmhyZWY7XG5cdGNvbnN0IGlzSW50ZXJuYWwgPSBocmVmICYmIChocmVmLnN0YXJ0c1dpdGgoJy8nKSkgfHwgaHJlZi5zdGFydHNXaXRoKFwiI1wiKVxuXG5cdGlmIChpc0ludGVybmFsKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdFx0XHQ8YSB7Li4ucHJvcHN9IC8+XG5cdFx0XHQ8L0xpbms+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIDxhIGNsYXNzTmFtZT17Y3VzdG9tTGlua1N0eWxlW1wiZXh0ZXJuYWxcIl19IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB7Li4ucHJvcHN9IC8+XG59XG5cbmltcG9ydCBsaW5rYWJsZUgyU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9saW5rYWJsZS1oMi5tb2R1bGUuY3NzXCJcbmNvbnN0IExpbmthYmxlSDIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGxldCBlbGVtZW50SWQ7XG5cdHRyeSB7XG5cdFx0ZWxlbWVudElkID0gY2hpbGRyZW4ucmVwbGFjZSgvXFxzL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLndhcm4oZSlcblx0XHRyZXR1cm4gXCJcIjtcblx0fVxuXHRjb25zdCBocmVmID0gYCMke2VsZW1lbnRJZH1gXG5cblx0Y29uc3QgY29weUxpbmsgPSAoKSA9PiB7XG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoaHJlZikuZXJyKGVycm9yID0+IHtcblx0XHRcdGNvbnNvbGUud2FybihlcnJvcilcblx0XHR9KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlIGlzIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0PGgyIGNsYXNzTmFtZT17bGlua2FibGVIMlN0eWxlW1wibGlua2FibGVcIl19IGlkPXtlbGVtZW50SWR9IGRhdGEtaXMtbGlua2FibGU+XG5cdFx0XHQ8TGluayBocmVmPXtocmVmfT5cblx0XHRcdFx0PGEgaHJlZj17aHJlZn0gb25DbGljaz17Y29weUxpbmt9IGNsYXNzTmFtZT17W1wiaGVhZGluZy1saW5rXCIsIFwicmVzZXRcIl0uam9pbihcIiBcIil9PiM8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9oMj5cblx0KVxuXG59XG5cbmltcG9ydCBUT0NTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3RhYmxlLW9mLWNvbnRlbnRzLm1vZHVsZS5jc3NcIlxuY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKHByb3BzKSA9PiB7XG5cdGNvbnNvbGUubG9nKHByb3BzKVxuXHRjb25zdCBbbGlua2FibGVFbGVtZW50cywgc2V0TGlua2FibGVFbGVtZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlPXRydWUgZWxlbWVudHMgd2lsbCBiZSBzaG93biBpbiB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0c2V0TGlua2FibGVFbGVtZW50cyhBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqW2RhdGEtaXMtbGlua2FibGU9dHJ1ZV1cIikpKVxuXHRcdGNvbnNvbGUubG9nKFwidXNlRWZmZWN0XCIsIGxpbmthYmxlRWxlbWVudHMpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtUT0NTdHlsZVtcInBhcmVudC1zZWN0aW9uXCJdfT5cblx0XHRcdDxoMz5UYWJsZSBPZiBDb250ZW50czwvaDM+XG5cblx0XHRcdDx1bCBjbGFzc05hbWU9e1RPQ1N0eWxlW1wibGlua3MtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0e2xpbmthYmxlRWxlbWVudHMubWFwKGxpbmthYmxlID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPHNwYW4+e2xpbmthYmxlLmlubmVyVGV4dC5zbGljZSgxKX08L3NwYW4+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC91bD5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IE1EWENvbXBvbmVudHMgPSB7XG5cdGE6IEN1c3RvbUxpbmssXG5cdGgyOiBMaW5rYWJsZUgyLFxuXHRUYWJsZU9mQ29udGVudHNcbn0iXSwic291cmNlUm9vdCI6IiJ9