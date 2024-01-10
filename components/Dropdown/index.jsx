"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
      <button
        onClick={toggleDropdown}
        className="text-white focus:outline-none bg-purple-600 hover:bg-purple-700 text-sm font-semibold py-2 px-4 rounded"
      >
        Ingresar datos
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 bg-white shadow-md z-10"
        >
          <ul className="py-2">
            <DropdownItem name="author" />
            <DropdownItem name="books" />
            <DropdownItem name="collection" />
            <DropdownItem name="cover" />
            <DropdownItem name="genre" />
            <DropdownItem name="publisher" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
