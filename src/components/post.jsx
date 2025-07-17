import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import useStore from '../store';

function Post() {
  const navigate = useNavigate();
  const { postID } = useParams();
  const fetchPost = useStore((state) => state.postSlice.fetchPost);
  const post = useStore((state) => state.postSlice.current);
  const deletePost = useStore(({ postSlice }) => postSlice.deletePost);

  useEffect(() => {
    useStore.setState((state) => ({
      postSlice: { ...state.postSlice, current: {} },
    }));

    fetchPost(postID);
  }, [postID, fetchPost]);

  if (!post || Object.keys(post).length === 0) return <div>Loading...</div>;

  return (
    <div className="individualPost">
      <div className="header">
        <h1 className="postTitle">{post.title}</h1>
        <button className="edit" label="edit" type="button" onClick={(e) => { e.stopPropagation(); navigate(`/edit/${post._id}`); }}>  <i className="ri-edit-box-fill" /> </button>
      </div>
      <div className="content">
        {post.coverUrl && <img src={post.coverUrl} alt={post.title} style={{ width: '200px' }} />}

        <div>
          <p>{post.content}</p>
          <div className="allTags">
            {post.tags && post.tags.split(',').map((tag, index) => {
            // eslint-disable-next-line react/no-array-index-key
              return <p key={index}>{tag}</p>;
            })}
          </div>
          <div className="content">
            <button className="delete" type="button" label="delete" onClick={(e) => { deletePost(post._id); navigate('/'); }}> <i className="ri-delete-bin-7-fill" /> </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
