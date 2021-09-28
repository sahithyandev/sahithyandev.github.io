!function(t,e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var n;n={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(n).map((function(t){return[t[0],"["+t[1]+"m"]})));
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
var o=function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var n=e.href||"",r=e.disableDefaultStyles||!1,l=o({},e);return n.startsWith("/")||n.startsWith("#")?l["data-is-internal"]="":(l.target="_blank",l.rel="noopener noreferrer"),l.class=(l.class||"").split(" ").concat([r?"":"styled-link"]).join(" "),l.disableDefaultStyles=null,t.h("a",o({},l))},l='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />\n</svg>\n\n\n',s=[{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function a(e){var n=e.children,o=e.route;return t.h(r,{disableDefaultStyles:!0,href:o,class:"nav--link"},n)}function i(){var n=e.useState(!1),o=n[0],r=n[1],l=e.useState(!1),i=l[0],u=l[1];return document.documentElement.style.overflow=o?"hidden":"auto",e.useEffect((function(){var t,e,n,o=document.getElementsByClassName("toggled-bg")[0];o&&o.addEventListener("animationend",(t=function(){console.log("effect: set toggled",!1),r(!1)},void 0===(e=600)&&(e=300),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(n),n=setTimeout((function(){t.apply(null,o)}),e)}))}),[o,i]),t.h("div",null,t.h("span",{onClick:function(){console.log("set toggled",!0),r(!0),console.log("set should show",!0),u(!0)},style:{cursor:"pointer",pointerEvents:i?"none":"auto"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="4" y1="12" x2="20" y2="12" />\n  <line x1="4" y1="18" x2="20" y2="18" />\n</svg>\n\n\n'}}),o?t.h("div",{class:"toggled-bg "+(i?"show":"hide")},t.h("span",{onClick:function(){console.log("set should show",!1),u(!1)},class:"close-btn",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="18" y1="6" x2="6" y2="18" />\n  <line x1="6" y1="6" x2="18" y2="18" />\n</svg>\n\n\n'}}),t.h("ul",null,s.map((function(e,n){return t.h("li",{key:e.route,class:i?"":"hide",style:{"--animation-delay":250+180*n+"ms"}},t.h(a,{route:e.route},e.text))})))):null)}function u(){return t.h("ul",null,s.map((function(e){return t.h("li",{key:e.route},t.h(a,{route:e.route},e.text))})))}function c(n){var o=e.useState(!1),l=o[0],s=o[1],a=function(){return window.innerWidth<450};return e.useEffect((function(){window.addEventListener("resize",(function(){s(a())})),s(a())}),[l]),t.h("nav",{class:l?"mobile":"desktop"},n.hideLogo?t.h("div",null):t.h(r,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),l?t.h(i,null):t.h(u,null))}function h(){return t.h("footer",null,"© Sahithyan 2021")}function d(e){var n=e.tags;return t.h("div",{class:"tags-container"},n.map((function(e){return t.h("span",{key:e,class:"tag"},e)})))}function f(e){var n=pageData.postData,o=n.meta.title,s="https://sahithyandev.github.io/post/"+n.meta.slug,a=[{url:"https://www.twitter.com/share?text="+o+" by @sahithyandev&url="+s+"}",name:"Twitter",icon:l}].map((function(t){return t.url=encodeURI(t.url),t}));return t.h(t.Fragment,null,t.h(c,null),t.h("main",null,t.h("h1",{class:"post-title"},o),t.h("div",{class:"post-meta"},t.h("span",{class:"post-meta--release-date"},n.meta.dateCreated),t.h("span",{class:"post-meta--reading-time"},n.meta.estReadTime),t.h(d,{tags:n.meta.tags})),t.h("article",{dangerouslySetInnerHTML:{__html:n.renderedContent}})),t.h("div",{class:"post-share-section"},t.h("div",null,t.h(r,{href:encodeURI("https://twitter.com/search?q="+s)},"Discuss On Twitter")),t.h("div",null,t.h("span",{class:"share-span"},"Share this article on"),a.map((function(e){return t.h(r,{disableDefaultStyles:!0,href:e.url,key:e.name,title:e.name,dangerouslySetInnerHTML:{__html:e.icon}})})))),t.h(h,null))}t.render(t.h((function(){var n=window.location.pathname,o=e.useState([]),r=o[0];o[1];var l=n.match(/\/post\/([\w-]+)/)[1],s=r.find((function(t){return t.meta.slug===l}))||null;return t.h(f,{postData:s})}),null),document.getElementById("root"))}(preact,preact);
