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
var o=function(){return(o=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var l in e=arguments[t])Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n}).apply(this,arguments)},l=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var t=e.href||"",l=e.disableDefaultStyles||!1,r=o({},e);return t.startsWith("/")||t.startsWith("#")?r["data-is-internal"]="":(r.target="_blank",r.rel="noopener noreferrer"),r.class=(r.class||"").split(" ").concat([l?"":"styled-link"]).join(" "),r.disableDefaultStyles=null,n.h("a",o({},r))},r=[{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function s(e){var t=e.children,o=e.route;return n.h(l,{disableDefaultStyles:!0,href:o,class:"nav--link"},t)}function i(){var t=e.useState(!1),o=t[0],l=t[1],i=e.useState(!1),u=i[0],a=i[1];return document.documentElement.style.overflowY=o?"hidden":"auto",e.useEffect((function(){var n,e,t,o=document.getElementsByClassName("toggled-bg")[0];o&&o.addEventListener("animationend",(n=function(){console.log("effect: set toggled",!1),l(!1),console.log("effect: set should show",!1),a(!1)},void 0===(e=600)&&(e=300),function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];clearTimeout(t),t=setTimeout((function(){n.apply(null,o)}),e)}))}),[o,u]),n.h("div",null,n.h("span",{onClick:function(){console.log("set toggled",!0),l(!0),console.log("set should show",!0),a(!0)},style:{cursor:"pointer",pointerEvents:u?"none":"auto"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="4" y1="12" x2="20" y2="12" />\n  <line x1="4" y1="18" x2="20" y2="18" />\n</svg>\n\n\n'}}),o?n.h("div",{class:"toggled-bg "+(u?"show":"hide")},n.h("span",{onClick:function(){console.log("set should show",!1),a(!1)},class:"close-btn",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="18" y1="6" x2="6" y2="18" />\n  <line x1="6" y1="6" x2="18" y2="18" />\n</svg>\n\n\n'}}),n.h("ul",null,r.map((function(e,t){return n.h("li",{key:e.route,class:u?"":"hide",style:{"--animation-delay":250+180*t+"ms"}},n.h(s,{route:e.route},e.text))})))):null)}function u(){return n.h("ul",null,r.map((function(e){return n.h("li",{key:e.route},n.h(s,{route:e.route},e.text))})))}function a(t){var o=e.useState(!1),r=o[0],s=o[1],a=function(){return window.innerWidth<450};return e.useEffect((function(){window.addEventListener("resize",(function(){s(a())})),s(a())}),[r]),n.h("nav",{class:r?"mobile":"desktop"},t.hideLogo?n.h("div",null):n.h(l,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),r?n.h(i,null):n.h(u,null))}function c(){return n.h("footer",null,"© Sahithyan 2021")}n.render(n.h((function(){var t=e.useState([]);return t[0],t[1],n.h(n.Fragment,null,n.h(a,null),n.h("div",{id:"main"},n.h("h1",null,"$>> paGe n0t found")),n.h(c,null))}),null),document.getElementById("root"))}(preact,preact);
