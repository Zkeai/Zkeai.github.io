var posts=["posts/66de.html","posts/ffe6.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};