import RoleSelect from "./RoleSelect";
import SelectedAuthor from "./SelectedAuthor";

const SelectedAuthorsList = ({ selectedAuthors, authors, roles, selectedRolesMap, handleRoleChange, handleRemoveAuthorFromSelectionList }) => {
    return (
        <div className='w-full'>
            {selectedAuthors.length > 0 && (
                <>
                    <p className='text-left w-full'>Selected Authors:</p>
                    <ul>
                        {selectedAuthors.map((authorId, index) => {
                            const selectedAuthor = authors.find((author) => author.AuthorID === authorId);

                            return <SelectedAuthor index={index} key={index} selectedAuthor={selectedAuthor} roles={roles} selectedRolesMap={selectedRolesMap} handleRoleChange={handleRoleChange} handleRemoveAuthorFromSelectionList={handleRemoveAuthorFromSelectionList} />
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};

export default SelectedAuthorsList;
