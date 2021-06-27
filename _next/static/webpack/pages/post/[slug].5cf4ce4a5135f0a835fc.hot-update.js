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
  console.log(linkText, typeof linkText);
  var hash = linkText.replaceAll(" ", "-").toLowerCase();
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
        lineNumber: 27,
        columnNumber: 4
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }, _this), linkable.innerHeadings.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: linkable.innerHeadings.map(function (innerLinkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: innerLinkable,
          slug: slug
        }, innerLinkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 50
        }, _this);
      })
    }, linkable.headingText, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this);
};

_c = TOCItem;
var TableOfContents = function TableOfContents(_ref2) {
  _s();

  var source = _ref2.source;
  var headingLines = source.split("\n").filter(function (line) {
    return ["##", "###"].includes(line.split(" ")[0]);
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
      lineNumber: 122,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["links-container"],
      children: XheadingMap.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlubmVyVGV4dCIsIlRPQ0l0ZW0iLCJsaW5rYWJsZSIsInNsdWciLCJsaW5rVGV4dCIsImhlYWRpbmdUZXh0IiwiY29uc29sZSIsImxvZyIsImhhc2giLCJyZXBsYWNlQWxsIiwidG9Mb3dlckNhc2UiLCJwYXRobmFtZSIsInF1ZXJ5IiwiVE9DU3R5bGUiLCJpbm5lckhlYWRpbmdzIiwibGVuZ3RoIiwibWFwIiwiaW5uZXJMaW5rYWJsZSIsIlRhYmxlT2ZDb250ZW50cyIsInNvdXJjZSIsImhlYWRpbmdMaW5lcyIsInNwbGl0IiwiZmlsdGVyIiwibGluZSIsImluY2x1ZGVzIiwiWGhlYWRpbmdNYXAiLCJsaW5lcyIsImhlYWRpbmdzIiwiaGFzaHRhZ3MiLCJjb250ZW50IiwiaGVhZGluZ0xldmVsIiwiam9pbiIsImhlYWRpbmciLCJwdXNoIiwibGFzdEhlYWRpbmciLCJ1c2VTdGF0ZSIsInNldFNsdWciLCJjcmVhdGVIZWFkaW5nTWFwIiwibSIsInRhZ05hbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxjQUFjLEVBQUk7QUFDeEMsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVdGLGNBQWMsQ0FBQ0csUUFBMUIsRUFBb0NDLElBQXBDLENBQXlDLFVBQUFDLEtBQUssRUFBSTtBQUN4RCxXQUFPQSxLQUFLLENBQUNDLFNB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QW1CLHFCQUFXLENBQUNwQixhQUFaLENBQTBCbUIsSUFBMUIsQ0FBK0I7QUFDOUI1Qix1QkFBVyxFQUFFZCxjQUFjLENBQUN5QyxPQUFELENBREc7QUFFOUJsQix5QkFBYSxFQUFFO0FBRmUsV0FBL0I7QUFJQTtBQUNEO0FBakJxQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CdEMsV0FBT3dCLENBQVA7QUFDQSxHQXBCRDs7QUFzQkFFLHlEQUFTLENBQUMsWUFBTTtBQUNmO0FBQ0E7QUFDQTtBQUVBSixXQUFPLENBQUNLLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQi9CLFFBQWhCLENBQXlCVSxLQUF6QixDQUErQixHQUEvQixFQUFvQ3NCLE9BQXBDLEdBQThDLENBQTlDLENBQUQsQ0FBUDtBQUNBLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDQztBQUFTLGFBQVMsRUFBRTlCLDJFQUFRLENBQUMsZ0JBQUQsQ0FBNUI7QUFBQSw0QkFDQztBQUFJLGVBQVMsRUFBRUEsMkVBQVEsQ0FBQyxhQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFHQztBQUFJLGVBQVMsRUFBRUEsMkVBQVEsQ0FBQyxpQkFBRCxDQUF2QjtBQUFBLGdCQUNFWSxXQUFXLENBQUNULEdBQVosQ0FBZ0IsVUFBQWQsUUFBUSxFQUFJO0FBQzVCLDRCQUFPLHFFQUFDLE9BQUQ7QUFBUyxrQkFBUSxFQUFFQSxRQUFuQjtBQUE2QixjQUFJLEVBQUVDO0FBQW5DLFdBQThDRCxRQUFRLENBQUNHLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQSxPQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0F2Rk07O0dBQU1hLGU7O01BQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uNWNmNGNlNGE1MTM1ZjBhODM1ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbi8vIFRPRE8gb3B0aW1pc2UgVE9DXG5pbXBvcnQgVE9DU3R5bGUgZnJvbSBcIkAvc3R5bGVzL3RhYmxlLW9mLWNvbnRlbnRzLm1vZHVsZS5jc3NcIlxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhlYWRpbmdFbGVtZW50XG4gKi9cbmNvbnN0IGdldEhlYWRpbmdUZXh0ID0gaGVhZGluZ0VsZW1lbnQgPT4ge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShoZWFkaW5nRWxlbWVudC5jaGlsZHJlbikuZmluZChjaGlsZCA9PiB7XG5cdFx0cmV0dXJuIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImxpbmthYmxlLS1oZWFkaW5nLXRleHRcIilcblx0fSkuaW5uZXJUZXh0XG59XG5cbmNvbnN0IFRPQ0l0ZW0gPSAoeyBsaW5rYWJsZSwgc2x1ZyB9KSA9PiB7XG5cdGNvbnN0IGxpbmtUZXh0ID0gbGlua2FibGUuaGVhZGluZ1RleHRcblx0Y29uc29sZS5sb2cobGlua1RleHQsIHR5cGVvZiBsaW5rVGV4dClcblx0Y29uc3QgaGFzaCA9IGxpbmtUZXh0LnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cblx0cmV0dXJuIDxsaT5cblx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRwYXRobmFtZTogYC9wb3N0L1tzbHVnXWAsXG5cdFx0XHRoYXNoLFxuXHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0fX0+XG5cdFx0XHQ8YSBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWxpbmtcIl19PntsaW5rVGV4dH08L2E+XG5cdFx0PC9MaW5rPlxuXG5cdFx0ey8qIFNob3cgdGhlIG5leHQtbGV2ZWwgaGVhZGluZ3MgaWYgcHJlc2VudCAqL31cblx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuXHRcdFx0PHVsIGtleT17bGlua2FibGUuaGVhZGluZ1RleHR9PlxuXHRcdFx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5tYXAoaW5uZXJMaW5rYWJsZSA9PiA8VE9DSXRlbVxuXHRcdFx0XHRcdGtleT17aW5uZXJMaW5rYWJsZS5oZWFkaW5nVGV4dH1cblx0XHRcdFx0XHRsaW5rYWJsZT17aW5uZXJMaW5rYWJsZX1cblx0XHRcdFx0XHRzbHVnPXtzbHVnfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC91bD5cblx0XHQpfVxuXHQ8L2xpPlxufVxuXG5leHBvcnQgY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKHsgc291cmNlIH0pID0+IHtcblx0Y29uc3QgaGVhZGluZ0xpbmVzID0gc291cmNlXG5cdFx0LnNwbGl0KFwiXFxuXCIpXG5cdFx0LmZpbHRlcihsaW5lID0+IHtcblx0XHRcdHJldHVybiBbXCIjI1wiLCBcIiMjI1wiXS5pbmNsdWRlcyhsaW5lLnNwbGl0KFwiIFwiKVswXSlcblx0XHR9KVxuXG5cdGNvbnN0IFhoZWFkaW5nTWFwID0gKChsaW5lcykgPT4ge1xuXHRcdGNvbnN0IG1hcCA9IFtdO1xuXG5cdFx0Y29uc3QgaGVhZGluZ3MgPSBsaW5lcy5tYXAobGluZSA9PiB7XG5cdFx0XHRjb25zdCBbaGFzaHRhZ3MsIC4uLmNvbnRlbnRdID0gbGluZS5zcGxpdChcIiBcIik7XG5cdFx0XHRjb25zdCBoZWFkaW5nTGV2ZWwgPSBoYXNodGFncy5sZW5ndGg7XG5cdFx0XHRjb25zdCBoZWFkaW5nVGV4dCA9IGNvbnRlbnQuam9pbihcIiBcIik7XG5cblx0XHRcdHJldHVybiBbaGVhZGluZ0xldmVsLCBoZWFkaW5nVGV4dF07XG5cdFx0fSk7XG5cblx0XHRmb3IgKGxldCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0XHRjb25zdCBbaGVhZGluZ0xldmVsLCBoZWFkaW5nVGV4dF0gPSBoZWFkaW5nO1xuXG5cdFx0XHRpZiAoaGVhZGluZ0xldmVsID09PSAyKSB7XG5cdFx0XHRcdG1hcC5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dCxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAoaGVhZGluZ0xldmVsID09PSAzKSB7XG5cdFx0XHRcdGNvbnN0IGxhc3RIZWFkaW5nID0gbWFwW21hcC5sZW5ndGggLSAxXTtcblx0XHRcdFx0bGFzdEhlYWRpbmcuaW5uZXJIZWFkaW5ncy5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dCxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9KShoZWFkaW5nTGluZXMpXG5cblx0Y29uc29sZS5sb2coWGhlYWRpbmdNYXApXG5cblx0Y29uc3QgW3NsdWcsIHNldFNsdWddID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Ly8gVE9ETyByZXdyaXRlIHRoZSBjcmVhdGVIZWFkaW5nTWFwIGZ1bmN0aW9uIGluIGEgb3B0aW1hbCB3YXlcblx0LyoqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gaGVhZGluZ3MgXG5cdCAqL1xuXHRjb25zdCBjcmVhdGVIZWFkaW5nTWFwID0gKGhlYWRpbmdzKSA9PiB7XG5cdFx0bGV0IG0gPSBbXTtcblxuXHRcdGZvciAobGV0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRcdGNvbnN0IHRhZ05hbWUgPSBoZWFkaW5nLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmICh0YWdOYW1lID09PSBcImgyXCIpIHtcblx0XHRcdFx0bS5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dDogZ2V0SGVhZGluZ1RleHQoaGVhZGluZyksXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJoM1wiKSB7XG5cdFx0XHRcdGNvbnN0IGxhc3RIZWFkaW5nID0gbVttLmxlbmd0aCAtIDFdXG5cdFx0XHRcdGxhc3RIZWFkaW5nLmlubmVySGVhZGluZ3MucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQ6IGdldEhlYWRpbmdUZXh0KGhlYWRpbmcpLFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG07XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIGRhdGEtaXMtbGlua2FibGU9dHJ1ZSBlbGVtZW50cyB3aWxsIGJlIHNob3duIGluIHRoZSBUYWJsZU9mQ29udGVudHNcblx0XHQvLyBjb25zdCBoZWFkaW5nTWFwID0gY3JlYXRlSGVhZGluZ01hcChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqW2RhdGEtaXMtbGlua2FibGU9dHJ1ZV1cIikpKTtcblx0XHQvLyBzZXRMaW5rYWJsZUVsZW1lbnRzKGhlYWRpbmdNYXApXG5cblx0XHRzZXRTbHVnKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJwYXJlbnQtc2VjdGlvblwiXX0+XG5cdFx0XHQ8aDMgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1oZWFkaW5nXCJdfT5UYWJsZSBPZiBDb250ZW50czwvaDM+XG5cblx0XHRcdDxvbCBjbGFzc05hbWU9e1RPQ1N0eWxlW1wibGlua3MtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0e1hoZWFkaW5nTWFwLm1hcChsaW5rYWJsZSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDxUT0NJdGVtIGxpbmthYmxlPXtsaW5rYWJsZX0gc2x1Zz17c2x1Z30ga2V5PXtsaW5rYWJsZS5oZWFkaW5nVGV4dH0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L29sPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=