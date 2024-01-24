const DropdownButton = ({ toggleDropdown }) => {
    return (
        <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none bg-swift-purple-600 hover:bg-swift-purple-700 text-sm font-semibold py-2 px-4 rounded"
        >
            Ingresar datos
        </button>
    );
};

export default DropdownButton;