const FormLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-gradient-to-l from-swift-purple-400 to-dark-blue-500 p-8 shadow-md flex items-center justify-center min-h-screen w-1/2">
                <h2 className="text-3xl font-bold text-white"></h2>
            </div>
            <div className="bg-white p-8 rounded-md shadow-md w-1/2">
                {children}
            </div>
        </div>
    );
};

export default FormLayout;