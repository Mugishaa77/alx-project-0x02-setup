import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-600">Learn more about our project and goals here.</p>
      </main>
       <div className="p-6 space-x-4">
      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
    </div>
  );
};

export default About;

