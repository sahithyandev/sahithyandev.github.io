(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(f)?(p.add(f),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYTF:function(e,t,n){e.exports={"post--title":"post_post--title__EIZNE","post--head":"post_post--head__9J2gf","post--content":"post_post--content__f5fkD","post--share-section":"post_post--share-section__5PzwL"}},Giek:function(e,t,n){e.exports={"toc-heading":"table-of-contents_toc-heading__1EZuB","links-container":"table-of-contents_links-container__tBvzI"}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},VzDR:function(e,t,n){e.exports={linkable:"linkable-h2_linkable__1yxQ0"}},WcRE:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("rePB"),a=n("nKUr"),o=n("YFqc"),i=n.n(o),c=n("q1tI"),s=n("VzDR"),u=n.n(s),l=n("Giek"),f=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function e(t){var n=t.linkable,r=t.slug,o=n.headingText,c=o.replaceAll(" ","-").toLowerCase();return Object(a.jsxs)("li",{children:[Object(a.jsx)(i.a,{href:{pathname:"/post/[slug]",hash:c,query:{slug:r}},children:Object(a.jsx)("a",{className:f.a["toc-link"],children:o})}),0===n.innerHeadings.length?null:n.innerHeadings.map((function(t){return Object(a.jsx)("ul",{children:Object(a.jsx)(e,{linkable:t,slug:r})},n.headingText)}))]},o)},b={a:function(e){var t=e.href;return t&&t.startsWith("/")||t.startsWith("#")?Object(a.jsx)(i.a,{href:t,children:Object(a.jsx)("a",p({},e))}):Object(a.jsx)("a",p({target:"_blank",rel:"noopener noreferrer"},e))},h2:function(e){var t=e.children,n=Object(c.useState)(""),r=n[0],o=n[1],s=Object(c.useState)(""),l=s[0],f=s[1];return Object(c.useEffect)((function(){o(t.replace(/\s/g,"-").toLowerCase()),f(window.location.pathname.split("/").reverse()[0])}),[]),Object(a.jsxs)("h2",{className:u.a.linkable,id:r,"data-is-linkable":!0,children:[Object(a.jsx)(i.a,{href:{pathname:"/post/[slug]",hash:r,query:{slug:l}},children:Object(a.jsx)("a",{className:"reset",children:"#"})}),t]})},h3:function(e){var t=e.children,n=Object(c.useState)(""),r=n[0],o=n[1],s=Object(c.useState)(""),l=s[0],f=s[1];return Object(c.useEffect)((function(){o(t.replace(/\s/g,"-").toLowerCase()),f(window.location.pathname.split("/").reverse()[0])}),[]),Object(a.jsxs)("h3",{className:u.a.linkable,id:r,"data-is-linkable":!0,children:[Object(a.jsx)(i.a,{href:{pathname:"/post/[slug]",hash:r,query:{slug:l}},children:Object(a.jsx)("a",{className:"reset",children:"#"})}),t]})},TableOfContents:function(){var e=Object(c.useState)([]),t=e[0],n=e[1],r=Object(c.useState)(""),o=r[0],i=r[1];return Object(c.useEffect)((function(){var e=Array.from(document.querySelectorAll("*[data-is-linkable=true]"));n(function(e){var t,n=[],r=h(e);try{for(r.s();!(t=r.n()).done;){var a=t.value,o=a.tagName.toLowerCase();"h2"===o?n.push({headingText:a.innerText.slice(1),innerHeadings:[]}):"h3"===o&&n[n.length-1].innerHeadings.push({headingText:a.innerText.slice(1),innerHeadings:[]})}}catch(i){r.e(i)}finally{r.f()}return n}(e)),i(window.location.pathname.split("/").reverse()[0])}),[]),0===t.length?Object(a.jsx)("div",{style:{height:80}}):Object(a.jsxs)("section",{className:f.a["parent-section"],children:[Object(a.jsx)("h3",{className:f.a["toc-heading"],children:"Table Of Contents"}),Object(a.jsx)("ol",{className:f.a["links-container"],children:t.map((function(e){return Object(a.jsx)(v,{linkable:e,slug:o})}))})]})}}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var j=o.Children.only(h),g=j&&"object"===typeof j&&j.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),w=r(O,2),x=w[0],S=w[1],_=o.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,o.useEffect)((function(){var e=S&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,S,y,t,n]);var N={ref:_,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,p,m,v,b,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var E="undefined"!==typeof y?y:n&&n.locale,k=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,E,n&&n.locales,n&&n.domainLocales);N.href=k||(0,i.addBasePath)((0,i.addLocale)(p,E,n&&n.defaultLocale))}return o.default.cloneElement(j,N)};t.default=f},dNgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr");function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("WcRE"),c=n("o2pq"),s=n.n(c),u=i.a.a,l=function(e){var t=[["Twitter","https://www.twitter.com/iamSahithyan"],["Instagram","https://www.instagram.com/sahithyan_"],["GitHub","https://www.github.com/sahithyandev"],["Telegram","https://www.t.me/sahithyan","telegram-plane"],["CodersRank","https://profile.codersrank.io/user/sahithyandev",null,"CR"]].map((function(e){var t=o(e,4),n=t[0],r=t[1],a=t[2],i=t[3];return{providerName:n,link:r,icon:null===a?null:a||n.toLowerCase(),id:r.split("/").reverse()[0],shortName:i}}));return Object(r.jsx)("div",{className:s.a["social-media-icons-container"],children:t.map((function(e){return Object(r.jsx)(u,{className:"reset",href:e.link,title:"".concat(e.providerName," (").concat(e.id,")"),children:e.icon?Object(r.jsx)("i",{className:"fab fa-".concat(e.icon)}):Object(r.jsx)("span",{className:s.a["sm-icon"],children:e.shortName})},e.providerName)}))})}},"e+cM":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return L})),n.d(t,"d",(function(){return D.a})),n.d(t,"g",(function(){return q.a}));var r=n("nKUr"),a=n("YFqc"),o=n.n(a),i=function(e){var t=e.showLogo;return void 0===t&&(t=!0),Object(r.jsxs)("nav",{children:[t?Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:"name nav--logo reset",children:"Sahithyan"})}):Object(r.jsx)("div",{}),Object(r.jsxs)("ul",{className:"nav--links-container",children:[Object(r.jsx)("li",{className:"nav--link",children:Object(r.jsx)(o.a,{href:"/posts",children:Object(r.jsx)("a",{className:"reset",children:"Posts"})})}),Object(r.jsx)("li",{className:"nav--link",children:Object(r.jsx)(o.a,{href:"/about",children:Object(r.jsx)("a",{className:"reset",children:"About"})})})]})]})},c=n("g4pe"),s=n.n(c),u=n("nE+Q"),l=function(e){var t=e.title,n=e.description;return t=t||u.SITE_CONSTANTS.title,n=n||u.SITE_CONSTANTS.description,Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:t},"browser-title"),Object(r.jsx)("meta",{name:"description",content:n}),Object(r.jsx)("link",{rel:"icon",href:"/fav-me.png"}),Object(r.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(r.jsx)("meta",{name:"twitter:title",value:t}),Object(r.jsx)("meta",{name:"twitter:card",value:"summary"}),Object(r.jsx)("meta",{name:"twitter:description",value:n}),Object(r.jsx)("meta",{name:"twitter:site",value:u.SITE_CONSTANTS.author}),Object(r.jsx)("meta",{name:"twitter:creator",value:u.SITE_CONSTANTS.author}),Object(r.jsx)("meta",{property:"og:description",content:n},"og-description"),Object(r.jsx)("meta",{property:"og:title",content:t},"og-title"),Object(r.jsx)("meta",{property:"og:url",content:"sahithyan.com"},"og-url")]})})},f=function(){return Object(r.jsx)("footer",{children:"\xa9 Sahithyan 2021"})},d=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric"}),p=n("zD5r"),h=n.n(p),m=function(e){var t=e.slug,n=e.title,a=e.description,i=e.dateCreated,c=e.tags;return Object(r.jsx)(o.a,{href:"/post/".concat(t),children:Object(r.jsx)("a",{className:"reset",children:Object(r.jsxs)("div",{className:h.a["post-card"],children:[Object(r.jsx)("h3",{className:h.a.title,children:n}),Object(r.jsx)("p",{className:h.a.description,children:a}),Object(r.jsxs)("div",{className:h.a.meta,children:[Object(r.jsx)("span",{className:h.a["post-created-time"],children:d.format(i)}),Object(r.jsx)("div",{className:"tags-container",children:c.map((function(e){return Object(r.jsx)("span",{className:"tag",children:e},e)}))})]})]})})})},v=n("q1tI"),b=Object.prototype.hasOwnProperty;var y=new WeakMap,j=0;var g=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):y.has(e[n])?r=y.get(e[n]):(r=j,y.set(e[n],j++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),O=!0,w={isOnline:function(){return O},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){O=!0,e()}),!1),window.addEventListener("offline",(function(){return O=!1}),!1))}},x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};new g;var S="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),_=x({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,a){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&a.retryCount>n.errorRetryCount)){var o=Math.min(a.retryCount,8),i=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,i,a)}},errorRetryInterval:1e3*(S?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(S?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,a;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((a=t.length)===n.length)for(;a--&&e(t[a],n[a]););return-1===a}if(!r||"object"===typeof t){for(r in a=0,t){if(b.call(t,r)&&++a&&!b.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===a}}return t!==t&&n!==n},isPaused:function(){return!1}},w),N="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),E=(N||window.requestAnimationFrame,N?v.useEffect:v.useLayoutEffect,Object(v.createContext)({}));E.displayName="SWRConfigContext";var k=E,A={},I={};!function(){var e=0}();if(!N){var C=function(e){if(_.isDocumentVisible()&&_.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof _.registerOnFocus&&_.registerOnFocus((function(){return C(A)})),"function"===typeof _.registerOnReconnect&&_.registerOnReconnect((function(){return C(I)}))}Object.defineProperty(k.Provider,"default",{value:_});k.Provider;var T=n("FYTF"),M=n.n(T);function P(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L=function(e){var t=e.meta,n=e.children,a=t.title,o=t.description,c=(t.slug,t.tags),p=t.estReadTime,h=t.dateCreated,m=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=u.SITE_CONSTANTS.author,n="";return e&&(n=window.location.href.split("#")[0]),[{name:"Twitter",url:"https://www.twitter.com/share?text=".concat(a," by ").concat(t,"&url=").concat(n,"&via=").concat(t.slice(1))},{name:"WhatsApp",url:"https://wa.me/?text=".concat(a," by ").concat(t,". Read at ").concat(n)}]};return Object(v.useEffect)((function(){var e,t=m(!0),n=P(document.getElementById("post-share-links").children);try{var r=function(){var n=e.value;n.href=t.find((function(e){return e.name===n.title})).url};for(n.s();!(e=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{title:"".concat(a," - ").concat(u.SITE_CONSTANTS.title),description:o}),Object(r.jsxs)(s.a,{children:[Object(r.jsx)("link",{defer:!0,rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.3/css/all.css",integrity:"sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",crossOrigin:"anonymous"}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/prismjs@1.23.0/themes/prism-twilight.css"})]}),Object(r.jsx)(i,{}),Object(r.jsxs)("main",{className:"post-container",children:[Object(r.jsx)("h2",{className:M.a["post--title"],children:a}),Object(r.jsxs)("div",{className:M.a["post--head"],children:[Object(r.jsx)("span",{className:M.a["post--time"],children:d.format(h)}),Object(r.jsxs)("div",{style:{display:"flex",gap:4,flexDirection:"column",alignItems:"flex-end"},children:[Object(r.jsxs)("span",{children:[p," min read"]}),Object(r.jsx)("div",{className:"tags-container",children:c.map((function(e){return Object(r.jsx)("span",{className:"tag",children:e},e)}))})]})]}),Object(r.jsx)("div",{className:M.a["post--content"],children:Object(r.jsx)("article",{children:n})}),Object(r.jsxs)("div",{className:M.a["post--share-section"],children:[Object(r.jsx)("span",{children:"Share this article on"}),Object(r.jsx)("div",{id:"post-share-links",children:m(!1).map((function(e){return Object(r.jsx)("a",{className:"reset",title:e.name,href:e.url,children:Object(r.jsx)("i",{className:"fab fa-".concat(e.name.toLowerCase())})},e.name)}))})]})]}),Object(r.jsx)(f,{})]})},D=n("WcRE"),q=n("dNgc")},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},"nE+Q":function(e,t){e.exports={SITE_CONSTANTS:{title:"Sahithyan's Blog",description:"Blog of a teen web developer named Sahithyan",author:"@iamSahithyan",POSTS_DIR:"./posts/",POSTS_DATA_FILE:"./public/posts.json"}}},o2pq:function(e,t,n){e.exports={"social-media-icons-container":"social-links_social-media-icons-container__11Hds","sm-icon":"social-links_sm-icon__1zWLY"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n("q1tI"),o=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map},zD5r:function(e,t,n){e.exports={"post-card":"post-card_post-card__3OGWA",title:"post-card_title__3i5Ez",description:"post-card_description__Sqx7q",meta:"post-card_meta__Qnh4S","post-created-time":"post-card_post-created-time__ojcIN"}}}]);