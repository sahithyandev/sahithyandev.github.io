!function(){"use strict";const e="blog-cache-7515032",t=["/global.css","/favicon.ico"];self.addEventListener("install",(s=>{s.waitUntil(caches.open(e).then((e=>{e.addAll(t)})))})),self.addEventListener("activate",(t=>{console.log("sw activate"),t.waitUntil(caches.keys().then((t=>Promise.all(t.map((t=>{if(console.log("sw cache",t),t!==e)return caches.delete(t)}))))))})),self.addEventListener("fetch",(t=>{"chrome-extension"!==t.request.url.split("://")[0]&&"GET"==t.request.method&&t.respondWith(caches.match(t.request).then((s=>s||fetch(t.request).then((s=>{if(!s||200!==s.status)return s;const n=s.clone();return caches.open(`${e}_runtime`).then((e=>{e.put(t.request,n)})),s})))))})),console.log("service worker working")}();
