const Submit = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-swift-purple-700 text-white w-full p-2 rounded-md hover:bg-swift-purple-600"
        >
            {children}
        </button>
    );
};

export default Submit;
