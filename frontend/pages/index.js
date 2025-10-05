// frontend/pages/index.js
import { useEffect, useState } from "react";
import { fetchPosts } from "../lib/fetchPosts";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => {
      if (data) setPosts(data.posts);
    });
  }, []);

  return (
    <div>
      <h1>Posts Feed</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

