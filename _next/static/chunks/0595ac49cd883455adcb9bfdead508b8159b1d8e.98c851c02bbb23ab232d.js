(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{Ea2X:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long",day:"numeric"}),i=function(e){return new RegExp(/^#[A-Za-z]*$/i).test(e)}},Giek:function(e,t,n){e.exports={"toc-heading":"table-of-contents_toc-heading__1EZuB","links-container":"table-of-contents_links-container__tBvzI"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),i=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,a.resolveHref)(i,e.as):c||o}}),[i,e.href,e.as]),d=f.href,h=f.as,p=e.children,b=e.replace,j=e.shallow,m=e.scroll,O=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var v=o.Children.only(p),y=v&&"object"===typeof v&&v.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),w=r(g,2),x=w[0],_=w[1],N=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,o.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof O?O:n&&n.locale,i=l[d+"%"+h+(r?"%"+r:"")];e&&!i&&u(n,d,h,{locale:r})}),[h,d,_,O,t,n]);var S={ref:N,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,d,h,b,j,m,O)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,d,h,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var T="undefined"!==typeof O?O:n&&n.locale,E=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(h,T,n&&n.locales,n&&n.domainLocales);S.href=E||(0,a.addBasePath)((0,a.addLocale)(h,T,n&&n.defaultLocale))}return o.default.cloneElement(v,S)};t.default=f},dNgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),i=n("rePB"),o=n("uOCG"),a=n("o2pq"),c=n.n(a),s=n("nE+Q");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u=function(e){var t=[{providerName:"Twitter",link:"https://www.twitter.com/iamSahithyan"},{providerName:"Instagram",link:"https://www.instagram.com/sahithyan_"},{providerName:"GitHub",link:"https://www.github.com/sahithyandev"},{providerName:"Telegram",link:"https://www.t.me/sahithyan",icon:"telegram-plane"},{providerName:"RSS",link:s.SITE_CONSTANTS.rss_feed_url,iconType:"fas"}].map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({icon:e.providerName.toLowerCase(),iconType:"fab",id:e.link.split("/").reverse()[0]},e)}));return Object(r.jsx)("div",{className:c.a["social-media-icons-container"],children:t.map((function(e){return Object(r.jsx)(o.a,{className:"reset",href:e.link,title:"".concat(e.providerName," (").concat(e.id,")"),children:e.icon?Object(r.jsx)("i",{className:"".concat(e.iconType," fa-").concat(e.icon)}):Object(r.jsx)("span",{className:c.a["sm-icon"],children:e.shortName})},e.providerName)}))})}},"e+cM":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"a",(function(){return L})),n.d(t,"e",(function(){return Y})),n.d(t,"h",(function(){return Z.a})),n.d(t,"b",(function(){return P.a}));var r=n("nKUr"),i=n("YFqc"),o=n.n(i),a=function(e){var t=e.showLogo;return void 0===t&&(t=!0),Object(r.jsxs)("nav",{children:[t?Object(r.jsx)(o.a,{href:"/",children:Object(r.jsx)("a",{className:"name nav--logo reset",children:"Sahithyan"})}):Object(r.jsx)("div",{}),Object(r.jsxs)("ul",{className:"nav--links-container",children:[Object(r.jsx)("li",{className:"nav--link",children:Object(r.jsx)(o.a,{href:"/posts",children:Object(r.jsx)("a",{className:"reset",children:"Posts"})})}),Object(r.jsx)("li",{className:"nav--link",children:Object(r.jsx)(o.a,{href:"/about",children:Object(r.jsx)("a",{className:"reset",children:"About"})})})]})]})},c=n("g4pe"),s=n.n(c),l=n("nE+Q"),u=function(e){var t=e.title,n=e.description;t=t||l.SITE_CONSTANTS.title,n=n||l.SITE_CONSTANTS.description;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:t},"browser-title"),Object(r.jsx)("meta",{name:"description",content:n}),Object(r.jsx)("link",{rel:"alternate",href:l.SITE_CONSTANTS.rss_feed_url,type:"application/rss+xml",title:"RSS feed"}),Object(r.jsx)("link",{rel:"canonical",href:l.SITE_CONSTANTS.website_url}),Object(r.jsx)("meta",{name:"twitter:title",value:t}),Object(r.jsx)("meta",{name:"twitter:card",value:"summary"}),Object(r.jsx)("meta",{name:"twitter:description",value:n}),Object(r.jsx)("meta",{name:"twitter:creator",value:l.SITE_CONSTANTS.author}),Object(r.jsx)("meta",{property:"og:description",content:n},"og-description"),Object(r.jsx)("meta",{property:"og:title",content:t},"og-title"),Object(r.jsx)("meta",{property:"og:url",content:"sahithyandev.github.io"},"og-url"),Object(r.jsx)("meta",{property:"og:site_name",content:"Sahithyan's Blog"},"og-site-name"),Object(r.jsx)("meta",{property:"og:image",content:"https://sahithyandev.github.io/fav-me.png"},"og-image"),Object(r.jsx)("meta",{property:"og:image:alt",content:"Sahithyan's official profile picture"},"og-image--alt")]})})},f=function(){return Object(r.jsx)("footer",{children:"\xa9 Sahithyan 2021"})},d=n("Ea2X"),h=n("zD5r"),p=n.n(h),b=function(e){var t=e.slug,n=e.title,i=e.description,a=e.dateCreated,c=e.tags;return Object(r.jsx)(o.a,{href:"/post/".concat(t),children:Object(r.jsx)("a",{className:"reset",children:Object(r.jsxs)("div",{className:p.a["post-card"],children:[Object(r.jsx)("h3",{className:p.a.title,children:n}),Object(r.jsx)("p",{className:p.a.description,children:i}),Object(r.jsxs)("div",{className:p.a.meta,children:[Object(r.jsx)("span",{className:p.a["post-created-time"],children:d.a.format(a)}),Object(r.jsx)("div",{className:"tags-container",children:c.map((function(e){return Object(r.jsx)("span",{className:"tag",children:e},e)}))})]})]})})})},j=n("q1tI"),m=Object.prototype.hasOwnProperty;var O=new WeakMap,v=0;var y=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):O.has(e[n])?r=O.get(e[n]):(r=v,O.set(e[n],v++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),g=!0,w={isOnline:function(){return g},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){g=!0,e()}),!1),window.addEventListener("offline",(function(){return g=!1}),!1))}},x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};new y;var _="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),N=x({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),a=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,a,i)}},errorRetryInterval:1e3*(_?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(_?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(m.call(t,r)&&++i&&!m.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},w),S="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),T=(S||window.requestAnimationFrame,S?j.useEffect:j.useLayoutEffect,Object(j.createContext)({}));T.displayName="SWRConfigContext";var E=T,k={},I={};!function(){var e=0}();if(!S){var A=function(e){if(N.isDocumentVisible()&&N.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof N.registerOnFocus&&N.registerOnFocus((function(){return A(k)})),"function"===typeof N.registerOnReconnect&&N.registerOnReconnect((function(){return A(I)}))}Object.defineProperty(E.Provider,"default",{value:N});E.Provider;var P=n("uOCG"),C=n("kSvZ"),D=n.n(C),L=function(e){var t=e.meta,n=e.children,i=t.title,o=t.description,c=(t.slug,t.tags),h=t.estReadTime,p=t.dateCreated,b=Object(j.useState)(""),m=b[0],O=b[1];return Object(j.useEffect)((function(){O(window.location.href)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{title:"".concat(i," - ").concat(l.SITE_CONSTANTS.title),description:o}),Object(r.jsxs)(s.a,{children:[Object(r.jsx)("link",{defer:!0,rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.15.3/css/all.css",integrity:"sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",crossOrigin:"anonymous"}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/prismjs@1.23.0/themes/prism-twilight.css"})]}),Object(r.jsx)(a,{}),Object(r.jsxs)("main",{className:"post-container",children:[Object(r.jsx)("h2",{className:D.a["post--title"],children:i}),Object(r.jsxs)("div",{className:D.a["post--head"],children:[Object(r.jsx)("span",{className:D.a["post--time"],children:d.a.format(p)}),Object(r.jsxs)("div",{style:{display:"flex",gap:4,flexDirection:"column",alignItems:"flex-end"},children:[Object(r.jsxs)("span",{children:[h," min read"]}),Object(r.jsx)("div",{className:"tags-container",children:c.map((function(e){return Object(r.jsx)("span",{className:"tag",children:e},e)}))})]})]}),Object(r.jsx)("div",{className:D.a["post--content"],children:Object(r.jsx)("article",{children:n})})]}),Object(r.jsxs)("div",{className:D.a["post--bottom-bar"],children:[Object(r.jsx)("div",{children:Object(r.jsx)(P.a,{href:encodeURI("https://twitter.com/search?q=".concat(m)),className:D.a["post--content-a"],children:"Discuss On Twitter"})}),Object(r.jsxs)("div",{className:D.a["post--share-section"],children:[Object(r.jsx)("span",{children:"Share this article on"}),Object(r.jsx)("div",{children:function(){var e=l.SITE_CONSTANTS.author;return[{name:"Twitter",url:"https://www.twitter.com/share?text=".concat(i," by ").concat(e,"&url=").concat(m,"}")},{name:"WhatsApp",url:"https://wa.me/?text=".concat(i," by ").concat(e,". Read at ").concat(m)}].map((function(e){return e.url=encodeURI(e.url),e}))}().map((function(e){return Object(r.jsx)(P.a,{href:e.url,title:e.name,className:"reset",children:Object(r.jsx)("i",{className:"fab fa-".concat(e.name.toLowerCase())})},e.name)}))})]})]}),Object(r.jsx)(f,{})]})},R=n("rePB"),q=n("Giek"),M=n.n(q);function U(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=function(e){return Array.from(e.children).find((function(e){return e.classList.contains("linkable--heading-text")})).innerText},K=function e(t){var n=t.linkable,i=t.slug,a=n.headingText,c=a.replaceAll(" ","-").toLowerCase();return Object(r.jsxs)("li",{children:[Object(r.jsx)(o.a,{href:{pathname:"/post/[slug]",hash:c,query:{slug:i}},children:Object(r.jsx)("a",{className:M.a["toc-link"],children:a})}),0===n.innerHeadings.length?null:Object(r.jsx)("ul",{children:n.innerHeadings.map((function(t){return Object(r.jsx)(e,{linkable:t,slug:i},t.headingText)}))},n.headingText)]})},F=n("w1Dh"),G=n.n(F),H=function e(t){return"string"===typeof t?t:Array.isArray(t)?t.map((function(t){return e(t)})).join(""):e(t.props.children)},J=function(e){return function(t){var n=t.children,i=Object(j.useState)(""),a=i[0],c=i[1],s=Object(j.useState)(void 0),l=s[0],u=s[1];return Object(j.useEffect)((function(){c(H(n).replace(/\s/g,"-").toLowerCase());try{u(window.location.pathname.split("/").reverse()[0])}catch(e){console.warn(e),u("___err___")}}),[]),Object(r.jsxs)(e,{className:G.a.linkable,id:a,"data-is-linkable":!0,children:[void 0===l?null:Object(r.jsx)(o.a,{href:{pathname:"/post/[slug]",hash:a,query:{slug:l}},children:Object(r.jsx)("a",{className:["reset",G.a["link-hashtag"]].join(" "),children:"#"})}),Object(r.jsx)("span",{className:"linkable--heading-text",children:n})]})}};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){Object(R.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={a:P.a,h2:J("h2"),h3:J("h3"),img:function(e){return e.alt||console.info("Image found with no alt\nDEBUG_NOTE ".concat(e.src)),e.src||console.info("Image found with no src\nDEBUG_NOTE ".concat(e.alt)),Object(r.jsx)("img",Q(Q({},e),{},{loading:"lazy"}))},TableOfContents:function(){var e=Object(j.useState)([]),t=e[0],n=e[1],i=Object(j.useState)(""),o=i[0],a=i[1];return Object(j.useEffect)((function(){var e=function(e){var t,n=[],r=U(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,o=i.tagName.toLowerCase();"h2"===o?n.push({headingText:B(i),innerHeadings:[]}):"h3"===o&&n[n.length-1].innerHeadings.push({headingText:B(i),innerHeadings:[]})}}catch(a){r.e(a)}finally{r.f()}return n}(Array.from(document.querySelectorAll("*[data-is-linkable=true]")));n(e),a(window.location.pathname.split("/").reverse()[0])}),[]),0===t.length?Object(r.jsx)("div",{style:{height:80}}):Object(r.jsxs)("section",{className:M.a["parent-section"],children:[Object(r.jsx)("h3",{className:M.a["toc-heading"],children:"Table Of Contents"}),Object(r.jsx)("ol",{className:M.a["links-container"],children:t.map((function(e){return Object(r.jsx)(K,{linkable:e,slug:o},e.headingText)}))})]})},Note:function(e){return Object(r.jsx)("div",Q({className:D.a.note},e))},BlockQuote:function(e){var t=e.children,n=e.citationLink,i=void 0===n?"":n,o=e.citationText,a=void 0===o?"":o;return Object(r.jsxs)("figure",{children:[Object(r.jsx)("blockquote",{cite:i,children:t}),Object(r.jsx)("figcaption",{children:Object(r.jsx)("cite",{children:a})})]})}},Z=n("dNgc")},g4pe:function(e,t,n){e.exports=n("8Kt/")},kSvZ:function(e,t,n){e.exports={"post--title":"blog-post_post--title__weQqf","post--head":"blog-post_post--head__1MCRZ","post--content":"blog-post_post--content__24urQ","post--content-a":"blog-post_post--content-a__2swOr",note:"blog-post_note__3Q6vJ","post--bottom-bar":"blog-post_post--bottom-bar__N0FJI","post--share-section":"blog-post_post--share-section__1pIqJ"}},"nE+Q":function(e,t){e.exports={SITE_CONSTANTS:{title:"Sahithyan's Blog",description:"Blog of Sahithyan, a teen web developer, a student and a tech enthusiast.",author:"@iamSahithyan",website_url:"https://sahithyandev.github.io/",rss_feed_url:"https://sahithyandev.github.io/feed.xml",POSTS_DIR:"./posts/",POSTS_DATA_FILE:"./public/posts.json"}}},o2pq:function(e,t,n){e.exports={"social-media-icons-container":"social-links_social-media-icons-container__11Hds","sm-icon":"social-links_sm-icon__1zWLY"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},uOCG:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("rePB"),i=n("nKUr");function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n("YFqc"),s=n.n(c);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=Object.entries({__YOUTUBE_CHANNEL__:"https://www.youtube.com/channel"}),n=e.href,r=n&&n.startsWith("/")||n.startsWith("#");return n||console.info("A link without 'href' is found\nDEBUG_NOTE ".concat(e.children)),t.map((function(e){var t=a(e,2),r=t[0],i=t[1];n=n.replace(r,i)})),r?Object(i.jsx)(s.a,{href:n,children:Object(i.jsx)("a",u({},e))}):Object(i.jsx)("a",u({target:"_blank",rel:"noopener noreferrer"},e))}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,i.useRef)(),l=(0,i.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,i.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,i.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[h,f]};var i=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map},w1Dh:function(e,t,n){e.exports={linkable:"linkable-head_linkable__2KbTa","link-hashtag":"linkable-head_link-hashtag__kJWdR"}},zD5r:function(e,t,n){e.exports={"post-card":"post-card_post-card__3OGWA",title:"post-card_title__3i5Ez",description:"post-card_description__Sqx7q",meta:"post-card_meta__Qnh4S","post-created-time":"post-card_post-created-time__ojcIN"}}}]);