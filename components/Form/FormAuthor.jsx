"use client";
import Form from ".";
import FileInput from "./FileInput";
import Input from "./Input";
import Submit from "./Submit";
import Textarea from "./Textarea";
import { useState } from "react";

const FormAuthor = ({
  handleSubmit,
  handleChange,
  author,
  handleFileChange,
  fileName,
}) => {
  return (
    <Form handleSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        value={author.Name}
        name="Name"
        label="Nombre"
      />
      <Input
        handleChange={handleChange}
        value={author.LastName}
        name="LastName"
        label="Apellido"
      />
      <Textarea
        label="Descripción"
        name="Description"
        value={author.Description}
        handleChange={handleChange}
      />
      <FileInput
        label="Imagen del autor"
        fileName={fileName}
        onChange={handleFileChange}
      />
      <Submit>Guardar</Submit>
    </Form>
  );
};

export default FormAuthor;
