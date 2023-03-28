import{S as e,h as t,p as a}from"./signals-d4e349df.js";const i=[{route:"/posts",pathMatcher:"/posts",importPath:"/js/pages/posts.js",loadedData:{props:{posts:[{slug:"bitwise-operations",estReadTime:"4 min read",title:"Bitwise Operations",description:"Bitwise operations manipulate individual bits in binary data for efficient manipulation and testing. This article provides information and an interactive playground to help familiarize you with them.",tags:["explanation"],dateCreated:"1 February 2023",lastUpdatedOn:"19 February 2023"},{slug:"xcalc-for-android",estReadTime:"4 min read",title:"XCalc for Android",description:"Sharing how & why I developed XCalc as a native Android app",tags:["experience","project"],dateCreated:"22 January 2023",lastUpdatedOn:"19 February 2023"},{slug:"preact-prerendering-issue",estReadTime:"5 min read",title:"Solving the Prerendering Preact Problem",description:"Having trouble while prerendering a Preact site? In this post, I'll share my experience finding a solution to this common problem.",tags:["preact","experience"],dateCreated:"21 December 2022",lastUpdatedOn:"19 February 2023"},{slug:"open-graph-images",estReadTime:"5 min read",title:"Static Open Graph images",description:"I added statically-generated Open Graph images to my posts; and how I optimized them.",tags:["experience"],dateCreated:"20 November 2022",lastUpdatedOn:"20 March 2023"},{slug:"the-is-odd-npm-package-meme",estReadTime:"2 min read",title:"The is-odd NPM package",tags:["meme"],dateCreated:"4 November 2021",lastUpdatedOn:"19 February 2023"},{slug:"a-javascript-quiz",estReadTime:"8 min read",title:"A JavaScript Quiz — Explained",description:"Explanation of an amazing quiz I took an year ago.",tags:["explanation"],dateCreated:"17 September 2021",lastUpdatedOn:"19 February 2023"},{slug:"building-xcalc",estReadTime:"8 min read",title:"Story of Building XCalc",description:"Sharing how I built XCalc, an extended calculator.",tags:["experience","project"],dateCreated:"10 June 2021",lastUpdatedOn:"19 February 2023"},{slug:"javascript-shorthands",estReadTime:"4 min read",title:"JavaScript Shorthands",description:"Do you write JavaScript a lot? These shorthands might be helpful to you.",tags:["javascript"],dateCreated:"7 April 2021",lastUpdatedOn:"19 February 2023"},{slug:"divisibility-rules",estReadTime:"8 min read",title:"Divisibility Rules - An Explanation",description:"How much time would you need to check if a given number is divisible by 2 –15 without a computer? Well, for the first few numbers, you would be so fast. But you will get stuck at 7 or 13 right? Don't worry. After reading this article, you won't. Give it a try.",tags:["mathematics"],dateCreated:"27 February 2021",lastUpdatedOn:"19 February 2023"}]},meta:null}},{route:"/tools/bitwise-operations-playground",pathMatcher:"/tools/bitwise-operations-playground",importPath:"/js/pages/tools/bitwise-operations-playground.js",loadedData:{meta:null}},{route:"/tools/dp-maker",pathMatcher:"/tools/dp-maker",importPath:"/js/pages/tools/dp-maker.js",loadedData:{meta:null}}],r=Object.fromEntries(i.map((e=>[e.pathMatcher||e.route,()=>new Promise(((t,a)=>{import(e.importPath).then((e=>{t(e)})).catch((t=>{console.warn(`error while loading (${e.importPath})`,t),a(t)}))}))])));"https://sahithyandev.github.io".split("//")[1],window.location.pathname;const o=({children:e,noHydration:i})=>t(a,null,e),n=document.getElementById("root");(async()=>{const a=i.find((e=>new RegExp(e.pathMatcher||e.route,"i").test(window.location.pathname))),s=r[a.pathMatcher||a.route],d=(await s()).default;let l;a.loadedData&&(l=a.loadedData.props),e(t(o,{noHydration:!1},t(d,{...l})),n)})();
