import api from 'services/api';
import { toast } from "react-toastify";

const POSTS_URL = "/posts";

export default {
  fetchPosts: () => {
    return api.get(POSTS_URL);
  },
  upvote: postId => {
    return api.put(`${POSTS_URL}/${postId}/upvote`);
  },
  removeUpvote: postId => {
    return api.put(`${POSTS_URL}/${postId}/removeUpvote`);
  },
  createPost: async post => {
    const response = await api.post(POSTS_URL, post);
    if (response.status === 200) {
      toast.success("Post created successfully!");
      return;
    }

    toast.error("An error ocurred while saving your post :(");

    return;
  }
};
