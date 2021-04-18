webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BlogPost.jsx":
/*!*********************************!*\
  !*** ./components/BlogPost.jsx ***!
  \*********************************/
/*! exports provided: BlogPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPost", function() { return BlogPost; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _HeadBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeadBase */ "./components/HeadBase.jsx");
/* harmony import */ var _ViewCounter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ViewCounter */ "./components/ViewCounter.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global */ "./global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_other__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/other */ "./helpers/other.js");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/post.module.css */ "./styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "/mnt/c/Projects/blog/components/BlogPost.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var PRISM_THEME_URL = "https://unpkg.com/prismjs@1.23.0/themes/prism-twilight.css";
var BlogPost = function BlogPost(props) {
  _s();

  var meta = props.meta,
      children = props.children;
  var title = meta.title,
      description = meta.description,
      slug = meta.slug,
      tags = meta.tags,
      estReadTime = meta.estReadTime,
      dateCreated = meta.dateCreated;
  var postContentRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
  /**
   * Make the headings linkable using #heading-content
   */

  var createLinkables = function createLinkables() {
    if (!postContentRef.current) return;
    var LINKABLE_ELEMENTS = ["h1", "h2", "h3", "h4", "h5", "h6"];
    var linkablesRef = [];

    for (var _i2 = 0, _LINKABLE_ELEMENTS = LINKABLE_ELEMENTS; _i2 < _LINKABLE_ELEMENTS.length; _i2++) {
      var L = _LINKABLE_ELEMENTS[_i2];
      var availableLinkables = Array.from(postContentRef.current.querySelectorAll(L)).filter(function (el) {
        return !el.classList.contains("linkable");
      });
      linkablesRef.push.apply(linkablesRef, Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(availableLinkables));
    }

    var _loop = function _loop(_i) {
      /** @type {HTMLElement} */
      var linkableElement = linkablesRef[_i];
      var elementId = linkableElement.innerText.replaceAll(" ", "-").toLowerCase();
      linkableElement.classList.add('linkable');
      linkableElement.id = elementId;
      var a = document.createElement("a");
      a.classList.add("heading-link", "reset");
      a.href = "#".concat(elementId);
      a.innerHTML = "#";

      a.onclick = function () {
        navigator.clipboard.writeText(a.href).err(function (error) {
          console.log(error);
        });
      };

      linkableElement.prepend(a);
    };

    for (var _i = 0; _i < linkablesRef.length; _i++) {
      _loop(_i);
    }
  };
  /**
   * Find the external links and make them open in a new tab.
   */


  var makeLinksExternal = function makeLinksExternal() {
    var aTags = Array.from(document.querySelectorAll('a')).filter(function (aTag) {
      return new URL(aTag.href).origin !== window.location.origin;
    });

    var _iterator = _createForOfIteratorHelper(aTags),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var t = _step.value;
        t.target = '_blank';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var generateShareLinks = function generateShareLinks() {
    var wantFull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var author = _global__WEBPACK_IMPORTED_MODULE_8__["SITE_CONSTANTS"].author;
    var postLink = "";

    if (wantFull) {
      postLink = window.location.href.split("#")[0];
    }

    return [{
      name: "Twitter",
      url: "https://www.twitter.com/share?text=".concat(title, " by ").concat(author, "&url=").concat(postLink, "&via=").concat(author.slice(1))
    }, {
      name: "WhatsApp",
      url: "https://wa.me/?text=".concat(title, " by ").concat(author, ". Read at ").concat(postLink)
    }];
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    makeLinksExternal();
    createLinkables();
    var shareLinks = generateShareLinks(true);
    var linksContainer = document.getElementById("post-share-links");

    var _iterator2 = _createForOfIteratorHelper(linksContainer.children),
        _step2;

    try {
      var _loop2 = function _loop2() {
        var child = _step2.value;
        child.href = shareLinks.find(function (link) {
          return link.name === child.title;
        }).url;
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeadBase__WEBPACK_IMPORTED_MODULE_5__["HeadBase"], {
      title: "".concat(title, " - ").concat(_global__WEBPACK_IMPORTED_MODULE_8__["SITE_CONSTANTS"].title),
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        defer: true,
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
        integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: PRISM_THEME_URL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_4__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "post-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--title"],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--head"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--time"],
            children: _helpers_other__WEBPACK_IMPORTED_MODULE_9__["NormalDateFormat"].format(dateCreated)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            gap: 6
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [estReadTime, " min read"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: postContentRef,
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "post-share-links",
          children: generateShareLinks(false).map(function (link) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "reset",
              title: link.name,
              href: link.url,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-".concat(link.name.toLowerCase())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(BlogPost, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = BlogPost;

var _c;

$RefreshReg$(_c, "BlogPost");

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

/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJwb3N0Q29udGVudFJlZiIsImNyZWF0ZVJlZiIsImNyZWF0ZUxpbmthYmxlcyIsImN1cnJlbnQiLCJMSU5LQUJMRV9FTEVNRU5UUyIsImxpbmthYmxlc1JlZiIsIkwiLCJhdmFpbGFibGVMaW5rYWJsZXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInB1c2giLCJfaSIsImxpbmthYmxlRWxlbWVudCIsImVsZW1lbnRJZCIsImlubmVyVGV4dCIsInJlcGxhY2VBbGwiLCJ0b0xvd2VyQ2FzZSIsImFkZCIsImlkIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZXJyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJlcGVuZCIsImxlbmd0aCIsIm1ha2VMaW5rc0V4dGVybmFsIiwiYVRhZ3MiLCJhVGFnIiwiVVJMIiwib3JpZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJ0IiwidGFyZ2V0IiwiZ2VuZXJhdGVTaGFyZUxpbmtzIiwid2FudEZ1bGwiLCJhdXRob3IiLCJTSVRFX0NPTlNUQU5UUyIsInBvc3RMaW5rIiwic3BsaXQiLCJuYW1lIiwidXJsIiwic2xpY2UiLCJ1c2VFZmZlY3QiLCJzaGFyZUxpbmtzIiwibGlua3NDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkIiwiZmluZCIsImxpbmsiLCJzdHlsZXMiLCJOb3JtYWxE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LENBRmxCO0FBQUEsK0JBSUM7QUFBQSxvQkFDRXZFO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkQsZUFnQ0M7QUFBSyxpQkFBUyxFQUFFdUUsK0RBQU0sQ0FBQyxxQkFBRCxDQUF0QjtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBR0M7QUFBSyxZQUFFLEVBQUMsa0JBQVI7QUFBQSxvQkFDRWhCLGtCQUFrQixDQUFDLEtBQUQsQ0FBbEIsQ0FBMEJtQixHQUExQixDQUE4QixVQUFBSixJQUFJLEVBQUk7QUFDdEMsZ0NBQU87QUFBbUIsdUJBQVMsRUFBQyxPQUE3QjtBQUFxQyxtQkFBSyxFQUFFQSxJQUFJLENBQUNULElBQWpEO0FBQXVELGtCQUFJLEVBQUVTLElBQUksQ0FBQ1IsR0FBbEU7QUFBQSxxQ0FDTjtBQUFHLHlCQUFTLG1CQUFZUSxJQUFJLENBQUNULElBQUwsQ0FBVWpDLFdBQVYsRUFBWjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxlQUFRMEMsSUFBSSxDQUFDVCxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFHQSxXQUpBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkQsZUE0REMscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVERDtBQUFBLGtCQUREO0FBaUVBLENBNUpNOztHQUFNaEUsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ODFiODQ5MmMyNTAxNjg3NzUxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjcmVhdGVSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IE5hdiB9IGZyb20gXCIuL05hdlwiXG5pbXBvcnQgeyBIZWFkQmFzZSB9IGZyb20gXCIuL0hlYWRCYXNlXCJcbmltcG9ydCB7IFZpZXdDb3VudGVyIH0gZnJvbSBcIi4vVmlld0NvdW50ZXJcIlxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCJcbmltcG9ydCB7IFNJVEVfQ09OU1RBTlRTIH0gZnJvbSBcIi4uL2dsb2JhbFwiXG5pbXBvcnQgeyBOb3JtYWxEYXRlRm9ybWF0IH0gZnJvbSBcIi4uL2hlbHBlcnMvb3RoZXJcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcG9zdC5tb2R1bGUuY3NzXCJcblxuY29uc3QgUFJJU01fVEhFTUVfVVJMID0gXCJodHRwczovL3VucGtnLmNvbS9wcmlzbWpzQDEuMjMuMC90aGVtZXMvcHJpc20tdHdpbGlnaHQuY3NzXCJcblxuZXhwb3J0IGNvbnN0IEJsb2dQb3N0ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbWV0YSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2x1ZywgdGFncywgZXN0UmVhZFRpbWUsIGRhdGVDcmVhdGVkIH0gPSBtZXRhO1xuXG5cdGNvbnN0IHBvc3RDb250ZW50UmVmID0gY3JlYXRlUmVmKClcblxuXHQvKipcblx0ICogTWFrZSB0aGUgaGVhZGluZ3MgbGlua2FibGUgdXNpbmcgI2hlYWRpbmctY29udGVudFxuXHQgKi9cblx0Y29uc3QgY3JlYXRlTGlua2FibGVzID0gKCkgPT4ge1xuXHRcdGlmICghcG9zdENvbnRlbnRSZWYuY3VycmVudCkgcmV0dXJuXG5cblx0XHRjb25zdCBMSU5LQUJMRV9FTEVNRU5UUyA9IFtcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiXVxuXG5cdFx0Y29uc3QgbGlua2FibGVzUmVmID0gW11cblx0XHRmb3IgKGxldCBMIG9mIExJTktBQkxFX0VMRU1FTlRTKSB7XG5cdFx0XHRjb25zdCBhdmFpbGFibGVMaW5rYWJsZXMgPSBBcnJheS5mcm9tKHBvc3RDb250ZW50UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbChMKSkuZmlsdGVyKGVsID0+IHtcblx0XHRcdFx0cmV0dXJuICFlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW5rYWJsZVwiKVxuXHRcdFx0fSlcblx0XHRcdGxpbmthYmxlc1JlZi5wdXNoKC4uLmF2YWlsYWJsZUxpbmthYmxlcylcblx0XHR9XG5cblx0XHRmb3IgKGxldCBfaSA9IDA7IF9pIDwgbGlua2FibGVzUmVmLmxlbmd0aDsgX2krKykge1xuXHRcdFx0LyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cblx0XHRcdGxldCBsaW5rYWJsZUVsZW1lbnQgPSBsaW5rYWJsZXNSZWZbX2ldXG5cdFx0XHRjb25zdCBlbGVtZW50SWQgPSBsaW5rYWJsZUVsZW1lbnQuaW5uZXJUZXh0LnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpXG5cblx0XHRcdGxpbmthYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaW5rYWJsZScpXG5cdFx0XHRsaW5rYWJsZUVsZW1lbnQuaWQgPSBlbGVtZW50SWRcblxuXHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG5cdFx0XHRhLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nLWxpbmtcIiwgXCJyZXNldFwiKVxuXHRcdFx0YS5ocmVmID0gYCMke2VsZW1lbnRJZH1gXG5cdFx0XHRhLmlubmVySFRNTCA9IFwiI1wiXG5cblx0XHRcdGEub25jbGljayA9ICgpID0+IHtcblx0XHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYS5ocmVmKS5lcnIoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHRsaW5rYWJsZUVsZW1lbnQucHJlcGVuZChhKVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIHRoZSBleHRlcm5hbCBsaW5rcyBhbmQgbWFrZSB0aGVtIG9wZW4gaW4gYSBuZXcgdGFiLlxuXHQgKi9cblx0Y29uc3QgbWFrZUxpbmtzRXh0ZXJuYWwgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYVRhZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSlcblx0XHRcdC5maWx0ZXIoYVRhZyA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgVVJMKGFUYWcuaHJlZikub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG5cdFx0XHR9KVxuXG5cdFx0Zm9yIChsZXQgdCBvZiBhVGFncykge1xuXHRcdFx0dC50YXJnZXQgPSAnX2JsYW5rJ1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdlbmVyYXRlU2hhcmVMaW5rcyA9ICh3YW50RnVsbCA9IGZhbHNlKSA9PiB7XG5cdFx0Y29uc3QgYXV0aG9yID0gU0lURV9DT05TVEFOVFMuYXV0aG9yXG5cblx0XHRsZXQgcG9zdExpbmsgPSBcIlwiO1xuXHRcdGlmICh3YW50RnVsbCkge1xuXHRcdFx0cG9zdExpbmsgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1cblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlR3aXR0ZXJcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vc2hhcmU/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0mdXJsPSR7cG9zdExpbmt9JnZpYT0ke2F1dGhvci5zbGljZSgxKX1gXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIldoYXRzQXBwXCIsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vd2EubWUvP3RleHQ9JHt0aXRsZX0gYnkgJHthdXRob3J9LiBSZWFkIGF0ICR7cG9zdExpbmt9YFxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bWFrZUxpbmtzRXh0ZXJuYWwoKVxuXHRcdGNyZWF0ZUxpbmthYmxlcygpXG5cblx0XHRjb25zdCBzaGFyZUxpbmtzID0gZ2VuZXJhdGVTaGFyZUxpbmtzKHRydWUpXG5cdFx0Y29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3Qtc2hhcmUtbGlua3NcIilcblxuXHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmtzQ29udGFpbmVyLmNoaWxkcmVuKSB7XG5cdFx0XHRjaGlsZC5ocmVmID0gc2hhcmVMaW5rcy5maW5kKGxpbmsgPT4gbGluay5uYW1lID09PSBjaGlsZC50aXRsZSkudXJsXG5cdFx0fVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YCR7dGl0bGV9IC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHR7LyogRm9yIGljb25zICovfVxuXHRcdFx0XHQ8bGluayBkZWZlclxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMy9jc3MvYWxsLmNzc1wiXG5cdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LVNaWHhYNHdoSjc5L2dFcndjT1lmK3pXTGVKZFkvcXB1cUM0Y0FhOXJPR1VzdFBvbXRxcHVOV1Q5d2RQRW4yZmtcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG5cblx0XHRcdFx0ey8qIEZwciBzeW50YXggaGlnaGxpZ2h0aW5nICovfVxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17UFJJU01fVEhFTUVfVVJMfSAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8TmF2IC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aXRsZVwiXX0+e3RpdGxlfTwvaDI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWhlYWRcIl19PlxuXHRcdFx0XHRcdDxkaXY+XG5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tdGltZVwiXX0+XG5cdFx0XHRcdFx0XHRcdHtOb3JtYWxEYXRlRm9ybWF0LmZvcm1hdChkYXRlQ3JlYXRlZCl9XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt0YWdzLm1hcCh0YWcgPT4gPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZ1wiPnt0YWd9PC9zcGFuPil9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDYgfX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57ZXN0UmVhZFRpbWV9IG1pbiByZWFkPC9zcGFuPlxuXHRcdFx0XHRcdFx0ey8qIDxWaWV3Q291bnRlciBzbHVnPXtzbHVnfSAvPiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0cmVmPXtwb3N0Q29udGVudFJlZn1cblx0XHRcdFx0XHRjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWNvbnRlbnRcIl19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiBUT0RPIGFkZCBhIFwiZ2l2ZSB5b3VyIGZlZWRiYWNrXCIgc2VjdGlvbiAqL31cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tc2hhcmUtc2VjdGlvblwiXX0+XG5cdFx0XHRcdFx0PHNwYW4+U2hhcmUgdGhpcyBhcnRpY2xlIG9uPC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdiBpZD1cInBvc3Qtc2hhcmUtbGlua3NcIj5cblx0XHRcdFx0XHRcdHtnZW5lcmF0ZVNoYXJlTGlua3MoZmFsc2UpLm1hcChsaW5rID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxhIGtleT17bGluay5uYW1lfSBjbGFzc05hbWU9XCJyZXNldFwiIHRpdGxlPXtsaW5rLm5hbWV9IGhyZWY9e2xpbmsudXJsfT5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtsaW5rLm5hbWUudG9Mb3dlckNhc2UoKX1gfT48L2k+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvPlxuXHQpXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9