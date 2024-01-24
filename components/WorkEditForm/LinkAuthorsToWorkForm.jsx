import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import AuthorSearchInput from './AuthorSearchInput';
import AuthorSelection from './AuthorSelection';
import SelectedAuthorsList from './SelectedAuthorsList';

// ! Siguiente paso: Mostrar los autores que ya tiene el work.

const LinkAuthorsToWorkForm = ({ authorCountMap, setAuthorCountMap, selectedAuthors, setSelectedAuthors }) => {
    const [authors, setAuthors] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [roles, setRoles] = useState([]);
    const [selectedRolesMap, setSelectedRolesMap] = useState({});

    const URL = `http://localhost:8080`;

    useEffect(() => {
        async function fetchData() {
            try {
                const [authorsResponse, rolesResponse] = await Promise.all([
                    axios.get(`${URL}/author`),
                    axios.get(`${URL}/roles`),
                ]);
                setAuthors(authorsResponse.data);
                setRoles(rolesResponse.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const handleAuthorChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions);
        const selectedAuthorIds = selectedOptions.map((option) => parseInt(option.value));

        const newAuthorCountMap = { ...authorCountMap };
        const newSelectedAuthors = [];

        selectedAuthorIds.forEach((authorId) => {
            const authorCount = (newAuthorCountMap[authorId] || 0) + 1;

            if (authorCount <= 3) {
                newAuthorCountMap[authorId] = authorCount;
                newSelectedAuthors.push(authorId);
            } else {
                console.log(`No se puede agregar más el autor con ID ${authorId}. Ya ha sido seleccionado tres veces.`);
            }
        });

        setAuthorCountMap(newAuthorCountMap);
        setSelectedAuthors((prevSelectedAuthors) => [...prevSelectedAuthors, ...newSelectedAuthors]);
        event.target.selectedIndex = -1;
    };

    const handleRemoveAuthorFromSelectionList = (index) => {
        setSelectedAuthors((prevSelectedAuthors) => {
            const newSelectedAuthors = [...prevSelectedAuthors];
            const removedAuthorId = newSelectedAuthors.splice(index, 1)[0];
            setAuthorCountMap((prevAuthorCountMap) => {
                const newAuthorCountMap = { ...prevAuthorCountMap };
                newAuthorCountMap[removedAuthorId] = (newAuthorCountMap[removedAuthorId] || 0) - 1;
                return newAuthorCountMap;
            });
            return newSelectedAuthors;
        });
    };

    const handleRoleChange = (authorId, roleId) => {
        setSelectedRolesMap(prevRolesMap => ({
            ...prevRolesMap,
            [authorId]: {
                ...prevRolesMap[authorId],
                [roleId]: !prevRolesMap[authorId]?.[roleId], // Toggle the role
            },
        }));
    };

    return (
        <div className='w-full flex flex-col px-5 py-2'>
            <h3 className="text-2xl font-semibold mb-4 text-swift-purple-800">Link Authors to Work</h3>
            <AuthorSearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <AuthorSelection authors={authors} searchTerm={searchTerm} handleAuthorChange={handleAuthorChange} />
            <SelectedAuthorsList
                selectedAuthors={selectedAuthors}
                authors={authors} roles={roles}
                selectedRolesMap={selectedRolesMap}
                handleRoleChange={handleRoleChange}
                handleRemoveAuthorFromSelectionList={handleRemoveAuthorFromSelectionList}
            />
        </div>
    );
};

export default LinkAuthorsToWorkForm;
