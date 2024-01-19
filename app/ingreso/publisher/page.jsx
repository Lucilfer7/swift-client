"use client";
import { useState } from "react";
import axios from "axios";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Submit from "@/components/Form/Submit";

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
      <Form handleSubmit={handleSubmit}>
        <Input
          name="name"
          value={publisher.name}
          handleChange={handleChange}
          label="Nombre de la Editorial"
        />
        <Input
          name="country"
          value={publisher.country}
          handleChange={handleChange}
          label="País de la Editorial"
        />
        <Submit>Guardar</Submit>
      </Form>
    </div>
  );
};

export default PublisherForm;
