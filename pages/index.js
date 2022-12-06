import{h as t,Fragment as e}from"preact";var a=e=>{const a=e.href||"",n=e.disableDefaultStyles||!1,i={...e};return a.startsWith("/")||a.startsWith("#")?i["data-is-internal"]="":(i.target="_blank",i.rel="noopener noreferrer"),i.class=(i.class||"").split(" ").concat([n?"":"styled-link"]).join(" "),i.disableDefaultStyles=null,t("a",{...i})};const n=t=>t.replace(/\s/g,"-").toLowerCase(),i=(t,e)=>"mdx"===e?t.replace(/\[([^\]]+)\]\(([^()]+)\)/g,"$1"):"jsx"===e?"string"==typeof t?t:Array.isArray(t)?t.map((t=>i(t,"jsx"))).join(""):i(t.props.children,"jsx"):void 0;const s=s=>function(r,{slug:l}){const o=i(r.children,"jsx"),h=n(o),d={id:h,children:t(e,null,t(a,{disableDefaultStyles:!0,href:`/post/${l}#${h}`,class:"hashtag"},"#"),t("span",null,r.children)),class:"linkable-head"};return"h2"===s?t("h2",{...d}):"h3"===s?t("h3",{...d}):void 0};s("h2"),s("h3");function r({tags:e}){return t("div",{class:"tags-container"},e.map((e=>t("span",{key:e,class:"tag"},e))))}function l(e){return t("div",{class:"post-card show","data-slug":e.meta.slug},t("span",{class:"post-released-date"},e.meta.dateCreated),t(a,{disableDefaultStyles:!0,href:`/post/${e.meta.slug}`},t("h3",{class:"title"},e.meta.title)),t("p",{class:"description"},e.meta.description),t(r,{tags:e.meta.tags}))}function o(){return t("div",{class:"social-links"},[{providerName:"Twitter",id:"sahithyandev",link:"https://www.twitter.com/sahithyandev",icon:'<svg class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />\n</svg>'},{id:"sahithyan_",providerName:"Instagram",link:"https://www.instagram.com/sahithyan_",icon:'<svg class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <rect x="4" y="4" width="16" height="16" rx="4" />\n  <circle cx="12" cy="12" r="3" />\n  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />\n</svg>'},{id:"sahithyandev",providerName:"GitHub",link:"https://www.github.com/sahithyandev",icon:'<svg class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />\n</svg>'},{providerName:"RSS Feed",link:"https://sahithyandev.github.io/feed.xml",icon:'<svg class="icon icon-tabler icon-tabler-rss" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <circle cx="5" cy="19" r="1" />\n  <path d="M4 4a16 16 0 0 1 16 16" />\n  <path d="M4 11a9 9 0 0 1 9 9" />\n</svg>'}].map((e=>t(a,{title:e.id?`${e.providerName} (${e.id})`:e.providerName,key:e.providerName,disableDefaultStyles:!0,href:e.link,dangerouslySetInnerHTML:{__html:e.icon}}))))}function h(e){return e.userImage||(e.userImage="/me.jpg"),e.colors||(e.colors=["#f9a83d","#b4284d"]),void 0===e.gradientSize&&(e.gradientSize=10),void 0===e.animateGradient&&(e.animateGradient=!0),void 0===e.shape&&(e.shape="squircle"),t("svg",{viewBox:"0,0,400,400",class:"dp",style:"--me-image-size: "+(1-e.gradientSize/100),"data-shape":"squircle"},t("style",{dangerouslySetInnerHTML:{__html:'\n\t\t\t\t\t\t.dp[data-shape="squircle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.dp[data-shape="circle"] #path-to-clip {\n\t\t\t\t\t\t\td: path(\n\t\t\t\t\t\t\t\t"M 0 200 C 0 90, 90 0, 200 0 S 400 90, 400 200, 310 400 200 400, 0 310, 0 200"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t'}}),t("defs",null,t("linearGradient",{id:"background-gradient",gradientTransform:"rotate(0 .5 .5)"},e.animateGradient?t("animateTransform",{attributeName:"gradientTransform",type:"rotate",from:"0 .5 .5",to:"360 .5 .5",dur:"10s",repeatCount:"indefinite"}):null,e.colors.map(((a,n)=>t("stop",{key:n,offset:100*n/(e.colors.length-1)+"%","stop-color":a})))),t("path",{id:"path-to-clip",d:"M 0 200 C 0 0, 0 0, 200 0 S 400 0, 400 200, 400 400 200 400, 0 400, 0 200"})),t("clipPath",{id:"image-clip-path"},t("use",{href:"#path-to-clip"})),t("use",{href:"#path-to-clip",fill:"url(#background-gradient)"}),t("g",{style:"transform-origin: center; transform: scale(var(--me-image-size));"},t("image",{href:e.thumbUrl,type:"image/jpeg",alt:"",width:"100%",height:"100%"}),t("image",{id:"dp--user-image",href:e.userImage,type:"image/jpeg",alt:"",width:"100%",height:"100%","clip-path":"url(#image-clip-path)",preserveAspectRatio:"xMidYMid slice"})),t("g",{class:"loading-state-mask","clip-path":"url(#image-clip-path)",style:"display: var(--show-image-loading, none);"},t("rect",{x:"0",y:"0",width:"400",height:"400"}),t("text",null,"Loading...")))}function d(n){return t(e,null,t("main",null,t("div",{class:"stretch-out me-banner"},t("h1",null,"Sahithyan"),t("span",{class:"tagline"},"student, web developer & tech enthusiast"),t(a,{href:"/tools/dp-maker",class:"me-image",title:"You can create like this one for you!"},t(h,{userImage:"/me.jpg",thumbUrl:"data:image/png;base64,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"})),t(o,null)),t("section",null,t("h2",{class:"sub-heading"},"Recent Posts"),t("div",{class:"posts-container"},(n.latestPosts||[]).map((e=>t(l,{meta:e,key:e.slug})))))))}export{d as default};
