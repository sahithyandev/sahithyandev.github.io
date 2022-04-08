!function(e,t){"use strict";
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
    ***************************************************************************** */var r=function(){return(r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},n=function(t){t.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+t.children);var n=t.href||"",l=t.disableDefaultStyles||!1,a=r({},t);return n.startsWith("/")||n.startsWith("#")?a["data-is-internal"]="":(a.target="_blank",a.rel="noopener noreferrer"),a.class=(a.class||"").split(" ").concat([l?"":"styled-link"]).join(" "),a.disableDefaultStyles=null,e.h("a",r({},a))},l=[{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function a(t){var r=t.children,l=t.route;return e.h(n,{disableDefaultStyles:!0,href:l,class:"nav--link"},r)}function o(t){return e.h(e.Fragment,null,e.h("div",{class:"top-banner"},"To know about what the fuck happened to this site, visit the"," ",e.h(n,{href:"https://css-naked-day.github.io"},"Annual CSS Naked Day")," ","website."),e.h("nav",null,t.hideLogo?e.h("div",null):e.h(n,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),e.h("input",{type:"checkbox",id:"menu-toggle"}),e.h("label",{for:"menu-toggle",class:"hamburger-icon"}),e.h("ul",null,l.map((function(t,r){return e.h("li",{key:t.route,"data-animation-delay-id":r},e.h(a,{route:t.route},t.text))})))))}function i(){return e.h("footer",null,"© Sahithyan ",2022)}function s(t){var r={repoUrl:"Source",liveUrl:"Demo",writeUpUrl:"Write Up"},l=Object.entries(t.links).map((function(e){var t=e[0],n=e[1];return{displayText:r[t],url:n}}));return e.h("div",{class:"project-card"},e.h("h2",{class:"project-name"},t.name),e.h("p",{class:"project-description"},t.description),e.h("div",{class:"project-links"},l.map((function(t){return e.h(n,{key:t.url,href:t.url},t.displayText)}))))}
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
    ***************************************************************************** */var c;function u(e){return"https://github.com/sahithyandev/"+e}c={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(c).map((function(e){return[e[0],"["+e[1]+"m"]})));var h=[{name:"Gallery Of JE",description:"A website full of high-quality retouched photos by Janoshan, one of my friends.",links:{repoUrl:u("gallery-of-je"),liveUrl:"https://gallery-of-je.vercel.app"}},{name:"YouTubeDownloader Bot",description:"A Viber bot to download YouTube videos easily.",links:{repoUrl:u("youtube-downloader-bot"),liveUrl:"https://youtube-downloader-viber-bot.herokuapp.com"}},{name:"math-api",description:"math.now.sh ported as a NPM package.",links:{repoUrl:u("math-api"),liveUrl:"https://www.npmjs.com/package/math-api"}},{name:"XCalc",description:"An extended calculator. A calculator which has functions that a pre-installed one doesn't. Like gcm, lcd, is-prime and more. Available on Google Play Store as well as a website.",links:{repoUrl:u("xcalc"),liveUrl:"https://x-calc.vercel.app",writeUpUrl:"/post/building-xcalc"}},{name:"Password Tester",description:"A minimal password strength checker.",links:{repoUrl:u("password-tester"),liveUrl:"https://password-tester.vercel.app"}}];function p(){return e.h(e.Fragment,null,e.h(o,null),e.h("main",null,e.h("h1",null,"Projects"),e.h("p",null,"Here are the projects I worked on recently."),e.h("section",{class:"projects-container"},h.map((function(t){return e.h(s,r({key:t.name},t))})))),e.h(i,null))}e.render(e.h((function(){var r=t.useState([]);return r[0],r[1],e.h(p,null)}),null),document.getElementById("root"))}(preact,preact);
