webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.jsx":
/*!*********************************!*\
  !*** ./components/PostCard.jsx ***!
  \*********************************/
/*! exports provided: PostCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCard", function() { return PostCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_other__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/other */ "./helpers/other.js");
/* harmony import */ var _styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/post-card.module.css */ "./styles/post-card.module.css");
/* harmony import */ var _styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/mnt/c/Projects/blog/components/PostCard.jsx",
    _this = undefined;




var PostCard = function PostCard(postMeta) {
  var slug = postMeta.slug,
      title = postMeta.title,
      description = postMeta.description,
      dateCreated = postMeta.dateCreated,
      tags = postMeta.tags;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post/".concat(slug),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "reset",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["post-card"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: _styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["title"],
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["description"],
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["meta"],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _styles_post_card_module_css__WEBPACK_IMPORTED_MODULE_3___default.a["post-created-time"],
            children: _helpers_other__WEBPACK_IMPORTED_MODULE_2__["NormalDateFormat"].format(dateCreated)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tags-container",
            children: tags.map(function (tag) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "tag",
                children: tag
              }, tag, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 25
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, _this);
};
_c = PostCard;

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qc3giXSwibmFtZXMiOlsiUG9zdENhcmQiLCJwb3N0TWV0YSIsInNsdWciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZUNyZWF0ZWQiLCJ0YWdzIiwic3R5bGVzIiwiTm9ybWFsRGF0ZUZvcm1hdCIsImZvcm1hdCIsIm1hcCIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFjO0FBQUEsTUFDN0JDLElBRDZCLEdBQ21CRCxRQURuQixDQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsS0FEdUIsR0FDbUJGLFFBRG5CLENBQ3ZCRSxLQUR1QjtBQUFBLE1BQ2hCQyxXQURnQixHQUNtQkgsUUFEbkIsQ0FDaEJHLFdBRGdCO0FBQUEsTUFDSEMsV0FERyxHQUNtQkosUUFEbkIsQ0FDSEksV0FERztBQUFBLE1BQ1VDLElBRFYsR0FDbUJMLFFBRG5CLENBQ1VLLElBRFY7QUFHckMsc0JBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLGtCQUFXSixJQUFYLENBQVY7QUFBQSwyQkFDQztBQUFHLGVBQVMsRUFBQyxPQUFiO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFFSyxtRUFBTSxDQUFDLFdBQUQsQ0FBdEI7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUVBLG1FQUFNLENBQUMsT0FBRCxDQUFyQjtBQUFBLG9CQUFpQ0o7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUcsbUJBQVMsRUFBRUksbUVBQU0sQ0FBQyxhQUFELENBQXBCO0FBQUEsb0JBQXNDSDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELGVBSUM7QUFBSyxtQkFBUyxFQUFFRyxtRUFBTSxDQUFDLE1BQUQsQ0FBdEI7QUFBQSxrQ0FDQztBQUFNLHFCQUFTLEVBQUVBLG1FQUFNLENBQUMsbUJBQUQsQ0FBdkI7QUFBQSxzQkFBK0NDLCtEQUFnQixDQUFDQyxNQUFqQixDQUF3QkosV0FBeEI7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBLHNCQUNFQyxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFBQyxHQUFHO0FBQUEsa0NBQUk7QUFBZ0IseUJBQVMsRUFBQyxLQUExQjtBQUFBLDBCQUFpQ0E7QUFBakMsaUJBQVdBLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBSjtBQUFBLGFBQVo7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBaUJBLENBcEJNO0tBQU1YLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzk0NjUyOWI4ZDU5ZWZhNmIxODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5pbXBvcnQgeyBOb3JtYWxEYXRlRm9ybWF0IH0gZnJvbSBcIkAvaGVscGVycy9vdGhlclwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wb3N0LWNhcmQubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBjb25zdCBQb3N0Q2FyZCA9IChwb3N0TWV0YSkgPT4ge1xuXHRjb25zdCB7IHNsdWcsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZUNyZWF0ZWQsIHRhZ3MgfSA9IHBvc3RNZXRhXG5cblx0cmV0dXJuIChcblx0XHQ8TGluayBocmVmPXtgL3Bvc3QvJHtzbHVnfWB9PlxuXHRcdFx0PGEgY2xhc3NOYW1lPVwicmVzZXRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtY2FyZFwiXX0+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT17c3R5bGVzW1widGl0bGVcIl19Pnt0aXRsZX08L2gzPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT17c3R5bGVzW1wiZGVzY3JpcHRpb25cIl19PntkZXNjcmlwdGlvbn08L3A+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWV0YVwiXX0+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtY3JlYXRlZC10aW1lXCJdfT57Tm9ybWFsRGF0ZUZvcm1hdC5mb3JtYXQoZGF0ZUNyZWF0ZWQpfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGFncy1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0e3RhZ3MubWFwKHRhZyA9PiA8c3BhbiBrZXk9e3RhZ30gY2xhc3NOYW1lPVwidGFnXCI+e3RhZ308L3NwYW4+KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvYT5cblx0XHQ8L0xpbmsgPlxuXHQpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==