"use client";
import Form from '@/components/Form';
import CustomFileInput from '@/components/Form/FileInput';
import Input from '@/components/Form/Input';
import Submit from '@/components/Form/Submit';
import Textarea from '@/components/Form/Textarea';
import axios from 'axios';
import { useState } from 'react';

const WorkForm = () => {
    const [work, setWork] = useState({
        Title: "",
        Subtitle: "",
        PublishingYear: "",
        Description: ""
    });
    const [file, setFile] = useState({
        name: "",
        size: 0,
        type: "",
        lastModified: 0,
        lastModifiedDate: {},
    });

    const URL = `http://localhost:8080/works`;

    const handleChange = ({ target: { value, name } }) => setWork({ ...work, [name]: value });
    const handleFileChange = ({ target: { files } }) => {
        setFile(files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            if (isNaN(parseInt(work.PublishingYear))) {
                throw new Error("Publishing Year must be a number");
            }

            formData.append("image", file);
            formData.append("Title", work.Title);
            formData.append("Subtitle", work.Subtitle);
            formData.append("PublishingYear", work.PublishingYear);
            formData.append("Description", work.Description);
            const res = await axios.post(URL, formData);

            console.log(res)

            setWork({
                Title: "",
                Subtitle: "",
                PublishingYear: "",
                Description: "",
            });
            setFile({
                name: "",
                size: 0,
                type: "",
                lastModified: 0,
                lastModifiedDate: {},
            });
        } catch (error) {
            console.error(error.message)
        };
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">Work Form</h2>
            <Form handleSubmit={handleSubmit}>
                <Input name="Title" label="Title" value={work.Title} handleChange={handleChange} />
                <Input name="Subtitle" label="Subtitle" value={work.Subtitle} handleChange={handleChange} />
                <Input name="PublishingYear" label="Publishing Year" value={work.PublishingYear} handleChange={handleChange} />
                <Textarea name="Description" label="Description" value={work.Description} handleChange={handleChange} />
                <CustomFileInput label="Work cover" onChange={handleFileChange} fileName={file.name} />
                <div className="text-center">
                    <Submit>Save</Submit>
                </div>
            </Form>
        </>
    );
};

export default WorkForm;