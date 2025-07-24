import Header from "../components/layout/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-600">This is the main landing page of the application.</p>
      </main>
    </div>
  );
};

export default Home;
