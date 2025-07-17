import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useStore from '../store';

function NewPost() {
  const { postID } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [tags, setTags] = useState('');

  const updatePost = useStore((state) => state.postSlice.updatePost);
  const createPost = useStore((state) => state.postSlice.createPost);
  const navigate = useNavigate();
  const fetchPost = useStore((state) => state.postSlice.fetchPost);
  const post = useStore((state) => state.postSlice.current);

  useEffect(() => {
    if (postID) {
      const loadPost = async () => {
        await fetchPost(postID);
      };
      loadPost();
    } else {
      setTitle('');
      setTags('');
      setContent('');
      setCoverUrl('');
    }
  }, [postID, fetchPost]);

  useEffect(() => {
    if (postID && post) {
      setTitle(post.title || '');
      setContent(post.content || '');
      setCoverUrl(post.coverUrl || '');
      setTags(post.tags || '');
    }
  }, [postID, post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      title, tags, content, coverUrl,
    };
    if (postID) {
      await updatePost(postID, postData);
    } else {
      await createPost(postData);
    }

    navigate('/');
  };

  return (
    <div className="entireForm">
      <h1>{postID ? 'Edit Post' : 'New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
        <input type="text" placeholder="Cover URL" value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} required />
        <button className="submit" type="submit">{postID ? 'Update Post' : 'Create Post'}</button>
      </form>
    </div>
  );
}

export default NewPost;
