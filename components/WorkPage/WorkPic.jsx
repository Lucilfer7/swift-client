import React from 'react';

const WorkPic = ({ imagePath, title }) => {
    return (
        <div className="flex pb-4">
            <img
                src={`http://localhost:8080/images/works/${imagePath}`}
                alt={title}
                title={title}
                className="h-96 w-64 mx-auto object-fit rounded-bl-lg rounded-tr-lg border border-black shadow-md"
            />
        </div>
    );
};

export default WorkPic;