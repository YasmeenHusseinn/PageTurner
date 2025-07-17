// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import useStore from '../store';

// // import { useStore } from '../store/index';

// export default function SearchBar() {
//   const [query, setQuery] = useState('');
//   const searchPosts = useStore((state) => state.postSlice.searchPosts);

//   console.log('Search function from store:', searchPosts);
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       searchPosts(query);
//       navigate(`/search?query=${query}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSearch} className="flex gap-2 p-4">
//       <input
//         type="text"
//         placeholder="Search posts..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="border p-2 rounded-md w-full"
//       />
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//         Search
//       </button>
//     </form>
//   );
// }
