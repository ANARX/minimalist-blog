import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Post from "../../components/recent-posts/post";
import "./posts.scss";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("mocks/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);

  return (
    <section className="recent-posts-section">
      <h2 className="posts-header">OUR RECENT POSTS</h2>
      {posts.map((item, index) => {
        return (
          <Post
            content={item}
            className={`post-item post-${++index}`}
            key={uuid()}
          />
        );
      })}
    </section>
  );
}
