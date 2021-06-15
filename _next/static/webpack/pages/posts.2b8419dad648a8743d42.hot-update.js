webpackHotUpdate_N_E("pages/posts",{

/***/ "./components/TableOfContents.MDX.jsx":
/*!********************************************!*\
  !*** ./components/TableOfContents.MDX.jsx ***!
  \********************************************/
/*! exports provided: TableOfContents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOfContents", function() { return TableOfContents; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/table-of-contents.module.css */ "./styles/table-of-contents.module.css");
/* harmony import */ var _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/mnt/c/Projects/blog/components/TableOfContents.MDX.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // TODO optimise TOC


/**
 * @param {HTMLElement} headingElement
 */

var getHeadingText = function getHeadingText(headingElement) {
  console.log(headingElement.children);
  return headingElement.children[1].innerText;
};

var TOCItem = function TOCItem(_ref) {
  var linkable = _ref.linkable,
      slug = _ref.slug;
  var linkText = linkable.headingText;
  var hash = linkText.replaceAll(" ", "-").toLowerCase();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: "/post/[slug]",
        hash: hash,
        query: {
          slug: slug
        }
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["toc-link"],
        children: linkText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }, _this), linkable.innerHeadings.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: linkable.innerHeadings.map(function (innerLinkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TOCItem, {
          linkable: innerLinkable,
          slug: slug
        }, innerLinkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 50
        }, _this);
      })
    }, linkable.headingText, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_c = TOCItem;
