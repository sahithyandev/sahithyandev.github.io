!function(){"use strict";var e="blog-cache-3962477",t=["/global.css","/lib-preact.js","/favicon.ico"];self.addEventListener("install",(function(n){n.waitUntil(caches.open(e).then((function(e){e.addAll(t)})))})),self.addEventListener("activate",(function(t){console.log("sw activate"),t.waitUntil(caches.keys().then((function(t){return Promise.all(t.map((function(t){if(console.log("sw cache",t),t!==e)return caches.delete(t)})))})))})),self.addEventListener("fetch",(function(t){"chrome-extension"!==t.request.url.split("://")[0]&&"GET"==t.request.method&&t.respondWith(caches.match(t.request).then((function(n){return n||fetch(t.request).then((function(n){if(!n||200!==n.status)return n;var c=n.clone();return caches.open(e+"_runtime").then((function(e){e.put(t.request,c)})),n}))})))})),console.log("service worker working")}();
