import{render as e,h as t}from"preact";import"preact/hooks";import"@preact/signals";const a=[{route:"/posts",pathMatcher:"/posts",importPath:"/pages/posts.js",loadedData:{props:{posts:[{slug:"open-graph-images",estReadTime:"5 min read",title:"Static Open Graph images",description:"I added statically-generated Open Graph images to my posts; and how I optimized them.",tags:["experience"],dateCreated:"20 November 2022",lastUpdatedOn:"14 December 2022"},{slug:"the-is-odd-npm-package-meme",estReadTime:"2 min read",title:"The is-odd NPM package",tags:["meme"],dateCreated:"4 November 2021",lastUpdatedOn:"14 March 2022"},{slug:"a-javascript-quiz",estReadTime:"8 min read",title:"A JavaScript Quiz — Explained",description:"Explanation of an amazing quiz I took an year ago.",tags:["explanation"],dateCreated:"17 September 2021",lastUpdatedOn:"14 March 2022"},{slug:"building-xcalc",estReadTime:"8 min read",title:"Story of Building XCalc",description:"Sharing how I built XCalc, an extended calculator.",tags:["experience","project"],dateCreated:"10 June 2021",lastUpdatedOn:"7 December 2022"},{slug:"javascript-shorthands",estReadTime:"4 min read",title:"JavaScript Shorthands",description:"Do you write JavaScript a lot? These shorthands might be helpful to you.",tags:["javascript"],dateCreated:"7 April 2021",lastUpdatedOn:"14 March 2022"},{slug:"divisibility-rules",estReadTime:"8 min read",title:"Divisibility Rules - An Explanation",description:"How much time would you need to check if a given number is divisible by 2 –15 without a computer? Well, for the first few numbers, you would be so fast. But you will get stuck at 7 or 13 right? Don't worry. After reading this article, you won't. Give it a try.",tags:["mathematics"],dateCreated:"27 February 2021",lastUpdatedOn:"9 October 2022"}]},meta:null}},{route:"/tools/dp-maker",pathMatcher:"/tools/dp-maker",importPath:"/pages/tools/dp-maker.js",loadedData:{meta:null}}],i=Object.fromEntries(a.map((e=>[e.pathMatcher,()=>new Promise(((t,a)=>{import(e.importPath).then((e=>{t(e)})).catch((t=>{console.warn(`error while loading (${e.importPath})`,t),a(t)}))}))])));"https://sahithyandev.github.io".split("//")[1];const o=document.getElementById("root");(async()=>{const r=a.find((e=>new RegExp(e.pathMatcher,"i").test(window.location.pathname))),s=i[r.pathMatcher],d=(await s()).default;let n;r.loadedData&&(n=r.loadedData.props),e(t(d,{...n}),o)})();
