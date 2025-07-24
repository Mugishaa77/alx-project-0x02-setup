import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { ApiPost } from "@/interfaces";



const Posts: React.FC = () => {
  const [posts, setPosts] = useState<ApiPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
   <>
    <Header />
     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          userId={post.userId}
          title={post.title}
          content={post.body}
        />
      ))}
    </div>
   </>
  );
};

export default Posts;
