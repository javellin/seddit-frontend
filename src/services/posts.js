import axios from "axios";
import { toast } from "react-toastify";

const POSTS_URL = "/posts";

export default {
  fetchPosts: () => {
    return axios.get(POSTS_URL);
  },
  upvote: postId => {
    return axios.put(`${POSTS_URL}/${postId}/upvote`);
  },
  removeUpvote: postId => {
    return axios.put(`${POSTS_URL}/${postId}/removeUpvote`);
  },
  createPost: async post => {
    const response = await axios.post(POSTS_URL, post);
    if (response.status === 200) {
      toast.success("Post created successfully!");
      return;
    }

    toast.error("An error ocurred while saving your post :(");

    return;
  }
};
