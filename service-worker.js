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
    "revision": "29e523fb6d6ea0f2a1221980b1b0c585"
  },
  {
    "url": "assets/css/0.styles.2ed08540.css",
    "revision": "1b2cc9992e150001d2d691ed084a291f"
  },
  {
    "url": "assets/img/k8s-baseinfo.0a15c288.png",
    "revision": "0a15c2883ca5cce8023221c58f1f1c1f"
  },
  {
    "url": "assets/img/k8s-volume.fb493bfa.png",
    "revision": "fb493bfae1b11a0fe9496c25f3b5405e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6e365f99.js",
    "revision": "aa8b185dc62a0ad5c1e8c6b4c03f2111"
  },
  {
    "url": "assets/js/11.eb0a9c06.js",
    "revision": "d1681faa58e4dcddd7ab50e7c136fa6c"
  },
  {
    "url": "assets/js/12.7ccff92d.js",
    "revision": "13dcc3ace5402df1ef550db83195939d"
  },
  {
    "url": "assets/js/13.1a676209.js",
    "revision": "f0d18e09232eae56618a4d7ffb9f1c9f"
  },
  {
    "url": "assets/js/14.84569625.js",
    "revision": "a7d457030e9bb2ecd27d0ef5bc47d27d"
  },
  {
    "url": "assets/js/15.64620e76.js",
    "revision": "9ce34254d14cd68d4efc5fdd0cb3445d"
  },
  {
    "url": "assets/js/16.dcd106a3.js",
    "revision": "7df206328c62e24ebd303eb96c9dc58a"
  },
  {
    "url": "assets/js/17.4487984b.js",
    "revision": "6f10f5dbd4212bdf989bc9286264fcdc"
  },
  {
    "url": "assets/js/18.df3b341b.js",
    "revision": "0ad57842cfad1ccd82360f669cf8859a"
  },
  {
    "url": "assets/js/19.bb69705a.js",
    "revision": "221aff6dbb770db52e7c554227d86ec2"
  },
  {
    "url": "assets/js/2.883ec247.js",
    "revision": "2efa85ec7d0b432e37d43a1dfe9ff855"
  },
  {
    "url": "assets/js/20.a0db47c5.js",
    "revision": "f27a87354f494f553c29cb75c824daaf"
  },
  {
    "url": "assets/js/21.13f70884.js",
    "revision": "6baeab0ac683e32187cf5cdd799662ba"
  },
  {
    "url": "assets/js/22.5c3133e9.js",
    "revision": "96b5b036978203fb8355d0f58784dace"
  },
  {
    "url": "assets/js/23.01458c00.js",
    "revision": "70dcfe1aaf53dc2cb47dcb95c719d8de"
  },
  {
    "url": "assets/js/24.d4a9db68.js",
    "revision": "79701e4656add9143a5cea314d08128f"
  },
  {
    "url": "assets/js/25.998e0adb.js",
    "revision": "3b81765d1bd247e6e60c58b5382e70fa"
  },
  {
    "url": "assets/js/26.25418bff.js",
    "revision": "17c6084e2aa828172d7207898a84ed1a"
  },
  {
    "url": "assets/js/27.8ff41d05.js",
    "revision": "8d9121ee2384ac29c8e7d88b674c5903"
  },
  {
    "url": "assets/js/28.cdff56fe.js",
    "revision": "f77c953b738375ea930de2a58699f4e8"
  },
  {
    "url": "assets/js/29.d1db752c.js",
    "revision": "08b414e7c320648d4b719efd9a5e2746"
  },
  {
    "url": "assets/js/3.314a3542.js",
    "revision": "e08fa59fb700206e8f0ad67b7e82895d"
  },
  {
    "url": "assets/js/30.c677a34a.js",
    "revision": "0383992d767affa487862e02a41bf33b"
  },
  {
    "url": "assets/js/31.c2809115.js",
    "revision": "57db6b95039bbed5475eca81de08389d"
  },
  {
    "url": "assets/js/32.dc7e67b3.js",
    "revision": "961fb063931cb03aa12a2e4eec84be1c"
  },
  {
    "url": "assets/js/33.cd1f8225.js",
    "revision": "6d2cd2d4e34ac4cb627ebb6c496a384a"
  },
  {
    "url": "assets/js/34.2151e4cd.js",
    "revision": "85261f70bda66cc448aef5826f506945"
  },
  {
    "url": "assets/js/35.745f43c6.js",
    "revision": "091435dde99432d3d8081fc6312bd1f9"
  },
  {
    "url": "assets/js/36.9bf3793c.js",
    "revision": "01e86880457f12cf9ad9a595583fe16e"
  },
  {
    "url": "assets/js/37.63810e6d.js",
    "revision": "281b2000a88c836350b0126afa010539"
  },
  {
    "url": "assets/js/38.c5744899.js",
    "revision": "d94e10aa0ae55af2ff6809d2d91faa6d"
  },
  {
    "url": "assets/js/39.3da71ecf.js",
    "revision": "6d8dfd5f0a47643b5488aea4eeb96acd"
  },
  {
    "url": "assets/js/4.f16064d6.js",
    "revision": "eb04e6e6f4c81657a3cee1fbbc337fbe"
  },
  {
    "url": "assets/js/40.46937a01.js",
    "revision": "af2f65e550727a3bfe725a68d4bf1f24"
  },
  {
    "url": "assets/js/41.ffd7badc.js",
    "revision": "f2f19b7f7487b3851dbd6ec94fa8c0de"
  },
  {
    "url": "assets/js/42.393b38f0.js",
    "revision": "616a8ee13f2f922fd9656ccc3b3e904d"
  },
  {
    "url": "assets/js/43.b13514ee.js",
    "revision": "d39d1c15590ed5e41e573ecf69cf20d6"
  },
  {
    "url": "assets/js/44.5cf1c803.js",
    "revision": "9ba7376fc5bc309148b23d2e0bdf4656"
  },
  {
    "url": "assets/js/5.952f3482.js",
    "revision": "4f37626e9dbac243780e638ae20e2197"
  },
  {
    "url": "assets/js/6.2901a65d.js",
    "revision": "ed042cd1fb1fd7dd0bf75643703684c6"
  },
  {
    "url": "assets/js/7.dee35a8b.js",
    "revision": "58c3f5fcbdc609d1c0db1660fa3219dc"
  },
  {
    "url": "assets/js/8.c81aeacd.js",
    "revision": "e0e835600ea2e3fbf76c48f012643fa7"
  },
  {
    "url": "assets/js/9.64f79a1d.js",
    "revision": "ba3b446d45bca78daf5bdd118cf09902"
  },
  {
    "url": "assets/js/app.bcfbac2f.js",
    "revision": "25f558dce25bb369b7e81854a47542e2"
  },
  {
    "url": "guide/index.html",
    "revision": "bc210ecec3a126430c8f1e5c755bd88f"
  },
  {
    "url": "images/icon.jpg",
    "revision": "ff8122b1fa534e9aa6ef75426abe35f4"
  },
  {
    "url": "index.html",
    "revision": "e22bc8a795e34fceaec6f433b89e6f78"
  },
  {
    "url": "todo/index.html",
    "revision": "4eef4a9051bd075375dfc2a1412adcf6"
  },
  {
    "url": "tree/databases/oracle.html",
    "revision": "bfbfa74d0261a572bfc7103852cb4902"
  },
  {
    "url": "tree/docker/docker-compose.html",
    "revision": "89793ec6802f558347115c5388062778"
  },
  {
    "url": "tree/docker/docker.html",
    "revision": "40c171930d266086f272fb875785899a"
  },
  {
    "url": "tree/docker/es.html",
    "revision": "865d9f9f39a150e9f1872383a561bf40"
  },
  {
    "url": "tree/docker/harbor.html",
    "revision": "a3dda6eb17736a2f5bdbcbcd31fbd911"
  },
  {
    "url": "tree/docker/kkfileview.html",
    "revision": "95fd9af31755d4a69fac5c50033b02f5"
  },
  {
    "url": "tree/docker/mysql.html",
    "revision": "dce9c4cbd1bacc2edb5b57a6a161ca92"
  },
  {
    "url": "tree/docker/nginx.html",
    "revision": "641686add02c38bdcb070de89f27093f"
  },
  {
    "url": "tree/docker/oracle.html",
    "revision": "c7ea3dfe0d515321f99842adf2c0e251"
  },
  {
    "url": "tree/docker/postgresql.html",
    "revision": "15badd2c2151d2066b3ecd84c3d94674"
  },
  {
    "url": "tree/docker/redis.html",
    "revision": "a6eb92932ef042c07c1af05c7a0b4282"
  },
  {
    "url": "tree/docker/xxl-job.html",
    "revision": "fcd47e7c01beba2a19bdae9153e40168"
  },
  {
    "url": "tree/java/Java常用工具库.html",
    "revision": "62688505ac21756aef526b1d1ccb5984"
  },
  {
    "url": "tree/java/常见BUG.html",
    "revision": "d8455f1e43d38c877de5040b927494b1"
  },
  {
    "url": "tree/javascript/javascript常见问题.html",
    "revision": "891dcf2e79a6e08e674ec5f214524067"
  },
  {
    "url": "tree/javascript/vue.html",
    "revision": "8fccd5234bca33ee93bc024cc0aaba9f"
  },
  {
    "url": "tree/k8s/configmap.html",
    "revision": "8d142297e49c49fdef07646620014e22"
  },
  {
    "url": "tree/k8s/containerd.html",
    "revision": "9685b07d16546d94ad6cce0bd249138c"
  },
  {
    "url": "tree/k8s/deployment.html",
    "revision": "eb045894bb3db62bd35a3c3558a76486"
  },
  {
    "url": "tree/k8s/ingress.html",
    "revision": "a916cda8780ec9b31158626cbcd46336"
  },
  {
    "url": "tree/k8s/k8s.html",
    "revision": "d9204e5742c4f77c222bc5c49fad461d"
  },
  {
    "url": "tree/k8s/namespace.html",
    "revision": "05aa8f29ddd063c37a17f7ef652b237e"
  },
  {
    "url": "tree/k8s/pod.html",
    "revision": "e323a822a1f9a46f8d07992d462be391"
  },
  {
    "url": "tree/k8s/secret.html",
    "revision": "a50b5c913211ae81a22058d137c83452"
  },
  {
    "url": "tree/k8s/service.html",
    "revision": "4ec34010c878591098853866cb0244fb"
  },
  {
    "url": "tree/k8s/statefulset.html",
    "revision": "6b2fa634ce4c53412d711922a75bfd9a"
  },
  {
    "url": "tree/k8s/持续化存储.html",
    "revision": "289b7031685188a00094f44cc8c293a1"
  },
  {
    "url": "tree/linux/firewall.html",
    "revision": "ab899035860b5357619c49c84f874bbb"
  },
  {
    "url": "tree/linux/kvm.html",
    "revision": "a186183b1b229fcf77cb3ea696ad10ce"
  },
  {
    "url": "tree/tools/doscify.html",
    "revision": "3eb176aa2a49e5d6c9ce658b9ba814b9"
  },
  {
    "url": "tree/tools/navicat.html",
    "revision": "49abff863ccbeaefb9fe7aa591f6f7eb"
  },
  {
    "url": "tree/vuepress/index.html",
    "revision": "565a389f4f73b8fe1d5a6b9422b78ac8"
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
