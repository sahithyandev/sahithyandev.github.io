webpackHotUpdate_N_E("pages/posts",{

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
  console.log(href);

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CustomLink, {
        href: href,
        children: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 4
      }, _this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
    setLinkableElements(Array.from(document.querySelectorAll("*[data-is-linkable=true]"))); // console.log("useEffect", linkableElements)
  }, []);
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
        var href = linkable.children[0].getAttribute("href");
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CustomLink, {
            href: href,
            className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["toc-link"],
            children: linkable.innerText.slice(1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJlbGVtZW50SWQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJlIiwiY29uc29sZSIsIndhcm4iLCJsb2ciLCJjb3B5TGluayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImVyciIsImVycm9yIiwibGlua2FibGVIMlN0eWxlIiwiVGFibGVPZkNvbnRlbnRzIiwidXNlU3RhdGUiLCJsaW5rYWJsZUVsZW1lbnRzIiwic2V0TGlua2FibGVFbGVtZW50cyIsInVzZUVmZmVjdCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIlRPQ1N0eWxlIiwibWFwIiwibGlua2FibGUiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJzbGljZSIsIk1EWENvbXBvbmVudHMiLCJhIiwiaDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDN0I7QUFDQSxNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdELElBQUksSUFBS0EsSUFBSSxDQUFDRSxVQUFMLENBQWdCLEdBQWhCLENBQVQsSUFBa0NGLElBQUksQ0FBQ0UsVUFBTCxDQUFnQixHQUFoQixDQUFyRDs7QUFFQSxNQUFJRCxVQUFKLEVBQWdCO0FBQ2Ysd0JBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVELElBQVo7QUFBQSw2QkFDQyw0RkFBT0QsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREO0FBS0E7O0FBRUQsc0JBQU87QUFBRyxhQUFTLEVBQUVJLHFFQUFlLENBQUMsVUFBRCxDQUE3QjtBQUEyQyxVQUFNLEVBQUMsUUFBbEQ7QUFBMkQsT0FBRyxFQUFDO0FBQS9ELEtBQXlGSixLQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDQSxDQWREOztLQUFNRCxVO0FBZ0JOOztBQUNBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3BDLE1BQUlDLFNBQUo7O0FBQ0EsTUFBSTtBQUNIQSxhQUFTLEdBQUdELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixLQUFqQixFQUF3QixHQUF4QixFQUE2QkMsV0FBN0IsRUFBWjtBQUNBLEdBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDWEMsV0FBTyxDQUFDQyxJQUFSLENBQWFGLENBQWI7QUFDQSxXQUFPLEVBQVA7QUFDQTs7QUFDRCxNQUFNVCxJQUFJLGNBQU9NLFNBQVAsQ0FBVjtBQUNBSSxTQUFPLENBQUNFLEdBQVIsQ0FBWVosSUFBWjs7QUFFQSxNQUFNYSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCQyxhQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCaEIsSUFBOUIsRUFBb0NpQixHQUFwQyxDQUF3QyxVQUFBQyxLQUFLLEVBQUk7QUFDaERSLGFBQU8sQ0FBQ0MsSUFBUixDQUFhTyxLQUFiO0FBQ0EsS0FGRDtBQUdBLEdBSkQ7O0FBTUE7QUFBQTtBQUNDO0FBQ0E7QUFBSSxlQUFTLEVBQUVDLHFFQUFlLENBQUMsVUFBRCxDQUE5QjtBQUE0QyxRQUFFLEVBQUViLFNBQWhEO0FBQTJELDhCQUEzRDtBQUFBLDhCQUNDLHFFQUFDLFVBQUQ7QUFBWSxZQUFJLEVBQUVOLElBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsRUFLRUssUUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQVdBLENBNUJEOztNQUFNRCxVO0FBOEJOOztBQUNBLElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNyQixLQUFELEVBQVc7QUFBQTs7QUFDbENXLFNBQU8sQ0FBQ0UsR0FBUixDQUFZYixLQUFaOztBQURrQyxrQkFFY3NCLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRTNCQyxnQkFGMkI7QUFBQSxNQUVUQyxtQkFGUzs7QUFJbENDLHlEQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0FELHVCQUFtQixDQUFDRSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBWCxDQUFELENBQW5CLENBRmUsQ0FHZjtBQUNBLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFDQztBQUFTLGFBQVMsRUFBRUMsMkVBQVEsQ0FBQyxnQkFBRCxDQUE1QjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFFQSwyRUFBUSxDQUFDLGFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUdDO0FBQUksZUFBUyxFQUFFQSwyRUFBUSxDQUFDLGlCQUFELENBQXZCO0FBQUEsZ0JBQ0VQLGdCQUFnQixDQUFDUSxHQUFqQixDQUFxQixVQUFBQyxRQUFRLEVBQUk7QUFDakMsWUFBTS9CLElBQUksR0FBRytCLFFBQVEsQ0FBQzFCLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIyQixZQUFyQixDQUFrQyxNQUFsQyxDQUFiO0FBQ0EsNEJBQU87QUFBQSxpQ0FBSSxxRUFBQyxVQUFEO0FBQVksZ0JBQUksRUFBRWhDLElBQWxCO0FBQXdCLHFCQUFTLEVBQUU2QiwyRUFBUSxDQUFDLFVBQUQsQ0FBM0M7QUFBQSxzQkFBMERFLFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkMsS0FBbkIsQ0FBeUIsQ0FBekI7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQSxPQUhBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBWUEsQ0F0QkQ7O0dBQU1kLGU7O01BQUFBLGU7QUF3QkMsSUFBTWUsYUFBYSxHQUFHO0FBQzVCQyxHQUFDLEVBQUV0QyxVQUR5QjtBQUU1QnVDLElBQUUsRUFBRWpDLFVBRndCO0FBRzVCZ0IsaUJBQWUsRUFBZkE7QUFINEIsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuMTRkZGJhNjBhNGQ2ZTNhNGQ5YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGN1c3RvbUxpbmtTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2N1c3RvbS1saW5rLm1vZHVsZS5jc3NcIlxuY29uc3QgQ3VzdG9tTGluayA9IChwcm9wcykgPT4ge1xuXHQvKiogQHR5cGUge3N0cmluZ30gKi9cblx0Y29uc3QgaHJlZiA9IHByb3BzLmhyZWY7XG5cdGNvbnN0IGlzSW50ZXJuYWwgPSBocmVmICYmIChocmVmLnN0YXJ0c1dpdGgoJy8nKSkgfHwgaHJlZi5zdGFydHNXaXRoKFwiI1wiKVxuXG5cdGlmIChpc0ludGVybmFsKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdFx0XHQ8YSB7Li4ucHJvcHN9IC8+XG5cdFx0XHQ8L0xpbms+XG5cdFx0KVxuXHR9XG5cblx0cmV0dXJuIDxhIGNsYXNzTmFtZT17Y3VzdG9tTGlua1N0eWxlW1wiZXh0ZXJuYWxcIl19IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB7Li4ucHJvcHN9IC8+XG59XG5cbmltcG9ydCBsaW5rYWJsZUgyU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9saW5rYWJsZS1oMi5tb2R1bGUuY3NzXCJcbmNvbnN0IExpbmthYmxlSDIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGxldCBlbGVtZW50SWQ7XG5cdHRyeSB7XG5cdFx0ZWxlbWVudElkID0gY2hpbGRyZW4ucmVwbGFjZSgvXFxzL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLndhcm4oZSlcblx0XHRyZXR1cm4gXCJcIjtcblx0fVxuXHRjb25zdCBocmVmID0gYCMke2VsZW1lbnRJZH1gXG5cdGNvbnNvbGUubG9nKGhyZWYpXG5cblx0Y29uc3QgY29weUxpbmsgPSAoKSA9PiB7XG5cdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoaHJlZikuZXJyKGVycm9yID0+IHtcblx0XHRcdGNvbnNvbGUud2FybihlcnJvcilcblx0XHR9KVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlIGlzIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0PGgyIGNsYXNzTmFtZT17bGlua2FibGVIMlN0eWxlW1wibGlua2FibGVcIl19IGlkPXtlbGVtZW50SWR9IGRhdGEtaXMtbGlua2FibGU+XG5cdFx0XHQ8Q3VzdG9tTGluayBocmVmPXtocmVmfT4jPC9DdXN0b21MaW5rPlxuXHRcdFx0ey8qIDxMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e1tcImhlYWRpbmctbGlua1wiLCBcInJlc2V0XCJdLmpvaW4oXCIgXCIpfT4jPC9hPlxuXHRcdFx0PC9MaW5rPiAqL31cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2gyPlxuXHQpXG5cbn1cblxuaW1wb3J0IFRPQ1N0eWxlIGZyb20gXCIuLi9zdHlsZXMvdGFibGUtb2YtY29udGVudHMubW9kdWxlLmNzc1wiXG5jb25zdCBUYWJsZU9mQ29udGVudHMgPSAocHJvcHMpID0+IHtcblx0Y29uc29sZS5sb2cocHJvcHMpXG5cdGNvbnN0IFtsaW5rYWJsZUVsZW1lbnRzLCBzZXRMaW5rYWJsZUVsZW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIGRhdGEtaXMtbGlua2FibGU9dHJ1ZSBlbGVtZW50cyB3aWxsIGJlIHNob3duIGluIHRoZSBUYWJsZU9mQ29udGVudHNcblx0XHRzZXRMaW5rYWJsZUVsZW1lbnRzKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipbZGF0YS1pcy1saW5rYWJsZT10cnVlXVwiKSkpXG5cdFx0Ly8gY29uc29sZS5sb2coXCJ1c2VFZmZlY3RcIiwgbGlua2FibGVFbGVtZW50cylcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1RPQ1N0eWxlW1wicGFyZW50LXNlY3Rpb25cIl19PlxuXHRcdFx0PGgzIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJ0b2MtaGVhZGluZ1wiXX0+VGFibGUgT2YgQ29udGVudHM8L2gzPlxuXG5cdFx0XHQ8b2wgY2xhc3NOYW1lPXtUT0NTdHlsZVtcImxpbmtzLWNvbnRhaW5lclwiXX0+XG5cdFx0XHRcdHtsaW5rYWJsZUVsZW1lbnRzLm1hcChsaW5rYWJsZSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaHJlZiA9IGxpbmthYmxlLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZShcImhyZWZcIilcblx0XHRcdFx0XHRyZXR1cm4gPGxpPjxDdXN0b21MaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17VE9DU3R5bGVbXCJ0b2MtbGlua1wiXX0+e2xpbmthYmxlLmlubmVyVGV4dC5zbGljZSgxKX08L0N1c3RvbUxpbms+PC9saT5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L29sPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgTURYQ29tcG9uZW50cyA9IHtcblx0YTogQ3VzdG9tTGluayxcblx0aDI6IExpbmthYmxlSDIsXG5cdFRhYmxlT2ZDb250ZW50c1xufSJdLCJzb3VyY2VSb290IjoiIn0=