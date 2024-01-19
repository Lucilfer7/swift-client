import React from 'react';
import Link from 'next/link';

const Error404 = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className='flex flex-col items-center'>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Uh-oh, there was a problem.</h1>
                <p className="text-lg text-gray-600 mb-8">We could not find the page you were looking for.</p>
                <img src="/error-image.png" alt="Error illustration" className="max-w-full mb-8" />
                <p className="text-lg text-gray-600 mb-8">Go back to the <Link href="/" className='text-swift-purple-700 hover:underline hover:text-swift-purple-800'>main page</Link>.</p>
            </div>
        </div>
    );
};

export default Error404;