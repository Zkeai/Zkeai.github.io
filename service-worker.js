if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>d(e,r),f={module:{uri:r},exports:n,require:s};i[r]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(a(...e),n)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d8b12e7aef1d51cab363a372b7dd5d0e"},{url:"about/index.html",revision:"98c9e845f8f0a84e274f9bfd5c180528"},{url:"album/index.html",revision:"95a5186404937228aeed31e2a9eb1204"},{url:"anzhiyu/random.js",revision:"3784b7d4d40996aff3a704b744dd2906"},{url:"archives/2024/04/index.html",revision:"94c5048ecf746d5d6c87deb4950798b2"},{url:"archives/2024/index.html",revision:"069d86d1d714fae1fbbd09e9630d5d4e"},{url:"archives/index.html",revision:"d56b41c10a50b79b4b29c2142852d544"},{url:"categories/index.html",revision:"564a1b3c3b8cf5d68a9e9d3092096755"},{url:"categories/教程/index.html",revision:"ab59515f3b9196607b6d6517953ab1c0"},{url:"comments/index.html",revision:"0f7befb9c3077e0b86e61bc5bd45cae1"},{url:"css/index.css",revision:"8e468bd5a75a4602259e769325f1174d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"c08afadbf8cbd5e5c173744087cd99e0"},{url:"equipment/index.html",revision:"6ec86a1d8d2980a473ac7379ad953288"},{url:"essay/index.html",revision:"0ce919807542455a88a477d97ce6957d"},{url:"fcircle/index.html",revision:"d18d3e95b0b21b23c1ad3abfea293574"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"aa1633aaef4f8e8a46c75a9338a6efe6"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/16.png",revision:"76e9deb4ac5a6409a27f22739c4a2424"},{url:"img/siteicon/32.png",revision:"0b7c22358e61251aafe8474a24ea50de"},{url:"img/siteicon/apple-icon-180.png",revision:"1c9bc40ee95386fb1c23a73fb05e79b6"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"dde81ecbef81a41ce7a1a559ce61c99c"},{url:"img/wechat.png",revision:"6a9779946d80422e942a06aed8e6efa0"},{url:"index.html",revision:"f3fb32267fbd9c02aa79693b5f5c10d1"},{url:"js/main.js",revision:"cdd5970350f40e50e1d9b7dd1557909b"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"938163cfb428cf8caebc5bd5213093f1"},{url:"link/index.html",revision:"96aa8e73957771573193a6be4f2265b7"},{url:"music/index.html",revision:"ad9b706af84956ab128813a7140846dc"},{url:"posts/66de.html",revision:"029ec252b36979fcdf4dc3e6c18a7ac4"},{url:"posts/ffe6.html",revision:"8dee75291a133a0fcab01097c7cb6272"},{url:"tags/index.html",revision:"8c5e1ecd27ebc723f42025631f1ccf1c"},{url:"tags/WEB3/index.html",revision:"38cbf3a354e84d1630206649ca80cd01"},{url:"tags/基础/index.html",revision:"ad906b374089516d393fdccb629ae002"},{url:"tags/环境/index.html",revision:"3911187a8158798f5ce13c2b4cfcb04d"},{url:"tags/环境搭建/index.html",revision:"6f276dec507e2263d83de7ee7dc1f473"},{url:"wordScenery/index.html",revision:"4d19f90b0fce4550c800f8ab5049e40f"}],{})}));
//# sourceMappingURL=service-worker.js.map
