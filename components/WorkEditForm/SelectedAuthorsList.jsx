import RoleSelect from "./RoleSelect";

const SelectedAuthorsList = ({ selectedAuthors, authors, roles, selectedRolesMap, handleRoleChange, handleRemoveAuthorFromSelectionList }) => {
    return (
        <div className='w-full'>
            {selectedAuthors.length > 0 && (
                <>
                    <p className='text-left w-full'>Selected Authors:</p>
                    <ul>
                        {selectedAuthors.map((authorId, index) => {
                            const selectedAuthor = authors.find((author) => author.AuthorID === authorId);

                            return (
                                <li className='flex flex-row' key={index}>
                                    <label className='w-1/2'>{selectedAuthor.Name} {selectedAuthor.LastName}</label>
                                    <RoleSelect
                                        authorId={authorId}
                                        roles={roles}
                                        selectedRolesMap={selectedRolesMap[authorId]}
                                        handleRoleChange={handleRoleChange}
                                    />
                                    <label onClick={() => handleRemoveAuthorFromSelectionList(index)}>Ⅹ</label>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SelectedAuthorsList;
