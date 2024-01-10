import React from "react";
import Link from "next/link";

const ListItem = ({ href, imageSource, label, alt }) => {
  return (
    <li className="w-1/6 h-1/6 p-4 text-center mx-1 my-1 border-gray-200 border-2 bg-white shadow-md rounded-xl transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-purple-300">
      <Link href={href} className="block relative overflow-hidden">
        <img
          loading="lazy"
          src={imageSource}
          alt={alt}
          className="object-cover w-full h-full rounded-sm"
        />
        <div className="px-4 py-2">
          <h3 className="text-md font-semibold">{label}</h3>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
