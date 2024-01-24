import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline'; // Importa el ícono de la flecha hacia abajo

const Picklist = ({ isOpen, setIsOpen, publishers, selectedOption, placeholder, handleOptionClick }) => {

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex justify-between items-center w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-300"
            >
                <span className="mr-2">{selectedOption ? selectedOption.Name : placeholder}</span>
                <ChevronDownIcon className="h-5 w-5" />
            </button>

            {isOpen && (
                <ul className="absolute z-10 mt-2 bg-white border rounded-md shadow-md">
                    {publishers.map((publisher) => (
                        <li
                            key={publisher.PublisherID}
                            onClick={() => handleOptionClick(publisher)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        >
                            {publisher.Name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Picklist;
