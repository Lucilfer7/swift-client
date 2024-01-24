const CustomFileInput = ({ label, onChange, fileName }) => {
    return (
        <div className="mb-4 relative">
            <label className="block mb-2 text-sm text-gray-900 font-bold" htmlFor="file_input">{label}</label>
            <input
                className="block w-full text-sm text-gray-500 border file:me-3 border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:bg-swift-purple-700 file:p-2 file:focus:outline-none file:outline-none file:border-none file:text-swift-purple-50 file:font-semibold file:px-3 file:cursor-pointer file:hover:bg-swift-purple-800"
                id="file_input"
                type="file"
                onChange={onChange}
            />
            {/*fileName && <p className="mt-2 text-gray-600">{fileName}</p>*/}
        </div>
    );
};

export default CustomFileInput;
