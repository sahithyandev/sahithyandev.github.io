(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{Ea2X:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric"}),i=function(e){return new RegExp(/^#[A-Za-z]*$/i).test(e)}},Giek:function(e,t,n){e.exports={"toc-heading":"table-of-contents_toc-heading__1EZuB","links-container":"table-of-contents_links-container__tBvzI"}},VzDR:function(e,t,n){e.exports={linkable:"linkable-h2_linkable__1yxQ0"}},WcRE:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("rePB"),i=n("nKUr"),o=n("YFqc"),a=n.n(o),c=n("q1tI"),s=n("VzDR"),l=n.n(s),u=n("Giek"),f=n.n(u);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function e(t){var n=t.linkable,r=t.slug,o=n.headingText,c=o.replaceAll(" ","-").toLowerCase();return Object(i.jsxs)("li",{children:[Object(i.jsx)(a.a,{href:{pathname:"/post/[slug]",hash:c,query:{slug:r}},children:Object(i.jsx)("a",{className:f.a["toc-link"],children:o})}),0===n.innerHeadings.length?null:n.innerHeadings.map((function(t){return Object(i.jsx)("ul",{children:Object(i.jsx)(e,{linkable:t,slug:r})},n.headingText)}))]},o)},j={a:function(e){var t=e.href;return t&&t.startsWith("/")||t.startsWith("#")?Object(i.jsx)(a.a,{href:t,children:Object(i.jsx)("a",h({},e))}):Object(i.jsx)("a",h({target:"_blank",rel:"noopener noreferrer"},e))},h2:function(e){var t=e.children,n=Object(c.useState)(""),r=n[0],o=n[1],s=Object(c.useState)(""),u=s[0],f=s[1];return Object(c.useEffect)((function(){o(t.replace(/\s/g,"-").toLowerCase()),f(window.location.pathname.split("/").reverse()[0])}),[]),Object(i.jsxs)("h2",{className:l.a.linkable,id:r,"data-is-linkable":!0,children:[Object(i.jsx)(a.a,{href:{pathname:"/post/[slug]",hash:r,query:{slug:u}},children:Object(i.jsx)("a",{className:"reset",children:"#"})}),t]})},h3:function(e){var t=e.children,n=Object(c.useState)(""),r=n[0],o=n[1],s=Object(c.useState)(""),u=s[0],f=s[1];return Object(c.useEffect)((function(){o(t.replace(/\s/g,"-").toLowerCase()),f(window.location.pathname.split("/").reverse()[0])}),[]),Object(i.jsxs)("h3",{className:l.a.linkable,id:r,"data-is-linkable":!0,children:[Object(i.jsx)(a.a,{href:{pathname:"/post/[slug]",hash:r,query:{slug:u}},children:Object(i.jsx)("a",{className:"reset",children:"#"})}),t]})},TableOfContents:function(){var e=Object(c.useState)([]),t=e[0],n=e[1],r=Object(c.useState)(""),o=r[0],a=r[1];return Object(c.useEffect)((function(){var e=Array.from(document.querySelectorAll("*[data-is-linkable=true]"));n(function(e){var t,n=[],r=p(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,o=i.tagName.toLowerCase();"h2"===o?n.push({headingText:i.innerText.slice(1),innerHeadings:[]}):"h3"===o&&n[n.length-1].innerHeadings.push({headingText:i.innerText.slice(1),innerHeadings:[]})}}catch(a){r.e(a)}finally{r.f()}return n}(e)),a(window.location.pathname.split("/").reverse()[0])}),[]),0===t.length?Object(i.jsx)("div",{style:{height:80}}):Object(i.jsxs)("section",{className:f.a["parent-section"],children:[Object(i.jsx)("h3",{className:f.a["toc-heading"],children:"Table Of Contents"}),Object(i.jsx)("ol",{className:f.a["links-container"],children:t.map((function(e){return Object(i.jsx)(m,{linkable:e,slug:o})}))})]})}}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),i=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,a.resolveHref)(i,e.as):c||o}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,b=e.replace,m=e.shallow,j=e.scroll,v=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var y=o.Children.only(p),g=y&&"object"===typeof y&&y.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),x=r(O,2),w=x[0],S=x[1],N=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,o.useEffect)((function(){var e=S&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof v?v:n&&n.locale,i=l[d+"%"+h+(r?"%"+r:"")];e&&!i&&u(n,d,h,{locale:r})}),[h,d,S,v,t,n]);var _={ref:N,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,h,b,m,j,v)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var E="undefined"!==typeof v?v:n&&n.locale,k=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(h,E,n&&n.locales,n&&n.domainLocales);_.href=k||(0,a.addBasePath)((0,a.addLocale)(h,E,n&&n.defaultLocale))}return o.default.cloneElement(y,_)};t.default=f},dNgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n("WcRE"),c=n("o2pq"),s=n.n(c),l=a.a.a,u=function(e){var t=[["Twitter","https://www.twitter.com/iamSahithyan"],["Instagram","https://www.instagram.com/sahithyan_"],["GitHub","https://www.github.com/sahithyandev"],["Telegram","https://www.t.me/sahithyan","telegram-plane"],["CodersRank","https://profile.codersrank.io/user/sahithyandev",null,"CR"]].map((function(e){var t=o(e,4),n=t[0],r=t[1],i=t[2],a=t[3];return{providerName:n,link:r,icon:null===i?null:i||n.toLowerCase(),id:r.split("/").reverse()[0],shortName:a}}));return Object(r.jsx)("div",{className:s.a["social-media-icons-container"],children:t.map((function(e){return Object(r.jsx)(l,{className:"reset",href:e.link,title:"".concat(e.providerName," (").concat(e.id,")"),children:e.icon?Object(r.jsx)("i",{className:"fab fa-".concat(e.icon)}):Object(r.jsx)("span",{className:s.a["sm-icon"],children:e.shortName})},e.providerName)}))})}},"e+cM":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return D})),n.d(t,"d",(function(){return q.a})),n.d(t,"g",(function(){return M.a}));var r=n("nKUr"),i=n("YFqc"),o=n.n(i),a=function(e){var t=e.showLogo;return void 0===t&&(t=!0),Object(r.jsxs)("nav",{children:[t?Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:"name nav--logo reset",children:"Sahithyan"})}):Object(r.jsx)("div",{}),Object(r.jsxs)("ul",{className:"nav--links-container",children:[Object(r.jsx)("li",{className:"nav--link",children:Object(r.jsx)(o.a,{href:"/posts",children:Object(r.jsx)("a",{className:"reset",children:"Posts"})})}),Object(r.jsx)("li",{className:"nav--link",children:Object(r.jsx)(o.a,{href:"/about",children:Object(r.jsx)("a",{className:"reset",children:"About"})})})]})]})},c=n("g4pe"),s=n.n(c),l=(n("ctBr"),n("nE+Q")),u=function(e){var t=e.title,n=e.description;t=t||l.SITE_CONSTANTS.title,n=n||l.SITE_CONSTANTS.description;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:t},"browser-title"),Object(r.jsx)("meta",{name:"description",content:n}),Object(r.jsx)("meta",{name:"twitter:title",value:t}),Object(r.jsx)("meta",{name:"twitter:card",value:"summary"}),Object(r.jsx)("meta",{name:"twitter:description",value:n}),Object(r.jsx)("meta",{name:"twitter:creator",value:l.SITE_CONSTANTS.author}),Object(r.jsx)("meta",{property:"og:description",content:n},"og-description"),Object(r.jsx)("meta",{property:"og:title",content:t},"og-title"),Object(r.jsx)("meta",{property:"og:url",content:"sahithyandev.github.io"},"og-url"),Object(r.jsx)("meta",{property:"og:site_name",content:"Sahithyan's Blog"},"og-site-name"),Object(r.jsx)("meta",{property:"og:image",content:"https://sahithyandev.github.io/fav-me.png"},"og-image"),Object(r.jsx)("meta",{property:"og:image:alt",content:"Sahithyan's official profile picture"},"og-image--alt")]})})},f=function(){return Object(r.jsx)("footer",{children:"\xa9 Sahithyan 2021"})},d=n("Ea2X"),h=n("zD5r"),p=n.n(h),b=function(e){var t=e.slug,n=e.title,i=e.description,a=e.dateCreated,c=e.tags;return Object(r.jsx)(o.a,{href:"/post/".concat(t),children:Object(r.jsx)("a",{className:"reset",children:Object(r.jsxs)("div",{className:p.a["post-card"],children:[Object(r.jsx)("h3",{className:p.a.title,children:n}),Object(r.jsx)("p",{className:p.a.description,children:i}),Object(r.jsxs)("div",{className:p.a.meta,children:[Object(r.jsx)("span",{className:p.a["post-created-time"],children:d.a.format(a)}),Object(r.jsx)("div",{className:"tags-container",children:c.map((function(e){return Object(r.jsx)("span",{className:"tag",children:e},e)}))})]})]})})})},m=n("q1tI"),j=Object.prototype.hasOwnProperty;var v=new WeakMap,y=0;var g=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):v.has(e[n])?r=v.get(e[n]):(r=y,v.set(e[n],y++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),O=!0,x={isOnline:function(){return O},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){O=!0,e()}),!1),window.addEventListener("offline",(function(){return O=!1}),!1))}},w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};new g;var S="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),N=w({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),a=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,a,i)}},errorRetryInterval:1e3*(S?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(S?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(j.call(t,r)&&++i&&!j.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},x),_="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),E=(_||window.requestAnimationFrame,_?m.useEffect:m.useLayoutEffect,Object(m.createContext)({}));E.displayName="SWRConfigContext";var k=E,T={},A={};!function(){var e=0}();if(!_){var I=function(e){if(N.isDocumentVisible()&&N.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof N.registerOnFocus&&N.registerOnFocus((function(){return I(T)})),"function"===typeof N.registerOnReconnect&&N.registerOnReconnect((function(){return I(A)}))}Object.defineProperty(k.Provider,"default",{value:N});k.Provider;var C=n("kSvZ"),L=n.n(C);function R(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(e){var t=e.meta,n=e.children,i=t.title,o=t.description,c=(t.slug,t.tags),h=t.estReadTime,p=t.dateCreated,b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=l.SITE_CONSTANTS.author,n="";return e&&(n=window.location.href.split("#")[0]),[{name:"Twitter",url:"https://www.twitter.com/share?text=".concat(i," by ").concat(t,"&url=").concat(n,"&via=").concat(t.slice(1))},{name:"WhatsApp",url:"https://wa.me/?text=".concat(i," by ").concat(t,". Read at ").concat(n)}]};return Object(m.useEffect)((function(){var e,t=b(!0),n=R(document.getElementById("post-share-links").children);try{var r=function(){var n=e.value;n.href=t.find((function(e){return e.name===n.title})).url};for(n.s();!(e=n.n()).done;)r()}catch(i){n.e(i)}finally{n.f()}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{title:"".concat(i," - ").concat(l.SITE_CONSTANTS.title),description:o}),Object(r.jsxs)(s.a,{children:[Object(r.jsx)("link",{defer:!0,rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.3/css/all.css",integrity:"sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",crossOrigin:"anonymous"}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/prismjs@1.23.0/themes/prism-twilight.css"})]}),Object(r.jsx)(a,{}),Object(r.jsxs)("main",{className:"post-container",children:[Object(r.jsx)("h2",{className:L.a["post--title"],children:i}),Object(r.jsxs)("div",{className:L.a["post--head"],children:[Object(r.jsx)("span",{className:L.a["post--time"],children:d.a.format(p)}),Object(r.jsxs)("div",{style:{display:"flex",gap:4,flexDirection:"column",alignItems:"flex-end"},children:[Object(r.jsxs)("span",{children:[h," min read"]}),Object(r.jsx)("div",{className:"tags-container",children:c.map((function(e){return Object(r.jsx)("span",{className:"tag",children:e},e)}))})]})]}),Object(r.jsx)("div",{className:L.a["post--content"],children:Object(r.jsx)("article",{children:n})}),Object(r.jsxs)("div",{className:L.a["post--share-section"],children:[Object(r.jsx)("span",{children:"Share this article on"}),Object(r.jsx)("div",{id:"post-share-links",children:b(!1).map((function(e){return Object(r.jsx)("a",{className:"reset",title:e.name,href:e.url,children:Object(r.jsx)("i",{className:"fab fa-".concat(e.name.toLowerCase())})},e.name)}))})]})]}),Object(r.jsx)(f,{})]})},q=n("WcRE"),M=n("dNgc")},g4pe:function(e,t,n){e.exports=n("8Kt/")},kSvZ:function(e,t,n){e.exports={"post--title":"blog-post_post--title__weQqf","post--head":"blog-post_post--head__1MCRZ","post--content":"blog-post_post--content__24urQ","post--share-section":"blog-post_post--share-section__1pIqJ"}},"nE+Q":function(e,t){e.exports={SITE_CONSTANTS:{title:"Sahithyan's Blog",description:"Blog of Sahithyan, a teen web developer, a student and a tech enthusiast.",author:"@iamSahithyan",POSTS_DIR:"./posts/",POSTS_DATA_FILE:"./public/posts.json"}}},o2pq:function(e,t,n){e.exports={"social-media-icons-container":"social-links_social-media-icons-container__11Hds","sm-icon":"social-links_sm-icon__1zWLY"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,i.useRef)(),l=(0,i.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,i.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,i.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[h,f]};var i=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map},zD5r:function(e,t,n){e.exports={"post-card":"post-card_post-card__3OGWA",title:"post-card_title__3i5Ez",description:"post-card_description__Sqx7q",meta:"post-card_meta__Qnh4S","post-created-time":"post-card_post-created-time__ojcIN"}}}]);