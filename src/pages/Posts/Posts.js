import React from "react";

import Header from "organisms/Header";
import PostsList from "organisms/PostsList";
import NewPost from "organisms/NewPost";

import { postsService } from "services";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = React.useCallback(async () => {
    const response = await postsService.fetchPosts();
    setPosts(response.data);
  }, [setPosts]);

  const handleCreatePost = React.useCallback(
    async post => {
      await postsService.createPost(post);
      fetchPosts();
    },
    [fetchPosts]
  );

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <Header />
      <NewPost handleCreatePost={handleCreatePost} />
      <PostsList posts={posts} />
    </div>
  );
}
