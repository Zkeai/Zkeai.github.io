var posts=["posts/f6ac.html","posts/66de.html","posts/ffe6.html","posts/ff8d.html","posts/87ae.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};