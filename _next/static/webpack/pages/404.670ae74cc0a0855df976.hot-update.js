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

  if (linkableElements.length === 0) {
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
      lineNumber: 68,
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
              lineNumber: 80,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 7
          }, _this)
        }, linkText, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NRFhDb21wb25lbnRzLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21MaW5rIiwicHJvcHMiLCJocmVmIiwiaXNJbnRlcm5hbCIsInN0YXJ0c1dpdGgiLCJjdXN0b21MaW5rU3R5bGUiLCJMaW5rYWJsZUgyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVsZW1lbnRJZCIsInNldEVsZW1lbnRJZCIsInNsdWciLCJzZXRTbHVnIiwidXNlRWZmZWN0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNwbGl0IiwicmV2ZXJzZSIsImxpbmthYmxlSDJTdHlsZSIsImhhc2giLCJxdWVyeSIsIlRhYmxlT2ZDb250ZW50cyIsImxpbmthYmxlRWxlbWVudHMiLCJzZXRMaW5rYWJsZUVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImwiLCJpZCIsImxlbmd0aCIsImNsYXNzZXMiLCJpbm5lclRleHQiLCJUT0NTdHlsZSIsImxpbmthYmxlIiwibGlua1RleHQiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJNRFhDb21wb25lbnRzIiwiYSIsImgyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUM3QjtBQUNBLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFuQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0QsSUFBSSxJQUFLQSxJQUFJLENBQUNFLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVCxJQUFrQ0YsSUFBSSxDQUFDRSxVQUFMLENBQWdCLEdBQWhCLENBQXJEOztBQUVBLE1BQUlELFVBQUosRUFBZ0I7QUFDZix3QkFDQyxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUQsSUFBWjtBQUFBLDZCQUNDLDRGQUFPRCxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQ7QUFLQTs7QUFFRCxzQkFBTztBQUFHLGFBQVMsRUFBRUkscUVBQWUsQ0FBQyxVQUFELENBQTdCO0FBQTJDLFVBQU0sRUFBQyxRQUFsRDtBQUEyRCxPQUFHLEVBQUM7QUFBL0QsS0FBeUZKLEtBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNBLENBZEQ7O0tBQU1ELFU7QUFnQk47O0FBQ0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsRUFBRCxDQUROO0FBQUEsTUFDN0JDLFNBRDZCO0FBQUEsTUFDbEJDLFlBRGtCOztBQUFBLG1CQUVaRixzREFBUSxDQUFDLEVBQUQsQ0FGSTtBQUFBLE1BRTdCRyxJQUY2QjtBQUFBLE1BRXZCQyxPQUZ1Qjs7QUFJcENDLHlEQUFTLENBQUMsWUFBTTtBQUNmSCxnQkFBWSxDQUFDSCxRQUFRLENBQUNPLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsR0FBeEIsRUFBNkJDLFdBQTdCLEVBQUQsQ0FBWjtBQUNBSCxXQUFPLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DQyxPQUFwQyxHQUE4QyxDQUE5QyxDQUFELENBQVA7QUFDQSxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0E7QUFBQTtBQUNDO0FBQ0E7QUFBSSxlQUFTLEVBQUVDLHFFQUFlLENBQUMsVUFBRCxDQUE5QjtBQUE0QyxRQUFFLEVBQUVaLFNBQWhEO0FBQTJELDhCQUEzRDtBQUFBLDhCQUNDLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFO0FBQ1hTLGtCQUFRLGdCQURHO0FBRVhJLGNBQUksRUFBRWIsU0FGSztBQUdYYyxlQUFLLEVBQUU7QUFBRVosZ0JBQUksRUFBSkE7QUFBRjtBQUhJLFNBQVo7QUFBQSwrQkFLQztBQUFHLG1CQUFTLEVBQUUsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQVFFSixRQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBY0EsQ0F2QkQ7O0dBQU1ELFU7O01BQUFBLFU7QUF5Qk47O0FBQ0EsSUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3ZCLEtBQUQsRUFBVztBQUFBOztBQUFBLG1CQUNjTyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUMzQmlCLGdCQUQyQjtBQUFBLE1BQ1RDLG1CQURTOztBQUFBLG1CQUVWbEIsc0RBQVEsQ0FBQyxFQUFELENBRkU7QUFBQSxNQUUzQkcsSUFGMkI7QUFBQSxNQUVyQkMsT0FGcUI7O0FBSWxDQyx5REFBUyxDQUFDLFlBQU07QUFDZjtBQUNBYSx1QkFBbUIsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsMEJBQTFCLENBQVgsQ0FBRCxDQUFuQjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsZ0JBQWdCLENBQUNRLEdBQWpCLENBQXFCLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxLQUF0QixDQUFaO0FBRUF2QixXQUFPLENBQUNJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DQyxPQUFwQyxHQUE4QyxDQUE5QyxDQUFELENBQVA7QUFDQSxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQUlLLGdCQUFnQixDQUFDVyxNQUFqQixLQUE0QixDQUFoQyxFQUFtQztBQUNsQ0wsV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVAsc0JBQWdCLEVBQWhCQSxnQkFBRjtBQUFvQlksYUFBTyxFQUFFWixnQkFBZ0IsQ0FBQ1EsR0FBakIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0ksU0FBTjtBQUFBLE9BQXRCO0FBQTdCLEtBQVo7QUFDQSxXQUFPLElBQVA7QUFDQTs7QUFFRCxzQkFDQztBQUFTLGFBQVMsRUFBRUMsMkVBQVEsQ0FBQyxnQkFBRCxDQUE1QjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFFQSwyRUFBUSxDQUFDLGFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUdDO0FBQUksZUFBUyxFQUFFQSwyRUFBUSxDQUFDLGlCQUFELENBQXZCO0FBQUEsZ0JBQ0VkLGdCQUFnQixDQUFDUSxHQUFqQixDQUFxQixVQUFBTyxRQUFRLEVBQUk7QUFDakMsWUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUNGLFNBQVQsQ0FBbUJJLEtBQW5CLENBQXlCLENBQXpCLENBQWpCO0FBQ0EsWUFBTXBCLElBQUksR0FBR21CLFFBQVEsQ0FBQ0UsVUFBVCxDQUFvQixHQUFwQixFQUF5QixHQUF6QixFQUE4QjVCLFdBQTlCLEVBQWI7QUFDQSw0QkFBTztBQUFBLGlDQUNOLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRTtBQUNYRyxzQkFBUSxnQkFERztBQUVYSSxrQkFBSSxFQUFKQSxJQUZXO0FBR1hDLG1CQUFLLEVBQUU7QUFBRVosb0JBQUksRUFBSkE7QUFBRjtBQUhJLGFBQVo7QUFBQSxtQ0FLQztBQUFHLHVCQUFTLEVBQUU0QiwyRUFBUSxDQUFDLFVBQUQsQ0FBdEI7QUFBQSx3QkFBcUNFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sV0FBU0EsUUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBU0EsT0FaQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXFCQSxDQXZDRDs7SUFBTWpCLGU7O01BQUFBLGU7QUF5Q0MsSUFBTW9CLGFBQWEsR0FBRztBQUM1QkMsR0FBQyxFQUFFN0MsVUFEeUI7QUFFNUI4QyxJQUFFLEVBQUV4QyxVQUZ3QjtBQUc1QmtCLGlCQUFlLEVBQWZBO0FBSDRCLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC42NzBhZTc0Y2MwYTA4NTVkZjk3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY3VzdG9tTGlua1N0eWxlIGZyb20gXCIuLi9zdHlsZXMvY3VzdG9tLWxpbmsubW9kdWxlLmNzc1wiXG5jb25zdCBDdXN0b21MaW5rID0gKHByb3BzKSA9PiB7XG5cdC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuXHRjb25zdCBocmVmID0gcHJvcHMuaHJlZjtcblx0Y29uc3QgaXNJbnRlcm5hbCA9IGhyZWYgJiYgKGhyZWYuc3RhcnRzV2l0aCgnLycpKSB8fCBocmVmLnN0YXJ0c1dpdGgoXCIjXCIpXG5cblx0aWYgKGlzSW50ZXJuYWwpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExpbmsgaHJlZj17aHJlZn0+XG5cdFx0XHRcdDxhIHsuLi5wcm9wc30gLz5cblx0XHRcdDwvTGluaz5cblx0XHQpXG5cdH1cblxuXHRyZXR1cm4gPGEgY2xhc3NOYW1lPXtjdXN0b21MaW5rU3R5bGVbXCJleHRlcm5hbFwiXX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHsuLi5wcm9wc30gLz5cbn1cblxuaW1wb3J0IGxpbmthYmxlSDJTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL2xpbmthYmxlLWgyLm1vZHVsZS5jc3NcIlxuY29uc3QgTGlua2FibGVIMiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW2VsZW1lbnRJZCwgc2V0RWxlbWVudElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEVsZW1lbnRJZChjaGlsZHJlbi5yZXBsYWNlKC9cXHMvZywgXCItXCIpLnRvTG93ZXJDYXNlKCkpXG5cdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlIGlzIHVzZWQgd2hlbiBjcmVhdGluZyB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0PGgyIGNsYXNzTmFtZT17bGlua2FibGVIMlN0eWxlW1wibGlua2FibGVcIl19IGlkPXtlbGVtZW50SWR9IGRhdGEtaXMtbGlua2FibGU+XG5cdFx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRcdHBhdGhuYW1lOiBgL3Bvc3QvW3NsdWddYCxcblx0XHRcdFx0aGFzaDogZWxlbWVudElkLFxuXHRcdFx0XHRxdWVyeTogeyBzbHVnIH1cblx0XHRcdH19PlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9e1wicmVzZXRcIn0+IzwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2gyPlxuXHQpXG5cbn1cblxuaW1wb3J0IFRPQ1N0eWxlIGZyb20gXCIuLi9zdHlsZXMvdGFibGUtb2YtY29udGVudHMubW9kdWxlLmNzc1wiXG5jb25zdCBUYWJsZU9mQ29udGVudHMgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgW2xpbmthYmxlRWxlbWVudHMsIHNldExpbmthYmxlRWxlbWVudHNdID0gdXNlU3RhdGUoW10pO1xuXHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIGRhdGEtaXMtbGlua2FibGU9dHJ1ZSBlbGVtZW50cyB3aWxsIGJlIHNob3duIGluIHRoZSBUYWJsZU9mQ29udGVudHNcblx0XHRzZXRMaW5rYWJsZUVsZW1lbnRzKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipbZGF0YS1pcy1saW5rYWJsZT10cnVlXVwiKSkpXG5cblx0XHRjb25zb2xlLmxvZyhsaW5rYWJsZUVsZW1lbnRzLm1hcChsID0+IGwuaWQpKVxuXG5cdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0fSwgW10pXG5cblx0aWYgKGxpbmthYmxlRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG5cdFx0Y29uc29sZS5sb2coeyBsaW5rYWJsZUVsZW1lbnRzLCBjbGFzc2VzOiBsaW5rYWJsZUVsZW1lbnRzLm1hcChsID0+IGwuaW5uZXJUZXh0KSB9KVxuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJwYXJlbnQtc2VjdGlvblwiXX0+XG5cdFx0XHQ8aDMgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1oZWFkaW5nXCJdfT5UYWJsZSBPZiBDb250ZW50czwvaDM+XG5cblx0XHRcdDxvbCBjbGFzc05hbWU9e1RPQ1N0eWxlW1wibGlua3MtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0e2xpbmthYmxlRWxlbWVudHMubWFwKGxpbmthYmxlID0+IHtcblx0XHRcdFx0XHRjb25zdCBsaW5rVGV4dCA9IGxpbmthYmxlLmlubmVyVGV4dC5zbGljZSgxKVxuXHRcdFx0XHRcdGNvbnN0IGhhc2ggPSBsaW5rVGV4dC5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXHRcdFx0XHRcdHJldHVybiA8bGkga2V5PXtsaW5rVGV4dH0+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRcdFx0XHRcdHBhdGhuYW1lOiBgL3Bvc3QvW3NsdWddYCxcblx0XHRcdFx0XHRcdFx0aGFzaCxcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1saW5rXCJdfT57bGlua1RleHR9PC9hPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9vbD5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IE1EWENvbXBvbmVudHMgPSB7XG5cdGE6IEN1c3RvbUxpbmssXG5cdGgyOiBMaW5rYWJsZUgyLFxuXHRUYWJsZU9mQ29udGVudHNcbn0iXSwic291cmNlUm9vdCI6IiJ9