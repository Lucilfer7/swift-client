import Link from "next/link";

const DropdownItem = ({ name }) => {
    const str2 = name.charAt(0).toUpperCase() + name.slice(1);
    return (
        <Link href={`/ingreso/${name}`}>
            <li className="px-4 py-2 text-gray-800 hover:bg-blue-100 active:bg-blue-200 cursor-pointer">
                {str2}
            </li>
        </Link>
    );
};

export default DropdownItem;