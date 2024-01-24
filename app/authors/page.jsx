"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListAuthor from "@/components/ListAuthor";

const URL = "http://localhost:8080/author";
const AuthorsPage = () => {
    const [authors, setAuthors] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState("asc"); // Estado para controlar el orden de clasificación

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(URL);

                if (data) {
                    // Ordenar los autores alfabéticamente según la propiedad "Name" o el apellido si el nombre está vacío
                    const sortedAuthors = data.sort((a, b) => {
                        const nameA = a.Name || a.LastName; // Si el nombre está vacío, usa el apellido
                        const nameB = b.Name || b.LastName;

                        if (sortOrder === "asc") {
                            return nameA.localeCompare(nameB);
                        } else {
                            return nameB.localeCompare(nameA);
                        }
                    });

                    setAuthors(sortedAuthors);
                    setLoading(false);
                } else {
                    console.error("La respuesta del servidor no contiene datos válidos");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching authors:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, [sortOrder]); // Agrega sortOrder a la dependencia para que se ejecute cada vez que cambie

    const handleSortToggle = () => {
        // Cambia el orden de clasificación al hacer clic en el botón
        setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
    };

    if (isLoading) return <p>Loading...</p>;
    if (!Array.isArray(authors) || authors.length === 0) {
        console.error("La respuesta del servidor no contiene datos válidos");
        return <p>No authors data</p>;
    }

    return (
        <div className="px-6 py-2">
            <h1 className="text-3xl font-bold mb-4">Authors</h1>

            {/* Botón para cambiar el orden de clasificación */}
            <button onClick={handleSortToggle} className="mb-2">
                {sortOrder === "asc" ? "Ordenar Descendente" : "Ordenar Ascendente"}
            </button>

            <ListAuthor authors={authors} />
        </div>
    );
};

export default AuthorsPage;
