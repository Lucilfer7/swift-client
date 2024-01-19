"use client";
import React, { useState } from "react";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Submit from "@/components/Form/Submit";
import axios from "axios";

const GenreForm = () => {
  const [genre, setGenre] = useState({Name: ""})
  
  const URL = "http://localhost:8080/genre";

  const handleChange = ({target: {name, value}}) => setGenre({...genre, [name]: value});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = axios.post(URL, genre);
      console.log(res)
      setGenre({Name: ""});
    } catch (error) {
      console.error("Error al procesar la solicitud:", error)
    }
    
  }

  return (
    <div>
      <h2 className="ml-2 text-xl font-bold mb-4">Formulario de Género</h2>
      <Form handleSubmit={handleSubmit}>
        <Input
          name="Name"
          value={genre.Name}
          handleChange={handleChange}
          label="Género"
        />
        <Submit>Guardar</Submit>
      </Form>
    </div>
  );
};

export default GenreForm;
