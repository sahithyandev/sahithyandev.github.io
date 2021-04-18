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

var LinkableH2 = function LinkableH2(_ref) {
  var children = _ref.children;
  console.log("h2", children, typeof children);
  var elementId = new String(children).replaceAll(" ", "-").toLowerCase();
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
        lineNumber: 29,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwiZWxlbWVudElkIiwiU3RyaW5nIiwicmVwbGFjZUFsbCIsInRvTG93ZXJDYXNlIiwiam9pbiIsIlRhYmxlT2ZDb250ZW50cyIsInVzZUVmZmVjdCIsImxpbmthYmxlRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJNRFhDb21wb25lbnRzIiwiYSIsImgyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDN0I7QUFDQSxNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdELElBQUksSUFBS0EsSUFBSSxDQUFDRSxVQUFMLENBQWdCLEdBQWhCLENBQVQsSUFBa0NGLElBQUksQ0FBQ0UsVUFBTCxDQUFnQixHQUFoQixDQUFyRDs7QUFFQSxNQUFJRCxVQUFKLEVBQWdCO0FBQ2Ysd0JBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVELElBQVo7QUFBQSw2QkFDQyw0RkFBT0QsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBS0E7O0FBRUQsc0JBQU87QUFBRyxhQUFPSSxxRUFBZSxDQUFDLFVBQUQsQ0FBekI7QUFBdUMsVUFBTSxFQUFDLFFBQTlDO0FBQXVELE9BQUcsRUFBQztBQUEzRCxLQUFxRkosS0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0EsQ0FkRDs7S0FBTUQsVTs7QUFnQk4sSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0JGLFFBQWxCLEVBQTRCLE9BQU9BLFFBQW5DO0FBQ0EsTUFBTUcsU0FBUyxHQUFHLElBQUlDLE1BQUosQ0FBV0osUUFBWCxFQUFxQkssVUFBckIsQ0FBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMENDLFdBQTFDLEVBQWxCO0FBQ0EsTUFBTVgsSUFBSSxjQUFPUSxTQUFQLENBQVY7QUFFQSxzQkFDQztBQUFJLGFBQVMsRUFBRSxVQUFmO0FBQTJCLE1BQUUsRUFBRUEsU0FBL0I7QUFBQSw0QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRVIsSUFBWjtBQUFBLDZCQUNDO0FBQUcsWUFBSSxFQUFFQSxJQUFUO0FBQWUsaUJBQVMsRUFBRSxDQUFDLGNBQUQsRUFBaUIsT0FBakIsRUFBMEJZLElBQTFCLENBQStCLEdBQS9CLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEVBSUVQLFFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFTQSxDQWREOztNQUFNRCxVOztBQWdCTixJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNkLEtBQUQsRUFBVztBQUFBOztBQUNsQ08sU0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFFQWUseURBQVMsQ0FBQyxZQUFNO0FBQ2ZSLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFFQSxRQUFNUSxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixDQUF6QjtBQUNBWCxXQUFPLENBQUNDLEdBQVIsQ0FBWVEsZ0JBQVo7QUFDQSxHQUxRLENBQVQ7QUFPQSxzQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFNQSxDQWhCRDs7R0FBTUYsZTs7TUFBQUEsZTtBQWtCQyxJQUFNSyxhQUFhLEdBQUc7QUFDNUJDLEdBQUMsRUFBRXJCLFVBRHlCO0FBRTVCc0IsSUFBRSxFQUFFaEIsVUFGd0I7QUFHNUJTLGlCQUFlLEVBQWZBO0FBSDRCLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0YTQxYjI2OGY0MTljMWI5YjZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY3VzdG9tTGlua1N0eWxlIGZyb20gXCIuLi9zdHlsZXMvY3VzdG9tLWxpbmsubW9kdWxlLmNzc1wiXG5jb25zdCBDdXN0b21MaW5rID0gKHByb3BzKSA9PiB7XG5cdC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuXHRjb25zdCBocmVmID0gcHJvcHMuaHJlZjtcblx0Y29uc3QgaXNJbnRlcm5hbCA9IGhyZWYgJiYgKGhyZWYuc3RhcnRzV2l0aCgnLycpKSB8fCBocmVmLnN0YXJ0c1dpdGgoXCIjXCIpXG5cblx0aWYgKGlzSW50ZXJuYWwpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgaHJlZj17aHJlZn0+XG5cdFx0XHRcdDxhIHsuLi5wcm9wc30gLz5cblx0XHRcdDwvTGluaz5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gPGEgY2xhc3M9e2N1c3RvbUxpbmtTdHlsZVtcImV4dGVybmFsXCJdfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgey4uLnByb3BzfSAvPlxufVxuXG5jb25zdCBMaW5rYWJsZUgyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zb2xlLmxvZyhcImgyXCIsIGNoaWxkcmVuLCB0eXBlb2YgY2hpbGRyZW4pXG5cdGNvbnN0IGVsZW1lbnRJZCA9IG5ldyBTdHJpbmcoY2hpbGRyZW4pLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cdGNvbnN0IGhyZWYgPSBgIyR7ZWxlbWVudElkfWBcblxuXHRyZXR1cm4gKFxuXHRcdDxoMiBjbGFzc05hbWU9e1wibGlua2FibGVcIn0gaWQ9e2VsZW1lbnRJZH0+XG5cdFx0XHQ8TGluayBocmVmPXtocmVmfT5cblx0XHRcdFx0PGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtbXCJoZWFkaW5nLWxpbmtcIiwgXCJyZXNldFwiXS5qb2luKFwiIFwiKX0+IzwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2gyPlxuXHQpXG5cbn1cblxuY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKHByb3BzKSA9PiB7XG5cdGNvbnNvbGUubG9nKHByb3BzKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJ1c2VFZmZlY3RcIilcblxuXHRcdGNvbnN0IGxpbmthYmxlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpbmthYmxlXCIpXG5cdFx0Y29uc29sZS5sb2cobGlua2FibGVFbGVtZW50cylcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cblxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBNRFhDb21wb25lbnRzID0ge1xuXHRhOiBDdXN0b21MaW5rLFxuXHRoMjogTGlua2FibGVIMixcblx0VGFibGVPZkNvbnRlbnRzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==