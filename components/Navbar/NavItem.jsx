import Link from "next/link";

const NavItem = ({ route }) => {
    return (
        <li className="font-semibold text-swift-purple-500 hover:text-swift-purple-600 active:text-swift-purple-900">
            <Link href={`/${route.toLowerCase()}`}>{route}</Link>
        </li>
    )
}

export default NavItem