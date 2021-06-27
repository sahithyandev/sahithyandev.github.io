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

    var removeLinks = function removeLinks(headingText) {
      console.log(headingText);
      var linkMatcher = /\[(\w+)\]\([\w:\/\.:]+\)/;
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
      lineNumber: 131,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
      className: _styles_table_of_contents_module_css__WEBPACK_IMPORTED_MODULE_5___default.a["links-container"],
      children: XheadingMap.map(function (linkable) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TOCItem, {
          linkable: linkable,
          slug: slug
        }, linkable.headingText, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZU9mQ29udGVudHMuTURYLmpzeCJdLCJuYW1lcyI6WyJnZXRIZWFkaW5nVGV4dCIsImhlYWRpbmdFbGVtZW50IiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImlubmVyVGV4dCIsIlRPQ0l0ZW0iLCJsaW5rYWJsZSIsInNsdWciLCJsaW5rVGV4dCIsImhlYWRpbmdUZXh0IiwiaGFzaCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInBhdGhuYW1lIiwicXVlcnkiLCJUT0NTdHlsZSIsImlubmVySGVhZGluZ3MiLCJsZW5ndGgiLCJtYXAiLCJpbm5lckxpbmthYmxlIiwiVGFibGVPZkNvbnRlbnRzIiwic291cmNlIiwiaGVhZGluZ0xpbmVzIiwic3BsaXQiLCJmaWx0ZXIiLCJsaW5lIiwiaW5jbHVkZXMiLCJYaGVhZGluZ01hcCIsImxpbmVzIiwicmVtb3ZlTGlua3MiLCJjb25zb2xlIiwibG9nIiwibGlua01hdGNoZXIiLCJtYXRjaCIsImhlYWRpbmdzIiwiaGFzaHRhZ3MiLCJjb250ZW50IiwiaGVhZGluZ0xldmVsIiwiam9pbiIsImhlYWRpbmciLCJwdXNoIiwibGFzdEhlYWRpbmciLCJ1c2VTdGF0ZSIsInNldFNsdWciLCJjcmVhdGVIZWFkaW5nTWFwIiwibSIsInRhZ05hbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxjQUFjLEVBQUk7QUFDeEMsU0FBT0MsS0FBSyxDQUFDQyxJQUFOLENBQVdGLGNBQWMsQ0FBQ0csUUFBMUIsRUFBb0NDLElBQXBDLENBQXlDLFVBQUFDLEtB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QUFBQSxpQkFBUDtBQUNBLE9BRkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFXQSxDQWpHTTs7R0FBTVcsZTs7TUFBQUEsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4wYTJhNzA1MWQyZjhkZjViYThlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuLy8gVE9ETyBvcHRpbWlzZSBUT0NcbmltcG9ydCBUT0NTdHlsZSBmcm9tIFwiQC9zdHlsZXMvdGFibGUtb2YtY29udGVudHMubW9kdWxlLmNzc1wiXG5cbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaGVhZGluZ0VsZW1lbnRcbiAqL1xuY29uc3QgZ2V0SGVhZGluZ1RleHQgPSBoZWFkaW5nRWxlbWVudCA9PiB7XG5cdHJldHVybiBBcnJheS5mcm9tKGhlYWRpbmdFbGVtZW50LmNoaWxkcmVuKS5maW5kKGNoaWxkID0+IHtcblx0XHRyZXR1cm4gY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlua2FibGUtLWhlYWRpbmctdGV4dFwiKVxuXHR9KS5pbm5lclRleHRcbn1cblxuY29uc3QgVE9DSXRlbSA9ICh7IGxpbmthYmxlLCBzbHVnIH0pID0+IHtcblx0Y29uc3QgbGlua1RleHQgPSBsaW5rYWJsZS5oZWFkaW5nVGV4dFxuXHRjb25zdCBoYXNoID0gbGlua1RleHQucmVwbGFjZSgvXFxzL2csIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cblx0cmV0dXJuIDxsaT5cblx0XHQ8TGluayBocmVmPXt7XG5cdFx0XHRwYXRobmFtZTogYC9wb3N0L1tzbHVnXWAsXG5cdFx0XHRoYXNoLFxuXHRcdFx0cXVlcnk6IHsgc2x1ZyB9XG5cdFx0fX0+XG5cdFx0XHQ8YSBjbGFzc05hbWU9e1RPQ1N0eWxlW1widG9jLWxpbmtcIl19PntsaW5rVGV4dH08L2E+XG5cdFx0PC9MaW5rPlxuXG5cdFx0ey8qIFNob3cgdGhlIG5leHQtbGV2ZWwgaGVhZGluZ3MgaWYgcHJlc2VudCAqL31cblx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5sZW5ndGggPT09IDAgPyBudWxsIDogKFxuXHRcdFx0PHVsIGtleT17bGlua2FibGUuaGVhZGluZ1RleHR9PlxuXHRcdFx0XHR7bGlua2FibGUuaW5uZXJIZWFkaW5ncy5tYXAoaW5uZXJMaW5rYWJsZSA9PiA8VE9DSXRlbVxuXHRcdFx0XHRcdGtleT17aW5uZXJMaW5rYWJsZS5oZWFkaW5nVGV4dH1cblx0XHRcdFx0XHRsaW5rYWJsZT17aW5uZXJMaW5rYWJsZX1cblx0XHRcdFx0XHRzbHVnPXtzbHVnfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC91bD5cblx0XHQpfVxuXHQ8L2xpPlxufVxuXG5leHBvcnQgY29uc3QgVGFibGVPZkNvbnRlbnRzID0gKHsgc291cmNlIH0pID0+IHtcblx0Y29uc3QgaGVhZGluZ0xpbmVzID0gc291cmNlXG5cdFx0LnNwbGl0KFwiXFxuXCIpXG5cdFx0LmZpbHRlcihsaW5lID0+IHtcblx0XHRcdHJldHVybiBbXCIjI1wiLCBcIiMjI1wiXS5pbmNsdWRlcyhsaW5lLnNwbGl0KFwiIFwiKVswXSlcblx0XHR9KVxuXG5cblx0Y29uc3QgWGhlYWRpbmdNYXAgPSAoKGxpbmVzKSA9PiB7XG5cdFx0Y29uc3QgbWFwID0gW107XG5cblx0XHRjb25zdCByZW1vdmVMaW5rcyA9IGhlYWRpbmdUZXh0ID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGhlYWRpbmdUZXh0KVxuXHRcdFx0Y29uc3QgbGlua01hdGNoZXIgPSAvXFxbKFxcdyspXFxdXFwoW1xcdzpcXC9cXC46XStcXCkvXG5cblx0XHRcdGNvbnNvbGUubG9nKGhlYWRpbmdUZXh0Lm1hdGNoKGxpbmtNYXRjaGVyKSlcblxuXHRcdFx0cmV0dXJuIGhlYWRpbmdUZXh0XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVhZGluZ3MgPSBsaW5lcy5tYXAobGluZSA9PiB7XG5cdFx0XHRjb25zdCBbaGFzaHRhZ3MsIC4uLmNvbnRlbnRdID0gbGluZS5zcGxpdChcIiBcIik7XG5cdFx0XHRjb25zdCBoZWFkaW5nTGV2ZWwgPSBoYXNodGFncy5sZW5ndGg7XG5cdFx0XHRjb25zdCBoZWFkaW5nVGV4dCA9IHJlbW92ZUxpbmtzKGNvbnRlbnQuam9pbihcIiBcIikpO1xuXG5cdFx0XHRyZXR1cm4gW2hlYWRpbmdMZXZlbCwgaGVhZGluZ1RleHRdO1xuXHRcdH0pO1xuXG5cdFx0Zm9yIChsZXQgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgW2hlYWRpbmdMZXZlbCwgaGVhZGluZ1RleHRdID0gaGVhZGluZztcblxuXHRcdFx0aWYgKGhlYWRpbmdMZXZlbCA9PT0gMikge1xuXHRcdFx0XHRtYXAucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQsXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKGhlYWRpbmdMZXZlbCA9PT0gMykge1xuXHRcdFx0XHRjb25zdCBsYXN0SGVhZGluZyA9IG1hcFttYXAubGVuZ3RoIC0gMV07XG5cdFx0XHRcdGxhc3RIZWFkaW5nLmlubmVySGVhZGluZ3MucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQsXG5cdFx0XHRcdFx0aW5uZXJIZWFkaW5nczogW11cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fSkoaGVhZGluZ0xpbmVzKVxuXG5cdGNvbnNvbGUubG9nKFhoZWFkaW5nTWFwKVxuXG5cdGNvbnN0IFtzbHVnLCBzZXRTbHVnXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdC8vIFRPRE8gcmV3cml0ZSB0aGUgY3JlYXRlSGVhZGluZ01hcCBmdW5jdGlvbiBpbiBhIG9wdGltYWwgd2F5XG5cdC8qKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGhlYWRpbmdzIFxuXHQgKi9cblx0Y29uc3QgY3JlYXRlSGVhZGluZ01hcCA9IChoZWFkaW5ncykgPT4ge1xuXHRcdGxldCBtID0gW107XG5cblx0XHRmb3IgKGxldCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0XHRjb25zdCB0YWdOYW1lID0gaGVhZGluZy50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRpZiAodGFnTmFtZSA9PT0gXCJoMlwiKSB7XG5cdFx0XHRcdG0ucHVzaCh7XG5cdFx0XHRcdFx0aGVhZGluZ1RleHQ6IGdldEhlYWRpbmdUZXh0KGhlYWRpbmcpLFxuXHRcdFx0XHRcdGlubmVySGVhZGluZ3M6IFtdXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiaDNcIikge1xuXHRcdFx0XHRjb25zdCBsYXN0SGVhZGluZyA9IG1bbS5sZW5ndGggLSAxXVxuXHRcdFx0XHRsYXN0SGVhZGluZy5pbm5lckhlYWRpbmdzLnB1c2goe1xuXHRcdFx0XHRcdGhlYWRpbmdUZXh0OiBnZXRIZWFkaW5nVGV4dChoZWFkaW5nKSxcblx0XHRcdFx0XHRpbm5lckhlYWRpbmdzOiBbXVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtO1xuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBkYXRhLWlzLWxpbmthYmxlPXRydWUgZWxlbWVudHMgd2lsbCBiZSBzaG93biBpbiB0aGUgVGFibGVPZkNvbnRlbnRzXG5cdFx0Ly8gY29uc3QgaGVhZGluZ01hcCA9IGNyZWF0ZUhlYWRpbmdNYXAoQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKltkYXRhLWlzLWxpbmthYmxlPXRydWVdXCIpKSk7XG5cdFx0Ly8gc2V0TGlua2FibGVFbGVtZW50cyhoZWFkaW5nTWFwKVxuXG5cdFx0c2V0U2x1Zyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpLnJldmVyc2UoKVswXSlcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1RPQ1N0eWxlW1wicGFyZW50LXNlY3Rpb25cIl19PlxuXHRcdFx0PGgzIGNsYXNzTmFtZT17VE9DU3R5bGVbXCJ0b2MtaGVhZGluZ1wiXX0+VGFibGUgT2YgQ29udGVudHM8L2gzPlxuXG5cdFx0XHQ8b2wgY2xhc3NOYW1lPXtUT0NTdHlsZVtcImxpbmtzLWNvbnRhaW5lclwiXX0+XG5cdFx0XHRcdHtYaGVhZGluZ01hcC5tYXAobGlua2FibGUgPT4ge1xuXHRcdFx0XHRcdHJldHVybiA8VE9DSXRlbSBsaW5rYWJsZT17bGlua2FibGV9IHNsdWc9e3NsdWd9IGtleT17bGlua2FibGUuaGVhZGluZ1RleHR9IC8+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9vbD5cblx0XHQ8L3NlY3Rpb24+XG5cdClcbn0iXSwic291cmNlUm9vdCI6IiJ9