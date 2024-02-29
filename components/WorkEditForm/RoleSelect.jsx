import React from 'react';

const RoleSelect = ({ authorId, roles, selectedRole, handleRoleChange, className }) => {
    return (
        <>
            {roles.length > 0 ? (
                <>
                    <select
                        onChange={(e) => handleRoleChange(authorId, e.target.value)}
                        value={selectedRole}
                        className={`block py-2.5 px-0 w-full text-sm outline-none text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none focus:ring-0 focus:border-gray-200 peer ${className}`}
                    >
                        <option value="" hidden>Select a Role</option>
                        {
                            roles.map((role) => (
                                <option key={role.RoleID} value={role.RoleID} className="text-gray-800 p-6">
                                    {role.RoleName}
                                </option>
                            ))
                        }
                    </select>
                </>
            ) : (
                <p className="text-gray-500 font-italic">Loading roles...</p>
            )}
        </>
    );
};

export default RoleSelect;
