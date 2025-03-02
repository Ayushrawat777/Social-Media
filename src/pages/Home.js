import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postSlice";
import { Link } from "react-router-dom";
import img from "../images/next.png";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Filter posts based on search input
  const filteredPosts = data.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Social Media For Travellers</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search here..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
      />
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.slice(0, 6).map((post) => (
            <div key={post.id} className="post-card">
              <img
                src={`https://picsum.photos/300/200?random=${post.id}`}
                alt="Post"
              />
              <h2>{post.title}</h2>
              <div className="details">
                <p>
                  {post.body.substring(0, 100)}...
                  <Link to={`/Social-Media/item/${post.id}`} className="read-more">
                    Read more
                  </Link>
                </p>
                <Link to={`/Social-Media/item/${post.id}`}>
                  <button className="next-button">
                    <img src={img} alt="Next" />
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p> // Show message if no matches
        )}
      </div>
    </div>
  );
};

export default Home;
