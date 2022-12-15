import{h as t}from"./preact-a77c9537.js";import{b as e}from"./signals-db2e8f41.js";const a=["squircle","circle"];function i(a){let i;void 0===a.userImage&&(a.userImage="/me.jpg"),a.colors||(a.colors=["#f9a83d","#b4284d"]),void 0===a.animateGradient&&(a.animateGradient=!0),void 0===a.shape&&(a.shape="squircle"),void 0===a.gradientSize?i=10:"number"==typeof a.gradientSize?i=a.gradientSize:(i=a.gradientSize.value,e((()=>{i=a.gradientSize.value;const t=document.querySelector(".dp");t&&t.style.setProperty("--me-image-size",(1-i/100).toString())})));const r=Array.isArray(a.colors)?a.colors:a.colors.value;return t("svg",{viewBox:"0,0,400,400",class:"dp",style:"--me-image-size: "+(1-i/100),"data-shape":a.shape||"squircle"},t("style",{dangerouslySetInnerHTML:{__html:'\n\t\t\t\t\t\t.dp[data-shape="squircle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.dp[data-shape="circle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 90, 90 0, 200 0 S 400 90, 400 200, 310 400 200 400, 0 310, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t'}}),t("defs",null,t("linearGradient",{id:"background-gradient",gradientTransform:"rotate(0 .5 .5)"},a.animateGradient?t("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:"0 .5 .5",to:"360 .5 .5",dur:"10s",repeatCount:"indefinite"}):null,r.map(((e,a)=>t("stop",{key:a,offset:100*a/(r.length-1)+"%","stop-color":e})))),t("path",{id:"path-to-clip",d:"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"})),t("clipPath",{id:"image-clip-path"},t("use",{href:"#path-to-clip"})),t("use",{href:"#path-to-clip",fill:"url(#background-gradient)"}),t("g",{style:"transform-origin: center; transform: scale(var(--me-image-size));"},t("image",{href:a.thumbUrl,type:"image/jpeg",alt:"",width:"100%",height:"100%"}),t("image",{id:"dp--user-image",href:a.userImage,type:"image/jpeg",alt:"",width:"100%",height:"100%","clip-path":"url(#image-clip-path)",preserveAspectRatio:"xMidYMid slice"})),t("g",{class:"loading-state-mask","clip-path":"url(#image-clip-path)",style:"display: var(--show-image-loading, none);"},t("rect",{x:"0",y:"0",width:"400",height:"400"}),t("text",null,"Loading...")))}export{i as D,a};
