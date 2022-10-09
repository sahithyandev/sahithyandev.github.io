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
    ***************************************************************************** */var n=function(){return(n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},r=function(e){e.href||console.warn("A link without 'href' is found\nDEBUG_NOTE "+e.children);var r=e.href||"",o=e.disableDefaultStyles||!1,a=n({},e);return r.startsWith("/")||r.startsWith("#")?a["data-is-internal"]="":(a.target="_blank",a.rel="noopener noreferrer"),a.class=(a.class||"").split(" ").concat([o?"":"styled-link"]).join(" "),a.disableDefaultStyles=null,t.h("a",n({},a))},o=[{route:"/tidbits",text:"Tidbits"},{route:"/projects",text:"Projects"},{route:"/posts",text:"Posts"},{route:"/about",text:"About"}];function a(e){var n=e.children,o=e.route;return t.h(r,{disableDefaultStyles:!0,href:o,class:"nav--link"},n)}function u(e){return t.h(t.Fragment,null,null,t.h("nav",null,e.hideLogo?t.h("div",null):t.h(r,{disableDefaultStyles:!0,href:"/",class:"nav--logo"},"sahithyan"),t.h("input",{type:"checkbox",id:"menu-toggle"}),t.h("label",{for:"menu-toggle",class:"hamburger-icon"}),t.h("ul",null,o.map((function(e){return t.h("li",{key:e.route},t.h(a,{route:e.route},e.text))})))))}var s=["squircle","circle"];function l(e){return e.userImage||(e.userImage="/me.jpg"),e.colors||(e.colors=["#f9a83d","#b4284d"]),void 0===e.gradientSize&&(e.gradientSize=10),void 0===e.animateGradient&&(e.animateGradient=!0),void 0===e.shape&&(e.shape="squircle"),t.h("svg",{viewBox:"0,0,400,400",class:"dp",style:"--me-image-size: "+(1-e.gradientSize/100),"data-shape":"squircle"},t.h("style",{dangerouslySetInnerHTML:{__html:'\n\t\t\t\t\t\t.dp[data-shape="squircle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.dp[data-shape="circle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 90, 90 0, 200 0 S 400 90, 400 200, 310 400 200 400, 0 310, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t'}}),t.h("defs",null,t.h("linearGradient",{id:"background-gradient",gradientTransform:"rotate(0 .5 .5)"},e.animateGradient?t.h("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:"0 .5 .5",to:"360 .5 .5",dur:"10s",repeatCount:"indefinite"}):null,e.colors.map((function(n,r){return t.h("stop",{key:r,offset:100*r/(e.colors.length-1)+"%","stop-color":n})}))),t.h("path",{id:"path-to-clip",d:"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"})),t.h("clipPath",{id:"image-clip-path"},t.h("use",{href:"#path-to-clip"})),t.h("use",{href:"#path-to-clip",fill:"url(#background-gradient)"}),t.h("g",{style:"transform-origin: center; transform: scale(var(--me-image-size));"},t.h("image",{href:e.thumbUrl,type:"image/jpeg",alt:"",width:"100%",height:"100%"}),t.h("image",{id:"dp--user-image",href:e.userImage,type:"image/jpeg",alt:"",width:"100%",height:"100%","clip-path":"url(#image-clip-path)",preserveAspectRatio:"xMidYMid slice"})),t.h("g",{class:"loading-state-mask","clip-path":"url(#image-clip-path)",style:"display: var(--show-image-loading, none);"},t.h("rect",{x:"0",y:"0",width:"400",height:"400"}),t.h("text",null,"Loading...")))}
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
    ***************************************************************************** */var c;if(c={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(c).map((function(t){return[t[0],"["+t[1]+"m"]}))),!h)var h={map:function(t,e){var n={};return e?t.map((function(t,r){return n.index=r,e.call(n,t)})):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,r,o){return n.index=o,t+e.call(n,r)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?h.map(t,e):t)}};var p=function(){function t(t,e,n){return(t<<10)+(e<<5)+n}function e(t){var e=[],n=!1;function r(){e.sort(t),n=!0}return{push:function(t){e.push(t),n=!1},peek:function(t){return n||r(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return n||r(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return n||r(),e}}}function n(t,e,n,r,o,a,i){this.r1=t,this.r2=e,this.g1=n,this.g2=r,this.b1=o,this.b2=a,this.histo=i}function r(){this.vboxes=new e((function(t,e){return h.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function o(e,n){if(n.count()){var r=n.r2-n.r1+1,o=n.g2-n.g1+1,a=h.max([r,o,n.b2-n.b1+1]);if(1==n.count())return[n.copy()];var i,u,s,l,c=0,p=[],d=[];if(a==r)for(i=n.r1;i<=n.r2;i++){for(l=0,u=n.g1;u<=n.g2;u++)for(s=n.b1;s<=n.b2;s++)l+=e[t(i,u,s)]||0;p[i]=c+=l}else if(a==o)for(i=n.g1;i<=n.g2;i++){for(l=0,u=n.r1;u<=n.r2;u++)for(s=n.b1;s<=n.b2;s++)l+=e[t(u,i,s)]||0;p[i]=c+=l}else for(i=n.b1;i<=n.b2;i++){for(l=0,u=n.r1;u<=n.r2;u++)for(s=n.g1;s<=n.g2;s++)l+=e[t(u,s,i)]||0;p[i]=c+=l}return p.forEach((function(t,e){d[e]=c-t})),function(t){var e,r,o,a,u,s=t+"1",l=t+"2",h=0;for(i=n[s];i<=n[l];i++)if(p[i]>c/2){for(o=n.copy(),a=n.copy(),u=(e=i-n[s])<=(r=n[l]-i)?Math.min(n[l]-1,~~(i+r/2)):Math.max(n[s],~~(i-1-e/2));!p[u];)u++;for(h=d[u];!h&&p[u-1];)h=d[--u];return o[l]=u,a[s]=o[l]+1,[o,a]}}(a==r?"r":a==o?"g":"b")}}return n.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(e){var n=this.histo;if(!this._count_set||e){var r,o,a,i=0;for(r=this.r1;r<=this.r2;r++)for(o=this.g1;o<=this.g2;o++)for(a=this.b1;a<=this.b2;a++)i+=n[t(r,o,a)]||0;this._count=i,this._count_set=!0}return this._count},copy:function(){return new n(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var n=this.histo;if(!this._avg||e){var r,o,a,i,u=0,s=0,l=0,c=0;for(o=this.r1;o<=this.r2;o++)for(a=this.g1;a<=this.g2;a++)for(i=this.b1;i<=this.b2;i++)u+=r=n[t(o,a,i)]||0,s+=r*(o+.5)*8,l+=r*(a+.5)*8,c+=r*(i+.5)*8;this._avg=u?[~~(s/u),~~(l/u),~~(c/u)]:[~~(8*(this.r1+this.r2+1)/2),~~(8*(this.g1+this.g2+1)/2),~~(8*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var e=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,e>=this.r1&&e<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},r.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},nearest:function(t){for(var e,n,r,o=this.vboxes,a=0;a<o.size();a++)((n=Math.sqrt(Math.pow(t[0]-o.peek(a).color[0],2)+Math.pow(t[1]-o.peek(a).color[1],2)+Math.pow(t[2]-o.peek(a).color[2],2)))<e||void 0===e)&&(e=n,r=o.peek(a).color);return r},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return h.naturalOrder(h.sum(t.color),h.sum(e.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,r=t[n].color;r[0]>251&&r[1]>251&&r[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(a,i){if(!a.length||i<2||i>256)return!1;var u=function(e){var n,r=new Array(32768);return e.forEach((function(e){n=t(e[0]>>3,e[1]>>3,e[2]>>3),r[n]=(r[n]||0)+1})),r}(a);u.forEach((function(){}));var s=function(t,e){var r,o,a,i=1e6,u=0,s=1e6,l=0,c=1e6,h=0;return t.forEach((function(t){(r=t[0]>>3)<i?i=r:r>u&&(u=r),(o=t[1]>>3)<s?s=o:o>l&&(l=o),(a=t[2]>>3)<c?c=a:a>h&&(h=a)})),new n(i,u,s,l,c,h,e)}(a,u),l=new e((function(t,e){return h.naturalOrder(t.count(),e.count())}));function c(t,e){for(var n,r=t.size(),a=0;a<1e3;){if(r>=e)return;if(a++>1e3)return;if((n=t.pop()).count()){var i=o(u,n),s=i[0],l=i[1];if(!s)return;t.push(s),l&&(t.push(l),r++)}else t.push(n),a++}}l.push(s),c(l,.75*i);for(var p=new e((function(t,e){return h.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));l.size();)p.push(l.pop());c(p,i);for(var d=new r;p.size();)d.push(p.pop());return d}}}().quantize,d=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};d.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var g=function(){};g.prototype.getColor=function(t,e){return void 0===e&&(e=10),this.getPalette(t,5,e)[0]},g.prototype.getPalette=function(t,e,n){var r=function(t){var e=t.colorCount,n=t.quality;if(void 0!==e&&Number.isInteger(e)){if(1===e)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");e=Math.max(e,2),e=Math.min(e,20)}else e=10;return(void 0===n||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:e,quality:n}}({colorCount:e,quality:n}),o=new d(t),a=function(t,e,n){for(var r=t,o=[],a=0,i=void 0,u=void 0,s=void 0,l=void 0,c=void 0;a<e;a+=n)u=r[0+(i=4*a)],s=r[i+1],l=r[i+2],(void 0===(c=r[i+3])||c>=125)&&(u>250&&s>250&&l>250||o.push([u,s,l]));return o}(o.getImageData().data,o.width*o.height,r.quality),i=p(a,r.colorCount);return i?i.palette():null},g.prototype.getColorFromUrl=function(t,e,n){var r=this,o=document.createElement("img");o.addEventListener("load",(function(){var a=r.getPalette(o,5,n);e(a[0],t)})),o.src=t},g.prototype.getImageData=function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=new Array(i),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);var o=n.join(""),a=window.btoa(o);e("data:image/png;base64,"+a)}},n.send()},g.prototype.getColorAsync=function(t,e,n){var r=this;this.getImageData(t,(function(t){var o=document.createElement("img");o.addEventListener("load",(function(){var t=r.getPalette(o,5,n);e(t[0],this)})),o.src=t}))};var f=new g,v="squircle",m=0,b=function(t){return t.preventDefault(),t.returnValue="Are you sure you want to exit? Your changes are not saved."};function y(){var n=new FileReader,r=e.useState({src:"/me.jpg",palette:["#f9a83d","#b4284d"]}),o=r[0],a=r[1],i=e.useState(["#f9a83d","#b4284d"]),c=i[0],h=i[1],p=e.useState(10),d=p[0],g=p[1];n.addEventListener("load",(function(t){if("string"==typeof t.target.result){document.documentElement.style.setProperty("--show-image-loading","block");var e=document.createElement("img");e.src=t.target.result,e.onload=function(){var n=f.getPalette(e,2).map((function(t){return"#"+t.map((function(t){return t.toString(16).padStart(2,"0")})).join("")}));a({src:t.target.result,palette:n})}}}));var y=c.every((function(t){return o.palette.includes(t)}));document.documentElement.style.setProperty("--show-image-loading","none");var w="/me.jpg"===o.src;return e.useEffect((function(){document.querySelector("main").addEventListener("input",(function(){window.addEventListener("beforeunload",b)}),{once:!0})}),[]),t.h(t.Fragment,null,t.h(u,null),t.h("main",null,t.h("label",{for:"img-input",class:"dp-container"},t.h(l,{userImage:o.src,colors:c,gradientSize:d,animateGradient:!1}),t.h("input",{type:"file",id:"img-input",onChange:function(t){var e=t.target.files[0];e&&e.type.startsWith("image/")&&n.readAsDataURL(e)},accept:"image/*",class:"sr-only"})),t.h("h2",{class:"heading"},"Create Your Own DP"),t.h("div",{class:"controls"},t.h("span",{class:"choose-image-hint"},"You can choose your image by clicking/pressing on the image on the left. Until then, the save button will remain disabled. 😀",t.h("br",null),t.h("br",null),"Your image is not being uploaded to anywhere. Only the basic usage data is being collected for the purpose of analytics."),t.h("ul",null,t.h("li",null,t.h("h5",null,"Shape"),t.h("div",{class:"shape-input-container"},s.map((function(e){return t.h("label",{for:e,class:"shape-input",key:e},t.h("input",{name:"shape",type:"radio",id:e,class:"sr-only",value:e,checked:v==e,onChange:function(){return t=e,n=document.querySelector(".dp"),v=t,void n.setAttribute("data-shape",t);var t,n}}),t.h("span",{class:"shape-input--selector"},e))})))),t.h("li",null,t.h("h5",null,"Colors"),t.h("div",{className:"colors-input-container"},c.map((function(e,n){return t.h("label",{class:"color-input",key:n},t.h("input",{type:"color",class:"sr-only",onInput:function(t){!function(t,e){var n=e.target.value;h(c.map((function(e,r){return r===t?n:e})))}(n,t)},value:e}),t.h("div",{class:"color-input--selector",style:"background: "+e+";"}))})),y?null:t.h("button",{onClick:function(){h(o.palette)},title:"Pick colors from image",class:"auto-button",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />\n  <circle cx="12" cy="13" r="3" />\n</svg>\n\n\n'}}))),t.h("li",null,t.h("h5",null,"Fine tune"),t.h("span",{class:"input-group"},t.h("label",{for:"gradient-size"},"Gradient size"),t.h("input",{type:"range",id:"gradient-size",value:d,min:"0",max:"16",onInput:function(t){return g(parseInt(t.target.value,10))}})),t.h("span",{class:"input-group"},t.h("label",null,"Gradient angle"),t.h("input",{type:"range",id:"gradient-angle",value:m,min:"0",max:"360",onInput:function(t){return e=parseInt(t.target.value,10),n=document.querySelector(".dp"),m=e,void n.querySelector("#background-gradient").setAttribute("gradientTransform","rotate("+e+" .5 .5)");var e,n}}))),t.h("li",{style:"text-align: right; margin-top: 32px;"},t.h("button",{class:"save-button",onClick:function(){window.removeEventListener("beforeunload",b),pa.track({name:"save-dp",unit:v+" grSize"+d+" grAngle"+m});var t=document.querySelector(".dp"),e=2.5*t.clientWidth,n=(new XMLSerializer).serializeToString(t),r=document.createElement("img");r.onload=function(){var t=document.createElement("canvas"),n=t.getContext("2d"),o=e+100;t.width=o,t.height=o,n.fillStyle=getComputedStyle(document.body).getPropertyValue("--background"),n.fillRect(0,0,o,o),n.drawImage(r,50,50,e,e);var a=t.toDataURL("image/png",1),i=document.createElement("a");i.href=a;var u=new Date;i.download="dp-"+v+"-"+u.toLocaleDateString("en-GB").split("/").reverse().join("")+"-"+u.toLocaleTimeString("en-GB",{timeStyle:"short",hour12:!1})+".png",i.click()};var o="data:image/svg+xml;base64,"+window.btoa(n);r.src=o},disabled:w,title:w?"Why do you want to save my picture? Huh? 😏":null},"Save"))))))}t.render(t.h((function(){var n=e.useState([]);return n[0],n[1],t.h(y,null)}),null),document.getElementById("root"))}(preact,preact);
