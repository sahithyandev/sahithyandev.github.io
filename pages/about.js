import{h as e,Fragment as a}from"preact";var t=a=>{const t=a.href||"",s=a.disableDefaultStyles||!1,n={...a};return t.startsWith("/")||t.startsWith("#")?n["data-is-internal"]="":(n.target="_blank",n.rel="noopener noreferrer"),n.class=(n.class||"").split(" ").concat([s?"":"styled-link"]).join(" "),n.disableDefaultStyles=null,e("a",{...n})};const s=e=>e.replace(/\s/g,"-").toLowerCase(),n=(e,a)=>"mdx"===a?e.replace(/\[([^\]]+)\]\(([^()]+)\)/g,"$1"):"jsx"===a?"string"==typeof e?e:Array.isArray(e)?e.map((e=>n(e,"jsx"))).join(""):n(e.props.children,"jsx"):void 0;const l=l=>function(i,{slug:r}){const o=n(i.children,"jsx"),h=s(o),u={id:h,children:e(a,null,e(t,{disableDefaultStyles:!0,href:`/post/${r}#${h}`,class:"hashtag"},"#"),e("span",null,i.children)),class:"linkable-head"};return"h2"===l?e("h2",{...u}):"h3"===l?e("h3",{...u}):void 0};l("h2"),l("h3");function i(){return e(a,null,e("main",null,e("h1",null,"About"),e("p",null,"Hello!, I am Sahithyan from Jaffna, Sri Lanka. I am a 18-year-old Physical Science student in school. I have been developing web apps for about 5 years (or more) using various technologies. AND I LOVE IT!!."),e("h2",null,"About this site"),e("p",null,"This website is made using Preact, TypeScript, Sass, MDX, Rollup, and Gulp. And hosted using GitHub Pages. For security reasons, I have made the source code of this website private."),e("h2",null,"Contact me"),e("p",null,"The fastest and the easiest way would be direct messaging me on Twitter"," ",e(t,{href:"https://www.twitter.com/sahithyandev"},"@sahithyandev"),". You can email me at"," ",e(t,{href:"mailto:sahithyan2701@gmail.com"},"sahithyan2701@gmail.com"),". And also, you can find me on"," ",e(t,{href:"https://www.instagram.com/sahithyan_"},"Instagram")," ","and ",e(t,{href:"https://www.github.com/sahithyandev"},"GitHub"),"!")))}export{i as default};
