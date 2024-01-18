import React from 'react'

const Pagination = ({ currentPage, setCurrentPage, totalPages, }) => {
    
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="mt-4 flex items-center justify-center">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`mx-2 px-4 py-2 mb-4 ${page === currentPage
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                            } transition-all duration-300 ease-in-out rounded-md`}
                    >
                        {page}
                    </button>
                )
            )}
        </div>
    )
}

export default Pagination