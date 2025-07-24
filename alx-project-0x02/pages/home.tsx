import React from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
  <div>
    <Header/>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card 
        title="Welcome to ALX Project" 
        content="This is your starting point for building amazing things." 
      />
      <Card 
        title="Reusable Components" 
        content="You can pass different titles and content to this Card component." 
      />
      <Card 
        title="Dynamic UI" 
        content="Easily scale your UI by reusing the Card component wherever needed." 
      />
    </div>
  </div>
  );
};

export default Home;

