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
    ***************************************************************************** */var t=function(){return(t=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}).apply(this,arguments)},o=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var o=e.href||"",r=e.disableDefaultStyles||!1,l=t({},e);return o.startsWith("/")||o.startsWith("#")?l["data-is-internal"]="":(l.target="_blank",l.rel="noopener noreferrer"),l.class=(l.class||"").split(" ").concat([r?"":"styled-link"]).join(" "),l.disableDefaultStyles=null,n.h("a",t({},l))},r=[{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function l(e){var t=e.children,r=e.route;return n.h(o,{disableDefaultStyles:!0,href:r,class:"nav--link"},t)}function i(){var t=e.useState(!1),o=t[0],i=t[1],s=e.useState(!1),u=s[0],a=s[1];return document.documentElement.style.overflow=o?"hidden":"auto",e.useEffect((function(){var n=document.getElementsByClassName("toggled-bg")[0];console.log("texe",n,u,o),n&&n.addEventListener("animationend",(function(n){console.log("anend",n)}))}),[o,u]),n.h("div",null,o?n.h("div",{class:"toggled-bg "+(u?"show":"hide")},n.h("span",{onClick:function(){return a(!1)},class:"close-btn",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="18" y1="6" x2="6" y2="18" />\n  <line x1="6" y1="6" x2="18" y2="18" />\n</svg>\n\n\n'}}),n.h("ul",null,r.map((function(e,t){return n.h("li",{key:e.route,class:u?"":"hide",style:{"--animation-delay":250+180*t+"ms"}},n.h(l,{route:e.route},e.text))})))):n.h("span",{onClick:function(){i(!0),a(!0)},style:{cursor:"pointer"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="4" y1="6" x2="20" y2="6" />\n  <line x1="4" y1="12" x2="20" y2="12" />\n  <line x1="4" y1="18" x2="20" y2="18" />\n</svg>\n\n\n'}}))}function s(){return n.h("ul",null,r.map((function(e){return n.h("li",{key:e.route},n.h(l,{route:e.route},e.text))})))}function u(t){var r=e.useState(!1),l=r[0],u=r[1],a=function(){return window.innerWidth<450};return e.useEffect((function(){window.addEventListener("resize",(function(){u(a())})),u(a())}),[l]),n.h("nav",{class:l?"mobile":"desktop"},t.hideLogo?n.h("div",null):n.h(o,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),l?n.h(i,null):n.h(s,null))}function a(){return n.h("footer",null,"© Sahithyan 2021")}
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
    ***************************************************************************** */var c;c={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(c).map((function(n){return[n[0],"["+n[1]+"m"]})));n.render(n.h((function(){var t=e.useState([]);return t[0],t[1],n.h(n.Fragment,null,n.h(u,null),n.h("div",{id:"main"},n.h("h1",null,"$>> paGe n0t found")),n.h(a,null))}),null),document.getElementById("root"))}(preact,preact);
