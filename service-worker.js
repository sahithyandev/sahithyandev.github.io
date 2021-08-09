(function () {
    'use strict';

    const BUILD_ID = 703586;

    // TODO try to make it ts-compatible
    var CACHE_NAME = "blog-cache-" + BUILD_ID;
    var ASSETS = [
        "/global.css"
    ];
    self.addEventListener("install", function (event) {
        event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
            cache.addAll(ASSETS);
        }));
    });
    self.addEventListener("activate", function (event) {
        console.log("sw activate");
        event.waitUntil(caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function (name) {
                console.log("sw cache", name);
                if (name !== CACHE_NAME)
                    return caches["delete"](name);
            }));
        }));
    });
    self.addEventListener("fetch", function (event) {
        var requestScheme = event.request.url.split("://")[0];
        if (requestScheme === "chrome-extension" || event.request.method != "GET")
            return;
        event.respondWith(caches.match(event.request).then(function (response) {
            if (response)
                return response;
            return fetch(event.request).then(function (response) {
                if (!response || response.status !== 200) {
                    return response;
                }
                var responseToCache = response.clone();
                caches.open(CACHE_NAME + "_runtime").then(function (cache) {
                    cache.put(event.request, responseToCache);
                });
                return response;
            });
        }));
    });
    console.log("service worker working");

}());
