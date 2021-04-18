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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [estReadTime, " min read"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 7
          }, _this), "|", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ViewCounter__WEBPACK_IMPORTED_MODULE_6__["ViewCounter"], {
            slug: slug
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
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
          lineNumber: 148,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
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
                lineNumber: 161,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_7__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJwb3N0Q29udGVudFJlZiIsImNyZWF0ZVJlZiIsImNyZWF0ZUxpbmthYmxlcyIsImN1cnJlbnQiLCJMSU5LQUJMRV9FTEVNRU5UUyIsImxpbmthYmxlc1JlZiIsIkwiLCJhdmFpbGFibGVMaW5rYWJsZXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInB1c2giLCJfaSIsImxpbmthYmxlRWxlbWVudCIsImVsZW1lbnRJZCIsImlubmVyVGV4dCIsInJlcGxhY2VBbGwiLCJ0b0xvd2VyQ2FzZSIsImFkZCIsImlkIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZXJyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJlcGVuZCIsImxlbmd0aCIsIm1ha2VMaW5rc0V4dGVybmFsIiwiYVRhZ3MiLCJhVGFnIiwiVVJMIiwib3JpZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJ0IiwidGFyZ2V0IiwiZ2VuZXJhdGVTaGFyZUxpbmtzIiwid2FudEZ1bGwiLCJhdXRob3IiLCJTSVRFX0NPTlNUQU5UUyIsInBvc3RMaW5rIiwic3BsaXQiLCJuYW1lIiwidXJsIiwic2xpY2UiLCJ1c2VFZmZlY3QiLCJzaGFyZUxpbmtzIiwibGlua3NDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkIiwiZmluZCIsImxpbmsiLCJzdHlsZXMiLCJOb3JtYWxE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QUE7QUFBQSxlQUhELGVBc0JDO0FBQ0MsV0FBRyxFQUFFSSxjQUROO0FBRUMsaUJBQVMsRUFBRWdFLCtEQUFNLENBQUMsZUFBRCxDQUZsQjtBQUFBLCtCQUlDO0FBQUEsb0JBQ0V2RTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJELGVBaUNDO0FBQUssaUJBQVMsRUFBRXVFLCtEQUFNLENBQUMscUJBQUQsQ0FBdEI7QUFBQSxnQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUdDO0FBQUssWUFBRSxFQUFDLGtCQUFSO0FBQUEsb0JBQ0VoQixrQkFBa0IsQ0FBQyxLQUFELENBQWxCLENBQTBCbUIsR0FBMUIsQ0FBOEIsVUFBQUosSUFBSSxFQUFJO0FBQ3RDLGdDQUFPO0FBQW1CLHVCQUFTLEVBQUMsT0FBN0I7QUFBcUMsbUJBQUssRUFBRUEsSUFBSSxDQUFDVCxJQUFqRDtBQUF1RCxrQkFBSSxFQUFFUyxJQUFJLENBQUNSLEdBQWxFO0FBQUEscUNBQ047QUFBRyx5QkFBUyxtQkFBWVEsSUFBSSxDQUFDVCxJQUFMLENBQVVqQyxXQUFWLEVBQVo7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sZUFBUTBDLElBQUksQ0FBQ1QsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBR0EsV0FKQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZELGVBNkRDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3REQ7QUFBQSxrQkFERDtBQWtFQSxDQTdKTTs7R0FBTWhFLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2E2NDgwZTg0MGUxZjkxNWZmOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgY3JlYXRlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIlxuaW1wb3J0IHsgSGVhZEJhc2UgfSBmcm9tIFwiLi9IZWFkQmFzZVwiXG5pbXBvcnQgeyBWaWV3Q291bnRlciB9IGZyb20gXCIuL1ZpZXdDb3VudGVyXCJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgTm9ybWFsRGF0ZUZvcm1hdCB9IGZyb20gXCIuLi9oZWxwZXJzL290aGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3Bvc3QubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBSSVNNX1RIRU1FX1VSTCA9IFwiaHR0cHM6Ly91bnBrZy5jb20vcHJpc21qc0AxLjIzLjAvdGhlbWVzL3ByaXNtLXR3aWxpZ2h0LmNzc1wiXG5cbmV4cG9ydCBjb25zdCBCbG9nUG9zdCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG1ldGEsIGNoaWxkcmVuIH0gPSBwcm9wcztcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIHRhZ3MsIGVzdFJlYWRUaW1lLCBkYXRlQ3JlYXRlZCB9ID0gbWV0YTtcblxuXHRjb25zdCBwb3N0Q29udGVudFJlZiA9IGNyZWF0ZVJlZigpXG5cblx0LyoqXG5cdCAqIE1ha2UgdGhlIGhlYWRpbmdzIGxpbmthYmxlIHVzaW5nICNoZWFkaW5nLWNvbnRlbnRcblx0ICovXG5cdGNvbnN0IGNyZWF0ZUxpbmthYmxlcyA9ICgpID0+IHtcblx0XHRpZiAoIXBvc3RDb250ZW50UmVmLmN1cnJlbnQpIHJldHVyblxuXG5cdFx0Y29uc3QgTElOS0FCTEVfRUxFTUVOVFMgPSBbXCJoMVwiLCBcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIl1cblxuXHRcdGNvbnN0IGxpbmthYmxlc1JlZiA9IFtdXG5cdFx0Zm9yIChsZXQgTCBvZiBMSU5LQUJMRV9FTEVNRU5UUykge1xuXHRcdFx0Y29uc3QgYXZhaWxhYmxlTGlua2FibGVzID0gQXJyYXkuZnJvbShwb3N0Q29udGVudFJlZi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoTCkpLmZpbHRlcihlbCA9PiB7XG5cdFx0XHRcdHJldHVybiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlua2FibGVcIilcblx0XHRcdH0pXG5cdFx0XHRsaW5rYWJsZXNSZWYucHVzaCguLi5hdmFpbGFibGVMaW5rYWJsZXMpXG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgX2kgPSAwOyBfaSA8IGxpbmthYmxlc1JlZi5sZW5ndGg7IF9pKyspIHtcblx0XHRcdC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG5cdFx0XHRsZXQgbGlua2FibGVFbGVtZW50ID0gbGlua2FibGVzUmVmW19pXVxuXHRcdFx0Y29uc3QgZWxlbWVudElkID0gbGlua2FibGVFbGVtZW50LmlubmVyVGV4dC5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKVxuXG5cdFx0XHRsaW5rYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlua2FibGUnKVxuXHRcdFx0bGlua2FibGVFbGVtZW50LmlkID0gZWxlbWVudElkXG5cblx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuXHRcdFx0YS5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZy1saW5rXCIsIFwicmVzZXRcIilcblx0XHRcdGEuaHJlZiA9IGAjJHtlbGVtZW50SWR9YFxuXHRcdFx0YS5pbm5lckhUTUwgPSBcIiNcIlxuXG5cdFx0XHRhLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRcdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGEuaHJlZikuZXJyKGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcilcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0bGlua2FibGVFbGVtZW50LnByZXBlbmQoYSlcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogRmluZCB0aGUgZXh0ZXJuYWwgbGlua3MgYW5kIG1ha2UgdGhlbSBvcGVuIGluIGEgbmV3IHRhYi5cblx0ICovXG5cdGNvbnN0IG1ha2VMaW5rc0V4dGVybmFsID0gKCkgPT4ge1xuXHRcdGNvbnN0IGFUYWdzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJykpXG5cdFx0XHQuZmlsdGVyKGFUYWcgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFVSTChhVGFnLmhyZWYpLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpblxuXHRcdFx0fSlcblxuXHRcdGZvciAobGV0IHQgb2YgYVRhZ3MpIHtcblx0XHRcdHQudGFyZ2V0ID0gJ19ibGFuaydcblx0XHR9XG5cdH1cblxuXHRjb25zdCBnZW5lcmF0ZVNoYXJlTGlua3MgPSAod2FudEZ1bGwgPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IGF1dGhvciA9IFNJVEVfQ09OU1RBTlRTLmF1dGhvclxuXG5cdFx0bGV0IHBvc3RMaW5rID0gXCJcIjtcblx0XHRpZiAod2FudEZ1bGwpIHtcblx0XHRcdHBvc3RMaW5rID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdXG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJUd2l0dGVyXCIsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL3NoYXJlP3RleHQ9JHt0aXRsZX0gYnkgJHthdXRob3J9JnVybD0ke3Bvc3RMaW5rfSZ2aWE9JHthdXRob3Iuc2xpY2UoMSl9YFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJXaGF0c0FwcFwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3dhLm1lLz90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfS4gUmVhZCBhdCAke3Bvc3RMaW5rfWBcblx0XHRcdH1cblx0XHRdXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdG1ha2VMaW5rc0V4dGVybmFsKClcblx0XHRjcmVhdGVMaW5rYWJsZXMoKVxuXG5cdFx0Y29uc3Qgc2hhcmVMaW5rcyA9IGdlbmVyYXRlU2hhcmVMaW5rcyh0cnVlKVxuXHRcdGNvbnN0IGxpbmtzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3N0LXNoYXJlLWxpbmtzXCIpXG5cblx0XHRmb3IgKGxldCBjaGlsZCBvZiBsaW5rc0NvbnRhaW5lci5jaGlsZHJlbikge1xuXHRcdFx0Y2hpbGQuaHJlZiA9IHNoYXJlTGlua3MuZmluZChsaW5rID0+IGxpbmsubmFtZSA9PT0gY2hpbGQudGl0bGUpLnVybFxuXHRcdH1cblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZEJhc2UgdGl0bGU9e2Ake3RpdGxlfSAtICR7U0lURV9DT05TVEFOVFMudGl0bGV9YH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuXG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0ey8qIEZvciBpY29ucyAqL31cblx0XHRcdFx0PGxpbmsgZGVmZXJcblx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjE1LjMvY3NzL2FsbC5jc3NcIlxuXHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1TWlh4WDR3aEo3OS9nRXJ3Y09ZZit6V0xlSmRZL3FwdXFDNGNBYTlyT0dVc3RQb210cXB1TldUOXdkUEVuMmZrXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxuXG5cdFx0XHRcdHsvKiBGcHIgc3ludGF4IGhpZ2hsaWdodGluZyAqL31cblx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e1BSSVNNX1RIRU1FX1VSTH0gLz5cblx0XHRcdDwvSGVhZD5cblxuXHRcdFx0PE5hdiAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwicG9zdC1jb250YWluZXJcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tdGl0bGVcIl19Pnt0aXRsZX08L2gyPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1oZWFkXCJdfT5cblx0XHRcdFx0XHQ8ZGl2PlxuXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpbWVcIl19PlxuXHRcdFx0XHRcdFx0XHR7Tm9ybWFsRGF0ZUZvcm1hdC5mb3JtYXQoZGF0ZUNyZWF0ZWQpfVxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0YWdzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHR7dGFncy5tYXAodGFnID0+IDxzcGFuIGtleT17dGFnfSBjbGFzc05hbWU9XCJ0YWdcIj57dGFnfTwvc3Bhbj4pfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA2IH19PlxuXHRcdFx0XHRcdFx0PHNwYW4+e2VzdFJlYWRUaW1lfSBtaW4gcmVhZDwvc3Bhbj5cblx0XHRcdFx0XHRcdHxcblx0XHRcdFx0XHRcdDxWaWV3Q291bnRlciBzbHVnPXtzbHVnfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRyZWY9e3Bvc3RDb250ZW50UmVmfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tY29udGVudFwiXX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIFRPRE8gYWRkIGEgXCJnaXZlIHlvdXIgZmVlZGJhY2tcIiBzZWN0aW9uICovfVxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1zaGFyZS1zZWN0aW9uXCJdfT5cblx0XHRcdFx0XHQ8c3Bhbj5TaGFyZSB0aGlzIGFydGljbGUgb248L3NwYW4+XG5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwicG9zdC1zaGFyZS1saW5rc1wiPlxuXHRcdFx0XHRcdFx0e2dlbmVyYXRlU2hhcmVMaW5rcyhmYWxzZSkubWFwKGxpbmsgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPGEga2V5PXtsaW5rLm5hbWV9IGNsYXNzTmFtZT1cInJlc2V0XCIgdGl0bGU9e2xpbmsubmFtZX0gaHJlZj17bGluay51cmx9PlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke2xpbmsubmFtZS50b0xvd2VyQ2FzZSgpfWB9PjwvaT5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=