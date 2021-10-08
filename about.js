!function(n,e){"use strict";
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
    ***************************************************************************** */var t;t={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(t).map((function(n){return[n[0],"["+n[1]+"m"]})));
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
var o=function(){return(o=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},i=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var t=e.href||"",i=e.disableDefaultStyles||!1,l=o({},e);return t.startsWith("/")||t.startsWith("#")?l["data-is-internal"]="":(l.target="_blank",l.rel="noopener noreferrer"),l.class=(l.class||"").split(" ").concat([i?"":"styled-link"]).join(" "),l.disableDefaultStyles=null,n.h("a",o({},l))},l=[{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function r(e){var t=e.children,o=e.route;return n.h(i,{disableDefaultStyles:!0,href:o,class:"nav--link"},t)}function a(){var t=e.useState(!1),o=t[0],i=t[1],a=e.useState(!1),s=a[0],h=a[1];return document.documentElement.style.overflowY=o?"hidden":"auto",e.useEffect((function(){var n,e,t,o=document.getElementsByClassName("toggled-bg")[0];o&&o.addEventListener("animationend",(n=function(n){console.log(n,n.animationName,s),s||(console.log("effect: set toggled",!1),i(!1))},void 0===(e=600)&&(e=300),function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){n.apply(null,o)}),e)}))}),[o,s]),n.h("div",null,n.h("span",{onClick:function(){console.log("set toggled",!0),i(!0),console.log("set should show",!0),h(!0)},style:{cursor:"pointer",pointerEvents:s?"none":"auto"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="4" y1="12" x2="20" y2="12" />\n  <line x1="4" y1="18" x2="20" y2="18" />\n</svg>\n\n\n'}}),o?n.h("div",{class:"toggled-bg "+(s?"show":"hide")},n.h("span",{onClick:function(){console.log("set should show",!1),h(!1)},class:"close-btn",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="18" y1="6" x2="6" y2="18" />\n  <line x1="6" y1="6" x2="18" y2="18" />\n</svg>\n\n\n'}}),n.h("ul",null,l.map((function(e,t){return n.h("li",{key:e.route,class:s?"":"hide",style:{"--animation-delay":250+180*t+"ms"}},n.h(r,{route:e.route},e.text))})))):null)}function s(){return n.h("ul",null,l.map((function(e){return n.h("li",{key:e.route},n.h(r,{route:e.route},e.text))})))}function h(t){var o=e.useState(!1),l=o[0],r=o[1],h=function(){return window.innerWidth<450};return e.useEffect((function(){window.addEventListener("resize",(function(){r(h())})),r(h())}),[l]),n.h("nav",{class:l?"mobile":"desktop"},t.hideLogo?n.h("div",null):n.h(i,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),l?n.h(a,null):n.h(s,null))}function c(){return n.h("footer",null,"© Sahithyan 2021")}function u(){var e=[{providerName:"Twitter",id:"sahithyandev",link:"https://www.twitter.com/sahithyandev",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />\n</svg>\n\n\n'},{id:"sahithyan_",providerName:"Instagram",link:"https://www.instagram.com/sahithyan_",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <rect x="4" y="4" width="16" height="16" rx="4" />\n  <circle cx="12" cy="12" r="3" />\n  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />\n</svg>\n\n\n'},{id:"sahithyandev",providerName:"GitHub",link:"https://www.github.com/sahithyandev",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />\n</svg>\n\n\n'},{providerName:"RSS Feed",link:"https://sahithyandev.github.io/feed.xml",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rss" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <circle cx="5" cy="19" r="1" />\n  <path d="M4 4a16 16 0 0 1 16 16" />\n  <path d="M4 11a9 9 0 0 1 9 9" />\n</svg>\n\n\n'}];return n.h("div",{class:"social-links"},e.map((function(e){return n.h(i,{title:e.id?e.providerName+" ("+e.id+")":e.providerName,key:e.providerName,disableDefaultStyles:!0,href:e.link,dangerouslySetInnerHTML:{__html:e.icon}})})))}function d(){return n.h(n.Fragment,null,n.h(h,null),n.h("main",null,n.h("h1",null,"About"),n.h("p",null,"Hello!, I am Sahithyan, a 17-year-old web developer, a student and a tech enthusiast. I am from Jaffna, Sri Lanka."),n.h("p",null,"I know HTML, CSS, JavaScript and TypeScript."),n.h("h2",null,"About this site"),n.h("p",null,"This website is made using Preact (TypeScript), Sass, MDX and Rollup. You can checkout the source code at"," ",n.h(i,{href:"https://github.com/sahithyandev/static-blog"},"sahithyandev/static-blog"),". And hosted using GitHub Pages."),n.h("h2",null,"Contact me"),n.h("p",null,"The fastest and the easiest way would be direct messaging me on Twitter"," ",n.h(i,{href:"https://www.twitter.com/sahithyandev"},"@sahithyandev"),". You can also use the below-listed social media accounts too. And you can also email me at"," ",n.h(i,{href:"mailto:sahithyan2701@gmail.com"},"sahithyan2701@gmail.com"),"."),n.h(u,null)),n.h(c,null))}n.render(n.h((function(){var t=e.useState([]);return t[0],t[1],n.h(d,null)}),null),document.getElementById("root"))}(preact,preact);
