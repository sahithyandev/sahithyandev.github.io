!function(t,e){"use strict";var n=function(){return n=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)},a=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE ".concat(e.children));var a=e.href||"",r=e.disableDefaultStyles||!1,s=n({},e);return a.startsWith("/")||a.startsWith("#")?s["data-is-internal"]="":(s.target="_blank",s.rel="noopener noreferrer"),s.class=(s.class||"").split(" ").concat([r?"":"styled-link"]).join(" "),s.disableDefaultStyles=null,t.h("a",n({},s))},r=[{route:"/tidbits",text:"Tidbits"},{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function s(e){var n=e.children,r=e.route;return t.h(a,{disableDefaultStyles:!0,href:r,class:"nav--link"},n)}function l(e){return t.h(t.Fragment,null,null,t.h("nav",null,e.hideLogo?t.h("div",null):t.h(a,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),t.h("input",{type:"checkbox",id:"menu-toggle"}),t.h("label",{for:"menu-toggle",class:"hamburger-icon"}),t.h("ul",null,r.map((function(e){return t.h("li",{key:e.route},t.h(s,{route:e.route},e.text))})))))}function o(){return t.h("footer",null,"© Sahithyan ",2022)}function i(e){var n=e.tags;return t.h("div",{class:"tags-container"},n.map((function(e){return t.h("span",{key:e,class:"tag"},e)})))}var c,u='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />\n</svg>\n\n\n';c={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(c).map((function(t){return[t[0],"["+t[1]+"m"]})));var h=/\/post\/(?<slug>[\w-]+)/;function d(e){var n=pageData.postData,r=n.meta.title,s="".concat("https://sahithyandev.github.io","/post/").concat(n.meta.slug),c=[{url:"https://www.twitter.com/share?text=".concat(r," by ").concat("@sahithyandev","&url=").concat(s,"}"),name:"Twitter",icon:u}].map((function(t){return t.url=encodeURI(t.url),t}));return t.h(t.Fragment,null,t.h(l,null),t.h("main",null,t.h("h1",{class:"post-title"},r),t.h("div",{class:"post-meta"},t.h("span",{class:"post-meta--release-date"},n.meta.dateCreated),t.h("span",{class:"post-meta--reading-time"},n.meta.estReadTime),t.h(i,{tags:n.meta.tags})),t.h("article",{dangerouslySetInnerHTML:{__html:n.renderedContent}})),t.h("div",{class:"post-share-section"},t.h("div",null,t.h(a,{href:encodeURI("https://twitter.com/search?q=".concat(s))},"Discuss On Twitter")),t.h("div",null,t.h("span",{class:"share-span"},"Share this article on"),c.map((function(e){return t.h(a,{disableDefaultStyles:!0,href:e.url,key:e.name,title:e.name,dangerouslySetInnerHTML:{__html:e.icon}})})))),t.h(o,null))}t.render(t.h((function(){var n=window.location.pathname,a=e.useState([]),r=a[0];a[1];var s=n.match(h).groups.slug,l=r.find((function(t){return t.meta.slug===s}))||null;return t.h(d,{postData:l})}),null),document.getElementById("root"))}(preact,preact);
