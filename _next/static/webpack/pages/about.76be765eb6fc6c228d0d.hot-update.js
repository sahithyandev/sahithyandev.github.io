webpackHotUpdate_N_E("pages/about",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.jsx");
/* harmony import */ var _HeadBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeadBase */ "./components/HeadBase.jsx");
/* harmony import */ var _ViewCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ViewCounter */ "./components/ViewCounter.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.jsx");
/* harmony import */ var _MDXComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MDXComponents */ "./components/MDXComponents.jsx");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global */ "./global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_other__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/other */ "./helpers/other.js");
/* harmony import */ var _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/blog-post.module.css */ "./styles/blog-post.module.css");
/* harmony import */ var _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "/mnt/c/Projects/blog/components/BlogPost.jsx",
    _this = undefined,
    _s = $RefreshSig$();











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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      postLink = _useState[0],
      setPostLink = _useState[1];

  var generateShareLinks = function generateShareLinks() {
    var author = _global__WEBPACK_IMPORTED_MODULE_8__["SITE_CONSTANTS"].author;
    return [{
      name: "Twitter",
      url: "https://www.twitter.com/share?text=".concat(title, " by ").concat(author, "&url=").concat(postLink, "}")
    }, {
      name: "WhatsApp",
      url: "https://wa.me/?text=".concat(title, " by ").concat(author, ". Read at ").concat(postLink)
    }].map(function (_) {
      _.url = encodeURI(_.url);
      return _;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setPostLink(window.location.href);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeadBase__WEBPACK_IMPORTED_MODULE_4__["HeadBase"], {
      title: "".concat(title, " - ").concat(_global__WEBPACK_IMPORTED_MODULE_8__["SITE_CONSTANTS"].title),
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        defer: true,
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
        integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
        crossOrigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: PRISM_THEME_URL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "post-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--title"],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--head"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--time"],
          children: _helpers_other__WEBPACK_IMPORTED_MODULE_9__["NormalDateFormat"].format(dateCreated)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            gap: 4,
            flexDirection: 'column',
            alignItems: 'flex-end'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [estReadTime, " min read"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--bottom-bar"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MDXComponents__WEBPACK_IMPORTED_MODULE_7__["CustomLink"], {
          href: encodeURI("https://twitter.com/search?q=".concat(postLink)),
          className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--content-a"],
          children: "Discuss On Twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: generateShareLinks().map(function (link) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MDXComponents__WEBPACK_IMPORTED_MODULE_7__["CustomLink"], {
              href: link.url,
              title: link.name,
              className: "reset",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fab fa-".concat(link.name.toLowerCase())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(BlogPost, "xhqftjlkPcAH0jW739t4oNxumso=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJ1c2VTdGF0ZSIsInBvc3RMaW5rIiwic2V0UG9zdExpbmsiLCJnZW5lcmF0ZVNoYXJlTGlua3MiLCJhdXRob3IiLCJTSVRFX0NPTlNUQU5UUyIsIm5hbWUiLCJ1cmwiLCJtYXAiLCJfIiwiZW5jb2RlVVJJIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsImRpc3BsYXkiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInRhZyIsImxpbmsiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLGVBQWUsR0FBRyw0REFBeEI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUMxQkMsSUFEMEIsR0FDUEQsS0FETyxDQUMxQkMsSUFEMEI7QUFBQSxNQUNwQkMsUUFEb0IsR0FDUEYsS0FETyxDQUNwQkUsUUFEb0I7QUFBQSxNQUUxQkMsS0FGMEIsR0FFbUNGLElBRm5DLENBRTFCRSxLQUYwQjtBQUFBLE1BRW5CQyxXQUZtQixHQUVtQ0gsSUFGbkMsQ0FFbkJHLFdBRm1CO0FBQUEsTUFFTkMsSUFGTSxHQUVtQ0osSUFGbkMsQ0FFTkksSUFGTTtBQUFBLE1BRUFDLElBRkEsR0FFbUNMLElBRm5DLENBRUFLLElBRkE7QUFBQSxN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QUFBQSxhQXpDRCxlQTZEQyxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0REO0FBQUEsa0JBREQ7QUFrRUEsQ0E5Rk07O0dBQU1oQixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0Ljc2YmU3NjVlYjZmYzZjMjI4ZDBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9OYXZcIlxuaW1wb3J0IHsgSGVhZEJhc2UgfSBmcm9tIFwiLi9IZWFkQmFzZVwiXG5pbXBvcnQgeyBWaWV3Q291bnRlciB9IGZyb20gXCIuL1ZpZXdDb3VudGVyXCJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiXG5pbXBvcnQgeyBDdXN0b21MaW5rIH0gZnJvbSBcIi4vTURYQ29tcG9uZW50c1wiXG5pbXBvcnQgeyBTSVRFX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9nbG9iYWxcIlxuaW1wb3J0IHsgTm9ybWFsRGF0ZUZvcm1hdCB9IGZyb20gXCJAL2hlbHBlcnMvb3RoZXJcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9ibG9nLXBvc3QubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFBSSVNNX1RIRU1FX1VSTCA9IFwiaHR0cHM6Ly91bnBrZy5jb20vcHJpc21qc0AxLjIzLjAvdGhlbWVzL3ByaXNtLXR3aWxpZ2h0LmNzc1wiXG5cbmV4cG9ydCBjb25zdCBCbG9nUG9zdCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG1ldGEsIGNoaWxkcmVuIH0gPSBwcm9wcztcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIHRhZ3MsIGVzdFJlYWRUaW1lLCBkYXRlQ3JlYXRlZCB9ID0gbWV0YTtcblx0Y29uc3QgW3Bvc3RMaW5rLCBzZXRQb3N0TGlua10gPSB1c2VTdGF0ZShcIlwiKVxuXG5cdGNvbnN0IGdlbmVyYXRlU2hhcmVMaW5rcyA9ICgpID0+IHtcblx0XHRjb25zdCBhdXRob3IgPSBTSVRFX0NPTlNUQU5UUy5hdXRob3JcblxuXHRcdHJldHVybiBbXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWU6IFwiVHdpdHRlclwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3d3dy50d2l0dGVyLmNvbS9zaGFyZT90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfSZ1cmw9JHtwb3N0TGlua319YFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogXCJXaGF0c0FwcFwiLFxuXHRcdFx0XHR1cmw6IGBodHRwczovL3dhLm1lLz90ZXh0PSR7dGl0bGV9IGJ5ICR7YXV0aG9yfS4gUmVhZCBhdCAke3Bvc3RMaW5rfWBcblx0XHRcdH1cblx0XHRdLm1hcChfID0+IHtcblx0XHRcdF8udXJsID0gZW5jb2RlVVJJKF8udXJsKVxuXG5cdFx0XHRyZXR1cm4gX1xuXHRcdH0pXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFBvc3RMaW5rKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkQmFzZSB0aXRsZT17YCR7dGl0bGV9IC0gJHtTSVRFX0NPTlNUQU5UUy50aXRsZX1gfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHR7LyogRm9yIGljb25zICovfVxuXHRcdFx0XHQ8bGluayBkZWZlclxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMTUuMy9jc3MvYWxsLmNzc1wiXG5cdFx0XHRcdFx0aW50ZWdyaXR5PVwic2hhMzg0LVNaWHhYNHdoSjc5L2dFcndjT1lmK3pXTGVKZFkvcXB1cUM0Y0FhOXJPR1VzdFBvbXRxcHVOV1Q5d2RQRW4yZmtcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG5cblx0XHRcdFx0ey8qIEZwciBzeW50YXggaGlnaGxpZ2h0aW5nICovfVxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17UFJJU01fVEhFTUVfVVJMfSAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8TmF2IC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aXRsZVwiXX0+e3RpdGxlfTwvaDI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWhlYWRcIl19PlxuXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aW1lXCJdfT5cblx0XHRcdFx0XHRcdHtOb3JtYWxEYXRlRm9ybWF0LmZvcm1hdChkYXRlQ3JlYXRlZCl9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNCwgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcgfX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57ZXN0UmVhZFRpbWV9IG1pbiByZWFkPC9zcGFuPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt0YWdzLm1hcCh0YWcgPT4gPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZ1wiPnt0YWd9PC9zcGFuPil9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsvKiA8Vmlld0NvdW50ZXIgc2x1Zz17c2x1Z30gLz4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1jb250ZW50XCJdfSA+XG5cdFx0XHRcdFx0PGFydGljbGU+XG5cdFx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdFx0PC9hcnRpY2xlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWJvdHRvbS1iYXJcIl19PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxDdXN0b21MaW5rIGhyZWY9e2VuY29kZVVSSShgaHR0cHM6Ly90d2l0dGVyLmNvbS9zZWFyY2g/cT0ke3Bvc3RMaW5rfWApfSBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWNvbnRlbnQtYVwiXX0+XG5cdFx0XHRcdFx0XHREaXNjdXNzIE9uIFR3aXR0ZXJcblx0XHRcdFx0XHQ8L0N1c3RvbUxpbms+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1zaGFyZS1zZWN0aW9uXCJdfT5cblx0XHRcdFx0XHQ8c3Bhbj5TaGFyZSB0aGlzIGFydGljbGUgb248L3NwYW4+XG5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e2dlbmVyYXRlU2hhcmVMaW5rcygpLm1hcChsaW5rID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxDdXN0b21MaW5rIGhyZWY9e2xpbmsudXJsfSBrZXk9e2xpbmsubmFtZX0gdGl0bGU9e2xpbmsubmFtZX0gY2xhc3NOYW1lPVwicmVzZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e2BmYWIgZmEtJHtsaW5rLm5hbWUudG9Mb3dlckNhc2UoKX1gfT48L2k+XG5cdFx0XHRcdFx0XHRcdDwvQ3VzdG9tTGluaz5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=