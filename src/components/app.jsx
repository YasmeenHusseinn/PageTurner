import {
  BrowserRouter, Routes, Route,
} from 'react-router';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer } from 'react-toastify';
import Posts from './posts';
import NewPost from './NewPost';
import Post from './post';
import Nav from './nav';

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/new" element={<NewPost />} />
            <Route path="/posts/:postID" element={<Post />} />
            <Route path="/edit/:postID" element={<NewPost />} />
            <Route path="*" element={<div>post not found </div>} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
