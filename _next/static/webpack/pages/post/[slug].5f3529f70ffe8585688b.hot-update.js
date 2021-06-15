webpackHotUpdate_N_E("pages/post/[slug]",{

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
        lineNumber: 24,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }, _this), linkable.innerHeadings.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: linkable.innerHeadings.map(function (innerLinkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TOCItem, {
          linkable: innerLinkable,
          slug: slug
        }, innerLinkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 50
        }, _this);
      })
    }, linkable.headingText, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
    lineNumber: 79,
    columnNumber: 44
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["parent-section"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["toc-heading"],
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["links-container"],
      children: linkableElements.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJUT0NJdGVtIiwibGlua2FibGUiLCJzbHVnIiwibGlua1RleHQiLCJoZWFkaW5nVGV4dCIsImhhc2giLCJyZXBsYWNlQWxsIiwidG9Mb3dlckNhc2UiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVE9DU3R5bGUiLCJpbm5lckhlYWRpbmdzIiwibGVuZ3RoIiwibWFwIiwiaW5uZXJMaW5rYWJsZSIsIlRhYmxlT2ZDb250ZW50cyIsInVzZVN0YXRlIiwibGlua2FibGVFbGVtZW50cyIsInNldExpbmthYmxlRWxlbWVudHMiLCJzZXRTbHVnIiwiY3JlYXRlSGVhZGluZ01hcCIsImhlYWRpbmdzIiwibSIsImhlYWRpbmciLCJ0YWdOYW1lIiwicHVzaCIsImxhc3RIZWFkaW5nIiwidXNlRWZmZWN0IiwiaGVhZGluZ01hcCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIndpbmRvdyIsImxvY2F0aW9uIiwic3BsaXQiLCJyZXZlcnNlIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxjQUFjLEVBQUk7QUFDeEMsU0FBT0EsY0FBYyxDQUFDQyxRQUFmLENBQXdCLENBQXhCLEVBQTJCQyxTQUFsQztBQUNBLENBRkQ7O0FBSUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBd0I7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDLE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFD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LENBQVA7QUFDQSxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsTUFBSW5CLGdCQUFnQixDQUFDTCxNQUFqQixLQUE0QixDQUFoQyxFQUFtQyxvQkFBTztBQUFLLFNBQUssRUFBRTtBQUFFeUIsWUFBTSxFQUFFO0FBQVY7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFFbkMsc0JBQ0M7QUFBUyxhQUFTLEVBQUUzQiwyRUFBUSxDQUFDLGdCQUFELENBQTVCO0FBQUEsNEJBQ0M7QUFBSSxlQUFTLEVBQUVBLDJFQUFRLENBQUMsYUFBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBR0M7QUFBSSxlQUFTLEVBQUVBLDJFQUFRLENBQUMsaUJBQUQsQ0FBdkI7QUFBQSxnQkFDRU8sZ0JBQWdCLENBQUNKLEdBQWpCLENBQXFCLFVBQUFaLFFBQVEsRUFBSTtBQUNqQyw0QkFBTyxxRUFBQyxPQUFEO0FBQVMsa0JBQVEsRUFBRUEsUUFBbkI7QUFBNkIsY0FBSSxFQUFFQztBQUFuQyxXQUE4Q0QsUUFBUSxDQUFDRyxXQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0EsT0FGQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVdBLENBbkRNOztHQUFNVyxlOztNQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjVmMzUyOWY3MGZmZTg1ODU2ODhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG4vLyBUT0RPIG9wdGltaXNlIFRPQ1xuaW1wb3J0IFRPQ1N0eWxlIGZyb20gXCJAL3N0eWxlcy90YWJsZS1vZi1jb250ZW50cy5tb2R1bGUuY3NzXCJcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBoZWFkaW5nRWxlbWVudFxuICovXG5jb25zdCBnZXRIZWFkaW5nVGV4dCA9IGhlYWRpbmdFbGVtZW50ID0+IHtcblx0cmV0dXJuIGhlYWRpbmdFbGVtZW50LmNoaWxkcmVuWzFdLmlubmVyVGV4dFxufVxuXG5jb25zdCBUT0NJdGVtID0gKHsgbGlua2FibGUsIHNsdWcgfSkgPT4ge1xuXHRjb25zdCBsaW5rVGV4dCA9IGxpbmthYmxlLmhlYWRpbmdUZXh0XG5cdGNvbnN0IGhhc2ggPSBsaW5rVGV4dC5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXG5cdHJldHVybiA8bGk+XG5cdFx0PExpbmsgaHJlZj17e1xuXHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0aGFzaCxcblx0XHRcdHF1ZXJ5OiB7IHNsdWcgfVxuXHRcdH19PlxuXHRcdFx0PGEgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1saW5rXCJdfT57bGlua1RleHR9PC9hPlxuXHRcdDwvTGluaz5cblxuXHRcdHsvKiBTaG93IHRoZSBuZXh0LWxldmVsIGhlYWRpbmdzIGlmIHByZXNlbnQgKi99XG5cdFx0e2xpbmthYmxlLmlubmVySGVhZGluZ3MubGVuZ3RoID09PSAwID8gbnVsbCA6IChcblx0XHRcdDx1bCBrZXk9e2xpbmthYmxlLmhlYWRpbmdUZXh0fT5cblx0XHRcdFx0e2xpbmthYmxlLmlubmVySGVhZGluZ3MubWFwKGlubmVyTGlua2FibGUgPT4gPFRPQ0l0ZW1cblx0XHRcdFx0XHRrZXk9e2lubmVyTGlua2FibGUuaGVhZGluZ1RleHR9XG5cdFx0XHRcdFx0bGlua2FibGU9e2lubmVyTGlua2FibGV9XG5cdFx0XHRcdFx0c2x1Zz17c2x1Z31cblx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvdWw+XG5cdFx0KX1cblx0PC9saT5cbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlT2ZDb250ZW50cyA9ICgpID0+IHtcblx0Y29uc3QgW2xpbmthYmxlRWxlbWVudHMsIHNldExpbmthYmxlRWxlbWVudHNdID0gdXNlU3RhdGUoW10pO1xuXHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHQvLyBUT0RPIHJld3JpdGUgdGhlIGNyZWF0ZUhlYWRpbmdNYXAgZnVuY3Rpb24gaW4gYSBvcHRpbWFsIHdheVxuXHQvKipcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBoZWFkaW5ncyBcblx0ICovXG5cdGNvbnN0IGNyZWF0ZUhlYWRpbmdNYXAgPSAoaGVhZGluZ3MpID0+IHtcblx0XHRsZXQgbSA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgdGFnTmFtZSA9IGhlYWRpbmcudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHRhZ05hbWUgPT09IFwiaDJcIikge1xuXHRcdFx0XHRtLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0OiBnZXRIZWFkaW5nVGV4dChoZWFkaW5nKSxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmICh0YWdOYW1lID09PSBcImgzXCIpIHtcblx0XHRcdFx0Y29uc3QgbGFzdEhlYWRpbmcgPSBtW20ubGVuZ3RoIC0gMV1cblx0XHRcdFx0bGFzdEhlYWRpbmcuaW5uZXJIZWFkaW5ncy5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dDogZ2V0SGVhZGluZ1RleHQoaGVhZGluZyksXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gZGF0YS1pcy1saW5rYWJsZT10cnVlIGVsZW1lbnRzIHdpbGwgYmUgc2hvd24gaW4gdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdGNvbnN0IGhlYWRpbmdNYXAgPSBjcmVhdGVIZWFkaW5nTWFwKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipbZGF0YS1pcy1saW5rYWJsZT10cnVlXVwiKSkpO1xuXHRcdHNldExpbmthYmxlRWxlbWVudHMoaGVhZGluZ01hcClcblxuXHRcdHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0pXG5cdH0sIFtdKVxuXG5cdGlmIChsaW5rYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA4MCB9fT48L2Rpdj5cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJwYXJlbnQtc2VjdGlvblwiXX0+XG5cdFx0XHQ8aDMgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1oZWFkaW5nXCJdfT5UYWJsZSBPZiBDb250ZW50czwvaDM+XG5cblx0XHRcdDxvbCBjbGFzc05hbWU9e1RPQ1N0eWxlW1wibGlua3MtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0e2xpbmthYmxlRWxlbWVudHMubWFwKGxpbmthYmxlID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPFRPQ0l0ZW0gbGlua2FibGU9e2xpbmthYmxlfSBzbHVnPXtzbHVnfSBrZXk9e2xpbmthYmxlLmhlYWRpbmdUZXh0fSAvPlxuXHRcdFx0XHR9KX1cblx0XHRcdDwvb2w+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==