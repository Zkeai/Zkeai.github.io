if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let s={};const f=e=>d(e,n),l={module:{uri:n},exports:s,require:f};i[n]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6dd52216a9980bd44e4c6f751c253a55"},{url:"about/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"album/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"anzhiyu/random.js",revision:"6a831ddee5c16116e2a355312f7c8c45"},{url:"archives/2023/08/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/2023/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"archives/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/教程/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"comments/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/index.css",revision:"8e468bd5a75a4602259e769325f1174d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"equipment/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fcircle/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"aa1633aaef4f8e8a46c75a9338a6efe6"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/16.png",revision:"76e9deb4ac5a6409a27f22739c4a2424"},{url:"img/siteicon/32.png",revision:"0b7c22358e61251aafe8474a24ea50de"},{url:"img/siteicon/apple-icon-180.png",revision:"1c9bc40ee95386fb1c23a73fb05e79b6"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"dde81ecbef81a41ce7a1a559ce61c99c"},{url:"img/wechat.png",revision:"6a9779946d80422e942a06aed8e6efa0"},{url:"index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/main.js",revision:"cdd5970350f40e50e1d9b7dd1557909b"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"938163cfb428cf8caebc5bd5213093f1"},{url:"link/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"music/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"posts/d743.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"tags/教程/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"wordScenery/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{})}));
//# sourceMappingURL=service-worker.js.map
