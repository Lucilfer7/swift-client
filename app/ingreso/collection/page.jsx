// pages/collection.jsx
"use client";
import Form from "@/components/Form";
import { useState, useEffect } from "react";

const CollectionPage = () => {
  const [name, setName] = useState("");
  const [publisherID, setPublisherID] = useState("");
  const [collection, setCollection] = useState({});
  const URL = `http://localhost:8080/collection`;
  const handleChange = ({ target: { name, value } }) =>
    setCollection({ ...collection, [name]: value });

  useEffect(() => {}, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí puedes enviar los datos al servidor (por ejemplo, mediante una API)

    try {
      const response = await fetch("/api/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, publisherID }),
      });

      if (response.ok) {
        console.log("Datos enviados exitosamente");
        // Puedes redirigir a otra página o realizar otras acciones después de enviar los datos
      } else {
        console.error("Error al enviar datos al servidor");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">
        Ingreso de Datos - Colecciones
      </h1>

      <Form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="publisherID"
            className="block text-sm font-medium text-gray-600"
          >
            ID de la editorial:
          </label>
          <input
            type="text"
            id="publisherID"
            name="publisherID"
            value={publisherID}
            onChange={(e) => setPublisherID(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Guardar Colección
        </button>
      </Form>
    </div>
  );
};

export default CollectionPage;
