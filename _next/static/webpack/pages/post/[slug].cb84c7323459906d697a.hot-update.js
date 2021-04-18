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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
    className: "linkable",
    id: elementId,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        href: href,
        onClick: copyLink,
        className: ["heading-link", "reset"].join(" "),
        children: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, _this);
};

_c2 = LinkableH2;

var TableOfContents = function TableOfContents(props) {
  _s();

  console.log(props);
  var linkableElements;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    linkableElements = document.querySelectorAll(".linkable");
    console.log("useEffect", linkableElements);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: linkableElements.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
          children: linkable.innerText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJlbGVtZW50SWQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJlIiwiY29uc29sZSIsIndhcm4iLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImVyciIsImVycm9yIiwiam9pbiIsIlRhYmxlT2ZDb250ZW50cyIsImxvZyIsImxpbmthYmxlRWxlbWVudHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJsaW5rYWJsZSIsImlubmVyVGV4dCIsIk1EWENvbXBvbmVudHMiLCJhIiwiaDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM3QjtBQUNBLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxJQUFLQSxJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVCxJQUFrQ0YsSUFBSSxDQUFDRSxVQUFMLENBQWdCLEdBQWhCLENBQXJEOztBQUVBLE1BQUlELFVBQUosRUFBZ0I7QUFDZix3QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsSUFBWjtBQUFBLDZCQUNDLDRGQUFPRCxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFLQTs7QUFFRCxzQkFBTztBQUFHLGFBQVMsRUFBRUkscUVBQWUsQ0FBQyxVQUFELENBQTdCO0FBQTJDLFVBQU0sRUFBQyxRQUFsRDtBQUEyRCxPQUFHLEVBQUM7QUFBL0QsS0FBeUZKLEtBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBZEQ7O0tBQU1ELFU7O0FBZ0JOLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3BDLE1BQUlDLFNBQUo7O0FBQ0EsTUFBSTtBQUNIQSxhQUFTLEdBQUdELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixLQUFqQixFQUF3QixHQUF4QixFQUE2QkMsV0FBN0IsRUFBWjtBQUNBLEdBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDWEMsV0FBTyxDQUFDQyxJQUFSLENBQWFGLENBQWI7QUFDQSxXQUFPLEVBQVA7QUFDQTs7QUFDRCxNQUFNVCxJQUFJLGNBQU9NLFNBQVAsQ0FBVjs7QUFFQSxNQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCQyxhQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCZixJQUE5QixFQUFvQ2dCLEdBQXBDLENBQXdDLFVBQUFDLEtBQUssRUFBSTtBQUNoRFAsYUFBTyxDQUFDQyxJQUFSLENBQWFNLEtBQWI7QUFDQSxLQUZEO0FBR0EsR0FKRDs7QUFNQSxzQkFDQztBQUFJLGFBQVMsRUFBRSxVQUFmO0FBQTJCLE1BQUUsRUFBRVgsU0FBL0I7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRU4sSUFBWjtBQUFBLDZCQUNDO0FBQUcsWUFBSSxFQUFFQSxJQUFUO0FBQWUsZUFBTyxFQUFFWSxRQUF4QjtBQUFrQyxpQkFBUyxFQUFFLENBQUMsY0FBRCxFQUFpQixPQUFqQixFQUEwQk0sSUFBMUIsQ0FBK0IsR0FBL0IsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsRUFJRWIsUUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVNBLENBekJEOztNQUFNRCxVOztBQTJCTixJQUFNZSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFBQTs7QUFDbENXLFNBQU8sQ0FBQ1UsR0FBUixDQUFZckIsS0FBWjtBQUNBLE1BQUlzQixnQkFBSjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZkQsb0JBQWdCLEdBQUdFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBbkI7QUFDQWQsV0FBTyxDQUFDVSxHQUFSLENBQVksV0FBWixFQUF5QkMsZ0JBQXpCO0FBQ0EsR0FIUSxDQUFUO0FBS0Esc0JBQ0M7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBR0M7QUFBQSxnQkFFRUEsZ0JBQWdCLENBQUNJLEdBQWpCLENBQXFCLFVBQUFDLFFBQVEsRUFBSTtBQUNqQyw0QkFBTztBQUFBLG9CQUFPQSxRQUFRLENBQUNDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQSxPQUZBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBY0EsQ0F2QkQ7O0dBQU1SLGU7O01BQUFBLGU7QUF5QkMsSUFBTVMsYUFBYSxHQUFHO0FBQzVCQyxHQUFDLEVBQUUvQixVQUR5QjtBQUU1QmdDLElBQUUsRUFBRTFCLFVBRndCO0FBRzVCZSxpQkFBZSxFQUFmQTtBQUg0QixDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5jYjg0YzczMjM0NTk5MDZkNjk3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjdXN0b21MaW5rU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9jdXN0b20tbGluay5tb2R1bGUuY3NzXCJcbmNvbnN0IEN1c3RvbUxpbmsgPSAocHJvcHMpID0+IHtcblx0LyoqIEB0eXBlIHtzdHJpbmd9ICovXG5cdGNvbnN0IGhyZWYgPSBwcm9wcy5ocmVmO1xuXHRjb25zdCBpc0ludGVybmFsID0gaHJlZiAmJiAoaHJlZi5zdGFydHNXaXRoKCcvJykpIHx8IGhyZWYuc3RhcnRzV2l0aChcIiNcIilcblxuXHRpZiAoaXNJbnRlcm5hbCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayBocmVmPXtocmVmfT5cblx0XHRcdFx0PGEgey4uLnByb3BzfSAvPlxuXHRcdFx0PC9MaW5rPlxuXHRcdClcblx0fVxuXG5cdHJldHVybiA8YSBjbGFzc05hbWU9e2N1c3RvbUxpbmtTdHlsZVtcImV4dGVybmFsXCJdfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgey4uLnByb3BzfSAvPlxufVxuXG5jb25zdCBMaW5rYWJsZUgyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRsZXQgZWxlbWVudElkO1xuXHR0cnkge1xuXHRcdGVsZW1lbnRJZCA9IGNoaWxkcmVuLnJlcGxhY2UoL1xccy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS53YXJuKGUpXG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblx0Y29uc3QgaHJlZiA9IGAjJHtlbGVtZW50SWR9YFxuXG5cdGNvbnN0IGNvcHlMaW5rID0gKCkgPT4ge1xuXHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGhyZWYpLmVycihlcnJvciA9PiB7XG5cdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpXG5cdFx0fSlcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGgyIGNsYXNzTmFtZT17XCJsaW5rYWJsZVwifSBpZD17ZWxlbWVudElkfT5cblx0XHRcdDxMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdFx0XHQ8YSBocmVmPXtocmVmfSBvbkNsaWNrPXtjb3B5TGlua30gY2xhc3NOYW1lPXtbXCJoZWFkaW5nLWxpbmtcIiwgXCJyZXNldFwiXS5qb2luKFwiIFwiKX0+IzwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2gyPlxuXHQpXG5cbn1cblxuY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKHByb3BzKSA9PiB7XG5cdGNvbnNvbGUubG9nKHByb3BzKVxuXHRsZXQgbGlua2FibGVFbGVtZW50cztcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxpbmthYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmthYmxlXCIpXG5cdFx0Y29uc29sZS5sb2coXCJ1c2VFZmZlY3RcIiwgbGlua2FibGVFbGVtZW50cylcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uPlxuXHRcdFx0PGgzPlRhYmxlIE9mIENvbnRlbnRzPC9oMz5cblxuXHRcdFx0PGRpdj5cblxuXHRcdFx0XHR7bGlua2FibGVFbGVtZW50cy5tYXAobGlua2FibGUgPT4ge1xuXHRcdFx0XHRcdHJldHVybiA8c3Bhbj57bGlua2FibGUuaW5uZXJUZXh0fTwvc3Bhbj5cblx0XHRcdFx0fSlcblxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IE1EWENvbXBvbmVudHMgPSB7XG5cdGE6IEN1c3RvbUxpbmssXG5cdGgyOiBMaW5rYWJsZUgyLFxuXHRUYWJsZU9mQ29udGVudHNcbn0iXSwic291cmNlUm9vdCI6IiJ9