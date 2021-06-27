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
     * @param {string} headingText
     */

    var removeLinks = function removeLinks(headingText) {
      console.log(headingText);
      var linkMatcher = /\[(\w+)\]\([\w:\/\.:]+\)/;
      console.log("KS", linkMatcher.test(headingText));
      console.log(headingText.match(linkMatcher));
      return headingText;
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
      lineNumber: 136,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["links-container"],
      children: XheadingMap.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlubmVyVGV4dCIsIlRPQ0l0ZW0iLCJsaW5rYWJsZSIsInNsdWciLCJsaW5rVGV4dCIsImhlYWRpbmdUZXh0IiwiaGFzaCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInBhdGhuYW1lIiwicXVlcnkiLCJUT0NTdHlsZSIsImlubmVySGVhZGluZ3MiLCJsZW5ndGgiLCJtYXAiLCJpbm5lckxpbmthYmxlIiwiVGFibGVPZkNvbnRlbnRzIiwic291cmNlIiwiaGVhZGluZ0xpbmVzIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwiaW5jbHVkZXMiLCJYaGVhZGluZ01hcCIsImxpbmVzIiwicmVtb3ZlTGlua3MiLCJjb25zb2xlIiwibG9nIiwibGlua01hdGNoZXIiLCJ0ZXN0IiwibWF0Y2giLCJoZWFkaW5ncyIsImhhc2h0YWdzIiwiY29udGVudCIsImhlYWRpbmdMZXZlbCIsImpvaW4iLCJoZWFkaW5nIiwicHVzaCIsImxhc3RIZWFkaW5nIiwidXNlU3RhdGUiLCJzZXRTbHVnIiwiY3JlYXRlSGVhZGluZ01hcCIsIm0iLCJ0YWdOYW1lIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsY0FBYyxFQUFJO0FBQ3hDLFNBQU9DLEtBQUssQ0FBQ0MsSUFBTixDQUFXRixjQUFjLENBQUNHLFFBQTFCLEVBQW9DQyxJQUFwQyxDQUF5QyxV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QUFPLHFFQUFDLE9BQUQ7QUFBUyxrQkFBUSxFQUFFQSxRQUFuQjtBQUE2QixjQUFJLEVBQUVDO0FBQW5DLFdBQThDRCxRQUFRLENBQUNHLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDQSxPQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0F0R007O0dBQU1XLGU7O01BQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uMjE3NjM4YzFjMTJhNWY4Yjg0YzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbi8vIFRPRE8gb3B0aW1pc2UgVE9DXG5pbXBvcnQgVE9DU3R5bGUgZnJvbSBcIkAvc3R5bGVzL3RhYmxlLW9mLWNvbnRlbnRzLm1vZHVsZS5jc3NcIlxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhlYWRpbmdFbGVtZW50XG4gKi9cbmNvbnN0IGdldEhlYWRpbmdUZXh0ID0gaGVhZGluZ0VsZW1lbnQgPT4ge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShoZWFkaW5nRWxlbWVudC5jaGlsZHJlbikuZmluZChjaGlsZCA9PiB7XG5cdFx0cmV0dXJuIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImxpbmthYmxlLS1oZWFkaW5nLXRleHRcIilcblx0fSkuaW5uZXJUZXh0XG59XG5cbmNvbnN0IFRPQ0l0ZW0gPSAoeyBsaW5rYWJsZSwgc2x1ZyB9KSA9PiB7XG5cdGNvbnN0IGxpbmtUZXh0ID0gbGlua2FibGUuaGVhZGluZ1RleHRcblx0Y29uc3QgaGFzaCA9IGxpbmtUZXh0LnJlcGxhY2UoL1xccy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXG5cdHJldHVybiA8bGk+XG5cdFx0PExpbmsgaHJlZj17e1xuXHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0aGFzaCxcblx0XHRcdHF1ZXJ5OiB7IHNsdWcgfVxuXHRcdH19PlxuXHRcdFx0PGEgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1saW5rXCJdfT57bGlua1RleHR9PC9hPlxuXHRcdDwvTGluaz5cblxuXHRcdHsvKiBTaG93IHRoZSBuZXh0LWxldmVsIGhlYWRpbmdzIGlmIHByZXNlbnQgKi99XG5cdFx0e2xpbmthYmxlLmlubmVySGVhZGluZ3MubGVuZ3RoID09PSAwID8gbnVsbCA6IChcblx0XHRcdDx1bCBrZXk9e2xpbmthYmxlLmhlYWRpbmdUZXh0fT5cblx0XHRcdFx0e2xpbmthYmxlLmlubmVySGVhZGluZ3MubWFwKGlubmVyTGlua2FibGUgPT4gPFRPQ0l0ZW1cblx0XHRcdFx0XHRrZXk9e2lubmVyTGlua2FibGUuaGVhZGluZ1RleHR9XG5cdFx0XHRcdFx0bGlua2FibGU9e2lubmVyTGlua2FibGV9XG5cdFx0XHRcdFx0c2x1Zz17c2x1Z31cblx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvdWw+XG5cdFx0KX1cblx0PC9saT5cbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlT2ZDb250ZW50cyA9ICh7IHNvdXJjZSB9KSA9PiB7XG5cdGNvbnN0IGhlYWRpbmdMaW5lcyA9IHNvdXJjZVxuXHRcdC5zcGxpdChcIlxcblwiKVxuXHRcdC5maWx0ZXIobGluZSA9PiB7XG5cdFx0XHRyZXR1cm4gW1wiIyNcIiwgXCIjIyNcIl0uaW5jbHVkZXMobGluZS5zcGxpdChcIiBcIilbMF0pXG5cdFx0fSlcblxuXG5cdGNvbnN0IFhoZWFkaW5nTWFwID0gKChsaW5lcykgPT4ge1xuXHRcdGNvbnN0IG1hcCA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGhlYWRpbmdUZXh0XG5cdFx0ICovXG5cdFx0Y29uc3QgcmVtb3ZlTGlua3MgPSBoZWFkaW5nVGV4dCA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhoZWFkaW5nVGV4dClcblx0XHRcdGNvbnN0IGxpbmtNYXRjaGVyID0gL1xcWyhcXHcrKVxcXVxcKFtcXHc6XFwvXFwuOl0rXFwpL1xuXG5cdFx0XHRjb25zb2xlLmxvZyhcIktTXCIsIGxpbmtNYXRjaGVyLnRlc3QoaGVhZGluZ1RleHQpKVxuXG5cdFx0XHRjb25zb2xlLmxvZyhoZWFkaW5nVGV4dC5tYXRjaChsaW5rTWF0Y2hlcikpXG5cblx0XHRcdHJldHVybiBoZWFkaW5nVGV4dFxuXHRcdH1cblxuXHRcdGNvbnN0IGhlYWRpbmdzID0gbGluZXMubWFwKGxpbmUgPT4ge1xuXHRcdFx0Y29uc3QgW2hhc2h0YWdzLCAuLi5jb250ZW50XSA9IGxpbmUuc3BsaXQoXCIgXCIpO1xuXHRcdFx0Y29uc3QgaGVhZGluZ0xldmVsID0gaGFzaHRhZ3MubGVuZ3RoO1xuXHRcdFx0Y29uc3QgaGVhZGluZ1RleHQgPSByZW1vdmVMaW5rcyhjb250ZW50LmpvaW4oXCIgXCIpKTtcblxuXHRcdFx0cmV0dXJuIFtoZWFkaW5nTGV2ZWwsIGhlYWRpbmdUZXh0XTtcblx0XHR9KTtcblxuXHRcdGZvciAobGV0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRcdGNvbnN0IFtoZWFkaW5nTGV2ZWwsIGhlYWRpbmdUZXh0XSA9IGhlYWRpbmc7XG5cblx0XHRcdGlmIChoZWFkaW5nTGV2ZWwgPT09IDIpIHtcblx0XHRcdFx0bWFwLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0LFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIGlmIChoZWFkaW5nTGV2ZWwgPT09IDMpIHtcblx0XHRcdFx0Y29uc3QgbGFzdEhlYWRpbmcgPSBtYXBbbWFwLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRsYXN0SGVhZGluZy5pbm5lckhlYWRpbmdzLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0LFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH0pKGhlYWRpbmdMaW5lcylcblxuXHRjb25zb2xlLmxvZyhYaGVhZGluZ01hcClcblxuXHRjb25zdCBbc2x1Zywgc2V0U2x1Z10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHQvLyBUT0RPIHJld3JpdGUgdGhlIGNyZWF0ZUhlYWRpbmdNYXAgZnVuY3Rpb24gaW4gYSBvcHRpbWFsIHdheVxuXHQvKipcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBoZWFkaW5ncyBcblx0ICovXG5cdGNvbnN0IGNyZWF0ZUhlYWRpbmdNYXAgPSAoaGVhZGluZ3MpID0+IHtcblx0XHRsZXQgbSA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgdGFnTmFtZSA9IGhlYWRpbmcudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHRhZ05hbWUgPT09IFwiaDJcIikge1xuXHRcdFx0XHRtLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0OiBnZXRIZWFkaW5nVGV4dChoZWFkaW5nKSxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIGlmICh0YWdOYW1lID09PSBcImgzXCIpIHtcblx0XHRcdFx0Y29uc3QgbGFzdEhlYWRpbmcgPSBtW20ubGVuZ3RoIC0gMV1cblx0XHRcdFx0bGFzdEhlYWRpbmcuaW5uZXJIZWFkaW5ncy5wdXNoKHtcblx0XHRcdFx0XHRoZWFkaW5nVGV4dDogZ2V0SGVhZGluZ1RleHQoaGVhZGluZyksXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbTtcblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gZGF0YS1pcy1saW5rYWJsZT10cnVlIGVsZW1lbnRzIHdpbGwgYmUgc2hvd24gaW4gdGhlIFRhYmxlT2ZDb250ZW50c1xuXHRcdC8vIGNvbnN0IGhlYWRpbmdNYXAgPSBjcmVhdGVIZWFkaW5nTWFwKEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipbZGF0YS1pcy1saW5rYWJsZT10cnVlXVwiKSkpO1xuXHRcdC8vIHNldExpbmthYmxlRWxlbWVudHMoaGVhZGluZ01hcClcblxuXHRcdHNldFNsdWcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5yZXZlcnNlKClbMF0pXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtUT0NTdHlsZVtcInBhcmVudC1zZWN0aW9uXCJdfT5cblx0XHRcdDxoMyBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWhlYWRpbmdcIl19PlRhYmxlIE9mIENvbnRlbnRzPC9oMz5cblxuXHRcdFx0PG9sIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJsaW5rcy1jb250YWluZXJcIl19PlxuXHRcdFx0XHR7WGhlYWRpbmdNYXAubWFwKGxpbmthYmxlID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gPFRPQ0l0ZW0gbGlua2FibGU9e2xpbmthYmxlfSBzbHVnPXtzbHVnfSBrZXk9e2xpbmthYmxlLmhlYWRpbmdUZXh0fSAvPlxuXHRcdFx0XHR9KX1cblx0XHRcdDwvb2w+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==