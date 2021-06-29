webpackHotUpdate_N_E("pages/post/[slug]",{

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
/* harmony import */ var _CustomLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomLink */ "./components/CustomLink.jsx");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global */ "./global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_other__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/other */ "./helpers/other.js");
/* harmony import */ var _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/blog-post.module.css */ "./styles/blog-post.module.css");
/* harmony import */ var _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/assets/icons */ "./assets/icons/index.js");



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

  var shareLinks = function () {
    var author = _global__WEBPACK_IMPORTED_MODULE_8__["SITE_CONSTANTS"].author;
    return [{
      name: "Twitter",
      url: "https://www.twitter.com/share?text=".concat(title, " by ").concat(author, "&url=").concat(postLink, "}"),
      icon: _assets_icons__WEBPACK_IMPORTED_MODULE_11__["TwitterIcon"]
    }].map(function (_) {
      _.url = encodeURI(_.url);
      return _;
    });
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setPostLink(window.location.href);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeadBase__WEBPACK_IMPORTED_MODULE_4__["HeadBase"], {
      title: "".concat(title, " - ").concat(_global__WEBPACK_IMPORTED_MODULE_8__["SITE_CONSTANTS"].title),
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: PRISM_THEME_URL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_3__["Nav"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "post-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--title"],
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--head"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--time"],
          children: _helpers_other__WEBPACK_IMPORTED_MODULE_9__["NormalDateFormat"].format(dateCreated)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
            lineNumber: 62,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--content"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--bottom-bar"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomLink__WEBPACK_IMPORTED_MODULE_7__["CustomLink"], {
          href: encodeURI("https://twitter.com/search?q=".concat(postLink)),
          children: "Discuss On Twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_blog_post_module_css__WEBPACK_IMPORTED_MODULE_10___default.a["post--share-section"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Share this article on"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: shareLinks.map(function (link) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomLink__WEBPACK_IMPORTED_MODULE_7__["CustomLink"], {
              href: link.url,
              title: link.name,
              className: "reset",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(link.icon, {
                width: "20",
                height: "20"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, _this)
            }, link.name, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["Footer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9nUG9zdC5qc3giXSwibmFtZXMiOlsiUFJJU01fVEhFTUVfVVJMIiwiQmxvZ1Bvc3QiLCJwcm9wcyIsIm1ldGEiLCJjaGlsZHJlbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwidGFncyIsImVzdFJlYWRUaW1lIiwiZGF0ZUNyZWF0ZWQiLCJ1c2VTdGF0ZSIsInBvc3RMaW5rIiwic2V0UG9zdExpbmsiLCJzaGFyZUxpbmtzIiwiYXV0aG9yIiwiU0lURV9DT05TVEFOVFMiLCJuYW1lIiwidXJsIiwiaWNvbiIsIlR3aXR0ZXJJY29uIiwibWFwIiwiXyIsImVuY29kZVVSSSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0eWxlcyIsIk5vcm1hbERhdGVGb3JtYXQiLCJmb3JtYXQiLCJkaXNwbGF5IiwiZ2FwIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ0YWciLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLDREQUF4QjtBQUVPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQzFCQyxJQUQwQixHQUNQRCxLQURPLENBQzFCQyxJQUQwQjtBQUFBLE1BQ3BCQyxRQURvQixHQUNQRixLQURPLENBQ3BCRSxRQURvQjtBQUFBLE1BRTFCQyxLQUYwQixHQUVtQ0YsSUFGbkMsQ0FFMUJFLEtBRjBCO0FBQUEsTUFFbkJDLFdBRm1CLEdBRW1DSCxJQUZuQyxDQUVuQkcsV0FGbUI7QUFBQSxNQUVOQyxJQUZNLEdBRW1DSixJQUZuQyxDQUVOSSxJQUZNO0FBQUEsTUFFQUMsSUFGQSxHQUVtQ0wsSUFGbkMsQ0FFQUssSUFGQTtB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TSxDQUFDLGtCQUFELENBQXRCO0FBQUEsOEJBQ0M7QUFBQSwrQkFDQyxxRUFBQyxzREFBRDtBQUFZLGNBQUksRUFBRUwsU0FBUyx3Q0FBaUNYLFFBQWpDLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBT0M7QUFBSyxpQkFBUyxFQUFFZ0Isb0VBQU0sQ0FBQyxxQkFBRCxDQUF0QjtBQUFBLGdDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBR0M7QUFBQSxvQkFDRWQsVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQWUsSUFBSSxFQUFJO0FBQ3ZCLGdDQUFPLHFFQUFDLHNEQUFEO0FBQVksa0JBQUksRUFBRUEsSUFBSSxDQUFDbEIsR0FBdkI7QUFBNEMsbUJBQUssRUFBRWtCLElBQUksQ0FBQ25CLElBQXhEO0FBQThELHVCQUFTLEVBQUMsT0FBeEU7QUFBQSxxQ0FDTixxRUFBQyxJQUFELENBQU0sSUFBTjtBQUFXLHFCQUFLLEVBQUMsSUFBakI7QUFBc0Isc0JBQU0sRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sZUFBaUNtQixJQUFJLENBQUNuQixJQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBR0EsV0FKQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkNELGVBdURDLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2REQ7QUFBQSxrQkFERDtBQTREQSxDQXJGTTs7R0FBTWhCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYjRmYzBmMmY1N2QyYWVkZTI1ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IE5hdiB9IGZyb20gXCIuL05hdlwiXG5pbXBvcnQgeyBIZWFkQmFzZSB9IGZyb20gXCIuL0hlYWRCYXNlXCJcbmltcG9ydCB7IFZpZXdDb3VudGVyIH0gZnJvbSBcIi4vVmlld0NvdW50ZXJcIlxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCJcbmltcG9ydCB7IEN1c3RvbUxpbmsgfSBmcm9tIFwiLi9DdXN0b21MaW5rXCJcbmltcG9ydCB7IFNJVEVfQ09OU1RBTlRTIH0gZnJvbSBcIi4uL2dsb2JhbFwiXG5pbXBvcnQgeyBOb3JtYWxEYXRlRm9ybWF0IH0gZnJvbSBcIkAvaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL2Jsb2ctcG9zdC5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFR3aXR0ZXJJY29uIH0gZnJvbSBcIkAvYXNzZXRzL2ljb25zXCJcblxuY29uc3QgUFJJU01fVEhFTUVfVVJMID0gXCJodHRwczovL3VucGtnLmNvbS9wcmlzbWpzQDEuMjMuMC90aGVtZXMvcHJpc20tdHdpbGlnaHQuY3NzXCJcblxuZXhwb3J0IGNvbnN0IEJsb2dQb3N0ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbWV0YSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc2x1ZywgdGFncywgZXN0UmVhZFRpbWUsIGRhdGVDcmVhdGVkIH0gPSBtZXRhO1xuXHRjb25zdCBbcG9zdExpbmssIHNldFBvc3RMaW5rXSA9IHVzZVN0YXRlKFwiXCIpXG5cblx0Y29uc3Qgc2hhcmVMaW5rcyA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgYXV0aG9yID0gU0lURV9DT05TVEFOVFMuYXV0aG9yXG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcIlR3aXR0ZXJcIixcblx0XHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cudHdpdHRlci5jb20vc2hhcmU/dGV4dD0ke3RpdGxlfSBieSAke2F1dGhvcn0mdXJsPSR7cG9zdExpbmt9fWAsXG5cdFx0XHRcdGljb246IFR3aXR0ZXJJY29uXG5cdFx0XHR9XG5cdFx0XS5tYXAoXyA9PiB7XG5cdFx0XHRfLnVybCA9IGVuY29kZVVSSShfLnVybClcblxuXHRcdFx0cmV0dXJuIF9cblx0XHR9KVxuXHR9KSgpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRQb3N0TGluayh3aW5kb3cubG9jYXRpb24uaHJlZilcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZEJhc2UgdGl0bGU9e2Ake3RpdGxlfSAtICR7U0lURV9DT05TVEFOVFMudGl0bGV9YH0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuXG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0ey8qIEZwciBzeW50YXggaGlnaGxpZ2h0aW5nICovfVxuXHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17UFJJU01fVEhFTUVfVVJMfSAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8TmF2IC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJwb3N0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aXRsZVwiXX0+e3RpdGxlfTwvaDI+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtLWhlYWRcIl19PlxuXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS10aW1lXCJdfT5cblx0XHRcdFx0XHRcdHtOb3JtYWxEYXRlRm9ybWF0LmZvcm1hdChkYXRlQ3JlYXRlZCl9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogNCwgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcgfX0+XG5cdFx0XHRcdFx0XHQ8c3Bhbj57ZXN0UmVhZFRpbWV9IG1pbiByZWFkPC9zcGFuPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdHt0YWdzLm1hcCh0YWcgPT4gPHNwYW4ga2V5PXt0YWd9IGNsYXNzTmFtZT1cInRhZ1wiPnt0YWd9PC9zcGFuPil9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsvKiA8Vmlld0NvdW50ZXIgc2x1Zz17c2x1Z30gLz4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LS1jb250ZW50XCJdfT5cblx0XHRcdFx0XHQ8YXJ0aWNsZT5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L2FydGljbGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tYm90dG9tLWJhclwiXX0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PEN1c3RvbUxpbmsgaHJlZj17ZW5jb2RlVVJJKGBodHRwczovL3R3aXR0ZXIuY29tL3NlYXJjaD9xPSR7cG9zdExpbmt9YCl9PlxuXHRcdFx0XHRcdFx0RGlzY3VzcyBPbiBUd2l0dGVyXG5cdFx0XHRcdFx0PC9DdXN0b21MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC0tc2hhcmUtc2VjdGlvblwiXX0+XG5cdFx0XHRcdFx0PHNwYW4+U2hhcmUgdGhpcyBhcnRpY2xlIG9uPC9zcGFuPlxuXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzaGFyZUxpbmtzLm1hcChsaW5rID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIDxDdXN0b21MaW5rIGhyZWY9e2xpbmsudXJsfSBrZXk9e2xpbmsubmFtZX0gdGl0bGU9e2xpbmsubmFtZX0gY2xhc3NOYW1lPVwicmVzZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bGluay5pY29uIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvQ3VzdG9tTGluaz5cblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0PC8+XG5cdClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=