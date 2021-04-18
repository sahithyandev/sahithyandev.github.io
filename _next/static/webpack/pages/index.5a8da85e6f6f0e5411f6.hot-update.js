webpackHotUpdate_N_E("pages/index",{

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
    "class": _styles_custom_link_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["external"],
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_c = CustomLink;

var LinkableH2 = function LinkableH2(props) {
  var children = props.children;
  console.log("h2", children, typeof children);

  try {
    var _elementId = children.replaceAll(" ", "-").toLowerCase();
  } catch (e) {
    console.warn(e);
    return "";
  }

  var href = "#".concat(elementId);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
    className: "linkable",
    id: elementId,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        href: href,
        className: ["heading-link", "reset"].join(" "),
        children: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, _this);
};

_c2 = LinkableH2;

var TableOfContents = function TableOfContents(props) {
  _s();

  console.log(props);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log("useEffect");
    var linkableElements = document.querySelectorAll(".linkable");
    console.log(linkableElements);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }, _this);
};

_s(TableOfContents, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudElkIiwicmVwbGFjZUFsbCIsInRvTG93ZXJDYXNlIiwiZSIsIndhcm4iLCJqb2luIiwiVGFibGVPZkNvbnRlbnRzIiwidXNlRWZmZWN0IiwibGlua2FibGVFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIk1EWENvbXBvbmVudHMiLCJhIiwiaDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM3QjtBQUNBLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxJQUFLQSxJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVCxJQUFrQ0YsSUFBSSxDQUFDRSxVQUFMLENBQWdCLEdBQWhCLENBQXJEOztBQUVBLE1BQUlELFVBQUosRUFBZ0I7QUFDZix3QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsSUFBWjtBQUFBLDZCQUNDLDRGQUFPRCxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFLQTs7QUFFRCxzQkFBTztBQUFHLGFBQU9JLHFFQUFlLENBQUMsVUFBRCxDQUF6QjtBQUF1QyxVQUFNLEVBQUMsUUFBOUM7QUFBdUQsT0FBRyxFQUFDO0FBQTNELEtBQXFGSixLQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQWREOztLQUFNRCxVOztBQWdCTixJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxLQUFELEVBQVc7QUFBQSxNQUNyQk0sUUFEcUIsR0FDUk4sS0FEUSxDQUNyQk0sUUFEcUI7QUFFN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0JGLFFBQWxCLEVBQTRCLE9BQU9BLFFBQW5DOztBQUNBLE1BQUk7QUFDSCxRQUFNRyxVQUFTLEdBQUdILFFBQVEsQ0FBQ0ksVUFBVCxDQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QkMsV0FBOUIsRUFBbEI7QUFDQSxHQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1hMLFdBQU8sQ0FBQ00sSUFBUixDQUFhRCxDQUFiO0FBQ0EsV0FBTyxFQUFQO0FBQ0E7O0FBQ0QsTUFBTVgsSUFBSSxjQUFPUSxTQUFQLENBQVY7QUFFQSxzQkFDQztBQUFJLGFBQVMsRUFBRSxVQUFmO0FBQTJCLE1BQUUsRUFBRUEsU0FBL0I7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRVIsSUFBWjtBQUFBLDZCQUNDO0FBQUcsWUFBSSxFQUFFQSxJQUFUO0FBQWUsaUJBQVMsRUFBRSxDQUFDLGNBQUQsRUFBaUIsT0FBakIsRUFBMEJhLElBQTFCLENBQStCLEdBQS9CLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBSUVSLFFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFTQSxDQXBCRDs7TUFBTUQsVTs7QUFzQk4sSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDZixLQUFELEVBQVc7QUFBQTs7QUFDbENPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBRUFnQix5REFBUyxDQUFDLFlBQU07QUFDZlQsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUVBLFFBQU1TLGdCQUFnQixHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLENBQXpCO0FBQ0FaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUyxnQkFBWjtBQUNBLEdBTFEsQ0FBVDtBQU9BLHNCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU1BLENBaEJEOztHQUFNRixlOztNQUFBQSxlO0FBa0JDLElBQU1LLGFBQWEsR0FBRztBQUM1QkMsR0FBQyxFQUFFdEIsVUFEeUI7QUFFNUJ1QixJQUFFLEVBQUVqQixVQUZ3QjtBQUc1QlUsaUJBQWUsRUFBZkE7QUFINEIsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWE4ZGE4NWU2ZjZmMGU1NDExZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjdXN0b21MaW5rU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9jdXN0b20tbGluay5tb2R1bGUuY3NzXCJcbmNvbnN0IEN1c3RvbUxpbmsgPSAocHJvcHMpID0+IHtcblx0LyoqIEB0eXBlIHtzdHJpbmd9ICovXG5cdGNvbnN0IGhyZWYgPSBwcm9wcy5ocmVmO1xuXHRjb25zdCBpc0ludGVybmFsID0gaHJlZiAmJiAoaHJlZi5zdGFydHNXaXRoKCcvJykpIHx8IGhyZWYuc3RhcnRzV2l0aChcIiNcIilcblxuXHRpZiAoaXNJbnRlcm5hbCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayBocmVmPXtocmVmfT5cblx0XHRcdFx0PGEgey4uLnByb3BzfSAvPlxuXHRcdFx0PC9MaW5rPlxuXHRcdClcblx0fVxuXG5cdHJldHVybiA8YSBjbGFzcz17Y3VzdG9tTGlua1N0eWxlW1wiZXh0ZXJuYWxcIl19IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB7Li4ucHJvcHN9IC8+XG59XG5cbmNvbnN0IExpbmthYmxlSDIgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cdGNvbnNvbGUubG9nKFwiaDJcIiwgY2hpbGRyZW4sIHR5cGVvZiBjaGlsZHJlbilcblx0dHJ5IHtcblx0XHRjb25zdCBlbGVtZW50SWQgPSBjaGlsZHJlbi5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS53YXJuKGUpXG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblx0Y29uc3QgaHJlZiA9IGAjJHtlbGVtZW50SWR9YFxuXG5cdHJldHVybiAoXG5cdFx0PGgyIGNsYXNzTmFtZT17XCJsaW5rYWJsZVwifSBpZD17ZWxlbWVudElkfT5cblx0XHRcdDxMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdFx0XHQ8YSBocmVmPXtocmVmfSBjbGFzc05hbWU9e1tcImhlYWRpbmctbGlua1wiLCBcInJlc2V0XCJdLmpvaW4oXCIgXCIpfT4jPC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvaDI+XG5cdClcblxufVxuXG5jb25zdCBUYWJsZU9mQ29udGVudHMgPSAocHJvcHMpID0+IHtcblx0Y29uc29sZS5sb2cocHJvcHMpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcInVzZUVmZmVjdFwiKVxuXG5cdFx0Y29uc3QgbGlua2FibGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlua2FibGVcIilcblx0XHRjb25zb2xlLmxvZyhsaW5rYWJsZUVsZW1lbnRzKVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblxuXG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IE1EWENvbXBvbmVudHMgPSB7XG5cdGE6IEN1c3RvbUxpbmssXG5cdGgyOiBMaW5rYWJsZUgyLFxuXHRUYWJsZU9mQ29udGVudHNcbn0iXSwic291cmNlUm9vdCI6IiJ9