import{S as e,h as t,p as a}from"./preact-ec53f1bf.js";import"./signals-3cf39683.js";import{T as r,D as i,W as o}from"./config-ede8b8cc.js";const n=[{route:"/posts",pathMatcher:"/posts",importPath:"/js/pages/posts.js",loadedData:{props:{posts:[{slug:"xcalc-for-android",estReadTime:"4 min read",title:"XCalc for Android",description:"Sharing how & why I developed XCalc as a native Android app",tags:["experience","project"],dateCreated:"22 January 2023",lastUpdatedOn:"9 February 2023"},{slug:"preact-prerendering-issue",estReadTime:"5 min read",title:"Solving the Prerendering Preact Problem",description:"Having trouble while prerendering a Preact site? In this post, I'll share my experience finding a solution to this common problem.",tags:["preact","experience"],dateCreated:"21 December 2022",lastUpdatedOn:"9 February 2023"},{slug:"open-graph-images",estReadTime:"5 min read",title:"Static Open Graph images",description:"I added statically-generated Open Graph images to my posts; and how I optimized them.",tags:["experience"],dateCreated:"20 November 2022",lastUpdatedOn:"9 February 2023"},{slug:"the-is-odd-npm-package-meme",estReadTime:"2 min read",title:"The is-odd NPM package",tags:["meme"],dateCreated:"4 November 2021",lastUpdatedOn:"9 February 2023"},{slug:"a-javascript-quiz",estReadTime:"8 min read",title:"A JavaScript Quiz — Explained",description:"Explanation of an amazing quiz I took an year ago.",tags:["explanation"],dateCreated:"17 September 2021",lastUpdatedOn:"9 February 2023"},{slug:"building-xcalc",estReadTime:"8 min read",title:"Story of Building XCalc",description:"Sharing how I built XCalc, an extended calculator.",tags:["experience","project"],dateCreated:"10 June 2021",lastUpdatedOn:"9 February 2023"},{slug:"javascript-shorthands",estReadTime:"4 min read",title:"JavaScript Shorthands",description:"Do you write JavaScript a lot? These shorthands might be helpful to you.",tags:["javascript"],dateCreated:"7 April 2021",lastUpdatedOn:"9 February 2023"},{slug:"divisibility-rules",estReadTime:"8 min read",title:"Divisibility Rules - An Explanation",description:"How much time would you need to check if a given number is divisible by 2 –15 without a computer? Well, for the first few numbers, you would be so fast. But you will get stuck at 7 or 13 right? Don't worry. After reading this article, you won't. Give it a try.",tags:["mathematics"],dateCreated:"27 February 2021",lastUpdatedOn:"9 February 2023"}]},meta:null}},{route:"/tools/dp-maker",pathMatcher:"/tools/dp-maker",importPath:"/js/pages/tools/dp-maker.js",loadedData:{meta:null}}],s=Object.fromEntries(n.map((e=>[e.pathMatcher||e.route,()=>new Promise(((t,a)=>{import(e.importPath).then((e=>{t(e)})).catch((t=>{console.warn(`error while loading (${e.importPath})`,t),a(t)}))}))])));o.split("//")[1],window.location.pathname;const d=({children:e,noHydration:r})=>t(a,null,e),l=document.getElementById("root");(async()=>{const a=n.find((e=>new RegExp(e.pathMatcher||e.route,"i").test(window.location.pathname))),r=s[a.pathMatcher||a.route],i=(await r()).default;let o;a.loadedData&&(o=a.loadedData.props),e(t(d,{noHydration:!1},t(i,{...o})),l);document.querySelectorAll("input[name=theme-switch]").forEach((e=>{e.addEventListener("input",(()=>{const t=e.id.replace("theme-","");window.localStorage.setItem("theme",t),pa.track({name:"select theme",unit:t}),window.__supportCssHas||document.documentElement.setAttribute("data-theme",t)}))}))})();
