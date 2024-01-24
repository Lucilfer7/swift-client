const Form = ({ children, handleSubmit }) => {
    return (
        <form
            onSubmit={handleSubmit}
            className="p-4 w-full m-auto"
            encType="multipart/form-data"
        >
            {children}
        </form>
    );
};

export default Form;