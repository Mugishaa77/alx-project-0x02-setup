import Header from "../components/layout/Header";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600">Learn more about our project and goals here.</p>
      </main>
    </div>
  );
};

export default About;
