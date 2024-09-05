import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const getPostById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch post with ID: ${id}`);
  }
};

export const createPost = async (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post');
  }
};

export const updatePost = async (
  id: number,
  data: { title: string; body: string; userId: number; id: number }
) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update post with ID: ${id}`);
  }
};

export const deletePost = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete post with ID: ${id}`);
  }
};
