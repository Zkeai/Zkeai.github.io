if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>c(e,r),f={module:{uri:r},exports:n,require:s};i[r]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(d(...e),n)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"ff9671130deca4b093b70f16b2f74d8e"},{url:"about/index.html",revision:"a25907a9818c0844cd5abdc0cfed7225"},{url:"album/index.html",revision:"17cf4f86f5f4f2b2c0ba58c798aca66d"},{url:"anzhiyu/random.js",revision:"c3056b6be3ab18a496b7baad83e9d05a"},{url:"archives/2024/04/index.html",revision:"35af5aa0b9b4d872d15e8d0dadfe6413"},{url:"archives/2024/index.html",revision:"8b6fb80ee795999fe44dab0c46080094"},{url:"archives/index.html",revision:"edff637f60e37f1a5b316c2eceaba9a2"},{url:"categories/index.html",revision:"6091152ad06d0f6d7fda1f2080e07d12"},{url:"categories/教程/index.html",revision:"5a91129ad07d19b0e46db297f1a2ec31"},{url:"comments/index.html",revision:"123672554600588d79a3b3731c5b2365"},{url:"css/index.css",revision:"8e468bd5a75a4602259e769325f1174d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"c5e6a627762d0db14f5e48bfccbcd645"},{url:"equipment/index.html",revision:"04a922ed9c7cc184742a0f44295cec4c"},{url:"essay/index.html",revision:"5172af438934767864d77c6980d4b081"},{url:"fcircle/index.html",revision:"2bb13e26a22128e5cfe3b86fafd90e0f"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.png",revision:"aa1633aaef4f8e8a46c75a9338a6efe6"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/16.png",revision:"76e9deb4ac5a6409a27f22739c4a2424"},{url:"img/siteicon/32.png",revision:"0b7c22358e61251aafe8474a24ea50de"},{url:"img/siteicon/apple-icon-180.png",revision:"1c9bc40ee95386fb1c23a73fb05e79b6"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"8937b4e030d22c2e3e5b8503fd004465"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"dde81ecbef81a41ce7a1a559ce61c99c"},{url:"img/wechat.png",revision:"6a9779946d80422e942a06aed8e6efa0"},{url:"index.html",revision:"cc23c5dc2e2c4c2679507cd925b46160"},{url:"js/main.js",revision:"cdd5970350f40e50e1d9b7dd1557909b"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"938163cfb428cf8caebc5bd5213093f1"},{url:"link/index.html",revision:"90b2bfcd3099ec366a9d5afd972cfc32"},{url:"music/index.html",revision:"7081c5ab60102510b0a0f52de20a6c48"},{url:"posts/66de.html",revision:"3c2fb68745b4d55cf929da1bf9c88686"},{url:"posts/ffe6.html",revision:"cc03686717781348828de53118a73651"},{url:"tags/index.html",revision:"ab58e8acc921fbe73c1f42305c3eee5b"},{url:"tags/WEB3/index.html",revision:"3fdfe2975935719c3b3018f793692774"},{url:"tags/基础/index.html",revision:"0d72f99b4d4bf6ce7a0fff44fa00431c"},{url:"tags/环境/index.html",revision:"a517f56be7655cd6d6ea8655e0923d43"},{url:"tags/环境搭建/index.html",revision:"bf72d2ea39f7e5861be521641b57d34a"},{url:"wordScenery/index.html",revision:"93fe87151b2175b829331e9c7b2bf88c"}],{})}));
//# sourceMappingURL=service-worker.js.map
