"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';

const CollectionsPage = () => {
    const URL = `http://localhost:8080/collection`;
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const {data} = await axios.get(URL);
                if (data) {
                    setCollections(data);
                };
            } catch (error) {
                console.error(error.message)
            };
        };
        fetchData();
    }, []);
    return (
        <div>
            <ul>
                {collections.map(collection => (
                    
                    <li key={collection.CollectionID}>
                        {collection.CollectionName} by {collection.PublisherName}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollectionsPage;