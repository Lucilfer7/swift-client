import React from 'react';

const RoleSelect = ({ authorId, roles, selectedRole, handleRoleChange }) => {
    return (
        <>
            {
                roles.length > 0 ? (
                    <select
                        onChange={(e) => handleRoleChange(authorId, e.target.value)}
                        value={selectedRole}
                        placeholder="Select a role..."
                        className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-4"
                    >
                        <option value="" hidden>Select a Role</option>
                        {roles.map((role) => (
                            <option key={role.RoleID} value={role.RoleID}>
                                {role.RoleName}
                            </option>
                        ))}
                    </select>
                ) : (
                    <p>Loading roles...</p>
                )
            }
        </>
    );
};

export default RoleSelect;
