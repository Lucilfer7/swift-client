import Dropdown from "./Dropdown";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-white text-2xl">
          <Link href="/">Swift</Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/authors">Authors</Link>
            </li>
          </ul>
        </div>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
