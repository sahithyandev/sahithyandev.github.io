webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/globals.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/globals.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  font-size: 18px;\n  color-scheme: dark;\n  \n  /* TODO change the colors, reason: hard to read */\n  /* --dark: #25262d; */\n  --dark: #131315;\n  --light: #FFFBFE;\n  --main: #FAF33E;\n  --main-half-opacity: #faf33e70;\n  --secondary: #087F8C;\n  --post-card-bg: hsl(236, 10%, 25%);\n  --post-card-bg-hover: hsl(220, 12%, 35%);\n  \n  --social-twitter: hsl(203, 89%, 42%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: auto;\n  max-width: 900px;\n  width: 72vw;\n  font-family: Inter, ui-sans-serif, sans-serif;\n  /* font-family: Inter,-apple-system,BlinkMacSystemFont,Oxygen,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; */\n  background: var(--dark);\n  color: var(--light);\n  scroll-behavior: smooth;\n}\n\nbody {\n  overflow-x: hidden;\n  scroll-margin-top: 24px;\n}\n\n@media (max-width: 600px) {\n  html, body {\n    max-width: 90vw;\n    width: auto; \n  }\n}\n\na.reset {\n\ttext-decoration: none !important;\n\tcolor: inherit !important;\t\n\tborder-bottom: none;\n}\n\n.name {  \n  width: -moz-fit-content;  \n  width: fit-content;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tletter-spacing: 0.1px;;\n}\n\n.tags-container {\n  display: flex;\n  grid-gap: 6px;\n  gap: 6px;\n  /* margin-top: 4px; */\n  /* background: red; */\n}\n\n.tag::before {\n  content: \"#\";\n  opacity: .54;\n  margin-right: 1px;\n}\n\n.heading-link {\n\topacity: .6;\n  margin-right: 10px;\n  font-family: monospace;\n  font-size: 1.1em;\n}\n\n.posts-container {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 20px;\n  gap: 20px;\n }\n \nbutton {\n  border: none;\n  border-radius: 4px;\n  color: red;\n  padding: 6px 10px;\n  cursor: pointer;\n  transition: filter .1s;\n}\n\nbutton.twitter-tweet {\n  background: var(--social-twitter);\n}\n\nbutton:hover {\n  filter: brightness(92%);\n}", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;;EAElB,iDAAiD;EACjD,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,8BAA8B;EAC9B,oBAAoB;EACpB,kCAAkC;EAClC,wCAAwC;;EAExC,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,6CAA6C;EAC7C,uIAAuI;EACvI,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE;IACE,eAAe;IACf,WAAW;EACb;AACF;;AAEA;CACC,gCAAgC;CAChC,yBAAyB;CACzB,mBAAmB;AACpB;;AAEA;EACE,uBAAkB;EAAlB,kBAAkB;CACnB,iBAAiB;CACjB,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;EACE,aAAa;EACb,aAAQ;EAAR,QAAQ;EACR,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;CACC,WAAW;EACV,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAS;EAAT,SAAS;CACV;;AAED;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[":root {\n  font-size: 18px;\n  color-scheme: dark;\n  \n  /* TODO change the colors, reason: hard to read */\n  /* --dark: #25262d; */\n  --dark: #131315;\n  --light: #FFFBFE;\n  --main: #FAF33E;\n  --main-half-opacity: #faf33e70;\n  --secondary: #087F8C;\n  --post-card-bg: hsl(236, 10%, 25%);\n  --post-card-bg-hover: hsl(220, 12%, 35%);\n  \n  --social-twitter: hsl(203, 89%, 42%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: auto;\n  max-width: 900px;\n  width: 72vw;\n  font-family: Inter, ui-sans-serif, sans-serif;\n  /* font-family: Inter,-apple-system,BlinkMacSystemFont,Oxygen,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; */\n  background: var(--dark);\n  color: var(--light);\n  scroll-behavior: smooth;\n}\n\nbody {\n  overflow-x: hidden;\n  scroll-margin-top: 24px;\n}\n\n@media (max-width: 600px) {\n  html, body {\n    max-width: 90vw;\n    width: auto; \n  }\n}\n\na.reset {\n\ttext-decoration: none !important;\n\tcolor: inherit !important;\t\n\tborder-bottom: none;\n}\n\n.name {  \n  width: fit-content;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tletter-spacing: 0.1px;;\n}\n\n.tags-container {\n  display: flex;\n  gap: 6px;\n  /* margin-top: 4px; */\n  /* background: red; */\n}\n\n.tag::before {\n  content: \"#\";\n  opacity: .54;\n  margin-right: 1px;\n}\n\n.heading-link {\n\topacity: .6;\n  margin-right: 10px;\n  font-family: monospace;\n  font-size: 1.1em;\n}\n\n.posts-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n }\n \nbutton {\n  border: none;\n  border-radius: 4px;\n  color: red;\n  padding: 6px 10px;\n  cursor: pointer;\n  transition: filter .1s;\n}\n\nbutton.twitter-tweet {\n  background: var(--social-twitter);\n}\n\nbutton:hover {\n  filter: brightness(92%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsVUFBVSxvQkFBb0IsdUJBQXVCLGlGQUFpRix1QkFBdUIscUJBQXFCLG9CQUFvQixtQ0FBbUMseUJBQXlCLHVDQUF1Qyw2Q0FBNkMsNkNBQTZDLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxpQkFBaUIsaUJBQWlCLHFCQUFxQixnQkFBZ0Isa0RBQWtELHlJQUF5SSwrQkFBK0Isd0JBQXdCLDRCQUE0QixHQUFHLFVBQVUsdUJBQXVCLDRCQUE0QixHQUFHLCtCQUErQixnQkFBZ0Isc0JBQXNCLGtCQUFrQixNQUFNLEdBQUcsYUFBYSxxQ0FBcUMsOEJBQThCLDBCQUEwQixHQUFHLFdBQVcsOEJBQThCLHlCQUF5QixzQkFBc0IscUJBQXFCLDJCQUEyQixHQUFHLHFCQUFxQixrQkFBa0Isa0JBQWtCLGFBQWEsdUJBQXVCLDBCQUEwQixNQUFNLGtCQUFrQixtQkFBbUIsaUJBQWlCLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0IsdUJBQXVCLDJCQUEyQixxQkFBcUIsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixtQkFBbUIsY0FBYyxJQUFJLGFBQWEsaUJBQWlCLHVCQUF1QixlQUFlLHNCQUFzQixvQkFBb0IsMkJBQTJCLEdBQUcsMEJBQTBCLHNDQUFzQyxHQUFHLGtCQUFrQiw0QkFBNEIsR0FBRyxPQUFPLG1GQUFtRixVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGlDQUFpQyxvQkFBb0IsdUJBQXVCLGlGQUFpRix1QkFBdUIscUJBQXFCLG9CQUFvQixtQ0FBbUMseUJBQXlCLHVDQUF1Qyw2Q0FBNkMsNkNBQTZDLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxpQkFBaUIsaUJBQWlCLHFCQUFxQixnQkFBZ0Isa0RBQWtELHlJQUF5SSwrQkFBK0Isd0JBQXdCLDRCQUE0QixHQUFHLFVBQVUsdUJBQXVCLDRCQUE0QixHQUFHLCtCQUErQixnQkFBZ0Isc0JBQXNCLGtCQUFrQixNQUFNLEdBQUcsYUFBYSxxQ0FBcUMsOEJBQThCLDBCQUEwQixHQUFHLFdBQVcseUJBQXlCLHNCQUFzQixxQkFBcUIsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQixhQUFhLHVCQUF1QiwwQkFBMEIsTUFBTSxrQkFBa0IsbUJBQW1CLGlCQUFpQixzQkFBc0IsR0FBRyxtQkFBbUIsZ0JBQWdCLHVCQUF1QiwyQkFBMkIscUJBQXFCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsY0FBYyxJQUFJLGFBQWEsaUJBQWlCLHVCQUF1QixlQUFlLHNCQUFzQixvQkFBb0IsMkJBQTJCLEdBQUcsMEJBQTBCLHNDQUFzQyxHQUFHLGtCQUFrQiw0QkFBNEIsR0FBRyxtQkFBbUI7QUFDdmlKO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNjhkYzk4NmRkNDA3YTMzYjc5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgXFxuICAvKiBUT0RPIGNoYW5nZSB0aGUgY29sb3JzLCByZWFzb246IGhhcmQgdG8gcmVhZCAqL1xcbiAgLyogLS1kYXJrOiAjMjUyNjJkOyAqL1xcbiAgLS1kYXJrOiAjMTMxMzE1O1xcbiAgLS1saWdodDogI0ZGRkJGRTtcXG4gIC0tbWFpbjogI0ZBRjMzRTtcXG4gIC0tbWFpbi1oYWxmLW9wYWNpdHk6ICNmYWYzM2U3MDtcXG4gIC0tc2Vjb25kYXJ5OiAjMDg3RjhDO1xcbiAgLS1wb3N0LWNhcmQtYmc6IGhzbCgyMzYsIDEwJSwgMjUlKTtcXG4gIC0tcG9zdC1jYXJkLWJnLWhvdmVyOiBoc2woMjIwLCAxMiUsIDM1JSk7XFxuICBcXG4gIC0tc29jaWFsLXR3aXR0ZXI6IGhzbCgyMDMsIDg5JSwgNDIlKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIHdpZHRoOiA3MnZ3O1xcbiAgZm9udC1mYW1pbHk6IEludGVyLCB1aS1zYW5zLXNlcmlmLCBzYW5zLXNlcmlmO1xcbiAgLyogZm9udC1mYW1pbHk6IEludGVyLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LE94eWdlbixSb2JvdG8sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmOyAqL1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgaHRtbCwgYm9keSB7XFxuICAgIG1heC13aWR0aDogOTB2dztcXG4gICAgd2lkdGg6IGF1dG87IFxcbiAgfVxcbn1cXG5cXG5hLnJlc2V0IHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG5cXHRjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xcdFxcblxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5uYW1lIHsgIFxcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7ICBcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjFweDs7XFxufVxcblxcbi50YWdzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1nYXA6IDZweDtcXG4gIGdhcDogNnB4O1xcbiAgLyogbWFyZ2luLXRvcDogNHB4OyAqL1xcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xcbn1cXG5cXG4udGFnOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiNcXFwiO1xcbiAgb3BhY2l0eTogLjU0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XFxufVxcblxcbi5oZWFkaW5nLWxpbmsge1xcblxcdG9wYWNpdHk6IC42O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi5wb3N0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGdhcDogMjBweDtcXG4gfVxcbiBcXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIC4xcztcXG59XFxuXFxuYnV0dG9uLnR3aXR0ZXItdHdlZXQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc29jaWFsLXR3aXR0ZXIpO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkyJSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCOztFQUVsQixpREFBaUQ7RUFDakQscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLHdDQUF3Qzs7RUFFeEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDZDQUE2QztFQUM3Qyx1SUFBdUk7RUFDdkksdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUFrQjtFQUFsQixrQkFBa0I7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBUTtFQUFSLFFBQVE7RUFDUixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQVM7RUFBVCxTQUFTO0NBQ1Y7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICBcXG4gIC8qIFRPRE8gY2hhbmdlIHRoZSBjb2xvcnMsIHJlYXNvbjogaGFyZCB0byByZWFkICovXFxuICAvKiAtLWRhcms6ICMyNTI2MmQ7ICovXFxuICAtLWRhcms6ICMxMzEzMTU7XFxuICAtLWxpZ2h0OiAjRkZGQkZFO1xcbiAgLS1tYWluOiAjRkFGMzNFO1xcbiAgLS1tYWluLWhhbGYtb3BhY2l0eTogI2ZhZjMzZTcwO1xcbiAgLS1zZWNvbmRhcnk6ICMwODdGOEM7XFxuICAtLXBvc3QtY2FyZC1iZzogaHNsKDIzNiwgMTAlLCAyNSUpO1xcbiAgLS1wb3N0LWNhcmQtYmctaG92ZXI6IGhzbCgyMjAsIDEyJSwgMzUlKTtcXG4gIFxcbiAgLS1zb2NpYWwtdHdpdHRlcjogaHNsKDIwMywgODklLCA0MiUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgd2lkdGg6IDcydnc7XFxuICBmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHNhbnMtc2VyaWY7XFxuICAvKiBmb250LWZhbWlseTogSW50ZXIsLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsT3h5Z2VuLFJvYm90byxVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7ICovXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBzY3JvbGwtbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBodG1sLCBib2R5IHtcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICB3aWR0aDogYXV0bzsgXFxuICB9XFxufVxcblxcbmEucmVzZXQge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcblxcdGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XFx0XFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLm5hbWUgeyAgXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC4xcHg7O1xcbn1cXG5cXG4udGFncy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbiAgLyogbWFyZ2luLXRvcDogNHB4OyAqL1xcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xcbn1cXG5cXG4udGFnOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIiNcXFwiO1xcbiAgb3BhY2l0eTogLjU0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XFxufVxcblxcbi5oZWFkaW5nLWxpbmsge1xcblxcdG9wYWNpdHk6IC42O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbi5wb3N0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuIH1cXG4gXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiByZWQ7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGZpbHRlciAuMXM7XFxufVxcblxcbmJ1dHRvbi50d2l0dGVyLXR3ZWV0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNvY2lhbC10d2l0dGVyKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MiUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==