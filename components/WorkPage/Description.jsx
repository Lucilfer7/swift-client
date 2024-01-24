import React from 'react';

const Description = ({ description }) => {
    return (
        <div className='pt-5 text-justify'>
            
            {
                description.split("\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700 pb-4">
                        {paragraph}
                    </p>
                ))
            }
        </div>
    );
};

export default Description;
