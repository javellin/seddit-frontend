import React from "react";

import Header from "organisms/Header";
import PostsList from "organisms/PostsList";

import { postsService } from "services";

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  const fetchPosts = React.useCallback(async () => {
    const response = await postsService.fetchPosts();
    setPosts(response.data);
  }, [setPosts]);

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <Header />
      <PostsList posts={posts} />
    </div>
  );
}
