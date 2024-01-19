"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const AuthorPage = ({AuthorID}) => {
    const URL = `http://localhost:8080/author/${AuthorID}`;
    const [author, setAuthor] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(URL);
            setAuthor(data);
            if (author) setLoading(false);
        }
        fetchData();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!author) return <p>No author's data</p>;
    const descriptionParagraphs = author.Description.split("\n").map(
        (paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4">
                {paragraph}
            </p>
        )
    );
    return (
        <div className="bg-white shadow-md rounded px-8 py-4">
            <div className="mb-4">
                <img
                    src={`http://localhost:8080/images/authors/${author.ImagePath}`} // Reemplaza con la URL de la foto de perfil del autor
                    alt={`${author.Name} ${author.LastName}`}
                    className="w-48 h-48 rounded-full mx-auto object-cover" // Tamaño y estilo de la imagen
                />
            </div>
            <h1 className={`text-4xl mb-4 text-center font-extrabold`}>
                {author.Name} {author.LastName}
            </h1>
            {descriptionParagraphs}
            <Link
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                href={`/authors/edit/${author.AuthorID}`}
            >
                Editar información
            </Link>
            <Link
                className="text-blue-500 hover:underline mt-4 block"
                href="/authors"
            >
                Volver a la lista de autores
            </Link>
        </div>
    )
}

export default AuthorPage