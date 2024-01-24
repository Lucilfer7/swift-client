"use client";
import React, { useState, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu";
import DropdownButton from "./DropdownButton";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        };
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Agregar un event listener para cerrar el dropdown al hacer clic fuera de él
        document.addEventListener("mousedown", handleClickOutside);

        // Limpiar el event listener al desmontar el componente
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <DropdownButton toggleDropdown={toggleDropdown} />
            {isOpen && (
                <DropdownMenu dropdownRef={dropdownRef} toggleDropdown={toggleDropdown} />
            )}
        </div>
    );
};

export default Dropdown;