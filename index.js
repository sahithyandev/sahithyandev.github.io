!function(n,t){"use strict";
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
    ***************************************************************************** */var e;e={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(e).map((function(n){return[n[0],"["+n[1]+"m"]})));
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
var o=function(){return(o=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},r=function(t){t.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+t.children);var e=t.href||"",r=t.disableDefaultStyles||!1,i=o({},t);return e.startsWith("/")||e.startsWith("#")?i["data-is-internal"]="":(i.target="_blank",i.rel="noopener noreferrer"),i.class=(i.class||"").split(" ").concat([r?"":"styled-link"]).join(" "),i.disableDefaultStyles=null,n.h("a",o({},i))},i=[{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function s(t){var e=t.children,o=t.route;return n.h(r,{disableDefaultStyles:!0,href:o,class:"nav--link"},e)}function l(){var e=t.useState(!1),o=e[0],r=e[1],l=t.useState(!1),a=l[0],h=l[1];return document.documentElement.style.overflow=o?"hidden":"auto",t.useEffect((function(){var n,t,e,o=document.getElementsByClassName("toggled-bg")[0];o&&o.addEventListener("animationend",(n=function(){r(a)},void 0===(t=800)&&(t=300),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(e),e=setTimeout((function(){n.apply(null,o)}),t)}))}),[o,a]),n.h("div",null,n.h("span",{onClick:function(){r(!0),h(!0)},style:{cursor:"pointer"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="4" y1="12" x2="20" y2="12" />\n  <line x1="4" y1="18" x2="20" y2="18" />\n</svg>\n\n\n'}}),o?n.h("div",{class:"toggled-bg "+(a?"show":"hide")},n.h("span",{onClick:function(){return h(!1)},class:"close-btn",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="18" y1="6" x2="6" y2="18" />\n  <line x1="6" y1="6" x2="18" y2="18" />\n</svg>\n\n\n'}}),n.h("ul",null,i.map((function(t,e){return n.h("li",{key:t.route,class:a?"":"hide",style:{"--animation-delay":250+180*e+"ms"}},n.h(s,{route:t.route},t.text))})))):null)}function a(){return n.h("ul",null,i.map((function(t){return n.h("li",{key:t.route},n.h(s,{route:t.route},t.text))})))}function h(e){var o=t.useState(!1),i=o[0],s=o[1],h=function(){return window.innerWidth<450};return t.useEffect((function(){window.addEventListener("resize",(function(){s(h())})),s(h())}),[i]),n.h("nav",{class:i?"mobile":"desktop"},e.hideLogo?n.h("div",null):n.h(r,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),i?n.h(l,null):n.h(a,null))}function c(){return n.h("footer",null,"© Sahithyan 2021")}function u(t){var e=t.tags;return n.h("div",{class:"tags-container"},e.map((function(t){return n.h("span",{key:t,class:"tag"},t)})))}function d(t){return n.h("div",{class:"post-card show","data-slug":t.meta.slug},n.h("span",{class:"post-released-date"},t.meta.dateCreated),n.h(r,{disableDefaultStyles:!0,href:"/post/"+t.meta.slug},n.h("h3",{class:"title"},t.meta.title)),n.h("p",{class:"description"},t.meta.description),n.h(u,{tags:t.meta.tags}))}function v(){var t=[{providerName:"Twitter",id:"sahithyandev",link:"https://www.twitter.com/sahithyandev",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />\n</svg>\n\n\n'},{id:"sahithyan_",providerName:"Instagram",link:"https://www.instagram.com/sahithyan_",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <rect x="4" y="4" width="16" height="16" rx="4" />\n  <circle cx="12" cy="12" r="3" />\n  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />\n</svg>\n\n\n'},{id:"sahithyandev",providerName:"GitHub",link:"https://www.github.com/sahithyandev",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />\n</svg>\n\n\n'},{providerName:"RSS Feed",link:"https://sahithyandev.github.io/feed.xml",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rss" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <circle cx="5" cy="19" r="1" />\n  <path d="M4 4a16 16 0 0 1 16 16" />\n  <path d="M4 11a9 9 0 0 1 9 9" />\n</svg>\n\n\n'}];return n.h("div",{class:"social-links"},t.map((function(t){return n.h(r,{title:t.id?t.providerName+" ("+t.id+")":t.providerName,key:t.providerName,disableDefaultStyles:!0,href:t.link,dangerouslySetInnerHTML:{__html:t.icon}})})))}function f(t){return n.h(n.Fragment,null,n.h(h,{hideLogo:!0}),n.h("main",null,n.h("div",{class:"stretch-out me-banner"},n.h("h1",null,"Sahithyan"),n.h("p",null,"student, web developer & tech enthusiast"),n.h(v,null)),n.h("section",null,n.h("h2",{class:"sub-heading"},"Recent Posts"),n.h("div",{class:"posts-container"},(pageData.latestPosts||[]).map((function(t){return n.h(d,{meta:t,key:t.slug})}))))),n.h(c,null))}n.render(n.h((function(){var e=t.useState([]),o=e[0];return e[1],n.h(f,{latestPosts:o.slice(0,4).map((function(n){return n.meta}))})}),null),document.getElementById("root"))}(preact,preact);
