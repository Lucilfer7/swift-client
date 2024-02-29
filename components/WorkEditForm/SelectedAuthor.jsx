import RoleSelect from "./RoleSelect";

const SelectedAuthor = ({ selectedAuthor, selectedRolesMap, authorId, handleRoleChange, handleRemoveAuthorFromSelectionList, index, roles }) => {
    return (
        <li className='flex flex-row items-center bg-white border rounded-lg p-4 mb-4 shadow-md'>
            <label className='w-2/3 text-gray-800 font-semibold'>
                {selectedAuthor.Name} {selectedAuthor.LastName}
            </label>
            <RoleSelect
                authorId={authorId}
                roles={roles}
                selectedRolesMap={selectedRolesMap[authorId]}
                handleRoleChange={handleRoleChange}
                className='ml-4'
            />
            <button
                className='text-red-500 ml-4 hover:text-red-700 cursor-pointer'
                onClick={() => handleRemoveAuthorFromSelectionList(index)}
            >
                ❌
            </button>
        </li>
    );
};

export default SelectedAuthor;