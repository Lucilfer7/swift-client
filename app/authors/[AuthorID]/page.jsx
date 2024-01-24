"use client";
import AuthorPage from "@/components/AuthorPage";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const AuthorDetailPage = ({ params: { AuthorID } }) => {
    const URL = `http://localhost:8080/author/${AuthorID}`;
    const [works, setWorks] = useState([]);
    const [author, setAuthor] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const { data: {Author, Works} } = await axios.get(URL);
            setAuthor(Author);
            setWorks(Works)
            if (author) setLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!author) return <p>No author's data</p>;

    return (
        <div className="bg-white px-8 py-4 w-full h-full flex flex-col">
            <p><Link href="/">Home</Link> / <Link href="/authors">Authors</Link> / {author.Name} {author.LastName}</p>
            <AuthorPage author={author} works={works} />
        </div>
    );
};

export default AuthorDetailPage;
