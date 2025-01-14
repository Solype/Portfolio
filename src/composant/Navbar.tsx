import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white shadow-md z-50">
      <nav>
        <ul className="flex justify-around items-center p-4">
          <li className="hover:bg-gray-700 rounded-md px-4 py-2">
            <Link to="/" className="text-lg">Home</Link>
          </li>
          <li className="hover:bg-gray-700 rounded-md px-4 py-2">
            <Link to="/about" className="text-lg">About</Link>
          </li>
          <li className="hover:bg-gray-700 rounded-md px-4 py-2">
            <Link to="/projects" className="text-lg">Projects</Link>
          </li>
          <li className="hover:bg-gray-700 rounded-md px-4 py-2">
            <Link to="/contact" className="text-lg">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
