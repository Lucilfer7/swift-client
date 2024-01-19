import Dropdown from "../Dropdown";
import Link from "next/link";
import { tangerine } from "@/app/layout";
import NavRoutes from "./NavRoutes";

const Navbar = () => {
  return (
    <nav className="bg-swift-purple-50 py-4 border border-swift-purple-200 border-opacity-70 shadow-sm shadow-swift-purple-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className={`${tangerine.className} logo text-swift-purple-800 text-5xl font-extrabold`} >
          <Link href="/">Swift</Link>
        </div>
        <NavRoutes />
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
