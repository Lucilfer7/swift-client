"use client";
import List from '@/components/List';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListItem from '@/components/List/ListItem'

const URL = `http://localhost:8080/publisher`;

const PublishersPage = () => {
    const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(URL);
                if (data) {
                    setPublishers(data);
                } else {
                    console.error("La respuesta del servidor no contiene datos válidos");
                };
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <List list={publishers} listType="publishers" idField="PublisherID" />
        </div>
    );
};

export default PublishersPage;