'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4ede873010a8253fe5bdfee3df36bc89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5a1268f8d304197ca979987c1dd96cb2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9b4808d4a86be9adfeb4263d00fd3ca1",
".git/logs/refs/heads/main": "891a4a9021d6201da109a907da51ac7b",
".git/logs/refs/remotes/origin/main": "0ea8fef0a5b75d46c762f9912cf9bb92",
".git/objects/01/4bac076534ea3348d2852e1908415b5dda64d3": "46fe8d8645d6cb1276f42e413ffd018e",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/09/8bebc13f6b19c4589a6e541841381a4760f162": "c9e7ccc73fea74c925b05366c85e883e",
".git/objects/09/ba20933f458635185b2dbda07c088286b0e5df": "f2fb2c33459cf3dae74115dd3066c529",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0f/7465790fe91bc4aa239a8ddb96dce19660a749": "57418f11568eefc24eab6516c36165d3",
".git/objects/14/3569fde6377aeb4f9ce14ad1f5c2e2330578a5": "5a32c1c051d38b6970a0516e73f648d4",
".git/objects/19/74d0a66d210dd63fadb92b4efeb7565ce43726": "d4144e8b3cea1aa50e5b0c7dc75885dd",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1d/8c2df127019b1aa0fa667d2de9dfc610cf30bd": "d2424095da6a26dcf157bcaf3f977428",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/3ce92f00ae6d6f74a878cf0351e0d6d4cb3bb3": "54b33668ec4191bc1125a56662db685c",
".git/objects/29/9159d2b9792607d5b867850bce44c4f0d9c735": "073f2cd32d1f1f79ba6a2fc6a88bad36",
".git/objects/2b/65cde00a29d5eecd2753f90c9c03a80fe99800": "81531da413e6f37963434cb966dfcc18",
".git/objects/2d/efde6f259e594e04194215709fc276ef56ee70": "265340f69565f391c3227e17f1d94ded",
".git/objects/2e/5202464ce739c61355102f885ebd8768f82d08": "5a796b1f1f01337624dcf475fe2e791f",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3a/06768fdb892b754fc37f8234a9f1fab66c8282": "1cc7d978bb7f150c9fa805ddd9586c94",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/90b8181e78fb5c721af5a57369b9cf4b5c903f": "4e49dac718c1d1736eb4627b5d29418b",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/45/fa26c7e1ccd19b929054273ea8f59d30da9480": "32378edb40f764d88ec009a1a71c92ec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e9fd229e38189cc896dfd4ecf2ae71a287bf59": "751b81b6a6efac12ebc064be19645c1c",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/a9b6c6706473cbef49521cf5c31108a452ec9f": "cea26b64786da477101abb7da444806a",
".git/objects/4b/651601c08e10db63eacb11f0b71db2ad01500c": "6a924f0ee2fd28713f6637ff27987743",
".git/objects/4c/d8dc755e909a8acc9eb99928c7ad891b95fa64": "2c85ba1e703969c50513f1f039fcef8d",
".git/objects/4d/5d0ca50a3efd8b12b1a9e67f4ab42506b7a19d": "c8d3918396445c0c11085a0906dcdd9b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/f5be6a799680069521bc9eb7f118c9f279d87c": "1fa4e64f720e7002f1ae677e33d96c4f",
".git/objects/56/9c0c7ea502059b4ca35510e00c364651ba9ada": "9bb78830db8cbc3e02e01b1d7ffba956",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5e/4ed559da6e0bf2ba55fea3cb176727822e491f": "299221eb8758148f3914ea04fec49a35",
".git/objects/62/563aacd8ef0374a9bc662d2ae73604adc9a7e7": "997a41f2bcc3e45f7064b40f39d2d1c1",
".git/objects/66/b3a5a53b72245d61fe44024468f0c321d8f9cf": "d6fc2691af1803be6411a7be7f019661",
".git/objects/6f/3e8fe393f2862670253a3b1244ad10e75d2698": "86977f17af666becb4d0af0f650a979b",
".git/objects/78/cc2f7ef9948b2b77eb51d8924b6048030f0ec1": "9c66a479f047040651c8145bd12efd20",
".git/objects/79/0a163dbe2ddf69f2c2462e466bde91c8ec3e07": "1fc97a5260d5cb60f1fa9ce07590d00d",
".git/objects/7b/3b19dbd6186b922a08af18e655795f2ef4d6fc": "8167ad02a4c9dd782dd9ada01cdeef1d",
".git/objects/7c/6a015003dfc077a6f07e2984a4f49fe8806d06": "3db7f23492c64df93586f5752308cd5a",
".git/objects/7d/b08434f74aa7e43916104e7d92a2ec11052a71": "7be2ee86f664835c6fef6d37a26e8ea7",
".git/objects/7f/90a362a9376309a91f9dc91bdad09b665a47f9": "35cdc4bd25d89c04914c5013695ab5a6",
".git/objects/82/188a86c161d0f6e41abde394435334136f4921": "4b408b530114ff7600d5cd9cd82900a6",
".git/objects/83/b877bf5db65a262ae651ef01a06c66241e5c04": "ff92ed534857d17a1a8579b3ac005f00",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/88/34975500c6c064ee8ee2dee2e1c8deaec898ba": "529ebf8f97803d61d3f845d6b183349b",
".git/objects/8d/9d48ed45784995f494422807b144b48d603e6b": "2a598c078e85a00824f36fbd380f3c41",
".git/objects/95/6288fe6f5a187117ce2d08a6e86a92082dfe78": "b4a200b60cf9daf094b39fd8dc96b69f",
".git/objects/97/39b69931a3376b131beb13c6c08a619cc6d301": "5be45586aebe2eb9d93b9c02eab1abb5",
".git/objects/98/05edd872971868c4afe45fd6edc80003e7923f": "66c7f1d61a187f40cb6cc63d1322a5ae",
".git/objects/9a/0c3f689257e2c6bba1f6f0c77f1e6ed168dfb1": "350575f0511f7e2aad4ce9de0ac6d066",
".git/objects/9e/bd9633f8831d4b7bd06cb9e46a480a4f516446": "180b8d59563353efba7a24d59f90980e",
".git/objects/a9/549ab850303c4cbb8eadbae98a89e7baf8894a": "c5af1752e2e16049e46ec0a3ede0703f",
".git/objects/aa/b76540cabd8cd90bdf6f663fdee9f4a410a375": "2808ea4b971b341a94bc9df0d7fe6490",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/9177fa713699928f9938e93e98256807756cc5": "35d6b8c5f8c5057a5a575cbb11da1ab0",
".git/objects/c0/4900b7008e6b6921511158c6adfb4739b946f6": "f5d54f6f031b4346300e1227715e6584",
".git/objects/c0/8e9624b0f0d2ff4dd75d7446bb2e72afd489cc": "0e9b483479979cb461acebaf01db6515",
".git/objects/c2/1ceef6512f9ed5206ea4657d7d3bad5493ac7e": "fd00d5bc5b4438acb43615c1f32a6d6b",
".git/objects/c2/d825ad139cb9fa8b38a6eaba0fa60f4bfa983b": "b55606545bda426bdf0a999e171e90e3",
".git/objects/c6/2da2368f9f14f274f0f2e33ed26f931d678838": "b8e6563ba2745b6e23abaff9adc605a5",
".git/objects/c8/eb78859fde01d95024f9185e3e57c5cf8048f9": "ed16d37a61742f261efe46110735493c",
".git/objects/c9/5cd9e260e5cd0e1cc20ca229675d06277596d4": "b421c3f4faad56fec18e1d42dec3e03d",
".git/objects/ca/4449d2659ddfa55f4b29895fe6d15006034e3d": "41e6f52b2be4cae3d45a5ea3855849e9",
".git/objects/ca/f099c5b4e5cca188ab2535e8ae590466efb6f9": "f1bea305d14e40296d27968f31527b96",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/d2/8c64c62dbfb5e5a4e378fe36c035f3e71feeb4": "4718f1c7651f2fe31c949cff0c2adfbb",
".git/objects/d2/93e3512134d1cfc56501bee5cb56c89d762640": "ac97c1b5e9ec1797ef927a52ae37134e",
".git/objects/d3/de55b942a65aa8bd5bd515689f4c08445bfa41": "cd6b401b7b985bb8eb78913550375c12",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/f6fdad5c7d17c46b8d95f08cedff99a3b4f29a": "f2faaa780be3bcbb9cea0b048e95128c",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/6069ccd3d388abcfa433f149b95809bc2d88df": "ea4f1582e517043b7e504ecae08eacfc",
".git/objects/ed/767e6cf2fb3bac65d18f6a602b6c4ad3a00c96": "ab7512c3fa9cef146a193ce5895c1a66",
".git/objects/f0/74cf7a0cbd73a3aad8f27d5832946c11f5a9f3": "86aebf893635274ac07f7a9db91e95d8",
".git/objects/f0/ecb620bdaabd7d8459e4c5137e207757851ce0": "91ddfb151414b45b928940616db078ac",
".git/objects/f1/72d66325627934e637a4d18757f94df538b15b": "f9a66b98eb3109b4d5772d012f7289eb",
".git/objects/f1/83dcbd41a110c0aea696d9204e240db80b8f3a": "90a35674e363124b58e3ff1c06262d6a",
".git/objects/fb/e896d8ee7ae82c013ff1b0f8b2f290b7b95edc": "a7201aae7b4042a935dbb7d8bbe82d00",
".git/objects/fe/27ee5b381d77745854ccdcd695ba4b0894c41b": "3020aeac646646f078055d3b65076a58",
".git/objects/fe/b7e2300a2af13073d967d3d137b51be915afd1": "0ed974ec50decc68f8a784dd6c53d9bc",
".git/objects/ff/5a8d53899e9a89b88bc1934eee303ab9feaaf7": "c276df07f9bcfade7b6b6409c3d66da5",
".git/refs/heads/main": "e0b0c4f88665399fe7b294966fc1fab0",
".git/refs/remotes/origin/main": "e0b0c4f88665399fe7b294966fc1fab0",
"assets/AssetManifest.bin": "5b73fbfee498f9df66fbcce8bf359040",
"assets/AssetManifest.bin.json": "7bde35c113817b32c95eaac362fdfdc0",
"assets/AssetManifest.json": "3d0cfad5416a162376e198e44316a320",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/icons/1103598.svg": "cebd6ce9ca5cb7840b9e553159baa24a",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/imgs/02.png": "c69fe1c71fb22e80db20de3a666ff1de",
"assets/assets/imgs/03.png": "dc2ab9bf1dc7b655c283b4238c7f75b8",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/imgs/5424482.jpg": "97bcea6da28d671df4f407608a6987f8",
"assets/assets/imgs/ai.png": "3d5715eb89b8a61447b9a08dafdad74e",
"assets/assets/imgs/ai_image.png": "4347617363247cc88f76f202de29bc31",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/camera.png": "861bb95a423ef909781e181230d33932",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/ibtissam.jpeg": "aec9db710d4a3f29be2593381a4b744b",
"assets/assets/imgs/movie.jpg": "7a41377ae010fde67733f5017ed793d4",
"assets/assets/imgs/quiicon.png": "89faa605e27a27c4fc183fd0b3c399e7",
"assets/assets/imgs/quiz.jpg": "1b84bc97d81509e89d00362be5e3029d",
"assets/assets/imgs/stock.png": "f0533bdf0bb40b7b5507b84856a006c6",
"assets/assets/imgs/stockicon.png": "15a6acc0d33fbad363bd9f3b7a168e2c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "71747455115d0ad6ca16ebdc72351aa5",
"assets/NOTICES": "027f7529eb11d7448e149893a5b73c97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "7cb9adacc2c2be066940de79bc4ec02e",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "39b99360693cfbd0e0dd5a071e65b3a4",
"icons/android-chrome-512x512.png": "c929368ea6fd395f090f9c609d2f97f5",
"icons/apple-touch-icon.png": "00fc5b69673954a9232260e02f6dd956",
"icons/favicon-16x16.png": "645c7760f191489439fe38de2fd1250c",
"icons/favicon-32x32.png": "55c4a699125a4e5269d011d637f61a37",
"icons/favicon.ico": "7cb9adacc2c2be066940de79bc4ec02e",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "b77efcf57397bcb2a901d5d80129d993",
"/": "b77efcf57397bcb2a901d5d80129d993",
"main.dart.js": "e878d311995f60c7948f5da208067ea8",
"manifest.json": "3309910a5928e4a9f72b173f89486f1f",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
