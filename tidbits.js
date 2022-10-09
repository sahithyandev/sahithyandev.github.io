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
    ***************************************************************************** */var n=function(){return(n=Object.assign||function(t){for(var e,n=1,l=arguments.length;n<l;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},l=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var l=e.href||"",i=e.disableDefaultStyles||!1,r=n({},e);return l.startsWith("/")||l.startsWith("#")?r["data-is-internal"]="":(r.target="_blank",r.rel="noopener noreferrer"),r.class=(r.class||"").split(" ").concat([i?"":"styled-link"]).join(" "),r.disableDefaultStyles=null,t.h("a",n({},r))},i=[{route:"/tidbits",text:"Tidbits"},{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function r(e){var n=e.children,i=e.route;return t.h(l,{disableDefaultStyles:!0,href:i,class:"nav--link"},n)}function a(e){return t.h(t.Fragment,null,null,t.h("nav",null,e.hideLogo?t.h("div",null):t.h(l,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),t.h("input",{type:"checkbox",id:"menu-toggle"}),t.h("label",{for:"menu-toggle",class:"hamburger-icon"}),t.h("ul",null,i.map((function(e){return t.h("li",{key:e.route},t.h(r,{route:e.route},e.text))})))))}function o(){return t.h("footer",null,"© Sahithyan ",2022)}
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
    ***************************************************************************** */var s;s={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(s).map((function(t){return[t[0],"["+t[1]+"m"]})));var u=[{title:"DP Maker",thumbnail:"/og-dp-maker.png",thumbnailSize:{width:1200,height:630},description:"With this little tool you can create gradient-bordered display pictures (just like mine!). I hope at least a few people find it fun and/or useful.",link:"/tools/dp-maker"}];function h(){return t.h(t.Fragment,null,t.h(a,null),t.h("main",null,t.h("h1",null,"Tidbits"),t.h("p",null,"Here lies the small fun things I worked on, and available under this website."),t.h("div",{class:"tidbits-container"},u.map((function(e){return t.h("a",{href:e.link,key:e.title},t.h("div",{class:"tidbit-container"},t.h("h2",{class:"tidbit--title"},e.title),t.h("img",{class:"tidbit--img",src:e.thumbnail,alt:e.title+" project",style:"aspect-ratio: 1200 / 630"}),t.h("p",{class:"tidbit--description"},e.description)))})))),t.h(o,null))}t.render(t.h((function(){var n=e.useState([]);return n[0],n[1],t.h(h,null)}),null),document.getElementById("root"))}(preact,preact);
