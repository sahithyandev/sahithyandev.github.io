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
  var ids = linkableElements.map(function (l) {
    return l.getAttribute("id");
  });

  if (linkableElements.length === 0 || ids.includes("")) {
    console.log({
      linkableElements: linkableElements,
      classes: linkableElements.map(function (l) {
        return l.innerText;
      })
    });
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["parent-section"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_6___default.a["toc-heading"],
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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
              lineNumber: 81,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, _this)
        }, linkText, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVsZW1lbnRJZCIsInNldEVsZW1lbnRJZCIsInNsdWciLCJzZXRTbHVnIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwicmV2ZXJzZSIsImxpbmthYmxlSDJTdHlsZSIsImhhc2giLCJxdWVyeSIsIlRhYmxlT2ZDb250ZW50cyIsImxpbmthYmxlRWxlbWVudHMiLCJzZXRMaW5rYWJsZUVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImwiLCJpZCIsImlkcyIsImdldEF0dHJpYnV0ZSIsImxlbmd0aCIsImluY2x1ZGVzIiwiY2xhc3NlcyIsImlubmVyVGV4dCIsIlRPQ1N0eWxlIiwibGlua2FibGUiLCJsaW5rVGV4dCIsInNsaWNlIiwicmVwbGFjZUFsbCIsIk1EWENvbXBvbmVudHMiLCJhIiwiaDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxJQUFJLElBQUtBLElBQUksQ0FBQ0UsVUFBTCxDQUFnQixHQUFoQixDQUFULElBQWtDRixJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBckQ7O0FBRUEsTUFBSUQsVUFBSixFQUFnQjtBQUNmLHdCQUNDLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFRCxJQUFaO0FBQUEsNkJBQ0MsNEZBQU9ELEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERDtBQUtBOztBQUVELHNCQUFPO0FBQUcsYUFBUyxFQUFFSSxxRUFBZSxDQUFDLFVBQUQsQ0FBN0I7QUFBMkMsVUFBTSxFQUFDLFFBQWxEO0FBQTJELE9BQUcsRUFBQztBQUEvRCxLQUF5RkosS0FBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0EsQ0FkRDs7S0FBTUQsVTtBQWdCTjs7QUFDQSxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxFQUFELENBRE47QUFBQSxNQUM3QkMsU0FENkI7QUFBQSxNQUNsQkMsWUFEa0I7O0FBQUEsbUJBRVpGLHNEQUFRLENBQUMsRUFBRCxDQUZJO0FBQUEsTUFFN0JHLElBRjZCO0FBQUEsTUFFdkJDLE9BRnVCOztBQUlwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2ZILGdCQUFZLENBQUNILFFBQVEsQ0FBQ08sT0FBVCxDQUFpQixLQUFqQixFQUF3QixHQUF4QixFQUE2QkMsV0FBN0IsRUFBRCxDQUFaO0FBQ0FILFdBQU8sQ0FBQ0ksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsRUFBb0NDLE9BQXBDLEdBQThDLENBQTlDLENBQUQsQ0FBUDtBQUNBLEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQTtBQUFBO0FBQ0M7QUFDQTtBQUFJLGVBQVMsRUFBRUMscUVBQWUsQ0FBQyxVQUFELENBQTlCO0FBQTRDLFFBQUUsRUFBRVosU0FBaEQ7QUFBMkQsOEJBQTNEO0FBQUEsOEJBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUU7QUFDWFMsa0JBQVEsZ0JBREc7QUFFWEksY0FBSSxFQUFFYixTQUZLO0FBR1hjLGVBQUssRUFBRTtBQUFFWixnQkFBSSxFQUFKQTtBQUFGO0FBSEksU0FBWjtBQUFBLCtCQUtDO0FBQUcsbUJBQVMsRUFBRSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEVBUUVKLFFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFjQSxDQXZCRDs7R0FBTUQsVTs7TUFBQUEsVTtBQXlCTjs7QUFDQSxJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdkIsS0FBRCxFQUFXO0FBQUE7O0FBQUEsbUJBQ2NPLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQzNCaUIsZ0JBRDJCO0FBQUEsTUFDVEMsbUJBRFM7O0FBQUEsbUJBRVZsQixzREFBUSxDQUFDLEVBQUQsQ0FGRTtBQUFBLE1BRTNCRyxJQUYyQjtBQUFBLE1BRXJCQyxPQUZxQjs7QUFJbENDLHlEQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0FhLHVCQUFtQixDQUFDQyxLQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwwQkFBMUIsQ0FBWCxDQUFELENBQW5CO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxnQkFBZ0IsQ0FBQ1EsR0FBakIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsRUFBTjtBQUFBLEtBQXRCLENBQVo7QUFFQXZCLFdBQU8sQ0FBQ0ksTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekIsQ0FBK0IsR0FBL0IsRUFBb0NDLE9BQXBDLEdBQThDLENBQTlDLENBQUQsQ0FBUDtBQUNBLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxNQUFNZ0IsR0FBRyxHQUFHWCxnQkFBZ0IsQ0FBQ1EsR0FBakIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0csWUFBRixDQUFlLElBQWYsQ0FBSjtBQUFBLEdBQXRCLENBQVo7O0FBQ0EsTUFBSVosZ0JBQWdCLENBQUNhLE1BQWpCLEtBQTRCLENBQTVCLElBQWlDRixHQUFHLENBQUNHLFFBQUosQ0FBYSxFQUFiLENBQXJDLEVBQXVEO0FBQ3REUixXQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFUCxzQkFBZ0IsRUFBaEJBLGdCQUFGO0FBQW9CZSxhQUFPLEVBQUVmLGdCQUFnQixDQUFDUSxHQUFqQixDQUFxQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDTyxTQUFOO0FBQUEsT0FBdEI7QUFBN0IsS0FBWjtBQUNBLFdBQU8sSUFBUDtBQUNBOztBQUVELHNCQUNDO0FBQVMsYUFBUyxFQUFFQywyRUFBUSxDQUFDLGdCQUFELENBQTVCO0FBQUEsNEJBQ0M7QUFBSSxlQUFTLEVBQUVBLDJFQUFRLENBQUMsYUFBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBR0M7QUFBSSxlQUFTLEVBQUVBLDJFQUFRLENBQUMsaUJBQUQsQ0FBdkI7QUFBQSxnQkFDRWpCLGdCQUFnQixDQUFDUSxHQUFqQixDQUFxQixVQUFBVSxRQUFRLEVBQUk7QUFDakMsWUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUNGLFNBQVQsQ0FBbUJJLEtBQW5CLENBQXlCLENBQXpCLENBQWpCO0FBQ0EsWUFBTXZCLElBQUksR0FBR3NCLFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4Qi9CLFdBQTlCLEVBQWI7QUFDQSw0QkFBTztBQUFBLGlDQUNOLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRTtBQUNYRyxzQkFBUSxnQkFERztBQUVYSSxrQkFBSSxFQUFKQSxJQUZXO0FBR1hDLG1CQUFLLEVBQUU7QUFBRVosb0JBQUksRUFBSkE7QUFBRjtBQUhJLGFBQVo7QUFBQSxtQ0FLQztBQUFHLHVCQUFTLEVBQUUrQiwyRUFBUSxDQUFDLFVBQUQsQ0FBdEI7QUFBQSx3QkFBcUNFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sV0FBU0EsUUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBU0EsT0FaQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXFCQSxDQXhDRDs7SUFBTXBCLGU7O01BQUFBLGU7QUEwQ0MsSUFBTXVCLGFBQWEsR0FBRztBQUM1QkMsR0FBQyxFQUFFaEQsVUFEeUI7QUFFNUJpRCxJQUFFLEVBQUUzQyxVQUZ3QjtBQUc1QmtCLGlCQUFlLEVBQWZBO0FBSDRCLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjhjMGJiMzFiNDc4NTJkZDQyM2RkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjdXN0b21MaW5rU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9jdXN0b20tbGluay5tb2R1bGUuY3NzXCJcbmNvbnN0IEN1c3RvbUxpbmsgPSAocHJvcHMpID0+IHtcblx0LyoqIEB0eXBlIHtzdHJpbmd9ICovXG5cdGNvbnN0IGhyZWYgPSBwcm9wcy5ocmVmO1xuXHRjb25zdCBpc0ludGVybmFsID0gaHJlZiAmJiAoaHJlZi5zdGFydHNXaXRoKCcvJykpIHx8IGhyZWYuc3RhcnRzV2l0aChcIiNcIilcblxuXHRpZiAoaXNJbnRlcm5hbCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGluayBocmVmPXtocmVmfT5cblx0XHRcdFx0PGEgey4uLnByb3BzfSAvPlxuXHRcdFx0PC9MaW5rPlxuXHRcdClcblx0fVxuXG5cdHJldHVybiA8YSBjbGFzc05hbWU9e2N1c3RvbUxpbmtTdHlsZVtcImV4dGVybmFsXCJdfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgey4uLnByb3BzfSAvPlxufVxuXG5pbXBvcnQgbGlua2FibGVIMlN0eWxlIGZyb20gXCIuLi9zdHlsZXMvbGlua2FibGUtaDIubW9kdWxlLmNzc1wiXG5jb25zdCBMaW5rYWJsZUgyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCBbZWxlbWVudElkLCBzZXRFbGVtZW50SWRdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0RWxlbWVudElkKGNoaWxkcmVuLnJlcGxhY2UoL1xccy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKSlcblx0XHRzZXRTbHVnKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdC8vIGRhdGEtaXMtbGlua2FibGUgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIHRoZSBUYWJsZU9mQ29udGVudHNcblx0XHQ8aDIgY2xhc3NOYW1lPXtsaW5rYWJsZUgyU3R5bGVbXCJsaW5rYWJsZVwiXX0gaWQ9e2VsZW1lbnRJZH0gZGF0YS1pcy1saW5rYWJsZT5cblx0XHRcdDxMaW5rIGhyZWY9e3tcblx0XHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0XHRoYXNoOiBlbGVtZW50SWQsXG5cdFx0XHRcdHF1ZXJ5OiB7IHNsdWcgfVxuXHRcdFx0fX0+XG5cdFx0XHRcdDxhIGNsYXNzTmFtZT17XCJyZXNldFwifT4jPC9hPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvaDI+XG5cdClcblxufVxuXG5pbXBvcnQgVE9DU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy90YWJsZS1vZi1jb250ZW50cy5tb2R1bGUuY3NzXCJcbmNvbnN0IFRhYmxlT2ZDb250ZW50cyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCBbbGlua2FibGVFbGVtZW50cywgc2V0TGlua2FibGVFbGVtZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gZGF0YS1pcy1saW5rYWJsZT10cnVlIGVsZW1lbnRzIHdpbGwgYmUgc2hvd24gaW4gdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdHNldExpbmthYmxlRWxlbWVudHMoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKltkYXRhLWlzLWxpbmthYmxlPXRydWVdXCIpKSlcblxuXHRcdGNvbnNvbGUubG9nKGxpbmthYmxlRWxlbWVudHMubWFwKGwgPT4gbC5pZCkpXG5cblx0XHRzZXRTbHVnKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdKVxuXHR9LCBbXSlcblxuXHRjb25zdCBpZHMgPSBsaW5rYWJsZUVsZW1lbnRzLm1hcChsID0+IGwuZ2V0QXR0cmlidXRlKFwiaWRcIikpXG5cdGlmIChsaW5rYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBpZHMuaW5jbHVkZXMoXCJcIikpIHtcblx0XHRjb25zb2xlLmxvZyh7IGxpbmthYmxlRWxlbWVudHMsIGNsYXNzZXM6IGxpbmthYmxlRWxlbWVudHMubWFwKGwgPT4gbC5pbm5lclRleHQpIH0pXG5cdFx0cmV0dXJuIG51bGxcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtUT0NTdHlsZVtcInBhcmVudC1zZWN0aW9uXCJdfT5cblx0XHRcdDxoMyBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWhlYWRpbmdcIl19PlRhYmxlIE9mIENvbnRlbnRzPC9oMz5cblxuXHRcdFx0PG9sIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJsaW5rcy1jb250YWluZXJcIl19PlxuXHRcdFx0XHR7bGlua2FibGVFbGVtZW50cy5tYXAobGlua2FibGUgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGxpbmtUZXh0ID0gbGlua2FibGUuaW5uZXJUZXh0LnNsaWNlKDEpXG5cdFx0XHRcdFx0Y29uc3QgaGFzaCA9IGxpbmtUZXh0LnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cdFx0XHRcdFx0cmV0dXJuIDxsaSBrZXk9e2xpbmtUZXh0fT5cblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3tcblx0XHRcdFx0XHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0XHRcdFx0XHRoYXNoLFxuXHRcdFx0XHRcdFx0XHRxdWVyeTogeyBzbHVnIH1cblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWxpbmtcIl19PntsaW5rVGV4dH08L2E+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L29sPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgTURYQ29tcG9uZW50cyA9IHtcblx0YTogQ3VzdG9tTGluayxcblx0aDI6IExpbmthYmxlSDIsXG5cdFRhYmxlT2ZDb250ZW50c1xufSJdLCJzb3VyY2VSb290IjoiIn0=