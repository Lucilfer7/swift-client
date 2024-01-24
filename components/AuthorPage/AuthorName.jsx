const AuthorName = ({name, lastName}) => {
    return (
        <h1 className={`text-5xl mb-4 text-center font-extrabold italic`}>
            {name} {lastName}
        </h1>
    );
};

export default AuthorName;