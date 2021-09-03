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
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(n){for(var t,e=1,l=arguments.length;e<l;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},l=function(t){t.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+t.children);var l=t.href||"",r=t.disableDefaultStyles||!1,a=e({},t);return l.startsWith("/")||l.startsWith("#")?a["data-is-internal"]="":(a.target="_blank",a.rel="noopener noreferrer"),a.class=(a.class||"").split(" ").concat([r?"":"styled-link"]).join(" "),a.disableDefaultStyles=null,n.h("a",e({},a))};function r(t){var e=t.children,r=t.route;return n.h(l,{disableDefaultStyles:!0,href:r,class:"nav--link"},e)}function a(t){return n.h("nav",null,t.hideLogo?n.h("div",null):n.h(l,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),n.h("ul",null,n.h("li",null,n.h(r,{route:"/posts"},"Posts")),n.h("li",null,n.h(r,{route:"/about"},"About"))))}function u(){return n.h("footer",null,"© Sahithyan 2021")}
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
    ***************************************************************************** */var o;o={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(o).map((function(n){return[n[0],"["+n[1]+"m"]})));n.render(n.h((function(){var e=t.useState([]);return e[0],e[1],n.h(n.Fragment,null,n.h(a,null),n.h("div",{id:"main"},n.h("h1",null,"$>> paGe n0t found")),n.h(u,null))}),null),document.getElementById("root"))}(preact,preact);
