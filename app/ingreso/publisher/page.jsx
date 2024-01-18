"use client";
import { useState } from "react";
import axios from "axios";

const PublisherForm = () => {
  const [publisher, setPublisher] = useState({
    name: "",
    country: "",
  });

  const URL = "http://localhost:8080/publisher";

  const handleChange = ({ target: { name, value } }) =>
    setPublisher({ ...publisher, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza una petición POST al servidor para guardar los datos en la base de datos.
    try {
      const res = await axios.post(URL, publisher);
      console.log(res);

      setPublisher({ name: "", country: "" });
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <div>
      <h2 className="ml-2 text-xl font-bold mb-4">Formulario de Editorial</h2>
      <form
        className="p-4 m-auto max-w-xl border rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Nombre de la Editorial:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={publisher.name}
            onChange={handleChange}
            className="mt-1 mb-4 p-2 w-full border rounded-md focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="country"
          >
            País de la Editorial:
          </label>
          <input
            type="text"
            name="country"
            id="country"
            value={publisher.country}
            onChange={handleChange}
            className="mt-1 mb-4 p-2 w-full border rounded-md focus:ring focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <button
          className="bg-purple-500 text-white w-full p-2 rounded-md hover:bg-purple-600"
          type="submit"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default PublisherForm;
