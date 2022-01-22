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
    ***************************************************************************** */var n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var l in e=arguments[n])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t}).apply(this,arguments)},r=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var r=e.href||"",l=e.disableDefaultStyles||!1,a=n({},e);return r.startsWith("/")||r.startsWith("#")?a["data-is-internal"]="":(a.target="_blank",a.rel="noopener noreferrer"),a.class=(a.class||"").split(" ").concat([l?"":"styled-link"]).join(" "),a.disableDefaultStyles=null,t.h("a",n({},a))},l=[{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function a(e){var n=e.children,l=e.route;return t.h(r,{disableDefaultStyles:!0,href:l,class:"nav--link"},n)}function o(e){return t.h("nav",null,e.hideLogo?t.h("div",null):t.h(r,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),t.h("input",{type:"checkbox",id:"menu-toggle"}),t.h("label",{for:"menu-toggle",class:"hamburger-icon"}),t.h("ul",null,l.map((function(e,n){return t.h("li",{key:e.route,"data-animation-delay-id":n},t.h(a,{route:e.route},e.text))}))))}function u(){return t.h("footer",null,"© Sahithyan ",2022)}
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
    ***************************************************************************** */var i;i={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(i).map((function(t){return[t[0],"["+t[1]+"m"]})));t.render(t.h((function(){var n=e.useState([]);return n[0],n[1],t.h(t.Fragment,null,t.h(o,null),t.h("div",{id:"main"},t.h("h1",null,"$>> paGe n0t found")),t.h(u,null))}),null),document.getElementById("root"))}(preact,preact);
