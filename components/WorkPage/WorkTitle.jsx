import React from 'react';

const WorkTitle = ({ title, subtitle, publishingYear }) => {
    return (
        <>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">{title} ({publishingYear})</h2>
            <h3 className="text-xl font-semibold text-gray-600 mb-2 italic">{subtitle}</h3>
        </>
    );
};

export default WorkTitle;