import React from "react";

import Post from "molecules/Post";

import { postsService, localStorageService } from "services";

export default function PostsList({ posts }) {
  React.useEffect(() => {
    if (!localStorageService.upvotedPostsExists()) {
      localStorageService.initializeUpvotedPosts();
    }
  }, []);

  const handleVote = React.useCallback(async (postId, vote) => {
    return vote === 1
      ? postsService.upvote(postId)
      : postsService.removeUpvote(postId);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post post={post} handleVote={handleVote} />
      ))}
    </div>
  );
}
