const UPVOTED_POSTS = "upvotedPosts";

export default {
  upvotedPostsExists: () => {
    const upvotedPosts = localStorage.getItem(UPVOTED_POSTS);
    return upvotedPosts && upvotedPosts !== "";
  },
  initializeUpvotedPosts: () => {
    localStorage.setItem(UPVOTED_POSTS, []);
  },
  upvotedPostsIncludesPostId: postId => {
    localStorage.getItem(UPVOTED_POSTS).includes(postId);
  },
  addToUpvotedPosts: postId => {
    const upvotedPosts = localStorage.getItem(UPVOTED_POSTS).split();

    const newUpvotedPosts = Array.isArray(upvotedPosts) ? upvotedPosts : [];

    newUpvotedPosts.push(postId);

    localStorage.setItem(UPVOTED_POSTS, newUpvotedPosts);
  },
  removeFromUpvotedPosts: postId => {
    localStorage.setItem(
      UPVOTED_POSTS,
      localStorage
        .getItem(UPVOTED_POSTS)
        .split()
        .filter(it => !it.includes(postId))
    );
  }
};
