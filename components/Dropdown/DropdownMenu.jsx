"useClint";
import DropdownItem from "./DropdownItem";

const DropdownMenu = ({dropdownRef, toggleDropdown}) => {
    return (
        <div
            ref={dropdownRef}
            onClick={toggleDropdown}
            className="absolute right-0 mt-2 bg-white shadow-md z-10"
        >
            <ul className="py-2">
                <DropdownItem name="author" />
                <DropdownItem name="books" />
                <DropdownItem name="collection" />
                <DropdownItem name="genre" />
                <DropdownItem name="publisher" />
                <DropdownItem name="work" />
            </ul>
        </div>
    );
};

export default DropdownMenu;