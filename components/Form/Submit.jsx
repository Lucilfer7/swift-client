import React from "react";

const Submit = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-purple-500 text-white w-full p-2 rounded-md hover:bg-purple-600"
    >
      {children}
    </button>
  );
};

export default Submit;
