"use client";
import Form from "@/components/Form";
import Input from "@/components/Form/Input";
import Picklist from "@/components/Form/Picklist";
import Submit from "@/components/Form/Submit";
import axios from "axios";
import { useState, useEffect } from "react";

const CollectionPage = () => {
    const [name, setName] = useState("");
    const [publishers, setPublishers] = useState([]);


    const [isOpen, setIsOpen] = useState(false);
    const [collection, setCollection] = useState({
        Name: "",
        publisherID: 0
    });
    const URL = `http://localhost:8080/collection`;

    const handleChange = ({ target: { name, value } }) =>
        setCollection({ ...collection, [name]: value });

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get("http://localhost:8080/publisher");

                if (data) {
                    setPublishers(data)
                };
            } catch (error) {
                console.error(error.message)
            };
        };
        fetchData();
    }, []);

    const handleSelect = (selectedOption) => setCollection({ ...collection, publisherID: selectedOption.PublisherID })

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (publisher) => {
        setSelectedOption(publisher);
        handleSelect(publisher);
        setIsOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(URL, collection);
            console.log(res)
        } catch (error) {
            console.error(error.message)
        };
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">
                Ingreso de Datos - Colecciones
            </h1>

            <Form handleSubmit={handleSubmit} className="max-w-md">
                <Input
                    handleChange={handleChange}
                    value={collection.Name}
                    name="Name"
                    label="Name"
                />
                <Picklist
                    publishers={publishers}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedOption={selectedOption}
                    placeholder="Seleccionar opción"
                    handleOptionClick={handleOptionClick}
                />

                <Submit>Guardar Colección</Submit>
            </Form>
        </div>
    );
};

export default CollectionPage;
