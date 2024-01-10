const Textarea = ({ label, name, value, handleChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-purple-300 focus:outline-none"
        rows="4"
      />
    </div>
  );
};

export default Textarea;
