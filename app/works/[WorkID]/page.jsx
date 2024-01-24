"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import WorkPage from '@/components/WorkPage';

const WorkDetailPage = ({ params }) => {
    const URL = `http://localhost:8080/works/full/${params.WorkID}`;
    const [work, setWork] = useState({});
    const [isLoading, setLoading] = useState(true);
    const workID = params.WorkID;
    
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(URL);
                setWork(data);
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Work data:', error);
                setLoading(false);
            };
        }; 

        fetchData();
    }, [URL]);

    if (isLoading) return <p>Loading...</p>;
    if (!work || Object.keys(work).length === 0) return <p>No Work data</p>;

    return (
        <div >
            <WorkPage work={work} workID={workID} />
        </div>
    );
};

export default WorkDetailPage;
