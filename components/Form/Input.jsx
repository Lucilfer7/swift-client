import React from "react";

const Input = ({ name, value, handleChange, label }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-purple-300 focus:outline-none"
      />
    </div>
  );
};

export default Input;
