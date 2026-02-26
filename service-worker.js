self.addEventListener("install", function(event) {
event.waitUntil(
caches.open("travel-app").then(function(cache) {
return cache.addAll([
"./",
"./index.html"
]);
})
);
});