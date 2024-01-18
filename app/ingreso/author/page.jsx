"use client";
import FormAuthor from "@/components/Form/FormAuthor";
import { useState } from "react";
import axios from "axios";

const AuthorFormPage = () => {
  const URL = "http://localhost:8080/author";
  const [file, setFile] = useState({
    name: "",
    size: 0,
    type: "",
    lastModified: 0,
    lastModifiedDate: {},
  });
  const [author, setAuthor] = useState({
    Name: "",
    LastName: "",
    Description: "",
  });

  const handleChange = ({ target: { name, value } }) =>
    setAuthor({ ...author, [name]: value });

  const handleFileChange = ({ target: { files } }) => {
    setFile(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    // Agrega los campos de autor a la instancia de FormData
    formData.append("Name", author.Name);
    formData.append("LastName", author.LastName);
    formData.append("Description", author.Description);

    try {
      if (!author.LastName) {
        throw new Error("El apellido es obligatorio");
      }

      const res = await axios.post(URL, formData);

      setAuthor({ Name: "", LastName: "", Description: "" });
      setFile({
        name: "",
        size: 0,
        type: "",
        lastModified: 0,
        lastModifiedDate: {},
      });
    } catch (error) {
      console.error("Error al crear al autor:", error.message);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Ingreso de datos del autor</h2>
      <FormAuthor
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        author={{
          Name: author.Name,
          LastName: author.LastName,
          Description: author.Description,
        }}
        fileName={author.ImagePath}
        handleFileChange={handleFileChange}
      />
    </div>
  );
};

export default AuthorFormPage;
