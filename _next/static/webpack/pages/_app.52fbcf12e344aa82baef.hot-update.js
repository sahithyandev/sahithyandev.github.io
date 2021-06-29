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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  font-size: 18px;\n  color-scheme: dark;\n  \n  --dark: #131315;\n  --light: #FFFBFE;\n  --main: #FAF33E;\n  --main-half-opacity: #faf33e70;\n  --secondary: #087F8C;\n  --post-card-bg: hsl(236, 10%, 25%);\n  --post-card-bg-hover: hsl(220, 12%, 35%);\n  \n  --social-twitter: hsl(203, 89%, 42%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: auto;\n  max-width: 900px;\n  width: 72vw;\n  font-family: Inter, ui-sans-serif, sans-serif;\n  background: var(--dark);\n  color: var(--light);\n  scroll-behavior: smooth;\n}\n\nbody {\n  /* overflow-x: hidden; */\n  scroll-margin-top: 24px;\n}\n\n@media (max-width: 600px) {\n  html, body {\n    max-width: 90vw;\n    width: auto; \n  }\n}\n\n.name {  \n  width: -moz-fit-content;  \n  width: fit-content;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tletter-spacing: 0.1px;;\n}\n\n.tags-container {\n  display: flex;\n  grid-gap: 6px;\n  gap: 6px;\n  /* margin-top: 4px; */\n  /* background: red; */\n}\n\n.tag::before {\n  content: \"#\";\n  opacity: .54;\n  margin-right: 1px;\n}\n\n.heading-link {\n\topacity: .6;\n  margin-right: 10px;\n  font-family: monospace;\n  font-size: 1.1em;\n}\n\n.posts-container {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 20px;\n  gap: 20px;\n }", "",{"version":3,"sources":["webpack://styles/globals.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,kBAAkB;;EAElB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,8BAA8B;EAC9B,oBAAoB;EACpB,kCAAkC;EAClC,wCAAwC;;EAExC,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,6CAA6C;EAC7C,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE;IACE,eAAe;IACf,WAAW;EACb;AACF;;AAEA;EACE,uBAAkB;EAAlB,kBAAkB;CACnB,iBAAiB;CACjB,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;EACE,aAAa;EACb,aAAQ;EAAR,QAAQ;EACR,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;CACC,WAAW;EACV,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAS;EAAT,SAAS;CACV","sourcesContent":[":root {\n  font-size: 18px;\n  color-scheme: dark;\n  \n  --dark: #131315;\n  --light: #FFFBFE;\n  --main: #FAF33E;\n  --main-half-opacity: #faf33e70;\n  --secondary: #087F8C;\n  --post-card-bg: hsl(236, 10%, 25%);\n  --post-card-bg-hover: hsl(220, 12%, 35%);\n  \n  --social-twitter: hsl(203, 89%, 42%);\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: auto;\n  max-width: 900px;\n  width: 72vw;\n  font-family: Inter, ui-sans-serif, sans-serif;\n  background: var(--dark);\n  color: var(--light);\n  scroll-behavior: smooth;\n}\n\nbody {\n  /* overflow-x: hidden; */\n  scroll-margin-top: 24px;\n}\n\n@media (max-width: 600px) {\n  html, body {\n    max-width: 90vw;\n    width: auto; \n  }\n}\n\n.name {  \n  width: fit-content;\n\tfont-weight: bold;\n\tfont-size: 1.2em;\n\tletter-spacing: 0.1px;;\n}\n\n.tags-container {\n  display: flex;\n  gap: 6px;\n  /* margin-top: 4px; */\n  /* background: red; */\n}\n\n.tag::before {\n  content: \"#\";\n  opacity: .54;\n  margin-right: 1px;\n}\n\n.heading-link {\n\topacity: .6;\n  margin-right: 10px;\n  font-family: monospace;\n  font-size: 1.1em;\n}\n\n.posts-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pEO0FBQ0EsOEJBQThCLFFBQVMsVUFBVSxvQkFBb0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsb0JBQW9CLG1DQUFtQyx5QkFBeUIsdUNBQXVDLDZDQUE2Qyw2Q0FBNkMsR0FBRyxPQUFPLDJCQUEyQixHQUFHLGlCQUFpQixpQkFBaUIscUJBQXFCLGdCQUFnQixrREFBa0QsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsR0FBRyxVQUFVLDBCQUEwQiwrQkFBK0IsR0FBRywrQkFBK0IsZ0JBQWdCLHNCQUFzQixrQkFBa0IsTUFBTSxHQUFHLFdBQVcsOEJBQThCLHlCQUF5QixzQkFBc0IscUJBQXFCLDJCQUEyQixHQUFHLHFCQUFxQixrQkFBa0Isa0JBQWtCLGFBQWEsdUJBQXVCLDBCQUEwQixNQUFNLGtCQUFrQixtQkFBbUIsaUJBQWlCLHNCQUFzQixHQUFHLG1CQUFtQixnQkFBZ0IsdUJBQXVCLDJCQUEyQixxQkFBcUIsR0FBRyxzQkFBc0Isa0JBQWtCLDJCQUEyQixtQkFBbUIsY0FBYyxJQUFJLE9BQU8sbUZBQW1GLFVBQVUsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLGdDQUFnQyxvQkFBb0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsb0JBQW9CLG1DQUFtQyx5QkFBeUIsdUNBQXVDLDZDQUE2Qyw2Q0FBNkMsR0FBRyxPQUFPLDJCQUEyQixHQUFHLGlCQUFpQixpQkFBaUIscUJBQXFCLGdCQUFnQixrREFBa0QsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsR0FBRyxVQUFVLDBCQUEwQiwrQkFBK0IsR0FBRywrQkFBK0IsZ0JBQWdCLHNCQUFzQixrQkFBa0IsTUFBTSxHQUFHLFdBQVcseUJBQXlCLHNCQUFzQixxQkFBcUIsMkJBQTJCLEdBQUcscUJBQXFCLGtCQUFrQixhQUFhLHVCQUF1QiwwQkFBMEIsTUFBTSxrQkFBa0IsbUJBQW1CLGlCQUFpQixzQkFBc0IsR0FBRyxtQkFBbUIsZ0JBQWdCLHVCQUF1QiwyQkFBMkIscUJBQXFCLEdBQUcsc0JBQXNCLGtCQUFrQiwyQkFBMkIsY0FBYyxJQUFJLG1CQUFtQjtBQUN4c0c7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjUyZmJjZjEyZTM0NGFhODJiYWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICBcXG4gIC0tZGFyazogIzEzMTMxNTtcXG4gIC0tbGlnaHQ6ICNGRkZCRkU7XFxuICAtLW1haW46ICNGQUYzM0U7XFxuICAtLW1haW4taGFsZi1vcGFjaXR5OiAjZmFmMzNlNzA7XFxuICAtLXNlY29uZGFyeTogIzA4N0Y4QztcXG4gIC0tcG9zdC1jYXJkLWJnOiBoc2woMjM2LCAxMCUsIDI1JSk7XFxuICAtLXBvc3QtY2FyZC1iZy1ob3ZlcjogaHNsKDIyMCwgMTIlLCAzNSUpO1xcbiAgXFxuICAtLXNvY2lhbC10d2l0dGVyOiBoc2woMjAzLCA4OSUsIDQyJSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICB3aWR0aDogNzJ2dztcXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgdWktc2Fucy1zZXJpZiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cXG4gIHNjcm9sbC1tYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIGh0bWwsIGJvZHkge1xcbiAgICBtYXgtd2lkdGg6IDkwdnc7XFxuICAgIHdpZHRoOiBhdXRvOyBcXG4gIH1cXG59XFxuXFxuLm5hbWUgeyAgXFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDsgIFxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMXB4OztcXG59XFxuXFxuLnRhZ3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWdhcDogNnB4O1xcbiAgZ2FwOiA2cHg7XFxuICAvKiBtYXJnaW4tdG9wOiA0cHg7ICovXFxuICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXFxufVxcblxcbi50YWc6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiI1xcXCI7XFxuICBvcGFjaXR5OiAuNTQ7XFxuICBtYXJnaW4tcmlnaHQ6IDFweDtcXG59XFxuXFxuLmhlYWRpbmctbGluayB7XFxuXFx0b3BhY2l0eTogLjY7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuLnBvc3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsa0NBQWtDO0VBQ2xDLHdDQUF3Qzs7RUFFeEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDZDQUE2QztFQUM3Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLHVCQUFrQjtFQUFsQixrQkFBa0I7Q0FDbkIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBUTtFQUFSLFFBQVE7RUFDUixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQVM7RUFBVCxTQUFTO0NBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgXFxuICAtLWRhcms6ICMxMzEzMTU7XFxuICAtLWxpZ2h0OiAjRkZGQkZFO1xcbiAgLS1tYWluOiAjRkFGMzNFO1xcbiAgLS1tYWluLWhhbGYtb3BhY2l0eTogI2ZhZjMzZTcwO1xcbiAgLS1zZWNvbmRhcnk6ICMwODdGOEM7XFxuICAtLXBvc3QtY2FyZC1iZzogaHNsKDIzNiwgMTAlLCAyNSUpO1xcbiAgLS1wb3N0LWNhcmQtYmctaG92ZXI6IGhzbCgyMjAsIDEyJSwgMzUlKTtcXG4gIFxcbiAgLS1zb2NpYWwtdHdpdHRlcjogaHNsKDIwMywgODklLCA0MiUpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbiAgd2lkdGg6IDcydnc7XFxuICBmb250LWZhbWlseTogSW50ZXIsIHVpLXNhbnMtc2VyaWYsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXFxuICBzY3JvbGwtbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBodG1sLCBib2R5IHtcXG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgICB3aWR0aDogYXV0bzsgXFxuICB9XFxufVxcblxcbi5uYW1lIHsgIFxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS4yZW07XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMXB4OztcXG59XFxuXFxuLnRhZ3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG4gIC8qIG1hcmdpbi10b3A6IDRweDsgKi9cXG4gIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cXG59XFxuXFxuLnRhZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIjXFxcIjtcXG4gIG9wYWNpdHk6IC41NDtcXG4gIG1hcmdpbi1yaWdodDogMXB4O1xcbn1cXG5cXG4uaGVhZGluZy1saW5rIHtcXG5cXHRvcGFjaXR5OiAuNjtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4ucG9zdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=