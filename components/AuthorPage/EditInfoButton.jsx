import Link from 'next/link'
import React from 'react'

const EditInfoButton = ({ authorID }) => {
    return (
        <div className='pt-6'>
            <Link
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                href={`/authors/edit/${authorID}`}
            >
                Editar información
            </Link>
        </div>
    );
};

export default EditInfoButton;