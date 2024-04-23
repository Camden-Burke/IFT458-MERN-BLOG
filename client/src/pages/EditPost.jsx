// src/pages/EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const [post, setPost] = useState({ title: '', content: '' });
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await axios.get(`/api/posts/${postId}`);
        setPost(result.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/posts/${postId}`, post);
      navigate('/');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" name="title" value={post.title} onChange={handleChange} required />
        </label>
        <label>Content:
          <textarea name="content" value={post.content} onChange={handleChange} required />
        </label>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
