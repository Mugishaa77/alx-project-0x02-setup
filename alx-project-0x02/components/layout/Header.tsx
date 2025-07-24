import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-lg font-bold">My App</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>

         <Link href="/posts" className="hover:underline">
          Posts
        </Link>

        <Link href="/users" className="hover:underline">
          Users
          </Link>

        
      </nav>
    </header>
  );
};

export default Header;
