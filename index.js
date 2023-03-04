// Minimal JS done for like functionallity hard-coded. Ideally drive posts via JS.
const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

const firstPostlikeInteractionEl = document.getElementById("first-post-like-interaction-el");
const secondPostlikeInteractionEl = document.getElementById("second-post-like-interaction-el");
const thirdPostlikeInteractionEl = document.getElementById("third-post-like-interaction-el");

const firstPostLikesEl = document.getElementById("first-post-likes-el");
const secondPostLikesEl = document.getElementById("second-post-likes-el");
const thirdPostLikesEl = document.getElementById("third-post-likes-el");

let hasLikedFirstPost = false;
let hasLikedSecondPost = false;
let hasLikedThirdPost = false;

firstPostlikeInteractionEl.addEventListener("click", function() {
    if (!hasLikedFirstPost) {
        firstPostlikeInteractionEl.src = "images/icon-red-heart.png";
        firstPostLikesEl.textContent = "21,495 likes";
        hasLikedFirstPost = true;
    }
    else {
        firstPostlikeInteractionEl.src = "images/icon-heart.png";
        firstPostLikesEl.textContent = "21,494 likes";
        hasLikedFirstPost = false;
    }
})

secondPostlikeInteractionEl.addEventListener("click", function() {
    if (!hasLikedSecondPost) {
        secondPostlikeInteractionEl.src = "images/icon-red-heart.png";
        secondPostLikesEl.textContent = "12,503 likes";
        hasLikedSecondPost = true;
    }
    else {
        secondPostlikeInteractionEl.src = "images/icon-heart.png";
        secondPostLikesEl.textContent = "12,502 likes";
        hasLikedSecondPost = false;
    }
})

thirdPostlikeInteractionEl.addEventListener("click", function() {
    if (!hasLikedThirdPost) {
        thirdPostlikeInteractionEl.src = "images/icon-red-heart.png";
        thirdPostLikesEl.textContent = "15,138 likes";
        hasLikedThirdPost = true;
    }
    else {
        thirdPostlikeInteractionEl.src = "images/icon-heart.png";
        thirdPostLikesEl.textContent = "15,137 likes";
        hasLikedThirdPost = false;
    }
})
