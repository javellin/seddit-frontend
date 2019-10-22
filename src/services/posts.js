import axios from 'axios';

export default {
  fetchPosts: async () => {
    return await axios.get("/posts");
  }
};
