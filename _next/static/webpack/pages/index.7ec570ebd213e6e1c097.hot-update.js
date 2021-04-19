webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SocialLinks.jsx":
/*!************************************!*\
  !*** ./components/SocialLinks.jsx ***!
  \************************************/
/*! exports provided: SocialLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return SocialLinks; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/social-links.module.css */ "./styles/social-links.module.css");
/* harmony import */ var _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "/mnt/c/Projects/blog/components/SocialLinks.jsx",
    _this = undefined;


var SocialLinks = function SocialLinks(props) {
  var createSocialMediaLinkObj = function createSocialMediaLinkObj(dataArr) {
    /**
     * @type {string}
     */
    var _dataArr = Object(_mnt_c_Projects_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(dataArr, 3),
        providerName = _dataArr[0],
        link = _dataArr[1],
        __icon = _dataArr[2];

    return {
      providerName: providerName,
      link: link,
      icon: __icon || providerName.toLowerCase(),
      id: link.split("/").reverse()[0]
    };
  };

  var updatedSocialMedia = [// ["providerName", "profileLink", "<optional>iconName"]
  ["Twitter", "https://www.twitter.com/iamSahithyan"], ["Instagram", "https://www.instagram.com/sahithyan_"], ["GitHub", "https://www.github.com/sahithyandev"], ["Telegram", "https://www.t.me/sahithyan", "telegram-plane"]].map(createSocialMediaLinkObj);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_social_links_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["social-media-icons-container"],
    children: updatedSocialMedia.map(function (s) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "reset",
        href: s.link,
        title: "".concat(s.providerName, " (").concat(s.id, ")"),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fab fa-".concat(s.icon)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, _this)
      }, s.providerName, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 6
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, _this);
};
_c = SocialLinks;

var _c;

