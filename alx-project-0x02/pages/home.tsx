import React, { useState } from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";

const Home: React.FC = () => {
  const [cards, setCards] = useState([
    {
      title: "Welcome to ALX Project",
      content: "This is your starting point for building amazing things.",
    },
    {
      title: "Reusable Components",
      content: "You can pass different titles and content to this Card component.",
    },
    {
      title: "Dynamic UI",
      content: "Easily scale your UI by reusing the Card component wherever needed.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setCards((prevCards) => [...prevCards, { title, content }]);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        {/* Add New Post Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Add New Post
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        {/* Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </div>
    </div>
  );
};

export default Home;
