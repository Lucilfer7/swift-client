export default function CustomFileInput({ label, onChange, fileName }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
        <span>Seleccionar archivo</span>
        <input type="file" className="hidden" onChange={onChange} />
      </label>
      {fileName && <p className="mt-2 text-gray-600">{fileName}</p>}
    </div>
  );
}
