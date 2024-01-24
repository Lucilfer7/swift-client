import Dropdown from "../Dropdown";
import Link from "next/link";
import { tangerine } from "@/app/fonts";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <nav className="w-full bg-swift-purple-50 pt-3 border border-swift-purple-200 border-opacity-70 shadow-sm shadow-swift-purple-200 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className={`${tangerine.className} logo text-swift-purple-800 text-5xl font-extrabold`} >
                    <Link href="/">Swift</Link>
                </div>
                <Dropdown />
            </div>
            <div className="container mx-auto hidden md:flex justify-center items-center w-full">
                <NavLinks />
            </div>
        </nav>
    );
};

export default Navbar;
