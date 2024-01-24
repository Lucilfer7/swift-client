import React from "react";
import Link from "next/link";
import Image from "next/image";

const ListItem = ({ href, imageSource, label, alt }) => {
    return (
        <Link className="flex flex-col group w-1/6 h-1/6 m-4 bg-white border shadow-md duration-300 ease-in-out hover:shadow-purple-300 rounded-xl overflow-hidden hover:shadow-lg transition" href={href}>
            <li>
                <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                    <img
                        loading="lazy"
                        src={imageSource}
                        alt={alt}
                        className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                    />
                </div>
                <div className="p-4 md:p-5 text-center">
                    <h3 className="text-lg font-bold text-gray-800">
                        {label}
                    </h3>
                </div>
            </li>
        </Link>
    );
};

export default ListItem;
