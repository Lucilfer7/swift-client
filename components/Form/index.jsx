export default function Form({ children, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 m-auto max-w-xl border rounded-md"
      encType="multipart/form-data"
    >
      {children}
    </form>
  );
}