$RefreshReg$(_c, "SocialLinks");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/social-links.module.css":
/*!****************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/social-links.module.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".social-links_social-media-icons-container__11Hds {\n  margin-top: 10px;\n  display: flex;\n  grid-gap: 10px;\n  gap: 10px;\n  \n}\n\n.social-links_social-media-icons-container__11Hds a {\n  opacity: .8;\n  transition: opacity .2s;\n}\n\n.social-links_social-media-icons-container__11Hds a:hover {\n  opacity: 1;\n  \n}\n\n.social-links_social-media-icons-container__11Hds i {\n  font-size: 24px;\n}", "",{"version":3,"sources":["webpack://styles/social-links.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,aAAa;EACb,cAAS;EAAT,SAAS;;AAEX;;AAEA;EACE,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,UAAU;;AAEZ;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".social-media-icons-container {\n  margin-top: 10px;\n  display: flex;\n  gap: 10px;\n  \n}\n\n.social-media-icons-container a {\n  opacity: .8;\n  transition: opacity .2s;\n}\n\n.social-media-icons-container a:hover {\n  opacity: 1;\n  \n}\n\n.social-media-icons-container i {\n  font-size: 24px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"social-media-icons-container": "social-links_social-media-icons-container__11Hds"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./styles/social-links.module.css":
/*!****************************************!*\
  !*** ./styles/social-links.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./social-links.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/social-links.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./social-links.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/social-links.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./social-links.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/social-links.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9zb2NpYWwtbGlua3MubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3NvY2lhbC1saW5rcy5tb2R1bGUuY3NzPzgwZTIiXSwibmFtZXMiOlsiU29jaWFsTGlua3MiLCJwcm9wcyIsImNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiIsImRhdGFBcnIiLCJwcm92aWRlck5hbWUiLCJsaW5rIiwiX19pY29uIiwiaWNvbiIsInRvTG93ZXJDYXNlIiwiaWQiLCJzcGxpdCIsInJldmVyc2UiLCJ1cGRhdGVkU29jaWFsTWVkaWEiLCJtYXAiLCJzdHlsZXMiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JDLE1BQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdDO0FBQ0Y7QUFDQTtBQUgrQyw2SUFJUkEsT0FKUTtBQUFBLFFBSXRDQyxZQUpzQztBQUFBLFFBSXhCQyxJQUp3QjtBQUFBLFFBSWxCQyxNQUprQjs7QUFNN0MsV0FBTztBQUNORixrQkFBWSxFQUFaQSxZQURNO0FBQ1FDLFVBQUksRUFBSkEsSUFEUjtBQUVORSxVQUFJLEVBQUVELE1BQU0sSUFBSUYsWUFBWSxDQUFDSSxXQUFiLEVBRlY7QUFHTkMsUUFBRSxFQUFFSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxPQUFoQixHQUEwQixDQUExQjtBQUhFLEtBQVA7QUFLQSxHQVhEOztBQWFBLE1BQU1DLGtCQUFrQixHQUFHLENBQzFCO0FBQ0EsR0FBQyxTQUFELEVBQVksc0NBQVosQ0FGMEIsRUFHMUIsQ0FBQyxXQUFELEVBQWMsc0NBQWQsQ0FIMEIsRUFJMUIsQ0FBQyxRQUFELEVBQVcscUNBQVgsQ0FKMEIsRUFLMUIsQ0FBQyxVQUFELEVBQWEsNEJBQWIsRUFBMkMsZ0JBQTNDLENBTDBCLEVBTXpCQyxHQU55QixDQU1yQlgsd0JBTnFCLENBQTNCO0FBUUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUVZLHNFQUFNLENBQUMsOEJBQUQsQ0FBdEI7QUFBQSxjQUNFRixrQkFBa0IsQ0FBQ0MsR0FBbkIsQ0FBdUIsVUFBQUUsQ0FBQyxFQUFJO0FBQzVCLDBCQUNDO0FBQUcsaUJBQVMsRUFBQyxPQUFiO0FBQXFCLFlBQUksRUFBRUEsQ0FBQyxDQUFDVixJQUE3QjtBQUF3RCxhQUFLLFlBQUtVLENBQUMsQ0FBQ1gsWUFBUCxlQUF3QlcsQ0FBQyxDQUFDTixFQUExQixNQUE3RDtBQUFBLCtCQUNDO0FBQUcsbUJBQVMsbUJBQVlNLENBQUMsQ0FBQ1IsSUFBZDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUF3Q1EsQ0FBQyxDQUFDWCxZQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFLQSxLQU5BO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBV0EsQ0FqQ007S0FBTUosVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGI7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHNEQUFzRCxxQkFBcUIsa0JBQWtCLG1CQUFtQixjQUFjLE9BQU8seURBQXlELGdCQUFnQiw0QkFBNEIsR0FBRywrREFBK0QsZUFBZSxPQUFPLHlEQUF5RCxvQkFBb0IsR0FBRyxPQUFPLCtGQUErRixZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUseURBQXlELHFCQUFxQixrQkFBa0IsY0FBYyxPQUFPLHFDQUFxQyxnQkFBZ0IsNEJBQTRCLEdBQUcsMkNBQTJDLGVBQWUsT0FBTyxxQ0FBcUMsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ2ovQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQSxVQUFVLG1CQUFPLENBQUMsbU5BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLG9VQUErSzs7QUFFak47O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0Esa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQTtBQUNBLE1BQU0sb1VBQStLO0FBQ3JMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsb1VBQStLOztBQUV6TTs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdlYzU3MGViZDIxM2U2ZTFjMDk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc29jaWFsLWxpbmtzLm1vZHVsZS5jc3NcIlxuZXhwb3J0IGNvbnN0IFNvY2lhbExpbmtzID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IGNyZWF0ZVNvY2lhbE1lZGlhTGlua09iaiA9IChkYXRhQXJyKSA9PiB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHRjb25zdCBbcHJvdmlkZXJOYW1lLCBsaW5rLCBfX2ljb25dID0gZGF0YUFycjtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRwcm92aWRlck5hbWUsIGxpbmssXG5cdFx0XHRpY29uOiBfX2ljb24gfHwgcHJvdmlkZXJOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRpZDogbGluay5zcGxpdChcIi9cIikucmV2ZXJzZSgpWzBdXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlZFNvY2lhbE1lZGlhID0gW1xuXHRcdC8vIFtcInByb3ZpZGVyTmFtZVwiLCBcInByb2ZpbGVMaW5rXCIsIFwiPG9wdGlvbmFsPmljb25OYW1lXCJdXG5cdFx0W1wiVHdpdHRlclwiLCBcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2lhbVNhaGl0aHlhblwiXSxcblx0XHRbXCJJbnN0YWdyYW1cIiwgXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NhaGl0aHlhbl9cIl0sXG5cdFx0W1wiR2l0SHViXCIsIFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9zYWhpdGh5YW5kZXZcIl0sXG5cdFx0W1wiVGVsZWdyYW1cIiwgXCJodHRwczovL3d3dy50Lm1lL3NhaGl0aHlhblwiLCBcInRlbGVncmFtLXBsYW5lXCJdLFxuXHRdLm1hcChjcmVhdGVTb2NpYWxNZWRpYUxpbmtPYmopXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wic29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lclwiXX0+XG5cdFx0XHR7dXBkYXRlZFNvY2lhbE1lZGlhLm1hcChzID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJyZXNldFwiIGhyZWY9e3MubGlua30ga2V5PXtzLnByb3ZpZGVyTmFtZX0gdGl0bGU9e2Ake3MucHJvdmlkZXJOYW1lfSAoJHtzLmlkfSlgfT5cblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17YGZhYiBmYS0ke3MuaWNvbn1gfT48L2k+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQpXG5cdFx0XHR9KX1cblx0XHQ8L2Rpdj5cblx0KVxufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zb2NpYWwtbGlua3Nfc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcl9fMTFIZHMge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGdhcDogMTBweDtcXG4gIFxcbn1cXG5cXG4uc29jaWFsLWxpbmtzX3NvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJfXzExSGRzIGEge1xcbiAgb3BhY2l0eTogLjg7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcXG59XFxuXFxuLnNvY2lhbC1saW5rc19zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyX18xMUhkcyBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBcXG59XFxuXFxuLnNvY2lhbC1saW5rc19zb2NpYWwtbWVkaWEtaWNvbnMtY29udGFpbmVyX18xMUhkcyBpIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9zb2NpYWwtbGlua3MubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBUztFQUFULFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXIgYSB7XFxuICBvcGFjaXR5OiAuODtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXIgaSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNvY2lhbC1tZWRpYS1pY29ucy1jb250YWluZXJcIjogXCJzb2NpYWwtbGlua3Nfc29jaWFsLW1lZGlhLWljb25zLWNvbnRhaW5lcl9fMTFIZHNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL3NvY2lhbC1saW5rcy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9zb2NpYWwtbGlua3MubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL3NvY2lhbC1saW5rcy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=