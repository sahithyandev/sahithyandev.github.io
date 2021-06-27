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
  });

  var XheadingMap = function (lines) {
    var map = [];
    /**
     * @param {string} headingTextSource
     */

    var removeLinks = function removeLinks(headingTextSource) {
      var linkMatcher = /\[(\w+)\]\([\w-\/\.:]+\)/g;
      if (!linkMatcher.test(headingTextSource)) return headingTextSource;
      return headingTextSource.replace(linkMatcher, function (match, headingText) {
        return headingText;
      });
    };

    var headings = lines.map(function (line) {
      var _line$split = line.split(" "),
          _line$split2 = Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_line$split),
          hashtags = _line$split2[0],
          content = _line$split2.slice(1);

      var headingLevel = hashtags.length;
      var headingText = removeLinks(content.join(" "));
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
      lineNumber: 133,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["links-container"],
      children: XheadingMap.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlubmVyVGV4dCIsIlRPQ0l0ZW0iLCJsaW5rYWJsZSIsInNsdWciLCJsaW5rVGV4dCIsImhlYWRpbmdUZXh0IiwiaGFzaCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInBhdGhuYW1lIiwicXVlcnkiLCJUT0NTdHlsZSIsImlubmVySGVhZGluZ3MiLCJsZW5ndGgiLCJtYXAiLCJpbm5lckxpbmthYmxlIiwiVGFibGVPZkNvbnRlbnRzIiwic291cmNlIiwiaGVhZGluZ0xpbmVzIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwiaW5jbHVkZXMiLCJYaGVhZGluZ01hcCIsImxpbmVzIiwicmVtb3ZlTGlua3MiLCJoZWFkaW5nVGV4dFNvdXJjZSIsImxpbmtNYXRjaGVyIiwidGVzdCIsIm1hdGNoIiwiaGVhZGluZ3MiLCJoYXNodGFncyIsImNvbnRlbnQiLCJoZWFkaW5nTGV2ZWwiLCJqb2luIiwiaGVhZGluZyIsInB1c2giLCJsYXN0SGVhZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInNldFNsdWciLCJjcmVhdGVIZWFkaW5nTWFwIiwibSIsInRhZ05hbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxjQUFjLEVBQUk7QUFDeEMsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVdGLGNBQWMsQ0FBQ0csUUFBMUIs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QUM1Qiw0QkFBTyxxRUFBQyxPQUFEO0FBQVMsa0JBQVEsRUFBRUEsUUFBbkI7QUFBNkIsY0FBSSxFQUFFQztBQUFuQyxXQUE4Q0QsUUFBUSxDQUFDRyxXQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0EsT0FGQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVdBLENBbkdNOztHQUFNVyxlOztNQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjA3OGE2NTQ4OGJjMjI1YTBkMGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG4vLyBUT0RPIG9wdGltaXNlIFRPQ1xuaW1wb3J0IFRPQ1N0eWxlIGZyb20gXCJAL3N0eWxlcy90YWJsZS1vZi1jb250ZW50cy5tb2R1bGUuY3NzXCJcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBoZWFkaW5nRWxlbWVudFxuICovXG5jb25zdCBnZXRIZWFkaW5nVGV4dCA9IGhlYWRpbmdFbGVtZW50ID0+IHtcblx0cmV0dXJuIEFycmF5LmZyb20oaGVhZGluZ0VsZW1lbnQuY2hpbGRyZW4pLmZpbmQoY2hpbGQgPT4ge1xuXHRcdHJldHVybiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW5rYWJsZS0taGVhZGluZy10ZXh0XCIpXG5cdH0pLmlubmVyVGV4dFxufVxuXG5jb25zdCBUT0NJdGVtID0gKHsgbGlua2FibGUsIHNsdWcgfSkgPT4ge1xuXHRjb25zdCBsaW5rVGV4dCA9IGxpbmthYmxlLmhlYWRpbmdUZXh0XG5cdGNvbnN0IGhhc2ggPSBsaW5rVGV4dC5yZXBsYWNlKC9cXHMvZywgXCItXCIpLnRvTG93ZXJDYXNlKClcblxuXHRyZXR1cm4gPGxpPlxuXHRcdDxMaW5rIGhyZWY9e3tcblx0XHRcdHBhdGhuYW1lOiBgL3Bvc3QvW3NsdWddYCxcblx0XHRcdGhhc2gsXG5cdFx0XHRxdWVyeTogeyBzbHVnIH1cblx0XHR9fT5cblx0XHRcdDxhIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJ0b2MtbGlua1wiXX0+e2xpbmtUZXh0fTwvYT5cblx0XHQ8L0xpbms+XG5cblx0XHR7LyogU2hvdyB0aGUgbmV4dC1sZXZlbCBoZWFkaW5ncyBpZiBwcmVzZW50ICovfVxuXHRcdHtsaW5rYWJsZS5pbm5lckhlYWRpbmdzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiAoXG5cdFx0XHQ8dWwga2V5PXtsaW5rYWJsZS5oZWFkaW5nVGV4dH0+XG5cdFx0XHRcdHtsaW5rYWJsZS5pbm5lckhlYWRpbmdzLm1hcChpbm5lckxpbmthYmxlID0+IDxUT0NJdGVtXG5cdFx0XHRcdFx0a2V5PXtpbm5lckxpbmthYmxlLmhlYWRpbmdUZXh0fVxuXHRcdFx0XHRcdGxpbmthYmxlPXtpbm5lckxpbmthYmxlfVxuXHRcdFx0XHRcdHNsdWc9e3NsdWd9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L3VsPlxuXHRcdCl9XG5cdDwvbGk+XG59XG5cbmV4cG9ydCBjb25zdCBUYWJsZU9mQ29udGVudHMgPSAoeyBzb3VyY2UgfSkgPT4ge1xuXHRjb25zdCBoZWFkaW5nTGluZXMgPSBzb3VyY2Vcblx0XHQuc3BsaXQoXCJcXG5cIilcblx0XHQuZmlsdGVyKGxpbmUgPT4ge1xuXHRcdFx0cmV0dXJuIFtcIiMjXCIsIFwiIyMjXCJdLmluY2x1ZGVzKGxpbmUuc3BsaXQoXCIgXCIpWzBdKVxuXHRcdH0pXG5cblxuXHRjb25zdCBYaGVhZGluZ01hcCA9ICgobGluZXMpID0+IHtcblx0XHRjb25zdCBtYXAgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkaW5nVGV4dFNvdXJjZVxuXHRcdCAqL1xuXHRcdGNvbnN0IHJlbW92ZUxpbmtzID0gaGVhZGluZ1RleHRTb3VyY2UgPT4ge1xuXHRcdFx0Y29uc3QgbGlua01hdGNoZXIgPSAvXFxbKFxcdyspXFxdXFwoW1xcdy1cXC9cXC46XStcXCkvZ1xuXG5cdFx0XHRpZiAoIWxpbmtNYXRjaGVyLnRlc3QoaGVhZGluZ1RleHRTb3VyY2UpKSByZXR1cm4gaGVhZGluZ1RleHRTb3VyY2U7XG5cblx0XHRcdHJldHVybiBoZWFkaW5nVGV4dFNvdXJjZS5yZXBsYWNlKGxpbmtNYXRjaGVyLCAobWF0Y2gsIGhlYWRpbmdUZXh0KSA9PiBoZWFkaW5nVGV4dClcblx0XHR9XG5cblx0XHRjb25zdCBoZWFkaW5ncyA9IGxpbmVzLm1hcChsaW5lID0+IHtcblx0XHRcdGNvbnN0IFtoYXNodGFncywgLi4uY29udGVudF0gPSBsaW5lLnNwbGl0KFwiIFwiKTtcblx0XHRcdGNvbnN0IGhlYWRpbmdMZXZlbCA9IGhhc2h0YWdzLmxlbmd0aDtcblx0XHRcdGNvbnN0IGhlYWRpbmdUZXh0ID0gcmVtb3ZlTGlua3MoY29udGVudC5qb2luKFwiIFwiKSk7XG5cblx0XHRcdHJldHVybiBbaGVhZGluZ0xldmVsLCBoZWFkaW5nVGV4dF07XG5cdFx0fSk7XG5cblx0XHRmb3IgKGxldCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0XHRjb25zdCBbaGVhZGluZ0xldmVsLCBoZWFkaW5nVGV4dF0gPSBoZWFkaW5nO1xuXG5cdFx0XHRpZiAoaGVhZGluZ0xldmVsID09PSAyKSB7XG5cdFx0XHRcdG1hcC5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dCxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAoaGVhZGluZ0xldmVsID09PSAzKSB7XG5cdFx0XHRcdGNvbnN0IGxhc3RIZWFkaW5nID0gbWFwW21hcC5sZW5ndGggLSAxXTtcblx0XHRcdFx0bGFzdEhlYWRpbmcuaW5uZXJIZWFkaW5ncy5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dCxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9KShoZWFkaW5nTGluZXMpXG5cblx0Y29uc29sZS5sb2coWGhlYWRpbmdNYXApXG5cblx0Y29uc3QgW3NsdWcsIHNldFNsdWddID0gdXNlU3RhdGUoXCJcIik7XG5cblx0Ly8gVE9ETyByZXdyaXRlIHRoZSBjcmVhdGVIZWFkaW5nTWFwIGZ1bmN0aW9uIGluIGEgb3B0aW1hbCB3YXlcblx0LyoqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gaGVhZGluZ3MgXG5cdCAqL1xuXHRjb25zdCBjcmVhdGVIZWFkaW5nTWFwID0gKGhlYWRpbmdzKSA9PiB7XG5cdFx0bGV0IG0gPSBbXTtcblxuXHRcdGZvciAobGV0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRcdGNvbnN0IHRhZ05hbWUgPSBoZWFkaW5nLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmICh0YWdOYW1lID09PSBcImgyXCIpIHtcblx0XHRcdFx0bS5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dDogZ2V0SGVhZGluZ1RleHQoaGVhZGluZyksXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJoM1wiKSB7XG5cdFx0XHRcdGNvbnN0IGxhc3RIZWFkaW5nID0gbVttLmxlbmd0aCAtIDFdXG5cdFx0XHRcdGxhc3RIZWFkaW5nLmlubmVySGVhZGluZ3MucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQ6IGdldEhlYWRpbmdUZXh0KGhlYWRpbmcpLFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG07XG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIGRhdGEtaXMtbGlua2FibGU9dHJ1ZSBlbGVtZW50cyB3aWxsIGJlIHNob3duIGluIHRoZSBUYWJsZU9mQ29udGVudHNcblx0XHQvLyBjb25zdCBoZWFkaW5nTWFwID0gY3JlYXRlSGVhZGluZ01hcChBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqW2RhdGEtaXMtbGlua2FibGU9dHJ1ZV1cIikpKTtcblx0XHQvLyBzZXRMaW5rYWJsZUVsZW1lbnRzKGhlYWRpbmdNYXApXG5cblx0XHRzZXRTbHVnKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdKVxuXHR9LCBbXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJwYXJlbnQtc2VjdGlvblwiXX0+XG5cdFx0XHQ8aDMgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1oZWFkaW5nXCJdfT5UYWJsZSBPZiBDb250ZW50czwvaDM+XG5cblx0XHRcdDxvbCBjbGFzc05hbWU9e1RPQ1N0eWxlW1wibGlua3MtY29udGFpbmVyXCJdfT5cblx0XHRcdFx0e1hoZWFkaW5nTWFwLm1hcChsaW5rYWJsZSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDxUT0NJdGVtIGxpbmthYmxlPXtsaW5rYWJsZX0gc2x1Zz17c2x1Z30ga2V5PXtsaW5rYWJsZS5oZWFkaW5nVGV4dH0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L29sPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=