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
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/table-of-contents.module.css */ "./styles/table-of-contents.module.css");
/* harmony import */ var _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5__);




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
  return Array.from(headingElement.children).find(function (child) {
    return child.classList.contains("linkable--heading-text");
  }).innerText;
};

var TOCItem = function TOCItem(_ref) {
  var linkable = _ref.linkable,
      slug = _ref.slug;
  var linkText = linkable.headingText;
  var hash = linkText.replace(/\s/g, "-").toLowerCase();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: "/post/[slug]",
        hash: hash,
        query: {
          slug: slug
        }
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
        className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["toc-link"],
        children: linkText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }, _this), linkable.innerHeadings.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: linkable.innerHeadings.map(function (innerLinkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: innerLinkable,
          slug: slug
        }, innerLinkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 50
        }, _this);
      })
    }, linkable.headingText, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_c = TOCItem;
var TableOfContents = function TableOfContents(_ref2) {
  _s();

  var source = _ref2.source;
  var headingLines = source.split("\n").filter(function (line) {
    return ["##", "###"].includes(line.split(" ")[0]);
  }).map(function (line) {
    return line.match(/\[\w+\]\([a-zA-Z0-9\:\/\.]]\)/g);
  });

  var XheadingMap = function (lines) {
    var map = [];
    var headings = lines.map(function (line) {
      var _line$split = line.split(" "),
          _line$split2 = Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_line$split),
          hashtags = _line$split2[0],
          content = _line$split2.slice(1);

      var headingLevel = hashtags.length;
      var headingText = content.join(" ");
      return [headingLevel, headingText];
    });

    var _iterator = _createForOfIteratorHelper(headings),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var heading = _step.value;

        var _heading = Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(heading, 2),
            headingLevel = _heading[0],
            headingText = _heading[1];

        if (headingLevel === 2) {
          map.push({
            headingText: headingText,
            innerHeadings: []
          });
        } else if (headingLevel === 3) {
          var lastHeading = map[map.length - 1];
          lastHeading.innerHeadings.push({
            headingText: headingText,
            innerHeadings: []
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return map;
  }(headingLines);

  console.log(XheadingMap);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      slug = _useState[0],
      setSlug = _useState[1]; // TODO rewrite the createHeadingMap function in a optimal way

  /**
   * @param {HTMLElement[]} headings 
   */


  var createHeadingMap = function createHeadingMap(headings) {
    var m = [];

    var _iterator2 = _createForOfIteratorHelper(headings),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var heading = _step2.value;
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
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return m;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // data-is-linkable=true elements will be shown in the TableOfContents
    // const headingMap = createHeadingMap(Array.from(document.querySelectorAll("*[data-is-linkable=true]")));
    // setLinkableElements(headingMap)
    setSlug(window.location.pathname.split("/").reverse()[0]);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
    className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["parent-section"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["toc-heading"],
      children: "Table Of Contents"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["links-container"],
      children: XheadingMap.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 3
  }, _this);
};

_s(TableOfContents, "1FFKRNpmkLT9GOLb5YnKF62V8EE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlubmVyVGV4dCIsIlRPQ0l0ZW0iLCJsaW5rYWJsZSIsInNsdWciLCJsaW5rVGV4dCIsImhlYWRpbmdUZXh0IiwiaGFzaCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInBhdGhuYW1lIiwicXVlcnkiLCJUT0NTdHlsZSIsImlubmVySGVhZGluZ3MiLCJsZW5ndGgiLCJtYXAiLCJpbm5lckxpbmthYmxlIiwiVGFibGVPZkNvbnRlbnRzIiwic291cmNlIiwiaGVhZGluZ0xpbmVzIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwiaW5jbHVkZXMiLCJtYXRjaCIsIlhoZWFkaW5nTWFwIiwibGluZXMiLCJoZWFkaW5ncyIsImhhc2h0YWdzIiwiY29udGVudCIsImhlYWRpbmdMZXZlbCIsImpvaW4iLCJoZWFkaW5nIiwicHVzaCIsImxhc3RIZWFkaW5nIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwic2V0U2x1ZyIsImNyZWF0ZUhlYWRpbmdNYXAiLCJtIiwidGFnTmFtZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLGNBQWMsRUFBSTtBQUN4QyxTQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBV0YsY0FBYyxDQUFDRyxRQUExQixFQUFvQ0MsSUFBcEMsQ0FBeUMsVUFBQUMsS0FBSyxFQUFJO0FBQ3hELFdBQU9BLEtBQUssQ0FB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Yjg2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuLy8gVE9ETyBvcHRpbWlzZSBUT0NcbmltcG9ydCBUT0NTdHlsZSBmcm9tIFwiQC9zdHlsZXMvdGFibGUtb2YtY29udGVudHMubW9kdWxlLmNzc1wiXG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGVhZGluZ0VsZW1lbnRcbiAqL1xuY29uc3QgZ2V0SGVhZGluZ1RleHQgPSBoZWFkaW5nRWxlbWVudCA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKGhlYWRpbmdFbGVtZW50LmNoaWxkcmVuKS5maW5kKGNoaWxkID0+IHtcblx0XHRyZXR1cm4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlua2FibGUtLWhlYWRpbmctdGV4dFwiKVxuXHR9KS5pbm5lclRleHRcbn1cblxuY29uc3QgVE9DSXRlbSA9ICh7IGxpbmthYmxlLCBzbHVnIH0pID0+IHtcblx0Y29uc3QgbGlua1RleHQgPSBsaW5rYWJsZS5oZWFkaW5nVGV4dFxuXHRjb25zdCBoYXNoID0gbGlua1RleHQucmVwbGFjZSgvXFxzL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cblx0cmV0dXJuIDxsaT5cblx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRwYXRobmFtZTogYC9wb3N0L1tzbHVnXWAsXG5cdFx0XHRoYXNoLFxuXHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0fX0+XG5cdFx0XHQ8YSBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWxpbmtcIl19PntsaW5rVGV4dH08L2E+XG5cdFx0PC9MaW5rPlxuXG5cdFx0ey8qIFNob3cgdGhlIG5leHQtbGV2ZWwgaGVhZGluZ3MgaWYgcHJlc2VudCAqL31cblx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuXHRcdFx0PHVsIGtleT17bGlua2FibGUuaGVhZGluZ1RleHR9PlxuXHRcdFx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5tYXAoaW5uZXJMaW5rYWJsZSA9PiA8VE9DSXRlbVxuXHRcdFx0XHRcdGtleT17aW5uZXJMaW5rYWJsZS5oZWFkaW5nVGV4dH1cblx0XHRcdFx0XHRsaW5rYWJsZT17aW5uZXJMaW5rYWJsZX1cblx0XHRcdFx0XHRzbHVnPXtzbHVnfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC91bD5cblx0XHQpfVxuXHQ8L2xpPlxufVxuXG5leHBvcnQgY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKHsgc291cmNlIH0pID0+IHtcblx0Y29uc3QgaGVhZGluZ0xpbmVzID0gc291cmNlXG5cdFx0LnNwbGl0KFwiXFxuXCIpXG5cdFx0LmZpbHRlcihsaW5lID0+IHtcblx0XHRcdHJldHVybiBbXCIjI1wiLCBcIiMjI1wiXS5pbmNsdWRlcyhsaW5lLnNwbGl0KFwiIFwiKVswXSlcblx0XHR9KS5tYXAobGluZSA9PiB7XG5cdFx0XHRyZXR1cm4gbGluZS5tYXRjaCgvXFxbXFx3K1xcXVxcKFthLXpBLVowLTlcXDpcXC9cXC5dXVxcKS9nKVxuXHRcdH0pXG5cblx0Y29uc3QgWGhlYWRpbmdNYXAgPSAoKGxpbmVzKSA9PiB7XG5cdFx0Y29uc3QgbWFwID0gW107XG5cblx0XHRjb25zdCBoZWFkaW5ncyA9IGxpbmVzLm1hcChsaW5lID0+IHtcblx0XHRcdGNvbnN0IFtoYXNodGFncywgLi4uY29udGVudF0gPSBsaW5lLnNwbGl0KFwiIFwiKTtcblx0XHRcdGNvbnN0IGhlYWRpbmdMZXZlbCA9IGhhc2h0YWdzLmxlbmd0aDtcblx0XHRcdGNvbnN0IGhlYWRpbmdUZXh0ID0gY29udGVudC5qb2luKFwiIFwiKTtcblxuXHRcdFx0cmV0dXJuIFtoZWFkaW5nTGV2ZWwsIGhlYWRpbmdUZXh0XTtcblx0XHR9KTtcblxuXHRcdGZvciAobGV0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRcdGNvbnN0IFtoZWFkaW5nTGV2ZWwsIGhlYWRpbmdUZXh0XSA9IGhlYWRpbmc7XG5cblx0XHRcdGlmIChoZWFkaW5nTGV2ZWwgPT09IDIpIHtcblx0XHRcdFx0bWFwLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0LFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChoZWFkaW5nTGV2ZWwgPT09IDMpIHtcblx0XHRcdFx0Y29uc3QgbGFzdEhlYWRpbmcgPSBtYXBbbWFwLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRsYXN0SGVhZGluZy5pbm5lckhlYWRpbmdzLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0LFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH0pKGhlYWRpbmdMaW5lcylcblxuXHRjb25zb2xlLmxvZyhYaGVhZGluZ01hcClcblxuXHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHQvLyBUT0RPIHJld3JpdGUgdGhlIGNyZWF0ZUhlYWRpbmdNYXAgZnVuY3Rpb24gaW4gYSBvcHRpbWFsIHdheVxuXHQvKipcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBoZWFkaW5ncyBcblx0ICovXG5cdGNvbnN0IGNyZWF0ZUhlYWRpbmdNYXAgPSAoaGVhZGluZ3MpID0+IHtcblx0XHRsZXQgbSA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgdGFnTmFtZSA9IGhlYWRpbmcudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHRhZ05hbWUgPT09IFwiaDJcIikge1xuXHRcdFx0XHRtLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0OiBnZXRIZWFkaW5nVGV4dChoZWFkaW5nKSxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmICh0YWdOYW1lID09PSBcImgzXCIpIHtcblx0XHRcdFx0Y29uc3QgbGFzdEhlYWRpbmcgPSBtW20ubGVuZ3RoIC0gMV1cblx0XHRcdFx0bGFzdEhlYWRpbmcuaW5uZXJIZWFkaW5ncy5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dDogZ2V0SGVhZGluZ1RleHQoaGVhZGluZyksXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gZGF0YS1pcy1saW5rYWJsZT10cnVlIGVsZW1lbnRzIHdpbGwgYmUgc2hvd24gaW4gdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdC8vIGNvbnN0IGhlYWRpbmdNYXAgPSBjcmVhdGVIZWFkaW5nTWFwKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipbZGF0YS1pcy1saW5rYWJsZT10cnVlXVwiKSkpO1xuXHRcdC8vIHNldExpbmthYmxlRWxlbWVudHMoaGVhZGluZ01hcClcblxuXHRcdHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0pXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtUT0NTdHlsZVtcInBhcmVudC1zZWN0aW9uXCJdfT5cblx0XHRcdDxoMyBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWhlYWRpbmdcIl19PlRhYmxlIE9mIENvbnRlbnRzPC9oMz5cblxuXHRcdFx0PG9sIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJsaW5rcy1jb250YWluZXJcIl19PlxuXHRcdFx0XHR7WGhlYWRpbmdNYXAubWFwKGxpbmthYmxlID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPFRPQ0l0ZW0gbGlua2FibGU9e2xpbmthYmxlfSBzbHVnPXtzbHVnfSBrZXk9e2xpbmthYmxlLmhlYWRpbmdUZXh0fSAvPlxuXHRcdFx0XHR9KX1cblx0XHRcdDwvb2w+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==