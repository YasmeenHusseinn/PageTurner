import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast } from 'react-toastify';

export default function createPostSlice(set, get) {
  // const ROOT_URL = 'https://platform.cs52.me/api';
  const ROOT_URL = 'https://lab5-platform-api-yasthemeen.onrender.com/api';
  // const API_KEY = '?key=yasmeen_hussein';
  return {
    all: [],
    current: {},
    fetchPost: async (id) => {
      try {
        const response = await axios.get(`${ROOT_URL}/posts/${id}`);
        set(({ postSlice }) => { postSlice.current = response.data; }, false, 'posts/fetchPost');
      } catch (error) {
        toast.error(`Failed to fetch post: ${error.message}`);
      }
    },
    fetchAllPosts: async () => {
      try {
        const response = await axios.get(`${ROOT_URL}/posts/`);
        console.log(response.data);
        set(({ postSlice }) => { postSlice.all = response.data; }, false, 'posts/allPosts');
      } catch (error) {
        toast.error(`Failed to fetch all posts: ${error.message}`);
      }
    },

    updatePost: async (postID, updatedPost) => {
      try {
        const response = await axios.put(`${ROOT_URL}/posts/${postID}`, updatedPost);

        set(({ postSlice }) => {
          postSlice.all = postSlice.all.map((post) => (post._id === postID ? response.data : post));
          postSlice.current = response.data;
        }, false, 'posts/updatePost');
      } catch (error) {
        toast.error(`Failed to update post: ${error.message}`);
      }
    },

    createPost: async (post) => {
      try {
        const response = await axios.post(`${ROOT_URL}/posts`, post);
        set(({ postSlice }) => { postSlice.all = [...postSlice.all, response.data]; }, false, 'posts/createPost');
      } catch (error) {
        toast.error(`Failed to create post: ${error.message}`);
      }
    },
    // deletePost: async (id) => {
    //   try {
    //     await axios.delete(`${ROOT_URL}/posts/${id}`);
    //     set(({ postSlice }) => {
    //       postSlice.all = postSlice.all.filter((post) => post._id !== id);
    //     }, false, 'posts/deletePost');
    //   } catch (error) {
    //     toast.error(`Failed to delete post: ${error.message}`);
    //   }
    // },
    deletePost: async (id) => {
      alert('You\'re not authorized to delete posts.');
    },

  };
}
