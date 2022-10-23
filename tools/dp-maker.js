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
    ***************************************************************************** */var n;n={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(n).map((function(t){return[t[0],"["+t[1]+"m"]})));var a=["squircle","circle"];function r(e){return e.userImage||(e.userImage="/me.jpg"),e.colors||(e.colors=["#f9a83d","#b4284d"]),void 0===e.gradientSize&&(e.gradientSize=10),void 0===e.animateGradient&&(e.animateGradient=!0),void 0===e.shape&&(e.shape="squircle"),t.h("svg",{viewBox:"0,0,400,400",class:"dp",style:"--me-image-size: ".concat(1-e.gradientSize/100),"data-shape":"squircle"},t.h("style",{dangerouslySetInnerHTML:{__html:'\n\t\t\t\t\t\t.dp[data-shape="squircle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.dp[data-shape="circle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 90, 90 0, 200 0 S 400 90, 400 200, 310 400 200 400, 0 310, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t'}}),t.h("defs",null,t.h("linearGradient",{id:"background-gradient",gradientTransform:"rotate(0 .5 .5)"},e.animateGradient?t.h("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:"0 .5 .5",to:"360 .5 .5",dur:"10s",repeatCount:"indefinite"}):null,e.colors.map((function(n,a){return t.h("stop",{key:a,offset:"".concat(100*a/(e.colors.length-1),"%"),"stop-color":n})}))),t.h("path",{id:"path-to-clip",d:"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"})),t.h("clipPath",{id:"image-clip-path"},t.h("use",{href:"#path-to-clip"})),t.h("use",{href:"#path-to-clip",fill:"url(#background-gradient)"}),t.h("g",{style:"transform-origin: center; transform: scale(var(--me-image-size));"},t.h("image",{href:e.thumbUrl,type:"image/jpeg",alt:"",width:"100%",height:"100%"}),t.h("image",{id:"dp--user-image",href:e.userImage,type:"image/jpeg",alt:"",width:"100%",height:"100%","clip-path":"url(#image-clip-path)",preserveAspectRatio:"xMidYMid slice"})),t.h("g",{class:"loading-state-mask","clip-path":"url(#image-clip-path)",style:"display: var(--show-image-loading, none);"},t.h("rect",{x:"0",y:"0",width:"400",height:"400"}),t.h("text",null,"Loading...")))}var i=void 0,o="squircle",l=0,c=function(t){return t.preventDefault(),t.returnValue="Are you sure you want to exit? Your changes are not saved."};function s(){var n=new FileReader,s=e.useState({src:"/me.jpg",palette:["#f9a83d","#b4284d"]}),u=s[0],d=s[1],h=e.useState(["#f9a83d","#b4284d"]),p=h[0],g=h[1],m=e.useState(10),f=m[0],v=m[1],y=function(){import("https://cdn.jsdelivr.net/npm/colorthief@2.3.2/dist/color-thief.mjs").then((function(t){i=new t.default})).catch((function(t){console.log("error while loading colorthief",t)}))};n.addEventListener("load",(function(t){if("string"==typeof t.target.result){document.documentElement.style.setProperty("--show-image-loading","block");var e=document.createElement("img");e.src=t.target.result,e.onload=function(){var n=i.getPalette(e,2).map((function(t){return"#".concat(t.map((function(t){return t.toString(16).padStart(2,"0")})).join(""))}));d({src:t.target.result,palette:n})}}}));var b=p.every((function(t){return u.palette.includes(t)}));document.documentElement.style.setProperty("--show-image-loading","none");var w="/me.jpg"===u.src;return e.useEffect((function(){document.getElementById("img-input").addEventListener("click",y,{once:!0}),document.querySelector("main").addEventListener("input",(function(){window.addEventListener("beforeunload",c)}),{once:!0})}),[]),t.h(t.Fragment,null,t.h("main",null,t.h("label",{for:"img-input",class:"dp-container"},t.h(r,{userImage:u.src,colors:p,gradientSize:f,animateGradient:!1}),t.h("input",{type:"file",id:"img-input",onChange:function(t){var e=t.target.files[0];e&&e.type.startsWith("image/")&&n.readAsDataURL(e)},accept:"image/*",class:"sr-only"})),t.h("h2",{class:"heading"},"Create Your Own DP"),t.h("div",{class:"controls"},t.h("span",{class:"choose-image-hint"},"You can choose your image by clicking/pressing on the image on the left. Until then, the save button will remain disabled. 😀",t.h("br",null),t.h("br",null),"Your image is not being uploaded to anywhere. Only the basic usage data is being collected for the purpose of analytics."),t.h("ul",null,t.h("li",null,t.h("h5",null,"Shape"),t.h("div",{class:"shape-input-container"},a.map((function(e){return t.h("label",{for:e,class:"shape-input",key:e},t.h("input",{name:"shape",type:"radio",id:e,class:"sr-only",value:e,checked:o==e,onChange:function(){return t=e,n=document.querySelector(".dp"),o=t,void n.setAttribute("data-shape",t);var t,n}}),t.h("span",{class:"shape-input--selector"},e))})))),t.h("li",null,t.h("h5",null,"Colors"),t.h("div",{className:"colors-input-container"},p.map((function(e,n){return t.h("label",{class:"color-input",key:n},t.h("input",{type:"color",class:"sr-only",onInput:function(t){!function(t,e){var n=e.target.value;g(p.map((function(e,a){return a===t?n:e})))}(n,t)},value:e}),t.h("div",{class:"color-input--selector",style:"background: ".concat(e,";")}))})),b?null:t.h("button",{onClick:function(){g(u.palette)},title:"Pick colors from image",class:"auto-button",dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-camera" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />\n  <circle cx="12" cy="13" r="3" />\n</svg>\n\n\n'}}))),t.h("li",null,t.h("h5",null,"Fine tune"),t.h("span",{class:"input-group"},t.h("label",{for:"gradient-size"},"Gradient size"),t.h("input",{type:"range",id:"gradient-size",value:f,min:"0",max:"16",onInput:function(t){return v(parseInt(t.target.value,10))}})),t.h("span",{class:"input-group"},t.h("label",null,"Gradient angle"),t.h("input",{type:"range",id:"gradient-angle",value:l,min:"0",max:"360",onInput:function(t){return e=parseInt(t.target.value,10),n=document.querySelector(".dp"),l=e,void n.querySelector("#background-gradient").setAttribute("gradientTransform","rotate(".concat(e," .5 .5)"));var e,n}}))),t.h("li",{style:"text-align: right; margin-top: 32px;"},t.h("button",{class:"save-button",onClick:function(){window.removeEventListener("beforeunload",c),pa.track({name:"save-dp",unit:"".concat(o," grSize").concat(f," grAngle").concat(l)});var t=document.querySelector(".dp"),e=2.5*t.clientWidth,n=(new XMLSerializer).serializeToString(t),a=document.createElement("img");a.onload=function(){var t=document.createElement("canvas"),n=t.getContext("2d"),r=e+100;t.width=r,t.height=r,n.fillStyle=getComputedStyle(document.body).getPropertyValue("--background"),n.fillRect(0,0,r,r),n.drawImage(a,50,50,e,e);var i=t.toDataURL("image/png",1),l=document.createElement("a");l.href=i;var c=new Date;l.download="dp-".concat(o,"-").concat(c.toLocaleDateString("en-GB").split("/").reverse().join(""),"-").concat(c.toLocaleTimeString("en-GB",{timeStyle:"short",hour12:!1}),".png"),l.click()};var r="data:image/svg+xml;base64,".concat(window.btoa(n));a.src=r},disabled:w,title:w?"Why do you want to save my picture? Huh? 😏":null},"Save"))))))}t.render(t.h((function(){var n=e.useState([]);return n[0],n[1],t.h(s,null)}),null),document.getElementById("root"))}(preact,preact);
