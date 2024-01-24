import React from 'react'

const WorkLayout = ({children}) => {
    return (
        <div className="bg-white px-8 py-4 w-full h-full flex flex-col">
            {children}
        </div>
    );
};

export default WorkLayout;