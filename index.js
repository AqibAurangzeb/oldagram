const postsEl = document.getElementById("posts-el");

let posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      avatarDescription: "a picure of vangogh; ginger hair and in a suit",
      post: "images/post-vangogh.jpg",
      postDescription: "painted picture of vangogh; blue eyes, ginger hair and beard",
      comment: "just took a few mushrooms lol",
      likes: 21494,
      hasLiked: false
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      avatarDescription: "a picture of courbet; curly black hair and beard",
      post: "images/post-courbet.jpg",
      postDescription: "painted picture of courbret; man holding his hair back and has a van dyke beard",
      comment: "i'm feelin a bit stressed tbh",
      likes: 12502,
      hasLiked: false
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      avatarDescription: "a picture of ducreux; curled white hair with hat",
      post: "images/post-ducreux.jpg",
      postDescription: "painted picture of ducreux; blue eyes, curled white hair with hat standing sideways pointing forward",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 15137,
      hasLiked: false
  }
]

renderPosts()

function renderPosts() {
    for(let i = 0; i < posts.length; i++) {
        const post = posts[i];
        postsEl.innerHTML += `
        <div class="post">
            <header class="post-header">
                <img class="posted-by-avatar" src="${post.avatar}" alt="${post.avatarDescription}">        
                <div class="posted-by-details">
                    <h4 class="posted-by-username">${post.name}</h4>
                    <p class="posted-by-location small-text">${post.location}</p>
                </div>
            </header>
            <section>
                <img class="post-picture" src="${post.post}" alt="${post.postDescription}" ondblclick="likePost(${i})">
                <div class="post-content">
                    <div class="post-interactions">
                        <img class="post-interaction-icon" src="${post.hasLiked ? "images/icon-red-heart.png" : "images/icon-heart.png"}" alt="heart icon" onclick="likePost(${i})">
                        <img class="post-interaction-icon" src="images/icon-comment.png" alt="speech bubble icon">
                        <img class="post-interaction-icon" src="images/icon-dm.png" alt="paper aeroplane icon">
                    </div>
                    <p class="post-likes bold-text">${post.likes.toLocaleString()} likes</p>
                    <p class="post-comment"><span class="bold-text">${post.username}</span> just took a few mushrooms lol</p>
                </div>
            </section>
        </div>
    `;
    }
}

function refreshPosts() {
    postsEl.innerHTML = "";
    renderPosts();
}

function likePost(postIndex) {
    if (!posts[postIndex].hasLiked) {
        posts[postIndex].likes++;
        posts[postIndex].hasLiked = true;

    }
    else {
        posts[postIndex].likes--;
        posts[postIndex].hasLiked = false;
    }

    refreshPosts();
}