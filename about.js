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
    ***************************************************************************** */var n=function(){return(n=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},a=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var a=e.href||"",r=e.disableDefaultStyles||!1,l=n({},e);return a.startsWith("/")||a.startsWith("#")?l["data-is-internal"]="":(l.target="_blank",l.rel="noopener noreferrer"),l.class=(l.class||"").split(" ").concat([r?"":"styled-link"]).join(" "),l.disableDefaultStyles=null,t.h("a",n({},l))},r=[{route:"/tidbits",text:"Tidbits"},{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function l(e){var n=e.children,r=e.route;return t.h(a,{disableDefaultStyles:!0,href:r,class:"nav--link"},n)}function i(e){return t.h(t.Fragment,null,null,t.h("nav",null,e.hideLogo?t.h("div",null):t.h(a,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),t.h("input",{type:"checkbox",id:"menu-toggle"}),t.h("label",{for:"menu-toggle",class:"hamburger-icon"}),t.h("ul",null,r.map((function(e,n){return t.h("li",{key:e.route,"data-animation-delay-id":n},t.h(l,{route:e.route},e.text))})))))}function h(){return t.h("footer",null,"© Sahithyan ",2022)}
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
    ***************************************************************************** */var o;function s(){return t.h(t.Fragment,null,t.h(i,null),t.h("main",null,t.h("h1",null,"About"),t.h("p",null,"Hello!, I am Sahithyan, a 18-year-old web developer, a student and a tech enthusiast. I am from Jaffna, Sri Lanka."),t.h("p",null,"I know HTML, CSS, JavaScript and TypeScript."),t.h("h2",null,"About this site"),t.h("p",null,"This website is made using Preact (TypeScript), Sass, MDX and Rollup. And hosted using GitHub Pages. For security reasons, I have made the source code of this website private."),t.h("h2",null,"Contact me"),t.h("p",null,"The fastest and the easiest way would be direct messaging me on Twitter"," ",t.h(a,{href:"https://www.twitter.com/sahithyandev"},"@sahithyandev"),". You can email me at"," ",t.h(a,{href:"mailto:sahithyan2701@gmail.com"},"sahithyan2701@gmail.com"),". And also, you can find me on"," ",t.h(a,{href:"https://www.instagram.com/sahithyan_"},"Instagram")," ","and ",t.h(a,{href:"https://www.github.com/sahithyandev"},"GitHub"),"!")),t.h(h,null))}o={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(o).map((function(t){return[t[0],"["+t[1]+"m"]})));t.render(t.h((function(){var n=e.useState([]);return n[0],n[1],t.h(s,null)}),null),document.getElementById("root"))}(preact,preact);
