webpackHotUpdate_N_E("pages/404",{

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      slug = _useState4[0],
      setSlug = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // data-is-linkable=true elements will be shown in the TableOfContents
    setLinkableElements(Array.from(document.querySelectorAll("*[data-is-linkable=true]")));
    console.log(linkableElements.map(function (l) {
      return l.id;
    }));
    setSlug(window.location.pathname.split("/").reverse()[0]);
  }, []);
  if (linkableElements.length === 0) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["parent-section"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["toc-heading"],
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["links-container"],
      children: linkableElements.map(function (linkable) {
        var linkText = linkable.innerText.slice(1);
        var hash = linkText.replaceAll(" ", "-").toLowerCase();
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: {
              pathname: "/post/[slug]",
              hash: hash,
              query: {
                slug: slug
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["toc-link"],
              children: linkText
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this)
        }, linkText, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 3
  }, _this);
};

_s2(TableOfContents, "9uiPB/s9WObLenfgrnCo5SKpFDs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVsZW1lbnRJZCIsInNldEVsZW1lbnRJZCIsInNsdWciLCJzZXRTbHVnIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwicmV2ZXJzZSIsImxpbmthYmxlSDJTdHlsZSIsImhhc2giLCJxdWVyeSIsIlRhYmxlT2ZDb250ZW50cyIsImxpbmthYmxlRWxlbWVudHMiLCJzZXRMaW5rYWJsZUVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImwiLCJpZCIsImxlbmd0aCIsIlRPQ1N0eWxlIiwibGlua2FibGUiLCJsaW5rVGV4dCIsImlubmVyVGV4dCIsInNsaWNlIiwicmVwbGFjZUFsbCIsIk1EWENvbXBvbmVudHMiLCJhIiwiaDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxJQUFJLElBQUtBLElBQUksQ0FBQ0UsVUFBTCxDQUFnQixHQUFoQixDQUFULElBQWtDRixJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBckQ7O0FBRUEsTUFBSUQsVUFBSixFQUFnQjtBQUNmLHdCQUNDLHFFQUFDLGdEQUFEO0FB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QUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBR0M7QUFBSSxlQUFTLEVBQUVBLDJFQUFRLENBQUMsaUJBQUQsQ0FBdkI7QUFBQSxnQkFDRVosZ0JBQWdCLENBQUNRLEdBQWpCLENBQXFCLFVBQUFLLFFBQVEsRUFBSTtBQUNqQyxZQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkMsS0FBbkIsQ0FBeUIsQ0FBekIsQ0FBakI7QUFDQSxZQUFNbkIsSUFBSSxHQUFHaUIsUUFBUSxDQUFDRyxVQUFULENBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCM0IsV0FBOUIsRUFBYjtBQUNBLDRCQUFPO0FBQUEsaUNBQ04scUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFO0FBQ1hHLHNCQUFRLGdCQURHO0FBRVhJLGtCQUFJLEVBQUpBLElBRlc7QUFHWEMsbUJBQUssRUFBRTtBQUFFWixvQkFBSSxFQUFKQTtBQUFGO0FBSEksYUFBWjtBQUFBLG1DQUtDO0FBQUcsdUJBQVMsRUFBRTBCLDJFQUFRLENBQUMsVUFBRCxDQUF0QjtBQUFBLHdCQUFxQ0U7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxXQUFTQSxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFTQSxPQVpBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBcUJBLENBcENEOztJQUFNZixlOztNQUFBQSxlO0FBc0NDLElBQU1tQixhQUFhLEdBQUc7QUFDNUJDLEdBQUMsRUFBRTVDLFVBRHlCO0FBRTVCNkMsSUFBRSxFQUFFdkMsVUFGd0I7QUFHNUJrQixpQkFBZSxFQUFmQTtBQUg0QixDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy80MDQuNDQyMGUwMGZkMTNkMjk4NzhmMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGN1c3RvbUxpbmtTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2N1c3RvbS1saW5rLm1vZHVsZS5jc3NcIlxuY29uc3QgQ3VzdG9tTGluayA9IChwcm9wcykgPT4ge1xuXHQvKiogQHR5cGUge3N0cmluZ30gKi9cblx0Y29uc3QgaHJlZiA9IHByb3BzLmhyZWY7XG5cdGNvbnN0IGlzSW50ZXJuYWwgPSBocmVmICYmIChocmVmLnN0YXJ0c1dpdGgoJy8nKSkgfHwgaHJlZi5zdGFydHNXaXRoKFwiI1wiKVxuXG5cdGlmIChpc0ludGVybmFsKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdFx0XHQ8YSB7Li4ucHJvcHN9IC8+XG5cdFx0XHQ8L0xpbms+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIDxhIGNsYXNzTmFtZT17Y3VzdG9tTGlua1N0eWxlW1wiZXh0ZXJuYWxcIl19IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB7Li4ucHJvcHN9IC8+XG59XG5cbmltcG9ydCBsaW5rYWJsZUgyU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9saW5rYWJsZS1oMi5tb2R1bGUuY3NzXCJcbmNvbnN0IExpbmthYmxlSDIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IFtlbGVtZW50SWQsIHNldEVsZW1lbnRJZF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW3NsdWcsIHNldFNsdWddID0gdXNlU3RhdGUoXCJcIik7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRFbGVtZW50SWQoY2hpbGRyZW4ucmVwbGFjZSgvXFxzL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpKVxuXHRcdHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0pXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0Ly8gZGF0YS1pcy1saW5rYWJsZSBpcyB1c2VkIHdoZW4gY3JlYXRpbmcgdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdDxoMiBjbGFzc05hbWU9e2xpbmthYmxlSDJTdHlsZVtcImxpbmthYmxlXCJdfSBpZD17ZWxlbWVudElkfSBkYXRhLWlzLWxpbmthYmxlPlxuXHRcdFx0PExpbmsgaHJlZj17e1xuXHRcdFx0XHRwYXRobmFtZTogYC9wb3N0L1tzbHVnXWAsXG5cdFx0XHRcdGhhc2g6IGVsZW1lbnRJZCxcblx0XHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0XHR9fT5cblx0XHRcdFx0PGEgY2xhc3NOYW1lPXtcInJlc2V0XCJ9PiM8L2E+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9oMj5cblx0KVxuXG59XG5cbmltcG9ydCBUT0NTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3RhYmxlLW9mLWNvbnRlbnRzLm1vZHVsZS5jc3NcIlxuY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IFtsaW5rYWJsZUVsZW1lbnRzLCBzZXRMaW5rYWJsZUVsZW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW3NsdWcsIHNldFNsdWddID0gdXNlU3RhdGUoXCJcIik7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlPXRydWUgZWxlbWVudHMgd2lsbCBiZSBzaG93biBpbiB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0c2V0TGlua2FibGVFbGVtZW50cyhBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqW2RhdGEtaXMtbGlua2FibGU9dHJ1ZV1cIikpKVxuXG5cdFx0Y29uc29sZS5sb2cobGlua2FibGVFbGVtZW50cy5tYXAobCA9PiBsLmlkKSlcblxuXHRcdHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0pXG5cdH0sIFtdKVxuXG5cdGlmIChsaW5rYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJwYXJlbnQtc2VjdGlvblwiXX0+XG5cdFx0XHQ8aDMgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1oZWFkaW5nXCJdfT5UYWJsZSBPZiBDb250ZW50czwvaDM+XG5cblx0XHRcdDxvbCBjbGFzc05hbWU9e1RPQ1N0eWxlW1wibGlua3MtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0e2xpbmthYmxlRWxlbWVudHMubWFwKGxpbmthYmxlID0+IHtcblx0XHRcdFx0XHRjb25zdCBsaW5rVGV4dCA9IGxpbmthYmxlLmlubmVyVGV4dC5zbGljZSgxKVxuXHRcdFx0XHRcdGNvbnN0IGhhc2ggPSBsaW5rVGV4dC5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdHJldHVybiA8bGkga2V5PXtsaW5rVGV4dH0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiBgL3Bvc3QvW3NsdWddYCxcblx0XHRcdFx0XHRcdFx0aGFzaCxcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1saW5rXCJdfT57bGlua1RleHR9PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9vbD5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IE1EWENvbXBvbmVudHMgPSB7XG5cdGE6IEN1c3RvbUxpbmssXG5cdGgyOiBMaW5rYWJsZUgyLFxuXHRUYWJsZU9mQ29udGVudHNcbn0iXSwic291cmNlUm9vdCI6IiJ9