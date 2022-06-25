const staticCacheName = 's-app-v3';
const dynamicCacheName = 'd-app-v3';
const assetUrls = [
    'index.html',
    'offline.html',
    '/js/main.js',
    '/css/main.css'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(assetUrls)
})
self.addEventListener('activate', async event => {
    console.log('SW:activated')
    const cachesNames = await caches.keys()
    await Promise.all(
        cachesNames
            .filter(name => name !== staticCacheName)
            .filter(name => name !== dynamicCacheName)
            .map(name => caches.delete(name))
    )
})
self.addEventListener('fetch', event => {
    const {request} = event
    const url = new URL(request.url)
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request.url))
    } else {
        event.respondWith(networkFirst(request.url))
    }
})

async function cacheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(request)
        await cache.put(request, response.clone())
        return response
    } catch (e) {
        console.log(e)
        const cached = await cache.match(request)
        return cached ?? await caches.match('/offline.html')
    }
}
