"use client";
import axios from 'axios';
import { useEffect, useState } from 'react'
import List from '@/components/List';

const WorksHomePage = () => {
    const [worksList, setWorksList] = useState([]);
    const URL = `http://localhost:8080/works`

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(URL);

                if (!data) {
                    throw Error("There was an error")
                };

                setWorksList(data);
            } catch (error) {
                console.error(error.message)
            };
        };
        fetchData();
    }, [])

    return (
        <div className='w-full min-h-screen'>
            <List list={worksList} listType="works" idField="WorkID" />
        </div>
    );
};

export default WorksHomePage;