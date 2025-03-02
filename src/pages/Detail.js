import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import img from "../images/left.png";

const Detail = () => {
  const { data } = useSelector((state) => state.posts);
  const [showDetail, setShowDetail] = useState(true);
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.data.find((p) => p.id === Number(id))
  );

  if (!post) return <p>Post not found</p>;

  return (
    <div className="detail-container">
      <div className="single-detail">
        <Link to={`/Social-Media`}>
          <img src={img} alt="Next" />
        </Link>

        <h2>Post Number #{post.id}</h2>
      </div>
      <div className="single-detail-info">
        <div>
          <img src={`https://picsum.photos/600?random=${post.id}`} alt="Post" />
        </div>
        <div className="info">
          <div className="buttons">
            <button
              onClick={() => setShowDetail(true)}
              style={{
                color: showDetail ? "white" : "black",
                backgroundColor: showDetail ? "#f05a22" : "white",
               
              }}
            >
              Details
            </button>

            <button
              onClick={() => setShowDetail(false)}
              style={{
                color: !showDetail ? "white" : "black",
                backgroundColor: !showDetail ? "#f05a22" : "white",
                
              }}
            >
              User Info
            </button>
          </div>
          {/* Conditional Rendering */}
          {showDetail ? (
            <p>{post.body}</p> // Shows post details
          ) : (
            <p>Post Was Posted By {post.id}</p> // Shows user info
          )}
        </div>
      </div>

      <h2>More Posts</h2>
      <div className="grid">
        {data.slice(0, 6).map((post) => (
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
                </button>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
