"use client";
import FormAuthor from "@/components/Form/FormAuthor";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditAuthor = ({ params }) => {
    const { AuthorID } = params; // Obtén el AuthorID de la URL

    const URL = `http://localhost:8080/author/${AuthorID}`;
    const router = useRouter();
    const [author, setAuthor] = useState({
        Name: "",
        LastName: "",
        Description: "",
        ImagePath: "",
    });
    const [file, setFile] = useState({
        name: "",
        size: 0,
        type: "",
        lastModified: 0,
        lastModifiedDate: {},
    });
    const handleFileChange = ({ target: { files } }) => {
        setFile(files[0]);
    };
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // Realiza una solicitud para obtener la información del autor según el AuthorID
        if (AuthorID) {
            async function fetchData() {
                const { data: { Author } } = await axios.get(URL);
                setAuthor(Author);
                if (author) setLoading(false);
            }
            fetchData();
        }
    }, [AuthorID]);

    const handleChange = ({ target: { name, value } }) => setAuthor({ ...author, [name]: value })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("AuthorID", AuthorID);
        formData.append("LastName", author.LastName);
        formData.append("Description", author.Description);
        formData.append("Name", author.Name)
        if (file.name !== "") {
            formData.append("image", file);
        } else {
            formData.append("ImagePath", author.ImagePath);
            console.log(author.ImagePath)
        }

        try {
            if (!author.LastName) {
                throw new Error("El apellido es obligatorio");
            }

            const res = await axios.put(URL, formData);

            setAuthor({ Name: "", LastName: "", Description: "", ImagePath: "" });
            setFile({ name: "", size: 0, type: "", lastModified: 0, lastModifiedDate: {}, });
            router.push(`/authors/${AuthorID}`);
        } catch (error) {
            console.error("Error al crear al autor:", error.message);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (!author || author.length === 0) return <p>No author data</p>;
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Editar datos del autor</h2>
            <FormAuthor
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                author={{
                    Name: author.Name,
                    LastName: author.LastName,
                    Description: author.Description,
                }}
                fileName={file.name != "" ? file.name : author.ImagePath}
                handleFileChange={handleFileChange}
            />
        </div>
    );
};

export default EditAuthor;
