/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "799f07fb02df1c466e0092da3dbc2df3"
  },
  {
    "url": "assets/css/0.styles.ae3bb757.css",
    "revision": "7392007a7e637ec0de5ceb6cfb5c1ecc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.4253867e.js",
    "revision": "c752cd273e49645a3861a7f152b83915"
  },
  {
    "url": "assets/js/16.9ad73624.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.5b53db67.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.6e8c5dde.js",
    "revision": "961a6a0a94ed2bef7773a5bfdee62e4c"
  },
  {
    "url": "assets/js/19.52fbf99a.js",
    "revision": "27fdce0dee90ea3ed9605a185c2c3021"
  },
  {
    "url": "assets/js/2.038545ff.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.1e895752.js",
    "revision": "7e18518d5953bbd3e0d62a353a4b3d52"
  },
  {
    "url": "assets/js/21.3c587e8b.js",
    "revision": "78c4aa180a4b3a47b79bd9e43fac28f7"
  },
  {
    "url": "assets/js/22.eaeb520d.js",
    "revision": "ca650d0d7870d8ba3226d492bc75ff8d"
  },
  {
    "url": "assets/js/23.d97aed26.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.35d77125.js",
    "revision": "d094893b7e96dbf7c79e7a8d727a2c33"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.e1631426.js",
    "revision": "341a223c3ac95cb185d3cf641ebed508"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6c7a0f5cdcdc0a3bcc251be29dac0321"
  },
  {
    "url": "design/index.html",
    "revision": "c285bf904e8f1952d47622787104a75f"
  },
  {
    "url": "index.html",
    "revision": "70e0ca342b19b2eba53f6fb030f6e6de"
  },
  {
    "url": "intro/index.html",
    "revision": "84d263ed812f4230c26100f5665aa180"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8df99375bb9d4322ec4178e288b3baeb"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "87a41d31328474c5aef4f714e463540b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "2d1927488cc2b48a37abe551eea74592"
  },
  {
    "url": "software/index.html",
    "revision": "97911d2a662ceab6621c31f163586d5f"
  },
  {
    "url": "test/index.html",
    "revision": "165ceccd861bdc89e07ae9b3cd6a8618"
  },
  {
    "url": "use cases/index.html",
    "revision": "2801143bd501ac13dc6b9dc3de1e20af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
