(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return s},mdx:function(){return y},useMDXComponents:function(){return p},withMDXComponents:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){return function(t){var n=p(t.components);return r.createElement(e,c({},t,{components:n}))}},p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),s=o,b=f["".concat(u,".").concat(s)]||f[s]||d[s]||c;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var c=n.length,u=new Array(c);u[0]=b;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"===typeof e?e:o,u[1]=a;for(var l=2;l<c;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8093:function(e,t,n){"use strict";var r=n(7294),o=n(3905);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var a=c(r),i=u(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[c,u]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{u(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=r.useMemo((()=>{const n=Object.assign({mdx:i.mdx,React:a.default},t),r=Object.keys(n),o=Object.values(n),c=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return c.apply(c,o)}),[t,e]);if(!c)return a.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=a.default.createElement(i.MDXProvider,{components:n},a.default.createElement(l,null));return o?a.default.createElement("div",null,f):f}},5832:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return l}});var r=n(6156),o=n(5893),c=n(8093),u=n(8997);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=!0;t.default=function(e){var t=e.meta,n=e.mdxSource,r=e.sourceContent;return(0,o.jsx)(u.JG,{meta:t,children:(0,o.jsx)(c.R,i(i({},n),{},{components:u.tl,scope:{sourceContent:r}}))})}},8401:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[slug]",function(){return n(5832)}])}},function(e){e.O(0,[774,888,179],(function(){return t=8401,e(e.s=t);var t}));var t=e.O();_N_E=t}]);