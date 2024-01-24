const AuthorSelection = ({ authors, searchTerm, handleAuthorChange }) => {
    return (
        <select
            onChange={handleAuthorChange}
            multiple
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
            size="8"
        >
            {authors
                .filter((author) => {
                    const fullName = `${author.Name} ${author.LastName}`;
                    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
                })
                .map((author) => (
                    <option key={author.AuthorID} value={author.AuthorID}>
                        {author.Name} {author.LastName}
                    </option>
                ))}
        </select>
    );
};

export default AuthorSelection;
