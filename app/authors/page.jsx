"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListAuthor from "@/components/ListAuthor";
import Pagination from "@/components/Pagination";

const URL = "http://localhost:8080/author";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const [totalAuthors, setTotalAuthors] = useState(0); // Asegúrate de agregar esto
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [authorsPerPage, setAuthorsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      try {
        if (
          isNaN(currentPage) ||
          isNaN(authorsPerPage) ||
          currentPage <= 0 ||
          authorsPerPage <= 0
        ) {
          console.error("Valores de página no válidos");
          setLoading(false);
          return;
        }

        const { data } = await axios.get(
          `${URL}?page=${currentPage}&perPage=${authorsPerPage}`
        );

        if (data && data.authors && data.totalAuthors) {
          setAuthors(data.authors);
          setTotalAuthors(data.totalAuthors);
          setLoading(false);
        } else {
          console.error("La respuesta del servidor no contiene datos válidos");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching authors:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, [currentPage, authorsPerPage]);

  const handleAuthorsPerPageChange = ({ target: { value } }) => {
    setAuthorsPerPage(value);
    setCurrentPage(1);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!Array.isArray(authors) || authors.length === 0) {
    console.error("La respuesta del servidor no contiene datos válidos");
    return <p>No authors data</p>;
  }

  const totalPages = Math.ceil(totalAuthors / authorsPerPage);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Authors</h1>
      <div className="mt-4 flex items-center">
        <label className="mr-2" htmlFor="authorsPerPage">
          Show
        </label>
        <select
          id="authorsPerPage"
          onChange={handleAuthorsPerPageChange}
          value={authorsPerPage}
          className="mr-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
        </select>
        <span className="mr-2">authors per page</span>
      </div>

      <ListAuthor authors={authors} />
      <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default AuthorsPage;
