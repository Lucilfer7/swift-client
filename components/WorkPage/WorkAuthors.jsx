import Link from 'next/link';
import React from 'react';

const WorkAuthors = ({ authorsAndRoles }) => {
    return (
        <>
            {authorsAndRoles && authorsAndRoles.length > 0 ? (
                <h2 className="inline">
                    {authorsAndRoles.map((author, index) => (
                        <React.Fragment key={author.AuthorID}>
                            {index > 0 && ', '}
                            <Link href={`/authors/${author.AuthorID}`} className="text-gray-700 hover:underline">
                                {`${author.AuthorFullName} (${author.RoleName})`}
                            </Link>
                        </React.Fragment>
                    ))}
                </h2>
            ) : (
                <p className="text-gray-500">No authors available</p>
            )}
        </>
    );
};

export default WorkAuthors;
