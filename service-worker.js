if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>r(e,c),f={module:{uri:c},exports:n,require:s};i[c]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(d(...e),n)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"dc13c67f849468ced37b4cb93b4de63d"},{url:"about/index.html",revision:"86257b6ff6f30dc7448029388f3799e2"},{url:"album/index.html",revision:"113165930a713569c79e900eafce0dc5"},{url:"anzhiyu/random.js",revision:"ad9d2564b833e3721109e1ea511470dd"},{url:"archives/2024/04/index.html",revision:"43d0a546e6f31a45a6be44f85b54df40"},{url:"archives/2024/index.html",revision:"00b6b9a5e1495bab112a1f5de222b0d5"},{url:"archives/index.html",revision:"04fbf262101f2b234f8225a91726a76a"},{url:"categories/index.html",revision:"c4423397c41b18487c846c3e807d5c1c"},{url:"categories/教程/index.html",revision:"7b3140dacbd51650e14985496d3da091"},{url:"comments/index.html",revision:"48ec25a75edfaa45fe3063b8c3d95ef5"},{url:"css/index.css",revision:"8e468bd5a75a4602259e769325f1174d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"d3c63c39368961b1c0986e7331420250"},{url:"equipment/index.html",revision:"7bbbab17008abbb86caf58a3910b1923"},{url:"essay/index.html",revision:"31428633258300a16c2eda2a7f8e281d"},{url:"fcircle/index.html",revision:"b95fed11cd2f37b8673e09ec72c4942d"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"aa1633aaef4f8e8a46c75a9338a6efe6"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/16.png",revision:"76e9deb4ac5a6409a27f22739c4a2424"},{url:"img/siteicon/32.png",revision:"0b7c22358e61251aafe8474a24ea50de"},{url:"img/siteicon/apple-icon-180.png",revision:"1c9bc40ee95386fb1c23a73fb05e79b6"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"dde81ecbef81a41ce7a1a559ce61c99c"},{url:"img/wechat.png",revision:"6a9779946d80422e942a06aed8e6efa0"},{url:"index.html",revision:"33d4fba46e30b81042be8316c3b82ba3"},{url:"js/main.js",revision:"cdd5970350f40e50e1d9b7dd1557909b"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"938163cfb428cf8caebc5bd5213093f1"},{url:"link/index.html",revision:"8c4fc13f15396f2dd25b4e3047e040bf"},{url:"music/index.html",revision:"6903d90c22e20f8d107be4598ef0f750"},{url:"posts/ffe6.html",revision:"e7c7197d686f1eb784466a324e248e85"},{url:"tags/index.html",revision:"9f59ba7bccb8e336c22dccb7360be835"},{url:"tags/WEB3/index.html",revision:"3aa8eedcb991426a7f5a39d1d3abff4f"},{url:"tags/环境/index.html",revision:"01f7bb17b4ae3ab9e809cc47289dcba7"},{url:"wordScenery/index.html",revision:"b03ff6545f65a16d174a530d10732e81"}],{})}));
//# sourceMappingURL=service-worker.js.map
