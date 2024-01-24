"use client";
import Form from ".";
import FileInput from "./FileInput";
import Input from "./Input";
import Submit from "./Submit";
import Textarea from "./Textarea";

const FormAuthor = ({ handleSubmit, handleChange, author, handleFileChange, fileName, }) => {
    return (
        <Form handleSubmit={handleSubmit}>
            <Input
                handleChange={handleChange}
                value={author.Name}
                name="Name"
                label="Name"
            />
            <Input
                handleChange={handleChange}
                value={author.LastName}
                name="LastName"
                label="Last Name"
            />
            <Textarea
                handleChange={handleChange}
                value={author.Description}
                name="Description"
                label="Description"
            />
            <FileInput
                onChange={handleFileChange}
                fileName={fileName}
                label="Author Image"
            />
            <Submit>Save</Submit>
        </Form>
    );
};

export default FormAuthor;
