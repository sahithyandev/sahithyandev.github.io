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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _HeadBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeadBase */ "./components/HeadBase.jsx");
/* harmony import */ var _ViewCounter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewCounter */ "./components/ViewCounter.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global */ "./global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_other__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/other */ "./helpers/other.js");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/post.module.css */ "./styles/post.module.css");
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_11__);




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
    var author = _global__WEBPACK_IMPORTED_MODULE_9__["SITE_CONSTANTS"].author;
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeadBase__WEBPACK_IMPORTED_MODULE_6__["HeadBase"], {
      title: "".concat(title, " - ").concat(_global__WEBPACK_IMPORTED_MODULE_9__["SITE_CONSTANTS"].title),
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
        lineNumber: 113,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: PRISM_THEME_URL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_5__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "post-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_11___default.a["post--title"],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_11___default.a["post--head"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_11___default.a["post--time"],
            children: _helpers_other__WEBPACK_IMPORTED_MODULE_10__["NormalDateFormat"].format(dateCreated)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
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
            lineNumber: 138,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: postContentRef,
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_11___default.a["post--content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["MDXProvider"], {
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, _this)
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
        className: _styles_post_module_css__WEBPACK_IMPORTED_MODULE_11___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
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
                lineNumber: 163,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_8__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJwb3N0Q29udGVudFJlZiIsImNyZWF0ZVJlZiIsImNyZWF0ZUxpbmthYmxlcyIsImN1cnJlbnQiLCJMSU5LQUJMRV9FTEVNRU5UUyIsImxpbmthYmxlc1JlZiIsIkwiLCJhdmFpbGFibGVMaW5rYWJsZXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyIiwiZWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInB1c2giLCJfaSIsImxpbmthYmxlRWxlbWVudCIsImVsZW1lbnRJZCIsImlubmVyVGV4dCIsInJlcGxhY2VBbGwiLCJ0b0xvd2VyQ2FzZSIsImFkZCIsImlkIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJpbm5lckhUTUwiLCJvbmNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZXJyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJlcGVuZCIsImxlbmd0aCIsIm1ha2VMaW5rc0V4dGVybmFsIiwiYVRhZ3MiLCJhVGFnIiwiVVJMIiwib3JpZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJ0IiwidGFyZ2V0IiwiZ2VuZXJhdGVTaGFyZUxpbmtzIiwid2FudEZ1bGwiLCJhdXRob3IiLCJTSVRFX0NPTlNUQU5UUyIsInBvc3RMaW5rIiwic3BsaXQiLCJuYW1lIiwidXJsIiwic2xpY2UiLCJ1c2VFZmZlY3QiLCJzaGFyZUxpbmtzIiwibGlua3NDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkIiwiZmluZCIsImxpbmsiLCJzdHlsZXMiLCJOb3JtYWxE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QyxlQUFELENBRmxCO0FBQUEsK0JBSUM7QUFBQSxpQ0FDQyxxRUFBQyx5REFBRDtBQUFBLHNCQUNFdkU7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkQsZUFrQ0M7QUFBSyxpQkFBUyxFQUFFdUUsK0RBQU0sQ0FBQyxxQkFBRCxDQUF0QjtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBR0M7QUFBSyxZQUFFLEVBQUMsa0JBQVI7QUFBQSxvQkFDRWhCLGtCQUFrQixDQUFDLEtBQUQsQ0FBbEIsQ0FBMEJtQixHQUExQixDQUE4QixVQUFBSixJQUFJLEVBQUk7QUFDdEMsZ0NBQU87QUFBbUIsdUJBQVMsRUFBQyxPQUE3QjtBQUFxQyxtQkFBSyxFQUFFQSxJQUFJLENBQUNULElBQWpEO0FBQXVELGtCQUFJLEVBQUVTLElBQUksQ0FBQ1IsR0FBbEU7QUFBQSxxQ0FDTjtBQUFHLHlCQUFTLG1CQUFZUSxJQUFJLENBQUNULElBQUwsQ0FBVWpDLFdBQVYsRUFBWjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxlQUFRMEMsSUFBSSxDQUFDVCxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFHQSxXQUpBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkQsZUE4REMscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlERDtBQUFBLGtCQUREO0FBbUVBLENBOUpNOztHQUFNaEUsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjNkYjA0N2NlYThkODBlMjQ4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjcmVhdGVSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gXCJAbWR4LWpzL3JlYWN0XCJcblxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4vTmF2XCJcbmltcG9ydCB7IEhlYWRCYXNlIH0gZnJvbSBcIi4vSGVhZEJhc2VcIlxuaW1wb3J0IHsgVmlld0NvdW50ZXIgfSBmcm9tIFwiLi9WaWV3Q291bnRlclwiXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIlxuaW1wb3J0IHsgU0lURV9DT05TVEFOVFMgfSBmcm9tIFwiLi4vZ2xvYmFsXCJcbmltcG9ydCB7IE5vcm1hbERhdGVGb3JtYXQgfSBmcm9tIFwiLi4vaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0Lm1vZHVsZS5jc3NcIlxuXG5jb25zdCBQUklTTV9USEVNRV9VUkwgPSBcImh0dHBzOi8vdW5wa2cuY29tL3ByaXNtanNAMS4yMy4wL3RoZW1lcy9wcmlzbS10d2lsaWdodC5jc3NcIlxuXG5leHBvcnQgY29uc3QgQmxvZ1Bvc3QgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBtZXRhLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzbHVnLCB0YWdzLCBlc3RSZWFkVGltZSwgZGF0ZUNyZWF0ZWQgfSA9IG1ldGE7XG5cblx0Y29uc3QgcG9zdENvbnRlbnRSZWYgPSBjcmVhdGVSZWYoKVxuXG5cdC8qKlxuXHQgKiBNYWtlIHRoZSBoZWFkaW5ncyBsaW5rYWJsZSB1c2luZyAjaGVhZGluZy1jb250ZW50XG5cdCAqL1xuXHRjb25zdCBjcmVhdGVMaW5rYWJsZXMgPSAoKSA9PiB7XG5cdFx0aWYgKCFwb3N0Q29udGVudFJlZi5jdXJyZW50KSByZXR1cm5cblxuXHRcdGNvbnN0IExJTktBQkxFX0VMRU1FTlRTID0gW1wiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCJdXG5cblx0XHRjb25zdCBsaW5rYWJsZXNSZWYgPSBbXVxuXHRcdGZvciAobGV0IEwgb2YgTElOS0FCTEVfRUxFTUVOVFMpIHtcblx0XHRcdGNvbnN0IGF2YWlsYWJsZUxpbmthYmxlcyA9IEFycmF5LmZyb20ocG9zdENvbnRlbnRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKEwpKS5maWx0ZXIoZWwgPT4ge1xuXHRcdFx0XHRyZXR1cm4gIWVsLmNsYXNzTGlzdC5jb250YWlucyhcImxpbmthYmxlXCIpXG5cdFx0XHR9KVxuXHRcdFx0bGlua2FibGVzUmVmLnB1c2goLi4uYXZhaWxhYmxlTGlua2FibGVzKVxuXHRcdH1cblxuXHRcdGZvciAobGV0IF9pID0gMDsgX2kgPCBsaW5rYWJsZXNSZWYubGVuZ3RoOyBfaSsrKSB7XG5cdFx0XHQvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuXHRcdFx0bGV0IGxpbmthYmxlRWxlbWVudCA9IGxpbmthYmxlc1JlZltfaV1cblx0XHRcdGNvbnN0IGVsZW1lbnRJZCA9IGxpbmthYmxlRWxlbWVudC5pbm5lclRleHQucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpLnRvTG93ZXJDYXNlKClcblxuXHRcdFx0bGlua2FibGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmthYmxlJylcblx0XHRcdGxpbmthYmxlRWxlbWVudC5pZCA9IGVsZW1lbnRJZFxuXG5cdFx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcblx0XHRcdGEuY2xhc3NMaXN0LmFkZChcImhlYWRpbmctbGlua1wiLCBcInJlc2V0XCIpXG5cdFx0XHRhLmhyZWYgPSBgIyR7ZWxlbWVudElkfWBcblx0XHRcdGEuaW5uZXJIVE1MID0gXCIjXCJcblxuXHRcdFx0YS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhLmhyZWYpLmVycihlcnJvciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cblx0XHRcdGxpbmthYmxlRWxlbWVudC5wcmVwZW5kKGEpXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmQgdGhlIGV4dGVybmFsIGxpbmtzIGFuZCBtYWtlIHRoZW0gb3BlbiBpbiBhIG5ldyB0YWIuXG5cdCAqL1xuXHRjb25zdCBtYWtlTGlua3NFeHRlcm5hbCA9ICgpID0+IHtcblx0XHRjb25zdCBhVGFncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpKVxuXHRcdFx0LmZpbHRlcihhVGFnID0+IHtcblx0XHRcdFx0cmV0dXJuIG5ldyBVUkwoYVRhZy5ocmVmKS5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cblx0XHRcdH0pXG5cblx0XHRmb3IgKGxldCB0IG9mIGFUYWdzKSB7XG5cdFx0XHR0LnRhcmdldCA9ICdfYmxhbmsnXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgZ2VuZXJhdGVTaGFyZUxpbmtzID0gKHdhbnRGdWxsID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBhdXRob3IgPSBTSVRFX0NPTlNUQU5UUy5hdXRob3JcblxuXHRcdGxldCBwb3N0TGluayA9IFwiXCI7XG5cdFx0aWYgKHdhbnRGdWxsKSB7XG5cdFx0XHRwb3N0TGluayA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXVxuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiVHdpdHRlclwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3d3dy50d2l0dGVyLmNvbS9zaGFyZT90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfSZ1cmw9JHtwb3N0TGlua30mdmlhPSR7YXV0aG9yLnNsaWNlKDEpfWBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiV2hhdHNBcHBcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93YS5tZS8/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0uIFJlYWQgYXQgJHtwb3N0TGlua31gXG5cdFx0XHR9XG5cdFx0XVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRtYWtlTGlua3NFeHRlcm5hbCgpXG5cdFx0Y3JlYXRlTGlua2FibGVzKClcblxuXHRcdGNvbnN0IHNoYXJlTGlua3MgPSBnZW5lcmF0ZVNoYXJlTGlua3ModHJ1ZSlcblx0XHRjb25zdCBsaW5rc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdC1zaGFyZS1saW5rc1wiKVxuXG5cdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGlua3NDb250YWluZXIuY2hpbGRyZW4pIHtcblx0XHRcdGNoaWxkLmhyZWYgPSBzaGFyZUxpbmtzLmZpbmQobGluayA9PiBsaW5rLm5hbWUgPT09IGNoaWxkLnRpdGxlKS51cmxcblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRCYXNlIHRpdGxlPXtgJHt0aXRsZX0gLSAke1NJVEVfQ09OU1RBTlRTLnRpdGxlfWB9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cblxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdHsvKiBGb3IgaWNvbnMgKi99XG5cdFx0XHRcdDxsaW5rIGRlZmVyXG5cdFx0XHRcdFx0cmVsPVwic3R5bGVzaGVldFwiXG5cdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xNS4zL2Nzcy9hbGwuY3NzXCJcblx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtU1pYeFg0d2hKNzkvZ0Vyd2NPWWYreldMZUpkWS9xcHVxQzRjQWE5ck9HVXN0UG9tdHFwdU5XVDl3ZFBFbjJma1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblxuXHRcdFx0XHR7LyogRnByIHN5bnRheCBoaWdobGlnaHRpbmcgKi99XG5cdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPXtQUklTTV9USEVNRV9VUkx9IC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxOYXYgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxoMiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLXRpdGxlXCJdfT57dGl0bGV9PC9oMj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0taGVhZFwiXX0+XG5cdFx0XHRcdFx0PGRpdj5cblxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aW1lXCJdfT5cblx0XHRcdFx0XHRcdFx0e05vcm1hbERhdGVGb3JtYXQuZm9ybWF0KGRhdGVDcmVhdGVkKX1cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFncy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RhZ3MubWFwKHRhZyA9PiA8c3BhbiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwidGFnXCI+e3RhZ308L3NwYW4+KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNiB9fT5cblx0XHRcdFx0XHRcdDxzcGFuPntlc3RSZWFkVGltZX0gbWluIHJlYWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHR7LyogPFZpZXdDb3VudGVyIHNsdWc9e3NsdWd9IC8+ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRyZWY9e3Bvc3RDb250ZW50UmVmfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tY29udGVudFwiXX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxhcnRpY2xlPlxuXHRcdFx0XHRcdFx0PE1EWFByb3ZpZGVyPlxuXHRcdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0XHQ8L01EWFByb3ZpZGVyPlxuXHRcdFx0XHRcdDwvYXJ0aWNsZT5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIFRPRE8gYWRkIGEgXCJnaXZlIHlvdXIgZmVlZGJhY2tcIiBzZWN0aW9uICovfVxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1zaGFyZS1zZWN0aW9uXCJdfT5cblx0XHRcdFx0XHQ8c3Bhbj5TaGFyZSB0aGlzIGFydGljbGUgb248L3NwYW4+XG5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwicG9zdC1zaGFyZS1saW5rc1wiPlxuXHRcdFx0XHRcdFx0e2dlbmVyYXRlU2hhcmVMaW5rcyhmYWxzZSkubWFwKGxpbmsgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gPGEga2V5PXtsaW5rLm5hbWV9IGNsYXNzTmFtZT1cInJlc2V0XCIgdGl0bGU9e2xpbmsubmFtZX0gaHJlZj17bGluay51cmx9PlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke2xpbmsubmFtZS50b0xvd2VyQ2FzZSgpfWB9PjwvaT5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=