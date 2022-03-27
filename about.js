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
    ***************************************************************************** */var a=function(){return(a=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var r in e=arguments[a])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},n=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var n=e.href||"",r=e.disableDefaultStyles||!1,l=a({},e);return n.startsWith("/")||n.startsWith("#")?l["data-is-internal"]="":(l.target="_blank",l.rel="noopener noreferrer"),l.class=(l.class||"").split(" ").concat([r?"":"styled-link"]).join(" "),l.disableDefaultStyles=null,t.h("a",a({},l))},r=[{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function l(e){var a=e.children,r=e.route;return t.h(n,{disableDefaultStyles:!0,href:r,class:"nav--link"},a)}function s(e){return t.h(t.Fragment,null,t.h("div",{class:"top-banner"},"I support Ukraine"," ",t.h("img",{alt:"🇺🇦",src:"https://abs-0.twimg.com/emoji/v2/svg/1f1fa-1f1e6.svg",draggable:!1,class:"ua-flag",width:"36",height:"36"})),t.h("nav",null,e.hideLogo?t.h("div",null):t.h(n,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),t.h("input",{type:"checkbox",id:"menu-toggle"}),t.h("label",{for:"menu-toggle",class:"hamburger-icon"}),t.h("ul",null,r.map((function(e,a){return t.h("li",{key:e.route,"data-animation-delay-id":a},t.h(l,{route:e.route},e.text))})))))}function h(){return t.h("footer",null,"© Sahithyan ",2022)}
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
    ***************************************************************************** */var i;function o(){return t.h(t.Fragment,null,t.h(s,null),t.h("main",null,t.h("h1",null,"About"),t.h("p",null,"Hello!, I am Sahithyan, a 18-year-old web developer, a student and a tech enthusiast. I am from Jaffna, Sri Lanka."),t.h("p",null,"I know HTML, CSS, JavaScript and TypeScript."),t.h("h2",null,"About this site"),t.h("p",null,"This website is made using Preact (TypeScript), Sass, MDX and Rollup. And hosted using GitHub Pages. For security reasons, I have made the source code of this website private."),t.h("h2",null,"Contact me"),t.h("p",null,"The fastest and the easiest way would be direct messaging me on Twitter"," ",t.h(n,{href:"https://www.twitter.com/sahithyandev"},"@sahithyandev"),". You can email me at"," ",t.h(n,{href:"mailto:sahithyan2701@gmail.com"},"sahithyan2701@gmail.com"),". And also, you can find me on"," ",t.h(n,{href:"https://www.instagram.com/sahithyan_"},"Instagram")," ","and ",t.h(n,{href:"https://www.github.com/sahithyandev"},"GitHub"),"!")),t.h(h,null))}i={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(i).map((function(t){return[t[0],"["+t[1]+"m"]})));t.render(t.h((function(){var a=e.useState([]);return a[0],a[1],t.h(o,null)}),null),document.getElementById("root"))}(preact,preact);
