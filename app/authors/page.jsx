"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListAuthor from "@/components/ListAuthor";

const URL = "http://localhost:3000/author";

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
      <div className="mt-4 flex items-center justify-center">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`mx-2 px-4 py-2 mb-4 ${
                page === currentPage
                  ? "bg-gray-600 text-white shadow-md"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              } transition-all duration-300 ease-in-out rounded-md`}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default AuthorsPage;
