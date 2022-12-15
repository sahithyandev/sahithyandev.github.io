import{h as t,p as e}from"../preact-a77c9537.js";import{a,h as s,c as n}from"../signals-db2e8f41.js";import{P as o}from"../post-card-86c16f4d.js";import"../anchor-d1ffaf7a.js";import"../tags-container-1fb055f7.js";
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
***************************************************************************** */var r;r={red:91,yellow:93,cyan:96},Object.fromEntries(Object.entries(r).map((function(t){return[t[0],"["+t[1]+"m"]})));let l=null;const i=n(void 0),c=n("a"),u=a((()=>{const t=c.value,e=i.value;return l?l(e,t):e}));function p(a){i.value=a.posts,s((()=>{const t=document.getElementById("posts-search");t.disabled=!1,t.addEventListener("click",n,{once:!0})}),[]);const n=async function(){var t,e,a;l=(await import("../search-logic-dac9b44f.js")).filterPosts,this.addEventListener("input",(t=t=>{c.value=t.target.value,pa.track({name:"Search Posts",unit:c.value})},void 0===e&&(e=300),function(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];clearTimeout(a),a=setTimeout((function(){t.apply(null,s)}),e)}))};return t(e,null,t("main",null,t("h1",null,"Posts"),t("div",{class:"search-container"},t("input",{type:"text",placeholder:"Search Posts",id:"posts-search",disabled:!0}),t("noscript",null,"Search can't work without JavaScript.")),t("div",{class:"posts-container"},void 0===u.value||0===u.value.length?t("div",null,"No posts matches your search query :("):u.value.map((e=>t(o,{meta:e,key:e.slug}))))))}export{p as default};
