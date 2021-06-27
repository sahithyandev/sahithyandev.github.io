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

  var headingMap = function (lines) {
    var map = [];
    /**
     * @param {string} headingTextSource
     */

    var removeLinks = function removeLinks(headingTextSource) {
      var linkMatcher = /\[(\w+)\]\([\w\-\/\.:]+\)/g;
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
      lineNumber: 129,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["links-container"],
      children: headingMap.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlubmVyVGV4dCIsIlRPQ0l0ZW0iLCJsaW5rYWJsZSIsInNsdWciLCJsaW5rVGV4dCIsImhlYWRpbmdUZXh0IiwiaGFzaCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInBhdGhuYW1lIiwicXVlcnkiLCJUT0NTdHlsZSIsImlubmVySGVhZGluZ3MiLCJsZW5ndGgiLCJtYXAiLCJpbm5lckxpbmthYmxlIiwiVGFibGVPZkNvbnRlbnRzIiwic291cmNlIiwiaGVhZGluZ0xpbmVzIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwiaW5jbHVkZXMiLCJoZWFkaW5nTWFwIiwibGluZXMiLCJyZW1vdmVMaW5rcyIsImhlYWRpbmdUZXh0U291cmNlIiwibGlua01hdGNoZXIiLCJtYXRjaCIsImhlYWRpbmdzIiwiaGFzaHRhZ3MiLCJjb250ZW50IiwiaGVhZGluZ0xldmVsIiwiam9pbiIsImhlYWRpbmciLCJwdXNoIiwibGFzdEhlYWRpbmciLCJ1c2VTdGF0ZSIsInNldFNsdWciLCJjcmVhdGVIZWFkaW5nTWFwIiwibSIsInRhZ05hbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxjQUFjLEVBQUk7QUFDeEMsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVdGLGNBQWMsQ0FBQ0csUUFBMUIsRUFBb0NDLElBQXBDLENBQXlDLFVBQUFD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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0EvRk07O0dBQU1XLGU7O01BQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uMDIzMDVjYTRhMGVjOGFkMjM4NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbi8vIFRPRE8gb3B0aW1pc2UgVE9DXG5pbXBvcnQgVE9DU3R5bGUgZnJvbSBcIkAvc3R5bGVzL3RhYmxlLW9mLWNvbnRlbnRzLm1vZHVsZS5jc3NcIlxuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGhlYWRpbmdFbGVtZW50XG4gKi9cbmNvbnN0IGdldEhlYWRpbmdUZXh0ID0gaGVhZGluZ0VsZW1lbnQgPT4ge1xuXHRyZXR1cm4gQXJyYXkuZnJvbShoZWFkaW5nRWxlbWVudC5jaGlsZHJlbikuZmluZChjaGlsZCA9PiB7XG5cdFx0cmV0dXJuIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImxpbmthYmxlLS1oZWFkaW5nLXRleHRcIilcblx0fSkuaW5uZXJUZXh0XG59XG5cbmNvbnN0IFRPQ0l0ZW0gPSAoeyBsaW5rYWJsZSwgc2x1ZyB9KSA9PiB7XG5cdGNvbnN0IGxpbmtUZXh0ID0gbGlua2FibGUuaGVhZGluZ1RleHRcblx0Y29uc3QgaGFzaCA9IGxpbmtUZXh0LnJlcGxhY2UoL1xccy9nLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXG5cdHJldHVybiA8bGk+XG5cdFx0PExpbmsgaHJlZj17e1xuXHRcdFx0cGF0aG5hbWU6IGAvcG9zdC9bc2x1Z11gLFxuXHRcdFx0aGFzaCxcblx0XHRcdHF1ZXJ5OiB7IHNsdWcgfVxuXHRcdH19PlxuXHRcdFx0PGEgY2xhc3NOYW1lPXtUT0NTdHlsZVtcInRvYy1saW5rXCJdfT57bGlua1RleHR9PC9hPlxuXHRcdDwvTGluaz5cblxuXHRcdHsvKiBTaG93IHRoZSBuZXh0LWxldmVsIGhlYWRpbmdzIGlmIHByZXNlbnQgKi99XG5cdFx0e2xpbmthYmxlLmlubmVySGVhZGluZ3MubGVuZ3RoID09PSAwID8gbnVsbCA6IChcblx0XHRcdDx1bCBrZXk9e2xpbmthYmxlLmhlYWRpbmdUZXh0fT5cblx0XHRcdFx0e2xpbmthYmxlLmlubmVySGVhZGluZ3MubWFwKGlubmVyTGlua2FibGUgPT4gPFRPQ0l0ZW1cblx0XHRcdFx0XHRrZXk9e2lubmVyTGlua2FibGUuaGVhZGluZ1RleHR9XG5cdFx0XHRcdFx0bGlua2FibGU9e2lubmVyTGlua2FibGV9XG5cdFx0XHRcdFx0c2x1Zz17c2x1Z31cblx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvdWw+XG5cdFx0KX1cblx0PC9saT5cbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlT2ZDb250ZW50cyA9ICh7IHNvdXJjZSB9KSA9PiB7XG5cdGNvbnN0IGhlYWRpbmdMaW5lcyA9IHNvdXJjZVxuXHRcdC5zcGxpdChcIlxcblwiKVxuXHRcdC5maWx0ZXIobGluZSA9PiB7XG5cdFx0XHRyZXR1cm4gW1wiIyNcIiwgXCIjIyNcIl0uaW5jbHVkZXMobGluZS5zcGxpdChcIiBcIilbMF0pXG5cdFx0fSlcblxuXG5cdGNvbnN0IGhlYWRpbmdNYXAgPSAoKGxpbmVzKSA9PiB7XG5cdFx0Y29uc3QgbWFwID0gW107XG5cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaGVhZGluZ1RleHRTb3VyY2Vcblx0XHQgKi9cblx0XHRjb25zdCByZW1vdmVMaW5rcyA9IGhlYWRpbmdUZXh0U291cmNlID0+IHtcblx0XHRcdGNvbnN0IGxpbmtNYXRjaGVyID0gL1xcWyhcXHcrKVxcXVxcKFtcXHdcXC1cXC9cXC46XStcXCkvZ1xuXG5cdFx0XHRyZXR1cm4gaGVhZGluZ1RleHRTb3VyY2UucmVwbGFjZShsaW5rTWF0Y2hlciwgKG1hdGNoLCBoZWFkaW5nVGV4dCkgPT4gaGVhZGluZ1RleHQpXG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVhZGluZ3MgPSBsaW5lcy5tYXAobGluZSA9PiB7XG5cdFx0XHRjb25zdCBbaGFzaHRhZ3MsIC4uLmNvbnRlbnRdID0gbGluZS5zcGxpdChcIiBcIik7XG5cdFx0XHRjb25zdCBoZWFkaW5nTGV2ZWwgPSBoYXNodGFncy5sZW5ndGg7XG5cdFx0XHRjb25zdCBoZWFkaW5nVGV4dCA9IHJlbW92ZUxpbmtzKGNvbnRlbnQuam9pbihcIiBcIikpO1xuXG5cdFx0XHRyZXR1cm4gW2hlYWRpbmdMZXZlbCwgaGVhZGluZ1RleHRdO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChsZXQgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgW2hlYWRpbmdMZXZlbCwgaGVhZGluZ1RleHRdID0gaGVhZGluZztcblxuXHRcdFx0aWYgKGhlYWRpbmdMZXZlbCA9PT0gMikge1xuXHRcdFx0XHRtYXAucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQsXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKGhlYWRpbmdMZXZlbCA9PT0gMykge1xuXHRcdFx0XHRjb25zdCBsYXN0SGVhZGluZyA9IG1hcFttYXAubGVuZ3RoIC0gMV07XG5cdFx0XHRcdGxhc3RIZWFkaW5nLmlubmVySGVhZGluZ3MucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQsXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fSkoaGVhZGluZ0xpbmVzKVxuXG5cdGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdC8vIFRPRE8gcmV3cml0ZSB0aGUgY3JlYXRlSGVhZGluZ01hcCBmdW5jdGlvbiBpbiBhIG9wdGltYWwgd2F5XG5cdC8qKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGhlYWRpbmdzIFxuXHQgKi9cblx0Y29uc3QgY3JlYXRlSGVhZGluZ01hcCA9IChoZWFkaW5ncykgPT4ge1xuXHRcdGxldCBtID0gW107XG5cblx0XHRmb3IgKGxldCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0XHRjb25zdCB0YWdOYW1lID0gaGVhZGluZy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRpZiAodGFnTmFtZSA9PT0gXCJoMlwiKSB7XG5cdFx0XHRcdG0ucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQ6IGdldEhlYWRpbmdUZXh0KGhlYWRpbmcpLFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiaDNcIikge1xuXHRcdFx0XHRjb25zdCBsYXN0SGVhZGluZyA9IG1bbS5sZW5ndGggLSAxXVxuXHRcdFx0XHRsYXN0SGVhZGluZy5pbm5lckhlYWRpbmdzLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0OiBnZXRIZWFkaW5nVGV4dChoZWFkaW5nKSxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlPXRydWUgZWxlbWVudHMgd2lsbCBiZSBzaG93biBpbiB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0Ly8gY29uc3QgaGVhZGluZ01hcCA9IGNyZWF0ZUhlYWRpbmdNYXAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKltkYXRhLWlzLWxpbmthYmxlPXRydWVdXCIpKSk7XG5cdFx0Ly8gc2V0TGlua2FibGVFbGVtZW50cyhoZWFkaW5nTWFwKVxuXG5cdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1RPQ1N0eWxlW1wicGFyZW50LXNlY3Rpb25cIl19PlxuXHRcdFx0PGgzIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJ0b2MtaGVhZGluZ1wiXX0+VGFibGUgT2YgQ29udGVudHM8L2gzPlxuXG5cdFx0XHQ8b2wgY2xhc3NOYW1lPXtUT0NTdHlsZVtcImxpbmtzLWNvbnRhaW5lclwiXX0+XG5cdFx0XHRcdHtoZWFkaW5nTWFwLm1hcChsaW5rYWJsZSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDxUT0NJdGVtIGxpbmthYmxlPXtsaW5rYWJsZX0gc2x1Zz17c2x1Z30ga2V5PXtsaW5rYWJsZS5oZWFkaW5nVGV4dH0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L29sPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=