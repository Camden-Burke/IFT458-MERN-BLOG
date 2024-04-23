import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [post, setPost] = useState({ title: '', content: '' });

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/posts', post)
      .then(() => {
        setPost({ title: '', content: '' });
        alert('Post created successfully!');
      })
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" name="title" value={post.title} onChange={handleChange} required />
      </label>
      <label>Content:
        <textarea name="content" value={post.content} onChange={handleChange} required />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
