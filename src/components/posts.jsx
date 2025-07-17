/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useStore from '../store';

function Posts(props) {
  const navigate = useNavigate();
  const all = useStore(({ postSlice }) => postSlice.all);
  const fetchAllPosts = useStore(({ postSlice }) => postSlice.fetchAllPosts);
  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

  const handleNavigation = (postID) => {
    navigate(`/posts/${postID}`);
  };

  return (
    <div>
      <h1 className="home_title"> Bookshelf </h1>
      <div className="allPosts">
        {all.map((post) => (
          <div className="postContainer"
            key={post._id}
            role="button"
            tabIndex={0}
            onClick={() => handleNavigation(post._id)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleNavigation(); }}
            style={{ cursor: 'pointer' }}
          >
            <img src={post.coverUrl} alt="cover" />
            <div className="allText">
              <h3>{post.title}</h3>
              <div className="allTags">
                {post.tags && post.tags.split(',').map((tag, index) => {
                // eslint-disable-next-line react/no-array-index-key
                  return <p key={index}>{tag}</p>;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