var TableOfContents = function TableOfContents() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      linkableElements = _useState[0],
      setLinkableElements = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      slug = _useState2[0],
      setSlug = _useState2[1]; // TODO rewrite the createHeadingMap function in a optimal way

  /**
   * @param {HTMLElement[]} headings 
   */


  var createHeadingMap = function createHeadingMap(headings) {
    var m = [];

    var _iterator = _createForOfIteratorHelper(headings),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var heading = _step.value;
        var tagName = heading.tagName.toLowerCase();

        if (tagName === "h2") {
          m.push({
            headingText: getHeadingText(heading),
            innerHeadings: []
          });
        } else if (tagName === "h3") {
          var lastHeading = m[m.length - 1];
          lastHeading.innerHeadings.push({
            headingText: getHeadingText(heading),
            innerHeadings: []
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return m;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // data-is-linkable=true elements will be shown in the TableOfContents
    var headingMap = createHeadingMap(Array.from(document.querySelectorAll("*[data-is-linkable=true]")));
    setLinkableElements(headingMap);
    setSlug(window.location.pathname.split("/").reverse()[0]);
  }, []);
  if (linkableElements.length === 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      height: 80
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 44
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["parent-section"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["toc-heading"],
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["links-container"],
      children: linkableElements.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 3
  }, _this);
};

_s(TableOfContents, "9uiPB/s9WObLenfgrnCo5SKpFDs=");

_c2 = TableOfContents;

var _c, _c2;

$RefreshReg$(_c, "TOCItem");
$RefreshReg$(_c2, "TableOfContents");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwiVE9DSXRlbSIsImxpbmthYmxlIiwic2x1ZyIsImxpbmtUZXh0IiwiaGVhZGluZ1RleHQiLCJoYXNoIiwicmVwbGFjZUFsbCIsInRvTG93ZXJDYXNlIiwicGF0aG5hbWUiLCJxdWVyeSIsIlRPQ1N0eWxlIiwiaW5uZXJIZWFkaW5ncyIsImxlbmd0aCIsIm1hcCIsImlubmVyTGlua2FibGUiLCJUYWJsZU9mQ29udGVudHMiLCJ1c2VTdGF0ZSIsImxpbmthYmxlRWxlbWVudHMiLCJzZXRMaW5rYWJsZUVsZW1lbnRzIiwic2V0U2x1ZyIsImNyZWF0ZUhlYWRpbmdNYXAiLCJoZWFkaW5ncyIsIm0iLCJoZWFkaW5nIiwidGFnTmFtZSIsInB1c2giLCJsYXN0SGVhZGluZyIsInVzZUVmZmVjdCIsImhlYWRpbmdNYXAiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNwbGl0IiwicmV2ZXJzZSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsY0FBYyxFQUFJO0FBQ3hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsY0FBYyxDQUFDRyxRQUEzQjtBQUNBLFNBQU9ILGNBQWMsQ0FBQ0csUUFBZixDQUF3QixDQUF4QixFQUEyQkMsU0FBbEM7QUFDQSxDQUhEOztBQUtBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQXdCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFx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UUFBaEIsQ0FBeUIyQixLQUF6QixDQUErQixHQUEvQixFQUFvQ0MsT0FBcEMsR0FBOEMsQ0FBOUMsQ0FBRCxDQUFQO0FBQ0EsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLE1BQUluQixnQkFBZ0IsQ0FBQ0wsTUFBakIsS0FBNEIsQ0FBaEMsRUFBbUMsb0JBQU87QUFBSyxTQUFLLEVBQUU7QUFBRXlCLFlBQU0sRUFBRTtBQUFWO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBRW5DLHNCQUNDO0FBQVMsYUFBUyxFQUFFM0IsMkVBQVEsQ0FBQyxnQkFBRCxDQUE1QjtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFFQSwyRUFBUSxDQUFDLGFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUdDO0FBQUksZUFBUyxFQUFFQSwyRUFBUSxDQUFDLGlCQUFELENBQXZCO0FBQUEsZ0JBQ0VPLGdCQUFnQixDQUFDSixHQUFqQixDQUFxQixVQUFBWixRQUFRLEVBQUk7QUFDakMsNEJBQU8scUVBQUMsT0FBRDtBQUFTLGtCQUFRLEVBQUVBLFFBQW5CO0FBQTZCLGNBQUksRUFBRUM7QUFBbkMsV0FBOENELFFBQVEsQ0FBQ0csV0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNBLE9BRkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFXQSxDQW5ETTs7R0FBTVcsZTs7TUFBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy4yYjg0MTlkYWQ2NDhhODc0M2Q0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuLy8gVE9ETyBvcHRpbWlzZSBUT0NcbmltcG9ydCBUT0NTdHlsZSBmcm9tIFwiQC9zdHlsZXMvdGFibGUtb2YtY29udGVudHMubW9kdWxlLmNzc1wiXG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGVhZGluZ0VsZW1lbnRcbiAqL1xuY29uc3QgZ2V0SGVhZGluZ1RleHQgPSBoZWFkaW5nRWxlbWVudCA9PiB7XG5cdGNvbnNvbGUubG9nKGhlYWRpbmdFbGVtZW50LmNoaWxkcmVuKVxuXHRyZXR1cm4gaGVhZGluZ0VsZW1lbnQuY2hpbGRyZW5bMV0uaW5uZXJUZXh0XG59XG5cbmNvbnN0IFRPQ0l0ZW0gPSAoeyBsaW5rYWJsZSwgc2x1ZyB9KSA9PiB7XG5cdGNvbnN0IGxpbmtUZXh0ID0gbGlua2FibGUuaGVhZGluZ1RleHRcblx0Y29uc3QgaGFzaCA9IGxpbmtUZXh0LnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cblx0cmV0dXJuIDxsaT5cblx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRwYXRobmFtZTogYC9wb3N0L1tzbHVnXWAsXG5cdFx0XHRoYXNoLFxuXHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0fX0+XG5cdFx0XHQ8YSBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWxpbmtcIl19PntsaW5rVGV4dH08L2E+XG5cdFx0PC9MaW5rPlxuXG5cdFx0ey8qIFNob3cgdGhlIG5leHQtbGV2ZWwgaGVhZGluZ3MgaWYgcHJlc2VudCAqL31cblx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuXHRcdFx0PHVsIGtleT17bGlua2FibGUuaGVhZGluZ1RleHR9PlxuXHRcdFx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5tYXAoaW5uZXJMaW5rYWJsZSA9PiA8VE9DSXRlbVxuXHRcdFx0XHRcdGtleT17aW5uZXJMaW5rYWJsZS5oZWFkaW5nVGV4dH1cblx0XHRcdFx0XHRsaW5rYWJsZT17aW5uZXJMaW5rYWJsZX1cblx0XHRcdFx0XHRzbHVnPXtzbHVnfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC91bD5cblx0XHQpfVxuXHQ8L2xpPlxufVxuXG5leHBvcnQgY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKCkgPT4ge1xuXHRjb25zdCBbbGlua2FibGVFbGVtZW50cywgc2V0TGlua2FibGVFbGVtZW50c10gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdC8vIFRPRE8gcmV3cml0ZSB0aGUgY3JlYXRlSGVhZGluZ01hcCBmdW5jdGlvbiBpbiBhIG9wdGltYWwgd2F5XG5cdC8qKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGhlYWRpbmdzIFxuXHQgKi9cblx0Y29uc3QgY3JlYXRlSGVhZGluZ01hcCA9IChoZWFkaW5ncykgPT4ge1xuXHRcdGxldCBtID0gW107XG5cblx0XHRmb3IgKGxldCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0XHRjb25zdCB0YWdOYW1lID0gaGVhZGluZy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRpZiAodGFnTmFtZSA9PT0gXCJoMlwiKSB7XG5cdFx0XHRcdG0ucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQ6IGdldEhlYWRpbmdUZXh0KGhlYWRpbmcpLFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiaDNcIikge1xuXHRcdFx0XHRjb25zdCBsYXN0SGVhZGluZyA9IG1bbS5sZW5ndGggLSAxXVxuXHRcdFx0XHRsYXN0SGVhZGluZy5pbm5lckhlYWRpbmdzLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0OiBnZXRIZWFkaW5nVGV4dChoZWFkaW5nKSxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlPXRydWUgZWxlbWVudHMgd2lsbCBiZSBzaG93biBpbiB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0Y29uc3QgaGVhZGluZ01hcCA9IGNyZWF0ZUhlYWRpbmdNYXAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKltkYXRhLWlzLWxpbmthYmxlPXRydWVdXCIpKSk7XG5cdFx0c2V0TGlua2FibGVFbGVtZW50cyhoZWFkaW5nTWFwKVxuXG5cdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0fSwgW10pXG5cblx0aWYgKGxpbmthYmxlRWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDgwIH19PjwvZGl2PlxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtUT0NTdHlsZVtcInBhcmVudC1zZWN0aW9uXCJdfT5cblx0XHRcdDxoMyBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWhlYWRpbmdcIl19PlRhYmxlIE9mIENvbnRlbnRzPC9oMz5cblxuXHRcdFx0PG9sIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJsaW5rcy1jb250YWluZXJcIl19PlxuXHRcdFx0XHR7bGlua2FibGVFbGVtZW50cy5tYXAobGlua2FibGUgPT4ge1xuXHRcdFx0XHRcdHJldHVybiA8VE9DSXRlbSBsaW5rYWJsZT17bGlua2FibGV9IHNsdWc9e3NsdWd9IGtleT17bGlua2FibGUuaGVhZGluZ1RleHR9IC8+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9vbD5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn0iXSwic291cmNlUm9vdCI6IiJ9