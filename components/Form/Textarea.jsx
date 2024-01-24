const Textarea = ({ label, name, value, handleChange }) => {
    return (
        <div className="relative my-4">
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-gray-300 appearance-none border-2 focus:outline-none focus:ring-0 focus:border-swift-purple-600 peer" placeholder=" "
                rows="4"
            />
            <label htmlFor={name} className="absolute text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-swift-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                {label}
            </label>
        </div>
    );
};

export default Textarea;
