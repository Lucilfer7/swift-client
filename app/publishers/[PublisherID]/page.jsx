"use client";
import axios from 'axios';
import { useEffect, useState } from 'react'

const PublisherDetailPage = ({ params: { PublisherID } }) => {
    const URL = `http://localhost:8080/publisher/${PublisherID}`;
    const [publisher, setPublisher] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(URL);
            setPublisher(data);
            if (publisher) setLoading(false);
        }
        fetchData();
    }, []);
    return (
        <div className='w-full h-full flex flex-col'>
            {publisher.Name}
        </div>
    );
};

export default PublisherDetailPage;