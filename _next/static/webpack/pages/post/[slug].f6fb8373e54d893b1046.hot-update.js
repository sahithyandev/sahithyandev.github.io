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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

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
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      elementId = _useState[0],
      setElementId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      slug = _useState2[0],
      setSlug = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setElementId(children.replace(/\s/g, "-").toLowerCase());
    setSlug(window.location.pathname.split("/").reverse()[0]);
  }, []);
  return (
    /*#__PURE__*/
    // data-is-linkable is used when creating the TableOfContents
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      className: _styles_linkable_h2_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["linkable"],
      id: elementId,
      "data-is-linkable": true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: "/post/[slug]",
          hash: elementId,
          query: {
            slug: slug
          }
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "reset",
          children: "#"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
    }, _this)
  );
};

_s(LinkableH2, "tJmgFzIkfBywYbf6iUR+gDhEB+Y=");

_c2 = LinkableH2;


var TableOfContents = function TableOfContents(props) {
  _s2();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      linkableElements = _useState3[0],
      setLinkableElements = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // data-is-linkable=true elements will be shown in the TableOfContents
    setLinkableElements(Array.from(document.querySelectorAll("*[data-is-linkable=true]")));
  }, []);
  if (linkableElements.length === 0) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["parent-section"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["toc-heading"],
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["links-container"],
      children: linkableElements.map(function (linkable) {
        var href = linkable.children[0].getAttribute("href");
        var linkText = linkable.innerText.slice(1);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CustomLink, {
            href: href,
            className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["toc-link"],
            children: linkText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 32
          }, _this)
        }, linkText, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 3
  }, _this);
};

_s2(TableOfContents, "+KRWeevJzlZBXDAW+hD50dw+ZC4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVsZW1lbnRJZCIsInNldEVsZW1lbnRJZCIsInNsdWciLCJzZXRTbHVnIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwicmV2ZXJzZSIsImxpbmthYmxlSDJTdHlsZSIsImhhc2giLCJxdWVyeSIsIlRhYmxlT2ZDb250ZW50cyIsImxpbmthYmxlRWxlbWVudHMiLCJzZXRMaW5rYWJsZUVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiVE9DU3R5bGUiLCJtYXAiLCJsaW5rYWJsZSIsImdldEF0dHJpYnV0ZSIsImxpbmtUZXh0IiwiaW5uZXJUZXh0Iiwic2xpY2UiLCJNRFhDb21wb25lbnRzIiwiYSIsImgyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM3QjtBQUNBLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxJQUFLQSxJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVCxJQUFrQ0YsSUFBSSxDQUFDRSxVQUFMLENBQWdCLEdBQWhCLENBQXJEOztBQUVBLE1BQUlELFVBQUosRUFBZ0I7QUFDZix3QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsSUFBWjtBQUFB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Q0FBbUIscUVBQUMsVUFBRDtBQUFZLGdCQUFJLEVBQUVwQyxJQUFsQjtBQUF3QixxQkFBUyxFQUFFOEIsMkVBQVEsQ0FBQyxVQUFELENBQTNDO0FBQUEsc0JBQTBESTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CLFdBQVNBLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNBLE9BSkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFhQSxDQXZCRDs7SUFBTVosZTs7TUFBQUEsZTtBQXlCQyxJQUFNZSxhQUFhLEdBQUc7QUFDNUJDLEdBQUMsRUFBRXhDLFVBRHlCO0FBRTVCeUMsSUFBRSxFQUFFbkMsVUFGd0I7QUFHNUJrQixpQkFBZSxFQUFmQTtBQUg0QixDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5mNmZiODM3M2U1NGQ4OTNiMTA0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY3VzdG9tTGlua1N0eWxlIGZyb20gXCIuLi9zdHlsZXMvY3VzdG9tLWxpbmsubW9kdWxlLmNzc1wiXG5jb25zdCBDdXN0b21MaW5rID0gKHByb3BzKSA9PiB7XG5cdC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuXHRjb25zdCBocmVmID0gcHJvcHMuaHJlZjtcblx0Y29uc3QgaXNJbnRlcm5hbCA9IGhyZWYgJiYgKGhyZWYuc3RhcnRzV2l0aCgnLycpKSB8fCBocmVmLnN0YXJ0c1dpdGgoXCIjXCIpXG5cblx0aWYgKGlzSW50ZXJuYWwpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgaHJlZj17aHJlZn0+XG5cdFx0XHRcdDxhIHsuLi5wcm9wc30gLz5cblx0XHRcdDwvTGluaz5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gPGEgY2xhc3NOYW1lPXtjdXN0b21MaW5rU3R5bGVbXCJleHRlcm5hbFwiXX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHsuLi5wcm9wc30gLz5cbn1cblxuaW1wb3J0IGxpbmthYmxlSDJTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2xpbmthYmxlLWgyLm1vZHVsZS5jc3NcIlxuY29uc3QgTGlua2FibGVIMiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW2VsZW1lbnRJZCwgc2V0RWxlbWVudElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEVsZW1lbnRJZChjaGlsZHJlbi5yZXBsYWNlKC9cXHMvZywgXCItXCIpLnRvTG93ZXJDYXNlKCkpXG5cdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlIGlzIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0PGgyIGNsYXNzTmFtZT17bGlua2FibGVIMlN0eWxlW1wibGlua2FibGVcIl19IGlkPXtlbGVtZW50SWR9IGRhdGEtaXMtbGlua2FibGU+XG5cdFx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRcdHBhdGhuYW1lOiBgL3Bvc3QvW3NsdWddYCxcblx0XHRcdFx0aGFzaDogZWxlbWVudElkLFxuXHRcdFx0XHRxdWVyeTogeyBzbHVnIH1cblx0XHRcdH19PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e1wicmVzZXRcIn0+IzwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2gyPlxuXHQpXG5cbn1cblxuaW1wb3J0IFRPQ1N0eWxlIGZyb20gXCIuLi9zdHlsZXMvdGFibGUtb2YtY29udGVudHMubW9kdWxlLmNzc1wiXG5jb25zdCBUYWJsZU9mQ29udGVudHMgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgW2xpbmthYmxlRWxlbWVudHMsIHNldExpbmthYmxlRWxlbWVudHNdID0gdXNlU3RhdGUoW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gZGF0YS1pcy1saW5rYWJsZT10cnVlIGVsZW1lbnRzIHdpbGwgYmUgc2hvd24gaW4gdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdHNldExpbmthYmxlRWxlbWVudHMoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKltkYXRhLWlzLWxpbmthYmxlPXRydWVdXCIpKSlcblx0fSwgW10pXG5cblx0aWYgKGxpbmthYmxlRWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtUT0NTdHlsZVtcInBhcmVudC1zZWN0aW9uXCJdfT5cblx0XHRcdDxoMyBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWhlYWRpbmdcIl19PlRhYmxlIE9mIENvbnRlbnRzPC9oMz5cblxuXHRcdFx0PG9sIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJsaW5rcy1jb250YWluZXJcIl19PlxuXHRcdFx0XHR7bGlua2FibGVFbGVtZW50cy5tYXAobGlua2FibGUgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGhyZWYgPSBsaW5rYWJsZS5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXG5cdFx0XHRcdFx0Y29uc3QgbGlua1RleHQgPSBsaW5rYWJsZS5pbm5lclRleHQuc2xpY2UoMSlcblx0XHRcdFx0XHRyZXR1cm4gPGxpIGtleT17bGlua1RleHR9PjxDdXN0b21MaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17VE9DU3R5bGVbXCJ0b2MtbGlua1wiXX0+e2xpbmtUZXh0fTwvQ3VzdG9tTGluaz48L2xpPlxuXHRcdFx0XHR9KX1cblx0XHRcdDwvb2w+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBNRFhDb21wb25lbnRzID0ge1xuXHRhOiBDdXN0b21MaW5rLFxuXHRoMjogTGlua2FibGVIMixcblx0VGFibGVPZkNvbnRlbnRzXG59Il0sInNvdXJjZVJvb3QiOiIifQ==